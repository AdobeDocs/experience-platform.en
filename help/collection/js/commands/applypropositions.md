---
title: applyPropositions
description: Re-render propositions that have already been rendered with sendEvent.
exl-id: 6b79f334-4ea6-4ba4-8640-d35b7f90df98
---
# `applyPropositions`

The `applyPropositions` command allows you to re-render propositions that were already rendered using the [`sendEvent`](sendevent/overview.md) command. This command is useful when working with single-page applications where portions of the page get re-rendered, potentially overwriting any personalizations already applied to the page.

This command supports the following fields:

* **Propositions**: An array of proposition objects that you want to re-render.
* **View name**: The name of the view to render. The display notifications for these decisions are cached and can be included in a subsequent `sendEvent` command using the `personalization.includeRenderedPropositions` option.
* **Meta data**: An object that determines how HTML offers can be applied. It contains the following properties:
  * Scope
  * Selector
  * Action type

Run the `applyPropositions` command when calling your configured instance of the Web SDK. The object containing configuration options supports the following fields:

* **`propositions`**: An array of proposition objects that you want to re-render. This object typically isn't used, as the `propositionScopes` field usually determines which scopes or surfaces that you want to re-render.
* **`metadata`**: Determines how HTML offers are applied. It is a map where the key is a scope or a surface, and the value is an object containing the keys `selector` and `actionType`.
  * `selector`: A string containing a CSS selector of where to apply the HTML.
  * `actionType`: The action to take with the HTML. Valid values include `setHtml`, `replaceHtml`, and `appendHtml`.
* **`viewName`**: The name of the view to render in a single-page application. The display notifications for these decisions are cached and can be included in a subsequent `sendEvent` command using `personalization.includeRenderedPropositions`.

```js
alloy("applyPropositions",{
  "propositions": [],
  "metadata": {},
  "viewName": ""
});
```

## Apply propositions using the Web SDK tag extension

The Web SDK tag extension equivalent to this command is the [**[!UICONTROL Apply propositions]**](/help/tags/extensions/client/web-sdk/actions/apply-propositions.md) action.
