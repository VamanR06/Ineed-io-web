'use client';

import { DashboardHeader } from '@/components/dashboard/header';
import { DashboardMetrics } from '@/components/dashboard/metrics';
import { ApplicationsTable } from '@/components/dashboard/applications-table';
import { NewApplicationForm } from '@/components/dashboard/new-application-form';
// import { TimePickerDemo } from '@/components/dashboard/time-picker';
import { createClient } from '@/utils/supabase/client';
import React, { useState, useEffect } from 'react';
import { Application } from '@/types/application';
import { useRouter } from 'next/navigation';
import { User } from '@supabase/supabase-js';
import { motion } from 'framer-motion';

const fadeInVariants = { initial: { opacity: 0 }, animate: { opacity: 1 } };

interface ProfileData {
  username: string;
  firstName: string;
}

const Dashboard = ({ user }: { user: User }) => {
  const [applications, setApplications] = useState<Application[]>([]);
  const [profileUser, setProfileUser] = useState<ProfileData | null>(null);
  const router = useRouter();

  const refreshApps = async () => {
    router.refresh();
  };

  useEffect(() => {
    const fetchInternships = async () => {
      const client = createClient();
      const { data, error } = await client.from('internships').select('*').eq('user_id', user.id);
      if (error) console.error('Error fetching internship data:', error);
      else setApplications(data);
    };

    fetchInternships();
  }, [user]);

  useEffect(() => {
    const fetchProfile = async () => {
      const client = createClient();
      const { data, error } = await client
        .from('profiles')
        .select('username, firstName')
        .eq('id', user.id);
      if (error) console.error('Error fetching profile: ', error);
      else if (data && data.length > 0)
        setProfileUser({ username: data[0].username, firstName: data[0].firstName });
    };

    fetchProfile();
  }, [user]);

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={fadeInVariants}
      transition={{ duration: 1, ease: 'easeInOut' }}
    >
      <div id="dashboard-section" className="flex min-h-screen flex-col gap-6 p-6">
        <DashboardHeader user={user} profile={profileUser || undefined} />
        <DashboardMetrics applications={applications} />
        <NewApplicationForm />
        <ApplicationsTable
          applications={applications}
          setApplications={setApplications}
          refreshApplications={refreshApps}
        />
      </div>
    </motion.div>
  );
};

export default Dashboard;
