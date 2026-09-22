---
title: Adobe Experience Platform Release Notes September 2026
description: The September 2026 release notes for Adobe Experience Platform.
last-update: 2026-09-22
---
# Adobe Experience Platform release notes

>[!TIP]
>
>Refer to the following documentation for release notes of other Adobe Experience Platform applications:
>
>- [Adobe Journey Optimizer](https://experienceleague.adobe.com/en/docs/journey-optimizer/using/whats-new/release-notes)
>- [Adobe Journey Optimizer B2B](https://experienceleague.adobe.com/en/docs/journey-optimizer-b2b/user/release-notes)
>- [Customer Journey Analytics](https://experienceleague.adobe.com/en/docs/analytics-platform/using/releases/latest)
>- [Federated Audience Composition](https://experienceleague.adobe.com/en/docs/federated-audience-composition/using/release-notes)
>- [Real-Time CDP Collaboration](https://experienceleague.adobe.com/en/docs/real-time-cdp-collaboration/using/latest)

**Release date: September 2026**

New features and updates to existing features in Adobe Experience Platform:

- [CX Enterprise Coworker](#cx-enterprise-coworker)
- [Capacity](#capacity)
- [Data Governance](#data-governance)
- [Destinations](#destinations)
- [Query Service](#query-service)
- [Run and Operate](#run-and-operate)
- [Sandboxes](#sandboxes)
- [Segmentation Service](#segmentation-service)
- [Sources](#sources)

## CX Enterprise Coworker {#cx-enterprise-coworker}

Use CX Enterprise Coworker to access AI-powered conversational skills that help you manage and validate data in Experience Platform, directly within [!DNL Microsoft Copilot], [!DNL ChatGPT], and [!DNL Claude].

**New or updated features**

| Feature | Description |
| --- | --- |
| CX Enterprise Coworker in AI platforms | Access CX Enterprise Coworker directly within [!DNL Microsoft Copilot], [!DNL ChatGPT], and [!DNL Claude]. |
| Data management skills in CX Enterprise Coworker | Use new conversational skills in CX Enterprise Coworker to find the datasets consuming the most storage, preview the impact of a retention limit before applying it, and review a dataset's automatic data expiration configuration, profile and identity enablement, and storage metrics. |
| Data validation skills in CX Enterprise Coworker | Use a new conversational skill in CX Enterprise Coworker to validate data fields and datasets in Experience Platform. |

{style="table-layout:auto"}

For more information, read the [CX Enterprise Coworker documentation](https://experienceleague.adobe.com/en/docs/cx-enterprise-ai/experience-cloud-ai/coworker/overview).

## Capacity {#capacity}

Use Capacity to see your organization's [guardrails](/help/rtcdp/guardrails/overview.md) and get recommendations for resolving capacity violations by reallocating capacity at the sandbox level.

**New or updated features**

| Feature | Description |
| --- | --- |
| [Adobe Experience Platform Growth Credits](/help/landing/license-usage-and-guardrails/capacity.md) | Manage and scale eligible capacity across streaming, edge, and batch segmentation. Monitor credit consumption and capacity utilization, and use self-service workflows to plan, allocate, and scale capacity as your business needs evolve. Built-in monitoring and alerts notify you as usage approaches your capacity limits, so you can respond proactively. |
| Edge throughput monitor shows requests skipped and clearer graph detail | The edge monitoring dashboard now reports a **[!UICONTROL Requests skipped]** metric, reflecting requests dropped due to Spike Protection when incoming traffic exceeds your allocated capacity. The throughput graph now shows requested throughput with a peak callout and a separate skip throughput series, and both throughput charts display when the data was last updated. |

{style="table-layout:auto"}

For more information, read the [capacity overview](/help/landing/license-usage-and-guardrails/capacity.md).

## Data Governance {#data-governance}

Use Data Governance to manage data usage policies and enforce compliance with data usage labels across Experience Platform.

**New or updated features**

| Feature | Description |
| --- | --- |
| India added as a supported privacy regulation | Privacy Service now supports the India Digital Personal Data Protection Act. Select India when you configure a privacy request in the Privacy Service UI or API. |

{style="table-layout:auto"}

For more information, read the [Data Governance overview](/help/data-governance/home.md).

## Destinations {#destinations}

[!DNL Destinations] are pre-built integrations with destination platforms that allow for the seamless activation of data from Experience Platform. You can use destinations to activate your known and unknown data for cross-channel marketing campaigns, email campaigns, targeted advertising, and many other use cases.

**New or updated functionality**

| Feature | Description |
| --- | --- |
| [Configurable macro order for file names](/help/destinations/ui/activate-batch-profile-destinations.md#configure-file-names) | Reposition individual macros in the file name editor for file-based destinations. Previously, macros had fixed positions in the file name. Preview the resulting file name before you save. |
| [Audience-level reporting for additional destinations](/help/dataflows/ui/monitor-destinations.md#audience-level-view) | Audience-level reporting is now available for [[!DNL LiveRamp - Distribution]](/help/destinations/catalog/advertising/liveramp-distribution.md), [[!DNL FreeWheel]](/help/destinations/catalog/advertising/freewheel.md), and [[!DNL Snowflake Batch]](/help/destinations/catalog/warehouses/snowflake-batch.md). Previously, these destinations only supported dataflow run-level reporting, making it harder to understand how many profiles were activated for each audience. For more information, read the [audience-level view](/help/dataflows/ui/monitor-destinations.md#audience-level-view) documentation. |

{style="table-layout:auto"}

**New or updated destinations**

| Feature | Description |
| --- | --- |
| [!DNL Microsoft Entra ID] authentication for [[!DNL Azure Event Hubs]](/help/destinations/catalog/cloud-storage/azure-event-hubs.md#authentication-information) and [[!DNL Azure Blob Storage]](/help/destinations/catalog/cloud-storage/azure-blob.md#authenticate) | Authenticate to the [!DNL Azure Event Hubs] and [!DNL Azure Blob Storage] destinations using a [!DNL Microsoft Entra ID] service principal (client ID and client secret), in addition to a shared access key or connection string. To update an existing connection to use this authentication method, see [migrate an existing base connection to Entra ID Service Principal authentication](/help/destinations/api/streaming-destinations.md#azure-eventhubs-migrate-service-principal) for [!DNL Azure Event Hubs], or [create a base connection](/help/destinations/api/activate-segments-file-based-destinations.md#create-base-connection) for [!DNL Azure Blob Storage]. |
| [[!DNL Salesforce CRM]](/help/destinations/catalog/crm/salesforce.md#authenticate) OAuth 2 Client Credentials authentication | The [!DNL Salesforce CRM] destination now supports a new authentication type. Authenticate using the OAuth 2 Client Credentials flow, in addition to the existing OAuth 2 Password Grant flow. |

{style="table-layout:auto"}

**Fixes and improvements**

| Fix | Description |
| --- | --- |
| [[!DNL Facebook] credentials no longer expire](/help/destinations/catalog/social/facebook.md#refresh-authentication-credentials) | [!DNL Facebook] authentication credentials no longer expire after 60 days. [!DNL Experience Platform] now automatically refreshes the OAuth token, so data exports to the destination continue without interruption. Manual reauthentication is no longer required. |

{style="table-layout:auto"}

For more information, read the [Destinations overview](/help/destinations/home.md).

## Query Service {#query-service}

Use Query Service to query data in Adobe Experience Platform using standard SQL.

**New or updated features**

| Feature | Description |
| --- | --- |
| XDM row-validation error code reference | A new reference maps `INGEST-####-400` error codes returned by Query Service trusted-flow writes to the XDM schema constraint that triggered them, along with remediation guidance. |

{style="table-layout:auto"}

**Fixes and improvements**

| Fix | Description |
| --- | --- |
| Accelerated Queries schema permission enforcement | Starting September 22, 2026, [accelerated queries](/help/query-service/api/accelerated-queries.md) enforce existing schema-level read permissions. Confirm that the roles used to run your accelerated queries have read access to the schemas they reference, so your queries, dashboards, and other dependent tools continue to work without interruption. |

{style="table-layout:auto"}

For more information, read the [Query Service overview](/help/query-service/home.md).

## Run and Operate {#run-and-operate}

Use Run and Operate to monitor job health, troubleshoot failures, and track throughput across your Experience Platform implementation.

**New or updated features**

| Feature | Description |
| --- | --- |
| [Job Schedules now shows identity ingestion runs](/help/run-and-operate/job-schedules-details.md) | The Job Schedules macro-view timeline now includes identity ingestion runs, in addition to existing data lake and profile ingestion runs. |
| [Job Schedules now shows campaign runs](/help/run-and-operate/job-schedules-details.md) | The Job Schedules macro-view timeline now includes scheduled batch [!DNL Adobe Journey Optimizer] campaign runs. Filter campaigns by recurrence, channel, and type, and view campaign details, including audience, category, channel, and export and delivery counts. |
| [Additional health checks](/help/run-and-operate/health-checks/overview.md) | Health checks now include 32 additional checks across the Schemas and Identities, Destinations, Datasets, Segmentation, Ingestion, Merge Policies, and Query Service categories, plus two new categories: Sources and Profile. |

{style="table-layout:auto"}

For more information, read the [Run and Operate overview](/help/run-and-operate/overview.md).

## Sandboxes {#sandboxes}

Adobe Experience Platform is built to enrich digital experience applications on a global scale. Companies often run multiple digital experience applications in parallel and need to cater to the development, testing, and deployment of these applications while ensuring operational compliance.

**New or updated features**

| Feature | Description |
| --- | --- |
| Multi-sandbox management | Use [!DNL Sandbox Tooling] to migrate supported objects, including schemas and datasets, from a source sandbox to multiple target sandboxes through a single workflow. Select target sandboxes, validate dependencies, and deploy changes centrally to streamline rollouts across environments. |

{style="table-layout:auto"}

For more information, read the [sandboxes overview](/help/sandboxes/home.md).

## Segmentation Service {#segmentation-service}

Use Segmentation Service to create audiences from your customer data and manage their full lifecycle in Experience Platform.

**New or updated features**

| Feature | Description |
| --- | --- |
| Updated Audience Builder (GA) | The updated Audience Builder is now generally available. Find fields faster with the new **[!UICONTROL Discover Panel]** and semantic search, get AI-suggested fields, preview sample values and descriptions, favorite your most-used fields, and name your rule groups. |
| Audience validation in Audience Builder | Audience Builder now validates field compatibility with your selected evaluation method as you build an audience. Incompatible fields are flagged with an inline error or warning before you save or publish, and a new filter lets you filter attributes and events by ingestion source. |
| [!BADGE Limited Availability]{type=Informative} Flexible Batch Schedules | Use Flexible Batch Schedules to evaluate audiences on demand using user-defined schedules, giving you greater control over your audience evaluations. Define the cadence, and evaluate up to 10,000 audiences per schedule. |

{style="table-layout:auto"}

For more information, read the [Segmentation Service overview](/help/segmentation/home.md).

## Sources {#sources}

Experience Platform provides a RESTful API and an interactive UI that lets you set up source connections for various data providers with ease. These source connections allow you to authenticate and connect to external storage systems and CRM services, set times for ingestion runs, and manage data ingestion throughput.

**New or updated sources**

| Source | Description |
| --- | --- |
| [[!DNL HubSpot]](/help/sources/connectors/marketing-automation/hubspot.md) V2 connector | Ingest data from [!DNL HubSpot] using the updated V2 connector. |
| [Server-side encryption for [!DNL Amazon S3]](/help/sources/tutorials/api/encrypt-data.md#server-side-encryption-for-amazon-s3) | Combine [!DNL Amazon S3] server-side encryption (SSE) with PGP file encryption when you ingest encrypted data from [!DNL Amazon S3]. On the VA6 region of [Adobe Experience Platform on AWS](/help/landing/multi-cloud.md), the maximum encrypted file size increases from 1 GB to 10 GB. |

{style="table-layout:auto"}

For more information, read the [sources overview](/help/sources/home.md).
