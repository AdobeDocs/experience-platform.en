---
title: Adobe Experience Platform Release Notes August 2022
description: The July 2022 release notes for Adobe Experience Platform.
---
# Adobe Experience Platform release notes 

**Release date: August 24, 2022**

Updates to existing features in Adobe Experience Platform:

- [[!DNL Data Prep]](#data-prep)
- [Sources](#sources)

## [!DNL Data Prep] {#data-prep}

[!DNL Data Prep] allows data engineers to map, transform, and validate data to and from Experience Data Model (XDM).

**Updated features**

| Feature | Description | 
| --- | --- |
| Support for ingesting records with warnings | Data Prep will now localize warnings (non-critical errors) to the fields and will allow the rest of the row to be ingested. Monitoring is also supported on records with warnings and diagnostic details. |

{style="table-layout:auto"}

To learn more about [!DNL Data Prep], see the [[!DNL Data Prep] overview](../../data-prep/home.md).

## Sources {#sources}

Adobe Experience Platform can ingest data from external sources while allowing you to structure, label, and enhance that data using Platform services. You can ingest data from a variety of sources such as Adobe applications, cloud-based storage, third-party software, and your CRM system.

Experience Platform provides a RESTful API and an interactive UI that lets you set up source connections for various data providers with ease. These source connections allow you to authenticate and connect to external storage systems and CRM services, set times for ingestion runs, and manage data ingestion throughput.

**New features**

| Feature | Description |
| --- | --- |
| Cross-region support for Adobe Analytics source | You can now ingest report suites from any region (United States, United Kingdom, or Singapore) as long as they are mapped to the same organization as the Experience Platform Sandbox instance in which the source connection is being created in. For more information, see the guide on [creating an Adobe Analytics source connection in the UI](../../sources/tutorials/ui/create/adobe-applications/analytics.md). |

{style="table-layout:auto"}

To learn more about sources, see the [sources overview](../../sources/home.md).
