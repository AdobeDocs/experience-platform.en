---
title: Mapping Fields for the Adobe Analytics Source Connector
description: Map Adobe Analytics fields to XDM fields using the Analytics Source Connector.
exl-id: 15dc1368-5cf1-42e1-9683-d5158f8aa2db
---
# Analytics field mappings

Adobe Experience Platform allows you to ingest Adobe Analytics data through the Analytics source. Some of the data ingested through ADC can be mapped directly from Analytics fields to Experience Data Model (XDM) fields, while other data requires transformations and specific functions to be successfully mapped.

![An illustration of the Adobe Analytics data journey from Analytics to Experience Platform.](../images/analytics-data-experience-platform.png)

## Streaming media parameters

Read the following table for information on streaming media parameters.

| Data feed | XDM field path | Data type | Description | 
| --- | --- | --- | --- |
| `videoname` | `mediaReporting.sessionDetails.friendlyName` | string | The friendly (human-readable) name of the video. |
| `videoaudioauthor` | `mediaReporting.sessionDetails.author` | string | The name of the media author. |
| `videoaudioartist` | `mediaReporting.sessionDetails.artist` | string | The name of the album artist or group performing the music recording or video. |
| `videoaudioalbum` | `mediaReporting.sessionDetails.album` | string | The name of the album that the music recording or video belongs to. |
| `videolength` | `mediaReporting.sessionDetails.length` | integer | The length or runtime of the video. |
| `videoshowtype` | `mediaReporting.sessionDetails.showType` | string ||
| `video` | `mediaReporting.sessionDetails.name` | string | The ID of the video. |
| `videoshow` | `mediaReporting.sessionDetails.show` | string | The name of the program or series. The program/series name is only required if the show is part of a series. |
| `videostreamtype` | mediaReporting.sessionDetails.streamType | string | The type of streaming media such as "video" or "audio". |
| `videoseason` | `mediaReporting.sessionDetails.season` | string | The season number that the show belongs to. This value is only required if the show is part of a series. |
| `videoepisode` | `mediaReporting.sessionDetails.episode` | string | The number of the episode. |
| `videogenre` | `mediaReporting.sessionDetails.genreList[]` | string[] | The genre of the video. |
| `videosessionid` | `mediaReporting.sessionDetails.ID` | string | An identifier for an instance of a content stream unique to an individual playback. |
| `videoplayername` | `mediaReporting.sessionDetails.playerName` | string | The name of the video player. |
| `videochannel` | `mediaReporting.sessionDetails.channel` | string | The distribution channel from where the content was played. |
| `videocontenttype` | `mediaReporting.sessionDetails.contentType` | string | The type of stream delivery used for the content. This is automatically set to "Video" for all video views. Recommended values include: VOD, Live, Linear, UGC, DVOD, Radio, Podcast, Audiobook, and Song. |
| `videonetwork` | `mediaReporting.sessionDetails.network` | string | The network or channel name. |
| `videofeedtype` | `mediaReporting.sessionDetails.feed` | string | The type of feed. This can either represent actual feed-related data such as "East HD" or "SD", or the source of the feed, such as a URL. |
| `videosegment` | `mediaReporting.sessionDetails.segment` | string ||
| `videostart` | `mediaReporting.sessionDetails.isViewed` | boolean | A boolean value that indicates whether the video has been started or not. This occurs once the user selects the play button and will count even if there are pre-roll ads, buffering, errors, and so on. |
| `videoplay` | `mediaReporting.sessionDetails.isPlayed` | boolean | A boolean value that indicates if the first frame of the media has started. If the user drops during any ads or buffering time, then the "content start" would not qualify. |
| `videotime` | `mediaReporting.sessionDetails.timePlayed` | integer | The duration (in seconds) for all events of `type=PLAY` on the main content. |
| `videocomplete` | `mediaReporting.sessionDetails.isCompleted` | boolean | A boolean value that indicates if a timed media asset was watched to completion. This value does not necessarily mean the viewer has watched the entire video because this value does not account for the viewer potentially skipping ahead. |
| `videototaltime` | `mediaReporting.sessionDetails.totalTimePlayed` | integer | The total amount of time spent by a user on a specific timed media asset, including time spent watching ads. |
| `videouniquetimeplayed` | `mediaReporting.sessionDetails.uniqueTimePlayed` | integer | The sum of the unique intervals seen by a user on a timed media asset. In other words, the length of playback intervals viewed multiple times are only counted once. |
| `videoaverageminuteaudience` | `mediaReporting.sessionDetails.averageMinuteAudience` | number | The average content time spent for a specific media item. In other words, the total content time spent divided by the length for all of the playback sessions. |
| `videoprogress10` | `mediaReporting.sessionDetails.hasProgress10` | boolean | A boolean value that indicates whether the playhead of a given video has passed the 10% marker of the total video length. The marker is only counted once, even if seeking backwards. If seeking forward, markers that are skipped are not counted. |
| `videoprogress25` | `mediaReporting.sessionDetails.hasProgress25` | boolean | A boolean value that indicates whether the playhead of a given video has passed the 25% marker of the total video length. The marker is only counted once, even if seeking backwards. If seeking forward, markers that are skipped are not counted. |
| `videoprogress50` | `mediaReporting.sessionDetails.hasProgress50` | boolean | A boolean value that indicates whether the playhead of a given video has passed the 50% marker of the total video length. The marker is only counted once, even if seeking backwards. If seeking forward, markers that are skipped are not counted. |
| `videoprogress75` | `mediaReporting.sessionDetails.hasProgress75` | boolean | A boolean value that indicates whether the playhead of a given video has passed the 75% marker of the total video length. The marker is only counted once, even if seeking backwards. If seeking forward, markers that are skipped are not counted.|
| `videoprogress95` | `mediaReporting.sessionDetails.hasProgress95` | boolean | A boolean value that indicates whether the playhead of a given video has passed the 95% marker of the total video length. The marker is only counted once, even if seeking backwards. If seeking forward, markers that are skipped are not counted. |
| `videopause` | `mediaReporting.sessionDetails.hasPauseImpactedStreams` | boolean | A boolean value hat indicates if one or more pauses occurred during the playback of a single media item. |
| `videopausecount` | `mediaReporting.sessionDetails.pauseCount` | integer | The number of pause periods that occurred during playback. |
| `videopausetime` | `mediaReporting.sessionDetails.pauseTime` | integer | The total duration (in seconds) in which playback was paused by a user. |
| `videomvpd` | `mediaReporting.sessionDetails.mvpd` | string | An MVPD identifier provided via Adobe authentication. |
| `videoauthorized` | `mediaReporting.sessionDetails.authorized` | string |  Defines that the user has been authorized via Adobe authentication. |
| `videodaypart` | `mediaReporting.sessionDetails.dayPart` | Defines the time of the day when the content was broadcast or played. ||
| `videoresume` | `mediaReporting.sessionDetails.hasResume` | boolean | A boolean value that marks each playback that was resumed after more than 30 minutes of buffer, pause, or a stall period. |
| `videosegmentviews` | `mediaReporting.sessionDetails.hasSegmentView` | boolean | A boolean value that indicates that at least one frame has been viewed. This frame does not have to be the first frame. |
| `videoaudiolabel` | `mediaReporting.sessionDetails.label` | string | The name of the record label. |
| `videoaudiostation` | `mediaReporting.sessionDetails.station` | string | The radio station or name on which  the audio is played. | 
| `videoaudiopublisher` | `mediaReporting.sessionDetails.publisher` | string | The name of the audio content publisher. | 
| `videosecondssincelastcall` | `mediaReporting.sessionDetails.secondsSinceLastCall` | number | Indicates the amount of time (in seconds) that passed between a user's last known interaction and the moment the session was closed. |
| `videoadload` | `mediaReporting.sessionDetails.adLoad` | string | The type of ad loaded as defined by your own internal representation. |

