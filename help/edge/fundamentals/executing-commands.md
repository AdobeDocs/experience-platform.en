---
title: Execute Adobe Experience Platform Web SDK Commands
description: Learn how to execute Experience Platform Web SDK commands
keywords: Execute commands;commandName;Promises;getLibraryInfo;response objects;consent;
exl-id: dda98b3e-3e37-48ac-afd7-d8852b785b83
---
# Execute commands


After the base code has been implemented on your webpage, you can begin executing commands with the SDK. You do not need to wait for the external file (`alloy.js`) to be loaded from the server before executing commands. If the SDK has not finished loading, commands are queued and processed by the SDK as soon as possible.

Commands are executed using the following syntax.

```javascript
alloy("commandName", options);
```

The `commandName` tells the SDK what to do, while `options` are the parameters and data you would like to pass into a command. Because the available options depend on the command, please consult the documentation for more details about each command.

## A note on promises

[Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) are fundamental to how the SDK communicates with the code on your webpage. A promise is a common programming structure and is not specific to this SDK or even JavaScript. A promise acts as a proxy for a value that is not known when the promise is created. Once the value is known, the promise is "resolved" with the value. Handler functions can be associated with a promise, so that you can be notified when the promise has been resolved or when an error has occurred in the process of resolving the promise. To learn more about promises, please read [this tutorial](https://javascript.info/promise-basics) or any of the other resources on the web.

## Handling success or failure {#handling-success-or-failure}

Each time a command is executed, a promise is returned. The promise represents the eventual completion of the command. In the example below, you can use `then` and `catch` methods to determine when the command has succeeded or failed.

```javascript
alloy("commandName", options)
  .then(function(result) {
    // The command succeeded.
    // "value" is whatever the command returned
  })
  .catch(function(error) {
    // The command failed.
    // "error" is an error object with additional information
  });
```

If knowing when the command succeeds is not important to you, you may remove the `then` call.

```javascript
alloy("commandName", options)
  .catch(function(error) {
    // The command failed.
    // "error" is an error object with additional information
  });
```

Likewise, if knowing when the command fails is not important to you, you may remove the `catch` call.

```javascript
alloy("commandName", options)
  .then(function(result) {
    // The command succeeded.
    // "value" will be whatever the command returned
  });
```

### Response objects

All promises returned from commands are resolved with a `result` object. The result object will contain data depending on the command and the user's consent. For example, library info is passed as a property of the results object in the following command.

```js
alloy("getLibraryInfo")
  .then(function(result) {
    console.log(result.libraryInfo.version);
    console.log(result.libraryInfo.commands);
    console.log(result.libraryInfo.configs);
  });
```

### Consent

If a user has not given their consent for a particular purpose, the promise will still be resolved; however, the response object will only contain the information that can be provided in the context of what the user has consented to.
