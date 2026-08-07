---
title: Install the Web SDK using the NPM package
description: Use an NPM package to install and reference the Web SDK library.
exl-id: 4c70ec5d-33fd-4ef7-ba9e-5b92ff6c3e86
TQID: https://experienceleague.adobe.com/72KJtyfIf-2QXKbRLxuTuttBOFsmovDBGIeK8uNkOr8
product_v2:
  - id: d0a3eab4-7b10-4d96-a71e-6c0f8e7b7c87
    internal-label: CX Enterprise
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
  - id: f002a92a-b99f-47a4-90c8-65e0e415bc7a
    internal-label: Pass
feature_v2:
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
---
# Install the Web SDK using the NPM package

Adobe Experience Platform Web SDK is available as an [NPM package](https://www.npmjs.com). Installing the NPM package allows you to have control of the build process for the Adobe Experience Platform Web SDK JavaScript library. The NPM package exposes EcmaScript version 5 modules or EcmaScript version 2015 (ES6) modules meant to be run in the browser.

```bash
npm install @adobe/alloy
```

The NPM package of the Adobe Experience Platform Web SDK exposes a `createInstance` function. The name option passed to the function controls the prefix used in logging. Below are examples of using the package.

## Using the package as an ECMAScript 2015 (ES6) module

```js
import { createInstance } from "@adobe/alloy";
const alloy = createInstance({ name: "alloy" });
alloy("configure", { ... });
alloy("sendEvent", { ... });
```

>[!NOTE]
>
>The NPM package relies on CommonJS modules; therefore, when using a bundler, make sure that the bundler supports CommonJS modules. Some bundlers, such as [Rollup](https://rollupjs.org), require a [plugin](https://www.npmjs.com/package/@rollup/plugin-commonjs) that provides CommonJS support.

## Using the package as an ECMAScript 5 module

```js
var alloyLibrary = require("@adobe/alloy");
var alloy = alloyLibrary.createInstance({ name: "alloy" });
alloy("configure", { ... });
alloy("sendEvent", { ... });
```
