import React from 'react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="fixed bottom-0 h-20 w-full bg-white shadow-sm dark:bg-[var(--background)]">
      <div className="mx-auto w-full max-w-screen-xl px-2 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <span className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
          © {year}{' '}
          <a href="https://ineedio.vercel.app" className="hover:underline">
            Ineed.io
          </a>
          . All Rights Reserved.
        </span>
        <ul className="mt-3 flex flex-wrap items-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="#" className="me-4 hover:underline md:me-6">
              Settings
            </a>
            <a href="#" className="hover:underline">
              FAQ
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
