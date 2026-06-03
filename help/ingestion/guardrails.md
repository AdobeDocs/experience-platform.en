---
keywords: Experience Platform;troubleshooting;guardrails;guidelines;
title: Guardrails for Data Ingestion
description: Learn about guardrails for data ingestion in Adobe Experience Platform.
exl-id: f07751cb-f9d3-49ab-bda6-8e6fec59c337
TQID: https://experienceleague.adobe.com/miZ-K7DpzfXPKrtp3PVJOHn7wEOVsMIuVvqhjKPi6Kg
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: c132d929-fa62-4271-803e-b823be07b914
    internal-label: Profile
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection
subfeature_v2:
  - id: abc02dd6-664f-446a-9aaa-675bc0f2fe4a
    internal-label: Sources
  - id: ae2cba0e-54f2-464b-a3b3-ad371e8a886a
    internal-label: Catalog
  - id: d1a87129-ba05-4f15-98b1-233618f1774a
    internal-label: Data ingestion
  - id: e5ae22e3-a3b0-46ed-804f-9abf1bbe3e74
    internal-label: Guardrails
  - id: f5efb499-54f9-432b-ac5c-599dbac103af
    internal-label: Data management
  - id: f6ff4d13-7b5c-4533-8556-95e76673d4cb
    internal-label: Properties
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: c1579802-ddd4-4214-8a91-97b2066abe11
    internal-label: Troubleshooting
  - id: cdd65e7e-8839-44a2-bc21-0e03623b5dd1
    internal-label: Optimization
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
  - id: ebde5b41-29c9-4f5e-9ef6-1197e85409e3
    internal-label: Data management
---
# Guardrails for Data Ingestion

>[!IMPORTANT]
>
>Guardrails for batch and streaming ingestion are generally calculated at the organization level and not the sandbox level. This means that your data usage per sandbox is bound to the total license usage entitlement that corresponds with your entire organization. Additionally, data usage in development sandboxes are limited to 10% of your total profiles. For more information about license usage entitlement, read the [data management best practices guide](../landing/license-usage-and-guardrails/data-management-best-practices.md).

Guardrails are thresholds that provide guidance for data and system usage, performance optimization, and avoidance of errors or unexpected results in Adobe Experience Platform. Guardrails can refer to your usage or consumption of data and processing in relation to your licensing entitlements.

>[!IMPORTANT]
>
>Check your license entitlements in your Sales Order and corresponding [Product Description](https://helpx.adobe.com/legal/product-descriptions.html) on actual usage limits in addition to this guardrails page.

This document provides guidance on guardrails for data ingestion in Adobe Experience Platform.

## Guardrails for batch ingestion

The following table outlines guardrails to consider when using the [batch ingestion API](./batch-ingestion/overview.md) or sources:

| Type of ingestion | Guidelines | Notes |
| --- | --- | --- |
| Data lake ingestion using the batch ingestion API  | <ul><li>You can ingest up to 20 GB of data per hour to data lake using the batch ingestion API.</li><li>The maximum number of files per batch is 1500.</li><li>The maximum batch size is 100 GB.</li><li>The maximum number of properties or fields per row is 10000.</li><li>The maximum number of batches per minute, per user is 2000.</li></ul> | |
| Data lake ingestion using batch sources | <ul><li>You can ingest up to 200 GB of data per hour to data lake using batch ingestion sources such as [!DNL Azure Blob], [!DNL Amazon S3], and [!DNL SFTP].</li><li>A batch size should be between 256 MB and 100 GB. This applies to both uncompressed and compressed data. When compressed data is uncompressed in the data lake, these limitations will apply.</li><li>The maximum number of files per batch is 1500.</li><li>The minimum size of a file or folder is 1 byte. You cannot ingest 0 byte size files or folders.</li></ul> | Read the [sources overview](../sources/home.md) for a catalog of sources you can use for data ingestion. |
| Batch ingestion to Profile | <ul><li>The maximum size of a record class is 100 KB (hard).</li><li>The maximum size of an ExperienceEvent class is 10 KB (hard).</li></ul> | |
| Number of Profile or ExperienceEvent batches ingested per day | **The maximum number of Profile or ExperienceEvent batches ingested per day is 90 per sandbox.** This means that the combined total of Profile and ExperienceEvent batches ingested each day cannot exceed 90. Ingesting additional batches will affect system performance. | This is a soft limit. It is possible to go beyond a soft limit, however, soft limits provide a recommended guideline for system performance. Additionally, this guardrail is on a **per sandbox** basis, not a per organization basis. |
| Encrypted data ingestion | The maximum supported size of a single encrypted file is 1 GB. For example, while you can ingest 2 or more GBs worth of data in a single dataflow run, no individual file in the dataflow run can exceed 1 GB. | The process of ingesting encrypted data may take longer than that of a regular data ingestion. Read the [encrypted data ingestion API guide](../sources/tutorials/api/encrypt-data.md) for more information. |
| Upsert batch ingestion | Ingestion of upsert batches can be up to 10x slower than regular batches, therefore, you should **keep your upsert batches under two million records** in order to ensure an efficient runtime and to avoid blocking other batches from being processed in the sandbox. | While you can undoubtedly ingest batches that exceed two million records, the time of your ingestion will be significantly longer due to the limitations of small sandboxes. |

{style="table-layout:auto"}
 
## Guardrails for streaming ingestion

Read the [streaming ingestion overview](./streaming-ingestion/overview.md) for information on guardrails for streaming ingestion.

## Guardrails for streaming sources

The following table outlines guardrails to consider when using the streaming sources:

| Type of ingestion | Guidelines | Notes |
| --- | --- | --- |
| Streaming sources | <ul><li>The maximum record size is 1 MB, with the recommended size being 10 KB.</li><li>Streaming sources support between 4000 to 5000 requests per second when ingesting to the data lake. This applies for both newly created source connections in addition to existing source connections. **Note**: It can take up to 60 minutes for streaming data to be completely processed to data lake.</li><li>Streaming sources support a maximum of 1500 requests per second when ingesting data to profile or streaming segmentation.</li></ul> | Streaming sources such as [!DNL Kafka], [!DNL Azure Event Hubs], and [!DNL Amazon Kinesis] do not use the [!DNL Data Collection Core Service] (DCCS) route and can have different throughput limits. See the [sources overview](../sources/home.md) for a catalog of sources you can use for data ingestion. |

{style="table-layout:auto"}

## Next steps

See the following documentation for more information on other Experience Platform services guardrails, on end-to-end latency information, and licensing information from Real-Time CDP Product Description documents:

* [Real-Time CDP guardrails](/help/rtcdp/guardrails/overview.md)
* [End-to-end latency diagrams](https://experienceleague.adobe.com/docs/blueprints-learn/architecture/architecture-overview/deployment/guardrails.html?lang=en#end-to-end-latency-diagrams) for various Experience Platform services.
* [Real-Time Customer Data Platform (B2C Edition - Prime and Ultimate Packages)](https://helpx.adobe.com/legal/product-descriptions/real-time-customer-data-platform-b2c-edition-prime-and-ultimate-packages.html)
* [Real-Time Customer Data Platform (B2P - Prime and Ultimate Packages)](https://helpx.adobe.com/legal/product-descriptions/real-time-customer-data-platform-b2p-edition-prime-and-ultimate-packages.html)
* [Real-Time Customer Data Platform (B2B - Prime and Ultimate Packages)](https://helpx.adobe.com/legal/product-descriptions/real-time-customer-data-platform-b2b-edition-prime-and-ultimate-packages.html)
