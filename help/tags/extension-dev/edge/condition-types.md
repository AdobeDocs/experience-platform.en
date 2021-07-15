---
title: Condition Types for Edge Extensions
description: Learn how to define an condition-type library module for an edge extension in Adobe Experience Platform.
---
# Condition types for edge extensions

>[!NOTE]
>
> Adobe Experience Platform Launch is being rebranded as a suite of data collection technologies in Experience Platform. Several terminology changes have rolled out across the product documentation as a result. Please refer to the following [document](../../launch-term-updates.md) for a consolidated reference of the terminology changes.

A condition-type library module evaluates whether something is true or false and returns a boolean value.

>[!IMPORTANT]
>
>This document covers condition types for edge extensions. If you are developing a web extension, see the guide on [condition types for web extensions](../web/condition-types.md) instead.
>
>This document also assumes you are familiar with library modules and how they are integrated in tag extensions. If you require an introduction, see the overview on [library module formatting](./format.md) before returning to this guide.

For example, if you want to evaluate whether the user is on the host `example.com`, your module may look like this.

```js
module.exports = (context) => {
  const URL = context.arc.event.xdm.web.webpageDetails.URL;
  return URL.endsWith("adobelaunch.com");
};
```

If you want to make the hostname configurable by the user to allow the input of a hostname and save it to the settings object, the object might look similar to this example.

```js
{
  "hostname": "example.com"
}
```

In order to operate on the user-defined hostname, your module would need to change to this:

```js
module.exports = (context) => {
  const URL = context.arc.event.xdm.web.webpageDetails.URL;
  return URL.endsWith(settings.hostname);
};
```

## Condition result

The result returned by a condition module can be one of the following:

1. A boolean value (`true` or `false`).
1. A [promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that returns a boolean value once resolved.

## Library module context

All condition modules have access to a `context` variable that is provided when the module is called. You can learn more [here](./context.md).
