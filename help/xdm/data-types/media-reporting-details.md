---
title: Media Reporting Details Data Type
description: Learn about the Media Reporting Details Experience Data Model (XDM) data type.
exl-id: e8bf20a9-9ac0-4339-8200-5d6d9328ce3b
TQID: https://experienceleague.adobe.com/MLC4d9PHdRwITgKnKdm3SUl6PaCNwwY56cvaZN2pNbc
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: c20d46e7-1c7d-476c-a50e-3961d4dce35f
    internal-label: Reporting
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: a004cc84-67b9-4a33-a3a7-8ec7273ef4dc
    internal-label: Metadata
  - id: aa2f3246-cb95-4b30-8899-fdf7d73550cc
    internal-label: Reporting
  - id: e1e0219c-f879-479f-8427-888ed2a6e9c2
    internal-label: Insights
---
# [!UICONTROL Media Reporting Details] data type 

[!UICONTROL Media Reporting Details] is a standard Experience Data Model (XDM) data type that captures essential details about media playback events. Use the [!UICONTROL Media Reporting Details] data type to capture details such as the playhead position within the content, unique session identifiers, and various nested properties related to session, among others. This data type provides a comprehensive overview of the playback experience that enables the tracking and analysis of media consumption patterns and associated events during playback sessions.

>[!NOTE]
>
>This data type belongs to the `mediaReporting` schema — the fields Adobe computes from `mediaCollection` data sent by your implementation and ingests into Platform datasets. These fields are not sent directly from your implementation. While your implementation transmits many event types, Platform ingests records for five key events: `media.sessionStart`, `media.adStart`, `media.adComplete`, `media.chapterComplete`, and `media.sessionComplete`. See [Streaming media XDM reporting schema](https://experienceleague.adobe.com/en/docs/media-analytics/using/implementation/edge/reporting-schema) for details.

+++Select to display a diagram of the [!UICONTROL Media Reporting Details] data type.
![A diagram of the [!UICONTROL Media Reporting Details] data type.](../images/data-types/media-reporting-details.png)
+++

| Display name | Property | Data type | Description |
|---|---|---|---|
| [!UICONTROL Advertising Details] | `advertisingDetails` | [[!UICONTROL advertisingDetails]](./advertising-details-reporting.md) | Advertising Details refer to specific information related to advertising activities during the experience event. This includes ad metadata, targeting specifics, and performance metrics. |
| [!UICONTROL Advertising Pod Details] | `advertisingPodDetails` | [[!UICONTROL advertisingPodDetails]](./advertising-pod-details-reporting.md) | Advertising Pod Details contain information concerning ad pods within the experience event. It provides insights into ad sequence, content, and engagement metrics. |
| [!UICONTROL Chapter Details] | `chapterDetails` | [[!UICONTROL chapterDetails]](./chapter-details-reporting.md) | Chapter Details captures data related to the chapters or segmented portions of the content. It provides information about chapter markers, timelines, and associated metadata. |
| [!UICONTROL List Of States] | `states` | [[!UICONTROL playerStateData]](./player-state-data-reporting.md) | The States property is an array that captures various states throughout the experience event. This property provides sequential data on playback, user actions, or content changes. |
| [!UICONTROL Qoe Data Details] | `qoeDataDetails` | [[!UICONTROL qoeDataDetails]](./qoe-data-details-reporting.md) | QoE (Quality of Experience) Data Details capture performance-related metrics and user experience data. It provides insights into quality, responsiveness, and user interactions. |
| [!UICONTROL Session Details] | `sessionDetails` | [[!UICONTROL sessionDetails]](./session-details-reporting.md) | Session Details encompass comprehensive information associated with the experience event, offering insights into user interactions, duration, and contextual data pertinent to the playback session. |
| [!UICONTROL The Custom Metadata] | `customMetadata` | [[!UICONTROL customMetadataDetails]](./custom-metadata-details-reporting.md) | Custom Metadata contains user-defined or additional metadata associated with the experience event. This metadata allows for personalized or specific data to be included in the event context. |
| [!UICONTROL Playhead] | `playhead` | integer | The Playhead represents the current playback position within the media content. For live content, it indicates the current second of the day (0 <= playhead < 86400). For recorded content, it reflects the current second of the content's duration (0 <= playhead < content length). |

See [mediadetails.schema.json](https://github.com/adobe/xdm/blob/master/components/datatypes/mediadetails.schema.json) in the public XDM repository for the full schema definition.
