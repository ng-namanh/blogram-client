import * as React from 'react';

import { cn } from '@/shared/lib/utils';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  Slot?: React.ReactNode;
  slotWrapperClassName?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, Slot, slotWrapperClassName, ...props }, ref) => {
    return (
      <div className="relative">
        <input
          type={type}
          className={cn(
            'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50',
            className,
          )}
          ref={ref}
          {...props}
        />
        {Slot && (
          <div
            className={cn(
              'pointer-events-auto absolute inset-y-0 right-0 flex h-9 items-center',
              slotWrapperClassName,
            )}
          >
            {Slot}
          </div>
        )}
      </div>
    );
  },
);
Input.displayName = 'Input';

export { Input };
