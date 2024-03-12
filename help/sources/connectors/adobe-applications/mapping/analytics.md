---
keywords: Analytics mapping fields;analytics mapping
solution: Experience Platform
title: Mapping Fields for the Adobe Analytics Source Connector
description: Map Adobe Analytics fields to XDM fields using the Analytics Source Connector.
exl-id: 15dc1368-5cf1-42e1-9683-d5158f8aa2db
---
# Analytics field mappings

Adobe Experience Platform allows you to ingest Adobe Analytics data through the Analytics source. Some of the data ingested through ADC can be mapped directly from Analytics fields to Experience Data Model (XDM) fields, while other data requires transformations and specific functions to be successfully mapped.

![](../images/analytics-data-experience-platform.png)

## Direct mapping fields

Select fields are directly mapped from Adobe Analytics to Experience Data Model (XDM).  

| Analytics field | XDM field | XDM type | Description |
| --------------- | --------- | -------- | ---------- |
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
| `ipv6` | `environment.ipV6` | string |
| `j_jscript` | `environment.browserDetails.javaScriptVersion` | string | The version of JavaScript supported by the browser. |
| `user_agent` | `environment.browserDetails.userAgent` | string | The user agent string sent in the HTTP header. |
| `mobileappid` | `application.name` | string | The mobile app ID, stored in the following format: `[AppName][BundleVersion]`. |
| `mobiledevice` | `device.model` | string | The name of the mobile device. On iOS, it is stored as a comma-separated 2-digit string. The first number represents the device generation and the second number represents the device family. |
| `pointofinterest` | `placeContext.POIinteraction.POIDetail.`<br/>`name` | string | Used by mobile services. Represents the point of interest. |
| `pointofinterestdistance` | `placeContext.POIinteraction.POIDetail.`<br/>`geoInteractionDetails.distanceToCenter` | number | Used by mobile services. Represents the point of interest distance. |
| `mobileplaceaccuracy` | `placeContext.POIinteraction.POIDetail.`<br/>`geoInteractionDetails.deviceGeoAccuracy` | number | Collected from the context data variable a.loc.acc. Indicates the accuracy of the GPS in meters at time of collection. |
| `mobileplacecategory` | `placeContext.POIinteraction.POIDetail.`<br/>`category` | string | Collected from the context data variable a.loc.category. Describes the category of a specific place. |
| `mobileplaceid` | `placeContext.POIinteraction.POIDetail.`<br/>`POIID` | string | Collected from the context data variable a.loc.id. Identifier for a given point of interest. |
| `video` | `media.mediaTimed.primaryAssetReference.`<br/>`_id` | string | The name of the video. |
| `videoad` | `advertising.adAssetReference._id` | string | Identifier of the ad asset. |
| `videocontenttype` | `media.mediaTimed.primaryAssetViewDetails.`<br/>`broadcastContentType` | string | The Video Content-Type. This is automatically set to "Video" for all video views. |
| `videoadpod` | `advertising.adAssetViewDetails.adBreak._id` | string | The pod which the Video Ad is in. |
| `videoadinpod` | `advertising.adAssetViewDetails.index` | integer  | The position the Video Ad is in the pod. |
| `videoplayername` | `media.mediaTimed.primaryAssetViewDetails.`<br/>`playerName` | string | The name of the Video player. |
| `videochannel` | `media.mediaTimed.primaryAssetViewDetails.`<br/>`broadcastChannel` | string | The Video channel. |
| `videoadplayername` | `advertising.adAssetViewDetails.playerName` | string | The name of the Video Ad player. |
| `videochapter` | `media.mediaTimed.mediaChapter.`<br/>`chapterAssetReference._id` | string | The Video chapter's name |
| `videoname` | `media.mediaTimed.primaryAssetReference.`<br/>`_dc.title` | string | The Video name. |
| `videoadname` | `advertising.adAssetReference._dc.title` | string | The name of the Video Ad. |
| `videoshow` | `media.mediaTimed.primaryAssetReference.`<br/>`_iptc4xmpExt.Series._iptc4xmpExt.Name` | string | Video show. |
| `videoseason` | `media.mediaTimed.primaryAssetReference.`<br/>`_iptc4xmpExt.Season._iptc4xmpExt.Name` | string | Video Season. |
| `videoepisode` | `media.mediaTimed.primaryAssetReference.`<br/>`_iptc4xmpExt.Episode._iptc4xmpExt.Name` | string | Video episode. |
| `videonetwork` | `media.mediaTimed.primaryAssetViewDetails.`<br/>`broadcastNetwork` | string | Video network. |
| `videoshowtype` | `media.mediaTimed.primaryAssetReference.`<br/>`showType` | string | Video show type. |
| `videoadload` | `media.mediaTimed.primaryAssetViewDetails.`<br/>`adLoadType` | string | Video ad loads. |
| `videofeedtype` | `media.mediaTimed.primaryAssetViewDetails.`<br/>`sourceFeed` | string | Video feed type. |
| `mobilebeaconmajor` | `placeContext.POIinteraction.POIDetail.`<br/>`beaconInteractionDetails.beaconMajor` | number | Mobile Services beacon major. |
| `mobilebeaconminor` | `placeContext.POIinteraction.POIDetail.`<br/>`beaconInteractionDetails.beaconMinor` | number | Mobile Services beacon minor. |
| `mobilebeaconuuid` | `placeContext.POIinteraction.POIDetail.`<br/>`beaconInteractionDetails.proximityUUID` | string | Mobile Services beacon UUID. |
| `videosessionid` | `media.mediaTimed.primaryAssetViewDetails.`<br/>`_id` | string | Video session ID. |
| `videogenre` | `media.mediaTimed.primaryAssetReference.`<br/>`_iptc4xmpExt.Genre` | array | Video genre. | {title (Object), description (Object), type (Object), meta:xdmType (Object), items (string), meta:xdmField (Object)} |
| `mobileinstalls` | `application.firstLaunches` | Object  | This is triggered at the first run after installation or reinstallation | {id (string), value (number)} |
| `mobileupgrades` | `application.upgrades` | Object | Reports the number of app upgrades. Triggers at the first run after upgrade or any time the version number changes. | {id (string), value (number)} |
| `mobilelaunches` | `application.launches` | Object | The number of times the app has been launched. | {id (string), value (number)} |
| `mobilecrashes` | `application.crashes` | Object | <!-- MISSING --> | {id (string), value (number)} |
| `mobilemessageclicks` | `directMarketing.clicks` | Object | <!-- MISSING --> | {id (string), value (number)} |
| `mobileplaceentry` | `placeContext.POIinteraction.poiEntries` | Object | <!-- MISSING --> | {id (string), value (number)} |
| `mobileplaceexit` | `placeContext.POIinteraction.poiExits` | Object | <!-- MISSING --> | {id (string), value (number)} |
| `videotime` | `media.mediaTimed.timePlayed` | Object | <!-- MISSING --> | {id (string), value (number)} |
| `videostart` | `media.mediaTimed.impressions` | Object | <!-- MISSING --> | {id (string), value (number)} |
| `videocomplete` | `media.mediaTimed.completes` | Object | <!-- MISSING --> | {id (string), value (number)} |
| `videosegmentviews` | `media.mediaTimed.mediaSegmentViews` | Object | <!-- MISSING --> | {id (string), value (number)} |
| `videoadstart` | `advertising.impressions` | Object | <!-- MISSING --> | {id (string), value (number)} |
| `videoadcomplete` | `advertising.completes` | Object | <!-- MISSING --> | {id (string), value (number)} |
| `videoadtime` | `advertising.timePlayed` | Object | <!-- MISSING --> | {id (string), value (number)} |
| `videochapterstart` | `media.mediaTimed.mediaChapter.`<br/>`impressions` | Object | <!-- MISSING --> | {id (string), value (number)} |
| `videochaptercomplete` | `media.mediaTimed.mediaChapter.`<br/>`completes` | Object | <!-- MISSING --> | {id (string), value (number)} |
| `videochaptertime` | `media.mediaTimed.mediaChapter.`<br/>`timePlayed` | Object | <!-- MISSING --> | {id (string), value (number)} |
| `videoplay` | `media.mediaTimed.starts` | Object | <!-- MISSING --> | {id (string), value (number)} |
| `videototaltime` | `media.mediaTimed.totalTimePlayed` | Object | <!-- MISSING --> | {id (string), value (number)} |
| `videoqoetimetostart` | `media.mediaTimed.primaryAssetViewDetails.`<br/>`qoe.timeToStart` | Object | The video quality time to start. | {id (string), value (number)} |
| `videoqoedropbeforestart` | `media.mediaTimed.dropBeforeStarts` | Object | <!-- MISSING --> | {id (string), value (number)} |
| `videoqoebuffercount` | `media.mediaTimed.primaryAssetViewDetails.`<br/>`qoe.buffers` | Object | Video quality buffer count | {id (string), value (number)} |
| `videoqoebuffertime` | `media.mediaTimed.primaryAssetViewDetails.`<br/>`qoe.bufferTime` | Object | Video quality buffer time | {id (string), value (number)} |
| `videoqoebitratechangecount` | `media.mediaTimed.primaryAssetViewDetails.`<br/>`qoe.bitrateChanges` | Object | Video quality change count | {id (string), value (number)} |
| `videoqoebitrateaverage` | `media.mediaTimed.primaryAssetViewDetails.`<br/>`qoe.bitrateAverage` | Object | Video quality average bit rate | {id (string), value (number)} |
| `videoqoeerrorcount` | `media.mediaTimed.primaryAssetViewDetails.`<br/>`qoe.errors` | Object | Video quality error count | {id (string), value (number)} |
| `videoqoedroppedframecount` | `media.mediaTimed.primaryAssetViewDetails.`<br/>`qoe.droppedFrames` | Object | <!-- MISSING --> | {id (string), value (number)} |
| `videoprogress10` | `media.mediaTimed.progress10` | Object | <!-- MISSING --> | {id (string), value (number)} |
| `videoprogress25` | `media.mediaTimed.progress25` | Object | <!-- MISSING --> | {id (string), value (number)} |
| `videoprogress50` | `media.mediaTimed.progress50` | Object | <!-- MISSING --> | {id (string), value (number)} |
| `videoprogress75` | `media.mediaTimed.progress75` | Object | <!-- MISSING --> | {id (string), value (number)} |
| `videoprogress95` | `media.mediaTimed.progress95` | Object | <!-- MISSING --> | {id (string), value (number)} |
| `videoresume` | `media.mediaTimed.resumes` | Object | <!-- MISSING --> | {id (string), value (number)} |
| `videopausecount` | `media.mediaTimed.pauses` | Object | <!-- MISSING --> | {id (string), value (number)} |
| `videopausetime` | `media.mediaTimed.pauseTime` | Object | <!-- MISSING -->| {id (string), value (number)} |
| `videosecondssincelastcall` | `media.mediaTimed.primaryAssetViewDetails.`<br/>`sessionTimeout` | integer  |

