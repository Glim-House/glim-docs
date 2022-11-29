import React from "react";
import { androidconfiguration } from "../../constants/code";
import CodeBlock from "../CodeBlock";

function AndroidConfiguration() {
  return (
    <div>
      <div className="text-3xl font-semibold mt-8">Android Configuration</div>
      <p className="mt-4">
        You need to edit these files to complete configuration.
      </p>
      <ul className="list-inside list-disc leading-loose">
        <li>Build scripts:</li>
        <ul className="list-inside list-disc ml-10">
          <li>android/build.gradle</li>
          <li>android/app/build.gradle</li>
        </ul>
        <li>Native test code:</li>
        <ul className="list-inside list-disc ml-10">
          <li className="wrap">
            android/app/src/androidTest/java/com/your.package/DetoxTest.java
          </li>
        </ul>
        <li>Manifests:</li>
        <ul className="list-inside list-disc ml-10">
          <li>android/app/src/main/AndroidManifest.xml</li>
          <li className="wrap">
            android/app/src/main/res/xml/network_security_config.xml
          </li>
        </ul>
      </ul>
      <p className="mt-6 text-2xl font-semibold">Build Scripts</p>
      <CodeBlock
        language="gradle"
        filename="android/build.gradle"
        code={androidconfiguration.buildscriptone}
      />
      <CodeBlock
        language="gradle"
        filename="android/app/build.gradle"
        code={androidconfiguration.buildscripttwo}
      />
      <p className="mt-6 text-2xl font-semibold">Native test code</p>
      <CodeBlock
        language="gradle"
        filename="android/app/src/androidTest/java/com/<your.package>/DetoxTest.java"
        code={androidconfiguration.nativetest}
      />
      <p className="mt-6 text-2xl font-semibold">Manifest</p>
      <CodeBlock
        language="xml"
        filename="android/app/src/main/res/xml/network_security_config.xml"
        code={androidconfiguration.manifestone}
      />
      <CodeBlock
        language="xml"
        filename="android/app/src/main/AndroidManifest.xml"
        code={androidconfiguration.manifesttwo}
      />
    </div>
  );
}

export default AndroidConfiguration;
