---
title: Adobe Experience Platform Release Notes March 2025
description: The March 2025 release notes for Adobe Experience Platform.
---
# Adobe Experience Platform release notes 

>[!TIP]
>
>This release includes improvements to the Federated Audience Composition add-on. For more information, read the [Federated Audience Composition release notes](https://experienceleague.adobe.com/en/docs/federated-audience-composition/using/release-notes).

**Release date: March 26, 2025**

Updates to existing features and documentation in Adobe Experience Platform:
<!-- 
- [AI Assistant](#ai-assistant)
- [Catalog Service](#catalog-service)
- [Data Prep](#data-prep)
- [Destinations](#destinations)
- [Segmentation Service](#segmentation)
- [Sources](#sources)
- [Documentation updates](#documentation-updates)
  - [Edge network and hub comparison](#edge)
  - [Expanded Flow Service API for sources](#flow-service)
  - [Back up object configurations using sandbox tooling](#back-up-object-configurations)
  - [Enable a center of excellence using sandbox tooling](#center-of-excellence)
  - [Experience Event Dataset Retention in the data lake](#experience-event-dataset-retention) -->

<!-- ## AI Assistant {#ai-assistant}

AI Assistant in Adobe Experience Platform is a conversational experience that you can use to accelerate your workflows in Adobe applications. You can use AI Assistant to better understand product knowledge, troubleshoot problems, or search through information and find operational insights. AI Assistant supports Experience Platform, Real-Time Customer Data Platform, Adobe Journey Optimizer, and Customer Journey Analytics.

**New features**

For more information, read the [AI Assistant overview](../../ai-assistant/home.md). -->

<!-- ## Catalog Service {#catalog-service}

Catalog Service is the system of record for data location and lineage within Adobe Experience Platform. While all data that is ingested into Experience Platform is stored in the data lake as files and directories, Catalog holds the metadata and description of those files and directories for lookup and monitoring purposes.

For more information on Catalog Service, read the [Catalog Service overview](../../catalog/home.md). -->

<!-- ## Data Prep {#data-prep}

Use data prep to map, transform, and validate data to and from Experience Data Model (XDM).

**New or updated features**

For more information, read the [Data Prep overview](../../data-prep/home.md). -->

<!-- ## Destinations (updated February 20) {#destinations}

[!DNL Destinations] are pre-built integrations with destination platforms that allow for the seamless activation of data from Adobe Experience Platform. You can use destinations to activate your known and unknown data for cross-channel marketing campaigns, email campaigns, targeted advertising, and many other use cases.

**New or updated destinations** {#new-updated-destinations}

**New or updated functionality** {#destinations-new-updated-functionality}

**Fixes and enhancements** {#destinations-fixes-and-enhancements}

For more information, read the [destinations overview](../../destinations/home.md). -->

## Segmentation Service {#segmentation-service}

[!DNL Segmentation Service] defines a particular subset of profiles by describing the criteria that distinguishes a marketable group of people within your customer base. Segments can be based on record data (such as demographic information) or time series events representing customer interactions with your brand.

| Feature | Description |
| ------- | ----------- |
| Account Audience Builder enhancements | Within Audience Builder, you can now filter attributes to only display populated attributes as well as view summary data for these populated attributes. More information on these enhancements can be found in the [Audience Builder](../../rtcdp/segmentation/audience-builder.md) documentation. |
| Flexible audience evaluation general availability | Flexible audience evaluation is now generally available! You can use flexible audience evaluation to create new audiences on demand for time-sensitive communications. More information about flexible audience evaluation can be found in the [flexible audience evaluation overview](../../segmentation/methods/flexible-audience-evaluation.md) |

For more information on [!DNL Segmentation Service], please see the [Segmentation overview](../../segmentation/home.md).

## Sources {#sources}

Experience Platform provides a RESTful API and an interactive UI that lets you set up source connections for various data providers with ease. These source connections allow you to authenticate and connect to external storage systems and CRM services, set times for ingestion runs, and manage data ingestion throughput.

Use sources in Experience Platform to ingest data from an Adobe application or a third-party data source.

**New sources**

| Feature | Description |
| --- | --- |
| [!DNL Bombora Intent] | The [!DNL Bombora Intent] source is now availale in the sources catalog. Use this source to: <ul><li>Integrate Bombora's Company Surge Intent data to identify accounts actively researching your products or services.</li><li>Prioritize in-market accounts to create precise segments and execute hyper-targeted ABM campaigns, ensuring your marketing efforts focus on those account most likely to convert.</li><li>Leverage intent-driven strategies to optimize ad spend, boost engagement, and maximize ROI.</li></ul> For more information, read the guide on [connecting your [!DNL Bombora] account to Experience Platform](../../sources/tutorials/ui/create/data-partners/bombora.md) |
| [!DNL Demandbase Intent] | The [!DNL Bombora Intent] source is now availale in the sources catalog. Use this source to: <ul><li>Integrate Demandbase's Account Intent data to identify high-interest accounts based on real-time engagements.</li><li>By prioritizing the strongest intent signals, you can create precise segments and deliver hyper-targeted campaigns to ensure that your marketing efforts focus on accounts most likely to convert.</li><li>Activate intent-driven strategies to enable optimization of ad spend, increased engagement, and higher ROI.</li></ul> For more information, read the guide on [connecting your [!DNL Demandbase] account to Experience Platform](../../sources/tutorials/ui/create/data-partners/demandbase.md). |

{style="table-layout:auto"}

**Updated features**

| Feature | Description |
| --- | --- |
| Enhancements to the [!DNL Google Ads] source | You can now use the [[!DNL Google Ads] source](../../sources/connectors/advertising/ads.md) to ingest aggregate data. You can use the [!DNL Google Ads Query Builder] to specify the attributes, segments, and resources that you want to ingest to Experience Platform. For more information, read the guide on [connecting your [!DNL Google Ads] account to Experience Platform](../../sources/tutorials/ui/create/advertising/ads.md). |
| Enhancements to the [!DNL Microsoft Dynamics] source | You can now specify the primary key of a given [!DNL Microsoft Dynamics] table when exploring the contents and structure of your data. Use this feature to optimize your queries with the [!DNL Microsoft Dynamics] source. For more information, read the guide on [connecting your [!DNL Microsoft Dynamics] source to Experience Platform using the API](../../sources/tutorials/api/create/crm/ms-dynamics.md). |
| Support for API key authentication in Self-Serve Sources (Batch SDK) | You can now use API key authentication as an authentication type when integrating a new source with Self-Serve Sources (Batch SDK). For more information, read the guide on [configuring your auth spec in Batch SDK](../../sources/sources-sdk/config/authspec.md). |
| Support for attribute-based access control in sources | You can now use attribute-based access control functions against your sources dataflows. Read the following guides for more information: <ul><li>[Apply labels to your sources dataflows using the API](../../sources/tutorials/api/labels.md)</li><li>[Apply labels to your sources dataflows using the UI](../../sources/tutorials/ui/labels.md). |

{style="table-layout:auto"}

For more information, read the [sources overview](../../sources/home.md).

## Documentation updates {#documentation-updates}

### Edge Network and hub comparison {#edge}

The [Edge Network and hub comparison](../../landing/edge-and-hub-comparison.md) provides an overview detailing the differences between the two server types for Adobe Experience Platform (hub and Edge Network), including what services are available on each server type, locations of the servers, as well as recommended scenarios for using each server type. 

### Expanded Flow Service API reference for sources {#flow-service}

The [[!DNL Flow Service] API reference](https://developer.adobe.com/experience-platform-apis/references/flow-service/#tag/Source-connections) for sources has been updated with new API request and response examples. Use the expanded API reference to create and update connection specs when integrating your own source to Experience Platform. You can also use the expanded API reference to perform state transitions on your sources entities, update existing source and target connections, and retrieve flows and flow specs given a specific filtering criteria.

### Back up object configurations using sandbox tooling {#back-up-object-configurations}

Read the [back up object configuration guide](../../sandboxes/use-cases/backup-object-configuration.md) for step-by-step instructions on creating a backup package using sandbox tooling to ensure your object configurations are stored and secured.

### Enable a center of excellence using sandbox tooling {#center-of-excellence}

Read the [center of excellence guide](../../sandboxes/use-cases/center-of-excellence.md) for step-by-step instructions on creating a "golden sandbox" package that acts as a center of excellence to efficiently share key configurations.

### Experience Event Dataset Retention in the data lake {#experience-event-dataset-retention}

Take control of Experience Event Dataset Retention in Adobe Experience Platform using Time-To-Live (TTL). [This guide](../../catalog/datasets/experience-event-dataset-retention-ttl-guide.md) walks you through evaluating, configuring, and managing TTL settings to automatically remove outdated records, optimize storage, and keep your data relevant. Discover best practices, real-world use cases, and key considerations to enhance your data lifecycle management.
