---
keywords: Experience Platform;query service;Query service;query
title: Getting Started with Adobe Experience Platform Query Service
description: A breakdown of the necessary steps to fully utilize Adobe Experience Platform Query Service
exl-id: 36ab9354-23f9-4cb8-bcd4-00fe076386ab
---
# Getting started with Adobe Experience Platform [!DNL Query Service] {#getting-started}

Use Adobe Experience Platform Query Service to run SQL queries against ingested datasets, join data from multiple sources, and generate derived datasets for analytics, machine learning workflows, or Real-Time Customer Profile. After ingesting data, access Query Service through the UI for interactive analysis and collaboration, or through the API for automated and programmatic query execution.

## Prerequisites {#prerequisites}

Before you can start querying data, ensure you have:

- **Required permissions**: Your user account has access to Query Service in Experience Platform. If the service is not available in the UI, review the [permissions documentation](../../access-control/home.md#permissions) and contact your system administrator.
- **Data ingestion**: You have data ingested into Experience Platform.

If you need to ingest data, review the [data ingestion tutorial video](https://experienceleague.adobe.com/docs/platform-learn/tutorials/data-ingestion/create-datasets-and-ingest-data.html) for an overview of dataset creation, schema mapping, ingestion, and validation. Read the [ingestion overview documentation](../../ingestion/home.md) for more in depth information and links to other learning resources.

## Quick start paths

After you have ingested your data into Experience Platform, you can begin working with Query Service using either the [!DNL Query Editor] in Experience Platform or the Query Service API.

### [!DNL Query Editor]

Use the [!DNL Query Editor] for analysis, data exploration, and collaborative query development. For an overview of the UI functionality, see the [Query Service UI documentation](../ui/overview.md). To learn about how to write and run queries in the UI, read the [[!DNL Query Editor user guide]](../ui/user-guide.md).

### Query Service API

Use the Query Service API for automated workflows, query templates management, and programmatic integrations. Refer to the [Query Service developer guide](../api/getting-started.md) for detailed instructions on using the Query Service API.

## Next Steps

This document covered the prerequisites needed to use [!DNL Query Service] features in Experience Platform. To quickly get started using Query Service features, you are recommended to read the following documents:

- [General guidance for query execution](../best-practices/writing-queries.md)
- [SQL syntax in Query Service](../sql/syntax.md)
- [Create derived datasets with SQL](../data-distiller/derived-datasets/create-derived-datasets-with-sql.md)

Alternatively, to learn more about how Query Service benefits data processing in Experience Platform, watch the [abandoned browse use case presentation](../use-cases/abandoned-browse.md#video-example).

The following resources are useful to improve your understanding of [!DNL Query Service]:

- [[!DNL Query Service] UI overview](../ui/overview.md)
- [[!DNL Query Service] credentials](../ui/credentials.md)
- [The client connections overview](../clients/overview.md)
