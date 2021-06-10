---
title: Render Personalized Content Using the Adobe Experience Platform Web SDK
description: Learn how to render personalized content with the Adobe Experience Platform Web SDK.
keywords: personalization;renderDecisions;sendEvent;decisionScopes;result.decisions;
exl-id: 6a3252ca-cdec-48a0-a001-2944ad635805
---
# Render personalized content

Adobe Experience Platform [!DNL Web SDK] supports querying the personalization solutions at Adobe, including Adobe Target. There are two modes for personalization: retrieving content that can be rendered automatically and content that the developer must render. The SDK also provides facilities to [manage flicker](../personalization/manage-flicker.md).

## Automatically rendering content

The SDK automatically renders personalized content when you send an event to the server and set `renderDecisions` to `true` as an option on the event.

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
});
```

Rendering personalized content is asynchronous, so there should not be any assumption around when a particular piece of content is part of the page.

## Manually rendering content

You can request the list of decisions to be returned as a promise on the `sendEvent` command by specifying the `decisionScopes` option. A scope is a string the lets the personalization solution know which decision you would like.

```javascript
alloy("sendEvent",{
    xdm:{...},
    decisionScopes:['demo-1', 'demo-2']
  }).then(function(result){
    if (result.decisions){
      // Do something with the decisions.
    }
  });
```

This will return a list of decisions as a JSON object for each decisions.

```json
{
  "decisions": [
    {
      "id": "TNT:123456:0",
      "scope": "demo-1",
      "items": [
        {
          "schema": "https://ns.adobe.com/personalization/html-content-item",
          "data": {
            "id": "11223344",
            "content": "<h2 style=\"color: yellow\">Scoped Decision for location \"alloy-location-1\"</h2>"
          }
        }
      ]
    },
    {
      "id": "TNT:654321:1",
      "scope": "demo-2",
      "items": [
        {
          "schema": "https://ns.adobe.com/personalization/json-content-item",
          "data": {
            "id": "4433221",
            "content": {
              "name":"Scoped decision in JSON"
            }
          }
        }
      ]
    }
  ]
}
```

>[!TIP]
>
> If you use [!DNL Target], scopes become mBoxes on the server, only they are all requested at once instead of individually. The global mbox is always sent.

### Retrieve automatic content

If you would like the `result.decisions` to include the automatic renderable decisions and NOT have Alloy auto render them, you can set `renderDecisions` to `false`, and include the special scope `__view__`.
