import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
// import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import toast, { Toaster } from "react-hot-toast";
interface Props {
  code: string;
  language: string;
  filename?: string;
}
function CodeBlock({ code, language, filename }: Props) {
  const copycode = () => {
    navigator.clipboard
      .writeText(code)
      .then(() => {
        toast.success("Code Copied to clipboard");
      })
      .catch(() => {
        toast.error("unable to copy code");
      });
  };
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <div className="font-mono  my-4 rounded ">
        <code>
          <pre className="cursor-pointer overflow-scroll" onClick={copycode}>
            <SyntaxHighlighter language={language}>{code}</SyntaxHighlighter>
          </pre>
          <div className="text-right text-sm opacity-70">{filename}</div>
        </code>
      </div>
    </>
  );
}

export default CodeBlock;
