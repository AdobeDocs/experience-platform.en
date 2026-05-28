---
title: Condition Types for Web Extensions
description: Learn how to define a condition-type library module for a tag extension in a web property.
exl-id: db504455-858b-4ac8-aa42-de516b0f1d5a
TQID: https://experienceleague.adobe.com/zhRKBIZo0eLL0nwTqBFLb5q6NkuB-upthSP9A6VWoI8
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
# Condition types for web extensions

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
