'use client';

import '../globals.css';
import type React from 'react';
import { useEffect, useState } from 'react';
import { createClient } from '@/utils/supabase/client';
import type { User } from '@supabase/supabase-js';
import { UserDropdownMenu } from '@/components/profile/user-dropdown-menu';

const Profile: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const supabase = createClient();

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data.user);
    };

    fetchUser();
  }, [supabase]);

  return (
    <div className="ineed.io-profile-page flex min-h-screen items-center justify-center">
      <div className="mx-auto w-full max-w-md rounded-lg p-8 shadow-md">
        <h1 className="mb-4 text-center text-2xl font-bold">Profile Page</h1>
        {user && (
          <div className="flex justify-center">
            <UserDropdownMenu user={user} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
