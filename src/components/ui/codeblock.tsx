"use client";

import { FC, memo } from "react";

import dynamic from "next/dynamic";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

interface Props {
  language: string;
  value: string;
}

const SyntaxHighlighter = dynamic(() => import("react-syntax-highlighter").then(v => v.PrismAsync), {
  ssr: false,
});

const CodeBlock: FC<Props> = memo(({ language, value }) => {
  return (
    <div className="codeblock font-sans relative w-full bg-zinc-950">
      <div className="flex w-full items-center justify-between bg-zinc-800 px-6 py-2 pr-4 text-zinc-100">
        <span className="text-xs lowercase">{language}</span>
      </div>
      <SyntaxHighlighter
        language={language}
        style={atomDark}
        PreTag="div"
        showLineNumbers
        customStyle={{
          margin: 0,
          width: "100%",
          background: "transparent",
          padding: "1.5rem 1rem",
        }}
        lineNumberStyle={{
          userSelect: "none",
        }}
        codeTagProps={{
          style: {
            fontSize: "0.9rem",
            fontFamily: "var(--font-mono)",
          },
        }}
      >
        {value}
      </SyntaxHighlighter>
    </div>
  );
});

CodeBlock.displayName = "CodeBlock";

export { CodeBlock };
