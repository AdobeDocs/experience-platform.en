---
title: Experience Platform Pre-Release Notes
description: Preview the October 2026 features and updates planned for Adobe Experience Platform. Explore upcoming changes to destinations, schemas, and Coworker skills.
exl-id: f2c41dc8-9255-4570-b459-4f9fc28ee58b
---
# Adobe Experience Platform pre-release notes

Preview the features and updates planned for October 2026 in [!DNL Adobe Experience Platform].

>[!IMPORTANT]
>
>Release items are subject to change. The final release notes may include additional items or omit items from this preview.

>[!TIP]
>
>Refer to the following documentation for release notes of other Adobe Experience Platform applications:
>
>- [Adobe Journey Optimizer](https://experienceleague.adobe.com/en/docs/journey-optimizer/using/whats-new/release-notes){target="_blank"}
>- [Adobe Journey Optimizer (pre-release)](https://experienceleague.adobe.com/en/docs/journey-optimizer/using/whats-new/e-release-notes){target="_blank"}
>- [Adobe Journey Optimizer B2B Edition](https://experienceleague.adobe.com/en/docs/journey-optimizer-b2b/user/release-notes){target="_blank"}
>- [Adobe Customer Journey Analytics](https://experienceleague.adobe.com/en/docs/analytics-platform/using/releases/latest){target="_blank"}
>- [Federated Audience Composition](https://experienceleague.adobe.com/en/docs/federated-audience-composition/using/release-notes){target="_blank"}
>- [Adobe Real-Time CDP Collaboration](https://experienceleague.adobe.com/en/docs/real-time-cdp-collaboration/using/latest){target="_blank"}

**Release date: October 2026**

New features and updates to existing features in Adobe Experience Platform:

- [CX Enterprise Coworker](#cx-enterprise-coworker)
- [Destinations](#destinations)
- [Experience Data Model](#xdm)
- [Process Manager](#process-manager)
- [Real-Time Customer Profile](#profile)
- [Query Service](#query-service)
- [Sources](#sources)

## CX Enterprise Coworker {#cx-enterprise-coworker}

Use [!DNL Adobe CX Enterprise Coworker] to work with Experience Platform data through conversational skills.

**New or updated features**

| Feature | Description |
| --- | --- |
| SQL data preparation skills | Run read-only SQL queries or create audiences through Coworker. Audience creation requires a Data Distiller entitlement and consumes compute hours after your confirmation. |
| AI-assisted data ingestion entry point | Start a conversational data ingestion and schema creation workflow from the schema creation dialog. Coworker opens with a prompt based on your schema creation task. Access depends on your Coworker and skill availability. |
| Coworker in AI platforms | Access Coworker from [!DNL Microsoft 365 Copilot] and [!DNL ChatGPT] to ask questions and retrieve insights. |

{style="table-layout:auto"}

For more information, read the [CX Enterprise Coworker documentation](https://experienceleague.adobe.com/en/docs/cx-enterprise-ai/experience-cloud-ai/coworker/overview){target="_blank"}.

## Destinations {#destinations}

Use destinations to activate audiences and export data from Experience Platform to supported advertising, marketing, and storage services.

**New or updated destinations**

| Feature | Description |
| --- | --- |
| [!DNL 6sense Segments] | Activate account audiences from [!DNL Adobe Real-Time CDP B2B Edition] to [!DNL 6sense] as API-origin segments. Use the segments for ad campaigns, AI email, and account prioritization. You need a [!DNL 6sense] account with Segments API access enabled. |

{style="table-layout:auto"}

**New or updated functionality**

| Feature | Description |
| --- | --- |
| [Manual deletion from Data Landing Zone](/help/destinations/catalog/cloud-storage/data-landing-zone.md) | Delete exported data manually from your [!DNL Data Landing Zone] destination in [!DNL Azure]. You no longer need to wait for automatic deletion after seven days. Files that you do not delete manually still expire after seven days. |
| [When to activate](/help/destinations/ui/when-to-activate.md) general availability | **[!UICONTROL When to activate]** is now generally available. Control which profile changes trigger exports to streaming API-based and streaming profile export destinations. Enable or disable attribute changes, segmentation changes, and identity changes for each dataflow. All three triggers are enabled by default. |

{style="table-layout:auto"}

For more information, read the [destinations overview](/help/destinations/home.md).

## Experience Data Model {#xdm}

Use Experience Data Model (XDM) schemas to define data structures and relationships in Experience Platform.

**New or updated features**

| Feature | Description |
| --- | --- |
| [Expanded relational schema relationships](/help/xdm/schema/relational.md) | Create relationships from relational schemas to supported non-primary-identity fields in standard schemas, in addition to primary identities. Relational schemas no longer require segmentation enablement to create these relationships. Standard schemas must remain enabled for Real-Time Customer Profile. Direct relationships remain one-to-one or many-to-one, with the standard schema on the one side. |

{style="table-layout:auto"}

For more information, read the [XDM overview](/help/xdm/home.md).

## Process Manager {#process-manager}

Use Process Manager to define and coordinate data workflows across Experience Platform services. With Process Manager, you can create workflows that connect data ingestion, Data Distiller queries, segmentation, profile exports, and destination activation, as well as schedule workflows and monitor execution across the connected tasks.

## Query Service {#query-service}

Use Query Service to explore and validate Experience Platform data with SQL.

**Fixes and improvements**

| Fix | Description |
| --- | --- |
| [XDM row-validation error reference](/help/query-service/troubleshooting-guide.md#xdm-row-validation-errors) | Use the `INGEST-####-400` error reference to identify the XDM constraint behind a failed write. Find guidance to correct the data and retry the query. This documentation update does not introduce new query behavior. |

{style="table-layout:auto"}

For more information, read the [Query Service overview](/help/query-service/home.md).

## Real-Time Customer Profile {#profile}

Adobe Experience Platform enables you to drive coordinated, consistent, and relevant experiences for your customers no matter where or when they interact with your brand. With Real-Time Customer Profile, you can see a holistic view of each individual customer that combines data from multiple channels, including online, offline, CRM, and third-party data.

**New or updated features**

| Feature | Description |
| --- | --- |
| Real-Time Customer Profile support for unstructured data | Real-Time Customer Profile now supports unstructured data. With unstructured data support, you can use conversational and other unstructured customer data as part of the profile building blocks, which lets you understand customer intent, personalize conversations, and activate intent in real-time. |

{style="table-layout:auto"}

## Sources {#sources}

Use source connections to bring data from supported external systems into Experience Platform.

**New or updated sources**

| Source | Description |
| --- | --- |
| [Delta Sharing availability](/help/sources/connectors/data-sharing/delta-sharing.md) | The limited beta for the [!DNL Delta Sharing] source concluded on August 1, 2026. General availability is currently planned for 2027. The updated documentation no longer directs you to request beta access. |

{style="table-layout:auto"}

For more information, read the [sources overview](/help/sources/home.md).
