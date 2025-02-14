import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto w-full bg-white shadow-sm dark:bg-[var(--background)]">
      <div className="mx-auto w-full max-w-screen-xl p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link href="/" className="mb-4 flex items-center space-x-3 sm:mb-0 rtl:space-x-reverse">
            <Image src="/images/logo.png" alt="Logo" width={32} height={32} />
            <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
              Ineed.io
            </span>
          </Link>
          <ul className="mb-6 flex flex-wrap items-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:mb-0">
            <li>
              <Link href="/" className="me-4 hover:underline md:me-6">
                Home
              </Link>
            </li>
            <li>
              <Link href="/faq" className="me-4 hover:underline md:me-6">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/explore" className="me-4 hover:underline md:me-6">
                Explore
              </Link>
            </li>
            <li>
              <Link href="/settings" className="me-4 hover:underline md:me-6">
                Settings
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-gray-500 dark:text-gray-400 sm:text-center">
          © {year}{' '}
          <Link href="/" className="hover:underline">
            Ineed.io™
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
