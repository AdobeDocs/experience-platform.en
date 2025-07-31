---
title: applyResponse
description: Use a response from the Edge Network to initialize the Web SDK.
exl-id: 0653b8f7-33f0-43a1-97f5-59a51270f660
---
# `applyResponse`

The `applyResponse` command allows you to perform various actions based on a response from the Edge Network. It is typically used in hybrid deployments where the server makes an initial call to the Edge Network. This command takes the response from that call and initializes the Web SDK in the browser.

Run the `applyResponse` command when calling your configured instance of the Web SDK. The object containing configuration options supports the following fields:

* **`renderDecisions`**: A boolean that forces the Web SDK to render any personalized content that is eligible for automatic rendering. Identical to [`renderDecisions`](sendevent/renderdecisions.md) in the [`sendEvent`](sendevent/overview.md) command.
* **`responseHeaders`**: A map of string header names to string header values.
* **`responseBody`**: Required. A JSON response body from the server call to the Edge Network.
* **`personalization.sendDisplayEvent`**: A boolean that operates identically to [`personalization.sendDisplayEvent`](sendevent/personalization.md) in the `sendEvent` command.

```js
alloy("applyResponse",{
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

## Apply response using the Web SDK tag extension

The Web SDK tag extension equivalent to this command is the [**[!UICONTROL Apply response]**](/help/tags/extensions/client/web-sdk/actions/apply-response.md) action.
