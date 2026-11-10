---
title: streamingMedia (Web SDK)
description: Configure the Web SDK to collect data related to media usage on your web properties.
exl-id: f7733619-d35e-43eb-ac90-052717310c39
TQID: 'https://experienceleague.adobe.com/p60r5QGs2W6uqX11MNuRA-9keaWhESwZxG3IIiu3Ak4'
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
  - id: e55547f1-a1ff-40c6-8978-026e40ab7fa4
    internal-label: Analytics
feature_v2:
  - id: d5947817-d24b-4ba3-8126-2c3d66e9422b
    internal-label: Web SDK
  - id: e9dbdbc5-3e52-40f0-a7bc-e18542967b7a
    internal-label: Implementations
subfeature_v2:
  - id: bcc784b7-4ade-4c84-96fa-2f7631b1e5fd
    internal-label: Media Analytics
level_v2:
  - id: b5a62a22-46f7-4f0d-b151-3fc640bef588
    internal-label: Intermediate
topic_v2:
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
  - id: c2be0313-b3ae-45e0-b454-d20bf54b23f2
    internal-label: Measurement
autotag-review: '2026-11-05T22:08:57.077Z'
---
# `streamingMedia` (Web SDK)

The `streamingMedia` component helps you collect data related to media sessions on your website. 

The collected data can include information about media playbacks, pauses, completions, and other related events. Once collected, you can send this data to Adobe Experience Platform or Adobe Analytics to generate reports. This feature provides a comprehensive solution for tracking and understanding media consumption behavior on your website.

## Prerequisites

To use the `streamingMedia` component of the Web SDK, you must meet the following prerequisites:

* Make sure that you have access to Adobe Experience Platform or Adobe Analytics.
* You must use Web SDK version 2.20.0 or later. See the [Web SDK installation overview](../../install/overview.md) to learn how to install the latest version.
* Enable the **[[!UICONTROL Media Analytics]](/help/datastreams/configure.md#advanced-options)** option for the datastream you are using.
* Ensure that the schema used by your datastream includes the Media Collection schema fields.
* Configure the Streaming Media feature in the Web SDK, as shown on this page.

When calling the `configure` command, add the `streamingMedia` object.

```js
alloy("configure", {
    streamingMedia: {
        channel: "Video channel",
        playerName: "Example player",
        appVersion: "Media Analytics with Web SDK 2.20.0",
        mainPingInterval: 10,
        adPingInterval: 10
    }
});
```

| Property | Type | Required | Description |
| --- | --- | --- | --- |
| **`channel`** | String | Yes | The name of the channel where streaming media collection occurs. Example: `Video channel`. |
| **`playerName`** | String | Yes | The name of the media player. |
| **`appVersion`** | String | No | The version of the media player application. |
| **`mainPingInterval`** | Integer | No | Frequency of pings for main content, in seconds. The default value is `10`. Values can range from `10` to `50` seconds.  If no value is specified, the default value is used when using [automatically-tracked sessions](../createmediasession.md#automatic). |
| **`adPingInterval`** | Integer | No | Frequency of pings for ad content, in seconds. The default value is `10`. Values can range from `1` to `10` seconds. If no value is specified, the default value is used when using [automatically-tracked sessions](../createmediasession.md#automatic). |

## Streaming media configuration using the Web SDK tag extension

These settings can be configured in the Web SDK tag extension using [Streaming media configuration settings](/help/tags/extensions/client/web-sdk/configure/streaming-media.md).
