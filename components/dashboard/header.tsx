import { User } from '@/types/user';

interface DBHeaderProps {
  user: User | null;
}
export function DashboardHeader({ user }: DBHeaderProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <h1 className="text-2xl font-semibold">Hello {user?.user_metadata.first_name} 👋</h1>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative"></div>
      </div>
    </div>
  );
}
