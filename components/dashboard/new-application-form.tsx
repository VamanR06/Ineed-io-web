'use client';

import { useState } from 'react';
import { Calendar } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { TimePickerDemo } from './time-picker';

export function NewApplicationForm() {
  const [reminder, setReminder] = useState(false);
  const [date, setDate] = useState<Date>();
  // const [time, setTime] = useState<string>('');

  return (
    <Card className="p-6">
      <h2 className="mb-6 text-xl font-semibold">Add New Application</h2>
      <form className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="company">Company Name</Label>
            <Input id="company" placeholder="Enter company name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="role">Role</Label>
            <Input id="role" placeholder="Enter role/position" />
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <Switch id="reminder" checked={reminder} onCheckedChange={setReminder} />
          <Label htmlFor="reminder">Set Reminder</Label>
        </div>

        {reminder && (
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={'outline'}
                    className={cn(
                      'w-full justify-start text-left font-normal',
                      !date && 'text-muted-foreground'
                    )}
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    {date ? format(date, 'PPP') : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <CalendarComponent
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div className="space-y-2">
              <Label>Time</Label>
              <TimePickerDemo />
            </div>
          </div>
        )}

        <Button className="w-full bg-[#00ac4f] hover:bg-[#008f42]">Add Application</Button>
      </form>
    </Card>
  );
}
