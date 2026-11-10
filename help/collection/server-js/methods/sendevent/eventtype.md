---
title: eventType (Server SDK)
description: Set the type of event that the Server SDK sends.
badge: Alpha
feature_v2:
  - id: b7798bb6-f089-4907-8492-05fc80e10632
    internal-label: Server API
level_v2:
  - id: b5a62a22-46f7-4f0d-b151-3fc640bef588
    internal-label: Intermediate
topic_v2:
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
  - id: b23e006f-0a29-4f1d-8fd0-77aa56f3d12b
    internal-label: Data modeling
autotag-review: '2026-11-05T22:08:57.077Z'
---
# `eventType` (Server SDK)

>[!BEGINSHADEBOX]

*This page describes `eventType` in the Server SDK `sendEvent` method. For the Web SDK, see [`eventType`](/help/collection/js/commands/sendevent/eventtype.md).*

>[!ENDSHADEBOX]

The `type` option of `sendEvent` sets the type of the event that you send. It populates the `xdm.eventType` field. Use it to tell different kinds of events apart in Adobe applications.

Adobe provides predefined event types that you can use. See [Accepted values for `eventType`](/help/xdm/classes/experienceevent.md#eventType) in the XDM guide for the full list. You can also use your own values.

Set the `type` string option when you call `sendEvent`:

```js
await visitor.sendEvent({
  type: "commerce.purchases",
  xdm: {
    identityMap: {
      Email: [{ id: "visitor@example.com", primary: true }]
    }
  }
});
```

You can set `xdm.eventType` in the [`xdm`](xdm.md) object instead. If you set both, the value in `xdm.eventType` is used.
