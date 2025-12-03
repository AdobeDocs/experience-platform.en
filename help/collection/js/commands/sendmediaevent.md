---
title: sendMediaEvent
description: Learn how to use the sendMediaEvent command to track media sessions in Web SDK.
exl-id: a38626fd-4810-40a0-8893-e98136634fac
---
# `sendMediaEvent`

The `sendMediaEvent` command is part of the Web SDK `streamingMedia` component. You can use this component to collect data related to media sessions on your website. See the `streamingMedia` [documentation](configure/streamingmedia.md) to learn how to configure this component.

Use the `sendMediaEvent` command to track media playbacks, pauses, completions, player state updates, and other related events.

Web SDK can handle media events based on the type of media session tracking:

* **Event handling for automatically-tracked sessions**. In this mode you don't need to pass the `sessionID` to the media event, or the playhead value. The Web SDK will handle this for you, based on the player ID provided and the `getPlayerDetails` callback function provided when starting the media session.
* **Event handling for manually-tracked sessions**. In this mode you need to pass the `sessionID` to the media event, along with the playhead value (integer value). You could also pass the Quality of Experience data details, if needed.

## Handle media events by type {#handle-by-type}

Select the tabs below to see examples of event type handling for each event type and session tracking method (automatic or manual).

### Play {#play}

The `media.play` event type is used to track when media playback starts. This event should be sent when the player changes state to "playing" from another state. Other states from which the player moves to "playing" include "buffering", the user resuming from "paused", the player recovering from an error, or autoplay.

>[!BEGINTABS]

>[!TAB Automatic session tracking]

```javascript
alloy("sendMediaEvent", {
    playerId: "movie-test",
    xdm: {
        eventType: "media.play"
    }
});
```

>[!TAB Manual session tracking]

```javascript
sessionPromise.then(sessionID => {
    alloy("sendMediaEvent", {
        xdm: {
            eventType: "media.play",
            mediaCollection: {
                playhead: parseInt(document.getElementById("movie-test").currentTime, 10),
                sessionID
            }
        }
    });
});
```

>[!ENDTABS]

### Pause {#pause}

The `media.pauseStart` event type is used to track when a media playback is paused. This event should be sent when the user presses **[!UICONTROL Pause]**. There is no resume event type. A resume is inferred when you send a `media.play` event after a `media.pauseStart`.

>[!BEGINTABS]

>[!TAB Automatic session tracking]

```javascript
alloy("sendMediaEvent", {
    playerId: "movie-test",
    xdm: {
        eventType: "media.pauseStart"
    }
});
```

>[!TAB Manual session tracking]

```javascript
sessionPromise.then(sessionID => {
    alloy("sendMediaEvent", {
        xdm: {
            eventType: "media.pauseStart",
            mediaCollection: {
                playhead: parseInt(document.getElementById("movie-test").currentTime, 10),
                sessionID
            }
        }
    });
});
```

>[!ENDTABS]

### Error {#error}

The `media.error` event type is used to track when an error occurs during media playback. This event should be sent when an error occurs.

>[!BEGINTABS]

>[!TAB Automatic session tracking]

```javascript
alloy("sendMediaEvent", {
    playerId: "movie-test",
    xdm: {
        eventType: "media.error",
        mediaCollection: {
            errorDetails: {
                name: "network-error",
                source: "player"
            }
        }
    }
});
```

>[!TAB Manual session tracking]

```javascript
sessionPromise.then(sessionID => {
    alloy("sendMediaEvent", {
        xdm: {
            eventType: "media.error",
            mediaCollection: {
                playhead: parseInt(document.getElementById("movie-test").currentTime, 10),
                sessionID,
                errorDetails: {
                    name: "network-error",
                    source: "player"
                }
            }
        }
    });
});
```

>[!ENDTABS]

### Ad break start {#ad-break-start}

The `media.adBreakStart` event type is used to track when an ad break starts. This event should be sent when an ad break starts.

>[!BEGINTABS]

>[!TAB Automatic session tracking]

```javascript
alloy("sendMediaEvent", {
    playerId: "movie-test",
    xdm: {
        eventType: "media.adBreakStart",
        mediaCollection: {
            advertisingPodDetails: {
                friendlyName: "Mid-roll",
                offset: 0,
                index: 1
            }
        }
    }
});
```

