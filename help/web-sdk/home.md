---
title: Adobe Experience Platform Web Software Development Kit (SDK) Overview
description: Learn how to use the Adobe Experience Platform Web SDK to integrate Experience Platform capabilities into your website.
exl-id: 1348144a-7d25-4c27-bc40-3daee2f043a6
---
# Adobe Experience Platform Web SDK {#overview}

The Adobe Experience Platform Web SDK is a client-side JavaScript library that allows Adobe Experience Cloud customers to interact with its services through the Adobe Experience Platform Edge Network.

You can implement the Web SDK in two ways:

* The [Web SDK tag extension](../tags/extensions/client/web-sdk/web-sdk-extension-configuration.md). See the tutorial on how to [implement Adobe Experience Cloud with Web SDK](https://experienceleague.adobe.com/docs/platform-learn/implement-web-sdk/overview.html) for more information.
* Manual implementation using the [Web SDK JavaScript library](install/library.md).

This guide includes instructions for interacting with Experience Cloud solutions using both the Web SDK JavaScript library and the tag extension.

## Experience Platform Edge Network {#edge-network}



The Experience Platform Web SDK is part of the Adobe Experience Platform Edge Network, which includes:

* **[Experience Platform Web SDK](#overview)**: A JavaScript library and tag extension for simplifying Adobe technology deployment.
* **[Experience Platform Mobile SDK](https://developer.adobe.com/client-sdks/home/)**: An extension to the v5 mobile SDK for the new deployment methodology.
* **[Edge Network API](https://developer.adobe.com/data-collection-apis/docs/api/)**: A server-side API for data collection, personalization, advertising, and marketing use cases. You can use it on servers, IoT devices, set-top boxes, and other devices.

The Edge Network provides low-latency data collection, pluggable computing, and rapid data activation across all addressable channels. It offers a single consolidated SDK for web, mobile, and server-side channels, sending data to a common Adobe domain (`adobedc.net`) and receiving a single payload for data and experience delivery.

On the server-side, a unified edge gateway and a common platform service framework simplify the deployment of new capabilities, while providing the following benefits:

* Decreasing customer time to value;
* Ending the need for "point" integrations;
* Improving performance compared to the old libraries;
* Decreasing operating costs;
* Increasing innovation speed;
* Creating sustained competitive advantages for Adobe customers.

A consolidated edge system lets you manage advertising, marketing, and personalization campaigns across all channels. It reduces the total cost of ownership and supports various data types, enabling you to map your data model for use with multiple Experience Cloud products.

## Video overview {#video}

Watch the video below for an overview of the Adobe Experience Platform [!DNL Web SDK] and the [!DNL Edge Network].

>[!VIDEO](https://video.tv.adobe.com/v/34141?quality=12&learn=on)

## Libraries replaced by the Web SDK {#sdks}

The Web SDK is a new, open-source library built from scratch to integrate functionalities of existing libraries. It addresses issues with tag firing order, version inconsistencies, and dependency management, offering a new, [open source](https://github.com/adobe/alloy) way to implement the [!DNL Experience Cloud].

The Web SDK replaces:

* `Visitor.js`
* `AppMeasurement.js`
* `AT.js`
* `DIL.js`

It also introduces a new endpoint that streamlines HTTP requests to Adobe solutions. Previously, multiple calls were needed for `Visitor.js`, `AT.js`, `DIL.js`, and `AppMeasurement.js`. Now, a single call can retrieve an ID, fetch a [!DNL Target] experience, send data to [!DNL Audience Manager], and pass data to Adobe Experience Platform.

Watch the video below to see Adobe Experience Platform [!DNL Web SDK] and [!DNL Edge Network] in action, using a single call to send data to [!DNL Experience Platform], [!DNL Analytics], [!DNL Audience Manager], and [!DNL Target].

>[!VIDEO](https://video.tv.adobe.com/v/34148)

## Migrating from existing libraries to Web SDK {#migrating-to-web-sdk}

Adobe offers a streamlined upgrade path to simplify your migration from any of the [existing libraries](#sdks) to Web SDK. You can migrate each page of your website individually, without needing to migrate the entire site at once. You can use the Web SDK on some pages while existing libraries remain on others, allowing for a gradual transition.

### Migration of `AT.js` to Web SDK considerations {#considerations}

Before migrating pages using `AT.js` to Web SDK, enable the following Web SDK configuration options to ensure the visitor profile is maintained when navigating between pages.

* [`idMigrationEnabled`](/help/web-sdk/commands/configure/idmigrationenabled.md)
* [`targetMigrationEnabled`](/help/web-sdk/commands/configure/targetmigrationenabled.md)

>[!IMPORTANT]
>
>The following Target features are not supported when migrating from `at.js` to Web SDK:
>
>* [Redirect offers](https://experienceleague.adobe.com/docs/target/using/experiences/offers/offer-redirect.html)
>* [CNAME and cross-domain support](https://experienceleague.adobe.com/docs/target-dev/developer/client-side/at-js-implementation/atjs-cookies.html)

After migrating from `AT.js` to the Web SDK, remove the `targetMigrationEnabled` option from your configuration.
