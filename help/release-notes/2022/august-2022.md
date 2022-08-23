---
title: Adobe Experience Platform Release Notes August 2022
description: The August 2022 release notes for Adobe Experience Platform.
---
# Adobe Experience Platform release notes 

**Release date: August 24, 2022**

Updates to existing features in Adobe Experience Platform:

- [Data Prep](#data-prep)
- [Experience Data Model (XDM)](#xdm)
- [Sources](#sources)

## [!DNL Data Prep] {#data-prep}

[!DNL Data Prep] allows data engineers to map, transform, and validate data to and from Experience Data Model (XDM).

**Updated features**

| Feature | Description | 
| --- | --- |
| Support for ingesting records with warnings | Data Prep will now localize warnings (non-critical errors) to the fields and will allow the rest of the row to be ingested. All mapper transformation errors are now reported as warnings and rows that are partially ingested are considered successful, with a warning.  Monitoring is also supported on records with warnings and diagnostic details. Partial ingestion of records with warnings is currently only available to streaming data. Review the documentation on [ingesting records with warnings](../../sources/tutorials/ui/monitor-streaming.md) for more information. |

{style="table-layout:auto"}

To learn more about [!DNL Data Prep], see the [[!DNL Data Prep] overview](../../data-prep/home.md).

## Experience Data Model (XDM) {#xdm}

XDM is an open-source specification that provides common structures and definitions (schemas) for data that is brought into Adobe Experience Platform. By adhering to XDM standards, all customer experience data can be incorporated into a common representation to deliver insights in a faster, more integrated way. You can gain valuable insights from customer actions, define customer audiences through segments, and use customer attributes for personalization purposes.

**New XDM components**

| Component type | Name | Description |
| --- | --- | --- |
| Global schema | [[!UICONTROL AJO Entity Schema]](https://github.com/adobe/xdm/blob/master/extensions/adobe/experience/customerJourneyManagement/ajo-entity.schema.json) | Describes denormalized entities for Adobe Journey Optimizer. |
| Class | [[!UICONTROL AJO Execution Entities]](https://github.com/adobe/xdm/blob/master/extensions/adobe/experience/customerJourneyManagement/ajo-execution-entity.schema.json) | Describes Adobe Journey Optimizer execution entities for use in segmentation. |
| Field group | [[!UICONTROL Workfront Work Objects]](https://github.com/adobe/xdm/blob/master/extensions/adobe/experience/workfront/workobjects-all.schema.json) | A wrapper field group that references all the lower level object-specific field groups for Adobe Workfront.|

{style="table-layout:auto"}

**Updated XDM components**

| Component type | Name | Description |
| --- | --- | --- |
| Field group | [[!UICONTROL Journey Orchestration Step Event Common Fields]](https://github.com/adobe/xdm/blob/master/extensions/adobe/experience/journeyOrchestration/stepEvents/journeyStepEventCommonFieldsMixin.schema.json) | Two new properties have been added: `origTimeStamp` and `experienceID`. |
| Field group | [[!UICONTROL Segment Membership Details]](https://github.com/adobe/xdm/blob/master/components/fieldgroups/shared/segmentation.schema.json) | In addition to [!UICONTROL XDM Individual Profile], this field group can now also be used in schemas based on the XDM Business Account class. |
| Field group | (Multiple) | Several field groups related to Marketo B2B activities have been updated to stable status. See the following [pull request](https://github.com/adobe/xdm/pull/1593/files) for details. |
| Field group | (Multiple) | Several weather-related field groups have been updated to fix errors that were occurring for `uvIndex` and `sunsetTime`. See the following [pull request](https://github.com/adobe/xdm/pull/1602/files) for details. |
| Data type | [[!UICONTROL Product list item]](https://github.com/adobe/xdm/blob/master/components/datatypes/productlistitem.schema.json) | A new property `productImageUrl` has been added. |
| Data type | [[!UICONTROL Qoe Data details information]](https://github.com/adobe/xdm/blob/master/components/datatypes/qoedatadetails.schema.json) | A new property `framesPerSecond` has been added. |
| Data type | [[!UICONTROL Session details information]](https://github.com/adobe/xdm/blob/master/components/datatypes/sessiondetails.schema.json) | `sdkVersion` has been renamed to `appVersion`. `meta:enum` and `description` fields have also been updated. |
| Data types and field groups | (Multiple) | Several media data types and field groups have new fields and updated descriptions. See the following [pull request](https://github.com/adobe/xdm/pull/1582/files) for details. |
| (All) | (Multiple) | All schema objects that contain an `enum` field now also contain a corresponding `meta:enum` field to denote display values for each constraint. See the following [pull request](https://github.com/adobe/xdm/pull/1601/files) for details. |

{style="table-layout:auto"}

For more information on XDM in Platform, see the [XDM System overview](../../xdm/home.md).

## Sources {#sources}

Adobe Experience Platform can ingest data from external sources while allowing you to structure, label, and enhance that data using Platform services. You can ingest data from a variety of sources such as Adobe applications, cloud-based storage, third-party software, and your CRM system.

Experience Platform provides a RESTful API and an interactive UI that lets you set up source connections for various data providers with ease. These source connections allow you to authenticate and connect to external storage systems and CRM services, set times for ingestion runs, and manage data ingestion throughput.

**New features**

| Feature | Description |
| --- | --- |
| General availability of Self-Serve Sources (Batch SDK) | Develop, test, and integrate your REST API-based data source to ingest batch data into Experience Platform using easy to configure source specifications. With Sources SDK, you can: <ul><li>Configure a new source to the Experience Platform catalog.</li><li>Define specifications for your source, including information pertaining to supported authentication types, scheduling, and how resource data is fetched.</li><li>Create user-facing documentation for your new source.</li></ul> For more information, read the documentation on [Self-Serve Sources (Batch SDK)](../../sources/sources-sdk/overview.md). |
| General availability of [!DNL Google BigQuery] source | Use the [!DNL Google BigQuery] source to ingest data from your [!DNL Google BigQuery] data warehouse to Experience Platform. For more information, read the documentation on the [[!DNL Google BigQuery] source](../../sources/connectors/databases/bigquery.md). |
| [!DNL Teradata Vantage] source (Beta) | Use the [!DNL Teradata Vantage] source to ingest data from hybrid multi-cloud environments to Experience Platform. For more information, read the documentation on the [[!DNL Teradata Vantage] source](../../sources/connectors/databases/teradata-vantage.md). |
| Cross-region support for Adobe Analytics source | You can now ingest report suites from any region (United States, United Kingdom, or Singapore). Report suites must be mapped to the same organization as the Experience Platform Sandbox instance in which the source connection is being created in. For more information, read the guide on [creating an Adobe Analytics source connection in the UI](../../sources/tutorials/ui/create/adobe-applications/analytics.md). |
| API support for on-demand ingestion | Use on-demand ingestion to create ad hoc flow runs for a given dataflow with the [!DNL Flow Service] API. Flow runs created must be set to one-time ingestion. For more information, read the guide on [creating a flow run for on-demand ingestion using the API](../../sources/tutorials/api/on-demand-ingestion.md) for more information. |

{style="table-layout:auto"}

To learn more about sources, see the [sources overview](../../sources/home.md).