>[!TAB Manual session tracking]

```javascript
sessionPromise.then(sessionID => {
    alloy("sendMediaEvent", {
        xdm: {
            eventType: "media.adBreakStart",
            mediaCollection: {
                playhead: parseInt(document.getElementById("movie-test").currentTime, 10),
                sessionID,
                advertisingPodDetails: {
                    friendlyName: "Mid-roll",
                    offset: 0,
                    index: 1
                }
            }
        }
    });
});
```

>[!ENDTABS]

### Ad break complete {#ad-break-complete}

The `media.adBreakComplete` event type is used to track when an ad break completes. This event should be sent when an ad break completes.

>[!BEGINTABS]

>[!TAB Automatic session tracking]

```javascript
alloy("sendMediaEvent", {
    playerId: "movie-test",
    xdm: {
        eventType: "media.adBreakComplete"
    }
});
```

>[!TAB Manual session tracking]

```javascript
sessionPromise.then(sessionID => {
    alloy("sendMediaEvent", {
        xdm: {
            eventType: "media.adBreakComplete",
            mediaCollection: {
                playhead: parseInt(document.getElementById("movie-test").currentTime, 10),
                sessionID
            }
        }
    });
});
```

>[!ENDTABS]

### Ad start {#ad-start}

The `media.adStart` event type is used to track when an ad starts. This event should be sent when an ad starts.

>[!BEGINTABS]

>[!TAB Automatic session tracking]

```javascript
alloy("sendMediaEvent", {
    playerId: "movie-test",
    xdm: {
        eventType: "media.adStart",
        mediaCollection: {
            advertisingDetails: {
                friendlyName: "Ad 1",
                name: "/uri-reference/001",
                length: 10,
                advertiser: "Adobe Marketing",
                campaignID: "Adobe Analytics",
                creativeID: "creativeID",
                creativeURL: "https://creativeurl.com",
                placementID: "placementID",
                siteID: "siteID",
                podPosition: 11,
                playerName: "HTML5 player"
            },
            customMetadata: [{
                    name: "myCustomValue3",
                    value: "c3"
                },
                {
                    name: "myCustomValue2",
                    value: "c2"
                },
                {
                    name: "myCustomValue1",
                    value: "c1"
                }
            ]
        }
    }
});
```

>[!TAB Manual session tracking]

```javascript
sessionPromise.then(sessionID => {
    alloy("sendMediaEvent", {
        xdm: {
        eventType: "media.adStart",
        mediaCollection: {
            playhead: parseInt(document.getElementById("movie-test").currentTime, 10),
            sessionID,
            advertisingDetails: {
              friendlyName: "Ad 1",
              name: "/uri-reference/001",
              length: 10,
              advertiser: "Adobe Marketing",
              campaignID: "Adobe Analytics",
              creativeID: "creativeID",
              creativeURL: "https://creativeurl.com",
              placementID: "placementID",
              siteID: "siteID",
              podPosition: 11,
              playerName: "HTML5 player"
            },
            customMetadata: [
              {
                name: "myCustomValue3",
                value: "c3"
              },
              {
                name: "myCustomValue2",
                value: "c2"
              },
              {
                name: "myCustomValue1",
                value: "c1"
              }]
        }
        }
    });
});
```

>[!ENDTABS]

### Ad complete {#ad-complete}

The `media.adComplete` event type is used to track when an ad completes. This event should be sent when an ad completes.

>[!BEGINTABS]

>[!TAB Automatic session tracking]

```javascript
alloy("sendMediaEvent", {
    playerId: "movie-test",
    xdm: {
        eventType: "media.adComplete"
    }
});
```

>[!TAB Manual session tracking]

```javascript
sessionPromise.then(sessionID => {
    alloy("sendMediaEvent", {
        xdm: {
            eventType: "media.adComplete",
            mediaCollection: {
                playhead: parseInt(document.getElementById("movie-test").currentTime, 10),
                sessionID
            }
        }
    });
});
```

>[!ENDTABS]

### Ad skip {#ad-skip}

The `media.adSkip` event type is used to track when an ad is skipped. This event should be sent when an ad is skipped.

>[!BEGINTABS]

>[!TAB Automatic session tracking]

