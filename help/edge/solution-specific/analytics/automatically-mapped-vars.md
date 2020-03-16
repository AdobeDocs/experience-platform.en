# Variables Automatically Mapped in Analytics

Below is a list of variables that the Adobe Experience Platform Edge Network automatically maps into Analytics.

| XDM Field Path  | Analytics Query String / HTTP Header | Description |
| ---------- | ------------------------- | -------- |
| `environment.browserDetails.userAgent` | `User-Agent` | This is a HTTP Header mapping, HEADER_USER_AGENT. |
| `environment.browserDetails.acceptLanguage` | `Accept-Language` | This is a HTTP Header mapping, HEADER_ACCEPT_LANGUAGE. |
| `environment.browserDetails.cookiesEnabled` | `k` | AppMeasurement query parameter COOKIES mapping with conversion BOOLEAN_TO_YN. |
| `environment.browserDetails.javaScriptVersion` | `j` | AppMeasurement query parameter J_JSCRIPT mapping. |
| `environment.browserDetails.javaEnabled` | `v` | AppMeasurement query parameter JAVA_ENABLED mapping with conversion BOOLEAN_TO_YN. |
| `environment.browserDetails.viewportHeight` | `bh` | AppMeasurement query parameter BROWSER_HEIGHT mapping. |
| `environment.browserDetails.viewportWidth` | `bw` | AppMeasurement query parameter BROWSER_WIDTH mapping. |
| `environment.connectionType` | `ct` | AppMeasurement query parameter CT_CONNECT_TYPE mapping. |
| `device.colorDepth` | `c` | AppMeasurement query parameter C_COLOR mapping. |
| `placeContext.geo.stateProvince` | `state` | AppMeasurement query parameter STATE mapping. |
| `placeContext.geo.postalCode` | `zip` | AppMeasurement query parameter ZIP mapping. |
| `placeContext.geo.latitude` | `lat` | AppMeasurement query parameter LATITUDE mapping. |
| `placeContext.geo.longitude` | `lon` | AppMeasurement query parameter LONGITUDE mapping. |
| `web.webPageDetails.server` | `sv` | AppMeasurement query parameter USER_SERVER mapping. |
| `web.webPageDetails.name` | `gn` | AppMeasurement query parameter PAGENAME mapping. |
| `web.webPageDetails.URL` | `g` | AppMeasurement query parameter PAGE_URL mapping. |
| `web.webPageDetails.homePage` | `hp` | AppMeasurement query parameter HOMEPAGE mapping with conversion BOOLEAN_TO_YN. |
| `web.webReferrer.URL` | `r` | AppMeasurement query parameter REFERRER mapping. |
| `application.id` | `c.a.appid` | AppMeasurement context data `c.a.appid` mapping. |
| `application.launches.value` | `c.a.launches` | AppMeasurement context data `c.a.launches` mapping. |
| `marketing.trackingCode` | `v0` | AppMeasurement query parameter CAMPAIGN mapping. |
| `commerce.purchaseID` | `pi` | AppMeasurement query parameter PURCHASEID mapping. |
| `commerce.currencyCode` | `cc` | AppMeasurement query parameter CURRENCY mapping. |
| `media.mediaTimed.primaryAssetReference.iptc4xmpExt:Series.iptc4xmpExt:Identifier` | `a.media.name` | AppMeasurement context data `a.media.name` mapping. |
| `media.mediaTimed.primaryAssetReference.xmpDM:duration` | `c.a.media.length` | AppMeasurement context data `c.a.media.length` mapping. |
| `media.mediaTimed.primaryAssetViewDetails.broadcastContentType` | `c.a.contentType` | AppMeasurement context data `c.a.contentType` mapping. |
| `media.mediaTimed.primaryAssetViewDetails.playerName` | `c.a.media.playerName` | AppMeasurement context data `c.a.media.playerName` mapping. |
| `media.mediaTimed.primaryAssetViewDetails.broadcastChannel` | `c.a.media.channel` | AppMeasurement context data `c.a.media.channel` mapping. |
| `media.mediaTimed.primaryAssetViewDetails.mediaSegmentView.value` | `c.a.media.segment` | AppMeasurement context data `c.a.media.segment` mapping. |
| `media.mediaTimed.primaryAssetReference.dc:title` | `c.a.media.friendlyName` | AppMeasurement context data `c.a.media.friendlyName` mapping. |
| `media.mediaTimed.primaryAssetViewDetails.playerSDKVersion.version` | `c.a.media.sdkVersion` | AppMeasurement context data `c.a.media.sdkVersion` mapping. |
| `media.mediaTimed.primaryAssetReference.iptc4xmpExt:Series.iptc4xmpExt:Name` | `c.a.media.show` | AppMeasurement context data `c.a.media.show` mapping. |
| `media.mediaTimed.primaryAssetViewDetails.streamFormat` | `c.a.media.format` | AppMeasurement context data `c.a.media.format` mapping. |
| `media.mediaTimed.primaryAssetReference.iptc4xmpExt:Season.iptc4xmpExt:Number` | `c.a.media.season` | AppMeasurement context data `c.a.media.season` mapping. |
| `media.mediaTimed.primaryAssetReference.iptc4xmpExt:Episode.iptc4xmpExt:Number` | `c.a.media.episode` | AppMeasurement context data `c.a.media.episode` mapping. |
| `media.mediaTimed.primaryAssetViewDetails.broadcastNetwork` | `c.a.media.network` | AppMeasurement context data `c.a.media.network` mapping. |
| `media.mediaTimed.primaryAssetReference.showType` | `c.a.media.type` | AppMeasurement context data `c.a.media.type` mapping with conversion VEDIO_SHOW_TYPE. |
| `media.mediaTimed.primaryAssetViewDetails.sourceFeed` | `c.a.media.feed` | AppMeasurement context data `c.a.media.feed` mapping. |
| `media.mediaTimed.timePlayed.value` | `c.a.media.timePlayed` | AppMeasurement context data `c.a.media.timePlayed` mapping. |
| `media.mediaTimed.totalTimePlayed.value` | `c.a.media.totalTimePlayed` | AppMeasurement context data `c.a.media.totalTimePlayed` mapping. |
| `media.mediaTimed.federated.value` | `c.a.media.federated` | AppMeasurement context data `c.a.media.federated` mapping. |
| `media.mediaTimed.pauses.value` | `c.a.media.pauseCount` | AppMeasurement context data `c.a.media.pauseCount` mapping. |
| `media.mediaTimed.pauseTime.value` | `c.a.media.pauseTime` | AppMeasurement context data `c.a.media.pauseTime` mapping. |
| `media.mediaTimed.resumes.value` | `c.a.media.resume` | AppMeasurement context data `c.a.media.resume` mapping. |
| `identitymap.ecid.[0].id` | `mid` | AppMeasurement query parameter MID mapping. |
