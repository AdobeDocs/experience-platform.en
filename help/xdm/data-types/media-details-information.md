---
title: Media Details Information Data Type
description: Learn about the Media Details Information Experience Data Model (XDM) data type.
---
# [!UICONTROL Media details information] data type 

[!UICONTROL Media details information] is a standard Experience Data Model (XDM) data type that captures essential details about media playback events. Use the [!UICONTROL Media details information] data type to capture details such as the playhead position within the content, unique session identifiers, and various nested properties related to session, among others. This data type provides a comprehensive overview of the playback experience, that enables the tracking and analysis of media consumption patterns and associated events during playback sessions.

+++Select to display a diagram of the [!UICONTROL Media details information] data type.
![A diagram of the [!UICONTROL Media details information] data type.](../images/data-types/media-details-information.png)
+++

| Display name          | Property        | Data type | Description |
| --------------------- | --------------- | --------- | ----------- |
| [!UICONTROL Playhead] | `playhead` |  integer |  The Playhead represents the current playback position within the media content. For live content, it indicates the current second of the day (0 <= playhead < 86400). For recorded content, it reflects the current second of the content's duration (0 <= playhead < content length).  |
| [!UICONTROL Media Session ID] | `sessionID` |  string |  The Media Session ID uniquely identifies an instance of a content stream during an individual playback session. It serves as a distinctive identifier for tracking and managing the specific playback experience associated with a user or viewer. |
| [!UICONTROL Session Details]  | `sessionDetails` | [[!UICONTROL sessionDetails]](./session-details-information.md)  |  Session Details encompass comprehensive information associated with the experience event, offering insights into user interactions, duration, and contextual data pertinent to the playback session. |
| [!UICONTROL Advertising Details]  | `advertisingDetails` |  [[!UICONTROL advertisingDetails]](./advertising-details-information.md) |  Advertising Details refer to specific information related to advertising activities during the experience event. This includes ad metadata, targeting specifics, and performance metrics. |
| [!UICONTROL Advertising Pod Details]  | `advertisingPodDetails` | [[!UICONTROL advertisingPodDetails]](./advertising-pod-details-information.md)  |  Advertising Pod Details contain information concerning ad pods within the experience event. It provides insights into ad sequence, content, and engagement metrics. |
| [!UICONTROL Chapter Details]  | `chapterDetails` |  [[!UICONTROL chapterDetails]](./chapter-details-information.md) |  Chapter Details captures data related to the chapters or segmented portions of the content. It provides information about chapter markers, timelines, and associated metadata. |
| [!UICONTROL Error Details]  | `errorDetails` |  [[!UICONTROL errorDetails]](./error-details-information.md) |  Error Details contain information pertaining to errors encountered during the experience event. This includes error codes, descriptions, timestamps, and relevant contextual data. |
|  [!UICONTROL Qoe Data Details] | `qoeDataDetails` | [[!UICONTROL qoeDataDetails]](./qoe-data-details-information.md) |  QoE (Quality of Experience) Data Details capture performance-related metrics and user experience data. It provides insights into quality, responsiveness, and user interactions. |
| [!UICONTROL List Of States Start]  | `statesStart` | [[!UICONTROL playerStateData]](./player-state-data-information.md) |  States Start provides an array to list the states at the beginning of the experience event. It features data related to playback, user actions, or content specifics. |
| [!UICONTROL List Of States End]  | `statesEnd` | [[!UICONTROL playerStateData]](./player-state-data-information.md) |  States End provides an array to list the states at the conclusion of the experience event. It contains details about the final playback states or content status. |
|  [!UICONTROL List Of States] | `states` | [[!UICONTROL playerStateData]](./player-state-data-information.md) |  The States property is an array that captures various states throughout the experience event. This property provides sequential data on playback, user actions, or content changes. |
| [!UICONTROL The Custom Metadata]  | `customMetadata` | [[!UICONTROL customMetadataDetails]](./custom-metadata-details-information.md) |  Custom Metadata contains user-defined or additional metadata associated with the experience event. This metadata allows for personalized or specific data to be included in the event context. |

{style="table-layout:auto"}

For more details on the field group, refer to the [public XDM repository](https://github.com/adobe/xdm/blob/master/components/datatypes/mediadetails.schema.json)
