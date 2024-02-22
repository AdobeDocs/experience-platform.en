---
title: Adobe Experience Platform Release Notes
description: The January 2024 release notes for Adobe Experience Platform.
exl-id: f854f9e5-71be-4d56-a598-cfeb036716cb
---
# Adobe Experience Platform release notes 

**Release date: February 21, 2024**

Updates to existing features in Experience Platform:

- [Alerts](#alerts)
<!-- - [Data Prep](#data-prep) -->
- [Sandboxes](#sandboxes)
- [Segmentation Service](#segmentation)
- [Sources](#sources)

## Alerts {#alerts}

Experience Platform allows you to subscribe to event-based alerts for various Platform activities. You can subscribe to different alert rules through the [!UICONTROL Alerts] tab in the Platform user interface, and can choose to receive alert messages within the UI itself or through email notifications.
**New or updated features**
| Feature | Description |
| --- | --- |
| Alerts history tab | As an Experience Platform administrator, you can use the the manage alert subscribers feature to assign an alert to an Adobe user ID, external email address, or an email group list. For more information, see the [alerts UI documentation](../../observability/alerts/ui.md) for more information about the history tab. |

{style="table-layout:auto"}

To learn more about alerts, read the [[!DNL Observability Insights] overview](../../observability/home.md).

<!-- ## Data Prep {#data-prep}

Data Prep allows data engineers to map, transform, and validate data to and from Experience Data Model (XDM).

**New or updated features**

| Feature | Description |
| --- | --- |
| New mapper functions for Adobe Analytics | You can now use the following functions to extract event data from Adobe Analytics: <ul><li>`aa_get_event_id`</li><li>`aa_get_event_value`</li><li>`aa_get_product_categories`</li><li>`aa_get_product_names`</li><li>`aa_get_product_quantities`</li><li>`aa_get_product_prices`</li><li>`aa_get_product_event_values`</li><li>`aa_get_product_evars`</li></ul> For more information on these functions, read the [Data Prep functions guide](../../data-prep/functions.md) |

{style="table-layout:auto"}

For more information on Data Prep, read the [Data Prep overview](../../data-prep/home.md). -->

## Sandboxes {#sandboxes}

Adobe Experience Platform is built to enrich digital experience applications on a global scale. Companies often run multiple digital experience applications in parallel and need to cater for the development, testing, and deployment of these applications while ensuring operational compliance. To address this need, Experience Platform provides sandboxes that partition a single Platform instance into separate virtual environments to help develop and evolve digital experience applications.

**New or updated features**

| Feature | Description |
| --- | --- |
| Sandbox tooling | In addition to now supporting object types for consent and governance rules, use sandbox tooling to import schemas without unified profiles enabled, check for missing attributes in the target sandbox when importing a segment, and default to using the existing merge policy. For more information on these features, see the [sandbox tooling UI guide](../../sandboxes/ui/sandbox-tooling.md). |

{style="table-layout:auto"}

For more information on sandboxes, read the [sandboxes overview](../../sandboxes/home.md).

## Segmentation Service {#segmentation}

[!DNL Segmentation Service] allows you to segment data stored in [!DNL Experience Platform] that relates to individuals (such as customers, prospects, users, or organizations) into audiences. You can create audiences through segment definitions or other sources from your [!DNL Real-Time Customer Profile] data. These audiences are centrally configured and maintained on [!DNL Platform], and are readily accessible by any Adobe solution. 

**New feature**

| Feature | Description |
| ------- | ----------- |
| Account audiences | Account audiences are now generally available! You can now use account segmentation to bring the full ease and sophistication of the marketing segmentation experience from people-based audiences to account-based audiences in both the B2B and B2P Editions of Real-Time Customer Platform. This release lets you use people-based audiences as a predicate to account-based audiences, adds search capabilities, supports the usage of custom entities, and is compliant with Data Governance. For more information about this feature, please read the [account audiences overview](../../segmentation/ui/account-audiences.md). |

{style="table-layout:auto"}

## Sources {#sources}

Experience Platform provides a RESTful API and an interactive UI that lets you set up source connections for various data providers with ease. These source connections allow you to authenticate and connect to external storage systems and CRM services, set times for ingestion runs, and manage data ingestion throughput.

**New or updated features**

| Feature | Description |
| --- | --- |
| [!BADGE Beta]{type=Informative} [!DNL Acxiom] source | Use the [[!DNL Acxiom Prospecting Data Import] source](../../sources/tutorials/ui/create/data-partners/acxiom-prospecting-data-import.md) to retrieve and map data from [!DNL Acxiom] prospect service to Experience Platform. |

{style="table-layout:auto"}

For more information on sources, read the [sources overview](../../sources/home.md).
