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
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <h1 className="text-2xl font-semibold">
          Welcome Back, {profile?.firstName ? profile?.firstName : user?.user_metadata.first_name}!
          👋
        </h1>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative"></div>
      </div>
    </div>
  );
}
