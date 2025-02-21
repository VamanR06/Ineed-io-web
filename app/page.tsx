'use client';
import Head from 'next/head';
import Link from 'next/link';
import './globals.css';
import React, { useState, useEffect } from 'react';
import { User } from '@/types/user';
import { createClient } from '@/utils/supabase/client';
import Image from 'next/image';

const Home: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      const supabase = createClient();
      const { data, error } = await supabase.auth.getUser();
      if (!error && isMounted) {
        setUser(data.user as User);
      }
    };
    fetchData();
    return () => {
      isMounted = false;
    };
  }, []);
  return (
    <div className="">
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
                href={user ? '/dashboard' : '/login'}
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
            <div>
              <div className="bg-primary-100 dark:bg-primary-900 mb-4 flex h-10 w-10 items-center justify-center rounded-full lg:h-12 lg:w-12">
                <svg
                  className="text-primary-600 dark:text-primary-300 h-5 w-5 lg:h-6 lg:w-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">Deadlines & Reminders</h3>
              <p className="text-gray-500 dark:text-gray-400">
                <span>
                  <strong>Never miss an opportunity</strong>
                  <br></br>Set reminders for application deadlines, interview dates, and important
                  follow-ups to stay ahead in your job search.
                </span>
              </p>
            </div>
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
                    d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                  <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path>
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">Progress Insights</h3>
              <p className="text-gray-500 dark:text-gray-400">
                <span>
                  <strong>Analyze your journey</strong>
                  <br></br>Get valuable insights into your applications—see response rates, track
                  trends, and refine your approach for better results.
                </span>
              </p>
            </div>
            <div>
              <div className="bg-primary-100 dark:bg-primary-900 mb-4 flex h-10 w-10 items-center justify-center rounded-full lg:h-12 lg:w-12">
                <svg
                  className="text-primary-600 dark:text-primary-300 h-5 w-5 lg:h-6 lg:w-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path>
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">
                Resume & Cover Letter Management
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                <span>
                  <strong>Keep your materials ready</strong>
                  <br></br>Store and manage multiple versions of your resume and cover letter for
                  easy access and quick customization.
                </span>
              </p>
            </div>
            <div>
              <div className="bg-primary-100 dark:bg-primary-900 mb-4 flex h-10 w-10 items-center justify-center rounded-full lg:h-12 lg:w-12">
                <svg
                  className="text-primary-600 dark:text-primary-300 h-5 w-5 lg:h-6 lg:w-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">Networking & Outreach</h3>
              <p className="text-gray-500 dark:text-gray-400">
                <span>
                  <strong>Build meaningful connections</strong>
                  <br></br>Keep track of networking efforts, recruiter contacts, and informational
                  interviews to strengthen your job search.
                </span>
              </p>
            </div>
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
                    d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">Interview Preparation</h3>
              <p className="text-gray-500 dark:text-gray-400">
                <span>
                  <strong>Ace your interviews</strong>
                  <br></br>Organize interview dates, take notes, and review common questions to
                  boost your confidence and performance.
                </span>
              </p>
            </div>
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
            width={1200} // Set the width of the image
            height={800} // Set the height of the image
          />
          <Image
            className="hidden w-full dark:block"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg"
            alt="dashboard image"
            width={1200} // Set the width of the image
            height={800} // Set the height of the image
          />
          <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Stay organized. Stay motivated. Land your dream internship.
            </h2>
            <p className="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">
              Searching for internships can be overwhelming, but it doesn’t have to be. Our platform
              helps you track applications, set reminders, and stay on top of deadlines
              effortlessly. Get insights into your progress, manage your networking efforts, and
              streamline your job search—all in one place. Whether you're applying to your first
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
    </div>
  );
};

export default Home;
