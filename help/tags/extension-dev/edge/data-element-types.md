---
title: Data Element Types for Edge Extensions
description: Learn how to define an data-element-type library module for a tag extension in an edge property.
exl-id: ddbc3912-1c25-4d21-bde8-e40e583b4278
TQID: https://experienceleague.adobe.com/F-KiKrVxRvjJJ1JqBAlthEBa37PutP9uVUzl4T4uKJc
product_v2:
  - id: a829a185-511f-4bf8-8dcf-9e684f8011cf
    internal-label: Advertising
  - id: d0a3eab4-7b10-4d96-a71e-6c0f8e7b7c87
    internal-label: CX Enterprise
  - id: dfc56824-e8b9-499e-85d4-21aedb507314
    internal-label: Campaign
  - id: e55547f1-a1ff-40c6-8978-026e40ab7fa4
    internal-label: Analytics
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection
subfeature_v2:
  - id: acc16deb-1d7f-4ec9-9ce3-6cdf355afde6
    internal-label: XDM
  - id: b64298cc-90cc-46b7-8917-ee391f1c7516
    internal-label: Data collection UI
  - id: d9830f6f-ceb6-4faa-9744-f281fe4439f9
    internal-label: Tags
  - id: f9a2105e-7a47-4e85-9193-31a519a2cb83
    internal-label: Data elements
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: bce87dde-a4ab-44c9-8a18-ad66e4ddb377
    internal-label: Customer experience
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
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
