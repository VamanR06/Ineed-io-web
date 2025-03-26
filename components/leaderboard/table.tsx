'use client';

import { createClient } from '@/utils/supabase/client';
import { useEffect, useState } from 'react';
import { /* Filter, Columns */ HelpCircle, MoreHorizontal } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { PostgrestError } from '@supabase/supabase-js';
import Link from 'next/link';

interface Profile {
  id: number;
  name: string;
  avatar: string;
  score: number;
  age: string;
  labels: string[];
  balance: string;
  applications: number;
  linkedin: string;
  activity: number;
}

/* 
TODO #11: Remove rank, labels, balanace, and activity for now
add these columns: success rate, rejection rate (should know how to calulcate this)
*/

export function LeaderboardTable() {
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [error, setError] = useState<PostgrestError | null>(null);

  useEffect(() => {
    const fetchProfiles = async () => {
      const client = await createClient();
      const { data, error } = await client
        .from('profiles')
        .select('id, firstName, lastName, total_applications, age, avatar')
        .order('total_applications', { ascending: false })
        .limit(50);

      if (error) {
        console.error(error.message || error);
        setError(error);
        return;
      }

      const mappedData: Profile[] = data
        ? data.map((item) => {
            const newItem: Profile = {
              id: item.id,
              name: `${item.firstName} ${item.lastName}`,
              avatar: item.avatar || '/placeholder.svg',
              score: 0, // ignored field, default value
              age: item.age,
              labels: [], // ignored field, default value
              balance: '', // ignored field, default value
              applications: item.total_applications,
              linkedin: '', // ignored field, default value
              activity: 0, // ignored field, default value
            };
            return newItem;
          })
        : [];

      setProfiles(mappedData);
    };

    fetchProfiles();
  }, []);
  console.log(profiles);

  const [searchQuery, setSearchQuery] = useState('');

  const filteredUsers = profiles.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'bg-[#22c55e]';
    if (score >= 70) return 'bg-[#84cc16]';
    if (score >= 60) return 'bg-[#eab308]';
    return 'bg-[#f97316]';
  };

  const getActivityDots = (activity: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <div
          key={i}
          className={`h-2 w-2 rounded-full ${i < activity ? 'bg-[#3b82f6]' : 'bg-gray-300 dark:bg-[#374151]'}`}
        />
      ));
  };

  if (error) {
    return (
      <div className="text-black dark:text-white">
        Something went wrong when loading profiles from database
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 dark:border-[#374151]">
      <div className="flex items-center justify-between p-4">
        <div className="relative">
          <Input
            placeholder="Search..."
            className="w-[300px] border-gray-200 text-black placeholder-gray-400 dark:border-[#374151] dark:text-white dark:placeholder-gray-400"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2">
          {/* 
          <Button
            variant="outline"
            size="sm"
            className="border-gray-200 bg-white text-black hover:bg-gray-100 dark:border-[#121212] dark:bg-[#292828] dark:text-white dark:hover:bg-[#121212]"
          >
            <Filter className="mr-2 h-4 w-4" />
            Filters
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="border-gray-200 bg-white text-black hover:bg-gray-100 dark:border-[#121212] dark:bg-[#292828] dark:text-white dark:hover:bg-[#121212]"
          >
            <Columns className="mr-2 h-4 w-4" />
            Columns
          </Button>
        */}
          <Link href={'/faq'}>
            <Button
              variant="outline"
              size="sm"
              className="border-gray-200 bg-white text-black hover:bg-gray-100 dark:border-[#374151] dark:bg-[#292828] dark:text-white dark:hover:bg-[#121212]"
            >
              <HelpCircle className="mr-2 h-4 w-4" />
              FAQ
            </Button>
          </Link>
        </div>
      </div>

      <Table>
        <TableHeader>
          <TableRow className="border-gray-200 hover:bg-gray-100 dark:border-[#374151] dark:hover:bg-[#121212]">
            <TableHead className="w-12 text-gray-600 dark:text-gray-400">#</TableHead>
            <TableHead className="text-gray-600 dark:text-gray-400">User</TableHead>
            <TableHead className="text-gray-600 dark:text-gray-400">Rank</TableHead>
            <TableHead className="text-gray-600 dark:text-gray-400">Age</TableHead>
            <TableHead className="text-gray-600 dark:text-gray-400">Labels</TableHead>
            <TableHead className="text-gray-600 dark:text-gray-400">Balance</TableHead>
            <TableHead className="text-gray-600 dark:text-gray-400">Apps</TableHead>
            <TableHead className="text-gray-600 dark:text-gray-400">LinkedIn</TableHead>
            <TableHead className="text-gray-600 dark:text-gray-400">Activity</TableHead>
            <TableHead className="w-12 text-gray-600 dark:text-gray-400"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredUsers.map((user, index) => (
            <TableRow
              key={user.id}
              className="border-gray-200 hover:bg-gray-100 dark:border-[#374151] dark:hover:bg-[#292828]"
            >
              <TableCell className="text-gray-600 dark:text-gray-400">{index + 1}</TableCell>
              <TableCell>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={user.avatar} />
                    <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <Link href={`/profile/${user.id}`}>
                    <span className="font-medium text-black hover:underline dark:text-white">
                      {user.name}
                    </span>
                  </Link>
                </div>
              </TableCell>
              <TableCell>
                <div
                  className={`h-6 w-8 rounded-md ${getScoreColor(user.score)} flex items-center justify-center text-xs font-medium text-white`}
                >
                  {user.score}
                </div>
              </TableCell>
              <TableCell className="text-gray-900 dark:text-gray-300">
                {user.age ? user.age : ''}
              </TableCell>
              <TableCell>
                <div className="flex flex-wrap gap-1">
                  {user.labels.map((label, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="border-gray-200 bg-gray-50 text-xs text-gray-700 dark:border-[#374151] dark:bg-[#111827] dark:text-gray-300"
                    >
                      {label}
                    </Badge>
                  ))}
                  {user.labels.length === 0 && (
                    <span className="text-gray-500 dark:text-gray-500">-</span>
                  )}
                </div>
              </TableCell>
              <TableCell className="text-gray-900 dark:text-gray-300">{user.balance}</TableCell>
              <TableCell className="text-gray-900 dark:text-gray-300">
                {user.applications}
              </TableCell>
              <TableCell className="text-gray-900 dark:text-gray-300">{user.linkedin}</TableCell>
              <TableCell>
                <div className="flex gap-1">{getActivityDots(user.activity)}</div>
              </TableCell>
              <TableCell>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                >
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
