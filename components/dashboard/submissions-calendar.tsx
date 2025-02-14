'use client';

import { Card } from '@/components/ui/card';

export function SubmissionsCalendar() {
  // Generate dummy data for the calendar
  const generateCalendarData = () => {
    const data = [];
    for (let i = 0; i < 52; i++) {
      const weekData = [];
      for (let j = 0; j < 7; j++) {
        weekData.push(Math.floor(Math.random() * 4));
      }
      data.push(weekData);
    }
    return data;
  };

  const calendarData = generateCalendarData();

  return (
    <Card className="p-6">
      <h2 className="mb-4 text-xl font-semibold">Submission Activity</h2>
      <div className="overflow-x-auto">
        <div className="inline-flex gap-1">
          {calendarData.map((week, weekIndex) => (
            <div key={weekIndex} className="flex flex-col gap-1">
              {week.map((value, dayIndex) => (
                <div
                  key={dayIndex}
                  className={`h-3 w-3 rounded-sm ${
                    value === 0
                      ? 'bg-[#ebedf0]'
                      : value === 1
                        ? 'bg-[#9be9a8]'
                        : value === 2
                          ? 'bg-[#40c463]'
                          : 'bg-[#00ac4f]'
                  }`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