{style="table-layout:auto"}

## Advertising parameters

Read the following table for information on advertising parameters.

| Data feed | XDM field path | Data type | Description | 
| --- | --- | --- | --- |
| `videoad` | `mediaReporting.advertisingDetails.name` | string | The name of the ad. In reporting, "Ad Name" is the classification and "Ad Name (variable)" is the eVar. |
| `videoadinpod` | `mediaReporting.advertisingDetails.podPosition` | integer  | The index of the ad inside the parent ad start. For example, the first ad has index 0 and the second ad has index 1. |
| `videoadlength` | `mediaReporting.advertisingDetails.length` | integer  | The length of the video ad, measured in seconds. |
| `videoadplayername` | `mediaReporting.advertisingDetails.playerName` | string | The name of the player used to render the ad. |
| `videoadpod` | `mediaReporting.advertisingPodDetails.ID` | string | The ID of the ad break. |
| `videoadname` | `mediaReporting.advertisingDetails.friendlyName` | string | The friendly (human-readable) name of the ad break. |
| `videoadadvertiser` | `mediaReporting.advertisingDetails.advertiser` | string | The company or brand whose product is featured in the ad. |
| `videoadcampaign` | `mediaReporting.advertisingDetails.campaignID` | string | The ID of the ad campaign. |
| `videoadstart` | `mediaReporting.advertisingDetails.isStarted` | boolean | A boolean value that indicates whether the ad has been started or not. |
| `videoadcomplete` | `mediaReporting.advertisingDetails.isCompleted` | boolean | A boolean value that indicates whether the had has been completed or not. |
| `videoadtime` | `mediaReporting.advertisingDetails.timePlayed` | integer | The total amount of time, measured in seconds, spent watching the ad. |

{style="table-layout:auto"}

## Chapter parameters

Read the following table for information on chapter parameters.

| Data feed | XDM field path | Data type | Description | 
| --- | --- | --- | --- |
| `videochapter` | `mediaReporting.chapterDetails.ID` | string | The auto-generated ID of the chapter. |
| `videochapterstart` | `mediaReporting.chapterDetails.isStarted` | boolean | A boolean value that indicates whether or not the chapter has been started. |
| `videochaptercomplete` | `mediaReporting.chapterDetails.isCompleted` | boolean | A boolean value that indicates whether or not the chapter has been completed. |
| `videochaptertime` | `mediaReporting.chapterDetails.timePlayed` | integer | The time, measured in seconds, spent on the chapter. |

{style="table-layout:auto"}

## Player state parameters

Read the following table for information on player state parameters.

