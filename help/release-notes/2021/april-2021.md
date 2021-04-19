---
title: Adobe Experience Platform Release Notes
description: Experience Platform release notes for April 21, 2021.
doc-type: release notes
last-update: April 21, 2021
author: ens72741
---

# Adobe Experience Platform release notes 

**Release date: April 21, 2021**

Updates to existing features in Adobe Experience Platform:

- [[!DNL Intelligent Services]](#intelligent-services)
- [[!DNL Sources](#sources)]

## [!DNL Intelligent Services] {#intelligent-services}

Intelligent Services empower marketing analysts and practitioners to leverage the power of artificial intelligence and machine learning in customer experience use cases. This allows for marketing analysts to set up predictions specific to a company’s needs using business-level configurations without the need for data science expertise.

### Customer AI

Customer AI available in Real-time Customer Data Platform, is used to generate custom propensity scores such as churn and conversion for individual profiles at-scale. This is accomplished without having to transform the business needs to a machine learning problem, pick an algorithm, train, or deploy.

| Feature | Description |
| ------- | ----------- |
| Support for Adobe Analytics data | Updated functionality to support Adobe Analytics datasets via the Analytics source connector without the need to ETL your data to conform to the Consumer Experience Event (CEE) schema. |
| Support for Adobe Audience Manager data | Updated functionality to support Adobe Audience Manager datasets via the Audience Manager source connector without the need to ETL your data to conform to the Consumer Experience Event (CEE) schema. |
| Model performance summary | Customer AI now has a [model performance summary tab](../../intelligent-services/customer-ai/user-guide/discover-insights.md#performance-metrics) within the service instance insights page. The model performance tab shows all the actual conversion and churn rates. This allows you to decipher and understand what is happening in each of your propensity buckets. |

For more information on supported datasets, please see the [[!DNL Intelligent Services] data preparation documentation](../../intelligent-services/data-preparation.md).

### Attribution AI

Attribution AI is used to attribute credits to touchpoints leading to conversion events. This can be used by marketers to help quantify the marketing impact of each individual marketing touchpoint across customer journeys.

| Feature | Description |
| ------- | ----------- |
| Support for Adobe Analytics data | Updated functionality to support Adobe Analytics datasets via the Analytics source connector without the need to ETL your data to conform to the Consumer Experience Event (CEE) schema. |

For more information on supported datasets, please see the [[!DNL Intelligent Services] data preparation documentation](../../intelligent-services/data-preparation.md).

## [!DNL Sources] {#sources}

Adobe Experience Platform can ingest data from external sources while allowing you to structure, label, and enhance that data using Platform services. You can ingest data from a variety of sources such as Adobe applications, cloud-based storage, third-party software, and your CRM system.

Experience Platform provides a RESTful API and an interactive UI that lets you set up source connections for various data providers with ease. These source connections allow you to authenticate and connect to external storage systems and CRM services, set times for ingestion runs, and manage data ingestion throughput.

| Feature | Description |
| ------- | ----------- |
| Support for editing mapping for existing dataflows | You can now update the mapping sets of an existing dataflow. You cannot update mapping sets for dataflows that were scheduled for a one-time ingestion. This feature is not supported for HTTP API, Adobe Analytics, Adobe Audience Manager, and [!DNL Marketo Engage]. For more information, see the tutorial on [updating sources dataflows in the UI](../../sources/tutorials/ui/update-dataflows.md). |
| Data prep support for streaming ingestion  | You can now use mapper functions when creating a streaming source connection. For more information, see the tutorial on [creating a streaming source connection in the UI](../../sources/tutorials/ui/create/streaming/http.md). |

To learn more about sources, see the [sources overview](../../sources/home.md).
