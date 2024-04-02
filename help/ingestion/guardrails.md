---
keywords: Experience Platform;troubleshooting;guardrails;guidelines;
title: Guardrails for Data Ingestion
description: Learn about guardrails for data ingestion in Adobe Experience Platform.
exl-id: f07751cb-f9d3-49ab-bda6-8e6fec59c337
---
# Guardrails for Data Ingestion

Guardrails are thresholds that provide guidance for data and system usage, performance optimization, and avoidance of errors or unexpected results in Adobe Experience Platform. Guardrails can refer to your usage or consumption of data and processing in relation to your licensing entitlements.

This document provides guidance on guardrails for data ingestion in Adobe Experience Platform.

## Guardrails for batch ingestion

The following table outlines guardrails to consider when using the [batch ingestion API](./batch-ingestion/overview.md) or sources:

| Type of ingestion | Guidelines | Notes |
| --- | --- | --- |
| Data lake ingestion using the batch ingestion API  | <ul><li>You can ingest up to 20 GB of data per hour to data lake using the batch ingestion API.</li><li>The maximum number of files per batch is 1500.</li><li>The maximum batch size is 100 GB.</li><li>The maximum number of properties or fields per row is 10000.</li><li>The maximum number of batches per minute, per user is 138.</li></ul> | |
| Data lake ingestion using batch sources | <ul><li>You can ingest up to 200 GB of data per hour to data lake using batch ingestion sources such as [!DNL Azure Blob], [!DNL Amazon S3], and [!DNL SFTP].</li><li>A batch size should be between 256 MB and 100 GB. This applies to both uncompressed and compressed data. When compressed data is uncompressed in the data lake, these limitations will apply.</li><li>The maximum number of files per batch is 1500.</li><li>The minimum size of a file or folder is 1 byte. You cannot ingest 0 byte size files or folders.</li></ul> | Read the [sources overview](../sources/home.md) for a catalog of sources you can use for data ingestion. |
| Batch ingestion to Profile | <ul><li>The maximum size of a record class is 100 KB (hard).</li><li>The maximum size of an ExperienceEvent class is 10 KB (hard).</li></ul> | |
| Number of Profile or ExperienceEvent batches ingested per day | **The maximum number of Profile or ExperienceEvent batches ingested per day is 90.** This means that the combined total of Profile and ExperienceEvent batches ingested each day cannot exceed 90. Ingesting additional batches will affect system performance. | This is a soft limit. It is possible to go beyond a soft limit, however, soft limits provide a recommended guideline for system performance. |

## Guardrails for streaming ingestion

Read the [streaming ingestion overview](./streaming-ingestion/overview.md) for information on guardrails for streaming ingestion.

## Guardrails for streaming sources

The following table outlines guardrails to consider when using the streaming sources:

| Type of ingestion | Guidelines | Notes |
| --- | --- | --- |
| Streaming sources | <ul><li>The maximum record size is 1 MB, with the recommended size being 10 KB.</li><li>Streaming sources support between 4000 to 5000 requests per second when ingesting to the data lake. This applies for both newly created source connections in addition to existing source connections. **Note**: It can take up to 30 minutes for streaming data to be completely processed to data lake.</li><li>Streaming sources support a maximum of 1500 requests per second when ingesting data to profile or streaming segmentation.</li></ul> | Streaming sources such as [!DNL Kafka], [!DNL Azure Event Hubs], and [!DNL Amazon Kinesis] do not use the [!DNL Data Collection Core Service] (DCCS) route and can have different throughput limits. See the [sources overview](../sources/home.md) for a catalog of sources you can use for data ingestion. |

## Next steps

See the following documentation for more information on other Experience Platform services guardrails, on end-to-end latency information, and licensing information from Real-Time CDP Product Description documents:

* [Real-Time CDP guardrails](/help/rtcdp/guardrails/overview.md)
* [End-to-end latency diagrams](https://experienceleague.adobe.com/docs/blueprints-learn/architecture/architecture-overview/deployment/guardrails.html?lang=en#end-to-end-latency-diagrams) for various Experience Platform services.
* [Real-Time Customer Data Platform (B2C Edition - Prime and Ultimate Packages)](https://helpx.adobe.com/legal/product-descriptions/real-time-customer-data-platform-b2c-edition-prime-and-ultimate-packages.html)
* [Real-Time Customer Data Platform (B2P - Prime and Ultimate Packages)](https://helpx.adobe.com/legal/product-descriptions/real-time-customer-data-platform-b2p-edition-prime-and-ultimate-packages.html)
* [Real-Time Customer Data Platform (B2B - Prime and Ultimate Packages)](https://helpx.adobe.com/legal/product-descriptions/real-time-customer-data-platform-b2b-edition-prime-and-ultimate-packages.html)
