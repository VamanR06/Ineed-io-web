import { Users2, UserPlus, TrendingUp } from 'lucide-react';
import { Card } from '@/components/ui/card';

export function DashboardMetrics() {
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
