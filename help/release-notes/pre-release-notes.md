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

- [Destinations](#destinations)
- [Experience Data Model (XDM)](#xdm)
- [Query Service](#query-service)
- [Real-Time CDP](#rtcdp)
- [Sandboxes](#sandboxes)
- [Segmentation Service](#segmentation-service)
- [Sources](#sources)

## Destinations {#destinations}

[!DNL Destinations] are pre-built integrations with destination platforms that allow for the seamless activation of data from Experience Platform. You can use destinations to activate your known and unknown data for cross-channel marketing campaigns, email campaigns, targeted advertising, and many other use cases.

**New or updated destinations**

| Destination | Description |
| --- | --- |
| [!BADGE Beta]{type=Informative} [Microsoft Ads Customer Match](../destinations/catalog/advertising/microsoft-ads-customer-match.md) | Match customers by email address and reengage with them across the [!DNL Microsoft Advertising Network], including Search and Audience ads. Link your [!DNL Microsoft Advertising] account to Real-Time CDP to automate customer match list creation and management directly from Experience Platform. |
| [!BADGE Beta]{type=Informative} [Reddit Custom Audience](../destinations/catalog/advertising/reddit-custom-audience.md) | Send audiences from Experience Platform to [!DNL Reddit Ads]. Connect your [!DNL Reddit] account, map identities, and activate audiences to reach people actively exploring their interests on [!DNL Reddit]. |
| [Amazon Ads v2](../destinations/catalog/advertising/amazon-ads-v2.md) | [!DNL Amazon Ads v2] is the current destination for all new [!DNL Amazon Ads] connections. If you have an existing [(Legacy) [!DNL Amazon Ads]](../destinations/catalog/advertising/amazon-ads.md) connection, it continues to function without any required changes. [!DNL Amazon Ads v2] connects to [!DNL Ads Data Manager], which provides support for expanded identity types, address-related fields, and data-sharing across [!DNL Amazon Ads] products, improving targeting and audience match rates compared to [(Legacy) [!DNL Amazon Ads]](../destinations/catalog/advertising/amazon-ads.md). |
| [!DNL Rokt] | Use [!DNL Rokt] to connect Experience Platform audiences to AI-driven real-time decisioning, improving campaign performance through more precise targeting, suppression, and personalization. |

{style="table-layout:auto"}

**Fixes and improvements**

| Fix | Description |
| --- | --- |
| Custom Personalization monitoring support | The monitoring dashboard for destinations now supports [!DNL Custom Personalization] destinations. The limitation note that excluded [!DNL Custom Personalization] from monitoring has been removed. |

{style="table-layout:auto"}

For more information, read the [Destinations overview](../destinations/home.md).

## Experience Data Model (XDM) {#xdm}

XDM is an open-source specification that provides common structures and definitions (schemas) for data brought into Experience Platform. By adhering to XDM standards, all customer experience data can be incorporated into a common representation to deliver insights in a faster, more integrated way.

**New or updated features**

| Feature | Description |
| --- | --- |
| Field group schema usage visibility | View which schemas use a field group from the detail page and explore them in a sortable dialog with schema metadata. This helps you quickly assess dependencies and impact without navigating away. |

{style="table-layout:auto"}

For more information, read the [XDM System overview](../xdm/home.md).

## Query Service {#query-service}

Use Query Service to query data in Adobe Experience Platform [!DNL Data Lake] with standard SQL. Join any datasets from the [!DNL Data Lake] and capture query results as a new dataset for use in reporting, Data Science Workspace, or ingestion into Real-Time Customer Profile.

**New or updated features**

| Feature | Description |
| --- | --- |
| Data Distiller Accelerators | Run and schedule Adobe-managed, parameterized SQL templates in the Query Service UI to perform common analyses without writing SQL. This helps you standardize analytics workflows and reuse trusted query logic across your organization. |

{style="table-layout:auto"}

For more information, read the [Query Service overview](../query-service/home.md).

## Real-Time CDP {#rtcdp}

[!DNL Real-Time CDP] provides unified, actionable customer profiles by ingesting, processing, and activating data across multiple channels in real time. With Real-Time CDP, organizations can connect existing data sources, build and activate rich audiences, and ensure privacy-compliant activation across destinations—all from within Adobe Experience Platform. This enables marketers, analysts, and IT teams to deliver highly personalized, timely experiences for their customers through seamless, cross-channel marketing campaigns.

**New or updated features**

| Feature | Description |
| --- | --- |
| Real-Time CDP MCP (Beta) | Use the Real-Time CDP MCP to bring Real-Time CDP into AI agents and MCP-compatible clients, enabling you to interact with Real-Time CDP tools directly through your native LLM experience. By connecting an MCP-compatible client (such as Claude, ChatGPT, Claude Code, Codex, Cursor, or VS Code) to `https://rtcdp-mcp.adobe.io/mcp`, you can use natural language to inspect audiences, destination configuration, and activation run history—without writing Experience Platform REST API calls or navigating multiple UI workflows. After completing a browser-based Adobe sign-in, you will have read-only access to tools including Search Existing Audiences, Preview Audience Membership, List Destination Types, List Configured Accounts, List Configured Destinations, List Source Connections, List Target Connections, and Inspect Activation Runs. Each request requires `imsOrgId` and `sandboxName` parameters to ensure actions are scoped to your organization and sandbox. Note that write operations are not supported in this Beta release. |

{style="table-layout:auto"}

For more information, read the [Real-Time CDP overview](../rtcdp/home.md).

## Sandboxes {#sandboxes}

Adobe Experience Platform is built to enrich digital experience applications on a global scale. Companies often run multiple digital experience applications in parallel and need to cater to the development, testing, and deployment of these applications while ensuring operational compliance.

**New or updated features**

| Feature | Description |
| --- | --- |
| Express Copy | Use Express Copy to copy objects to a target sandbox in a single action from the [Sandbox Tooling UI](/help/sandboxes/ui/sandbox-tooling.md#express-copy). Dependent objects are detected automatically and are created in the target sandbox or reused when they already exist. |

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
| Automatic dataflow disabling | Sources ingestion dataflows that fail continuously for 30 days are automatically disabled, helping to surface unhealthy dataflows and reduce repeated failed runs. |
| [!DNL Delta Sharing] | You can use the [!DNL Delta Sharing] source to bring Delta tables into Experience Platform through a secure, open data‑sharing protocol. After you configure a [!DNL Delta Sharing] connection and select the shares and tables you want to ingest, Platform automatically brings that data into your datasets so you can use it for analysis, segmentation, and activation. |
| [!DNL Meta Ads] (Beta) | You can use the [!DNL Meta Ads] source connector (Beta) in the Sources workspace to authenticate to [!DNL Meta], select your ad accounts, and schedule ingestion of [!DNL Meta Ads] campaign and performance data into Experience Platform datasets. |
| [!DNL Talon.One] | You can now connect Experience Platform to [!DNL Talon.One] using the new [!DNL Talon.One] batch and streaming sources. Use the new sources to ingest loyalty profile data as well as transaction and loyalty activity events to Experience Platform. |

{style="table-layout:auto"}

For more information, read the [sources overview](../sources/home.md).
