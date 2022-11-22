import React from "react";
import { buildapp } from "../../constants/code";
import CodeBlock from "../CodeBlock";

function BuildApp() {
  return (
    <div>
      <div className="text-3xl font-semibold mt-8">Build the App</div>
      <p className="mt-6">Ios (Debug)</p>
      <CodeBlock language="bash" code={buildapp.iosdebug} />
      <p className="mt-6">Ios (Release)</p>
      <CodeBlock language="bash" code={buildapp.iosrelease} />
      <p className="mt-6">Android (Debug)</p>
      <CodeBlock language="bash" code={buildapp.androiddebug} />
      <p className="mt-6">Android (Release)</p>
      <CodeBlock language="bash" code={buildapp.androidrelease} />
    </div>
  );
}

export default BuildApp;
