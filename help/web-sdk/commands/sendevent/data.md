---
title: data
description: Learn how to send non-XDM data to Adobe.
exl-id: 537fc34e-3cda-4aa7-ae0d-0d3ef4b89848
---
# data

The `data` property allows you to send data to Adobe that does not match an XDM schema. It is useful in non-XDM scenarios, such as updating an [Adobe Target profile](/help/web-sdk/personalization/adobe-target/target-overview.md). When data arrives at Adobe, you can use the datastream mapping tool to assign XDM fields to each field in the `data` property.

>[!IMPORTANT]
>
>Data within this property must have at least one of the following actions:
>
>* A service in the datastream must be configured to retrieve data from a specific property in the `data` object
>* Each property must be mapped to an XDM field
>
>If a given field is not mapped to an XDM field or used by a configured service, that data is permanently lost.

## Use the data property using the Web SDK tag extension

Provide a data element in the **[!UICONTROL Data]** field within the actions of a tag rule.

1. Log in to [experience.adobe.com](https://experience.adobe.com) using your Adobe ID credentials.
1. Navigate to **[!UICONTROL Data Collection]** > **[!UICONTROL Tags]**.
1. Select the desired tag property.
1. Navigate to **[!UICONTROL Rules]**, then select the desired rule.
1. Under [!UICONTROL Actions], select an existing action or create an action.
1. Set the [!UICONTROL Extension] dropdown field to **[!UICONTROL Adobe Experience Platform Web SDK]**, and set the [!UICONTROL Action Type] to **[!UICONTROL Send event]**.
1. Provide the data element containing the desired object in the **[!UICONTROL Data]** field.
1. Click **[!UICONTROL Keep Changes]**, then run your publishing workflow.

## Use the data property using the Web SDK JavaScript library

Set the `data` property as part of the JSON object within the parameter of the `sendEvent` command. For data that you plan to map in the datastream, you can structure this property however you'd like. For data used by certain services, make sure that the object hierarchy matches what the service expects. You can include both the `data` object and the [`xdm`](xdm.md) object in the same `sendEvent` command.

```javascript
alloy("sendEvent", {
  "data": dataObject
});
```
