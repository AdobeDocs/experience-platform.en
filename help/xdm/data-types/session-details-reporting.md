---
title: Session Details Reporting Data Type
description: Learn about the Session Details Reporting Experience Data Model (XDM) data type.
exl-id: 8bcaa0d8-2f85-4189-b0b5-8c72ecbb0660
TQID: https://experienceleague.adobe.com/d5up9DXvvwBOczR-nO4p6-LnHyvXF5O89arNJMng9Dk
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
  - id: a004cc84-67b9-4a33-a3a7-8ec7273ef4dc
    internal-label: Metadata
  - id: aa2f3246-cb95-4b30-8899-fdf7d73550cc
    internal-label: Reporting
  - id: b5ce8718-c3af-4fdb-a1a9-fca32f83a87c
    internal-label: Implementation
  - id: e1e0219c-f879-479f-8427-888ed2a6e9c2
    internal-label: Insights
---
# [!UICONTROL Session Details] Reporting data type

[!UICONTROL Session Details] Reporting is a standard Experience Data Model (XDM) data type that tracks data related to media playback sessions. The schema encompasses a wide range of properties that provide insights into user behavior and content consumption patterns. Use the [!UICONTROL Session Details] Reporting data type to capture user engagement by logging playback events, ad interactions, progress markers, pauses, and other metrics.

+++Select to display a diagram of the Session Details Reporting data type.
![A diagram of the  Session Details Reporting data type.](../images/data-types/session-details-reporting.png)
+++

