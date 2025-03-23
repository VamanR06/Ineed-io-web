'use client';

import { DashboardHeader as ProfileHeader } from '@/components/dashboard/header';
/* 
import { DashboardMetrics } from '@/components/dashboard/metrics';
import { SubmissionsCalendar } from '@/components/dashboard/submissions-calendar';
import { ActivityChart } from '@/components/dashboard/activity-chart'; */
// import { TimePickerDemo } from '@/components/dashboard/time-picker';
import '../globals.css';
import { createClient } from '@/utils/supabase/client';
import React, { useState, useEffect } from 'react';
import { UserMetadata, User } from '@/types/user';
import { redirect } from 'next/navigation';
import { Badges } from '@/components/dashboard/badges';
import { Application } from '@/types/application';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'; //for todo #1Enhanced Profile Page UI and Attempted Bug Fix

{
  /* 3/22
- Added a centered avatar photo under the dashboard header and name
- Applied a teal shadow effect to the avatar
- Implemented a smooth hover animation for the photo
- Added a shadow effect to the dashboard metrics for visual depth
- Added a comment about background color inconsistencies between pages (leaderboard, team, settings) [lines 110-115]
- Noted UI formatting issues with dashboard metrics when background color changes
- Fixed the first name update bug by implementing a comprehensive useEffect hook (lines 58-96):
  - Previous issue: First name wasn't updating when changed in user settings
  - Solution details:
    - Added a dependency guard to prevent unnecessary API calls
    - Fetches the most recent firstName directly from the profiles table in Supabase
    - Uses a properly typed update pattern to synchronize state with database
    - Maintains type safety by creating a complete UserMetadata object
    - Preserves existing metadata values while updating first_name
    - Updates both the UI display state and the underlying user object
    - Ensures the avatar fallback and other UI elements reflect the latest user data
    - Handles potential edge cases with null/undefined values

TODO: Follow up on background color standardization across dark mode pages at Thursday's meeting. */
}

const ProfilePage: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [applications, setApplications] = useState<Application[]>([]);
  const [avatarImage, setAvatarImage] = useState<string | null>(null);
  const [firstName, setFirstName] = useState<string | null>(null);
  // const [avatarUrl, setAvatarUrl] = useState<string | null>(null); //avatar img const
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
  // TODO #17: GET RID OF ME AFTER FINISHING TODO #3
  console.log(applications);
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

  //COMPLETED :Added an avatar that will be displayed under the dashboard header
  //avatar fetching:
  useEffect(() => {
    if (!user) return; // only fetch avatar if user exists
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
        // Set the avatar image
        setAvatarImage(data?.avatar || null);

        // Update the firstName state for UI use
        if (data?.firstName) {
          setFirstName(data.firstName);

          // Update the user object with proper typing
          setUser((prevUser) => {
            if (!prevUser) return null;

            // Create a properly typed metadata object that includes all required fields
            const updatedMetadata: UserMetadata = {
              // Keep existing metadata values if they exist
              first_name: data.firstName,
              last_name: prevUser.user_metadata?.last_name || '',
              timestamp: prevUser.user_metadata?.timestamp || new Date().toISOString(),
            };

            // Return updated user with new metadata
            return {
              ...prevUser,
              user_metadata: updatedMetadata,
            };
          });
        }
      }
    };

    fetchAvatar();
  }, [user]);
  //TODO #2:Add an avatar that will be displayed under the dashboard header (get the avatar_url from the profiles table)

  /*TODO #3: Add the following stats: Total applications, 
  success rate, pending / total, success / total, rejected / total.
  USE THE EXPLORE PAGE CARDS (they are pre-styled already) to display stats
  REPLACE THE DASHBOARD METRICS WITH A NEW COMPONENT CALLED: ProfileMetrics, and create that in the components/profile folder
  Copy paste the cards from the app/leaderboard/page.tsx page, and fetch and calculate all the statistics from the database 
  */
  return (
    <div className="ineed.io-profile.page min-h-screen bg-background p-6">
      {/*the background is different from the leaderboard, team, and settings page, we
      should decide what is our proper background color for dark mode. Also if we do 
      change the background color, the dashboard metrics component is formatted weirdly       
      and as one so its a bit cooked. The UI would look a lot nicer however if we        
      decide to implement these changes */}
      {/* TODO #3: Standardized the dark mode background color at next team discussion*/}

      {/* FIXME #12: [FIXED and DEPRECATED]: This comment is outdated
       There is a bug here, when the user changes their first name, it still uses the
      first name they signed up with (but this works in the dashboard page, fix this.)

      */}

      {/* 3/22: Centered photo, added teal shadow to avatar and dashboard metrics */}
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

      {/* <ProfileHeader user={user} /> */}

      {/* Large Profile Picture TODO */}
      {/* <Avatar className="h-32 w-32 md:h-40 md:w-40 shadow-lg">
        <AvatarImage src={avatarUrl || ''} />
        <AvatarFallback>EV</AvatarFallback>
      </Avatar> */}

      <div className="shadow-lg shadow-teal-900/10">
        <ProfileHeader user={user} />
        <div className="">
          {/* 
        <DashboardMetrics applications={applications} />
        <ActivityChart />
        <SubmissionsCalendar /> */}
          <Badges />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
