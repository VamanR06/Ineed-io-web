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

const companies = ['Google', 'Microsoft', 'Apple', 'Amazon', 'Facebook', 'Netflix', 'Tesla'];
const positions = [
  'Software Engineer Intern',
  'Product Manager Intern',
  'iOS Developer Intern',
  'Data Scientist Intern',
  'UX Designer Intern',
];
const statuses = ['pending', 'rejected', 'accepted'];
const locations = [
  'Mountain View, CA',
  'Redmond, WA',
  'Cupertino, CA',
  'Seattle, WA',
  'Menlo Park, CA',
  'Los Gatos, CA',
  'Palo Alto, CA',
];

const applications = Array.from({ length: 53 }, (_, i) => ({
  company: companies[i % companies.length],
  position: positions[i % positions.length],
  appliedDate: `2024-02-${(i % 28) + 1}`,
  status: statuses[i % statuses.length],
  location: locations[i % locations.length],
}));

export function ApplicationsTable() {
  return (
    <Card className="p-6">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-semibold">Recent Applications</h2>
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
          {applications.map((app, index) => (
            <TableRow key={`${app.company}-${app.position}-${index}`}>
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
