---
title: Adobe Experience Platform Release Notes
description: Experience Platform release notes for March 31, 2021.
doc-type: release notes
last-update: March 31, 2021
author: ens72741
---

# Adobe Experience Platform release notes 

**Release date: March 31, 2021**

Updates to existing features in Adobe Experience Platform:

- [[!DNL Data Prep]](#data-prep)
- [[!DNL Sandboxes]](#sandboxes)
- [[!DNL Segmentation Service]](#segmentation)
- [[!DNL Sources]](#sources)

## [!DNL Data Prep] {#data-prep}

[!DNL Data Prep] allows data engineers to map, transform, and validate data to and from Experience Data Model (XDM).

| Feature | Description |
| ------- | ----------- |
| `add_to_array` function | Updated functionality to support arrays as a parameter. |
| `to_array` function | Updated functionality to support objects as a parameter. |

For more information, please see the [[!DNL Data Prep] overview](../../data-prep/home.md).

## [!DNL Sandboxes] {#sandboxes}

Adobe Experience Platform is built to enrich digital experience applications on a global scale. Companies often run multiple digital experience applications in parallel and need to cater for the development, testing, and deployment of these applications while ensuring operational compliance.

In order to address this need, Experience Platform provides sandboxes which partition a single Platform instance into separate virtual environments to help develop and evolve digital experience applications.

| Feature | Description |
| ------- | ----------- |
| (Beta) Multiple production sandboxes | You can now create and manage multiple production sandboxes in your IMS Org and dedicate specific production sandboxes to distinct lines of business, brands, projects or regions. See the tutorials on creating a production sandbox [in the UI](../../sandboxes/ui/user-guide.md) or [using the API](../../sandboxes/api/create-sandbox.md) for more information. |

For more information on sandboxes, see the [sandboxes overview](../../sandboxes/home.md).

## Segmentation Service {#segmentation}

Adobe Experience Platform Segmentation Service provides a user interface and RESTful API that allows you to build segments and generate audiences from your [!DNL Real-time Customer Profile] data. These segments are centrally configured and maintained on [!DNL Platform], making them readily accessible by any Adobe application.

[!DNL Segmentation Service] defines a particular subset of profiles by describing the criteria that distinguishes a marketable group of people within your customer base. Segments can be based on record data (such as demographic information) or time series events representing customer interactions with your brand.

**New features**

| Feature | Description |
| ------- | ----------- |
| (Beta) Edge segmentation | Edge segmentation evaluates segments in real-time, which allow for same page and next page personalization use cases. More information about edge segmentation can be found in the [Segmentation UI overview](../../segmentation/ui/overview.md).  |
| (Beta) Incremental segmentation | Increases the freshness of existing segment definitions evaluated in batch segmentation to up to an hour. |

For more information on [!DNL Segmentation Service], please see the [Segmentation overview](../../segmentation/home.md).

## [!DNL Sources] {#sources}

Adobe Experience Platform can ingest data from external sources while allowing you to structure, label, and enhance that data using Platform services. You can ingest data from a variety of sources such as Adobe applications, cloud-based storage, third-party software, and your CRM system.

Experience Platform provides a RESTful API and an interactive UI that lets you set up source connections for various data providers with ease. These source connections allow you to authenticate and connect to external storage systems and CRM services, set times for ingestion runs, and manage data ingestion throughput.

| Feature | Description |
| ------- | ----------- |
| Beta sources moving to GA | The following sources have been promoted from beta to GA: <ul><li>[[!DNL MySQL]](../../sources/connectors/databases/mysql.md)</li><li>[[!DNL PostGres]](../../sources/connectors/databases/postgres.md)</li><li>[[!DNL Salesforce Service Cloud]](../../sources/connectors/customer-success/salesforce-service-cloud.md)</li><li>[[!DNL SFTP]](../../sources/connectors/cloud-storage/sftp.md)</li><li>[[!DNL Shopify]](../../sources/connectors/ecommerce/shopify.md)</li></ul> |
| API support for compressed file ingestion | You can now preview and ingest compressed JSON or delimited files using cloud storage sources. For more information, see the tutorial on [collecting cloud storage data using APIs](../../sources/tutorials/api/collect/cloud-storage.md). |
| UI support for recursive file uploading | You can now ingest entire folders recursively when using a cloud storage source. When ingesting an entire folder, you must ensure that its contents share the same schema. For more information, see the tutorial on [configuring a dataflow for cloud storage connectors in the UI](../../sources/tutorials/ui/dataflow/batch/cloud-storage.md). |

To learn more about sources, see the [sources overview](../../sources/home.md).
