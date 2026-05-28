---
title: eventType
description: Set the type of event for a sendEvent call.
exl-id: 9d0fae3b-827a-4084-b460-b755e478e06a
TQID: https://experienceleague.adobe.com/amcl11k32moRYEd4dOehhKhspTvDOclDEm1iHvdLbSo
product_v2:
  - id: d0a3eab4-7b10-4d96-a71e-6c0f8e7b7c87
    internal-label: CX Enterprise
  - id: eadea719-cf89-469b-a6fd-a236a7138047
    internal-label: Commerce
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
  - id: e0eb8757-182f-49f3-94a4-1587d16f5094
    internal-label: Personalization
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
