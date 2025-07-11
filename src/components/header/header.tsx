"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { Burger, Logo, Search, Wallet, Language } from "@/components";
import { Button } from "../ui";
import { useTranslations } from "next-intl";

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = (props) => {
  const { className } = props;
  const t = useTranslations();
  // inchka Laves
  return (
    <>
      <p className="text-center px-4 py-0.5">{t("deliveryText")}</p>
      <header className={cn("bg-primary-foreground ", className)}>
        <div className="md:grid md:grid-cols-3 flex justify-between items-center max-w-[85rem] mx-auto py-3 px-4">
          <Burger />
          <Logo className="md:justify-self-center justify-self-start" />
          <div className="flex items-center gap-3 justify-self-end">
            <Search />
            <Wallet />
            <Language
              className="border-none p-0 focus-visible:ring-0"
              locale="en"
              scroll={false}
              shallow={true}
              forceOptimisticNavigation={true}
              pushState={true}
            />
            <Button className={cn("text-background text-[16px]", className)}>
              {t("signOut")}
            </Button>
          </div>
        </div>
      </header>
    </>
  );
};
