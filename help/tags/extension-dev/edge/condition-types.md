---
title: Condition Types for Edge Extensions
description: Learn how to define an condition-type library module for an edge extension in Adobe Experience Platform.
exl-id: fe13420e-ffa7-49d6-92c4-965ebd9d7390
TQID: https://experienceleague.adobe.com/SPttAK4vfKt3bF9Dg07AANrWe1koxAhCYU1Y3aLGPrQ
product_v2:
  - id: a829a185-511f-4bf8-8dcf-9e684f8011cf
    internal-label: Advertising
  - id: d0a3eab4-7b10-4d96-a71e-6c0f8e7b7c87
    internal-label: CX Enterprise
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
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: bce87dde-a4ab-44c9-8a18-ad66e4ddb377
    internal-label: Customer experience
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
---
# Condition types for edge extensions

In a tag rule, a condition is evaluated after an event has occurred. All conditions must return true in order for the rule to continue processing. Condition types are provided by extensions and evaluate whether something is true or false, returning a boolean value.

As an example, an extension could provide a "viewport contains" condition type wherein the user could specify a CSS selector. When the condition is evaluated on the client's website, the extension would be able to find elements matching the CSS selector and return whether any of them are contained within the user's viewport.

This document covers how to define condition types for an edge extension in Adobe Experience Platform.

>[!IMPORTANT]
>
>If you are developing a web extension, see the guide on [condition types for web extensions](../web/condition-types.md) instead.
>
>This document also assumes you are familiar with library modules and how they are integrated in edge extensions. If you require an introduction, see the overview on [library module formatting](./format.md) before returning to this guide.

Condition types typically consist of the following:

1. A view shown within the Experience Platform UI and Data Collection UI that allows users to modify settings for the condition.
2. A library module emitted within the tag runtime library to interpret the settings and evaluate a condition.

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
