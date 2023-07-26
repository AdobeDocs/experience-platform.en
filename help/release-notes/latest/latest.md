---
title: Adobe Experience Platform Release Notes
description: The July 2023 release notes for Adobe Experience Platform.
exl-id: f854f9e5-71be-4d56-a598-cfeb036716cb
---
# Adobe Experience Platform release notes 

**Release date: July 26, 2023**

Updates to existing features in Adobe Experience Platform:

- [Catalog Service](#catalog-service)
- [Data collection](#data-collection)
- [Data Prep](#data-prep)
- [Query Service](#query-service)
- [Segmentation Service](#segmentation)
- [Sources](#sources)

## Catalog Service {#catalog-service}

Catalog Service is the system of record for data location and lineage within Adobe Experience Platform. While all data that is ingested into Experience Platform is stored in the Data Lake as files and directories, Catalog holds the metadata and description of those files and directories for lookup and monitoring purposes.

| Feature | Description |
| --- | --- |
| Dataset inventory management | The datasets UI now offers a collections of inline actions to better manage your datasets. Advanced dataset management improves your work efficiency through the creation and assigning of folders and tags to your datasets that allows for filtering and improved discoverability. See the documentation for more information on [inline actions](../../catalog/datasets/user-guide.md#inline-actions), how to [search and filter datasets](../../catalog/datasets/user-guide.md#search-and-filter), and [move datasets to folders](../../catalog/datasets/user-guide.md#move-to-folders). |

{style="table-layout:auto"}

For more information on Catalog Service, refer to the [Catalog Service overview](../../catalog/home.md).

## Data collection {#data-collection}

Adobe Experience Platform provides a suite of technologies that allow you to collect client-side customer experience data and send it to the Adobe Experience Platform Edge Network where it can be enriched, transformed, and distributed to Adobe or non-Adobe destinations.

**New or updated features**

| Type | Feature | Description |
| --- | --- | --- |
| Tags and Event Forwarding | Data Collection Audit Logs | You can now see when an action was performed and who performed this action across Tags and Event Forwarding. This facilitates product troubleshooting, proper governance, and internal audit activities. This audit data is displayed via in-context slide out menus that also includes quick actions and resource status updates. This data is visible across the Tags and Event Forwarding UI in the following screens:<br><ul><li>[Property overview](../../tags/ui/event-forwarding/overview.md#properties)</li><li>[Rules](../../tags/ui/event-forwarding/overview.md#rules)</li><li>[Data Elements](../../tags/ui/event-forwarding/overview.md#data-elements)</li><li>[Extensions](../../tags/ui/event-forwarding/overview.md#extensions)</li><li>[Library review](https://experienceleague.adobe.com/docs/platform-learn/data-collection/tags/build-and-publish-a-library.html)</li><li>[Library last build and published](https://experienceleague.adobe.com/docs/platform-learn/data-collection/tags/build-and-publish-a-library.html)</li></ul> |
| Datastreams | [Geo Lookup](../../datastreams/configure.md#advanced-options) | You can now configure geolocation and network lookup for datastreams to include information such as: <ul><li>Country</li><li>Postal Code</li><li>State/Province</li><li>DMA</li><li>City</li><li>Latitude </li><li>Longitude</li><li>Carrier</li><li>Domain</li><li>ISP</li></ul> You are responsible for ensuring you have obtained all necessary permissions, consents, clearances, and authorization required under applicable laws and regulations to collect, process, and transmit personal data, including precise geolocation information. <br> Your IP address obfuscation selection does not affect the level of geolocation information that will be derived from the IP address and sent to your configured Adobe solutions. Geolocation lookups must be limited or disabled separately. <br> See the [datastreams documentation](../../datastreams/configure.md#advanced-options) for more details. |

{style="table-layout:auto"}

For more information on data collection, please read the [data collections overview](../../tags/home.md).

## Data Prep {#data-prep}

Data Prep allows data engineers to map, transform, and validate data to and from Experience Data Model (XDM).

**New or updated features**

| Feature | Description |
| --- | --- |
| New mapper functions | You can now use the following functions when mapping objects in Data Prep: <ul><li>`map_get_values`</li><li>`map_has_keys`</li><li>`add_to_map`</li></ul> For more information on these functions, read the [Data Prep functions guide](../../data-prep/functions.md#hierarchies---objects). |

{style="table-layout:auto"}

For more information on Data Prep, please read the [Data Prep overview](../../data-prep/home.md).

## Query Service {#query-service}

Query Service allows you to use standard SQL to query data in Adobe Experience Platform data lake. You can join any datasets from data lake and capture the query results as a new dataset for use in reporting, Data Science Workspace, or for ingestion into Real-Time Customer Profile.

**Updated features**

| Feature | Description |
| --- | --- |
| Enhanced Query Editor toggle | The enhanced Query Editor toggle provides better accessibility and multi-theming support. Enhanced editor settings allow you to enable dark or light themes. See the [documentation](../../query-service/ui/user-guide.md#enhanced-editor-toggle) for more information. |
| Alias name for calculated statistics | You can now provide an alias name to descriptively reference the results of your  in your computed statistics in SQL queries. See the documentation for information on this and other updates to the COMPUTE STATISTICS command. See the [documentation](../../query-service/essential-concepts/dataset-statistics.md#alias-name) for more information. |

{style="table-layout:auto"}

For more information on Query Service, refer to the [Query Service overview](../../query-service/home.md).

## Segmentation Service {#segmentation}

[!DNL Segmentation Service] allows you to segment data stored in [!DNL Experience Platform] that relates to individuals (such as customers, prospects, users, or organizations) into audiences. You can create audiences through segment definitions or other sources from your [!DNL Real-Time Customer Profile] data. These audiences are centrally configured and maintained on [!DNL Platform], and are readily accessible by any Adobe solution. 

**New or updated features**

| Feature | Description |
| ------- | ----------- |
| Audience Portal | Audience Portal provides a new browsing experience for accessing, creating, and managing audiences within Adobe Experience Platform. Within Audience Portal, you can view Platform-generated and externally generated audiences; improve your work efficiency through filtering, folders, and tags; create Platform-generated audiences; and import externally generated audiences through CSV files. For more information on Audience Portal, please read the [Segmentation Service UI guide](../../segmentation/ui/overview.md). |
| Audience Composition | Audience Composition provides an easy-to-use workspace to build and edit audiences, using blocks that are used to represent different actions. For more information on Audience Composition, please read the [Audience Composition UI guide](../../segmentation/ui/audience-composition.md). |

For more information on [!DNL Segmentation Service], please read the [Segmentation overview](../../segmentation/home.md).

## Sources {#sources}

Experience Platform provides a RESTful API and an interactive UI that lets you set up source connections for various data providers with ease. These source connections allow you to authenticate and connect to external storage systems and CRM services, set times for ingestion runs, and manage data ingestion throughput.

**New or updated features**

| Feature | Description |
| --- | --- |
| [!BADGE Beta]{type=Informative} [!DNL SAP Commerce] | You can now use the [[!DNL SAP Commerce] source](../../sources/connectors/ecommerce/sap-commerce.md) to bring subscription billing data from your [!DNL SAP Commerce] account to Experience Platform. |
| Support for [!DNL Phoenix] | You can now use the [[!DNL Phoenix] source](../../sources/connectors/databases/phoenix.md) to bring data from your [!DNL Phoenix] database to Experience Platform. |
| Authentication updates to [!DNL Salesforce] and [!DNL Salesforce Service Cloud] | You can now specify the API version of your [[!DNL Salesforce]](../../sources/connectors/crm/salesforce.md) and [[!DNL Salesforce Service Cloud]](../../sources/connectors/customer-success/salesforce-service-cloud.md) source when authenticating a new account with the Experience Platform UI or the [!DNL Flow Service] API.  |

{style="table-layout:auto"}

For more information on sources, please read the [sources overview](../../sources/home.md).
