---
title: Server-side logging for A4T data in Platform Web SDK
description: Learn how to enable server-side logging for Adobe Analytics for Target (A4T) using the Experience Platform Web SDK.
seo-title: Server-side logging for A4T data in Platform Web SDK
seo-description: Learn how to enable server-side logging for Adobe Analytics for Target (A4T) using the Experience Platform Web SDK.
keywords: a4t;target;web;sdk;platform;logging;
exl-id: 26c25f58-e43c-4147-8595-69ea85af561f
---
# Server-side logging for A4T data in Platform Web SDK

The Adobe Experience Platform Web SDK allows you to implement Adobe Analytics for Target (A4T) functionality on Platform Edge Network. When server-side logging is enabled, all Analytics hits sent through the Edge Network are augmented with Target details on the server side, without having to go through the hit stitching process. 

Server-side logging for Analytics is enabled when Analytics is enabled in the datastream configuration:

![Analytics datastream configuration enabled](../assets/enable-analytics-datastream.png)

The following diagram shows how data flows through the system when server-side Analytics Logging is enabled:

![Server-side logging flow](../assets/analytics-server-side-logging.png)

## Next steps

This guide covered server-side logging for A4T data in the Web SDK. See the guide on [client-side logging](./client-side.md) for more information on how to handle A4T data on the client side.
