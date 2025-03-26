'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

const fadeInVariants = { initial: { opacity: 0 }, animate: { opacity: 1 } };

const Landing = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={fadeInVariants}
      transition={{ duration: 1, ease: 'easeInOut' }}
    >
      {/* Landing section */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-4 pt-10 md:pt-16">
          <div className="mx-auto w-full pb-5 text-center md:w-11/12">
            <h1 className="mb-3 text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-100 md:text-6xl">
              Internship tracker
              <br />
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent dark:bg-gradient-to-r dark:from-pink-500 dark:via-purple-400 dark:to-indigo-500">
                made competitive.
              </span>
            </h1>
            <p className="mx-auto max-w-xl pt-5 text-lg text-gray-600 dark:text-gray-400 md:text-lg">
              Ineed.io is an internship tracker that allows you to easily track all your
              internships! Add custom reminders, update statuses, earn badges, and more! Compete
              with other users while tracking all your internship information!
            </p>
            <div className="mt-6 text-center md:ml-6">
              <Link
                href="/login"
                aria-label="get started"
                className="inline-flex items-center rounded bg-black px-5 py-3 text-sm font-medium text-gray-300 transition duration-300 hover:bg-gray-800 dark:bg-white dark:text-gray-700 dark:hover:bg-gray-200"
              >
                <span className="flex justify-center">Get Started →</span>
              </Link>
              <br className="sm:hidden" />
            </div>
          </div>
        </div>
      </section>
      {/* Features section */}
      <section className="relative">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
          <div className="mb-8 max-w-screen-md lg:mb-16">
            <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Designed to help you meet your goals
            </h2>
            <p className="text-gray-500 dark:text-gray-400 sm:text-xl">
              At Ineed.io, we help you stay organized and motivated in your internship search. Track
              your progress, stay consistent, and turn your career goals into reality—all in one
              place.
            </p>
          </div>
          <div className="space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0 lg:grid-cols-3">
            <div>
              <div className="bg-primary-100 dark:bg-primary-900 mb-4 flex h-10 w-10 items-center justify-center rounded-full lg:h-12 lg:w-12">
                <svg
                  className="text-primary-600 dark:text-primary-300 h-5 w-5 lg:h-6 lg:w-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">Internship Tracking</h3>
              <p className="text-gray-500 dark:text-gray-400">
                <span>
                  <strong>Stay on top of your applications </strong>
                  <br></br>Easily track every internship application, from submission to follow-ups,
                  all in one organized dashboard.
                </span>
              </p>
            </div>
            {/* Other feature items remain unchanged */}
          </div>
        </div>
      </section>
      {/* CTA section */}
      <section className="relative">
        <div className="mx-auto max-w-screen-xl items-center gap-8 px-4 py-8 sm:py-16 md:grid md:grid-cols-2 lg:px-6 xl:gap-16">
          <Image
            className="w-full dark:hidden"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg"
            alt="dashboard image"
            width={1200}
            height={800}
          />
          <Image
            className="hidden w-full dark:block"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg"
            alt="dashboard image"
            width={1200}
            height={800}
          />
          <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Stay organized. Stay motivated. Land your dream internship.
            </h2>
            <p className="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">
              Searching for internships can be overwhelming, but it doesn’t have to be. Our platform
              helps you track applications, set reminders, and stay on top of deadlines
              effortlessly. Get insights into your progress, manage your networking efforts, and
              streamline your job search—all in one place. Whether you‘re applying to your first
              internship or refining your career path, we’re here to keep you focused and on track.
            </p>
            <Link
              href="/login"
              className="bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:focus:ring-primary-900 inline-flex items-center rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white focus:ring-4"
            >
              Get started
              <svg
                className="-mr-1 ml-2 h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Landing;
