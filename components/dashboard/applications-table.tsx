'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const applications = [
  {
    company: 'Google',
    position: 'Software Engineer Intern',
    appliedDate: '2024-02-10',
    status: 'pending',
    location: 'Mountain View, CA',
  },
  {
    company: 'Microsoft',
    position: 'Product Manager Intern',
    appliedDate: '2024-02-08',
    status: 'rejected',
    location: 'Redmond, WA',
  },
  {
    company: 'Apple',
    position: 'iOS Developer Intern',
    appliedDate: '2024-02-05',
    status: 'accepted',
    location: 'Cupertino, CA',
  },
];

export function ApplicationsTable() {
  return (
    <Card className="p-6">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-semibold">Recent Applications</h2>
        <div className="flex items-center gap-4">
          <Input placeholder="Search applications..." className="w-[300px]" />
          <Select defaultValue="newest">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest First</SelectItem>
              <SelectItem value="oldest">Oldest First</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Company</TableHead>
            <TableHead>Position</TableHead>
            <TableHead>Applied Date</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {applications.map((app) => (
            <TableRow key={`${app.company}-${app.position}`}>
              <TableCell className="font-medium">{app.company}</TableCell>
              <TableCell>{app.position}</TableCell>
              <TableCell>{app.appliedDate}</TableCell>
              <TableCell>{app.location}</TableCell>
              <TableCell>
                <span
                  className={`rounded-full px-3 py-1 text-sm ${
                    app.status === 'accepted'
                      ? 'bg-[#e8faf3] text-[#00ac4f]'
                      : app.status === 'rejected'
                        ? 'bg-red-100 text-red-600'
                        : 'bg-yellow-100 text-yellow-600'
                  }`}
                >
                  {app.status.charAt(0).toUpperCase() + app.status.slice(1)}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}