| Data feed | XDM field path | Data type | Description | 
| --- | --- | --- | --- |
| `videostatefullscreen` | `mediaReporting.states[].isSet` | boolean | A boolean value that indicates whether or not the video state is set to full screen. |
| `videostatefullscreencount` | `mediaReporting.states[].count` | integer | The number of times that a video state was set to full screen. |
| `videostatefullscreentime` | `mediaReporting.states[].time` | integer | The total duration of when the video state was set to full screen. |
| `videostateclosedcaptioning` | `mediaReporting.states[].isSet` | boolean | A boolean value that indicates whether or not closed captioning is enabled. |
| `videostateclosedcaptioningcount` | `mediaReporting.states[].count` | integer | The number of times that closed captioning was enabled. |
| `videostateclosedcaptioningtime` | `mediaReporting.states[].time` | integer | The total duration of when closed captioning was enabled. |
| `videostatemute` | `mediaReporting.states[].isSet` | boolean | A boolean value that indicates whether or not the video state was set to mute. |
| `videostatemutecount` | `mediaReporting.states[].count` | integer | The number of times that a video was muted. |
| `videostatemutetime` | `mediaReporting.states[].time` | integer | The total duration of the video in mute. |
| `videostatepictureinpicture` | `mediaReporting.states[].isSet` | boolean | A boolean value that indicates whether or not picture-in-picture mode is enabled. |
| `videostatepictureinpicturecount` | `mediaReporting.states[].count` | integer | The number of times that picture-in-picture mode is enabled. |
| `videostatepictureinpicturetime` | `mediaReporting.states[].time` | integer | The total duration of when picture-in-picture mode was enabled. |
| `videostateinfocus` | `mediaReporting.states[].isSet` | boolean | A boolean value that indicates whether or not in-focus mode is enabled |
| `videostateinfocuscount` | `mediaReporting.states[].count` | integer | The number of times that in-picture mode was enabled. |
| `videostateinfocustime` | `mediaReporting.states[].time` | integer | The total duration of when in-focus mode was enabled. |

{style="table-layout:auto"}

## Quality parameters

Read the following table for information on quality parameters.

| Data feed | XDM field path | Data type | Description | 
| --- | --- | --- | --- |
| `videoqoebitrateaverage` | `mediaReporting.qoeDataDetails.bitrateAverage` | number | The average bitrate (in kbps, integer). This metric is computed as a weighted average of all bitrate values related to the play duration that occurred during a playback session. |
| `videoqoebitratechange` | `mediaReporting.qoeDataDetails.hasBitrateChangeImpactedStreams` | boolean | A boolean value that indicates the number of streams in which bitrate changes occurred. This metric is set to true only if at least one bitrate change event occurred during a playback session. |
| `videoqoebitratechangecountevar` | `mediaReporting.qoeDataDetails.bitrateChangeCount` | integer ||
| `videoqoebitrateaverageevar` | `mediaReporting.qoeDataDetails.bitrateAverageBucket` | string | The number of bitrate changes. This value is computed as a sum of all bitrate change events that occurred during a playback session. |
| `videoqoetimetostartevar`| `mediaReporting.qoeDataDetails.timeToStart` | integer | The duration, measured in seconds, that passed between video load and video start. |
| `videoqoedroppedframes` | `mediaReporting.qoeDataDetails.hasDroppedFrameImpactedStreams` | boolean | A boolean value that indicates the number of streams in which frames were dropped. This metric is set to true only if at least one frame was dropped during a playback session. |
| `videoqoedroppedframecountevar`| `mediaReporting.qoeDataDetails.droppedFrames` | integer | The number of frames dropped during playback of the main content. |
| `videoqoebuffercountevar` | `mediaReporting.qoeDataDetails.bufferCount` | integer | The number of buffer events. This metric is computed as a count of the different buffer states that occurred during a playback session. This is a count of how many times the player enters a buffer state from other states, such as playing or pausing. |
| `videoqoebuffertimeevar` | `mediaReporting.qoeDataDetails.bufferTime` | integer | The total amount of time, measured in seconds, spent buffering. This value is computed as a sum of all buffer events durations that occurred during a playback session. |
| `videoqoebuffer` | `mediaReporting.qoeDataDetails.hasBufferImpactedStreams` | boolean | A boolean value that indicates the number of streams impacted by buffering. This metric is set to true only if at least one buffer event occurred during a playback session. |
| `videoqoeerror` | `mediaReporting.qoeDataDetails.hasErrorImpactedStreams` | boolean |  A boolean value that indicates the number of streams in which an error event occurred. For example, if a trackError was called during the playback session, and a type=error heartbeat call was generated. This metric is set to true only if at least one error occurred during playback. |
| `videoerrorcountevar` | `mediaReporting.qoeDataDetails.errorCount` | integer | The number of errors that occurred. This value is computed as a sum of all error events that occurred during a playback session. |
| `videoqoeplayersdkerrors` | `mediaReporting.qoeDataDetails.playerSdkErrors` | array of string | The unique error IDs generated by the player SDK. You must provide the error codes or IDs at implementation time via provided error APIs. |
| `videoqoeextneralerrors` | `mediaReporting.qoeDataDetails.externalErrors` | array of string | The unique error IDs from any external source, such as CDN errors. You must provide the error codes or IDs at implementation time via provided error APIs. |
| `videoqoedropbeforestart` | `mediaReporting.qoeDataDetails.isDroppedBeforeStart` | boolean | The unique error IDs generated by Media SDK during playback. |

