export const createapp = `npx glim-cli create-app [app-name]`;
export const componentgenerate = `npx glim-cli generate --component [component-name]`;
export const screengenerate = `npx glim-cli generate --screen [component-name]`;
export const storegenerate = `npx glim-cli generate --store [component-name]`;
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
export const buildapp = {
  androiddebug: `detox build --configuration android.emu.debug`,
  androidrelease: `detox build --configuration android.emu.release`,
  iosdebug: `detox build --configuration ios.sim.debug`,
  iosrelease: `detox build --configuration ios.sim.release`,
};
export const test = `describe("Example", () => {
  beforeAll(async () => {});

  beforeEach(async () => {});

  it("should test something", async () => {});
});`;
export const runtest = {
  androiddebug: `detox test --configuration android.emu.debug`,
  androidrelease: `detox test --configuration android.emu.release`,
  iosdebug: `detox test --configuration ios.sim.debug`,
  iosrelease: `detox test --configuration ios.sim.release`,
};
export const androidconfiguration = {
  buildscriptone: ` buildscript {
    ext {
      buildToolsVersion = "31.0.0"
      minSdkVersion = 21
      compileSdkVersion = 30
      targetSdkVersion = 30
 +    kotlinVersion = 'X.Y.Z'
    }
  …
    dependencies {
      classpath("com.android.tools.build:gradle:7.1.1")
      classpath("com.facebook.react:react-native-gradle-plugin")
      classpath("de.undercouch:gradle-download-task:5.0.1")
 +    classpath("org.jetbrains.kotlin:kotlin-gradle-plugin:$kotlinVersion")
  …
 
  allprojects {
    repositories {
    …
    google()
 +  maven {
 +    url("$rootDir/../node_modules/detox/Detox-android")
 +  }
    maven { url 'https://www.jitpack.io' }
  }`,
  buildscripttwo: ` …

  android {
    …
    defaultConfig {
      …
      versionCode 1
      versionName "1.0"
 +    testBuildType System.getProperty('testBuildType', 'debug')
 +    testInstrumentationRunner 'androidx.test.runner.AndroidJUnitRunner'
    …
    buildTypes {
      release {
        minifyEnabled true
        proguardFiles getDefaultProguardFile('proguard-android.txt'), 'proguard-rules.pro'
 +      proguardFile "$ {project(":detox").projectDir}/proguard-rules-app.pro"
 
        signingConfig signingConfigs.release
      }
    }
    …
 
  dependencies {
 +  androidTestImplementation('com.wix:detox:+')
 +  implementation 'androidx.appcompat:appcompat:1.1.0'
    implementation fileTree(dir: "libs", include: ["*.jar"])`,
  nativetest: `
  package com.<your.package>;

import com.wix.detox.Detox;
import com.wix.detox.config.DetoxConfig;

import org.junit.Rule;
import org.junit.Test;
import org.junit.runner.RunWith;

import androidx.test.ext.junit.runners.AndroidJUnit4;
import androidx.test.filters.LargeTest;
import androidx.test.rule.ActivityTestRule;

@RunWith(AndroidJUnit4.class)
@LargeTest
public class DetoxTest {
    @Rule // (2)
    public ActivityTestRule<MainActivity> mActivityRule = new ActivityTestRule<>(MainActivity.class, false, false);

    @Test
    public void runDetoxTests() {
        DetoxConfig detoxConfig = new DetoxConfig();
        detoxConfig.idlePolicyConfig.masterTimeoutSec = 90;
        detoxConfig.idlePolicyConfig.idleResourceTimeoutSec = 60;
        detoxConfig.rnContextLoadTimeoutSec = (BuildConfig.DEBUG ? 180 : 60);

        Detox.runTests(mActivityRule, detoxConfig);
    }
}`,
  manifestone: `<?xml version="1.0" encoding="utf-8"?>
<network-security-config>
    <domain-config cleartextTrafficPermitted="true">
        <domain includeSubdomains="true">10.0.2.2</domain>
        <domain includeSubdomains="true">localhost</domain>
    </domain-config>
</network-security-config>`,
  manifesttwo: ` <manifest>
<application
…
+    android:networkSecurityConfig="@xml/network_security_config">
</application>
</manifest>`,
};
