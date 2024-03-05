---
title: eventType
description: Set the type of event for a sendEvent call.
---
# `eventType`

The `eventType` property allows you to define the type of event you send using the Web SDK. This field ultimately populates the `xdm.eventType` field. It is valuable when you want to differentiate the event types that you send to Adobe.

Adobe provides some predefined event types that you can use. See [Available values for `eventType`](/help/xdm/classes/experienceevent.md#accepted-values-for-eventtype) in the XDM user guide for a full list of predefined values. You can also use your own values if preferred.

If you set both `type` here and `xdm.eventType` in the [`xdm`](xdm.md) object, the value in this field takes priority.

## Configure event type using the Web SDK tag extension

Set the **[!UICONTROL Type]** dropdown field within the actions of a tag rule.

1. Log in to [experience.adobe.com](https://experience.adobe.com) using your Adobe ID credentials.
1. Navigate to **[!UICONTROL Data Collection]** > **[!UICONTROL Tags]**.
1. Select the desired tag property.
1. Navigate to **[!UICONTROL Rules]**, then select the desired rule.
1. Under [!UICONTROL Actions], select an existing action or create an action.
1. Set the [!UICONTROL Extension] dropdown field to **[!UICONTROL Adobe Experience Platform Web SDK]**, and set the [!UICONTROL Action Type] to **[!UICONTROL Send event]**.
1. Use the dropdown under the **[!UICONTROL Type]** field, or enter your own value.
1. Click **[!UICONTROL Keep Changes]**, then run your publishing workflow.

## Configure event type using the Web SDK JavaScript library

Set the `eventType` string property when running the `sendEvent` command.

```js
alloy("sendEvent", {
  "xdm": adobeDataLayer.getState(reference),
  "type": "commerce.purchases"
});
```
