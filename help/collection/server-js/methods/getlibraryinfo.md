---
title: getLibraryInfo (Server SDK)
description: Retrieve the version and configuration of the Server SDK.
badge: Alpha
---
# `getLibraryInfo` (Server SDK)

>[!BEGINSHADEBOX]

*This page describes the Server SDK `getLibraryInfo` method. For the Web SDK, see [`getLibraryInfo`](/help/collection/js/commands/getlibraryinfo.md).*

>[!ENDSHADEBOX]

The `getLibraryInfo` method returns information about the Server SDK that your server runs, including its version, its computed configuration, and the methods and components that it includes. Use it to log the SDK version when your server starts, or to troubleshoot your configuration.

```js
const { libraryInfo } = await alloy.getLibraryInfo();

console.log(libraryInfo.version);
console.log(libraryInfo.commands);
console.log(libraryInfo.configs);
console.log(libraryInfo.components);
```

## Result object {#result}

The `getLibraryInfo` method returns a promise. When it resolves, the result object contains a `libraryInfo` object with the following properties:

* **`libraryInfo.version`**: The version of the `@adobe/alloy-node` package, such as `"0.2.1"`.
* **`libraryInfo.configs`**: An object that contains the computed configuration, including default values for options that you didn't set. The SDK replaces the client secret in [`edgeCredentials`](configure/edgecredentials.md) with `[REDACTED]`, and shows functions, such as [`onBeforeEventSend`](configure/onbeforeeventsend.md), as strings.
* **`libraryInfo.commands`**: An array of the method names that the instance supports, such as `"sendEvent"`. The array doesn't include `forRequest`.
* **`libraryInfo.components`**: An array of the component names that the instance includes, such as `"Consent"` and `"Personalization"`.