{style="table-layout:auto"}

## Deprecated fields

Read this section for information on deprecated Analytics mapping fields.

### Direct mapping fields

+++Select to view a table of deprecated direct mapping fields

| Data feed | XDM field | XDM type | Description |
| --- | --- | --- | --- |
| `m_evar1`<br/>`[...]`<br/>`m_evar250` | `_experience.analytics.customDimensions.`<br/>`eVars.eVar1`<br/>`[...]`<br/>`_experience.analytics.customDimensions.`<br/>`eVars.eVar250` | string | Custom Analytics eVars. Each organization can use eVars differently. |
| `m_prop1`<br/>`[...]`<br/>`m_prop75` | `_experience.analytics.customDimensions.`<br/>`props.prop1`<br/>`[...]`<br/>`_experience.analytics.customDimensions.`<br/>`props.prop75` | string | Custom Analytics props. Each organization can use props differently. |
| `m_browser` | `_experience.analytics.environment.`<br/>`browserID` | integer | The number ID of the browser. |
| `m_browser_height` | `environment.browserDetails.viewportHeight` | integer | The height of the browser, in pixels. |
| `m_browser_width` | `environment.browserDetails.viewportWidth` | integer | The width of the browser, in pixels. |
| `m_campaign` | `marketing.trackingCode` | string  | The variable used in the Tracking Code dimension. |
| `m_channel` | `web.webPageDetails.siteSection` | string  | The variable used in the Site Sections dimension. |
| `m_domain` | `environment.domain` | string | The variable used in the Domain dimension. It is based on the user's internet service provider (ISP). |
| `m_geo_city` | `placeContext.geo.city` | string | The name of the city of the hit. This is based off the hit's IP address. |
| `m_geo_dma` | `placeContext.geo.dmaID` | integer | The numeric ID of the demographic area for the hit. This is based off the hit's IP address. |
| `m_geo_region` | `placeContext.geo.stateProvince` | string  | The name of either the state or region of the hit. This is based off the hit's IP address. |
| `m_geo_zip` | `placeContext.geo.postalCode` | string  | The ZIP code of the hit. This is based off the hit's IP address. |
| `m_keywords` | `search.keywords` | string  | The variable used in the Keyword dimension. |
| `m_os` | `_experience.analytics.environment.`<br/>`operatingSystemID` | integer | The numeric ID representing the operating system of the visitor. This is based on the user_agent column. |
| `m_page_url` | `web.webPageDetails.URL` | string | The URL of the page hit. |
| `m_pagename` | `web.webPageDetails.pageViews.value` | string  | Equals 1 on hits that have a page name. This is similar to the Adobe Analytics Page Views metric. |
| `m_referrer` | `web.webReferrer.URL` | string  | The Page URL of the previous page. |
| `m_search_page_num` | `search.pageDepth` | integer | Used by the All Search Page Rank dimension. Indicates which page of search results your site appeared on before the user clicked through to your site. |
| `m_state` | `_experience.analytics.customDimensions.`<br/>`stateProvince` | string | State variable. |
| `m_user_server` | `web.webPageDetails.server` | string | A variable used in the Server dimension. |
| `m_zip` | `_experience.analytics.customDimensions.`<br/>`postalCode` | string | A variable used to populate the Zip Code dimension. |
| `accept_language` | `environment.browserDetails.acceptLanguage` | string | Lists all the accepted languages, as indicated in the Accept-Language HTTP header. |
| `homepage` | `web.webPageDetails.isHomePage` | boolean | No longer used. Indicated if the current URL is the browser's homepage. |
| `ipv6` | `environment.ipV6` | string ||
| `j_jscript` | `environment.browserDetails.javaScriptVersion` | string | The version of JavaScript supported by the browser. |
| `user_agent` | `environment.browserDetails.userAgent` | string | The user agent string sent in the HTTP header. |
| `mobileappid` | `application.name` | string | The mobile app ID, stored in the following format: `[AppName][BundleVersion]`. |
| `mobiledevice` | `device.model` | string | The name of the mobile device. On iOS, it is stored as a comma-separated 2-digit string. The first number represents the device generation and the second number represents the device family. |
| `pointofinterest` | `placeContext.POIinteraction.POIDetail.`<br/>`name` | string | Used by mobile services. Represents the point of interest. |
| `pointofinterestdistance` | `placeContext.POIinteraction.POIDetail.`<br/>`geoInteractionDetails.distanceToCenter` | number | Used by mobile services. Represents the point of interest distance. |
| `mobileplaceaccuracy` | `placeContext.POIinteraction.POIDetail.`<br/>`geoInteractionDetails.deviceGeoAccuracy` | number | Collected from the context data variable a.loc.acc. Indicates the accuracy of the GPS in meters at time of collection. |
| `mobileplacecategory` | `placeContext.POIinteraction.POIDetail.`<br/>`category` | string | Collected from the context data variable a.loc.category. Describes the category of a specific place. |
| `mobileplaceid` | `placeContext.POIinteraction.POIDetail.`<br/>`POIID` | string | Collected from the context data variable a.loc.id. Identifier for a given point of interest. |
| `videoadpod` | `advertising.adAssetViewDetails.adBreak._id` | string | |
| `mobilebeaconmajor` | `placeContext.POIinteraction.POIDetail.`<br/>`beaconInteractionDetails.beaconMajor` | number | Mobile Services beacon major. |
| `mobilebeaconminor` | `placeContext.POIinteraction.POIDetail.`<br/>`beaconInteractionDetails.beaconMinor` | number | Mobile Services beacon minor. |
| `mobilebeaconuuid` | `placeContext.POIinteraction.POIDetail.`<br/>`beaconInteractionDetails.proximityUUID` | string | Mobile Services beacon UUID. |
| `mobileinstalls` | `application.firstLaunches` | Object  | This is triggered at the first run after installation or reinstallation `{id (string), value (number)}` |
| `mobileupgrades` | `application.upgrades` | Object | Reports the number of app upgrades. Triggers at the first run after upgrade or any time the version number changes. | `{id (string), value (number)}` |
| `mobilelaunches` | `application.launches` | Object | The number of times the app has been launched.  `{id (string), value (number)}` |
| `mobilecrashes` | `application.crashes` | Object |  `{id (string), value (number)}` |
| `mobilemessageclicks` | `directMarketing.clicks` | Object |  `{id (string), value (number)}` |
| `mobileplaceentry` | `placeContext.POIinteraction.poiEntries` | Object | `{id (string), value (number)}` |
| `mobileplaceexit` | `placeContext.POIinteraction.poiExits` | Object | `{id (string), value (number)}` |
| `videoqoetimetostart` | `media.mediaTimed.primaryAssetViewDetails.`<br/>`qoe.timeToStart` | Object | The video quality time to start. `{id (string), value (number)}` |
| `videoqoedropbeforestart` | `media.mediaTimed.dropBeforeStarts` | Object | `{id (string), value (number)}` |
| `videoqoebuffercount` | `media.mediaTimed.primaryAssetViewDetails.`<br/>`qoe.buffers` | Object | Video quality buffer count `{id (string), value (number)}` |
| `videoqoebuffertime` | `media.mediaTimed.primaryAssetViewDetails.`<br/>`qoe.bufferTime` | Object | Video quality buffer time `{id (string), value (number)}` |
| `videoqoebitratechangecount` | `media.mediaTimed.primaryAssetViewDetails.`<br/>`qoe.bitrateChanges` | Object | Video quality change count `{id (string), value (number)}` |
| `videoqoebitrateaverage` | `media.mediaTimed.primaryAssetViewDetails.`<br/>`qoe.bitrateAverage` | Object | Video quality average bit rate `{id (string), value (number)}` |
| `videoqoeerrorcount` | `media.mediaTimed.primaryAssetViewDetails.`<br/>`qoe.errors` | Object | Video quality error count `{id (string), value (number)}` |
| `videoqoedroppedframecount` | `media.mediaTimed.primaryAssetViewDetails.`<br/>`qoe.droppedFrames` | Object | `{id (string), value (number)}` |

