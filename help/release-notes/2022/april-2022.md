---
title: Adobe Experience Platform Release Notes April 2022
description: The April 2022 release notes for Adobe Experience Platform.
exl-id: 39233787-3089-4469-8363-b006ae41ae21
---
# Adobe Experience Platform release notes 

**Release date: April 27, 2022**

Updates to existing features in Adobe Experience Platform:

- [[!DNL Artificial Intelligence and Machine Learning Services]](#ai/ml-services)
- [[!DNL Dashboards]](#dashboards)
- [Dataflows](#dataflows)
- [[!DNL Data Prep]](#data-prep)
- [Destinations](#destinations)
- [Experience Data Model (XDM)](#xdm)
- [Real-Time Customer Data Platform B2B Edition](#B2B)
- [Sources](#sources)

## [!DNL Dashboards] {#dashboards}

Platform provides multiple dashboards through which you can view important information about your organization's data, as captured during daily snapshots.

Dashboards provide pre-configured reporting options for your organization's data and are built directly into the marketer workflow within Platform. These dashboards are available without the need for additional IT support or the time and effort it would otherwise take to export and process data with additional data warehousing design and implementation.

The following widgets are available through the Widget library on their respective dashboards. See the documentation for more information on [how to add widgets through the Widget library](../../dashboards/customize/widget-library.md).

**New widgets**

| Widget | Dashboard | Description |
| ------ | --------- | ----------- |
| [!UICONTROL Profiles added trend] | Profiles | This widget uses a line graph to illustrate the total number of merged profiles that have been added to the Profile Store daily over the last 30 days, 90 days, or 12 months. |
| [!UICONTROL Audiences mapped to destination status] | Profiles | This widget displays the total number of both mapped and unmapped audiences in a single metric and uses a doughnut chart to illustrate the proportional difference between their totals.|
| [!UICONTROL Audiences size] | Profiles | This widget provides a two-column table that lists up to 20 segments and the total number of audiences contained in each segment. The list is dependent on the merge policy applied and ordered from high to low according to the total number of audiences. |
| [!UICONTROL Profile count trend] | Profiles |  This widget uses a line graph to illustrate the trend in the total number of profiles contained in the system over time. The data can be visualized over 30 days, 90 days, and 12 month periods. |
| [!UICONTROL Single identity profiles by identity] | Profiles | This widget uses a bar chart to illustrate the total number of profiles that are identified with only a single unique identifier. The widget supports up to five of the most commonly occurring identities. |
| [!UICONTROL Destination status] | Destinations | This widget displays the total number of enabled destinations as a single metric and uses a doughnut chart to illustrate the proportional difference between enabled and disabled destinations. |
| [!UICONTROL Active destinations by destination platform] | Destinations | This widget uses a two-column table to show a list of active destination platforms and the total number of active destinations for each destination platform. |
| [!UICONTROL Activated audiences across all destinations] | Destinations | This widget provides the total number of audiences activated across all destinations in a single metric. |
| [!UICONTROL Audience activation order] | Segments | This widget provides a three-column table that lists the destination name, the platform, and the activation date of the audience. |
| [!UICONTROL Audience size trend] | Segments | This widget provides a line graph illustration for the total number of profiles that meet the criteria of any segment definition over 30 days, 90 days, and 12 month periods. |
| [!UICONTROL Audience size change trend] | Segments | This widget provides a line graph illustration of the difference in the total number of profiles that qualified for a given segment between the most recent daily snapshots. The period of trend analysis can be visualized over 30 days, 90 days, and 12 month periods. |           
| [!UICONTROL Audience size trend by identity] | Segments | This widget illustrates the audience size trend for a particular segment based on a selected identity type. The period of trend analysis can be visualized over 30 days, 90 days, and 12 month periods. |

**New features** {#new-features}

| Feature | Dashboard | Description |
| ------- | --------- | ----------- |
| Orphaned profile segment membership cleanup | Profiles and License Usage | Profile Service now removes leftover segment members on a daily basis to give a more accurate representation of your profiles in your system. This clean up occurs after all the profile fragments for a given profile are deleted. This may show a drop in the "Addressable audience" metric in the license usage dashboard and may show a drop in the "Profile count" metric in the Profile dashboard, since these metrics included leftover segment fragments prior to this release. |

{style="table-layout:auto"}

See the documentation for more information on [[!DNL Profiles]](../../dashboards/guides/profiles.md), [[!DNL Destinations]](../../dashboards/guides/destinations.md), and [[!DNL Segments]](../../dashboards/guides/audiences.md) dashboards.

## Dataflows {#dataflows}

In Platform, data is ingested from many different sources, analyzed within the system, and activated to a wide variety of destinations. Platform makes the process of tracking this potentially non-linear flow of data easier by providing transparency with dataflows.

Dataflows are a representation of jobs that move data across Platform. These dataflows are configured across different services, helping move data from source connectors to target datasets, where it is then utilized by Identity Service and Real-Time Customer Profile before ultimately being activated to destinations.

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

## [!DNL Destinations] {#destinations}

[!DNL Destinations] are pre-built integrations with destination platforms that allow for the seamless activation of data from Adobe Experience Platform. You can use destinations to activate your known and unknown data for cross-channel marketing campaigns, email campaigns, targeted advertising, and many other use cases.

**New or updated features**

| Feature | Description |
| ----------- | ----------- |
| Advanced Enterprise Destination Connectors | Three enterprise destination connectors are now generally available: [[!DNL Amazon Kinesis]](../../destinations/catalog/cloud-storage/amazon-kinesis.md), [[!DNL Azure Event Hubs]](../../destinations/catalog/cloud-storage/azure-event-hubs.md), and [[!DNL HTTP API]](../../destinations/catalog/streaming/http-destination.md). <br> The general availability of enterprise destination connectors includes all the capabilities offered previously in the Beta phase, and more: <ul><li>New authentication capabilities, including [Shared Access Signature in Azure Event Hubs](../../destinations/catalog/cloud-storage/azure-event-hubs.md#sas-authentication) and more [authentication types](../../destinations/catalog/streaming/http-destination.md#authentication-information) (bearer tokens, OAuth 2) in the HTTP API destination;</li><li>[Backfilling historical profile data](../../destinations/catalog/streaming/http-destination.md#historical-data-backfill) (sending historical profiles qualified for the segment when first activated);</li><li>Dataflow runs metrics are now supported for these destinations;</li><li>[Additional segment metadata](../../destinations/catalog/streaming/http-destination.md#destination-details) included in the data payload, including segment names and segment timestamps;</li><li>Support for [static IP addresses](/help/destinations/catalog/streaming/ip-address-allow-list.md) for customers who need to allowlist Experience Platform.</li></ul> |
| In-context alerts for destination dataflows | You can now [subscribe to alerts](../../destinations/ui/alerts.md) when creating a destination dataflow, to receive alert messages regarding the status, success, or failure of your dataflow run. You can choose to receive alerts in the Experience Platform UI or via email. |

### Release process for advanced enterprise destination connectors {#release-process-enterprise-destinations}

For the Amazon Kinesis, Azure Event Hubs, and HTTP API destinations, during the release process (starting April 27th), you will see both the former Beta destination card, as well as the new generally available (GA) destination card in the destinations catalog. Any dataflows configured by customers using the beta destinations will be migrated in the next couple of days to the GA version of the same destination. This migration should ultimately be completed by the end of day Friday April 29th. The Beta destinations will be continue to be visible during this short time-window and labeled as **Deprecated**.

If you have been utilizing these destinations in the Beta phase, please note the following:

- If have been previously in Beta with any of the 3 destinations, no action is needed. All dataflows set up as part of Beta will continue to be functional and will be migrated to the GA version.
- If you want to set up these destinations beginning April 27th, please do so with the new GA version of the destinations.
- The beta cards marked as deprecated will be removed once the release operation is complete, estimated by the end of day Friday April 29th. The Experience Platform engineering team is monitoring closely for a successful release operation.

**New destinations**

| Destination | Description |
| ----------- | ----------- |
| [!DNL Criteo] | Connect and activate data to the [[!DNL Criteo]](../../destinations/catalog/advertising/criteo.md) advertising platform. |
| [!DNL Sendgrid]| Connect and activate data to the [[!DNL Sendgrid]](../../destinations/catalog/email-marketing/sendgrid.md) platform for transactional and marketing emails. |

For more general information on destinations, refer to the [destinations overview](../../destinations/home.md).

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
| Field group | [[!UICONTROL Consent policies evaluation results map]](https://github.com/adobe/xdm/blob/master/components/fieldgroups/profile/profile-consentResults.schema.json) | Captures the consent policy evaluation result for an individual. |
| Field group | [[!UICONTROL Site Search]](https://github.com/adobe/xdm/blob/master/components/fieldgroups/experience-event/experienceevent-site-search.schema.json) | Captures site-search related information such as search query, filtering, and ordering. |
| Field group | [[!UICONTROL Merge Leads]](https://github.com/adobe/xdm/blob/master/components/fieldgroups/experience-event/events/merge-leads.schema.json) | Captures the details of an event where two or more leads are merged. |
| Field group | [[!UICONTROL Email Sent]](https://github.com/adobe/xdm/blob/master/components/fieldgroups/experience-event/events/emailsent.schema.json) | Captures the details of an event where an email is sent to a recipient. |
| Field group | [[!UICONTROL Stitching Fields]](https://github.com/adobe/xdm/blob/master/components/fieldgroups/experience-event/experienceevent-stitching.schema.json) | Captures values computed through the identity stitching process for an event. |
| Field group | [[!UICONTROL Secondary Recipient Detail For Audit]](https://github.com/adobe/xdm/blob/master/extensions/adobe/experience/customerJourneyManagement/secondary-recipient-detail.schema.json) | An Adobe Journey Optimizer field group that captures a secondary recipient detail for an audit. |
| Field group | [[!UICONTROL XDM Business Account Person Relation Details]](https://github.com/adobe/xdm/blob/master/components/fieldgroups/account-person/account-person-details.schema.json) | Captures details related to an account-person relationship. |
| Field group | [[!UICONTROL Account Person Details]](https://github.com/adobe/xdm/blob/master/components/fieldgroups/account-person/account-person-details.schema.json) | Captures details related to an account-person relationship. |
| Data type | [[!UICONTROL Cart]](https://github.com/adobe/xdm/blob/master/components/datatypes/cart.schema.json) | Captures information about an e-commerce shopping cart. |
| Data type | [[!UICONTROL Shipping]](https://github.com/adobe/xdm/blob/master/components/datatypes/shipping.schema.json) | Captures shipping information for one or more products. |
| Data type | [[!UICONTROL Site Search]](https://github.com/adobe/xdm/blob/master/components/datatypes/sitesearch.schema.json) | Captures information on site-search activity. |
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

## [!DNL Artificial Intelligence/Machine Learning services] {#ai/ml-services}

AI/ML services empower marketing analysts and practitioners to leverage the power of artificial intelligence and machine learning in customer experience use cases. This allows for marketing analysts to set up predictions specific to a company's needs using business-level configurations without the need for data science expertise.

### Attribution AI

Attribution AI is used to attribute credits to touchpoints leading to conversion events. This can be used by marketers to help quantify the marketing impact of each individual marketing touchpoint across customer journeys.

**Updated features**

| Feature | Description |
| ------- | ----------- |
| Support for Multi Dataset | The Multi Dataset feature now supports all Experience Event datasets as well as the selection of Identity Map as an identity. Customers can select the Identity Map and any associated IDs as long as there is a common identity namespace across datasets. Attribution AI supports the following schemas: Adobe Analytics, Experience Event, Consumer Experience Event. For more information on Multi Dataset support in Attribution AI, refer to the [Attribution AI user guide](../../intelligent-services/attribution-ai/user-guide.md). |

For more information on [!DNL Intelligent Services], please see the [[!DNL Intelligent Services] overview](../../intelligent-services/home.md).

### Customer AI

Customer AI available in Real-Time Customer Data Platform, is used to generate custom propensity scores such as churn and conversion for individual profiles at scale. This is accomplished without having to transform the business needs to a machine learning problem, pick an algorithm, train, or deploy.

**Updated features**

| Feature | Description |
| ------- | ----------- |
| Support for Multi Dataset | The Multi Dataset feature now supports all Experience Event datasets as well as the selection of Identity Map as an identity. Customers can select the Identity Map and any associated IDs as long as there is a common identity namespace across datasets. Customer AI supports the following schemas: Adobe Analytics, Experience Event, Consumer Experience Event, and the Adobe Audience Manager schema. For more information on Multi Dataset support in Customer AI, refer to the [Customer AI user guide](../../intelligent-services/customer-ai/user-guide/configure.md). |
| New model evaluation metrics in Customer AI | New Gains charts in Customer AI allow marketers to determine the group size to target based on their budget and ROI goals. New Lift charts measure the quality of the model, providing better visibility into the lift they would get over random targeting. For more information, see the [discover insights with Customer AI](../../intelligent-services/customer-ai/user-guide/discover-insights.md) document. |

For more information on [!DNL Intelligent Services], please see the [[!DNL Intelligent Services] overview](../../intelligent-services/home.md).

## Real-Time Customer Data Platform B2B Edition {#B2B}

Built on Real-Time Customer Data Platform (Real-Time CDP), Real-Time CDP B2B Edition is purpose-built for marketers operating in a business-to-business service model. It brings together data from multiple sources and combines it into a single view of people and account profiles. This unified data allows marketers to precisely target specific audiences and engage those audiences across all available channels.

**Updated features**

| Feature | Description |
| --- | --- |
| Support for `isDeleted` functionality | All [!DNL Marketo] datasets except `Activities` now support the `isDeleted` mapping. The new mapping is automatically added to your existing B2B dataflows. You can use the `isDeleted` mapping to filter out records that have been deleted so that your data in the [!DNL Data Lake] is consistent with your source data. See the [[!DNL Marketo] mapping fields guide](../../sources/connectors/adobe-applications/mapping/marketo.md) for more information on `isDeleted`. |

To learn more about Real-Time Customer Data Platform B2B Edition, see the [B2B overview](../../rtcdp/b2b-overview.md).

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
