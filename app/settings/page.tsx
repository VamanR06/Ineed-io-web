import React from 'react';
import Link from 'next/link';
import '../globals.css';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/login/card';

const Settings: React.FC = () => {
  return (
    <div className="ineed.io-settings-page flex min-h-screen items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-md">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Settings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4">
              <Link href="/settings/update-profile" className="text-blue-500 hover:underline">
                Update Profile
              </Link>
              <Link href="/settings/reset-password" className="text-blue-500 hover:underline">
                Reset Password
              </Link>
              <Link href="/settings/delete-account" className="text-blue-500 hover:underline">
                Delete Account
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Settings;
