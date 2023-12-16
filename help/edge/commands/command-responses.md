---
title: Command responses
description: Handle responses from commands using JavaScript promises.
exl-id: dda98b3e-3e37-48ac-afd7-d8852b785b83
---
# Command responses

Some Web SDK commands can return an object containing data potentially useful to your organization. You can choose what to do with that data, if desired. Command responses are particularly valuable for propositions and destinations, as they require Experience Edge data to effectively work. 

Command responses use JavaScript [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise), acting as a proxy for a value that is not known when the promise is created. Once the value is known, the promise is "resolved" with the value.

## Handle command responses using the Web SDK tag extension

Create a rule that subscribes to the **[!UICONTROL Send event complete]** event as part of a rule.

1. Log in to [experience.adobe.com](https://experience.adobe.com) using your Adobe ID credentials.
1. Navigate to **[!UICONTROL Data Collection]** > **[!UICONTROL Tags]**.
1. Select the desired tag property.
1. Navigate to **[!UICONTROL Rules]**, then select the desired rule.
1. Under [!UICONTROL Events], select an existing event or create an event.
1. Set the [!UICONTROL Extension] dropdown field to **[!UICONTROL Adobe Experience Platform Web SDK]**, and set the [!UICONTROL Event Type] to **[!UICONTROL Send event complete]**.
1. Click **[!UICONTROL Keep Changes]**, then run your publishing workflow.



## Handling success or failure {#handling-success-or-failure}

Each time a command is executed, a promise is returned. The promise represents the eventual completion of the command. In the example below, you can use `then` and `catch` methods to determine when the command has succeeded or failed.

```javascript
alloy("commandName", options)
  .then(function(result) {
    // The command succeeded.
    // "value" is whatever the command returned
  })
  .catch(function(error) {
    // The command failed.
    // "error" is an error object with additional information
  });
```

>[!TIP]
>
>You can omit the `.then` or `.catch` clauses if their purposes are not important to your implementation.

### Response objects

All promises returned from commands are resolved with a `result` object. The result object will contain data depending on the command and the user's consent. For example, library info is passed as a property of the results object in the following command.

```js
alloy("getLibraryInfo")
  .then(function(result) {
    console.log(result.libraryInfo.version);
    console.log(result.libraryInfo.commands);
    console.log(result.libraryInfo.configs);
  });
```

>[!NOTE]
>
>If a user has not given their consent for a particular purpose, the promise will still be resolved; however, the response object will only contain the information that can be provided in the context of what the user has consented to.


# Handling responses from events

If you want to handle a response from an event, you can be notified of a success or failure as follows:

```javascript
alloy("sendEvent", {
  "renderDecisions": true,
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
    // Tracking the event succeeded.
  })
  .catch(function(error) {
    // Tracking the event failed.
  });
```


### The `result` object

The `sendEvent` command returns a promise that is resolved with a `result` object. The `result` object contains the following properties:

**propositions**: The Personalization offers that the visitor has qualified for. [Learn more about propositions.](../personalization/rendering-personalization-content.md#manually-rendering-content)
**destinations**: Segments from Adobe Experience Platform that can be shared with external personalization platforms, content management systems, ad servers, and other applications that are running on customer websites. [Learn more about destinations.](https://experienceleague.adobe.com/docs/experience-platform/destinations/catalog/personalization/custom-personalization.html)