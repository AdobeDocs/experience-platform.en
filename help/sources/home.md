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
- [Create an Adobe Audience Manager source connector in the UI](https://www.adobe.io/apis/experienceplatform/home/tutorials/sources-ui-tutorials.html#!api-specification/markdown/narrative/tutorials/sources_tutorial/ui/adobe-applications/aam-ui-tutorial.md)
- [Adobe Analytics data connector overview](connectors/adobe-applications/analytics.md)
- [Create an Adobe Analytics source connector in the UI](https://www.adobe.io/apis/experienceplatform/home/tutorials/sources-ui-tutorials.html#!api-specification/markdown/narrative/tutorials/sources_tutorial/ui/adobe-applications/adobe-analytics-ui-tutorial.md)

### Cloud Storage

Cloud storage sources can bring your own data into Platform without the need to download, format, or upload. Every step of the process is integrated into the Sources workflow using the user interface. Support for cloud storage providers include Amazon S3, Azure Blob, FTP servers, and SFTP servers. See the following related documents for more information:

- [Create an Azure Blob or Amazon S3 source connector in the UI](https://www.adobe.io/apis/experienceplatform/home/tutorials/sources-ui-tutorials.html#!api-specification/markdown/narrative/tutorials/sources_tutorial/ui/cloud-storages/amazon-s3-ui-tutorial.md)
- [Create an Azure Data Lake Storage Gen2 source connector in the UI](https://www.adobe.io/apis/experienceplatform/home/tutorials/sources-ui-tutorials.html#!api-specification/markdown/narrative/tutorials/sources_tutorial/ui/cloud-storages/adls-gen2-ui-tutorial.md)
- [Create an FTP or SFTP source connector in the UI](https://www.adobe.io/apis/experienceplatform/home/tutorials/sources-ui-tutorials.html#!api-specification/markdown/narrative/tutorials/sources_tutorial/ui/cloud-storages/ftp-sftp-ui-tutorial.md)
- [Create a Google Cloud Storage source connector in the UI](https://www.adobe.io/apis/experienceplatform/home/tutorials/sources-ui-tutorials.html#!api-specification/markdown/narrative/tutorials/sources_tutorial/ui/cloud-storages/google-cloud-storage-ui-tutorial.md)

### Customer Relationship Management (CRM)

CRM systems provide data that can help build customer relationships, which in turn, create loyalty and drive customer retention. Experience Platform provides support for ingesting CRM data from Microsoft Dynamics 365 and Salesforce. See the following related documents for more information:

- [Create a Microsoft Dynamics 365 or Salesforce source connector in the UI](https://www.adobe.io/apis/experienceplatform/home/tutorials/sources-ui-tutorials.html#!api-specification/markdown/narrative/tutorials/sources_tutorial/ui/crm/dynamics-salesforce-ui-tutorial.md)
- [Create a PayPal source connector in the UI](https://www.adobe.io/apis/experienceplatform/home/tutorials/sources-ui-tutorials.html#!api-specification/markdown/narrative/tutorials/sources_tutorial/ui/crm/paypal-tutorial.md)

### Customer Success (CS)

Experience Platform provides support for ingesting data from a third-party customer success application. See the following related documents for more information:

- [Create a Salesforce Service Cloud source connector in the UI](https://www.adobe.io/apis/experienceplatform/home/tutorials/sources-ui-tutorials.html#!api-specification/markdown/narrative/tutorials/sources_tutorial/ui/customer-success/salesforce-service-cloud-tutorial.md)
- [Create a ServiceNow source connector in the UI](https://www.adobe.io/apis/experienceplatform/home/tutorials/sources-ui-tutorials.html#!api-specification/markdown/narrative/tutorials/sources_tutorial/ui/customer-success/servicenow-ui-tutorial.md)

### Database

Experience Platform provides support for ingesting data from a third-party database. See the following related documents for more information on specific source connectors:

- [Create an AWS Redshift source connector in the UI](https://www.adobe.io/apis/experienceplatform/home/tutorials/sources-ui-tutorials.html#!api-specification/markdown/narrative/tutorials/sources_tutorial/ui/databases/amazon-redshift-ui-tutorial.md)
- [Create an Azure Synapse Analytics source connector in the UI](https://www.adobe.io/apis/experienceplatform/home/tutorials/sources-ui-tutorials.html#!api-specification/markdown/narrative/tutorials/sources_tutorial/ui/databases/azure-synapse-analytics-ui-tutorial.md)
- [Create a Google BigQuery source connector in the UI](https://www.adobe.io/apis/experienceplatform/home/tutorials/sources-ui-tutorials.html#!api-specification/markdown/narrative/tutorials/sources_tutorial/ui/databases/google-big-query-ui-tutorial.md)
- [Create a MariaDB source connector in the UI](https://www.adobe.io/apis/experienceplatform/home/tutorials/sources-api-tutorials.html#!api-specification/markdown/narrative/tutorials/sources_tutorial/api/database-nosql/mariadb-api-tutorial.md)
- [Create a Microsoft SQL Server source connector in the UI](https://www.adobe.io/apis/experienceplatform/home/tutorials/sources-ui-tutorials.html#!api-specification/markdown/narrative/tutorials/sources_tutorial/ui/databases/sql-server-ui-tutorial.md)
- [Create a MySQL source connector in the UI](https://www.adobe.io/apis/experienceplatform/home/tutorials/sources-ui-tutorials.html#!api-specification/markdown/narrative/tutorials/sources_tutorial/ui/databases/mysql-ui-tutorial.md)
- [Create a PostgreSQL source connector in the UI](https://www.adobe.io/apis/experienceplatform/home/tutorials/sources-ui-tutorials.html#!api-specification/markdown/narrative/tutorials/sources_tutorial/ui/databases/postgresql-tutorial.md)

### Marketing Automation

Experience Platform provides support for ingesting data from a third-party marketing automation system. See the following related documents for more information on specific source connectors:

- [Create a HubSpot source connector in the UI](https://www.adobe.io/apis/experienceplatform/home/tutorials/sources-ui-tutorials.html#!api-specification/markdown/narrative/tutorials/sources_tutorial/ui/marketing-automation/hubspot-tutorial.md)

## API tutorials

You can create source connectors using the Flow Service API. For more information, see the [sources API tutorial document](https://www.adobe.io/apis/experienceplatform/home/tutorials/sources-api-tutorials.html#!api-specification/markdown/narrative/tutorials/sources_tutorial/api/sources-api-tutorial.md).

## Access control for sources in data ingestion

Permissions for sources in data ingestion can be managed within the Adobe Admin Console. You can access permissions through the *Permissions* tab in a particular product profile. From the **Edit Permissions** panel, you can access the permissions pertaining to sources through the *data ingestion* menu entry. The **View Sources** permission grants read-only access to available sources in the *Catalog* tab and authenticated sources in the *Browse* tab, while the **Manage Sources** permission grants full access to read, create, edit, and disable sources.

The following table outlines how the UI behaves based on different combinations of these permissions:

| Permission level | Description |
| ---- | ----|
| **View Sources** On | Grant read-only access to sources in each source-type in the *Catalog* tab, as well as the *Browse*, *Accounts*, and *DataFlow* tabs. |
| **Manage Sources** On | In addition to the functions included in **View Sources**, grants access to *Connect Source* option in *Catalog* and to *Select Data* option in *Browse*. **Manage Sources** also allows you to enable or disable *DataFlows* and edit their schedules. |
| **View Sources** Off and **Manage Sources** Off | Revoke all access to sources. |

For more information about the available permissions granted through the Admin Console, including those four sources, see the [access control overview](../access-control/home.md).
