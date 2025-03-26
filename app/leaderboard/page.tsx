'use client';

import '../globals.css';
import React, { JSX } from 'react';
import { LeaderboardHeader } from '@/components/leaderboard/header';
import { LeaderboardMetrics } from '@/components/leaderboard/metrics';
import { LeaderboardTable } from '@/components/leaderboard/table';
import { motion } from 'framer-motion';

const fadeInVariants = { initial: { opacity: 0 }, animate: { opacity: 1 } };

const Explore: React.FC = (): JSX.Element => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={fadeInVariants}
      transition={{ duration: 1, ease: 'easeInOut' }}
    >
      <div className="ineed.io-explore-page min-h-screen p-6 text-white">
        <LeaderboardHeader />
        <div className="mt-6 space-y-6">
          <LeaderboardMetrics />
          <LeaderboardTable />
        </div>
      </div>
    </motion.div>
  );
};

export default Explore;
