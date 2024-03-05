---
title: Accessing response tokens using the Adobe Experience Platform Web SDK
description: Learn how to access response tokens with the Adobe Experience Platform Web SDK.
keywords: personalization;target;adobe target;renderDecisions;sendEvent;decisionScopes;result.decisions,response tokens;
exl-id: fc9d552a-29ba-4693-9ee2-599c7bc76cdf
---
# Accessing response tokens

Personalization content returned from Adobe Target includes [response tokens](https://experienceleague.adobe.com/docs/target/using/administer/response-tokens.html), which are details about the activity, offer, experience, user profile, geo information, and more. These details can be shared with third-party tools or used for debugging. Response tokens can be configured in the Adobe Target user interface.

To access any personalization content, provide a callback function when sending an event. This callback will be called after the SDK receives a successful response from the server. Your callback will be provided a `result` object, which may contain a `propositions` property containing any returned personalization content. Below is an example of providing a callback function.

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

In this example, `result.propositions`, if it exists, is an array containing personalization propositions related to the event. Please see [Rendering personalization content](../rendering-personalization-content.md) for more information on the content of `result.propositions`.

Assume you want to gather all activity names from all propositions that were automatically rendered by the web SDK and push them into a single array. You could then send the single array to a third party. In this case:

1. Extract propositions from the `result` object.
1. Loop through each proposition.
1. Determine if the SDK rendered the proposition.
1. If so, loop through each item in the proposition.
1. Retrieve the activity name from the `meta` property, which is an object containing response tokens.
1. Push the activity name into an array.
1. Send the activity names to a third party.

Your code would look as follows:

```javascript
alloy("sendEvent", {
    renderDecisions: true,
    xdm: {}
  }).then(function(result) {
    var activityNames = [];
    propositions.forEach(function(proposition) {
      if (proposition.renderAttempted) {
        proposition.items.forEach(function(item) {
          if (item.meta) {
            // item.meta contains the response tokens.
            var activityName = item.meta["activity.name"];
            // Ignore duplicates
            if (activityNames.indexOf(activityName) === -1) {
              activityNames.push(activityName);
            }
          }
        });
      }
    });
    // Now that activity names are in an array,
    // you can send them to a third party or use
    // them in some other way.
  });
```
