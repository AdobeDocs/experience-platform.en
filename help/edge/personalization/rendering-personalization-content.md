---
title: Render Personalized Content Using the Adobe Experience Platform Web SDK
description: Learn how to render personalized content with the Adobe Experience Platform Web SDK.
keywords: personalization;renderDecisions;sendEvent;decisionScopes;propositions;
exl-id: 6a3252ca-cdec-48a0-a001-2944ad635805
---
# Render personalized content

Adobe Experience Platform Web SDK supports retrieving personalized content from personalization solutions at Adobe, including [Adobe Target](https://business.adobe.com/products/target/adobe-target.html) and [Offer Decisioning](https://experienceleague.adobe.com/docs/offer-decisioning/using/get-started/starting-offer-decisioning.html). Content created within Adobe Target's [Visual Experience Composer](https://experienceleague.adobe.com/docs/target/using/experiences/vec/visual-experience-composer.html) can be retrieved and rendered automatically by the SDK. Content created within Adobe Target's [Form-based Experience Composer](https://experienceleague.adobe.com/docs/target/using/experiences/form-experience-composer.html) or Offer Decisioning cannot be rendered automatically by the SDK. Instead, you will need to request this content using the SDK and then manually render the content yourself.

## Automatically rendering content

When sending events to the server, you may set the `renderDecisions` option to `true`. Doing so will force the SDK to automatically render any personalized content that's eligible for automatic rendering.

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

Rendering personalized content is asynchronous, so you should not make assumptions regarding when a particular piece of content will have completed rendering.

## Manually rendering content

To access any personalization content, you may provide a callback function which will be called after the SDK receives a successful response from the server. Your callback will be provided a `result` object, which may contain a `propositions` property containing any returned personalization content. Below is an example of providing a callback function.

```javascript
alloy("sendEvent", {
    xdm: {}
  }).then(function(result) {
    if (result.propositions) {
      // Manually render propositions
    }
  });
```

In this example, `result.propositions`, if it exists, will be an array containing personalization propositions related to the event. By default, it will only include propositions that are eligible for automatic rendering.

The `propositions` array, in this case, would look similar to this example:

```json
[
  {
    "id": "AT:eyJhY3Rpdml0eUlkIjoiMTI3MDE5IiwiZXhwZXJpZW5jZUlkIjoiMCJ9",
    "scope": "__view__",
    "items": [
      {
        "id": "11223344",
        "schema": "https://ns.adobe.com/personalization/dom-action",
        "data": {
          "content": "<h2 style=\"color: yellow\">An HTML proposition.</h2>",
          "selector": "#hero",
          "type": "setHtml"
        },
        "meta": {}
      }
    ],
    "renderAttempted": false
  },
  {
    "id": "AT:PyJhY3Rpdml0eUlkIjoiMTI3MDE5IiwiZXhwZXJpZW5jZUlkIjoiMCJ8",
    "scope": "__view__",
    "items": [
      {
        "id": "11223345",
        "schema": "https://ns.adobe.com/personalization/dom-action",
        "data": {
          "content": "<h2 style=\"color: yellow\">Another HTML proposition.</h2>",
          "selector": "#sidebar",
          "type": "setHtml"
        },
        "meta": {}
      }
    ],
    "renderAttempted": false
  }
]
```

When we sent the event, we did not set the `renderDecisions` option to `true`, so the SDK did not attempt to automatically render any content. The content eligible for automatic rendering was still automatically retrieved from the server, however, and provided to us to manually render if we would like to do so. Notice that each proposition object has its `renderAttempted` property set to `false`.

If we would have instead set the `renderDecisions` option to `true` when sending the event, the SDK would have attempted to render any propositions eligible for automatic rendering (as described previously). As a consequence, each of the proposition objects would have its `renderAttempted` property set to `true`. There would be no need to manually render these propositions in this case.

So far, we've only discussed personalization content that is eligible for automatic rendering (i.e., any content created in Adobe Target's Visual Experience Composer). In order to retrieve any personalization content _not_ eligible for automatic rendering, we will need to request the content by populating the `decisionScopes` option when sending the event. A scope is a string that identifies a particular proposition you would like to retrieve from the server.

Here is an example:

```javascript
alloy("sendEvent", {
    xdm: {},
    decisionScopes: ['salutation', 'discount']
  }).then(function(result) {
    if (result.propositions) {
      // Manually render propositions
    }
  });
```

