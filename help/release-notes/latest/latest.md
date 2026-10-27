---
title: Adobe Experience Platform Release Notes October 2026
description: Learn about the features and updates in the October 2026 release of Adobe Experience Platform, including Coworker skills, destinations, schemas, and sources.
last-update: 2026-10-27T00:00:00.000Z
exl-id: f854f9e5-71be-4d56-a598-cfeb036716cb
TQID: 'https://experienceleague.adobe.com/RvjQSbQ2NNwBYQJD4G6jsXWdAAg3vzbXKYvRlMwbBW0'
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: f8e8ea8a-6020-40da-99f7-6504fe599cb1
    internal-label: AI assistant
  - id: f6ac78a3-5b59-40f5-a37d-45df5303d3a3
    internal-label: Dashboards
subfeature_v2:
  - id: ed0d8d0e-04b9-4326-be72-a0fbca265377
    internal-label: Integrations
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

Review the features and updates released in October 2026 for Adobe Experience Platform.

>[!TIP]
>
>Read the release notes for related applications:
>
>- [Adobe Journey Optimizer](https://experienceleague.adobe.com/en/docs/journey-optimizer/using/whats-new/release-notes){target="_blank"}
>- [Adobe Journey Optimizer B2B Edition](https://experienceleague.adobe.com/en/docs/journey-optimizer-b2b/user/release-notes){target="_blank"}
>- [Adobe Customer Journey Analytics](https://experienceleague.adobe.com/en/docs/analytics-platform/using/releases/latest){target="_blank"}
>- [Federated Audience Composition](https://experienceleague.adobe.com/en/docs/federated-audience-composition/using/release-notes/latest){target="_blank"}
>- [Adobe Real-Time CDP Collaboration](https://experienceleague.adobe.com/en/docs/real-time-cdp-collaboration/using/latest){target="_blank"}

**Release date: October 27, 2026**

New features and updates to existing features in Adobe Experience Platform:

- [CX Enterprise Coworker](#cx-enterprise-coworker)
- [Destinations](#destinations)
- [Query Service](#query-service)
- [Real-Time Customer Profile](#profile)
- [Sources](#sources)

## CX Enterprise Coworker {#cx-enterprise-coworker}

Use [!DNL Adobe CX Enterprise Coworker] to work with Experience Platform data through conversational skills.

**New or updated features**

| Feature | Description |
| --- | --- |
| [Anomaly detection skills](https://experienceleague.adobe.com/en/docs/coworker/content/chat/use-cases/data-insights/intelligent-implementation-and-administration/anomaly-detection){target="_blank"} | Detect spikes and drops in supported ingestion, segmentation, and destination activation metrics with [!DNL Coworker] Chat. Compare flow and audience trends, review flow health, and investigate currently failed jobs. These skills do not change your data or configuration. Anomaly detection is in limited availability. |
| [Notification skills](https://experienceleague.adobe.com/en/docs/coworker/content/chat/use-cases/notifications/notification-skills){target="_blank"} | Use [!DNL Coworker] Chat to summarize notifications, identify action items, and manage notification preferences through conversation. Open notifications, mark them as read or unread, or set reminders. Notification skills are available to all customers with access to [!DNL Coworker], without additional setup. Delivery through [!DNL Slack] requires a connected workspace. |
| SQL data preparation skills | Run SQL queries to read data, or create audiences with [!DNL Coworker]. Audience creation requires a [!DNL Data Distiller] entitlement and consumes compute hours after you confirm. |
| Conversational data ingestion entry point | Start a conversational data ingestion and schema creation workflow from the schema creation dialog. [!DNL Coworker] opens with a prompt based on your schema creation task. Access depends on the availability of [!DNL Coworker] and its data ingestion skills. |
| [!DNL Coworker] in AI platforms | Access [!DNL Coworker] from [!DNL Microsoft 365 Copilot] and [!DNL ChatGPT] to ask questions and retrieve insights. |

{style="table-layout:auto"}

For more information, read the [CX Enterprise Coworker overview](https://experienceleague.adobe.com/en/docs/coworker/content/home){target="_blank"}.

## Destinations {#destinations}

Use destinations to activate audiences and export data from Experience Platform to supported advertising, marketing, and storage services.

**New or updated destinations**

| Feature | Description |
| --- | --- |
| [!BADGE Beta]{type=Informative} [!DNL 6sense Segments] | Activate account audiences from [!DNL Adobe Real-Time CDP B2B Edition] to [!DNL 6sense] as segments created through the API. Use the segments for ad campaigns, AI email, and account prioritization. You need a [!DNL 6sense] account with Segments API access enabled. This destination is in beta and rolls out during the week of October 26, 2026. To request access, contact your Adobe account representative. |
| [!DNL The Trade Desk] Third-Party Audiences | Send audiences from [!DNL Adobe Real-Time CDP] to the Data Marketplace in [!DNL The Trade Desk]. Buyers can then license your audiences and target them in programmatic campaigns. The destination supports TDID, GAID, IDFA, and UID2 identities. This destination is available only to data providers based in the United States. |
| [The Trade Desk - CRM](/help/destinations/catalog/advertising/tradedesk-emails.md#activate) update for UID2 conversion | Convert email addresses and phone numbers to UID2 before activation. In the **[!UICONTROL Mapping]** step, select one of four new target identity namespaces: `email_to_uid2`, `hashed_email_to_uid2`, `phone_to_uid2`, or `hashed_phone_to_uid2`. These namespaces are available only in the [!DNL The Trade Desk - CRM (NAMER & APAC)] destination. They are not available in the [!DNL The Trade Desk - CRM (EU)] destination. |

{style="table-layout:auto"}

**New or updated functionality**

| Feature | Description |
| --- | --- |
| [Manual deletion from Data Landing Zone](/help/destinations/catalog/cloud-storage/data-landing-zone.md) | To remove exported data before automatic deletion, delete files manually from your [!DNL Data Landing Zone] destination in [!DNL Azure]. Files that you do not delete manually are automatically deleted after seven days. |

{style="table-layout:auto"}

<!--
| [When to activate](/help/destinations/ui/when-to-activate.md) general availability | **[!UICONTROL When to activate]** is now generally available. Control which profile changes trigger exports to streaming API-based and streaming profile export destinations. Enable or disable attribute changes, segmentation changes, and identity changes for each dataflow. All three triggers are enabled by default. |
-->

For more information, read the [destinations overview](/help/destinations/home.md).

<!--
## Process Manager {#process-manager}

Use [!DNL Process Manager] to define and coordinate data workflows across Experience Platform services.

>[!AVAILABILITY]
>
>[!DNL Process Manager] is in beta. The feature and documentation are subject to change.

Create workflows that connect data ingestion, [!DNL Data Distiller] queries, segmentation, profile exports, and destination activation. Schedule workflows and monitor execution across the connected tasks.
-->

## Query Service {#query-service}

Use [!DNL Query Service] to explore and validate Experience Platform data with SQL.

**Fixes and improvements**

| Fix | Description |
| --- | --- |
| [XDM row validation error reference](/help/query-service/troubleshooting-guide.md#xdm-row-validation-errors) | Use the `INGEST-####-400` error reference to identify the XDM constraint that caused a write to fail. Follow the guidance to correct the data and retry the query. This documentation update does not change query behavior. |

{style="table-layout:auto"}

For more information, read the [Query Service overview](/help/query-service/home.md).

## Real-Time Customer Profile {#profile}

Use [!DNL Real-Time Customer Profile] to combine customer data from online and offline channels. Include data from customer relationship management systems and third parties. Build a unified view of each customer to deliver consistent, relevant experiences across channels.

**New or updated features**

| Feature | Description |
| --- | --- |
| [!DNL Real-Time Customer Profile] support for unstructured data | Use conversational and other unstructured customer data in [!DNL Real-Time Customer Profile]. Understand customer intent, personalize conversations, and activate intent in real time. |

{style="table-layout:auto"}

For more information, read the [Real-Time Customer Profile overview](/help/profile/home.md).

## Sources {#sources}

Use source connections to bring data from supported external systems into Experience Platform.

**New or updated sources**

| Source | Description |
| --- | --- |
| [Azure Event Hubs network access update](/help/sources/connectors/cloud-storage/eventhub.md) | Allowlisting the Experience Platform virtual network is deprecated. [!DNL Azure] no longer supports adding the Experience Platform subnet as a virtual network rule for new [!DNL Event Hubs] namespaces. This restriction also applies when you update the network rules of an existing namespace. If you need firewall restrictions or cannot allow public network access, contact Adobe Customer Care. The [streaming IP allowlist documentation](/help/sources/ip-address-allow-list.md#streaming) no longer lists [!DNL Azure Event Hubs]. |
| [Delta Sharing availability](/help/sources/connectors/data-sharing/delta-sharing.md) | The limited beta for the [!DNL Delta Sharing] source concluded on August 1, 2026. General availability is currently planned for 2027. The documentation no longer includes instructions for requesting beta access. |

{style="table-layout:auto"}

For more information, read the [sources overview](/help/sources/home.md).
