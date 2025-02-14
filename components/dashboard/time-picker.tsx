import * as React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

interface TimePickerProps {
  date?: Date;
  setDate?: (date: Date) => void;
}

export function TimePickerDemo({}: TimePickerProps) {
  const minuteRef = React.useRef<HTMLInputElement>(null);
  const hourRef = React.useRef<HTMLInputElement>(null);

  const [hour, setHour] = React.useState('12');
  const [minute, setMinute] = React.useState('00');
  const [meridiem, setMeridiem] = React.useState<'AM' | 'PM'>('AM');

  if (typeof window === 'undefined') {
    return null;
  }

  return (
    <div className="flex items-end gap-2">
      <div className="grid gap-1 text-center">
        <Label htmlFor="hours" className="text-xs">
          Hours
        </Label>
        <Input
          ref={hourRef}
          id="hours"
          className="w-16 text-center"
          value={hour}
          onChange={(e) => {
            const value = e.target.value;
            if (value === '') setHour(value);
            else {
              const valueAsNumber = Number.parseInt(value);
              if (valueAsNumber > 12) return;
              if (valueAsNumber < 1) return;
              setHour(valueAsNumber.toString());
            }
          }}
          onFocus={() => hourRef.current?.select()}
        />
      </div>
      <div className="grid gap-1 text-center">
        <Label htmlFor="minutes" className="text-xs">
          Minutes
        </Label>
        <Input
          ref={minuteRef}
          id="minutes"
          className="w-16 text-center"
          value={minute}
          onChange={(e) => {
            const value = e.target.value;
            if (value === '') setMinute(value);
            else {
              const valueAsNumber = Number.parseInt(value);
              if (valueAsNumber > 59) return;
              if (valueAsNumber < 0) return;
              setMinute(valueAsNumber.toString().padStart(2, '0'));
            }
          }}
          onFocus={() => minuteRef.current?.select()}
        />
      </div>
      <div className="grid gap-1 text-center">
        <Label htmlFor="meridiem" className="text-xs">
          AM/PM
        </Label>
        <select
          id="meridiem"
          className="h-10 w-16 rounded-md border border-input bg-background px-3 py-2"
          value={meridiem}
          onChange={(e) => setMeridiem(e.target.value as 'AM' | 'PM')}
        >
          <option value="AM">AM</option>
          <option value="PM">PM</option>
        </select>
      </div>
    </div>
  );
}
