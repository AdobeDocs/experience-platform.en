---
title: streamingMedia
description: Configure the Web SDK to collect data related to media usage on your web properties.
exl-id: f7733619-d35e-43eb-ac90-052717310c39
---
# `streamingMedia`

The `streamingMedia` component helps you collect data related to media sessions on your website. 

The collected data can include information about media playbacks, pauses, completions, and other related events. Once collected, you can send this data to Adobe Experience Platform and/or Adobe Analytics, to generate reports. This feature provides a comprehensive solution for tracking and understanding media consumption behavior on your website.

## Prerequisites {#prerequisites}

To use the `streamingMedia` component of Web SDK, you must meet the following prerequisites:

* Make sure you have access to Adobe Experience Platform and/or Adobe Analytics.
* You must use Web SDK version 2.20.0 or later. See the [Web SDK installation overview](../../install/overview.md) to learn how to install the latest version.
* Enable the **[[!UICONTROL Media Analytics]](../../../datastreams/configure.md#advanced-options)** option for the datastream you are using.
* Ensure that the schema used by your datastream includes the Media Collection schema fields.
* Configure the Streaming Media feature in the Web SDK configuration, as shown in this page, either through the [tag extension](#tag-extension) or through the [JavaScript library](#library).

## Configure streaming media using the Web SDK tag extension {#tag-extension}

To configure streaming media in the Web SDK tag extension, follow the steps below.

1. Log in to [experience.adobe.com](https://experience.adobe.com) using your Adobe ID credentials.
1. Navigate to **[!UICONTROL Data Collection]** > **[!UICONTROL Tags]**.
1. Select the desired tag property.
1. Navigate to **[!UICONTROL Extensions]**, then click **[!UICONTROL Configure]** on the [!UICONTROL Adobe Experience Platform Web SDK] card.
1. Configure the **[!UICONTROL Streaming Media]** settings as described in the [Web SDK tag extension configuration page](../../../tags/extensions/client/web-sdk/web-sdk-extension-configuration.md#media-collection).

## Configure streaming media using the Web SDK JavaScript library {#library}

To configure streaming media in Web SDK, use the properties described below.

When calling the `configure` command, add the `streamingMedia` object.

```js
alloy("configure", {
    streamingMedia: {
        channel: "video channel",
        playerName: "test player",
        appVersion: "Media Analytics with Web SDK 2.20.0",
        mainPingInterval: 10,
        adPingInterval: 10
    }
});
```

|Property | Type | Required | Description |
|---------|----------|---------|---------|
| `channel` | String | Yes | The name of the channel where streaming media collection occurs. Example: `Video channel`. |
| `playerName`| String  | Yes | The name of the media player. |
| `appVersion`| String  | No  | The version of the media player application. |
| `mainPingInterval` | Integer | No | Frequency of pings for main content, in seconds. The default value is `10`. Values can range from `10` to `50` seconds.  If no value is specified, the default value is used when using [automatically-tracked sessions](../createmediasession.md#automatic).|
| `adPingInterval`| Integer | No | Frequency of pings for ad content, in seconds. The default value is `10`. Values can range from `1` to `10` seconds. If no value is specified, the default value is used when using [automatically-tracked sessions](../createmediasession.md#automatic). |
