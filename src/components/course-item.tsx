"use client";

import { FolderNotchOpen } from "@phosphor-icons/react";
import Link from "next/link";

export function CourseItem({ id, title, description }: { id: string; title: string; description: string }) {
  return (
    <div className={"relative flex space-x-4 rounded-md border bg-white p-4 shadow-sm transition hover:shadow-md"}>
      <FolderNotchOpen size={40} weight={"regular"} className={"shrink-0"} />
      <div className={"space-y-2"}>
        <Link
          href={`/course/${id}`}
          className={"font-heading text-xl font-medium leading-3 text-blue-500 hover:underline"}
        >
          {title}
          <div className={"absolute left-0 top-0 z-10 h-full w-full"}></div>
        </Link>
        <p className={"text-sm opacity-50"}>{description}</p>
      </div>
    </div>
  );
}
