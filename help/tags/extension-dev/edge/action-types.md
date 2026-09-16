---
title: Action Types for Edge Extensions
description: Learn how to define an action-type library module for a tag extension in an edge property.
exl-id: c0b058aa-f0fe-4fd8-a873-018482c3e4db
TQID: https://experienceleague.adobe.com/qzGN76aYVBTkwpg5Kvl-itWtvOlecfyyN0mFkgff6So
product_v2:
  - id: a829a185-511f-4bf8-8dcf-9e684f8011cf
    internal-label: Advertising
  - id: d0a3eab4-7b10-4d96-a71e-6c0f8e7b7c87
    internal-label: CX Enterprise
  - id: e55547f1-a1ff-40c6-8978-026e40ab7fa4
    internal-label: Analytics
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
  - id: f002a92a-b99f-47a4-90c8-65e0e415bc7a
    internal-label: Pass
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
# Action types for edge extensions

In a tag rule, an action is something that is performed after the rule conditions have passed evaluation. Action types are provided by extensions, and their effects are entirely defined by the extension author.

As an example, an extension could provide a "show support chat" action type which could display a support chat dialog to help users who may be struggling while checking out.

This document covers how to define action types for an edge extension in Adobe Experience Platform.

>[!IMPORTANT]
>
>If you are developing a web extension, see the guide on [action types for web extensions](../web/action-types.md) instead.
>
>This document also assumes you are familiar with library modules and how they are integrated in edge extensions. If you require an introduction, see the overview on [library module formatting](./format.md) before returning to this guide.

Action types typically consist of the following:

1. A view shown within the Experience Platform UI and Data Collection UI that allows users to modify settings for the action.
2. A library module emitted within the tag runtime library to interpret the settings and perform an action.

For example, a module to forward some data to a third-party party endpoint may look like this.

```js
module.exports = (context) {
  const { arc, utils } = context;
  const { fetch } = utils;
  const { event: { xdm } } = arc;
  return fetch('http://someendpoint.com', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(xdm)
  })
};
```

If you want to make the endpoint configurable by the user, and allow the input and persistence of an endpoint to the settings object within the module, the object would look similar to this.

```json
{
  "endpoint": "http://someendpoint.com"
}
```

In order to operate on the user-defined endpoint, your module would need to change to the following example.

```js
module.exports = (context) {
  const { arc, utils } = context;
  const { fetch } = utils;
  const { event: { xdm } } = arc;
  const  { endpoint } = settings;
  return fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(xdm)
  })
};
```

## Action result

The result returned by an action module can be anything. If the action needs to execute an asynchronous task, you can return a [promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that returns the result you want once it resolves.

The action result is stored inside a `ruleStash` key that is made available to all modules through the `context` parameter (`context.arc.ruleStash`). You can learn more about `ruleStash` [here](./context.md#rulestash).
