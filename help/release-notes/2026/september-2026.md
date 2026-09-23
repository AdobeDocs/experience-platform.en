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

**Release date: September 22, 2026**

New features and updates to existing features in Adobe Experience Platform:

- [CX Enterprise Coworker](#cx-enterprise-coworker)
- [Capacity](#capacity)
- [Data Governance](#data-governance)
- [Destinations](#destinations)
- [Privacy Service](#privacy)
- [Query Service](#query-service)
- [Run and Operate](#run-and-operate)
- [Sandboxes](#sandboxes)
- [Segmentation Service](#segmentation-service)
- [Sources](#sources)

## CX Enterprise Coworker {#cx-enterprise-coworker}

Use CX Enterprise Coworker to access AI-powered conversational skills that help you manage and validate data in Experience Platform.

**New or updated features**

| Feature | Description |
| --- | --- |
| [Data management agentic skills in CX Enterprise Coworker](https://experienceleague.adobe.com/en/docs/cx-enterprise-ai/experience-cloud-ai/coworker/chat/use-cases/data-management/manage-data-lake-retention) | You can now use conversational data management skills in CX Enterprise Coworker to identify high-storage datasets, assess retention changes before applying them, and review dataset configuration and storage metrics. These skills help you investigate data usage and retention without manually checking each dataset. |

{style="table-layout:auto"}

<!--
| Data validation skills in CX Enterprise Coworker | Use a new conversational skill in CX Enterprise Coworker to validate data fields and datasets in Experience Platform. |
-->

For more information, read the [CX Enterprise Coworker documentation](https://experienceleague.adobe.com/en/docs/cx-enterprise-ai/experience-cloud-ai/coworker/overview).

## Capacity {#capacity}

Use Capacity to see your organization's [guardrails](/help/rtcdp/guardrails/overview.md) and get recommendations for resolving capacity violations by reallocating capacity at the sandbox level.

**New or updated features**

| Feature | Description |
| --- | --- |
| [Adobe Experience Platform Growth Credits](/help/landing/license-usage-and-guardrails/capacity.md) | Manage and scale eligible capacity across streaming, edge, and batch segmentation. Monitor credit consumption and capacity utilization, and use self-service workflows to plan, allocate, and scale capacity as your business needs evolve. Built-in monitoring and alerts notify you as usage approaches your capacity limits, so you can respond proactively. |
| Batch capacity | Batch capacity lets you monitor and manage your organization's on demand runs, scheduled runs, as well as batch audience counts. For more information, read the [license usage and capacities guide](/help/landing/license-usage-and-guardrails/capacity.md). |
| Edge throughput monitor shows requests skipped and clearer graph detail | The edge monitoring dashboard now reports a **[!UICONTROL Requests skipped]** metric, reflecting requests dropped due to Spike Protection when incoming traffic exceeds your allocated capacity. The throughput graph now shows requested throughput with a peak callout and a separate skip throughput series, and both throughput charts display when the data was last updated. |

{style="table-layout:auto"}

For more information, read the [capacity overview](/help/landing/license-usage-and-guardrails/capacity.md).

## Data Governance {#data-governance}

Use Data Governance to manage data usage policies and enforce compliance with data usage labels across Experience Platform.

**New or updated features**

| Feature | Description |
| --- | --- |
| Updated label application workflows | You can now apply data governance labels through inline actions in the Datasets workspace or directly in the Schema Editor, reducing the steps required to label datasets and schema fields. |

{style="table-layout:auto"}

For more information, read the [Data Governance overview](/help/data-governance/home.md).

## Destinations {#destinations}

[!DNL Destinations] are pre-built integrations with destination platforms that allow for the seamless activation of data from Experience Platform. You can use destinations to activate your known and unknown data for cross-channel marketing campaigns, email campaigns, targeted advertising, and many other use cases.

**New or updated functionality**

| Feature | Description |
| --- | --- |
| [Data type filter in the destinations catalog](/help/destinations/catalog/overview.md) | Find the destination you need faster by filtering the **[!UICONTROL Browse]** tab of the destinations catalog by data type. **This update has been postponed to the September 2026 release.** <br> ![Filtering destinations by data type in the Browse tab of the destinations catalog.](assets/august/data-type-filter-browse.gif){zoomable="yes"} |

{style="table-layout:auto"}

**New or updated destinations**

| Feature | Description |
| --- | --- |
| [!DNL Microsoft Entra ID] authentication for [[!DNL Azure Event Hubs]](/help/destinations/catalog/cloud-storage/azure-event-hubs.md#authentication-information) and [[!DNL Azure Blob Storage]](/help/destinations/catalog/cloud-storage/azure-blob.md#authenticate) | Authenticate to the [!DNL Azure Event Hubs] and [!DNL Azure Blob Storage] destinations using a [!DNL Microsoft Entra ID] service principal (client ID and client secret), in addition to a shared access key or connection string. To update an existing connection to use this authentication method, see [migrate an existing base connection to Entra ID Service Principal authentication](/help/destinations/api/streaming-destinations.md#azure-eventhubs-migrate-service-principal) for [!DNL Azure Event Hubs], or the [Azure Blob Storage base connection tab](/help/destinations/api/activate-segments-file-based-destinations.md#create-base-connection) for [!DNL Azure Blob Storage]. |
| [[!DNL Salesforce CRM]](/help/destinations/catalog/crm/salesforce.md#authenticate) OAuth 2 Client Credentials authentication | The [!DNL Salesforce CRM] destination now supports a new authentication type. Authenticate using the OAuth 2 Client Credentials flow, in addition to the existing OAuth 2 Password Grant flow. This update is rolling out this week. |

{style="table-layout:auto"}

**Fixes and improvements**

| Fix | Description |
| --- | --- |
| [[!DNL Facebook] credentials no longer expire](/help/destinations/catalog/social/facebook.md#refresh-authentication-credentials) | [!DNL Facebook] authentication credentials no longer expire after 60 days. [!DNL Experience Platform] now automatically refreshes the OAuth token, so data exports to the destination continue without interruption. Manual reauthentication is no longer required. |
| [[!DNL Amazon Ads]](/help/destinations/catalog/advertising/amazon-ads-v2.md) no longer requires marketing actions | The connector was updated to remove the requirement to have marketing actions by default. Customers can now set up connections to [!DNL Amazon Ads] without using marketing actions. |

{style="table-layout:auto"}

For more information, read the [Destinations overview](/help/destinations/home.md).

## [!DNL Privacy Service] {#privacy}

Several legal and organizational regulations give users the right to access or delete their personal data from your data stores upon request. Adobe Experience Platform [!DNL Privacy Service] provides a RESTful API and user interface to help you manage these data requests from your customers. With [!DNL Privacy Service], you can submit requests to access and delete private or personal customer data from Adobe Experience Cloud applications, facilitating automated compliance with legal and organizational privacy regulations.

**New features**

| Feature | Description |
| --- | --- |
| India Digital Personal Data Protection Act support | [!DNL Privacy Service] now supports requests under the India Digital Personal Data Protection Act. You can select India when you create a privacy request in the [!DNL Privacy Service] UI or API. |

{style="table-layout:auto"}

For more information, read the [Privacy Service overview](/help/privacy-service/home.md).

## Query Service {#query-service}

Use Query Service to query data in Adobe Experience Platform [!DNL Data Lake] with standard SQL. Join any datasets from the [!DNL Data Lake] and capture query results as a new dataset for use in reporting, Data Science Workspace, or ingestion into Real-Time Customer Profile.

**Fixes and improvements**

| Fix | Description |
| --- | --- |
| Accelerated Queries schema permission enforcement | [Accelerated queries](/help/query-service/api/accelerated-queries.md) now enforce existing schema-level read permissions. Ensure that the roles running accelerated queries have read access to referenced schemas to prevent failures in queries, dashboards, and other dependent tools. |

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
| Audience validation in Audience Builder | Audience Builder now validates field compatibility with your selected evaluation method as you build an audience. Incompatible fields are flagged with an inline error or warning before you save or publish, and a new filter lets you filter attributes and events by ingestion source. |
| [!BADGE Beta]{type=Informative} Activated destinations | Activated destinations let you view audience-centric information about your destinations on a per-destination basis. For more information, read the [Audience Portal overview](/help/segmentation/ui/audience-portal.md#activated-destinations). This feature is in **closed beta**. Contact Adobe Customer Care for more information on enrollment. |
| [!BADGE Limited Availability]{type=Informative} Flexible Batch Schedules | Use Flexible Batch Schedules to evaluate audiences on demand using user-defined schedules, giving you greater control over your audience evaluations. For more information, read the [Flexible Batch Schedules guide](/help/segmentation/tutorials/flexible-batch-schedules.md). |
| [!BADGE Limited Availability]{type=Informative} Large Scale Audiences | You can now have up to 10,000 audiences in your sandbox. In order to use this feature, you must have access to Flexible Batch Schedules. For more information, read the [Flexible Batch Schedules guide](/help/segmentation/tutorials/flexible-batch-schedules.md). |

{style="table-layout:auto"}

For more information, read the [Segmentation Service overview](/help/segmentation/home.md).

## Sources {#sources}

Experience Platform provides a RESTful API and an interactive UI that lets you set up source connections for various data providers with ease. These source connections allow you to authenticate and connect to external storage systems and CRM services, set times for ingestion runs, and manage data ingestion throughput.

**New or updated sources**

| Source | Description |
| --- | --- |
| [[!DNL HubSpot]](/help/sources/connectors/marketing-automation/hubspot.md) V2 connector | Ingest data from [!DNL HubSpot] using the updated V2 connector. |
| [Server-side encryption for [!DNL Amazon S3]](/help/sources/tutorials/api/encrypt-data.md#server-side-encryption-for-amazon-s3) | Combine [!DNL Amazon S3] server-side encryption (SSE) with PGP file encryption when you ingest encrypted data from [!DNL Amazon S3]. On the VA6 region of [Adobe Experience Platform on AWS](/help/landing/multi-cloud.md), the maximum encrypted file size increases from 1 GB to 10 GB. |
| [Self-Serve Sources (Streaming SDK) on AWS](/help/sources/sources-sdk/streaming/getting-started.md) | Use Self-Serve Sources (Streaming SDK) to build connectors for [Adobe Experience Platform running on AWS](/help/landing/multi-cloud.md). Experience Platform running on AWS is currently available to a limited number of customers. |

{style="table-layout:auto"}

For more information, read the [sources overview](/help/sources/home.md).
