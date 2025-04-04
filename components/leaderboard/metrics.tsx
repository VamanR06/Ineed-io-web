import { fetchAdminMetrics, fetchUserCount } from '@/app/actions';
import { Card } from '@/components/ui/card';
import { Mail, Twitter, Users } from 'lucide-react';
import { use, useEffect, useState } from 'react';

/* 
TODO #8 (Large TODO): Add metrics for the following:
1. total users
2. total applications
3. overall rejection rate
4. overall success rate
5. overall pending rate (which is 1 - rejection rate - success rate)

There is an "admin_metrics" table which has this information, fetch the data from there and display it in these cards
Remove any additional cards that aren't needed as well, think about other metrics, which we can implement later.
*/

export function LeaderboardMetrics() {
  const [totalUserCount, setTotalUserCount] = useState<String>();
  const [totalApplications, setApplications] = useState();
  const [RejRate, setRejRate] = useState<String>();
  const [SucRate, setSucRate] = useState<String>();
  const [pendRate, setPendRate] = useState<String>();

  const fetchMetrics = async () => {
    const data = await fetchAdminMetrics();
    const userCount = await fetchUserCount();
    if (data && userCount) {
      setTotalUserCount(String(userCount));
      setApplications(data[0].total_applications);
      setRejRate((data[0].rejection_rate * 100).toFixed(2));
      setSucRate((data[0].success_rate * 100).toFixed(2));
      setPendRate(data[0].pending_rate.toFixed(2));
    }
  };
  useEffect(() => {
    fetchMetrics();
  }, []);

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card className="border-[#374151] p-4 shadow-md shadow-foreground">
        <div className="flex flex-col">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm text-gray-400">Active last 30d</span>
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#374151]">
              <span className="text-xs">i</span>
            </div>
          </div>
          <div className="mb-1 text-2xl font-bold">{totalUserCount}</div>
          <div className="text-sm text-gray-400">Users made applications</div>
          <div className="mt-4 text-sm text-gray-400">100% of all</div>
        </div>
      </Card>

      <Card className="border-[#374151] p-4 shadow-md shadow-foreground">
        <div className="flex flex-col">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm text-gray-400">Total applications</span>
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#374151]">
              <span className="text-xs">i</span>
            </div>
          </div>
          <div className="mb-1 text-2xl font-bold">{totalApplications}</div>
          <div className="text-sm text-gray-400">Across all platforms</div>
          <div className="mt-4 text-sm text-gray-400">$694.7 average</div>
        </div>
      </Card>

      <Card className="border-[#374151] p-4 shadow-md shadow-foreground">
        <div className="flex flex-col">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm text-gray-400">Total Success rate</span>
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#374151]">
              <span className="text-xs">i</span>
            </div>
          </div>
          <div className="mb-1 text-2xl font-bold">{String(SucRate)}%</div>
          <div className="text-sm text-gray-400">Total</div>
          <div className="mt-4 text-sm text-gray-400">95% have 10+ applications</div>
        </div>
      </Card>

      <Card className="border-[#374151] p-4 shadow-md shadow-foreground">
        <div className="flex flex-col">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm text-gray-400">Total Rejection rate</span>
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#374151]">
              <span className="text-xs">i</span>
            </div>
          </div>
          <div className="mb-1 text-2xl font-bold">{RejRate}%</div>
          <div className="text-sm text-gray-400">Total</div>
          <div className="mt-4 text-sm text-gray-400">95% have 10+ applications</div>
        </div>
      </Card>

      <Card className="border-[#374151] p-4 shadow-md shadow-foreground">
        <div className="flex flex-col">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm text-gray-400">Total Pending rate</span>
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#374151]">
              <span className="text-xs">i</span>
            </div>
          </div>
          <div className="mb-1 text-2xl font-bold">{pendRate}%</div>
          <div className="text-sm text-gray-400">Total</div>
          <div className="mt-4 text-sm text-gray-400">95% have 10+ applications</div>
        </div>
      </Card>
    </div>
  );
}
