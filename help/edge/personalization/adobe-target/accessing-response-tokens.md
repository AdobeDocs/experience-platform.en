---
title: Accessing response tokens using the Adobe Experience Platform Web SDK
description: Learn how to access response tokens with the Adobe Experience Platform Web SDK.
keywords: personalization;target;adobe target;renderDecisions;sendEvent;decisionScopes;result.decisions,response tokens;
---

# Accessing response tokens

Personalization returned from Adobe Target include [response tokens](https://experienceleague.adobe.com/docs/target/using/administer/response-tokens.html), which are details about the activity, offer, experience, user profile, geo information, and more. These details can be shared with third-party tools or used for debugging. Response tokens can be configured in the Adobe Target user interface.

To access any personalization content, you may provide a callback function which will be called after a response is successfully returned by the server. Your callback will be provided a `result` object, which may contain a `propositions` property containing any returned personalization content. Below is an example of providing a callback function.

```javascript
alloy("sendEvent", {
    renderDecisions: true,
    xdm: {}
  }).then(function(result) {
    if (result.propositions) {
      // Manually render propositions
    }
  });
```

In this example, `result.propositions`, if it exists, will be an array containing personalization propositions related to the event. Please see [Rendering personalization content](../rendering-personalization-content.md) for more information on the content of `result.propositions`.

Let's assume we would like to find all response tokens from all propositions that were automatically rendered by the web SDK and push them into a single array. In this case, we would:

1. Loop through each proposition.
1. Determine if the proposition was rendered by the SDK.
1. If so, loop through each item in the proposition.
1. Retrieve the `meta` property, which is an object containing response tokens, and push it into our array.
1. Send the response tokens to a third party or use them in some other way.

Our code would look as follows:

```javascript
alloy("sendEvent", {
    renderDecisions: true,
    xdm: {}
  }).then(function(result) {
    if (result.propositions) {
      var responseTokens = []
      result.propositions.forEach(function(proposition) {
        if (proposition.renderAttempted) {
          proposition.items.forEach(function(item) {
            if (item.meta) {
              // item.meta contains the response tokens.
              responseTokens.push(item.meta);
            }
          });
        }
      });
      // Now that we have response tokens collected,
      // we can send them to a third party or use
      // them in some other way.
    }
  });
```


