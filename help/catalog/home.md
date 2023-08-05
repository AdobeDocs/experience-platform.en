---
keywords: Experience Platform;home;popular topics;catalog service;catalog;Catalog service;data location;Data Location;Data management;data management;Lineage;lineage;Catalog;enable dataset
solution: Experience Platform
title: Catalog Service Overview
description: Catalog Service is the system of record for data location and lineage within Adobe Experience Platform. While all data that is ingested into Experience Platform is stored in the Data Lake as files and directories, Catalog holds the metadata and description of those files and directories for lookup and monitoring purposes.
exl-id: ef0c173b-607b-41b8-8676-c54ae9472e23
---
# [!DNL Catalog Service] overview

[!DNL Catalog Service] is the system of record for data location and lineage within Adobe Experience Platform. While all data that is ingested into [!DNL Experience Platform] is stored in the [!DNL Data Lake] as files and directories, [!DNL Catalog] holds the metadata and description of those files and directories for lookup and monitoring purposes. 

Simply put, [!DNL Catalog] acts as a metadata store or "catalog" where you can find information about your data within [!DNL Experience Platform]. You can use [!DNL Catalog] to answer the following questions:

* Where is my data located?
* At what stage of processing is this data?
* What systems or processes have acted on my data?
* How much data was successfully processed?
* What errors occurred during processing?

[!DNL Catalog] provides a RESTful API that allows you to programmatically manage [!DNL Platform] metadata using basic CRUD operations. See the [Catalog developer guide](api/getting-started.md) for more information.

## [!DNL Catalog] and [!DNL Experience Platform] services

The resources that [!DNL Catalog Service] tracks are used by multiple [!DNL Experience Platform] services. In order to make the most of [!DNL Catalog's] capabilities, it is recommended that you become familiar with these services and how they interact with [!DNL Catalog].

### [!DNL Experience Data Model] (XDM) System

[!DNL Experience Data Model] (XDM) System is the standardized framework by which [!DNL Platform] organizes customer experience data. [!DNL Experience Platform] leverages XDM schemas to describe the structure of data in a consistent and reusable way.

When data is ingested into [!DNL Platform], the structure of that data is mapped to an XDM schema and stored within the [!DNL Data Lake] as part of a dataset. The metadata for each dataset is tracked by [!DNL Catalog Service], which includes a reference to the XDM schema that the dataset conforms to. 

For more general information about XDM System, please see the [XDM System overview](../xdm/home.md).

### [!DNL Data Ingestion]

[!DNL Experience Platform] ingests data from multiple sources and persists records as datasets within the [!DNL Data Lake]. [!DNL Catalog] tracks the metadata for these datasets, regardless of their source or method of ingestion.

When using the batch ingestion method, [!DNL Catalog] also tracks additional metadata for batch files. Batches are units of data that consist of one or more files to be ingested as a single unit. [!DNL Catalog] tracks the metadata for these batch files, as well as the datasets they are persisted in after ingestion. Batch metadata includes information about the number of successfully ingested records, as well as any failed records and associated error messages.

See the [data ingestion overview](../ingestion/home.md) for more information.

## [!DNL Catalog] objects

As outlined in the previous section, [!DNL Catalog] tracks metadata for several kinds of resources and operations that are used by other [!DNL Platform] services. [!DNL Catalog] maintains its own store of "objects" which encapsulate this metadata. [!DNL Catalog] objects are queryable representations of [!DNL Platform] data which allow you to search, monitor, and label your data without needing to access the data itself.

The following table outlines the different object types supported by [!DNL Catalog]:

|Object|API endpoint|Definition|
|---|---|---|
|Batch|`/batches`|Batches are units of data that consist of one or more files to be ingested as a single unit. A batch object in [!DNL Catalog] outlines the batch's ingestion metrics (such as the number of records processed or size on disk) and may also include links to datasets, views, and other resources that were affected by the batch operation.|
|Dataset|`/dataSets`|A dataset is a storage and management construct used for the collection of data (typically a table) that contains a schema (columns) and fields (rows). See the [datasets overview](./datasets/overview.md) for more information.|
|Dataset File|`/datasetFiles`|Dataset files represent blocks of data that has been saved on [!DNL Platform]. As records of literal files, these are where you can find the file's size, the number of records it contains, and a reference to the batch that ingested the file.|

## Next steps

This document provided an introduction to [!DNL Catalog Service] and how it functions within the greater scope of [!DNL Experience Platform]. See the [[!DNL Catalog] developer guide](api/getting-started.md) for steps on interacting with the different endpoints of that [!DNL Catalog] API. It is recommended that you also refer to the guide on [filtering Catalog data](api/filter-data.md) in order to follow best practices for limiting the data returned in API responses.
