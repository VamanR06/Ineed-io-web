import type { User } from '@supabase/supabase-js';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { signOutAction } from '@/app/actions';
import Link from 'next/link';

interface UserDropdownMenuProps {
  user: User;
}

export function UserDropdownMenu({ user }: UserDropdownMenuProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">{user.email}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Link href={'/dashboard'}>Dashboard</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={'/settings'}>Settings</Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={signOutAction}>Log out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
