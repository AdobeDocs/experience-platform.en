---
title: Adobe Experience Platform Release Notes March 2024
description: The March 2024 release notes for Adobe Experience Platform.
---
# Adobe Experience Platform release notes 

**Release date: March 19, 2024**

Updates to existing features in Experience Platform:

- [Catalog Service](#catalog-service)
- [Data Prep](#data-prep)
- [Experience Data Model (XDM)](#xdm)
- [Segmentation Service](#segmentation)
- [Sources](#sources)

## Catalog Service {#catalog-service}

Catalog Service is the system of record for data location and lineage within Adobe Experience Platform. While all data that is ingested into Experience Platform is stored in the data lake as files and directories, Catalog holds the metadata and description of those files and directories for lookup and monitoring purposes.

| Feature | Description |
| --- | --- |
| More actions | To make operations more flexible and help you manage your data, you can now use the "More actions" feature from the details view to perform additional tasks on a dataset. You can either delete the dataset or enable it for use with Real-Time Customer Profile from the details page of a chosen dataset.<br>Note that if you enable a dataset for Profile, the dataset's schema must be compatible with Real-Time Customer Profile.<br>![The Datasets workspace with the [!UICONTROL ... More] dropdown menu highlighted.](./help/catalog/images/datasets/user-guide/more-actions.png "The Datasets workspace with the More dropdown menu highlighted."){width="100" zoomable="yes"}.<br>See the [more actions](./help/catalog/datasets/user-guide.md#more-actions) documentation for addition information. |

{style="table-layout:auto"}

For more information on Catalog Service, refer to the [Catalog Service overview](../../catalog/home.md).

## Data Prep {#data-prep}

Data Prep allows data engineers to map, transform, and validate data to and from Experience Data Model (XDM).

**New or updated features**

| Feature | Description |
| --- | --- |
| New mapper functions for Adobe Analytics | You can now use the following functions to extract event data from Adobe Analytics: <ul><li>`aa_get_event_id`</li><li>`aa_get_event_value`</li><li>`aa_get_product_categories`</li><li>`aa_get_product_names`</li><li>`aa_get_product_quantities`</li><li>`aa_get_product_prices`</li><li>`aa_get_product_event_values`</li><li>`aa_get_product_evars`</li></ul> For more information on these functions, read the [Data Prep functions guide](../../data-prep/functions.md#analytics-functions) |

{style="table-layout:auto"}

For more information on Data Prep, read the [Data Prep overview](../../data-prep/home.md).

## Experience Data Model (XDM) {#xdm}

XDM is an open-source specification that provides common structures and definitions (schemas) for data that is brought into Adobe Experience Platform. By adhering to XDM standards, all customer experience data can be incorporated into a common representation to deliver insights in a faster, more integrated way. You can gain valuable insights from customer actions, define customer audiences through segments, and use customer attributes for personalization purposes.

**New features**

| Feature | Description |
| --- | --- |
| Experience Platform UI map datatype support | Further customize your Experience Data Model (XDM) data structure by defining map fields in the Platform UI. You can now create map fields in the Schema Editor to model flexible data structures or efficiently store key-value pairs. Select "Map" from the Type dropdown when defining a new field to configure subfields and assign them to field groups. Supported map value types are string and integer.<br>![The Schemas Editor with the Type and Map value type fields highlighted.](../../images/ui/fields/overview/map-type.png "The Schemas Editor with the Type and Map value type fields highlighted."){width="100" zoomable="yes"}<br> To learn how to [define map fields in the UI](./help/xdm/ui/fields/map.md), see the UI guide. |

{style="table-layout:auto"}

For more information on XDM in Platform, see the [XDM System overview](../../xdm/home.md).

## Segmentation Service {#segmentation}

[!DNL Segmentation Service] allows you to segment data stored in [!DNL Experience Platform] that relates to individuals (such as customers, prospects, users, or organizations) into audiences. You can create audiences through segment definitions or other sources from your [!DNL Real-Time Customer Profile] data. These audiences are centrally configured and maintained on [!DNL Platform], and are readily accessible by any Adobe solution. 

**New feature**

| Feature | Description |
| ------- | ----------- |
| Bulk actions | The audience inventory now supports bulk actions. Using bulk actions, you can quickly select multiple audiences to move them to a folder, apply tags, apply access labels, or delete. For more information about this feature, read the [Segmentation Service UI guide](../../segmentation/ui/overview.md#bulk-actions). |

{style="table-layout:auto"}

To learn more about Segmentation Service, read the [Segmentation Service overview](../../segmentation/home.md).

## Sources {#sources}

Experience Platform provides a RESTful API and an interactive UI that lets you set up source connections for various data providers with ease. These source connections allow you to authenticate and connect to external storage systems and CRM services, set times for ingestion runs, and manage data ingestion throughput.

**New or updated features**

| Feature | Description |
| --- | --- |
| [!BADGE Beta]{type=Informative} [!DNL Acxiom Data Ingestion] | Use the [[!DNL Acxiom Data Ingestion] source](../../sources/tutorials/ui/create/data-partners/acxiom-data-ingestion.md) to ingest [!DNL Acxiom] data into Real-Time Customer Data Platform and enrich first-party profiles. Then, you can use your [!DNL Acxiom]-enriched first-party profiles to improve audiences and activate across marketing channels. <br> ![The Acxiom Data Ingestion source.](../2024/assets/march/acxiom-data-ingestion.png "New Acxiom Data Ingestion source."){width="100" zoomable="yes"} <br> Read the [[!DNL Acxiom Data Ingestion] overview](../../sources/connectors/data-partners/acxiom-data-ingestion.md) for information on how to get started.  |
| [!BADGE Beta]{type=Informative} [!DNL Stripe] | Use the [[!DNL Stripe] source](../../sources/connectors/payments/stripe.md) to ingest data captured during the purchase flow by your customers into Experience Platform. Once ingested, you can use this data to create personalized offers and unlock richer business insights. <br> ![The Stripe source.](../2024/assets/march/stripe.png "New Stripe source."){width="100" zoomable="yes"} <br> Read the [[!DNL Stripe] overview](../../sources/connectors/payments/stripe.md) for information on how to get started.  |
| UI support for [!DNL Snowflake Streaming] | You can now use the [[!DNL Snowflake Streaming] source](../../sources/tutorials/ui/create/databases/snowflake-streaming.md) in the Experience Platform UI, to stream data from your [!DNL Snowflake] database. <br> ![The Snowflake Streaming sourcee.](../2024/assets/march/snowflake-streaming.png "New Snowflake Streaking source."){width="100" zoomable="yes"} <br> Read the [[!DNL Snowflake Streaming] overview](../../sources/connectors/databases/snowflake-streaming.md) for information on how to get started. |

{style="table-layout:auto"}

For more information on sources, read the [sources overview](../../sources/home.md).

