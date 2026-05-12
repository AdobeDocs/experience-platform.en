---
title: sendEvent
description: Send data to the Adobe Experience Platform Edge Network.
exl-id: 83de368d-78d4-4e28-aadd-afaea1ca091d
---
# `sendEvent`

The `sendEvent` command is the primary way to send data to Adobe. Its response object is the primary way to retrieve personalized content, identities, and audience destinations. Use the [`xdm`](xdm.md) object to send data that maps to your Adobe Experience Platform schema. Use the [`data`](data.md) object to send non-XDM data. The payload when sending data to Adobe has a maximum limit of 64 KB.

Run the `sendEvent` command when calling your configured instance of the Web SDK. Make sure that you call the [`configure`](../configure/overview.md) command before calling the `sendEvent` command.

```js
alloy("sendEvent", {
  data: dataObject,
  documentUnloading: false,
  edgeConfigOverrides: { datastreamId: "0dada9f4-fa94-4c9c-8aaf-fdbac6c56287" },
  personalization: { decisionScopes: ["hero-banner"]},
  renderDecisions: true,
  type: "commerce.purchases",
  xdm: adobeDataLayer.getState(reference)
});
```

## Response object

If you decide to [handle responses](../command-responses.md) with this command, the following properties are available in the response object:

* **`propositions`**: An array of propositions returned by the Edge Network. Propositions that are automatically rendered include the flag `renderAttempted` set to `true`.
* **`inferences`**: An array of inference objects, which contain machine learning information about this user.
* **`destinations`**: An array of destination objects returned by the Edge Network.

## Send event using the Web SDK tag extension

The Web SDK tag extension equivalent of this command is the [**[!UICONTROL Send event]**](/help/tags/extensions/client/web-sdk/actions/send-event.md#data-fields) action.
