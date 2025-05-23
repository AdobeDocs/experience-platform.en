---
title: edgeConfigOverrides
description: Configure datastream overrides.
exl-id: 8e327892-9520-43f5-abf4-d65a5ca34e6d
---
# `edgeConfigOverrides`







### Send configuration overrides via the Web SDK `sendEvent` command {#send-event}

The example below shows all the dynamic datastream configuration options supported on a `sendEvent` call.

If your datastream configuration has all supported services enabled, the sample below will override this setting and disable all services (see the `enabled: false` setting on each service).

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
      reportSuites: ["ujslconfigoverrides3"],
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

|Parameter|Description|
|---|---|
| `renderDecisions` |  |
|`edgeConfigOverrides.datastreamId`| Use this parameter to allow a single request to go to a different datastream than the one defined by the `configure` command. |
| `edgeConfigOverrides.com_adobe_experience_platform` | Defines the dynamic datastream configuration for the Experience Platform service.|
| `edgeConfigOverrides.com_adobe_experience_platform.enabled`| Defines whether the event will be sent to the Experience Platform service or not. |
| `edgeConfigOverrides.com_adobe_experience_platform.datasets`| Defines the datasets used for the event. |
| `edgeConfigOverrides.com_adobe_experience_platform.com_adobe_edge_ode.enabled`| Defines whether the event is sent to the Offer Decisioning service or not. |
| `edgeConfigOverrides.com_adobe_experience_platform.com_adobe_edge_segmentation.enabled`| Defines whether the event is sent to the edge segmentation service or not. |
| `edgeConfigOverrides.com_adobe_experience_platform.com_adobe_edge_destinations.enabled`| Defines whether the event data is sent to the edge destinations or not. |
| `edgeConfigOverrides.com_adobe_experience_platform.com_adobe_edge_ajo.enabled`| Defines whether the event data is sent to Adobe Journey Optimizer service or not. |
| `com_adobe_analytics.enabled`| Defines whether the event data is sent to Adobe Analytics or not. |
| `com_adobe_analytics.reportSuites[]`| An array of strings that determines to which report suites you want to send Analytics data.|
| `com_adobe_identity.idSyncContainerId`| The third-party ID sync container that you want to use in Audience Manager. For this ID sync container to work, you must set `com_adobe_audience_manager.enabled` to `true`. Otherwise, the Audience Manager service is disabled. |
| `com_adobe_target.enabled`| Defines whether the event data is sent to Adobe Target. |
| `com_adobe_target.propertyToken`| The token for the Adobe Target destination property.|
| `com_adobe_audience_manager.enabled`| Defines whether the event data is sent to the Audience Manager service. |
| `com_adobe_launch_ssf`| Defines whether the event data is sent to server-side forwarding. |


