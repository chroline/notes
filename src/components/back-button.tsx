"use client";

import type { ReactNode } from "react";

import { ArrowLeft } from "@phosphor-icons/react";
import Link from "next/link";

export function BackButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className={"flex items-center space-x-1 opacity-70"}>
      <ArrowLeft weight={"bold"} />
      <span>{children}</span>
    </Link>
  );
}
