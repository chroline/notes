import type { Metadata } from "next";
import { Kanit } from "next/font/google";

import { Appbar } from "~/components/appbar";

import "./globals.css";

const kanitFont = Kanit({
  weight: ["400", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-kanit",
});

export const metadata: Metadata = {
  title: "Notes by Cole Gawin",
  description: "Public repository of notes Cole has taken across different courses.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${kanitFont.variable} font-sans bg-gray-100`}>
        <Appbar />
        <main className={"flex w-full justify-center px-4 py-12"}>
          <div className={"w-full max-w-2xl"}>{children}</div>
        </main>
      </body>
    </html>
  );
}
