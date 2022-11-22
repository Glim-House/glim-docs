import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

function CodeBlock({ code, language }: any) {
  return (
    <div className="font-mono  my-4 rounded">
      <code>
        <pre>
          <SyntaxHighlighter language={language} sstyle={docco}>
            {code}
          </SyntaxHighlighter>
        </pre>
      </code>
    </div>
  );
}

export default CodeBlock;
