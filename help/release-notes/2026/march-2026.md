---
title: Adobe Experience Platform Release Notes March 2026
description: The March 2026 release notes for Adobe Experience Platform.
hide: true
hidefromtoc: true
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

**Release date: March 24, 2026**

New features and updates to existing features in Adobe Experience Platform:

- [Agent Orchestrator](#agent-orchestrator)
- [Destinations](#destinations)
- [Sources](#sources)

## Agent Orchestrator {#agent-orchestrator}

Agent Orchestrator enables you to build and deploy AI-powered agents that can automate workflows and interact with customers across multiple channels.

**New or updated features**

| Feature | Description |
| --- | --- |
| [Adobe Marketing Agent for [!DNL Microsoft 365 Copilot]](https://experienceleague.adobe.com/en/docs/experience-cloud-ai/experience-cloud-ai/agents/ama-ms) | The Adobe Marketing Agent for [!DNL Microsoft 365 Copilot] is your embedded agent that brings Adobe's marketing intelligence directly into everyday tools like [!DNL Teams], [!DNL Word], [!DNL PowerPoint] and other [!DNL Microsoft 365] apps. You can use this agent to pull in trusted campaign insights from Adobe applications while you're planning campaigns, reviewing audiences or collaborating with colleagues, answer customer questions, and make data-informed decisions without leaving your [!DNL Microsoft 365] workflow. |

{style="table-layout:auto"}

For more information, see the [Agent Orchestrator documentation](https://experienceleague.adobe.com/en/docs/experience-cloud-ai/experience-cloud-ai/agents/agent-orchestrator).

## Destinations {#destinations}

[!DNL Destinations] are pre-built integrations with destination platforms that allow for the seamless activation of data from Experience Platform. You can use destinations to activate your known and unknown data for cross-channel marketing campaigns, email campaigns, targeted advertising, and many other use cases.

**New or updated destinations**

| Destination | Description |
| --- | --- |
| [Snowflake Batch](../../destinations/catalog/warehouses/snowflake-batch.md) region selector | You can now find your region more easily with the new searchable dropdown, which combines search and dropdown into one control. |
| New table structure for [Snowflake Batch](../../destinations/catalog/warehouses/snowflake-batch.md) destinations | Tables shared into your Snowflake account now have a new structure which includes separate audience name and audience origin columns. The new table structure applies to all new destination connections set up moving forward. For any new connections that you set up, an old format and new format table are created. The old table structure will be kept for another three months before being deprecated. Read more in the [Exported data](../../destinations/catalog/warehouses/snowflake-batch.md#exported-data) section of the Snowflake Batch documentation. |
| [Adobe Advertising DSP](../../destinations/catalog/advertising/adobe-advertising-cloud-connection.md) connection | The new Adobe Advertising DSP connection offers the same functionality as the legacy connection plus support for additional identities. With the new connector, you can also export cookie-based identities to Adobe Advertising DSP. |
| [FreeWheel](../../destinations/catalog/advertising/freewheel.md) connection | Send [!DNL Real-Time CDP] audiences to FreeWheel as daily batch files so you can target them in FreeWheel deals and campaigns across CTV, video, and display. Contact your Adobe account team for access. |
| External audience support for [The Trade Desk CRM](../../destinations/catalog/advertising/tradedesk-emails.md), [Criteo](../../destinations/catalog/advertising/criteo.md) and [Pinterest](../../destinations/catalog/advertising/pinterest.md) | You can now activate audiences from origins beyond Segmentation Service to The Trade Desk CRM, Criteo, and Pinterest, including custom upload audiences (imported from CSV), look-alike audiences, federated audiences, and audiences created in other Experience Platform apps such as [!DNL Adobe Journey Optimizer]. This update is being rolled out through the end of March. See the [supported audiences](../../destinations/catalog/advertising/criteo.md#supported-audiences) section on each destination's catalog page for details. |
| Increased custom upload audiences limit | You can now activate up to 20 custom upload audiences per destination instance. Previously, this limit was 10. See the [destinations guardrails](../../destinations/guardrails.md#batch-file-based-activation) for details. |
| [Export file now](../../destinations/ui/export-file-now.md) and [ad-hoc activation API](../../destinations/api/ad-hoc-activation-api.md) support for external audiences | You can now use Export file now (UI) and the ad-hoc activation API with external audiences (such as custom upload, look-alike, federated, and audiences from other Experience Platform apps) when activating to batch file-based destinations. This update is being rolled out through the end of March. |
| [HTTP API](../../destinations/catalog/streaming/http-destination.md) destinations with OAuth 2 and mTLS | You can now create and authenticate HTTP API destinations that use OAuth 2 when the authentication endpoint requires mutual TLS (mTLS); token retrieval during destination setup now supports mTLS. |

{style="table-layout:auto"}

**Fixes and improvements**

| Fix | Description |
| --- | --- |
| [Snowflake Streaming](../../destinations/catalog/warehouses/snowflake.md) and [Snowflake Batch](../../destinations/catalog/warehouses/snowflake-batch.md) account ID validation | A regular expression validator has been added to the Account ID step. When you enter your ID, it is now validated to ensure organization ID and account ID are in the correct format (separated by a dot). |
| [TikTok](../../destinations/catalog/social/tiktok.md) connector phone number hashing | Fixed an issue where a misconfiguration in the destination card meant that identities keyed off of phone numbers were not being activated to TikTok. To benefit from this fix, set up a new activation flow, or remove the phone number mapping from your existing flow, save it, and add it back again. |

{style="table-layout:auto"}

For more information, read the [Destinations overview](../../destinations/home.md).

## Sources

Experience Platform provides a RESTful API and an interactive UI that lets you set up source connections for various data providers with ease. These source connections allow you to authenticate and connect to external storage systems and CRM services, set times for ingestion runs, and manage data ingestion throughput.

**New or updated sources**

| Source | Description |
| --- | --- |
| [!DNL Talon.One] | You can now connect Experience Platform to [!DNL Talon.One] using the new [!DNL Talon.One] [batch](../../sources/tutorials/ui/create/loyalty/talon-one-batch.md) and [streaming](../../sources/tutorials/ui/create/loyalty/talon-one-streaming.md) sources. Use the new sources to ingest loyalty profile data as well as transaction and loyalty activity events to Experience Platform. |
| New IP addresses to allowlist | New IP addresses for GBR9: United Kingdom have been added to the list of addresses you must allowlist to ensure successful batch source connections to Experience Platform on Azure. View the list in the [IP address allowlist guide](../../sources/ip-address-allow-list.md#gbr9-united-kingdom) for more information. |
| Enhanced support for Change Data Capture | You can now use Change Data Capture with the [!DNL Marketo Engage], [!DNL Microsoft Dynamics], and [!DNL Salesforce CRM] sources. |
| Improved authentication guide for [[!DNL Google BigQuery]](../../sources/connectors/databases/bigquery.md) | The authentication guide for the [!DNL Google BigQuery] source has been expanded with the following information: <ul><li>The necessary scopes for the refresh token.</li><li>The IAM roles required for the [!DNL Google] identity.</li><li>Additional guidance on using `largeResultsDataSetId`.</li></ul> |

{style="table-layout:auto"}

For more information, read the [sources overview](../../sources/home.md).

