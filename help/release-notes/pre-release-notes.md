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

**Release date: May 2026**

New features and updates to existing features in Adobe Experience Platform:

- [Agent Orchestrator](#agent-orchestrator)
- [Destinations](#destinations)
- [Real-Time Customer Profile](#profile)
- [Segmentation Service](#segmentation-service)
- [Sources](#sources)

## Agent Orchestrator {#agent-orchestrator}

Use Agent Orchestrator to build and deploy AI-powered agents that automate workflows and interact with customers across multiple channels.

**New or updated features**

| Feature | Description |
| --- | --- |
| Data Onboarding skill | The Data Engineering Agent now includes Data Onboarding skills covering source connection, data quality, semantic enrichment, schema recommendation, and data ingestion. Use step-by-step workflows and example prompts to connect sources, check data quality, and ingest data for B2C and B2B flows. |
| Data Validation skills | Two validation skills, DataField and DataSet, are now available in the Data Engineering Agent. Use these skills to validate data fields and datasets through natural language prompts. |

{style="table-layout:auto"}

For more information, see the [Agent Orchestrator documentation](https://experienceleague.adobe.com/en/docs/experience-cloud-ai/experience-cloud-ai/agents/agent-orchestrator).

## Destinations {#destinations}

[!DNL Destinations] are pre-built integrations with destination platforms that allow for the seamless activation of data from Experience Platform. You can use destinations to activate your known and unknown data for cross-channel marketing campaigns, email campaigns, targeted advertising, and many other use cases.

**New or updated destinations**

| Feature | Description |
| --- | --- |
| [!BADGE Beta]{type=Informative} Export arrays for enrichment attributes | Export array fields as enrichment attributes when activating audiences to cloud storage destinations. Select individual inner fields from an array, and they are exported as separate columns in JSON and Parquet output. This feature is available to a limited number of customers. To request access, contact your Adobe representative. See the [enrichment attributes documentation](../destinations/ui/activate/activate-batch-profile-destinations.md#select-enrichment-attributes) for details. |
| External audience support for [!DNL Criteo] | Activate audiences from origins beyond Segmentation Service to the [Criteo](../destinations/catalog/advertising/criteo.md) destination, including custom upload audiences (imported from CSV), look-alike audiences, federated audiences, and audiences created in other Experience Platform apps such as [!DNL Adobe Journey Optimizer]. See the [supported audiences](../destinations/catalog/advertising/criteo.md#supported-audiences) section for details. |
| New supported destinations for [!DNL Acxiom Audience Connection] and [!DNL Acxiom Real ID Audience Connection] | Five new destinations are now supported: [!DNL Roku], [!DNL Samsung Ads], [!DNL The Trade Desk] (1st Party), [!DNL Warner Bros. Discovery], and [!DNL Yahoo]. See the [Acxiom Audience Connection](../destinations/catalog/advertising/acxiom-audience-connection.md) and [Acxiom Real ID Audience Connection](../destinations/catalog/advertising/acxiom-real-id-audience-connection.md) documentation for details. |

{style="table-layout:auto"}

**Fixes and improvements**

| Fix | Description |
| --- | --- |
| [!DNL Google Cloud Storage] macro support | The [`%SEGMENT_NAME%`](../destinations/catalog/cloud-storage/overview.md#use-macros) and other folder path macros now work correctly for [!DNL Google Cloud Storage] destinations. Previously, macros were not replaced with the audience name in the export path. |
| [!DNL Federated Audiences] export file now | The **[!UICONTROL Export file now]** option is no longer shown for [!DNL Federated Audiences] destinations, where ad-hoc export is not supported. Previously, selecting this option resulted in a failed activation. |
| [!DNL Google Customer Match] identity type requirement | Updated documentation to clarify that [!DNL Google] requires a single identity key type per destination dataflow. Mixing multiple key types causes mapping IDs to be overwritten, already-activated audiences to be closed and restarted, and match rates to reset to 0%. This is a [!DNL Google] requirement, not an Experience Platform limitation. See the [Google Customer Match documentation](../destinations/catalog/advertising/google-customer-match.md) for details. |
| [!DNL Snowflake] scheduling UI fix | Fixed an issue where switching the export trigger or frequency in the [!DNL Snowflake] destination configuration caused the UI to crash. |
| Search by dataflow name in activation workflow | Search by dataflow name in the **[!UICONTROL Select destination]** step of the activation workflow to locate the right destination dataflow. |

{style="table-layout:auto"}

For more information, read the [Destinations overview](../destinations/home.md).

## Real-Time Customer Profile {#profile}

Adobe Experience Platform enables you to drive coordinated, consistent, and relevant experiences for your customers no matter where or when they interact with your brand. With Real-Time Customer Profile, you can see a holistic view of each individual customer that combines data from multiple channels, including online, offline, CRM, and third-party data.

**New or updated features**

| Feature | Description |
| --- | --- |
| List function in computed attributes | Use the List function in computed attributes to return an array of values from qualifying events. This function is intended for use when the qualifying events come from a single dataset. If the source events span multiple datasets, results may be incomplete. See the [computed attributes UI guide](../profile/computed-attributes/ui.md) for details. |
| Batch profile ingestion progress | Track batch profile ingestion jobs in real time from the monitoring dashboard. View job initiation, queued time, and critical checkpoint progress, including when data is ready for segmentation and ready for profile lookup. Use these insights to predict downstream data availability and plan campaign launches with confidence. |

{style="table-layout:auto"}

For more information, read the [Real-Time Customer Profile overview](../profile/home.md).

## Segmentation Service {#segmentation-service}

Use Segmentation Service to create audiences from your customer data and manage their full lifecycle in Experience Platform.

**New or updated features**

| Feature | Description |
| --- | --- |
| Audience Composition enhancements | All customers now have a baseline of 50 compositions. Additional enhancements include chained activation and audience enrichment improvements. See the [Audience Composition documentation](../segmentation/ui/audience-composition.md) for details. |
| Express mode for external audiences | Use express mode to activate external audiences directly through the API without the full activation workflow. This mode supports batch double-activation for external audience use cases. See the [external audiences documentation](../segmentation/ui/audience-portal.md) for details. |
| Account audiences with experience events (B2B) | After the B2B CDP architecture upgrade, account audiences with experience events are no longer supported directly. To create an account audience that uses experience events, first build a people audience with the experience events, then reference that people audience when creating the account audience. See the [account audiences documentation](../segmentation/types/account-audiences.md) for updated guidance. |

{style="table-layout:auto"}

For more information, read the [Audiences overview](../segmentation/home.md).

## Sources {#sources}

Experience Platform provides a RESTful API and an interactive UI that lets you set up source connections for various data providers with ease. These source connections allow you to authenticate and connect to external storage systems and CRM services, set times for ingestion runs, and manage data ingestion throughput.

**New or updated sources**

| Source | Description |
| --- | --- |
| [!DNL LAVA] | Use the [!DNL LAVA] source connector to ingest data from [!DNL LAVA] into Experience Platform using standardized schemas and governance controls, reducing custom integration effort and improving time-to-value for downstream activation and insights. |
| [!DNL Meta Ads] (Beta) | Use the [!DNL Meta Ads] source to configure the complete [!DNL Meta Ads] ingestion workflow in the Sources UI. Connect your [!DNL Meta Ads] account and bring paid media data directly into Experience Platform for activation and analysis. |
| [!DNL Deltashare] | Use the [!DNL Deltashare] source to bring live, shared datasets from partners or internal lakehouse environments into Experience Platform without copying or manually uploading files. Connect to a [!DNL Deltashare] endpoint, choose the tables you need, and use that governed data alongside your existing profiles and insights. |

{style="table-layout:auto"}

**Updates and fixes**

| Source | Description |
| --- | --- |
| NLD2 region IP allowlist update | Five IP ranges have been added to the NLD2 region allowlist: `20.105.215.28/30`, `20.105.244.48/29`, `57.153.246.72/29`, `57.153.246.80/28`, and `57.153.246.96/30`. Update your network allowlist if you use sources in the NLD2 region. |
| [!DNL Shopify] batch field limitations | Certain [!DNL Shopify] fields are only supported in preview mode. To ingest these fields, use the API to create your dataflows instead of the UI workflow. See the [!DNL Shopify] source documentation for the list of affected fields. |
| Automatic dataflow disabling | Sources dataflows that fail continuously for 30 days are automatically disabled. When a dataflow is disabled, review the failure reason in Monitoring, apply the necessary updates, and re-enable the dataflow. Common failure reasons include credentials, permissions, or schema and mapping configuration changes. |

{style="table-layout:auto"}

For more information, read the [sources overview](../sources/home.md).
