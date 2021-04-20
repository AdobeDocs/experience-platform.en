---
keywords: Experience Platform;home;popular topics;source connectors;source connector;sources;data sources;data source;data source connection
solution: Experience Platform
title: Source Connectors Overview
topic: overview
description: Adobe Experience Platform allows data to be ingested from external sources while providing you with the ability to structure, label, and enhance incoming data using Platform services. You can ingest data from a variety of sources such as Adobe applications, cloud-based storage, databases, and many others.
exl-id: efdbed4d-5697-43ef-a47a-a8bcf0f13237
---
# Source connectors overview

Adobe Experience Platform allows data to be ingested from external sources while providing you with the ability to structure, label, and enhance incoming data using Platform services. You can ingest data from a variety of sources such as Adobe applications, cloud-based storages, databases, and many others.

[!DNL Flow Service] is used to collect and centralize customer data from various disparate sources within Platform. The service provides a user interface and RESTful API that lets you set-up source connections to various data providers with ease. These source connections enable you to authenticate your third-party systems, set times for ingestion runs, and manage data ingestion throughput.

With Experience Platform, you can centralize data you collect from disparate sources and use the insights gained from it to do more.

## Types of sources

Sources in Experience Platform are grouped into the following categories:

### Adobe applications

Experience Platform allows data to be ingested from other Adobe applications, including Adobe Analytics, Adobe Audience Manager, and [!DNL Experience Platform Launch]. See the following related documents for more information:

- [Adobe Audience Manager connector overview](connectors/adobe-applications/audience-manager.md)
- [Create an Adobe Audience Manager source connection in the UI](./tutorials/ui/create/adobe-applications/audience-manager.md)
- [Adobe Analytics Classifications Data connector overview](connectors/adobe-applications/classifications.md)
- [Create an Adobe Analytics Classifications Data source connection in the UI](./tutorials/ui/create/adobe-applications/classifications.md)
- [Adobe Analytics data connector overview](connectors/adobe-applications/analytics.md)
- [Create an Adobe Analytics source connection in the UI](./tutorials/ui/create/adobe-applications/analytics.md)
- [Create a Customer Attributes source connection in the UI](./tutorials/ui/create/adobe-applications/customer-attributes.md)
- [[!DNL Marketo Engage] connector overview](connectors/adobe-applications/marketo/marketo.md)
- [Create a [!DNL Marketo Engage] source connection in the UI](./tutorials/ui/create/adobe-applications/marketo.md)

### Advertising

Experience Platform provides support for ingesting data from a third-party advertising system. See the following related documents for more information on specific source connectors:

- [[!DNL Google AdWords]](connectors/advertising/ads.md) connector

### Cloud Storage

Cloud storage sources can bring your own data into Platform without the need to download, format, or upload. Ingested data can be formatted as XDM JSON, XDM Parquet, or delimited. Every step of the process is integrated into the Sources workflow using the user interface. See the following related documents for more information:

- [[!DNL Azure Data Lake Storage Gen2] connector](connectors/cloud-storage/adls-gen2.md)
- [[!DNL Azure Blob] connector](connectors/cloud-storage/blob.md)
- [[!DNL Amazon Kinesis] connector](connectors/cloud-storage/kinesis.md)
- [[!DNL Amazon S3] connector](connectors/cloud-storage/s3.md)
- [[!DNL Apache HDFS] connector](connectors/cloud-storage/hdfs.md)
- [[!DNL Azure Event Hubs] connector](connectors/cloud-storage/eventhub.md)
- [[!DNL Azure File Storage] connector](connectors/cloud-storage/azure-file-storage.md)
- [[!DNL FTP] connector](connectors/cloud-storage/ftp.md)
- [[!DNL Google Cloud Storage] connector](connectors/cloud-storage/google-cloud-storage.md)
- [[!DNL Google PubSub] connector](connectors/cloud-storage/google-pubsub.md)
- [[!DNL Oracle Object Storage] connector](connectors/cloud-storage/oracle-object-storage.md)
- [[!DNL SFTP] connector](connectors/cloud-storage/sftp.md)

### Customer Relationship Management (CRM)

CRM systems provide data that can help build customer relationships, which in turn, create loyalty and drive customer retention. Experience Platform provides support for ingesting CRM data from [!DNL Microsoft Dynamics 365] and [!DNL Salesforce]. See the following related documents for more information:

- [[!DNL Microsoft Dynamics] connector](connectors/crm/ms-dynamics.md)
- [[!DNL Salesforce] connector](connectors/crm/salesforce.md)

### Customer Success

Experience Platform provides support for ingesting data from a third-party customer success application. See the following related documents for more information:

