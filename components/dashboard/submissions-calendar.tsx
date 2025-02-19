export function SubmissionsCalendar() {
  // This is a simplified version. In a real app, you'd want to generate
  // this based on actual submission data
  return (
    <div className="grid grid-cols-12 gap-2">
      {Array.from({ length: 12 }).map((_, monthIndex) => (
        <div key={monthIndex} className="space-y-2">
          <div className="grid grid-cols-5 gap-1">
            {Array.from({ length: 25 }).map((_, dayIndex) => (
              <div
                key={dayIndex}
                className="aspect-square rounded-sm bg-green-500"
                style={{
                  opacity: Math.random() > 0.5 ? 0.8 : 0.2,
                }}
              />
            ))}
          </div>
          <div className="text-center text-xs text-gray-500">
            {
              ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][
                monthIndex
              ]
            }
          </div>
        </div>
      ))}
    </div>
  );
}
