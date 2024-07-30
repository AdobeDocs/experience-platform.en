---
title: Render Personalized Content Using the Adobe Experience Platform Web SDK
description: Learn how to render personalized content with the Adobe Experience Platform Web SDK.
keywords: personalization;renderDecisions;sendEvent;decisionScopes;propositions;
exl-id: 6a3252ca-cdec-48a0-a001-2944ad635805
---
# Render personalized content

Adobe Experience Platform Web SDK supports retrieving personalized content from Adobe personalization solutions, including [Adobe Target](https://business.adobe.com/products/target/adobe-target.html), [Offer Decisioning](https://experienceleague.adobe.com/docs/offer-decisioning/using/get-started/starting-offer-decisioning.html) and [Adobe Journey Optimizer](https://experienceleague.adobe.com/docs/journey-optimizer/using/get-started/get-started.html).

Additionally, the Web SDK powers same-page and next-page personalization capabilities through Adobe Experience Platform personalization destinations, such as [Adobe Target](../../destinations/catalog/personalization/adobe-target-connection.md) and the [custom personalization connection](../../destinations/catalog/personalization/custom-personalization.md). To learn how to configure Experience Platform for same-page and next-page personalization, see the [dedicated guide](../../destinations/ui/activate-edge-personalization-destinations.md).

Content created within Adobe Target's [Visual Experience Composer](https://experienceleague.adobe.com/docs/target/using/experiences/vec/visual-experience-composer.html) and Adobe Journey Optimizer's [Web Campaign UI](https://experienceleague.adobe.com/docs/journey-optimizer/using/web/create-web.html) can be retrieved and rendered automatically by the SDK. Content created within Adobe Target's [Form-based Experience Composer](https://experienceleague.adobe.com/docs/target/using/experiences/form-experience-composer.html), Adobe Journey Optimizer's [Code-based Experience Channel](https://experienceleague.adobe.com/en/docs/journey-optimizer/using/code-based-experience/get-started-code-based) or Offer Decisioning cannot be rendered automatically by the SDK. Instead, you must request this content using the SDK and then manually render the content yourself.

## Automatically rendering content {#automatic}

When sending events to the server, you may set the `renderDecisions` option to `true`. Doing so forces the SDK to automatically render any personalized content that's eligible for automatic rendering.

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

## Manually rendering content {#manual}

To access any personalization content, you may provide a callback function, which will be called after the SDK receives a successful response from the server. Your callback is provided a `result` object, which may contain a `propositions` property containing any returned personalization content. Below is an example of how you would provide a callback function when sending an event.

```javascript
alloy("sendEvent", {
    "xdm": {}
  }).then(function(result) {
    if (result.propositions) {
      // Manually render propositions and send "display" event
    }
  });
```

In this example, `result.propositions`, if it exists, is an array containing personalization propositions related to the event. By default, it only includes propositions that are eligible for automatic rendering.

The `propositions` array may look similar to this example:

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
    "scopeDetails": {
      ...
    },
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
    "scopeDetails": {
      ...
    },
    "renderAttempted": false
  }
]
```

In the example, the `renderDecisions` option was not set to `true` when the `sendEvent` command was executed, so the SDK did not attempt to automatically render any content. The SDK still automatically retrieved the content eligible for automatic rendering, however, and provided this to you to manually render if you would like to do so. Notice that each proposition object has its `renderAttempted` property set to `false`.

If you would have instead set the `renderDecisions` option to `true` when sending the event, the SDK would have attempted to render any propositions eligible for automatic rendering (as described previously). As a consequence, each of the proposition objects would have its `renderAttempted` property set to `true`. There would be no need to manually render these propositions in this case.

So far, we've only discussed personalization content that is eligible for automatic rendering (that is, any content created in Adobe Target's Visual Experience Composer or Adobe Journey Optimizer's Web Campaign UI). To retrieve any personalization content _not_ eligible for automatic rendering, you need to request the content by populating the `decisionScopes` option when sending the event. A scope is a string that identifies a particular proposition you would like to retrieve from the server.

Here is an example:

```javascript
alloy("sendEvent", {
    "xdm": {},
    "decisionScopes": ['salutation', 'discount']
  }).then(function(result) {
    if (result.propositions) {
      // Manually render propositions and send "display" event
    }
  });
