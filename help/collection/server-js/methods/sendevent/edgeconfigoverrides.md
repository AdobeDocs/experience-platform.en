---
title: edgeConfigOverrides (Server SDK, sendEvent)
description: Override datastream settings for a single event that the Server SDK sends.
badge: Alpha
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
