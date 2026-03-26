---
title: Adobe Experience Platform Release Notes March 2026
description: The March 2026 release notes for Adobe Experience Platform.
exl-id: 66b948fd-caa0-4e5e-83dd-3b15b77c09fa
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

- [Advanced data lifecycle management](#advanced-data-lifecycle-management)
- [Agent Orchestrator](#agent-orchestrator)
- [Datastreams](#datastreams)
- [Destinations](#destinations)
- [Experience Data Model (XDM)](#xdm)
- [Real-Time Customer Profile](#real-time-customer-profile)
- [Segmentation Service](#segmentation-service)
- [Sources](#sources)

## Advanced data lifecycle management {#advanced-data-lifecycle-management}

Experience Platform provides a suite of data hygiene capabilities to help you manage your stored data through programmatic deletions of consumer records and datasets. Using either the Data Lifecycle workspace in the UI or calls to the Data Hygiene API, you can effectively manage your data stores. Use these capabilities to ensure that information is used as expected, is updated when incorrect data needs fixing, and is deleted when organizational policies deem it necessary.

| Feature | Description |
| --- | --- |
| Multi-dataset record delete (API only) | Delete identities across one, multiple, or all datasets in a single API request, simplifying data hygiene workflows. You can also restrict deletion to profile services only, leaving data lake records unchanged. See the [Record delete work orders guide](../../hygiene/api/workorder.md) for more details. |

{style="table-layout:auto"}

For more information, read the [advanced data lifecycle management overview](../../hygiene/home.md).

## Agent Orchestrator {#agent-orchestrator}

Use Agent Orchestrator to build and deploy AI-powered agents that automate workflows and interact with customers across multiple channels.

**New or updated features**

| Feature | Description |
| --- | --- |
| [Adobe Marketing Agent for [!DNL Microsoft 365 Copilot]](https://experienceleague.adobe.com/en/docs/experience-cloud-ai/experience-cloud-ai/agents/ama-ms) | The Adobe Marketing Agent for [!DNL Microsoft 365 Copilot] is your embedded agent that brings Adobe's marketing intelligence directly into everyday tools like [!DNL Teams], [!DNL Word], [!DNL PowerPoint] and other [!DNL Microsoft 365] apps. You can use this agent to pull in trusted campaign insights from Adobe applications while you're planning campaigns, reviewing audiences, collaborating with colleagues to answer customer questions, and to make data-informed decisions without leaving your [!DNL Microsoft 365] workflow. |

{style="table-layout:auto"}

For more information, read the [Agent Orchestrator documentation](https://experienceleague.adobe.com/en/docs/experience-cloud-ai/experience-cloud-ai/agents/agent-orchestrator).

## Datastreams {#datastreams}

A datastream represents the server-side configuration when implementing the Adobe Experience Platform Web and Mobile SDKs and the Adobe Experience Platform Edge Network Server API. The datastream configuration command in the SDKs handles all the services that a client interacts with.

| Feature | Description |
| --- | --- |
| Dynamic datastream configurations general availability | Dynamic datastream configurations are now generally available. With dynamic datastream configurations, you can define user-configurable sets of rules for each service enabled for your datastream, which dictate what Experience Cloud solution should receive each type of data. See the [dynamic datastream configurations guide](../../datastreams/configure-dynamic-datastream.md) for more information. |

{style="table-layout:auto"}

For more information, read the [datastreams overview](../../datastreams/overview.md).

## Destinations {#destinations}

[!DNL Destinations] are pre-built integrations with destination platforms. Use destinations to activate your known and unknown data for cross-channel marketing campaigns, email campaigns, targeted advertising, and many other use cases.

**New or updated destinations**

| Destination | Description |
| --- | --- |
| [Snowflake Batch](../../destinations/catalog/warehouses/snowflake-batch.md) region selector | You can now find your region more easily with the new searchable dropdown, which combines search and dropdown into one control. This update is being rolled out through the end of March. |
| New table structure for [Snowflake Batch](../../destinations/catalog/warehouses/snowflake-batch.md) destinations | Tables shared into your Snowflake account now have a new structure which includes separate audience name and audience origin columns. The new table structure applies to all new destination connections set up moving forward. For any new connections that you set up, both table structures are created: the new structure is prefixed with V2, and the old structure is kept until the end of June 2026, after which it will be deprecated. Read more in the [Exported data](../../destinations/catalog/warehouses/snowflake-batch.md#exported-data) section of the Snowflake Batch documentation. This update is being rolled out through the end of March. |
| [Adobe Advertising DSP](../../destinations/catalog/advertising/adobe-advertising-dsp-connection.md) connection | The new Adobe Advertising DSP connection offers the same functionality as the legacy connection plus support for additional identities. With the new connector, you can also export cookie-based identities to Adobe Advertising DSP. |
| [FreeWheel](../../destinations/catalog/advertising/freewheel.md) connection | Send [!DNL Real-Time CDP] audiences to FreeWheel as daily batch files so you can target them in FreeWheel deals and campaigns across CTV, video, and display. Contact your Adobe account team for access. |
| External audience support for [The Trade Desk CRM](../../destinations/catalog/advertising/tradedesk-emails.md) and [Pinterest](../../destinations/catalog/advertising/pinterest.md) | You can now activate audiences from origins beyond Segmentation Service to The Trade Desk CRM, Criteo, and Pinterest, including custom upload audiences (imported from CSV), look-alike audiences, federated audiences, and audiences created in other Experience Platform apps such as [!DNL Adobe Journey Optimizer]. This update is being rolled out through the end of March. See the [supported audiences](../../destinations/catalog/advertising/criteo.md#supported-audiences) section on each destination's catalog page for details. |
| Increased limit for custom upload audiences | You can now activate up to 20 custom upload audiences per destination instance. Previously, this limit was 10. See the [destinations guardrails](../../destinations/guardrails.md#batch-file-based-activation) for details. |
| [Export file now](../../destinations/ui/export-file-now.md) and [ad-hoc activation API](../../destinations/api/ad-hoc-activation-api.md) support for external audiences | You can now use Export file now (UI) and the ad-hoc activation API with external audiences (such as custom upload, look-alike, federated, and audiences from other Experience Platform apps) when activating to batch file-based destinations. This update is being rolled out through the end of March. |
| [HTTP API](../../destinations/catalog/streaming/http-destination.md) destinations with OAuth 2 and mTLS | You can now create and authenticate HTTP API destinations that use OAuth 2 when the authentication endpoint requires mutual TLS (mTLS); token retrieval during destination setup now supports mTLS. This update is being rolled out through the end of March. |

{style="table-layout:auto"}

**Fixes and improvements**

| Fix | Description |
| --- | --- |
| [TikTok](../../destinations/catalog/social/tiktok.md) connector phone number hashing | Fixed an issue where a misconfiguration in the destination card meant that identities keyed off of phone numbers were not being activated to TikTok. To benefit from this fix, set up a new activation flow, or remove the phone number mapping from your existing flow, save it, and add it back again. |
| [Snowflake Streaming](../../destinations/catalog/warehouses/snowflake.md) and [Snowflake Batch](../../destinations/catalog/warehouses/snowflake-batch.md) account ID validation | A regular expression validator has been added to the Account ID step. When you enter your ID, it is now validated to ensure organization ID and account ID are in the correct format (separated by a dot). This update is being rolled out through the end of March. |

{style="table-layout:auto"}

For more information, read the [Destinations overview](../../destinations/home.md).

## Experience Data Model (XDM) {#xdm}

XDM is an open-source specification that provides common structures and definitions (schemas) for data that is brought into Experience Platform. By adhering to XDM standards, all customer experience data can be incorporated into a common representation to deliver insights in a faster, more integrated way. You can gain valuable insights from customer actions, define customer audiences through segments, and use customer attributes for personalization purposes.

| Feature | Description |
| --- | --- |
| XDM Entity Actions and Delete Support | Access actions for schemas, classes, field groups, and data types directly from inline table menus and detail page header menus. If you have the required permissions, you can also delete your organization's entities when they are not used by datasets and not enabled for Profile. See the [XDM UI guide](../../xdm/ui/explore.md) for more details. |

For more information, read the [XDM overview](../../xdm/home.md).

## Real-Time Customer Profile {#real-time-customer-profile}

Real-Time Customer Profile gives you a complete view of each individual customer by combining data from multiple channels, including online, offline, CRM, and third-party data. Use Profile to consolidate your customer data into a unified view offering an actionable, timestamped account of every customer interaction.

**New or updated features**

| Feature | Description |
| ------- | ----------- |
| Events | You can now set the lookback period of events when browsing your profiles. This lets you see the events that the profile is associated with for the specified time period. For more information, read the [Profile UI guide](../../profile/ui/user-guide.md#events). |

{style="table-layout:auto"}

For more information, read the [[!DNL Real-Time Customer Profile] overview](../../profile/home.md).

## Run and Operate {#run-and-operate}

Inspect, troubleshoot, and optimize your Experience Platform implementations with the Run and Operate tools. Gain visibility into scheduled batch activations, identify configuration issues, and improve system reliability.

**New or updated features**

| Feature | Description |
| --- | --- |
| [Job Schedules](../../run-and-operate/job-schedules.md) general availability | [!DNL Job Schedules] provides a unified view of all scheduled batch processing jobs across your data pipeline, from ingestion through destination activation. Inspect execution status, identify scheduling conflicts, and diagnose configuration issues before they impact your business operations. |
| [Health Checks](../../run-and-operate/health-checks.md) general availability | Poor schema and identity configurations lead to significant downstream issues, including incorrect profile creation, failed segment qualification, and inaccurate activation. <br>Health checks shift your approach from reactive troubleshooting to proactive, preventative maintenance. Health checks are always-on scans of your schemas and identities used in your sandbox and provide a summary of issues that you can use to explore and troubleshoot. |

{style="table-layout:auto"}

For more information, read the [Run and Operate overview](../../run-and-operate/overview.md), [Inspect job schedules](../../run-and-operate/job-schedules.md), and the [Platform UI guide](../../landing/ui-guide.md). 

## Segmentation Service {#segmentation-service}

[!DNL Segmentation Service] defines a particular subset of profiles by describing the criteria that distinguishes a marketable group of people within your customer base. Audiences can be based on record data (such as demographic information) or time series events representing customer interactions with your brand.

**New or updated features**

| Feature | Description |
| ------- | ----------- |
| Ingestion type | You can now view the ingestion type of your attributes. This lets you know the origin of your data, letting you create better audiences. For more information about this feature, read the [Segment Builder guide](../../segmentation/ui/segment-builder.md). |
| Summary data | You can now view the summary data for your attributes for account and people-based audiences. For more information about this feature in account audiences, read the account [Audience Builder guide](../../rtcdp/segmentation/audience-builder.md). For more information about this feature in people-based audiences, read the [Segment Builder guide](../../segmentation/ui/segment-builder.md). |

For more information, read the [[!DNL Segmentation Service] overview](../../segmentation/home.md).

## Sources {#sources}

Experience Platform provides a RESTful API and an interactive UI that lets you set up source connections for various data providers with ease. Use these source connections to authenticate and connect to external storage systems and CRM services, set times for ingestion runs, and manage data ingestion throughput.

**New or updated sources**

| Source | Description |
| --- | --- |
| New IP addresses to allowlist | New IP addresses for GBR9: United Kingdom have been added to the list of addresses you must allowlist to ensure successful batch source connections to Experience Platform on Azure. View the list in the [IP address allowlist guide](../../sources/ip-address-allow-list.md#gbr9-united-kingdom) for more information. |
| Enhanced support for Change Data Capture | You can now use Change Data Capture with the [!DNL Marketo Engage], [!DNL Microsoft Dynamics], and [!DNL Salesforce CRM] sources. |
| Improved authentication guide for [[!DNL Google BigQuery]](../../sources/connectors/databases/bigquery.md) | The authentication guide for the [!DNL Google BigQuery] source has been expanded with the following information: <ul><li>The necessary scopes for the refresh token.</li><li>The IAM roles required for the [!DNL Google] identity.</li><li>Additional guidance on using `largeResultsDataSetId`.</li></ul> |

{style="table-layout:auto"}

For more information, read the [sources overview](../../sources/home.md).
