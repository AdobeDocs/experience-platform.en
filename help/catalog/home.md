---
keywords: Experience Platform;home;popular topics
solution: Experience Platform
title: Catalog Service overview
topic: overview
---

# Catalog Service overview

Catalog Service is the system of record for data location and lineage within Adobe Experience Platform. While all data that is ingested into Experience Platform is stored in the Data Lake as files and directories, Catalog holds the metadata and description of those files and directories for lookup and monitoring purposes. 

Simply put, Catalog acts as a metadata store or "catalog" where you can find information about your data within Experience Platform. You can use Catalog to answer the following questions:

* Where is my data located?
* At what stage of processing is this data?
* What systems or processes have acted on my data?
* How much data was successfully processed?
* What errors occurred during processing?

Catalog provides a RESTful API that allows you to programmatically manage Platform metadata using basic CRUD operations. See the [Catalog developer guide](api/getting-started.md) for more information.

## Catalog and Experience Platform services

The resources that Catalog Service tracks are used by multiple Experience Platform services. In order to make the most of Catalog's capabilities, it is recommended that you become familiar with these services and how they interact with Catalog.

### Experience Data Model (XDM) System

Experience Data Model (XDM) System is the standardized framework by which Platform organizes customer experience data. Experience Platform leverages XDM schemas to describe the structure of data in a consistent and reusable way.

When data is ingested into Platform, the structure of that data is mapped to an XDM schema and stored within the Data Lake as part of a **dataset**. The metadata for each dataset is tracked by Catalog Service, which includes a reference to the XDM schema that the dataset conforms to. 

For more general information about XDM System, please see the [XDM System overview](../xdm/home.md).

### Data Ingestion

Experience Platform ingests data from multiple sources and persists records as datasets within the Data Lake. Catalog tracks the metadata for these datasets, regardless of their source or method of ingestion.

When using the batch ingestion method, Catalog also tracks additional metadata for **batch** files. Batches are units of data that consist of one or more files to be ingested as a single unit. Catalog tracks the metadata for these batch files, as well as the datasets they are persisted in after ingestion. Batch metadata includes information about the number of successfully ingested records, as well as any failed records and associated error messages.

See the [data ingestion overview](../ingestion/home.md) for more information.

## Catalog objects

As outlined in the previous section, Catalog tracks metadata for several kinds of resources and operations that are used by other Platform services. Catalog maintains its own store of "objects" which encapsulate this metadata. Catalog objects are queryable representations of Platform data which allow you to search, monitor, and label your data without needing to access the data itself.

The following table outlines the different object types supported by Catalog:

|Object|API endpoint|Definition|
|---|---|---|
|Account|`/accounts`|When creating source connections, authentication credentials must be provided. An account represents a collection of authentication credentials that were used to create a connection of a specific type. Each connection has a set of unique parameters that are persisted by Catalog and secured in an Azure Key Vault.|
|Batch|`/batches`|Batches are units of data that consist of one or more files to be ingested as a single unit. A batch object in Catalog outlines the batch's ingestion metrics (such as the number of records processed or size on disk) and may also include links to datasets, views, and other resources that were affected by the batch operation.|
|Connection|`/connections`|A connection is a single instance of a source connector, unique to your organization and configured using the appropriate authentication credentials for the connector type.|
|Connector|`/connectors`|Connectors define how source connections are to gather data from other Adobe applications (such as Adobe Analytics and Adobe Audience Manager), third-party cloud storage sources (such as Azure Blob, Amazon S3, FTP servers, and SFTP servers), and third-party CRM systems (such as Microsoft Dynamics and Salesforce).|
|Dataset|`/dataSets`|A dataset is a storage and management construct used for the collection of data (typically a table) that contains a schema (columns) and fields (rows).|
|Dataset File|`/datasetFiles`|Dataset files represent blocks of data that has been saved on Platform. As records of literal files, these are where you can find the file's size, the number of records it contains, and a reference to the batch that ingested the file.|

## Next steps

This document provided an introduction to Catalog Service and how it functions within the greater scope of Experience Platform. See the [Catalog developer guide](api/getting-started.md) for steps on interacting with the different endpoints of that Catalog API. It is recommended that you also refer to the guide on [filtering Catalog data](api/filter-data.md) in order to follow best practices for limiting the data returned in API responses.