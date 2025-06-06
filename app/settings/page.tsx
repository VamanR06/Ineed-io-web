'use client';

import { Separator } from '@/components/ui/separator';
import { SidebarNav } from '@/components/settings/sidebar-nav';
import { ProfileForm } from '@/components/settings/update-form';
import '../globals.css';
import { motion } from 'framer-motion';

const fadeInVariants = { initial: { opacity: 0 }, animate: { opacity: 1 } };

const sidebarNavItems = [
  { title: 'Profile', href: '/settings' },
  { title: 'Account', href: '/settings/account' },
];

export default function SettingsPage() {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={fadeInVariants}
      transition={{ duration: 1, ease: 'easeInOut' }}
    >
      <div className="space-y-6 p-10 pb-16">
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
          <p className="text-muted-foreground">Manage your profile settings.</p>
        </div>
        <Separator className="my-6" />
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside className="-mx-4 lg:w-1/5">
            <SidebarNav items={sidebarNavItems} />
          </aside>
          <div className="flex-1 lg:max-w-2xl">
            <ProfileForm />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
