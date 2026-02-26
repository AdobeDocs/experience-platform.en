---
title: Adobe Experience Platform Release Notes October 2025
description: The October 2025 release notes for Adobe Experience Platform.
exl-id: 93feff2b-d998-41f1-8d93-332238a1d88d
---
# Adobe Experience Platform release notes

>[!TIP]
>
>Refer to the following documentation for release notes of other Adobe Experience Platform applications:
>
>- [Adobe Journey Optimizer](https://experienceleague.adobe.com/en/docs/journey-optimizer/using/whats-new/release-notes)
>- [Adobe Journey Optimizer B2B](https://experienceleague.adobe.com/en/docs/journey-optimizer-b2b/user/release-notes)
>- [Customer Journey Analytics](https://experienceleague.adobe.com/en/docs/analytics-platform/using/releases/pre-release-notes)
>- [Federated Audience Composition](https://experienceleague.adobe.com/en/docs/federated-audience-composition/using/e-release-notes)
>- [Real-Time CDP Collaboration](https://experienceleague.adobe.com/en/docs/real-time-cdp-collaboration/using/latest)

**Release date: October 22, 2025**

New features and updates to existing features in Adobe Experience Platform:

- [Agent Orchestrator](#agent-orchestrator)
- [Alerts](#alerts)
- [Destinations](#destinations)
- [Real-Time CDP B2B Edition](#b2b)
- [Sources](#sources)

## Agent Orchestrator {#agent-orchestrator}

Adobe Experience Platform Agent Orchestrator is the new agentic layer in Adobe Experience Platform.

**Updated features**

| Feature | Description |
| ------- | ----------- |
| Audience Agent | The Audience Agent now supports account-based audiences for conversational audience exploration and detecting duplicate audiences. For more information, read the [Audience Agent documentation](https://experienceleague.adobe.com/en/docs/experience-cloud-ai/experience-cloud-ai/agents/audience). | 

For more information on agents, read the [Agent Orchestrator documentation](https://experienceleague.adobe.com/en/docs/experience-cloud-ai/experience-cloud-ai/home).

## Alerts {#alerts}

Experience Platform allows you to subscribe to event-based alerts for various Experience Platform activities. You can subscribe to different alert rules through the [!UICONTROL Alerts] tab in the Experience Platform user interface, and can choose to receive alert messages within the UI itself or through email notifications.

**New or updated features**

| Feature | Description |
| --- | --- |
| Activation failure rate alert | A new alert has been added for destinations: **Activation failure rate exceeds threshold**. This alert notifies you when the number of failed records during data activation has exceeded the allowed threshold, enabling you to respond quickly to activation issues. Read the documentation on [standard alerts rules](../../observability/alerts/rules.md) for more information. |

{style="table-layout:auto"}

For more information about alerts, read the [[!DNL Observability Insights] overview](../../observability/home.md).

## Destinations {#destinations}

[!DNL Destinations] are pre-built integrations with destination platforms that allow for the seamless activation of data from Experience Platform. You can use destinations to activate your known and unknown data for cross-channel marketing campaigns, email campaigns, targeted advertising, and many other use cases.

**New or updated destinations**

| Destination | Description |
| --- | --- |
| [!DNL Adform] | Use this destination to send Adobe Real-Time CDP audiences to [!DNL Adform] for activation based on the Experience Cloud ID (ECID) and [!DNL Adform]'s ID Fusion. [!DNL Adform]'s ID Fusion is an ID resolution service that enables you to activate your first party audiences based on the Experience Cloud ID (ECID). Read the [[!DNL Adform] documentation](../../destinations/catalog/advertising/adform.md) for more information |
| [!DNL Amazon Ads] | Additional personal identifier support has been added. This includes fields such as `firstName`, `lastName`, `street`, `city`, `state`, `zip`, and `country`. Mapping these fields as target identities can improve audience match rates. Read the [[!DNL Amazon Ads] documentation](../../destinations/catalog/advertising/amazon-ads.md) for more information. |
| [!DNL Snowflake Batch] (Limited availability) | Create a live [!DNL Snowflake] data share to receive daily audience updates directly as shared tables into your account. This integration is currently available for customer organizations provisioned in the VA7 region. Read the [[!DNL Snowflake Batch] documentation](../../destinations/catalog/warehouses/snowflake-batch.md) for more information. |
| [!DNL Snowflake Streaming] (Limited availability) | Create a live [!DNL Snowflake] data share to receive streaming audience updates directly as shared tables into your account. This integration is currently available for customer organizations provisioned in the VA7 region. Read the [[!DNL Snowflake Streaming] documentation](../../destinations/catalog/warehouses/snowflake.md) for more information. |

{style="table-layout:auto"}

**New or updated functionality**

| Feature | Description |
| --- | --- |
| [Several new destinations that support audience-level monitoring](../../dataflows/ui/monitor-destinations.md#audience-level-view) | The following destinations now support audience-level monitoring: <ul><li>[!DNL Airship Tags]</li><li>(API) [!DNL Salesforce Marketing Cloud]</li><li>[!DNL Marketo Engage]</li><li>[!DNL Microsoft Bing]</li><li>(V1) [!DNL Pega CDH Realtime Audience]</li><li>(V2) [!DNL Pega CDH Realtime Audience]</li><li>[!DNL Salesforce Marketing Cloud] Account Engagement</li><li>[!DNL The Trade Desk]</li></ul> |
| Dataset export guardrails fix | A fix has been implemented to the dataset export guardrails. Previously, some datasets that included a timestamp column but were _not_ based on the XDM Experience Events schema were incorrectly treated as Experience Events datasets, limiting exports to a 365-day lookback window. The documented 365-day lookback guardrail now applies exclusively to Experience Events datasets. Datasets using any schema other than the XDM Experience Events schema are now governed by the 10 billion records guardrail. Some customers may see increased export numbers for datasets which erroneously fell under the 365-day lookback window. This enables you to export datasets for predictive workflows that have a long lookback window. For more information, read the [dataset export guardrails](../../destinations/guardrails.md#dataset-exports). |
| Enhanced audience-level reporting for enterprise destinations | After this release, customers will see more accurate audience reporting numbers that include only audiences relevant for the selected destination. This monitoring adjustment ensures reporting includes only audiences mapped on the dataflow, providing clearer insights into actual data activation. This does not affect the amount of data being activated—it is purely a monitoring enhancement to improve reporting accuracy. |
| UI greyed-out dataflows due to access labels | To address the issue where some users were seeing blank pages because destination dataflows they did not have access to were being completely hidden, the UI now displays those restricted dataflows in a greyed-out state instead of omitting them entirely. For more details, read the documentation on [using access labels to manage user access to destination dataflows](../../access-control/abac/apply-access-labels-destinations.md#important-callouts-and-items-to-know). |

{style="table-layout:auto"}

For more information, read the [Destinations overview](../../destinations/home.md).

## Real-Time CDP B2B Edition {#b2b}

Real-Time CDP B2B Edition provides comprehensive B2B customer data management capabilities, enabling organizations to build unified customer profiles, create sophisticated B2B audiences, and activate data across various marketing channels.

**New or updated functionality**

| Feature | Description |
| --- | --- |
| Deprecation of B2B support for non-standard relationships between B2B entities | Starting January 2026, Real-Time CDP B2B Edition will no longer support **non-standard** relationships between B2B entities. Therefore, you are encouraged to update your B2B entities to use the standard relationships outlined in the [B2B namespaces and schemas guide](../../rtcdp/schemas/b2b.md).  |

{style="table-layout:auto"}

## Sources {#sources}

Experience Platform provides a RESTful API and an interactive UI that lets you set up source connections for various data providers with ease. These source connections allow you to authenticate and connect to external storage systems and CRM services, set times for ingestion runs, and manage data ingestion throughput.

**New or updated features**

| Feature | Description |
| --- | --- |
| Dataset creation change for Adobe Analytics source | As part of the dataflow creation process between Adobe Analytics and Experience Platform, a dataset is created via Catalog Service. This dataset serves as a container for the data to land in. Currently, this process involves a DataSource ID that is pulled from the Analytics report suite, sent to Catalog Service, and then is associated with the newly created dataset. After the change, the option to provide the DataSource ID will no longer be available during dataset creation. Therefore, new datasets created by the Analytics source will no longer have a DataSource ID associated with it in Catalog Service. This change applies only to the metadata and does not change the storage of data in the dataset in any way. However, it is important to know that the DataSource ID provided by Catalog Service will no longer be available in newly created datasets for Adobe Analytics. Read the [Adobe Analytics source documentation](../../sources/connectors/adobe-applications/analytics.md) for more information on the Adobe Analytics source connector. |
| General Availability of [!DNL Google Ads] source (API-only) | The [API version of the [!DNL Google Ads]](../../sources/tutorials/api/create/advertising/ads.md) source is now in General Availability. The API documentation has been updated to reflect that the latest version is now `v21`, and Experience Platform supports all versions v19 and above. [The UI version](../../sources/tutorials/ui/create/advertising/ads.md) remains in beta and only supports one-time ingestion. To use incremental data ingestion, use the API route. |
| [!DNL Azure Event Hubs] virtual network support | Adobe now explicitly supports virtual network connections to [[!DNL Azure Event Hubs]](../../sources/connectors/cloud-storage/eventhub.md), enabling data transfer over private networks rather than public networks. Customers can allowlist the Experience Platform VNet to route Event Hubs traffic privately through the Azure private backbone, providing enhanced security and compliance for data ingestion workflows. |

{style="table-layout:auto"}

For more information, read the [sources overview](../../sources/home.md).

<!--
| Source | Description |
| --- | --- |
| [!BADGE Beta]{type=Informative} [!DNL Talon.one] sources for loyalty data | Use the [[!DNL Talon.One] sources](../../sources/connectors/loyalty/talon-one.md) to ingest batch and streaming loyalty data into Experience Platform. The connector supports streaming of profile data, transaction data, and loyalty data including points earned, points redeemed, points expired, and tier data. For more information, read the [!DNL Talon.One] [batch](../../sources/tutorials/ui/create/loyalty/talon-one-batch.md) and [streaming](../../sources/tutorials/ui/create/loyalty/talon-one-streaming.md) documentation. |
-->
