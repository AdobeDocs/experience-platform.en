---
title: getLibraryInfo (Web SDK)
description: Retrieve information around the current Web SDK library version.
exl-id: f2bc0185-71c9-4d77-b9d2-b777a41a20e5
feature_v2:
  - id: d5947817-d24b-4ba3-8126-2c3d66e9422b
    internal-label: Web SDK
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
# `getLibraryInfo` (Web SDK)

>[!BEGINSHADEBOX]

*This page describes the Web SDK `getLibraryInfo` command. For the Server SDK, see [`getLibraryInfo`](/help/collection/server-js/methods/getlibraryinfo.md).*

>[!ENDSHADEBOX]

The `getLibraryInfo` command provides you with information around the version of the Web SDK library currently used. You can use this command to track which versions of the Web SDK that you deploy to different web properties.

Run the `getLibraryInfo` command when calling your configured instance of the Web SDK. This command is typically paired with a JavaScript promise that allows you to retrieve the objects that it populates.

```js
alloy("getLibraryInfo").then(function(result) {
  console.log(result.libraryInfo.version);
  console.log(result.libraryInfo.commands);
  console.log(result.libraryInfo.configs);
});
```

## Response object

If you decide to [handle responses](command-responses.md) with this command, the following properties are available in the response object:

* **`libraryInfo.commands`**: An array of commands that this version of the Web SDK supports.
* **`libraryInfo.configs`**: An array of configuration settings that this version of the Web SDK supports.
* **`libraryInfo.version`**: The version of the Web SDK library.

## Library info using the Web SDK tag extension

The tag extension does not provide an interface to send this command. Use the custom code editor, following JavaScript library syntax.

If you run this command using the tag extension, both the tag extension version and library version are included, concatenatated with a `+` symbol. The Web SDK library version is listed first, followed by the tag extension version.
