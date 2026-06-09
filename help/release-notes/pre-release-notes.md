---
title: Experience Platform Pre-Release Notes
description: A preview of the latest release notes for Adobe Experience Platform.
exl-id: f2c41dc8-9255-4570-b459-4f9fc28ee58b
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
>- [Customer Journey Analytics](https://experienceleague.adobe.com/en/docs/analytics-platform/using/releases/latest)
>- [Federated Audience Composition](https://experienceleague.adobe.com/en/docs/federated-audience-composition/using/release-notes)
>- [Real-Time CDP Collaboration](https://experienceleague.adobe.com/en/docs/real-time-cdp-collaboration/using/latest)

**Release date: June 2026**

New features and updates to existing features in Adobe Experience Platform:

- [Agent Orchestrator](#agent-orchestrator)
- [Advanced data lifecycle management](#advanced-data-lifecycle-management)
- [Destinations](#destinations)
- [Query Service](#query-service)
- [Run and Operate](#run-and-operate)
- [Segmentation Service](#segmentation-service)
- [Sources](#sources)
- [Experience Data Model (XDM)](#xdm)

## Agent Orchestrator {#agent-orchestrator}

Use Agent Orchestrator to build and deploy AI-powered agents that automate workflows and interact with customers across multiple channels.

**New or updated features**

| Feature | Description |
| --- | --- |
| Notifications Agent | Use the Notifications Agent to surface alerts, system events, and audience or journey updates through conversational prompts. The agent delivers contextual notification summaries so you can act on critical events without navigating multiple dashboards. |
| [!BADGE Beta]{type=Informative} Adobe Marketing Agent for AI Platforms | Use the Adobe Marketing Agent to bring Experience Platform operational insights, audience data, journey information, and asset discovery into third-party AI platforms including [!DNL ChatGPT], [!DNL Claude], [!DNL Gemini], [!DNL Amazon Q], [!DNL Databricks Genie], and [!DNL IBM Watsonx]. Contact your Adobe representative to request access. |

{style="table-layout:auto"}

For more information, see the [Agent Orchestrator documentation](https://experienceleague.adobe.com/en/docs/experience-cloud-ai/experience-cloud-ai/agents/agent-orchestrator).

## Advanced data lifecycle management {#advanced-data-lifecycle-management}

Experience Platform provides a suite of data hygiene capabilities that let you manage your stored data through programmatic deletions of consumer records and datasets.

**New or updated features**

| Feature | Description |
| --- | --- |
| [Multi-dataset and targeted services for work orders](../hygiene/api/jobs.md) | Two new API-only capabilities are now available for data lifecycle work orders. Use targeted services to scope deletion to specific services (profile, identity, or [!DNL Adobe Journey Optimizer]) without touching data in the lake. Use multi-dataset support to target one, many, or all datasets in a single work order submission. |

{style="table-layout:auto"}

For more information, read the [advanced data lifecycle management overview](../hygiene/home.md).

## Destinations {#destinations}

[!DNL Destinations] are pre-built integrations with destination platforms that allow for the seamless activation of data from Experience Platform. You can use destinations to activate your known and unknown data for cross-channel marketing campaigns, email campaigns, targeted advertising, and many other use cases.

**New or updated destinations**

| Feature | Description |
| --- | --- |
| [!BADGE Beta]{type=Informative} [When to activate](../destinations/ui/when-to-activate.md) | Control which profile change types trigger exports to a destination. Enable or disable three trigger types per dataflow: attribute changes, audience qualification and disqualification, and identity changes. All three triggers are enabled by default. This feature is available to a limited number of customers. To request access, contact your Adobe representative. |
| Azure Private Link for Azure destinations | Route data exports to [[!DNL Azure Blob Storage]](../destinations/catalog/cloud-storage/azure-blob.md), [[!DNL Azure Data Lake Storage Gen2]](../destinations/catalog/cloud-storage/adls-gen2.md), and [[!DNL Azure Event Hubs]](../destinations/catalog/cloud-storage/azure-event-hubs.md) over private IP addresses on the [!DNL Microsoft Azure] backbone instead of the public internet. This feature is available to customers with Healthcare Shield or Privacy and Security Shield entitlements. Contact your Adobe representative to request setup. |
| [[!DNL Snowflake Streaming]](../destinations/catalog/warehouses/snowflake.md) and [[!DNL Snowflake Batch]](../destinations/catalog/warehouses/snowflake-batch.md) Private Link support | A new Private Link toggle is now available when configuring [!DNL Snowflake] streaming and batch destination connections. Enable this toggle only if your [!DNL Snowflake] account is configured for private link-only inbound access. Leaving the toggle off for private link-only accounts causes data sharing to fail. |
| [!BADGE Beta]{type=Informative} [Export arrays as enrichment attributes](../destinations/ui/activate-batch-profile-destinations.md#select-enrichment-attributes) | Export array fields as enrichment attributes when activating audiences to cloud storage destinations. Select individual fields from an array or export the full array, and they are exported as separate columns in JSON and Parquet output. Contact your Adobe representative to request access. |
| [[!DNL Google Ad Manager 360]](../destinations/catalog/advertising/google-ad-manager-360-connection.md) now generally available | The [!DNL Google Ad Manager 360] destination (formerly in beta) is now generally available. |
| [[!DNL Google Customer Match + Display & Video 360]](../destinations/catalog/advertising/google-customer-match-dv360.md) now generally available | The [!DNL Google Customer Match + Display & Video 360] destination (formerly in limited availability) is now generally available. Monitoring has been updated to show one dataflow run per day instead of multiple separate runs for realized and exited events per identity namespace. |
| [Audience-level reporting for additional destinations](../dataflows/ui/monitor-destinations.md#audience-level-view) | Audience-level dataflow reporting is now available for the following destinations: [Gainsight PX](../destinations/catalog/analytics/gainsight-px.md), [TikTok](../destinations/catalog/social/tiktok.md), [Linkedin Matched Audiences](../destinations/catalog/social/linkedin.md), [Demandbase People](../destinations/catalog/advertising/demandbase-people.md), [(Legacy) Amazon Ads](../destinations/catalog/advertising/amazon-ads.md), [Pinterest Customer List](../destinations/catalog/advertising/pinterest.md), [Twitter Custom Audiences](../destinations/catalog/social/twitter.md), [Braze](../destinations/catalog/mobile-engagement/braze.md), [(Companies) LinkedIn](../destinations/catalog/social/linkedin-b2b.md), [Facebook](../destinations/catalog/social/facebook.md), [Mailchimp Tags](../destinations/catalog/email-marketing/mailchimp-tags.md), and [Salesforce CRM](../destinations/catalog/crm/salesforce.md). |

{style="table-layout:auto"}

**Fixes and improvements**

| Fix | Description |
| --- | --- |
| [[!DNL Reddit Custom Audience]](../destinations/catalog/advertising/reddit-custom-audience.md) activation fix | Fixed an issue where customers could not activate data more than 24 hours after authentication. |
| [[!DNL Facebook]](../destinations/catalog/social/facebook.md) restricted audience enforcement | Starting June 8, 2026, [!DNL Facebook] blocks audiences containing restricted or sensitive data (such as health or financial information) under its Terms of Service. See the [restricted audience data](../destinations/catalog/social/facebook.md#restricted-audiences) section for troubleshooting steps. |
| [External audiences activation guardrail update](../destinations/guardrails.md#batch-file-based-activation) | The maximum number of external audiences (such as custom upload, Federated Audience Composition, and Audience Composition) that can be activated per destination instance has been updated to 100. |
| [Additional filters in the Select destination step](../destinations/ui/activate-segment-streaming-destinations.md#select-destination) | The **[!UICONTROL Select destination]** step of the activation workflow now includes additional filters to help you locate the right destination dataflow more quickly. |

{style="table-layout:auto"}

For more information, read the [Destinations overview](../destinations/home.md).

## Experience Data Model (XDM) {#xdm}

Experience Data Model (XDM) is an open-source specification that provides common structures and definitions (schemas) for data that is brought into Experience Platform.

**New or updated features**

| Feature | Description |
| --- | --- |
| [Schema inventory enhancements](../xdm/ui/resources/schemas.md) | The schema browse page now includes updated columns (name, class, datasets, identities, relationships, profile enablement, behavior, schema type, tags, creation date, and last modified date). New filters let you narrow results by profile enablement, schema type, class, tags, creator, creation date, modification date, primary identity, and relationship status. Use inline actions to edit, delete, apply labels, create datasets, manage tags, organize by folders, and more. |

{style="table-layout:auto"}

For more information, read the [XDM overview](../xdm/home.md).

## Query Service {#query-service}

Use Query Service to query data in Adobe Experience Platform using standard SQL.

**New or updated features**

| Feature | Description |
| --- | --- |
| [Scheduled queries with no end date](../query-service/api/scheduled-queries.md) | Create scheduled queries that run indefinitely without specifying an end date. Use this for continuous recurring workflows. The UI may display indefinite schedules using a far-future date such as 31.12.9999. |
| [Long-term personalization with Data Distiller Accelerators](../query-service/home.md) | Use Data Distiller Accelerators to support long-term personalization use cases with lookback windows of 6, 12, 18, or 24 months. Build derived signals, scores, tiers, and audience memberships from historical data in the lake without storing excessive event history in the Profile Store. |

{style="table-layout:auto"}

For more information, read the [Query Service overview](../query-service/home.md).

## Run and Operate {#run-and-operate}

**New or updated features**

| Feature | Description |
| --- | --- |
| [Anti-pattern detection in Job Schedules](../run-and-operate/job-schedules-anti-patterns.md) | Three anti-patterns are now automatically detected in the Job Schedules view: exceeding 90 profile ingestion runs per day, profile ingestion scheduled too close to segmentation, and segmentation scheduled too close to destination activation. The last-7-days lookback now includes a calendar view for date selection. This feature is being rolled out throughout the end of June 2026. |
| [Health checks for P-TTL and e-TTL](../run-and-operate/health-checks.md) | Two new health checks are now available: Pseudonymous Profile TTL scans whether the expiration policy is active for your sandbox and lists relevant unauthenticated namespaces. Experience Event Datasets TTL scans lake and profile event datasets to identify where automatic data expiration is not configured. |

{style="table-layout:auto"}

## Segmentation Service {#segmentation-service}

Use Segmentation Service to create audiences from your customer data and manage their full lifecycle in Experience Platform.

**New or updated features**

| Feature | Description |
| --- | --- |
| [Persistent vs. Random split in Audience Composition](../segmentation/ui/audience-composition.md) | Use the new split mode selector in Audience Composition to choose between Persistent and Random percentage splits. Persistent split keeps the same profile in the same bucket across evaluations. Random split may place a profile in a different bucket across evaluations. When using Persistent split, select an identity namespace with low variance to ensure reliable audience membership. |

{style="table-layout:auto"}

For more information, read the [Audiences overview](../segmentation/home.md).

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
| [[!DNL Shopify Streaming]](../sources/connectors/ecommerce/shopify-streaming.md) HMAC authentication | HMAC-based authentication is now supported in the [!DNL Shopify Streaming] connector, available in both the UI and API. See the [[!DNL Shopify Streaming] overview](../sources/connectors/ecommerce/shopify-streaming.md) for key rotation behavior and setup instructions. |
| [Automatic dataflow disabling](../sources/home.md) | Sources dataflows that fail continuously for 30 days are automatically disabled. When a dataflow is disabled, review the failure reason in Monitoring, apply the necessary updates, and re-enable the dataflow. Common failure reasons include credentials, permissions, or schema and mapping configuration changes. |

{style="table-layout:auto"}

For more information, read the [sources overview](../sources/home.md).