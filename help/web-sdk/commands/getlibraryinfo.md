---
title: getLibraryInfo
description: Retrieve information around the current Web SDK library version.
exl-id: f2bc0185-71c9-4d77-b9d2-b777a41a20e5
---
# `getLibraryInfo`

The `getLibraryInfo` command provides you with information around the version of the Web SDK library currently used. You can use this command to track which versions of the Web SDK that you deploy to different web properties.

## Library info using the Web SDK tag extension

The tag extension does not provide an interface to send this command. Use the custom code editor, following JavaScript library syntax.

If you run this command using the tag extension, both the tag extension version and library version are included, concatenatated with a `+` symbol. The Web SDK library version is listed first, followed by the tag extension version.

## Library info using the Web SDK JavaScript library

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
