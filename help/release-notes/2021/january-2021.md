---
title: Adobe Experience Platform Release Notes
description: Experience Platform release notes January 27, 2021
doc-type: release notes
last-update: January 27, 2021
author: ens60013
---

# Adobe Experience Platform release notes 

**Release date: January 27, 2021**

Updates to existing features in Adobe Experience Platform:

- [[!DNL Sources]](#sources)

## [!DNL Sources] {#sources}

Adobe Experience Platform can ingest data from external sources while allowing you to structure, label, and enhance that data using [!DNL Platform] services. You can ingest data from a variety of sources such as Adobe applications, cloud-based storage, third party software, and your CRM system.

[!DNL Experience Platform] provides a RESTful API and an interactive UI that lets you set up source connections for various data providers with ease. These source connections allow you to authenticate and connect to external storage systems and CRM services, set times for ingestion runs, and manage data ingestion throughput.

**Key features**

| Feature | Description |
| ------- | ----------- |
| Adobe Audience Manager source connector enhancements | You are now able to filter and select individual first-party segments from Adobe Audience Manager to ingest into Platform, as well as filter out first-party traits See the tutorial on [creating an Audience Manager source connector](../../sources/tutorials/ui/create/adobe-applications/audience-manager.md) for more information. |
| UI support for custom separators in cloud storage sources |
| Support for service principal key-based authentication for [!DNL Microsoft Dynamics] source  | You can now connect your [!DNL Microsoft Dynamics] account using service principal key-based authentication. See the []
| Support for Shared Access Signature URI-based authentication for Azure Blob source | You can now connect your Azure Blob account using Shared Access Signature URI-based authentication. |
Support for large size record ingestion for Google BigQuery | You can now ingest files larger than 10GB in one flow run using the [Google BigQuery](../../sources/connectors/databases/bigquery.md) source connector. |
| Support for complex data types in file ingestion for cloud storages | Cloud storage connectors can now support complex data types such as arrays in JSON files during file ingestion. |

To learn more about sources, see the [sources overview](../../sources/home.md).
