import React from 'react';
import { LoginForm } from '../../../components/login/login-form';
import '../../globals.css';
import SmtpMessage from '@/app/(auth-pages)/smtp-message';

const Login: React.FC = () => {
  return (
    <div className="ineed.io-login-page">
      <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
        <div className="w-full max-w-sm">
          <LoginForm />
          <SmtpMessage message="Email doesn't exist or password is incorrect. Please try again." />
        </div>
      </div>
    </div>
  );
};

export default Login;
