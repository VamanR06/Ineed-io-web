'use client';

import '../globals.css';
import type React from 'react';
import { useEffect, useState } from 'react';
import { createClient } from '@/utils/supabase/client';
import type { User } from '@/types/user';
import { UserDropdownMenu } from '@/components/profile/user-dropdown-menu';
import UserInfo from '@/components/profile/user-info';

const Profile: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const supabase = createClient();

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data.user as User);
    };

    fetchUser();
  }, [supabase]);

  return (
    <div className="ineed.io-profile-page flex min-h-screen items-center justify-center">
      <div className="mx-auto w-full max-w-md rounded-lg p-8 text-center shadow-md">
        {user && (
          <>
            <h1 className="mb-4 text-2xl font-bold">
              <UserInfo user={user} />
            </h1>
            <div className="flex justify-center">
              <UserDropdownMenu />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Profile;
