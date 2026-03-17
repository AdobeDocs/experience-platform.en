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

- [Agent Orchestrator](#agent-orchestrator)
- [Audiences](#audiences)
- [Destinations](#destinations)
- [Experience Data Model (XDM)](#xdm)
- [Profile](#profile)
- [Query Service](#query-service)
- [Real-Time CDP Collaboration](#collaboration)
- [Run and Operate](#run-and-operate)
- [Sources](#sources)

## Agent Orchestrator {#agent-orchestrator}

Agent Orchestrator enables you to build and deploy AI-powered agents that can automate workflows and interact with customers across multiple channels.

**New or updated features**

| Feature | Description |
| --- | --- |
| Adobe Marketing Agent for Microsoft 365 Copilot | You can now use this agent inside Microsoft 365 Copilot to get Experience Platform Operational Insights, Customer Journey Analytics Data Insights, Audience, Journey, Workflow Insights, and Adobe Experience Manager Asset Discovery and Content Optimization, without leaving your Microsoft 365 workflow. |
| Data Onboarding Agent | You can now follow step-by-step workflows and example prompts to connect sources, check data quality, enrich data semantically, and ingest data for B2C and B2B flows, with expected outputs and troubleshooting guidance in the docs. |
| Data Validation Agent | You can now validate data fields and datasets using two new skills (DataField and DataSet) in the Data Engineering Agent. |
| Field Discovery Agent | You can now learn what the Field Discovery Agent does, how to use it, recent improvements, and FAQs on retrieval and ranking. |
| Data Collection Agent | You can now get in-context guidance for complex Data Collection configurations and use conversational insights to explore lineage, dependencies, and relationships across your data collection objects. |

{style="table-layout:auto"}

For more information, see the [Agent Orchestrator documentation](https://experienceleague.adobe.com/en/docs/experience-cloud-ai/experience-cloud-ai/agents/agent-orchestrator).

## Audiences {#audiences}

Experience Platform allows you to create audience segments from your customer data, and allows for full lifecycle management of those audiences.

**New or updated features**

| Feature | Description |
| --- | --- |
| Ingestion source in Audience Builder | You can now see whether each attribute is fed by batch, streaming/edge, or no ingestion so you can avoid building invalid or inefficient streaming segments. |
| Show only fields with data in Account Audience Builder | You can now filter to show only attributes that contain data and use auto-suggest on the Audience Canvas when building account audiences. |

{style="table-layout:auto"}

For more information, read the [Audiences overview](../segmentation/home.md).

## Destinations {#destinations}

[!DNL Destinations] are pre-built integrations with destination platforms that allow for the seamless activation of data from Experience Platform. You can use destinations to activate your known and unknown data for cross-channel marketing campaigns, email campaigns, targeted advertising, and many other use cases.

**New or updated destinations**

| Destination | Description |
| --- | --- |
| [Snowflake Streaming](../destinations/catalog/warehouses/snowflake.md) multiregion support | The Snowflake Streaming connector is now available to customers beyond the US VA7 region. Use the region dropdown selector to select which Snowflake region your account is in. The documentation has been updated with the expected data structure for Snowflake streaming tables. |
| [Snowflake Streaming](../destinations/catalog/warehouses/snowflake.md) and [Snowflake Batch](../destinations/catalog/warehouses/snowflake-batch.md) region selector | You can now find your region more easily with the new searchable dropdown, which combines search and dropdown into one control. |
| Export audience metadata to [Snowflake Batch](../destinations/catalog/warehouses/snowflake-batch.md) destinations | The files exported to this destination now include audience metadata. The new table structure applies to all new destination connections set up moving forward. The old table structure will be kept for another three months before being deprecated. |
| [!DNL Adobe Advertising Cloud DSP] connection | The new Adobe Advertising DSP connection offers the same functionality as the legacy connection plus support for additional identities. |
| External audience support for [The Trade Desk CRM](../destinations/catalog/advertising/tradedesk-emails.md), [Criteo](../destinations/catalog/advertising/criteo.md) and [Pinterest](../destinations/catalog/advertising/pinterest.md) | You can now activate audiences beyond Segmentation Service segments to The Trade Desk CRM, Criteo, and Pinterest, including custom upload audiences (imported from CSV), look-alike audiences, federated audiences, and audiences created in other Experience Platform apps such as Adobe Journey Optimizer. See the [supported audiences](../destinations/catalog/advertising/criteo.md#supported-audiences) section on each destination's catalog page for details. |
| Audience filtering in activation workflow | You can now find and filter audiences in the **[!UICONTROL Select audiences]** step with the same experience as the Audiences page; for example, you can filter on audience origin to easily find the audience you are looking for. |
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

## Experience Data Model (XDM) {#xdm}

XDM is an open-source specification that provides common structures and definitions (schemas) for data that is brought into Experience Platform. By adhering to XDM standards, all customer experience data can be incorporated into a common representation to deliver insights in a faster, more integrated way. You can gain valuable insights from customer actions, define customer audiences through segments, and use customer attributes for personalization purposes.

**New or updated features**

| Feature | Description |
| ------- | ----------- |
| Schema Inventory Organization and Search | You can now search, filter, tag, and organize schemas with new columns, filters, and inline actions to find and manage them faster. |
| Restricted Editing for Schemas with Datasets | You can add new fields or deprecate existing ones on schemas that have datasets; breaking changes (rename/delete fields, change types, modify identity descriptors, and similar) are blocked once a dataset exists. |

{style="table-layout:auto"}

For more information, read the [[!DNL XDM] overview](../xdm/home.md).

## Profile {#profile}

Adobe Experience Platform enables you to drive coordinated, consistent, and relevant experiences for your customers no matter where or when they interact with your brand. With Real-Time Customer Profile, you can see a holistic view of each individual customer that combines data from multiple channels, including online, offline, CRM, and third party data.

**New or updated features**

| Feature | Description |
| --- | --- |
| Profile graph view | You can now switch to Graph View on the profile detail page to explore profile data as a hierarchy (profile → field groups → properties); search, select nodes, and zoom in or out. |
| Profile events time selector | You can now set a time window (default 48 hours, up to 30 days) on the profile events tab to view and analyze events in that range. |

{style="table-layout:auto"}

For more information, read the [Real-Time Customer Profile overview](../profile/home.md).

## Query Service {#query-service}

Query Service allows you to use standard SQL to query data in Adobe Experience Platform [!DNL Data Lake]. You can join any datasets from the [!DNL Data Lake] and capture the query results as a new dataset for use in reporting, Data Science Workspace, or for ingestion into Real-Time Customer Profile.

**New or updated features**

| Feature | Description |
| --- | --- |
| Distiller Accelerators | You can now pick an accelerator from the Accelerators tab, enter the required parameters, and run or schedule the generated SQL without writing it yourself; clone any accelerator into a custom template to edit. |
| Goodness of Query best practices | You can now use the new best practices guide to write efficient, high-performing audience definitions and queries. |

{style="table-layout:auto"}

For more information, read the [Query Service overview](../query-service/home.md).

## Real-Time CDP Collaboration {#collaboration}

Real-Time CDP Collaboration allows you to discover, activate, and measure high-value audiences without relying on third-party cookies, all while maintaining strict data privacy controls.

**New or updated features**

| Feature | Description |
| --- | --- |
| Measurement general availability | You can now, as a publisher or advertiser, enter campaign IDs and conversion data, create self-serve reports (Campaign Summary, Attribution, Lift), and work with clearer role separation. Measurement is now generally available. |
| Measurement lifecycle management | You can now edit or delete conversion events and edit measurement modules from the Measurement UI. |
| Amazon Marketing Cloud platform connection updates | You can now create measurement reports with Amazon Marketing Cloud data and understand what the reports show and how they differ from other report types. |
| Self-service audience sourcing via [!DNL Snowflake] | You can now bring first-party audience segments into Collaboration via [!DNL Snowflake] Secure Data Share without engineering support. |
| Self-service audience sourcing via Google Cloud Storage | You can now bring first-party audience segments into Collaboration via Google Cloud Storage without engineering support. |
| Demdex ID (Experience Cloud ID) Match Key | You can now use Demdex ID (Experience Cloud ID) as a match key when collaborating on audiences. |

{style="table-layout:auto"}

For more information, read the [Real-Time CDP Collaboration documentation](https://experienceleague.adobe.com/en/docs/real-time-cdp-collaboration/using/home).

## Run and Operate {#run-and-operate}

Inspect, troubleshoot, and optimize your Experience Platform implementations with the Run and Operate tools. Gain visibility into scheduled batch activations, identify configuration issues, and improve system reliability.

**New or updated features**

| Feature | Description |
| --- | --- |
| [Job Schedules](../run-and-operate/job-schedules.md) general availability | [!DNL Job Schedules] provides a unified view of all scheduled batch processing jobs across your data pipeline, from ingestion through destination activation. Inspect execution status, identify scheduling conflicts, and diagnose configuration issues before they impact your business operations. |
| Health Checks general availability | Poor schema and identity configurations lead to significant downstream issues, including incorrect profile creation, failed segment qualification, and inaccurate activation. <br>Health checks shift your approach from reactive troubleshooting to proactive, preventative maintenance. Health checks are always-on scans of your schemas and identities used in your sandbox and provide a summary of issues that you can use to explore and troubleshoot. |

{style="table-layout:auto"}

For more information, read the [Run and Operate overview](../run-and-operate/overview.md), [Inspect job schedules](../run-and-operate/job-schedules.md), and the [Platform UI guide](../landing/ui-guide.md).

## Sources {#sources}

Experience Platform provides a RESTful API and an interactive UI that lets you set up source connections for various data providers with ease. These source connections allow you to authenticate and connect to external storage systems and CRM services, set times for ingestion runs, and manage data ingestion throughput.

**New or updated sources**

| Source | Description |
| --- | --- |
| [!DNL Deltashare] | You can now connect [!DNL Deltashare] and ingest data into Experience Platform. |
| [!DNL Kobie] loyalty source connector | You can now stream loyalty data (points earned, redeemed, or expired; tier; transaction history) from [!DNL Kobie] into Experience Platform. |
| [!DNL Google BigQuery] Azure permissions | You can use the updated docs to set up the [!DNL Google BigQuery] connector on Azure (including required OAuth scopes, IAM roles, and the `largeResultsDatasetId` parameter for large result sets). |
| Change Data Capture for [!DNL Microsoft Dynamics], [!DNL Salesforce CRM], and [!DNL Marketo] | You can now sync only changed records from [!DNL Microsoft Dynamics], [!DNL Salesforce CRM], and [!DNL Marketo] using Change Data Capture. |
| [!DNL Talon.One] source updates | You can use the updated docs for mapping, filtering `talon_session_closed` events, and account-creation prerequisites. |
| Automatic disabling of failing dataflows | If a source dataflow fails continuously for 30 days, it is disabled automatically; you can check Monitoring for the cause, fix the issue, then re-enable the dataflow. |

{style="table-layout:auto"}

For more information, read the [sources overview](../sources/home.md).
