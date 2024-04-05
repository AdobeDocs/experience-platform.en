
# Manage the Media Session Automatically
Creating a media session in automatic mode allows the Web SDK to manage the dispatch of media ping events to Adobe Experience Platform and/or Adobe Analytics. 
The frequency of these pings is determined by the configuration settings of the library.

To start tracking a media session in automatic mode, follow these steps:
1. **Create a Media Collection session**: To start a media session in automatic mode, call the `createMediaSession` method with options:
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
      sessionDetails: { ... }
    }
  }
});
```

Note: `sessionDetails` object should contain the session details properties, check [Media Collection schema](../../xdm/data-types/media-details-information.md) information.

| name                               | type     | required | description                                                                                                                                            |
|------------------------------------|----------|----------|--------------------------------------------------------------------------------------------------------------------------------------------------------|
| playerId                           | string   | yes      | The player ID, an unique identifier representing the media session.                                                                                    |
| getPlayerDetails                   | function | yes      | A function that returns the player details. This callback function will be called by the Web SDK before every media event for the `playerId` provided. |
| xdm.eventType                      | object   | no       | The media event type, if not provided will be set to "media.sessionStart".                                                                             |
| xdm.mediaCollection.sessionDetails | object   | yes      | The session details object.                                                                                                                            |


2. **Handle Media Events**: The Web SDK provides a command to handle media events. This command can be used to track media playbacks, pauses, completions, player state updates, and other related events. 
Since the session is handled automatically, you don't need to pass the sessionID to the media event, or the playhead value. The Web SDK will handle this for you, based on the player ID provided and the `getPlayerDetails` callback function provided when starting the media session.
The XDM object should reflect the media event type details you want to track.
 - Example to track a pause event:
```javascript
alloy("sendMediaEvent", {
  playerId: "movie-test",
  xdm: {
    eventType: "media.pauseStart"
  }
});
```
Note: Notice the playhead and quality of experience data isn't provided in the `sendMediaEvent` command, as the Web SDK will gather it from the `getPlayerDetails` callback function provided when starting the media session.


## Handle Media Events by the event type


### Play
The `media.play` event type is used to track when a media playback starts. This event should be sent when the media starts playing.
```javascript
alloy("sendMediaEvent", {
  playerId: "movie-test",
  xdm: {
    eventType: "media.play"
  }
});
```

### Pause
The `media.pauseStart` event type is used to track when a media playback is paused. This event should be sent when the media is paused.
```javascript
alloy("sendMediaEvent", {
  playerId: "movie-test",
  xdm: {
    eventType: "media.pauseStart"
  }
});
```

### Error
The `media.error` event type is used to track when an error occurs during media playback. This event should be sent when an error occurs.
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

### Ad Break Start
The `media.adBreakStart` event type is used to track when an ad break starts. This event should be sent when an ad break starts.
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
      }}
  }
});
```

### Ad Break Complete
The `media.adBreakComplete` event type is used to track when an ad break completes. This event should be sent when an ad break completes.
```javascript
alloy("sendMediaEvent", {
  playerId: "movie-test",
  xdm: {
    eventType: "media.adBreakComplete"
  }
});
```

### Ad Start
The `media.adStart` event type is used to track when an ad starts. This event should be sent when an ad starts.

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
```

### Ad Complete
The `media.adComplete` event type is used to track when an ad completes. This event should be sent when an ad completes.
```javascript
alloy("sendMediaEvent", {
  playerId: "movie-test",
  xdm: {
    eventType: "media.adComplete"
  }
});
```

### Ad Skip
The `media.adSkip` event type is used to track when an ad is skipped. This event should be sent when an ad is skipped.
```javascript
alloy("sendMediaEvent", {
  playerId: "movie-test",
  xdm: {
    eventType: "media.adSkip"
  }
});
```

### Chapter Start
The `media.chapterStart` event type is used to track when a chapter starts. This event should be sent when a chapter starts.
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
```

### Chapter Complete
The `media.chapterComplete` event type is used to track when a chapter completes. This event should be sent when a chapter completes.
```javascript
alloy("sendMediaEvent", {
  playerId: "movie-test",
  xdm: {
    eventType: "media.chapterComplete"
  }
});
```

### Chapter skip
The `media.chapterSkip` event type is used to track when a chapter is skipped. This event should be sent when a chapter is skipped.
```javascript
alloy("sendMediaEvent", {
  playerId: "movie-test",
  xdm: {
    eventType: "media.chapterSkip"
  }
});
```

### Buffer Start
The `media.bufferStart` event type is used to track when buffering starts. This event should be sent when buffering starts. There is no bufferResume event type. A bufferResume is inferred when you send a play event after bufferStart.
```javascript
alloy("sendMediaEvent", {
  playerId: "movie-test",
  xdm: {
    eventType: "media.bufferStart"
  }
});
```

### Bitrate Change
The `media.bitrateChange` event type is used to track when the bitrate changes. This event should be sent when the bitrate changes.
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

### States Updates
The `media.stateUpdate` event type is used to track when the player state changes. This event should be sent when the player state changes.
```javascript
alloy("sendMediaEvent", {
  playerId: "movie-test",
  xdm: {
    eventType: "media.stateUpdate",
    mediaCollection: {
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
```
### Session End
This is used to notify the Media Analytics backend to immediately close the session when the user has abandoned their viewing of the content and they are unlikely to return.If you don’t send a sessionEnd, an abandoned session will time-out normally (after no events are received for 10 minutes, or when no playhead movement occurs for 30 minutes), and the session is deleted by the backend```javascript

```javascript
alloy("sendMediaEvent", {
  playerId: "movie-test",
  xdm: {
    eventType: "media.sessionEnd"
  }
});
```

### Session Complete
The `media.sessionComplete` event type is used to track when a media session completes. This event should be sent when the media session completes.
```javascript
alloy("sendMediaEvent", {
  playerId: "movie-test",
  xdm: {
    eventType: "media.sessionComplete"
  }
});
```






