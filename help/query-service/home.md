---
keywords: Experience Platform;home;popular topics;query service;Query service;query
solution: Experience Platform
title: Query Service Overview
description: Learn about the role of Query Service within Experience Platform.
exl-id: fdaefc12-a97d-4e4e-9aed-d3dbd0f43ea0
---
# Query Service overview

Adobe Experience Platform ingests data from a wide variety of sources. A major challenge for marketers is to make sense of this data to gain insights about their customers. To query data in Platform, you can use standard SQL and Adobe Experience Platform Query Service. You can use Query Service to join any dataset in the data lake and capture the query results as a new dataset for use in reporting, machine learning, or for ingestion into [!DNL Real-Time Customer Profile]. This document provides an overview of the role of Query Service within Experience Platform.

You can use Query Service to connect the online-to-offline customer journey and understand omni-channel attribution for your brand. The following video shows how an experience business can use Query Service to address key use cases and how Query Service works.

>[!VIDEO](https://video.tv.adobe.com/v/29795?quality=12&learn=on)

## Using Query Service {#usage}

To analyze your data, you can use the Query Service user interface and a RESTful API, from which you can create SQL queries. With the user interface, you can write and execute queries, view previously executed queries, and access queries saved by users within your organization. You can use the Query Editor like a sandbox to test out your queries before executing them on your wider dataset. See the [Query Service user interface guide](ui/overview.md) for more information on using the UI. The RESTful API provides a similar experience. You can use the Query Service API to programmatically write and execute queries, schedule queries for future use and repetition, as well as create templates for queries you wish to write. More information on using the Query Service API can be found in the [Query Service developer guide](api/getting-started.md).

## Query Service and Experience Platform services {#experience-platform-services}

Query Service interacts and can be used with multiple Experience Platform services. To make the most out of Query Service's capabilities, you should become familiar with these services and how they interact with Query Service. The [Experience Platform documentation landing page](https://experienceleague.adobe.com/docs/experience-platform.html) provides summaries and links to the platform's capabilities. 

### [!DNL Data Science Workspace] {#data-science-workspace}

Adobe Experience Platform [!DNL Data Science Workspace] uses machine learning and artificial intelligence to gain insights from data stored within Experience Platform. Data scientists can use the [!DNL Data Science Workspace] to build recipes based on record and time-series data about customers and their activities. These recipes facilitate predictions such as buying propensity and recommended offers that the individual is likely to appreciate and use. You can use SQL within [!DNL Data Science Workspace] by integrating Query Service into [!DNL JupyterLab] to explore, transform, and analyze Adobe Analytics data. Read the [[!DNL Data Science Workspace] overview](../data-science-workspace/home.md) and the [Jypiter Notebook connection guide](./clients/jupyter-notebook.md) for more information about how [!DNL Data Science Workspace] interacts with Query Service.

### [!DNL Segmentation Service] {#segmentation}

Use the Adobe Experience Platform Segmentation Service to divide your customers into smaller groups that share similar traits. These audiences can then be evaluated to provide better analysis on your Real-Time Customer Profile data. You can use Query Service to run queries on this audience data within the data lake and provide the analysis. Read the [Segmentation Service overview](../segmentation/home.md) and the [[!DNL Profile Query Language] (PQL) guide](../segmentation/pql/overview.md) for more information on how to analyze audiences.

## Use cases {#use-cases}

Query Service provides a flexible approach to your data processing that serves many purposes. Among others, it can ease the burden of segmentation from marketers, and help generate actionable audiences and meaningful business insights. The following use cases offer more in-depth examples of the power of Query Service.

### Adobe Analytics browse abandonment {#abandon-browse}

This [browse abandonment example centers on using Adobe [!DNL Analytics]](./use-cases/abandoned-browse.md) data to create a particular actionable audience. Query Service accommodates complex logic for segmentation to calculate various personalized attributes for use downstream, or to greatly simplify how you build out your audiences. 

## Generate insights with custom dashboards {#custom-dashboards} 

With Adobe Experience Platform, you can ingest, store, structure, and pull all stored datasets — including behavioral, CRM, and point-of-sale data. Using [!DNL Experience Platform's Query Service], you can query on these datasets and answer specific questions about the business and then start generating impactful insights. Learn how to build and manage custom dashboards where you can create, add, and edit bespoke widgets to visualize key metrics with [user-defined dashbaords](../dashboards/user-defined-dashboards.md). You can even [customize your own Real-Time CDP reports](../dashboards/cdp-insights-data-model.md) for your marketing and KPI use cases by using SQL queries with the Real-Time Customer Data Platform Insights Data Models.

## Next steps and additional resources

By reading this document, you have been introduced to Query Service and how it functions within the greater scope of Experience Platform. To continue learning about Query Service features, you are recommended to rad the following documents:

- The [Query Service developer guide](api/getting-started.md): For more information on interacting with various endpoints within the Query Service API. 
- The [Query Service user interface guide](ui/overview.md): For more information on using the Query Editor and UI. 
- The [Query Service clients overview](clients/overview.md): For a comprehensive list of external clients to connect with Query Service.

To better prepare yourself to run queries, watch the following video. This video shares tips and best practices for running queries in the query editor interface, PSQL clients, business intelligence (BI) solutions, and the HTTP API.

>[!VIDEO](https://video.tv.adobe.com/v/29811?quality=12&learn=on)
