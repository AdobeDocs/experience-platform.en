---
keywords: Experience Platform;troubleshooting;guardrails;guidelines;
title: Guardrails for Data Ingestion
description: This document provides guidance on guardrails for data ingestion in Adobe Experience Platform
exl-id: f07751cb-f9d3-49ab-bda6-8e6fec59c337
---
# Guardrails for Data Ingestion

Guardrails are thresholds that provide guidance for data and system usage, performance optimization, and avoidance of errors or unexpected results in Adobe Experience Platform. Guardrails can refer to your usage or consumption of data and processing in relation to your licensing entitlements.

This document provides guidance on guardrails for data ingestion in Adobe Experience Platform.

## Guardrails for batch ingestion

The following table outlines guardrails to consider when using the [batch ingestion API](./batch-ingestion/overview.md) or sources:

| Type of ingestion | Guidelines | Notes |
| --- | --- | --- |
| Data lake ingestion using the batch ingestion API  | <ul><li>You can ingest up to 20 GB of data per hour to data lake using the batch ingestion API.</li><li>The maximum number of files per batch is 1500.</li><li>The maximum batch size is 100 GB.</li><li>The maximum number of properties or fields per row is 10000.</li><li>The maximum number of batches per minute, per user is 138.</li></ul> |
| Data lake ingestion using batch sources | <ul><li>You can ingest up to 200 GB of data per hour to data lake using batch ingestion sources such as [!DNL Azure Blob], [!DNL Amazon S3], and [!DNL SFTP].</li><li>A batch size should be between 256 MB and 100 GB.</li><li>The maximum number of files per batch is 1500.</li></ul> | See the [sources overview](../sources/home.md) for a catalog of sources you can use for data ingestion. |
| Batch ingestion to Profile | <ul><li>The maximum size of a record class is 100 KB (soft).</li><li>The maximum size of an ExperienceEvent class is 10 KB (soft).</li><li>The maximum size of a single record is 1 MB.</li></ul> |
| Number of Profile or ExperienceEvent batches ingested per day | **The maximum number of Profile or ExperienceEvent batches ingested per day is 90.** This means that the combined total of Profile and ExperienceEvent batches ingested each day cannot exceed 90. Ingesting additional batches will affect system performance. | This is a soft limit. It is possible to go beyond a soft limit, however, soft limits provide a recommended guideline for system performance. |

## Guardrails for streaming ingestion

Read the [streaming ingestion overview](./streaming-ingestion/overview.md) for information on guardrails for streaming ingestion.

## Guardrails for streaming sources

The following table outlines guardrails to consider when using the streaming sources:

| Type of ingestion | Guidelines | Notes |
| --- | --- | --- |
| Streaming sources | <ul><li>The maximum record size is 1 MB, with the recommended size being 10 KB.</li><li>Streaming sources support between 4000 to 5000 requests per second upon the creation of a new source connection. **Note**: It can take up to 30 minutes for streaming data to be completely processed to data lake.</li><li>You can process between 4000 and 5000 requests per second to data lake. **Note**: It can take up to 30 minutes for streaming data to be completely processed to data lake.</li></ul> | Streaming sources such as [!DNL Kafka], [!DNL Azure Event Hubs], and [!DNL Amazon Kinesis] do not use the [!DNL Data Collection Core Service] (DCCS) route and can have different throughput limits. See the [sources overview](../sources/home.md) for a catalog of sources you can use for data ingestion. |

## Next steps

See the following documentation for more information on data and processing guardrails in Experience Platform:

* [Guardrails for Real-Time Customer Profile data](../profile/guardrails.md)
* [Guardrails for Identity Service data](../identity-service/guardrails.md)
