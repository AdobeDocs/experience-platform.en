---
title: Adobe Experience Platform Release Notes September 2024
description: The September 2024 release notes for Adobe Experience Platform.
---
# Adobe Experience Platform release notes 

**Release date: September 24, 2024**

Updates to existing features and documentation in Experience Platform:

- [Identity Service](#identity-service)
- [Sources](#sources)

## Identity Service {#identity-service}

Use Adobe Experience Platform Identity Service to create a comprehensive view of your customers and their behaviors by bridging identities across devices and systems, allowing you to deliver impactful, personal digital experiences in real time.

**Updated documentation**

| Feature | Description |
| --- | --- |
| Troubleshooting guide for identity graph linking rules | Refer to the new [troubleshooting guide for identity graph linking rules](../../identity-service/identity-graph-linking-rules/troubleshooting.md) for approaches and debugging solutions that you can undertake to resolve common issues that you might encounter when working with identity graph linking rules. |
| FAQ for identity graph linking rules | Refer to the new [identity graph linking rules FAQ](../../identity-service/identity-graph-linking-rules/troubleshooting.md#frequently-asked-questions) for a list of answers to frequently asked questions regarding namespace priority, the identity optimization algorithm, and other facets of identity graph linking rules. |

{style="table-layout:auto"}

For more information on Identity Service, read the [Identity Service overview](../../identity-service/home.md).

## Sources {#sources}

Experience Platform provides a RESTful API and an interactive UI that lets you set up source connections for various data providers with ease. These source connections allow you to authenticate and connect to external storage systems and CRM services, set times for ingestion runs, and manage data ingestion throughput.

Use sources in Experience Platform to ingest data from an Adobe application or a third-party data source.

**Updated feature**

| Feature | Description |
| --- | --- |
| [!BADGE Beta]{type=Informative} Support for encrypted data ingestion in the UI | You can now ingest encrypted data from a cloud storage batch source using the sources workspace in the Experience Platform user interface. Read the tutorial on [ingesting encrypted data in the UI](../../sources/tutorials/ui/encryped-ingestion.md) for more information. |
| General availability of [!DNL Snowflake Streaming] source | The [!DNL Snowflake Streaming] source is now in GA. Use this source to stream data from your [!DNL Snowflake] account to Experience Platform. Read the [[!DNL Snowflake Streaming] overview](../../sources/connectors/databases/snowflake-streaming.md)for more information. |
| Support for service account authentication in [!DNL Google BigQuery] | You can now connect your [!DNL Google BigQuery] account to Experience Platform using service account authentication. Read the [[!DNL Google BigQuery] overview](../../sources/connectors/databases/bigquery.md#generate-your-google-bigquery-credentials) for more information. |
| Support for skipping sample data preview | You can now elect to skip data preview when creating a source connection with the following sources: <ul><li>[[!DNL Google BigQuery]](../../sources/tutorials/ui/create/databases/bigquery.md#skip-preview-of-sample-data)</li><li>[[!DNL Salesforce]](../../sources/tutorials/ui/create/crm/salesforce.md#skip-preview-of-sample-data)</li><li>[[!DNL Snowflake]](../../sources/tutorials/ui/create/databases/snowflake.md#skip-preview-of-sample-data)</li></ul> You can skip data preview to circumvent a timeout that may occur when ingesting large batches data. Doing so may prevent the auto-validation of your calculated and required fields. If you elect to skip data preview,  then you may have to manually validate your calculated and required fields during mapping. |
| Support for disabling chunking in [!DNL SFTP] | You can now configure a setting that allows you to disable chunking in the [!DNL SFTP] source. Read the [[!DNL SFTP] overview](../../sources/connectors/cloud-storage/sftp.md) for more information.|

{style="table-layout:auto"}

For more information, read the [sources overview](../../sources/home.md).