```

In this example, if propositions are found on the server matching the `salutation` or `discount` scope, they are returned and included in the `result.propositions` array. Be aware that propositions qualifying for automatic rendering will continue to be included in the `propositions` array, regardless of how you configure `renderDecisions` or `decisionScopes` options. The `propositions` array, in this case, would look similar to this example:

```json
[
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
    "scopeDetails": {
      "id": "AT:cZJhY3Rpdml0eUlkIjoiMTI3MDE5IiwiZXhwZXJpZW5jZUlkIjoiMCJ2",
      "activity": {
        "id": "384456"
      }
    },  
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
    "scopeDetails": {
      "id": "AT:FZJhY3Rpdml0eUlkIjoiMTI3MDE5IiwiZXhwZXJpZW5jZUlkIjoiMCJ0",
      "activity": {
        "id": "384457"
      }
    },
    "renderAttempted": false
  },
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
    "scopeDetails": {
      "id": "AT:PyJhY3Rpdml0eUlkIjoiMTI3MDE5IiwiZXhwZXJpZW5jZUlkIjoiMCJ8",
      "activity": {
        "id": "384459"
      }
    },
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
    "scopeDetails": {
      "id": "AT:PyJhY3Rpdml0eUlkIjoiMTI3MDE5IiwiZXhwZXJpZW5jZUlkIjoiMCJ8",
      "activity": {
        "id": "384459"
      }
    },
    "renderAttempted": false
  }
]
```

At this point, you can render proposition content as you see fit. In this example, the proposition matching the `discount` scope is an HTML proposition built using Adobe Target's Form-based Experience Composer. Assuming you have an element on your page with the ID of `daily-special` and wish to render the content from the `discount` proposition into the `daily-special` element, do the following:

1. Extract propositions from the `result` object.
1. Loop through each proposition, looking for the proposition with a scope of `discount`.
1. If you find a proposition, loop through each item in the proposition, looking for the item that is HTML content. (It's better to check than to assume.)
1. If you find an item containing HTML content, find the `daily-special` element on the page and replace its HTML with the personalized content.
1. After the content is rendered, send a `display` event.

Your code would look as follows:

```javascript
alloy("sendEvent", {
  "xdm": {},
  "decisionScopes": ['salutation', 'discount']
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
        // Render the content
        var dailySpecialElement = document.getElementById("daily-special");
        dailySpecialElement.innerHTML = discountHtml;
        
        // For this example, we assume there is only a signle place to update in the HTML.
        break;  
      }
    }
      // Send a "display" event 
    alloy("sendEvent", {
      "xdm": {
        "eventType": "decisioning.propositionDisplay",
        "_experience": {
          "decisioning": {
            "propositions": [
              {
                "id": discountProposition.id,
                "scope": discountProposition.scope,
                "scopeDetails": discountProposition.scopeDetails
              }
            ]
          }
        }
      }
    });
  }
});
```


>[!TIP]
>
>If you use Adobe Target, scopes correspond to mboxes on the server, except they are all requested at once instead of individually. The global mbox is always returned.

### Manage flicker

The SDK provides facilities to [manage flicker](../personalization/manage-flicker.md) during the personalization process.

## Render propositions in single-page applications without incrementing metrics {#applypropositions}

The `applyPropositions` command allows you to render or execute an array of propositions from [!DNL Target] or Adobe Journey Optimizer into single-page applications, without incrementing the [!DNL Analytics] and [!DNL Target] metrics. This increases reporting accuracy.

>[!IMPORTANT]
>
>If propositions for the `__view__` scope (or a web surface) were rendered on page load, their `renderAttempted` flag will be set to `true`. The `applyPropositions` command will not re-render the `__view__` scope (or web surface) propositions that have the `renderAttempted: true` flag.

### Use case 1: Re-render single-page application view propositions

The use case described in the sample below re-renders the previously fetched and rendered cart view propositions without sending display notifications.

In the example below, the `sendEvent` command is triggered upon a view change, and saves the resulting object in a constant.

Next, when the view or a component gets updated, the `applyPropositions` command is called, with the propositions from the previous `sendEvent` command, to re-render the view propositions.

```js
var cartPropositions = alloy("sendEvent", {
    "renderDecisions": true,
    "xdm": {
        "web": {
            "webPageDetails": {
                "viewName": "cart"
            }
        }
    }
}).then(function(result) {
    var propositions = result.propositions;

    // Collect response tokens, etc.
    return propositions;
});

// Call applyPropositions to re-render the view propositions from the previous sendEvent command.
alloy("applyPropositions", {
    "propositions": cartPropositions
});
```

### Use case 2: Render propositions that do not have a selector

This use case applies to experiences authored using the [!DNL Target Form-based Experience Composer] or Adobe Journey Optimizer's [Code-based Experience Channel](https://experienceleague.adobe.com/en/docs/journey-optimizer/using/code-based-experience/get-started-code-based).

You must provide the selector, action, and scope in the `applyPropositions` call.

Supported `actionTypes` are:

* `setHtml`
* `replaceHtml`
* `appendHtml`

```js
// Retrieve propositions for salutation and discount scopes
alloy("sendEvent", {
    "decisionScopes": ["salutation", "discount"]
}).then(function(result) {
    var retrievedPropositions = result.propositions;
    // Render propositions on the page by providing additional metadata

    return alloy("applyPropositions", {
        "propositions": retrievedPropositions,
        "metadata": {
            "salutation": {
                "selector": "#first-form-based-offer",
                "actionType": "setHtml"
            },
            "discount": {
                "selector": "#second-form-based-offer",
                "actionType": "replaceHtml"
            }
        }
    }).then(function(applyPropositionsResult) {
        var renderedPropositions = applyPropositionsResult.propositions;

        // Send the display notifications via sendEvent command
        function sendDisplayEvent(proposition) {
            const {
                id,
                scope,
                scopeDetails = {}
            } = proposition;

            alloy("sendEvent", {
                xdm: {
                    eventType: "decisioning.propositionDisplay",
                    _experience: {
                        decisioning: {
                            propositions: [{
                                id: id,
                                scope: scope,
                                scopeDetails: scopeDetails,
                            }, ],
                            propositionEventType: {
                                display: 1
                            },
                        },
                    },
                },
            });
        }
    });
});
```

If you provide no metadata for a decision scope, the associated propositions will not be rendered.
