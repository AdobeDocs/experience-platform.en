---
title: Adobe Experience Platform Release Notes September 2024
description: The September 2024 release notes for Adobe Experience Platform.
---
# Adobe Experience Platform release notes 

**Release date: September 24, 2024**

Updates to existing features and documentation in Adobe Experience Platform:

- [Alerts](#alerts)
- [Data Prep](#data-prep)
- [Destinations](#destinations)
- [Identity Service](#identity-service)
- [Segmentation Service](#segmentation-service)
- [Sources](#sources)

## Alerts {#alerts}

Experience Platform allows you to subscribe to event-based alerts for various Platform activities. You can subscribe to different alert rules through the [!UICONTROL Alerts] tab in the Platform user interface, and can choose to receive alert messages within the UI itself or through email notifications.

**New or updated features**

| Feature | Description |
| --- | --- |
|  Development sandbox support | You can now [subscribe to alerts](../../observability/alerts/ui.md) in both production and development sandboxes, enabling seamless monitoring across all environments. |
|  Email templates | [Email alerts](../../observability/alerts/ui.md) now include detailed asset information, ensuring you have all the key details at your fingertips. |
|  Enhanced Customization | You can now configure [alert thresholds](./../observability/alerts/ui.md#alert-threshold) offering greater flexibility to tailor alerts to your specific needs for the following alert types:<br><ul><li>Segment Job Delay</li><li>Segment Export Delay</li><li>Destination Flow Run Delay</li><li>Identity Service Flow Run Delay</li><li>Profile Flow Run Delay</li><li>Sources Flow Run Delay</li><li>Query Run Delay</li><li>Activation Skip Rate Exceeded</li><li>Sources Ingestion Error Rate Exceeded</ul> |
| Expanded Alerts | Audit event information alerts are now available for subscription for the following [alert rules](./../observability/alerts/rules.md):<br><ul><li>Audience create</li><li>Audience update</li><li>Audience delete</li><li>Dataset create</li><li>Dataset update</li><li>Dataset delete</li><li>Schema create</li><li>Schema update</li><li>Schema delete. |

{style="table-layout:auto"}

For more information about alerts, read the [[!DNL Observability Insights] overview](../../observability/home.md).


## Data Prep {#data-prep}

Use data prep to map, transform, and validate data to and from Experience Data Model (XDM).

**New or updated features**

| Feature | Description |
| --- | --- |
| [!BADGE Beta]{type=Informative} New Data Prep functions for use in Destinations | You can now use the following array functions for Destinations use cases:<ul><li>`array_to_string`</li><li>`filterArray`</li><li>`transformArray`</li><li>`flattenArray`</li></ul> For more information, read the the [data prep functions guide](../../data-prep/functions.md#arrays). |

{style="table-layout:auto"}

For more information on Data Prep, read the [Data Prep overview](../../data-prep/home.md).

## Destinations {#destinations}

[!DNL Destinations] are pre-built integrations with destination platforms that allow for the seamless activation of data from Adobe Experience Platform. You can use destinations to activate your known and unknown data for cross-channel marketing campaigns, email campaigns, targeted advertising, and many other use cases.

**New or updated destinations** {#new-updated-destinations}

| Destination | Description |
| --- | --- |
| [Amazon Ads](/help/destinations/catalog/advertising/amazon-ads.md) | The September 2024 release adds the mapping option to export the `countryCode` parameter into Amazon Ads. Use `countryCode` in the [mapping step](/help/destinations/catalog/advertising/amazon-ads.md#map) to improve your identity match rates with Amazon. |

{style="table-layout:auto"}

**New or updated functionality** {#destinations-new-updated-functionality}


| Feature | Description |
| --- | --- |
| [Dataset export](/help/destinations/ui/export-datasets.md) enhancements | The September 2024 release of Experience Platform includes several enhancements to the dataset export feature capabilities, to better support various data egress use cases. These feature enhancements include: <ul><li>New data folder configurability options, including the option to add and remove subfolders.</li><li>New export options including full file export (once) and the ability to specify end dates</li><li>Note: Adobe is also introducing a default end date of May 1st 2025 for all dataset export dataflows created prior to the September release. For any of these dataflows, customers will need to update the end date in the dataflow manually before the end date, otherwise exports will stop on this date.</li></ul> <br> ![Image of the Experience Platform user interface highlighting the Edit schedule and folders option in the scheduling step.](../2024/assets/september/edit-schedule-folders.png "Edit schedule and folders option in the scheduling step."){width="250" align="center" zoomable="yes"} |

{style="table-layout:auto"}

For more information, read the [destinations overview](../../destinations/home.md).

## Identity Service {#identity-service}

Use Adobe Experience Platform Identity Service to create a comprehensive view of your customers and their behaviors by bridging identities across devices and systems, allowing you to deliver impactful, personal digital experiences in real time.

**Updated documentation**

| Feature | Description |
| --- | --- |
| Troubleshooting guide for identity graph linking rules | Read the new [troubleshooting guide for identity graph linking rules](../../identity-service/identity-graph-linking-rules/troubleshooting.md) for approaches and debugging solutions that you can undertake to resolve common issues that you might encounter when working with identity graph linking rules. |
| FAQ for identity graph linking rules | Read the new [identity graph linking rules FAQ](../../identity-service/identity-graph-linking-rules/troubleshooting.md#frequently-asked-questions) for a list of answers to frequently asked questions regarding namespace priority, the identity optimization algorithm, and other facets of identity graph linking rules. |

{style="table-layout:auto"}

For more information on Identity Service, read the [Identity Service overview](../../identity-service/home.md).

## Segmentation Service {#segmentation-service}

[!DNL Segmentation Service] defines a particular subset of profiles by describing the criteria that distinguishes a marketable group of people within your customer base. Segments can be based on record data (such as demographic information) or time series events representing customer interactions with your brand.

**New or updated features**

| Feature | Description |
| --- | --- |
| Unified Search implementation | Search behavior within Segment Builder will now use Unified Search. This allows for a more robust experience when managing and searching for audiences to reuse for segment membership. For more information on this change, read the [Segment Builder guide](../../segmentation/ui/segment-builder.md#rule-builder-canvas). |

{style="table-layout:auto"}

For more information on [!DNL Segmentation Service], read the [Segmentation overview](../../segmentation/home.md).

## Sources {#sources}

Experience Platform provides a RESTful API and an interactive UI that lets you set up source connections for various data providers with ease. These source connections allow you to authenticate and connect to external storage systems and CRM services, set times for ingestion runs, and manage data ingestion throughput.

Use sources in Experience Platform to ingest data from an Adobe application or a third-party data source.

**Updated feature**

| Feature | Description |
| --- | --- |
| [!BADGE Beta]{type=Informative} Support for encrypted data ingestion in the UI | You can now ingest encrypted data from a cloud storage batch source using the sources workspace in the Experience Platform user interface. Read the tutorial on [ingesting encrypted data in the UI](../../sources/tutorials/ui/encryped-ingestion.md) for more information. |
| General availability of [!DNL Snowflake Streaming] source | The [!DNL Snowflake Streaming] source is now in GA. Use this source to stream data from your [!DNL Snowflake] account to Experience Platform. Read the [[!DNL Snowflake Streaming] overview](../../sources/connectors/databases/snowflake-streaming.md)for more information. |
| Support for service account authentication in [!DNL Google BigQuery] | You can now connect your [!DNL Google BigQuery] account to Experience Platform using service account authentication. Read the [[!DNL Google BigQuery] overview](../../sources/connectors/databases/bigquery.md#generate-your-google-bigquery-credentials) for more information. <br> ![Image of the Experience Platform user interface highlighting the Edit schedule and folders option in the scheduling step.](../2024/assets/september/service_auth.png "Service authentication for Google BigQuery."){width="250" align="center" zoomable="yes"}|
| Support for skipping sample data preview | You can now elect to skip data preview when creating a source connection with the following sources: <ul><li>[[!DNL Google BigQuery]](../../sources/tutorials/ui/create/databases/bigquery.md#skip-preview-of-sample-data)</li><li>[[!DNL Salesforce]](../../sources/tutorials/ui/create/crm/salesforce.md#skip-preview-of-sample-data)</li><li>[[!DNL Snowflake]](../../sources/tutorials/ui/create/databases/snowflake.md#skip-preview-of-sample-data)</li></ul> You can skip data preview to circumvent a timeout that may occur when ingesting large batches data. Doing so may prevent the auto-validation of your calculated and required fields. If you elect to skip data preview,  then you may have to manually validate your calculated and required fields during mapping. |
| Support for disabling chunking in [!DNL SFTP] | You can now configure a setting that allows you to disable chunking in the [!DNL SFTP] source. Read the [[!DNL SFTP] overview](../../sources/connectors/cloud-storage/sftp.md) for more information.|

{style="table-layout:auto"}

For more information, read the [sources overview](../../sources/home.md).
