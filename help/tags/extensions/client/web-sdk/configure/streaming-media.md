---
title: Streaming media configuration settings
description: Customize how the Web SDK tag extension collects streaming media data.
exl-id: f486d729-b7ad-4720-8399-71495cb9c57e
TQID: https://experienceleague.adobe.com/Oimv345d5pcvdhA0O4JyayB1Z5ZXXGGak-9tWgkA1Nk
product_v2:
  - id: a829a185-511f-4bf8-8dcf-9e684f8011cf
    internal-label: Advertising
  - id: d0a3eab4-7b10-4d96-a71e-6c0f8e7b7c87
    internal-label: CX Enterprise
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
  - id: ca3d6bf4-a4af-4944-936b-8de1eb09f149
    internal-label: Datastreams
  - id: d9830f6f-ceb6-4faa-9744-f281fe4439f9
    internal-label: Tags
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: bce87dde-a4ab-44c9-8a18-ad66e4ddb377
    internal-label: Customer experience
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
---
# Streaming media configuration settings {#streaming-media}

>[!CONTEXTUALHELP]
>id="platform_tags_websdk_streamingmedia"
>title="Streaming media"
>abstract="Determines how streaming media data is collected during media playback sessions."

The media collection feature helps you collect data related to media sessions, such as media playbacks, pauses, completions, and other related events. Once collected, you can send this data to Adobe Experience Platform or Adobe Analytics to generate reports. This feature provides a comprehensive solution for tracking and understanding media consumption behavior on your website.

1. Log in to [experience.adobe.com](https://experience.adobe.com) using your Adobe ID credentials.
1. Navigate to **[!UICONTROL Data Collection]** > **[!UICONTROL Tags]**.
1. Select the desired tag property.
1. Navigate to **[!UICONTROL Extensions]**, then select **[!UICONTROL Configure]** on the [!UICONTROL Adobe Experience Platform Web SDK] card.
1. Scroll down to the **[!UICONTROL Streaming media]** section.

![Image showing the media collection settings of the Web SDK tag extension in the Tags UI](../assets/media-collection.png)

## Prerequisites

To use the streaming media component of the Web SDK, you must meet the following prerequisites:

* Make sure that you have access to Adobe Experience Platform or Adobe Analytics.
* Enable the **[[!UICONTROL Media Analytics]](/help/datastreams/configure.md#advanced-options)** option for the datastream you are using.
* Ensure that the schema used by your datastream includes the Media Collection schema fields.
* Configure the Streaming Media feature in the Web SDK tag extension, as shown on this page.

## [!UICONTROL Channel]

The name of the channel where media collection occurs. For example, `Video channel`. Any string value is valid.

## [!UICONTROL Player Name]

The name of the media player that your property uses for media playback.

## [!UICONTROL Application Version]

The version of the media player application that your property uses for media playback.

## [!UICONTROL Main ping interval]

The frequency of pings for main content, in seconds. The default value is `10`. Values can range from `10` to `50` seconds. If no value is specified, the default value is used when using [automatically-tracked sessions](/help/collection/js/commands/createmediasession.md#automatic).

## [!UICONTROL Ad ping interval]

The frequency of pings for ad content, in seconds. The default value is `10`. Values can range from `1` to `10` seconds. If no value is specified, the default value is used when using [automatically-tracked sessions](/help/collection/js/commands/createmediasession.md#automatic).
