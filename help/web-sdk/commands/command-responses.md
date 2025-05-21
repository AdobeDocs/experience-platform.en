---
title: Handling command responses
description: Handle responses from commands using JavaScript promises.
exl-id: dda98b3e-3e37-48ac-afd7-d8852b785b83
---
# Handling command responses

Some Web SDK commands can return an object containing data potentially useful to your organization. You can choose what to do with that data, if desired. Command responses are  valuable for propositions and destinations, as they require Edge Network data to effectively work. 

Command responses use JavaScript [promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise), acting as a proxy for a value that is not known when the promise is created. Once the value is known, the promise is "resolved" with the value.

## Handle command responses using the Web SDK tag extension

Create a rule that subscribes to the **[!UICONTROL Send event complete]** event as part of a rule.

1. Log in to [experience.adobe.com](https://experience.adobe.com) using your Adobe ID credentials.
1. Navigate to **[!UICONTROL Data Collection]** > **[!UICONTROL Tags]**.
1. Select the desired tag property.
1. Navigate to **[!UICONTROL Rules]**, then select the desired rule.
1. Under [!UICONTROL Events], select an existing event or create an event.
1. Set the [!UICONTROL Extension] dropdown field to **[!UICONTROL Adobe Experience Platform Web SDK]**, and set the [!UICONTROL Event Type] to **[!UICONTROL Send event complete]**.
1. Click **[!UICONTROL Keep Changes]**, then run your publishing workflow.

You can then include the actions **[!UICONTROL Apply propositions]** or **[!UICONTROL Apply response]** to this rule.

1. When viewing the above created or edited rule, select an existing action or create an action.
1. Set the [!UICONTROL Extension] dropdown field to **[!UICONTROL Adobe Experience Platform Web SDK]**, and set the [!UICONTROL Action Type] to **[!UICONTROL Apply propositions]** or **[!UICONTROL Apply response]**, depending on the desired behavior.
1. Set the action's desired fields, then click **[!UICONTROL Keep Changes]**.

## Handle command responses using the Web SDK JavaScript library

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
