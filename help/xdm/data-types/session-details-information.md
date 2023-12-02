---
title: Session Details Information Data Type
description: This document provides an overview of the Session Details Information Experience Data Model (XDM) data type.
---
# [!UICONTROL Session Details Information] data type

[!UICONTROL Session Details Information] is a standard Experience Data Model (XDM) data type that describes ...

![A diagram of the  Session Details Information data type.]()

| Property | Data type | Description |
| --- | --- | --- |
| Property | Data type | Description |
| --- | --- | --- |
| `ID` | string |  The Media Session ID identifies an instance of a content stream unique to an individual playback. |
| `name` | string  | **Required** The Content ID is a unique identifier of the content. It can be used to link back to other industry or CMS IDs. |
| `friendlyName` | String | This is the "friendly" (human-readable) name of the content. | 
| `length` | Integer | **Required** Clip Length/Runtime - This is the maximum length (or duration) of the content being consumed (in seconds). | 
| `contentType` | String | **Required** The type of the stream delivery. Available values per Stream Type: Audio: "song", "podcast", "audiobook", "radio";  Video: "VoD", "Live", "Linear", "UGC", "DVoD". Customers can provide custom values for this parameter |
| `playerName` | String | **Required**  Name of the content player. | 
| `channel` | String | **Required** Distribution channel from where the content was played. | 
| `appVersion` | String | The SDK version used by the player. This could have any custom value that makes sense for your player. | 
| `show` | String | Program/Series Name. Program Name is required only if the show is part of a series. | 
| `season` | String  | The season number that the show belongs to. Season Series is required only if the show is part of a series. |
| `episode` | String | The number of the episode. | 
| `assetID` | String  | This is the unique identifier for the content of the media asset, such as the TV series episode identifier, movie asset identifier, or live event identifier. Typically these IDs are derived from metadata authorities such as EIDR, TMS/Gracenote, or Rovi. These identifiers can also be from other proprietary or in-house systems. |
| `genre` | String | Type or grouping of content as defined by content producer. Values should be comma-delimited in variable implementation.  |
| `firstAirDate` | String | The date when the content first aired on television. Any date format is acceptable, but Adobe recommends: YYYY-MM-DD. |
| `firstDigitalDate` | String | The date when the content first aired on any digital channel or platform. Any date format is acceptable but Adobe recommends: YYYY-MM-DD. |
| `rating` | String | Rating as defined by TV Parental Guidelines. | 
| `originator` | String | Creator of the content. | 
| `network` | String | The network/channel name. | 
| `showType` | String | The type of content, for example, trailer or full episode. | 
| `adLoad` | String | The type of ad loaded as defined by each customer's internal representation. | 
| `mvpd` | String | MVPD provided via Adobe authentication. | 
| `authorized` | String | The user has been authorized via Adobe authentication. | 
| `dayPart` | String | A property that defines the time of the day when the content was broadcast or played. This could have any value set as necessary by customers | 
| `feed` | String | The type of feed, which can either represent actual feed-related data such as  EAST HD or SD, or the source of the feed like a URL. |
| `streamFormat` | String | Format of the stream (HD, SD). | 
| `hasResume` | Boolean  | Marks each playback that was resumed after more than 30 minutes of buffer, pause, or stall period. |
| `streamType` | String | The type of the media stream. | 
| `artist` | String | The name of the album artist or group performing the music recording or video. | 
| `album` | String | The name of the album that the music recording or video belongs to. | 
| `label` | String | Name of the record label. | 
| `author` | String | Name of the media author. | 
| `station` | String | The radio station name on which the audio is played. | 
| `publisher` | String | Name of the audio content publisher. | 
| `segment` | String | The interval that describes the part of the content that has been viewed in minutes. | 
| `isDownloaded` | Boolean | The stream was played locally on the device after being downloaded. | 
| `isFederated` | Boolean | Set to true when the hit is federated (that is, received by the customer as part of a federated data share, rather than their own implementation). |
| `isViewed` | Boolean | Load event for the media. (This occurs when the viewer clicks the Play button). This would count even if there are pre-roll ads, buffering, errors, and so on. |
| `isPlayed` | Boolean | First frame of media is consumed. If the user drops during ad, buffering, and so on, then there would be no "Content Start" event."  |
`isCompleted` | Boolean | Indicates if a timed media asset was watched to completion, this does not necessarily mean that the viewer watched the whole video; viewer could have skipped ahead. |
| `timePlayed` | Integer | Sums the event duration (in seconds) for all events of type PLAY on the main content. | 
| `totalTimePlayed` | Integer | Describes the total amount of time spent by a user on a specific timed media asset, which includes time spent watching ads. | 
| `uniqueTimePlayed` | Integer | Describes the sum of the unique intervals seen by a user on a timed media asset - that is, the length playback intervals viewed multiple times are only counted once. | 
| `averageMinuteAudience`| Number | Describes the average content time spent for a specific media item - that is, the total content time spent divided by the length for all of the playback sessions. |
| `adCount` | Integer | The number of ads started during the playback. | 
| `chapterCount` | Integer | The number of chapters started during the playback. | 
| `hasProgress10` | Boolean | Indicates that the playhead passed the 10% marker of media based on stream length. The marker is only counted once, even if seeking backwards. If seeking forward, markers that are skipped are not counted. |
| `hasProgress25` | Boolean  | Indicates that the playhead passed the 25% marker of media based on stream length. Marker only counted once, even if seeking backwards. If seeking forward, markers that are skipped are not counted. |
| `hasProgress50` | Boolean  | Indicates that the playhead passed the 50% marker of media based on stream length. Marker only counted once, even if seeking backwards. If seeking forward, markers that are skipped are not counted. |
| `hasProgress75` | Boolean  | Indicates that the playhead passed the 75% marker of media based on stream length. Marker only counted once, even if seeking backwards. If seeking forward, markers that are skipped are not counted. |
| `hasProgress95` | Boolean  | Indicates that the playhead passed the 95% marker of media based on stream length. Marker only counted once, even if seeking backwards. If seeking forward, markers that are skipped are not counted. |
| `estimatedStreams` | Number | The estimated number of video or audio streams per each individual content. | 
| `hasPauseImpactedStreams` | |  | Indicates if one or more pauses occurred during the playback of a single media item. Boolean
| `pauseCount` | Integer | The number of pause periods that occurred during playback. | 
| `pauseTime` | Integer | Describes the duration in seconds in which playback was paused by the user. | 
| `hasSegmentView` | Boolean | Indicates when at least one frame, not necessarily the first has been viewed. | 
| `secondsSinceLastCall` | Number  | Indicates the amount of time, in seconds that passed between the user's last known interaction and the moment the session was closed. |
| `cdn` | String | The content delivery network of the content played. | 
| `pev3` | String | The type of the media stream used for reporting. | 
| `pccr` | Boolean | Indicates that a redirect occurred. | 

