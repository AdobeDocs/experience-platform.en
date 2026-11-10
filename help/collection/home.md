---
title: Data collection overview
description: Learn how to send data to Adobe Experience Platform.
exl-id: 03ce5339-e68d-4adf-8c3c-82846a626dad
TQID: 'https://experienceleague.adobe.com/cZl7JCCNUNwni6DKqQeyyH7qaup0HFDpxm0NiJYN4S8'
feature_v2:
  - id: d5947817-d24b-4ba3-8126-2c3d66e9422b
    internal-label: Web SDK
  - id: a8a79b8d-fdca-499c-a5ef-f88a099d8eb9
    internal-label: Mobile SDK
  - id: b7798bb6-f089-4907-8492-05fc80e10632
    internal-label: Server API
  - id: ca3d6bf4-a4af-4944-936b-8de1eb09f149
    internal-label: Datastreams
  - id: dc6ebdf7-9a94-43eb-9184-759cfdd0cf1c
    internal-label: Event forwarding
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection tags
level_v2:
  - id: e8ccd51f-da0d-4e3b-939b-e30d5ebb1ea5
    internal-label: Beginner
topic_v2:
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
  - id: ab5044a6-dcbb-4001-bad8-41e63e2d11c9
    internal-label: Integration and architecture
autotag-review: '2026-11-05T22:08:57.077Z'
---
# Data collection overview

Adobe Experience Platform provides a suite of technologies that allow you to collect customer experience data from various sources and send it to the Adobe Experience Platform Edge Network. That data can then be enriched, transformed, and distributed to Adobe or non-Adobe destinations.

Adobe supports the following code languages with dedicated libraries for data collection:

* **JavaScript**: For websites and web-based applications
* **Server-side JavaScript**: For server applications that run in Node.js or another server-side JavaScript runtime
* **Kotlin**: For Android devices
* **Swift**: For iOS devices
* **Brightscript**: For Roku devices
* **Flutter**: For Android + iOS applications using Flutter
* **React Native**: For Android + iOS applications using React Native

The tags UI in Adobe Experience Platform Data Collection include a Web SDK and Mobile SDK extension.

If none of the above SDKs accommodate your project's needs, you can use the [Adobe Experience Platform Edge Network API](https://developer.adobe.com/data-collection-apis/docs/) to send data directly to Adobe.

## Data collection process

Instead of installing and implementing separate individual libraries for each Adobe product, you can implement one of the above SDKs or tag extensions to aggregate all desired data into a single payload. That payload is sent to a [datastream](/help/datastreams/overview.md) in the Adobe Experience Platform Edge Network.

![Data collection diagram](assets/tags-sdks.png)

The Adobe Experience Platform Edge Network is a globally distributed, fast, and reliable network of servers capable of receiving and processing data at a tremendous scale. When a datastream receives data, it distributes that data to each respective solution that you have configured. The data is passed along in a format that each individual product understands.

![Adobe solutions diagram](assets/adobe-solutions.png)

You can also use [event forwarding](/help/tags/ui/event-forwarding/overview.md) to transform, enrich, and send data to any non-Adobe destination with low latency and without any client-side implementation code.

![Event forwarding diagram](assets/event-forwarding.png)
