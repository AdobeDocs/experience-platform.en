---
title: Adobe Experience Platform Release Notes
description: Experience Platform release notes November, 2020
doc-type: release notes
last-update: November, 2020
author: crhoades, ens28527
---

# Adobe Experience Platform release notes 

**Release date: November 2020**

New features in Adobe Experience Platform:

- [[!DNL Access control]](#access-control)
- [[!DNL Offer Decisioning]](#offer-decisioning)
- [[!DNL Sandboxes]](#sandboxes)
- [[!DNL Sources]](#sources)

## [!DNL Access control] {#access-control}

[!DNL Experience Platform] leverages [Adobe Admin Console](https://adminconsole.adobe.com) product profiles to link users with permissions and sandboxes. Permissions control access to a variety of Platform capabilities, including data modeling, profile management, and sandbox administration.

**Key features**

| Feature | Description |
| ------- | ----------- |
| Permissions | In the [!DNL Admin Console], the  tab within a [!DNL Platform] product profile allows you customize which [!DNL Platform] capabilities are available for the users attached to that profile. Available permission categories include: **[!UICONTROL Data Modeling]**, **[!UICONTROL Data Management]**, **[!UICONTROL Profile Management]**, **[!UICONTROL Identity Management]**, **[!UICONTROL Data Monitoring]**, **[!UICONTROL Sandbox Administration]**, **[!UICONTROL Destinations]**, **[!UICONTROL Data Ingestion]**, **[!UICONTROL Data Science Workspace]**, **[!UICONTROL Query Service]**, and **[!UICONTROL Data Governance]**.  |
| Access to sandboxes | The **[!UICONTROL Permissions]** tab within a [!DNL Platform] product profile can grant users access to specific sandboxes. See the section on [sandboxes](#sandboxes) below for more information. |

For more information, please see the [access control overview](../../access-control/home.md).

## [!DNL Offer Decisioning] {#offer-decisioning}

[!DNL Offer Decisioning] is an Application Service integrated with [!DNL Experience Platform]. It allows you to leverage [!DNL Platform] to deliver the best offer and experience to your customers across all touch points at the right time.

| Feature | Description |
| ------- | ----------- |
| Centralized offer library | The interface where you create and manage the different elements that compose your offers, and define their rules and constraints. |
| Offer Decision Engine | The Offer Decision Engine leverages [!DNL Platform] data and [!DNL Real-time Customer Profiles], along with the Offer Library, in order to select the right time, customers and channels to which offers will be delivered. |

For more information, please see the [[!DNL Offer Decisioning]](https://experienceleague.adobe.com/docs/offer-decisioning/using/offer-decisioning-home.html?lang=en) documentation.

## [!DNL Sandboxes] {#sandboxes}

[!DNL Experience Platform] is built to enrich digital experience applications on a global scale. Companies often run multiple digital experience applications in parallel and need to cater for the development, testing, and deployment of these applications while ensuring operational compliance. In order to address this need, [!DNL Experience Platform] provides sandboxes which partition a single [!DNL Platform] instance into separate virtual environments to help develop and evolve digital experience applications.

**Key features**

| Feature | Description |
| ------- | ----------- |
| Production sandbox | [!DNL Experience Platform] provides a single production sandbox, which cannot be deleted or reset. The total number of available sandboxes, production and non-production, is determined by the license acquired. |
| Non-production sandboxes | Multiple non-production sandboxes can be created for a single [!DNL Platform] instance, allowing you to test features, run experiments, and make custom configurations without impacting your production sandbox. |
| Sandbox switcher | In the [!DNL Experience Platform] user interface, the sandbox switcher in the top-left corner of the screen allows you to switch between available sandboxes through a dropdown menu. The sandbox switcher also provides a search function that allows you to filter through available sandboxes. |
| `x-sandbox-name` header | All calls to [!DNL Experience Platform] APIs must now include the new `x-sandbox-name` header, whose value references the `name` attribute of the sandbox the operation will take place in. |

For more information, please see the [sandboxes overview](../../sandboxes/home.md).

## [!DNL Sources] {#sources}

Adobe Experience Platform can ingest data from external sources while allowing you to structure, label, and enhance that data using [!DNL Platform] services. You can ingest data from a variety of sources such as Adobe applications, cloud-based storage, third party software, and your CRM system.

[!DNL Experience Platform] provides a RESTful API and an interactive UI that lets you set up source connections for various data providers with ease. These source connections allow you to authenticate and connect to external storage systems and CRM services, set times for ingestion runs, and manage data ingestion throughput.

**New features**

| Feature | Description |
| ------- | ----------- |
| API and UI support for updating connections | You can now update the names, descriptions, and credentials of existing batch connections using the [!DNL Flow Service] API and the UI. For more information, see the tutorial on [updating connections using the Flow Service API](../../sources/tutorials/api/update.md) and [editing account details using the UI](../../sources/tutorials/ui/monitor.md). |
| API  and UI support for deleting connections | Batch connections that contain errors or have become unnecessary can now be deleted using the [!DNL Flow Service] API and the UI. For more information, see the tutorial on [deleting connections using the Flow Service API](../../sources/tutorials/api/delete.md) and [deleting accounts using the UI](../../sources/tutorials/ui/delete-accounts.md). |
| API and UI support for eCommerce systems | New source connector for [!DNL Shopify]. |
| API support for mapping in streaming sources | You can now use APIs to perform mapping functions with streaming sources. |
| API support for custom delimiters for cloud storage sources | You can now collect non-CSV delimited files using cloud storage sources. You can use any single column delimiter such as a tab, comma, pipe, semicolon, or hash to collect flat files in any format. The value defaults to a comma if unprovided. |
| UX improvements | File-based ingestion is now accessible through the sources catalog. |
| Sandbox support for Adobe Audience Manager connector | The Audience Manager connector is now sandbox aware. Users can enable the connector to route Audience Manager datasets to the sandbox of their choosing (including non-production sandboxes). The configuration is limited to one sandbox per IMS Org. |

To learn more about sources, see the [sources overview](../../sources/home.md).