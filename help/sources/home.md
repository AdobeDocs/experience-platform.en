---
keywords: Experience Platform;home;popular topics
solution: Experience Platform
title: Adobe Experience Platform Source Connectors overview
topic: overview
---

# Source connectors overview

Adobe Experience Platform allows data to be ingested from external sources while providing you with the ability to structure, label, and enhance incoming data using Platform services. You can ingest data from a variety of sources such as Adobe applications, cloud-based storage, databases, and many others.

Experience Platform provides a RESTful API and an interactive UI that lets you set-up source connections to various data providers with ease. These source connections enable you to authenticate your third-party systems, set times for ingestion runs, and manage data ingestion throughput.

With Experience Platform, you can centralize data you collect from disparate sources and use the insights gained from it to do more.

## Types of sources

Sources in Experience Platform are grouped into the following categories:

### Adobe applications

Experience Platform allows data to be ingested from other Adobe applications, including Adobe Analytics, Adobe Audience Manager, and Experience Platform Launch. See the following related documents for more information:

- [Adobe Audience Manager connector overview](connectors/adobe-applications/audience-manager.md)
- [Create an Adobe Audience Manager source connector in the UI](./tutorials/ui/create/adobe-applications/audience-manager.md)
- [Adobe Analytics data connector overview](connectors/adobe-applications/analytics.md)
- [Create an Adobe Analytics source connector in the UI](./tutorials/ui/create/adobe-applications/analytics.md)
- [Create a Customer Attributes source connector in the UI](./tutorials/ui/create/adobe-applications/customer-attributes.md)

### Advertising

Experience Platform provides support for ingesting data from a third-party advertising system. See the following related documents for more information on specific source connectors:

- [Google Ads connector](connectors/advertising/ads.md)

### Cloud Storage

Cloud storage sources can bring your own data into Platform without the need to download, format, or upload. Ingested data can be formatted as XDM JSON, XDM parquet, or delimited. Every step of the process is integrated into the Sources workflow using the user interface. See the following related documents for more information:

- [Azure Data Lake Storage Gen2 connector](connectors/cloud-storage/adls-gen2.md)
- [Azure Blob and Amazon S3 connector](connectors/cloud-storage/blob-s3.md)
- [Azure EventHub connector](connectors/cloud-storage/eventhub.md)
- [AWS Kinesis connector](connectors/cloud-storage/kinesis.md)
- [FTP and SFTP connector](connectors/cloud-storage/ftp-sftp.md)
- [Google Cloud Storage connector](connectors/cloud-storage/google-cloud-storage.md)

### Customer Relationship Management (CRM)

CRM systems provide data that can help build customer relationships, which in turn, create loyalty and drive customer retention. Experience Platform provides support for ingesting CRM data from Microsoft Dynamics 365 and Salesforce. See the following related documents for more information:

- [Microsoft Dynamics connector](connectors/crm/ms-dynamics.md)
- [Salesforce connector](connectors/crm/salesforce.md)

### Customer Success

Experience Platform provides support for ingesting data from a third-party customer success application. See the following related documents for more information:

- [Salesforce Service Cloud connector](connectors/customer-success/salesforce-service-cloud.md)
- [ServiceNow connector](connectors/customer-success/servicenow.md)

### Database

Experience Platform provides support for ingesting data from a third-party database. See the following related documents for more information on specific source connectors:

- [Amazon Redshift connector](connectors/databases/redshift.md)
- [Apache Hive on Azure HDInsights connector](connectors/databases/hive.md)
- [Apache Spark on Azure HDInsights connector](connectors/databases/spark.md)
- [Azure Data Explorer connector](connectors/databases/data-explorer.md)
- [Azure Synapse Analytics connector](connectors/databases/synapse-analytics.md)
- [Azure Table Storage connector](connectors/databases/ats.md)
- [Google BigQuery connector](connectors/databases/bigquery.md)
- [IBM DB2 connector](connectors/databases/ibm-db2.md)
- [MariaDB connector](connectors/databases/mariadb.md)
- [Microsoft SQL Server connector](connectors/databases/sql-server.md)
- [MySQL connector](connectors/databases/mysql.md)
- [Oracle connector](connectors/databases/oracle.md)
- [Phoenix connector](connectors/databases/phoenix.md)
- [PostgreSQL connector](connectors/databases/postgres.md)

### Marketing Automation

Experience Platform provides support for ingesting data from a third-party marketing automation system. See the following related documents for more information on specific source connectors:

- [HubSpot connector](connectors/marketing-automation/hubspot.md)

### Payments

Experience Platform provides support for ingesting data from a third-party payments system. See the following related documents for more information on specific source connectors:

- [PayPal connector](connectors/payments/paypal.md)

### Protocols

Experience Platform provides support for ingesting data from a third-party protocols system. See the following related documents for more information on specific source connectors:

- [Generic OData connector](connectors/protocols/odata.md)

## Access control for sources in data ingestion

Permissions for sources in data ingestion can be managed within the Adobe Admin Console. You can access permissions through the *Permissions* tab in a particular product profile. From the **Edit Permissions** panel, you can access the permissions pertaining to sources through the *data ingestion* menu entry. The **View Sources** permission grants read-only access to available sources in the *Catalog* tab and authenticated sources in the *Browse* tab, while the **Manage Sources** permission grants full access to read, create, edit, and disable sources.

The following table outlines how the UI behaves based on different combinations of these permissions:

| Permission level | Description |
| ---- | ----|
| **View Sources** On | Grant read-only access to sources in each source-type in the *Catalog* tab, as well as the *Browse*, *Accounts*, and *DataFlow* tabs. |
| **Manage Sources** On | In addition to the functions included in **View Sources**, grants access to *Connect Source* option in *Catalog* and to *Select Data* option in *Browse*. **Manage Sources** also allows you to enable or disable *DataFlows* and edit their schedules. |
| **View Sources** Off and **Manage Sources** Off | Revoke all access to sources. |

For more information about the available permissions granted through the Admin Console, including those four sources, see the [access control overview](../access-control/home.md).
