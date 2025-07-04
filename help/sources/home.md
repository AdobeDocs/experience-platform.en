---
keywords: Experience Platform;home;popular topics;source connectors;source connector;sources;data sources;data source;data source connection
solution: Experience Platform
title: Source Connectors Overview
description: Adobe Experience Platform allows data to be ingested from external sources while providing you with the ability to structure, label, and enhance incoming data using Experience Platform services. You can ingest data from a variety of sources such as Adobe applications, cloud-based storage, databases, and many others.
exl-id: efdbed4d-5697-43ef-a47a-a8bcf0f13237
---
# Source connectors overview

Adobe Experience Platform allows data to be ingested from external sources while providing you with the ability to structure, label, and enhance incoming data using Experience Platform services. You can ingest data from a variety of sources such as Adobe applications, cloud-based storages, databases, and many others.

[!DNL Flow Service] is used to collect and centralize customer data from various disparate sources within Experience Platform. The service provides a user interface and RESTful API that lets you set-up source connections to various data providers with ease. These source connections enable you to authenticate your third-party systems, set times for ingestion runs, and manage data ingestion throughput.

With Experience Platform, you can centralize data you collect from disparate sources and use the insights gained from it to do more.

<div id="recs-overview-body-1"></div>
<div id="recs-overview-body-2"></div>
<div id="recs-overview-body-3"></div>
<div id="recs-overview-body-4"></div>
<div id="recs-overview-body-5"></div>
<div id="recs-overview-body-6"></div>

## Advanced enterprise sources {#advanced-enterprise-sources}

