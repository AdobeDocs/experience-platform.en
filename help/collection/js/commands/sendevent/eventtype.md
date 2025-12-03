---
title: eventType
description: Set the type of event for a sendEvent call.
exl-id: 9d0fae3b-827a-4084-b460-b755e478e06a
---
# `eventType`

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
