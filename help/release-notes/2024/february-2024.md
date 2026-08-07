---
title: Adobe Experience Platform Release Notes February 2024
description: The February 2024 release notes for Adobe Experience Platform.
exl-id: 7e4b76b7-4027-4890-b869-1dbb79670c3e
TQID: https://experienceleague.adobe.com/cl8peHi3nYEJeVe4tMsxe3XwtwvkKLLn2r5kBOImVr8
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
  - id: ae2cba0e-54f2-464b-a3b3-ad371e8a886a
    internal-label: Catalog
  - id: b784da9a-7978-4766-bf1f-5ab2b23d894a
    internal-label: Federated Audience Composition
  - id: d1823595-9241-4128-8a33-e4ac3bf08773
    internal-label: Audiences
  - id: d1a87129-ba05-4f15-98b1-233618f1774a
    internal-label: Data ingestion
  - id: d9830f6f-ceb6-4faa-9744-f281fe4439f9
    internal-label: Tags
  - id: de9975b2-c43a-4287-9698-4f4cad92b83f
    internal-label: Schemas
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
  - id: beb7a3c1-66ab-4786-b879-7621375b3c40
    internal-label: Email marketing
  - id: c7d04a2c-412a-4c9d-9d7a-4456eaa5adeb
    internal-label: Governance
  - id: d095671a-1355-40aa-8b5f-06c33c68080b
    internal-label: Security
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
  - id: e1e0219c-f879-479f-8427-888ed2a6e9c2
    internal-label: Insights
  - id: f4e6943a-c91a-4134-a2c7-f4f20cfff2f0
    internal-label: Privacy
---
# Adobe Experience Platform release notes 

**Release date: February 21, 2024**

Updates to existing features in Experience Platform:

