
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

| name             | type    | required | description                                                                                                                                            |
|------------------|---------|----------|--------------------------------------------------------------------------------------------------------------------------------------------------------|
| playerId         | string  | yes      | The player ID, an unique identifier representing the media session.                                                                                    |
| getPlayerDetails | function  | yes      | A function that returns the player details. This callback function will be called by the Web SDK before every media event for the `playerId` provided. |
| xdm.eventType    | object  | no       | The media event type, if not provided will be set to "media.sessionStart".                                                                             |
| xdm.mediaCollection.sessionDetails | object  | yes      | The session details object.                                                                                                                            |


