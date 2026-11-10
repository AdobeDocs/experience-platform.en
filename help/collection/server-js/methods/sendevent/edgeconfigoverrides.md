---
title: edgeConfigOverrides (Server SDK, sendEvent)
description: Override datastream settings for a single event that the Server SDK sends.
badge: Alpha
feature_v2:
  - id: b7798bb6-f089-4907-8492-05fc80e10632
    internal-label: Server API
  - id: ca3d6bf4-a4af-4944-936b-8de1eb09f149
    internal-label: Datastreams
subfeature_v2:
  - id: 1a2b3c4d-0019-4019-8019-000000000019
    internal-label: Datastreams services
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
# `edgeConfigOverrides` (Server SDK, `sendEvent`)

>[!BEGINSHADEBOX]

*This page describes `edgeConfigOverrides` in the Server SDK `sendEvent` method. For the Web SDK, see [`edgeConfigOverrides`](/help/collection/js/commands/sendevent/edgeconfigoverrides.md).*

>[!ENDSHADEBOX]

The `edgeConfigOverrides` object of `sendEvent` lets you override datastream settings for a single event. Use it when one event needs different settings from the rest of your implementation, such as a different dataset, report suite, or datastream. To override settings for every event, use the [`edgeConfigOverrides` object in `configure`](../configure/edgeconfigoverrides.md) instead.

Overriding datastream settings takes two steps:

1. Define the overrides that you want to allow when you [configure the datastream](/help/datastreams/configure.md). See [Datastream configuration overrides](/help/datastreams/overrides.md) for instructions.
1. Set the `edgeConfigOverrides` object in your code.

If you set `edgeConfigOverrides` in both `configure` and `sendEvent`, the SDK combines them for that event. For each top-level property, such as `com_adobe_analytics`, the value from `sendEvent` replaces the whole value from `configure`. Top-level properties that you set only in `configure` still apply. See [`edgeConfigOverrides` in `configure`](../configure/edgeconfigoverrides.md) for an example.

## Example

The following example sends one event to a different datastream, and overrides its Analytics report suite and Target property:

```js
await visitor.sendEvent({
  xdm: {
    eventType: "commerce.purchases",
    identityMap: {
      Email: [{ id: "visitor@example.com", primary: true }]
    }
  },
  edgeConfigOverrides: {
    datastreamId: "bfa8fe21-6157-42d3-b47a-78310920b39d",
    com_adobe_analytics: {
      reportSuites: ["examplersid3"]
    },
    com_adobe_target: {
      propertyToken: "f3fd55e1-a06d-8650-9aa5-c8356c6e2223"
    }
  }
});
```

The `datastreamId` property sends this event to a different datastream than the one set in [`datastreamId`](../configure/datastreamid.md). All other properties are the same as the properties of [`edgeConfigOverrides` in `configure`](../configure/edgeconfigoverrides.md#properties).
