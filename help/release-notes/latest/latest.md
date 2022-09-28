---
title: Adobe Experience Platform Release Notes September 2022
description: The September 2022 release notes for Adobe Experience Platform.
---
# Adobe Experience Platform release notes 

**Release date: September 28, 2022**

New features in Adobe Experience Platform:

- [Attribute-based access control](#abac)
- [Data hygiene](#data-hygiene)
- [[!UICONTROL Privacy Console]](#privacy-console)

Updates to existing features in Adobe Experience Platform:

- [[!DNL Artificial Intelligence and Machine Learning Services]](#ai-and-ml-services)
- [Audit logs](#audit-logs)
- [[!DNL Dashboards]](#dashboards)
- [Data collection](#data-collection)
- [Experience Data Model (XDM)](#xdm)
- [Identity Service](#identity-service)
- [Query Service](#query-service)
- [Sources](#sources)

## Attribute-based access control {#abac}

>[!IMPORTANT]
>
>Attribute-based access control will be enabled starting October 2022. If you would like to be an early adopter, please contact your Adobe representative.

Attribute-based access control is a capability of Adobe Experience Platform that gives privacy conscious brands greater flexibility to manage user access. Individual objects such as schema fields and segments can be assigned to user roles. This feature lets you grant or revoke access to individual objects for specific Platform users in your organization.

Through attribute-based access control, administrators of your organization can control users' access to, sensitive personal data (SPD),personally identifiable information (PII) and other customized type of data across all Platform workflows and resources. Administrators can define user roles that have access only to specific fields and data that correspond to those fields.

| Feature | Description |
| --- | --- |
| Attribute-based access control | Attribute-based access control allows you to label Experience Data Model (XDM) schema fields and segments with labels that define organizational or data usage scopes. In parallel, administrators can use the user and role administration interface to define access policies covering XDM schema fields and segments to better manage the access given to users or groups of users (internal, external, or third-party users). For more information, see the [attribute-based access control overview](../../access-control/abac/overview.md). |
| Permissions | Permissions is the area of Experience Cloud where administrators can define user roles and access policies to manage access permissions for features and objects within a product application. Through Permissions, you can create and manage roles, assign the desired resource permissions for these roles, and build policies to leverage labels and define which user roles have access to specific Platform resources. Permissions also allow you to manage the labels, sandboxes, and users associated with a specific role. For more information, see the [Permissions UI guide](../../access-control/abac/ui/browse.md). |

For more information on attribute-based access control, see the [attribute-based access control overview](../../access-control/abac/overview.md). For a comprehensive guide on the attribute-based access control workflow, read the [attribute-based access control end-to-end guide](../../access-control/abac/end-to-end-guide.md).

## Data hygiene {#data-hygiene}

Adobe Experience Platform provides a robust set of tools to manage large, complicated data operations in order to orchestrate consumer experiences. As data is ingested into the system over time, it becomes increasingly important to manage your data stores so that data is used as expected, is updated when incorrect data needs correcting, and is deleted when organizational policies deem it necessary.

Adobe Experience Platform's data hygiene capabilities allow you to cleanse your data by scheduling automated dataset expirations and programmatically deleting consumer data by identity.

>[!NOTE]
>
>Consumer delete capabilities are only available to organizations that have purchased Adobe Healthcare Shield or Privacy Shield.

Refer to the following documentation to get started with data hygiene:

- [Data hygiene overview](../../hygiene/home.md): Learn the basics about Platform's data hygiene capabilities.
- [[!UICONTROL Data Hygiene] UI guide](../../hygiene/ui/overview.md): Learn how to schedule dataset expirations and consumer delete requests within the Platform user interface.
- [Data Hygiene API guide](../../hygiene/api/overview.md): All data hygiene activities that you can perform in the UI can also be programmatically 

## [!UICONTROL Privacy Console] {#privacy-console}

The [!UICONTROL Privacy Console] tab in the Experience Platform UI provides a dashboard view of key insights from privacy-related features such as [data subject requests from Privacy Service], [data hygiene work orders], and [audit logs]. The console also provides several in-product use case guides to help guide you through common privacy workflows.

See the [Privacy Console overview](../../landing/governance-privacy-security/privacy-console.md) for more information on the feature.

## [!DNL Artificial Intelligence/Machine Learning services] {#ai-and-ml-services}

AI/ML services empower marketing analysts and practitioners to leverage the power of artificial intelligence and machine learning in customer experience use cases. This allows for marketing analysts to set up models specific to a company's needs using business-level configurations without the need for data science expertise.

### Attribution AI

Attribution AI is used to attribute credits to touchpoints leading to conversion events. This can be used by marketers to help quantify the marketing impact of each individual marketing touchpoint across customer journeys.

| Feature | Description |
| --- | --- |
| Save Draft Instance | This new feature enables marketing analysts to save model configuration as a draft instance during configurations and continue to edit the draft until completion before training and scoring. Scenarios where this feature is helpful include, but are not limited to, when users have multiple fields to define in the configuration workflow that they are not able to complete in one go or when one or more dataset statistics (such as column completeness) take time to be processed before they become available. Read the [Attribution AI user guide](../../intelligent-services/attribution-ai/user-guide.md) to learn more. |
| Governance policies | After users submit to create an instance through the configuration workflow, the new policy enforcement service checks whether there are any policy violations of data usage and displays the details in a popover. It ensures that data operations and marketing actions are compliant with the data usage policies configured on Adobe Experience Platform. |

For more information on Attribution AI, the [Attribution AI overview](../../intelligent-services/attribution-ai/overview.md). For information on data governance policies, read the [policies overview](../../data-governance/policies/overview.md).

### Customer AI

Customer AI available in Real-time Customer Data Platform, is used to generate custom propensity scores such as churn and conversion for individual profiles at scale.

| Feature | Description |
| --- | --- |
| Save Draft Instance | This new feature enables marketing analysts to save model configuration as a draft instance during configurations and continue to edit the draft until completion before training and scoring. Scenarios where this feature is helpful include, but are not limited to, when users have multiple fields to define in the configuration workflow that they are not able to complete in one go or when one or more dataset statistics (such as column completeness) take time to be processed before they become available. Read the [Customer AI user guide](../../intelligent-services/customer-ai/user-guide/configure.md) to learn more.|
| Governance policies | After users submit to create an instance through the configuration workflow, the new policy enforcement service checks whether there are any policy violations of data usage and displays the details in a popover. It ensures that data operations and marketing actions are compliant with the data usage policies configured on Adobe Experience Platform. |

For more information on Customer AI, read the [Customer AI overview](../../intelligent-services/customer-ai/overview.md). For information on data governance policies, read the [policies overview](../../data-governance/policies/overview.md).

## Audit Logs {#audit-logs}

Experience Platform allows you to audit user activity for various services and capabilities. The audit logs provide information about who did what and when.

**Updated features**

| Feature | Name | Description |
| --- | --- | --- |
| Resources added | <ul><li>Attribution AI instance</li><li>Customer AI instance</li><li>Datastream</li></ul> | Audit log resources are recorded automatically as the activity occurs. If the feature is enabled you do not need to manually enable log collection. |

{style="table-layout:auto"}

For more information on the different resource-specific event types tracked by audit logs in Platform, refer to the [audit logs overview](../../landing/governance-privacy-security/audit-logs/overview.md).

## [!DNL Dashboards] {#dashboards}

Adobe Experience Platform provides multiple dashboards through which you can view important insights about your organization's data, as captured during daily snapshots.

| Feature | Description |
| --- | --- |
| In-use label  | When viewed in the widget library, the in-use label easily identifies the presence of existing widgets in your dashboard. This makes it easy to avoid the duplication although you can still add the same widget more than once should you wish. |

For more information on [!DNL Dashboards], please see the [[!DNL Dashboards] overview](../../dashboards/home.md).

## Data collection {#data-collection}

Adobe Experience Platform provides a suite of technologies that allow you to collect client-side customer experience data and send it to the Adobe Experience Platform Edge Network where it can be enriched, transformed, and distributed to Adobe or non-Adobe destinations.

**Updated features**

| Feature | Description |
| --- | --- |
| Left navigation integration in the Platform UI | All capabilities that were previously exclusive to the Data Collection UI (including tags, event forwarding, and datastreams) are now also available through the left navigation in Experience Platform, under the category **[!UICONTROL Data Collection]**. This eliminates the need to switch between UIs when working with data collection capabilities in Platform.|

{style="table-layout:auto"}

For more information on data collection in Platform, please see the [data collection overview](../../collection/home.md).

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
| Support for Adobe Campaign Managed Cloud Service | Use the Adobe Campaign Managed Cloud Service source to bring your Adobe Campaign v8.4 delivery and tracking logs data to Experience Platform. Read the guide on [creating an Adobe Campaign Managed Cloud Service source connection in the UI](../../sources/tutorials/ui/create/adobe-applications/campaign.md) for more information. | 
| API support for on-demand ingestion for batch sources | Use on-demand ingestion to create ad hoc flow runs for a given dataflow with the [!DNL Flow Service] API. Flow runs created must be set to one-time ingestion. For more information, read the guide on [creating a flow run for on-demand ingestion using the API](../../sources/tutorials/api/on-demand-ingestion.md) for more information. |
| API support for retrying failed dataflow runs for batch sources | Use the `re-trigger` operation to retry your failed dataflow through the API. Read the guide on [retrying failed dataflow runs using the API](../../sources/tutorials/api/retry-flows.md) for more information. |
| API support for filtering row-level data for the [!DNL Google BigQuery] and [!DNL Snowflake] sources | Use logical and comparison operators to filter row-level data for the [!DNL Google BigQuery] and [!DNL Snowflake] sources. Read the guide on [filtering data for a source using the API](../../sources/tutorials/api/filter.md) for more information. |

To learn more about sources, read the [sources overview](../../sources/home.md).