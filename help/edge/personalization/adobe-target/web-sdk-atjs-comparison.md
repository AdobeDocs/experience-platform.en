---
title: Comparing at.js to the Platform Web SDK
description: Learn how the at.js features compare to the Web SDK's
keywords: target;adobe target;activity.id;experience.id;renderDecisions;decisionScopes;prehiding snippet;vec;Form-Based Experience Composer;xdm;audiences;decisions;scope;schema;system diagram;diagram
exl-id: 
---
# Comparing the at.js library to the Web SDK

>[!IMPORTANT]
>
>This guide assumes you are NOT using Adobe Tags, and using at.js 2.x


## Installing the libraries

**Installing at.js**

We allow our customers to download the library directly from Adobe Experience Cloud, Implementation tab. The at.js library is customized with settings that the customer has like: clientCode, imsOrgId, etc.

**Installing the Web SDK**

The prebuilt version is available on a CDN. You can reference the library on the CDN directly on your page, or download and host it on your own infrastructure. It is available in minified and unminified formats. The unminified version is helpful for debugging purposes.

URL structure: https://cdn1.adoberesources.net/alloy/[VERSION]/alloy.min.js OR alloy.js for the non-minified version.

For example:


* Minified: [https://cdn1.adoberesources.net/alloy/2.6.4/alloy.min.js](https://cdn1.adoberesources.net/alloy/2.6.4/alloy.min.js)
* Un-minified: [https://cdn1.adoberesources.net/alloy/2.6.4/alloy.js](https://cdn1.adoberesources.net/alloy/2.6.4/alloy.js)

[Learn more](../../fundamentals/installing-the-sdk.md)


## Configuring the libraries

**Configuring at.js**

At the end of every at.js file, you'll find a section where we instantiate and pass a setting object. It is customizable, at download we populate that section with current customer settings.

```javascript
window.adobe.target.init(window, document, {
  "clientCode": "demo",
  "imsOrgId": "",
  "serverDomain": "localhost:5000",
  "timeout": 2000,
  "globalMboxName": "target-global-mbox",
  "version": "2.0.0",
  "defaultContentHiddenStyle": "visibility: hidden;",
  "defaultContentVisibleStyle": "visibility: visible;",
  "bodyHiddenStyle": "body {opacity: 0 !important}",
  "bodyHidingEnabled": true,
  "deviceIdLifetime": 63244800000,
  "sessionIdLifetime": 1860000,
  "selectorsPollingTimeout": 5000,
  "visitorApiTimeout": 2000,
  "overrideMboxEdgeServer": false,
  "overrideMboxEdgeServerTimeout": 1860000,
  "optoutEnabled": false,
  "optinEnabled": false,
  "secureOnly": false,
  "supplementalDataIdParamTimeout": 30,
  "authoringScriptUrl": "//cdn.tt.omtrdc.net/cdn/target-vec.js",
  "urlSizeLimit": 2048,
  "endpoint": "/rest/v1/delivery",
  "pageLoadEnabled": true,
  "viewsEnabled": true,
  "analyticsLogging": "server_side",
  "serverState": {},
  "decisioningMethod": "server-side",
  "legacyBrowserSupport":  false
}
```

[Learn more]()


**Configuring the Web SDK**

TODO: GO INTO DETAILS FOR EACH SETTING

Configuration for the SDK is done with the `configure` command.

>[!IMPORTANT]
>
>`configure` is *always* the first command called.

Example:

```javascript
alloy("configure", {
  "edgeConfigId": "ebebf826-a01f-4458-8cec-ef61de241c93",
  "orgId":"ADB3LETTERSANDNUMBERS@AdobeOrg"
});
```

There are many options that can be set during configuration. All options can be found below, grouped by category.

[Learn more](../../fundamentals/configuring-the-sdk.md)


## How to request and automatically render Page Load Target offers

TODO: MENTION THAT THE SDK WILL AUTO SEND NOTIFICATIONS


**Using at.js**

Using at.js 2.x, if you enable the setting `pageLoadEnabled`, the library will trigger a call to Target Edge with `execute -> pageLoad`. If all the settings are set to the default values, no custom coding is necessary.Once at.js is added to the page and loaded by the browser, a Target Edge call will be executed.

[Learn more]()

**Using Web SDK**

Content created within Adobe Target's [Visual Experience Composer](https://experienceleague.adobe.com/docs/target/using/experiences/vec/visual-experience-composer.html) can be retrieved and rendered automatically by the SDK.

To request and automatically render Target offers, use the `sendEvent` command and set the `renderDecisions` option to `true`. Doing so forces the SDK to automatically render any personalized content that’s eligible for automatic rendering.

Example:

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

[Learn more](../rendering-personalization-content.md)


## How to request and NOT automatically render Page Load Target offers

TODO: LINK TO THE TRACKING EVENTS SECTION

**Using at.js**

There are two ways we could fire a call to Target Edge that will fetch offers for page-load.

Example 1:

```javascript
adobe.target.getOffer({
   mbox: "target-global-mbox", 
   success: console.log,
   error: console.error
});
```

Example 2:

```javascript
adobe.target.getOffers({
    request: {
      execute: {
        pageLoad: {}
    }
  }
})
.then(console.log)
.catch(console.error);
```

TODO: NEED MORE INFO AROUND EACH EXAMPLE
[Learn more]()


**Using Web SDK**

TODO: We need to document the `decisionsScope` somewhere.

Execute a `sendEvent` command with a special scope under `decisionScopes`: `__view__`. We use this scope as a signal to fetch all the page-load activities from Target. The Web SDK will also try to evaluate all the VEC view based activities. Disabling view prefetching is not supported in the Web SDK yet.

To access any personalization content, you may provide a callback function, which will be called after the SDK receives a successful response from the server. Your callback is provided a result object, which may contain a propositions property containing any returned personalization content.

Example:

```javascript
alloy("sendEvent", {
    xdm: {...},
    decisionScopes: ["__view__"]
  }).then(function(result) {
    if (result.propositions) {
      // Manually render propositions and send "display" event
    }
  });
```

[Learn more](../rendering-personalization-content.md#manually-rendering-content)


## How to request specific Form Based Target mboxes


**Using at.js**

You can fetch Form Based Composer activities using the `getOffer` function:

Example 1:

```javascript
adobe.target.getOffer({
   mbox: "hero-banner", 
   success: console.log,
   error: console.error
});
```

Example 2:

```javascript
adobe.target.getOffers({
    request: {
      execute: {
        mboxes: [
        {
          index: 0,
          name: "hero-banner"
        }]
    }
  }
})
.then(console.log)
.catch(console.error);
```

[Learn more]()


**Using Web SDK**

You can fetch Form Based Composer based activities by using the `sendEvent` command and passing the mbox names under the `decisionScopes` option. The `sendEvent` command will return a promise that gets resolved with an object containing the requested activities / propositions:

Example:

```javascript
alloy("sendEvent", {
    xdm: {...},
    decisionScopes: ["hero-banner"]
  }).then(function(result) {
    if (result.propositions) {
      // Format of result.propositions:
      /*
        [
            {
                "id": "AT:eyJhY3Rpdml0eUlkIjoiMTI3MDE5IiwiZXhwZXJpZW5jZUlkIjoiMCJ9",
                "scope": "hero-banner",
                "items": [
                {
                    "id": "11223344",
                    "schema": "https://ns.adobe.com/personalization/html-content-item",
                    "data": {
                        "content": "<div>50% off your order!</div>",
                        "id": "4433222",
                        "format": "text/html"
                    },
                    "meta": {...}
                }
                ],
                "scopeDetails": {...},
                "renderAttempted": false
            }
        ]
      */
    }
  });
```

TODO: DOCUMENT HOW TO SEND A DISPLAY NOTIFICATION AND UPDATE EXAMPLES ABOVE!!!

[Learn more](../rendering-personalization-content.md#manually-rendering-content)



## How to apply the Target activities


**Using at.js**

You can apply the Target activities using the `applyOffers` function: `adobe.target.applyOffer(options)`

Example:

```javascript
adobe.target.getOffers({...})
  .then(response => adobe.target.applyOffers({ response: response }))
  .then(() => console.log("Success"))
  .catch(error => console.log("Error", error));
```

[Learn more](https://experienceleague.adobe.com/docs/target/using/implement-target/client-side/at-js-implementation/functions-overview/adobe-target-applyoffers-atjs-2.html?lang=en)


**Using Web SDK**

This feature is not supported yet.



## How to track events

**Using at.js**

You can track events by using the `trackEvent` function or using `sendNotifications`.

This function fires a request to report user actions, such as clicks and conversions. It does not deliver activities in the response.


Example 1:

```javascript
adobe.target.trackEvent({ 
    "type": "click",
    "mbox": "some-mbox"
});
```

Example 2:

```javascript
adobe.target.sendNotifications({ 
    request: {
       notifications: [{
          ...
          mbox: {
            name: "some-mbox"
          },
          type: "click",
          ...
       }]
    }
});
```


[Learn more](https://experienceleague.adobe.com/docs/target/using/implement-target/client-side/at-js-implementation/functions-overview/adobe-target-trackevent.html?lang=en)



**Using Web SDK**

You can track events and user actions by calling the `sendEvent` command, populating the `_experience.decisioning.propositions` XDM fieldgroup, and setting the `eventType` to one of 2 values:

- `decisioning.propositionDisplay`: Signals the rendering of the Target activity.
- `decisioning.propositionInteract`: Signals a user interaction with the activity, like a mouse click.

The `_experience.decisioning.propositions` XDM fieldgroup is an array of objects. The properties of each object are derived from the `result.propositions` that gets returned in the `sendEvent` command: `{ id, scope, scopeDetails }`

Example 1 - Track a `decisioning.propositionDisplay` event after rendering an activity:

```javascript
alloy("sendEvent", {
  xdm: {},
  decisionScopes: ['discount']
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

  if (discountProposition) {
    // Find the item from proposition that should be rendered.
    // Rather than assuming there a single item that has HTML
    // content, find the first item whose schema indicates
    // it contains HTML content.
    for (var j = 0; j < discountProposition.items.length; j++) {
      var discountPropositionItem = discountProposition.items[i];
      if (discountPropositionItem.schema === "https://ns.adobe.com/personalization/html-content-item") {
        var discountHtml = discountPropositionItem.data.content;
        // Render the content
        var dailySpecialElement = document.getElementById("daily-special");
        dailySpecialElement.innerHTML = discountHtml;
        
        // For this example, we assume there is only a single place to update in the HTML.
        break;  
      }
    }
      // Send a "decisioning.propositionDisplay" event signaling that the proposition has been rendered.
    alloy("sendEvent", {
      xdm: {
        eventType: "decisioning.propositionDisplay",
        _experience: {
          decisioning: {
            propositions: [
              {
                id: discountProposition.id,
                scope: discountProposition.scope,
                scopeDetails: discountProposition.scopeDetails
              }
            ]
          }
        }
      }
    });
  }
});
```

TODO: EXAMPLE 2 FOR CLICK TRACKING

[Learn more](../rendering-personalization-content.md#manually-rendering-content)



## How to trigger a view change in a Single Page Application


**Using at.js**

Use the `adobe.target.triggerView` function. This function can be called whenever a new page is loaded or when a component on a page is re-rendered. adobe.target.triggerView() should be implemented for single page applications (SPAs) in order to use the Visual Experience Composer (VEC) to create A/B Tests and Experience Targeting (XT) activities. If adobe.target.triggerView() is not implemented on the site, the VEC cannot be utilized for SPA.

Example:

```javascript
adobe.target.triggerView("homeView")
```


[Learn more](https://experienceleague.adobe.com/docs/target/using/implement-target/client-side/at-js-implementation/functions-overview/adobe-target-triggerview-atjs-2.html?lang=en)


**Using Web SDK**

In order to trigger or signal a single page application View Change, set the `web.webPageDetails.viewName` property under the `xdm` option of the `sendEvent` command.

Example:

```javascript
alloy("sendEvent", {
  renderDecisions: true,
  xdm:{
    web:{
      webPageDetails:{
        viewName: "homeView"
      }
    }
  }
});
```

[Learn more](./spa-implementation.md#implementing-xdm-views)


## How to leverage Response Tokens

Personalization content returned from Adobe Target includes [response tokens](https://experienceleague.adobe.com/docs/target/using/administer/response-tokens.html), which are details about the activity, offer, experience, user profile, geo information, and more. These details can be shared with third-party tools or used for debugging. Response tokens can be configured in the Adobe Target user interface.


**Using at.js**

Use at.js custom events to listen for the Target response and read the response tokens.

Example:

```javascript
document.addEventListener(adobe.target.event.REQUEST_SUCCEEDED, function(e) { 
  console.log("Request succeeded", e.detail); 
}; 
```


[Learn more](https://experienceleague.adobe.com/docs/target/using/administer/response-tokens.html?lang=en)


**Using Web SDK**

>[!IMPORTANT]
>
>Ensure that you are using Platform Web SDK version 2.6.0 or later.

The Response Tokens are returned as part of the `propositions` that are exposed in the result of the `sendEvent` command. Each proposition contains an array of `items`, and each item will have a `meta` object populated with Response Tokens if they are enabled in the Target admin UI. [Learn more](https://experienceleague.adobe.com/docs/target/using/administer/response-tokens.html?lang=en)

Example:

```javascript
alloy("sendEvent", {
    renderDecisions: true,
    xdm: {}
  }).then(function(result) {
    if (result.propositions) {
      // Format of result.propositions:
      /*
        [
            {
                "id": "",
                "scope": "",
                "items": [
                    {
                        "id": "",
                        "schema": "",
                        "data": {},
                        "meta": { // RESPONSE TOKENS
                            "activity.name": ...,
                            "offer.id": ...,
                            "profile.activeActivities": ...
                        }
                    }
                ],
                "scopeDetails": {}
                "renderAttempted": false
            }
        ]
      */
    }
  });
```

[Learn more](./accessing-response-tokens.md)


## How to manage flicker


**Using at.js**

**Using Web SDK**


## How is A4T being handled

**Using at.js**

**Using Web SDK**


## How to set Target Global Settings

**Using at.js**

You can override settings in the at.js library using `targetGlobalSettings()`, rather than configuring the settings in the Target Standard/Premium UI or by using REST APIs.

This function can be defined before at.js is loaded or in Administration > Implementation > Edit at.js Settings > Code Settings > Library Header.

Example:

```javascript
window.targetGlobalSettings = {  
   timeout: 200, // using custom timeout  
   visitorApiTimeout: 500, // using custom API timeout  
   enabled: document.location.href.indexOf('https://www.adobe.com') >= 0 // enabled ONLY on adobe.com  
};
```

[Learn more](https://experienceleague.adobe.com/docs/target/using/implement-target/client-side/at-js-implementation/functions-overview/targetgobalsettings.html?lang=en)


**Using Web SDK**

This feature is not supported yet.
