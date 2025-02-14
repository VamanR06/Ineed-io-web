import { DashboardHeader } from '@/components/dashboard/header';
import { DashboardMetrics } from '@/components/dashboard/metrics';
import { ApplicationsTable } from '@/components/dashboard/applications-table';
import { SubmissionsCalendar } from '@/components/dashboard/submissions-calendar';
import { ActivityChart } from '@/components/dashboard/activity-chart';
import { NewApplicationForm } from '@/components/dashboard/new-application-form';
import { TimePickerDemo } from '@/components/dashboard/time-picker';
import '../globals.css';

export default function DashboardPage() {
  return (
    <div className="ineed.io-dashboard-page min-h-screen bg-background p-6">
      <DashboardHeader />
      <div className="mt-6 space-y-6">
        <DashboardMetrics />
        <div className="grid gap-6 lg:grid-cols-2">
          <ActivityChart />
          <SubmissionsCalendar />
        </div>
        <NewApplicationForm />
        <ApplicationsTable />
        <TimePickerDemo />
      </div>
    </div>
  );
}
