import { ReactNode } from 'react';
import Link from 'next/link';

interface FAQ {
  question: string;
  answer: ReactNode;
}

export const faqs: FAQ[] = [
  {
    question: 'What makes Ineed.io different?',
    answer: (
      <p className="text-gray-500 dark:text-gray-400">
        Using Ineed for internship searching allows for an all in one website to help you progress
        in landing internships. Here we maximize engagment with users to allow for a more fluid
        searching process with engagement. Utilizing all of our different features allows for all
        the assitance you need.
      </p>
    ),
  },
  {
    question: 'How do I search for internships?',
    answer: (
      <p className="text-gray-500 dark:text-gray-400">
        You can search by keyword, location, industry, or company name using the search bar or
        filters.
      </p>
    ),
  },
  {
    question: 'Can I apply for internships directly through the app?',
    answer: (
      <>
        <p className="text-gray-500 dark:text-gray-400">
          Yes, you can apply directly through Ineed.io.
        </p>
        <p className="text-gray-500 dark:text-gray-400">
          Feel free to{' '}
          <Link
            href="/team"
            className="text-primary-600 dark:text-primary-500 font-medium underline hover:no-underline"
          >
            contact us
          </Link>{' '}
          and we&apos;ll help you out as soon as we can.
        </p>
      </>
    ),
  },
  {
    question: 'How do I track my applications?',
    answer: (
      <>
        <p className="text-gray-500 dark:text-gray-400">
          You can check your application status in the &ldquo;My Applications&ldquo; section.
        </p>
        <p className="text-gray-500 dark:text-gray-400">
          Find out more information by{' '}
          <Link
            href="/profile"
            className="text-primary-600 dark:text-primary-500 font-medium underline hover:no-underline"
          >
            going to the profile tab
          </Link>
          .
        </p>
      </>
    ),
  },
  {
    question: 'Is Ineed.io free?',
    answer: (
      <p className="text-gray-500 dark:text-gray-400">
        Yes! Ineed.io is free to all users, allowing users to traverse their internship journey.
      </p>
    ),
  },
  {
    question: 'Do I need a resume to apply for internships?',
    answer: (
      <p className="text-gray-500 dark:text-gray-400">
        Yes, most companies require a resume. You can upload your resume or create one using our
        resume builder.
      </p>
    ),
  },
  {
    question: 'I forgot my password. How can I reset it?',
    answer: (
      <p className="text-gray-500 dark:text-gray-400">
        Click on &ldquo;Forgot Password&ldquo; on the login screen and follow the instructions to
        reset it.
      </p>
    ),
  },
  {
    question: 'How can I increase my chances at landing an internship?',
    answer: (
      <>
        <p className="text-gray-500 dark:text-gray-400">
          Keep your profile complete, add relevant skills, upload a professional resume, and include
          any certifications or projects.
        </p>
        <p className="text-gray-500 dark:text-gray-400">
          Make sure to complete{' '}
          <Link
            href="/profile"
            className="text-primary-600 dark:text-primary-500 font-medium underline hover:no-underline"
          >
            your profile
          </Link>{' '}
          if you have not already.
        </p>
      </>
    ),
  },
];
