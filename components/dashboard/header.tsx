import { User } from '@supabase/supabase-js';

interface ProfileData {
  username: string;
  firstName: string;
}

interface DBHeaderProps {
  user: User | null;
  profile?: ProfileData;
}

export function DashboardHeader({ user, profile }: DBHeaderProps) {
  return (
    <h1 className="text-2xl font-semibold">
      Welcome Back, {profile?.firstName ? profile?.firstName : user?.user_metadata.first_name}!👋
    </h1>
  );
}
