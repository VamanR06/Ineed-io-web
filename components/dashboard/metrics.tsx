import { Users2, UserPlus, TrendingUp } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Application } from '@/types/application';

export function DashboardMetrics({ applications = [] }: { applications: Application[] }) {
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
  console.log(applications);

  const filterLast30Days = (applications: Application[]): Application[] => {
    const now = new Date();
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(now.getDate() - 30);

    return applications.filter((item) => {
      const date = new Date(item.reminder);
      return date >= thirtyDaysAgo && date <= now;
    });
  };

  const filterPrev30Days = (applications: Application[]): Application[] => {
    const now = new Date();
    const thirtyDaysAgo = new Date();
    const sixtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(now.getDate() - 30);
    sixtyDaysAgo.setDate(now.getDate() - 60);

    return applications.filter((item) => {
      const date = new Date(item.reminder);
      return date <= thirtyDaysAgo && date >= sixtyDaysAgo;
    });
  };

  const filter30DaysOrMore = (applications: Application[]): Application[] => {
    const now = new Date();
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(now.getDate() - 30);

    return applications.filter((item) => {
      const date = new Date(item.reminder);
      return date <= thirtyDaysAgo;
    });
  };

  /*
  const filterActive = (applications: Application[]): Application[] => {
    return applications.filter((item) => {
      return item.status === 'Pending';
    });
  };

 */
  const pendingApplications = applications.filter((item) => {
    return item.status === 'Pending';
  });
  const currAcceptedApplications = applications.filter((item) => {
    return item.status === 'Accepted';
  }).length;
  const currRejectedApplications = applications.filter((item) => {
    return item.status === 'Rejected';
  }).length;
  const prevAcceptedApplications = filter30DaysOrMore(applications).filter((item) => {
    return item.status === 'Accepted';
  }).length;
  const prevRejectedApplications = filter30DaysOrMore(applications).filter((item) => {
    return item.status === 'Rejected';
  }).length;
  const prevTotalResults = prevAcceptedApplications + prevRejectedApplications;
  const prevRejectionRate = prevRejectedApplications / prevTotalResults;
  const currTotalResults = currAcceptedApplications + currRejectedApplications;
  const currRejectionRate = currRejectedApplications / currTotalResults;
  const ratePercentChange =
    Math.round(((currRejectionRate - prevRejectionRate) / prevRejectionRate) * 100 * 10) / 10;

  const recentApplications = filterLast30Days(applications);
  const prevApplications = filterPrev30Days(applications);
  const totalCount = applications.length;
  const pendingCount = pendingApplications.length;
  const applicationPercentIncrease =
    prevApplications.length > 0
      ? Math.round(
          ((recentApplications.length - prevApplications.length) / prevApplications.length) *
            100 *
            10
        ) / 10
      : 100;

  const metrics = [
    {
      title: 'Active Applications',
      value: pendingCount + '/' + totalCount,
      trend: Math.round((pendingCount / totalCount) * 100 * 10) / 10,
      icon: Users2,
      total: applications.length,
    },
    {
      title: 'Total Applications this Month',
      value: recentApplications.length,
      trend: applicationPercentIncrease,
      icon: UserPlus,
    },
    {
      title: 'Rejection Rate',
      value: Math.round(currRejectionRate * 100 * 10) / 10 + '%',
      trend: ratePercentChange,
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
              {metric.title !== 'Active Applications' ? (
                <p
                  className={`text-sm ${metric.trend >= 0 ? (metric.title === 'Total Applications this Month' ? 'text-[#00ac4f]' : 'text-red-500') : metric.title === 'Total Applications this Month' ? 'text-red-500' : 'text-[#00ac4f]'}`}
                >
                  {metric.trend >= 0 ? '↑' : '↓'} {Math.abs(metric.trend)}% from previous
                </p>
              ) : (
                <p className={`text-sm text-gray-500`}>{Math.abs(metric.trend)}% of total</p>
              )}
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
