import React from 'react';
import { cn } from '@/lib/utils';

interface Props {
  className?: string;
  children?: React.ReactNode
}

export const Container: React.FC<Props> = (props) => {
  const { className, children } = props;
  return (
    <div className={cn("max-w-[90rem] mx-auto px-4", className)}>
      {children}
    </div>
  );
}