- [Alerts](#alerts)
- [Data collection](#data-collection)
- [Destinations](#destinations)
- [Sandboxes](#sandboxes)
- [Segmentation Service](#segmentation)
- [Sources](#sources)

## Alerts {#alerts}

Experience Platform allows you to subscribe to event-based alerts for various Experience Platform activities. You can subscribe to different alert rules through the [!UICONTROL Alerts] tab in the Experience Platform user interface, and can choose to receive alert messages within the UI itself or through email notifications.

**New or updated features**

| Feature | Description |
| --- | --- |
| Alerts history tab | As an Experience Platform administrator, you can use the the manage alert subscribers feature to assign an alert to an Adobe user ID, external email address, or an email group list. For more information, see the [alerts UI documentation](/help/observability/alerts/ui.md) for more information about the history tab. |

{style="table-layout:auto"}

To learn more about alerts, read the [[!DNL Observability Insights] overview](/help/observability/home.md).

## Data collection {#data-collection}

Adobe Experience Platform provides a suite of technologies that allow you to collect client-side customer experience data and send it to the Adobe Experience Platform Edge Network where it can be enriched, transformed, and distributed to Adobe or non-Adobe destinations.

**New or updated features**

| Feature | Description |
| --- | --- |
| Web In-App Messaging support in Web SDK | The Adobe Experience Platform Web SDK now supports Web In-App Messaging configuration for Adobe Journey Optimizer campaigns. |

{style="table-layout:auto"}

To learn more about data collections, read the [data collections overview](/help/tags/home.md).

<!-- 
## Data Prep {#data-prep}

Data Prep allows data engineers to map, transform, and validate data to and from Experience Data Model (XDM).

**New or updated features**

| Feature | Description |
| --- | --- |
| New mapper functions for Adobe Analytics | You can now use the following functions to extract event data from Adobe Analytics: <ul><li>`aa_get_event_id`</li><li>`aa_get_event_value`</li><li>`aa_get_product_categories`</li><li>`aa_get_product_names`</li><li>`aa_get_product_quantities`</li><li>`aa_get_product_prices`</li><li>`aa_get_product_event_values`</li><li>`aa_get_product_evars`</li></ul> For more information on these functions, read the [Data Prep functions guide](/help/data-prep/functions.md) |

{style="table-layout:auto"}

For more information on Data Prep, read the [Data Prep overview](/help/data-prep/home.md). 
-->

## Destinations {#destinations}

[!DNL Destinations] are pre-built integrations with destination platforms that allow for the seamless activation of data from Adobe Experience Platform. You can use destinations to activate your known and unknown data for cross-channel marketing campaigns, email campaigns, targeted advertising, and many other use cases.

**New destinations** {#new-destinations}

| Destination | Description |
| ----------- | ----------- |
| [Gainsight PX connection](/help/destinations/catalog/analytics/gainsight-px.md) | Gainsight PX is a product experience platform that enables product teams to understand how users use their products, collect feedback, and create in-app engagements like product walkthroughs to drive user onboarding and product adoption. |
| [Mailchimp Tags connection](/help/destinations/catalog/email-marketing/mailchimp-tags.md) | Mailchimp is a popular marketing automation platform and email marketing service. You can use the Mailchimp Tags connector to structure, label, or categorize your contacts. |
| [SAP Commerce connection](/help/destinations/catalog/ecommerce/sap-commerce.md) | SAP Commerce is a cloud-based e-commerce platform solution for B2B and B2C enterprises and available as part of the SAP Customer Experience portfolio. You can use this destination to update your customer details within SAP Commerce from an existing Experience Platform audience. |

{style="table-layout:auto"}

**New or updated functionality** {#destinations-new-updated-functionality}

| Functionality | Description |
| ----------- | ----------- |
| Activate account audiences generally available | The functionality to activate account audiences to certain destinations is now generally available for companies purchasing the [Business-to-Business](/help/rtcdp/overview.md#rtcdp-b2b) and [Business-to-Person](/help/rtcdp/overview.md#rtcdp-b2p) editions of Real-Time Customer Data Platform. Read the tutorial on [activating account audiences](/help/destinations/ui/activate-account-audiences.md) to get complete information, including supported destinations. |
|Digital Markets Act Consent Enforcement tools for Google destinations | Google is releasing changes to the [Google Ads API](https://developers.google.com/google-ads/api/docs/start), [Customer Match](https://ads-developers.googleblog.com/2023/10/updates-to-customer-match-conversion.html),  and the [Display & Video 360 API](https://developers.google.com/display-video/api/guides/getting-started/overview) in order to support the compliance and consent-related requirements defined under the [Digital Markets Act](https://digital-markets-act.ec.europa.eu/index_en) (DMA) in the European Union ([EU User Consent Policy](https://www.google.com/about/company/user-consent-policy/)). Enforcement of these changes to consent requirements is expected to go into effect starting March 6, 2024. <br/><br/> To adhere to the EU user consent policy and continue creating audience lists for users in the European Economic Area (EEA), advertisers and partners must ensure they are passing end-user consent when uploading audience data. As a Google Partner, Adobe provides you with the necessary tools to comply with these consent requirements under the DMA in the European Union.<br/><br/>Customers who have purchased Adobe Privacy & Security Shield and have configured a [consent policy](/help/data-governance/enforcement/auto-enforcement.md#consent-policy-evaluation) to filter out non-consented profiles do not need to take any action.<br/><br/>Customers who have not purchased Adobe Privacy & Security Shield must use the [segment definition](/help/segmentation/home.md#segment-definitions) capabilities within [Segment Builder](/help/segmentation/ui/segment-builder.md) to filter out non-consented profiles, in order to continue using the existing Real-Time CDP Google destinations without interruption. |
|[!BADGE Beta]{type=Informative} Reorder mapping fields for batch destinations | You can now change the order of the columns in your CSV exports by dragging and dropping the mapping fields in the [mapping](/help/destinations/ui/activate-batch-profile-destinations.md#mapping) step. The order of the mapped fields in the UI reflects in the order of the columns in the exported CSV file, from top to bottom, with the top row being the leftmost column in the CSV file. <br/><br/> This feature is in beta and only available to select customers. To request access to this feature, contact your Adobe representative.|
|[!BADGE Beta]{type=Informative} Preselected default export schedules for batch destinations| Experience Platform now automatically sets a default schedule for each file export. See the documentation on [scheduling audience exports](/help/destinations/ui/activate-batch-profile-destinations.md#scheduling) to learn how to modify the default schedule. <br/><br/> This feature is in beta and only available to select customers. To request access to this feature, contact your Adobe representative.|
|[!BADGE Beta]{type=Informative} Bulk edit audience activation schedules for batch destinations| You can now edit the activation schedule for multiple audiences in bulk, from the [Activation data](/help/destinations/ui/destination-details-page.md#bulk-edit-schedule) page. <br/><br/> This feature is in beta and only available to select customers. To request access to this feature, contact your Adobe representative. |
|[!BADGE Beta]{type=Informative} Bulk export files on-demand to batch destinations| You can now export audiences in bulk to batch destinations, through the [export files on-demand](/help/destinations/ui/export-file-now.md) functionality. <br/><br/> This feature is in beta and only available to select customers. To request access to this feature, contact your Adobe representative. |

{style="table-layout:auto"}

For more general information on destinations, refer to the [destinations overview](/help/destinations/home.md).

## Sandboxes {#sandboxes}

Adobe Experience Platform is built to enrich digital experience applications on a global scale. Companies often run multiple digital experience applications in parallel and need to cater for the development, testing, and deployment of these applications while ensuring operational compliance. To address this need, Experience Platform provides sandboxes that partition a single Experience Platform instance into separate virtual environments to help develop and evolve digital experience applications.

**New or updated features**

| Feature | Description |
| --- | --- |
| Sandbox tooling | In addition to now supporting object types for consent and governance rules, use sandbox tooling to import schemas without unified profiles enabled, check for missing attributes in the target sandbox when importing a segment, and default to using the existing merge policy. For more information on these features, see the [sandbox tooling UI guide](/help/sandboxes/ui/sandbox-tooling.md). |

{style="table-layout:auto"}

For more information on sandboxes, read the [sandboxes overview](/help/sandboxes/home.md).

## Segmentation Service {#segmentation}

[!DNL Segmentation Service] allows you to segment data stored in [!DNL Experience Platform] that relates to individuals (such as customers, prospects, users, or organizations) into audiences. You can create audiences through segment definitions or other sources from your [!DNL Real-Time Customer Profile] data. These audiences are centrally configured and maintained on [!DNL Experience Platform], and are readily accessible by any Adobe solution. 

**New feature**

| Feature | Description |
| ------- | ----------- |
| Account audiences | Account audiences are now generally available! You can now use account segmentation to bring the full ease and sophistication of the marketing segmentation experience from people-based audiences to account-based audiences in both the B2B and B2P Editions of Real-Time Customer Experience Platform. This release lets you use people-based audiences as a predicate to account-based audiences, adds search capabilities, supports the usage of custom entities, and is compliant with Data Governance. For more information about this feature, please read the [account audiences overview](/help/segmentation/types/account-audiences.md). |

{style="table-layout:auto"}

## Sources {#sources}

Experience Platform provides a RESTful API and an interactive UI that lets you set up source connections for various data providers with ease. These source connections allow you to authenticate and connect to external storage systems and CRM services, set times for ingestion runs, and manage data ingestion throughput.

**New or updated features**

| Feature | Description |
| --- | --- |
| [!BADGE Beta]{type=Informative} [!DNL Acxiom] source | Use the [[!DNL Acxiom Prospecting Data Import] source](/help/sources/tutorials/ui/create/data-partners/acxiom-prospecting-data-import.md) to retrieve and map data from [!DNL Acxiom] prospect service to Experience Platform. |

{style="table-layout:auto"}

For more information on sources, read the [sources overview](/help/sources/home.md).
