import React from "react";
import DocsLayout from "../../layout/DocsLayout";
import HeadwithTitle from "../../components/HeadwithTitle";

function Overview() {
  return (
    <>
      <HeadwithTitle page="Overview" />
      <DocsLayout>
        <div className="container lg:w-3/4 mx-auto py-16">
          <div className="text-5xl font-semibold mb-4">Overview</div>
          <p>
            Glim cli is the react native boilerplate that provide hassle-free
            architecture for developing react native applications. It&apos;s an
            all in one library kit for react native developers. Through glim cli
            we can create components, screens, redux components etc.
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
          <table className="table-auto w-full mt-6">
            <tr>
              <th className="text-left p-4">Library</th>
              <th className="text-left">Description</th>
            </tr>
            <tr>
              <td className="p-4">React Native </td>
              <td>The best cross-platform mobile framework</td>
            </tr>
            <tr>
              <td className="p-4">React </td>
              <td> JavaScript library for building user interfaces</td>
            </tr>
            <tr>
              <td className="p-4">Typescript</td>
              <td> Static Typechecker Tailwind CSS framework for styling</td>
            </tr>
            <tr>
              <td className="p-4">React Navigation </td>
              <td>Routing and navigating between multiple components</td>
            </tr>
            <tr>
              <td className="p-4"> RN Reanimated </td>
              <td>
                Provides an API that greatly simplifies the process of creating
                smooth, powerful, and maintainable animations
              </td>
            </tr>
            <tr>
              <td className="p-4">AsyncStorage </td>
              <td>Asynchronous, persistent, key-value storage system</td>
            </tr>
            <tr>
              <td className="p-4">Flipper </td>
              <td>React Native Debugger Jest JavaScript testing framework</td>
            </tr>
          </table>
        </div>
      </DocsLayout>
    </>
  );
}

export default Overview;
