"use client";

import { File } from "@phosphor-icons/react";
import Link from "next/link";

export function PageItem({ href, title }: { href: string; title: string }) {
  return (
    <Link
      href={href}
      className={"flex items-center space-x-2 rounded px-2 py-1 transition hover:bg-gray-200 hover:underline"}
    >
      <File size={24} />
      <p className={"flex-grow overflow-ellipsis text-lg"}>{title}</p>
    </Link>
  );
}
