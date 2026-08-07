---
title: Action Types for Web Extensions
description: Learn how to define an action-type library module for a tag extension in a web property.
exl-id: d4539132-a72c-40b0-84b6-50cbe3785d2d
TQID: https://experienceleague.adobe.com/UoMefPx9OrYsb8XLajCihkfKOh-XosKaj9xgsxiESQs
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
  - id: b64298cc-90cc-46b7-8917-ee391f1c7516
    internal-label: Data collection UI
  - id: d9830f6f-ceb6-4faa-9744-f281fe4439f9
    internal-label: Tags
  - id: f6ff4d13-7b5c-4533-8556-95e76673d4cb
    internal-label: Properties
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: bce87dde-a4ab-44c9-8a18-ad66e4ddb377
    internal-label: Customer experience
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
---
# Action types for web extensions

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
