---
title: Adobe Experience Platform Release Notes
description: The latest release notes for Adobe Experience Platform.
---

# Adobe Experience Platform release notes 

**Release date: September 29, 2021**

Updates to existing features in Adobe Experience Platform:

- [Data Prep](#data-prep)
- [Sources](#sources)

## Data Prep {#data-prep}

[!DNL Data Prep] allows data engineers to map, transform, and validate data to and from Experience Data Model (XDM).

**New features**

| Feature | Description |
| --- | --- |
| Support for streaming dataflows | You can now use data prep functions when creating a streaming dataflow for [!DNL Amazon Kinesis], [!DNL Azure Event Hubs], and [!DNL Google PubSub]. For more information, see the tutorial on [creating a streaming dataflow for cloud storage sources](../../sources/tutorials/ui/dataflow/streaming/cloud-storage-streaming.md). |

For more information, please see the [[!DNL Data Prep] overview](../../data-prep/home.md).

## Sources {#sources}

Adobe Experience Platform can ingest data from external sources while allowing you to structure, label, and enhance that data using Platform services. You can ingest data from a variety of sources such as Adobe applications, cloud-based storage, third-party software, and your CRM system.

Experience Platform provides a RESTful API and an interactive UI that lets you set up source connections for various data providers with ease. These source connections allow you to authenticate and connect to external storage systems and CRM services, set times for ingestion runs, and manage data ingestion throughput.

| Feature | Description |
| --- | --- |
| [!DNL Data Landing Zone] | You can now create a [!DNL Data Landing Zone] source connection using the [[!DNL Flow Service] API](../../sources/tutorials/api/create/cloud-storage/data-landing-zone.md) or the [user interface](../../sources/tutorials/ui/create/cloud-storage/data-landing-zone.md). [!DNL Data Landing Zone] is an [!DNL Azure Blob] storage interface provisioned by Platform, granting you to access a secure, cloud-based file storage facility to ingest and egress files in and out of Platform. See the [[!DNL Data Landing Zone] overview](../../sources/connectors/cloud-storage/data-landing-zone.md) for more information. |
| [!DNL Snowflake] | You can now create a [!DNL Snowflake] source connection using the [[!DNL Flow Service] API](../../sources/tutorials/api/create/databases/snowflake.md) or the [user interface](../../sources/tutorials/ui/create/databases/snowflake.md) to bring data from your [!DNL Snowflake] database to Platform. See the [[!DNL Snowflake] overview](../../sources/connectors/databases/snowflake.md) for more information. |
| [!DNL SFTP] source enhancements | You can manually set a custom port number when creating an [!DNL SFTP] source connection. See the [[!DNL SFTP] overview](../../sources/connectors/cloud-storage/sftp.md) for more information. | 

To learn more about sources, see the [sources overview](../../sources/home.md).
