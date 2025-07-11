import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '../ui';
import Image from 'next/image';

interface Props {
  className?: string;
}

export const CoinBagIcon: React.FC<Props> = (props) => {
  const { className } = props;
  return (
    <Button className={cn("relative", className)}>
      <Image
        src="/svg/coinBagIcon.svg"
        alt="Coin bag icon"
        width={25}
        height={25}
      />
      <span className='text-foreground 
          text-[10px] font-bold
          absolute top-1/2 left-1/2
          bg-secondary rounded-full
          w-5 h-5 flex items-center justify-center'>
        10
      </span>
    </Button>
  );
}