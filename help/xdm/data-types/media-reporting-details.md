---
title: Media Reporting Details Data Type
description: Learn about the Media Reporting Details Experience Data Model (XDM) data type.
---
# [!UICONTROL Media Reporting Details] data type 

>[!NOTE]
>
>These fields are not used to create requests. Rather, this combined set of fields sent to Adobe Experience Platform or Adobe Analytics are compiled from your request data and metrics added or processed by the server infrastructure.

[!UICONTROL Media Reporting Details] is a standard Experience Data Model (XDM) data type that captures essential details about media playback events. Use the [!UICONTROL Media Reporting Details] data type to capture details such as the playhead position within the content, unique session identifiers, and various nested properties related to session, among others. This data type provides a comprehensive overview of the playback experience, that enables the tracking and analysis of media consumption patterns and associated events during playback sessions.

<!-- What did you mean by #2.a.3 "provide the correct screenshot with the Media Reporting details fields: adStart example" -->

>[!NOTE]
>
>Media Collection fields capture data and send it onto other Adobe services for further processing. Media Reporting fields are used by Adobe services to analyze the Media Collection fields sent by users. This data, alongside other specific user metrics, are computed and reported upon.

+++Select to display a diagram of the [!UICONTROL Media Reporting Details] data type.
![A diagram of the [!UICONTROL Media Reporting Details] data type.](../images/data-types/media-reporting-details.png)
+++

| Display name          | Property        | Data type | Description |
| --------------------- | --------------- | --------- | ----------- |
| [!UICONTROL Advertising Details]  | `advertisingDetails` |  [[!UICONTROL advertisingDetails]](./advertising-details-reporting.md) |  Advertising Details refer to specific information related to advertising activities during the experience event. This includes ad metadata, targeting specifics, and performance metrics. |
| [!UICONTROL Advertising Pod Details]  | `advertisingPodDetails` | [[!UICONTROL advertisingPodDetails]](./advertising-pod-details-reporting.md)  |  Advertising Pod Details contain information concerning ad pods within the experience event. It provides insights into ad sequence, content, and engagement metrics. |
| [!UICONTROL Chapter Details]  | `chapterDetails` |  [[!UICONTROL chapterDetails]](./chapter-details-reporting.md) |  Chapter Details captures data related to the chapters or segmented portions of the content. It provides information about chapter markers, timelines, and associated metadata. |
| [!UICONTROL List Of States] | `states` | [[!UICONTROL playerStateData]](./player-state-data-reporting.md) |  The States property is an array that captures various states throughout the experience event. This property provides sequential data on playback, user actions, or content changes. |
| [!UICONTROL Qoe Data Details] | `qoeDataDetails` | [[!UICONTROL qoeDataDetails]](./qoe-data-details-reporting.md) |  QoE (Quality of Experience) Data Details capture performance-related metrics and user experience data. It provides insights into quality, responsiveness, and user interactions. |
| [!UICONTROL Session Details]  | `sessionDetails` | [[!UICONTROL sessionDetails]](./session-details-reporting.md)  |  Session Details encompass comprehensive information associated with the experience event, offering insights into user interactions, duration, and contextual data pertinent to the playback session. |
| [!UICONTROL The Custom Metadata]  | `customMetadata` | [[!UICONTROL customMetadataDetails]](./custom-metadata-details-reporting.md) |  Custom Metadata contains user-defined or additional metadata associated with the experience event. This metadata allows for personalized or specific data to be included in the event context. |
| [!UICONTROL Playhead] | `playhead` |  integer |  The Playhead represents the current playback position within the media content. For live content, it indicates the current second of the day (0 <= playhead < 86400). For recorded content, it reflects the current second of the content's duration (0 <= playhead < content length).  |

{style="table-layout:auto"}
