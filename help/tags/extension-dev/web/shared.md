---
title: Shared Modules in Web Extensions
description: Learn how to define shared library modules for web extensions in Adobe Experience Platform.
exl-id: ec013a39-966c-43f3-bc36-31198990a17e
---
# Shared modules in web extensions

A shared module is a mechanism by which you can communicate with other extensions. For example, Extension A may load a piece of data asynchronously and make it available to Extension B via a [promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

In JavaScript implementations, all shared modules are instantiated using the [`getSharedModule`](../turbine.md#shared) method provided by the `turbine` free variable.

Shared modules are included in tag libraries even when they are never called from inside other extensions. In order to not increase the library size unnecessarily, you should be careful about what you expose as a shared module.

Shared modules do not have a view component.

When developing your own tag extension, you can define any shared modules you want it to provide. For example, you can create a module that loads a user ID asynchronously and then shares the user ID with any other extension via a promise:

```javascript
var userIdPromise = new Promise(/* load user ID, then resolve promise */);
module.exports = userIdPromise;
```

In the [extension manifest](../manifest.md), you have to provide a name for this shared module. If you name it `user-id-promise`, a different extension could then access this shared module as follows:

```javascript
var userIdPromise = turbine.getSharedModule('user-extension', 'user-id-promise');
```

Shared modules can be anything you would typically be able to export from a CommonJS module (such as functions, objects, strings, numbers, or booleans).
