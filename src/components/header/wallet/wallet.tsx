import React from "react";
import { cn } from "@/lib/utils";
import { CoinBagIcon, Logo, WalletTable, Progress } from "../../index";
import { useTranslations } from "next-intl";
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from "../../ui";
import Image from "next/image";

interface Props {
  className?: string;
}

export const Wallet: React.FC<Props> = (props) => {
  const { className } = props;

  const t = useTranslations();

  return (
    <Dialog>
      <DialogTrigger>
        <CoinBagIcon className="" />
      </DialogTrigger>
      <DialogContent className={cn("sm:max-w-[568px]", className)}>
        <DialogHeader>
          <Logo className="mb-4 mx-auto" />
          <div className="rounded-[1.875rem] bg-background shadow-lg p-4">
            <div className="flex items-center justify-between flex-col sm:flex-row gap-3 mb-2.5">
              <div className="flex items-center gap-3.5">
                <Image
                  src={"/img/people.png"}
                  width={100}
                  height={200}
                  alt="people"
                />
                <div className="flex flex-col gap-1">
                  <span>{t("walletUserCoins.name")}</span>
                  <span>{t("walletUserCoins.joined")}</span>
                </div>
              </div>
              <div className="flex flex-col items-center gap-1">
                <span className="text-primary font-bold text-2xl text-linear-gradient">
                  {t("walletUserCoins.totalCoins")}
                </span>
                <span className="text-secondary font-light">Coins</span>
              </div>
            </div>
            <Progress value={7000} />
          </div>
          <WalletTable />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