```javascript
alloy("sendMediaEvent", {
    playerId: "movie-test",
    xdm: {
        eventType: "media.adSkip"
    }
});
```

>[!TAB Manual session tracking]

```javascript
sessionPromise.then(sessionID => {
    alloy("sendMediaEvent", {
        xdm: {
            eventType: "media.adSkip",
            mediaCollection: {
                playhead: parseInt(document.getElementById("movie-test").currentTime, 10),
                sessionID
            }
        }
    });
});
```

>[!ENDTABS]

### Chapter start {#chapter-start}

The `media.chapterStart` event type is used to track when a chapter starts. This event should be sent when a chapter starts.

>[!BEGINTABS]

>[!TAB Automatic session tracking]

```javascript
alloy("sendMediaEvent", {
    playerId: "movie-test",
    xdm: {
        eventType: "media.chapterStart",
        mediaCollection: {
            chapterDetails: {
                friendlyName: "Chapter 1",
                position: 1,
                length: 10,
                index: 1,
                offset: 0
            },
            customMetadata: [{
                    name: "myCustomValue3",
                    value: "c3"
                },
                {
                    name: "myCustomValue2",
                    value: "c2"
                },
                {
                    name: "myCustomValue1",
                    value: "c1"
                }
            ]
        }
    }
});
```

>[!TAB Manual session tracking]

```javascript
sessionPromise.then(sessionID => {
    alloy("sendMediaEvent", {
        xdm: {
            eventType: "media.chapterStart",
            mediaCollection: {
                playhead: parseInt(document.getElementById("movie-test").currentTime, 10),
                sessionID,
                chapterDetails: {
                    friendlyName: "Chapter 1",
                    position: 1,
                    length: 10,
                    index: 1,
                    offset: 0
                },
                customMetadata: [{
                        name: "myCustomValue3",
                        value: "c3"
                    },
                    {
                        name: "myCustomValue2",
                        value: "c2"
                    },
                    {
                        name: "myCustomValue1",
                        value: "c1"
                    }
                ]
            }
        }
    });
});
```

>[!ENDTABS]

### Chapter complete {#chapter-complete}

The `media.chapterComplete` event type is used to track when a chapter completes. This event should be sent when a chapter completes.

>[!BEGINTABS]

>[!TAB Automatic session tracking]

```javascript
alloy("sendMediaEvent", {
    playerId: "movie-test",
    xdm: {
        eventType: "media.chapterComplete"
    }
});
```

>[!TAB Manual session tracking]

```javascript
sessionPromise.then(sessionID => {
    alloy("sendMediaEvent", {
        xdm: {
            eventType: "media.chapterComplete",
            mediaCollection: {
                playhead: parseInt(document.getElementById("movie-test").currentTime, 10),
                sessionID
            }
        }
    });
});
```

>[!ENDTABS]

### Chapter skip {#chapter-skip}

The `media.chapterSkip` event type is used to track when a chapter is skipped. This event should be sent when a chapter is skipped.

>[!BEGINTABS]

>[!TAB Automatic session tracking]

```javascript
alloy("sendMediaEvent", {
    playerId: "movie-test",
    xdm: {
        eventType: "media.chapterSkip"
    }
});
```

>[!TAB Manual session tracking]

```javascript
sessionPromise.then(sessionID => {
    alloy("sendMediaEvent", {
        xdm: {
            eventType: "media.chapterSkip",
            mediaCollection: {
                playhead: parseInt(document.getElementById("movie-test").currentTime, 10),
                sessionID
            }
        }
    });
});
```

>[!ENDTABS]

### Buffer start {#buffer-start}

The `media.bufferStart` event type is used to track when buffering starts. This event should be sent when buffering starts. There is no `bufferResume` event type. A `bufferResume` is inferred when you send a play event after `bufferStart`.

>[!BEGINTABS]

>[!TAB Automatic session tracking]

```javascript
alloy("sendMediaEvent", {
    playerId: "movie-test",
    xdm: {
        eventType: "media.bufferStart"
    }
});
```

>[!TAB Manual session tracking]

```javascript
sessionPromise.then(sessionID => {
    alloy("sendMediaEvent", {
        xdm: {
            eventType: "media.bufferStart",
            mediaCollection: {
                playhead: parseInt(document.getElementById("movie-test").currentTime, 10),
                sessionID
            }
        }
    });
});
```

