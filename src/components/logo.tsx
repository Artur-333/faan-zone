import React from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import Image from 'next/image';

interface Props {
  className?: string;
}

export const Logo: React.FC<Props> = (props) => {
  const { className } = props;

  return (
    <Link href='/' className={cn("flex-shrink-0 w-fit", className)}>
      <Image src="/svg/logo.svg" width={60} height={60} alt="Logo" />
    </Link>
  );
}