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
//import { createClient } from '@/utils/supabase/client';

export function NewApplicationForm() {
  const [reminder, setReminder] = useState(false);
  const [date, setDate] = useState<Date>();
  // const [time, setTime] = useState<string>('');
  // const handleAddApplication = async (company_name: string, link: string, location: string) => {
  //   event?.preventDefault();
  //   console.log(company_name, link, location);
  //   const supabase = await createClient();
  //   const { error } = await supabase.from('applications').insert([
  //     {
  //       user_id: (await supabase.auth.getUser()).data?.user?.id,
  //       company_name: company_name,
  //       status: 'pending',
  //       link: link,
  //       location: location,
  //     },
  //   ]);
  //   if (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <Card className="p-6">
      <h2 className="mb-6 text-xl font-semibold">Add New Application</h2>
      <form className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="company">Company Name</Label>
            <Input id="company" placeholder="Enter company name" />
          </div>
          {/* TODO: Add more input boxes, specifically link and location */}
          <div className="space-y-2">
            <Label htmlFor="role">Role</Label>
            <Input id="role" placeholder="Enter role/position" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="link">Link</Label>
            <Input id="link" placeholder="Enter link" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="location">Location</Label>
            <Input id="location" placeholder="Enter location" />
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
        {/* TODO: Create function called handleAddApplication at the top of this component, which will insert data into the databse
        LINK: https://supabase.com/docs/reference/javascript/insert
        Data that you need to insert (these are the column names): user_id (call supabase.auth.getUser(), and get the id), company_name,
        status (default to 'pending'), link, location
    */}
        <Button
          onClick={() => {
            //handleAddApplication(company_name, link, location);
          }}
          className="w-full bg-[#00ac4f] hover:bg-[#008f42]"
        >
          {' '}
          Add Application
        </Button>
      </form>
    </Card>
  );
}
