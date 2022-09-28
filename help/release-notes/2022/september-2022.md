---
title: Adobe Experience Platform Release Notes September 2022
description: The September 2022 release notes for Adobe Experience Platform.
---
# Adobe Experience Platform release notes 

**Release date: September 28, 2022**

Updates to existing features in Adobe Experience Platform:

- [!DNL Dashboards](#dashboards)
- [Experience Data Model (XDM)](#xdm)
- [Identity Service](#identity-service)
- [Query Service](#query-service)
- [Sources](#sources)

## [!DNL Dashboards] {#dashboards}

Adobe Experience Platform provides multiple dashboards through which you can view important insights about your organization's data, as captured during daily snapshots.

| Feature | Description |
| --- | --- |
| In-use label  | When viewed in the widget library, the in-use label easily identifies the presence of existing widgets in your dashboard. This makes it easy to avoid the duplication although you can still add the same widget more than once should you wish. |
| Audience overlap report widget | This widget is available for both for both [!UICONTROL Profiles] and [!UICONTROL Segments] dashboards. The report provides an ordered list of audiences ranked by the highest or lowest overlap percentages for your chosen segment. From the Profiles dashboard you can filter and view your audience overlap by merge policy from all available segments. The Segments dashboards allows you to filter the audience overlap by a specific segment.<br>Use this analysis to build new, high-performance segments and avoid sending the same audience to different destinations. The report also helps to identify hidden insights to improve segmentation or locate unique profiles to pursue.|

For more information on [!DNL Dashboards], please see the [[!DNL Dashboards] overview](../../dashboards/home.md).

## Experience Data Model (XDM) {#xdm}

XDM is an open-source specification that provides common structures and definitions (schemas) for data that is brought into Adobe Experience Platform. By adhering to XDM standards, all customer experience data can be incorporated into a common representation to deliver insights in a faster, more integrated way. You can gain valuable insights from customer actions, define customer audiences through segments, and use customer attributes for personalization purposes.

**New features**

| Feature | Description |
| --- | --- |
| UI support for enums and suggested values | In addition to enums that enable data validation, you can now [add or remove suggested values](../../xdm/ui/fields/enum.md) for standard or custom string fields so that Platform users have a friendly list of values to select from when creating segments. |

**New XDM components**

| Component type | Name | Description |
| --- | --- | --- |
| Field group | [[!UICONTROL AJO Classification Fields]](https://github.com/adobe/xdm/blob/master/extensions/adobe/experience/decisioning/proposition-action.schema.json) | Properties of a specific element that was interacted with which caused the proposition event to be triggered. |
| Field group | [[!UICONTROL MediaAnalytics Interaction Details]](https://github.com/adobe/xdm/blob/master/components/fieldgroups/experience-event/experienceevent-media-analytics.schema.json) | Tracks media interactions over time. |
| Field group | [[!UICONTROL Media details information]](https://github.com/adobe/xdm/blob/master/components/datatypes/mediadetails.schema.json) | Tracks media details information. |
| Field group | [[!UICONTROL Adobe CJM ExperienceEvent - Surfaces]](https://github.com/adobe/xdm/blob/master/extensions/adobe/experience/customerJourneyManagement/surfaces.schema.json) | Describes surfaces for Experience Events in Adobe Journey Optimizer. |

{style="table-layout:auto"}

**Updated XDM components**

| Component type | Name | Description |
| --- | --- | --- |
| Behavior | [[!UICONTROL Time series]](https://github.com/adobe/xdm/blob/master/components/behaviors/time-series.schema.json) | <ul><li>Added values for `eventType`:<ul><li>`decisioning.propositionSend`</li><li>`decisioning.propositionDismiss`</li><li>`decisioning.propositionTrigger`</li><li>`media.downloaded`</li><li>`location.entry`</li><li>`location.exit`</li></ul></li><li>Removed values for `eventType`:<ul><li>`decisioning.propositionDeliver`</li><li>`media.stateStart`</li><li>`media.stateEnd`</li></ul></li></ul> |
| Field group | (Multiple) | [Updated several field descriptions](https://github.com/adobe/xdm/pull/1628/files) across Journey Orchestration components. |
| Field group | (Multiple) | [Updated the titles for several Adobe Workfront components](https://github.com/adobe/xdm/pull/1634/files) for consistency. |
| Field group | [[!UICONTROL AJO Classification Fields]](https://github.com/adobe/xdm/blob/master/extensions/adobe/experience/decisioning/proposition-event-type.schema.json) | Updated the namespaces of several fields to `xdm`. |
| Field group | [[!UICONTROL Journey Orchestration Step Event Common Fields]](https://github.com/adobe/xdm/blob/master/extensions/adobe/experience/journeyOrchestration/stepEvents/journeyStepEventCommonFieldsMixin.schema.json) | Added a new field, `isReadSegmentTriggerStartEvent`. |
| Field group | [[!UICONTROL Forecasted Weathers]](https://github.com/adobe/xdm/blob/master/components/fieldgroups/shared/forecasted-weather.schema.json) | Changed the `xdm:uvIndex` field to an integer type, and added the `xdm` namespace to several fields in which is was missing. |
| Field group | [[!UICONTROL Media details information]](https://github.com/adobe/xdm/blob/master/components/datatypes/mediadetails.schema.json) | `xdm:endUserIDs` and `xdm:implementationDetails` have been removed from the field group. |
| Data type | (Multiple) | [Updated several media property names](https://github.com/adobe/xdm/pull/1626/files) across several data types for consistency. |
| Data type | [[!UICONTROL Implementation details]](https://github.com/adobe/xdm/blob/master/components/datatypes/industry-verticals/implementationdetails.schema.json) | Added known names for flutter. |
| Data type | [[!UICONTROL Point of interest details]](https://github.com/adobe/xdm/blob/master/components/datatypes/poi-detail.schema.json) | The data type can now accept a list of metadata key-value pairs associated with the point of interest. |
| Data type | [[!UICONTROL Proposition Action]](https://github.com/adobe/xdm/blob/master/extensions/adobe/experience/decisioning/proposition-action.schema.json) | [!DNL AJO Classification Fields] has bee renamed to [!UICONTROL Proposition Action]. |
| Data type | [[!UICONTROL Proposition Event Type]](https://github.com/adobe/xdm/blob/master/extensions/adobe/experience/decisioning/proposition-event-type.schema.json) | [!DNL AJO Classification Fields] has been renamed to [!UICONTROL Proposition Action]. |
| (Multiple) | (Multiple) | Experimental properties have been [stabilized across all B2B components](https://github.com/adobe/xdm/pull/1617/files). |
| (Multiple) | (Multiple) | Adobe Journey Optimizer entities have been [stabilized](https://github.com/adobe/xdm/pull/1625/files). |
| (Multiple) | (Multiple) | The namespaces of certain fields across several experimental components have been [updated for consistency](https://github.com/adobe/xdm/pull/1626/files). |

{style="table-layout:auto"}

For more information on XDM in Platform, see the [XDM System overview](../../xdm/home.md).

## Identity Service {#identity-service}

Delivering relevant digital experiences requires having a complete understanding of your customer. This is made more difficult when your customer data is fragmented across disparate systems, causing each customer to appear to have multiple "identities".

Adobe Experience Platform Identity Service helps you gain a better view of your customer and their behavior by bridging identities across devices and systems, allowing you to deliver impactful, personal digital experiences in real time.

**Updated features**

| Feature | Description |
| --- | --- |
| Support for dataset deletion | Identity Service now supports dataset deletion when requesting through the [Catalog Service API](https://developer.adobe.com/experience-platform-apis/references/catalog/), UI, or Data Hygiene. Read the guide on [deleting datasets in the UI](../../catalog/datasets/user-guide.md#delete-a-dataset) for more information. |

To learn more about Identity Service, read the [Identity Service overview](../../identity-service/home.md).

## Query Service {#query-service}

Query Service allows you to use standard SQL to query data in Adobe Experience Platform [!DNL Data Lake]. You can join any datasets from the [!DNL Data Lake] and capture the query results as a new dataset for use in reporting, Data Science Workspace, or for ingestion into Real-time Customer Profile.

**Updated features**

| Feature | Description |
| --- | --- |
| Alert subscription API | Adobe Experience Platform Query Service allows you to subscribe to alerts for both ad hoc and scheduled queries. Alerts can be received by email, within the Platform UI, or both. Currently, query alerts can only be subscribed to using the [Query Service API](https://developer.adobe.com/experience-platform-apis/references/query-service/). |
| Dataset samples | Query Service dataset samples enable you to conduct exploratory queries on big data with greatly reduced processing time at the cost of query accuracy. |

For more information on [!DNL Query Service], please see the [[!DNL Query Service] overview](../../query-service/home.md).

## Sources {#sources}

Adobe Experience Platform can ingest data from external sources while allowing you to structure, label, and enhance that data using Platform services. You can ingest data from a variety of sources such as Adobe applications, cloud-based storage, third-party software, and your CRM system.

Experience Platform provides a RESTful API and an interactive UI that lets you set up source connections for various data providers with ease. These source connections allow you to authenticate and connect to external storage systems and CRM services, set times for ingestion runs, and manage data ingestion throughput.

**Updated features**

| Feature | Description |
| --- | --- |
| Audience Manager segment population impact on Real-time Customer Profile | The ingestion of sizeable Audience Manager segment populations has a direct impact on your total profile count when you first send an Audience Manager segment to Platform using the Audience Manager source. This means that selecting all segments can potentially lead to a Profile count in excess of your license usage entitlement. For more information, read the [Audience Manager source overview](../../sources/connectors/adobe-applications/audience-manager.md). For information on your license usage, read the documentation on [using the license usage dashboard](../../dashboards/guides/license-usage.md). |

To learn more about sources, read the [sources overview](../../sources/home.md).