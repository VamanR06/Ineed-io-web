'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { ModeToggle } from './ModeToggle';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Open mobile menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <div className="mt-4 flex flex-col space-y-4">
          <div className="flex items-center justify-between">
            <ModeToggle />
            <Button onClick={() => setIsOpen(false)}>Sign In</Button>
          </div>
          <MobileNavLink href="/" onClick={() => setIsOpen(false)}>
            Home
          </MobileNavLink>
          <MobileNavLink href="/about" onClick={() => setIsOpen(false)}>
            About
          </MobileNavLink>
          <MobileNavLink href="/services" onClick={() => setIsOpen(false)}>
            Services
          </MobileNavLink>
          <MobileNavLink href="/contact" onClick={() => setIsOpen(false)}>
            Contact
          </MobileNavLink>
        </div>
      </SheetContent>
    </Sheet>
  );
};

const MobileNavLink = ({
  href,
  onClick,
  children,
}: {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    className="py-2 text-base font-medium text-gray-600 hover:text-gray-900"
    onClick={onClick}
  >
    {children}
  </Link>
);

export default MobileMenu;
