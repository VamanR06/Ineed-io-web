import { Card } from '@/components/ui/card';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      beginAtZero: true,
    },
  },
};

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      data: [65, 59, 80, 81, 56, 55, 40, 88, 45, 95, 75, 85],
      backgroundColor: '#40c463',
      borderRadius: 6,
    },
  ],
};

export function ActivityChart() {
  return (
    <Card className="p-6">
      <h2 className="mb-6 text-xl font-semibold">Activity</h2>
      <div className="flex justify-center">
        <div className="h-[300px] w-full max-w-3xl">
          <Bar options={options} data={data} />
        </div>
      </div>
    </Card>
  );
}
