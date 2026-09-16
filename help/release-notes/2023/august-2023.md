---
title: Adobe Experience Platform Release Notes August 2023
description: The August 2023 release notes for Adobe Experience Platform.
exl-id: c67dca3a-eccb-427e-8ab3-b69c51b57938
TQID: https://experienceleague.adobe.com/KrD3Q81-Va2zaNXg8yqaO3JWu3yCanpwcboJGjGfi5k
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: a37e4ecd-c740-426a-addf-cb1b483c5c5a
    internal-label: Segmentation
  - id: c132d929-fa62-4271-803e-b823be07b914
    internal-label: Profile
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection
  - id: ed0d8d0e-04b9-4326-be72-a0fbca265377
    internal-label: Integrations
subfeature_v2:
  - id: abc02dd6-664f-446a-9aaa-675bc0f2fe4a
    internal-label: Sources
  - id: acc16deb-1d7f-4ec9-9ce3-6cdf355afde6
    internal-label: XDM
  - id: aff8c1fa-1be7-48bd-92b8-4b12a668ca13
    internal-label: Data prep
  - id: cbd4a8d8-97a6-4ac9-b8d6-b6c1f28d3342
    internal-label: Segments
  - id: d1823595-9241-4128-8a33-e4ac3bf08773
    internal-label: Audiences
  - id: d1a87129-ba05-4f15-98b1-233618f1774a
    internal-label: Data ingestion
  - id: d9830f6f-ceb6-4faa-9744-f281fe4439f9
    internal-label: Tags
  - id: dc6ebdf7-9a94-43eb-9184-759cfdd0cf1c
    internal-label: Event forwarding
  - id: de9975b2-c43a-4287-9698-4f4cad92b83f
    internal-label: Schemas
  - id: e5ae22e3-a3b0-46ed-804f-9abf1bbe3e74
    internal-label: Guardrails
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
    internal-label: User
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
    internal-label: Admin
  - id: f8a45b24-4be7-4f1b-909b-60d06b483a20
    internal-label: Leader
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: bce87dde-a4ab-44c9-8a18-ad66e4ddb377
    internal-label: Customer experience
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
  - id: df401a2a-327d-468c-a5e4-b7b7ccd071a0
    internal-label: Data integration
  - id: e0eb8757-182f-49f3-94a4-1587d16f5094
    internal-label: Personalization
  - id: e1e0219c-f879-479f-8427-888ed2a6e9c2
    internal-label: Insights
  - id: f4e6943a-c91a-4134-a2c7-f4f20cfff2f0
    internal-label: Privacy
  - id: fd2e3797-f2ea-4b36-a9af-52acf5e90513
    internal-label: Customer profiles
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

Attribute-based access control is a capability of Adobe Experience Platform that gives privacy conscious brands greater flexibility to manage user access. Individual objects such as schema fields and segments can be assigned to user roles. This feature lets you grant or revoke access to individual objects for specific Experience Platform users in your organization.

Through attribute-based access control, administrators of your organization can control users' access to, sensitive personal data (SPD), personally identifiable information (PII) and other customized type of data across all Experience Platform workflows and resources. Administrators can define user roles that have access only to specific fields and data that correspond to those fields.

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

[!DNL Segmentation Service] allows you to segment data stored in [!DNL Experience Platform] that relates to individuals (such as customers, prospects, users, or organizations) into audiences. You can create audiences through segment definitions or other sources from your [!DNL Real-Time Customer Profile] data. These audiences are centrally configured and maintained on [!DNL Experience Platform], and are readily accessible by any Adobe solution. 

**New or updated features**

| Feature | Description |
| --- | --- |
| Look-alike audiences (Limited availability) | Look-alike audiences provide intelligent insights on each of your audiences, leveraging machine-learning-based insights to identify and target high-value customers with your marketing campaigns. With Look-alike audiences, you can create expanded audiences that target customers similar to your high-performing audiences or target customers similar to previously converted audiences. For more information on Look-alike audiences, please read the [Look-alike audiences overview](../../segmentation/types/account-audiences.md). |

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
