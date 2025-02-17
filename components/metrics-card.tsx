import { Card } from '@/components/ui/card';

interface MetricCardProps {
  title: string;
  value: string;
  subtitle?: string;
  chart?: 'trend';
  trend?: 'up' | 'down';
}

export function MetricCard({ title, value, subtitle, chart }: MetricCardProps) {
  return (
    <Card className="p-6">
      <h3 className="text-sm font-medium text-gray-500">{title}</h3>
      <div className="mt-2 flex items-baseline">
        <p className="text-2xl font-semibold text-gray-900">{value}</p>
        {subtitle && <p className="ml-2 text-sm text-gray-500">{subtitle}</p>}
      </div>
      {chart === 'trend' && (
        <div className="mt-4">
          <svg
            className="h-12 w-full"
            viewBox="0 0 200 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 35C8 32 28 20 50 20C72 20 92 35 114 35C136 35 158 10 180 10C202 10 222 30 230 35"
              stroke="#3B82F6"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
      )}
    </Card>
  );
}
