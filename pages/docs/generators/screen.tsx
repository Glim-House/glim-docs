import React from "react";
import CodeBlock from "../../../components/CodeBlock";
import HeadwithTitle from "../../../components/HeadwithTitle";
import { screengenerate } from "../../../constants/code";
import { useRoute } from "../../../constants/useRoute";
import DocsLayout from "../../../layout/DocsLayout";
import SubLayout from "../../../layout/SubLayout";

function Screen() {
  const { generatorRoute } = useRoute();
  return (
    <>
      <HeadwithTitle page="Screen Generator" />
      <DocsLayout>
        <SubLayout routelist={generatorRoute}>
          <div>
            <div className="text-5xl font-semibold">Screen Generator</div>
            <p className="mt-2">
              For creating each screen in glim project, you can use:
            </p>
            <CodeBlock code={screengenerate} language="bash" />
            <p className="mt-6">
              <span className="codeline">glim generate --screen</span>
              command creates a folder with component name inside the
              <span className="codeline">screen</span>
              folder in the <span className="codeline">src</span> folder.
            </p>
            <div className="text-2xl font-semibold mt-6">It contains</div>
            <ul className="list-disc list-inside ml-6 leading-loose">
              <li>[component-name].screen.tsx</li>
              <li>[component-name].style.ts</li>
              <li>[component-name].tests.js</li>
            </ul>
          </div>
        </SubLayout>
      </DocsLayout>
    </>
  );
}

export default Screen;
