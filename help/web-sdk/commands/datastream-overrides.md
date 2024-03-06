---
title: Datastream configuration overrides
description: Learn how to configure datastream overrides via the Web SDK.
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
    * Through the `sendEvent` or `configure` Web SDK commands.
    * Through the Mobile SDK `sendEvent` command.

If you set overrides both in the Web SDK configuration and in a specific command (such as [`sendEvent`](sendevent/overview.md)), the overrides in the specific command take priority.

## Object properties

The following properties are available within this object:

* **Datastream override**: Send calls to a different datastream. If you set this value, other overrides that require datastream configuration must be configured in the datastream set here.
* **Third-party ID sync container**: The ID for the destination third-party ID sync container in Adobe Audience Manager. Configuring a third-party ID container override in the datastream's settings is required before using this field.
* **Target property token**: The token for the destination property in Adobe Target. Configuring a Target property token override in the datastream's settings is required before using this field.
* **Report suites**: The report suite IDs to override in Adobe Analytics. Configuring report suite overrides in the datastream's settings is required before using this field.

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

The example below shows what a configuration override could look like on a `sendEvent` command.

```js {line-numbers="true" highlight="5-25"}
alloy("sendEvent", {
  xdm: {
    /* ... */
  },
  edgeConfigOverrides: {
    datastreamId: "{DATASTREAM_ID}"
    com_adobe_experience_platform: {
      datasets: {
        event: {
          datasetId: "SampleEventDatasetIdOverride"
        }
      }
    },
    com_adobe_analytics: {
      reportSuites: [
        "MyFirstOverrideReportSuite",
        "MySecondOverrideReportSuite",
        "MyThirdOverrideReportSuite"
        ]
    },
    com_adobe_identity: {
      idSyncContainerId: "1234567"
    },
    com_adobe_target: {
      propertyToken: "63a46bbc-26cb-7cc3-def0-9ae1b51b6c62"
    }
  }
});
```

|Parameter|Description|
|---|---|
|`edgeConfigOverrides.datastreamId`| Use this parameter to allow a single request to go to a different datastream than the one defined by the `configure` command. |
|`com_adobe_analytics.reportSuites[]`| An array of strings that determines to which report suites want to send Analytics data.|
|`com_adobe_identity.idSyncContainerId`| The third-party ID sync container that you want to use in Audience Manager.|
|`com_adobe_target.propertyToken`| The token for the Adobe Target destination property.|

### Send configuration overrides via the Web SDK `configure` command {#send-configure}

The example below shows what a configuration override could look like on a `configure` command.

```js {line-numbers="true" highlight="8-30"}
alloy("configure", {
  defaultConsent: "in",
  edgeDomain: "etc",
  edgeBasePath: "ee",
  datastreamId: "{DATASTREAM_ID}",
  orgId: "org",
  debugEnabled: true,
  edgeConfigOverrides: {
    "com_adobe_experience_platform": {
      "datasets": {
        "event": {
          datasetId: "SampleProfileDatasetIdOverride"
        }
      }
    },
    "com_adobe_analytics": {
      "reportSuites": [
        "MyFirstOverrideReportSuite",
        "MySecondOverrideReportSuite",
        "MyThirdOverrideReportSuite"
      ]
    },
    "com_adobe_identity": {
      "idSyncContainerId": "1234567"
    },
    "com_adobe_target": {
      "propertyToken": "63a46bbc-26cb-7cc3-def0-9ae1b51b6c62"
    }
  },
  onBeforeEventSend: function() { /* … */ });
};
```

|Parameter|Description|
|---|---|
|`edgeConfigOverrides.datastreamId`| Use this parameter to allow a single request to go to a different datastream than the one defined by the `configure` command. |
|`com_adobe_analytics.reportSuites[]`| An array of strings that determines to which report suites want to send Analytics data.|
|`com_adobe_identity.idSyncContainerId`| The third-party ID sync container that you want to use in Audience Manager.|
|`com_adobe_target.propertyToken`| The token for the Adobe Target destination property.|