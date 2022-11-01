---
title: Adobe Experience Platform Release Notes October 2022
description: The October 2022 release notes for Adobe Experience Platform.
---
# Adobe Experience Platform release notes 

**Release date: October 26, 2022**

- [Customer-managed keys](#cmk)

Updates to existing features in Adobe Experience Platform:

- [Data collection](#data-collection)
- [Destinations](#destinations)
- [Experience Data Model (XDM)](#xdm)
- [Query Service](#query-service)
- [Sources](#sources)

## Customer-managed keys {#cmk}

All data stored on Adobe Experience Platform is encrypted at rest using system-level keys. If you are using an application built on top of Platform, you can now opt to use your own encryption keys instead, giving you greater control over your data security.

See the overview on [customer-managed keys](../../landing/governance-privacy-security/customer-managed-keys.md) for details on the feature.

## Data collection {#data-collection}

Adobe Experience Platform provides a suite of technologies that allow you to collect client-side customer experience data and send it to the Adobe Experience Platform Edge Network where it can be enriched, transformed, and distributed to Adobe or non-Adobe destinations.

**New or updated features**

| Feature | Description |
| --- | --- |
| Sensitive data handling for datastreams | Datastreams now leverage several Platform technologies to appropriately handle sensitive data as enforced by regulations such as the Health Insurance Portability and Accountability Act (HIPAA). See the section on [handling senstive data in datstreams](../../edge/datastreams/overview.md#sensitive) for more information.  |
| [!DNL Splunk] extension for event forwarding | You can now send data to [!DNL Splunk] using an [event forwarding](../../tags/ui/event-forwarding/overview.md) extension. See the [[!DNL Splunk] extension overview](../../tags/extensions/web/splunk/overview.md) for more information. |
| [!DNL Zendesk] extension for event forwarding | You can now send data to [!DNL Zendesk] using an [event forwarding](../../tags/ui/event-forwarding/overview.md) extension. See the [[!DNL Zendesk] extension overview](../../tags/extensions/web/zendesk/overview.md) for more information. |

{style="table-layout:auto"}

## [!DNL Destinations] {#destinations}

[!DNL Destinations] are pre-built integrations with destination platforms that allow for the seamless activation of data from Adobe Experience Platform. You can use destinations to activate your known and unknown data for cross-channel marketing campaigns, email campaigns, targeted advertising, and many other use cases.

**New or updated destinations**

| Destination | Description |
| ----------- | ----------- |
| [[!DNL Line]](../../destinations/catalog/mobile-engagement/line.md) | Line is a popular communication platform that connects people, services and information and has grown from a chat app into a hub for entertainment, social, and day-to-day activities. |
| [[!DNL Microsoft Dynamics 365]](../../destinations/catalog/crm/microsoft-dynamics-365.md) | Microsoft Dynamics 365 is a cloud-based business application platform that combines Enterprise Resource Planning (ERP) and Customer Relationship Management (CRM) along with productivity applications and AI tools, to bring end-to-end smoother and more controlled operations, better growth potential and reduced costs. |
| [[!DNL (Beta) Adobe Commerce]](../../destinations/catalog/personalization/adobe-commerce.md) | The [!DNL (Beta) Adobe Commerce] destination connector lets you select one or more Real-Time CDP segments to activate to your [!DNL Adobe Commerce] account to deliver a dynamic personalized experience for your shoppers. Within [!DNL Adobe Commerce], you can then select those Real-Time CDP segments to personalize unique offers in the cart such as 'buy 2 get 1 free,'. You also can display hero banners and modify product pricing through promotional offers, all customized to Adobe Real-Time CDP segments. |

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

Query Service allows you to use standard SQL to query data in Adobe Experience Platform [!DNL Data Lake]. You can join any datasets from the [!DNL Data Lake] and capture the query results as a new dataset for use in reporting, Data Science Workspace, or for ingestion into Real-time Customer Profile.

**Updated features**

| Feature | Description |
| --- | --- |
| Query accelerated reporting insights data model | As part of the Data Distiller SKU, the query accelerated store allows you to reduce the time and processing power required to gain critical insights from your data. With the query accelerated store you can build a custom data model and/or extend on existing Adobe Real-Time Customer Data Platform data models to improve your reporting insights and their visualizations. See the [query accelerated store reporting insights document](../../query-service/query-accelerated-store/reporting-insights-data-model.md) to learn more about this feature.  |

{style="table-layout:auto"}

For more information on Query Services, refer to the [Query Service overview](../../query-service/home.md).
New features in Adobe Experience Platform:

## Sources {#sources}

Adobe Experience Platform can ingest data from external sources while allowing you to structure, label, and enhance that data using Platform services. You can ingest data from a variety of sources such as Adobe applications, cloud-based storage, third-party software, and your CRM system.

Experience Platform provides a RESTful API and an interactive UI that lets you set up source connections for various data providers with ease. These source connections allow you to authenticate and connect to external storage systems and CRM services, set times for ingestion runs, and manage data ingestion throughput.

**Updated features**

| Feature | Description |
| --- | --- | 
| Beta availability of Adobe Workfront source | Use the [Adobe Workfront source](../../sources/connectors/adobe-applications/workfront.md) to bring your Workfront data to Experience Platform and perform use cases such as combining your work records with third-party data, applying historical and time-series analytics on work records, and querying work data using standard SQL. For more information, read the guide on [creating a Workfront source connection in the UI](../../sources/tutorials/ui/create/adobe-applications/workfront.md). |
| Beta availability of Oracle Service Cloud source | Use the Oracle Service Cloud source to ingest data from your Oracle Service Cloud account to Experience Platform. For more information, read the documentation on the [Oracle Service Cloud source](../../sources/connectors/customer-success/oracle-service-cloud.md). |

To learn more about sources, read the [sources overview](../../sources/home.md).
