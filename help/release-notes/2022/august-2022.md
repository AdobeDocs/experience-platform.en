---
title: Adobe Experience Platform Release Notes August 2022
description: The August 2022 release notes for Adobe Experience Platform.
---
# Adobe Experience Platform release notes 

**Release date: August 24, 2022**

Updates to existing features in Adobe Experience Platform:

- [Data Prep](#data-prep)
- [Sources](#sources)

## [!DNL Data Prep] {#data-prep}

[!DNL Data Prep] allows data engineers to map, transform, and validate data to and from Experience Data Model (XDM).

**Updated features**

| Feature | Description | 
| --- | --- |
| Support for ingesting records with warnings | Data Prep will now localize warnings (non-critical errors) to the fields and will allow the rest of the row to be ingested. All mapper transformation errors are now reported as warnings and rows that are partially ingested are considered successful, with a warning.  Monitoring is also supported on records with warnings and diagnostic details. Partial ingestion of records with warnings is currently only available to streaming data. Review the documentation on [ingesting records with warnings](../../sources/tutorials/ui/monitor-streaming.md) for more information. |

{style="table-layout:auto"}

To learn more about [!DNL Data Prep], see the [[!DNL Data Prep] overview](../../data-prep/home.md).

## Sources {#sources}

Adobe Experience Platform can ingest data from external sources while allowing you to structure, label, and enhance that data using Platform services. You can ingest data from a variety of sources such as Adobe applications, cloud-based storage, third-party software, and your CRM system.

Experience Platform provides a RESTful API and an interactive UI that lets you set up source connections for various data providers with ease. These source connections allow you to authenticate and connect to external storage systems and CRM services, set times for ingestion runs, and manage data ingestion throughput.

**New features**

| Feature | Description |
| --- | --- |
| General availability of Self-Serve Sources (Batch SDK) | Develop, test, and integrate your REST API-based data source to ingest batch data into Experience Platform using easy to configure source specifications. With Sources SDK, you can: <ul><li>Configure a new source to the Experience Platform catalog.</li><li>Define specifications for your source, including information pertaining to supported authentication types, scheduling, and how resource data is fetched.</li><li>Create user-facing documentation for your new source.</li></ul> For more information, read the documentation on [Self-Serve Sources (Batch SDK)](../../sources/sources-sdk/overview.md). |
| General availability of [!DNL Google BigQuery] source | Use the [!DNL Google BigQuery] source to ingest data from your [!DNL Google BigQuery] data warehouse to Experience Platform. For more information, read the documentation on the [[!DNL Google BigQuery] source](../../sources/connectors/databases/bigquery.md). |
| [!DNL Teradata Vantage] source (Beta) | Use the [!DNL Teradata Vantage] source to ingest data from hybrid multi-cloud environments to Experience Platform. For more information, read the documentation on the [[!DNL Teradata Vantage] source](../../sources/connectors/databases/teradata-vantage.md). |
| Cross-region support for Adobe Analytics source | You can now ingest report suites from any region (United States, United Kingdom, or Singapore). Report suites must be mapped to the same organization as the Experience Platform Sandbox instance in which the source connection is being created in. For more information, read the guide on [creating an Adobe Analytics source connection in the UI](../../sources/tutorials/ui/create/adobe-applications/analytics.md). |
| API support for on-demand ingestion | Use on-demand ingestion to create ad hoc flow runs for a given dataflow with the [!DNL Flow Service] API. Both cloud storage sources and table-based sources support on-demand ingestion. Flow runs created must be set to one-time ingestion. For more information, read the guide on [creating a flow run for on-demand ingestion using the API](../../sources/tutorials/api/on-demand-ingestion.md) for more information. |

{style="table-layout:auto"}

To learn more about sources, see the [sources overview](../../sources/home.md).
