---
title: edgeConfigOverrides
description: Configure datastream overrides for your implementation.
---
# `edgeConfigOverrides` (`configure` command)

The `edgeConfigOverrides` object allows you to override configuration settings for commands run on the current page. This object is useful when you have different websites or subdomains for different countries, or if you have multiple Experience Platform sandboxes to store data specific to different business units. If you want to override configuration settings for only a single command on the page, consider using the [`edgeConfigOverrides` object in the `sendEvent` command](../sendevent/edgeconfigoverrides.md).

The datastream configuration override process consists of two main steps:

1. First, you must define your datastream configuration override when [configuring a datastream](/help/datastreams/configure.md) in the Datastreams UI. See [Datastream configuration overrides](/help/datastreams/overrides.md) in the datastreams documentation for instructions on how to configure overrides.
1. After you have configured the datastream override in the datastreams UI, you can configure the `edgeConfigOverrides` object.

When you set the `edgeConfigOverrides` object in the `configure` command, it applies to all data sent to Adobe. The following commands _also_ support the `edgeConfigOverrides` object:

* [`sendEvent`](../sendevent/edgeconfigoverrides.md)
* [`setConsent`](../setconsent.md)
* [`getIdentity`](../getidentity.md)
* [`appendIdentityToUrl`](../appendidentitytourl.md)

Setting `edgeConfigOverrides` in any of the above commands takes precedence over the `edgeConfigOverrides` object in the `configure` command if both are set. If any of these commands do not contain an `edgeConfigOverrides` object, then the `edgeConfigOverrides` object in the `configure` command is used.

## Example

If your datastream configuration has all supported services enabled, the sample below overrides this setting and disables all services.

```js
alloy("configure", {
  orgId: "97D1F3F459CE0AD80A495CBE@AdobeOrg",
  datastreamId: "db9c70a1-6f11-4563-b0e9-b5964ab3a858",
  edgeConfigOverrides: {
    com_adobe_experience_platform: {
      enabled: false,
      datasets: {
        event: {
          datasetId: "64b6f930753dd41ca8d4fd77"
        }
      },
      com_adobe_edge_ode: {
        enabled: false
      },
      com_adobe_edge_segmentation: {
        enabled: false
      },
      com_adobe_edge_destinations: {
        enabled: false
      },
      com_adobe_edge_ajo: {
        enabled: false
      },
    },
    com_adobe_analytics: {
      enabled: false,
      reportSuites: ["exampleoverridersid","exampleoverridersid2"]
    },
    com_adobe_identity: {
      idSyncContainerId: 34373
    },
    com_adobe_target: {
      enabled: false,
      propertyToken: "01dbc634-07c1-d8f9-ca69-b489a5ac5e94"
    },
    com_adobe_audience_manager: {
      enabled: false
    },
    com_adobe_launch_ssf: {
      enabled: false
    }
  }
});
```

| Parameter | Type | Description |
| --- | --- | --- |
| **`orgId`** | `string` | Your company's IMS org ID. |
| **`datastreamId`** | `string` | The datastream ID to send data to. |
| **`com_adobe_experience_platform`** | `object` | Defines the dynamic datastream configuration for Adobe Experience Platform services. |
| **`com_adobe_experience_platform.enabled`** | `boolean` | Determines if the event is sent to Adobe Experience Platform. |
| **`com_adobe_experience_platform.datasets`** | `object` | Defines the datasets used for the event. |
| **`com_adobe_experience_platform.com_adobe_edge_ode.enabled`** | `boolean` | Determines if the event is sent to Offer Decisioning. |
| **`com_adobe_experience_platform.com_adobe_edge_segmentation.enabled`** | `boolean` | Determines if the event is sent to Edge Segmentation. |
| **`com_adobe_experience_platform.com_adobe_edge_destinations.enabled`** | `boolean` | Determines if the event is sent to Edge Destinations. |
| **`com_adobe_experience_platform.com_adobe_edge_ajo.enabled`** | `boolean` | Determines if the event is sent Adobe Journey Optimizer. |
| **`com_adobe_analytics.enabled`** | `boolean` | Determines if the event is sent to Adobe Analytics. |
| **`com_adobe_analytics.reportSuites[]`** | `string[]` | An array of strings that determines which report suites to send Analytics data to. |
| **`com_adobe_audience_manager.enabled`** | `boolean` | Determines if the event is sent to Adobe Audience Manager. |
| **`com_adobe_identity.idSyncContainerId`** | `integer` | The third-party ID sync container that you want to use in Audience Manager. Requires `com_adobe_audience_manager.enabled` set to `true`. Otherwise, the Audience Manager service is disabled. |
| **`com_adobe_target.enabled`** | `boolean` | Determines if the event is sent to Adobe Target. |
| **`com_adobe_target.propertyToken`** | `string` | The token for the Adobe Target destination property. |
| **`com_adobe_launch_ssf`** | `boolean` | Determines if the event is sent to Server-side forwarding. |

## Configuration overrides using the Web SDK tag extension

The Web SDK tag extension equivalent of this field is under [Configuration overrides](/help/tags/extensions/client/web-sdk/configure/configuration-overrides.md) when configuring the tag extension.
