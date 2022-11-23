---
keywords: Experience Platform;home;popular topics;source connectors;source connector;sources;data sources;data source;data source connection
solution: Experience Platform
title: Source Connectors Overview
topic-legacy: overview
description: Adobe Experience Platform allows data to be ingested from external sources while providing you with the ability to structure, label, and enhance incoming data using Platform services. You can ingest data from a variety of sources such as Adobe applications, cloud-based storage, databases, and many others.
exl-id: efdbed4d-5697-43ef-a47a-a8bcf0f13237
---
# Source connectors overview

Adobe Experience Platform allows data to be ingested from external sources while providing you with the ability to structure, label, and enhance incoming data using Platform services. You can ingest data from a variety of sources such as Adobe applications, cloud-based storages, databases, and many others.

[!DNL Flow Service] is used to collect and centralize customer data from various disparate sources within Platform. The service provides a user interface and RESTful API that lets you set-up source connections to various data providers with ease. These source connections enable you to authenticate your third-party systems, set times for ingestion runs, and manage data ingestion throughput.

With Experience Platform, you can centralize data you collect from disparate sources and use the insights gained from it to do more.

## Types of sources

Sources in Experience Platform are grouped into the following categories:

### Adobe applications {#adobe-applications}

Experience Platform allows data to be ingested from other Adobe applications, including Adobe Analytics, and Adobe Audience Manager. See the following related documents for more information:

- [Adobe Audience Manager source overview](connectors/adobe-applications/audience-manager.md)
  - [Create an Adobe Audience Manager source connection in the UI](./tutorials/ui/create/adobe-applications/audience-manager.md)
- [Adobe Analytics Classifications Data source overview](connectors/adobe-applications/classifications.md)
  - [Create an Adobe Analytics Classifications Data source connection in the UI](./tutorials/ui/create/adobe-applications/classifications.md)
- [Adobe Analytics Report Suite Data source overview](connectors/adobe-applications/analytics.md)
  - [Create an Adobe Analytics source connection in the UI](./tutorials/ui/create/adobe-applications/analytics.md)
- [Adobe Campaign Managed Cloud Services source overview](connectors/adobe-applications/campaign.md)
  - [Create an Adobe Campaign Managed Cloud Services source connection in the UI](./tutorials/ui/create/adobe-applications/campaign.md)
- [Adobe Data Collection source overview](connectors/adobe-applications/data-collection.md)
  - [Create a Customer Attributes source connection in the UI](./tutorials/ui/create/adobe-applications/customer-attributes.md)
- [[!DNL Marketo Engage] source overview](connectors/adobe-applications/marketo/marketo.md)
  - [Create a [!DNL Marketo Engage] source connection in the UI](./tutorials/ui/create/adobe-applications/marketo.md)
- [Adobe Workfront source overview](connectors/adobe-applications/workfront.md)
  - [Create a Workfront source connection in the UI](./tutorials/ui/create/adobe-applications/workfront.md)

### Advertising {#advertising}

Experience Platform provides support for ingesting data from a third-party advertising system. See the following related documents for more information on specific source connectors:

- [Google Ads](connectors/advertising/ads.md)

### Analytics {#analytics}

Experience Platform provides support for ingesting data from a third-party analytics platform. See the following related documents for more information:

- [[!DNL Mixpanel]](connectors/analytics/mixpanel.md)

### Cloud Storage {#cloud-storage}

Cloud storage sources can bring your own data into Platform without the need to download, format, or upload. Ingested data can be formatted as XDM JSON, XDM Parquet, or delimited. Every step of the process is integrated into the Sources workflow using the user interface. See the following related documents for more information:

