import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '../ui';
import { MenuBurger } from './menu-burger';

interface Props {
  className?: string;
}

export const Burger: React.FC<Props> = (props) => {
  const { className } = props;
  return (
    <MenuBurger className={cn("", className)} id="burger-menu" href="#" name="Burger Menu">
      <Button className={cn("flex flex-col gap-1.5 w-10 h-10 p-0", className)}>
        <span className='h-[4px] w-9 bg-background rounded-2xl'></span>
        <span className='h-[4px] w-9 bg-background rounded-2xl'></span>
        <span className='h-[4px] w-9 bg-background rounded-2xl'></span>
      </Button>
    </MenuBurger >
  );
}