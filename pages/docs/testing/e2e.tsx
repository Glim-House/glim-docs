import React from "react";
import CodeBlock from "../../../components/CodeBlock";
import Appconfig from "../../../components/detox/Appconfig";
import DeviceConfiig from "../../../components/detox/DeviceConfiig";
import GlobalConfiguration from "../../../components/detox/GlobalConfiguration";
import ProjectConfiguration from "../../../components/detox/ProjectConfiguration";
import HeadwithTitle from "../../../components/HeadwithTitle";
import {
  componentgenerate,
  installapplesimults,
  installDetox,
} from "../../../constants/code";
import { useRoute } from "../../../constants/useRoute";
import DocsLayout from "../../../layout/DocsLayout";
import SubLayout from "../../../layout/SubLayout";

function EndToEnd() {
  const { testingRoute } = useRoute();
  return (
    <>
      <HeadwithTitle page="Detox" />
      <DocsLayout>
        <SubLayout routelist={testingRoute}>
          <div className="text-5xl font-semibold">End To End Testing</div>
          <p className="mt-4">
            E2E is one of the major pillars of enterprise-level mobile
            application development. Glim coming with a pack of E2E facility. At
            the initial project setup, E2E is not activated along with glim. But
            we can easily configure the testing framework with these steps.
          </p>
          <div className="text-4xl font-semibold mt-8">Detox</div>
          <p className="mt-4">
            In glim, we are using detox for E2E and automation. Detox is the
            widely used gray box e2e framework developed by Wix. you can read
            official doc of detox from here..
          </p>
          <GlobalConfiguration />
          <ProjectConfiguration />
          <DeviceConfiig />
          <Appconfig />
        </SubLayout>
      </DocsLayout>
    </>
  );
}

export default EndToEnd;
