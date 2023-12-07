---
title: Adobe Experience Platform Web Software Development Kit (SDK) Overview
description: Learn how to use the Adobe Experience Platform Web SDK to integrate Platform capabilities into your website.
exl-id: 1348144a-7d25-4c27-bc40-3daee2f043a6
---
# Adobe Experience Platform Web SDK {#overview}

The Adobe Experience Platform Web Software Development Kit (SDK) is a client-side JavaScript library that allows customers of the Adobe Experience Cloud to interact with its services through the Adobe Experience Platform Edge Network. Adobe offers two methods to implement the Web SDK:

* Manual implementation using the `alloy.js` JavaScript library. This user guide provides documentation for this implementation method.
* The [Web SDK tag extension](../tags/extensions/client/web-sdk/web-sdk-extension-configuration.md). See [Implement Adobe Experience Cloud with Web SDK tutorial](https://experienceleague.adobe.com/docs/platform-learn/implement-web-sdk/overview.html) for more information.

## Experience Platform Edge Network {#edge-network}

The Experience Platform Web SDK is part of a collection of tools which make up the Adobe Experience Platform Edge Network. The Edge Network consists of the following components:

* **[Experience Platform Web SDK](#overview):** A JavaScript SDK and tag extension to dramatically simplify deploying Adobe technologies.
* **[Experience Platform Mobile SDK](https://developer.adobe.com/client-sdks/home/):** An extension to the v5 mobile SDK to allow customers to use the new deployment methodology
* **[Experience Platform Edge Network Server API](../server-api/overview.md):** An API which can be used for various data collection, personalization, advertising and marketing use cases. The Server API can be used on servers, IoT devices, set-top boxes, and various other devices.

The Edge Network is a framework for low-latency data collection, pluggable computing, and rapid data activation across all addressable channels. It provides a single consolidated SDK for every channel (JavaScript, Mobile, Server-side), which sends data to a common Adobe domain (`adobedc.net`) and receives a single payload back for data and experience delivery.

On the server-side, a unified edge gateway and a common platform service framework help make it easy to deploy new capabilities into this real-time computing environment. This architecture:

* Decreases customer time to value
* Ends the need for "point" integrations
* Improves performance compared to the old libraries
* Decreases costs
* Increases the speed of innovation
* Creates sustained competitive advantages for Adobe customers

A single consolidated edge system allows customers to manage their advertising, marketing, or personalization campaigns across all channels as an integrated experience. It also allows Adobe to deliver services with lower total cost of ownership for customers. The edge system is designed to accommodate most types of data, allowing you to map your own data model to be ingested by multiple Experience Cloud products.

## Video overview {#video}

The following video gives an overview of the Adobe Experience Platform [!DNL Web SDK] and Adobe Experience Platform [!DNL Edge Network].

>[!VIDEO](https://video.tv.adobe.com/v/34141?quality=12&learn=on)

## Libraries replaced by the Web SDK {#sdks}

The Web SDK is not just a wrapper around existing libraries. It is a new library, written from the ground up to incorporate functionalities of existing libraries. Its purpose is to end challenges with tags having to fire in the right order, inconsistency with library versioning challenges, and better dependency management. It is a new way to implement the [!DNL Experience Cloud] and it is [open source](https://github.com/adobe/alloy).

The Web SDK replaces the following SDKs:

* `Visitor.js`
* `AppMeasurement.js`
* `AT.js`
* `DIL.js`

In addition to a new library, there is a new endpoint that streamlines the HTTP requests to Adobe solutions. Before, `Visitor.js` sent a blocking call to the visitor ID service, then `AT.js` sent a call to Adobe Target, `DIL.js` sent a call to Adobe Audience Manager, and finally `AppMeasurement.js` sent a call to Adobe Analytics. This new library and endpoint can retrieve an ID, fetch a [!DNL Target] experience, send data to [!DNL Audience Manager], and pass the data to Adobe Experience Platform in a single call.

The following video demonstrates Adobe Experience Platform [!DNL Web SDK] and Adobe Experience Platform [!DNL Edge Network] in action. The video example uses a single call to Adobe which sends data to [!DNL Experience Platform], [!DNL Analytics], [!DNL Audience Manager], and [!DNL Target].

>[!VIDEO](https://video.tv.adobe.com/v/34148)

## Migrating from existing libraries to Web SDK {#migrating-to-web-sdk}

To simplify your migration from any of the [existing libraries](#sdks) to Web SDK, Adobe offers a streamlined upgrade path. This path allows you to migrate each individual page of your website to Web SDK without the need of migrating your entire website at once. You can use the Web SDK on a given page while existing libraries reside on other pages. Once you are ready, you can migrate those other pages as well.

### Migration of `AT.js` to Web SDK considerations {#considerations}

Before migrating pages that use `AT.js` to Web SDK, make sure to enable the following Web SDK configuration options. These options ensure that the visitor profile is kept while navigating from pages with `AT.js` to pages using Web SDK.

* [`idMigrationEnabled`](fundamentals/configuring-the-sdk.md#id-migration-enabled)
* [`targetMigrationEnabled`](fundamentals/configuring-the-sdk.md#targetMigrationEnabled)


>[!IMPORTANT]
>
>The following Target features are not supported when migrating from at.js to Web SDK:
>
>* [Redirect offers](https://experienceleague.adobe.com/docs/target/using/experiences/offers/offer-redirect.html)
>* [CNAME and cross-domain support](https://experienceleague.adobe.com/docs/target-dev/developer/client-side/at-js-implementation/atjs-cookies.html)

After migrating from `AT.js` to the Web SDK, remove the `targetMigrationEnabled` option from your configuration.
