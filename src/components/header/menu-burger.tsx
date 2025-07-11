"use client"
import React from 'react';
import { cn } from '@/lib/utils';
import { Sheet, SheetContent, SheetTrigger } from '../ui';
import Link from 'next/link';
import { useHeader } from '@/hooks/header';
import { useTranslations } from 'next-intl';

interface Props {
  className?: string;
  children?: React.ReactNode
  id: string;
  href: string;
  name: string;
}

export const MenuBurger: React.FC<Props> = (props) => {
  const { className, children } = props;

  const t = useTranslations();

  const {
    data
  } = useHeader();


  return (
    <Sheet>
      <SheetTrigger asChild>
        {children}
      </SheetTrigger>
      <SheetContent className={cn("bg-primary-foreground overflow-auto", className)}>
        <ul className="flex flex-col gap-4 p-4">
          {data.links?.map((item: { href: string, name: string }) => (
              <li key={item.name}>
                <Link href={item.href} className='text-background text-[22px] font-semibold'>
                  {t(`links.${item.name}`)}
                </Link>
              </li>
            ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
}