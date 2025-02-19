import { Users2, UserPlus, TrendingUp } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Application } from '@/types/application';

export function DashboardMetrics({ applications = [] }: { applications?: Application[] }) {
  {
    /* TODO: We need to calculate the total amount of applications the user has, and use that as the total applications
      Follow these steps in order:
      1. applications is being passed as a prop, which is an array of Application objects
      2. console.log(applications) To see what applications look like
      3. Active applications are applications that have a "pending status". To calculate the total, use filter, and calculate the array length
      4. Example:

      const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

      const longWords = words.filter(word => word.length > 6);

      5. Total length of array can just be applications.length
      6. So formula for active applications is pendingApplications.length / applications.length
      7. Replace Success Rate with Rejection Rate, which is rejectedApplications.length / applications.length (follow similar logic above)
      8. Replace the metrics array with the variables you created above
      */
  }
  const metrics = [
    {
      title: 'Active Applications',
      value: '40/4,800',
      trend: 16,
      icon: Users2,
    },
    {
      title: 'Total Applications',
      value: '10,823',
      trend: -1,
      icon: UserPlus,
    },
    {
      title: 'Success Rate',
      value: '64%',
      trend: 12,
      icon: TrendingUp,
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-3">
      {metrics.map((metric) => (
        <Card key={metric.title} className="p-6">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e8faf3]">
              <metric.icon className="h-6 w-6 text-[#00ac4f]" />
            </div>
            <div>
              <p className="text-sm text-gray-500">{metric.title}</p>
              <p className="text-2xl font-semibold">{metric.value}</p>
              <p className={`text-sm ${metric.trend > 0 ? 'text-[#00ac4f]' : 'text-red-500'}`}>
                {metric.trend > 0 ? '↑' : '↓'} {Math.abs(metric.trend)}% this month
              </p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
