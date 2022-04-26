---
title: Adobe Experience Platform Release Notes April 2022
description: The April 2022 release notes for Adobe Experience Platform.
---
# Adobe Experience Platform release notes 

**Release date: April 27, 2022**

Updates to existing features in Adobe Experience Platform:

- [Dataflows](#dataflows)
- [[!DNL Data Prep]](#data-prep)
- [Experience Data Model (XDM)](#xdm)
- [Real-time Customer Data Platform B2B Edition](#B2B)
- [Sources](#sources)

## Dataflows {#dataflows}

In Platform, data is ingested from many different sources, analyzed within the system, and activated to a wide variety of destinations. Platform makes the process of tracking this potentially non-linear flow of data easier by providing transparency with dataflows.

Dataflows are a representation of jobs that move data across Platform. These dataflows are configured across different services, helping move data from source connectors to target datasets, where it is then utilized by Identity Service and Real-time Customer Profile before ultimately being activated to destinations.

**New features**

| Feature | Description |
| ------- | ----------- |
| Segments dashboard | You can now use the monitoring dashboard to monitor dataflows for segments. To learn more, please read the guide on [monitoring segments in the UI](../../dataflows/ui/monitor-segments.md) |

For more general information on dataflows, refer to the [dataflows overview](../../dataflows/home.md). To learn more about segmentation, refer to the [segmentation overview](../../segmentation/home.md).

## [!DNL Data Prep] {#data-prep}

[!DNL Data Prep] allows data engineers to map, transform, and validate data to and from Experience Data Model (XDM).

**Updated features**

| Feature | Description |
| --- | --- |
| Support for Adobe Analytics source | The Adobe Analytics source now supports Data Prep features, allowing you to map your Analytics report-suite data to a target XDM schema when creating a dataflow. See the tutorial on [creating an Analytics source connection](../../sources/tutorials/ui/create/adobe-applications/analytics.md) for more information. |
| Support for importing existing mapping rules | You can now import mapping rules from an existing dataflow to accelerate your dataflow configurations and limit errors. See the tutorial on [importing existing mapping rules](../../data-prep/ui/mapping.md) for more information. |

For more information on [!DNL Data Prep], please see the [[!DNL Data Prep] overview](../../data-prep/home.md).

## Experience Data Model (XDM) {#xdm}

XDM is an open-source specification that provides common structures and definitions (schemas) for data that is brought into Adobe Experience Platform. By adhering to XDM standards, all customer experience data can be incorporated into a common representation to deliver insights in a faster, more integrated way. You can gain valuable insights from customer actions, define customer audiences through segments, and use customer attributes for personalization purposes.

**New features**

| Feature | Description |
| --- | --- |
| Add or remove individual standard fields for a schema | The Schema Editor UI now allows you to add portions of standard field groups to your schemas, providing more flexibility for the fields you choose to include without needing to build custom resources from scratch.<br><br>You can now also define ad-hoc custom fields directly within the schema structure and assign them to a new or existing custom field group without needing to create or edit the field group beforehand.<br><br>See the guide on [creating and editing schemas in the UI](../../xdm/ui/resources/schemas.md) for more information on these new workflows. |

{style="table-layout:auto"}

**New XDM components**

| Component type | Name | Description |
| --- | --- | --- |
| Global schema | [[!UICONTROL Data Hygiene Operation Request]](https://github.com/adobe/xdm/blob/master/schemas/hygiene/aep-hygiene-ops-record.schema.json) | Captures the details of a data cleansing request to delete or modify records in a specified dataset or sandbox. |
| Descriptor | [[!UICONTROL Time-series Granularity Descriptor]](https://github.com/adobe/xdm/blob/master/schemas/descriptors/time-series/descriptorTimeSeriesGranularity.schema.json) | Indicates the granularity of time-series and summary data. When applied to a schema, the schema's `timestamp` field is the first timestamp in a period of this granularity. |
| Class | [[!UICONTROL XDM Summary Metrics]](https://github.com/adobe/xdm/blob/master/components/classes/summary_metrics.schema.json) | Provides pre-summarized metrics with grouping dimensions, such as the results of an SQL SELECT with a GROUP BY. |
| Field group | [[!UICONTROL Consent policies evaluation results map]](https://github.com/adobe/xdm/blob/master/components/fieldgroups/experience-event/experienceevent-site-search.schema.json) | Captures the consent policy evaluation result for an individual. |
| Field group | [[!UICONTROL Site Search]](https://github.com/adobe/xdm/blob/master/components/fieldgroups/experience-event/experienceevent-site-search.schema.json) | Captures site-search related information such as search query, filtering, and ordering. |
| Field group | [[!UICONTROL Merge Leads]](https://github.com/adobe/xdm/blob/master/components/fieldgroups/experience-event/events/merge-leads.schema.json) | Captures the details of an event where two or more leads are merged. |
| Field group | [[!UICONTROL Email Sent]](https://github.com/adobe/xdm/blob/master/components/fieldgroups/experience-event/events/emailsent.schema.json) | Captures the details of an event where an email is sent to a recipient. |
| Field group | [[!UICONTROL Stitching Fields]](https://github.com/adobe/xdm/blob/master/components/fieldgroups/experience-event/experienceevent-stitching.schema.json) | Captures values computed through the identity stitching process for an event. |
| Field group | [[!UICONTROL Secondary Recipient Detail For Audit]](https://github.com/adobe/xdm/blob/master/extensions/adobe/experience/customerJourneyManagement/secondary-recipient-detail.schema.json) | An Adobe Journey Optimizer field group that captures a secondary recipient detail for an audit. |
| Field group | [[!UICONTROL XDM Business Account Person Relation Details]](https://github.com/adobe/xdm/blob/master/components/fieldgroups/account-person/account-person-details.schema.json) | Captures details related to an account-person relationship. |
| Field group | [[!UICONTROL Account Person Details]](https://github.com/adobe/xdm/blob/master/components/fieldgroups/account-person/account-person-details.schema.json) | Captures details related to an account-person relationship. |
| Data type | [[!UICONTROL Cart]](https://github.com/adobe/xdm/blob/master/components/datatypes/cart.schema.json) | Captures information about an e-commerce shopping cart. |
| Data type | [[!UICONTROL Shipping]](https://github.com/adobe/xdm/blob/master/components/datatypes/shipping.schema.json) | Captures shipping information for one or more products. |
| Data type | [[!UICONTROL Site Search]](https://github.com/adobe/xdm/blob/master/components/fieldgroups/experience-event/experienceevent-site-search.schema.json) | Captures information on site-search activity. |
| Extension (Workfront) | [[!UICONTROL Operational Task Attributes]](https://github.com/adobe/xdm/blob/master/extensions/adobe/experience/workfront/opTask.schema.json) | Captures details related to an operational task. |
| Extension (Workfront) | [[!UICONTROL Work Portfolio Attributes]](https://github.com/adobe/xdm/blob/master/extensions/adobe/experience/workfront/portfolio.schema.json) | Captures details related to a work portfolio. |
| Extension (Workfront) | [[!UICONTROL Work Program Attributes]](https://github.com/adobe/xdm/blob/master/extensions/adobe/experience/workfront/program.schema.json) | Captures details related to a work program. |
| Extension (Workfront) | [[!UICONTROL Work Project Attributes]](https://github.com/adobe/xdm/blob/master/extensions/adobe/experience/workfront/project.schema.json) | Captures details related to a work project. |

{style="table-layout:auto"}

**Updated XDM components**

| Component type | Name | Update description |
| --- | --- | --- |
| Global schema | [[!UICONTROL Destinations]](https://github.com/adobe/xdm/blob/master/schemas/destinations/destination.schema.json) | New enum values for `destinationCategory`. |
| Descriptor | [[!UICONTROL Friendly Name Descriptor]](https://github.com/adobe/xdm/blob/master/schemas/descriptors/display/alternateDisplayInfo.schema.json) | Added support for removing suggested values (`meta:enum`) that are not needed from standard fields. |
| Field group | [[!UICONTROL User Login Process]](https://github.com/adobe/xdm/blob/master/components/fieldgroups/experience-event/experienceevent-user-login-details.schema.json) | `createProfile` field added. |
| Data type | [[!UICONTROL Commerce]](https://github.com/adobe/xdm/blob/master/components/datatypes/marketing/commerce.schema.json) | Several cart-related fields have been added. |
| Data type | [[!UICONTROL Product list item]](https://github.com/adobe/xdm/blob/master/components/datatypes/productlistitem.schema.json) | New fields added for selected options and discount amount. |
| Extension (Intelligent Services) | [[!UICONTROL Intelligent Services JourneyAI Send Time Optimization]](https://github.com/adobe/xdm/blob/master/extensions/adobe/experience/intelligentServices/profile-journeyai-sendtimeoptimization.schema.json) | Optimize storage format for send-time scores. |
| Extension (Workfront) | [[!UICONTROL Workfront Change Event]](https://github.com/adobe/xdm/blob/master/extensions/adobe/experience/workfront/changeevent.schema.json) | Several fields replaced with a `workfront:customData` field for custom form fields. |
| Extension (Workfront) | [[!UICONTROL Work Task Attributes]](https://github.com/adobe/xdm/blob/master/extensions/adobe/experience/workfront/task.schema.json) | Several fields added. |
| Extension (Workfront) | [[!UICONTROL Work Object]](https://github.com/adobe/xdm/blob/master/extensions/adobe/experience/workfront/workobject.schema.json) | New fields for parent object type and custom form fields. |

{style="table-layout:auto"}

For more information on XDM in Platform, see the [XDM System overview](../../xdm/home.md).

### Real-time Customer Data Platform B2B Edition {#B2B}

Built on Real-time Customer Data Platform (Real-time CDP), Real-time CDP B2B Edition is purpose-built for marketers operating in a business-to-business service model. It brings together data from multiple sources and combines it into a single view of people and account profiles. This unified data allows marketers to precisely target specific audiences and engage those audiences across all available channels.

**Updated features**

| Feature | Description |
| --- | --- |
| Support for `isDeleted` functionality | All [!DNL Marketo] datasets except `Activities` now support the `isDeleted` mapping. The new mapping is automatically added to your existing B2B dataflows. You can use the `isDeleted` mapping to filter out records that have been deleted so that your data in the [!DNL Data Lake] is consistent with your source data. See the [[!DNL Marketo] mapping fields guide](../../sources/connectors/adobe-applications/mapping/marketo.md) for more information on `isDeleted`. |

To learn more about Real-time Customer Data Platform B2B Edition, see the [B2B overview](../../rtcdp/b2b-overview.md).

## Sources {#sources}

Adobe Experience Platform can ingest data from external sources while allowing you to structure, label, and enhance that data using Platform services. You can ingest data from a variety of sources such as Adobe applications, cloud-based storage, third-party software, and your CRM system.

Experience Platform provides a RESTful API and an interactive UI that lets you set up source connections for various data providers with ease. These source connections allow you to authenticate and connect to external storage systems and CRM services, set times for ingestion runs, and manage data ingestion throughput.

**Updated features**

| Feature | Description |
| --- | --- |
| Support for [!DNL OneTrust Integration] | You can now use the [!DNL OneTrust Integration] source to ingest consent and preferences data from your [!DNL OneTrust] account to Platform. See the documentation on [creating a [!DNL OneTrust Integration] source connection](../../sources/connectors/consent-and-preferences/onetrust.md) for more information. |
| Support for [!DNL Square] | You can now use the [!DNL Square] source to ingest payments data from your [!DNL Square] account to Platform. |
| Support for deleting Customer Attributes dataflows | You can now delete dataflows created with the Customer Attributes source connector. |

To learn more about sources, see the [sources overview](../../sources/home.md).
