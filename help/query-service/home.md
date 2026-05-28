---
keywords: Experience Platform;home;popular topics;query service;Query service;query
solution: Experience Platform
title: Query Service Overview
description: Learn about the role of Query Service within Experience Platform.
exl-id: fdaefc12-a97d-4e4e-9aed-d3dbd0f43ea0
TQID: https://experienceleague.adobe.com/kGBrOsjS5OqVinAX4KlYspSDZ9kOXb1TCwqz-t4J3Wg
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: a37e4ecd-c740-426a-addf-cb1b483c5c5a
    internal-label: Segmentation
  - id: c132d929-fa62-4271-803e-b823be07b914
    internal-label: Profile
  - id: c20d46e7-1c7d-476c-a50e-3961d4dce35f
    internal-label: Reporting
subfeature_v2:
  - id: b784da9a-7978-4766-bf1f-5ab2b23d894a
    internal-label: Federated Audience Composition
  - id: d1823595-9241-4128-8a33-e4ac3bf08773
    internal-label: Audiences
  - id: f6ac78a3-5b59-40f5-a37d-45df5303d3a3
    internal-label: Dashboards
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
    internal-label: User
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: aa2f3246-cb95-4b30-8899-fdf7d73550cc
    internal-label: Reporting
  - id: bbbea26f-9621-49eb-9ab8-e06fb3bbce8c
    internal-label: Artificial intelligence
  - id: bce87dde-a4ab-44c9-8a18-ad66e4ddb377
    internal-label: Customer experience
  - id: e1e0219c-f879-479f-8427-888ed2a6e9c2
    internal-label: Insights
  - id: eb30f47f-d87a-400f-8f78-63ce7979ff56
    internal-label: Machine learning
---
# Query Service overview

Adobe Experience Platform ingests data from a wide variety of sources. A major challenge for marketers is to make sense of this data to gain insights about their customers. To query data in Experience Platform, you can use standard SQL and Adobe Experience Platform Query Service. You can use Query Service to join any dataset in the data lake and capture the query results as a new dataset for use in reporting, machine learning, or for ingestion into [!DNL Real-Time Customer Profile]. This document provides an overview of the role of Query Service within Experience Platform.

You can use Query Service to connect the online-to-offline customer journey and understand omni-channel attribution for your brand. The following video shows how an experience business can use Query Service to address key use cases and explains how Query Service works.

>[!VIDEO](https://video.tv.adobe.com/v/29795?quality=12&learn=on)

## Using Query Service {#usage}

To analyze your data, create and execute SQL queries with either the Query Service user interface or the RESTful API.
With the Query Service UI you can write, execute, and schedule queries, view previously executed queries, and access queries saved by users within your organization. You can also test out your queries before executing them on your wider dataset with the Query Editor. See the [Query Service UI guide] (ui/overview.md) for an overview of the UI functionality.

The RESTful API provides a similar experience. You can use the Query Service API to programmatically write and execute queries, create and save templates for queries that you wish to adapt, or schedule queries for automated execution. See the [Query Service developer guide](api/getting-started.md) for more information on using the Query Service API.

To quickly get started using Query Service features, you are recommended to read the following documents:

- [General guidance for query execution](./best-practices/writing-queries.md)
- [SQL syntax in Query Service](./sql/syntax.md)
- [Create derived datasets with SQL](./data-distiller/derived-datasets/create-derived-datasets-with-sql.md)

## Query Service and Experience Platform services {#experience-platform-services}

Query Service interacts and can be used with multiple Experience Platform services. To make the most out of Query Service's capabilities, you should become familiar with these services and how they interact with Query Service. The [Experience Platform documentation landing page] (https://experienceleague.adobe.com/docs/experience-platform.html) provides summaries and links to the platform's capabilities.

### [!DNL Data Science Workspace] {#data-science-workspace}

Adobe Experience Platform [!DNL Data Science Workspace] uses machine learning and artificial intelligence to gain insights from data stored within Experience Platform. Data scientists can use the [IDNL Data Science Workspace] to build recipes based on record and time-series data about customers and their activities. These recipes facilitate predictions such as buying propensity and recommended offers that the individual is likely to appreciate and use. You can use SQL within [!DNL Data Science Workspace] by integrating Query Service into [!DNL JupyterLab] to explore, transform, and analyze Adobe Analytics data. Read the [[!DNL Data Science Workspace] overview](../data-science-workspace/home.md) and the [Jupyter Notebook connection guide](./clients/jupyter-notebook.md) for more information about how [!DNL Data Science Workspace] interacts with Query Service.

### [!DNL Segmentation Service] {#segmentation}

Use the Adobe Experience Platform Segmentation Service to divide your customers into smaller groups that share similar traits. These audiences can then be evaluated to provide better analysis on your Real-Time Customer Profile data. You can use Query Service to run queries on this audience data within the data lake and provide the analysis. Read the [Segmentation Service overview](../segmentation/home.md) and the [[!DNL Profile Query Language] (PQL) guide](../segmentation/pql/overview.md) for more information on how to analyze audiences.

## Use cases {#use-cases}

Query Service provides a flexible approach to your data processing that serves many purposes. Among others, it can ease the burden of segmentation from marketers, and help generate actionable audiences and meaningful business insights. The following use cases offer more in-depth examples of the power of Query Service.

### Adobe Analytics browse abandonment {#abandon-browse}

This [browse abandonment example centers on using Adobe [!DNL Analytics]](./use-cases/abandoned-browse.md) data to create a particular actionable audience. Query Service accommodates complex logic for segmentation to calculate various personalized attributes for use downstream, or to greatly simplify how you build out your audiences.

## Generate insights with custom dashboards {#custom-dashboards}

With Adobe Experience Platform, you can ingest, store, structure, and pull all stored datasets—including behavioral, CRM, and point-of-sale data. Using Query Service, you can query these datasets and answer specific business questions, generating impactful insights. Learn how to build and manage custom dashboards where you can create, add, and edit bespoke widgets to visualize key metrics with [user-defined dashboards](../dashboards/standard-dashboards.md). You can also [customize your own Real-Time CDP reports](../dashboards/data-models/cdp-insights-data-model-b2c.md) for your marketing and KPI use cases by using SQL queries with Real-Time Customer Data Platform Insights Data Models.

## Next steps and additional resources

By reading this document, you have been introduced to Query Service and how it functions within the greater scope of Experience Platform. To continue learning about Query Service features, you are recommended to read the following documents:

- The [Query Service developer guide](api/getting-started.md): For more information on interacting with various endpoints within the Query Service API.
- The [Query Service user interface guide](ui/overview.md): For more information on using the Query Editor and UI.
- The [Query Service clients overview](clients/overview.md): For a comprehensive list of external clients to connect with Query Service.

To better prepare yourself to run queries, watch the following video. This video shares tips and best practices for running queries in the query editor interface, PSQL clients, business intelligence (BI) solutions, and the HTTP API.

>[!VIDEO](https://video.tv.adobe.com/v/29811?quality=12&learn=on)
