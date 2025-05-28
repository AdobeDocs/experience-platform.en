---
title: subscribeRulesetItems
description: Subscribe to content cards for a specific surface using the subscribeRulesetItems command.
exl-id: bc932ba5-a810-4fa6-82cc-998af39fdd34
---
# `subscribeRulesetItems`

The `subscribeRulesetItems` command allows you to subscribe to propositions that are the result of satisfied rulesets. You can do this by specifying which surfaces and schemas to filter by, and providing a callback function.

Any time rulesets are evaluated, the callback function receives a `result` object with an array of propositions within it.

>[!IMPORTANT]
>
>The `subscribeRulesetItems` command is the only way to get propositions that come from rulesets, since they are not returned alongside [`sendEvent`](sendevent/overview.md) results.

## Comand options {#command-options}

This command takes an `options` object with the following properties:

| Property | Type| Description |
| --- | --- | --- |
| `surfaces` | String array | A list of surfaces. Propositions will only be received by the callback function if they match one of the surfaces provided here. |
| `schemas`  | String array | A list of schemas. Propositions will only be received by the callback function if they match one of the schemas provided here. |
| `callback` | Function | A callback function that will be invoked when propositions are the result of satisfied rulesets. The callback function receives two parameters when invoked: `result` and `collectEvent`. See [callback parameters](#callback-parameters) for details. |

### Callback parameters {#callback-parameters}

The callback function receives the two parameters described in the table below when invoked.

| Parameter | Type | Description |
| --- | --- | --- |
| `result` | Object | This object contains a `propositions` array.  These propositions are the direct result of satisfied rulesets. The `result` object is structured the same as the [result object](command-responses.md) returned by `sendEvent` using a `then` clause. |
| `collectEvent` | Function | A convenience function which you can use to send Edge Network events to track interactions, displays and other events. |

### `collectEvent` function {#collectevent-function}

The `collectEvent` function is a convenience function which you can use to send Edge Network events to track interactions, displays and other events. It accepts the two parameters described in the table below.

| Parameter | Type | Description |
| --- | --- | --- |
| Event type   | String | A string indicating which proposition event type to emit. Supported event types are `display`, `interact`, or `dismiss`. |
| `propositions` | Array | An array of propositions corresponding to the event. |

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

The following sample code subscribes to the `web://example.com/#welcome` surface for content cards and uses the `collectEvent` convenience method to emit `display` events for all propositions.

```js
alloy("subscribeRulesetItems", {
  surfaces: ["web://example.com/#welcome"],
  schemas: ["https://ns.adobe.com/personalization/message/content-card"],
  callback: (result, collectEvent) => {
    const { propositions = [] } = result;
    renderMyPropositions(propositions);
    collectEvent("display", propositions);    
  },
});
```
