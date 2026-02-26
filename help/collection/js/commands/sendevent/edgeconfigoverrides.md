---
title: edgeConfigOverrides
description: Configure datastream overrides for just the sendEvent command.
exl-id: 8e327892-9520-43f5-abf4-d65a5ca34e6d
---
# `edgeConfigOverrides` (`sendEvent` command)

The `edgeConfigOverrides` object allows you to override configuration settings just for the current `sendEvent` command. This object is useful when you have specific commands on the same page that you want to run with different configuration settings than the rest of your Web SDK implementation. If you want to override configuration settings for all commands on a given page, consider using the [`edgeConfigOverrides` object in the `configure` command](../configure/edgeconfigoverrides.md).

The overarching datastream configuration override process consists of two main steps:

1. First, you must define your datastream configuration override when [configuring a datastream](/help/datastreams/configure.md) in the Datastreams UI. See [Datastream configuration overrides](/help/datastreams/overrides.md) in the datastreams documentation for instructions on how to configure overrides.
1. After you have configured the datastream override in the datastreams UI, you can configure the `edgeConfigOverrides` object.

Note that the `configure` command also supports a `edgeConfigOverrides` object; see [`edgeConfigOverrides`](../configure/edgeconfigoverrides.md) under the `configure` command. The `edgeConfigOverrides` object in the `sendEvent` command takes precedence over the `edgeConfigOverrides` object in the `configure` command if both are set.

## Example

If your datastream configuration has all supported services enabled, the sample below overrides this setting and disables all services (see the `enabled: false` setting on each service). This object supports the same properties as the [`edgeConfigOverrides`](../configure/edgeconfigoverrides.md) object in the `configure` command.

```js
alloy("sendEvent", {
  renderDecisions: true,
  edgeConfigOverrides: {
    datastreamId: "bfa8fe21-6157-42d3-b47a-78310920b39d",
    com_adobe_experience_platform: {
      enabled: false,
      datasets: {
        event: {
          datasetId: "64b6f949a8a6891ca8a28911",
        },
      },
      com_adobe_edge_ode: {
        enabled: false,
      },
      com_adobe_edge_segmentation: {
        enabled: false,
      },
      com_adobe_edge_destinations: {
        enabled: false,
      },
      com_adobe_edge_ajo: {
        enabled: false,
      },
    },
    com_adobe_analytics: {
      enabled: false,
      reportSuites: ["examplersid3"],
    },
    com_adobe_identity: {
      idSyncContainerId: 34374,
    },
    com_adobe_target: {
      enabled: false,
      propertyToken: "f3fd55e1-a06d-8650-9aa5-c8356c6e2223",
    },
    com_adobe_audience_manager: {
      enabled: false,
    },
    com_adobe_launch_ssf: {
      enabled: false,
    },
  },
});
```

## Datastream configuration overrides using the Web SDK tag extension

The Web SDK tag extension equivalent of this object is the [Datastream configuration overrides](/help/tags/extensions/client/web-sdk/actions/send-event.md#datastream-configuration-overrides) section when configuring the '[!UICONTROL Send event]' action.
