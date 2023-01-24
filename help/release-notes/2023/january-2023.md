---
title: Adobe Experience Platform Release Notes January 2023
description: The January 2023 release notes for Adobe Experience Platform.
---
# Adobe Experience Platform release notes 

**Release date: January 25, 2023**

Updates to existing features in Adobe Experience Platform:

- [Sources](#sources)

## Sources {#sources}

Adobe Experience Platform can ingest data from external sources while allowing you to structure, label, and enhance that data using Platform services. You can ingest data from a variety of sources such as Adobe applications, cloud-based storage, third-party software, and your CRM system.

Experience Platform provides a RESTful API and an interactive UI that lets you set up source connections for various data providers with ease. These source connections allow you to authenticate and connect to external storage systems and CRM services, set times for ingestion runs, and manage data ingestion throughput.

| Feature | Description |
| --- | --- |
| Allow user access to subfolders of cloud storage sources | You can now define access to a specific subfolder of your cloud storage source when creating a new account. Once created, users will only be able to access data from the permitted subfolder. This feature is available to the following cloud storage sources: [Azure Blob Storage](../../sources/connectors/cloud-storage/blob.md), [Google Cloud Storage](../../sources/connectors/cloud-storage/google-cloud-storage.md), [Google PubSub](../../sources/connectors/cloud-storage/google-pubsub.md), and [SFTP](../../sources/connectors/cloud-storage/sftp.md). |
| Beta availability of [!DNL SugarCRM] | [!DNL SugarCRM] sources are now available in beta. Use the [!DNL SugarCRM Accounts & Contacts] and the [!DNL SugarCRM Events] sources to bring data from your [!DNL SugarCRM] account to Experience Platform. For more information, read the [[!DNL SugarCRM] overview](../../sources/connectors/crm/sugarcrm.md). |