---
title: Automatically Mapped Adobe Analytics Variables in the Adobe Experience Platform Web SDK
description: Learn Which Variables are Automatically Mapped in Adobe Analytics with Experience Platform Web SDK
seo-description: Learn which variables are automatically mapped in Adobe Analytics with the Adobe Experience Platform Web SDK
keywords: adobe analytics;variables;analytics;automatic map;automatically mapped;
exl-id: 856fada7-b62c-4fd2-9372-a19ae1cdec33
---
# Variables automatically mapped in [!DNL Analytics]

Below is a list of variables that Adobe Experience Platform Edge Network automatically maps into Adobe Analytics.

| XDM Field Path  | [!DNL Analytics Query String] / HTTP Header | Description |
| ---------- | ------------------------- | ----------------------------------------- |
| `application.id` | `c.a.appid` | AppMeasurement context data `c.a.appid` mapping. |
| `application.launches.value` | `c.a.launches` | AppMeasurement context data `c.a.launches` mapping. |
| `commerce.checkouts.id` | `events` | `scCheckout` event serialization. If this field is excluded (i.e. for unserialized events), the system generates and assigns its own ID value to the entity. |
| `commerce.checkouts.value` | `events` | AppMeasurement query parameter EVENT_LIST_FULL mapping with conversion COMMERCE_SC_CHECKOUT, using delimiter `,`. |
| `commerce.order.currencyCode` | `cc` | AppMeasurement query parameter CURRENCY mapping. |
| `commerce.order.purchaseID` | `pi` | AppMeasurement query parameter PURCHASEID mapping. |
| `commerce.productListAdds.id` | `events` | `scAdd` event serialization. If this field is excluded (i.e. for unserialized events), the system generates and assigns its own ID value to the entity. |
| `commerce.productListAdds.value` | `events` | AppMeasurement query parameter EVENT_LIST_FULL mapping with conversion COMMERCE_SC_ADD, using delimiter `,`. |
| `commerce.productListOpens.id` | `events` | `scOpen` event serialization. If this field is excluded (i.e. for unserialized events), the system generates and assigns its own ID value to the entity. |
| `commerce.productListOpens.value` | `events` | AppMeasurement query parameter EVENT_LIST_FULL mapping with conversion COMMERCE_SC_OPEN, using delimiter `,`. |
| `commerce.productListRemovals.id` | `events` | `scRemove` event serialization. If this field is excluded (i.e. for unserialized events), the system generates and assigns its own ID value to the entity. |
| `commerce.productListRemovals.value` | `events` | AppMeasurement query parameter EVENT_LIST_FULL mapping with conversion COMMERCE_SC_REMOVE, using delimiter `,`. |
| `commerce.productListViews.id` | `events` | `scView` event serialization. If this field is excluded (i.e. for unserialized events), the system generates and assigns its own ID value to the entity. |
| `commerce.productListViews.value` | `events` | AppMeasurement query parameter EVENT_LIST_FULL mapping with conversion COMMERCE_SC_VIEW, using delimiter `,`. |
| `commerce.productViews.id` | `events` | `prodView` event serialization. If this field is excluded (i.e. for unserialized events), the system generates and assigns its own ID value to the entity. |
| `commerce.productViews.value` | `events` | AppMeasurement query parameter EVENT_LIST_FULL mapping with conversion COMMERCE_PROD_VIEW, using delimiter `,`. |
| `commerce.purchases.value` | `events` | AppMeasurement query parameter EVENT_LIST_FULL mapping with conversion COMMERCE_PURCHASE, using delimiter `,`. |
| `device.colorDepth` | `c` | AppMeasurement query parameter C_COLOR mapping. |
| `device.screenHeight` | `s` | AppMeasurement query parameter Screen Resolution mapping. |
| `device.screenWidth` | `s` | AppMeasurement query parameter Screen Resolution mapping. |
| `environment.browserDetails.acceptLanguage` | `Accept-Language` | This is a HTTP Header mapping, HEADER_ACCEPT_LANGUAGE. |
| `environment.browserDetails.cookiesEnabled` | `k` | AppMeasurement query parameter COOKIES mapping with conversion BOOLEAN_TO_YN. |
| `environment.browserDetails.javaEnabled` | `v` | AppMeasurement query parameter JAVA_ENABLED mapping with conversion BOOLEAN_TO_YN. |
| `environment.browserDetails.javaScriptVersion` | `j` | AppMeasurement query parameter J_JSCRIPT mapping. |
| `environment.browserDetails.userAgent` | `User-Agent` | This is a HTTP Header mapping, HEADER_USER_AGENT. |
| `environment.browserDetails.viewportHeight` | `bh` | AppMeasurement query parameter BROWSER_HEIGHT mapping. |
| `environment.browserDetails.viewportWidth` | `bw` | AppMeasurement query parameter BROWSER_WIDTH mapping. |
| `environment.connectionType` | `ct` | AppMeasurement query parameter CT_CONNECT_TYPE mapping. |
| `environment.ipV4` | `X-Forwarded-For` | This is a HTTP Header mapping, X-FORWARDED-FOR. |
| `identityMap.ECID.[0].id` | `mid` | AppMeasurement query parameter MID mapping. |
| `marketing.trackingCode` | `v0` | AppMeasurement query parameter CAMPAIGN mapping. |
| `media.mediaTimed.completes.value` | `c.a.media.complete` | AppMeasurement context data. |
| `media.mediaTimed.dropBeforeStart.value` |  `c.a.media.view`, `c.a.media.timePlayed`, `c.a.media.play`| AppMeasurement context data. |
| `media.mediaTimed.federated.value` | `c.a.media.federated` | AppMeasurement context data `c.a.media.federated` mapping. |
| `media.mediaTimed.firstQuartiles.value` | `c.a.media.progress25` | AppMeasurement context data. |
| `media.mediaTimed.mediaSegmentView.value` | `c.a.media.segmentView` | AppMeasurement context data. |
| `media.mediaTimed.midpoints.value` | `c.a.media.progress50` | AppMeasurement context data. |
| `media.mediaTimed.pauseTime.value` | `c.a.media.pauseTime` | AppMeasurement context data `c.a.media.pauseTime` mapping. |
| `media.mediaTimed.pauses.value` | `c.a.media.pauseCount` | AppMeasurement context data `c.a.media.pauseCount` mapping. |
| `media.mediaTimed.primaryAssetReference.@id` | `c.a.media.asset`   | AppMeasurement context data. |
| `media.mediaTimed.primaryAssetReference.dc:title` | `c.a.media.friendlyName` | AppMeasurement context data `c.a.media.friendlyName` mapping. |
| `media.mediaTimed.primaryAssetReference.iptc4xmpExt:Creator.[N].iptc4xmpExt:Name` | `c.a.media.originator` | AppMeasurement context data. |
| `media.mediaTimed.primaryAssetReference.iptc4xmpExt:Episode.iptc4xmpExt:Number` | `c.a.media.episode` | AppMeasurement context data `c.a.media.episode` mapping. |
| `media.mediaTimed.primaryAssetReference.iptc4xmpExt:Genre` | `c.a.media.genre` | AppMeasurement context data. |
| `media.mediaTimed.primaryAssetReference.iptc4xmpExt:Rating.[N].iptc4xmpExt:RatingValue` | `c.a.media.rating` | AppMeasurement context data. |
| `media.mediaTimed.primaryAssetReference.iptc4xmpExt:Season.iptc4xmpExt:Number` | `c.a.media.season` | AppMeasurement context data `c.a.media.season` mapping. |
| `media.mediaTimed.primaryAssetReference.iptc4xmpExt:Series.iptc4xmpExt:Identifier` | `a.media.name` | AppMeasurement context data `a.media.name` mapping. |
| `media.mediaTimed.primaryAssetReference.iptc4xmpExt:Series.iptc4xmpExt:Name` | `c.a.media.show` | AppMeasurement context data `c.a.media.show` mapping. |
| `media.mediaTimed.primaryAssetReference.showType` | `c.a.media.type` | AppMeasurement context data `c.a.media.type` mapping with conversion VEDIO_SHOW_TYPE. |
| `media.mediaTimed.primaryAssetReference.showType` | `c.a.media.type` | AppMeasurement context data `c.a.media.type` mapping with conversion VIDEO_SHOW_TYPE. |
| `media.mediaTimed.primaryAssetReference.xmpDM:duration` | `c.a.media.length` | AppMeasurement context data `c.a.media.length` mapping. |
| `media.mediaTimed.primaryAssetViewDetails.@id` | `c.a.media.vsid` | AppMeasurement context data. |
| `media.mediaTimed.primaryAssetViewDetails.broadcastChannel` | `c.a.media.channel` | AppMeasurement context data `c.a.media.channel` mapping. |
| `media.mediaTimed.primaryAssetViewDetails.broadcastContentType` | `c.a.contentType` | AppMeasurement context data `c.a.contentType` mapping. |
| `media.mediaTimed.primaryAssetViewDetails.broadcastNetwork` | `c.a.media.network` | AppMeasurement context data `c.a.media.network` mapping. |
| `media.mediaTimed.primaryAssetViewDetails.mediaSegmentView.value` | `c.a.media.segment` | AppMeasurement context data `c.a.media.segment` mapping. |
| `media.mediaTimed.primaryAssetViewDetails.playerName` | `c.a.media.playerName` | AppMeasurement context data `c.a.media.playerName` mapping. |
| `media.mediaTimed.primaryAssetViewDetails.playerSDKVersion.version` | `c.a.media.sdkVersion` | AppMeasurement context data `c.a.media.sdkVersion` mapping. |
| `media.mediaTimed.primaryAssetViewDetails.sourceFeed` | `c.a.media.feed` | AppMeasurement context data `c.a.media.feed` mapping. |
| `media.mediaTimed.primaryAssetViewDetails.streamFormat` | `c.a.media.format` | AppMeasurement context data `c.a.media.format` mapping. |
| `media.mediaTimed.progress10.value` | `c.a.media.progress10` | AppMeasurement context data. |
| `media.mediaTimed.progress95.value` | `c.a.media.progress95` | AppMeasurement context data. |
| `media.mediaTimed.resumes.value` | `c.a.media.resume` | AppMeasurement context data `c.a.media.resume` mapping. |
| `media.mediaTimed.starts.value` | `c.a.media.view` | AppMeasurement context data. |
| `media.mediaTimed.thirdQuartiles.value` | `c.a.media.progress75` | AppMeasurement context data. |
| `media.mediaTimed.timePlayed.value` | `c.a.media.timePlayed` | AppMeasurement context data `c.a.media.timePlayed` mapping. |
| `media.mediaTimed.totalTimePlayed.value` | `c.a.media.totalTimePlayed` | AppMeasurement context data `c.a.media.totalTimePlayed` mapping. |
| `placeContext.geo.latitude` | `lat` | AppMeasurement query parameter LATITUDE mapping. |
| `placeContext.geo.longitude` | `lon` | AppMeasurement query parameter LONGITUDE mapping. |
| `placeContext.geo.postalCode` | `zip` | AppMeasurement query parameter ZIP mapping. |
| `placeContext.geo.stateProvince` | `state` | AppMeasurement query parameter STATE mapping. |
| `productlistitems.[N]._[NAME_SPACE].*` | `products` |  AppMeasurement query parameter Products Merchandise Events / Evars mapping. |
| `productlistitems.[N].name` | `products` | AppMeasurement query parameter Products Name mapping. |
| `productlistitems.[N].priceTotal` | `products` | AppMeasurement query parameter Products Price mapping. |
| `productlistitems.[N].quantity` | `products` | AppMeasurement query parameter Products Quantity mapping. |
| `web.webInteraction.URL` | `pev1` | AppMeasurement query parameter PAGE_EVENT_VAR1 mapping. |
| `web.webInteraction.name` | `pev2` | AppMeasurement query parameter PAGE_EVENT_VAR2 mapping. |
| `web.webInteraction.type` | `pe` | `web.webInteraction.type=other` to `pe=lnk_o`; `web.webInteraction.type=download` to `pe=lnk_d`; `web.webInteraction.type=exit` to `pe=lnk_e` |
| `web.webPageDetails.URL` | `g` | AppMeasurement query parameter PAGE_URL mapping. |
| `web.webPageDetails.errorPage` | `pageType` | AppMeasurement query parameter PAGE_TYPE_FULL mapping with conversion ERROR_PAGE_TYPE. |
| `web.webPageDetails.homePage` | `hp` | AppMeasurement query parameter HOMEPAGE mapping with conversion BOOLEAN_TO_YN. |
| `web.webPageDetails.name` | `gn` | AppMeasurement query parameter PAGENAME mapping. |
| `web.webPageDetails.server` | `sv` | AppMeasurement query parameter USER_SERVER mapping. |
| `web.webPageDetails.siteSection` | `ch` | AppMeasurement query parameter CHANNEL mapping. |
| `web.webReferrer.URL` | `r` | AppMeasurement query parameter REFERRER mapping. |
