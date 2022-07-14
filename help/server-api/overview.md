---
title: Edge Network Server API overview
description: Learn what the Edge Network Server API is and how you can use it.
seo-description: Learn what the Edge Network Server API is and how you can use it.
keywords: data collection;collection;Adobe Experience Platform Edge Network;server api;
exl-id: 46bd8798-d7f9-405b-9ca8-856ad4aa688c
---
# Edge Network Server API overview {#overview}

The Adobe Experience Platform Edge Network provides an optimized way for customers to interact with any Adobe Experience Cloud or Adobe Experience Platform Edge services.

The [!DNL Edge Network Server API] can be used for a variety of data collection, personalization, advertising and marketing use cases. The [!DNL Server API] can be used on servers, [!DNL IoT] devices, set-top boxes, and a variety of other devices.

Since the [!DNL Server API] does not rely on any libraries to load, it provides a lightning-fast way to interact with the Adobe Experience Platform Edge Network and supported solutions.

The benefits of the [!DNL Server API] architecture include:

* Reduced page load time
* Improved latency
* First-party data collection
* Streamlined, server-side communication between services
 
The [!DNL Server API] supports interactive and batch data collection, via two dedicated endpoints:

1. The interactive endpoint supports communication with Adobe Experience Platform and Adobe Experience Cloud services that support advanced segmentation, personalization and other marketing use cases.
2. The batch endpoint will allow requests to be sent in batch when data needs to be onboarded without receiving a response from the applications being called. 
 
The [!DNL Server API] supports the following type of requests:

* Authenticated requests via [Adobe I/O](https://developer.adobe.com/), using the new `server.adobedc.net` endpoint.
* Unauthenticated requests via the `edge.adobedc.net` endpoint.

This enables use cases that allow for secure, authenticated collection of sensitive data, according to your organization’s privacy policies. In addition to authentication, the Server API supports marking datastreams to accept only authenticated communication via the API.

Watch the video below for a streamlined overview of the Server API.

>[!VIDEO](https://video.tv.adobe.com/v/341448/)