>[!ENDTABS]

### Bitrate change {#bitrate-change}

The `media.bitrateChange` event type is used to track when the bitrate changes. This event should be sent when the bitrate changes.

>[!BEGINTABS]

>[!TAB Automatic session tracking]

```javascript
alloy("sendMediaEvent", {
    playerId: "movie-test",
    xdm: {
        eventType: "media.bitrateChange",
        mediaCollection: {
            qoeDataDetails: {
                framesPerSecond: 1,
                bitrate: 35000,
                droppedFrames: 30,
                timeToStart: 1364
            }
        }
    }
});
```

>[!TAB Manual session tracking]

```javascript
sessionPromise.then(sessionID => {
    alloy("sendMediaEvent", {
        xdm: {
            eventType: "media.bitrateChange",
            mediaCollection: {
                playhead: parseInt(document.getElementById("movie-test").currentTime, 10),
                sessionID,
                qoeDataDetails: {
                    bitrate: 35000,
                    droppedFrames: 30,
                    timeToStart: 1364
                }
            }
        }
    });
});
```

>[!ENDTABS]

### State updates {#state-updates}

The `media.statesUpdate` event type is used to track when the player state changes. This event should be sent when the player state changes.

>[!BEGINTABS]

>[!TAB Automatic session tracking]

```javascript
alloy("sendMediaEvent", {
    playerId: "movie-test",
    xdm: {
        eventType: "media.statesUpdate",
        mediaCollection: {
            statesStart: [{
                    name: "mute"
                },
                {
                    name: "pictureInPicture"
                }
            ],
            statesEnd: [{
                name: "fullScreen"
            }]
        }
    }
});
```

>[!TAB Manual session tracking]

```javascript
sessionPromise.then(sessionID => {
    alloy("sendMediaEvent", {
        xdm: {
            eventType: "media.stateUpdate",
            mediaCollection: {
                playhead: parseInt(document.getElementById("movie-test").currentTime, 10),
                sessionID,
                statesStart: [{
                        name: "mute"
                    },
                    {
                        name: "pictureInPicture"
                    }
                ],
                statesEnd: [{
                    name: "fullScreen"
                }]
            }
        }
    });
});
```

>[!ENDTABS]

### Session end {#session-end}

The `media.sessionEnd` event type is used to notify the Media Analytics backend to immediately close the session when the user has abandoned their viewing of the content and they are unlikely to return.

If you do not send a `sessionEnd` event, an abandoned session will time-out after no events are received for 10 minutes, or when no playhead movement occurs for 30 minutes. The session is automatically deleted.

>[!BEGINTABS]

>[!TAB Automatic session tracking]

```javascript
alloy("sendMediaEvent", {
    playerId: "movie-test",
    xdm: {
        eventType: "media.sessionEnd"
    }
});
```

>[!TAB Manual session tracking]

```javascript
sessionPromise.then(sessionID => {
    alloy("sendMediaEvent", {
        xdm: {
            eventType: "media.sessionEnd",
            mediaCollection: {
                playhead: parseInt(document.getElementById("movie-test").currentTime, 10),
                sessionID
            }
        }
    });
});
```

>[!ENDTABS]

### Session complete {#session-complete}

The `media.sessionComplete` event type is used to track when a media session completes. This event should be sent when the end of the main content is reached.

>[!BEGINTABS]

>[!TAB Automatic session tracking]

```javascript
alloy("sendMediaEvent", {
    playerId: "movie-test",
    xdm: {
        eventType: "media.sessionComplete"
    }
});
```

>[!TAB Manual session tracking]

```javascript
sessionPromise.then(sessionID => {
    alloy("sendMediaEvent", {
        xdm: {
            eventType: "media.sessionComplete",
            mediaCollection: {
                playhead: parseInt(document.getElementById("movie-test").currentTime, 10),
                sessionID
            }
        }
    });
});
```

>[!ENDTABS]

## Send media event using the Web SDK tag extension

The Web SDK tag extension equivalent to this command is the [**[!UICONTROL Send media event]**](/help/tags/extensions/client/web-sdk/actions/send-media-event.md) action.
