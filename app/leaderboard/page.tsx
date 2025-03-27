'use client';

import '../globals.css';
import React, { JSX } from 'react';
import { LeaderboardHeader } from '@/components/leaderboard/header';
import { LeaderboardMetrics } from '@/components/leaderboard/metrics';
import { LeaderboardTable } from '@/components/leaderboard/table';
import { motion } from 'framer-motion';
import { Progress } from '@/components/ui/progress';

const fadeInVariants = { initial: { opacity: 0 }, animate: { opacity: 1 } };

const Explore: React.FC = (): JSX.Element => {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const duration = 3000;
    const increment = 100 / (duration / 50);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + increment;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  if (progress < 100) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="w-1/2">
          <Progress value={progress} className="w-full" />
          <p className="mt-2 text-center text-gray-500">Loading leaderboard...</p>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={fadeInVariants}
      transition={{ duration: 1, ease: 'easeInOut' }}
    >
      <section
        id="leaderboard-section"
        className="ineed.io-explore-page flex min-h-screen flex-col gap-6 p-6"
      >
        <LeaderboardHeader />
        <LeaderboardMetrics />
        <LeaderboardTable />
      </section>
    </motion.div>
  );
};

export default Explore;
