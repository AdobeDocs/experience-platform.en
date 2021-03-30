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

- [[!DNL Sources]](#sources)

## [!DNL Sources] {#sources}

Adobe Experience Platform can ingest data from external sources while allowing you to structure, label, and enhance that data using Platform services. You can ingest data from a variety of sources such as Adobe applications, cloud-based storage, third-party software, and your CRM system.

Experience Platform provides a RESTful API and an interactive UI that lets you set up source connections for various data providers with ease. These source connections allow you to authenticate and connect to external storage systems and CRM services, set times for ingestion runs, and manage data ingestion throughput.

The following updates to sources are included in the March 2021 release of Experience Platform:

| Feature | Description |
| ------- | ----------- |
| Beta sources moving to GA | The following sources have been promoted from beta to GA: <ul><li>[[!DNL MySQL]](../../sources/connectors/databases/mysql.md)</li><li>[[!DNL PostGres]](../../sources/connectors/databases/postgres.md)</li><li>[[!DNL Salesforce Service Cloud]](../../sources/connectors/customer-success/salesforce-service-cloud.md)</li><li>[[!DNL SFTP]](../../sources/connectors/cloud-storage/sftp.md)</li><li>[[!DNL Shopify]](../../sources/connectors/ecommerce/shopify.md)</li></ul> |
| API support for compressed file ingestion | You can now preview and ingest compressed JSON or delimited files using cloud storage sources. For more information, see the tutorial on [collecting cloud storage data using APIs](../../sources/tutorials/api/collect/cloud-storage.md). |
| UI support for recursive file uploading | You can now ingest entire folders recursively when using a cloud storage source. When ingesting an entire folder, you must ensure that its contents share the same schema. For more information, see the tutorial on [configuring a dataflow for cloud storage connectors in the UI](../../sources/tutorials/ui/dataflow/batch/cloud-storage.md). |

To learn more about sources, see the [sources overview](../../sources/home.md).
