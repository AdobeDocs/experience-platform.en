---
title: applyPropositions
description: Re-render propositions that have already been rendered with sendEvent.
---

# `applyPropositions`

The `applyPropositions` command allows you to re-render propositions that were already rendered using the [`sendEvent`](sendevent/overview.md) command. This command is useful when working with single-page applications where portions of the page get re-rendered, potentially overwriting any personalizations already applied to the page.

This command supports the following fields:

* **Propositions**: An array of proposition objects that you want to re-render.
* **View name**: The name of the view to render. The display notifications for these decisions are cached and can be included in a subsequent `sendEvent` command using the `personalization.includePendingDisplayNotifications` option.
* **Meta data**: An object that determines how HTML offers can be applied. It contains the following properties:
  * Scope
  * Selector
  * Action type

## Apply propositions using the Web SDK tag extension

Applying propositions is performed as an action within a rule in the Adobe Experience Platform Data Collection tags interface.

1. Log in to [experience.adobe.com](https://experience.adobe.com) using your Adobe ID credentials.
1. Navigate to **[!UICONTROL Data Collection]** > **[!UICONTROL Tags]**.
1. Select the desired tag property.
1. Navigate to **[!UICONTROL Rules]**, then select the desired rule.
1. Under [!UICONTROL Actions], select an existing action or create an action.
1. Set the [!UICONTROL Extension] dropdown field to **[!UICONTROL Adobe Experience Platform Web SDK]**, and set the [!UICONTROL Action Type] to **[!UICONTROL Apply propositions]**.
1. Set the desired fields on the right.
1. Click **[!UICONTROL Keep Changes]**, then run your publishing workflow.

## Apply propositions using the Web SDK JavaScript library

Run the `applyPropositions` command when calling your configured instance of the Web SDK. The object containing configuration options supports the following fields:

* **`propositions`**: An array of proposition objects that you want to re-render. This object typically isn't used, as the `propositionScopes` field usually determines which scopes or surfaces that you want to re-render.
* **`metadata`**: Determines how HTML offers are applied. It is a map where the key is a scope or a surface, and the value is an object containing the keys `selector` and `actionType`.
  * `selector`: A string containing a CSS selector of where to apply the HTML.
  * `actionType`: The action to take with the HTML. Valid values include `setHtml`, `replaceHtml`, and `appendHtml`.
* **`viewName`**: The name of the view to render in a single-page application. The display notifications for these decisions are cached and can be included in a subsequent `sendEvent` command using `personalization.includePendingDisplayNotifications`.

```js
alloy("applyPropositiions",{
  "propositions": [],
  "metadata": {},
  "viewName": ""
});
```
