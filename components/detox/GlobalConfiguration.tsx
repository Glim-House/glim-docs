import React from "react";
import { installapplesimults, installDetox } from "../../constants/code";
import CodeBlock from "../CodeBlock";

function GlobalConfiguration() {
  return (
    <div>
      <div className="text-3xl font-semibold mt-8">Global Configuration</div>
      <p className="mt-4">
        Before Starting using Detox you need some Global Configurations
      </p>
      <p className="mt-6">Install Detox CLI</p>
      <CodeBlock language="bash" code={installDetox} />
      <p className="mt-6">Install applesimutils [Only for Mac Users]</p>
      <CodeBlock language="bash" code={installapplesimults} />
    </div>
  );
}

export default GlobalConfiguration;
