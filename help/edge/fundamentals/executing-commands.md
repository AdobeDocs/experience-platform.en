---
title: Executing commands
seo-title: Executing Adobe Experience Platform Web SDK commands
description: Learn how to execute Experience Platform Web SDK commands
seo-description: Learn how to execute Experience Platform Web SDK commands
---

# Executing commands

After the base code has been implemented on your webpage, you can begin executing commands with the SDK. You do not need to wait for the external file \(`alloy.js`\) to be loaded from the server before executing commands. If the SDK has not finished loading, commands are queued and processed by the SDK as soon as possible.

Commands are executed using the following syntax.

```javascript
alloy("commandName", options);
```

The `commandName` tells the SDK what to do, while `options` are the parameters and data you would like to pass into a command. Because the available options depend on the command, please consult the documentation for more details about each command.

## A note on promises

[Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) are fundamental to how the SDK communicates with the code on your webpage. A promise is a common programming structure and is not specific to this SDK or even JavaScript. A promise acts as a proxy for a value that is not known when the promise is created. Once the value is known, the promise is "resolved" with the value. Handler functions can be associated with a promise, so that you can be notified when the promise has been resolved or when an error has occurred in the process of resolving the promise. To learn more about promises, please read [this tutorial](https://javascript.info/promise-basics) or any of the other resources on the web.

## Handling success or failure

Each time a command is executed, a promise is returned. The promise represents the eventual completion of the command. In the example below, you can use `then` and `catch` methods to determine when the command has succeeded or failed.

```javascript
alloy("commandName", options)
  .then(function(value) {
    // The command succeeded.
    // "value" is whatever the command returned
  })
  .catch(function(error) {
    // The command failed.
    // "error" is an error object with additional information
  })
```

If knowing when the command succeeds is not important to you, you may remove the `then` call.

```javascript
alloy("commandName", options)
  .catch(function(error) {
    // The command failed.
    // "error" is an error object with additional information
  })
```

Likewise, if knowing when the command fails is not important to you, you may remove the `catch` call.

```javascript
alloy("commandName", options)
  .then(function(value) {
    // The command succeeded.
    // "value" will be whatever the command returned
  })
```

## Suppressing errors

If the promise is rejected and you have not added a `catch` call, the error "bubbles up" and is logged in your browser's developer console, regardless of whether logging is enabled in Adobe Experience Platform Web SDK. If this is a concern for you, you can set the `suppressErrors` configuration option to `true` as outlined in [Configuring the SDK](configuring-the-sdk.md).
