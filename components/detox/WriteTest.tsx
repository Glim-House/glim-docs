import React from "react";
import { test } from "../../constants/code";
import CodeBlock from "../CodeBlock";

function WriteTest() {
  return (
    <div>
      <div className="text-3xl font-semibold mt-8">Write a Test</div>
      <p className="mt-6">
        For the first time may be there is a sample test suit in your project.
        go to e2e folder and delete that. Then create a test file in e2e folder
        like this <span className="codeline">e2e/sample.test.js</span>
      </p>
      <CodeBlock language="javascript" code={test} filename=".detoxrc.js" />
    </div>
  );
}

export default WriteTest;
