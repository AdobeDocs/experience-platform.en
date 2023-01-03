---
keywords: Experience Platform;home;popular topics;data ingestion;data location;Data Location;Data management;data management;Lineage;lineage;batch;Batch;ingested data
solution: Experience Platform
title: Data Ingestion Overview
topic-legacy: overview
description: This document introduces the three main ways in which data is ingested into Platform, with links to their respective overview documentation for more detailed information.
exl-id: c189dd4a-5c59-4189-a18c-a3e45a9ff01d
---
# Data Ingestion overview

Adobe Experience Platform brings data from multiple sources together in order to help marketers better understand the behavior of their customers. Adobe Experience Platform Data Ingestion represents the multiple methods by which [!DNL Platform] ingests data from these sources, as well as how that data is persisted within the Data Lake for use by downstream [!DNL Platform] services.

This document introduces the three main ways in which data is ingested into [!DNL Platform], with links to their respective overview documentation for more detailed information.

## Batch ingestion

Batch ingestion allows you to ingest data into [!DNL Experience Platform] as batch files. Batches are units of data that consist of one or more files to be ingested as a single unit. Once ingested, batches provide metadata that describes the number of records successfully ingested, as well as any failed records and associated error messages.

Manually uploaded datafiles such as flat CSV files (mapped to XDM schemas) and Parquet dataframes must be ingested using this method.

See the [batch ingestion overview](./batch-ingestion/overview.md) for more information.

## Streaming ingestion

Streaming ingestion allows you to send data from client- and server-side devices to [!DNL Experience Platform] in real time. [!DNL Platform] supports the use of data inlets to stream incoming experience data, which is persisted in streaming-enabled datasets within the Data Lake. Data inlets can be configured to automatically authenticate the data they collect, ensuring that the data is coming from a trusted source. 

See the [streaming ingestion overview](./streaming-ingestion/overview.md) for more information.

## Sources

[!DNL Experience Platform] allows you to set up source connections to various data providers. These connections enable you to authenticate to your external data sources, set times for ingestion runs, and manage ingestion throughput. 

Source connections can be configured to gather data from other Adobe applications (such as Adobe Analytics and Adobe Audience Manager), third-party cloud storage sources (such as [!DNL Azure Blob], [!DNL Amazon] S3, FTP servers, and SFTP servers), and third-party CRM systems (such as [!DNL Microsoft Dynamics] and [!DNL Salesforce]).

See the [Sources overview](../sources/home.md) for more information.

## Next steps and additional resources

This document provided a brief introduction to the different aspects of [!DNL Data Ingestion] in [!DNL Experience Platform]. Please continue to read the overview documentation for each ingestion method to familiarize yourself with their different capabilities, use cases, and best practices. You can also supplement your learning by watching the ingestion overview video below. For information on how [!DNL Experience Platform] tracks the metadata for ingested records, see the [Catalog Service overview](../catalog/home.md).

>[!WARNING]
>
>The term "Unified Profile" thats used in the following video is out-of-date. The terms [!DNL "Profile"] or [!DNL "Real-Time Customer Profile"] are the correct terms used in the [!DNL Experience Platform] documentation. Please refer to the documentation for the latest functionality.

>[!VIDEO](https://video.tv.adobe.com/v/27106?quality=12&learn=on)
