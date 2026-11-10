---
title: createMediaSession (Web SDK)
description: Learn how to configure Web SDK to manage media sessions automatically
exl-id: abcb26f6-7249-4235-99eb-e4b9aeecff3e
TQID: 'https://experienceleague.adobe.com/7wV5TUFeB8GgK40MenSnKr4QAN-HZJPVihQxuSH2Y0Q'
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
# `createMediaSession` (Web SDK)

The `createMediaSession` command is part of the Web SDK `streamingMedia` component. You can use this component to collect data related to media sessions on your website. See the `streamingMedia` [documentation](configure/streamingmedia.md) to learn how to configure this component.

The collected data can include information about media playbacks, pauses, completions, and other related events. Once collected, you can send this data to [Adobe Analytics for Streaming Media](https://experienceleague.adobe.com/en/docs/media-analytics/using/media-overview), to aggregate metrics. This feature provides a comprehensive solution for tracking and understanding media consumption behavior on your website.

You can create media sessions in Web SDK in two ways:

* **Automatically-tracked media sessions** allow the Web SDK to manage the dispatch of media ping events to [Adobe Analytics for Streaming Media](https://experienceleague.adobe.com/en/docs/media-analytics/using/media-overview). The frequency of these pings is determined by the configuration settings of the [streamingMedia](configure/streamingmedia.md) component.
* **Manually-tracked media sessions** give you more control over the dispatch of session ping events to [Adobe Analytics for Streaming Media](https://experienceleague.adobe.com/en/docs/media-analytics/using/media-overview). Additionally, you have the ability to store the `sessionID` for media sessions.

## Create an automatically-tracked media session {#automatic}

To start tracking a media session automatically, call the `createMediaSession` method with the options described below:

```javascript
    alloy("createMediaSession", {
        playerId: "movie-test",
        getPlayerDetails: () => {
            return {
                playhead: document.getElementById("movie-test").currentTime,
                qoeDataDetails: {
                    bitrate: 1000,
                    startupTime: 1000,
                    fps: 30,
                    droppedFrames: 10
                }
            };
        },
        xdm: {
            eventType: "media.sessionStart",
            mediaCollection: {
                sessionDetails: {
                    ...
                }
            }
        }
    });
```

| Property | Type | Required | Description |
|---------|----------|---------|---------|
| `playerId` | String | Yes | The player ID, an unique identifier representing the media session.|
| `getPlayerDetails` | Function | Yes | A function that returns the player details. This callback function will be called by the Web SDK before every media event for the `playerId` provided. |
| `xdm.eventType` | Object | No | The media event type. If not provided, this field is automatically set to `media.sessionStart`. |
| `xdm.mediaCollection.sessionDetails` | Object | Yes | Contains session detail properties. See [Media Collection schema](/help/xdm/data-types/media-collection-details.md) for more information. |

## Create a manually-tracked media session {#manual}

To start tracking a media session manually, call the `createMediaSession` method with the options described below:

```javascript
const sessionPromise = alloy("createMediaSession", {
    xdm: {
        eventType: "media.sessionStart",
        mediaCollection: {
            playhead: 0,
            sessionDetails: {
                ...
            },
            qoeDataDetails: {
                bitrate: 1000,
                startupTime: 1000,
                fps: 30,
                droppedFrames: 10
            }
        }
    }
});
```

| Property | Type | Requred | Description |
|---------|----------|---------|---------|
| `xdm.eventType` | Object | No | The media event type. If not provided, it is automatically set to `media.sessionStart`. |
| `xdm.mediaCollection.sessionDetails` | Object | Yes | Contains session detail properties. See [Media Collection schema](/help/xdm/data-types/media-collection-details.md) for more information. |
| `xdm.mediaCollection.playhead` | Integer | Yes | The current playhead. |
| `xdm.mediaCollection.qoeDataDetails` | Object | No | The quality of experience data details. See the [Media Collection schema](/help/xdm/data-types/media-collection-details.md) documentation for more information. |

## Create media session using the Web SDK tag extension

The Web SDK tag extension equivalent to this command is the [**[!UICONTROL Session start]**](/help/tags/extensions/client/web-sdk/actions/send-media-event.md#session-start) event type within the '[!UICONTROL Send media event]' action.
