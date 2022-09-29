---
title: Condition Types for Web Extensions
description: Learn how to define a condition-type library module for a tag extension in a web property.
exl-id: db504455-858b-4ac8-aa42-de516b0f1d5a
---
# Condition types for web extensions

>[!NOTE]
>
>Adobe Experience Platform Launch has been rebranded as a suite of data collection technologies in Adobe Experience Platform. Several terminology changes have rolled out across the product documentation as a result. Please refer to the following [document](../../term-updates.md) for a consolidated reference of the terminology changes.

In the context of a rule, a condition is evaluated after an event has occurred. All conditions must return true in order for the rule to continue processing. The exception is when users explicitly place conditions into an "exception" bucket, in which case all conditions within the bucket must return false for the rule to continue processing.

As an example, an extension could provide a "viewport contains" condition type wherein the user could specify a CSS selector. When the condition is evaluated on the client's website, the extension would be able to find elements matching the CSS selector and return whether any of them are contained within the user's viewport.

This document covers how to define condition types for a web extension in Adobe Experience Platform.

>[!NOTE]
>
>If you are developing an edge extension, see the guide on [condition types for edge extensions](../edge/condition-types.md) instead.
>
>This document assumes you are familiar with library modules and how they are integrated in web extensions. If you require an introduction, see the overview on [library module formatting](./format.md) before returning to this guide.

Condition types typically consist of the following:

1. A [view](./views.md) shown within the Experience Platform UI and Data Collection UI that allows users to modify settings for the condition.
2. A library module emitted within the tag runtime library to interpret the settings and evaluate a condition.

A condition-type library module has one goal: evaluate whether something is true or false. What it evaluates is up to you.

For example, if you wanted to evaluate whether the user is on the host `example.com`, your module may look like this:

```js
module.exports = function(settings) {
  return document.location.hostname === 'example.com';
};
```

Now, consider a situation where you want to make the hostname configurable by the Adobe Experience Platform user. You may allow the user to input a hostname and then save the hostname to the settings object. The object might look something like this:

```js
{
  "hostname": "example.com"
}
```

In order to operate on the user-defined hostname, your module would need to change to this:

```js
module.exports = function(settings) {
  return document.location.hostname === settings.hostname;
};
```

## Contextual event data

A second argument is passed to your module which contains contextual information regarding the event that fired the rule. It may be beneficial in certain cases and can be accessed as follows:

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
