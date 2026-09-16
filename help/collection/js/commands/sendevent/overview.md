---
title: sendEvent
description: Send data to the Adobe Experience Platform Edge Network.
exl-id: 83de368d-78d4-4e28-aadd-afaea1ca091d
TQID: https://experienceleague.adobe.com/47eXICo3e7d2v3Qge6kjRYGA0wRgOnYSCK0uRNrM3AU
product_v2:
  - id: d0a3eab4-7b10-4d96-a71e-6c0f8e7b7c87
    internal-label: CX Enterprise
  - id: e55547f1-a1ff-40c6-8978-026e40ab7fa4
    internal-label: Analytics
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
  - id: eb30f47f-d87a-400f-8f78-63ce7979ff56
    internal-label: Machine learning
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
