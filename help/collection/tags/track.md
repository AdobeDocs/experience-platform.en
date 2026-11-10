---
title: track()
description: Trigger a direct call rule.
exl-id: 738cecb0-3dd4-4326-ad64-403ce584fda5
feature_v2:
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection tags
subfeature_v2:
  - id: 1a2b3c4d-0006-4006-8006-000000000006
    internal-label: Data collection tags rules
level_v2:
  - id: b5a62a22-46f7-4f0d-b151-3fc640bef588
    internal-label: Intermediate
topic_v2:
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
  - id: b5ce8718-c3af-4fdb-a1a9-fca32f83a87c
    internal-label: Implementation
autotag-review: '2026-11-05T22:08:57.077Z'
---
# `track()`

The `_satellite.track()` method allows you to trigger a [Direct call rule](/help/tags/extensions/client/core/overview.md#direct-call-event).

>[!IMPORTANT]
>
>Adobe considers `_satellite.track()` a **legacy implementation method**. While it is still fully supported, Adobe strongly recommends using more modern implementation practices, such as the [Adobe Client Data Layer](/help/tags/extensions/client/client-data-layer/overview.md), which is the recommended approach for new implementations.
>
>If you opt to use `_satellite.track()` on your site, **guard every call** so that your site is not tightly coupled to the tag library. If not guarded, removing the tag property in the future causes all references to the `_satellite` object to throw errors.

```ts
_satellite.track(identifier: string, detail?: unknown ): void;
```

When you call `_satellite.track()` using the identifier configured in the tags UI, that rule is immediately triggered. Calling this method only acts as the rule event; the rule's conditions still apply before executing the rule's actions. Multiple direct call rules can use the same identifier, allowing you to trigger all of those rules at once using a single `_satellite.track()` call. Each triggered rule still checks its own conditions before taking action, even if multiple rules share the same identifier.

## Available fields

The `_satellite.track()` method supports two arguments:

| Name | Type | Required | Description|
|---|---|---|---|
| **`identifier`** | `string` | Yes | The direct call rule identifier. You set this identifier when configuring the rule in the tags UI. |
| **`detail`** | `unknown` | No | An optional payload containing any desired information. When configuring a rule, you can access the payload using `event.detail` (custom code) or `%event.detail%` (text fields that support data element notation). |

```js
// Trigger rules with the identifier 'example'
if (window._satellite?.track) {
  _satellite.track('example');
}

// Trigger a direct call rule with an optional payload that your tag rule can use
_satellite.track('contact_submit', { name: 'John Doe' });
// When configuring the rule, access the payload field using:
// event.detail.name (custom code block) or
// %event.detail.name% (data element)
```
