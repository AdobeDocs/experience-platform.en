---
title: edgeConfigOverrides
description: Configure datastream overrides for your implementation.
---
# `edgeConfigOverrides`

>[!NOTE] 

The `edgeConfigOverrides` object allows you to override configuration settings for commands run on the current page. This object is useful when you have different websites or subdomains for different countries, or if you have multiple Experience Platform sandboxes to store data specific to different business units.

Datastream configuration override is a two-step process:

1. First, you must define your datastream configuration override when [configuring a datastream](/help/datastreams/configure.md) in the Datastreams UI. See [Datastream configuration overrides](/help/datastreams/overrides.md) in the datastreams documentation for instructions on how to configure overrides.
1. After you have configured the datastream override in the datastreams UI, you can configure the `edgeConfigOverrides` object.


>[!NOTE]
>
>If you want a configuration override to *disable* an Experience Cloud service, you must make sure that the service is first *enabled* in the datastream configuration. See the documentation on how to [configure datastreams](/help/datastreams/configure.md#add-services) for details on how to add services to a datastream.

## Datastream overrides in the `configure` command vs. datastream overrides in other commands

When you set the `edgeConfigOverrides` object in the `configure` command, it applies to the following commands:

* [`sendEvent`](../sendevent/edgeconfigoverrides.md)
* [`setConsent`](../setconsent.md)
* [`getIdentity`](../getidentity.md)
* [`appendIdentityToUrl`](../appendidentitytourl.md)

Each of these commands _also_ support the `edgeConfigOverrides` object. Setting `edgeConfigOverrides` in any of the above commands takes precedence over the `edgeConfigOverrides` object in the `configure` command if both are set.

## Send the overrides to the Edge Network via the Web SDK JavaScript library {#library}

After [configuring the datastream overrides](/help/datastreams/overrides.md) in the Data Collection UI, you can now send the overrides to the Edge Network, via the Web SDK JavaScript library.

If you are using Web SDK, sending the overrides to the Edge Network via the `edgeConfigOverrides` command is the second and final step of activating datastream configuration overrides.

The datastream configuration overrides are sent to the Edge Network through the `edgeConfigOverrides` Web SDK command. This command creates datastream overrides that are passed on to the [!DNL Edge Network] on the next command. If you are using the `configure` command, the overrides are passed for every request.

The `edgeConfigOverrides` command creates datastream overrides which are passed on to the [!DNL Edge Network] on the next command. 

When a configuration override is sent with the `configure` command, it is included on the following Web SDK commands.



Options specified globally can be overridden by the configuration option on individual commands.

The example below shows what a configuration override could look like on a `configure` command.

If your datastream configuration has all supported services enabled, the sample below will override this setting and disable all services (see the `enabled: false` setting on each service).

```js
alloy("configure", {
  orgId: "97D1F3F459CE0AD80A495CBE@AdobeOrg",
  datastreamId: "db9c70a1-6f11-4563-b0e9-b5964ab3a858",
  edgeConfigOverrides: {
    com_adobe_experience_platform: {
      enabled: false,
      datasets: {
        event: {
          datasetId: "64b6f930753dd41ca8d4fd77",
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
      reportSuites: ["ujslconfigoverrides2"],
    },
    com_adobe_identity: {
      idSyncContainerId: 34373,
    },
    com_adobe_target: {
      enabled: false,
      propertyToken: "01dbc634-07c1-d8f9-ca69-b489a5ac5e94",
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
|`orgId`| The IMS Org ID corresponding to your Adobe account.|
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