The following sources are available to [Adobe Real-Time Customer Data Platform Ultimate](https://helpx.adobe.com/legal/product-descriptions/real-time-customer-data-platform-b2c-edition-prime-and-ultimate-packages.html) customers only.

- [[!DNL Amazon Kinesis]](connectors/cloud-storage/kinesis.md) [!BADGE Streaming]{type=Positive}
- [[!DNL Amazon Redshift]](connectors/databases/redshift.md) [!BADGE Batch]{type=Informative}
- [[!DNL Azure Databricks]](connectors/databases/databricks.md) [!BADGE Batch]{type=Informative}
- [[!DNL Azure Event Hubs]](connectors/cloud-storage/eventhub.md) [!BADGE Streaming]{type=Positive}
- [[!DNL Azure Synapse Analytics]](connectors/databases/synapse-analytics.md) [!BADGE Batch]{type=Informative}
- [[!DNL Google BigQuery]](connectors/databases/bigquery.md) [!BADGE Batch]{type=Informative}
- [[!DNL Google PubSub]](connectors/cloud-storage/google-pubsub.md) [!BADGE Streaming]{type=Positive}
- [[!DNL Snowflake]](connectors/databases/snowflake-streaming.md) [!BADGE Streaming]{type=Positive}
- [[!DNL Snowflake]](connectors/databases/snowflake.md) [!BADGE Batch]{type=Informative}

## Adobe-built and partner-built sources {#adobe-and-partner-built-sources}

Some of the connectors in the Experience Platform sources catalog are built and maintained by Adobe, while others are built and maintained by partner companies by using [Sources SDK](/help/sources/sources-sdk/overview.md). A note at the top of the documentation page for each partner-built connector calls out if a source is created and maintained by the partner. For example, the [Amazon S3 connector](/help/sources/connectors/cloud-storage/s3.md) is created by Adobe, while the [RainFocus connector](/help/sources/connectors/analytics/rainfocus.md) is created and maintained by the RainFocus team. 

For partner-authored and maintained connectors, this means that issues with the connector might need to be resolved by the partner team (contact method provided in the note in the documentation page). For issues with Adobe-authored and maintained connectors, contact your Adobe representative or Customer Care.

## Sources categories

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
- [Adobe Commerce source overview](connectors/adobe-applications/commerce.md)
- [Adobe Data Collection source overview](connectors/adobe-applications/data-collection.md)
  - [Create a Customer Attributes source connection in the UI](./tutorials/ui/create/adobe-applications/customer-attributes.md)
- [[!DNL Marketo Engage] source overview](connectors/adobe-applications/marketo/marketo.md)
  - [Create a [!DNL Marketo Engage] source connection in the UI](./tutorials/ui/create/adobe-applications/marketo.md)
  - [Create a [!DNL Marketo Engage] source connection and dataflow for custom activity data](./tutorials/ui/create/adobe-applications/marketo-custom-activities.md)

### Advertising {#advertising}
 
Experience Platform provides support for ingesting data from a third-party advertising system. See the following related documents for more information on specific source connectors:

- [Google Ads](connectors/advertising/ads.md) [!BADGE Batch]{type=Informative}

### Analytics {#analytics}

Experience Platform provides support for ingesting data from a third-party analytics platform. Read the following related documents for more information:

- [[!DNL Mixpanel]](connectors/analytics/mixpanel.md) [!BADGE Batch]{type=Informative}
- [[!DNL Pendo]](connectors/analytics/pendo-webhook.md) [!BADGE Streaming]{type=Positive}
- [[!DNL RainFocus]](connectors/analytics/rainfocus.md) [!BADGE Streaming]{type=Positive}

### Cloud Storage {#cloud-storage}

Cloud storage sources can bring your own data into Experience Platform without the need to download, format, or upload. Ingested data can be formatted as XDM JSON, XDM Parquet, or delimited. Every step of the process is integrated into the Sources workflow using the user interface. See the following related documents for more information:

- [[!DNL Azure Data Lake Storage Gen2]](connectors/cloud-storage/adls-gen2.md) [!BADGE Batch]{type=Informative}
- [[!DNL Azure Blob]](connectors/cloud-storage/blob.md) [!BADGE Batch]{type=Informative}
- [[!DNL Amazon S3]](connectors/cloud-storage/s3.md) [!BADGE Batch]{type=Informative}
- [[!DNL Apache HDFS]](connectors/cloud-storage/hdfs.md) [!BADGE Batch]{type=Informative}
- [[!DNL Azure File Storage]](connectors/cloud-storage/azure-file-storage.md) [!BADGE Batch]{type=Informative}
- [[!DNL Data Landing Zone]](connectors/cloud-storage/data-landing-zone.md) [!BADGE Batch]{type=Informative}
- [[!DNL FTP]](connectors/cloud-storage/ftp.md) [!BADGE Batch]{type=Informative}
- [[!DNL Google Cloud Storage]](connectors/cloud-storage/google-cloud-storage.md) [!BADGE Batch]{type=Informative}
- [[!DNL Oracle Object Storage]](connectors/cloud-storage/oracle-object-storage.md) [!BADGE Batch]{type=Informative}
- [[!DNL SFTP]](connectors/cloud-storage/sftp.md) [!BADGE Batch]{type=Informative}

### Consent and Preferences {#consent}

Experience Platform provides support for ingesting data from a third-party consent and preferences management platform. See the following related documents for more information:

- [[!DNL OneTrust Integration]](connectors/consent-and-preferences/onetrust.md) [!BADGE Batch]{type=Informative}

### Customer Relationship Management (CRM) {#customer-relationship-management}

CRM systems provide data that can help build customer relationships, which in turn, create loyalty and drive customer retention. Experience Platform provides support for ingesting CRM data from [!DNL Microsoft Dynamics 365] and [!DNL Salesforce]. See the following related documents for more information:

- [[!DNL Microsoft Dynamics]](connectors/crm/ms-dynamics.md) [!BADGE Batch]{type=Informative}
- [[!DNL Salesforce]](connectors/crm/salesforce.md) [!BADGE Batch]{type=Informative}
- [[!DNL SugarCRM]](connectors/crm/sugarcrm.md) [!BADGE Batch]{type=Informative}
- [[!DNL Veeva CRM]](connectors/crm/veeva.md) [!BADGE Batch]{type=Informative}

### Customer Success {#customer-success}

Experience Platform provides support for ingesting data from a third-party customer success application. See the following related documents for more information:

- [[!DNL Salesforce Service Cloud]](connectors/customer-success/salesforce-service-cloud.md) [!BADGE Batch]{type=Informative}
- [[!DNL ServiceNow]](connectors/customer-success/servicenow.md) [!BADGE Batch]{type=Informative}
- [[!DNL Zendesk]](connectors/customer-success/zendesk.md) [!BADGE Batch]{type=Informative}

### Database {#database}

Experience Platform provides support for ingesting data from a third-party database. See the following related documents for more information on specific source connectors:

- [[!DNL Apache Hive on Azure HDInsights]](connectors/databases/hive.md) [!BADGE Batch]{type=Informative}
- [[!DNL Apache Spark on Azure HDInsights]](connectors/databases/spark.md) [!BADGE Batch]{type=Informative}
- [[!DNL Azure Data Explorer]](connectors/databases/data-explorer.md) [!BADGE Batch]{type=Informative}
- [[!DNL Azure Table Storage]](connectors/databases/ats.md) [!BADGE Batch]{type=Informative}
- [[!DNL GreenPlum]](connectors/databases/greenplum.md) [!BADGE Batch]{type=Informative}
- [[!DNL HP Vertica]](connectors/databases/hp-vertica.md) [!BADGE Batch]{type=Informative}
- [[!DNL IBM DB2]](connectors/databases/ibm-db2.md) [!BADGE Batch]{type=Informative}
- [[!DNL MariaDB]](connectors/databases/mariadb.md) [!BADGE Batch]{type=Informative}
- [[!DNL Microsoft SQL Server]](connectors/databases/sql-server.md) [!BADGE Batch]{type=Informative}
- [[!DNL MySQL]](connectors/databases/mysql.md) [!BADGE Batch]{type=Informative}
- [[!DNL Oracle]](connectors/databases/oracle.md) [!BADGE Batch]{type=Informative}
- [[!DNL PostgreSQL]](connectors/databases/postgres.md) [!BADGE Batch]{type=Informative}
- [[!DNL Teradata Vantage]](connectors/databases/teradata-vantage.md) [!BADGE Batch]{type=Informative}

### Data & Identity Partners {#data-partner}

Experience Platform provides support for ingesting data from a data and identity partner. See the following related documents for more information on specific source connectors:

- [[!DNL Acxiom Data Ingestion]](connectors/data-partners/acxiom-data-ingestion.md) [!BADGE Batch]{type=Informative}
- [[!DNL Acxiom Prospecting Data Import]](connectors/data-partners/acxiom-prospecting-data-import.md) [!BADGE Batch]{type=Informative}
- [[!DNL Algolia User Profiles]](connectors/data-partners/algolia-user-profiles.md) [!BADGE Batch]{type=Informative}
- [[!DNL Bombora Intent]](connectors/data-partners/bombora.md) [!BADGE Batch]{type=Informative}
- [[!DNL Demandbase Intent]](connectors/data-partners/demandbase.md) [!BADGE Batch]{type=Informative}
- [[!DNL Merkury Enterprise Identity Resolution]](connectors/data-partners/merkury.md) [!BADGE Batch]{type=Informative}

### eCommerce {#ecommerce}

Experience Platform provides support for ingesting data from a third-party eCommerce system. See the following related documents for more information on specific source connectors:

- [[!DNL SAP Commerce]](connectors/ecommerce/sap-commerce.md) [!BADGE Batch]{type=Informative}
- [[!DNL Shopify]](connectors/ecommerce/shopify.md) [!BADGE Batch]{type=Informative}
- [[!DNL Shopify]](connectors/ecommerce/shopify-streaming.md) [!BADGE Streaming]{type=Positive}

### Local system {#local-system}

Experience Platform provides support for ingesting data from your local system. See the following related documents for more information on specific source connectors:

- [Local file upload](connectors/local-system/local-file-upload.md)

### Marketing Automation {#marketing-automation}

Experience Platform provides support for ingesting data from a third-party marketing automation system. See the following related documents for more information on specific source connectors:

- [[!DNL Braze]](connectors/marketing-automation/braze.md) [!BADGE Streaming]{type=Positive}
- [[!DNL Chatlio]](connectors/marketing-automation/chatlio-webhook.md) [!BADGE Streaming]{type=Positive}
- [[!DNL Customer.io]](connectors/marketing-automation/customerio-webhook.md) [!BADGE Streaming]{type=Positive}
- [[!DNL HubSpot]](connectors/marketing-automation/hubspot.md) [!BADGE Batch]{type=Informative}
- [[!DNL Mailchimp]](connectors/marketing-automation/mailchimp.md) [!BADGE Batch]{type=Informative}
- [[!DNL Oracle Eloqua]](connectors/marketing-automation/oracle-eloqua.md) [!BADGE Batch]{type=Informative}
- [[!DNL Oracle NetSuite]](connectors/marketing-automation/oracle-netsuite.md) [!BADGE Batch]{type=Informative}
- [[!DNL PathFactory]](connectors/marketing-automation/pathfactory.md) [!BADGE Batch]{type=Informative}
- [[!DNL Salesforce Marketing Cloud]](connectors/marketing-automation/salesforce-marketing-cloud.md) [!BADGE Batch]{type=Informative}

### Payments {#payments}

Experience Platform provides support for ingesting data from a third-party payments system. See the following related documents for more information on specific source connectors:

- [[!DNL Square]](connectors/payments/square.md) [!BADGE Batch]{type=Informative}
- [[!DNL Stripe]](connectors/payments/stripe.md) [!BADGE Batch]{type=Informative}

### Streaming {#streaming}

Experience Platform provides support for ingesting data from streaming sources. See the following related documents for more information on specific source connectors:

- [[!DNL HTTP API]](connectors/streaming/http.md) [!BADGE Streaming]{type=Positive}

### Protocols {#protocols}

Experience Platform provides support for ingesting data from a third-party protocols system. See the following related documents for more information on specific source connectors:

- [[!DNL Generic OData]](connectors/protocols/odata.md) [!BADGE Batch]{type=Informative}
- [[!DNL Generic REST API]](connectors/protocols/generic-rest.md) [!BADGE Batch]{type=Informative}

## Access control for sources in data ingestion

Permissions for sources in data ingestion can be managed within the Adobe Admin Console. You can access permissions through the **[!UICONTROL Permissions]** tab in a particular product profile. From the **[!UICONTROL Edit Permissions]** panel, you can access the permissions pertaining to sources through the **[!UICONTROL data ingestion]** menu entry. The **[!UICONTROL View Sources]** permission grants read-only access to available sources in the **[!UICONTROL Catalog]** tab and authenticated sources in the **[!UICONTROL Browse]** tab, while the **[!UICONTROL Manage Sources]** permission grants full access to read, create, edit, and disable sources.

The following table outlines how the UI behaves based on different combinations of these permissions:

| Permission level | Description |
| ---- | ----|
| **[!UICONTROL View Sources]** On | Grant read-only access to sources in each source-type in the Catalog tab, as well as the Browse, Accounts, and Dataflow tabs. |
| **[!UICONTROL Manage Sources]** On | In addition to the functions included in **[!UICONTROL View Sources]**, grants access to **[!UICONTROL Connect Source]** option in **[!UICONTROL Catalog]** and to **[!UICONTROL Select Data]** option in **[!UICONTROL Browse]**. **[!UICONTROL Manage Sources]** also allows you to enable or disable **[!UICONTROL DataFlows]** and edit their schedules. |
| **[!UICONTROL View Sources]** Off and **[!UICONTROL Manage Sources]** Off | Revoke all access to sources. |

For more information about the available permissions granted through Adobe Permissions, read the [access control overview](../access-control/home.md).

### Attribute-based access control

Attribute-based access control in Adobe Experience Platform allows administrators to control access to specific objects and/or capabilities based on attributes. 

With attribute-based access control, you can apply mapping configurations to fields that you have permissions to. Furthermore, you cannot ingest data to a dataset if you do not have access to all fields in the dataset.

#### Support for attribute-based access control in sources

>[!TIP]
>
>Attribute-based access control works as follows: **roles** are created to categorize the types of users that interact with your Experience Platform instance. **Labels** are applied to **roles** to designate the access of that given role. **Labels** are also applied to resources like schema fields and segments. In order for a user to have access to certain schema fields and segments, they must be added to *a role with the same label that is assigned to the queried resource*. For more information, read the [attribute-based access control end-to-end guide](../access-control/abac/end-to-end-guide.md).

- Apply labels to schema fields to define access to specific schema fields in your organization. Once access to specific schema fields are established, users will only be able to create mappings for the fields that they have access to.
- Users without the appropriate roles will not be able to create or update dataflows with mappings that involve inaccessible schema fields. Furthermore, unauthorized users cannot update, delete, enable, or disable existing dataflows with inaccessible schema fields.
- Additionally, a dataflow must have the exact same schema ID and version in its mapping, target dataset, and target connection.

For more information on attribute-based access control, read the [attribute-based access control overview](../access-control/abac/overview.md).

## Terms and conditions {#terms-and-conditions}

By using any of the Sources labeled as beta ("Beta"), You hereby acknowledge that the Beta is provided ***"as is" without warranty of any kind***.

Adobe shall have no obligation to maintain, correct, update, change, modify, or otherwise support the Beta. You are advised to use Informative and not to rely in any way on the correct functioning or performance of such Beta and/or accompanying materials. The Beta is considered Confidential Information of Adobe.

Any "Feedback" (information regarding the Beta including but not limited to problems or defects you encounter while using the Beta, suggestions, improvements, and recommendations) provided by You to Adobe is hereby assigned to Adobe including all rights, title, and interest in and to such Feedback.

Submit Open Feedback or create a Support Ticket to share your suggestions or report a bug, seek a feature enhancement.
