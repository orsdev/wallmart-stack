"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface GridOption {
  title: string;
  className?: string;
  image?: string;
}

export const GridOption = ({ title, className, image }: GridOption) => {
  return (
    <Link
      href={{
        pathname: "/search",
        query: { q: title },
      }}
      className={cn("grid-option relative", className)}
    >
      <h2 className="text-xl font-bold">{title}</h2>
      <Image
        src={image as string}
        alt={title}
        fill
        className="object-cover opacity-20 rounded-md"
      />
    </Link>
  );
};
