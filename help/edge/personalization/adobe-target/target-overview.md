---
title: Using Adobe Target with the Platform Web SDK
description: Learn how to render personalized content with the Experience Platform Web SDK using Adobe Target
keywords: target;adobe target;activity.id;experience.id;renderDecisions;decisionScopes;prehiding snippet;vec;Form-Based Experience Composer;xdm;audiences;decisions;scope;schema;
---

# Using Adobe Target with the Platform Web SDK

Adobe Experience Platform [!DNL Web SDK] can deliver and render personalized experiences managed in Adobe Target to the web channel. You can use a WYSIWYG editor, called the [Visual Experience Composer](https://docs.adobe.com/content/help/en/target/using/experiences/vec/visual-experience-composer.html) (VEC), or a non-visual interface, the [Form-based Experience Composer](https://docs.adobe.com/content/help/en/target/using/experiences/form-experience-composer.html), to create, activate, and deliver your activities and personalization experiences.

## Enabling Adobe Target

To enable [!DNL Target], you need to do the following:

1. Enable target in your [edge configuration](../../fundamentals/edge-configuration.md) with the appropriate client code.
1. Add the `renderDecisions` option to your events.

Then, optionally, you can also:

* Add `decisionScopes` to your events to retrieve specific activities (useful for activities created with the form-based composer).
* Add the [prehiding snippet](../manage-flicker.md) to hide only certain portions of the page.

## Using the Adobe Target VEC

In order to use the VEC with a Platform Web SDK implementation, you need to install and activate either the [Firefox](https://addons.mozilla.org/en-US/firefox/addon/adobe-target-vec-helper/) or [Chrome](https://chrome.google.com/webstore/detail/adobe-target-vec-helper/ggjpideecfnbipkacplkhhaflkdjagak) VEC Helper Extension.

## Auto-render VEC Activities

Adobe Experience Platform Web SDK has the power to automatically render your experiences defined via Adobe Target’s VEC on the web for your users. In order to indicate to Adobe Experience Platform Web SDK to auto-render VEC activities, send an event with `renderDecisions = true`:

```javascript
alloy
("sendEvent", 
  { 
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
  }
);
```

## Using the Form-Based Composer

The Form-Based Experience Composer is a non-visual interface that’s useful for configuring A/B Tests, [!DNL Experience Targeting], Automated Personalization, and Recommendations activities with different response types such as JSON, HTML, Image, etc. Depending on the response type or decision returned by Adobe Target, your core business logic can be executed. To retrieve decisions for your Form-Based Composer activities, send an event with all ‘decisionScopes’ you want to retrieve a decision for.

```javascript
alloy
  ("sendEvent", { 
    decisionScopes: [
      "foo", "bar"], 
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
    }
  );
```

## Decision Scopes

`decisionScopes` defines sections, locations, or parts of your pages where you would like to render a personalized experience. These `decisionScopes` are customizable and user-defined. For current [!DNL Target] customers, `decisionScopes` are also known as "mboxes." In the [!DNL Target] UI, `decisionScopes` appear as "locations."

## The `__view__` Scope

Adobe Experience Platform Web SDK provides functionality where you can retrieve VEC actions without relying on the SDK to render the VEC actions for you. Send an event with `__view__` defined as as a `decisionScopes`.

```javascript
alloy("sendEvent", {
      "decisionScopes": ["__view__", "foo", "bar"], 
      "xdm": { 
        "web": { 
          "webPageDetails": { 
            "name": "Home Page"
          }
        } 
      }
    }
  ).then(function(results) {
    for (decision of results.decisions) {
      if (decision.decisionScope === "__view__") {
        console.log(decision.content)
      }
    }
  });
```   

## Audiences in XDM

When defining Audiences for your Target activities that will be delivered via Adobe Experience Platform Web SDK, [XDM](https://docs.adobe.com/content/help/en/experience-platform/xdm/home.html) must be defined and used. After you define XDM schemas, classes, and field groups, you can create a Target audience rule defined by XDM data for targeting. Within Target, XDM data displays in the Audience Builder as a custom parameter. The XDM is serialized using dot notation (for example, `web.webPageDetails.name`).

If you have Target activities with predefined audiences that use custom parameters or a user profile, be aware that they won’t be delivered correctly via the SDK. Instead of using custom parameters or the user profile, you must use XDM instead. However, there are out-of-the-box audience targeting fields supported via Adobe Experience Platform Web SDK that do not require XDM. These are the fields available in the Target UI that do not require XDM: 

* Target Library
* Geo
* Network
* Operating System
* Site Pages
* Browser
* Traffic Sources
* Time Frame

## Terminology

__Decisions:__ In [!DNL Target], these correlate to the experience that is selected from an Activity.

__Schema:__ The schema of a decision is the type of offer in [!DNL Target]. 

__Scope:__ The scope of the decision. In [!DNL Target], this is the mBox. The global mBox is the `__view__` scope.

__XDM:__ The XDM is serialized into dot notation and then put into [!DNL Target] as mBox parameters.
