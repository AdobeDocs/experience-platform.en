---
keywords: Experience Platform;query service;Query service;query
title: Getting Started with Adobe Experience Platform Query Service
description: A breakdown of the necessary steps to fully utilize Adobe Experience Platform Query Service
exl-id: 36ab9354-23f9-4cb8-bcd4-00fe076386ab
---
# Getting started with Adobe Experience Platform [!DNL Query Service] {#getting-started}

Adobe Experience Platform [!DNL Query Service] enables you to analyze customer data using standard SQL. With Query Service, you can query datasets in the data lake, join data from multiple sources, and create new datasets from your query results for use in reporting, machine learning, or Real-Time Customer Profile. You can interact with Query Service through either the user interface or the RESTful API.

## Prerequisites checklist

Before you can start querying data, ensure you have:

- **Required permissions**: Your organization is provisioned for Experience Platform and your user account has access to [!DNL Query Service]. If you do not see [!DNL Query Service] in the Experience Platform UI, review the [permissions documentation](../../access-control/home.md#permissions) and contact your system administrator to request access .
- **Data ingestion**: You have data ingested into Experience Platform.

This [data ingestion tutorial video](https://experienceleague.adobe.com/docs/platform-learn/tutorials/data-ingestion/create-datasets-and-ingest-data.html) provides an overview on creating a dataset, mapping a dataset to a schema, adding data to the dataset, and confirming its ingestion. The [ingestion overview documentation](../../ingestion/home.md) supplements this and provides more in depth information and links to other learning resources.

## Quick start paths

After you have ingested your data into Experience Platform, you can begin working with [!DNL Query Service] using either the [!DNL Query Editor] in Experience Platform or the [!DNL Query Service] API. Both interfaces allow you to write, run, and schedule queries for automated execution.

### [!DNL Query Editor]

You can use the [!DNL Query Service] UI for analysis, data exploration, and collaborative query development. For an overview of the UI functionality, see the [[!DNL Query Service] UI documentation](../ui/overview.md). To learn about how to navigate the [!DNL Query Editor], read the [[!DNL Query Editor user guide]](../ui/user-guide.md).

### [!DNL Query Service] API

You can use the [!DNL Query Service] API for automated workflows, query templates management, and programmatic integrations. Refer to the [[!DNL Query Service] developer guide](../api/getting-started.md) for detailed instructions on using the [!DNL Query Service] API.

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
