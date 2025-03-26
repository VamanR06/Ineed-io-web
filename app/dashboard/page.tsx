'use client';

import Dashboard from '@/components/home/Dashboard';
import { createClient } from '@/utils/supabase/client';
import { User } from '@supabase/supabase-js';
import React, { useEffect, useState } from 'react';
import { Progress } from '@/components/ui/progress';

const DashboardPage = () => {
  const [user, setUser] = useState<User | null>(null);
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const supabase = createClient();
      const { data, error } = await supabase.auth.getUser();
      if (error) {
        console.error('Something wrong happened when getting user: ', error);
        setUser(null);
      } else {
        setUser(data.user);
      }
      setIsLoading(false);
    };

    fetchUser();
  }, []);

  useEffect(() => {
    const duration = 3000;
    const increment = 100 / (duration / 50);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + increment;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  if (progress < 100) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="w-1/2">
          <Progress value={progress} className="w-full" />
          <p className="mt-2 text-center text-gray-500">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-gray-500">Finalizing...</p>
      </div>
    );
  }

  return user ? (
    <Dashboard user={user} />
  ) : (
    <div className="flex min-h-screen items-center justify-center">
      <p className="text-red-500">Error Getting User</p>
    </div>
  );
};

export default DashboardPage;
