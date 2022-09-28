---
title: Action Types for Web Extensions
description: Learn how to define an action-type library module for a tag extension in a web property.
exl-id: d4539132-a72c-40b0-84b6-50cbe3785d2d
---
# Action types for web extensions

>[!NOTE]
>
>Adobe Experience Platform Launch has been rebranded as a suite of data collection technologies in Adobe Experience Platform. Several terminology changes have rolled out across the product documentation as a result. Please refer to the following [document](../../term-updates.md) for a consolidated reference of the terminology changes.

In the context of data collection tags, an action is something that is performed after a rule event has occurred and all conditions have passed evaluation.

As an example, an extension could provide a "show support chat" action type which could display a support chat dialog to help users who may be struggling while checking out.

This document covers how to define action types for a web extension in Adobe Experience Platform.

>[!IMPORTANT]
>
>This document covers action types for web extensions. If you are developing an edge extension, see the guide on [action types for edge extensions](../edge/action-types.md) instead.
>
>This document also assumes you are familiar with library modules and how they are integrated in web extensions. If you require an introduction, see the overview on [library module formatting](./format.md) before returning to this guide.

Action types typically consist of the following:

1. A [view](./views.md) shown within the Experience Platform UI and Data Collection UI that allows users to modify settings for the action.
2. A library module emitted within the tag runtime library to interpret the settings and perform an action.

```js
module.exports = function(settings) {
  alert('Thanks for visiting our site!');
};
```

For example, to make the message configurable by the Adobe Experience Platform user, you could allow the user to input and save a message to the settings object. The object looking something like this:

```json
{
  "message": "Thank you for being one of our VIP members!"
}
```

In order to operate on the user-defined message, your module would need to change to this:

```js
module.exports = function(settings) {
  alert(settings.message);
}
```

## Contextual event data

A second argument would then have to be passed to your module which contains the contextual information about the event that fires the rule. It may be beneficial in certain cases and can be accessed as follows:

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
