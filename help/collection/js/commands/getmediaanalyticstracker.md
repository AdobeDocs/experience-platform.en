---
title: getMediaAnalyticsTracker (Web SDK)
description: Learn how to create a Media Analytics Tracker object and use it to track media events.
exl-id: ae968da8-7763-4b2a-a716-3014ba0d270d
TQID: 'https://experienceleague.adobe.com/DXkThFtFfX8TjDj5l3dC3gwZstJ0WjzQVKGQA04WdS4'
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
  - id: e55547f1-a1ff-40c6-8978-026e40ab7fa4
    internal-label: Analytics
feature_v2:
  - id: d5947817-d24b-4ba3-8126-2c3d66e9422b
    internal-label: Web SDK
  - id: e9dbdbc5-3e52-40f0-a7bc-e18542967b7a
    internal-label: Implementations
subfeature_v2:
  - id: bcc784b7-4ade-4c84-96fa-2f7631b1e5fd
    internal-label: Media Analytics
level_v2:
  - id: b5a62a22-46f7-4f0d-b151-3fc640bef588
    internal-label: Intermediate
topic_v2:
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
  - id: c2be0313-b3ae-45e0-b454-d20bf54b23f2
    internal-label: Measurement
autotag-review: '2026-11-05T22:08:57.077Z'
---
# `getMediaAnalyticsTracker` (Web SDK)

This Web SDK command retrieves a Media Analytics Tracker. You can use this command to create an object instance and then, using the same APIs as the ones provided by the [Media JS library](https://adobe-marketing-cloud.github.io/media-sdks/reference/javascript_3x/APIReference.html), track media events.

The `getMediaAnalyticsTracker` command returns the Legacy Media Analytics API.

| Method name | Description | Syntax |
|---|---|---|
| `getInstance` | Creates an instance of media to track the playback session. | `Media.getInstance()` |
| `createMediaObject` | Creates an object containing media information. Returns empty object if invalid parameters are passed. | `Media.createMediaObject(name, id, length, streamType, mediaType)` |
| `createAdBreakObject` | Creates an object containing adbreak information. Returns empty object if invalid parameters are passed.| `Media.createAdBreakObject(name, position, startTime)` |
| `createAdObject`  | Creates an object containing ad information. Returns empty object if invalid parameters are passed. | `Media.createAdObject(name, id, position, length)` |
| `createChapterObject` | Creates an object containing chapter information. Returns empty object if invalid parameters are passed. | `Media.createChapterObject(name, position, length, startTime)` |
| `createStateObject` | Creates an object containing state information. Returns empty object if invalid parameters are passed. | `Media.createStateObject(name)` |
|`createQoEObject` | Creates an object containing QoE information. Returns empty object if invalid parameters are passed.| `Media.createQoEObject(bitrate, startupTime, fps, droppedFrames)` |

## Instance Methods

| Method name | Description | Syntax |
|---|---|---|
| `trackSessionStart` | Track the intention to start playback. This starts a tracking session on the media tracker instance. | `trackerInstance.trackSessionStart(mediaInfo, contextData)`|
| `trackPlay` | Track media play or resume after a previous pause. | `trackerInstance.trackPlay()` |
| `trackPause` | Track media pause. | `trackerInstance.trackPause()` |
| `trackComplete` | Track media complete. Call this method only when the media has been completely viewed. | `trackerInstance.trackComplete()` |
| `trackSessionEnd` | Track the end of a viewing session. Call this method even if the user does not view the media to completion. | `trackerInstance.trackSessionEnd()`|
| `trackError` | Track an error that occurred during media playback. | `trackerInstance.trackError("errorId")` |
| `trackEvent` | Track a custom event. | `trackerInstance.trackEvent(event, info, contextData)` |
| `updatePlayhead` | Update the playhead position. | `trackerInstance.updatePlayhead(playhead)` |
| `updateQoEObject` | Update the quality of experience. | `trackerInstance.updateQoEObject(qoe)` |

## Constants

| Constant name | Description | Value |
|---|---|---|
| `MediaType` | Media type | `Video`, `Audio` |
| `StreamType` | Stream type | `VOD`, `Live`, `Linear`, `Podcast`, `Audiobook`, `AOD` |
| `VideoMetadataKeys` | This defines the standard metadata keys for video streams | `Show`, `Season`, `Episode`, `AssetId`, `Genre`, `FirstAirDate`, `FirstDigitalDate`, `Rating`, `Originator`, `Network`, `ShowType`, `AdLoad`, `MVPD`, `Authorized`, `DayPart`, `Feed`, `StreamFormat` |
| `AudioMetadataKeys` | This defines the standard metadata keys for audio streams. | `Artist`, `Album`, `Label`, `Author`, `Station`, `Publisher` |
| `AdMetadataKeys` |  This defines the standard metadata keys for ads. | `Advertiser`, `CampaignId`, `CreativeId`, `PlacementId`, `SiteId`, `CreativeUrl` |
| `Event` | This defines the type of a tracking event.| `AdBreakStart`, `AdBreakComplete`, `AdStart`, `AdComplete`, `AdSkip`, `ChapterStart`, `ChapterComplete`, `ChapterSkip`, `SeekStart`, `SeekComplete`, `BufferStart`, `BufferComplete`, `BitrateChange`, `StateStart`, `StateEnd` |
| `PlayerState` | This defines standard values for tracking player state. | `FullScreen`, `ClosedCaption`, `Mute`, `PictureInPicture`, `InFocus` |

## Get Media Analytics tracker using the Web SDK tag extension

The Web SDK tag extension equivalent of this command is the [**[!UICONTROL Get Media Analytics tracker]**](/help/tags/extensions/client/web-sdk/actions/get-media-analytics-tracker.md) action.
