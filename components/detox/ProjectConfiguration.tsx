import React from "react";
import {
  detoxfiles,
  detoxinit,
  installapplesimults,
  installdependency,
  installDetox,
  installjest,
} from "../../constants/code";
import CodeBlock from "../CodeBlock";

function ProjectConfiguration() {
  return (
    <div>
      <div className="text-3xl font-semibold mt-8">Project Configuration</div>
      <p className="mt-6">Install Dependencies</p>
      <CodeBlock language="bash" code={installdependency} />
      <p className="mt-6">
        Detox work along with jest, so we need to install that
      </p>
      <CodeBlock language="bash" code={installjest} />
      <p className="mt-6">Initialize Detox</p>
      <CodeBlock language="bash" code={detoxinit} />
      <p className="mt-6">This will create some files like this</p>
      <CodeBlock language="bash" code={detoxfiles} />
    </div>
  );
}

export default ProjectConfiguration;
