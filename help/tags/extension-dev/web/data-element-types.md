---
title: Data Element Types for Web Extensions
description: Learn how to define a data-element-type library module for a tag extension in a web property.
exl-id: 3aa79322-2237-492f-82ff-0ba4d4902f70
---
# Data element types for web extensions

>[!NOTE]
>
>Adobe Experience Platform Launch has been rebranded as a suite of data collection technologies in Adobe Experience Platform. Several terminology changes have rolled out across the product documentation as a result. Please refer to the following [document](../../term-updates.md) for a consolidated reference of the terminology changes.

In data collection tags, data elements are essentially aliases to pieces of data on a page. This data can be found in query string parameters, cookies, DOM elements, or other locations. A data element can be referenced by rules and acts as an abstraction for accessing these pieces of data.

Data element types are provided by extensions, and enable users to configure data elements to access pieces of data in a particular way. As an example, an extension could provide a "local storage item" data element type wherein the user could specify a local storage item name. When the data element is referenced by a rule, the extension would be able to look up the local storage item value by using the local storage item name that the user had provided when configuring the data element.

This document covers how to define data element types for a web extension in Adobe Experience Platform.

>[!IMPORTANT]
>
>If you are developing an edge extension, see the guide on [data element types for edge extensions](../edge/data-element-types.md) instead.
>
>This document also assumes you are familiar with library modules and how they are integrated in web extensions. If you require an introduction, see the overview on [library module formatting](./format.md) before returning to this guide.

Data element types typically consist of the following:

1. A [view](./views.md) shown within the Experience Platform UI and Data Collection UI that allows users to modify settings for the data element.
2. A library module emitted within the tag runtime library to interpret the settings and retrieve pieces of data.

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
