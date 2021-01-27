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

- [[!DNL Data Prep]](#data-prep)
- [[!DNL Destinations]](#destinations)
- [[!DNL Sources]](#sources)

## [!DNL Data Prep] {#data-prep}

[!DNL Data Prep] allows data engineers to map, transform, and validate data to and from Experience Data Model (XDM).

**New features**

| Feature | Description |
| ------- | ----------- |
| Regular expression functions | [!DNL Data Prep] Mapper now supports matching and extracting part of the input field based on regular expressions. |

For more information, please see the [[!DNL Data Prep] overview](../../data-prep/home.md).

## Destinations {#destinations}

In [Real-time Customer Data Platform](../../rtcdp/overview.md), destinations are pre-built integrations with destination platforms that activate data to those partners in a seamless way.

**New features**

| Feature | Description |
| ------- | ----------- |
| Advanced ID Matching | Enhancements to the audience match rate capabilities in [!DNL Facebook Custom Audiences] and [!DNL Google Customer Match], by adding support for additional identity matching, such as external IDs, phone numbers, and mobile device IDs. See the following documentation for more details: <ul><li>[Facebook destination](../../destinations/catalog/social/facebook.md)</li><li>[Google Customer Match destination](../../destinations/catalog/advertising/google-customer-match.md)</li><li>[Activate profiles and segments to a destination](../../destinations/ui/activate-destinations.md)</li></ul> |

To learn more, visit the [destinations overview](../../destinations/home.md).

## [!DNL Sources] {#sources}

Adobe Experience Platform can ingest data from external sources while allowing you to structure, label, and enhance that data using Platform services. You can ingest data from a variety of sources such as Adobe applications, cloud-based storage, third party software, and your CRM system.

Experience Platform provides a RESTful API and an interactive UI that lets you set up source connections for various data providers with ease. These source connections allow you to authenticate and connect to external storage systems and CRM services, set times for ingestion runs, and manage data ingestion throughput.

**New features**

| Feature | Description |
| ------- | ----------- |
| Adobe Audience Manager source connector enhancements | You can now filter and select individual first-party segments from Audience Manager to ingest into Platform, as well as filter out first-party traits. See the tutorial on [creating an Audience Manager source connector](../../sources/tutorials/ui/create/adobe-applications/audience-manager.md) for more information. |
| [!DNL Google BigQuery] source connector enhancements | You can now ingest files larger than 10GB in one flow run using the [!DNL BigQuery] source connector. See the [[!DNL BigQuery] source connector overview](../../sources/connectors/databases/bigquery.md) for more information. |
| Support for complex data types for cloud storages | You can now ingest complex data types, such as arrays in JSON files, when using a cloud storage source connector. See the tutorials on creating a cloud storage dataflow [in the UI](../../sources/tutorials/ui/dataflow/batch/cloud-storage.md) or [using the [!DNL Flow Service] API](../../sources/tutorials/api/collect/cloud-storage.md) for more information. |
| Support for service principal key-based authentication for [!DNL Microsoft Dynamics] source | You can now authenticate to your [!DNL Dynamics] account using a service principal key as an alternative to password-based authentication. See the [[!DNL Dynamics] source connector overview](../../sources/connectors/crm/ms-dynamics.md) for more information. |

To learn more about sources, see the [sources overview](../../sources/home.md).
