import { ResetPasswordForm } from '@/components/forgot-password/reset-password';
import '../../globals.css';
import React from 'react';

const ResetPassword: React.FC = () => {
  return (
    <div className="ineed.io-reset-password-page">
      {' '}
      <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
        <div className="w-full max-w-sm">
          <ResetPasswordForm />
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
