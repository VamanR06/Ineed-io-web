import { ChevronLeft, Users, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

//TODO: Add functionality to get the total amount of users from the database, and then display it in the text below
export function LeaderboardHeader() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Link href="/dashboard">
          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
            <ChevronLeft className="h-5 w-5" />
          </Button>
        </Link>
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full">
            <Image src="/images/logo.png" alt="Ineed.io" width={32} height={32} />
          </div>
          <h1 className="text-xl font-semibold">Ineed.io Leaderboard</h1>
          <div className="ml-2 text-sm text-gray-400">44,684</div>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Button
          variant="outline"
          size="sm"
          className="border-[#374151] bg-[#1f2937] text-white hover:bg-[#374151]"
        >
          <Users className="mr-2 h-4 w-4" />
          Users
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="border-[#374151] bg-[#1f2937] text-white hover:bg-[#374151]"
        >
          <BarChart3 className="mr-2 h-4 w-4" />
          Insights
        </Button>
      </div>
    </div>
  );
}
