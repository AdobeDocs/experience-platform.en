---
title: subscribeRulesetItems
description: Subscribe to content cards for a specific surface using the subscribeRulesetItems command.
---

# `subscribeRulesetItems`

The `subscribeRulesetItems` command allows you to subscribe to content cards for a surface. Any time the rulesets are evaluated, the callback provided to this command receives a result object with propositions that hold the content card data.

This command supports the following properties:

* `surfaces`: An array of surfaces for which you want to subscribe to content cards.
* `schemas`: 
* `callback`:


## Subscribe to content cards using the Web SDK tag extension {#tag-extension}

Follow the steps below to subscribe to content cards through the Tags user interface.

1. Log in to [experience.adobe.com](https://experience.adobe.com) using your Adobe ID credentials.
1. Navigate to **[!UICONTROL Data Collection]** > **[!UICONTROL Tags]**.
1. Select the desired tag property.
1. Navigate to **[!UICONTROL Rules]**, then select the desired rule.
1. Under [!UICONTROL Events], select an existing event or create a new one.
1. Set the [!UICONTROL Extension] dropdown field to **[!UICONTROL Adobe Experience Platform Web SDK]**, and set the **[!UICONTROL Event Type]** to **[!UICONTROL Subscribe ruleset items]**.
1. Select the schemas and surfaces for which you want to subscribe to content cards, on the right side of the screen.
1. Select **[!UICONTROL Keep Changes]**, then run your publishing workflow.

## Subscribe to content cards using the Web SDK JavaScript library {#library}

Run the `subscribeRulesetItems` command and provide the surfaces and schemas for which you want to subscribe to content cards.

```js
alloy("subscribeRulesetItems", {
  surfaces: ["web://alloy-samples.adobe.com/#content-cards-sample"],
  schemas: ["https://ns.adobe.com/personalization/message/content-card"],
  callback: (result, collectEvent) => {
    const { propositions = [] } = result;
    contentCardManager.refresh(propositions, collectEvent);
  },
});
```
