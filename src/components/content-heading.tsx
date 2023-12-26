"use client";

import type React from "react";

import { Hash } from "@phosphor-icons/react";

import { cn, getChildrenText } from "~/lib/utils";

export function ContentHeading(
  props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>
) {
  const id = "heading-" + encodeURIComponent(getChildrenText(props.children));
  return (
    <a href={`#${id}`} className={cn("no-underline hover:underline")}>
      <div className={"absolute"}>
        <Hash size={32} className={"-ml-10 hidden opacity-50 md:block"} />
      </div>
      <h2 {...props} id={id}>
        {props.children}
      </h2>
    </a>
  );
}
