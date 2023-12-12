---
title: getLibraryInfo
description: Retrieve information around the current Web SDK library version.
---
# `getLibraryInfo`

The `getLibraryInfo` command provides you with information around the version of the Web SDK library currently used. Running this command provides the following objects:

* **`commands`**: An array of commands that this version of the Web SDK supports.
* **`configs`**: An array of configuration settings that this version of the Web SDK supports.
* **`version`**: The version of the Web SDK library.

## Library info using the Web SDK tag extension

The tag extension does not provide an interface to send this command. Use the custom code editor, following JavaScript library syntax.

If you run this command using the tag extension, both the tag extension version and library version are included, concatentated with a `+` symbol. The Web SDK library version is listed first, followed by the tag extension version.

## Library info using the Web SDK JavaScript library

Run the `getLibraryInfo` command. This command is typically paired with a JavaScript promise that allows you to retrieve the objects that it populates.

```js
alloy("getLibraryInfo").then(function(result) {
  console.log(result.libraryInfo.version);
  console.log(result.libraryInfo.commands);
  console.log(result.libraryInfo.configs);
});
```
