---
title: Adobe Target and The Adobe Experience Platform Web SDK. 
seo-title: Adobe Experience Platform Web SDK and using Adobe Target
description: Learn how to render personalized content with Experience Platform Web SDK using Adobe Target
seo-description: Learn how to render personalized content with Experience Platform Web SDK using Adobe Target
keywords: target;adobe target;activity.id;experience.id;renderDecisions;decisionScopes;prehiding snippet;vec;Form-Based Experience Composer;xdm;audiences;decisions;scope;schema;
---

# [!DNL Target] Overview

The Adobe Experience Platform [!DNL Web SDK] can deliver and render personalized experiences managed in Adobe Target to the web channel. You can use a WYSIWYG editor, called the [Visual Experience Composer](https://docs.adobe.com/content/help/en/target/using/experiences/vec/visual-experience-composer.html) (VEC), or a non-visual interface, the [Form-based Experience Composer](https://docs.adobe.com/content/help/en/target/using/experiences/form-experience-composer.html), to create, activate, and deliver your activities and personalization experiences.

## Enabling Adobe Target

To enable [!DNL Target], you need to do the following:

1. Turn on activity.id and experience.id reponse tokens in the [!DNL Target] UI.

  ![target_reponse_token](../../solution-specific/target/assets/target_response_token.png)

1. Enable target in your [edge configuration](../../fundamentals/edge-configuration.md) with the appropriate client code.
1. Add the `renderDecisions` option to your events.

Then, optionally, you can also:

* Add `decisionScopes` to your events to retrieve specific activities (useful for activities created with the form-based composer).
* Add the [prehiding snippet](../../solution-specific/target/flicker-management.md) to hide only certain portions of the page.

## Using the Adobe Target VEC

With the SDK, you can use the VEC normally with one exception: you need the [target VEC helper extension](https://docs.adobe.com/content/help/en/target/using/experiences/vec/troubleshoot-composer/vec-helper-browser-extension.html) installed and active.

## Auto-render VEC Activities

The AEP Web SDK has the power to automatically render your experiences defined via Adobe Target’s VEC on the web for your users. In order to indicate to the AEP Web SDK to auto-render VEC activities, send an event with `renderDecisions = true`:

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

## `__view__` Scope

AEP [!DNL Web SDK] provides a functionality where you can retrieve VEC actions without relying on the AEP [!DNL Web SDK] to render the VEC actions for you. Send an event with `__view__` defined as as a `decisionScopes`.

```javascript
alloy("sendEvent", {
  decisionScopes: [“__view__”,"foo", "bar"], 
  "xdm": { 
    "web": { 
      "webPageDetails": { 
        "name": "Home Page"
       }
      } 
     }
    }
   ).then(results){
  for (decision of results.decisions){
     if(decision.decisionScope == "__view__")
       console.log(decision.content)
}
};
```   

## Audiences in XDM

When defining Audiences for your Target activities that will be delivered via the AEP Web SDK, [XDM](https://docs.adobe.com/content/help/en/experience-platform/xdm/home.html) must be defined and used. After you define XDM schemas, classes, and mixins, you can create a Target audience rule defined by XDM data for targeting. Within Target, XDM data displays in the Audience Builder as a custom parameter. The XDM is serialized using dot notation (for example, `web.webPageDetails.name`).

If you have Target activities with predefined audiences that use custom parameters or a user profile, be aware that they won’t be delivered correctly via the AEP Web SDK. Instead of using custom parameters or the user profile, you must use XDM instead. However, there are out-of-the-box audience targeting fields supported via the AEP Web SDK that do not require XDM. These are the fields available in the Target UI that do not require XDM: 

* Target Library
* Geo
* Network
* Operating System
* Site Pages
* Browser
* Traffic Sources
* Time Frame

## Terminology

**Decisions** - In [!DNL Target], these correlate to the experience that is selected from an Activity.

**Scope** - The scope of the decision. In [!DNL Target], this is the mBox. The global mBox is the `__view__` scope.

**Schema** - The schema of a decision is the type of offer in [!DNL Target]. 

**XDM** - The XDM is serialized into dot notation and then put into [!DNL Target] as mBox parameters.