{style="table-layout:auto"}

## Split-mapping fields

These fields have a single source, but map to **multiple** XDM locations.

| Analytics field | XDM field | XDM type | Description |
| --------------- | --------- | -------- | ---------- |
| `s_resolution` | `device.screenWidth`,<br/>`device.screenHeight` | integer  | Numeric ID representing the resolution of the monitor. |
| `mobileosversion` | `environment.operatingSystem`,<br/>`environment.operatingSystemVersion` | string  | Mobile operating system version. |
| `videoadlength` | `advertising.adAssetReference._xmpDM.duration` | integer  | Video Ad length. |

{style="table-layout:auto"}

## Generated mapping fields

Select fields coming from ADC must be transformed, requiring logic beyond a direct copy from Adobe Analytics to be generated in XDM.

| Analytics field | XDM field | XDM type | Description |
| --------------- | --------- | -------- | ----------- |
| `m_prop1`<br/>`[...]`<br/>`m_prop75` | `_experience.analytics.customDimensions`<br/>`.listprops.prop1`<br/>`[...]`<br/>`_experience.analytics.customDimensions.`<br/>`listprops.prop75` | Object | Custom Analytics props, configured to be list props. It contains a delimited list of values. | {} |
| `m_hier1`<br/>`[...]`<br/>`m_hier5` | `_experience.analytics.customDimensions.`<br/>`hierarchies.hier1`<br/>`[...]`<br/>`_experience.analytics.customDimensions.`<br/>`hierarchies.hier5` | Object | Used by hierarchy variables. It contains a delimited list of values. | {values (array), delimiter (string)} |
| `m_mvvar1`<br/>`[...]`<br/>`m_mvvar3` | `_experience.analytics.customDimensions.`<br/>`lists.list1.list[]`<br/>`[...]`<br/>`_experience.analytics.customDimensions.`<br/>`lists.list3.list[]` | array | Custom Analytics list variables. Contains a delimited list of values. | {value (string), key (string)} |
| `m_color` | `device.colorDepth` | integer | The color depth ID, which is based off the value of the c_color column. | 
| `m_cookies` | `environment.browserDetails.cookiesEnabled` | boolean | A variable used in the Cookie Support dimension. |
| `m_event_list` | `commerce.purchases`,<br/>`commerce.productViews`,<br/>`commerce.productListOpens`,<br/>`commerce.checkouts`,<br/>`commerce.productListAdds`,<br/>`commerce.productListRemovals`,<br/>`commerce.productListViews` | Object | Standard commerce events triggered on the hit.| {id (string), value (number)} |
| `m_event_list` | `_experience.analytics.event1to100.event1`<br/>`[...]`<br/>`_experience.analytics.event901to1000.event1000` | Object | Custom events triggered on the hit. | {id (Object), value (Object)} |
| `m_geo_country` | `placeContext.geo.countryCode` | string | Abbreviation of the country where the hit came from, which is based off the IP. |
| `m_geo_latitude` | `placeContext.geo._schema.latitude` | number | <!-- MISSING --> |
| `m_geo_longitude` | `placeContext.geo._schema.longitude` | number | <!-- MISSING -->|
| `m_java_enabled` | `environment.browserDetails.javaEnabled` | boolean | A flag indicating whether Java&trade; is enabled. |
| `m_latitude` | `placeContext.geo._schema.latitude` | number | <!-- MISSING --> |
| `m_longitude` | `placeContext.geo._schema.longitude` | number | <!-- MISSING -->|
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
| `videochapter` | `media.mediaTimed.mediaChapter.`<br/>`chapterAssetReference._xmpDM.duration` | integer | The name of the video chapter. |
| `videolength` | `media.mediaTimed.primaryAssetReference.`<br/>`_xmpDM.duration` | integer | The length of the video. |

