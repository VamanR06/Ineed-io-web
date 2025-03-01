'use client';

import { useState } from 'react';
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

const users = [
  {
    id: 1,
    name: 'Svetlana Savina',
    avatar: '/placeholder.svg',
    score: 92,
    age: '2.4y',
    labels: ['Developer', 'Culture', 'ENS'],
    balance: '20.1M',
    applications: 1000,
    linkedin: '33.5k',
    activity: 4,
  },
  {
    id: 2,
    name: 'Alex Johnson',
    avatar: '/placeholder.svg',
    score: 78,
    age: '7.1y',
    labels: ['Early adopter', 'Luxury', 'New'],
    balance: '23',
    applications: 230,
    linkedin: '34.5k',
    activity: 3,
  },
  {
    id: 3,
    name: 'Maria Chen',
    avatar: '/placeholder.svg',
    score: 76,
    age: '128d',
    labels: [],
    balance: '43.4k',
    applications: 330,
    linkedin: '43.4k',
    activity: 5,
  },
  {
    id: 4,
    name: 'James Wilson',
    avatar: '/placeholder.svg',
    score: 64,
    age: '14d',
    labels: ['Collector'],
    balance: '22.3k',
    applications: 330,
    linkedin: '22.3k',
    activity: 2,
  },
  {
    id: 5,
    name: 'Priya Patel',
    avatar: '/placeholder.svg',
    score: 63,
    age: 'Ø',
    labels: ['Developer', 'Culture', 'ENS'],
    balance: '2.4k',
    applications: 0,
    linkedin: '2.4k',
    activity: 1,
  },
  {
    id: 6,
    name: 'David Kim',
    avatar: '/placeholder.svg',
    score: 47,
    age: '2d',
    labels: ['Collector'],
    balance: '749.9k',
    applications: 2,
    linkedin: '-',
    activity: 0,
  },
  {
    id: 7,
    name: 'John Doe',
    avatar: '/placeholder.svg',
    score: 85,
    age: '1.2y',
    labels: ['Developer', 'New'],
    balance: '15.3M',
    applications: 500,
    linkedin: '20.1k',
    activity: 4,
  },
  {
    id: 8,
    name: 'Jane Smith',
    avatar: '/placeholder.svg',
    score: 90,
    age: '3.5y',
    labels: ['Culture', 'Luxury'],
    balance: '30.2M',
    applications: 800,
    linkedin: '40.2k',
    activity: 5,
  },
  {
    id: 9,
    name: 'Michael Brown',
    avatar: '/placeholder.svg',
    score: 70,
    age: '2.8y',
    labels: ['Collector', 'ENS'],
    balance: '10.5M',
    applications: 300,
    linkedin: '15.4k',
    activity: 3,
  },
  {
    id: 10,
    name: 'Emily Davis',
    avatar: '/placeholder.svg',
    score: 65,
    age: '1.5y',
    labels: ['Developer'],
    balance: '5.7M',
    applications: 200,
    linkedin: '10.3k',
    activity: 2,
  },
  {
    id: 11,
    name: 'Chris Johnson',
    avatar: '/placeholder.svg',
    score: 80,
    age: '4.2y',
    labels: ['Culture', 'New'],
    balance: '25.4M',
    applications: 600,
    linkedin: '30.5k',
    activity: 4,
  },
  {
    id: 12,
    name: 'Sarah Lee',
    avatar: '/placeholder.svg',
    score: 75,
    age: '2.1y',
    labels: ['Luxury', 'ENS'],
    balance: '12.3M',
    applications: 400,
    linkedin: '18.2k',
    activity: 3,
  },
  {
    id: 13,
    name: 'David Martinez',
    avatar: '/placeholder.svg',
    score: 60,
    age: '3.8y',
    labels: ['Collector'],
    balance: '8.9M',
    applications: 150,
    linkedin: '12.4k',
    activity: 2,
  },
  {
    id: 14,
    name: 'Laura Wilson',
    avatar: '/placeholder.svg',
    score: 55,
    age: '1.9y',
    labels: ['Developer', 'Culture'],
    balance: '6.2M',
    applications: 100,
    linkedin: '8.3k',
    activity: 1,
  },
  {
    id: 15,
    name: 'James Anderson',
    avatar: '/placeholder.svg',
    score: 50,
    age: '2.6y',
    labels: ['New'],
    balance: '4.5M',
    applications: 50,
    linkedin: '5.2k',
    activity: 0,
  },
  {
    id: 16,
    name: 'Olivia Thomas',
    avatar: '/placeholder.svg',
    score: 95,
    age: '5.1y',
    labels: ['Luxury', 'ENS'],
    balance: '35.7M',
    applications: 900,
    linkedin: '45.3k',
    activity: 5,
  },
  {
    id: 17,
    name: 'Daniel White',
    avatar: '/placeholder.svg',
    score: 88,
    age: '3.3y',
    labels: ['Collector', 'Culture'],
    balance: '28.4M',
    applications: 700,
    linkedin: '38.2k',
    activity: 4,
  },
  {
    id: 18,
    name: 'Sophia Harris',
    avatar: '/placeholder.svg',
    score: 82,
    age: '2.7y',
    labels: ['Developer', 'New'],
    balance: '22.1M',
    applications: 550,
    linkedin: '25.6k',
    activity: 3,
  },
  {
    id: 19,
    name: 'Matthew Clark',
    avatar: '/placeholder.svg',
    score: 78,
    age: '1.8y',
    labels: ['Culture', 'ENS'],
    balance: '18.9M',
    applications: 450,
    linkedin: '22.3k',
    activity: 2,
  },
  {
    id: 20,
    name: 'Ava Lewis',
    avatar: '/placeholder.svg',
    score: 72,
    age: '3.1y',
    labels: ['Luxury'],
    balance: '14.6M',
    applications: 350,
    linkedin: '19.4k',
    activity: 1,
  },
  {
    id: 21,
    name: 'Ethan Walker',
    avatar: '/placeholder.svg',
    score: 68,
    age: '2.2y',
    labels: ['Collector', 'New'],
    balance: '11.3M',
    applications: 250,
    linkedin: '16.2k',
    activity: 0,
  },
  {
    id: 22,
    name: 'Isabella Hall',
    avatar: '/placeholder.svg',
    score: 62,
    age: '1.4y',
    labels: ['Developer', 'Culture'],
    balance: '9.8M',
    applications: 150,
    linkedin: '13.5k',
    activity: 4,
  },
  {
    id: 23,
    name: 'Liam Young',
    avatar: '/placeholder.svg',
    score: 58,
    age: '2.9y',
    labels: ['Luxury', 'ENS'],
    balance: '7.4M',
    applications: 100,
    linkedin: '10.8k',
    activity: 3,
  },
  {
    id: 24,
    name: 'Mia King',
    avatar: '/placeholder.svg',
    score: 54,
    age: '1.7y',
    labels: ['Collector'],
    balance: '5.9M',
    applications: 50,
    linkedin: '8.1k',
    activity: 2,
  },
  {
    id: 25,
    name: 'Noah Scott',
    avatar: '/placeholder.svg',
    score: 48,
    age: '2.5y',
    labels: ['Developer', 'New'],
    balance: '4.2M',
    applications: 25,
    linkedin: '6.4k',
    activity: 1,
  },
  {
    id: 26,
    name: 'Emma Green',
    avatar: '/placeholder.svg',
    score: 44,
    age: '1.3y',
    labels: ['Culture', 'ENS'],
    balance: '3.7M',
    applications: 10,
    linkedin: '5.1k',
    activity: 0,
  },
  {
    id: 27,
    name: 'Lucas Adams',
    avatar: '/placeholder.svg',
    score: 40,
    age: '2.1y',
    labels: ['Luxury'],
    balance: '2.9M',
    applications: 5,
    linkedin: '4.2k',
    activity: 4,
  },
  {
    id: 28,
    name: 'Amelia Baker',
    avatar: '/placeholder.svg',
    score: 36,
    age: '1.6y',
    labels: ['Collector', 'New'],
    balance: '2.3M',
    applications: 2,
    linkedin: '3.5k',
    activity: 3,
  },
  {
    id: 29,
    name: 'Henry Mitchell',
    avatar: '/placeholder.svg',
    score: 32,
    age: '2.8y',
    labels: ['Developer', 'Culture'],
    balance: '1.8M',
    applications: 1,
    linkedin: '2.8k',
    activity: 2,
  },
  {
    id: 30,
    name: 'Charlotte Perez',
    avatar: '/placeholder.svg',
    score: 28,
    age: '1.2y',
    labels: ['Luxury', 'ENS'],
    balance: '1.2M',
    applications: 0,
    linkedin: '2.1k',
    activity: 1,
  },
  {
    id: 31,
    name: 'Jack Turner',
    avatar: '/placeholder.svg',
    score: 24,
    age: '2.4y',
    labels: ['Collector'],
    balance: '900k',
    applications: 0,
    linkedin: '1.5k',
    activity: 0,
  },
  {
    id: 32,
    name: 'Grace Collins',
    avatar: '/placeholder.svg',
    score: 20,
    age: '1.9y',
    labels: ['Developer', 'New'],
    balance: '700k',
    applications: 0,
    linkedin: '1.2k',
    activity: 4,
  },
  {
    id: 33,
    name: 'Benjamin Rivera',
    avatar: '/placeholder.svg',
    score: 16,
    age: '2.7y',
    labels: ['Culture', 'ENS'],
    balance: '500k',
    applications: 0,
    linkedin: '900',
    activity: 3,
  },
  {
    id: 34,
    name: 'Zoe Ramirez',
    avatar: '/placeholder.svg',
    score: 12,
    age: '1.5y',
    labels: ['Luxury'],
    balance: '300k',
    applications: 0,
    linkedin: '600',
    activity: 2,
  },
  {
    id: 35,
    name: 'William Carter',
    avatar: '/placeholder.svg',
    score: 8,
    age: '2.3y',
    labels: ['Collector', 'New'],
    balance: '200k',
    applications: 0,
    linkedin: '400',
    activity: 1,
  },
  {
    id: 36,
    name: 'Ella Wright',
    avatar: '/placeholder.svg',
    score: 4,
    age: '1.1y',
    labels: ['Developer', 'Culture'],
    balance: '100k',
    applications: 0,
    linkedin: '200',
    activity: 0,
  },
];

export function LeaderboardTable() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredUsers = users.filter((user) =>
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
          {filteredUsers.map((user) => (
            <TableRow key={user.id} className="border-[#374151] hover:bg-[#1f2937]">
              <TableCell className="text-gray-400">{user.id}</TableCell>
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
