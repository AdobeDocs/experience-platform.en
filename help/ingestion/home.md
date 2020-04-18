---
keywords: Experience Platform;home;popular topics
solution: Experience Platform
title: Adobe Experience Platform Data Ingestion overview
topic: overview
---

# Data Ingestion overview

Adobe Experience Platform brings data from multiple sources together in order to help marketers better understand the behavior of their customers. Adobe Experience Platform Data Ingestion represents the multiple methods by which Platform ingests data from these sources, as well as how that data is persisted within the Data Lake for use by downstream Platform services.

This document introduces the three main ways in which data is ingested into Platform, with links to their respective overview documentation for more detailed information.

## Batch ingestion

Batch ingestion allows you to ingest data into Experience Platform as batch files. Batches are units of data that consist of one or more files to be ingested as a single unit. Once ingested, batches provide metadata that describes the number of records successfully ingested, as well as any failed records and associated error messages.

Manually uploaded datafiles such as flat CSV files (mapped to XDM schemas) and Parquet dataframes must be ingested using this method.

See the [batch ingestion overview](./batch-ingestion/overview.md) for more information.

## Streaming ingestion

Streaming ingestion allows you to send data from client- and server-side devices to Experience Platform in real-time. Platform supports the use of data inlets to stream incoming experience data, which is persisted in streaming-enabled datasets within the Data Lake. Data inlets can be configured to automatically authenticate the data they collect, ensuring that the data is coming from a trusted source. 

See the [streaming ingestion overview](./streaming-ingestion/overview.md) for more information.

## Sources

Experience Platform allows you to set up source connections to various data providers. These connections enable you to authenticate to your external data sources, set times for ingestion runs, and manage ingestion throughput. 

Source connections can be configured to gather data from other Adobe applications (such as Adobe Analytics and Adobe Audience Manager), third-party cloud storage sources (such as Azure Blob, Amazon S3, FTP servers, and SFTP servers), and third-party CRM systems (such as Microsoft Dynamics and Salesforce).

See the [Sources overview](../sources/home.md) for more information.

## Next steps

This document provided a brief introduction to the different aspects of Data Ingestion in Experience Platform. Please continue to read the overview documentation for each ingestion method to familiarize yourself with their different capabilities, use cases, and best practices. For information on how Experience Platform tracks the metadata for ingested records, see the [Catalog Service overview](../catalog/home.md).