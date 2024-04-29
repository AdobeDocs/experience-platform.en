---
title: Migrate your Analytics for Streaming Media implementation from Media JS to Web SDK
description: Learn how to migrate your Analytics for Streaming Media implementation from Media JS to Web SDK.
---

# Migrate your Analytics for Streaming Media implementation from Media JS to Web SDK


Starting with version 2.20.0, [Web SDK](https://experienceleague.adobe.com/en/docs/experience-platform/web-sdk/home) includes media collection support. This feature is designed to gather data related to media usage on your website.

The collected data can include information about media playbacks, pauses, completions, and other related events. Once collected, you can send this data to Adobe Experience Platform and/or Adobe Analytics, to generate reports. This feature provides a comprehensive solution for tracking and understanding media consumption behavior on your website.

For customers who are using the Media JS SDK, Web SDK provides a migration path to move from Media JS SDK to Web SDK, while including support for existing Media JS functionalities, such as handling media events.

Follow the steps described in this page to migrate your Analytics for Streaming Media implementation from Media JS to Web SDK.

## Step 1: Install Experience Platform Web SDK

See the [dedicated documentation](https://experienceleague.adobe.com/en/docs/experience-platform/web-sdk/install/overview) to learn how to install Web SDK on your web properties.

## Step 2: Configure the Web SDK `streamingMedia` component. 

**Example**

The snippet below shows how you would configure media collection in Media JS. 

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

Instead, you must configure the `streamingMedia` component in the Web SDK as exemplified below.

```js
alloy("configure", {
  streamingMedia: {
    channel: "sample_channel",
    playerName: "player_name",
    appVersion: "app_version",
    mainPingInterval: 10,
    adPingInterval: 10
  }
});
```
See the Web SDK `streamingMedia` component [documentation](https://experienceleague.adobe.com/en/docs/experience-platform/web-sdk/commands/configure/streamingmedia) for complete details on how to configure it.

## Step 3: Get the media tracker instance

[!DNL Web SDK] includes a command to retrieve a Media Analytics Tracker. You can use this command to create an object instance and then, using the same APIs as the ones provided by the [Media JS library](https://adobe-marketing-cloud.github.io/media-sdks/reference/javascript_3x/APIReference.html), track media events.

See the [`getMediaAnalyticsTracker`](https://experienceleague.adobe.com/en/docs/experience-platform/web-sdk/commands/getMediaAnalyticsTracker) documentation for complete details on the supported methods.

The snippet below shows how you would retrieve the media tracker instance in Media JS. 

```javascript
var tracker = ADB.Media.getInstance();
```

Instead, use the `getMediaAnalyticsTracker` command in Web SDK to achieve the same result, as shown below.

```js
// aquire Media Analytics APIs
const Media = await window.alloy("getMediaAnalyticsTracker", {});
// create a media tracker instance
const trackerInstance = Media.getInstance();
```

All the helper methods will be available on the `Media` object. The tracker methods are available on the tracker instance, as shown below.

```js
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