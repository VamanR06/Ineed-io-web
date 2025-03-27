import '../globals.css';
import React, { JSX } from 'react';
import { faqs } from './faq-data';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Separator } from '@/components/ui/separator';

const FAQ: React.FC = (): JSX.Element => {
  return (
    <section id="faq-secton" className="flex flex-col gap-6 p-8">
      <h2 className="text-xl font-extrabold md:text-3xl">Frequently asked questions</h2>
      <Separator className="bg-primary" />
      <Accordion type="single" collapsible>
        {faqs.map((item, idx) => (
          <AccordionItem key={`faq-${idx + 1}`} value={`item-${idx + 1}`}>
            <AccordionTrigger>
              <h3 className="text-md mb-4 flex items-center font-medium text-gray-900 dark:text-white md:text-lg">
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
                {`${item.question}`}
              </h3>
            </AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default FAQ;
