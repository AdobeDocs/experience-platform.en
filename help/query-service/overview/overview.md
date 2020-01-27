# Query Service overview

Adobe Experience Platform ingests data from a wide variety of sources. A major challenge for marketers is making sense of this data to gain insights about their customers. Adobe Experience Platform Query Service facilitates that by allowing you to use standard SQL to query data in Platform. Using Query Service, you can join any dataset in the Data Lake and capture the query results as a new dataset for use in reporting, machine learning, or for ingestion into Real-time Customer Profile. 

This document provides an overview of the role of Query Service within Experience Platform, covering the following topics:

- [Using Query Service](#using-query-service)
- [Query Service and Experience Platform services](#query-service-and-experience-platform-services)
    - [Data Science Workspace](#data-science-workspace)
    - [Segmentation Service](#segmentation-service)

## Using Query Service

Query Service provides a user interface and a RESTful API from which you can create SQL queries to better analyze your data.

With the user interface, you can write and execute queries, view previously executed queries, and access queries saved by users within your IMS Organization. The user interface is intended to be used as a sandbox to test out your queries before executing them on your wider dataset. More information on using the interactive service within Platform can be found in the [Query Service user interface guide](../queries-and-ui/ui-overview.md).

The RESTful API provides a similar experience, allowing you to programatically write and execute queries, schedule queries for future use and repetition, as well as create templates for queries you wish to write. More information on using the Query Service API can be found in the [Query Service developer guide](./developer-guide.md).

## Query Service and Experience Platform services

Query Service interacts and can be used in conjunction with multiple Experience Platform services. In order to make the most out of Query Service's capabilities, it is recommended that you become familiar with these services and how they interact with Query Service.

### Data Science Workspace

Adobe Experience Platform Data Science Workspace uses machine learning and artificial intelligence to gain insights from data stored within Experience Platform. Data Science Workspace allows data scientists to build recipes based on record and time-series data about customers and their activities, facilitating predictions such as buying propensity and recommended offers that the individual is likely to appreciate and use.

You can use SQL within Data Science Workspace by integrating Query Service into JupyterLab, allowing you to explore, transform, and analyze Adobe Analytics data.

Please read the [Data Science Workspace overview](../../data_science_workspace_overview/dsw_overview.md) for more information about Data Science Workspace, and the [Query Service integration guide](../../../tutorials/dsw/prepare_your_data/query_service_integration/query_service_in_jupyter_notebook.md) for more information about how Data Science Workspace interacts with Query Service.

### Segmentation Service

Adobe Experience Platform Segmentation Service allows users to divide their customers into smaller groups that share similar traits. These segments can subsequently be evaluated to provide better analysis on your Real-time Customer Profile data.

Query Service can be used to provide this analysis by running queries on this segment data within the Data Lake.

Please read the [Segmentation Service overview](../../unified_profile_architectural_overview/unified_profile_architectural_overview.md) for more information about segmentation, and the [Profile Query Language (PQL) guide](../../unified_profile_architectural_overview/unified_profile_pql.md) for more information on how to analyze segments.

## Next steps

By reading this document, you have been introduced to Query Service and how it functions within the greater scope of Experience Platform. For more information on interacting with various endpoints within the Query Service API, please read the [Query Service developer guide](./developer-guide.md). For more information on using the interactive service within Platform, please read the [Query Service user interface guide](../queries-and-ui/ui-overview.md). For a comprehensive list on connecting external clients with Query Service, please read the [Query Service clients overview](../clients/overview.md).