{style="table-layout:auto"}

+++

## Generated mapping fields

Select fields coming from ADC must be transformed, requiring logic beyond a direct copy from Adobe Analytics to be generated in XDM.

+++Select to view a table of deprecated generated mapping fields

| Data feed | XDM field | XDM type | Description |
| --- | --- | --- | --- |
| `m_prop1`<br/>`[...]`<br/>`m_prop75` | `_experience.analytics.customDimensions`<br/>`.listprops.prop1`<br/>`[...]`<br/>`_experience.analytics.customDimensions.`<br/>`listprops.prop75` | Object | Custom Analytics props, configured to be list props. It contains a delimited list of values. | {} |
| `m_hier1`<br/>`[...]`<br/>`m_hier5` | `_experience.analytics.customDimensions.`<br/>`hierarchies.hier1`<br/>`[...]`<br/>`_experience.analytics.customDimensions.`<br/>`hierarchies.hier5` | Object | Used by hierarchy variables. It contains a delimited list of values. | {values (array), delimiter (string)} |
| `m_mvvar1`<br/>`[...]`<br/>`m_mvvar3` | `_experience.analytics.customDimensions.`<br/>`lists.list1.list[]`<br/>`[...]`<br/>`_experience.analytics.customDimensions.`<br/>`lists.list3.list[]` | array | Custom Analytics list variables. Contains a delimited list of values. | {value (string), key (string)} |
| `m_color` | `device.colorDepth` | integer | The color depth ID, which is based off the value of the c_color column. | 
| `m_cookies` | `environment.browserDetails.cookiesEnabled` | boolean | A variable used in the Cookie Support dimension. |
| `m_event_list` | `commerce.purchases`,<br/>`commerce.productViews`,<br/>`commerce.productListOpens`,<br/>`commerce.checkouts`,<br/>`commerce.productListAdds`,<br/>`commerce.productListRemovals`,<br/>`commerce.productListViews` | Object | Standard commerce events triggered on the hit.| {id (string), value (number)} |
| `m_event_list` | `_experience.analytics.event1to100.event1`<br/>`[...]`<br/>`_experience.analytics.event901to1000.event1000` | Object | Custom events triggered on the hit. | {id (Object), value (Object)} |
| `m_geo_country` | `placeContext.geo.countryCode` | string | Abbreviation of the country where the hit came from, which is based off the IP. |
| `m_geo_latitude` | `placeContext.geo._schema.latitude` | number | |
| `m_geo_longitude` | `placeContext.geo._schema.longitude` | number | |
| `m_java_enabled` | `environment.browserDetails.javaEnabled` | boolean | A flag indicating whether Java&trade; is enabled. |
| `m_latitude` | `placeContext.geo._schema.latitude` | number | |
| `m_longitude` | `placeContext.geo._schema.longitude` | number | |
| `m_page_event_var1` | `web.webInteraction.URL` | string | A variable that is only used in link tracking image requests. This variable contains the URL of the download link, exit link, or custom link clicked. |
| `m_page_event_var2` | `web.webInteraction.name` | string | A variable that is only used in link tracking image requests. This lists the custom name of the link, if it is specified. |
| `m_page_type` | `web.webPageDetails.isErrorPage` | boolean | A variable that is used to populate the Pages Not Found dimension. This variable should either be empty, or contain "ErrorPage". |
| `m_pagename_no_url` | `web.webPageDetails.name` | number | The name of the page (if set). If no page is specified, this value is left empty. |
| `m_paid_search` | `search.isPaid` | boolean | A flag that is set if the hit matches paid search detection. |
| `m_product_list` | `productListItems[].items` | array | The product list, as passed in through the products variable. | {SKU (string), quantity (integer), priceTotal (number)} |
| `m_ref_type` | `web.webReferrer.type` | string | A numeric ID representing the type of referral for the hit.<br/>`1`: Inside your site<br/>`2`: Other websites<br/>`3`: Search engines<br/>`4`: Hard drive<br/>`5`: USENET<br/>`6`: Typed/Bookmarked (no referrer)<br/>`7`: email<br/>`8`: No JavaScript<br/>`9`: Social Networks |
| `m_search_engine` | `search.searchEngine` | string | The numeric ID representing the search engine that referred the visitor to your site. |
| `post_currency` | `commerce.order.currencyCode` | string | The currency code that was used during the transaction. |
| `post_cust_hit_time_gmt` | `timestamp` | string | This is only used in timestamp-enabled datasets. This is the timestamp sent with the hit, based on UNIX&reg; time. |
| `post_cust_visid` | `identityMap` | object  | The customer visitor ID. |
| `post_cust_visid` | `endUserIDs._experience.aacustomid.primary` | boolean | The customer visitor ID. |
| `post_cust_visid` | `endUserIDs._experience.aacustomid.namespace.code` | string | The customer visitor ID. |
| `post_visid_high` + `visid_low` | `identityMap` | object  | A unique identifier for a visit. |
| `post_visid_high` + `visid_low` | `endUserIDs._experience.aaid.id` | string | A unique identifier for a visit. |
| `post_visid_high` | `endUserIDs._experience.aaid.primary` | boolean | Used with `visid_low` to uniquely identify a visit. |
| `post_visid_high` | `endUserIDs._experience.aaid.namespace.code` | string | Used with `visid_low` to uniquely identify a visit. |
| `post_visid_low` | `identityMap` | object  | Used with visid_high to uniquely identify a visit. |
| `hit_time_gmt` | `receivedTimestamp` | string | The timestamp of the hit, based in UNIX&reg; time. |
| `hitid_high` + `hitid_low` | `_id` | string | A unique identifier to identify a hit. |
| `hitid_low` | `_id` | string | Used with hitid_high to uniquely identify a hit. |
| `ip` | `environment.ipV4` | string | The IP Address, based on the HTTP header of the image request. |
| `j_jscript` | `environment.browserDetails.javaScriptEnabled` | boolean | The version of JavaScript used. |
| `mcvisid_high` + `mcvisid_low` | identityMap | object | The Experience Cloud Visitor ID. |
| `mcvisid_high` + `mcvisid_low` | endUserIDs._experience.mcid.id | string | The Experience Cloud ID (ECID) is also known as MCID and sometimes used in namespaces. |
| `mcvisid_high` | `endUserIDs._experience.mcid.primary` | boolean | The Experience Cloud ID (ECID) is also known as MCID and sometimes used in namespaces. |
| `mcvisid_high` | `endUserIDs._experience.mcid.namespace.code` | string | The Experience Cloud ID (ECID) is also known as MCID and sometimes used in namespaces. |
| `mcvisid_low` | `identityMap` | object | The Experience Cloud Visitor ID. |
| `sdid_high` + `sdid_low` | `_experience.target.supplementalDataID` | string | Hit Stitching ID. The analytics field sdid_high and sdid_low is the supplemental data id used to stitch two (or more) incoming hits together. |
| `mobilebeaconproximity` | `placeContext.POIinteraction.POIDetail.`<br/>`beaconInteractionDetails.proximity` | string | Mobile Services beacon proximity. |

