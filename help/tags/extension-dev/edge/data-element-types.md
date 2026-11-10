---
title: Data Element Types for Edge Extensions
description: Learn how to define an data-element-type library module for a tag extension in an edge property.
exl-id: ddbc3912-1c25-4d21-bde8-e40e583b4278
TQID: 'https://experienceleague.adobe.com/F-KiKrVxRvjJJ1JqBAlthEBa37PutP9uVUzl4T4uKJc'
feature_v2:
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection tags
  - id: dc6ebdf7-9a94-43eb-9184-759cfdd0cf1c
    internal-label: Event forwarding
subfeature_v2:
  - id: 1a2b3c4d-0003-4003-8003-000000000003
    internal-label: Data collection tags extensions
  - id: e1f2a3b4-4027-4027-9027-400000000027
    internal-label: Event forwarding extensions
  - id: e1f2a3b4-4025-4025-9025-400000000025
    internal-label: Event forwarding data elements
level_v2:
  - id: d378ca77-2da1-4f39-ad92-1917fe974a38
    internal-label: Experienced
autotag-review: '2026-11-05T22:08:57.077Z'
---
# Data element types in edge extensions

In tags, data elements are aliases for pieces of data on a web or mobile page, regardless of where that data is found inside the event received by the server. A data element can be referenced by rules and acts as an abstraction for accessing these pieces of data. When the location of the data changes in the future (such as changing the event key that contains the value), a single data element can be reconfigured while all the rules referencing that data element can remain unchanged.

Data element types are provided by extensions, and the extension author determines how this piece of data is retrieved. For example, you can use a data element type to allow Adobe Experience Platform users to retrieve a piece of data from the XDM layer or their custom data layer.

This document covers how to define data element types for an edge extension in Adobe Experience Platform.

>[!IMPORTANT]
>
>If you are developing a web extension, see the guide on [data element types for web extensions](../web/data-element-types.md) instead.
>
>This document also assumes you are familiar with library modules and how they are integrated in edge extensions. If you require an introduction, see the overview on [library module formatting](./format.md) before returning to this guide.

Data element types typically consist of the following:

1. A view shown within the Experience Platform UI and Data Collection UI that allows users to modify settings for the data element.
2. A library module emitted within the tag runtime library to interpret the settings and retrieve pieces of data.

Should you want to allow users to retrieve a piece of data from the custom data layer, your module may look like this example.

```js
module.exports = (context) => {
  const productName = context.arc.event.data.productName;
  return productName;
};
```

If you want to make the data returned for the data layer configurable by the Adobe Experience Platform user, you can allow the user to input a key name and then save the name to the `settings` object. The object might look something like this.

```js
{
  keyName: "campaignId"
}
```

In order to operate on the user-defined local storage item name, your module would need to change to this:

```js
module.exports = (context) => {
  const data = context.arc.event.data;
  return data[keyName];
};
```

## Library module context

All data element modules have access to a `context` variable that is provided when the module is called. You can learn more [here](./context.md).
