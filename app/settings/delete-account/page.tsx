import '../../globals.css';
import React from 'react';
import { DeleteAccount } from '@/components/settings/delete-account';

const DeleteAccountPage: React.FC = () => {
  return (
    <div className="ineed.io-reset-password-page">
      {' '}
      <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
        <DeleteAccount />
      </div>
    </div>
  );
};

export default DeleteAccountPage;
