---
title: Adobe Experience Platform Release Notes June 2026
description: The June 2026 release notes for Adobe Experience Platform.
exl-id: f854f9e5-71be-4d56-a598-cfeb036716cb
TQID: https://experienceleague.adobe.com/RvjQSbQ2NNwBYQJD4G6jsXWdAAg3vzbXKYvRlMwbBW0
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: a37e4ecd-c740-426a-addf-cb1b483c5c5a
    internal-label: Segmentation
  - id: c132d929-fa62-4271-803e-b823be07b914
    internal-label: Profile
  - id: daec7ead-f475-492a-a3b3-02ae08565d6f
    internal-label: Implementation
  - id: ed0d8d0e-04b9-4326-be72-a0fbca265377
    internal-label: Integrations
  - id: f8e8ea8a-6020-40da-99f7-6504fe599cb1
    internal-label: AI Assistant
subfeature_v2:
  - id: b784da9a-7978-4766-bf1f-5ab2b23d894a
    internal-label: Federated Audience Composition
  - id: cbd4a8d8-97a6-4ac9-b8d6-b6c1f28d3342
    internal-label: Segments
  - id: cdd3e38b-fec2-4f39-8b10-83ddaab1ac16
    internal-label: B2B
  - id: d1823595-9241-4128-8a33-e4ac3bf08773
    internal-label: Audiences
  - id: e0c8953a-a203-4291-bef3-3560160d3041
    internal-label: Get started
  - id: ee602049-8a18-43df-9299-a689a025a371
    internal-label: Use cases
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
    internal-label: User
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
    internal-label: Admin
  - id: f8a45b24-4be7-4f1b-909b-60d06b483a20
    internal-label: Leader
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: b5ce8718-c3af-4fdb-a1a9-fca32f83a87c
    internal-label: Implementation
  - id: e0eb8757-182f-49f3-94a4-1587d16f5094
    internal-label: Personalization
  - id: e1e0219c-f879-479f-8427-888ed2a6e9c2
    internal-label: Insights
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

**Release date: June 2026**

New features and updates to existing features in Adobe Experience Platform:

