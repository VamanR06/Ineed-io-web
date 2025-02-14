"use client"

import Head from "next/head";
import Link from "next/link";
import "./globals.css"
import React, {useState, useEffect} from "react";
import { User } from "@/types/user";
import { createClient } from "@/utils/supabase/client";

const Home: React.FC = () => {
  const [user, setUser] = useState<User>();
  useEffect(() => {
    const fetchData = async () => {
      const supabase = await createClient();
      const { data, error } = await supabase.auth.getUser();
      if(!error){
        setUser(data.user as User);
      }
    };
    fetchData();
  }, [])
  return (
    <div className="">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="relative">
        <div className="px-4 pt-10 mx-auto max-w-7xl md:pt-16">
          <div className="w-full pb-5 mx-auto text-center md:w-11/12">
            <h1 className="mb-3 text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-100 md:text-6xl">
              Internship tracker
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r dark:bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 dark:from-pink-500 dark:via-purple-400 dark:to-indigo-500">
                made competitive.
              </span>
            </h1>
            <p className="max-w-xl pt-5 mx-auto text-lg text-gray-600 dark:text-gray-400 md:text-lg">
              Ineed.io is an internship tracker that allows you to easily track all your internships! Add custom reminders, update statuses, earn badges, and more! Compete with other users while tracking all your internship information!
            </p>
            <div className="mt-6 text-center md:ml-6">
            <Link href={user ? "/dashboard" : "/login"} aria-label="get started" className="inline-flex items-center px-5 py-3 text-sm font-medium text-gray-300 transition duration-300 bg-black rounded hover:bg-gray-800 dark:hover:bg-gray-200 dark:text-gray-700 dark:bg-white"><span className="flex justify-center">Get Started →</span></Link>
            <br className="sm:hidden" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home;
