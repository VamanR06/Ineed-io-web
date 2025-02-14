import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export function DashboardHeader() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <h1 className="text-2xl font-semibold">Hello Evano 👋</h1>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
          <Input placeholder="Search..." className="w-[300px] pl-10" />
        </div>
        <Avatar>
          <AvatarImage src="/placeholder.svg" />
          <AvatarFallback>EV</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}
