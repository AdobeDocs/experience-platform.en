---
title: Action Types for Edge Extensions
description: Learn how to define an action-type library module for a tag extension in an edge property.
exl-id: c0b058aa-f0fe-4fd8-a873-018482c3e4db
TQID: 'https://experienceleague.adobe.com/qzGN76aYVBTkwpg5Kvl-itWtvOlecfyyN0mFkgff6So'
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
  - id: e1f2a3b4-4030-4030-9030-400000000030
    internal-label: Event forwarding rules
level_v2:
  - id: d378ca77-2da1-4f39-ad92-1917fe974a38
    internal-label: Experienced
autotag-review: '2026-11-05T22:08:57.077Z'
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
