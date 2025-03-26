'use client';

import { DashboardHeader as ProfileHeader } from '@/components/dashboard/header';
import { DashboardMetrics as ProfileMetrics } from '@/components/dashboard/metrics';
import { Badges } from '@/components/dashboard/badges';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import '../globals.css';
import { createClient } from '@/utils/supabase/client';
import React, { useState, useEffect } from 'react';
import { UserMetadata, User } from '@/types/user';
import { Application } from '@/types/application';
import { redirect } from 'next/navigation';
import { motion } from 'framer-motion';

const fadeInVariants = { initial: { opacity: 0 }, animate: { opacity: 1 } };

const ProfilePage: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [applications, setApplications] = useState<Application[]>([]);
  const [avatarImage, setAvatarImage] = useState<string | null>(null);
  const [firstName, setFirstName] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const fetchUser = async () => {
        const supabase = await createClient();
        const { data, error } = await supabase.auth.getUser();
        if (error) {
          redirect('/');
        }
        setUser(data.user as User);
      };
      fetchUser();
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const client = createClient();
      const user = await client.auth.getUser();
      const { data, error } = await client
        .from('internships')
        .select('*')
        .eq('user_id', user.data.user?.id);
      if (error) {
        console.error('Error fetching data:', error);
      } else {
        setApplications(data);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (!user) return;
    const fetchAvatar = async () => {
      const supabase = await createClient();
      const { data, error } = await supabase
        .from('profiles')
        .select('avatar, firstName')
        .eq('id', user.id)
        .single();
      if (error) {
        console.error('Error fetching avatar:', error);
      } else {
        setAvatarImage(data?.avatar || null);
        if (data?.firstName) {
          setFirstName(data.firstName);
          setUser((prevUser) => {
            if (!prevUser) return null;
            const updatedMetadata: UserMetadata = {
              first_name: data.firstName,
              last_name: prevUser.user_metadata?.last_name || '',
              timestamp: prevUser.user_metadata?.timestamp || new Date().toISOString(),
            };
            return { ...prevUser, user_metadata: updatedMetadata };
          });
        }
      }
    };
    fetchAvatar();
  }, [user]);

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={fadeInVariants}
      transition={{ duration: 1, ease: 'easeInOut' }}
    >
      <div className="ineed.io-profile.page min-h-screen bg-background p-6">
        {/* TODO #2: Discuss and standardize dark mode background color across pages (profile, leaderboard, team, settings) at Thursday's meeting */}
        <div className="flex flex-col items-center">
          <ProfileHeader user={user} />
          <div className="mb-1"></div>
          <div className="group relative">
            <Avatar className="h-60 w-60 shadow-lg shadow-teal-500/50 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-teal-400/60">
              <AvatarImage src={avatarImage || ''} />
              <AvatarFallback>{firstName ? firstName.charAt(0) : 'U'}</AvatarFallback>
            </Avatar>
          </div>
        </div>
        <div className="shadow-lg shadow-teal-900/10">
          <div className="">
            <ProfileMetrics applications={applications} />
            <Badges />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProfilePage;
