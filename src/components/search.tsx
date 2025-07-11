"use client"
import React from 'react';
import { useClickAway } from 'react-use';
import { cn } from '@/lib/utils';
import { Button, Input } from './ui';
import { Search as SearchIcon } from 'lucide-react';

interface Props {
  className?: string;
}

export const Search: React.FC<Props> = (props) => {
  const { className } = props;
  const [isOpen, setIsOpen] = React.useState(false);

  const ref = React.useRef(null);
  useClickAway(ref, () => {
    setIsOpen(false);
  });

  return (
    <div
      ref={ref}
      className={cn(
        "flex items-center relative after:content-[''] after:absolute",
        isOpen
          ? "after:bottom-[-5px] after:hidden md:after:block after:right-0 after:w-45 after:h-0.5 after:bg-background after:z-[1] after:transition-all after:duration-300 after:ease-in-out"
          : "after:right-0 after:w-0 after:bottom-[-5px] after:h-0.5 after:bg-background after:transition-all after:duration-300 after:ease-in-out",
        className
      )}
    >
      <Input
        autoFocus={isOpen}
        placeholder="Search..."
        type="text"
        className={cn(
          "absolute right-0 w-45 md:w-35 border-0 focus-visible:ring-0 focus-visible:ring-offset-0 px-0.5",
          "text-lg p-2 bg-primary-foreground md:bg-transparent text-background md:text-background transition-all duration-500 ease-in-out",
          isOpen ? " md:top-0 top-17 md:right-10 md:-left-35 left-3 opacity-100 pointer-events-auto" : "top-0 left-3 opacity-0 pointer-events-none"
        )}
        style={{ minWidth: 0 }}
      />
      <Button className={cn("", className)} onClick={() => setIsOpen((prev) => !prev)} type="button">
        <SearchIcon className="size-7 text-background" />
      </Button>
    </div>
  );
}