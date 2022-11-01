---
title: Adobe Experience Platform Release Notes April 2021
description: The April 2021 release notes for Adobe Experience Platform.
doc-type: release notes
last-update: April 21, 2021
author: ens72741
exl-id: cc78e48a-3578-4c55-ae86-1946d62bddb9
---
# Adobe Experience Platform release notes 

**Release date: April 21, 2021**

Updates to existing features in Adobe Experience Platform:

- [[!DNL Data Prep]](#data-prep)
- [[!DNL Experience Data Model (XDM)]](#xdm)
- [[!DNL Intelligent Services]](#intelligent-services)
- [[!DNL Segmentation Service]](#segmentation)
- [[!DNL Sources]](#sources)

## [!DNL Data Prep] {#data-prep}

[!DNL Data Prep] allows data engineers to map, transform, and validate data to and from Experience Data Model (XDM).

**New features**

| Feature | Description |
| ------- | ----------- |
| Support for editing mapping for existing dataflows | You can now update the mapping sets of an existing dataflow. You cannot update mapping sets for dataflows that were scheduled for a one-time ingestion. This feature is not supported for HTTP API, Adobe Analytics, Adobe Audience Manager, and [!DNL Marketo Engage]. For more information, see the tutorial on [updating sources dataflows in the UI](../../sources/tutorials/ui/update-dataflows.md). |
| Support for streaming ingestion | You can now use data prep functions when creating a streaming source connection. For more information, see the tutorial on [creating a streaming source connection in the UI](../../sources/tutorials/ui/create/streaming/http.md). |

For more information, please see the [[!DNL Data Prep] overview](../../data-prep/home.md).

## [!DNL Experience Data Model (XDM)] {#xdm}

Experience Data Model (XDM) is an open-source specification that is designed to improve the power of digital experiences. It provides common structures and definitions for any application to communicate with services on Adobe Experience Platform. By adhering to XDM standards, all customer experience data can be incorporated into a common representation to deliver insights in a faster, more integrated way. You can gain valuable insights from customer actions, define customer audiences through segments, and use customer attributes for personalization purposes.

| Feature | Description |
| --- | --- |
| Schema recommendations by industry | When selecting classes and schema field groups in the Schema Editor UI, you can use a new filter to view recommended standard components based on your specific industry. See the documentation on [industry data models](https://www.adobe.com/go/xdm-industry-erds-en) for more information on how these components relate to each other for different industry use cases. |

## [!DNL Intelligent Services] {#intelligent-services}

Intelligent Services empower marketing analysts and practitioners to leverage the power of artificial intelligence and machine learning in customer experience use cases. This allows for marketing analysts to set up predictions specific to a company’s needs using business-level configurations without the need for data science expertise.

### Customer AI

Customer AI available in Real-Time Customer Data Platform, is used to generate custom propensity scores such as churn and conversion for individual profiles at-scale. This is accomplished without having to transform the business needs to a machine learning problem, pick an algorithm, train, or deploy.

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

## Segmentation Service {#segmentation}

Adobe Experience Platform Segmentation Service provides a user interface and RESTful API that allows you to build segments and generate audiences from your [!DNL Real-time Customer Profile] data. These segments are centrally configured and maintained on Platform, making them readily accessible by any Adobe application.

[!DNL Segmentation Service] defines a particular subset of profiles by describing the criteria that distinguishes a marketable group of people within your customer base. Segments can be based on record data (such as demographic information) or time series events representing customer interactions with your brand.

**New features**

| Feature | Description |
| ------- | ----------- |
| Additional aggregation functions | Count functions have been added in Segment Builder. Count functions let you count the number of times the specified event has been done. More information about the count functions can be found in the count functions section of the [Segment Builder guide](../../segmentation/ui/segment-builder.md#count-functions) |

For more information on [!DNL Segmentation Service], please see the [Segmentation overview](../../segmentation/home.md).

## [!DNL Sources] {#sources}

Adobe Experience Platform can ingest data from external sources while allowing you to structure, label, and enhance that data using Platform services. You can ingest data from a variety of sources such as Adobe applications, cloud-based storage, third-party software, and your CRM system.

Experience Platform provides a RESTful API and an interactive UI that lets you set up source connections for various data providers with ease. These source connections allow you to authenticate and connect to external storage systems and CRM services, set times for ingestion runs, and manage data ingestion throughput.

| Feature | Description |
| ------- | ----------- |
| [!DNL Marketo Engage] (Beta) | You can now create a [!DNL Marketo Engage] source connection using the UI to bring B2B data to Platform and keep this data up-to-date using Platform-connected applications. For more information, see the [[!DNL Marketo Engage] source connector documentation](../../sources/connectors/adobe-applications/marketo/marketo.md). |
| Beta sources moving to GA | The following sources have been promoted from beta to GA: <ul><li>[[!DNL Amazon Kinesis]](../../sources/connectors/cloud-storage/kinesis.md)</li><li>[[!DNL Azure EventHubs]](../../sources/connectors/cloud-storage/eventhub.md)</li><li>[[!DNL HTTP API]](../../sources/connectors/streaming/http.md)</li><li>[[!DNL MariaDB]](../../sources/connectors/databases/mariadb.md)</li><li>[[!DNL Microsoft SQL Server]](../../sources/connectors/databases/sql-server.md)</li><li>[[!DNL Oracle]](../../sources/connectors/databases/oracle.md)</li></ul> |

To learn more about sources, see the [sources overview](../../sources/home.md).
