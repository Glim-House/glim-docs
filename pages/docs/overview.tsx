import React from "react";
import DocsLayout from "../../components/DocsLayout";
import HeadwithTitle from "../../components/HeadwithTitle";

function Overview() {
  return (
    <>
      <HeadwithTitle page="Overview" />
      <DocsLayout>
        <div className="container lg:w-3/4 mx-auto py-16">
          <div className="text-4xl font-semibold mb-4">Overview</div>
          <p>
            Glim cli is the react native boilerplate that provide hassle-free
            architecture for developing react native applications. It's an all
            in one library kit for react native developers. Through glim cli we
            can create components, screens, redux components etc.
          </p>
          <div className="text-3xl font-semibold mt-8">Prerequisites</div>
          <ul className="list-disc list-inside">
            <li>Node</li> <li>Watchman</li> <li>Xcode</li> <li>CocoaPods</li>{" "}
            <li>Ruby</li>
          </ul>
          <div className="text-3xl font-semibold mt-8">Glim Boilerplate</div>
          <p>
            Glim boilerplate includes with different set of libraries, so you
            can just start coding without doing any configurations.
          </p>
          <table className="table-auto w-full">
            <tr>
              <th>Library</th>
              <th>Heading</th>
            </tr>
          </table>
        </div>
      </DocsLayout>
    </>
  );
}

export default Overview;
