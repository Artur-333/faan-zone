"use client";
import React from "react";
import { cn } from "@/lib/utils";
import Img from "next/image";
import { useBanner } from "@/hooks/banner";


interface Props {
  className?: string;
}

export const Banner: React.FC<Props> = ({ className }) => {
  const { data} = useBanner();
  console.log(data);
  return (
    <div className={cn("flex justify-center", className)}>
      <ul className="">
          {data && data.imgs?.map((img: { id:  number; img: string }) => (
          <li key={img.id} className="flex-shrink-0">
            <Img
              src={img.img}
              alt="Promotional banner"
              width={400}
              height={200}
              className="rounded-lg object-cover"
              priority 
            />
          </li>
        ))}
      </ul>
    </div>
  );
};