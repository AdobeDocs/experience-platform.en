---
title: Adobe Client Data Layer extension event types
description: Learn how to trigger tag rules with the Data layer push event type in the Adobe Client Data Layer extension, and how to use the pushed data in rule actions.
feature_v2:
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection tags
subfeature_v2:
  - id: 1a2b3c4d-0003-4003-8003-000000000003
    internal-label: Data collection tags extensions
  - id: 1a2b3c4d-0006-4006-8006-000000000006
    internal-label: Data collection tags rules
level_v2:
  - id: b5a62a22-46f7-4f0d-b151-3fc640bef588
    internal-label: Intermediate
topic_v2:
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
  - id: c4147b6e-073b-4d3c-9ab1-d60f2f4434ef
    internal-label: Behavioral data
---
# Event types

The Adobe Client Data Layer (ACDL) extension provides one event type, **[!UICONTROL Data layer push]**, which triggers a rule when data or events are pushed to the data layer.

## Data layer push {#data-layer-push}

The **[!UICONTROL Data layer push]** event adds an [ACDL event listener](/help/collection/acdl/methods/addeventlistener.md) when the tag library loads. The rule runs each time the listener is called, so it can run many times on the same page.

### Triggers on {#triggers-on}

Choose which pushes trigger the rule:

| Option | ACDL event | Triggers the rule for |
| --- | --- | --- |
| **[!UICONTROL All data changes]** (default) | `adobeDataLayer:change` | Every push that changes the computed state: data pushes, and event pushes that carry data. |
| **[!UICONTROL All named events]** | `adobeDataLayer:event` | Every push that has an `event` key, whatever its name. |
| **[!UICONTROL Specific named events]** | Each event name that you enter | Pushes whose `event` value matches one of the names that you specify. See [Event names](#event-names). |

The following table shows which options each kind of push triggers:

| Push | All data changes | All named events | Specific named events (`myEvent`) |
| --- | --- | --- | --- |
| `adobeDataLayer.push({ page: { title: "Home" } })` | Yes | No | No |
| `adobeDataLayer.push({ event: "myEvent" })` | No | Yes | Yes |
| `adobeDataLayer.push({ event: "myEvent", page: { title: "Home" } })` | Yes | Yes | Yes |
| `adobeDataLayer.push({ event: "otherEvent" })` | No | Yes | No |

The `eventInfo` key isn't data. A push with only `event` and `eventInfo` doesn't trigger **[!UICONTROL All data changes]**.

### Event names {#event-names}

When you choose **[!UICONTROL Specific named events]**, choose how to provide the names under **[!UICONTROL Event names]**:

* **[!UICONTROL Enter event names]**: Type one or more event names. Select **[!UICONTROL Add event]** to add another name. The rule runs when any of the names matches.
* **[!UICONTROL Choose a data element]**: Enter a data element token, such as `%Event names%`, or select the data element icon to choose one. The data element must return a non-empty string or an array of non-empty strings.

The following rules apply to event names:

* Each name must match the `event` value of a push exactly. Names are case-sensitive. A name isn't a path into the pushed object.
* Leading and trailing spaces are removed, and duplicate names are used once.
* A data element is evaluated once, when the tag library loads. Later changes to its value don't change which events the rule listens for.
* A string that contains commas is a single event name. To listen for several names, return an array from the data element.
* If a data element returns an empty value or a value of the wrong type, the rule doesn't listen for any events, and the extension logs an error.

### Time scope {#time-scope}

Under **[!UICONTROL Time scope]**, choose whether the rule runs for pushes that happened before the rule started listening:

| Option | Runs for pushes in the history | Runs for new pushes |
| --- | --- | --- |
| **[!UICONTROL All]** (default) | Yes | Yes |
| **[!UICONTROL Future]** | No | Yes |
| **[!UICONTROL Past]** | Yes | No |

Use **[!UICONTROL All]** in most cases. Your site code can push data and events before the tag library and ACDL finish loading, and **[!UICONTROL All]** makes sure that the rule runs for those pushes. Use **[!UICONTROL Future]** when running the rule again for earlier pushes would cause problems.

The history contains the pushes that are in the data layer array when the rule starts listening. If your implementation [clears the history](action-types.md#clear-history), cleared pushes aren't replayed. See [Scope](/help/collection/acdl/methods/addeventlistener.md#scope).

## Use the pushed data in rules {#event-object}

When a **[!UICONTROL Data layer push]** event triggers a rule, the rule's `event` object includes the following properties, in addition to the `$type` and `$rule` properties that tags add to every event:

| Property | Description |
| --- | --- |
| `event.message` | A copy of the object that was pushed, including its `event`, `eventInfo`, and data keys. |
| `event.fullState` | The [computed state](/help/collection/acdl/concepts/computed-state.md) at the moment the rule was triggered. It already includes the data from the push. For a push from the history, it's the current computed state, not the state at the time of that push. |
| `event.beforeState`, `event.afterState` | Always empty objects. These properties exist only for compatibility with older implementations. Use `event.fullState` instead. |

For example, consider the following push:

```js
adobeDataLayer.push({
  event: "page view",
  eventInfo: { pageType: "product" },
  page: { title: "Product details" }
});
```

In fields that accept data elements, use the following tokens:

| Token | Value |
| --- | --- |
| `%event.message.page.title%` | `"Product details"` |
| `%event.message.eventInfo.pageType%` | `"product"` |
| `%event.message.page%` | The object `{ title: "Product details" }` |
| `Viewed %event.message.page.title%` | The string `"Viewed Product details"` |
| `%event.fullState.page.title%` | The title in the computed state |

When a field contains only one token, the field receives the value with its original type, such as an object or a number. When a field mixes a token with other text, the field receives a string.

In custom code, use the same properties directly, such as `event.message.page.title`. Data elements that the rule evaluates also receive the triggering event.

To run a rule only for some pushes, add a condition that compares one of these values. For example, use the Core extension's [**[!UICONTROL Value Comparison]**](/help/tags/extensions/client/core/overview.md#value-comparison) condition with `%event.message.eventInfo.pageType%`.

For a complete rule that sends pushed data to Adobe with the Web SDK extension, see [Send Adobe Client Data Layer data with the Web SDK](/help/collection/acdl/web-sdk.md).
