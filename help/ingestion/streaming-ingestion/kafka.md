---
keywords: Experience Platform;home;popular topics;kafka;kafka connector;Kafka;
solution: Experience Platform
title: Kafka Connector
description: The stream connector for Adobe Experience Platform is based on Apache Kafka Connect. This library can be used to stream JSON events from Kafka topics in your data center directly to Experience Platform in real time.
exl-id: 062963e5-c727-4c2c-97db-8a9a5a7d903c
TQID: https://experienceleague.adobe.com/LujCg-p47RA8z5YZ1OtJ7LjuG1cfRqbaWCRfZCmbvyM
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: c1579802-ddd4-4214-8a91-97b2066abe11
    internal-label: Troubleshooting
---
# [!DNL Kafka] connector for Adobe Experience Platform

The stream connector for Adobe Experience Platform is based on [!DNL Apache Kafka Connect]. This library can be used to stream JSON events from [!DNL Kafka] topics in your data center directly to [!DNL Experience Platform] in real time.

The stream connector is a sink (one-way) connector, delivering data from [!DNL Kafka] topics to a registered endpoint on [!DNL Experience Platform]. To use this connector, you must download the library, add it to your existing [!DNL Kafka] deployment, and configure the [!DNL Kafka] topic(s) to the Adobe Streaming HTTP URL. Additional code is **not** required. The connector supports the following features:

- Authenticated collection of data
- Batching messages to reduce network calls and increase throughput

For more information on the [!DNL Kafka] connector, including instructions on how to set up the connector, please read the [getting started guide](https://github.com/adobe/experience-platform-streaming-connect). For a more detailed workflow, please read the [developer guide](https://www.adobe.com/go/kafka-connector-developer-guide).
