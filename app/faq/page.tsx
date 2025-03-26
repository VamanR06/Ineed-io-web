import '../globals.css';
import React, { JSX } from 'react';
import { faqs } from './faq-data';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ: React.FC = (): JSX.Element => {
  return (
    <div className="ineed.io-faq-page">
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
          <h2 className="mb-8 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Frequently asked questions
          </h2>
          <Accordion type="single" collapsible>
            {faqs.map((item, idx) => (
              <AccordionItem key={`faq-${idx + 1}`} value={`item-${idx + 1}`}>
                <AccordionTrigger>
                  <h3 className="mb-4 flex items-center text-lg font-medium text-gray-900 dark:text-white">
                    <svg
                      className="mr-2 h-5 w-5 flex-shrink-0 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    {`${idx + 1}. ${item.question}`}
                  </h3>
                </AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
