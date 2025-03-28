'use client';

import type React from 'react';
import { useState, useEffect, Suspense } from 'react';
import { SidebarNav } from '@/components/settings/sidebar-nav';
import { Separator } from '@/components/ui/separator';
import { useSearchParams, useRouter } from 'next/navigation';
import { ResetPasswordForm } from '@/components/forgot-password/reset-password';
import { DeleteAccount } from '@/components/settings/delete-account';
import SmtpMessage from '@/app/(auth-pages)/smtp-message';
import { motion } from 'framer-motion';

const fadeInVariants = { initial: { opacity: 0 }, animate: { opacity: 1 } };

const sidebarNavItems = [
  { title: 'Profile', href: '/settings' },
  { title: 'Account', href: '/settings/account' },
];

const AccountSettingsPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState<'profile' | 'password' | 'delete'>('password');
  const [resetPasswordStatus, setResetPasswordStatus] = useState<'idle' | 'success' | 'error'>(
    'idle'
  );

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AccountSettingsContent
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        resetPasswordStatus={resetPasswordStatus}
        setResetPasswordStatus={setResetPasswordStatus}
      />
    </Suspense>
  );
};

const AccountSettingsContent: React.FC<{
  activeSection: 'profile' | 'password' | 'delete';
  setActiveSection: React.Dispatch<React.SetStateAction<'profile' | 'password' | 'delete'>>;
  resetPasswordStatus: 'idle' | 'success' | 'error';
  setResetPasswordStatus: React.Dispatch<React.SetStateAction<'idle' | 'success' | 'error'>>;
}> = ({ activeSection, setActiveSection, resetPasswordStatus, setResetPasswordStatus }) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    if (searchParams.has('success')) {
      setResetPasswordStatus('success');
      router.replace('/settings/account');
    } else if (searchParams.has('error')) {
      setResetPasswordStatus('error');
      router.replace('/settings/account');
    }
  }, [searchParams, router, setResetPasswordStatus]);

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={fadeInVariants}
      transition={{ duration: 1, ease: 'easeInOut' }}
    >
      <div className="space-y-6 p-10 pb-16">
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">Account Settings</h2>
          <p className="text-muted-foreground">Manage your account settings.</p>
        </div>
        <Separator className="my-6" />
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside className="-mx-4 lg:w-1/5">
            <SidebarNav items={sidebarNavItems} />
          </aside>
          <div className="flex-1 lg:max-w-2xl">
            <div className="space-y-4">
              <div className="mb-4 flex space-x-4">
                <button
                  className={`rounded px-4 py-2 ${activeSection === 'password' ? 'bg-primary text-primary-foreground' : 'bg-secondary'}`}
                  onClick={() => setActiveSection('password')}
                >
                  Reset Password
                </button>
                <button
                  className={`rounded px-4 py-2 ${activeSection === 'delete' ? 'bg-primary text-primary-foreground' : 'bg-secondary'}`}
                  onClick={() => setActiveSection('delete')}
                >
                  Delete Account
                </button>
              </div>

              {activeSection === 'password' && (
                <div className="w-full max-w-sm">
                  <ResetPasswordForm />
                  {resetPasswordStatus === 'success' && (
                    <SmtpMessage message="Password has been reset." />
                  )}
                  {resetPasswordStatus === 'error' && (
                    <SmtpMessage message="Passwords do not match. Please try again." />
                  )}
                </div>
              )}

              {activeSection === 'delete' && <DeleteAccount />}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AccountSettingsPage;
