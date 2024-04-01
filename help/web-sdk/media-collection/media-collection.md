

# Media Collection using Web SDK
The Web SDK, beginning from version 2.20.0, includes support for a feature known as Media Collection. This feature is
designed to gather data related to media usage on your website. The collected data can include information about media 
playbacks, pauses, completions, and other related events. Once collected, this data is then sent to Adobe Experience 
Platform and/or Adobe Analytics to generate reports. This feature provides a comprehensive solution for tracking and 
understanding media consumption behavior on your website.

## Overview
The Media Collection component, integrated within the Web SDK, is a powerful tool for managing and collecting data about 
media sessions via the Media Collection API. 

The Media Collection component within the Web SDK offers the flexibility to manage media sessions in two distinct modes:  
- Automatic Mode: Web SDK autonomously manages the dispatch of media ping events to Adobe Experience Platform and/or Adobe Analytics. The frequency of these pings is determined by the configuration settings of the library.
- Manual Mode: This mode provides a more hands-on approach to data collection. The Media Collection component equips you with the necessary methods to manually send media pings to Adobe Experience Platform or Adobe Analytics. This mode is ideal for scenarios where you require more control over when and what data is sent.

## Prerequisites
To use the Media Collection feature, ensure that you have the following prerequisites in place:
- Web SDK version 2.20.0 or later.
- Enable the Media Analytics feature for the Datastream.
- Ensure that the schema used by the Datastream has the Media Collection schema.
- Access to Adobe Experience Platform and/or Adobe Analytics.
- Configure the Media Collection feature in the Web SDK configuration.

## Configuration
To configure the Media Collection feature in the Web SDK, follow these steps:
1. **Configure Media Collection in the Web SDK**: To enable the Media Collection feature, add the `mediaCollection` object when calling `configure()` command.
```javascript
alloy("configure", {
  mediaCollection: {
    channel: "video channel",
    playerName: "test player",
    appVersion: "alloy 2.16.0",
    mainPingInterval: 10,
    adPingInterval: 10
  }
});
 ```
   
|name| type    | required | description                                                                            |
|----|---------|----------|----------------------------------------------------------------------------------------|
|channel| string  | yes      | The channel name for the media collection.                                             |
|playerName| string  | yes      | The name of the player.                                                                |
|appVersion| string  | no       | The version of the application.                                                        |
|mainPingInterval| integer | no       | Frequency of pings for main content. Default value is `10`, value between `10` and `50. |
|adPingInterval| integer   | no       | Frequency of pings for ads content. Default value is `10`, value between `1` and `10`.  |

Note: Configuration settings for `mainPingInterval` and `adPingInterval` are optional. If not provided, the default 
values are used when media session is started in an automatic mode.



