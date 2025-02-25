---
title: Adobe Experience Platform Release Notes February 2025
description: The February 2025 release notes for Adobe Experience Platform.
exl-id: 734a9484-516e-4dd7-9503-8fcdc50cbaac
---
# Adobe Experience Platform release notes 

>[!TIP]
>
>This release includes improvements to the Federated Audience Composition add-on. For more information, read the [Federated Audience Composition release notes](https://experienceleague.adobe.com/en/docs/federated-audience-composition/using/release-notes).

**Release date: February 18, 2025**

Updates to existing features and documentation in Adobe Experience Platform:

- [AI Assistant](#ai-assistant)
- [Catalog Service](#catalog-service)
- [Data Prep](#data-prep)
- [Destinations](#destinations)
- [Sources](#sources)
- [Documentation updates](#documentation-updates)
  - [Edge network and hub comparison](#edge)
  - [Expanded Flow Service API for sources](#flow-service)
  - [Back up object configurations using sandbox tooling](#back-up-object-configurations)
  - [Enable a center of excellence using sandbox tooling](#center-of-excellence)
  - [Experience Event Dataset Retention in the data lake](#experience-event-dataset-retention)

## AI Assistant {#ai-assistant}

AI Assistant in Adobe Experience Platform is a conversational experience that you can use to accelerate your workflows in Adobe applications. You can use AI Assistant to better understand product knowledge, troubleshoot problems, or search through information and find operational insights. AI Assistant supports Experience Platform, Real-Time Customer Data Platform, Adobe Journey Optimizer, and Customer Journey Analytics.

**New features**

| Feature | Description |
| --- | --- |
| General availability of operational insights | Operational insights in AI Assistant are now in GA. Operational insights refer to answers AI Assistant generates about your metadata objects (attributes, audiences, dataflows, datasets, destinations, journeys, schemas, and sources), including counts, lookups, and lineage impact. Operational insights does not look at any data within the sandbox. For more information, read the [AI Assistant UI guide](../../ai-assistant/ui-guide.md). |
| Support for question autocomplete | When inputting a question to AI Assistant, you can now select from a list of recommended questions that AI Assistant provides. Use this feature to further accelerate your workflows with AI Assistant. For more information, read the guide on [using question autocomplete with AI Assistant](../../ai-assistant/ui-guide.md#use-question-autocomplete). |
| Support for dataset observability | You can now use AI Assistant to answer questions about specific dataset metrics such as storage sizes and row counts. Data observability questions support qualifiers that you can use to filter your queries by a certain time period. For more information, read the [AI Assistant questions guide](../../ai-assistant/questions.md). |

{style="table-layout:auto"}

For more information, read the [AI Assistant overview](../../ai-assistant/home.md).

## Catalog Service {#catalog-service}

Catalog Service is the system of record for data location and lineage within Adobe Experience Platform. While all data that is ingested into Experience Platform is stored in the data lake as files and directories, Catalog holds the metadata and description of those files and directories for lookup and monitoring purposes.

| Feature | Description |
| --- | --- |
| New API endpoint | Manage your Adobe Experience Platform dataset metadata more efficiently with the new [Catalog Service API /v2/dataSets/{DATASET_ID} endpoint](../../catalog/api/update-object.md#patch-v2-notation). Easily update complex, deeply nested dataset attributes as the system automatically creates missing path levels to save you time, reduce manual steps, and minimize errors. |

{style="table-layout:auto"}

For more information on Catalog Service, read the [Catalog Service overview](../../catalog/home.md).

## Data Prep {#data-prep}

Use data prep to map, transform, and validate data to and from Experience Data Model (XDM).

**New or updated features**

| Feature | Description |
| --- | --- |
| Enhanced support for importing and exporting mappings | You can now export mappings to a CSV file and configure them locally on a spreadsheet. You can then import your updated mappings to Experience Platform using the mapping interface in the UI. You can use this capability to configure large numbers of mappings without having to manually build them in the UI. Additionally, when creating a new dataflow, you can upload a copy of your mappings directly to Experience Platform to accelerate your workflow. For more information, read the guide on [importing and exporting mappings](../../data-prep/ui/mapping.md#import-mapping). |

{style="table-layout:auto"}

For more information, read the [Data Prep overview](../../data-prep/home.md).

## Destinations (updated February 20) {#destinations}

[!DNL Destinations] are pre-built integrations with destination platforms that allow for the seamless activation of data from Adobe Experience Platform. You can use destinations to activate your known and unknown data for cross-channel marketing campaigns, email campaigns, targeted advertising, and many other use cases.

**New or updated destinations** {#new-updated-destinations}

| Destination | Description |
| --- | --- |
| [(Beta) Marketo Engage Person Sync](/help/destinations/catalog/adobe/marketo-engage-person-sync.md) | Use the [!DNL Marketo Engage Person Sync] connector to stream updates from person audiences to the corresponding records in your [!DNL Marketo Engage] instance. This destination connector is in beta and only available to select customers. To request access, contact your Adobe representative. |
| [The Trade Desk CRM connection](/help/destinations/catalog/advertising/tradedesk-emails.md) general availability | [!DNL The Trade Desk CRM] connection is now generally available. Use [!DNL The Trade Desk] CRM destination to activate profiles to your [!DNL Trade Desk] account for audience targeting and suppression based on CRM data. |
| [RainFocus Attendee Profiles connection](/help/destinations/catalog/marketing-automation/rainfocus.md) | Use the [!DNL RainFocus Attendee Profiles] destination to stream customer profiles from Adobe Experience Platform into the [!DNL RainFocus] platform in order to create and update attendee profiles. |
| [Criteo connection](/help/destinations/catalog/advertising/criteo.md) general availability | The [!DNL Criteo ] connection is now generally available. Criteo powers trusted and impactful advertising to bring richer experiences to every consumer across the open internet. With the world's largest commerce data set and best-in-class AI, Criteo ensures each touchpoint across the shopping journey is personalized to reach customers with the right ad, at the right time.|
| [[!DNL Amazon Ads] connection](../../destinations/catalog/advertising/amazon-ads.md) | The [!DNL Amazon Ads] connector, previously in beta, is now generally available. The connector has also been updated to send a consent granted signal for all profiles who have consented to have their personal data used for advertising. Read more about the new [Amazon Ads Consent Signal](../../destinations/catalog/advertising/amazon-ads.md#destination-details) control.  |

{style="table-layout:auto"}

**New or updated functionality** {#destinations-new-updated-functionality}

| Feature | Description |
| --- | --- |
| Use access labels to manage user access to destination dataflows | As part of the [[!UICONTROL attribute-based access control]](/help/access-control/abac/overview.md) functionality in Real-Time CDP, you can now apply access labels to [destination dataflows](/help/dataflows/ui/monitor-destinations.md). This way, you can ensure that only a subset of users in your organization get access to specific destination dataflows. <br> **Important**: When searching for destination dataflows using the search box at the top of the Experience Platform user interface, the results may include destination dataflows which your user access labels restrict you from seeing. This behavior will be corrected in a future update. |
| [Audience-level reporting](/help/dataflows/ui/monitor-destinations.md#audience-level-dataflow-runs-for-streaming-destinations) for the [Marketo Engage connection](/help/destinations/catalog/adobe/marketo-engage.md) | You can now [view information](/help/dataflows/ui/monitor-destinations.md#audience-level-dataflow-runs-for-streaming-destinations) about the activated, excluded, or failed identities broken down on an audience level, for each audience that is part of the dataflows for this destination.|
| External audiences support for the [TikTok](/help/destinations/catalog/social/tiktok.md) and [Snap Inc](/help/destinations/catalog/advertising/snap-inc.md) connections | You can activate external audiences to these destinations from [custom uploads](../../segmentation/ui/audience-portal.md#import-audience) and [Federated Audience Composition](https://experienceleague.adobe.com/en/docs/federated-audience-composition/using/start/audiences). |
| Export arrays, maps, and objects to cloud storage destinations | By using the new **[!UICONTROL Export arrays, maps, objects]** toggle when connecting to a cloud storage destination, you can new export complex objects to select destinations. [Read more](/help/destinations/ui/export-arrays-calculated-fields.md) about the functionality. |

{style="table-layout:auto"}

**Fixes and enhancements** {#destinations-fixes-and-enhancements}

- An issue in the Destination SDK testing tools has been fixed. Some customers or partners were encountering issues with the [sample profile generation tool](/help/destinations/destination-sdk/testing-api/streaming-destinations/sample-profile-generation-api.md) due to an unsupported format when the schema used for generating profiles included data types with a `No format` selector.
- An issue when updating the `targetConnection` spec of destinations, using the Flow Service API, has been fixed. In some cases, the PATCH operation would behave similarly to a POST operation, corrupting existing dataflows. This issue is now fixed and all customers can use the Flow Service API to update their `targetConnection` spec. [Read more](/help/destinations/api/edit-destination.md#patch-target-connection).
- When exporting profiles to file-based destinations, deduplication ensures that only one profile is exported when multiple profiles share the same deduplication key and the same reference timestamp. This release includes an update to the deduplication process, ensuring that successive runs with the same coordinates will always produce the same results, improving consistency. [Read more](/help/destinations/ui/activate-batch-profile-destinations.md#deduplication-same-timestamp). 

For more information, read the [destinations overview](../../destinations/home.md).


## Sources {#sources}

Experience Platform provides a RESTful API and an interactive UI that lets you set up source connections for various data providers with ease. These source connections allow you to authenticate and connect to external storage systems and CRM services, set times for ingestion runs, and manage data ingestion throughput.

Use sources in Experience Platform to ingest data from an Adobe application or a third-party data source.

**Updated feature**

| Feature | Description |
| --- | --- |
| Support for Views in [!DNL Microsoft Dynamics] | You can now ingest `"entityType": "view"` when using the [!DNL Microsoft Dynamics] source. For more information, read the guide on [connecting a [!DNL Microsoft Dynamics] source to Experience Platform](../../sources/tutorials/api/create/crm/ms-dynamics.md). |

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
