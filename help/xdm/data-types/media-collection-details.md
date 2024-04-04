---
title: Media Collection Details Data Type
description: Learn about the Media Collection Details Experience Data Model (XDM) data type.
exl-id: 1faf60f7-6afb-4ce2-b50d-967776a57715
---
# [!UICONTROL Media Collection Details] data type 

[!UICONTROL Media Collection Details] is a standard Experience Data Model (XDM) data type that captures essential details about media playback events. Use the [!UICONTROL Media Collection Details] data type to capture details such as the playhead position within the content, unique session identifiers, and various nested properties related to session, among others. This data type provides a comprehensive overview of the playback experience that enables the tracking and analysis of media consumption patterns and associated events during playback sessions.

>[!NOTE]
>
>Media Collection fields capture data and send it onto other Adobe services for further processing. Media Reporting fields are used by Adobe services to analyze the Media Collection fields sent by users. This data, alongside other specific user metrics, are computed and reported upon.

+++Select to display a diagram of the [!UICONTROL Media Collection details] data type.
![A diagram of the [!UICONTROL Media Collection details information] data type.](../images/data-types/media-collection-details.png)
+++

| Display name                         | Property                | Events required for                                        | Data type | Description |
| ------------------------------------ | ----------------------- | ---------------------------------------------------------- | --------- | ----------- |
| [!UICONTROL Advertising Details]     | `advertisingDetails`    |  `adStart`                                                 | [[!UICONTROL advertisingDetails] - Collection](./advertising-details-collection.md)        |  Advertising Details refer to specific information related to advertising activities during the experience event. This includes ad metadata, targeting specifics, and performance metrics. |
| [!UICONTROL Advertising Pod Details] | `advertisingPodDetails` |  `adBreakStart`                                            | [[!UICONTROL advertisingPodDetails] - Collection](./advertising-pod-details-collection.md) |  Advertising Pod Details contain information concerning ad pods within the experience event. It provides insights into ad sequence, content, and engagement metrics. |
| [!UICONTROL Chapter Details]         | `chapterDetails`        |  `chapterStart`                                            |  [[!UICONTROL chapterDetails] - Collection](./chapter-details-collection.md)               |  Chapter Details captures data related to the chapters or segmented portions of the content. It provides information about chapter markers, timelines, and associated metadata. |
| [!UICONTROL Error Details]           | `errorDetails`          |   `error`                                                  |  [[!UICONTROL errorDetails] - Collection](./error-details-collection.md)                   |  Error Details contain information pertaining to errors encountered during the experience event. This includes error codes, descriptions, timestamps, and relevant contextual data. |
| [!UICONTROL List Of States End]      | `statesEnd`             |   Used in `statesUpdate`                                   |[[!UICONTROL statesEnd] - Collection](./list-of-states-end-collection.md)                   |  States End provides an array to list the states at the conclusion of the experience event. It contains details about the final playback states or content status. |
| [!UICONTROL List Of States Start]    | `statesStart`           |   Used in `statesUpdate`                                   | [[!UICONTROL statesStart] - Collection](./list-of-states-start-collection.md)              |  States Start provides an array to list the states at the beginning of the experience event. It features data related to playback, user actions, or content specifics. |
| [!UICONTROL Qoe Data Details]        | `qoeDataDetails`        |   Optional for all                                         | [[!UICONTROL qoeDataDetails] - Collection](./qoe-data-details-collection.md)               |  QoE (Quality of Experience) Data Details capture performance-related metrics and user experience data. It provides insights into quality, responsiveness, and user interactions. |
| [!UICONTROL Session Details]         | `sessionDetails`        |  `sessionStart`                                            | [[!UICONTROL sessionDetails] - Collection](./session-details-collection.md)                |  Session Details encompass comprehensive information associated with the experience event, offering insights into user interactions, duration, and contextual data pertinent to the playback session. |
| [!UICONTROL The Custom Metadata]     | `customMetadata`        |   Optional for `sessionStart`, `adStart`, `sessionStart`   | [[!UICONTROL customMetadataDetails] - Collection](./custom-metadata-details-collection.md) |  Custom Metadata contains user-defined or additional metadata associated with the experience event. This metadata allows for personalized or specific data to be included in the event context. |
| [!UICONTROL Media Session ID]        | `sessionID`             |All events **except** `sessionStart` and downloaded content.|  string                                                                                    |  The Media Session ID uniquely identifies an instance of a content stream during an individual playback session. It serves as a distinctive identifier for tracking and managing the specific playback experience associated with a user or viewer.<br><em>Note:<em>`sessionId` is sent on all events, except for `sessionStart` and for all downloaded events. |
| [!UICONTROL Playhead]                | `playhead`              |   All events                                               | integer                                                                                    |  The Playhead represents the current playback position within the media content. For live content, it indicates the current second of the day (0 <= playhead < 86400). For recorded content, it reflects the current second of the content's duration (0 <= playhead < content length).  |

{style="table-layout:auto"}