- [Agent Orchestrator](#agent-orchestrator)
- [Destinations](#destinations)
- [Experience Data Model (XDM)](#xdm)
- [Query Service](#query-service)
- [Segmentation Service](#segmentation-service)
- [Sources](#sources)

## Agent Orchestrator {#agent-orchestrator}

Use Agent Orchestrator to build and deploy AI-powered agents that automate workflows and interact with customers across multiple channels.

**New or updated features**

| Feature | Description |
| --- | --- |
| Notifications Agent | Use the Notifications Agent to surface alerts, system events, and audience or journey updates through conversational prompts. The agent delivers contextual notification summaries so you can act on critical events without navigating multiple dashboards. |
| [!BADGE Beta]{type=Informative} Adobe Marketing Agent for AI Platforms | Use the Adobe Marketing Agent to bring Experience Platform operational insights, audience data, journey information, and asset discovery into third-party AI platforms including [!DNL ChatGPT], [!DNL Claude], [!DNL Gemini], [!DNL Amazon Q], [!DNL Databricks Genie], and [!DNL IBM Watsonx]. Contact your Adobe representative to request access. |

{style="table-layout:auto"}

For more information, see the [Agent Orchestrator documentation](https://experienceleague.adobe.com/en/docs/experience-cloud-ai/experience-cloud-ai/agents/agent-orchestrator).

## Destinations {#destinations}

[!DNL Destinations] are pre-built integrations with destination platforms that allow for the seamless activation of data from Experience Platform. You can use destinations to activate your known and unknown data for cross-channel marketing campaigns, email campaigns, targeted advertising, and many other use cases.

**New or updated destinations**

| Feature | Description |
| --- | --- |
| [!BADGE Beta]{type=Informative} [When to activate](../../destinations/ui/when-to-activate.md) | Control which profile change types trigger exports to a destination. Enable or disable three trigger types per dataflow: attribute changes, audience qualification and disqualification, and identity changes. All three triggers are enabled by default. During beta, this feature is available on demand. Contact your Adobe representative to request access. <br> ![The When to activate panel showing three checkboxes: Attribute changes, Segmentation changes, and Identity changes, all enabled.](../../destinations/assets/ui/when-to-activate/when-to-activate.png){zoomable="yes"} |
| Azure Private Link for Azure destinations | Route data exports to [[!DNL Azure Blob Storage]](../../destinations/catalog/cloud-storage/azure-blob.md), [[!DNL Azure Data Lake Storage Gen2]](../../destinations/catalog/cloud-storage/adls-gen2.md), and [[!DNL Azure Event Hubs]](../../destinations/catalog/cloud-storage/azure-event-hubs.md) over private IP addresses on the [!DNL Microsoft Azure] backbone instead of the public internet. This feature is available to customers with **Healthcare Shield** or **Privacy and Security Shield** entitlements. Contact your Adobe representative to request setup. |
| [[!DNL Snowflake Streaming]](../../destinations/catalog/warehouses/snowflake.md) and [[!DNL Snowflake Batch]](../../destinations/catalog/warehouses/snowflake-batch.md) Private Link support | A new **[!UICONTROL Private Link Enabled]** dropdown selector is now available when configuring [!DNL Snowflake] streaming and batch destination connections. Enable this option only if your [!DNL Snowflake] account is configured for private link-only inbound access. Leaving this set to **[!UICONTROL False]** for private link-only accounts causes data sharing to fail. This update is being rolled out through June 19, 2026. <br> ![The Snowflake destination details page showing the Private Link Enabled dropdown selector set to False.](../2026/assets/june/snowflake-private-link.png){zoomable="yes"} |
| [!BADGE Beta]{type=Informative} [Export arrays as enrichment attributes](../../destinations/ui/activate-batch-profile-destinations.md#select-enrichment-attributes) | Export array fields as enrichment attributes when activating audiences to cloud storage destinations. Select individual fields from an array of objects, or export the full array. The data is then exported as separate columns in JSON and Parquet output. <br> ![The Select enrichment attributes dialog showing the Export arrays and complex objects enabled banner and the two-column Source and Target mapping interface.](../../destinations/assets/ui/activate-batch-profile-destinations/select-enrichment-attribute-array.png){zoomable="yes"} |
| [[!DNL Google Ad Manager 360]](../../destinations/catalog/advertising/google-ad-manager-360-connection.md) now generally available | The [!DNL Google Ad Manager 360] destination (formerly in beta) is now generally available. |
| [[!DNL Google Customer Match + Display & Video 360]](../../destinations/catalog/advertising/google-customer-match-dv360.md) now generally available | The [!DNL Google Customer Match + Display & Video 360] destination (formerly in limited availability) is now generally available. |
| [Audience-level reporting for additional destinations](../../dataflows/ui/monitor-destinations.md#audience-level-view) | Audience-level reporting is now available for several high-usage destinations: [Facebook](../../destinations/catalog/social/facebook.md), [TikTok](../../destinations/catalog/social/tiktok.md), [(Legacy) Amazon Ads](../../destinations/catalog/advertising/amazon-ads.md), [Braze](../../destinations/catalog/mobile-engagement/braze.md), [LinkedIn Matched Audiences](../../destinations/catalog/social/linkedin.md), [(Companies) LinkedIn](../../destinations/catalog/social/linkedin-b2b.md), [Twitter Custom Audiences](../../destinations/catalog/social/twitter.md), [Pinterest Customer List](../../destinations/catalog/advertising/pinterest.md), [Salesforce CRM](../../destinations/catalog/crm/salesforce.md), [Mailchimp Tags](../../destinations/catalog/email-marketing/mailchimp-tags.md), [Gainsight PX](../../destinations/catalog/analytics/gainsight-px.md), and [Demandbase People](../../destinations/catalog/advertising/demandbase-people.md). Previously, these destinations only supported dataflow run-level reporting, making it harder to understand how many profiles were activated for each audience. For more information, read the [audience-level view](../../dataflows/ui/monitor-destinations.md#audience-level-view) documentation. <br> ![The monitoring dashboard showing the Customer Audiences tab with audience-level activation metrics including records activated, excluded, and failed per audience.](../2026/assets/june/audience-level-reporting.png){zoomable="yes"} |

{style="table-layout:auto"}

**Fixes and improvements**

| Fix | Description |
| --- | --- |
| [[!DNL Reddit Custom Audience]](../../destinations/catalog/advertising/reddit-custom-audience.md) activation fix | Fixed an issue that prevented customers from activating data when attempted more than 24 hours after authentication. |
| [[!DNL Facebook]](../../destinations/catalog/social/facebook.md) restricted audience enforcement | Starting June 8, 2026, [!DNL Facebook] blocks audiences containing restricted or sensitive data (such as health or financial information) under its Terms of Service. See the [restricted audience data](../../destinations/catalog/social/facebook.md#restricted-audiences) section for troubleshooting steps. |
| [External audiences activation guardrail update](../../destinations/guardrails.md#batch-file-based-activation) | The maximum number of external audiences (such as custom upload, Federated Audience Composition, and Audience Composition) that can be activated per destination instance has been increased to 100. |
| [Dataset export file splitting](../../destinations/ui/export-datasets.md) | Previously, datasets with fewer than 50,000 records were sometimes split into multiple files. Datasets with 50,000 records or fewer are now always exported as a single file. |

{style="table-layout:auto"}

For more information, read the [Destinations overview](../../destinations/home.md).

## Experience Data Model (XDM) {#xdm}

Experience Data Model (XDM) is an open-source specification that provides common structures and definitions (schemas) for data that is brought into Experience Platform.

**New or updated features**

| Feature | Description |
| --- | --- |
| [Schema inventory enhancements](../../xdm/ui/resources/schemas.md) | The schema browse page now includes additional schema metadata, enhanced filtering options, user-defined tags and folders, and inline actions for common schema management tasks. These updates help you find, organize, and manage schemas more efficiently from a single location. |

{style="table-layout:auto"}

For more information, read the [XDM overview](../../xdm/home.md).

## Query Service {#query-service}

Use Query Service to query data in Adobe Experience Platform using standard SQL.

**New or updated features**

| Feature | Description |
| --- | --- |
| Long-Term Personalization with Data Distiller Accelerators | New guidance explains how to use Data Distiller Accelerators and historical data stored in the Data Lake to generate activation-ready insights for personalization and audience activation. This approach helps you support extended lookback windows while optimizing Profile Store usage and Total Data Volume consumption. |

{style="table-layout:auto"}

For more information, read the [Query Service overview](../../query-service/home.md).

<!--

## Run and Operate {#run-and-operate}

**New or updated features**

| Feature | Description |
| --- | --- |
| [Anti-pattern detection in Job Schedules](../../run-and-operate/job-schedules-anti-patterns.md) | Three anti-patterns are now automatically detected in the Job Schedules view: exceeding 90 profile ingestion runs per day, profile ingestion scheduled too close to segmentation, and segmentation scheduled too close to destination activation. The last-7-days lookback now includes a calendar view for date selection. This feature is being rolled out through the end of June 2026. |
| [Health checks for P-TTL and e-TTL](../../run-and-operate/health-checks.md) | Two new health checks are now available: Pseudonymous Profile TTL (P-TTL) scans whether the expiration policy is active for your sandbox and lists relevant unauthenticated namespaces. Experience Event Datasets TTL (e-TTL) scans data lake and profile event datasets to identify where automatic data expiration is not configured. |

{style="table-layout:auto"}

-->

## Segmentation Service {#segmentation-service}

Use Segmentation Service to create audiences from your customer data and manage their full lifecycle in Experience Platform.

**New or updated features**

| Feature | Description |
| --- | --- |
| [Persistent vs. Random split in Audience Composition](../../segmentation/ui/audience-composition.md) | Use the new split mode selector in Audience Composition to choose between Persistent and Random percentage splits. Persistent split keeps the same profile in the same bucket across evaluations. Random split may place a profile in a different bucket across evaluations. When using Persistent split, select an identity namespace with low variance to ensure reliable audience membership. |

{style="table-layout:auto"}

For more information, read the [Audiences overview](../../segmentation/home.md).

## Sources {#sources}

Experience Platform provides a RESTful API and an interactive UI that lets you set up source connections for various data providers with ease. These source connections allow you to authenticate and connect to external storage systems and CRM services, set times for ingestion runs, and manage data ingestion throughput.

**New or updated sources**

| Source | Description |
| --- | --- |
| [!BADGE Beta]{type=Informative} [!DNL Meta Ads] | Use the [!DNL Meta Ads] source to configure the complete [!DNL Meta Ads] ingestion workflow in the Sources UI. Connect your [!DNL Meta Ads] account and bring paid media data directly into Experience Platform for activation and analysis. This source is available to a limited number of customers. Contact your Adobe representative to request access. |
| [!BADGE Beta]{type=Informative} [!DNL Delta Sharing] | Use the [!DNL Delta Sharing] source to bring live, shared datasets from partners or internal lakehouse environments into Experience Platform without copying or manually uploading files. Connect to a [!DNL Delta Sharing] endpoint, choose the tables you need, and use that governed data alongside your existing profiles and insights. |

{style="table-layout:auto"}

**Updates and fixes**

| Source | Description |
| --- | --- |
| [[!DNL Shopify Streaming]](../../sources/connectors/ecommerce/shopify-streaming.md) HMAC authentication | HMAC-based authentication is now supported in the [!DNL Shopify Streaming] connector, available in both the UI and API. See the [[!DNL Shopify Streaming] overview](../../sources/connectors/ecommerce/shopify-streaming.md) for key rotation behavior and setup instructions. |
| [Automatic dataflow disabling](../../sources/home.md) | Sources dataflows that fail continuously for 30 days are automatically disabled. When a dataflow is disabled, review the failure reason in Monitoring, apply the necessary updates, and re-enable the dataflow. Common failure reasons include credentials, permissions, or schema and mapping configuration changes. |

{style="table-layout:auto"}

For more information, read the [sources overview](../../sources/home.md).

<!--

| [Scheduled queries with no end date](../../query-service/api/scheduled-queries.md) | Create scheduled queries that run indefinitely without specifying an end date. Use this for continuous recurring workflows. The UI may display indefinite schedules using a far-future date such as 31.12.9999. |

## Advanced data lifecycle management {#advanced-data-lifecycle-management}

Experience Platform provides a suite of data hygiene capabilities that let you manage your stored data through programmatic deletions of consumer records and datasets.

**New or updated features**

| Feature | Description |
| --- | --- |
| [Multi-dataset and targeted services for work orders](../../hygiene/api/jobs.md) | Two new API-only capabilities are now available for data lifecycle work orders. Use targeted services to scope deletion to specific services (profile, identity, or [!DNL Adobe Journey Optimizer]) without modifying data in the lake. Use multi-dataset support to target one, many, or all datasets in a single work order submission. |

{style="table-layout:auto"}

For more information, read the [advanced data lifecycle management overview](../../hygiene/home.md).

-->
