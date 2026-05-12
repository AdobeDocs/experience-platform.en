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
- [Alerts](#alerts)
- [Computed attributes](#computed-attributes)
- [Destinations](#destinations)
- [Real-Time Customer Profile](#profile)
- [Segmentation Service](#segmentation-service)
- [Sources](#sources)

## Agent Orchestrator {#agent-orchestrator}

Use Agent Orchestrator to build and deploy AI-powered agents that automate workflows and interact with customers across multiple channels.

**New or updated features**

| Feature | Description |
| --- | --- |
| Data onboarding skills | The Data Engineering Agent now includes data onboarding skills covering source connection, data quality, semantic enrichment, schema recommendation, and data ingestion. Use step-by-step workflows and example prompts to connect sources, check data quality, and ingest data for B2C and B2B flows. |
| Data validation skills | Two validation skills, DataField and DataSet, are now available in the Data Engineering Agent. Use these skills to validate data fields and datasets through natural language prompts. |

{style="table-layout:auto"}

For more information, see the [Agent Orchestrator documentation](https://experienceleague.adobe.com/en/docs/experience-cloud-ai/experience-cloud-ai/agents/agent-orchestrator).

## Alerts {#alerts}

Experience Platform allows you to subscribe to event-based alerts for various Experience Platform activities. You can subscribe to different alert rules through the [!UICONTROL Alerts] tab in the Experience Platform user interface, and can choose to receive alert messages within the UI itself or through email notifications.

**New or updated features**

| Feature | Description |
| --- | --- |
| Alert History: Filtering and Discoverability | The Alert History page now shows the associated object name, adds search by alert type and filtering by object name, and includes an improved time range selector, making it easier to correlate alerts and find what you need. |

{style="table-layout:auto"}

To learn more about alerts, read the [[!DNL Observability Insights] overview](/help/observability/home.md).

## Computed attributes {#computed-attributes}

Computed attributes enable capability to easily summarize event data into profile attributes via an intuitive UI for enhanced behavior-based segmentation, personalization, and activation. With this feature, you can create computed attributes in a self serve manner, manage them, and use them in segmentation, Real-Time CDP destinations, or Adobe Journey Optimizer. Additionally, computed attributes simplify segmentation and journey workflows to help you seamlessly deliver relevant experiences. 

| Feature | Description |
| --- | --- |
| List function in computed attributes | Use the List function in computed attributes to return an array of values from qualifying events. This function is intended for use when the qualifying events come from a single dataset. If the source events span multiple datasets, results may be incomplete. |

To learn more about computed attributes, please read the [computed attributes overview](../profile/computed-attributes/overview.md).

## Destinations {#destinations}

[!DNL Destinations] are pre-built integrations with destination platforms that allow for the seamless activation of data from Experience Platform. You can use destinations to activate your known and unknown data for cross-channel marketing campaigns, email campaigns, targeted advertising, and many other use cases.

**New or updated destinations**

| Feature | Description |
| --- | --- |
| [!BADGE Beta]{type=Informative} [Export arrays for enrichment attributes](../destinations/ui/activate-batch-profile-destinations.md#select-enrichment-attributes) | Export array fields as enrichment attributes when activating audiences to cloud storage destinations. Select individual inner fields from an array, and they are exported as separate columns in JSON and Parquet output. This feature is available to a limited number of customers. To request access, contact your Adobe representative. See the [enrichment attributes documentation](../destinations/ui/activate-batch-profile-destinations.md#select-enrichment-attributes) for details. |
| External audience support for [[!DNL Criteo]](../destinations/catalog/advertising/criteo.md) | Activate audiences from origins beyond Segmentation Service to the [Criteo](../destinations/catalog/advertising/criteo.md) destination, including custom upload audiences (imported from CSV), look-alike audiences, federated audiences, and audiences created in other Experience Platform apps such as [!DNL Adobe Journey Optimizer]. See the [supported audiences](../destinations/catalog/advertising/criteo.md#supported-audiences) section for details. |
| New supported destinations for [[!DNL Acxiom Audience Connection]](../destinations/catalog/advertising/acxiom-audience-connection.md) and [[!DNL Acxiom Real ID Audience Connection]](../destinations/catalog/advertising/acxiom-real-id-audience-connection.md) | Five new destinations are now supported: [!DNL Roku], [!DNL Samsung Ads], [!DNL The Trade Desk] (1st Party), [!DNL Warner Bros. Discovery], and [!DNL Yahoo]. See the [Acxiom Audience Connection](../destinations/catalog/advertising/acxiom-audience-connection.md) and [Acxiom Real ID Audience Connection](../destinations/catalog/advertising/acxiom-real-id-audience-connection.md) documentation for details. |

{style="table-layout:auto"}

**Fixes and improvements**

| Fix | Description |
| --- | --- |
| [[!DNL Google Cloud Storage]](../destinations/catalog/cloud-storage/google-cloud-storage.md) macro support | The [`%SEGMENT_NAME%`](../destinations/catalog/cloud-storage/overview.md#use-macros) and other folder path macros now work correctly for [!DNL Google Cloud Storage] destinations. Previously, macros were not replaced with the audience name in the export path. |
| [[!DNL Federated Audiences]](https://www.adobe.com/go/destinations-federated-audience-composition) export file now | The **[!UICONTROL Export file now]** option is now supported for [!DNL Federated Audience Composition] destinations. |
| [[!DNL Snowflake]](../destinations/catalog/warehouses/snowflake.md) scheduling UI fix | Fixed an issue where toggling the export frequency between daily and once in the [!DNL Snowflake] destination configuration caused the UI to crash. |
| [[!DNL Google Customer Match]](../destinations/catalog/advertising/google-customer-match.md) key type behavior | Updated documentation to clarify how [!DNL Google] handles identity key types in a destination dataflow. You can map multiple key types in the same connection, but if you update mappings, any identity you add must be the same key type as the one you removed. Removing all fields of a given key type, or switching key types across activation runs, causes [!DNL Google] to delete the corresponding audience list. See the [key type behavior](../destinations/catalog/advertising/google-customer-match.md#key-type-behavior) section for details. |
| [View datasets in a dataset export dataflow](../destinations/api/export-datasets.md#view-datasets-in-dataflow) | Updated documentation to show how to retrieve which datasets are associated with an existing dataset export dataflow using the Flow Service API. See the [export datasets documentation](../destinations/api/export-datasets.md#view-datasets-in-dataflow) for details. |

{style="table-layout:auto"}

For more information, read the [Destinations overview](../destinations/home.md).

## Real-Time Customer Profile {#profile}

Adobe Experience Platform enables you to drive coordinated, consistent, and relevant experiences for your customers no matter where or when they interact with your brand. With Real-Time Customer Profile, you can see a holistic view of each individual customer that combines data from multiple channels, including online, offline, CRM, and third-party data.

**New or updated features**

| Feature | Description |
| --- | --- |
| Batch profile ingestion progress | Track batch profile ingestion jobs in real time from the monitoring dashboard. View job initiation, queued time, and critical checkpoint progress, including when data is ready for segmentation and ready for profile lookup. Use these insights to predict downstream data availability and plan campaign launches with confidence. |

{style="table-layout:auto"}

For more information, read the [Real-Time Customer Profile overview](../profile/home.md).

## Segmentation Service {#segmentation-service}

Use Segmentation Service to create audiences from your customer data and manage their full lifecycle in Experience Platform.

**New or updated features**

| Feature | Description |
| --- | --- |
| Audience Composition enhancements | All customers now have a baseline of 50 compositions. Additional enhancements include chained activation and audience enrichment improvements. |
| Express mode for external audiences | Use express mode to activate external audiences directly through the API without the full activation workflow. |
| Account audiences with experience events (B2B) | After the B2B CDP architecture upgrade, account audiences with experience events are no longer directly supported. To create an account audience that uses experience events, first build a people audience with the experience events, then reference that people audience when creating the account audience. |

{style="table-layout:auto"}

For more information, read the [Audiences overview](../segmentation/home.md).

## Sources {#sources}

Experience Platform provides a RESTful API and an interactive UI that lets you set up source connections for various data providers with ease. These source connections allow you to authenticate and connect to external storage systems and CRM services, set times for ingestion runs, and manage data ingestion throughput.

**New or updated sources**

| Source | Description |
| --- | --- |
| [!DNL Delta Sharing] | You can use the [!DNL Delta Sharing] source to bring Delta tables into Experience Platform through a secure, open data‑sharing protocol. After you configure a [!DNL Delta Sharing] connection and select the shares and tables you want to ingest, Experience Platform automatically brings that data into your datasets so you can use it for analysis, segmentation, and activation. |
| [!DNL LAVA] | Use the [!DNL LAVA] source connector to ingest data from [!DNL LAVA] into Experience Platform using standardized schemas and governance controls, reducing custom integration effort and improving time-to-value for downstream activation and insights. |
| [!DNL Meta Ads] (Beta) | You can use the [!DNL Meta Ads] source connector (Beta) in the Sources workspace to authenticate to [!DNL Meta], select your ad accounts, and schedule ingestion of [!DNL Meta Ads] campaign and performance data into Experience Platform datasets. |

{style="table-layout:auto"}

**Updates and fixes**

| Source | Description |
| --- | --- |
| NLD2 region IP allowlist update | Five IP ranges have been added to the NLD2 region allowlist: `20.105.215.28/30`, `20.105.244.48/29`, `57.153.246.72/29`, `57.153.246.80/28`, and `57.153.246.96/30`. Update your network allowlist if you use sources in the NLD2 region. |
| [!DNL Shopify] batch field limitations | Certain [!DNL Shopify] fields are only supported in preview mode. To ingest these fields, use the API to create your dataflows instead of the UI workflow. See the [!DNL Shopify] source documentation for the list of affected fields. |
| Automatic dataflow disabling | Sources dataflows that fail continuously for 30 days are automatically disabled. When a dataflow is disabled, review the failure reason in Monitoring, apply the necessary updates, and re-enable the dataflow. Common failure reasons include credentials, permissions, or schema and mapping configuration changes. |

{style="table-layout:auto"}

For more information, read the [sources overview](../sources/home.md).
