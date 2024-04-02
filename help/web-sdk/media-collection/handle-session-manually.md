
# Manage the Media Session Manually
When you create a media session in manual mode, you gain more control over the dispatch of session ping events to Adobe Experience Platform and/or Adobe Analytics. Additionally, you have the ability to store the sessionID.  To start tracking a media session in manual mode, follow these steps:

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
