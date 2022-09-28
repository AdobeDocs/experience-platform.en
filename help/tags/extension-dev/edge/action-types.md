---
title: Action Types for Edge Extensions
description: Learn how to define an action-type library module for a tag extension in an edge property.
exl-id: c0b058aa-f0fe-4fd8-a873-018482c3e4db
---
# Action types for edge extensions

>[!NOTE]
>
>Adobe Experience Platform Launch has been rebranded as a suite of data collection technologies in Adobe Experience Platform. Several terminology changes have rolled out across the product documentation as a result. Please refer to the following [document](../../term-updates.md) for a consolidated reference of the terminology changes.

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
