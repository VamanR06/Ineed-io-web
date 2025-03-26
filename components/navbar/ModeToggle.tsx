'use client';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';
import { Laptop, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const ModeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const ICON_SIZE = 24;

  const styling = 'text-muted-foreground';

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          value={theme}
          className="border-2 border-white bg-transparent"
        >
          <Sun
            className={cn(
              'size-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0',
              styling
            )}
          />
          <Moon
            className={cn(
              'absolute size-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100',
              styling
            )}
          />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem className="flex gap-2" onClick={() => setTheme('light')}>
          <Sun size={ICON_SIZE} className="text-muted-foreground" /> <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex gap-2" onClick={() => setTheme('dark')}>
          <Moon size={ICON_SIZE} className="text-muted-foreground" /> <span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex gap-2" onClick={() => setTheme('system')}>
          <Laptop size={ICON_SIZE} className="text-muted-foreground" /> <span>System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export { ModeToggle };
