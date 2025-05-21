---
title: Datastream configuration overrides
description: Learn how to configure datastream overrides via the Web SDK.
exl-id: 8e327892-9520-43f5-abf4-d65a5ca34e6d
---
# Configure datastream overrides

The `edgeConfigOverrides` object allows you to override configuration settings for commands run on the current page. This override object is not a command, but rather an object that you can include in most Web SDK commands.

This object is useful when you have different websites or subdomains for different countries, or if you have multiple Experience Platform sandboxes to store data specific to different business units.

>[!IMPORTANT]
>
>For detailed, end-to-end configuration instructions for datastream overrides, see the [datastream configuration overrides](../../datastreams/overrides.md#configure-overrides) documentation.

Datastream configuration override is a two-step process:

1. First, you must define your datastream configuration override in the [datastream configuration page](../../datastreams/configure.md), within the Datastreams UI. See the [datastream configuration overrides](../../datastreams/overrides.md#configure-overrides) documentation for instructions on how to configure overrides.
2. After you have configured the datastream override in the UI, you must send the overrides to the Edge Network in one of the following ways:
    * Through the Web SDK [tag extension](#tag-extension).
    * Through the [`sendEvent`](../commands/sendevent/overview.md) or [`configure`](../commands/configure/overview.md) Web SDK commands.
    * Through the Mobile SDK [`sendEvent`](https://developer.adobe.com/client-sdks/home/getting-started/track-events/#send-events-to-edge-network) command.

If you set overrides both in the Web SDK configuration and in a specific command (such as [`sendEvent`](sendevent/overview.md)), the overrides in the specific command take priority.

>[!NOTE]
>
>If you want a configuration override to *disable* an Experience Cloud service, you must make sure that the service is first *enabled* in the datastream configuration. See the documentation on how to [configure datastreams](../../datastreams/configure.md#add-services) for details on how to add services to a datastream.

## Send datastream overrides to the Edge Network through the Web SDK tag extension {#tag-extension}

See the documentation on [configuring datastream overrides](../../tags/extensions/client/web-sdk/web-sdk-extension-configuration.md#datastrea-overrides) from the Web SDK tag extension for detailed configuration instructions.

If you want to configure datastream overrides from the Web SDK tag extension, set each desired field under **[!UICONTROL Datastream configuration overrides]** when [configuring the tag extension](/help/tags/extensions/client/web-sdk/web-sdk-extension-configuration.md).

1. Log in to [experience.adobe.com](https://experience.adobe.com) using your Adobe ID credentials.
1. Navigate to **[!UICONTROL Data Collection]** > **[!UICONTROL Tags]**.
1. Select the desired tag property.
1. Navigate to **[!UICONTROL Extensions]**, then click **[!UICONTROL Configure]** on the [!UICONTROL Adobe Experience Platform Web SDK] card.
1. Scroll down to the **[!UICONTROL Datastream configuration overrides]** section. Set each desired override value.
1. Click **[!UICONTROL Save]**, then publish your changes.

If you want to set overrides just for a specific command, set each desired field within the actions of a tag rule.

1. Log in to [experience.adobe.com](https://experience.adobe.com) using your Adobe ID credentials.
1. Navigate to **[!UICONTROL Data Collection]** > **[!UICONTROL Tags]**.
1. Select the desired tag property.
1. Navigate to **[!UICONTROL Rules]**, then select the desired rule.
1. Under [!UICONTROL Actions], select an existing action or create an action.
1. Set the [!UICONTROL Extension] dropdown field to **[!UICONTROL Adobe Experience Platform Web SDK]**, and set the [!UICONTROL Action Type] to **[!UICONTROL Send event]**.
1. Scroll down to the section labeled **[!UICONTROL Datastream configuration overrides]**.
1. Set each field in this section to the desired override value.
1. Click **[!UICONTROL Keep Changes]**, then run your publishing workflow.

Separate fields are provided for [!UICONTROL Development], [!UICONTROL Staging], and [!UICONTROL Production] environments. Make sure that you fill in each desired field for each environment.

## Send the overrides to the Edge Network via the Web SDK JavaScript library {#library}

After [configuring the datastream overrides](../../datastreams/overrides.md) in the Data Collection UI, you can now send the overrides to the Edge Network, via the Web SDK JavaScript library.

If you are using Web SDK, sending the overrides to the Edge Network via the `edgeConfigOverrides` command is the second and final step of activating datastream configuration overrides.

The datastream configuration overrides are sent to the Edge Network through the `edgeConfigOverrides` Web SDK command. This command creates datastream overrides that are passed on to the [!DNL Edge Network] on the next command. If you are using the `configure` command, the overrides are passed for every request.

The `edgeConfigOverrides` command creates datastream overrides which are passed on to the [!DNL Edge Network] on the next command. 

When a configuration override is sent with the `configure` command, it is included on the following Web SDK commands.

* [sendEvent](../commands/sendevent/overview.md)
* [setConsent](../commands/setconsent.md)
* [getIdentity](../commands/getidentity.md)
* [appendIdentityToUrl](../commands/appendidentitytourl.md)
* [configure](../commands/configure/overview.md)

Options specified globally can be overridden by the configuration option on individual commands.

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

### Send configuration overrides via the Web SDK `configure` command {#send-configure}

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

