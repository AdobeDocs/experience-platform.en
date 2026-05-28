---
title: QoE (Quality of Experience) Data Details Collection Data Type
description: Learn about the QoE (Quality of Experience) Data Details Data Collection Type Experience Data Model (XDM) data type.
exl-id: d99816d9-e207-434a-9a40-ee9ded46c4d2
TQID: https://experienceleague.adobe.com/2FE97ebiyqzEd2NKqoiJ5pNoR6hXezVbK1p6SftHOzc
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: c20d46e7-1c7d-476c-a50e-3961d4dce35f
    internal-label: Reporting
  - id: daec7ead-f475-492a-a3b3-02ae08565d6f
    internal-label: Implementation
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection
subfeature_v2:
  - id: acc16deb-1d7f-4ec9-9ce3-6cdf355afde6
    internal-label: XDM
  - id: de9975b2-c43a-4287-9698-4f4cad92b83f
    internal-label: Schemas
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: aa2f3246-cb95-4b30-8899-fdf7d73550cc
    internal-label: Reporting
  - id: b5ce8718-c3af-4fdb-a1a9-fca32f83a87c
    internal-label: Implementation
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
  - id: e1e0219c-f879-479f-8427-888ed2a6e9c2
    internal-label: Insights
---
# QoE (Quality of Experience) Data Details Collection data type

[!UICONTROL QoE Data Details] Collection is a standard Experience Data Model (XDM) data type provides detailed metrics related to the quality of experience (QoE) during media playback. Use the [!UICONTROL QoE Data Details] Collection data type to capture details such as bitrate information, frame rates, buffering events, dropped frames, and so on. Media collection fields capture data and send it onto other Adobe services for further processing. This data type enables the analysis of playback quality, allowing for insights into streaming performance, user experience, and potential issues encountered during playback sessions.

+++Select to display the QoE Data Details data type.
![A diagram of the QoE (Quality of Experience) Data Details Collection data type.](../images/data-types/qoe-data-details-collection.png)
+++

>[!NOTE]
>
>Each display name contains a link to further information on its audio and video parameters. The linked pages contain details on the video ad data collected by Adobe, implementation values, network parameters, reporting, and important considerations. 

| Display name                                                                                                                                                      | Property                 | Data type | Required | Description                                                                            |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------|-----------|-----------|---------------------------------------------------------------------------------------|
| [[!UICONTROL Bitrate]](https://experienceleague.adobe.com/docs/media-analytics/using/implementation/variables/quality-parameters.html#average-bitrate)            | `bitrate`                | integer   |    No     | The bitrate value (in kbps).                                                                      |
| [[!UICONTROL Dropped Frames]](https://experienceleague.adobe.com/docs/media-analytics/using/implementation/variables/quality-parameters.html#dropped-frames)      | `droppedFrames`          | integer   |    No     | The total count of frames dropped during playback.                                                 |
| [[!UICONTROL Frames Per Second]](https://experienceleague.adobe.com/docs/media-analytics/using/implementation/variables/quality-parameters.html#frames-per-second)| `framesPerSecond`        | integer   |    No     | The current stream frame-rate (in frames per second).                                              |
| [[!UICONTROL Time To Start]](https://experienceleague.adobe.com/docs/media-analytics/using/implementation/variables/quality-parameters.html#time-to-start-1)      | `timeToStart`            | integer   |    No     | Duration (in seconds) between video load and start.                                                |

{style="table-layout:auto"}