{style="table-layout:auto"}

+++

## Split-mapping fields

These fields have a single source, but map to **multiple** XDM locations.

+++Select to view a table of deprecated split mapping fields

| Data feed | XDM field | XDM type | Description |
| --- | --- | --- | --- |
| `s_resolution` | `device.screenWidth`,<br/>`device.screenHeight` | integer  | Numeric ID representing the resolution of the monitor. |
| `mobileosversion` | `environment.operatingSystem`,<br/>`environment.operatingSystemVersion` | string  | Mobile operating system version. |

{style="table-layout:auto"}

+++

## Advanced mapping fields

Select fields (known as "post values") contain data after Adobe has adjusted their values using Processing rules, VISTA rules, and lookup tables. Most post values have a pre-processed counterpart. 

The Analytics source connector sends pre-processed data into a dataset in Experience Platform. You can transform this data to its post-processed counterpart using transformations. To learn more about performing these transformations using Query Service, see [Adobe-defined functions](/help/query-service/sql/adobe-defined-functions.md) in the Query Service user guide.

To learn more about performing these transformations using Query Service, see [Adobe-defined functions](/help/query-service/sql/adobe-defined-functions.md) in the Query Service user guide.

+++Select to view a table of deprecated advanced mapping fields

| Data feed | XDM field | XDM type | Description |
| --- | --- | --- | --- ||
| `post_evar1`<br/>`[...]`<br/>`post_evar250` | `_experience.analytics.customDimensions.`<br/>`eVars.eVar1`<br/>`[...]`<br/>`_experience.analytics.customDimensions.`<br/>`eVars.eVar250` | string | Custom Analytics eVars. Each organization can use eVars differently. |
| `post_prop1`<br/>`[...]`<br/>`post_prop75` | `_experience.analytics.customDimensions.`<br/>`props.prop1`<br/>`[...]`<br/>`_experience.analytics.customDimensions.`<br/>`props.prop75` | string | Custom Analytics props. Each organization can use props differently. | 
| `post_browser_height` | `environment.browserDetails.viewportHeight` | integer | The height of the browser, in pixels. |
| `post_browser_width` | `environment.browserDetails.viewportWidth` | integer | The width of the browser, in pixels. |
| `post_campaign` | `marketing.trackingCode` | string | The variable used in the Tracking Code dimension. |
| `post_channel` | `web.webPageDetails.siteSection` | string | The variable used in the Site Sections dimension. |
| `post_cust_visid` | `endUserIDs._experience.aacustomid.id` | string | The custom visitor ID, if set. |
| `post_first_hit_page_url` | `_experience.analytics.endUser.`<br/>`firstWeb.webPageDetails.URL` | string | The URL of the first page the visitor reaches. |
| `post_first_hit_pagename` | `_experience.analytics.endUser.`<br/>`firstWeb.webPageDetails.name` | string | A variable used in the Entry Page Original dimension. The page name of the entry page of the visitor. |
| `post_keywords` | `search.keywords` | string | The keywords that were collected for the hit. |
| `post_page_url` | `web.webPageDetails.URL` | string | The URL of the page hit. |
| `post_pagename` | `web.webPageDetails.pageViews.value` | string | Equals 1 on hits that have a page name. This is similar to the Adobe Analytics Page Views metric. |
| `post_purchaseid` | `commerce.order.purchaseID` | string | Variable that is used to uniquely identify purchases. |
| `post_referrer` | `web.webReferrer.URL` | string | The URL of the previous page. |
| `post_state` | `_experience.analytics.customDimensions.`<br/>`stateProvince` | string |  State variable. |
| `post_user_server` | `web.webPageDetails.server` | string | A variable used in the Server dimension. |
| `post_zip` | `_experience.analytics.customDimensions.`<br/>`postalCode` | string | A variable used to populate the Zip Code dimension. |
| `browser` | `_experience.analytics.environment.`<br/>`browserID` | integer | The numeric ID of the browser. |
| `domain` | `environment.domain` | string | The variable used in the Domain dimension. It is based on the user's internet service provider (ISP). |
| `first_hit_referrer` | `_experience.analytics.endUser.`<br/>`firstWeb.webReferrer.URL` | string | The first referring URL for the visitor. |
| `geo_city` | `placeContext.geo.city` | string | The name of the city of the hit. This is based off the hit's IP address. |
| `geo_dma` | `placeContext.geo.dmaID` | integer | The numeric ID of the demographic area for the hit. This is based off the hit's IP address. |
| `geo_region` | `placeContext.geo.stateProvince` | string | The name of either the state or region of the hit. This is based off the hit's IP address. |
| `geo_zip` | `placeContext.geo.postalCode` | string | The ZIP code of the hit. This is based off the hit's IP address. |
| `os` | `_experience.analytics.environment.`<br/>`operatingSystemID` | integer | The numeric ID representing the operating system of the visitor. This is based on the user_agent column. |
| `search_page_num` | `search.pageDepth` | integer | This variable is used by the All Search Page Rank dimension, and indicates which page of search results your site | appeared on before the user clicked through to your site. |
| `visit_keywords` | `_experience.analytics.session.`<br/>`search.keywords` | string | A variable used in the Search Keywords dimension. |
| `visit_num` | `_experience.analytics.session.`<br/>`num` | integer | A variable used in the Visit Number dimension. This starts at 1, and increments each time a new visit starts (per user). |
| `visit_page_num` | `_experience.analytics.session.`<br/>`depth` | integer | A variable used in the Hit Depth dimension. This value increases by 1 for each hit the user generates, and resets after each visit. |
| `visit_referrer` | `_experience.analytics.session.`<br/>`web.webReferrer.URL` | string | The first referrer of the visit. |
| `visit_search_page_num` | `_experience.analytics.session.`<br/>`search.pageDepth` | integer | The first Page Name of the visit. |
| `post_prop1`<br/>`[...]`<br/>`post_prop75` | `_experience.analytics.customDimensions.`<br/>`listprops.prop1`<br/>`[...]`<br/>`_experience.analytics.customDimensions.`<br/>`listprops.prop75` | Object | Custom Analytics props, configured to be list props. It contains a delimited list of values. |
| `post_hier1`<br/>`[...]`<br/>`post_hier5` | `_experience.analytics.customDimensions.`<br/>`hierarchies.hier1`<br/>`[...]`<br/>`_experience.analytics.customDimensions.`<br/>`hierarchies.hier5` | Object | Used by hierarchy variables and contains a delimited list of values. | {values (array), delimiter (string)} |
| `post_mvvar1`<br/>`[...]`<br/>`post_mvvar3` | `_experience.analytics.customDimensions.`<br/>`lists.list1.list[]`<br/>`[...]`<br/>`_experience.analytics.customDimensions.`<br/>`lists.list3.list[]` | array | A list of variable values. Contains a delimited list of custom values, depending on implementation. | {value (string), key (string)} |
| `post_cookies` | `environment.browserDetails.cookiesEnabled` | boolean | Variable used in the Cookie Support dimension. |
| `post_event_list` | `commerce.purchases`,<br/>`commerce.productViews`,<br/>`commerce.productListOpens`,<br/>`commerce.checkouts`,<br/>`commerce.productListAdds`,<br/>`commerce.productListRemovals`,<br/>`commerce.productListViews` | Object | Standard commerce events triggered on the hit. | {id (string), value (number)} |
| `post_event_list` | `_experience.analytics.event1to100.event1`<br/>`[...]`<br/>`_experience.analytics.event901to1000.event1000` | Object | Custom events triggered on the hit.| {id (Object), value (Object)} |
| `post_java_enabled` | `environment.browserDetails.javaEnabled` | boolean | A flag indicating whether Java&trade; is enabled. |
| `post_latitude` | `placeContext.geo._schema.latitude` | number |   |
| `post_longitude` | `placeContext.geo._schema.longitude` | number |   | 
| `post_page_event` | `web.webInteraction.type` | string | The type of hit that is sent in the image request (standard hit, download link, exit link, or custom link clicked). |
| `post_page_event` | `web.webInteraction.linkClicks.value` | number | Equals 1 if the hit is a link click. This is similar to the Page Events metric in Adobe Analytics. |
| `post_page_event_var1` | `web.webInteraction.URL` | string | This variable is only used in link tracking image requests. It is the URL of the download link, exit link, or custom link clicked. |
| `post_page_event_var2` | `web.webInteraction.name` | string | This variable is only used in link tracking image requests. It is the custom name of the link. |
| `post_page_type` | `web.webPageDetails.isErrorPage` | boolean | This is used to populate the Pages Not Found dimension. This variable should either be empty or contain "ErrorPage" |
| `post_pagename_no_url` | `web.webPageDetails.name` | number | The name of the page (if set). If no page is specified, this value is left empty. |
| `post_product_list` | `productListItems[].items` | array | The product list, as passed in through the products variable. | {SKU (string), quantity (integer), priceTotal (number)} |
| `post_search_engine` | `search.searchEngine` | string | The numeric ID representing the search engine that referred the visitor to your site. |
| `mvvar1_instances` | `.list.items[]` | Object | List of variable values. Contains a delimited list of custom values, depending on implementation. |
| `mvvar2_instances` | `.list.items[]` | Object | List of variable values. Contains a delimited list of custom values, depending on implementation. |
| `mvvar3_instances` | `.list.items[]` | Object | List of variable values. Contains a delimited list of custom values, depending on implementation. |
| `color` | `device.colorDepth` | integer | Color depth ID, based on the value of the c_color column. |
| `first_hit_ref_type` | `_experience.analytics.endUser.`<br/>`firstWeb.webReferrer.type` | string | The numeric ID, representing the referrer type of the first referrer of the visitor. |
| `first_hit_time_gmt` | `_experience.analytics.endUser.`<br/>`firstTimestamp` | integer | Timestamp of the first hit of the visitor in UNIX&reg; time. |
| `geo_country` | `placeContext.geo.countryCode` | string | Abbreviation of the country the hit came from, based on IP. |
| `geo_latitude` | `placeContext.geo._schema.latitude` | number |  |
| `geo_longitude` | `placeContext.geo._schema.longitude` | number |  |
| `paid_search` | `search.isPaid` | boolean | A flag that is set if the hit matches paid search detection. |
| `ref_type` | `web.webReferrer.type` | string | A numeric ID representing the type of referral for the hit. |
| `visit_paid_search` | `_experience.analytics.session.`<br/>`search.isPaid` | boolean | A flag (1=paid, 0=not paid) indicating if the first hit of the visit was from a paid search hit. |
| `visit_ref_type` | `_experience.analytics.session.`<br/>`web.webReferrer.type` | string | Numeric ID representing the referrer type of the first referrer of the visit. |
| `visit_search_engine` | `_experience.analytics.session.`<br/>`search.searchEngine` | string | Numeric ID of the first search engine of the visit. |
| `visit_start_time_gmt` | `_experience.analytics.session.`<br/>`timestamp` | integer | Timestamp of the first hit of the visit in UNIX&reg; time. |

+++