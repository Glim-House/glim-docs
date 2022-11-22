import React from "react";
import { checkemulator, detoxaddemu } from "../../constants/code";
import CodeBlock from "../CodeBlock";

function DeviceConfiig() {
  return (
    <div>
      <div className="text-3xl font-semibold mt-8">Device Configuration</div>
      <p className="mt-6">
        First open the .detoxrc.js and add the emulators installed in your
        device like this..
      </p>
      <CodeBlock
        language="javascript"
        code={detoxaddemu}
        filename=".detoxrc.js"
      />
      <div className="text-2xl font-semibold mt-6">check emulator list</div>

      <p className="mt-6">For Android</p>
      <CodeBlock language="bash" code={checkemulator.android} />
      <p className="mt-6">For Ios</p>
      <CodeBlock language="bash" code={checkemulator.ios} />
    </div>
  );
}

export default DeviceConfiig;
