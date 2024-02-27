---
title: QoE (Quality of Experience) Data Details Collection Data Type
description: Learn about the QoE (Quality of Experience) Data Details Data Collection Type Experience Data Model (XDM) data type.
---
# QoE (Quality of Experience) Data Details Collection data type

[!UICONTROL QoE Data Details] Collection is a standard Experience Data Model (XDM) data type provides detailed metrics related to the quality of experience (QoE) during media playback. Use the [!UICONTROL QoE Data Details] Collection data type to capture details such as bitrate information, frame rates, buffering events, dropped frames, and so on. This data type enables the analysis of playback quality, allowing for insights into streaming performance, user experience, and potential issues encountered during playback sessions.

+++Select to display the QoE Data Details data type.
![A diagram of the QoE (Quality of Experience) Data Details Collection data type.](../images/data-types/qoe-data-details-collection.png)
+++

| Display name                           | Property                 | Data type | Required | Description                                                                            |
|----------------------------------------|--------------------------|-----------|-----------|---------------------------------------------------------------------------------------|
| [!UICONTROL Bitrate]                   | `bitrate`                | integer   |    No     | The bitrate value (in kbps).                                                                      |
| [!UICONTROL Dropped Frames]            | `droppedFrames`          | integer   |    No     | The total count of frames dropped during playback.                                                 |
| [!UICONTROL Average Bitrate Bucket]    | `bitrateAverageBucket`   | string    |    No     | The average bitrate (in kbps) categorized in predefined buckets at 100kbps intervals.            |
| [!UICONTROL Frames Per Second]         | `framesPerSecond`        | integer   |    No     | The current stream frame-rate (in frames per second).                                              |
| [!UICONTROL Time To Start]             | `timeToStart`            | integer   |    No     | Duration (in seconds) between video load and start.                                                |

{style="table-layout:auto"}
