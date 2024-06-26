---
title: Explore Ingested Batches in a Dataset
description: Learn how to understand and manage the data ingestion process in Adobe Experience Platform. This includes verifying batches, handling errors, and querying ingested data.
---
# Explore Ingested Batches in a Dataset

<!-- This document explains how data is ingested in batches, how to verify and validate these batches, and how to handle errors that may arise during the ingestion process. -->

This document explains the data ingestion process in Adobe Experience Platform and details how to verify and validate records in ingested batches. By reading this document you will learn how to: 

- Handle errors that may arise during the ingestion process
- Access dataset batch metadata
- Troubleshoot and ensure data integrity by querying batches

>[!NOTE]
>
>Some screenshots in this guide are taken from [!DNL DBVisualizer]. To learn how to [connect Query Service with DBVisualizer](../clients/dbvisulaizer.md) or other [third-party BI tools](../clients/overview.md), see the linked documentation.

## Prerequisites

To help your understanding of the concepts discussed in this document, you should have knowledge of the following topics:

1. **Data Ingestion**: See the [Data Ingestion overview](../../ingestion/home.md) to learn the basics of how data is ingested into the Platform, including the different methods and processes involved.

2. **Batch Ingestion**: See the [batch ingestion API overview](../../ingestion/batch-ingestion/overview.md) to learn the basic concepts of batch ingestion. Specifically, what a "batch" is and how it functions within the Platform data ingestion process.

3. **"Error Handling in Data Ingestion"**: Learn about the [different types of errors that can occur](../../ingestion/quality/error-diagnostics.md#retrieve-errors) during data ingestion and [how to handle them](../../ingestion/batch-ingestion/troubleshooting.md#what-if-a-batch-fails).

4. **System Metadata in Datasets**: See the [Catalog Service overview](../../catalog/home.md) to learn how system metadata fields are used to track and query ingested data.

5. **Experience Data Model (XDM)**: See the [Schemas UI overview](../../xdm/ui/overview.md) and the ['basics of schema composition'](../../xdm/schema/composition.md) to learn about XDM schemas and how they represent and validate the structure and format of data ingested into Platform.

## Basic principles of data ingestion in Platform {#data-ingestion-principles}

Data ingestion involves the collection and materializing of records in batches into Adobe Experience Platform. A "batch" is a data ingestion concept where a collection of records contained in a file, or streamed directly from the source, are materialized as a unit on the data lake. A batch refers to a collection of records that are processed as a unit.

When ingesting data into Platform, you must verify and validate the records within a batch that have been successfully ingested. You should be aware of the potential issues that can arise during the ingestion process as your data is copied into Platform. These issues are represented by error codes when you investigate a dataset. These issues can include rows being skipped, stored separetley, or data type values being inaccurately converted to NUll. This guide highlights the importance of monitoring and addressing these potential process errors and how to address them.

## Investigate any failed batch dataset ingestions {#investigate-failed-ingestions}

To investigate any failed batch dataset ingestion, first navigate to the [!UICONTROL Datasets] dashbaord. In the Experience Platform UI, select **[!UICONTROL Datasets]** in the left-navigation to open the [!UICONTROL Datasets] dashboard.

![The Platform UI Datasets dashboard with Datasets highlighted in left navigation.](../images/use-cases/datasets-workspace.png)

Select the name of a dataset from the Browse tab to access its Dataset activity screen and see details of the dataset you selected. 

![The Datasets browse tab with a failed batch ingestion highlighted.](../images/use-cases/failed-batch-ingestions.png)

To open the [!UICONTROL Batch overview], select a batch ID 

![The Batch overview with error codes highlighted.](../images/use-cases/error-codes.png)

### Common batch errors {#batch-errors}

When ingesting data into Experience Platform, you may encounter several common errors that can impact the success of your data batches. Understanding these errors is crucial for troubleshooting and ensuring data integrity. Here are the main types of ingestion errors you might face:

- ERROR: Indicates severe issues like data corruption or format non-conformance, causing the entire batch to fail.
- DCVS: Represents less serious issues like missing required fields. These rows are skipped and stored separately, accessible via error diagnostics tools.
- MAPPER: These errors occur during data type conversion, resulting in NULL values. Such records make it to the final dataset but may need further exploration.

## Access dataset batch metadata {#access-dataset-batch-metadata}

To ensure that system columns (metadata columns) are included in the query results, use the SQL command `set drop_system_columns=false` in your Query Editor. This configures the behavior of your SQL query session. This input mus be repeated if you start a new session.

Next, to view the system fields of the dataset, execute a SELECT all statement to display the results from the dataset, for example `select * from movie_data`. The results include two new columns on the right-hand side `acp_system_metadata` and `_ACP_BATCHID`. The metadata columns `_acp_system_metadata` and `_ACP_BATCHID` help identify the logical and physical partitions of ingested data.
 
![The DBVisualizer UI with the movie_data table and its metadata columns displayed and highlighted.](../images/use-cases/movie_data-table-with-metadata-columns.png)
