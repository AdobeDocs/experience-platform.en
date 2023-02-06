---
title: Adobe Experience Platform Release Notes March 2020
description: The March 2020 release notes for Adobe Experience Platform.
doc-type: release notes
last-update: March 10, 2020
author: ens71067
keywords: release notes;
exl-id: 407c2bac-4c8a-4939-b3dd-788250f15650
---
# Adobe Experience Platform release notes 

**Release date: March 11, 2020**

Updates to existing features in Adobe Experience Platform:

* [Data Governance](#governance)
* [[!DNL Data Ingestion]](#ingestion)
* [[!DNL Destinations]](#destinations)
* [[!DNL Identity Service]](#identity)
* [[!DNL Sources]](#sources)

## Data Governance {#governance}

[!DNL Experience Platform] allows companies to bring data from multiple enterprise systems together to better allow marketers to identify, understand, and engage customers. [!DNL Experience Platform] includes an end-to-end data governance infrastructure to ensure the proper use of data within [!DNL Platform] and when being shared between systems.

Adobe Experience Platform Data Governance is a series of strategies and technologies used to manage customer data and ensure compliance with regulations, restrictions, and policies applicable to data usage. It plays a key role within [!DNL Experience Platform] at various levels, including cataloging, data lineage, data usage labeling, data access policies, and access control on data for marketing actions.

**New features**

>[!NOTE]
>
>Some of the following new features are currently in beta and are not available to all users. Beta features are subject to change.

| Feature | Description |
| ------- | ----------- |
| Automated enforcement of data usage policies for [!DNL Real-Time Customer Data Platform]| Data usage policies are now enforced in the workflow of activating data to destinations. Data Governance is also embedded and enforced when making changes that affect existing activations (such as changes to dataset labels, merge policies, segment definitions, and others). |
| Data lineage for enforcement | When a data usage policy is violated in Real-Time CDP, the UI displays a notification that contains data lineage information to help the user understand why the policies were violated and what they can do to resolve the violation. |


**Known issues**

* None

For more information about Data Governance, see the [Data Governance overview](../../data-governance/home.md).

## Data Ingestion {#ingestion}

Adobe Experience Platform provides a rich set of features to ingest any type and latency of data. Adobe Experience Platform [!DNL Data Ingestion] provides multiple alternatives for ingesting data including Batch APIs, Streaming APIs, native Adobe connectors, data integration partners, or the Adobe Experience Platform UI.

**New features**

|Feature | Description|
|------- | -----------|
|Partial batch ingestion | Partial batch ingestion is the ability to ingest data containing errors, up to a certain threshold. With this capability, users can successfully ingest all their correct data into Adobe Experience Platform while all their incorrect data is batched separately. Details are added to unsuccessful batches to explain why they did not pass validation. More information about partial batch ingestion can be found in the [partial batch ingestion documentation](../../ingestion/batch-ingestion/partial.md).|

**Known issues**

* None

To learn more about ingesting data into Platform, visit the [Data Ingestion documentation](../../ingestion/home.md).


## Destinations {#destinations}

In [Real-Time Customer Data Platform](../../rtcdp/overview.md), destinations are pre-built integrations with destination platforms that activate data to those partners in a seamless way.

**New destinations**

New destinations are available where you can activate your Adobe Experience Platform data. See below for details:

|Destination | Description|
|--- | ---|
|Cloud storage destinations | Real-Time CDP can now deliver your segments as data files to your [!DNL Amazon S3] or SFTP cloud storage locations. This enables you to send audiences and their profile attributes to your internal systems, via CSV or tab-delimited files.|
|Advertising destinations | The [!DNL Google] destination card is now split into three destination cards, for the three different [!DNL Google] platforms currently supported in Real-Time CDP: [!DNL Google Ads], [!DNL Google Ad Manager], [!DNL Google] Display & Video 360.|

To learn more, visit the [destinations overview](../../destinations/home.md)

## [!DNL Identity Service] {#identity}

Delivering relevant digital experiences requires having a complete understanding of your customer. This is made more difficult when your customer data is fragmented across disparate systems, causing each individual customer to appear to have multiple "identities".

Adobe Experience Platform [!DNL Identity Service] helps you to gain a better view of your customer and their behavior by bridging identities across devices and systems, allowing you to deliver impactful, personal digital experiences in real time.

**New features**

| Feature | Description |
| ------- | ----------- |
| Enhanced Private Graph | Private Graph functionality has been enhanced to reduce graph generation latency from a weekly batch process to a daily refreshed graph, allowing [!DNL Identity Service] customers to access more up-to-date identity graphs and linkages. |

**Known issues**

* None

For more information about [!DNL Identity Service], see the [Identity Service overview](../../identity-service/home.md).

## Sources {#sources}

Adobe Experience Platform can ingest data from external sources while allowing you to structure, label, and enhance that data using [!DNL Platform] services. You can ingest data from a variety of sources such as Adobe applications, cloud-based storage, third-party software, and your CRM system.

[!DNL Experience Platform] provides a RESTful API and an interactive UI that lets you set up source connections for various data providers with ease. These source connections allow you to authenticate and connect to external storage systems and CRM services, set times for ingestion runs, and manage data ingestion throughput.

**New features**

| Feature | Description |
| ------- | ----------- |
| Deprecated signals for Adobe Audience Manager connector | Signal-level data from Audience Manger will no longer be sent. Note that segment membership for Traits and Segments will still be included. As a result of this change, inbound datasets will no longer be generated. |
| Renamed datasets | Datasets generated by Audience Manger connector will have updated names and descriptions. |
| Enable [!DNL Profile] toggle in Audience Manger | [!DNL Profile] toggle can be enabled or disabled to promote dataset to [!DNL Real-Time Customer Profile]. Toggle will be enabled by default.|
| UI support for cloud storage systems | New source connector for [!DNL Azure Data Lake Storage Gen2] in the UI. |
| UI support for CRM systems | New source connector for [!DNL HubSpot], [!DNL Salesforce Service Cloud], and [!DNL ServiceNow] in the UI. |
| UI support for database systems | New source connector for [!DNL AWS Redshift], [!DNL Google BigQuery], [!DNL MariaDB], [!DNL Microsoft SQL Server], and [!DNL MySQL] in the UI. |

**Known issues**

* None

To learn more about sources, see the [sources overview](../../sources/home.md).
