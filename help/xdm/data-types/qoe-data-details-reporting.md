---
title: QoE (Quality of Experience) Data Details Reporting Data Type
description: Learn about the QoE (Quality of Experience) Data Details Reporting Data Type Experience Data Model (XDM) data type.
exl-id: 608baa9b-12ca-466c-a962-1401abc0344e
TQID: https://experienceleague.adobe.com/PjP7J9X7NTxgltIBhKgxNVJgwVGYR76PgUe6wWOw8kA
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: c20d46e7-1c7d-476c-a50e-3961d4dce35f
    internal-label: Reporting
  - id: daec7ead-f475-492a-a3b3-02ae08565d6f
    internal-label: Implementation
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: aa2f3246-cb95-4b30-8899-fdf7d73550cc
    internal-label: Reporting
  - id: b5ce8718-c3af-4fdb-a1a9-fca32f83a87c
    internal-label: Implementation
  - id: e1e0219c-f879-479f-8427-888ed2a6e9c2
    internal-label: Insights
---
# QoE (Quality of Experience) Data Details Reporting data type

[!UICONTROL QoE Data Details] Reporting is a standard Experience Data Model (XDM) data type that provides detailed metrics related to the quality of experience (QoE) during media playback. Use the [!UICONTROL QoE Data Details] Reporting data type to capture details such as bitrate information, frame rates, buffering events, dropped frames, and so on. This data type enables the analysis of playback quality, allowing for insights into streaming performance, user experience, and potential issues encountered during playback sessions.

+++Select to display the QoE Data Details Reporting data type.
![A diagram of the QoE (Quality of Experience) Data Details Reporting data type.](../images/data-types/qoe-data-details-reporting.png)
+++

>[!NOTE]
>
>This data type belongs to the `mediaReporting` schema — fields computed by the streaming media backend from `mediaCollection` data sent by your implementation. These are the fields that Adobe ingests into Platform datasets. See [Streaming media XDM reporting schema](https://experienceleague.adobe.com/en/docs/media-analytics/using/implementation/edge/reporting-schema) for details.

Each display name contains a link to further information on its reporting dimension or metric. The linked pages contain details on how Adobe computes and reports this data, including breakdowns by reporting system.

| Display name | Property | Data type | Description |
|---|---|---|---|
| [[!UICONTROL Average Bitrate]](https://experienceleague.adobe.com/en/docs/media-analytics/using/reporting/metrics/average-bitrate) | `bitrateAverage` | number | The average bitrate (in kbps, integer). Computed as a weighted average of bitrate values. |
| [[!UICONTROL Average Bitrate Bucket]](https://experienceleague.adobe.com/en/docs/media-analytics/using/reporting/dimensions/average-bitrate) | `bitrateAverageBucket` | string | The average bitrate (in kbps) categorized in predefined buckets at 100kbps intervals. |
| [[!UICONTROL Bitrate]](https://experienceleague.adobe.com/en/docs/media-analytics/using/implementation/variables/quality/bitrate) | `bitrate` | integer | The bitrate value (in kbps). |
| [[!UICONTROL Bitrate Change Impacted Streams]](https://experienceleague.adobe.com/en/docs/media-analytics/using/reporting/metrics/bitrate-change-impacted-streams) | `hasBitrateChangeImpactedStreams` | boolean | Indicates if streams were impacted by bitrate changes during playback. |
| [[!UICONTROL Bitrate Changes]](https://experienceleague.adobe.com/en/docs/media-analytics/using/reporting/metrics/bitrate-changes) | `bitrateChangeCount` | integer | The total count of bitrate changes during playback. |
| [[!UICONTROL Buffer Events]](https://experienceleague.adobe.com/en/docs/media-analytics/using/reporting/metrics/buffer-events) | `bufferCount` | integer | The count of different buffer states during playback. |
| [[!UICONTROL Buffer Impacted Streams]](https://experienceleague.adobe.com/en/docs/media-analytics/using/reporting/metrics/buffer-impacted-streams) | `hasBufferImpactedStreams` | boolean | Indicates if streams were impacted by buffering during playback. |
| [[!UICONTROL Dropped Frame Impacted Streams]](https://experienceleague.adobe.com/en/docs/media-analytics/using/reporting/metrics/dropped-frame-impacted-streams) | `hasDroppedFrameImpactedStreams` | boolean | Indicates if streams were impacted by dropped frames during playback. |
| [[!UICONTROL Dropped Frames]](https://experienceleague.adobe.com/en/docs/media-analytics/using/reporting/metrics/dropped-frames) | `droppedFrames` | integer | The total count of frames dropped during playback. |
| [[!UICONTROL Drops Before Starts]](https://experienceleague.adobe.com/en/docs/media-analytics/using/reporting/metrics/drops-before-start) | `isDroppedBeforeStart` | boolean | Indicates if users quit the video before its start, regardless of ads. |
| [[!UICONTROL Error Impacted Streams]](https://experienceleague.adobe.com/en/docs/media-analytics/using/reporting/metrics/error-impacted-streams) | `hasErrorImpactedStreams` | boolean | Indicates if streams experienced errors during playback. |
| [[!UICONTROL Errors]](https://experienceleague.adobe.com/en/docs/media-analytics/using/reporting/metrics/error-events) | `errorCount` | integer | The total count of errors that occurred during playback. |
| [[!UICONTROL External Error IDs]](https://experienceleague.adobe.com/en/docs/media-analytics/using/reporting/dimensions/external-error-ids) | `externalErrors` | array of strings | Unique error IDs from external sources, e.g., CDN errors. |
| [[!UICONTROL Frames Per Second]](https://experienceleague.adobe.com/en/docs/media-analytics/using/implementation/variables/quality/frames-per-second) | `framesPerSecond` | integer | The current stream frame-rate (in frames per second). |
| [!UICONTROL Media SDK Error IDs] | `mediaSdkErrors` | array of strings | Unique error IDs generated internally by the legacy Heartbeat SDK (Media SDK 1.x–2.x) during playback. No longer collected by current implementations. |
| [[!UICONTROL Player SDK Error IDs]](https://experienceleague.adobe.com/en/docs/media-analytics/using/reporting/dimensions/player-sdk-error-ids) | `playerSdkErrors` | array of strings | Unique error IDs generated by the player SDK during playback. |
| [[!UICONTROL Stalling Events]](https://experienceleague.adobe.com/en/docs/media-analytics/using/reporting/metrics/stall-events) | `stallCount` | integer | The count of stalling events during playback. |
| [[!UICONTROL Stalling Impacted Streams]](https://experienceleague.adobe.com/en/docs/media-analytics/using/reporting/metrics/stall-impacted-streams) | `hasStallImpactedStreams` | boolean | Indicates if streams experienced stalling during playback. |
| [[!UICONTROL Time To Start]](https://experienceleague.adobe.com/en/docs/media-analytics/using/reporting/metrics/time-to-start) | `timeToStart` | integer | Duration (in seconds) between video load and start. |
| [[!UICONTROL Total Buffer Duration]](https://experienceleague.adobe.com/en/docs/media-analytics/using/reporting/metrics/total-buffer-duration) | `bufferTime` | integer | Total time (in seconds) spent buffering during playback. |
| [[!UICONTROL Total Stalling Duration]](https://experienceleague.adobe.com/en/docs/media-analytics/using/reporting/metrics/total-stalling-duration) | `stallTime` | integer | The total time (in seconds) the playback was stalled during playback. |

See [qoedatadetails.schema.json](https://github.com/adobe/xdm/blob/master/components/datatypes/qoedatadetails.schema.json) in the public XDM repository for the full schema definition.