{style="table-layout:auto"}

For more details on the field group, refer to the [public XDM repository](https://github.com/adobe/xdm/blob/master/components/datatypes/sessiondetails.schema.json)


<!-- 
Here are the values that start with "xdm:" and their count:

1. xdm:ID
2. xdm:name
3. xdm:friendlyName
4. xdm:length
5. xdm:contentType
6. xdm:playerName
7. xdm:channel
8. xdm:appVersion
9. xdm:show
10. xdm:season
11. xdm:episode
12. xdm:assetID
13. xdm:genre
14. xdm:firstAirDate
15. xdm:firstDigitalDate
16. xdm:rating
17. xdm:originator
18. xdm:network
19. xdm:showType
20. xdm:adLoad
21. xdm:mvpd
22. xdm:authorized
23. xdm:dayPart
24. xdm:feed
25. xdm:streamFormat
26. xdm:hasResume
27. xdm:streamType
28. xdm:artist
29. xdm:album
30. xdm:label
31. xdm:author
32. xdm:station
33. xdm:publisher
34. xdm:segment
35. xdm:isDownloaded
36. xdm:isFederated
37. xdm:isViewed
38. xdm:isPlayed
39. xdm:isCompleted
40. xdm:timePlayed
41. xdm:totalTimePlayed
42. xdm:uniqueTimePlayed
43. xdm:averageMinuteAudience
44. xdm:adCount
45. xdm:chapterCount
46. xdm:hasProgress10
47. xdm:hasProgress25
48. xdm:hasProgress50
49. xdm:hasProgress75
50. xdm:hasProgress95
51. xdm:estimatedStreams
52. xdm:hasPauseImpactedStreams
53. xdm:pauseCount
54. xdm:pauseTime
55. xdm:hasSegmentView
56. xdm:secondsSinceLastCall
57. xdm:cdn
58. xdm:pev3
59. xdm:pccr


Total count: 59

 -->
 