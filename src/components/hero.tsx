import Link from "next/link";
import React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { SignUpForm } from "./sign-up-form";

interface Props {
  className?: string;
}

export const Hero: React.FC<Props> = (props) => {
  const { className } = props;
  const t = useTranslations();

  return (
    <section className={cn("", className)}>
      <div>
        <div className="flex items-center justify-between flex-wrap gap-3 py-1 max-w-[85rem] mx-auto px-4">
          <Link href="/contact">{t("hero.whyJoinUs")}</Link>
          <Link href="/faq">FAQs</Link>
        </div>
        <div className="bg-linear-gradient grid md:grid-cols-3 items-center text-center grid-cols-1  gap-3 py-5 px-4">
          <h1 className="text-[clamp(22px,5vw,28px)] font-medium">
            {t("hero.title")}
          </h1>
          <Image
            className="justify-self-center"
            src="/img/HeroImg.png"
            alt="hero"
            width={200}
            height={200}
          />
          <h2 className="text-[clamp(22px,5vw,28px)] font-medium">
            {t("hero.showcase")}
          </h2>
        </div>
      </div>
    </section>
  );
};
