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

**Release date: March 2026**

New features and updates to existing features in Adobe Experience Platform:

- [Advanced data lifecycle management](#advanced-data-lifecycle-management)
- [Agent Orchestrator](#agent-orchestrator)
- [Destinations](#destinations)
- [Query Service](#query-service)
- [Real-Time Customer Profile](#profile)
- [Run and Operate](#run-and-operate)
- [Segmentation Service](#segmentation-service)
- [Sources](#sources)
  
## Advanced data lifecycle management {#advanced-data-lifecycle-management}

Experience Platform provides a suite of data hygiene capabilities that allow you to manage your stored data through programmatic deletions of consumer records and datasets. Using either the Data Lifecycle workspace in the UI or through calls to the Data Hygiene API, you can effectively manage your data stores. Use these capabilities to ensure that information is used as expected, is updated when incorrect data needs fixing, and is deleted when organizational policies deem it necessary.

**New or updated features**

| Feature | Description |
| --- | --- |
| Multi-Dataset and Profile-Only Record Delete (API only) | You can submit a single dataset ID, a comma-separated list of dataset IDs, or the literal `ALL` in `datasetId` to delete identities across one, many, or all datasets. You can also limit deletion to profile services by setting `targetServices` to `["identity","profile","ajo"]`, which leaves the datalake unchanged. See the [Record Delete Work Orders guide](../hygiene/api/workorder.md) for more details. |

{style="table-layout:auto"}

For more information, read the [advanced data lifecycle management overview](../hygiene/home.md).

## Agent Orchestrator {#agent-orchestrator}

Agent Orchestrator enables you to build and deploy AI-powered agents that can automate workflows and interact with customers across multiple channels.

**New or updated features**

| Feature | Description |
| --- | --- |
| Adobe Marketing Agent for [!DNL Microsoft 365 Copilot] | The Adobe Marketing Agent for [!DNL Microsoft 365 Copilot] is your embedded agent that brings Adobe's marketing intelligence directly into everyday tools like [!DNL Teams], [!DNL Word], [!DNL PowerPoint] and other [!DNL Microsoft 365] apps. You can use this agent to pull in trusted campaign insights from Adobe applications while you're planning campaigns, reviewing audiences or collaborating with colleagues, answer customer questions, and make data-informed decisions without leaving your [!DNL Microsoft 365] workflow. |

{style="table-layout:auto"}

For more information, see the [Agent Orchestrator documentation](https://experienceleague.adobe.com/en/docs/experience-cloud-ai/experience-cloud-ai/agents/agent-orchestrator).

## Destinations {#destinations}

[!DNL Destinations] are pre-built integrations with destination platforms that allow for the seamless activation of data from Experience Platform. You can use destinations to activate your known and unknown data for cross-channel marketing campaigns, email campaigns, targeted advertising, and many other use cases.

**New or updated destinations**

| Destination | Description |
| --- | --- |
| [Snowflake Batch](../destinations/catalog/warehouses/snowflake-batch.md) region selector | You can now find your region more easily with the new searchable dropdown, which combines search and dropdown into one control. |
| Export audience metadata to [Snowflake Batch](../destinations/catalog/warehouses/snowflake-batch.md) destinations | The files exported to this destination now include audience metadata. The new table structure applies to all new destination connections set up moving forward. The old table structure will be kept for another three months before being deprecated. |
| [!DNL Adobe Advertising Cloud DSP] connection | The new Adobe Advertising DSP connection offers the same functionality as the legacy connection plus support for additional identities. |
| External audience support for [The Trade Desk CRM](../destinations/catalog/advertising/tradedesk-emails.md), [Criteo](../destinations/catalog/advertising/criteo.md) and [Pinterest](../destinations/catalog/advertising/pinterest.md) | You can now activate audiences beyond Segmentation Service segments to The Trade Desk CRM, Criteo, and Pinterest, including custom upload audiences (imported from CSV), look-alike audiences, federated audiences, and audiences created in other Experience Platform apps such as Adobe Journey Optimizer. See the [supported audiences](../destinations/catalog/advertising/criteo.md#supported-audiences) section on each destination's catalog page for details. |
| Increased custom upload audiences limit | You can now activate up to 20 custom upload audiences per destination instance. Previously, this limit was 10. |
| [Export file now](../destinations/ui/export-file-now.md) and [ad-hoc activation API](../destinations/api/ad-hoc-activation-api.md) support for external audiences | You can now use Export file now (UI) and the ad-hoc activation API with external audiences (such as custom upload, look-alike, federated, and audiences from other Experience Platform apps) when activating to batch file-based destinations. |
| HTTP API destinations with OAuth 2 and mTLS | You can now create and authenticate HTTP API destinations that use OAuth 2 when the authentication endpoint requires mutual TLS (mTLS); token retrieval during destination setup now supports mTLS. |
| ZoomInfo Account Destination | You can now send account audiences to ZoomInfo from Real-Time Customer Data Platform (B2B). |

{style="table-layout:auto"}

**Fixes and improvements**

| Fix | Description |
| --- | --- |
| [Snowflake Streaming](../destinations/catalog/warehouses/snowflake.md) account ID validation | A regular expression validator has been added to the Account ID step. When you enter your ID, it is now validated to ensure organization ID and account ID are in the correct format (separated by a dot). |
| [TikTok](../destinations/catalog/social/tiktok.md) connector phone number hashing | Fixed an issue where a misconfiguration in the destination card meant that identities keyed off of phone numbers were not being activated to TikTok. |

{style="table-layout:auto"}

For more information, read the [Destinations overview](../destinations/home.md).

## Real-Time Customer Profile {#profile}

Adobe Experience Platform enables you to drive coordinated, consistent, and relevant experiences for your customers no matter where or when they interact with your brand. With Real-Time Customer Profile, you can see a holistic view of each individual customer that combines data from multiple channels, including online, offline, CRM, and third party data.

**New or updated features**

| Feature | Description |
| --- | --- |
| Profile events time selector | You can now set a time window on the profile events tab to view and analyze events within that range. You can set the time window to up to 30 days. By default, it shows events in the last 48 hours. |

{style="table-layout:auto"}

For more information, read the [Real-Time Customer Profile overview](../profile/home.md).

## Query Service {#query-service}

Query Service allows you to use standard SQL to query data in Adobe Experience Platform [!DNL Data Lake]. You can join any datasets from the [!DNL Data Lake] and capture the query results as a new dataset for use in reporting, Data Science Workspace, or for ingestion into Real-Time Customer Profile.

**New or updated features**

| Feature | Description |
| --- | --- |
| Data Distiller Accelerators | You can now pick an accelerator from the Accelerators tab, enter the required parameters, and run or schedule the generated SQL without writing it yourself; clone any accelerator into a custom template to edit. |

{style="table-layout:auto"}

For more information, read the [Query Service overview](../query-service/home.md).

## Run and Operate {#run-and-operate}

Inspect, troubleshoot, and optimize your Experience Platform implementations with the Run and Operate tools. Gain visibility into scheduled batch activations, identify configuration issues, and improve system reliability.

**New or updated features**

| Feature | Description |
| --- | --- |
| [Job Schedules](../run-and-operate/job-schedules.md) general availability | [!DNL Job Schedules] provides a unified view of all scheduled batch processing jobs across your data pipeline, from ingestion through destination activation. Inspect execution status, identify scheduling conflicts, and diagnose configuration issues before they impact your business operations. |
| Health Checks general availability | Poor schema and identity configurations lead to significant downstream issues, including incorrect profile creation, failed segment qualification, and inaccurate activation. <br>Health checks shift your approach from reactive troubleshooting to proactive, preventative maintenance. Health checks are always-on scans of your schemas and identities used in your sandbox and provide a summary of issues that you can use to explore and troubleshoot. |

{style="table-layout:auto"}

For more information, read the [Run and Operate overview](../run-and-operate/overview.md), [Inspect job schedules](../run-and-operate/job-schedules.md), and the [Platform UI guide](../landing/ui-guide.md).

## Segmentation Service {#segmentation}

Experience Platform allows you to create audience segments from your customer data, and allows for full lifecycle management of those audiences.

**New or updated features**

| Feature | Description |
| --- | --- |
| Ingestion source in Audience Builder | You can now see whether each attribute comes from a batch, streaming, or edge source within Audience Builder to avoid building invalid or inefficient streaming audiences. |
| Show only fields with data in Account Audience Builder | You can now filter to show only attributes that contain data when creating account audiences. |

{style="table-layout:auto"}

For more information, read the [Audiences overview](../segmentation/home.md).

## Sources {#sources}

Experience Platform provides a RESTful API and an interactive UI that lets you set up source connections for various data providers with ease. These source connections allow you to authenticate and connect to external storage systems and CRM services, set times for ingestion runs, and manage data ingestion throughput.

**New or updated sources**

| Source | Description |
| --- | --- |
| Enhanced support for Change Data Capture | You can now use Change Data Capture with the [!DNL Marketo Engage], [!DNL Microsoft Dynamics], and [!DNL Salesforce CRM] sources. |

{style="table-layout:auto"}

For more information, read the [sources overview](../sources/home.md).

<!--

| [!DNL Deltashare] | The new [!DNL Deltashare] source lets you securely bring live, shared datasets from your partners or internal lakehouse environments directly into Adobe's applications without copying or manually uploading files. You connect to a [!DNL Deltashare] endpoint, choose the tables you need, and you can then use that governed, up-to-date data alongside your existing profiles and insights, so you spend less time on data wrangling and more time activating and analyzing it in your marketing workflows. |
| [!DNL Kobie] | The new [!DNL Kobie] source connector lets you directly ingest rich loyalty data from [!DNL Kobie] into Adobe's applications, so you can activate it alongside your existing customer profiles and insights. You connect your [!DNL Kobie] environment, configure the data objects you want to bring in (such as member status, transactions, and engagement), and then you can use that up-to-date loyalty information to build audiences, personalize experiences, and measure performance without juggling separate systems. |
| [!DNL Talon.One] | The new Talon.One source lets you seamlessly bring promotion and incentive data from Talon.One into Adobe's applications, so you can use it alongside your existing customer profiles and behavioral data. You connect your Talon.One account, select the entities and events you want to ingest (such as campaigns, coupons, and redemptions), and then you can use that real-time promotion context to build smarter audiences, personalize offers, and better understand which incentives are driving performance—without managing separate, disconnected systems. |

-->

<!--

| Data Engineering Agent | The following new and updated skills are available in the Data Engineering Agent:<br><br><ul><li><strong>Data onboarding:</strong> Follow step-by-step workflows and example prompts to connect sources, check data quality, enrich data semantically, and ingest data for B2C and B2B flows, with expected outputs and troubleshooting guidance in the docs.</li><li><strong>Data quality and validation:</strong> Validate data fields and datasets using two new skills (DataField and DataSet).</li><li><strong>Data collection:</strong> Get in-context guidance for complex Data Collection configurations and use conversational insights to explore lineage, dependencies, and relationships across your data collection objects.</li></ul> |

| [Snowflake Streaming](../destinations/catalog/warehouses/snowflake.md) multiregion support | The Snowflake Streaming connector is now available to customers beyond the US VA7 region. Use the region dropdown selector to select which Snowflake region your account is in. The documentation has been updated with the expected data structure for Snowflake streaming tables. |
| Audience filtering in activation workflow | You can now find and filter audiences in the **[!UICONTROL Select audiences]** step with the same experience as the Audiences page; for example, you can filter on audience origin to easily find the audience you are looking for. |

-->