"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Logo from "~/app/logo.png";
import { Badge } from "~/components/ui/badge";

export function Appbar() {
  const pathname = usePathname();

  return (
    <div className={"sticky top-0 z-50 flex h-16 w-full justify-center bg-gray-100 bg-opacity-80 px-4 backdrop-blur"}>
      <div className={"flex h-full w-full max-w-4xl items-center justify-between"}>
        <Link
          href={"https://colegaw.in"}
          target={"_blank"}
          className={"h-10 w-10 rounded-full shadow transition hover:shadow-lg"}
        >
          <Image src={Logo} alt={"Logo"} quality={100} />
        </Link>
        {pathname !== "/" && (
          <Link href={"/"} className={"font-heading text-lg"}>
            Notes by Cole Gawin
          </Link>
        )}
        <div className={" w-10"}>
          <Badge className={"float-right"}>v0</Badge>
        </div>
      </div>
    </div>
  );
}
