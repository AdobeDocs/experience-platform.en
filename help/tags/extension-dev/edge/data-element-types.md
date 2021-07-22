---
title: Data Element Types for Edge Extensions
description: Learn how to define an data-element-type library module for a tag extension in an edge property.
---
# Data-element types in edge extensions

>[!NOTE]
>
>Adobe Experience Platform Launch is being rebranded as a suite of data collection technologies in Experience Platform. Several terminology changes have rolled out across the product documentation as a result. Please refer to the following [document](../../term-updates.md) for a consolidated reference of the terminology changes.

A data-element-type library module retrieves a piece of data. The module author determines how this piece of data is retrieved. For example, you can use a data element type to allow Adobe Experience Platform users to retrieve a piece of data from the XDM layer or their custom data layer.

>[!IMPORTANT]
>
>This document covers data-element types for edge extensions. If you are developing a web extension, see the guide on [data-element types for web extensions](../web/data-element-types.md) instead.
>
>This document also assumes you are familiar with library modules and how they are integrated in tag extensions. If you require an introduction, see the overview on [library module formatting](./format.md) before returning to this guide.

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
