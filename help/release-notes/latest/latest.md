---
title: Adobe Experience Platform Release Notes May 2025
description: The May 2025 release notes for Adobe Experience Platform.
exl-id: f854f9e5-71be-4d56-a598-cfeb036716cb
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

**Release date: May 20, 2025**

Updates to existing features and documentation in Adobe Experience Platform:

- [AI Assistant](#ai-assistant)
- [Catalog Service](#catalog-service)
- [Data Prep](#data-prep)
- [Destinations](#destinations)
- [Identity Service](#identity)
- [Query Service](#query-service)
- [Sandboxes](#sandboxes)
- [Segmentation Service](#segmentation-service)
- [Sources](#sources)

## AI Assistant {#ai-assistant}

AI Assistant in Adobe Experience Platform is a conversational experience that you can use to accelerate your workflows in Adobe applications. You can use AI Assistant to better understand product knowledge, troubleshoot problems, or search through information and find operational insights. AI Assistant supports Experience Platform, Real-Time Customer Data Platform, Adobe Journey Optimizer, and Customer Journey Analytics.

**Updated features**

| Feature | Description |
| --- | --- |
| General availability of Product Support Agent | You can now use Product Support Agent in AI Assistant to seamlessly troubleshoot without leaving your workflows. Support administrators in your organization can now use Product Support Agent to create customer support tickets, complete with context and session details from your interactions with AI Assistant. <br><br>Access to Product Support Agent is available until November 30, 2025. You must contact your Adobe account representative to license Product Support Agent and continue using the feature after this date. For more information, read the [Product Support Agent documentation](../../ai-assistant/new-features/customer-support.md).  |

For more information, read the [AI Assistant overview](../../ai-assistant/landing.md).

## Catalog Service {#catalog-service}

Catalog Service is the system of record for data location and lineage within Adobe Experience Platform. While all data that is ingested into Experience Platform is stored in the data lake as files and directories, Catalog holds the metadata and description of those files and directories for lookup and monitoring purposes.

| Feature | Description |
| --- | --- |
| Optimize data storage with dataset-level retention rules | Efficiently manage data storage with retention policies that delete outdated data based on your specified timeframe. <ul><li>**Dataset Retention**: Define dataset rules to remove outdated data from the data lake and Profile Store.</li><li>**Storage Insights**: Monitor usage and ensure compliance with licensed entitlement through inline metrics.</li><li>**Enhanced Visibility**: Track dataset activity from ingestion to deletion with improved monitoring.</li><li>**Streamlined Management**:Access retention settings, monitoring, audit logs, and insights in a single unified view.</li></ul> Read the guide on [dataset retention rules](../../catalog/datasets/user-guide.md#data-retention-policy) for more information. |

{style="table-layout:auto"}

For more information, read the [Catalog Service overview](../../catalog/home.md).

## Data Prep {#data-prep}

Use data prep to map, transform, and validate data to and from Experience Data Model (XDM).

**New or updated features**

| Feature | Description |
| --- | --- |
| Support for import and export mappings for Adobe Analytics | You can now use import and export mapping capabilities for your Adobe Analytics report suite data when using the Adobe Analytics source connector. <br><br>Export your mappings to a CSV file and configure them locally on a spreadsheet. You can then import your updated mappings to Experience Platform using the mapping interface in the UI. You can use this capability to configure large numbers of mappings without having to manually build them in the UI. Additionally, when creating a new dataflow, you can upload a copy of your mappings directly to Experience Platform to accelerate your workflow. <br><br>For more information, read the guide on [connecting Adobe Analytics to Experience Platform](../../sources/tutorials/ui/create/adobe-applications/analytics.md).</br> |

{style="table-layout:auto"}

For more information, read the [Data Prep overview](../../data-prep/home.md).

## Destinations {#destinations}

[!DNL Destinations] are pre-built integrations with destination platforms that allow for the seamless activation of data from Adobe Experience Platform. You can use destinations to activate your known and unknown data for cross-channel marketing campaigns, email campaigns, targeted advertising, and many other use cases.

**New or updated functionality** {#destinations-new-updated-functionality}

| Feature | Description |
| --- | --- |
| [Facebook Custom Audience](../../destinations/catalog/social/facebook.md) upgrade and support for address-related identifiers | Starting May 23rd, 2025, and throughout June 2025, you might temporarily see two **[!DNL Facebook Custom Audience]** destination cards in the destinations catalog, for up to a few hours. This is due to an internal upgrade to the destinations service and to support new fields for improved targeting and matching with profiles on Facebook properties. For details about the new address-related fields, see the [supported identities](#supported-identities) section. <br><br>If you see a card labeled **[!UICONTROL (New) Facebook Custom Audience]**, use this card for new activation data flows. Your existing dataflows will be updated automatically, so no action is required from you. Any changes you make to existing dataflows during this period will be preserved after the upgrade. Once the upgrade is complete, the **[!UICONTROL (New) Facebook Custom Audience]** destination card will be renamed to **[!DNL Facebook Custom Audience]**. <br><br>If you are creating dataflows using the [Flow Service API](https://developer.adobe.com/experience-platform-apis/references/destinations/), you must update your [!DNL flow spec ID] and [!DNL connection spec ID] to the following values: <ul><li>Flow spec ID: `bb181d00-58d7-41ba-9c15-9689fdc831d3`</li><li>Connection spec ID: `c8b97383-2d65-4b7a-9913-db0fbfc71727`</li></ul>|
| Mobile advertising ID support for the [Google Customer Match + Display & Video 360](../../destinations/catalog/advertising/google-customer-match-dv360.md#supported-identities) destination | You can now activate audiences to the [Google Customer Match + Display & Video 360](../../destinations/catalog/advertising/google-customer-match-dv360.md#supported-identities) destination based on mobile advertising IDs, such as [!DNL GAID] and [!DNL IDFA]. |
| Additional identifiers support for [Google Customer Match](../../destinations/catalog/advertising/google-customer-match.md)| The Google Customer Match destination now supports the mapping of address-related fields for improved match rates in Google's platform. <br><br>To ensure Google matches the address, you must map all four address fields (`address_info_first_name`, `address_info_last_name`, `address_info_country_code`, and `address_info_postal_code`) and ensure that none of these fields are missing data in the exported profiles. <br> If any field is either unmapped or contains missing data, Google will not match the address. |
| Account expiration column for [Facebook](../../destinations/catalog/social/facebook.md) connections | You can now see the Facebook account token expiration dates in the [Browse](../../destinations/ui/destinations-workspace.md#browse) and [Accounts](../../destinations/ui/destinations-workspace.md#accounts) tabs. |
| Export API-created datasets | You can now export API-created datasets. The previous limitation where only datasets created in the UI were available for export has been lifted. Read more about [exporting datasets](../../destinations/ui/export-datasets.md). |

{style="table-layout:auto"}

For more information, read the [Destinations overview](../../destinations/home.md).

## Identity Service {#identity}

Use Adobe Experience Platform Identity Service to create a comprehensive view of your customers and their behaviors by bridging identities across devices and systems, allowing you to deliver impactful, personal digital experiences in real time.

**Updated features**

| Feature | Description |
| --- | --- |
| [!DNL Identity Graph Linking Rules] | [!DNL Identity Graph Linking Rules] is now generally available. [!DNL Identity Graph Linking Rules] prevent "graph collapse," ensuring distinct and accurate customer profiles for personalized marketing across Experience Platform & Applications. Key features include:<ul><li>[Graph Simulation Tool](../../identity-service/identity-graph-linking-rules/graph-simulation.md): Explore the algorithm and test Identity Setting configurations.</li><li> [Identity Settings](../../identity-service/identity-graph-linking-rules/identity-settings-ui.md): Configure unique namespaces and set priorities.</li><li>[Identity Dashboard](../../identity-service/identity-graph-linking-rules/implementation-guide.md#validate-your-graphs): Monitor graphs and validate Identity Settings.</li></ul> **Note**: There will be no changes to your data until you manually configure your identity settings. |

{style="table-layout:auto"}

For more information, read the [Identity Service overview](../../identity-service/home.md).

## Query Service {#query-service}

Query data in the Adobe Experience Platform data lake using standard SQL with Query Service. Seamlessly combine datasets and generate new ones from your query results to power reporting, enable data science workflows, or facilitate ingestion into Real-Time Customer Profile. For example, you can merge customer transaction data with behavioral data to identify high-value audiences for targeted marketing campaigns.

**New or updated features**

| Feature | Description |
|--------|-------------|
| JWT to OAuth Credential Migration | Non-expiring JWT credentials must be migrated to OAuth Server-to-Server by June 30, 2025, to avoid service interruptions. This change improves security and platform consistency. See the [Migrate from JWT to OAuth Server-to-Server credentials guide](../../query-service/ui/migrate-jwt-to-oauth.md) for more details. |
| Legacy Results Table (Limited Availability) | Users who rely on drag-to-select workflows can request access to a legacy results table that supports browser-native selection and copy behavior. Pasted output is tab-delimited, so columns remain aligned and readable in Excel, allowing easier spreadsheet review and QA processes. See the [Query Editor UI guide](../../query-service/ui/user-guide.md#legacy-results-table) for more details. |

For more information on [!DNL Query Service], please see the [[!DNL Query Service] overview](../../query-service/home.md).

## Sandboxes {#sandboxes}

Adobe Experience Platform is built to enrich digital experience applications on a global scale. Companies often run multiple digital experience applications in parallel and need to cater for the development, testing, and deployment of these applications while ensuring operational compliance. To address this need, Experience Platform provides sandboxes that partition a single Experience Platform instance into separate virtual environments to help develop and evolve digital experience applications.

**New or updated features**

| Feature | Description |
| --- | --- |
| Sandbox tooling plugin support expansion | Campaigns can now be migrated with additional dependent objects through sandbox tooling, including channel configuration, unified decision, experiment settings/variants, and more. For a complete list of supported campaign objects, as well as all supported Adobe Journey Optimizer objects, read the [sandbox tooling](../../sandboxes/ui/sandbox-tooling.md#adobe-journey-optimizer-objects) guide.|

{style="table-layout:auto"}

For more information on sandboxes, read the [sandboxes overview](../../sandboxes/home.md).

## Segmentation Service {#segmentation-service}

[!DNL Segmentation Service] defines a particular subset of profiles by describing the criteria that distinguishes a marketable group of people within your customer base. Audiences can be based on record data (such as demographic information) or time series events representing customer interactions with your brand.

**New or updated features**

| Feature | Description |
| ------- | ----------- |
| Look-alike insights availability update | Look-alike insights and look-alike audiences are automatically disabled for environments that show low usage. Low usage is defined as not viewing look-alike insights for the last three months or not creating a new look-alike audience for the last six months. More information about this change can be found in the [look-alike audiences guide](../../segmentation/types/lookalike-audiences.md). |
| Streaming segmentation criteria update | Starting with the May 2025 release, the criteria for your audiences to be eligible for streaming segmentation have been updated. More information about these changes can be found in the [streaming segmentation eligibility criteria update](../../segmentation/eligibility-criteria-update.md). |

## Sources {#sources}

Experience Platform provides a RESTful API and an interactive UI that lets you set up source connections for various data providers with ease. These source connections allow you to authenticate and connect to external storage systems and CRM services, set times for ingestion runs, and manage data ingestion throughput.

Use sources in Experience Platform to ingest data from an Adobe application or a third-party data source.

**Updated features**

| Feature | Description |
| --- | --- |
| Support for basic authentication for [!DNL MySQL] | You can now use basic authentication to connect your [!DNL MySQL] database to Experience Platform. Read the [[!DNL MySQL] source overview](../../sources/connectors/databases/mysql.md) for more information. |

{style="table-layout:auto"}

For more information, read the [sources overview](../../sources/home.md).