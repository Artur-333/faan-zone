"use client"
import React from 'react';
import { useTranslations } from 'next-intl';
import { Checkbox } from './ui';
import { cn } from '@/lib/utils';
import {
    Button,
    Input
} from './ui';
import Link from 'next/link';

interface Props {
    className?: string;
}

export const SignUpForm: React.FC<Props> = (props) => {
    const { className } = props;
    const t = useTranslations();
    const [isOpen, setIsOpen] = React.useState(true);

    const handleClose = () => {
      setIsOpen(false);
    };

    if (!isOpen) {
      return null;
    }

    return (
        <div className="max-w-[520px] px-8 relative z-50 bg-background shadow-2xl">
            <button 
              onClick={handleClose}
              className="absolute top-4 right-4 p-2 border-2 border-[#000] rounded-full w-5 h-5 flex items-center justify-center cursor-pointer"
            >
                <span className="text-[#000] absolute -top-[5px]">&times;</span>
            </button>
            <form className={cn("", className)} action="#" method='post' encType='multipart/form-data'>
                <h2 className='font-bold text-2xl text-center mb-10'>
                    {t("signUpForm.title")}
                </h2>
                <div className='flex justify-between gap-3 mb-5'>
                    <label className='w-full font-semibold'>
                        {t("signUpForm.email")}
                        <Input className='mt-2.5 border-1 border-[#000]' type="email" placeholder={t("signUpForm.email")} required />
                    </label>
                    <label className='w-full font-semibold'>
                        {t("signUpForm.nameSurname")}
                        <Input className='mt-2.5 border-1 border-[#000]' type="text" placeholder={t("signUpForm.nameSurname")} required />

                    </label>
                </div>
                <div className='flex justify-between gap-3 mb-5'>
                    <label className='w-full font-semibold'>
                        {t("signUpForm.birthDate")}
                        <Input className='mt-2.5 border-1 border-[#000]' type="date" placeholder={t("signUpForm.birthDate")} required />
                    </label>
                    <label className='w-full font-semibold'>
                        {t("signUpForm.phoneNumber")}
                        <Input className='mt-2.5 border-1 border-[#000]' type="tel" placeholder="+374(***)******" required />
                    </label>
                </div>
                <div>
                    <label className='font-semibold'>
                        {t("signUpForm.password")}
                        <Input className='mt-2.5 border-1 border-[#000]' type="password" placeholder={t("signUpForm.password")} required />
                    </label>
                    <label className='font-semibold'>
                        {t("signUpForm.confirmPassword")}
                        <Input className='mt-2.5 border-1 border-[#000]' type="password" placeholder={t("signUpForm.confirmPassword")} required />
                    </label>
                </div>
                <div className='flex flex-col gap-3'>
                    <Button className='mt-5 bg-linear-gradient' type="submit">
                        {t("signUpForm.nextButton")}
                    </Button>
                    <label className='flex items-center gap-2 w-fit mx-auto'>
                        <Checkbox className='w-5 h-5 border-[#959494] checked:border-[#000]'/>
                        {t("signUpForm.agree")}
                        <Link className='font-bold underline' href="/privacy-policy">
                            {t("signUpForm.privacyPolicy")}
                        </Link>
                    </label>
                </div>
            </form>
        </div>
    );
}