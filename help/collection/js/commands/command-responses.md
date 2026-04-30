---
title: Handling command responses
description: Handle responses from commands using JavaScript promises.
exl-id: dda98b3e-3e37-48ac-afd7-d8852b785b83
---
# Handling command responses

Some Web SDK commands can return an object containing data potentially useful to your organization. You can choose what to do with that data, if desired. Command responses are valuable for propositions and destinations, as they require Edge Network data to effectively work. 

Command responses use JavaScript [promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise), acting as a proxy for a value that is not known when the promise is created. Once the value is known, the promise is "resolved" with the value.

Use the `then` and `catch` methods to determine when a command succeeds or fails. You can omit either `then` or `catch` if their purposes are not important to your implementation.

```javascript
alloy("sendEvent", {
  "xdm": {
    "commerce": {
      "order": {
        "purchaseID": "a8g784hjq1mnp3",
        "purchaseOrderNumber": "VAU3123",
        "currencyCode": "USD",
        "priceTotal": 999.98
      }
    }
  }
}).then(function(result) {
    console.log("The sendEvent command succeeded.");
  })
  .catch(function(error) {
    console.log("The sendEvent command failed.");
  });
```

All promises returned from commands use a `result` object. For example, you can obtain library info from the `result` object using the [`getLibraryInfo`](getlibraryinfo.md) command:

```js
alloy("getLibraryInfo")
  .then(function(result) {
    console.log(result.libraryInfo.version);
    console.log(result.libraryInfo.commands);
    console.log(result.libraryInfo.configs);
  });
```

The contents of this `result` object depend on a combination of what command that you use and the user's consent. If a user has not given their consent for a particular purpose, the response object only contains information that can be provided in the context of what the user has consented to.

## Command responses using the Web SDK tag extension

The Web SDK tag extension equivalent to command responses is a rule that subscribes to the [**[!UICONTROL Send event complete]**](/help/tags/extensions/client/web-sdk/event-types.md#send-event-complete) event. You can then include actions such as [**[!UICONTROL Apply propositions]**](/help/tags/extensions/client/web-sdk/actions/apply-propositions.md) or [**[!UICONTROL Apply response]**](/help/tags/extensions/client/web-sdk/actions/apply-response.md) to this rule.
