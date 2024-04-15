# Migration use-case
The Web SDK, beginning from version 2.20.0, includes support for a feature known as Media Collection. 
This feature is designed to gather data related to media usage on your website. The collected data can include 
information about media playbacks, pauses, completions, and other related events. Once collected, this data is then 
sent to Adobe Experience Platform and/or Adobe Analytics to generate reports. 

For customers who are using the Media JS SDK, Web SDK provides a migration path to move from Media JS SDK to Web SDK.
Since the Media JS SDK provides an API to handle media events, the Web SDK provides a similar API to handle media events.
The Web SDK provides a command to retrieve a Media Analytics Tracker. This command can be used to create an object instance and then using the same APIs as the ones provided by the [Media JS library](https://adobe-marketing-cloud.github.io/media-sdks/reference/javascript_3x/APIReference.html) track media events.

## Migration steps
To migrate from Media JS SDK to Web SDK, follow these steps:
1. Instead of this:
```javascript
var mediaConfig = new ADB.MediaConfig();
mediaConfig.trackingServer = "company.hb-api.omtrdc.net";
mediaConfig.playerName = "player_name";
mediaConfig.channel = "sample_channel";
mediaConfig.appVersion = "app_version";
mediaConfig.debugLogging = true;
mediaConfig.ssl = true;

ADB.Media.configure(mediaConfig, appMeasurement);
```

You'll configure the Media Collection component in the Web SDK like this:
```javascript
alloy("configure", {
  mediaCollection: {
    channel: "sample_channel",
    playerName: "player_name",
    appVersion: "app_version",
    mainPingInterval: 10,
    adPingInterval: 10
  }
});
```
2. Instead of this:
```javascript
var tracker = ADB.Media.getInstance();
```

Use the Web SDK command to get the tracker instance:
```javascript
// aquire Media Analytics APIs
const Media = await window.alloy("getMediaAnalyticsTracker", {});
// create a media tracker instance
const trackerInstance = Media.getInstance();
```

3. Then all the helper methods will be available on the Media object but the tracker methods on the tracker instance, as bellow:
```javascript
const mediaInfo = Media.createMediaObject(
  "video name",
  "player video",
  60,
  Media.StreamType.VOD,
  Media.MediaType.Video
);

const contextData = {
  isUserLoggedIn: "false",
  tvStation: "Sample TV station",
  programmer: "Sample programmer",
  assetID: "/uri-reference"
};

// Set standard Video Metadata
contextData[Media.VideoMetadataKeys.Episode] = "Sample Episode";
contextData[Media.VideoMetadataKeys.Show] = "Sample Show";

trackerInstance.trackSessionStart(mediaInfo, contextData);
```