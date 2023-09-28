---
title: Adobe Experience Platform Release Notes
description: The August 2023 release notes for Adobe Experience Platform.
---
# Adobe Experience Platform release notes 

**Release date: August 23, 2023**

Updates to existing features in Adobe Experience Platform:

- [Real-Time Customer Data Platform](#rtcdp)
- [Attribute-based access control](#abac)
- [Dashboards](#dashboards)
- [Data Collection](#data-collection)
- [Data Ingestion](#data-ingestion)
- [Data Prep](#data-prep)
- [Destinations](#destinations)
- [Experience Data Model (XDM)](#xdm)
- [Identity Service](#identity-service)
- [Segmentation Service](#segmentation)
- [Sources](#sources)

## Real-Time Customer Data Platform {#rtcdp}

Built on Experience Platform, Real-Time Customer Data Platform ([!DNL Real-Time CDP]) helps companies bring together known and unknown data to activate customer profiles with intelligent decisioning throughout the customer journey.

[!DNL Real-Time CDP] combines multiple enterprise data sources to create customer profiles in real time. Segments built from these profiles can then be sent to downstream destinations in order to provide one-to-one personalized customer experiences across all channels and devices.

**New or updated features**

| Feature | Description |
| --- | --- |
| Intelligent Re-engagement use case guide | The [Intelligent Re-engagement](../../rtcdp/use-case-guides/intelligent-re-engagement/intelligent-re-engagement.md) use case guide provides details on how to re-engage customer who have abandoned a conversion before completing it in an intelligent and responsible way. This guide uses the following example journeys to re-engage customers: <ul><li>Re-engagement journey - Targeting customers who have abandoned product browsing.</li><li>Abandoned cart journey - Targeting customers who have placed products in the cart but have not yet completed the purchase.</li><li>Order confirmation journey - Focusing on product purchases</li></ul> Please use the detailed feedback options link at the bottom of the [Intelligent Re-engagement use case guide](../../rtcdp/use-case-guides/intelligent-re-engagement/intelligent-re-engagement.md) to provide feedback.|
| Partner Data Support | Execute upper-funnel marketing in Real-Time CDP, with partner-sourced prospect profiles and partner IDs to reach new customers and enrich your first-party data: <ul><li>Customer acquisition and addressability: Leverage cookieless identifiers and hashed PII from data partners of choice to reach net new customers and reduce third-party cookie dependency.</li><li>Full funnel marketing in a single system: Self-serve segmentation, audience curation, and native activation for prospective and known customers in a single system.</li><li>Foundation of trust: Govern partner data and profiles with patented data usage, labeling, access controls, and more to market responsibly. Read the following use case guides for more information: The prospecting use case guides are now available. Read the prospecting use case guides to learn how to engage and acquire new customers through prospecting use cases:<ul><li>[Prospecting](../../rtcdp/partner-data/prospecting.md)</li><li>[Onsite personalization](../../rtcdp/partner-data/onsite-personalization.md)</li><li>[Supplement first-party profiles](../../rtcdp/partner-data/supplement-first-party-profiles.md)</li><li>[Activate prospect audiences](../../destinations/ui/activate-prospect-audiences.md)</li></ul> |

{style="table-layout:auto"}

For more information, please read the [Real-Time CDP overview](../../rtcdp/overview.md).

## Attribute-based access control {#abac}

Attribute-based access control is a capability of Adobe Experience Platform that gives privacy conscious brands greater flexibility to manage user access. Individual objects such as schema fields and segments can be assigned to user roles. This feature lets you grant or revoke access to individual objects for specific Platform users in your organization.

Through attribute-based access control, administrators of your organization can control users' access to, sensitive personal data (SPD), personally identifiable information (PII) and other customized type of data across all Platform workflows and resources. Administrators can define user roles that have access only to specific fields and data that correspond to those fields.

**New or updated features**

| Feature | Description |
| --- | --- |
| Permissions Policy Sandbox configuration | The new [permission policies sandbox configuration](../../access-control/abac/ui/policies.md) feature allows you to enforce an attribute based access control policy on all or a select number of sandboxes, depending on your needs and requirements.|

{style="table-layout:auto"}

For more information on attribute-based access control, see the [attribute-based access control overview](../../access-control/abac/overview.md). For a comprehensive guide on the attribute-based access control workflow, read the [attribute-based access control end-to-end guide](../../access-control/abac/end-to-end-guide.md).

## Dashboards {#dashboards}

Adobe Experience Platform provides multiple dashboards through which you can view important insights about your organization's data, as captured during daily snapshots. 

**New or updated features**

| Feature | Description |
| --- | --- |
|Consent-analysis and tracking use case | Learn how to build a consent dashboard for various marketing use cases for Real-Time CDP data with the [consent-analysis and tracking document](../../dashboards/insights-use-cases/consent-analysis.md). It details how to create an audience with the appropriate attributes for your business needs, and then consume the insights through the use of pre-configured widgets in the Adobe Experience Platform UI. It also provides instructions on how to build your own custom widget with the user-defined dashboards feature. The document covers consent trending and consent overlap use cases. |

{style="table-layout:auto"}

For more information on dashboards, including how to grant access permissions and create custom widgets, begin by reading the [dashboards overview](../../dashboards/home.md).

## Data collection {#data-collection}

Adobe Experience Platform provides a suite of technologies that allow you to collect client-side customer experience data and send it to the Adobe Experience Platform Edge Network where it can be enriched, transformed, and distributed to Adobe or non-Adobe destinations.

**New or updated features**

| Type | Feature | Description |
| --- | --- | --- |
| Tags and Event Forwarding | [Experience Platform Tags (China)](/help/tags/ui/publishing/premium-cdn.md) | The new Experience Platform Tags (China) feature improves website reliability and latency, leading to faster response times for customers who deploy Tags on websites in China. Customers can now utilize the JavaScript code in the Tags library when implementing websites in China. This feature has also been added to the Unified Provisioning Protocol (UPP), allowing product deployment to be automated following purchase. |

{style="table-layout:auto"}

For more information, please read the [data collections overview](../../tags/home.md).

## Data Ingestion {#data-ingestion}

Adobe Experience Platform provides a rich set of features to ingest any type and any latency of data. You can ingest using Batch or Streaming APIs, using Adobe-built sources, data integration partners or the Adobe Experience Platform UI.

**New or updated features**

| Feature | Description |
| --- | --- |
| Changes to data ingestion workflows | Rows of data containing values larger than the specified data type (for example, long data passed as an integer data type) will now be rejected and error messages will be reported. Previously, these rows were rejected without warning. |

For more information, please read the [data ingestion overview](../../ingestion/home.md).

## Data Prep {#data-prep}

Data Prep allows data engineers to map, transform, and validate data to and from Experience Data Model (XDM).

**New or updated features**

| Feature | Description |
| --- | --- |
| Support for filtering secondary identities | You can now use Data Prep to filter out identities coming from Adobe Analytics, such as AAID and AACUSTOMID. If filtered out, these identities do not get ingested into Real-Time Customer Profile. Unfiltered data will continue to be ingested into the data lake. |

{style="table-layout:auto"}

For more information, please read the [Data Prep overview](../../data-prep/home.md).

## Destinations {#destinations}

[!DNL Destinations] are pre-built integrations with destination platforms that allow for the seamless activation of data from Adobe Experience Platform. You can use destinations to activate your known and unknown data for cross-channel marketing campaigns, email campaigns, targeted advertising, and many other use cases.

**New or updated functionality** {#destinations-new-updated-functionality}

- You can now [activate prospect audiences](../../destinations/ui/activate-prospect-audiences.md) to cloud storage destinations.
- The general [activation guardrail](../../destinations/guardrails.md#general-activation-guardrails) of maximum 100 destinations per sandbox has been updated to be a _hard limit_.

For more general information on destinations, refer to the [destinations overview](../../destinations/home.md).

## Experience Data Model (XDM) {#xdm}

XDM is an open-source specification that provides common structures and definitions (schemas) for data that is brought into Adobe Experience Platform. By adhering to XDM standards, all customer experience data can be incorporated into a common representation to deliver insights in a faster, more integrated way. You can gain valuable insights from customer actions, define customer audiences through segments, and use customer attributes for personalization purposes.

**New XDM components**

| Component type | Name | Description |
| --- | --- | --- |
| Class | [[!UICONTROL XDM Individual Prospect Profile]](https://github.com/adobe/xdm/pull/1758/files)  | Use this class to bring in prospect profiles sourced from data vendors' top-of-the-funnel customer acquisition use cases. Refer to the [[!UICONTROL XDM Individual Prospect Profile]](../../xdm/classes/prospect.md) documentation to see examples and learn more. |

{style="table-layout:auto"}

**Updated XDM components**

| Component type | Name | Update description |
| --- | --- | --- |
| Extension ([!UICONTROL Adobe Analytics ExperienceEvent Full Extension]) | [[!UICONTROL Context Data]](https://github.com/adobe/xdm/pull/1761/files) | [!UICONTROL Context Data] map object added to [!UICONTROL Adobe Analytics ExperienceEvent Full Extension] to provide context data for Adobe Analytics. |
|  Field group  | Multiple | Several fields added to [[!UICONTROL Enriched Event Segment Details]](https://github.com/adobe/xdm/pull/1760/files). |

{style="table-layout:auto"}

For more information, please read the [XDM System overview](../../xdm/home.md).

## Identity Service {#identity-service}

Adobe Experience Platform Identity Service provides you with a comprehensive view of your customers and their behavior by bridging identities across devices and systems, allowing you to deliver impactful, personal digital experiences in real time.

**New or updated features**

| Feature | Description |
| --- | --- |
| Changes to identity graph limits | By the end of September, the identity graph will change to 50 identities per graph, and the latest identity will be ingested. As a consequence, the oldest identity will be deleted based on the ingestion timestamp and identity type, with cookie identity types being deleted first. Today, identity graphs have a limit of 150 identities per graph, and once this limit is reached, graphs are no longer updated. Please contact your account representative to request a change in identity type if your production sandbox contains: <ul><li>a custom namespace where the person identifiers (such as CRM IDs) are configured as cookie/device identity type.</li><li>a custom namespace where cookie/device identifiers are configured as cross-device identity type.</li></ul> Adobe engineering will manually process these requests. For more information, read the [guardrails for Identity Service data](../../identity-service/guardrails.md). |

For more information, please read the [Identity Service overview](../../identity-service/home.md).

## Segmentation Service {#segmentation}

[!DNL Segmentation Service] allows you to segment data stored in [!DNL Experience Platform] that relates to individuals (such as customers, prospects, users, or organizations) into audiences. You can create audiences through segment definitions or other sources from your [!DNL Real-Time Customer Profile] data. These audiences are centrally configured and maintained on [!DNL Platform], and are readily accessible by any Adobe solution. 

**New or updated features**

| Feature | Description |
| --- | --- |
| Look-alike audiences (Limited availability) | Look-alike audiences provide intelligent insights on each of your audiences, leveraging machine-learning-based insights to identify and target high-value customers with your marketing campaigns. With Look-alike audiences, you can create expanded audiences that target customers similar to your high-performing audiences or target customers similar to previously converted audiences. For more information on Look-alike audiences, please read the [Look-alike audiences overview](../../segmentation/ui/lookalike-audiences.md). |

{style="table-layout:auto"}

For more information, please read the [Segmentation overview](../../segmentation/home.md).

## Sources {#sources}

Experience Platform provides a RESTful API and an interactive UI that lets you set up source connections for various data providers with ease. These source connections allow you to authenticate and connect to external storage systems and CRM services, set times for ingestion runs, and manage data ingestion throughput.

**New or updated features**

| Feature | Description |
| --- | --- |
| General availability of [!DNL SugarCRM] | [!DNL SugarCRM] sources are now available. Use the [!DNL SugarCRM Accounts & Contacts] and the [!DNL SugarCRM Events] sources to bring data from your [!DNL SugarCRM] account to Experience Platform. For more information, read the [[!DNL SugarCRM] overview](../../sources/connectors/crm/sugarcrm.md). |
| Support for on-demand ingestion for sources dataflows in the UI | You can now create flow runs on demand for an existing sources dataflow in the UI. For more information, read the guide on [creating an on-demand flow run for sources using the UI](../../sources/tutorials/ui/on-demand-ingestion.md). |
| Support for new `correlationID` field for Adobe Analytics | The `_experience.decisioning.propositions.scopeDetails.correlationID` field is now available in the Adobe Analytics source connector schema. This field is used in support of A4T classifications and will be populated starting September 2023. |

{style="table-layout:auto"}

For more information, please read the [sources overview](../../sources/home.md).
