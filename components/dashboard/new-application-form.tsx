import { useState, useEffect } from 'react';
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
import { createClient } from '@/utils/supabase/client';
import { User } from '@/types/user';
import { redirect } from 'next/navigation';

export function NewApplicationForm() {
  const [reminder, setReminder] = useState(false);
  const [date, setDate] = useState<Date>();
  const [companyName, setCompanyName] = useState('');
  const [role, setRole] = useState('');
  const [link, setLink] = useState('');
  const [location, setLocation] = useState('');
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const fetchUser = async () => {
        const supabase = await createClient();
        const { data, error } = await supabase.auth.getUser();
        if (error) {
          redirect('/');
        }
        setUser(data.user as User);
      };
      fetchUser();
    }
  }, []);

  const handleAddApplication = async () => {
    if (user) {
      const supabase = await createClient();
      const { error } = await supabase.from('internships').insert({
        user_id: user.id,
        company_name: companyName,
        role: role,
        status: 'Pending',
        link: link,
        location: location,
        reminder: date,
      });
      if (error) {
        console.log(error);
      }
    }
  };

  return (
    <Card className="p-6">
      <h2 className="mb-6 text-3xl font-semibold">Add New Application</h2>
      <h2 className="text-md mb-6 text-gray-500">Fill out the form to add a new application:</h2>
      <form className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="company">Company Name</Label>
            <Input
              id="company"
              placeholder="Enter company name"
              required
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="role">Role</Label>
            <Input
              id="role"
              placeholder="Enter role/position"
              required
              value={role}
              onChange={(e) => setRole(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="link">Link</Label>
            <Input
              id="link"
              placeholder="Enter link"
              required
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="location">Location</Label>
            <Input
              id="location"
              placeholder="Enter location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
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
        <Button onClick={handleAddApplication} className="w-full bg-[#00ac4f] hover:bg-[#008f42]">
          Add Application
        </Button>
      </form>
    </Card>
  );
}
