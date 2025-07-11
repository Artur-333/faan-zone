"use client";
import React from 'react';
import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';
type Locale = 'en' | 'am';

import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectGroup,
  SelectItem,
} from '@/components/ui/select';
import Image from 'next/image';
import { Button } from '../ui';
import { useRouter, usePathname } from "../../i18n/navigation";
import { useParams } from "next/navigation";

interface Props {
  className?: string;
  locale: Locale;
  scroll?: boolean;
  shallow?: boolean;
  forceOptimisticNavigation?: boolean;
  pushState?: boolean;
}

export const Language: React.FC<Props> = (props) => {
  const { className } = props;


  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  const currentLocale = Array.isArray(params.locale) ? params.locale[0] : params.locale || 'am';

  const handleLocaleChange = (nextLocale: Locale) => {
    router.push(pathname, { locale: nextLocale, scroll: false });
  };
  const t = useTranslations();

  const languages = [
    {
      value: 'am',
      label: 'armenian'
    },
    {
      value: 'en',
      label: 'english'
    }
  ];

  return (
    <Select value={currentLocale} onValueChange={(value) => handleLocaleChange(value as Locale)}>
      <SelectTrigger className={cn("border-none p-0 focus-visible:ring-0", className)}>
        <Button className="p-0">
          <Image src="/svg/language-icon.svg" alt="Language icon" width={40} height={40} />
        </Button>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup className="bg-primary-foreground text-background p-1.5 overflow-y-auto max-h-37">
          {languages.map((language) => (
            <SelectItem key={language.value} value={language.value} className="w-full">
              {t(`languages.${language.label}`)}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
