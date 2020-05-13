---
title: Adobe Target and The Adobe Experience Platform Web SDK. 
seo-title: Adobe Experience Platform Web SDK and using Adobe Target
description: Learn how to render personalized content with Experience Platform Web SDK using Adobe Target
seo-description: Learn how to render personalized content with Experience Platform Web SDK using Adobe Target
---

# Target Overview

The Adobe Experience Platform Web SDK is integrated with Adobe Target via that [personalization feature](../../fundamentals/rendering-personalization-content.md) and allows you to serve personalized content and decisions simply.

## Enabling Adobe Target

To enable Target you will need to do the following:

- Enable target in your [edge configuration](../../fundamentals/edge-configuration.md) with the appropriate client code.
- Add the `renderDecisions` option to your events.

Then optionally you can also:

- Add `scopes` to your events to retrieve specific activities (useful for activities created with the form based composer).
- Add the [prehiding snippet](../../fundamentals/managing-flicker.md) to hide only certian portions of the page.

## Using the VEC

With the SDK you can use the VEC normally with one exception you will need the [target VEC helper extension](https://docs.adobe.com/content/help/en/target/using/experiences/vec/troubleshoot-composer/vec-helper-browser-extension.html) installed and active.

## Using the Form-Based Composer

The form-based composer can be used as well to return content. The scopes will appear as locations (mBoxes) in the Target UI. Also you will want to make sure that your developer is looking for the responses if decide to use scopes.

## Audiences in XDM

Within Target XDM data will show up in the Audience Builder as a custom parameter. The XDM is serialized using dot notation (e.g. `web.webPageDetails.name`)

## Terminology

__Decisions__ - In Target these correlate to the experience that is selected from an Activity.

__Scope__ - The scope of the decision. In Target this is the mBox. The global mBox is the `__view__` scope.

__Schema__ - The schema of a decision is the type of offer in Target. 

__XDM__ - The XDM is serialized into dot notation and then put into Target as mBox parameters.