"use client";

import { ArrowUpRight } from "@phosphor-icons/react";

import { buttonVariants } from "~/components/ui/button";

export function Footer() {
  return (
    <footer className={"w-full text-center text-sm opacity-70"}>
      <a href={"https://github.com/chroline/notes"} target={"_blank"} className={buttonVariants({ variant: "link" })}>
        Open-source <ArrowUpRight size={12} weight={"bold"} className={"-mt-1 ml-1"} />
      </a>{" "}
      |{" "}
      <a href={"https://colegaw.in"} target={"_blank"} className={buttonVariants({ variant: "link" })}>
        Cole Gawin <ArrowUpRight size={12} weight={"bold"} className={"-mt-1 ml-1"} />
      </a>
    </footer>
  );
}
