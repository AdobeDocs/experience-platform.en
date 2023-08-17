---
title: Adobe Experience Platform Release Notes September 2019
description: The September 2019 release notes for Adobe Experience Platform.
doc-type: release notes
last-update: September 13, 2019
author: ens28527
exl-id: 7f503046-a3b4-4fdb-833c-4205b6e9fa04
---
# Adobe Experience Platform release notes 

**Release date: September 10, 2019**

Updates to existing features in Adobe Experience Platform:

* [[!DNL Data Ingestion]](#ingestion)
* [[!DNL Data Science Workspace]](#dsw)
* [[!DNL Query Service]](#query)

## [!DNL Data Ingestion] {#ingestion}

Adobe Experience Platform provides a rich set of features to ingest any type and latency of data. Adobe Experience Platform [!DNL Data Ingestion] provides multiple alternatives for ingesting data including Batch APIs, Streaming APIs, native Adobe connectors, data integration partners, or the Adobe Experience Platform UI.

**New features**

| Feature    | Description  |
| ----------- | ---------- |
| New domain for streaming ingestion | The `dcs.data.adobe.net` domain has been moved to the new common data collection domain `dcs.adobedc.net`. Users must update their implementations according to the revised Adobe Experience Platform streaming ingestion documentation. All documentation related to Adobe Experience Platform streaming ingestion has been updated to use the new domain.|

For more information, visit the [Data Ingestion documentation](../../ingestion/home.md).

## [!DNL Data Science Workspace] {#dsw}

Adobe Experience Platform [!DNL Data Science Workspace] is a fully managed service within [!DNL Experience Platform] that enables data scientists to seamlessly generate insights from data and content across Adobe solutions and third-party systems by building and operationalizing Machine Learning Models. [!DNL Data Science Workspace] is tightly integrated with [!DNL Platform] and powers the end-to-end data science lifecycle, including exploration and preparation of XDM data, followed by the development and operationalization of Models to automatically enrich [!DNL Real-Time Customer Profile] with Machine Learning Insights.

**New features**

| Feature    | Description  |
| -----------| ---------- |
| Scheduling of Services via the UI | Integrated with [!DNL Platform] Orchestration Service to automate Model training and scoring with user-defined schedules using the UI. |
| [!DNL Service Gallery] | Browse, monitor, and access machine learning Services with the ability to schedule automated training and scoring jobs, all within the redesigned [!DNL Service Gallery]. |
| [!DNL JupyterLab] 5.0.0 | [!DNL JupyterLab] UI improvements. |

**Known issues**

*   There is currently no accessible way in the [!DNL Service Gallery] to delete an existing Service. In the meantime, please refer to the [Sensei Machine Learning API reference](https://www.adobe.io/apis/experienceplatform/home/api-reference.html#!acpdr/swagger-specs/sensei-ml-api.yaml) to delete an existing Service through API calls.
*   The [!DNL Service Gallery] does not have pagination support to filter a Service's training and scoring runs.
*   When configuring scheduled training or scoring runs through the [!DNL Service Gallery], setting the frequency to hourly prevents the schedule from being applied.

For more information, visit the [Data Science Workspace Overview](../../data-science-workspace/home.md).

## [!DNL Query Service] {#query}

[!DNL Query Service] provides the ability to use standard SQL to query data in Adobe Experience Platform to support a variety of analysis and data management use cases. It is a serverless tool that allows you to join datasets from the [!DNL Data Lake] and capture the query results as a new dataset for use in reporting, [!DNL Data Science Workspace], or for ingestion into [!DNL Real-Time Customer Profile].

You can use [!DNL Query Service] to build data analysis ecosystems, creating a picture of customers across their various interaction channels. These channels might include point-of-sale systems, web, mobile, or CRM systems.

**New features**

| Feature    | Description  |
| -----------| ---------- |
| Improvements to [!DNL Query Editor] | Added a save function that allows you to save a query and work on it later. Added a "Browse" tab to the [!DNL Query Service] user interface on Adobe Experience Platform that shows queries saved by users in your organization. Implemented a "Query Details" panel that displays useful metadata about the query being viewed. |
| New attribution functions | Adobe-defined functions in [!DNL Query Service] to query for channel attribution with expiration parameters. |
| Enhancements to SQL syntax | Support for iLike syntax.|
| Generate datasets with a defined XDM Schema | Added a new clause in Create Table as Select (CTAS) queries that allows you to specify a target schema. |

For more information, refer to the [Query Service documentation](../../query-service/home.md).
