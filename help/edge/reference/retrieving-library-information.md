---
title: Retrieving library information
seo-title: Retrieving library information with Adobe Experience Platform Web SDK
description: Learn how to retrieve information about the library loaded onto the website
seo-description: Learn how to retrieve information about the library loaded onto the website by The Adobe Experience Cloud SDK collects automatically
keywords: library; library information;getLibraryInfo;libraryInfo;
---

# Retrieving library information

It's often helpful to access some of the details behind the library you have loaded onto your website. To do this, execute the `getLibraryInfo` command as follows:

```js
alloy("getLibraryInfo").then(function(libraryInfo) {
  console.log(libraryInfo.version);
});
```

Currently, the provided `libraryInfo` object contains the following properties:

* `version` This is the version of the loaded library. For example, if the version of the library being loaded were 1.0.0, the value would be `1.0.0`. When the library is run inside the AEP Web SDK Adobe Launch Extension, the version is the library version and the extension version joined with a "+". For example, if the version of the library was 1.0.0, and the version of the launch extension was 1.2.0, the value would be `1.0.0+1.2.0`.