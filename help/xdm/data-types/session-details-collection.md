---
title: Session Details Collection Data Type
description: Learn about the Session Details Collection Experience Data Model (XDM) data type.
exl-id: ffe6bcf7-61e1-4f7a-ba95-7fcb78683cc9
TQID: https://experienceleague.adobe.com/w2EYDZMD7deZm-pkdsNDtMSm3E3YwyNrVXBGpqTG6pc
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
# [!UICONTROL Session Details] Collection data type

[!UICONTROL Session Details] Collection is a standard Experience Data Model (XDM) data type that tracks data related to media playback sessions. This schema encompasses a wide range of properties that can be used to provide insights into user behavior and content consumption patterns. Use the [!UICONTROL Session Details] Collection data type to capture user engagement by logging playback events, ad interactions, progress markers, pauses, and other metrics.

+++Select to display a diagram of the Session Details Collection data type.
![A diagram of the  Session Details Collection data type.](../images/data-types/session-details-collection.png)
+++

>[!NOTE]
>
>This data type belongs to the `mediaCollection` schema — fields that your implementation sends to the streaming media backend. Adobe processes this data and produces the corresponding `mediaReporting` fields, which are ingested into Platform datasets. See [Streaming media XDM reporting schema](https://experienceleague.adobe.com/en/docs/media-analytics/using/implementation/edge/reporting-schema) for details.

Each display name contains a link to further information on its implementation variable. The linked pages contain details on the data collected by Adobe, implementation values, network parameters, and important considerations.

| Display name | Property | Data type | Required | Description |
|---|---|---|---|---|
| [[!UICONTROL Ad Load Type]](https://experienceleague.adobe.com/en/docs/media-analytics/using/implementation/variables/standard-metadata/ad-load-type) | `adLoad` | String | No | The type of ad loaded as defined by each customer's internal representation. |
| [[!UICONTROL Album]](https://experienceleague.adobe.com/en/docs/media-analytics/using/implementation/variables/standard-metadata/album) | `album` | String | No | The name of the album that the music recording or video belongs to. |
| [[!UICONTROL Artist]](https://experienceleague.adobe.com/en/docs/media-analytics/using/implementation/variables/standard-metadata/artist) | `artist` | String | No | The name of the album artist or group performing the music recording or video. |
| [[!UICONTROL Asset ID]](https://experienceleague.adobe.com/en/docs/media-analytics/using/implementation/variables/standard-metadata/asset-id) | `assetID` | String | No | The [!UICONTROL Asset ID] is the unique identifier for the content of the media asset, such as the TV series episode identifier, movie asset identifier, or live event identifier. Typically these IDs are derived from metadata authorities such as EIDR, TMS/Gracenote, or Rovi. These identifiers can also be from other proprietary or in-house systems. |
| [[!UICONTROL Author]](https://experienceleague.adobe.com/en/docs/media-analytics/using/implementation/variables/standard-metadata/author) | `author` | String | No | The name of the media author. |
| [[!UICONTROL Broadcast Content Type]](https://experienceleague.adobe.com/en/docs/media-analytics/using/implementation/variables/core/content-type) | `contentType` | String | Yes | The [!UICONTROL Broadcast Content Type] of the stream delivery. Available values per [!UICONTROL Stream Type] include:<br>Audio: "song", "podcast", "audiobook", and "radio";<br>Video: "VoD", "Live", "Linear", "UGC", and "DVoD".<br>Customers can provide custom values for this parameter. |
| [[!UICONTROL Broadcast Network]](https://experienceleague.adobe.com/en/docs/media-analytics/using/implementation/variables/standard-metadata/network) | `network` | String | No | The network/channel name. |
| [[!UICONTROL Content Channel]](https://experienceleague.adobe.com/en/docs/media-analytics/using/implementation/variables/core/content-channel) | `channel` | String | Yes | The [!UICONTROL Content Channel] is the distribution channel from where the content was played. |
| [!UICONTROL Content Delivery Network] | `cdn` | String | No | The [!UICONTROL Content Delivery Network] of the content played. |
| [[!UICONTROL Content ID]](https://experienceleague.adobe.com/en/docs/media-analytics/using/implementation/variables/core/content-id) | `name` | string | Yes | The [!UICONTROL Content ID] is a unique identifier of the content. It can be used to link back to other industry or CMS IDs. |
| [[!UICONTROL Content Name]](https://experienceleague.adobe.com/en/docs/media-analytics/using/implementation/variables/core/content-name) | `friendlyName` | String | No | The [!UICONTROL Content Name] is the "friendly" (human-readable) name of the content. |
| [[!UICONTROL Content Player Name]](https://experienceleague.adobe.com/en/docs/media-analytics/using/implementation/variables/core/content-player-name) | `playerName` | String | Yes | The name of the content player. |
| [[!UICONTROL Creator Name]](https://experienceleague.adobe.com/en/docs/media-analytics/using/implementation/variables/standard-metadata/originator) | `originator` | String | No | The name of the content creator. |
| [[!UICONTROL Day Part]](https://experienceleague.adobe.com/en/docs/media-analytics/using/implementation/variables/standard-metadata/day-part) | `dayPart` | String | No | A property that defines the time of the day when the content was broadcast or played. This could have any value set as necessary by customers. |
| [[!UICONTROL Episode Number]](https://experienceleague.adobe.com/en/docs/media-analytics/using/implementation/variables/standard-metadata/episode) | `episode` | String | No | The number of the episode. |
| [[!UICONTROL Feed Type]](https://experienceleague.adobe.com/en/docs/media-analytics/using/implementation/variables/standard-metadata/media-feed-type) | `feed` | String | No | The type of feed, which can either represent actual feed-related data such as EAST HD or SD, or the source of the feed like a URL. |
| [[!UICONTROL First Air Date]](https://experienceleague.adobe.com/en/docs/media-analytics/using/implementation/variables/standard-metadata/first-air-date) | `firstAirDate` | String | No | The date when the content first aired on television. Any date format is acceptable, but Adobe recommends: YYYY-MM-DD. |
| [[!UICONTROL First Digital Date]](https://experienceleague.adobe.com/en/docs/media-analytics/using/implementation/variables/standard-metadata/first-digital-date) | `firstDigitalDate` | String | No | The date when the content first aired on any digital channel or platform. Any date format is acceptable but Adobe recommends: YYYY-MM-DD. |
| [[!UICONTROL Genre]](https://experienceleague.adobe.com/en/docs/media-analytics/using/implementation/variables/standard-metadata/genre) | `genre` | String | No | The type or grouping of content as defined by the content producer. Values should be comma-delimited in variable implementation. |
| [[!UICONTROL Media Authorized]](https://experienceleague.adobe.com/en/docs/media-analytics/using/implementation/variables/standard-metadata/authorized) | `authorized` | String | No | Confirms whether the user has been authorized via Adobe authentication. |
| [[!UICONTROL Media Content Length]](https://experienceleague.adobe.com/en/docs/media-analytics/using/implementation/variables/core/content-length) | `length` | Integer | Yes | The [!UICONTROL Media Content Length] contains the clip length/runtime - This is the maximum length (or duration) of the content being consumed (in seconds). |
| [[!UICONTROL MVPD Identifier]](https://experienceleague.adobe.com/en/docs/media-analytics/using/implementation/variables/standard-metadata/mvpd) | `mvpd` | String | No | The Multi-channel Video Programming Distributor (MVPD) identifier that was provided via Adobe authentication. |
| [[!UICONTROL Publisher]](https://experienceleague.adobe.com/en/docs/media-analytics/using/implementation/variables/standard-metadata/publisher) | `publisher` | String | No | The name of the audio content publisher. |
| [[!UICONTROL Radio Station]](https://experienceleague.adobe.com/en/docs/media-analytics/using/implementation/variables/standard-metadata/station) | `station` | String | No | The radio station name on which the audio is played. |
| [[!UICONTROL Rating Value]](https://experienceleague.adobe.com/en/docs/media-analytics/using/implementation/variables/standard-metadata/content-rating) | `rating` | String | No | The rating as defined by TV Parental Guidelines. |
| [[!UICONTROL Record Label]](https://experienceleague.adobe.com/en/docs/media-analytics/using/implementation/variables/standard-metadata/label) | `label` | String | No | The name of the record label. |
| [[!UICONTROL Resume]](https://experienceleague.adobe.com/en/docs/media-analytics/using/implementation/variables/core/content-resumes) | `hasResume` | Boolean | No | Marks each playback that was resumed after more than 30 minutes of buffer, pause, or stall period. |
| [[!UICONTROL Season Number]](https://experienceleague.adobe.com/en/docs/media-analytics/using/implementation/variables/standard-metadata/season) | `season` | String | No | The [!UICONTROL Season Number] that the show belongs to. Season Series is required only if the show is part of a series. |
| [[!UICONTROL Series Name]](https://experienceleague.adobe.com/en/docs/media-analytics/using/implementation/variables/standard-metadata/show) | `show` | String | No | The Program/Series Name. The Program Name is required only if the show is part of a series. |
| [[!UICONTROL Show Type]](https://experienceleague.adobe.com/en/docs/media-analytics/using/implementation/variables/standard-metadata/show-type) | `showType` | String | No | The type of content. For example, a trailer or a full episode. The type of content is expressed as an integer between 0 and 3. For example, "0" = Full episode; "1" = Preview/trailer; "2" = Clip; "3" = Other. |
| [[!UICONTROL Stream Format]](https://experienceleague.adobe.com/en/docs/media-analytics/using/implementation/variables/standard-metadata/stream-format) | `streamFormat` | String | No | The format of the stream (HD, SD). |
| [[!UICONTROL Stream Type]](https://experienceleague.adobe.com/en/docs/media-analytics/using/implementation/variables/core/stream-type) | `streamType` | String | No | The type of the media stream. |
| [[!UICONTROL Version]](https://experienceleague.adobe.com/en/docs/media-analytics/using/implementation/variables/core/app-version) | `appVersion` | String | No | The version of the media player application. This could have any custom value that makes sense for your player. |
