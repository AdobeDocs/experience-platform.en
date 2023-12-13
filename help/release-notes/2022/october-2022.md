---
title: Adobe Experience Platform Release Notes October 2022
description: The October 2022 release notes for Adobe Experience Platform.
exl-id: 61ef2472-5e79-433f-9f60-b1245f619b42
---
# Adobe Experience Platform release notes 

**Release date: October 26, 2022**

- [Customer-managed keys](#cmk)
- [Data collection](#data-collection)
- [Destinations](#destinations)
- [Experience Data Model](#xdm)
- [Query Service](#query-service)

## Customer-managed keys {#cmk}

All data stored on Adobe Experience Platform is encrypted at rest using system-level keys. If you are using an application built on top of Platform, you can now opt to use your own encryption keys instead, giving you greater control over your data security.

See the overview on [customer-managed keys](../../landing/governance-privacy-security/customer-managed-keys/overview.md) for details on the feature.

## Data collection {#data-collection}

Adobe Experience Platform provides a suite of technologies that allow you to collect client-side customer experience data and send it to the Adobe Experience Platform Edge Network where it can be enriched, transformed, and distributed to Adobe or non-Adobe destinations.

**New or updated features**

| Feature | Description |
| --- | --- |
| Sensitive data handling for datastreams | Datastreams now leverage several Platform technologies to appropriately handle sensitive data as enforced by regulations such as the Health Insurance Portability and Accountability Act (HIPAA). See the section on [handling senstive data in datstreams](../../datastreams/overview.md#sensitive) for more information.  |
| [!DNL Splunk] extension for event forwarding | You can now send data to [!DNL Splunk] using an [event forwarding](../../tags/ui/event-forwarding/overview.md) extension. See the [[!DNL Splunk] extension overview](../../tags/extensions/server/splunk/overview.md) for more information. |
| [!DNL Zendesk] extension for event forwarding | You can now send data to [!DNL Zendesk] using an [event forwarding](../../tags/ui/event-forwarding/overview.md) extension. See the [[!DNL Zendesk] extension overview](../../tags/extensions/server/zendesk/overview.md) for more information. |

{style="table-layout:auto"}

## [!DNL Destinations] {#destinations}

[!DNL Destinations] are pre-built integrations with destination platforms that allow for the seamless activation of data from Adobe Experience Platform. You can use destinations to activate your known and unknown data for cross-channel marketing campaigns, email campaigns, targeted advertising, and many other use cases.

**New or updated features**

| Feature | Description |
| --- | --- |
| (Beta) Dataset exports | The [Dataset exports Beta functionality](/help/destinations/ui/export-datasets.md) allows you to export first generation data (as defined in the [Real-Time Customer Data Platform product description](https://helpx.adobe.com/legal/product-descriptions/real-time-customer-data-platform-b2c-edition-prime-and-ultimate-packages.html)) out of Adobe Experience Platform to your own external customer systems, via the destinations user interface. This enables you to get data out of Experience Platform with a no-code/low-code workflow to six cloud storage destinations (listed in the table below) for analytical and compliance use cases. |
| (Beta) Enhanced file export capabilities | You can now benefit from enhanced customization functionality when exporting files out of Experience Platform: <br><ul><li>Additional [file naming options](/help/destinations/ui/activate-batch-profile-destinations.md#file-names).</li><li>Ability to set custom file headers in your exported files via the [improved mapping step](/help/destinations/ui/activate-batch-profile-destinations.md#mapping).</li><li>[Ability to customize the formatting of exported CSV data files](/help/destinations/ui/batch-destinations-file-formatting-options.md).</li></ul> <br> This functionality is supported by the six new beta cloud storage cards listed in the table below. |

{style="table-layout:auto"}

**New or updated destinations** {#new-or-updated-destinations}

| Destination | Description |
| ----------- | ----------- |
| [[!DNL Line]](../../destinations/catalog/mobile-engagement/line.md) | Line is a popular communication platform that connects people, services and information and has grown from a chat app into a hub for entertainment, social, and day-to-day activities. |
| [[!DNL Microsoft Dynamics 365]](../../destinations/catalog/crm/microsoft-dynamics-365.md) | Microsoft Dynamics 365 is a cloud-based business application platform that combines Enterprise Resource Planning (ERP) and Customer Relationship Management (CRM) along with productivity applications and AI tools, to bring end-to-end smoother and more controlled operations, better growth potential and reduced costs. |
| [[!DNL (Beta) Adobe Commerce]](../../destinations/catalog/personalization/adobe-commerce.md) | The [!DNL (Beta) Adobe Commerce] destination connector lets you select one or more Real-Time CDP segments to activate to your [!DNL Adobe Commerce] account to deliver a dynamic personalized experience for your shoppers. Within [!DNL Adobe Commerce], you can then select those Real-Time CDP segments to personalize unique offers in the cart such as 'buy 2 get 1 free,'. You also can display hero banners and modify product pricing through promotional offers, all customized to Adobe Real-Time CDP segments. |
| [[!DNL (Beta) Azure Data Lake Storage Gen2]](../../destinations/catalog/cloud-storage/adls-gen2.md) | Create a live outbound connection to [!DNL Azure Data Lake Storage Gen2] to periodically export data files from Adobe Experience Platform into your own storage location. This new beta destination provides enhanced file export functionality and supports dataset exports. |
| [[!DNL (Beta) Data Landing Zone]](../../destinations/catalog/cloud-storage/data-landing-zone.md) | [!DNL Data Landing Zone] is an [!DNL Azure Blob] storage interface provisioned by Adobe Experience Platform, granting you access to a secure, cloud-based file storage facility to export files out of Platform. This new beta destination provides enhanced file export functionality and supports dataset exports. |
| [[!DNL (Beta) Google Cloud Storage]](../../destinations/catalog/cloud-storage/google-cloud-storage.md) | Create a live outbound connection to [!DNL Google Cloud Storage] to periodically export data files from Adobe Experience Platform into your own buckets. This new beta destination provides enhanced file export functionality and supports dataset exports. |
| [[!DNL (Beta) Amazon S3]](../../destinations/catalog/cloud-storage/amazon-s3.md#changelog) | Beta participants are now seeing two [!DNL Amazon S3] destination cards side-by-side in the destinations catalog. The new beta destination provides enhanced file export functionality and supports dataset exports. |
| [[!DNL (Beta) Azure Blob]](../../destinations/catalog/cloud-storage/azure-blob.md#changelog) | Beta participants are now seeing two [!DNL Azure Blob] destination cards side-by-side in the destinations catalog. The new beta destination provides enhanced file export functionality and supports dataset exports. |
| [[!DNL (Beta) SFTP]](../../destinations/catalog/cloud-storage/sftp.md#changelog) | Beta participants are now seeing two [!DNL SFTP] destination cards side-by-side in the destinations catalog. The new beta destination provides enhanced file export functionality and supports dataset exports. |

{style="table-layout:auto"}

**New or updated documentation**

| Documentation | Description |
| ----------- | ----------- |
| [Destinations guardrails](../../destinations/guardrails.md)| This page provides default usage and rate limits with regard to activation behavior. |

For more general information on destinations, refer to the [destinations overview](../../destinations/home.md).

## Experience Data Model (XDM) {#xdm}

XDM is an open-source specification that provides common structures and definitions (schemas) for data that is brought into Adobe Experience Platform. By adhering to XDM standards, all customer experience data can be incorporated into a common representation to deliver insights in a faster, more integrated way. You can gain valuable insights from customer actions, define customer audiences through segments, and use customer attributes for personalization purposes.

**Updated XDM components**

| Component type | Name | Description |
| --- | --- | --- |
| Data type | [[!UICONTROL Session details information]](https://github.com/adobe/xdm/blob/master/components/datatypes/sessiondetails.schema.json) | Updated the `authorized` field from a boolean type to a string. `season` and `episode` have been changed from integers to strings. |
| Data type | [[!UICONTROL Advertising details information]](https://github.com/adobe/xdm/blob/master/components/datatypes/advertisingdetails.schema.json) | `name` has been renamed to `friendlyName`, and `ID` has been renamed to `name`. |
| Data type | [[!UICONTROL Error details information]](https://github.com/adobe/xdm/blob/master/components/datatypes/errordetails.schema.json) | `ID` has been renamed to `name`. |

{style="table-layout:auto"}

For more information on XDM in Platform, see the [XDM System overview](../../xdm/home.md).

## Query Service {#query-service}

Query Service allows you to use standard SQL to query data in Adobe Experience Platform [!DNL Data Lake]. You can join any datasets from the [!DNL Data Lake] and capture the query results as a new dataset for use in reporting, Data Science Workspace, or for ingestion into Real-Time Customer Profile.

**Updated features**

| Feature | Description |
| --- | --- |
| Monitor queries through the Platform UI | The Query Service [!UICONTROL Scheduled Queries] tab provides improved visibility for the status of all query jobs through the UI. You can now find important information about the status of your query runs, including error messages and codes should they fail, from [!UICONTROL Scheduled Queries] tab. You can also subscribe to alerts through the UI for any of these queries based on their status. See the [Monitor Queries document](../../query-service/ui/monitor-queries.md) to learn more about this feature. |
| Query accelerated reporting insights data model | As part of the Data Distiller SKU, the query accelerated store allows you to reduce the time and processing power required to gain critical insights from your data. With the query accelerated store you can build a custom data model and/or extend on existing Adobe Real-Time Customer Data Platform data models to improve your reporting insights and their visualizations. See the [query accelerated store reporting insights document](../../query-service/data-distiller/query-accelerated-store/reporting-insights-data-model.md) to learn more about this feature.  |

{style="table-layout:auto"}

For more information on Query Services, refer to the [Query Service overview](../../query-service/home.md).
New features in Adobe Experience Platform:

