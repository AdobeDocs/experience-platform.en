---
keywords: Experience Platform;home;popular topics;kafka;kafka connector;Kafka;
solution: Experience Platform
title: Kafka Connector
description: The stream connector for Adobe Experience Platform is based on Apache Kafka Connect. This library can be used to stream JSON events from Kafka topics in your data center directly to Experience Platform in real time.
exl-id: 062963e5-c727-4c2c-97db-8a9a5a7d903c
---
# [!DNL Kafka] connector for Adobe Experience Platform

The stream connector for Adobe Experience Platform is based on [!DNL Apache Kafka Connect]. This library can be used to stream JSON events from [!DNL Kafka] topics in your data center directly to [!DNL Experience Platform] in real time.

The stream connector is a sink (one-way) connector, delivering data from [!DNL Kafka] topics to a registered endpoint on [!DNL Experience Platform]. To use this connector, you must download the library, add it to your existing [!DNL Kafka] deployment, and configure the [!DNL Kafka] topic(s) to the Adobe Streaming HTTP URL. Additional code is **not** required. The connector supports the following features:

- Authenticated collection of data
- Batching messages to reduce network calls and increase throughput

For more information on the [!DNL Kafka] connector, including instructions on how to set up the connector, please read the [getting started guide](https://github.com/adobe/experience-platform-streaming-connect). For a more detailed workflow, please read the [developer guide](https://www.adobe.com/go/kafka-connector-developer-guide).
