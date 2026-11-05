---
title: eventType (Web SDK)
description: Set the type of event for a sendEvent call.
exl-id: 9d0fae3b-827a-4084-b460-b755e478e06a
TQID: 'https://experienceleague.adobe.com/amcl11k32moRYEd4dOehhKhspTvDOclDEm1iHvdLbSo'
feature_v2:
  - id: d5947817-d24b-4ba3-8126-2c3d66e9422b
    internal-label: Web SDK
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
# `eventType` (Web SDK)

>[!BEGINSHADEBOX]

*This page describes `eventType` in the Web SDK `sendEvent` command. For the Server SDK, see [`eventType`](/help/collection/server-js/methods/sendevent/eventtype.md).*

>[!ENDSHADEBOX]

The `eventType` property allows you to define the type of event you send using the Web SDK. This field ultimately populates the `xdm.eventType` field. It is valuable when you want to differentiate the event types that you send to Adobe.

Adobe provides some predefined event types that you can use. See [Available values for `eventType`](/help/xdm/classes/experienceevent.md#accepted-values-for-eventtype) in the XDM user guide for a full list of predefined values. You can also use your own values if preferred.

If you set both `type` here and `xdm.eventType` in the [`xdm`](xdm.md) object, the value in this field takes priority.

Set the `eventType` string property when running the `sendEvent` command.

```js
alloy("sendEvent", {
  "xdm": adobeDataLayer.getState(reference),
  "type": "commerce.purchases"
});
```

## Event type using the Web SDK tag extension

The Web SDK tag extension equivalent of this property is the [**[!UICONTROL Type]**](/help/tags/extensions/client/web-sdk/actions/send-event.md#data-fields) drop-down menu when configuring a '[!UICONTROL Send event]' action.
