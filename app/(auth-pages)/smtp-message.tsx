import { InfoIcon } from 'lucide-react';
import React from 'react';

interface Props {
  message: string;
}

const SmtpMessage: React.FC<Props> = ({ message }: Props) => {
  return (
    <div className="flex gap-4 rounded-md border bg-muted/50 px-5 py-3">
      <InfoIcon size={16} className="mt-0.5" />
      <div className="flex flex-col gap-1">
        <small className="text-sm text-secondary-foreground">
          <strong> Note:</strong> {message}
        </small>
      </div>
    </div>
  );
};

export default SmtpMessage;
