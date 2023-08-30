---
title: Adobe Experience Platform Web SDK Overview
description: Learn how to use Adobe Experience Platform Web SDK to integrate Platform capabilities into your website.
keywords: Adobe Experience Platform Web SDK;Platform Web SDK;Web SDK;edge;Visitor.js;AppMeasurement.js;AT.js;DIL.js;web sdk;SDK;web SDK;Launch;launch
exl-id: 1348144a-7d25-4c27-bc40-3daee2f043a6
---
# Adobe Experience Platform Web SDK overview {#overview}

Adobe Experience Platform Web SDK is a client-side JavaScript library that allows customers of Adobe Experience Cloud to interact with the various services in the [!DNL Experience Cloud] through the Adobe Experience Platform Edge Network. In addition to the JavaScript library, there is a [tag extension](../tags/extensions/client/web-sdk/web-sdk-extension-configuration.md) to help with your Web SDK configurations.

For a step by step guide to setting up the Web SDK with tags and sending data to the solutions please see our [Implement Adobe Experience Cloud with Web SDK tutorial](https://experienceleague.adobe.com/docs/platform-learn/implement-web-sdk/overview.html?lang=en).

>[!IMPORTANT]
>
>This product is constantly evolving and growing to support more and more use cases. To keep up with the latest and see what we currently support, see the [supported use cases page](https://github.com/orgs/adobe/projects/18/views/1). 

## Adobe Experience Edge

[!DNL Adobe Experience Platform Web SDK] is part of the collection that makes up the [!DNL Adobe Experience Edge]. [!DNL Experience Edge] consists of the following technologies:

* **[[!DNL Adobe Experience Platform Web SDK]](#overview):** A JavaScript SDK and tag extension to dramatically simplify deploying [!DNL Adobe] technologies.
* **[[!DNL Adobe Experience Platform Mobile SDK]](https://developer.adobe.com/client-sdks/documentation/):** An extension to the v5 mobile SDK to allow customers to use the new deployment methodology
* **[[!DNL Adobe Experience Platform Edge Network]](../server-api/overview.md):** A global distributed network of servers that enable a new methodology of deploying [!DNL Adobe] products

The [!DNL Adobe Experience Edge] is a new framework for low-latency data collection, pluggable computing and rapid data activation across all addressable channels.

[!DNL Adobe Experience Edge] provides a single consolidated SDK for every channel (JavaScript, Mobile, Server-side), which sends data to a common Adobe domain (`adobedc.net`) and receives a single payload back for data and experience delivery.  

On the server-side, a unified edge gateway and a common platform services framework makes it easy to plug-in and deploy new capabilities into this real-time computing environment.  This architecture:

* Decreases customer time to value
* Ends the need for "point" integrations
* Improves performance compared to the old libraries
* Decreases costs
* Increases the speed of innovation
* Creates sustained competitive advantages for Adobe customers

A single consolidated edge system allows customers to manage their advertising, marketing or personalization campaigns across all channels as an integrated experience. It allows [!DNL Adobe] to deliver services with lower total cost of ownership for customers.  It also helps increase the speed of product innovation by making the real-time edge pluggable and allowing [!DNL Adobe] and its customers to more rapidly add new capabilities and customer-defined logic to that real time system. 

## Video overview {#video}

The following video gives an overview of the Adobe Experience Platform [!DNL Web SDK] and Adobe Experience Platform [!DNL Edge Network].

>[!VIDEO](https://video.tv.adobe.com/v/34141?quality=12&learn=on)

## Libraries replaced by the Web SDK {#sdks}

The Web SDK is not just a wrapper around existing libraries. It is a completely new library, written from the ground up to incorporate functionalities of existing libraries. Its purpose is to end challenges with tags having to fire in the right order, inconsistency with library versioning challenges, and better dependency management. It is a new way to implement the [!DNL Experience Cloud] and it is [open source](https://github.com/adobe/alloy).

The Web SDK replaces the following SDKs:

* Visitor.js
* AppMeasurement.js
* AT.js
* DIL.js

In addition to a new library, there is a new endpoint that streamlines the HTTP requests to Adobe solutions. Before, Visitor.js sent a blocking call to the visitor ID service, then AT.js sent a call to Adobe Target, DIL.js sent a call to Adobe Audience Manager, and finally AppMeasurement.js sent a call to Adobe Analytics. This new library and endpoint can retrieve an ID, fetch a [!DNL Target] experience, send data to [!DNL Audience Manager], and pass the data to Adobe Experience Platform in a single call.

The following video demonstrates Adobe Experience Platform [!DNL Web SDK] and Adobe Experience Platform [!DNL Edge Network] in action. The video example uses a single call to Adobe which sends data to [!DNL Experience Platform], [!DNL Analytics], [!DNL Audience Manager], and [!DNL Target].

>[!VIDEO](https://video.tv.adobe.com/v/34148)

## Migrating from existing libraries to Web SDK {#migrating-to-web-sdk}

To simplify your migration from any of the [existing libraries](#sdks) to Web SDK, Adobe offers a streamlined upgrade path, allowing you to migrate each individual page of your website to Web SDK, without the need of migrating your entire website at once.

This means you can use Web SDK on a page and leave the existing libraries on the other pages, until you can migrate them as well.

### at.js to Web SDK migration considerations {#considerations}

Before migrating pages that use [!DNL at.js] to Web SDK, make sure to enable the following Web SDK configuration options. This ensures the visitor profile is kept while navigating from pages with [!DNL at.js ] to pages using Web SDK.

* [`idMigrationEnabled`](fundamentals/configuring-the-sdk.md#id-migration-enabled)
* [`targetMigrationEnabled`](fundamentals/configuring-the-sdk.md#targetMigrationEnabled)


>[!IMPORTANT]
>
>The following Target features are not supported when migrating from at.js to Web SDK:
> * [Redirect offers](https://experienceleague.adobe.com/docs/target/using/experiences/offers/offer-redirect.html?lang=en)
> * [CNAME and cross-domain support](https://developer.adobe.com/target/implement/client-side/atjs/atjs-cookies/?lang=en)

After migrating from at.js to Web SDK, you should remove the `targetMigrationEnabled` option from your configuration.



