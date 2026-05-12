---
title: Library Modules in Edge Extensions
description: Format library modules for tag extensions in an edge property.
exl-id: 82b98972-6fa2-4143-bcf4-c5dac1ca0e7f
---
# Library modules in edge extensions

>[!IMPORTANT]
>
>This document covers the library module format for edge extensions. If you are developing a web extension, see the guide on [formatting web extension modules](../web/format.md) instead.

A library module is a piece of reusable code provided by an extension that is emitted inside the tag runtime library in Adobe Experience Platform (the library that runs on the edge node). For example, a `sendBeacon` action type will have a library module that will run on the edge node and send a beacon.

The library module is structured as a [CommonJS module](https://nodejs.org/api/modules.html#modules-commonjs-modules). Within a CommonJS module, the following variables are available for usage:

## [!DNL require]

A `require` function is available for you to access modules within your extension. Any module in your extension can be accessed via a relative path. The relative path must begin with `./` or `../`.

Example usage:

```js
var transformHelper = require('../helpers/transform');
transformHelper.execute({a: 'b'});
```

## [!DNL module]

A free variable named `module` is available which allows you to export the module's API.

Example usage:

```js
module.exports = (…) => { … }
```

## [!DNL exports]

A free variable named `exports` is available which allows you to export the module's API.

Example usage:

```js
exports.sayHello = (…) => { … }
```

This is an alternative to `module.exports` but is more limited in its usage. Please read [Understanding module.exports and exports in node.js](https://www.sitepoint.com/understanding-module-exports-exports-node-js/) for a better understanding of the differences between `module.exports` and `exports` and the related caveats with using `exports`. When in doubt, make your life easier and use `module.exports` rather than `exports`.

## Server-side module signature

All module types (data elements, conditions, or actions) provided by your extension will be called with the same parameters: [context](./context.md).

```js
exports.sayHello = (context) => { … }
```
