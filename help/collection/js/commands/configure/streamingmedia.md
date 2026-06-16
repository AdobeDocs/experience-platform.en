---
title: streamingMedia
description: Configure the Web SDK to collect data related to media usage on your web properties.
exl-id: f7733619-d35e-43eb-ac90-052717310c39
TQID: https://experienceleague.adobe.com/p60r5QGs2W6uqX11MNuRA-9keaWhESwZxG3IIiu3Ak4
product_v2:
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
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection
subfeature_v2:
  - id: f6ff4d13-7b5c-4533-8556-95e76673d4cb
    internal-label: Properties
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
---
# `streamingMedia`

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
