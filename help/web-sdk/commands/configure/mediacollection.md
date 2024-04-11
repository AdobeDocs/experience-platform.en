---
title: mediaCollection
description: Configure the Web SDK to collect data related to media usage on your web properties.
---

# `mediacollection`

The `mediaCollection` component helps you collect data related to media sessions on your website. 

The collected data can include information about media playbacks, pauses, completions, and other related events. Once collected, you can send this data to Adobe Experience Platform and/or Adobe Analytics, to generate reports. This feature provides a comprehensive solution for tracking and understanding media consumption behavior on your website.

## Prerequisites {#prerequisites}

To use the `mediacollection` component of Web SDK, you must meet the following prerequisites:

* Make sure you have access to Adobe Experience Platform and/or Adobe Analytics.
* You must use Web SDK version 2.20.0 or later. See the [Web SDK installation overview](../../install/overview.md) to learn how to install the latest version.
* Enable the **[[!UICONTROL Media Analytics]](../../../datastreams/configure.md#advanced-options)** option for the datastream you are using.
* Ensure that the schema used by your datastream includes the Media Collection schema fields.
* Configure the Media Collection feature in the Web SDK configuration, as shown in this page, either through the [tag extension](#tag-extension) or through the [JavaScript library](#library).

## Configure media collection using the Web SDK tag extension {#tag-extension}

To configure media collection in the Web SDK tag extension, follow the steps below.

1. Log in to [experience.adobe.com](https://experience.adobe.com) using your Adobe ID credentials.
1. Navigate to **[!UICONTROL Data Collection]** > **[!UICONTROL Tags]**.
1. Select the desired tag property.
1. Navigate to **[!UICONTROL Extensions]**, then click **[!UICONTROL Configure]** on the [!UICONTROL Adobe Experience Platform Web SDK] card.
1. Configure the **[!UICONTROL Media Collection]** settings as described in the [Web SDK tag extension configuration page](../../../tags/extensions/client/web-sdk/web-sdk-extension-configuration.md#media-collection).



## Configure media collection using the Web SDK JavaScript library {#library}

To configure media collection in Web SDK, use the properties described below.

When calling the `configure` command, add the `mediaCollection` object.

```js
alloy("configure", {
    mediaCollection: {
        channel: "video channel",
        playerName: "test player",
        appVersion: "alloy 2.16.0",
        mainPingInterval: 10,
        adPingInterval: 10
    }
});
```

|Property | Type | Required | Description |
|---------|----------|---------|---------|
| `channel` | String | Yes | The name of the channel where media collection occurs. Example: `Video channel`. |
|`playerName`| String  | Yes | The name of the media player. |
|`appVersion`| String  | No  | The version of the Web SDK used for media collection. |
| `mainPingInterval` | Integer | No | Frequency of pings for main content. The default value is `10`. Values can range from `10` to `50`.  If no value is specified, the default value is used in automatic mode.|
| `adPingInterval`| Integer | No | Frequency of pings for ad content. The default value is `10`. Values can range from `1` to `10`. If no value is specified, the default value is used in automatic mode. |
