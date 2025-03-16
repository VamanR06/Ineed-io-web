'use client';

import { createClient } from '@/utils/supabase/client';
import { useEffect, useState } from 'react';
import { Search, Filter, Columns, HelpCircle, MoreHorizontal } from 'lucide-react';
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
import { users } from './sample-data';
import { PostgrestError } from '@supabase/supabase-js';

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

export function LeaderboardTable() {
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [error, setError] = useState<PostgrestError | null>(null);

  useEffect(() => {
    const fetchProfiles = async () => {
      const client = await createClient();
      const { data, error } = await client
        .from('profiles')
        .select('id, firstName, lastName, total_applications')
        .order('total_applications', { ascending: false })
        .limit(50);

      console.log(data);
      if (error) {
        console.error(error.message || error); // improved logging
        setError(error);
        return;
      } else {
        console.log(data);
      }

      console.log('working till this point');
      let idx = 0;
      const mappedData: Profile[] = data
        ? data.map((item) => {
            const newItem: Profile = {
              id: item.id,
              name: `${item.firstName} ${item.lastName}`,
              avatar: '/placeholder.svg',
              score: users[idx].score,
              age: users[idx].age,
              labels: users[idx].labels,
              balance: users[idx].balance,
              applications: item.total_applications,
              linkedin: users[idx].linkedin,
              activity: users[idx].activity,
            };
            idx++;
            idx = idx >= users.length ? 0 : idx;
            return newItem;
          })
        : [];

      setProfiles(mappedData);
    };

    fetchProfiles();
  }, []);

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
          className={`h-2 w-2 rounded-full ${i < activity ? 'bg-[#3b82f6]' : 'bg-[#374151]'}`}
        />
      ));
  };

  if (error) {
    return <div>Something went wrong when loading profiles from database</div>;
  }

  return (
    <div className="overflow-hidden rounded-lg border border-[#374151]">
      <div className="flex items-center justify-between p-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
          <Input
            placeholder="Search..."
            className="w-[300px] border-[#374151] pl-10 text-white"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            className="border-[#374151] bg-[#1f2937] text-white hover:bg-[#374151]"
          >
            <Filter className="mr-2 h-4 w-4" />
            Filters
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="border-[#374151] bg-[#1f2937] text-white hover:bg-[#374151]"
          >
            <Columns className="mr-2 h-4 w-4" />
            Columns
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="border-[#374151] bg-[#1f2937] text-white hover:bg-[#374151]"
          >
            <HelpCircle className="mr-2 h-4 w-4" />
            FAQ
          </Button>
        </div>
      </div>

      <Table>
        <TableHeader className="">
          <TableRow className="border-[#374151] hover:bg-[#1f2937]">
            <TableHead className="w-12 text-gray-400">#</TableHead>
            <TableHead className="text-gray-400">User</TableHead>
            <TableHead className="text-gray-400">Rank</TableHead>
            <TableHead className="text-gray-400">Age</TableHead>
            <TableHead className="text-gray-400">Labels</TableHead>
            <TableHead className="text-gray-400">Balance</TableHead>
            <TableHead className="text-gray-400">Apps</TableHead>
            <TableHead className="text-gray-400">LinkedIn</TableHead>
            <TableHead className="text-gray-400">Activity</TableHead>
            <TableHead className="w-12 text-gray-400"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredUsers.map((user, index) => (
            <TableRow key={user.id} className="border-[#374151] hover:bg-[#1f2937]">
              <TableCell className="text-gray-400">{index + 1}</TableCell>
              <TableCell>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={user.avatar} />
                    <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <span className="font-medium">{user.name}</span>
                </div>
              </TableCell>
              <TableCell>
                <div
                  className={`h-6 w-8 rounded-md ${getScoreColor(user.score)} flex items-center justify-center text-xs font-medium`}
                >
                  {user.score}
                </div>
              </TableCell>
              <TableCell className="text-gray-300">{user.age}</TableCell>
              <TableCell>
                <div className="flex flex-wrap gap-1">
                  {user.labels.map((label, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="border-[#374151] bg-[#111827] text-xs text-gray-300"
                    >
                      {label}
                    </Badge>
                  ))}
                  {user.labels.length === 0 && <span className="text-gray-500">-</span>}
                </div>
              </TableCell>
              <TableCell className="text-gray-300">{user.balance}</TableCell>
              <TableCell className="text-gray-300">{user.applications}</TableCell>
              <TableCell className="text-gray-300">{user.linkedin}</TableCell>
              <TableCell>
                <div className="flex gap-1">{getActivityDots(user.activity)}</div>
              </TableCell>
              <TableCell>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
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