- [[!DNL Azure Data Lake Storage Gen2]](connectors/cloud-storage/adls-gen2.md)
- [[!DNL Azure Blob]](connectors/cloud-storage/blob.md)
- [[!DNL Amazon Kinesis]](connectors/cloud-storage/kinesis.md)
- [[!DNL Amazon S3]](connectors/cloud-storage/s3.md)
- [[!DNL Apache HDFS]](connectors/cloud-storage/hdfs.md)
- [[!DNL Azure Event Hubs]](connectors/cloud-storage/eventhub.md)
- [[!DNL Azure File Storage]](connectors/cloud-storage/azure-file-storage.md)
- [[!DNL Data Landing Zone]](connectors/cloud-storage/data-landing-zone.md)
- [[!DNL FTP]](connectors/cloud-storage/ftp.md)
- [[!DNL Google Cloud Storage]](connectors/cloud-storage/google-cloud-storage.md)
- [[!DNL Google PubSub]](connectors/cloud-storage/google-pubsub.md)
- [[!DNL Oracle Object Storage]](connectors/cloud-storage/oracle-object-storage.md)
- [[!DNL SFTP]](connectors/cloud-storage/sftp.md)

### Consent and Preferences {#consent}

Experience Platform provides support for ingesting data from a third-party consent and preferences management platform. See the following related documents for more information:

- [[!DNL OneTrust Integration]](connectors/consent-and-preferences/onetrust.md)

### Customer Relationship Management (CRM) {#customer-relationship-management}

CRM systems provide data that can help build customer relationships, which in turn, create loyalty and drive customer retention. Experience Platform provides support for ingesting CRM data from [!DNL Microsoft Dynamics 365] and [!DNL Salesforce]. See the following related documents for more information:

- [[!DNL Microsoft Dynamics]](connectors/crm/ms-dynamics.md)
- [[!DNL Salesforce]](connectors/crm/salesforce.md)
- [[!DNL Veeva CRM]](connectors/crm/veeva.md)
- [[!DNL Zoho CRM]](connectors/crm/zoho.md)

### Customer Success {#customer-success}

Experience Platform provides support for ingesting data from a third-party customer success application. See the following related documents for more information:

- [[!DNL Oracle Service Cloud]](connectors/customer-success/oracle-service-cloud.md)
- [[!DNL Salesforce Service Cloud]](connectors/customer-success/salesforce-service-cloud.md)
- [[!DNL ServiceNow]](connectors/customer-success/servicenow.md)
- [[!DNL Zendesk]](connectors/customer-success/zendesk.md)

### Database {#database}

Experience Platform provides support for ingesting data from a third-party database. See the following related documents for more information on specific source connectors:

- [[!DNL Amazon Redshift]](connectors/databases/redshift.md)
- [[!DNL Apache Hive on Azure HDInsights]](connectors/databases/hive.md)
- [[!DNL Apache Spark on Azure HDInsights]](connectors/databases/spark.md)
- [[!DNL Azure Data Explorer]](connectors/databases/data-explorer.md)
- [[!DNL Azure Synapse Analytics]](connectors/databases/synapse-analytics.md)
- [[!DNL Azure Table Storage]](connectors/databases/ats.md)
- [[!DNL Couchbase]](connectors/databases/couchbase.md)
- [[!DNL Google BigQuery]](connectors/databases/bigquery.md)
- [[!DNL GreenPlum]](connectors/databases/greenplum.md)
- [[!DNL HP Vertica]](connectors/databases/hp-vertica.md)
- [[!DNL IBM DB2]](connectors/databases/ibm-db2.md)
- [[!DNL MariaDB]](connectors/databases/mariadb.md)
- [[!DNL Microsoft SQL Server]](connectors/databases/sql-server.md)
- [[!DNL MySQL]](connectors/databases/mysql.md)
- [[!DNL Oracle]](connectors/databases/oracle.md)
- [[!DNL Phoenix]](connectors/databases/phoenix.md)
- [[!DNL PostgreSQL]](connectors/databases/postgres.md)
- [[!DNL Snowflake]](connectors/databases/snowflake.md)
- [[!DNL Teradata Vantage]](connectors/databases/teradata-vantage.md)

### eCommerce {#ecommerce}

Experience Platform provides support for ingesting data from a third-party eCommerce system. See the following related documents for more information on specific source connectors:

- [[!DNL Shopify]](connectors/ecommerce/shopify.md)

### Local system {#local-system}

Experience Platform provides support for ingesting data from your local system. See the following related documents for more information on specific source connectors:

- [Local file upload](connectors/local-system/local-file-upload.md)

### Marketing Automation {#marketing-automation}

