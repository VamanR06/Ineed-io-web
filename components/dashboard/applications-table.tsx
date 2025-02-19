'use client';

import { X } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Application } from '@/types/application';
import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';

dayjs.extend(advancedFormat);

export function ApplicationsTable({
  applications,
  setApplications,
}: {
  applications: Application[];
  setApplications: React.Dispatch<React.SetStateAction<Application[]>>;
}) {
  const handleDelete = (id: string) => {
    // TODO: Handle delete on the actual database
    // LINK: https://supabase.com/docs/reference/javascript/delete
    // Remember to call .eq() on the "id" column
    // I.E .eq('id', id)
    setApplications(applications.filter((app) => `${app.id}` !== id));
  };

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
            {/* TODO: Add another TableHead called Link */}
            <TableHead>Status</TableHead>
            <TableHead className="w-[50px]"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {applications.map((app) => (
            <TableRow key={app.id}>
              <TableCell className="font-medium">{app.company_name}</TableCell>
              <TableCell>{app.company_name}</TableCell>
              <TableCell>{dayjs(app.created_at).format('MMMM Do YYYY h:mm A')}</TableCell>
              {/* TODO: Remember to add app.link to get all the links for each internship from the database */}
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
              <TableCell>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-muted-foreground hover:text-red-600"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Delete Application</AlertDialogTitle>
                      <AlertDialogDescription>
                        Are you sure you want to delete the application for {app.company_name}? This
                        action cannot be undone.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction
                        className="bg-red-600 hover:bg-red-700"
                        onClick={() => handleDelete(`${app.id}`)}
                      >
                        Delete
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}
