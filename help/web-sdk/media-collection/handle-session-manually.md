
# Manage the Media Session Manually
When you create a media session in manual mode, you gain more control over the dispatch of session ping events to Adobe Experience Platform and/or Adobe Analytics. Additionally, you have the ability to store the sessionID. 

To start tracking a media session in manual mode, follow these steps:

1. **Create a Media Collection session**:To initiate a media session in manual mode, call the `createMediaSession` method with the following options:
```javascript
const sessionPromise = alloy("createMediaSession", {
  xdm: {
    eventType: "media.sessionStart",
    mediaCollection: {
      playhead: 0,
      sessionDetails: { ... },
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

Note: `sessionDetails` object should contain the session details properties, check [Media Collection schema](../../xdm/data-types/media-details-information.md) information.

| name                               | type    | required | description                                                                                                                      |
|------------------------------------|---------|----------|----------------------------------------------------------------------------------------------------------------------------------|
| xdm.eventType                      | object  | no       | The media event type, if not provided will be set to "media.sessionStart".                                                       |
| xdm.mediaCollection.sessionDetails | object  | yes      | The session details object.                                                                                                      |
| xdm.mediaCollection.playhead       | integer | yes      | The current playhead.                                                                                                            |
| xdm.mediaCollection.qoeDataDetails | object  | no       | The quality of experience data details. More information can be found [here](../../xdm/data-types/media-details-information.md). |

2. **Handle Media Events**: The Web SDK provides a command to handle media events. This command can be used to track media playbacks, pauses, completions, player state updates, and other related events.
Since the session is handled manually, you need to pass the sessionID to the media event, along with the playhead value (integer value). You could also pass the Quality of Experience data details if needed, but it's not required.
To get the sessionID, you can use the promise returned by the `createMediaSession` method, as shown below:
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


## Handle Media Events by the event type

### Play
The `media.play` event type is used to track when a media playback starts. This event should be sent when the media starts playing.
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

### Pause
The `media.pauseStart` event type is used to track when a media playback is paused. This event should be sent when the media is paused.
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

### Error
The `media.error` event type is used to track when an error occurs during media playback. This event should be sent when an error occurs.
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


### Ad Break Start
The `media.adBreakStart` event type is used to track when an ad break starts. This event should be sent when an ad break starts.
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

### Ad Break Complete
The `media.adBreakComplete` event type is used to track when an ad break completes. This event should be sent when an ad break completes.
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


### Ad Start
The `media.adStart` event type is used to track when an ad starts. This event should be sent when an ad starts.

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

### Ad Complete
The `media.adComplete` event type is used to track when an ad completes. This event should be sent when an ad completes.
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

### Ad Skip
The `media.adSkip` event type is used to track when an ad is skipped. This event should be sent when an ad is skipped.
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

### Chapter Start
The `media.chapterStart` event type is used to track when a chapter starts. This event should be sent when a chapter starts.
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

### Chapter Complete
The `media.chapterComplete` event type is used to track when a chapter completes. This event should be sent when a chapter completes.
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

### Chapter skip
The `media.chapterSkip` event type is used to track when a chapter is skipped. This event should be sent when a chapter is skipped.
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

### Buffer Start
The `media.bufferStart` event type is used to track when buffering starts. This event should be sent when buffering starts. There is no bufferResume event type. A bufferResume is inferred when you send a play event after bufferStart.
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

### Bitrate Change
The `media.bitrateChange` event type is used to track when the bitrate changes. This event should be sent when the bitrate changes.
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

### States Updates
The `media.stateUpdate` event type is used to track when the player state changes. This event should be sent when the player state changes.
```javascript
sessionPromise.then(sessionID => {
    alloy("sendMediaEvent", {
        xdm: {
        eventType: "media.stateUpdate",
        mediaCollection: {
            playhead: parseInt(document.getElementById("movie-test").currentTime, 10),
            sessionID,
            statesStart: [
              {
                name: "mute"
              },
              {
                name: "pictureInPicture"
              }
            ],
            statesEnd: [
              {
                name: "fullScreen"
              }
            ]
        }
        }
    });
});
```

### Session End
This is used to notify the Media Analytics backend to immediately close the session when the user has abandoned their viewing of the content and they are unlikely to return.If you don’t send a sessionEnd, an abandoned session will time-out normally (after no events are received for 10 minutes, or when no playhead movement occurs for 30 minutes), and the session is deleted by the backend.

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

### Session Complete
The `media.sessionComplete` event type is used to track when a media session completes. This event should be sent when the end of the main content is reached.
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







