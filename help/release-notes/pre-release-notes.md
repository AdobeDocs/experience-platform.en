---
title: Experience Platform Pre-Release Notes
description: A preview of the latest release notes for Adobe Experience Platform.
exl-id: a1b52e9f-1c4d-4a2b-9d3e-5f6a7b8c9d0e
---
# Adobe Experience Platform pre-release notes

>[!IMPORTANT]
>
>This document is intended as a **preview** of the release notes for the current month. Release items are subject to change, and may be added or removed in the final release.

>[!TIP]
>
>Refer to the following documentation for release notes of other Adobe Experience Platform applications:
>
>- [Adobe Journey Optimizer](https://experienceleague.adobe.com/en/docs/journey-optimizer/using/whats-new/release-notes)
>- [Adobe Journey Optimizer B2B](https://experienceleague.adobe.com/en/docs/journey-optimizer-b2b/user/release-notes)
>- [Customer Journey Analytics](https://experienceleague.adobe.com/en/docs/analytics-platform/using/releases/pre-release-notes)
>- [Federated Audience Composition](https://experienceleague.adobe.com/en/docs/federated-audience-composition/using/e-release-notes)
>- [Real-Time CDP Collaboration](https://experienceleague.adobe.com/en/docs/real-time-cdp-collaboration/using/latest)

**Release date: February 2026**

New features and updates to existing features in Adobe Experience Platform:

- [Agent Orchestrator](#agent-orchestrator)
- [Alerts](#alerts)
- [Data collection](#data-collection)
- [Destinations](#destinations)
- [Query Service](#query-service)
- [Segmentation Service](#segmentation-service)
- [Sources](#sources)

## Agent Orchestrator {#agent-orchestrator}

Agent Orchestrator enables you to build and deploy AI-powered agents that can automate workflows and interact with customers across multiple channels.

**New or updated features**

| Feature | Description |
| --- | --- |
| Data Onboarding Agent documentation | Use the Data Onboarding skills in the Data Engineering Agent to configure source connections, validate data quality, apply semantic enrichment (schema recommendation, Schema Review Workspace, and schema publishing), and run data ingestion. Follow step-by-step workflows for both B2C and B2B flows, review expected outputs, and troubleshoot common issues. |
| Data Distiller agent documentation | Use the SQL Data Prep skills in the Data Engineering Agent to create SQL jobs from natural language, optimize SQL performance, recover from SQL errors, schedule and manage SQL jobs, and monitor job status. Review guardrails, required permissions, and troubleshooting guidance to get started. |
| Data Collection Agent Skills documentation | Use the Data Engineering Agent's Data Collection skills to get in-context guidance for complex data collection configurations (Product Knowledge) and to explore lineage, dependencies, and relationships across your data collection objects through conversational insights (Operational Insights). |
| Data Onboarding agent troubleshooting | Review common errors and quirks you may encounter with the Data Onboarding agent, along with troubleshooting tips to resolve them. |

{style="table-layout:auto"}

For more information, see the [Agent Orchestrator documentation](https://experienceleague.adobe.com/en/docs/experience-cloud-ai/experience-cloud-ai/agents/agent-orchestrator).

## Alerts {#alerts}

Experience Platform allows you to subscribe to event-based alerts for various Experience Platform activities. You can subscribe to different alert rules through the [!UICONTROL Alerts] tab in the Experience Platform user interface, and can choose to receive alert messages within the UI itself or through email notifications.

**New or updated features**

| Feature | Description |
| --- | --- |
| Slack integration for customer-facing alerts | You can now deliver customer-facing alerts to Slack. Follow the step-by-step tutorial to set up the Slack integration and receive alert notifications directly in your Slack workspace. |

{style="table-layout:auto"}

For more information, read the [[!DNL Observability Insights] overview](../observability/home.md).

## Data collection {#data-collection}

Adobe Experience Platform Data Collection provides a set of technologies that allow you to collect client-side customer experience data and send it to the Adobe Experience Platform Edge Network and other destinations.

**New or updated features**

| Feature | Description |
| --- | --- |
| Adobe Platform Tags Extension Management | Use the new Extension Management capability to upload, package, and release your organization's extensions to development, private, and public distribution. Find shared private extensions alongside your owned extensions in the top-level company view. This feature supports web, edge, and mobile extensions. |

{style="table-layout:auto"}

For more information, read the [Data Collection documentation](https://experienceleague.adobe.com/en/docs/experience-platform/collection/home).

## Destinations {#destinations}

[!DNL Destinations] are pre-built integrations with destination platforms that allow for the seamless activation of data from Experience Platform. You can use destinations to activate your known and unknown data for cross-channel marketing campaigns, email campaigns, targeted advertising, and many other use cases.

**New or updated destinations**

| Destination | Description |
| --- | --- |
| ZoomInfo Account Destination | B2B CDP users can now activate account-level data to ZoomInfo through the new ZoomInfo Account destination connector. Set up the connector to begin sending your account audiences to ZoomInfo. |
| Snowflake Batch generally available | The Snowflake Batch destination has moved to general availability. You can now view the merge policy ID column in your exported data alongside existing columns such as timestamp, mapping attributes, and audience membership. |
| AES256 encryption support for [Amazon S3](../destinations/catalog/cloud-storage/amazon-s3.md#destination-details) destinations | You can now configure AES256 encryption for your Amazon S3 exports. Choose from two options: <ul><li>**[!UICONTROL Default]**: Experience Platform encrypts data at rest with the default encryption algorithm set on your bucket.</li><li>**[!UICONTROL SSE-S3/AES256]**: Experience Platform adds the `s3:x-amz-server-side-encryption": "AES256` header to the export and encrypts data at rest with the AES256 algorithm when it lands in S3. **This option takes precedence over any default encryption algorithm you configure on your S3 bucket**.</li></ul> |

{style="table-layout:auto"}

For more information, read the [Destinations overview](../destinations/home.md).

## Query Service {#query-service}

Query Service allows you to use standard SQL to query data in Adobe Experience Platform [!DNL Data Lake]. You can join any datasets from the [!DNL Data Lake] and capture the query results as a new dataset for use in reporting, Data Science Workspace, or for ingestion into Real-Time Customer Profile.

**New or updated features**

| Feature | Description |
| --- | --- |
| Data Distiller annual compute reset date alignment | Data Distiller annual compute usage now resets based on your Data Distiller contract start date, aligning License Usage reporting with your contract expectations. You may notice a one-time adjustment to your current usage values (percentage and absolute hours) as the reset takes effect. Your entitlements remain unchanged and you do not need to take any action. |
| Data Distiller Session Management | As an authorized admin, you can view and manage active Query Service and Data Distiller sessions within your IMS Organization and sandbox through the UI. Use Session Management to identify idle sessions and terminate them to free up capacity. Built-in safeguards prevent you from terminating sessions with active queries. The feature logs all eviction actions for auditing and notifies affected users. You need the **Manage Query Sessions** permission to access this feature. |

{style="table-layout:auto"}

For more information, read the [Query Service overview](../query-service/home.md).

## Segmentation Service {#segmentation-service}

[!DNL Segmentation Service] defines a particular subset of profiles by describing the criteria that distinguishes a marketable group of people within your customer base. Audiences can be based on record data (such as demographic information) or time series events representing customer interactions with your brand.

**New or updated features**

| Feature | Description |
| --- | --- |
| Streaming Segmentation (SS2.0) documentation updates | The Streaming Segmentation guide now includes additional information from the SS2.0 migration. Read the updated [Streaming Segmentation](https://experienceleague.adobe.com/en/docs/experience-platform/segmentation/methods/streaming-segmentation) documentation for details. |
| Best practices for authoring audiences | Follow the new best practices guide to author audiences in Adobe Experience Platform. Whether you are a Marketer, Audience Builder, Data Engineer, Architect, or Administrator, this guide helps you create more effective audiences. |
| TenK – Batch Segmentation beta | Review new and updated Batch Segmentation documentation for the TenK beta initiative. |

{style="table-layout:auto"}

For more information, read the [[!DNL Segmentation Service] overview](../segmentation/home.md).

## Sources {#sources}

Experience Platform provides a RESTful API and an interactive UI that lets you set up source connections for various data providers with ease. These source connections allow you to authenticate and connect to external storage systems and CRM services, set times for ingestion runs, and manage data ingestion throughput.

**New or updated sources**

| Source | Description |
| --- | --- |
| Unity Catalog support in Databricks connector | The Databricks source connector now supports Unity Catalog. Read the updated [Databricks](https://experienceleague.adobe.com/en/docs/experience-platform/sources/ui-tutorials/create/databases/databricks) documentation to learn how to use Unity Catalog when you configure your source connection. |

{style="table-layout:auto"}

For more information, read the [sources overview](../sources/home.md).
