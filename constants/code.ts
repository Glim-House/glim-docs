export const createapp = `npx glim create-app [app-name]`;
export const componentgenerate = `npx glim generate --component [component-name]`;
export const screengenerate = `npx glim generate --screen [component-name]`;
export const storegenerate = `npx glim generate --store [component-name]`;
export const installDetox = `npm install detox-cli --global`;
export const installapplesimults = `brew tap wix/brew
brew install applesimutils
`;
export const installdependency = `npm install detox --save-dev`;
export const installjest = `npm install "jest@^29" --save-dev`;
export const detoxinit = `detox init`;
export const detoxfiles = `.detoxrc.js
e2e/jest.config.js
e2e/starter.test.js`;
export const detoxaddemu = `/** @type {Detox.DetoxConfig} */
module.exports = {
  // ...
  devices: {
    simulator: {
      type: "ios.simulator",
      device: {
        type: "iPhone 12",
      },
    },
    attached: {
      type: "android.attached",
      device: {
        adbName: ".*", // any attached device
      },
    },
    emulator: {
      type: "android.emulator",
      device: {
        avdName: "Pixel_3a_API_30_x86",
      },
    },
  },
};`;
export const checkemulator = {
  android: `emulator -list-avds`,
  ios: `xcrun simctl list devicetypes`,
};
export const appconfig = {
  android: `module.exports = {
    apps: {
      "android.debug": {
        type: "android.apk",
        binaryPath: "android/app/build/outputs/apk/debug/app-debug.apk",
        build:
          "cd android && ./gradlew assembleDebug assembleAndroidTest -DtestBuildType=debug",
      },
      "android.release": {
        type: "android.apk",
        binaryPath: "android/app/build/outputs/apk/release/app-release.apk",
        build:
          "cd android && ./gradlew assembleRelease assembleAndroidTest -DtestBuildType=release",
      },
      // ...
    },
    // ...
  };`,
  ios: `apps: {
    'ios.debug': {
      type: 'ios.app',
-      binaryPath: 'ios/build/Build/Products/Debug-iphonesimulator/YOUR_APP.app',
+      binaryPath: 'ios/build/Build/Products/Debug-iphonesimulator/example.app',
-      build: 'xcodebuild -workspace ios/YOUR_APP.xcworkspace -scheme YOUR_APP -configuration Debug -sdk iphonesimulator -derivedDataPath ios/build'
+      build: 'xcodebuild -workspace ios/example.xcworkspace -scheme example -configuration Debug -sdk iphonesimulator -derivedDataPath ios/build'
    },
    'ios.release': {
      type: 'ios.app',
-      binaryPath: 'ios/build/Build/Products/Release-iphonesimulator/YOUR_APP.app',
+      binaryPath: 'ios/build/Build/Products/Release-iphonesimulator/example.app',
-      build: 'xcodebuild -workspace ios/YOUR_APP.xcworkspace -scheme YOUR_APP -configuration Release -sdk iphonesimulator -derivedDataPath ios/build'
+      build: 'xcodebuild -workspace ios/example.xcworkspace -scheme example -configuration Release -sdk iphonesimulator -derivedDataPath ios/build'
    },`,
};
