---
keywords: Experience Platform;home;popular topics;query service;Query service;query
solution: Experience Platform
title: Query Service Overview
description: This document provides an overview of the role of Query Service within Experience Platform.
exl-id: fdaefc12-a97d-4e4e-9aed-d3dbd0f43ea0
---
# [!DNL Query Service] overview

Adobe Experience Platform ingests data from a wide variety of sources. A major challenge for marketers is making sense of this data to gain insights about their customers. Adobe Experience Platform [!DNL Query Service] facilitates that by allowing you to use standard SQL to query data in [!DNL Platform]. Using [!DNL Query Service], you can join any dataset in the [!DNL Data Lake] and capture the query results as a new dataset for use in reporting, machine learning, or for ingestion into [!DNL Real-Time Customer Profile]. This document provides an overview of the role of [!DNL Query Service] within [!DNL Experience Platform].

[!DNL Query Service] makes it possible for brands to connect the online-to-offline customer journey and understand omni-channel attribution. The following video shows how an experience business can leverage [!DNL Query Service] to address key use cases and how [!DNL Query Service] works.

>[!VIDEO](https://video.tv.adobe.com/v/29795?quality=12&learn=on)

## Using [!DNL Query Service]

[!DNL Query Service] provides a user interface and a RESTful API from which you can create SQL queries to better analyze your data. With the user interface, you can write and execute queries, view previously executed queries, and access queries saved by users within your organization. The user interface is intended to be used as a sandbox to test out your queries before executing them on your wider dataset. More information on using the interactive service within [!DNL Platform] can be found in the [Query Service user interface guide](ui/overview.md). The RESTful API provides a similar experience, allowing you to programatically write and execute queries, schedule queries for future use and repetition, as well as create templates for queries you wish to write. More information on using the [!DNL Query Service] API can be found in the [Query Service developer guide](api/getting-started.md).

## [!DNL Query Service] and [!DNL Experience Platform] services

[!DNL Query Service] interacts and can be used in conjunction with multiple [!DNL Experience Platform] services. In order to make the most out of [!DNL Query Service's] capabilities, it is recommended that you become familiar with these services and how they interact with [!DNL Query Service].

### [!DNL Data Science Workspace]

Adobe Experience Platform [!DNL Data Science Workspace] uses machine learning and artificial intelligence to gain insights from data stored within [!DNL Experience Platform]. [!DNL Data Science Workspace] allows data scientists to build recipes based on record and time-series data about customers and their activities, facilitating predictions such as buying propensity and recommended offers that the individual is likely to appreciate and use. You can use SQL within [!DNL Data Science Workspace] by integrating [!DNL Query Service] into [!DNL JupyterLab], allowing you to explore, transform, and analyze Adobe Analytics data. Please read the [!DNL Data Science Workspace] overview for more information about [!DNL Data Science Workspace], and the [!DNL Query Service] integration guide for more information about how [!DNL Data Science Workspace] interacts with [!DNL Query Service].

### [!DNL Segmentation Service]

Adobe Experience Platform [!DNL Segmentation Service] allows users to divide their customers into smaller groups that share similar traits. These audiences can subsequently be evaluated to provide better analysis on your [!DNL Real-Time Customer Profile] data. [!DNL Query Service] can be used to provide this analysis by running queries on this audience data within the [!DNL Data Lake]. Please read the [!DNL Segmentation Service] overview for more information about segmentation, and the [!DNL Profile Query Language] (PQL) guide for more information on how to analyze audiences.

## Use cases

[!DNL Query Service] provides a flexible approach to your data processing that serves many purposes. Amongst others, it can ease the burden of segmentation from marketers, and help generate actionable audiences and meaningful business insights. The following use cases offer more indepth examples of the power of [!DNL Query Service].

### Adobe Analytics browse abandonment

This [browse abandonment example centers on using Adobe [!DNL Analytics]](./use-cases/abandoned-browse.md) data to create a particular actionable audience. [!DNL Query Service] accommodates complex logic for segmentation to calculate various personalized attributes for use downstream, or to greatly simplify how you build out your audiences. 

### Looker BI dashboards

With Adobe Experience Platform, you can ingest, store, structure, and pull all stored datasets — including behavioral, CRM, and point-of-sale data. Using [!DNL Experience Platform's Query Service], you can query on these datasets and answer specific questions about the business and then start generating impactful insights. The following video demonstrates the value of building dashboards in business intelligence (BI) tools using [!DNL Query Service].

>[!VIDEO](https://video.tv.adobe.com/v/28981?quality=12&learn=on)

## Next steps and additional resources

By reading this document, you have been introduced to [!DNL Query Service] and how it functions within the greater scope of [!DNL Experience Platform]. For more information on interacting with various endpoints within the [!DNL Query Service] API, please read the [Query Service developer guide](api/getting-started.md). For more information on using the interactive service within [!DNL Platform], please read the [Query Service user interface guide](ui/overview.md). For a comprehensive list on connecting external clients with [!DNL Query Service], please read the [Query Service clients overview](clients/overview.md).

To better prepare yourself to run queries, watch the following video. This video shares tips and best practices for running queries in the query editor interface, PSQL clients, business intelligence (BI) solutions, and the HTTP API.

>[!VIDEO](https://video.tv.adobe.com/v/29811?quality=12&learn=on)
