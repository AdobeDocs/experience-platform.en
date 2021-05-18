---
keywords: Experience Platform;home;popular topics;data collection;launch;web sdk
solution: Experience Platform
title: Data Collection Overview
topic-legacy: overview
description: Learn about the various technologies involved with collect data on customer experiences in Adobe Experience Platform.
exl-id: 03ce5339-e68d-4adf-8c3c-82846a626dad
---
# Data collection overview

Adobe Experience Platform provides a suite of technologies that allow you to collect customer experience data from client-side sources, and send it to the Adobe Experience Platform Edge Network where it can be enriched, transformed, and distributed to Adobe or non-Adobe destinations in seconds.

Data collection is supported for the following client-side sources:

* Web-based applications
* Native mobile applications
* Over-the-top (OTT) applications

The data-collection technologies provided by Experience Platform focus on the discoverability and accessibility of ingested datasets. These technologies encompass the following:

* [Adobe Experience Platform Edge Network](https://experienceleague.adobe.com/docs/web-sdk-learn/tutorials/introduction-to-web-sdk-and-edge-network.html)
* [Adobe Experience Platform Launch](https://adobe.com/go/launch_help_en)
* [Adobe Experience Platform Web SDK](../edge/home.md)
* [Experience Data Model (XDM)](../xdm/home.md) 

![](./images/Collection.png)

## Simpler implementations, faster client-side performance

Adobe Experience Platform Web and Mobile SDKs collapse and compress all Adobe product libraries into a single development kit for web or mobile platforms. Compressing these libraries speeds up data collection and consolidates operations into a single stream from client-side devices to Adobe Experience Platform Edge Network.

## Flip-the-switch process to deploy Adobe technology

Platform Edge Network is a globally distributed, fast, and reliable network of servers capable of receiving and processing data at tremendous scale. Using Platform Launch, you can set up [edge configurations](../edge/fundamentals/datastreams.md) for products like Adobe Target, Adobe Audience Manager, and Adobe Analytics, which allow you to activate these products on the server side without changing client-side code. 

![](./images/deploy.png)

## Transform, enrich, and send data fast and securely

[Adobe Experience Platform Launch Server Side](https://experienceleague.adobe.com/docs/launch/using/server-side-info/server-side-overview.html) can tap into any Platform data stream. You can transform, enrich, and send data to any non-Adobe destination with extreme low latency without adding any third-party code to the client device providing faster and more secure data collection and distribution.   

![](./images/launch.png)
