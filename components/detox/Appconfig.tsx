import React from "react";
import { appconfig } from "../../constants/code";
import CodeBlock from "../CodeBlock";

function Appconfig() {
  return (
    <div>
      <div className="text-3xl font-semibold mt-8">App Configuration</div>
      <p className="mt-4">
        In the .detoxrc.js file edit the paths based on your directory.
      </p>
      <div className="text-xl font-semibold mt-6">Android</div>
      <CodeBlock language="bash" code={appconfig.android} />
      <div className="text-xl font-semibold mt-6">Ios</div>
      <CodeBlock language="bash" code={appconfig.ios} />
    </div>
  );
}

export default Appconfig;
