---
title: Adobe Experience Platform Release Notes January 2022
description: The January 2022 release notes for Adobe Experience Platform.
exl-id: 734ce1b3-e270-4c37-958c-88bcc39fbf20
TQID: https://experienceleague.adobe.com/wcRVicN4gHBCNm4lHB0IYXUQSRXH78OAIoxWYkAsmn8
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: a37e4ecd-c740-426a-addf-cb1b483c5c5a
    internal-label: Segmentation
  - id: c132d929-fa62-4271-803e-b823be07b914
    internal-label: Profile
  - id: c20d46e7-1c7d-476c-a50e-3961d4dce35f
    internal-label: Reporting
  - id: ed0d8d0e-04b9-4326-be72-a0fbca265377
    internal-label: Integrations
  - id: eec185bd-7d60-4193-ba3f-da427569936a
    internal-label: Destinations dashboard
subfeature_v2:
  - id: ac9ff56e-fdaf-4412-aba7-1f588cb8aa2b
    internal-label: File based Destination
  - id: b08f50f9-9135-4961-a21e-47e56473ae77
    internal-label: Profiles dashboard
  - id: b3ddd7c3-4e07-4269-8660-8dd1e8139d74
    internal-label: Monitoring
  - id: b784da9a-7978-4766-bf1f-5ab2b23d894a
    internal-label: Federated Audience Composition
  - id: cbd4a8d8-97a6-4ac9-b8d6-b6c1f28d3342
    internal-label: Segments
  - id: d1823595-9241-4128-8a33-e4ac3bf08773
    internal-label: Audiences
  - id: dcded644-509e-49c5-ae85-3862a2a08609
    internal-label: Streaming destinations
  - id: f0c9f224-75f2-4864-8de6-859ae7856690
    internal-label: Segment Match
  - id: f6ac78a3-5b59-40f5-a37d-45df5303d3a3
    internal-label: Dashboards
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
  - id: aa2f3246-cb95-4b30-8899-fdf7d73550cc
    internal-label: Reporting
  - id: bcc5edb5-84c3-4940-9f84-ed88b6c16274
    internal-label: Experimentation
  - id: e0eb8757-182f-49f3-94a4-1587d16f5094
    internal-label: Personalization
  - id: e1e0219c-f879-479f-8427-888ed2a6e9c2
    internal-label: Insights
  - id: eb30f47f-d87a-400f-8f78-63ce7979ff56
    internal-label: Machine learning
  - id: f4e6943a-c91a-4134-a2c7-f4f20cfff2f0
    internal-label: Privacy
---
# Adobe Experience Platform release notes 

**Release date: January 26, 2022**

Updates to existing features in Adobe Experience Platform:

