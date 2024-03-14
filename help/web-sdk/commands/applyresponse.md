---
title: applyResponse
description: Use a response from the Edge Network to initialize the Web SDK.
exl-id: 0653b8f7-33f0-43a1-97f5-59a51270f660
---
# `applyResponse`

The `applyResponse` command allows you to perform various actions based on a response from the Edge Network. It is typically used in hybrid deployments where the server makes an initial call to the Edge Network. This command takes the response from that call and initializes the Web SDK in the browser.

## Apply response using the Web SDK tag extension

Applying responses is performed as an action within a rule in the Adobe Experience Platform Data Collection tags interface.

1. Log in to [experience.adobe.com](https://experience.adobe.com) using your Adobe ID credentials.
1. Navigate to **[!UICONTROL Data Collection]** > **[!UICONTROL Tags]**.
1. Select the desired tag property.
1. Navigate to **[!UICONTROL Rules]**, then select the desired rule.
1. Under [!UICONTROL Actions], select an existing action or create an action.
1. Set the [!UICONTROL Extension] dropdown field to **[!UICONTROL Adobe Experience Platform Web SDK]**, and set the [!UICONTROL Action Type] to **[!UICONTROL Apply response]**.
1. Set the desired fields on the right.
1. Click **[!UICONTROL Keep Changes]**, then run your publishing workflow.

## Apply response using the Web SDK JavaScript library

Run the `applyResponse` command when calling your configured instance of the Web SDK. The object containing configuration options supports the following fields:

* **`renderDecisions`**: A boolean that forces the Web SDK to render any personalized content that is eligible for automatic rendering. Identical to [`renderDecisions`](sendevent/renderdecisions.md) in the [`sendEvent`](sendevent/overview.md) command.
* **`responseHeaders`**: A map of string header names to string header values.
* **`responseBody`**: Required. A JSON response body from the server call to the Edge Network.
* **`personalization.sendDisplayEvent`**: A boolean that operates identically to [`personalization.sendDisplayEvent`](sendevent/personalization.md) in the `sendEvent` command.

```js
allow("applyResponse",{
  "renderDecisions": true,
  "responseHeaders": {},
  "responseBody": {},
  "personalization": {
    "sendDisplayEvent": true
  }
});
```

## Response object

If you decide to [handle responses](command-responses.md) with this command, the following properties are available in the response object:

* **`propositions`**: An array of propositions returned by the Edge Network. Propositions that are automatically rendered include the flag `renderAttempted` set to `true`.
* **`inferences`**: An array of inference objects, which contain machine learning information about this user.
* **`destinations`**: An array of destination objects returned by the Edge Network.
