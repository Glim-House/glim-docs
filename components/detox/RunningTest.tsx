import React from "react";
import { runtest } from "../../constants/code";
import CodeBlock from "../CodeBlock";

function RunningTest() {
  return (
    <div>
      <div className="text-3xl font-semibold mt-8">Running Test</div>
      <p className="mt-6">Ios (Debug)</p>
      <CodeBlock language="bash" code={runtest.iosdebug} />
      <p className="mt-6">Ios (Release)</p>
      <CodeBlock language="bash" code={runtest.iosrelease} />
      <p className="mt-6">Android (Debug)</p>
      <CodeBlock language="bash" code={runtest.androiddebug} />
      <p className="mt-6">Android (Release)</p>
      <CodeBlock language="bash" code={runtest.androidrelease} />
    </div>
  );
}

export default RunningTest;
