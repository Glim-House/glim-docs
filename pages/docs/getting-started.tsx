import React from "react";
import CodeBlock from "../../components/CodeBlock";
import DocsLayout from "../../components/DocsLayout";
import HeadwithTitle from "../../components/HeadwithTitle";
import { createapp } from "../../constants/code";

function GettingStarted() {
  return (
    <>
      <HeadwithTitle page="Getting started" />
      <DocsLayout>
        <div className="container lg:w-3/4 mx-auto py-16">
          <div className="text-5xl font-semibold">Glim CLI</div>
          <p className="mt-4">To create new glim project, you can use :</p>
          <CodeBlock code={createapp} language="bash" />
          <p className="mt-4">
            Once's it running, it will create a new glim project with
            corresponding name along with typical folders and configuration
            files.
          </p>

          <div className="text-3xl font-semibold mt-8"> Folder Structure</div>
          <ul className="list-disc list-inside leading-loose">
            <li>
              <span className="codeline">index.js</span> - The main entry point
              of application. It is equivalent to React on the web mounting the
              project to the root DOM node
            </li>
            <li>
              <span className="codeline">/android and /ios </span> - The folders
              where all the native code lives. If we needed to add or edit any
              platform specific native code, this is where we'd have to look. We
              also need to go into these folders if we have to install any
              native libraries
            </li>
            <li>
              <span className="codeline">.prettierrc.js</span> - Code formatter
              which is again optional, but you can read more about it in our
              code style chapter
            </li>
            <li>
              <span className="codeline">/src</span> - Base folder which will
              store all the necessary folders or files
            </li>
            <ul className="list-disc list-inside ml-10">
              <li>
                <span className="codeline">/components</span> - Where all the
                reusable components inside the project resides
              </li>
              <li>
                <span className="codeline">/config</span> - Contains all the
                configurations of the project
              </li>
              <li>
                <span className="codeline">/hooks</span> - Contains all the
                custom hooks inside the project
              </li>
              <li>
                <span className="codeline">/navigation</span> - Conatains all
                the navigations
              </li>
              <li>
                <span className="codeline"> /redux</span> - Contains all the
                redux components such as store, saga and slice
              </li>
              <li>
                <span className="codeline">/screens</span> - Contains all the
                screens inside the project
              </li>
              <li>
                <span className="codeline">/utils</span> - Storing reusable
                methods
              </li>
            </ul>
          </ul>
        </div>
      </DocsLayout>
    </>
  );
}

export default GettingStarted;
