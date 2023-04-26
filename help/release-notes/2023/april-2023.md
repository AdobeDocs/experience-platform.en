---
title: Adobe Experience Platform Release Notes April 2023
description: The April 2023 release notes for Adobe Experience Platform.
---
# Adobe Experience Platform release notes 

**Release date: April 26, 2023**

Updates to existing features in Adobe Experience Platform:

- [Data Prep](#data-prep)
- [Real-Time Customer Profile](#profile)
- [Sources](#sources)

## Data Prep {#data-prep}

Data Prep allows data engineers to map, transform, and validate data to and from Experience Data Model (XDM).

**Updated features**

| Feature | Description |
| --- | --- |
| Updates to backfill period for Adobe Analytics in non-production sandboxes | The backfill period for Adobe Analytics in non-production sandboxes has been reduced to three months. Backfill for production sandboxes remain the same at 13 months. This change only applies to new flows and will not affect existing flows. For more information, read the [Adobe Analytics overview](../../sources/connectors/adobe-applications/analytics.md). |
| New mapper function to convert FPID strings to ECID | Use the `fpid_to_ecid` function to convert FPID strings into ECID for use in Experience Platform and Experience Cloud applications. For more information, read the [Data Prep functions guide](../../data-prep/functions.md). |

{style="table-layout:auto"}

For more information on Data Prep, please read the [Data Prep overview](../../data-prep/home.md).

## Sources {#sources}

Adobe Experience Platform can ingest data from external sources and allows you to structure, label, and enhance that data using Platform services. You can ingest data from a variety of sources such as Adobe applications, cloud-based storage, third-party software, and your CRM system.

Experience Platform provides a RESTful API and an interactive UI that lets you set up source connections for various data providers with ease. These source connections allow you to authenticate and connect to external storage systems and CRM services, set times for ingestion runs, and manage data ingestion throughput.

**Updated features**

| Feature | Description |
| --- | --- |
| API support for filtering row-level data for Microsoft Dynamics, Salesforce CRM, and Salesforce Marketing Cloud | Use logical and comparison operators to filter row-level data for the Microsoft Dynamics, Salesforce CRM, and Salesforce Marketing Cloud sources. Read the guide on [filtering data for a source using the API](../../sources/tutorials/api/filter.md) for more information. |
| Beta availability of Shopify Streaming | The [Shopify Streaming source](../../sources/connectors/ecommerce/shopify-streaming.md) is now available in beta. Use the Shopify Streaming source to stream data from your Shopify partners account to Experience Platform. |
| General availability of OneTrust Integration | The [OneTrust Integration source](../../sources/connectors/consent-and-preferences/onetrust.md) is now GA. Use the OneTrust Integration source to bring consent and preferences data from your OneTrust Integration account to Experience Platform. |
| General availability of Oracle Service Cloud | The [Oracle Service Cloud source](../../sources/connectors/customer-success/oracle-service-cloud.md) is now GA. Use the Oracle Service Cloud source to bring your Oracle Service Cloud data to Experience Platform. |

{style="table-layout:auto"}

To learn more about sources, read the [sources overview](../../sources/home.md).
