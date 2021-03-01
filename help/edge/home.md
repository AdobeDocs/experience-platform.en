---
title: Adobe Experience Platform Web SDK Overview
description: Learn how to use Adobe Experience Platform Web SDK to integrate Platform capabilities into your website.
keywords: Adobe Experience Platform Web SDK;Platform Web SDK;Web SDK;edge;Visitor.js;AppMeasurement.js;AT.js;DIL.js;web sdk;SDK;web SDK;Launch;launch
---

# Adobe Experience Platform Web SDK overview

Adobe Experience Platform Web SDK is a client-side JavaScript library that allows customers of Adobe Experience Cloud to interact with the various services in the [!DNL Experience Cloud] through the Adobe Experience Platform Edge Network. In addition to the JavaScript library, there is an [Experience Platform Launch extension](https://experienceleague.adobe.com/docs/launch/using/extensions-ref/adobe-extension/aep-extension/overview.html) to help with your Web SDK configurations.

## Experience Edge

[!DNL Adobe Experience Platform Web SDK] is part of the collection that makes up Experience Edge. Experience Edge consists of three technologies:

* **[!DNL Adobe Experience Platform Web SDK]:** A JavaScript SDK and [!DNL Experience Platform Launch] extension to dramatically simplify deploying [!DNL Adobe] technologies
* **Adobe Experience Platform Mobile SDK:** An extension to the v5 mobile SDK to allow customers to use the new deployment methodology
* **[!DNL Adobe Experience Platform Edge Network]:** A global distributed network of servers that enable a new methodology of deploying [!DNL Adobe] products

The [!DNL Adobe Experience Edge] is a new framework for low-latency data collection, pluggable computing and rapid data activation across all addressable channels.

[!DNL Adobe Experience Edge] provides a single consolidated SDK for every channel (JavaScript, Mobile, Server-side), which sends data to a common Adobe domain (`adobedc.net`) and receives a single payload back for data and experience delivery.  

On the server-side, a unified edge gateway and a common platform services framework makes it easy to plug-in and deploy new capabilities into this real-time computing environment.  This architecture:

* Decreases customer time to value
* Ends the need for "point" integrations
* Improves performance compared to the old libraries
* Decreases costs
* Increases the speed of innovation
* Creates sustained competitive advantages for Adobe customers

A single consolidated edge system allows customers to manage their advertising, marketing or personalization campaigns across all channels as an integrated experience.  It allows [!DNL Adobe] to deliver services with lower total cost of ownership for customers.  It also helps increase the speed of product innovation by making the real-time edge pluggable and allowing [!DNL Adobe] and its customers to more rapidly add new capabilities and customer-defined logic to that real time system. 

## Video overview

The following video gives an overview of the Adobe Experience Platform [!DNL Web SDK] and Adobe Experience Platform [!DNL Edge Network].

>[!VIDEO](https://video.tv.adobe.com/v/34141?quality=12&learn=on)

## SDKs replaced by Adobe Experience Platform Web SDK

Adobe Experience Platform Web SDK replaces the following SDKs:

* Visitor.js
* AppMeasurement.js
* AT.js
* DIL.js

This is not just a wrapper around existing libraries. It is a complete rewrite. Its purpose is to end challenges with tags having to fire in the right order, inconsistency with library versioning challenges, and better dependency management. It is a new way to implement the [!DNL Experience Cloud] and it is [open source](https://github.com/adobe/alloy).

In addition to a new library, there is a new endpoint that streamlines the HTTP requests to Adobe solutions. Before, Visitor.js sent a blocking call to the visitor ID service, then AT.js sent a call to Adobe Target, DIL.js sent a call to Adobe Audience Manager, and finally AppMeasurement.js sent a call to Adobe Analytics. This new library and endpoint can retrieve an ID, fetch a [!DNL Target] experience, send data to [!DNL Audience Manager], and pass the data to Adobe Experience Platform in a single call.

The following video demonstrates Adobe Experience Platform [!DNL Web SDK] and Adobe Experience Platform [!DNL Edge Network] in action. The video example uses a single call to Adobe which sends data to [!DNL Experience Platform], [!DNL Analytics], [!DNL Audience Manager], and [!DNL Target].

>[!VIDEO](https://video.tv.adobe.com/v/34148?quality=12&learn=on)

This product is constantly evolving and growing to support more and more use cases. To keep up with the latest, check out our [supported use-cases board](https://github.com/adobe/alloy/projects/5). We keep this up to date with the use cases we currently support and the ones we are working on to enable you to make the best decisions possible.

* **Use Cases Not Yet Supported:** These are use cases that are on our roadmap to be supported in the future.
* **Use Cases In Progress:** These are the use cases the team is currently working on completing for release.
* **Supported Use Cases:** These are the use cases that are supported and work today. 
* **Use Cases We Won't Support:** These are the use cases we have made a decision not to support.
