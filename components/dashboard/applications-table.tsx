'use client';

import { useState } from 'react';
import { X, Search, Download } from 'lucide-react';
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
import { Input } from '@/components/ui/input';
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
import { createClient } from '@/utils/supabase/client';
import { mkConfig, generateCsv, asString } from 'export-to-csv'; // Updated imports

dayjs.extend(advancedFormat);

export function ApplicationsTable({
  applications,
  setApplications,
}: {
  applications: Application[];
  setApplications: React.Dispatch<React.SetStateAction<Application[]>>;
}) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredApplications = applications.filter((app) =>
    app.company_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDelete = async (id: string) => {
    const supabase = await createClient();
    const { error } = await supabase.from('internships').delete().eq('id', id);

    if (error) {
      console.error('Error deleting application:', error.message);
      return;
    }

    setApplications(applications.filter((app) => `${app.id}` !== id));
  };

  const exportToCsv = () => {
    const csvConfig = mkConfig({
      useKeysAsHeaders: true,
      filename: `applications_${new Date().toISOString().split('T')[0]}`,
    });

    const data = applications.map((app) => ({
      company: app.company_name,
      position: app.company_name,
      appliedDate: dayjs(app.created_at).format('MMMM Do YYYY h:mm A'),
      location: app.location,
      link: app.link,
      role: app.role,
      status: app.status.charAt(0).toUpperCase() + app.status.slice(1),
    }));

    const csvOutput = generateCsv(csvConfig)(data);
    const csvString = asString(csvOutput);

    const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${csvConfig.filename}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };
  //TODO: Add functionality such that users can update the status of an internship!
  //Check out https://ui.shadcn.com/docs/components/dialog for the popup
  //(i.e, they can click on the status, and it should bring a popup where they can change the status.)
  /*
  Recommended steps:
  1. console.log() the status each time you change it, and see if its actually changing
  2. query the database (remember to only update the internship that they are changing the status of, use the unique id)
  3. verify changes are being made
  */
  return (
    <Card className="p-6">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-3xl font-semibold">Recent Applications</h2>
        <div className="flex items-center gap-4">
          <Button onClick={exportToCsv} variant="outline">
            Export to CSV
            <Download />
          </Button>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
            <Input
              placeholder="Search..."
              className="w-[300px] border-[#374151] pl-10 text-white"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>
      <Table id="applications-table">
        <TableHeader>
          <TableRow>
            <TableHead>Select</TableHead>
            <TableHead>Company</TableHead>
            <TableHead>Position</TableHead>
            <TableHead>Applied Date</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Application Link</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="w-[50px]"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredApplications.map((app) => (
            <TableRow key={app.id}>
              <TableCell>
                <input
                  type="checkbox"
                  onChange={(e) => {
                    if (e.target.checked) {
                      /* 
                      TODO: this will log everytime the checkbox is checked on
                      Make it such that a user can check multiple (or just even 1)
                      checkboxes, and create a delete button (next to the export to csv button)
                      that allows them to delete checkboxes that are currently checked.
                      you will need to store which checkboxes are currently checked somewhere,
                      and then create a function called handleDelete, which the delete button will
                      trigger, and use the stored checkboxes to delete those checkBoxes only.
                      If they check it off, then remove it from the place where you are storing them.
                      */
                      console.log(`Checked internship id: ${app.id}`);
                    }
                  }}
                />
              </TableCell>
              <TableCell className="font-medium">{app.company_name}</TableCell>
              <TableCell>{app.company_name}</TableCell>
              <TableCell>{dayjs(app.created_at).format('MMMM Do YYYY h:mm A')}</TableCell>
              <TableCell>{app.location}</TableCell>
              <TableCell>
                <a href={app.link}>{app.link}</a>
              </TableCell>
              <TableCell>{app.role}</TableCell>
              <TableCell>
                <span
                  className={`rounded-full px-3 py-1 text-sm ${
                    app.status === 'Accepted'
                      ? 'bg-[#e8faf3] text-[#00ac4f]'
                      : app.status === 'Rejected'
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
