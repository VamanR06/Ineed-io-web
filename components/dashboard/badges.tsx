import { Card } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import Image from 'next/image';

// Map badge names to image filenames
const badgeImages: { [key: string]: string } = {
  'Applied to 10+ internships': '/images/10plus.png',
  'Applied to 25+ internships': '/images/25plus.png',
  'Applied to 100+ internships': '/images/100plus.png',
  'Applied to 200+ internships': '/images/200plus.png',
  'Accepted to an internship': '/images/accepted.png',
  'Some desc 1': '/images/best.png',
  'Applied to any internship(s)': '/images/new.png',
  'Some desc 2': '/images/second.png',
  'Some desc 3': '/images/third.png',
};

export function Badges() {
  return (
    <Card className="p-6">
      <h2 className="mb-4 text-xl font-semibold">Achievement Badges</h2>
      <div className="flex flex-wrap gap-5">
        <TooltipProvider>
          {Object.keys(badgeImages).map((badgeName, index) => {
            const badge = {
              id: index + 1,
              name: badgeName,
              description: `${badgeName}`,
              earned: Math.random() > 0.5,
            };
            return (
              <Tooltip key={badge.id}>
                <TooltipTrigger>
                  <Image
                    src={badgeImages[badge.name]}
                    alt={`Badge ${badge.id}`}
                    width={32}
                    height={32}
                    className={`cursor-pointer ${badge.earned ? 'opacity-100' : 'opacity-50'}`}
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p>{badge.description}</p>
                </TooltipContent>
              </Tooltip>
            );
          })}
        </TooltipProvider>
      </div>
    </Card>
  );
}
