---
title: Data Element Types for Web Extensions
description: Learn how to define a data-element-type library module for a tag extension in a web property.
---
# Data element types for edge extensions

>[!NOTE]
>
>Adobe Experience Platform Launch is being rebranded as a suite of data collection technologies in Experience Platform. Several terminology changes have rolled out across the product documentation as a result. Please refer to the following [document](../../launch-term-updates.md) for a consolidated reference of the terminology changes.

The purpose of a data element type library module is to retrieve a piece of data. The method for this retrieval is customizable. Different data element types allow Adobe Experience Platform users to retrieve data from local storage, a cookie, or a DOM element.

>[!IMPORTANT]
>
>This document provides information on data-element types for web extensions. If you are developing an edge extension, see the guide on [data-element types for edge extensions](../edge/data-element-types.md) instead.
>
>This document also assumes you are familiar with library modules and how they are integrated in tag extensions. If you require an introduction, see the overview on [library module formatting](./format.md) before returning to this guide.

Consider a situation where you want to allow users to retrieve a piece of data from a local storage item named `productName`. Your module may look like this:

```js
module.exports = function(settings) {
  return localStorage.getItem('productName');
}
```

If you want to make the local storage item name configurable by the Adobe Experience Platform user, you can allow the user to input a name and then save the name to the `settings` object. The object might look something like this:

```js
{
  itemName: "campaignId"
}
```

In order to operate on the user-defined local storage item name, your module would need to change to this:

```js
module.exports = function(settings) {
  return localStorage.getItem(settings.itemName);
}
```

## Default value support

Be aware that users have the option to configure a default value for any data element. If your data element library module returns a value of `undefined` or `null`, it will be automatically replaced by the default value the user has configured for the data element.

## Contextual event data

If the data element is being retrieved as a result of a rule being triggered (for example, data elements are used in the conditions and actions of the rule), a second argument will be passed to your module which contains contextual information regarding the event that fired the rule. It may be beneficial in certain cases and can be accessed as follows:

```js
module.exports = function(settings, event) {
  // event contains information regarding the event that fired the rule
};
```

The `event` object must contain the following properties:

| Property | Description |
| --- | --- |
| `$type` | A string describing the extension name and event name, joined using a period. For example, `youtube.play`. |
| `$rule` | An object containing information about the currently executing rule. The object must contain the following sub-properties:<ul><li>`id`: The ID of the currently executing rule.</li><li>`name`: The name of the currently executing rule.</li></ul> |

The extension providing the event type that triggered the rule may optionally add any other useful information to this `event` object.
