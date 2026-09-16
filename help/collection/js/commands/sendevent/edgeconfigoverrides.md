---
title: edgeConfigOverrides
description: Configure datastream overrides for just the sendEvent command.
exl-id: 8e327892-9520-43f5-abf4-d65a5ca34e6d
TQID: https://experienceleague.adobe.com/bkTUWKjT3bqk90h84rGEeR2Uic8UHJwoWJaEkG-BrEg
product_v2:
  - id: cb954087-f4fc-4456-afb9-e939cabcdc79
    internal-label: Journey Optimizer
  - id: d0a3eab4-7b10-4d96-a71e-6c0f8e7b7c87
    internal-label: CX Enterprise
  - id: e43347a8-f2c5-4aa4-8623-6f13875d7e3a
    internal-label: Target
  - id: e55547f1-a1ff-40c6-8978-026e40ab7fa4
    internal-label: Analytics
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: b069d60e-95f3-44d6-95a8-ddc862a4bc38
    internal-label: Reports
  - id: c93393a4-e558-47e1-992e-c91ed4d480ce
    internal-label: Implementation
  - id: d556b755-390a-43f0-be32-a08cf6236126
    internal-label: Configuration
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: b5ce8718-c3af-4fdb-a1a9-fca32f83a87c
    internal-label: Implementation
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
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
