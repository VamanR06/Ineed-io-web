import type React from 'react';
import { ProfileForm } from '@/components/settings/update-form';

const UpdateProfile: React.FC = () => {
  return (
    <div className="ineed.io-update-profile-page">
      <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
        <div className="w-full max-w-sm">
          <ProfileForm />
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
