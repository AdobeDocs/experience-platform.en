---
title: sendEvent
description: Send data to the Adobe Experience Platform Edge Network.
exl-id: 83de368d-78d4-4e28-aadd-afaea1ca091d
---
# `sendEvent`

The `sendEvent` command is the primary way to send data to Adobe, to retrieve personalized content, identities, and audience destinations. Use the [`xdm`](xdm.md) object to send data that maps to your Adobe Experience Platform schema. Use the [`data`](data.md) object to send non-XDM data. You can use the datastream mapper to align data within this object to schema fields.

## Send event data using the Web SDK tag extension

Sending event data is performed as an action within a rule in the Adobe Experience Platform Data Collection tags interface.

1. Log in to [experience.adobe.com](https://experience.adobe.com) using your Adobe ID credentials.
1. Navigate to **[!UICONTROL Data Collection]** > **[!UICONTROL Tags]**.
1. Select the desired tag property.
1. Navigate to **[!UICONTROL Rules]**, then select the desired rule.
1. Under [!UICONTROL Actions], select an existing action or create an action.
1. Set the [!UICONTROL Extension] dropdown field to **[!UICONTROL Adobe Experience Platform Web SDK]**, and set the [!UICONTROL Action Type] to **[!UICONTROL Send event]**.
1. Set the desired fields, click **[!UICONTROL Keep Changes]**, then run your publishing workflow.

## Send event data using the Web SDK JavaScript library

Run the `sendEvent` command when calling your configured instance of the Web SDK. Make sure that you call the [`configure`](../configure/overview.md) command before calling the `sendEvent` command.

```js
alloy("sendEvent", {
  "data": dataObject,
  "documentUnloading": true,
  "edgeConfigOverrides": { "datastreamId": "0dada9f4-fa94-4c9c-8aaf-fdbac6c56287" },
  "renderDecisions": true,
  "type": "commerce.purchases",
  "xdm": adobeDataLayer.getState(reference)
});
```

## Response object

If you decide to [handle responses](../command-responses.md) with this command, the following properties are available in the response object:

* **`propositions`**: An array of propositions returned by the Edge Network. Propositions that are automatically rendered include the flag `renderAttempted` set to `true`.
* **`inferences`**: An array of inference objects, which contain machine learning information about this user.
* **`destinations`**: An array of destination objects returned by the Edge Network.
