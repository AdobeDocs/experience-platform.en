---
title: Web SDK JavaScript library overview
description: Send data to the Adobe Experience Platform Edge Network using JavaScript.
exl-id: 1348144a-7d25-4c27-bc40-3daee2f043a6
---
# Web SDK JavaScript library overview

The **Adobe Experience Platform Web SDK** is a client-side JavaScript library that allows you to send data to the Adobe Experience Platform Edge Network. This guide documents the Web SDK JavaScript library (`alloy.js`) implementation path, including core concepts, installation, configuration, and commands. For the Web SDK tag extension in the Data Collection UI, see the [Web SDK tag extension](/help/tags/extensions/client/web-sdk/overview.md).

The Web SDK sends data in a solution-agnostic way (XDM) to the Experience Platform Edge Network, which then maps the data to solution-specific formats and destinations and sends it in real time.

## Experience Platform Edge Network {#edge-network}

The Adobe Experience Platform Edge Network provides low-latency data collection, pluggable computing, and rapid data activation across all addressable channels. It offers a single consolidated SDK for web, mobile, and server-side channels, sending data to a common Adobe domain (`adobedc.net`) and receiving a single payload for data and experience delivery.

On the server-side, a unified edge gateway and a common platform service framework simplify the deployment of new capabilities, while providing the following benefits:

* Decreasing customer time to value;
* Ending the need for "point" integrations;
* Improving performance compared to the old libraries;
* Decreasing operating costs;
* Increasing innovation speed;
* Creating sustained competitive advantages for Adobe customers.

A consolidated edge system lets you manage advertising, marketing, and personalization campaigns across all channels. It reduces the total cost of ownership and supports various data types, enabling you to map your data model for use with multiple Experience Cloud products.

>[!VIDEO](https://video.tv.adobe.com/v/34141?quality=12&learn=on)

## Libraries replaced by the Web SDK {#sdks}

The Web SDK is an open-source library built from scratch to integrate functionalities of existing libraries. It addresses issues with tag firing order, version inconsistencies, and dependency management, offering a way to implement many Experience Cloud products. The Web SDK replaces data collection for the following services:

* Adobe Experience Platform Visitor ID service (`Visitor.js`)
* Adobe Analytics (`AppMeasurement.js`)
* Adobe Target (`AT.js`)
* Adobe Audience Manager (`DIL.js`)
* Adobe Media Analytics
* Adobe Advertising

It also introduces a new endpoint that streamlines HTTP requests to Adobe solutions. Previously, multiple calls were needed for each data collection library. Now, a single call can retrieve an ID, fetch a [!DNL Target] experience, send data to [!DNL Audience Manager], and pass data to Adobe Experience Platform.

## Migrating from existing libraries to Web SDK {#migrating-to-web-sdk}

Adobe offers a streamlined upgrade path to simplify your migration from any of the existing libraries to the Web SDK. You can migrate each page of your website individually, without needing to migrate the entire site at once. You can use the Web SDK on some pages while existing libraries remain on others, allowing for a gradual transition.