{style="table-layout:auto"}

## Advanced mapping fields

Select fields (known as "post values") contain data after Adobe has adjusted their values using Processing rules, VISTA rules, and lookup tables. Most post values have a pre-processed counterpart. Your organization can decide if you want to use the pre-processed field, post-processed field, or both.

To learn more about performing these transformations using Query Service, see [Adobe-defined functions](/help/query-service/sql/adobe-defined-functions.md) in the Query Service user guide.

| Analytics field | XDM field | XDM type | Description |
| --------------- | --------- | -------- | ---------- |
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
| `post_latitude` | `placeContext.geo._schema.latitude` | number |   <!-- MISSING --> |
| `post_longitude` | `placeContext.geo._schema.longitude` | number |   <!-- MISSING --> | 
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
| `geo_latitude` | `placeContext.geo._schema.latitude` | number | <!-- MISSING --> |
| `geo_longitude` | `placeContext.geo._schema.longitude` | number | <!-- MISSING --> |
| `paid_search` | `search.isPaid` | boolean | A flag that is set if the hit matches paid search detection. |
| `ref_type` | `web.webReferrer.type` | string | A numeric ID representing the type of referral for the hit. |
| `visit_paid_search` | `_experience.analytics.session.`<br/>`search.isPaid` | boolean | A flag (1=paid, 0=not paid) indicating if the first hit of the visit was from a paid search hit. |
| `visit_ref_type` | `_experience.analytics.session.`<br/>`web.webReferrer.type` | string | Numeric ID representing the referrer type of the first referrer of the visit. |
| `visit_search_engine` | `_experience.analytics.session.`<br/>`search.searchEngine` | string | Numeric ID of the first search engine of the visit. |
| `visit_start_time_gmt` | `_experience.analytics.session.`<br/>`timestamp` | integer | Timestamp of the first hit of the visit in UNIX&reg; time. |

{style="table-layout:auto"}