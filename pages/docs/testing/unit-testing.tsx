import React from "react";
import CodeBlock from "../../../components/CodeBlock";
import HeadwithTitle from "../../../components/HeadwithTitle";
import { componentgenerate } from "../../../constants/code";
import { useRoute } from "../../../constants/useRoute";
import DocsLayout from "../../../layout/DocsLayout";
import SubLayout from "../../../layout/SubLayout";

function UnitTesting() {
  const { testingRoute } = useRoute();
  return (
    <>
      <HeadwithTitle page="component generator" />
      <DocsLayout>
        <SubLayout routelist={testingRoute}>
          <div>
            <div className="text-5xl font-semibold">Coming Sooon</div>
          </div>
        </SubLayout>
      </DocsLayout>
    </>
  );
}

export default UnitTesting;