- [[!DNL Salesforce Service Cloud] connector](connectors/customer-success/salesforce-service-cloud.md)
- [[!DNL ServiceNow] connector](connectors/customer-success/servicenow.md)

### Database

Experience Platform provides support for ingesting data from a third-party database. See the following related documents for more information on specific source connectors:

- [[!DNL Amazon Redshift] connector](connectors/databases/redshift.md)
- [[!DNL Apache Hive on Azure HDInsights] connector](connectors/databases/hive.md)
- [[!DNL Apache Spark on Azure HDInsights] connector](connectors/databases/spark.md)
- [[!DNL Azure Data Explorer] connector](connectors/databases/data-explorer.md)
- [[!DNL Azure Synapse Analytics] connector](connectors/databases/synapse-analytics.md)
- [[!DNL Azure Table Storage] connector](connectors/databases/ats.md)
- [[!DNL Couchbase] connector](connectors/databases/couchbase.md)
- [[!DNL Google BigQuery] connector](connectors/databases/bigquery.md)
- [[!DNL GreenPlum] connector](connectors/databases/greenplum.md)
- [[!DNL HP Vertica] connector](connectors/databases/hp-vertica.md)
- [[!DNL IBM DB2] connector](connectors/databases/ibm-db2.md)
- [[!DNL Microsoft SQL Server] connector](connectors/databases/sql-server.md)
- [[!DNL MySQL] connector](connectors/databases/mysql.md)
- [[!DNL Oracle] connector](connectors/databases/oracle.md)
- [[!DNL Phoenix] connector](connectors/databases/phoenix.md)
- [[!DNL PostgreSQL] connector](connectors/databases/postgres.md)

### eCommerce

Experience Platform provides support for ingesting data from a third-party eCommerce system. See the following related documents for more information on specific source connectors:

- [[!DNL Shopify]](connectors/ecommerce/shopify.md)

### Marketing Automation

Experience Platform provides support for ingesting data from a third-party marketing automation system. See the following related documents for more information on specific source connectors:

- [[!DNL HubSpot] connector](connectors/marketing-automation/hubspot.md)

### Payments

Experience Platform provides support for ingesting data from a third-party payments system. See the following related documents for more information on specific source connectors:

- [[!DNL PayPal] connector](connectors/payments/paypal.md)

### Protocols

Experience Platform provides support for ingesting data from a third-party protocols system. See the following related documents for more information on specific source connectors:

- [[!DNL Generic OData] connector](connectors/protocols/odata.md)

## Access control for sources in data ingestion

Permissions for sources in data ingestion can be managed within the Adobe Admin Console. You can access permissions through the **[!UICONTROL Permissions]** tab in a particular product profile. From the **[!UICONTROL Edit Permissions]** panel, you can access the permissions pertaining to sources through the **[!UICONTROL data ingestion]** menu entry. The **[!UICONTROL View Sources]** permission grants read-only access to available sources in the **[!UICONTROL Catalog]** tab and authenticated sources in the **[!UICONTROL Browse]** tab, while the **[!UICONTROL Manage Sources]** permission grants full access to read, create, edit, and disable sources.

The following table outlines how the UI behaves based on different combinations of these permissions:

| Permission level | Description |
| ---- | ----|
| **[!UICONTROL View Sources]** On | Grant read-only access to sources in each source-type in the Catalog tab, as well as the Browse, Accounts, and Dataflow tabs. |
| **[!UICONTROL Manage Sources]** On | In addition to the functions included in **[!UICONTROL View Sources]**, grants access to **[!UICONTROL Connect Source]** option in **[!UICONTROL Catalog]** and to **[!UICONTROL Select Data]** option in **[!UICONTROL Browse]**. **[!UICONTROL Manage Sources]** also allows you to enable or disable **[!UICONTROL DataFlows]** and edit their schedules. |
| **[!UICONTROL View Sources]** Off and **[!UICONTROL Manage Sources]** Off | Revoke all access to sources. |

For more information about the available permissions granted through the Admin Console, including those four sources, see the [access control overview](../access-control/home.md).

## Terms and conditions {#terms-and-conditions}

By using any of the Sources labeled as beta (“Beta”), You hereby acknowledge that the Beta is provided ***“as is” without warranty of any kind***.

Adobe shall have no obligation to maintain, correct, update, change, modify, or otherwise support the Beta. You are advised to use caution and not to rely in any way on the correct functioning or performance of such Beta and/or accompanying materials. The Beta is considered Confidential Information of Adobe.

Any “Feedback” (information regarding the Beta including but not limited to problems or defects you encounter while using the Beta, suggestions, improvements, and recommendations) provided by You to Adobe is hereby assigned to Adobe including all rights, title, and interest in and to such Feedback.

Submit Open Feedback or create a Support Ticket to share your suggestions or report a bug, seek a feature enhancement.