Experience Platform provides support for ingesting data from a third-party marketing automation system. See the following related documents for more information on specific source connectors:

- [[!DNL HubSpot]](connectors/marketing-automation/hubspot.md)
- [[!DNL Mailchimp]](connectors/marketing-automation/mailchimp.md)
- [[!DNL Oracle Eloqua]](connectors/marketing-automation/oracle-eloqua.md)
- [[!DNL Salesforce Marketing Cloud]](connectors/marketing-automation/salesforce-marketing-cloud.md)
<!-- - [[!DNL Oracle Responsys]](connectors/marketing-automation/oracle-responsys.md) -->

### Payments {#payments}

Experience Platform provides support for ingesting data from a third-party payments system. See the following related documents for more information on specific source connectors:

- [[!DNL PayPal]](connectors/payments/paypal.md)
- [[!DNL Square]](connectors/payments/square.md)

### Streaming {#streaming}

Experience Platform provides support for ingesting data from streaming sources. See the following related documents for more information on specific source connectors:

- [[!DNL HTTP API]](connectors/streaming/http.md)

### Protocols {#protocols}

Experience Platform provides support for ingesting data from a third-party protocols system. See the following related documents for more information on specific source connectors:

- [[!DNL Generic OData]](connectors/protocols/odata.md)
- [[!DNL Generic REST API]](connectors/protocols/generic-rest.md)

## Access control for sources in data ingestion

Permissions for sources in data ingestion can be managed within the Adobe Admin Console. You can access permissions through the **[!UICONTROL Permissions]** tab in a particular product profile. From the **[!UICONTROL Edit Permissions]** panel, you can access the permissions pertaining to sources through the **[!UICONTROL data ingestion]** menu entry. The **[!UICONTROL View Sources]** permission grants read-only access to available sources in the **[!UICONTROL Catalog]** tab and authenticated sources in the **[!UICONTROL Browse]** tab, while the **[!UICONTROL Manage Sources]** permission grants full access to read, create, edit, and disable sources.

The following table outlines how the UI behaves based on different combinations of these permissions:

| Permission level | Description |
| ---- | ----|
| **[!UICONTROL View Sources]** On | Grant read-only access to sources in each source-type in the Catalog tab, as well as the Browse, Accounts, and Dataflow tabs. |
| **[!UICONTROL Manage Sources]** On | In addition to the functions included in **[!UICONTROL View Sources]**, grants access to **[!UICONTROL Connect Source]** option in **[!UICONTROL Catalog]** and to **[!UICONTROL Select Data]** option in **[!UICONTROL Browse]**. **[!UICONTROL Manage Sources]** also allows you to enable or disable **[!UICONTROL DataFlows]** and edit their schedules. |
| **[!UICONTROL View Sources]** Off and **[!UICONTROL Manage Sources]** Off | Revoke all access to sources. |

For more information about the available permissions granted through Adobe Permissions, read the [access control overview](../access-control/home.md).

### Attribute-based access control for sources

Attribute-based access control in Adobe Experience Platform allows administrators to control access to specific objects and/or capabilities based on attributes. 

With attribute-based access control, you can apply mapping configurations to fields that you have permissions to. Furthermore, you cannot ingest data to a dataset if you do not have access to all fields in the dataset.

For more information on attribute-based access control, read the [attribute-based access control overview](../access-control/abac/overview.md).

## Terms and conditions {#terms-and-conditions}

By using any of the Sources labeled as beta ("Beta"), You hereby acknowledge that the Beta is provided ***"as is" without warranty of any kind***.

Adobe shall have no obligation to maintain, correct, update, change, modify, or otherwise support the Beta. You are advised to use caution and not to rely in any way on the correct functioning or performance of such Beta and/or accompanying materials. The Beta is considered Confidential Information of Adobe.

Any "Feedback" (information regarding the Beta including but not limited to problems or defects you encounter while using the Beta, suggestions, improvements, and recommendations) provided by You to Adobe is hereby assigned to Adobe including all rights, title, and interest in and to such Feedback.

Submit Open Feedback or create a Support Ticket to share your suggestions or report a bug, seek a feature enhancement.
