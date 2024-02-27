---
title: Session Details Collection Data Type
description: Learn about the Session Details Collection Experience Data Model (XDM) data type.
---
# [!UICONTROL Session Details] Collection data type

[!UICONTROL Session Details] Collection is a standard Experience Data Model (XDM) data type that tracks data related to media playback sessions. The schema encompasses a wide range of properties that provide insights into how media content is consumed. Use the [!UICONTROL Session Details] Collection data type to capture user engagement by logging playback events, ad interactions, progress markers, pauses, and other metrics. This offers valuable insights into user behavior and content consumption patterns.

+++Select to display a diagram of the Session Details Collection data type.
![A diagram of the  Session Details Collection data type.](../images/data-types/session-details-collection.png)
+++

| Display name                           | Property         | Data type | Required | Description                                                                            |
|----------------------------------------|------------------|-----------|----------|---------------------------------------------------------------------------------------|
| [!UICONTROL Ad Load Type]              | `adLoad`         | String    |    No    | The type of ad loaded as defined by each customer's internal representation. | 
|  [!UICONTROL Album]                    | `album`          | String    |   No     | The name of the album that the music recording or video belongs to. | 
| [!UICONTROL Artist]                    | `artist`         | String    |   No     | The name of the album artist or group performing the music recording or video. | 
|  [!UICONTROL Asset ID]                 | `assetID`        | String    |   No     | The [!UICONTROL Asset ID] is the unique identifier for the content of the media asset, such as the TV series episode identifier, movie asset identifier, or live event identifier. Typically these IDs are derived from metadata authorities such as EIDR, TMS/Gracenote, or Rovi. These identifiers can also be from other proprietary or in-house systems. |
|  [!UICONTROL Author]                   | `author`         | String    |    No    |The name of the media author. | 
| [!UICONTROL Broadcast Content Type]    | `contentType`    | String    |   Yes    | The [!UICONTROL Broadcast Content Type] of the stream delivery. Available values per [!UICONTROL Stream Type] include:<br>Audio: "song", "podcast", "audiobook", and "radio";<br>Video: "VoD", "Live", "Linear", "UGC", and "DVoD".<br>Customers can provide custom values for this parameter. |
|  [!UICONTROL Broadcast Network]        | `network`        | String    |    No    | The network/channel name. | 
|  [!UICONTROL Content Channel]          | `channel`        | String    |   Yes    | The [!UICONTROL Content Channel] is the distribution channel from where the content was played. | 
| [!UICONTROL Content Completes]         | `isCompleted`    | Boolean   |    No    | [!UICONTROL Content Completes] indicates if a timed media asset was watched to completion. This event does not necessarily mean that the viewer watched the whole video; the viewer could have skipped ahead. |
| [!UICONTROL Content Delivery Network]  | `cdn`            | String    |    No    | The [!UICONTROL Content Delivery Network] of the content played. | 
| [!UICONTROL Content ID]                | `name`           | string    |   Yes     | The [!UICONTROL Content ID] is a unique identifier of the content. It can be used to link back to other industry or CMS IDs. |
|  [!UICONTROL Content Name]             | `friendlyName`   | String    |   No     | The [!UICONTROL Content Name] is the "friendly" (human-readable) name of the content. | 
|  [!UICONTROL Content Player Name]      | `playerName`     | String    |   Yes    | The name of the content player. | 
| [!UICONTROL  Creator Name]             | `originator`     | String    |    No    | The name of the content creator. | 
|  [!UICONTROL Day Part]                 | `dayPart`        | String    |    No    | A property that defines the time of the day when the content was broadcast or played. This could have any value set as necessary by customers | 
|  [!UICONTROL Episode Number]           | `episode`        | String    |    No    | The number of the episode. | 
|  [!UICONTROL Feed Type]                | `feed`           | String    |    No    | The type of feed, which can either represent actual feed-related data such as EAST HD or SD, or the source of the feed like a URL. |
|  [!UICONTROL First Air Date]           | `firstAirDate`   | String    |    No    | The date when the content first aired on television. Any date format is acceptable, but Adobe recommends: YYYY-MM-DD. |
| [!UICONTROL First Digital Date]        | `firstDigitalDate`| String   |    No    | The date when the content first aired on any digital channel or platform. Any date format is acceptable but Adobe recommends: YYYY-MM-DD. |
|  [!UICONTROL Genre]                    | `genre`          | String    |    No    | The type or grouping of content as defined by the content producer. Values should be comma-delimited in variable implementation.  |
| [!UICONTROL Media Authorized]          | `authorized`     | String    |    No    | Confirms whether the user has been authorized via Adobe authentication. | 
|  [!UICONTROL Media Content Length]     | `length`         | Integer   |   Yes    | The [!UICONTROL Media Content Length] contains the clip length/runtime - This is the maximum length (or duration) of the content being consumed (in seconds). | 
|  [!UICONTROL Media Starts]             | `isViewed`       | Boolean   |    No    | The load event for the media. This occurs when the viewer selects the play button. This counts even if there are pre-roll ads, buffering, errors, and so on. |
|  [!UICONTROL MVPD Identifier]          | `mvpd`           | String    |    No    | The [!UICONTROL MVPD Identifier] that was provided via Adobe authentication. | 
| [!UICONTROL Publisher]                 | `publisher`      | String    |    No    | The name of the audio content publisher. | 
| [!UICONTROL Radio Station]             | `station`        | String    |    No    | The radio station name on which the audio is played. | 
| [!UICONTROL Rating Value]              | `rating`         | String    |    No    | The rating as defined by TV Parental Guidelines. | 
| [!UICONTROL Record Label]              | `label`          | String    |    No    | The name of the record label. | 
|  [!UICONTROL Resume]                   | `hasResume`      | Boolean   |    No    | Marks each playback that was resumed after more than 30 minutes of buffer, pause, or stall period. |
|  [!UICONTROL Season Number]            | `season`         | String    |    No     | The [!UICONTROL Season Number] that the show belongs to. Season Series is required only if the show is part of a series. |
| [!UICONTROL Series Name]               | `show`           | String    |    No    | The Program/Series Name. The Program Name is required only if the show is part of a series. | 
|  [!UICONTROL Show Type]                | `showType`       | String    |    No    | The type of content, for example, trailer or full episode. | 
| [!UICONTROL Stream Format]             | `streamFormat`   | String    |    No    | The format of the stream (HD, SD). | 
|  [!UICONTROL Stream Type]              | `streamType`     | String     |   No    |The type of the media stream. | 
|  [!UICONTROL Version]                  | `appVersion`     | String    |    No    | The SDK version used by the player. This could have any custom value that makes sense for your player. | 

{style="table-layout:auto"}

<!-- This is required for sessionStart. 
Q) How do I indicate that? -->
