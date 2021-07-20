---
title: Action Types for Web Extensions
description: Learn how to define an action-type library module for a tag extension in a web property.
---
# Action types for web extensions

>[!NOTE]
>
>Adobe Experience Platform Launch is being rebranded as a suite of data collection technologies in Experience Platform. Several terminology changes have rolled out across the product documentation as a result. Please refer to the following [document](../../term-updates.md) for a consolidated reference of the terminology changes.

An action type library module is intended to take a predefined action. What this action does is entirely up to you. Do you want to send a beacon, show an offer, thank the user for visiting, save a cookie, or open a support chat?

>[!IMPORTANT]
>
>This document covers action types for web extensions. If you are developing an edge extension, see the guide on [action types for edge extensions](../edge/action-types.md) instead.
>
>This document also assumes you are familiar with library modules and how they are integrated in tag extensions. If you require an introduction, see the overview on [library module formatting](./format.md) before returning to this guide.

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
