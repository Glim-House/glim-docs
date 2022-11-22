import React from "react";
import CodeBlock from "../../../components/CodeBlock";
import HeadwithTitle from "../../../components/HeadwithTitle";
import { storegenerate } from "../../../constants/code";
import { useRoute } from "../../../constants/useRoute";
import DocsLayout from "../../../layout/DocsLayout";
import SubLayout from "../../../layout/SubLayout";

function Store() {
  const { generatorRoute } = useRoute();
  return (
    <>
      <HeadwithTitle page="Store Generator" />
      <DocsLayout>
        <SubLayout routelist={generatorRoute}>
          <div>
            <div className="text-5xl font-semibold">Store Generator</div>
            <p className="mt-2">
              For creating a new store in glim project, you can use:
            </p>
            <CodeBlock code={storegenerate} language="bash" />
          </div>
        </SubLayout>
      </DocsLayout>
    </>
  );
}

export default Store;
