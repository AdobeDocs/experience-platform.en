---
title: Event Types in the Adobe Experience Platform Web SDK Extension
description: Learn about how to use event types provided by the Adobe Experience Platform Web SDK extension in Adobe Experience Platform Launch.
solution: Experience Platform
feature: Web SDK
---
# Event types

After you configure the [Adobe Experience Platform Web SDK extension](web-sdk-extension-configuration.md) for [Adobe Experience Platform Launch](https://experienceleague.adobe.com/docs/launch.html), build rules using AEP WEB SDK extension event types

This page describes the available event types and how to use them.

## [!UICONTROL Send event complete]

Typically, you would have one or more rules using the [[!UICONTROL Send event] action](action-types.md#send-event) to send events to the server. Each time an event is sent to Adobe Experience Platform Edge Network, a response is returned back to the browser with useful data. Without the [!UICONTROL Send event complete] event type, we wouldn't have access to this returned data.

To access the returned data, we will create a separate rule. We will then add a [!UICONTROL Send event complete] event to the rule. This rule will now be triggered each time a successful response is received from the server as a result of a [!UICONTROL Send event] action.

When a [!UICONTROL Send event complete] event triggers a rule, it provides data returned from the server that may be useful to accomplish certain tasks. Typically, you would add a [!UICONTROL Custom code] action (from the [!UICONTROL Core] extension) to the same rule that contains the [!UICONTROL Send event complete] event. In the [!UICONTROL Custom code] action, your custom code will have access to a variable named `event`. This `event` variable will contain the data returned from the server.

Your rule for handling data returned from Edge may look something like this:

![](./assets/send-event-complete.png)

Let's walk through some examples of how to perform certain tasks using the [!UICONTROL Custom code] action in this rule.

### Manually render personalized content

In the Custom Code action, which is in the rule for handling response data, you can access personalization propositions that were returned from the server. To do so, you would type the following custom code:

```javascript
var propositions = event.propositions;
```

If `event.propositions` exists, it will be an array containing personalization proposition objects. The propositions included in the array are determined, in large part, by how the event was sent to the server.

For our first scenario, let's assume that in the [!UICONTROL Send event] action responsible for sending the event we have not checked the [!UICONTROL Render decisions] checkbox and we have not provided any [!UICONTROL decision scopes] in our [!UICONTROL Send event] action.

![img.png](assets/send-event-render-unchecked-without-scopes.png)

In this example, our `propositions` array would only contain propositions related to the event that are eligible for automatic rendering.

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

When we sent the event, we did not check the [!UICONTROL Render decisions] checkbox, so the SDK did not attempt to automatically render any content. The content eligible for automatic rendering was still automatically retrieved from the server, however, and provided to us to manually render if we choose. Notice that each proposition object has its `renderAttempted` property set to `false`.

If we would have instead checked the [!UICONTROL Render decisions] checkbox when sending the event, the SDK would have attempted to render any propositions eligible for automatic rendering. As a consequence, each of the proposition objects would have its `renderAttempted` property set to `true`. There would be no need to manually render these propositions in this case.

So far, we've only discussed personalization content that is eligible for automatic rendering (i.e., any content created in Adobe Target's Visual Experience Composer). In order to retrieve any personalization content _not_ eligible for automatic rendering, we will need to request the content by providing decision scopes in the [!UICONTROL Send event] action. A scope is a string that identifies a particular proposition you would like to retrieve from the server.

The [!UICONTROL Send event] action would look as follows:

![img.png](assets/send-event-render-unchecked-with-scopes.png)

In this example, if propositions are found on the server matching the `salutation` or `discount` scope, they will be returned and included in the `propositions` array. The `propositions` array, in this case, would look similar to this example:

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

At this point, we would render proposition content as we see fit. For example, let's assume we have an element on our page with the ID of `daily-special` and we wish to render the content from our `discount` proposition inside the discount element. We would do the following in our :

1. Loop through each proposition, looking for the proposition with a scope of `discount`.
2. If the proposition was found, loop through each item in the proposition, looking for the item that is HTML content (it's better to check that to assume).
3. If an item containing HTML content is found, find the `daily-special` element on the page and replace its HTML with the personalized content.

We could do so in our custom code action as follows:

```javascript
var propositions = event.propositions;

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
  // content, we'll find the first item that has HTML content.
  for (var j = 0; j < discountProposition.items.length; j++) {
    var discountPropositionItem = discountProposition.items[i]; 
    if (discountPropositionItem.schema === "https://ns.adobe.com/personalization/html-content-item") {
      discountHtml = discountPropositionItem.data.content;
      break;
    }
  }
}

if (discountHtml) {
  // We have the discount HTML. Now let's render it.
  var dailySpecialElement = document.getElementById("daily-special");
  dailySpecialElement.innerHTML = discountHtml;
}
```

### Accessing Adobe Target response tokens

Personalization returned from Adobe Target include [response tokens](https://experienceleague.adobe.com/docs/target/using/administer/response-tokens.html), which are details about the activity, offer, experience, user profile, geo information, and more. These details can be shared with third-party tools or used for debugging. Response tokens can be configured in the Adobe Target user interface.

In the Custom Code action, which is in the rule for handling response data, you can access personalization propositions that were returned from the server. To do so, you would type the following custom code:

```javascript
var propositions = event.propositions;
```

If `event.propositions` exists, it will be an array containing personalization proposition objects. See [Manually render personalized content](#manually-render-personalized-content) for more information on the content of `result.propositions`

Let's assume we would like to find all response tokens from all propositions that were automatically rendered by the web SDK and push them into a single array. In this case, the [!UICONTROL Custom code] action would:

1. Loop through each proposition.
1. Determine if the proposition was rendered by the SDK.
1. If so, loop through each item in the proposition.
1. Retrieve the `meta` property, which is an object containing response tokens, and push it into our array.
1. Send the response tokens to a third party or use them in some other way.

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





