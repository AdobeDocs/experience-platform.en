---
title: getLibraryInfo (Server SDK)
description: Retrieve the version and configuration of the Server SDK.
badge: Alpha
feature_v2:
  - id: b7798bb6-f089-4907-8492-05fc80e10632
    internal-label: Server API
level_v2:
  - id: b5a62a22-46f7-4f0d-b151-3fc640bef588
    internal-label: Intermediate
topic_v2:
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
  - id: c1579802-ddd4-4214-8a91-97b2066abe11
    internal-label: Troubleshooting
autotag-review: '2026-11-05T22:08:57.077Z'
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
