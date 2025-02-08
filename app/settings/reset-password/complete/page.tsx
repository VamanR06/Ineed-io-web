import { ResetPasswordForm } from '@/components/forgot-password/reset-password';
import '../../../globals.css';
import React from 'react';
import SmtpMessage from '@/app/(auth-pages)/smtp-message';

const ResetPassword: React.FC = () => {
  return (
    <div className="ineed.io-reset-password-page">
      {' '}
      <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
        <div className="w-full max-w-sm">
          <ResetPasswordForm />
          <SmtpMessage message="Password has been reset." />
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