In this example, if propositions are found on the server matching the `salutation` or `discount` scope, they will be returned and included in the `result.propositions` array. The `propositions` array, in this case, would look similar to this example:

```json
[
  {
    "id": "AT:eyJhY3Rpdml0eUlkIjoiMTI3MDE5IiwiZXhwZXJpZW5jZUlkIjoiMCJ9",
    "scope": "__view__",
    "items": [
      {
        "id": "11223344",
        "schema": "https://ns.adobe.com/personalization/dom-action",
        "data": {
          "content": "<h2 style=\"color: yellow\">An HTML proposition.</h2>",
          "selector": "#hero",
          "type": "setHtml"
        },
        "meta": {}
      }
    ],
    "renderAttempted": false
  },
  {
    "id": "AT:PyJhY3Rpdml0eUlkIjoiMTI3MDE5IiwiZXhwZXJpZW5jZUlkIjoiMCJ8",
    "scope": "__view__",
    "items": [
      {
        "id": "11223345",
        "schema": "https://ns.adobe.com/personalization/dom-action",
        "data": {
          "content": "<h2 style=\"color: yellow\">Another HTML proposition.</h2>",
          "selector": "#sidebar",
          "type": "setHtml"
        },
        "meta": {}
      }
    ],
    "renderAttempted": false
  },
  {
    "id": "AT:cZJhY3Rpdml0eUlkIjoiMTI3MDE5IiwiZXhwZXJpZW5jZUlkIjoiMCJ2",
    "scope": "salutation",
    "items": [
      {
        "schema": "https://ns.adobe.com/personalization/json-content-item",
        "data": {
          "id": "4433221",
          "content": {
            "salutation": "Welcome, esteemed visitor!"
          }
        },
        "meta": {}
      }
    ],
    "renderAttempted": false
  },
  {
    "id": "AT:FZJhY3Rpdml0eUlkIjoiMTI3MDE5IiwiZXhwZXJpZW5jZUlkIjoiMCJ0",
    "scope": "discount",
    "items": [
      {
        "schema": "https://ns.adobe.com/personalization/html-content-item",
        "data": {
          "id": "4433222",
          "content": "<div>50% off your order!</div>",
          "format": "text/html"
        },
        "meta": {}
      }
    ],
    "renderAttempted": false
  }
]
```

At this point, we would render proposition content as we see fit. In this example, the proposition matching the `discount` scope is an HTML proposition built using Adobe Target's Form-based Experience Composer. Let's also assume we have an element on our page with the ID of `daily-special` and wish to render the content from the `discount` proposition into the `daily-special` element. We would do the following:

1. Loop through each proposition, looking for the proposition with a scope of `discount`.
1. If the proposition was found, loop through each item in the proposition, looking for the item that is HTML content (it's better to check than to assume).
1. If an item containing HTML content is found, find the `daily-special` element on the page and replace its HTML with the personalized content.

Our code would look as follows:

```javascript
alloy("sendEvent", {
  xdm: {},
  decisionScopes: ['salutation', 'discount']
}).then(function(result) {
  var propositions = result.propositions;

  var discountProposition;
  if (propositions) {
    // Find the discount proposition, if it exists.
    for (var i = 0; i < propositions.length; i++) {
      var proposition = propositions[i];
      if (proposition.scope === "discount") {
        discountProposition = proposition;
        break;
      }
    }
  }

  var discountHtml;
  if (discountProposition) {
    // Find the item from proposition that should be rendered.
    // Rather than assuming there a single item that has HTML
    // content, find the first item whose schema indicates
    // it contains HTML content.
    for (var j = 0; j < discountProposition.items.length; j++) {
      var discountPropositionItem = discountProposition.items[i];
      if (discountPropositionItem.schema === "https://ns.adobe.com/personalization/html-content-item") {
        discountHtml = discountPropositionItem.data.content;
        break;
      }
    }
  }

  if (discountHtml) {
    // Discount HTML exists. Time to render it.
    var dailySpecialElement = document.getElementById("daily-special");
    dailySpecialElement.innerHTML = discountHtml;
  }
});
```


>[!TIP]
>
> If you use Adobe Target, scopes correspond to mboxes on the server, only they are all requested at once instead of individually. The global mbox is always returned.

### Manage flicker

The SDK provides facilities to [manage flicker](../personalization/manage-flicker.md) during the personalization process.
