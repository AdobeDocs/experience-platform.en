---
title: Media Details Information Data Type
description: This document provides an overview of the Media Details Information Experience Data Model (XDM) data type.
---
# [!UICONTROL Media Details information] data type

Desscrption

![A diagram of the [!UICONTROL Media details information] data type.](../images/data-types/media-details-information.png)

| Property | Data type | Description |
| --- | --- | --- |
| `playhead` |  integer |  The Playhead represents the current playback position within the media content. For live content, it indicates the current second of the day (0 <= playhead < 86400). For recorded content, it reflects the current second of the content's duration (0 <= playhead < content length).  |
| `sessionID` |  string |  The Media Session ID uniquely identifies an instance of a content stream during an individual playback session. It serves as a distinctive identifier for tracking and managing the specific playback experience associated with a user or viewer. |
| `sessionDetails` | [[!UICONTROL sessionDetails]]()  |  Session Details encompass comprehensive information associated with the experience event, offering insights into user interactions, duration, and contextual data pertinent to the playback session. |
| `advertisingDetails` |  [[!UICONTROL advertisingDetails]]() |  Advertising Details refer to specific information related to advertising activities during the experience event. This includes ad metadata, targeting specifics, and performance metrics. |
| `advertisingPodDetails` | [[!UICONTROL advertisingPodDetails]]()  |  Advertising Pod Details contain information concerning ad pods within the experience event. It provides insights into ad sequence, content, and engagement metrics. |
| `chapterDetails` |  [[!UICONTROL chapterDetails]]() |  Chapter Details captures data related to the chapters or segmented portions of the content. It provides information about chapter markers, timelines, and associated metadata. |
| `errorDetails` |  [[!UICONTROL errorDetails]]() |  Error Details contain information pertaining to errors encountered during the experience event. This includes error codes, descriptions, timestamps, and relevant contextual data. |
| `qoeDataDetails` | [[!UICONTROL qoeDataDetails]]() |  QoE (Quality of Experience) Data Details capture performance-related metrics and user experience data. It provides insights into quality, responsiveness, and user interactions. |
| `statesStart` | [[!UICONTROL playerStateData]]() |  States Start provides an array to list the states at the beginning of the experience event. It features data related to playback, user actions, or content specifics. |
| `statesEnd` | [[!UICONTROL playerStateData]]() |  States End provides an array to list the states at the conclusion of the experience event. It contains details about the final playback states or content status. |
| `states` | [[!UICONTROL playerStateData]]() |  The States property is an array that captures various states throughout the experience event. This property provides sequential data on playback, user actions, or content changes. |
| `customMetadata` | [[!UICONTROL ]](customMetadataDetails) |  Custom Metadata contains user-defined or additional metadata associated with the experience event. This metadata allows for personalized or specific data to be included in the event context. |

{style="table-layout:auto"}

For more details on the field group, refer to the [public XDM repository](https://github.com/adobe/xdm/blob/master/components/datatypes/mediadetails.schema.json)


<!-- 

Media Session ID
Session Details
Advertising Details
Advertising Pod Details
Chapter Details
Error Details
Qoe Data Details
List Of States Start
List Of States End
List Of States
The Custom Metadata -->


<!-- 
Missing stuff
Field groups: 
experienceevent-media-analytics (mediaanalytics-interaction.md)

datatypes: 
advertisingdetails (advertising-details-information.md) "title": "Advertising Details Information"
advertisingpoddetails
chapterdetails
custommetadatadetails
errordetails
playerstatedata
qoedatadetails
sessiondetails
mediaevent
mediadetails 
-->

