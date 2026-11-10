---
title: subscribeRulesetItems (Web SDK)
description: Subscribe to content cards for a specific surface using the subscribeRulesetItems command.
exl-id: bc932ba5-a810-4fa6-82cc-998af39fdd34
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
  - id: cb954087-f4fc-4456-afb9-e939cabcdc79
    internal-label: Journey Optimizer
feature_v2:
  - id: d5947817-d24b-4ba3-8126-2c3d66e9422b
    internal-label: Web SDK
  - id: dc22c819-3f29-4e91-8b7d-5c6719831141
    internal-label: Content management
  - id: a984631b-2bae-4860-9b15-69c41a799dcb
    internal-label: APIs and SDKs
subfeature_v2:
  - id: bc543dba-f0db-4234-b5da-877a5c1664e2
    internal-label: Content cards
  - id: d056adbe-402d-4f42-9746-f3d424e598b1
    internal-label: Web SDK
level_v2:
  - id: b5a62a22-46f7-4f0d-b151-3fc640bef588
    internal-label: Intermediate
topic_v2:
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
  - id: a492a671-d5f6-46ee-b832-2efbca14ddd8
    internal-label: Activation and channels
autotag-review: '2026-11-05T22:08:57.077Z'
---
# `subscribeRulesetItems` (Web SDK)

The `subscribeRulesetItems` command allows you to subscribe to propositions that are the result of satisfied rulesets. You can do this by specifying which surfaces and schemas to filter by, and providing a callback function.

Rulesets are evaluated each time a [`sendEvent`](sendevent/overview.md) command is sent. The callback function receives a `result` object with an array of propositions within it.

>[!IMPORTANT]
>
>The `subscribeRulesetItems` command is the only way to get propositions that come from rulesets, since they are not returned alongside [`sendEvent`](sendevent/overview.md) results. You must set up your subscription before calling `sendEvent` to ensure that propositions are captured.


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

The above code subscribes to the `web://example.com/#welcome` surface for content cards and uses the `collectEvent` convenience method to emit `display` events for all propositions.

## Command options {#command-options}

This command takes an `options` object with the following properties:

| Property | Type| Description |
| --- | --- | --- |
| `surfaces` | String array | A list of surfaces. Propositions will only be received by the callback function if they match one of the surfaces provided here. |
| `schemas`  | String array | A list of schemas. Propositions will only be received by the callback function if they match one of the schemas provided here. |
| `callback` | Function | A callback function that is invoked when propositions are the result of satisfied rulesets. The callback function receives two parameters when invoked: `result` and `collectEvent`. See [callback parameters](#callback-parameters) for details. |

>[!TIP]
>
>You can subscribe to multiple surfaces and schemas in a single command by passing additional values to the `surfaces` and `schemas` arrays.

### Callback parameters {#callback-parameters}

The callback function receives the two parameters described in the table below when invoked.

| Parameter | Type | Description |
| --- | --- | --- |
| `result` | Object | This object contains a `propositions` array.  These propositions are the direct result of satisfied rulesets. The `result` object is structured the same as the [result object](command-responses.md) returned by `sendEvent` using a `then` clause. |
| `collectEvent` | Function | A convenience function which you can use to send Edge Network events to track interactions, displays and other events. |

### `collectEvent` function {#collectevent-function}

The `collectEvent` function is a convenience function that you can use to send Edge Network events to track interactions, displays and other events. It accepts the two parameters described in the table below.

| Parameter | Type | Description |
| --- | --- | --- |
| Event type   | String | A string indicating which proposition event type to emit. Supported event types are `display`, `interact`, or `dismiss`. |
| `propositions` | Array | An array of propositions corresponding to the event. |


The `collectEvent` function can be called independently outside of the callback. Calling this function is useful when tracking an interaction or dismissal at a later point, such as in response to a user action.

```js
collectEvent("interact", propositions);
```

## Subscribe to content cards using the Web SDK tag extension

The Web SDK tag extension equivalent to command responses is a rule that subscribes to the [**[!UICONTROL Subscribe ruleset items]**](/help/tags/extensions/client/web-sdk/event-types.md#subscribe-ruleset-items) event. The event allows you to provide the desired schemas and surfaces.