>[!NOTE]
>
>This data type belongs to the `mediaReporting` schema — fields computed by the streaming media backend from `mediaCollection` data sent by your implementation. These are the fields that Adobe ingests into Platform datasets. See [Streaming media XDM reporting schema](https://experienceleague.adobe.com/en/docs/media-analytics/using/implementation/edge/reporting-schema) for details.

Each display name contains a link to further information on its reporting dimension or metric. The linked pages contain details on how Adobe computes and reports this data, including breakdowns by reporting system.

| Display name | Property | Data type | Description |
|---|---|---|---|
| [[!UICONTROL 10% Progress Marker]](https://experienceleague.adobe.com/en/docs/media-analytics/using/reporting/metrics/progress-markers) | `hasProgress10` | Boolean | Indicates that the playhead passed the 10% marker of media based on stream length. The marker is only counted once, even if seeking backward. If seeking forward, markers that are skipped are not counted. |
| [[!UICONTROL 25% Progress Marker]](https://experienceleague.adobe.com/en/docs/media-analytics/using/reporting/metrics/progress-markers) | `hasProgress25` | Boolean | Indicates that the playhead passed the 25% marker of media based on stream length. The marker is only counted once, even if seeking backward. If seeking forward, markers that are skipped are not counted. |
| [[!UICONTROL 50% Progress Marker]](https://experienceleague.adobe.com/en/docs/media-analytics/using/reporting/metrics/progress-markers) | `hasProgress50` | Boolean | Indicates that the playhead passed the 50% marker of media based on stream length. The marker is only counted once, even if seeking backward. If seeking forward, markers that are skipped are not counted. |
| [[!UICONTROL 75% Progress Marker]](https://experienceleague.adobe.com/en/docs/media-analytics/using/reporting/metrics/progress-markers) | `hasProgress75` | Boolean | Indicates that the playhead passed the 75% marker of media based on stream length. The marker is only counted once, even if seeking backward. If seeking forward, markers that are skipped are not counted. |
| [[!UICONTROL 95% Progress Marker]](https://experienceleague.adobe.com/en/docs/media-analytics/using/reporting/metrics/progress-markers) | `hasProgress95` | Boolean | Indicates that the playhead passed the 95% marker of media based on stream length. The marker is only counted once, even if seeking backward. If seeking forward, markers that are skipped are not counted. |
| [[!UICONTROL Ad Count]](https://experienceleague.adobe.com/en/docs/media-analytics/using/reporting/metrics/ad-count) | `adCount` | Integer | The number of ads started during the playback. |
| [[!UICONTROL Ad Load Type]](https://experienceleague.adobe.com/en/docs/media-analytics/using/reporting/dimensions/ad-load-type) | `adLoad` | String | The type of ad loaded as defined by each customer's internal representation. |
| [[!UICONTROL Album]](https://experienceleague.adobe.com/en/docs/media-analytics/using/reporting/dimensions/album) | `album` | String | The name of the album that the music recording or video belongs to. |
| [[!UICONTROL Artist]](https://experienceleague.adobe.com/en/docs/media-analytics/using/reporting/dimensions/artist) | `artist` | String | The name of the album artist or group performing the music recording or video. |
| [[!UICONTROL Asset ID]](https://experienceleague.adobe.com/en/docs/media-analytics/using/reporting/dimensions/asset-id) | `assetID` | String | The [!UICONTROL Asset ID] is the unique identifier for the content of the media asset, such as the TV series episode identifier, movie asset identifier, or live event identifier. Typically these IDs are derived from metadata authorities such as EIDR, TMS/Gracenote, or Rovi. These identifiers can also be from other proprietary or in-house systems. |
| [[!UICONTROL Author]](https://experienceleague.adobe.com/en/docs/media-analytics/using/reporting/dimensions/author) | `author` | String | The name of the media author. |
| [[!UICONTROL Average Minute Audience]](https://experienceleague.adobe.com/en/docs/media-analytics/using/reporting/metrics/average-minute-audience) | `averageMinuteAudience` | Number | Describes the average content time spent for a specific media item - that is, the total content time spent divided by the length of all of the playback sessions. |
| [[!UICONTROL Broadcast Content Type]](https://experienceleague.adobe.com/en/docs/media-analytics/using/reporting/dimensions/content-type) | `contentType` | String | The [!UICONTROL Broadcast Content Type] of the stream delivery. Available values per [!UICONTROL Stream Type] include:<br>Audio: "song", "podcast", "audiobook", and "radio";<br>Video: "VoD", "Live", "Linear", "UGC", and "DVoD".<br>Customers can provide custom values for this parameter. |
| [[!UICONTROL Broadcast Network]](https://experienceleague.adobe.com/en/docs/media-analytics/using/reporting/dimensions/network) | `network` | String | The network/channel name. |
| [[!UICONTROL Chapter Count]](https://experienceleague.adobe.com/en/docs/media-analytics/using/reporting/metrics/chapter-count) | `chapterCount` | Integer | The number of chapters started during the playback. |
| [[!UICONTROL Content Channel]](https://experienceleague.adobe.com/en/docs/media-analytics/using/reporting/dimensions/content-channel) | `channel` | String | The [!UICONTROL Content Channel] is the distribution channel from where the content was played. |
| [[!UICONTROL Content Completes]](https://experienceleague.adobe.com/en/docs/media-analytics/using/reporting/metrics/content-completes) | `isCompleted` | Boolean | [!UICONTROL Content Completes] indicates if a timed media asset was watched to completion. This event does not necessarily mean that the viewer watched the whole video; the viewer could have skipped ahead. |
| [!UICONTROL Content Delivery Network] | `cdn` | String | The content delivery network of the content played. |
| [[!UICONTROL Content ID]](https://experienceleague.adobe.com/en/docs/media-analytics/using/reporting/dimensions/content) | `name` | String | The [!UICONTROL Content ID] is a unique identifier of the content. It can be used to link back to other industry or CMS IDs. |
| [[!UICONTROL Content Name]](https://experienceleague.adobe.com/en/docs/media-analytics/using/reporting/dimensions/content-name) | `friendlyName` | String | The [!UICONTROL Content Name] is the "friendly" (human-readable) name of the content. |
| [[!UICONTROL Content Player Name]](https://experienceleague.adobe.com/en/docs/media-analytics/using/reporting/dimensions/content-player-name) | `playerName` | String | The name of the content player. |
| [[!UICONTROL Content Starts]](https://experienceleague.adobe.com/en/docs/media-analytics/using/reporting/metrics/content-starts) | `isPlayed` | Boolean | [!UICONTROL Content Starts] becomes true when the first frame of media is consumed. If the user drops during an ad, buffering, and so on, then there would be no [!UICONTROL Content Starts] event. |
| [[!UICONTROL Content Time Spent]](https://experienceleague.adobe.com/en/docs/media-analytics/using/reporting/metrics/content-time-spent) | `timePlayed` | Integer | [!UICONTROL Content Time Spent] sums the event duration (in seconds) for all events of type PLAY on the main content. |
| [[!UICONTROL Creator Name]](https://experienceleague.adobe.com/en/docs/media-analytics/using/reporting/dimensions/originator) | `originator` | String | The name of the content creator. |
| [[!UICONTROL Day Part]](https://experienceleague.adobe.com/en/docs/media-analytics/using/reporting/dimensions/day-part) | `dayPart` | String | A property that defines the time of the day when the content was broadcast or played. This could have any value set as necessary by customers. |
| [[!UICONTROL Episode Number]](https://experienceleague.adobe.com/en/docs/media-analytics/using/reporting/dimensions/episode) | `episode` | String | The number of the episode. |
| [[!UICONTROL Estimated Streams]](https://experienceleague.adobe.com/en/docs/media-analytics/using/reporting/metrics/estimated-streams) | `estimatedStreams` | Number | The estimated number of video or audio streams for each individual piece of content. |
| [[!UICONTROL Federated Data]](https://experienceleague.adobe.com/en/docs/media-analytics/using/reporting/metrics/federated-data) | `isFederated` | Boolean | [!UICONTROL Federated Data] is set to true when the hit is federated (that is, received by the customer as part of a federated data share, rather than their own implementation). |
| [[!UICONTROL Feed Type]](https://experienceleague.adobe.com/en/docs/media-analytics/using/reporting/dimensions/media-feed-type) | `feed` | String | The type of feed, which can either represent actual feed-related data such as EAST HD or SD, or the source of the feed like a URL. |
| [[!UICONTROL First Air Date]](https://experienceleague.adobe.com/en/docs/media-analytics/using/reporting/dimensions/first-air-date) | `firstAirDate` | String | The date when the content first aired on television. Any date format is acceptable, but Adobe recommends: YYYY-MM-DD. |
| [[!UICONTROL First Digital Date]](https://experienceleague.adobe.com/en/docs/media-analytics/using/reporting/dimensions/first-digital-date) | `firstDigitalDate` | String | The date when the content first aired on any digital channel or platform. Any date format is acceptable but Adobe recommends: YYYY-MM-DD. |
| [[!UICONTROL Genre]](https://experienceleague.adobe.com/en/docs/media-analytics/using/reporting/dimensions/genre) | `genre` | String | The type or grouping of content as defined by the content producer. Values should be comma-delimited in variable implementation. |
| [[!UICONTROL Media Authorized]](https://experienceleague.adobe.com/en/docs/media-analytics/using/reporting/metrics/authorized) | `authorized` | String | Confirms whether the user has been authorized via Adobe authentication. |
| [[!UICONTROL Media Content Length]](https://experienceleague.adobe.com/en/docs/media-analytics/using/reporting/dimensions/content-length) | `length` | Integer | The [!UICONTROL Media Content Length] contains the clip length/runtime - This is the maximum length (or duration) of the content being consumed (in seconds). |
| [[!UICONTROL Media Downloaded Flag]](https://experienceleague.adobe.com/en/docs/media-analytics/using/reporting/dimensions/media-downloaded-flag) | `isDownloaded` | Boolean | The stream was played locally on the device after being downloaded. |
| [[!UICONTROL Media Segment Views]](https://experienceleague.adobe.com/en/docs/media-analytics/using/reporting/metrics/content-segment-views) | `hasSegmentView` | Boolean | [!UICONTROL Media Segment Views] indicates when at least one frame, not necessarily the first, has been viewed. |
| [[!UICONTROL Media Session ID]](https://experienceleague.adobe.com/en/docs/media-analytics/using/reporting/dimensions/media-session-id) | `ID` | String | The [!UICONTROL Media Session ID] identifies an instance of a content stream unique to an individual playback.<br><em>Note:<em>`sessionId` is sent on all events, except for `sessionStart` and for all downloaded events. |
| [!UICONTROL Media Session Server Timeout] | `secondsSinceLastCall` | Number | The [!UICONTROL Media Session Server Timeout] indicates the amount of time, in seconds, that passed between the user's last known interaction and the moment the session was closed. |
| [[!UICONTROL Media Starts]](https://experienceleague.adobe.com/en/docs/media-analytics/using/reporting/metrics/media-starts) | `isViewed` | Boolean | The load event for the media. This occurs when the viewer selects the play button. This counts even if there are pre-roll ads, buffering, errors, and so on. |
| [[!UICONTROL Media Time Spent]](https://experienceleague.adobe.com/en/docs/media-analytics/using/reporting/metrics/media-time-spent) | `totalTimePlayed` | Integer | Describes the total amount of time spent by a user on a specific timed media asset, which includes time spent watching ads. |
| [[!UICONTROL MVPD Identifier]](https://experienceleague.adobe.com/en/docs/media-analytics/using/reporting/dimensions/mvpd) | `mvpd` | String | The [!UICONTROL MVPD Identifier] that was provided via Adobe authentication. |
| [[!UICONTROL Pause Events]](https://experienceleague.adobe.com/en/docs/media-analytics/using/reporting/metrics/pause-events) | `pauseCount` | Integer | [!UICONTROL Pause Events] counts the number of pause periods that occurred during playback. |
| [[!UICONTROL Pause Impacted Streams]](https://experienceleague.adobe.com/en/docs/media-analytics/using/reporting/metrics/paused-impacted-streams) | `hasPauseImpactedStreams` | Boolean | Indicates if one or more pauses occurred during the playback of a single media item. |
| [!UICONTROL Pccr] | `pccr` | Boolean | A legacy data collection query parameter automatically set to `true` for new visitors. Prevents infinite redirect loops when a visitor rejects cookies. |
| [!UICONTROL Pev3] | `pev3` | String | A legacy data collection query parameter previously used to track video milestones. No longer used. |
| [[!UICONTROL Publisher]](https://experienceleague.adobe.com/en/docs/media-analytics/using/reporting/dimensions/publisher) | `publisher` | String | The name of the audio content publisher. |
| [[!UICONTROL Radio Station]](https://experienceleague.adobe.com/en/docs/media-analytics/using/reporting/dimensions/station) | `station` | String | The radio station name on which the audio is played. |
| [[!UICONTROL Rating Value]](https://experienceleague.adobe.com/en/docs/media-analytics/using/reporting/dimensions/content-rating) | `rating` | String | The rating as defined by TV Parental Guidelines. |
| [[!UICONTROL Record Label]](https://experienceleague.adobe.com/en/docs/media-analytics/using/reporting/dimensions/label) | `label` | String | The name of the record label. |
| [[!UICONTROL Resume]](https://experienceleague.adobe.com/en/docs/media-analytics/using/reporting/metrics/content-resumes) | `hasResume` | Boolean | Marks each playback that was resumed after more than 30 minutes of buffer, pause, or stall period. |
| [[!UICONTROL Season Number]](https://experienceleague.adobe.com/en/docs/media-analytics/using/reporting/dimensions/season) | `season` | String | The [!UICONTROL Season Number] that the show belongs to. Season Series is required only if the show is part of a series. |
| [[!UICONTROL Series Name]](https://experienceleague.adobe.com/en/docs/media-analytics/using/reporting/dimensions/show) | `show` | String | The Program/Series Name. The Program Name is required only if the show is part of a series. |
| [[!UICONTROL Show Type]](https://experienceleague.adobe.com/en/docs/media-analytics/using/reporting/dimensions/show-type) | `showType` | String | The type of content, for example, trailer or full episode. |
| [[!UICONTROL Stream Format]](https://experienceleague.adobe.com/en/docs/media-analytics/using/reporting/dimensions/stream-format) | `streamFormat` | String | The format of the stream (HD, SD). |
| [[!UICONTROL Stream Type]](https://experienceleague.adobe.com/en/docs/media-analytics/using/reporting/dimensions/stream-type) | `streamType` | String | The type of the media stream. |
| [[!UICONTROL Total Pause Duration]](https://experienceleague.adobe.com/en/docs/media-analytics/using/reporting/metrics/total-pause-duration) | `pauseTime` | Integer | [!UICONTROL Total Pause Duration] describes the duration in seconds in which playback was paused by the user. |
| [[!UICONTROL Unique Time Played]](https://experienceleague.adobe.com/en/docs/media-analytics/using/reporting/metrics/unique-time-played) | `uniqueTimePlayed` | Integer | Describes the sum of the unique intervals seen by a user on a timed media asset - that is, the length playback intervals viewed multiple times are only counted once. |
| [[!UICONTROL Version]](https://experienceleague.adobe.com/en/docs/media-analytics/using/reporting/dimensions/app-version) | `appVersion` | String | The version of the media player application. This could have any custom value that makes sense for your player. |
| [[!UICONTROL Video Segment]](https://experienceleague.adobe.com/en/docs/media-analytics/using/reporting/dimensions/content-segment) | `segment` | String | The interval that describes the part of the content that has been viewed in minutes. |
