---
title: getMediaAnalyticsTracker
description: Learn how to create a Media Analytics Tracker object and use it to track media events.
exl-id: ae968da8-7763-4b2a-a716-3014ba0d270d
---
# `getMediaAnalyticsTracker`

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
