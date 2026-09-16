---
title: Adobe Experience Platform Release Notes February 2020
description: The February 2020 release notes for Adobe Experience Platform.
doc-type: release notes
last-update: February 14, 2019
author: ens71067
exl-id: 96db25ca-d857-489b-9a9d-625e86b1bf3e
TQID: https://experienceleague.adobe.com/g-dQVuG4n4csdOEm-adwGrGsdcArYbFhKbUDXa5y74U
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
    internal-label: User
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
    internal-label: Admin
  - id: f8a45b24-4be7-4f1b-909b-60d06b483a20
    internal-label: Leader
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
---
# Adobe Experience Platform release notes 

**Release date: February 12, 2020**

Updates to existing features in Adobe Experience Platform:

* [Sources](#sources)

## Sources {#sources}

Adobe Experience Platform can ingest data from external sources while allowing you to structure, label, and enhance that data using [!DNL Experience Platform] services. You can ingest data from a variety of sources such as Adobe applications, cloud-based storage, third party software, and your CRM system.

[!DNL Experience Platform] provides a RESTful API and an interactive UI that lets you set up source connections for various data providers with ease. These source connections allow you to authenticate and connect to external storage systems and CRM services, set times for ingestion runs, and manage data ingestion throughput.

**New features**

| Feature | Description |
| ------- | ----------- |
| API support for SaaS - Service systems| New source connectors for [!DNL Salesforce Service Cloud] API and [!DNL ServiceNow] API. |
| API support for SaaS - Marketing systems| New source connectors for [!DNL HubSpot] API. |
| API support for [!DNL NoSQL] database systems | New source connectors for [!DNL AWS Redshift], [!DNL Google BigQuery], [!DNL MariaDB], [!DNL MySQL], [!DNL PostgreSQL], and [!DNL SQL Server] APIs. |
| API support for cloud storage systems | New source connectors for [!DNL Azure Data Lake Service Gen 2] API and [!DNL Google Cloud Storage] API.|
| UI support for cloud storage systems | New source connector for [!DNL Google Cloud Storage] in the UI.|

**Known issues**

* None

For more information about sources, see the [sources overview](../../sources/home.md).
