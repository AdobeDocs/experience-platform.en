---
title: _monitors
description: Add event listeners to debug your tag implementation.
exl-id: 046094c1-afeb-48e6-8649-590e5116421b
---
# `_monitors`

The `_satellite._monitors` object allows you to create event listeners and execute custom code when the library detects a triggered rule. Its primary use is to assist with debugging your implementation to ensure that rules trigger correctly.

>[!IMPORTANT]
>
>This object is for debugging purposes only. Do not tie production logic to this object. The availability of properties or names within this object can be changed by Adobe at any time.

```ts
_satellite._monitors?: {
  ruleTriggered(event: { rule: Rule }): void;
  ruleCompleted(event: { rule: Rule }): void;
  ruleConditionFailed(event: { rule: Rule; condition: Condition }): void;
}[];
```

You can listen for the following event types:

## `ruleTriggered`

This callback function fires when an event triggers a rule before the rule's conditions and actions have been processed. If this function triggers, either `ruleCompleted` or `ruleConditionFailed` triggers shortly after (mutually exclusive).

## `ruleCompleted`

The `ruleCompleted` callback function fires after `ruleTriggered` when the rule's condition criteria succeeds and all the rule's actions are executed.

## `ruleConditionFailed`

The `ruleConditionFailed` callback function fires after `ruleTriggered` when at least one of the rule's conditions fail.

## `Rule` object

Each callback function exposes a `Rule` object that provides information about the rule itself.

```ts
type Rule = {
  id: string;
  name: string;
  events: Event[]; // Rule-specific events
  conditions: Condition[]; // Rule-specific conditions
  actions: Action[]; // Rule-specific actions
}
```

| Name | Type | Description |
|---|---|---|
| **`id`** | `string` | The unique identifier for the rule. |
| **`name`** | `string` | The friendly name of the rule. |
| **`events`** | `Event[]` | An array of events that you have configured to trigger the rule. |
| **`conditions`** | `Condition[]` | An array of conditions that you have configured to trigger the rule. |
| **`actions`** | `Action[]` | An array of actions that you have configured to execute when the rule is triggered. |

## Example

Add the following snippet of code to your HTML in the `<head>` tag before calling your tag library loader:

```html
<script>
  window._satellite ??= {};
  window._satellite._monitors ??= [];
  window._satellite._monitors.push({
    ruleTriggered(event) { console.log('Rule triggered', event.rule);},
    ruleCompleted(event) { console.log('Rule completed', event.rule);},
    ruleConditionFailed(event) { console.log('Rule condition failed', event.rule, event.condition);}
  });
</script>
<script src="https://assets.adobedtm.com/.../launch-EN...js" async></script>
```

Since the tag library is not yet loaded at this point on the page, the initial `_satellite` object is created and an array on `_satellite._monitors` is initialized. The script then adds a monitor object to that array. 

Consider the following tips when using monitors:

* Note that these debug messages use `console.log` instead of [`_satellite.logger`](logger.md) because the hooks are created before the tag library loads.
* While the code example includes all three callback functions, they are not required fields. You can include only the desired hooks when debugging rules on your site.
* Multiple monitors are allowed, even for the same events. If you use multiple monitors for a single event, call order is not guaranteed.
* Make sure that you create `_monitors` _before_ loading the tag library. If you create these hooks after the library is loaded, only the rules that trigger from that point forward are caught.