- [Alerts](#alerts)
- [[!DNL Dashboards]](#dashboards)
- [[!DNL Data Prep]](#data-prep)
- [[!DNL Destinations]](#destinations)
- [Query Service](#query-service)
- [Sandboxes](#sandboxes)
- [Segmentation Service](#segmentation)
- [Sources](#sources)

## Alerts {#alerts}

Experience Platform allows you to subscribe to event-based alerts for various Experience Platform activities. You can subscribe to different alert rules through the [!UICONTROL Alerts] tab in the Experience Platform user interface, and can choose to receive alert messages within the UI itself or through email notifications.

**Updated features**

| Feature | Description |
| --- | --- |
| New alert rules | Several new alert rules are now available for workflows related to data ingestion, identities, profiles, segmentation, and activation. See the overview on [alert rules](../../observability/alerts/rules.md) for the updated list of alert types. |
| In-context alerts for sources dataflows | You can now subscribe to receive alert messages regarding the status of your dataflows during the ingestion workflow. For more information, see the guide on [subscribing to sources alerts in the UI](../../sources/tutorials/ui/alerts.md). |

For more information on alerts in Experience Platform, refer to the [alerts overview](../../observability/alerts/overview.md).

## [!DNL Dashboards] {#dashboards}

Adobe Experience Platform provides multiple dashboards through which you can view important insights about your organization's data, as captured during daily snapshots.

| Feature | Description |
| --- | --- |
| Intelligent Captions | A machine learning algorithm automatically provides insights on your profile and audience data, and illustrates patterns and trends over a 30-90 day, or 12-month period. The captions include information on <ul><li>Overall shape and statistics</li><li>Trends and abrupt changes</li><li>Seasonal patterns</li><li>Unexpected anomalies</li></ul> More information can be found on the [profiles dashboards](../../dashboards/guides/profiles.md#profiles-count-trend) and [segments dashboards](../../dashboards/guides/audiences.md#audience-size-trend) documentation. |
| Dashboards Inventory | Access the pre-configured reports of profile, segments, and destinations dashboards including any installed integrations such as PowerBI, in a centralized location. For more information, see the [[!DNL Dashboards] inventory documentation](../../dashboards/inventory.md). |
| PowerBI Report Templates | Build, customize or extend metrics from the profile, segments, and destination reporting data models using new PowerBI charts. The automated installation workflow allows you to share your marketing insights across your organization from within the PowerBI environment. For more information, see the [PowerBI report template documentation](../../dashboards/integrations/power-bi.md). |

For more information on [!DNL Dashboards], please see the [[!DNL Dashboards] overview](../../dashboards/home.md).

## [!DNL Data Prep] {#data-prep}

[!DNL Data Prep] allows data engineers to map, transform, and validate data to and from Experience Data Model (XDM).

**Updated features**

| Feature | Description |
| --- | --- |
| Consolidated mapping experience | The new mapping interface in the Experience Platform UI provides you with a consistent mapping experience to take advantage of intelligent mapping recommendations, manually configure mapping rules, and debug any errors that occur to your mapping sets. For more information, see the [[!DNL Data Prep] UI guide](../../data-prep/ui/mapping.md). |

For more information on [!DNL Data Prep], please see the [[!DNL Data Prep] overview](../../data-prep/home.md).

## [!DNL Destinations] {#destinations}

[!DNL Destinations] are pre-built integrations with destination platforms that allow for the seamless activation of data from Adobe Experience Platform. You can use destinations to activate your known and unknown data for cross-channel marketing campaigns, email campaigns, targeted advertising, and many other use cases.

**New or updated features**

| Feature | Description |
| ----------- | ----------- |
| Same-page and next-page personalization | The [same-page and next-page personalization feature](../../destinations/ui/activate-edge-personalization-destinations.md) provides a shared, targetable view of users for applications on the Edge Network, for consistency between marketing and customer channels. This personalization is possible through the [Adobe Target connection](../../destinations/catalog/personalization/adobe-target-connection.md) and the [Custom personalization connection](../../destinations/catalog/personalization/custom-personalization.md). To configure your same-page or next-page personalization campaigns, see the [dedicated tutorial](../../destinations/ui/activate-edge-personalization-destinations.md). |
| Batch destination monitoring and segment-level metrics | The destination monitoring functionality is now expanded from streaming destinations to also include batch destinations and segment-level metrics for your activation dataflows. For more information, read [monitoring destinations dashboard](/help/dataflows/ui/monitor-destinations.md#monitoring-destinations-dashboard), [monitoring segment jobs dashboard](/help/dataflows/ui/monitor-destinations.md#monitoring-segment-jobs-dashboard), and [segment-level view](/help/dataflows/ui/monitor-destinations.md#segment-level-view). |
| Schedule editing in the UI for existing batch activation dataflows | This release introduces the option to edit the schedule of your existing activation dataflows to batch destinations. For more information, read [activate profile data to batch profile destinations](/help/destinations/ui/activate-batch-profile-destinations.md).  |
| Marketo destination enhancements | Experience Platform customers who use Marketo Engage can maximize their Marketo database with the new ability to push net-new person records into Marketo Engage from Experience Platform via the [Marketo destination connector](/help/destinations/catalog/adobe/marketo-engage.md). <br> When sending audience segments from Experience Platform to Marketo Engage, people within the segment that don't already exist in your Marketo Engage database can be automatically added to it. For more information, read [Push an Adobe Experience Platform Segment to a Marketo Static List](https://experienceleague.adobe.com/docs/marketo/using/product-docs/core-marketo-concepts/smart-lists-and-static-lists/static-lists/push-an-adobe-experience-platform-segment-to-a-marketo-static-list.html) (step 9 in the tutorial indicates how to push net-new person records into Marketo). |

**New destinations**

| Destination | Description |
| ----------- | ----------- |
| [Adobe Target connection](../../destinations/catalog/personalization/adobe-target-connection.md) | Adobe Target is an application that provides real-time, AI-powered personalization and experimentation in all inbound customer interactions across websites, mobile apps, and more. Adobe Target is a personalization connection in Adobe Experience Platform. |
| [Custom personalization connection](../../destinations/catalog/personalization/custom-personalization.md) | This personalization connection provides a way to retrieve segment information from Adobe Experience Platform to external personalization platforms, content management systems, ad servers, and other applications that are running on customer websites. |

For more general information on destinations, refer to the [destinations overview](../../destinations/home.md).

## Query Service {#query-service}

[!DNL Query Service] allows you to use standard SQL to query data in Adobe Experience Platform [!DNL Data Lake]. You can join any datasets from the [!DNL Data Lake] and capture the query results as a new dataset for use in reporting, Data Science Workspace, or for ingestion into Real-Time Customer Profile.

**Updated features**

| Feature | Description |
| --- | --- |
| Anonymous Block | The anonymous block SQL construct allows you to break down large scale data preparation jobs in Query Service into smaller tasks, then reuse and execute them in sequence for incremental data loading. For more information, see the [sample queries for anonymous block documentation](../../query-service/key-concepts/anonymous-block.md). |
| Dataset Organization | Provides a coherent, logical data structure to organize your data assets for use with Query Service as the amount of data assets within the sandbox grows. For more information, see the [organize data assets documentation](../../query-service/best-practices/organize-data-assets.md). |

For more information on [!DNL Query Service], please see the [[!DNL Query Service] overview](../../query-service/home.md).

## Sandboxes {#sandboxes}

Adobe Experience Platform is built to enrich digital experience applications on a global scale. Companies often run multiple digital experience applications in parallel and need to cater for the development, testing, and deployment of these applications while ensuring operational compliance. In order to address this need, Experience Platform provides sandboxes which partition a single Experience Platform instance into separate virtual environments to help develop and evolve digital experience applications.

**Updated features**

| Feature | Description |
| --- | --- |
| Sandboxes UI enhancements | The sandbox indicator is now integrated within the header for all Experience Platform UI applications. The sandbox indicator displays the sandbox name, region, and type and also allows you to access a dropdown menu to switch between sandboxes. For more information, see the [sandbox UI guide](../../sandboxes/ui/user-guide.md). |

For more information on sandboxes, please see the [sandboxes overview](../../sandboxes/home.md).

## Segmentation Service {#segmentation}

[!DNL Segmentation Service] defines a particular subset of profiles by describing the criteria that distinguishes a marketable group of people within your customer base. Segments can be based on record data (such as demographic information) or time series events representing customer interactions with your brand.

**New features**

| Feature | Description |
| --- | --- |
| Segment Match | Segment Match is a data collaboration service that allows for two or more Experience Platform users to exchange data, based on common identifiers, in a secure, governed, and privacy-friendly manner. Segment Match uses Experience Platform privacy standards and personal identifiers such as hashed emails, hashed phone numbers, and device identifiers like IDFAs and GAIDs. For more information, see the [Segment Match overview](../../segmentation/ui/segment-match/overview.md). |

For more information on [!DNL Segmentation Service], please see the [Segmentation overview](../../segmentation/home.md).

## Sources {#sources}

Adobe Experience Platform can ingest data from external sources while allowing you to structure, label, and enhance that data using Experience Platform services. You can ingest data from a variety of sources such as Adobe applications, cloud-based storage, third-party software, and your CRM system.

Experience Platform provides a RESTful API and an interactive UI that lets you set up source connections for various data providers with ease. These source connections allow you to authenticate and connect to external storage systems and CRM services, set times for ingestion runs, and manage data ingestion throughput.

| Feature | Description |
| --- | --- |
| Beta sources moving to GA | The following sources have been promoted from beta to GA: <ul><li>[[!DNL Snowflake]](../../sources/connectors/databases/snowflake.md)</li><li>[[!DNL Veeva CRM]](../../sources/connectors/crm/veeva.md)</li></ul> |
| [!DNL Event Hubs] source enhancements | The [!DNL Event Hubs] source now supports non-root SAS key type of authentication to connect and create source connection. For more information, see the [[!DNL Event Hubs] overview](../../sources/connectors/cloud-storage/eventhub.md). |
| [!DNL SFTP] source enhancements | The [!DNL SFTP] source now allows you to a establish a set number of a maximum concurrent connections that a dataflow can use to connect to the SFTP server. For more information, see the [[!DNL SFTP] overview](../../sources/connectors/cloud-storage/sftp.md). |
