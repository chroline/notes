import React, { ReactNode } from "react";

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getChildrenText(children: ReactNode): string {
  let text = "";

  React.Children.forEach(children, child => {
    if (React.isValidElement(child)) {
      // If the child is a React element, recursively call the function
      text += getChildrenText(child.props.children);
    } else if (typeof child === "string" || typeof child === "number") {
      // If the child is a string or number, append it to the text
      text += child;
    }
  });

  return text;
}
