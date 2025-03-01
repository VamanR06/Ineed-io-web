import '../globals.css';
import React, { JSX } from 'react';
import { LeaderboardHeader } from '@/components/leaderboard/header';
import { LeaderboardMetrics } from '@/components/leaderboard/metrics';
import { LeaderboardTable } from '@/components/leaderboard/table';

const Explore: React.FC = (): JSX.Element => {
  return (
    <div className="ineed.io-explore-page min-h-screen p-6 text-white">
      <LeaderboardHeader />
      <div className="mt-6 space-y-6">
        <LeaderboardMetrics />
        <LeaderboardTable />
      </div>
    </div>
  );
};

export default Explore;
