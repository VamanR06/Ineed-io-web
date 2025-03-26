'use client';

import Dashboard from '@/components/home/Dashboard';
import { createClient } from '@/utils/supabase/client';
import { User } from '@supabase/supabase-js';
import React, { useEffect, useState } from 'react';

const DashboardPage = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const supabase = createClient();
      const { data, error } = await supabase.auth.getUser();
      if (error) console.error('Something wrong happened when getting user: ', error);
      setUser(data.user);
    };

    fetchUser();
  }, []);
  return user ? <Dashboard user={user} /> : <div>Error Getting User</div>;
};

export default DashboardPage;
