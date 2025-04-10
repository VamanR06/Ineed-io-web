/*'use client';

import React, { useEffect } from 'react';
import { useParams, redirect } from 'next/navigation';
import { createClient } from '@/utils/supabase/client';
import '../../globals.css';

/* 
TODO #1 (Large TODO): This is going to be the profile page to view other users.
Essentially, a user can go to like /profile/123 (for now, we will refer to users by their unique id, later usernames)
The "123" portion is going to be a users UNIQUE ID. Essentially, this is what's going to happen
1. Grab the 123 out of the url (look into dynamic routing, one of the key features of next.js: https://nextjs.org/docs/pages/building-your-application/routing/dynamic-routes)
2. IF THE ID == CURRENTLY LOGGED IN USER.ID, REDIRECT TO /profile (shouldn't be able to view their own profile from a 3rd person view if that makes sense)
3. ELSE, Query the database to grab the user's information (similar to the profile page, without the profile header though)
4. When querying, remember that the "123" is the id, so only get the user with that "123" id
5. IF USER DOESN"T EXIST (error), then SAY USER WASN'T FOUND (don't worry about styliing for now, just functionality)
6. ELSE, display all their stats, like the app/profile/page.tsx, except WITHOUT THE PROFILE HEADER COMPONENT (which would say something like "Hello John")


Note: there is an issue, basically, an id is a uuid (universally unique identifier)
which is what uniquely identifies each user (for now, usernames will be later)
this is the "id" column in profiles basically
so when you are testing, FOR NOW
test /profiles/uuid, not /profiles/username
and remember that uuid is unique to each user...


const UserProfilePage: React.FC = () => {
  const params = useParams();
  const { id } = params;
  useEffect(() => {
    const fetchData = async () => {
      const client = createClient();
      const user = await client.auth.getUser();
      if (user.data.user?.id === id) {
        redirect('/profile');
      }
    };
    fetchData();
  }, [id]);
  return (
    <div className="ineed.io-profile.page min-h-screen bg-background p-6">
      User profile page (to be implemented)
    </div>
  );
};

export default UserProfilePage;*/

'use client';

import React, { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { DashboardMetrics as ProfileMetrics } from '@/components/dashboard/metrics';
import { Badges } from '@/components/dashboard/badges';
import { createClient } from '@/utils/supabase/client';
import { Application } from '@/types/application';
import '../../globals.css';
import { Profile } from '@/types/profile';

const fadeInVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

const UserProfilePage: React.FC = () => {
  const router = useRouter();
  const { id } = useParams();

  const [profile, setProfile] = useState<Profile | null>(null);
  const [applications, setApplications] = useState<Application[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const supabase = createClient();

        const {
          data: { user: currentUser },
          error: userError,
        } = await supabase.auth.getUser();
        if (userError) {
          console.error('Error fetching current user:', userError);
          return router.push('/');
        }
        if (!currentUser) {
          return router.push('/login');
        }

        if (currentUser.id === id) {
          return router.push('/profile');
        }

        const { data: profileData, error: profileError } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', id)
          .single();
        if (profileError || !profileData) {
          setError('User not found or error fetching profile.');
          return;
        }

        setProfile(profileData);

        const { data: applicationsData, error: appsError } = await supabase
          .from('internships')
          .select('*')
          .eq('user_id', id);
        if (appsError) {
          console.error('Error fetching user applications:', appsError);
        } else {
          setApplications(applicationsData || []);
        }
      } catch (err) {
        console.error('Unexpected error:', err);
        setError('An unexpected error occurred.');
      } finally {
        setLoading(false);
      }
    };

    fetchProfileData();
  }, [id, router]);

  if (loading) {
    return <div className="p-6">Loading...</div>;
  }

  if (error) {
    return <div className="p-6 text-red-500">{error}</div>;
  }

  const firstName = profile?.firstName ?? '';
  const lastName = profile?.lastName ?? '';
  const avatarImage = profile?.avatar ?? null;

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={fadeInVariants}
      transition={{ duration: 1, ease: 'easeInOut' }}
    >
      <div className="ineed.io-profile.page min-h-screen p-6">
        <div className="flex flex-col items-center">
          <div className="mb-1"></div>
          <div className="group relative">
            <Avatar className="mb-8 h-60 w-60 shadow-md shadow-primary">
              <AvatarImage src={avatarImage || ''} />
              <AvatarFallback>{firstName ? firstName.charAt(0) : 'U'}</AvatarFallback>
            </Avatar>
          </div>

          <h2 className="text-2xl font-semibold">
            {firstName} {lastName}
          </h2>
        </div>

        <div className="shadow-900/10 mt-6 shadow-lg">
          <ProfileMetrics applications={applications} />
          <div className="mb-8"></div>
          <Badges />
        </div>
      </div>
    </motion.div>
  );
};

export default UserProfilePage;
