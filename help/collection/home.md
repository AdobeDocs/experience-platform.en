---
solution: Experience Platform
title: Data collection overview
description: Learn how to send data to Adobe Experience Platform.
exl-id: 03ce5339-e68d-4adf-8c3c-82846a626dad
TQID: https://experienceleague.adobe.com/cZl7JCCNUNwni6DKqQeyyH7qaup0HFDpxm0NiJYN4S8
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: daec7ead-f475-492a-a3b3-02ae08565d6f
    internal-label: Implementation
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection
subfeature_v2:
  - id: abc02dd6-664f-446a-9aaa-675bc0f2fe4a
    internal-label: Sources
  - id: ca3d6bf4-a4af-4944-936b-8de1eb09f149
    internal-label: Datastreams
  - id: d9830f6f-ceb6-4faa-9744-f281fe4439f9
    internal-label: Tags
  - id: dc6ebdf7-9a94-43eb-9184-759cfdd0cf1c
    internal-label: Event forwarding
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: b5ce8718-c3af-4fdb-a1a9-fca32f83a87c
    internal-label: Implementation
  - id: bce87dde-a4ab-44c9-8a18-ad66e4ddb377
    internal-label: Customer experience
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
---
# Data collection overview

Adobe Experience Platform provides a suite of technologies that allow you to collect customer experience data from various sources and send it to the Adobe Experience Platform Edge Network. That data can then be enriched, transformed, and distributed to Adobe or non-Adobe destinations.

Adobe supports the following code languages with dedicated libraries for data collection:

* **JavaScript**: For websites and web-based applications
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
