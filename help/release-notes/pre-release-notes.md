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

**Release date: April 2026**

New features and updates to existing features in Adobe Experience Platform:

- [Advanced data lifecycle management](#advanced-data-lifecycle-management)
- [Agent Orchestrator](#agent-orchestrator)
- [Destinations](#destinations)
- [Query Service](#query-service)
- [Real-Time CDP Collaboration](#rtcdp-collaboration)
- [Sandboxes](#sandboxes)
- [Segmentation Service](#segmentation-service)
- [Sources](#sources)
- [XDM (Experience Data Model)](#xdm)

## Advanced data lifecycle management {#advanced-data-lifecycle-management}

Experience Platform provides a suite of data hygiene capabilities that let you manage your stored data through programmatic deletions of consumer records and datasets. Use the Data Lifecycle workspace in the UI or calls to the Data Hygiene API to manage your data stores. These capabilities ensure that information is used as expected, updated when incorrect data needs fixing, and deleted when organizational policies require it.

**New or updated features**

| Feature | Description |
| --- | --- |
| Selective profile data deletion | Delete profile data selectively across multiple datasets or limit deletion to specific services (profile vs. data lake). Use a single dataset ID, a list of dataset IDs, or the literal `ALL` in `datasetId` to target one, many, or all datasets. Scope deletion to specific services by setting `targetServices` accordingly. See the [Record Delete Work Orders guide](../hygiene/api/workorder.md) for details. |

{style="table-layout:auto"}

For more information, read the [advanced data lifecycle management overview](../hygiene/home.md).

## Agent Orchestrator {#agent-orchestrator}

Use Agent Orchestrator to build and deploy AI-powered agents that automate workflows and interact with customers across multiple channels.

**New or updated features**

| Feature | Description |
| --- | --- |
| Data Onboarding skill | The Data Engineering Agent now includes Data Onboarding skills covering source connection, data quality, semantic enrichment, schema recommendation, and data ingestion. Use step-by-step workflows and example prompts to connect sources, check data quality, and ingest data for B2C and B2B flows. |
| Data Validation skills | Two validation skills, DataField and DataSet, are now available in the Data Engineering Agent. Use these skills to validate data fields and datasets through natural language prompts. |
| Data Collection skills | The Data Engineering Agent now includes Data Collection skills powered by Product Knowledge and Operational Insights. Use Product Knowledge to get in-context guidance for complex Data Collection configurations. Use Operational Insights to explore lineage, dependencies, and relationships across your data collection objects. |

{style="table-layout:auto"}

For more information, see the [Agent Orchestrator documentation](https://experienceleague.adobe.com/en/docs/experience-cloud-ai/experience-cloud-ai/agents/agent-orchestrator).

## Destinations {#destinations}

[!DNL Destinations] are pre-built integrations with destination platforms that allow for the seamless activation of data from Experience Platform. You can use destinations to activate your known and unknown data for cross-channel marketing campaigns, email campaigns, targeted advertising, and many other use cases.

**New or updated destinations**

| Destination | Description |
| --- | --- |
| [!BADGE Beta]{type=Informative} [Microsoft Ads Customer Match](../destinations/catalog/advertising/microsoft-ads-customer-match.md) | Match customers by email address and reengage with them across the [!DNL Microsoft Advertising Network], including Search and Audience ads. Link your [!DNL Microsoft Advertising] account to Real-Time CDP to automate customer match list creation and management directly from Experience Platform. |
| [!BADGE Beta]{type=Informative} [Reddit Custom Audience](../destinations/catalog/advertising/reddit-custom-audience.md) | Send audiences from Experience Platform to [!DNL Reddit Ads]. Connect your [!DNL Reddit] account, map identities, and activate audiences to reach people actively exploring their interests on [!DNL Reddit]. |
| [Amazon Ads v2](../destinations/catalog/advertising/amazon-ads-v2.md) | [!DNL Amazon Ads v2] is the current destination for all new [!DNL Amazon Ads] connections. If you have an existing [(Legacy) [!DNL Amazon Ads]](./amazon-ads.md) connection, it continues to function without any required changes. [!DNL Amazon Ads v2] connects to [!DNL Ads Data Manager], which provides support for expanded identity types, address-related fields, and data-sharing across [!DNL Amazon Ads] products, improving targeting and audience match rates compared to [(Legacy) [!DNL Amazon Ads]](./amazon-ads.md). |
| [!DNL Rokt] | Use [!DNL Rokt] to connect Experience Platform audiences to AI-driven real-time decisioning, improving campaign performance through more precise targeting, suppression, and personalization. |

{style="table-layout:auto"}

**Fixes and improvements**

| Fix | Description |
| --- | --- |
| Custom Personalization monitoring support | The monitoring dashboard for destinations now supports [!DNL Custom Personalization] destinations. The limitation note that excluded [!DNL Custom Personalization] from monitoring has been removed. |

{style="table-layout:auto"}

For more information, read the [Destinations overview](../destinations/home.md).

## Query Service {#query-service}

Use Query Service to query data in Adobe Experience Platform [!DNL Data Lake] with standard SQL. Join any datasets from the [!DNL Data Lake] and capture query results as a new dataset for use in reporting, Data Science Workspace, or ingestion into Real-Time Customer Profile.

**New or updated features**

| Feature | Description |
| --- | --- |
| Data Distiller Accelerators | Pick an accelerator from the **[!UICONTROL Accelerators]** tab, enter the required parameters, and run or schedule the generated SQL without writing it yourself. Accelerators are Adobe-managed, read-only SQL templates for common scenarios. Clone any accelerator into a custom template to edit it for your organization's specific needs. |

{style="table-layout:auto"}

For more information, read the [Query Service overview](../query-service/home.md).

## Real-Time CDP Collaboration {#rtcdp-collaboration}

[!DNL Real-Time CDP Collaboration] is a privacy-safe data collaboration environment where you can discover and activate high-value audiences with advertising partners while maintaining full data control.

**New or updated features**

| Feature | Description |
| --- | --- |
| New collaboration role types | Three collaboration patterns are now available in [!DNL Real-Time CDP Collaboration]: advertiser-to-data partner, agency-to-publisher, and advertiser-to-agency platform. Use these patterns to collaborate directly with brands, agencies, and data providers in a privacy-safe environment. Account roles for agency and data partner are also available. See the [account roles](https://experienceleague.adobe.com/en/docs/real-time-cdp-collaboration/using/overview/roles) and [collaboration patterns](https://experienceleague.adobe.com/en/docs/real-time-cdp-collaboration/using/overview/collaboration-patterns) pages for details. |
| [!DNL Demdex] ID (ECID) match key | [!DNL Real-Time CDP Collaboration] now supports [!DNL Demdex] ID (ECID) as a match key. Use this match key to expand overlap discovery and audience activation with partners who share [!DNL Adobe] identity infrastructure. |
| Real-Time CDP MCP (Beta) | Use the [!DNL Real-Time CDP] MCP to bring [!DNL Adobe Real-Time CDP] into AI agents and MCP-compatible clients. Connect an MCP-compatible client (such as [!DNL Claude], [!DNL ChatGPT], [!DNL Claude Code], or [!DNL VS Code]) to the [!DNL Real-Time CDP] MCP server. Inspect audiences, destination configuration, and activation run history through natural language, without writing Experience Platform REST API calls or navigating multiple UI workflows. Available tools include Search Existing Audiences, Preview Audience Membership, List Destination Types, List Configured Accounts, List Configured Destinations, List Source Connections, List Target Connections, and Inspect Activation Runs. Write operations are not supported in this Beta release. |

{style="table-layout:auto"}

For more information, read the [Real-Time CDP Collaboration documentation](https://experienceleague.adobe.com/en/docs/real-time-cdp-collaboration/using/home).

## Sandboxes {#sandboxes}

Adobe Experience Platform is built to enrich digital experience applications on a global scale. Companies often run multiple digital experience applications in parallel and need to cater to the development, testing, and deployment of these applications while ensuring operational compliance.

**New or updated features**

| Feature | Description |
| --- | --- |
| Express Copy | Use Express Copy to duplicate objects (such as schemas and sources) across sandboxes in a single action from the Sandbox Tooling UI. Select the target sandbox, and dependency objects are detected and created or reused automatically. Packages and export/import jobs run in the background. Previously, copying objects required a multi-step workflow: creating a package, adding objects, exporting the package, then importing it in the target sandbox. |

{style="table-layout:auto"}

For more information, read the [sandboxes overview](../sandboxes/home.md).

## Segmentation Service {#segmentation-service}

Use Segmentation Service to create audiences from your customer data and manage their full lifecycle in Experience Platform.

**New or updated features**

| Feature | Description |
| --- | --- |
| Streaming segmentation monitoring | Monitor streaming segmentation with real-time visibility into evaluation rate, ingestion latency, and data quality metrics at the sandbox, dataset, and segment level. View metrics including evaluation rate, P95 ingestion latency, records received, records evaluated, records failed, and records skipped. Also view net new profiles qualified and disqualified per segment. Use these insights to identify capacity violations and ingestion issues before they impact your data. |

{style="table-layout:auto"}

For more information, read the [Audiences overview](../segmentation/home.md).

## Sources {#sources}

Experience Platform provides a RESTful API and an interactive UI that lets you set up source connections for various data providers with ease. These source connections allow you to authenticate and connect to external storage systems and CRM services, set times for ingestion runs, and manage data ingestion throughput.

**New or updated sources**

| Source | Description |
| --- | --- |
| [!DNL Meta Ads] (Beta) | Use the [!DNL Meta Ads] source to configure the complete [!DNL Meta Ads] ingestion workflow in the Sources UI. Connect your [!DNL Meta Ads] account and bring paid media data directly into Experience Platform for activation and analysis. |
| [!DNL Deltashare] | Use the [!DNL Deltashare] source to bring live, shared datasets from partners or internal lakehouse environments into Adobe's applications without copying or manually uploading files. Connect to a [!DNL Deltashare] endpoint, choose the tables you need, and use that governed data alongside your existing profiles and insights. |
| [!DNL Kobie] | The [!DNL Kobie] source connector now supports streaming ingestion. Stream loyalty data from [!DNL Kobie Alchemy&reg; Loyalty Cloud] (KALC) directly into Experience Platform alongside batch ingestion. Updated documentation reflects the streaming-only connector release, updated authentication requirements, and the endpoint URL configuration from the **[!UICONTROL Copy schema payload]** option. |
| [!DNL Capillary] and [!DNL Talon.One] loyalty sources | Updated documentation for [!DNL Capillary] includes a downloadable mapping sample. Updated documentation for [!DNL Talon.One] includes changes to the Management Key V1 and Management API Key configuration. |
| Automatic dataflow disabling | Sources dataflows that fail continuously for 30 days are automatically disabled. When a dataflow is disabled, review the failure reason in Monitoring, apply the necessary updates, and re-enable the dataflow. Common failure reasons include credentials, permissions, or schema and mapping configuration changes. |
| Self-service sourcing for [!DNL Snowflake] | Updated prerequisite documentation for [!DNL Snowflake] and [!DNL GCS] audience sourcing now includes more detailed permission setup steps for both platforms. |

{style="table-layout:auto"}

For more information, read the [sources overview](../sources/home.md).

## XDM (Experience Data Model) {#xdm}

XDM is an open-source specification that provides common structures and definitions (schemas) for data brought into Experience Platform. By adhering to XDM standards, all customer experience data can be incorporated into a common representation to deliver insights in a faster, more integrated way.

**New or updated features**

| Feature | Description |
| --- | --- |
| Field group browse and detail pages | The field group browse table now includes columns and filters for compatible classes and industry tags. The information rail shown when you select a row also includes this information. On the field group detail page, the properties rail now shows which schemas use the field group and what the required fields are. If RBAC labels are applied, the option to view those labels on the field tree is also available. When you select a field, the field properties rail shows the labels on that field by category. |

{style="table-layout:auto"}

For more information, read the [XDM System overview](../xdm/home.md).
