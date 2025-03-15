import React from 'react';
import Image from 'next/image';
import '../globals.css';

const TeamPage: React.FC = () => {
  /* TODO: Add all team members to this page, don't worry about images and links to social media profiles for now, and make sure the background is consistent with the theme.  */
  /* Find your name and fill out the information, look at David Nguyen for reference */
  return (
    <div className="ineed.io-team-page">
      <section className="relative">
        <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
          <div className="mx-auto mb-8 max-w-screen-sm text-center lg:mb-16">
            <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Our Team
            </h2>
            <p className="font-light text-gray-500 dark:text-gray-400 sm:text-xl lg:mb-16">
              Explore the whole collection of open-source web components and elements built with the
              utility classes from Tailwind
            </p>
          </div>
          <div className="mb-6 grid gap-8 md:grid-cols-2 lg:mb-16">

          <div className="items-center rounded-lg shadow dark:border-gray-700 dark:bg-gray-800 sm:flex">
              <a href="#">
                {/*Lets have this be the image each person's account pfp*/}
                <Image
                  className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                  src="/images/logo.png"
                  alt="Pravesh Avatar"
                  width={500}
                  height={500}
                />
              </a>
              <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <p>Pravesh Kunwar</p>
                </h3>
                <span className="text-gray-500 dark:text-gray-400">Lead Developer</span>
                <p className="mb-4 mt-3 font-light text-gray-500 dark:text-gray-400">
                  {/*Write your major and minor and delete the {}, /*, */}
                </p>
                <ul className="flex space-x-4 sm:mt-0">

                  <li>
                    <a href="Paste your LinkedIn URL here" className="text-gray-500 transition duration-300 ease-in-out hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                      <svg className="h-5 w-5" 
                           fill="currentColor" 
                           viewBox="0 0 24 24" 
                           aria-hidden="true">
                        <path 
                            fillRule="evenodd" 
                            clipRule="evenodd" 
                            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.5c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.5h-3v-5.5c0-1.104-.896-2-2-2s-2 .896-2 2v5.5h-3v-10h3v1.235c.837-1.26 2.51-1.996 4-1.996 2.209 0 4 1.791 4 4v6.761z"/>
                      </svg>
                    </a>
                  </li>

                  <li>
                    <a href="Paste your GitHub URL here" className="text-gray-500 transition duration-300 ease-in-out hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                      <svg className="h-5 w-5" 
                           fill="currentColor" 
                           viewBox="0 0 24 24" 
                           aria-hidden="true">
                        <path 
                            fillRule="evenodd" 
                            clipRule="evenodd" 
                            d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.64.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03A9.56 9.56 0 0112 6.84c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                      </svg>
                    </a>
                  </li>

                  <li>
                    <a href="Paste your Website URL here, delete this section if you don't" className="text-gray-500 transition duration-300 ease-in-out hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="items-center rounded-lg shadow dark:border-gray-700 dark:bg-gray-800 sm:flex">
              <a href="#">
                {/*Lets have this be the image each person's account pfp*/}
                <Image
                  className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                  src="/images/logo.png"
                  alt="Ali Avatar"
                  width={500}
                  height={500}
                />
              </a>
              <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <p>Ali Monthana</p>
                </h3>
                <span className="text-gray-500 dark:text-gray-400">Developer</span>
                <p className="mb-4 mt-3 font-light text-gray-500 dark:text-gray-400">
                  {/*Write your major and minor and delete the {}, /*, */}
                </p>
                <ul className="flex space-x-4 sm:mt-0">

                  <li>
                    <a href="Paste your LinkedIn URL here" className="text-gray-500 transition duration-300 ease-in-out hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                      <svg className="h-5 w-5" 
                           fill="currentColor" 
                           viewBox="0 0 24 24" 
                           aria-hidden="true">
                        <path 
                            fillRule="evenodd" 
                            clipRule="evenodd" 
                            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.5c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.5h-3v-5.5c0-1.104-.896-2-2-2s-2 .896-2 2v5.5h-3v-10h3v1.235c.837-1.26 2.51-1.996 4-1.996 2.209 0 4 1.791 4 4v6.761z"/>
                      </svg>
                    </a>
                  </li>

                  <li>
                    <a href="Paste your GitHub URL here" className="text-gray-500 transition duration-300 ease-in-out hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                      <svg className="h-5 w-5" 
                           fill="currentColor" 
                           viewBox="0 0 24 24" 
                           aria-hidden="true">
                        <path 
                            fillRule="evenodd" 
                            clipRule="evenodd" 
                            d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.64.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03A9.56 9.56 0 0112 6.84c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                      </svg>
                    </a>
                  </li>

                  <li>
                    <a href="Paste your Website URL here, delete this section if you don't" className="text-gray-500 transition duration-300 ease-in-out hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="items-center rounded-lg shadow dark:border-gray-700 dark:bg-gray-800 sm:flex">
              <a href="#">
                {/*Lets have this be the image each person's account pfp*/}
                <Image
                  className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                  src="/images/logo.png"
                  alt="Anthony Avatar"
                  width={500}
                  height={500}
                />
              </a>
              <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <p>Anthony Nguyen</p>
                </h3>
                <span className="text-gray-500 dark:text-gray-400">Developer</span>
                <p className="mb-4 mt-3 font-light text-gray-500 dark:text-gray-400">
                  {/*Write your major and minor and delete the {}, /*, */}
                </p>
                <ul className="flex space-x-4 sm:mt-0">

                  <li>
                    <a href="Paste your LinkedIn URL here" className="text-gray-500 transition duration-300 ease-in-out hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                      <svg className="h-5 w-5" 
                           fill="currentColor" 
                           viewBox="0 0 24 24" 
                           aria-hidden="true">
                        <path 
                            fillRule="evenodd" 
                            clipRule="evenodd" 
                            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.5c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.5h-3v-5.5c0-1.104-.896-2-2-2s-2 .896-2 2v5.5h-3v-10h3v1.235c.837-1.26 2.51-1.996 4-1.996 2.209 0 4 1.791 4 4v6.761z"/>
                      </svg>
                    </a>
                  </li>

                  <li>
                    <a href="Paste your GitHub URL here" className="text-gray-500 transition duration-300 ease-in-out hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                      <svg className="h-5 w-5" 
                           fill="currentColor" 
                           viewBox="0 0 24 24" 
                           aria-hidden="true">
                        <path 
                            fillRule="evenodd" 
                            clipRule="evenodd" 
                            d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.64.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03A9.56 9.56 0 0112 6.84c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                      </svg>
                    </a>
                  </li>

                  <li>
                    <a href="Paste your Website URL here, delete this section if you don't" className="text-gray-500 transition duration-300 ease-in-out hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="items-center rounded-lg shadow dark:border-gray-700 dark:bg-gray-800 sm:flex">
              <a href="#">
                {/*Lets have this be the image each person's account pfp*/}
                <Image
                  className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                  src="/images/logo.png"
                  alt="Brandon Avatar"
                  width={500}
                  height={500}
                />
              </a>
              <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <p>Brandon Shin</p>
                </h3>
                <span className="text-gray-500 dark:text-gray-400">Developer</span>
                <p className="mb-4 mt-3 font-light text-gray-500 dark:text-gray-400">
                  {/*Write your major and minor and delete the {}, /*, */}
                </p>
                <ul className="flex space-x-4 sm:mt-0">

                  <li>
                    <a href="Paste your LinkedIn URL here" className="text-gray-500 transition duration-300 ease-in-out hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                      <svg className="h-5 w-5" 
                           fill="currentColor" 
                           viewBox="0 0 24 24" 
                           aria-hidden="true">
                        <path 
                            fillRule="evenodd" 
                            clipRule="evenodd" 
                            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.5c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.5h-3v-5.5c0-1.104-.896-2-2-2s-2 .896-2 2v5.5h-3v-10h3v1.235c.837-1.26 2.51-1.996 4-1.996 2.209 0 4 1.791 4 4v6.761z"/>
                      </svg>
                    </a>
                  </li>

                  <li>
                    <a href="Paste your GitHub URL here" className="text-gray-500 transition duration-300 ease-in-out hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                      <svg className="h-5 w-5" 
                           fill="currentColor" 
                           viewBox="0 0 24 24" 
                           aria-hidden="true">
                        <path 
                            fillRule="evenodd" 
                            clipRule="evenodd" 
                            d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.64.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03A9.56 9.56 0 0112 6.84c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                      </svg>
                    </a>
                  </li>

                  <li>
                    <a href="Paste your Website URL here, delete this section if you don't" className="text-gray-500 transition duration-300 ease-in-out hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="items-center rounded-lg shadow dark:border-gray-700 dark:bg-gray-800 sm:flex">
              <a href="#">
                {/*Lets have this be the image each person's account pfp*/}
                <Image
                  className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                  src="/images/logo.png"
                  alt="Brandon Avatar"
                  width={500}
                  height={500}
                />
              </a>
              <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <p>Brandon Shin</p>
                </h3>
                <span className="text-gray-500 dark:text-gray-400">Developer</span>
                <p className="mb-4 mt-3 font-light text-gray-500 dark:text-gray-400">
                  {/*Write your major and minor and delete the {}, /*, */}
                </p>
                <ul className="flex space-x-4 sm:mt-0">

                  <li>
                    <a href="Paste your LinkedIn URL here" className="text-gray-500 transition duration-300 ease-in-out hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                      <svg className="h-5 w-5" 
                           fill="currentColor" 
                           viewBox="0 0 24 24" 
                           aria-hidden="true">
                        <path 
                            fillRule="evenodd" 
                            clipRule="evenodd" 
                            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.5c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.5h-3v-5.5c0-1.104-.896-2-2-2s-2 .896-2 2v5.5h-3v-10h3v1.235c.837-1.26 2.51-1.996 4-1.996 2.209 0 4 1.791 4 4v6.761z"/>
                      </svg>
                    </a>
                  </li>

                  <li>
                    <a href="Paste your GitHub URL here" className="text-gray-500 transition duration-300 ease-in-out hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                      <svg className="h-5 w-5" 
                           fill="currentColor" 
                           viewBox="0 0 24 24" 
                           aria-hidden="true">
                        <path 
                            fillRule="evenodd" 
                            clipRule="evenodd" 
                            d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.64.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03A9.56 9.56 0 0112 6.84c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                      </svg>
                    </a>
                  </li>

                  <li>
                    <a href="Paste your Website URL here, delete this section if you don't" className="text-gray-500 transition duration-300 ease-in-out hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="items-center rounded-lg shadow dark:border-gray-700 dark:bg-gray-800 sm:flex">
              <a href="#">
                {/*Lets have this be the image each person's account pfp*/}
                <Image
                  className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                  src="/images/logo.png"
                  alt="Darren Avatar"
                  width={500}
                  height={500}
                />
              </a>
              <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <p>Darren Du</p>
                </h3>
                <span className="text-gray-500 dark:text-gray-400">Developer</span>
                <p className="mb-4 mt-3 font-light text-gray-500 dark:text-gray-400">
                  {/*Write your major and minor and delete the {}, /*, */}
                </p>
                <ul className="flex space-x-4 sm:mt-0">

                  <li>
                    <a href="Paste your LinkedIn URL here" className="text-gray-500 transition duration-300 ease-in-out hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                      <svg className="h-5 w-5" 
                           fill="currentColor" 
                           viewBox="0 0 24 24" 
                           aria-hidden="true">
                        <path 
                            fillRule="evenodd" 
                            clipRule="evenodd" 
                            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.5c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.5h-3v-5.5c0-1.104-.896-2-2-2s-2 .896-2 2v5.5h-3v-10h3v1.235c.837-1.26 2.51-1.996 4-1.996 2.209 0 4 1.791 4 4v6.761z"/>
                      </svg>
                    </a>
                  </li>

                  <li>
                    <a href="Paste your GitHub URL here" className="text-gray-500 transition duration-300 ease-in-out hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                      <svg className="h-5 w-5" 
                           fill="currentColor" 
                           viewBox="0 0 24 24" 
                           aria-hidden="true">
                        <path 
                            fillRule="evenodd" 
                            clipRule="evenodd" 
                            d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.64.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03A9.56 9.56 0 0112 6.84c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                      </svg>
                    </a>
                  </li>

                  <li>
                    <a href="Paste your Website URL here, delete this section if you don't" className="text-gray-500 transition duration-300 ease-in-out hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="items-center rounded-lg shadow dark:border-gray-700 dark:bg-gray-800 sm:flex">
              <a href="#">
                {/*Lets have this be the image each person's account pfp*/}
                <Image
                  className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                  src="/images/logo.png"
                  alt="Conoor Avatar"
                  width={500}
                  height={500}
                />
              </a>
              <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <p>Connor Woods</p>
                </h3>
                <span className="text-gray-500 dark:text-gray-400">Developer</span>
                <p className="mb-4 mt-3 font-light text-gray-500 dark:text-gray-400">
                  {/*Write your major and minor and delete the {}, /*, */}
                </p>
                <ul className="flex space-x-4 sm:mt-0">

                  <li>
                    <a href="Paste your LinkedIn URL here" className="text-gray-500 transition duration-300 ease-in-out hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                      <svg className="h-5 w-5" 
                           fill="currentColor" 
                           viewBox="0 0 24 24" 
                           aria-hidden="true">
                        <path 
                            fillRule="evenodd" 
                            clipRule="evenodd" 
                            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.5c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.5h-3v-5.5c0-1.104-.896-2-2-2s-2 .896-2 2v5.5h-3v-10h3v1.235c.837-1.26 2.51-1.996 4-1.996 2.209 0 4 1.791 4 4v6.761z"/>
                      </svg>
                    </a>
                  </li>

                  <li>
                    <a href="Paste your GitHub URL here" className="text-gray-500 transition duration-300 ease-in-out hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                      <svg className="h-5 w-5" 
                           fill="currentColor" 
                           viewBox="0 0 24 24" 
                           aria-hidden="true">
                        <path 
                            fillRule="evenodd" 
                            clipRule="evenodd" 
                            d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.64.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03A9.56 9.56 0 0112 6.84c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                      </svg>
                    </a>
                  </li>

                  <li>
                    <a href="Paste your Website URL here, delete this section if you don't" className="text-gray-500 transition duration-300 ease-in-out hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

          <div className="items-center rounded-lg shadow dark:border-gray-700 dark:bg-gray-800 sm:flex">
              <a href="#">
                {/*Lets have this be the image each person's account pfp*/}
                <Image
                  className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                  src="/images/logo.png"
                  alt="David Avatar"
                  width={500}
                  height={500}
                />
              </a>
              <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <p>David Nguyen</p>
                </h3>
                <span className="text-gray-500 dark:text-gray-400">Developer</span>
                <p className="mb-4 mt-3 font-light text-gray-500 dark:text-gray-400">
                  Computer Science and Mathematics
                </p>
                <ul className="flex space-x-4 sm:mt-0">

                  <li>
                    <a href="https://www.linkedin.com/in/davidt-nguyen/" className="text-gray-500 transition duration-300 ease-in-out hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                      <svg className="h-5 w-5" 
                           fill="currentColor" 
                           viewBox="0 0 24 24" 
                           aria-hidden="true">
                        <path 
                            fillRule="evenodd" 
                            clipRule="evenodd" 
                            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.5c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.5h-3v-5.5c0-1.104-.896-2-2-2s-2 .896-2 2v5.5h-3v-10h3v1.235c.837-1.26 2.51-1.996 4-1.996 2.209 0 4 1.791 4 4v6.761z"/>
                      </svg>
                    </a>
                  </li>

                  <li>
                    <a href="https://github.com/dtnguyen0" className="text-gray-500 transition duration-300 ease-in-out hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                      <svg className="h-5 w-5" 
                           fill="currentColor" 
                           viewBox="0 0 24 24" 
                           aria-hidden="true">
                        <path 
                            fillRule="evenodd" 
                            clipRule="evenodd" 
                            d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.64.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03A9.56 9.56 0 0112 6.84c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                      </svg>
                    </a>
                  </li>

                  <li>
                    <a href="https://davidn.netlify.app/" className="text-gray-500 transition duration-300 ease-in-out hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="items-center rounded-lg shadow dark:border-gray-700 dark:bg-gray-800 sm:flex">
              <a href="#">
                {/*Lets have this be the image each person's account pfp*/}
                <Image
                  className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                  src="/images/logo.png"
                  alt="Dylan Avatar"
                  width={500}
                  height={500}
                />
              </a>
              <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <p>Dylan Kim</p>
                </h3>
                <span className="text-gray-500 dark:text-gray-400">Developer</span>
                <p className="mb-4 mt-3 font-light text-gray-500 dark:text-gray-400">
                  {/*Write your major and minor and delete the {}, /*, */}
                </p>
                <ul className="flex space-x-4 sm:mt-0">

                  <li>
                    <a href="Paste your LinkedIn URL here" className="text-gray-500 transition duration-300 ease-in-out hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                      <svg className="h-5 w-5" 
                           fill="currentColor" 
                           viewBox="0 0 24 24" 
                           aria-hidden="true">
                        <path 
                            fillRule="evenodd" 
                            clipRule="evenodd" 
                            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.5c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.5h-3v-5.5c0-1.104-.896-2-2-2s-2 .896-2 2v5.5h-3v-10h3v1.235c.837-1.26 2.51-1.996 4-1.996 2.209 0 4 1.791 4 4v6.761z"/>
                      </svg>
                    </a>
                  </li>

                  <li>
                    <a href="Paste your GitHub URL here" className="text-gray-500 transition duration-300 ease-in-out hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                      <svg className="h-5 w-5" 
                           fill="currentColor" 
                           viewBox="0 0 24 24" 
                           aria-hidden="true">
                        <path 
                            fillRule="evenodd" 
                            clipRule="evenodd" 
                            d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.64.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03A9.56 9.56 0 0112 6.84c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                      </svg>
                    </a>
                  </li>

                  <li>
                    <a href="Paste your Website URL here, delete this section if you don't" className="text-gray-500 transition duration-300 ease-in-out hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="items-center rounded-lg shadow dark:border-gray-700 dark:bg-gray-800 sm:flex">
              <a href="#">
                {/*Lets have this be the image each person's account pfp*/}
                <Image
                  className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                  src="/images/logo.png"
                  alt="Felix Avatar"
                  width={500}
                  height={500}
                />
              </a>
              <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <p>Felix Shen</p>
                </h3>
                <span className="text-gray-500 dark:text-gray-400">Developer</span>
                <p className="mb-4 mt-3 font-light text-gray-500 dark:text-gray-400">
                  {/*Write your major and minor and delete the {}, /*, */}
                </p>
                <ul className="flex space-x-4 sm:mt-0">

                  <li>
                    <a href="Paste your LinkedIn URL here" className="text-gray-500 transition duration-300 ease-in-out hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                      <svg className="h-5 w-5" 
                           fill="currentColor" 
                           viewBox="0 0 24 24" 
                           aria-hidden="true">
                        <path 
                            fillRule="evenodd" 
                            clipRule="evenodd" 
                            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.5c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.5h-3v-5.5c0-1.104-.896-2-2-2s-2 .896-2 2v5.5h-3v-10h3v1.235c.837-1.26 2.51-1.996 4-1.996 2.209 0 4 1.791 4 4v6.761z"/>
                      </svg>
                    </a>
                  </li>

                  <li>
                    <a href="Paste your GitHub URL here" className="text-gray-500 transition duration-300 ease-in-out hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                      <svg className="h-5 w-5" 
                           fill="currentColor" 
                           viewBox="0 0 24 24" 
                           aria-hidden="true">
                        <path 
                            fillRule="evenodd" 
                            clipRule="evenodd" 
                            d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.64.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03A9.56 9.56 0 0112 6.84c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                      </svg>
                    </a>
                  </li>

                  <li>
                    <a href="Paste your Website URL here, delete this section if you don't" className="text-gray-500 transition duration-300 ease-in-out hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="items-center rounded-lg shadow dark:border-gray-700 dark:bg-gray-800 sm:flex">
              <a href="#">
                {/*Lets have this be the image each person's account pfp*/}
                <Image
                  className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                  src="/images/logo.png"
                  alt="Forest Avatar"
                  width={500}
                  height={500}
                />
              </a>
              <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <p>Forest Qin</p>
                </h3>
                <span className="text-gray-500 dark:text-gray-400">Developer</span>
                <p className="mb-4 mt-3 font-light text-gray-500 dark:text-gray-400">
                  {/*Write your major and minor and delete the {}, /*, */}
                </p>
                <ul className="flex space-x-4 sm:mt-0">

                  <li>
                    <a href="Paste your LinkedIn URL here" className="text-gray-500 transition duration-300 ease-in-out hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                      <svg className="h-5 w-5" 
                           fill="currentColor" 
                           viewBox="0 0 24 24" 
                           aria-hidden="true">
                        <path 
                            fillRule="evenodd" 
                            clipRule="evenodd" 
                            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.5c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.5h-3v-5.5c0-1.104-.896-2-2-2s-2 .896-2 2v5.5h-3v-10h3v1.235c.837-1.26 2.51-1.996 4-1.996 2.209 0 4 1.791 4 4v6.761z"/>
                      </svg>
                    </a>
                  </li>

                  <li>
                    <a href="Paste your GitHub URL here" className="text-gray-500 transition duration-300 ease-in-out hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                      <svg className="h-5 w-5" 
                           fill="currentColor" 
                           viewBox="0 0 24 24" 
                           aria-hidden="true">
                        <path 
                            fillRule="evenodd" 
                            clipRule="evenodd" 
                            d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.64.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03A9.56 9.56 0 0112 6.84c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                      </svg>
                    </a>
                  </li>

                  <li>
                    <a href="Paste your Website URL here, delete this section if you don't" className="text-gray-500 transition duration-300 ease-in-out hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="items-center rounded-lg shadow dark:border-gray-700 dark:bg-gray-800 sm:flex">
              <a href="#">
                {/*Lets have this be the image each person's account pfp*/}
                <Image
                  className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                  src="/images/logo.png"
                  alt="Kedar Avatar"
                  width={500}
                  height={500}
                />
              </a>
              <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <p>Kedar Bulusu</p>
                </h3>
                <span className="text-gray-500 dark:text-gray-400">Developer</span>
                <p className="mb-4 mt-3 font-light text-gray-500 dark:text-gray-400">
                  {/*Write your major and minor and delete the {}, /*, */}
                </p>
                <ul className="flex space-x-4 sm:mt-0">

                  <li>
                    <a href="Paste your LinkedIn URL here" className="text-gray-500 transition duration-300 ease-in-out hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                      <svg className="h-5 w-5" 
                           fill="currentColor" 
                           viewBox="0 0 24 24" 
                           aria-hidden="true">
                        <path 
                            fillRule="evenodd" 
                            clipRule="evenodd" 
                            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.5c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.5h-3v-5.5c0-1.104-.896-2-2-2s-2 .896-2 2v5.5h-3v-10h3v1.235c.837-1.26 2.51-1.996 4-1.996 2.209 0 4 1.791 4 4v6.761z"/>
                      </svg>
                    </a>
                  </li>

                  <li>
                    <a href="Paste your GitHub URL here" className="text-gray-500 transition duration-300 ease-in-out hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                      <svg className="h-5 w-5" 
                           fill="currentColor" 
                           viewBox="0 0 24 24" 
                           aria-hidden="true">
                        <path 
                            fillRule="evenodd" 
                            clipRule="evenodd" 
                            d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.64.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03A9.56 9.56 0 0112 6.84c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                      </svg>
                    </a>
                  </li>

                  <li>
                    <a href="Paste your Website URL here, delete this section if you don't" className="text-gray-500 transition duration-300 ease-in-out hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="items-center rounded-lg shadow dark:border-gray-700 dark:bg-gray-800 sm:flex">
              <a href="#">
                {/*Lets have this be the image each person's account pfp*/}
                <Image
                  className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                  src="/images/logo.png"
                  alt="Samuel Avatar"
                  width={500}
                  height={500}
                />
              </a>
              <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <p>Samuel Konigbagbe</p>
                </h3>
                <span className="text-gray-500 dark:text-gray-400">Developer</span>
                <p className="mb-4 mt-3 font-light text-gray-500 dark:text-gray-400">
                  {/*Write your major and minor and delete the {}, /*, */}
                </p>
                <ul className="flex space-x-4 sm:mt-0">

                  <li>
                    <a href="Paste your LinkedIn URL here" className="text-gray-500 transition duration-300 ease-in-out hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                      <svg className="h-5 w-5" 
                           fill="currentColor" 
                           viewBox="0 0 24 24" 
                           aria-hidden="true">
                        <path 
                            fillRule="evenodd" 
                            clipRule="evenodd" 
                            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.5c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.5h-3v-5.5c0-1.104-.896-2-2-2s-2 .896-2 2v5.5h-3v-10h3v1.235c.837-1.26 2.51-1.996 4-1.996 2.209 0 4 1.791 4 4v6.761z"/>
                      </svg>
                    </a>
                  </li>

                  <li>
                    <a href="Paste your GitHub URL here" className="text-gray-500 transition duration-300 ease-in-out hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                      <svg className="h-5 w-5" 
                           fill="currentColor" 
                           viewBox="0 0 24 24" 
                           aria-hidden="true">
                        <path 
                            fillRule="evenodd" 
                            clipRule="evenodd" 
                            d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.64.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03A9.56 9.56 0 0112 6.84c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                      </svg>
                    </a>
                  </li>

                  <li>
                    <a href="Paste your Website URL here, delete this section if you don't" className="text-gray-500 transition duration-300 ease-in-out hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="items-center rounded-lg shadow dark:border-gray-700 dark:bg-gray-800 sm:flex">
              <a href="#">
                {/*Lets have this be the image each person's account pfp*/}
                <Image
                  className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                  src="/images/logo.png"
                  alt="Tyler Avatar"
                  width={500}
                  height={500}
                />
              </a>
              <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <p>Tyler Arcinaga</p>
                </h3>
                <span className="text-gray-500 dark:text-gray-400">Developer</span>
                <p className="mb-4 mt-3 font-light text-gray-500 dark:text-gray-400">
                  {/*Write your major and minor and delete the {}, /*, */}
                </p>
                <ul className="flex space-x-4 sm:mt-0">

                  <li>
                    <a href="Paste your LinkedIn URL here" className="text-gray-500 transition duration-300 ease-in-out hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                      <svg className="h-5 w-5" 
                           fill="currentColor" 
                           viewBox="0 0 24 24" 
                           aria-hidden="true">
                        <path 
                            fillRule="evenodd" 
                            clipRule="evenodd" 
                            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.5c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.5h-3v-5.5c0-1.104-.896-2-2-2s-2 .896-2 2v5.5h-3v-10h3v1.235c.837-1.26 2.51-1.996 4-1.996 2.209 0 4 1.791 4 4v6.761z"/>
                      </svg>
                    </a>
                  </li>

                  <li>
                    <a href="Paste your GitHub URL here" className="text-gray-500 transition duration-300 ease-in-out hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                      <svg className="h-5 w-5" 
                           fill="currentColor" 
                           viewBox="0 0 24 24" 
                           aria-hidden="true">
                        <path 
                            fillRule="evenodd" 
                            clipRule="evenodd" 
                            d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.64.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03A9.56 9.56 0 0112 6.84c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                      </svg>
                    </a>
                  </li>

                  <li>
                    <a href="Paste your Website URL here, delete this section if you don't" className="text-gray-500 transition duration-300 ease-in-out hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="items-center rounded-lg shadow dark:border-gray-700 dark:bg-gray-800 sm:flex">
              <a href="#">
                {/*Lets have this be the image each person's account pfp*/}
                <Image
                  className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                  src="/images/logo.png"
                  alt="Vaman Avatar"
                  width={500}
                  height={500}
                />
              </a>
              <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <p>Vaman Rajagopal</p>
                </h3>
                <span className="text-gray-500 dark:text-gray-400">Developer</span>
                <p className="mb-4 mt-3 font-light text-gray-500 dark:text-gray-400">
                  {/*Write your major and minor and delete the {}, /*, */}
                </p>
                <ul className="flex space-x-4 sm:mt-0">

                  <li>
                    <a href="Paste your LinkedIn URL here" className="text-gray-500 transition duration-300 ease-in-out hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                      <svg className="h-5 w-5" 
                           fill="currentColor" 
                           viewBox="0 0 24 24" 
                           aria-hidden="true">
                        <path 
                            fillRule="evenodd" 
                            clipRule="evenodd" 
                            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.5c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.5h-3v-5.5c0-1.104-.896-2-2-2s-2 .896-2 2v5.5h-3v-10h3v1.235c.837-1.26 2.51-1.996 4-1.996 2.209 0 4 1.791 4 4v6.761z"/>
                      </svg>
                    </a>
                  </li>

                  <li>
                    <a href="Paste your GitHub URL here" className="text-gray-500 transition duration-300 ease-in-out hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                      <svg className="h-5 w-5" 
                           fill="currentColor" 
                           viewBox="0 0 24 24" 
                           aria-hidden="true">
                        <path 
                            fillRule="evenodd" 
                            clipRule="evenodd" 
                            d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.64.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03A9.56 9.56 0 0112 6.84c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                      </svg>
                    </a>
                  </li>

                  <li>
                    <a href="Paste your Website URL here, delete this section if you don't" className="text-gray-500 transition duration-300 ease-in-out hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;
