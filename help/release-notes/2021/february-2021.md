---
title: Adobe Experience Platform Release Notes February 2021
description: The February 2021 release notes for Adobe Experience Platform.
doc-type: release notes
last-update: February 24, 2021
author: ens70167
exl-id: 8c3142af-4021-4f7e-acbd-c5277dd188d1
TQID: https://experienceleague.adobe.com/YJ2q23PLQR-3VXfuZU1ccV2JIr48CeOs5PwHQt3WgM8
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: c132d929-fa62-4271-803e-b823be07b914
    internal-label: Profile
  - id: c20d46e7-1c7d-476c-a50e-3961d4dce35f
    internal-label: Reporting
  - id: daec7ead-f475-492a-a3b3-02ae08565d6f
    internal-label: Implementation
  - id: ed0d8d0e-04b9-4326-be72-a0fbca265377
    internal-label: Integrations
subfeature_v2:
  - id: b3ddd7c3-4e07-4269-8660-8dd1e8139d74
    internal-label: Monitoring
  - id: b572b7ff-a413-4173-b2b4-d7d3874f1b9b
    internal-label: Best practices
  - id: ee602049-8a18-43df-9299-a689a025a371
    internal-label: Use cases
  - id: f11df5ff-8102-4532-a00c-0b119f4bc11d
    internal-label: License usage
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
  - id: b5ce8718-c3af-4fdb-a1a9-fca32f83a87c
    internal-label: Implementation
  - id: bbbea26f-9621-49eb-9ab8-e06fb3bbce8c
    internal-label: Artificial intelligence
  - id: bce87dde-a4ab-44c9-8a18-ad66e4ddb377
    internal-label: Customer experience
  - id: e0eb8757-182f-49f3-94a4-1587d16f5094
    internal-label: Personalization
  - id: e1e0219c-f879-479f-8427-888ed2a6e9c2
    internal-label: Insights
  - id: eb30f47f-d87a-400f-8f78-63ce7979ff56
    internal-label: Machine learning
---
# Adobe Experience Platform release notes 

**Release date: February 24, 2021**

New features in Adobe Experience Platform:

- [(Beta) Dashboards](#dashboards)

Updates to existing features in Adobe Experience Platform:

- [[!DNL Data Science Workspace]](#dsw)
- [[!DNL Dataflows]](#dataflows)
- [[!DNL Destinations]](#destinations)
- [[!DNL Experience Data Model (XDM) System]](#xdm)
- [[!DNL Identity Service]](#identity)
- [[!DNL Real-Time Customer Profile]](#profile)
- [[!DNL Sources]](#sources)

## (Beta) Dashboards {#dashboards}

Adobe Experience Platform provides multiple dashboards through which you can view important information about your organization's data, as captured during daily snapshots.

**New features**

| Feature | Description |
| --- | --- |
|Profiles, Segments, Destinations, and License Usage Dashboards (Beta)| **Note: Dashboard functionality is currently in beta and is not available to all users. The documentation and the functionality are subject to change.**<br/><br/>Dashboards provide out-of-the-box reporting on your organization's data and are built directly into the marketer workflow within Experience Platform. These dashboards are available without the need for additional IT support or the time and effort it would otherwise take to export and process data with additional data warehousing design and implementation.|

## [!DNL Data Science Workspace] {#dsw}

Data Science Workspace uses machine learning and artificial intelligence to create insights from your data. Integrated into Adobe Experience Platform, Data Science Workspace helps you make predictions using your content and data assets across Adobe solutions.

**New features**

| Feature | Description |
| --- | --- |
| JupyterLab EDA notebook | The exploratory data analysis (EDA) Python notebook is now available in Jupyterlab. This notebook is designed to assist you with discovering patterns in data, checking data sanity, and summarizing the relevant data for predictive models. See the tutorial on [exploring web-based data for predictive models](../../data-science-workspace/jupyterlab/eda-notebook.md) for more information. |

For more general information on Data Science Workspace, refer to the [Data Science Workspace overview](../../data-science-workspace/home.md).

## [!DNL Dataflows] {#dataflows}

In Adobe Experience Platform, data is ingested from a wide variety of sources, analyzed within Experience Platform, and activated to a wide variety of destinations. Experience Platform makes the process of tracking this potentially non-linear flow of data easier by providing transparency with dataflows.

Dataflows are a representation of data jobs that move data across Experience Platform. These dataflows are configured across different services, helping move data from source connectors to target datasets, where it is then utilized by [!DNL Identity Service] and [!DNL Real-Time Customer Profile] before ultimately being activated to [!DNL Destinations].

**New features**

| Feature | Description |
| --- | --- |
| New monitoring dashboard | You can now use the monitoring dashboard for cross-service transparency and actionable insights for source data ingestions. The new monitoring dashboard provides a comprehensive view of data processed from [!DNL Data Lake] to [!DNL Identity Service] and to [!DNL Profile], while also allowing you to monitor ingestion rates, successes, and failures. See the tutorial on [monitoring source dataflows in the UI](../../dataflows/ui/monitor-sources.md) for more information. |

For more general information on dataflows, refer to the [dataflows overview](../../dataflows/home.md).

## [!DNL Destinations] {#destinations}

[!DNL Destinations] are pre-built integrations with destination platforms that allow for the seamless activation of data from Adobe Experience Platform. You can use destinations to activate your known and unknown data for cross-channel marketing campaigns, email campaigns, targeted advertising, and many other use cases.

**New destinations**

| Destination | Description |
| ----------- | ----------- |
| [[!DNL LinkedIn Matched Audiences]](../../destinations/catalog/social/linkedin.md) | The [!DNL LinkedIn Matched Audiences] connection allows you to activate audiences in the [!DNL LinkedIn] social platform. |

For more general information on destinations, refer to the [destinations overview](../../destinations/home.md).

## [!DNL Experience Data Model (XDM) System] {#xdm}

Standardization and interoperability are key concepts behind [!DNL Experience Platform]. [!DNL Experience Data Model] (XDM), driven by Adobe, is an effort to standardize customer experience data and define schemas for customer experience management.

XDM is a publicly documented specification designed to improve the power of digital experiences. It provides common structures and definitions for any application to communicate with services on Adobe Experience Platform. By adhering to XDM standards, all customer experience data can be incorporated into a common representation delivering insights in a faster, more integrated way. You can gain valuable insights from customer actions, define customer audiences through segments, and use customer attributes for personalization purposes.

**New features**

| Feature | Description |
| --- | --- |
| Upgraded search UI | Improved search capabilities are now available in the [!UICONTROL Browse] tab in the [!UICONTROL Schemas] workspace and the schema field group selection dialog in the [!DNL Schema Editor].<br><br>When searching for a term previously, results would only include XDM resources whose name matches the search query. Now, in addition to resources whose name match the query, resources containing individual attributes that match the term will also be included. This allows you to search for XDM resources based on the attributes they contain rather than by resource name.<br><br>See the documents on [exploring XDM resources](../../xdm/ui/explore.md) and [managing schemas](../../xdm/ui/resources/schemas.md) in the UI for more information. |

For more general information on XDM, refer to the [XDM System overview](../../xdm/home.md).

## [!DNL Identity Service] {#identity}

Delivering relevant digital experiences requires having a complete understanding of your customer. This is made more difficult when your customer data is fragmented across disparate systems, causing each individual customer to appear to have multiple "identities".

Adobe Experience Platform [!DNL Identity Service] helps you to gain a better view of your customer and their behavior by bridging identities across devices and systems, allowing you to deliver impactful, personal digital experiences in real time.

**New features**

| Feature | Description |
| --- | --- |
| Identity graph viewer | The identity graph viewer allows you to validate and visualize identities that are stitched together in the UI, allowing for improved debugging and transparency. See the [identity graph viewer document](../../identity-service/features/identity-graph-viewer.md) for more information. |

For more general information on [!DNL Identity Service], refer to the [Identity Service overview](../../identity-service/home.md).

## Real-Time Customer Profile {#profile}

Adobe Experience Platform enables you to drive coordinated, consistent, and relevant experiences for your customers no matter where or when they interact with your brand. With Real-Time Customer Profile, you can see a holistic view of each individual customer that combines data from multiple channels, including online, offline, CRM, and third party data. [!DNL Profile] allows you to consolidate customer data into a unified view offering an actionable, timestamped account of every customer interaction.

**New features**

| Feature | Description |
| ------- | ----------- |
| Computed Attributes (Alpha)| ***Note: This functionality is currently in alpha and is not available to all users. The documentation and the functionality are subject to change.*** <br/><br/>Computed attributes are functions used to aggregate event-level data into profile-level attributes. You can then use the aggregates in segmentation, activation and personalization. Some examples of these functions include count, sum, average, min, max, true/false. Computed attributes are currently available via API only. |

For more information on Real-Time Customer Profile, including tutorials and best practices for working with [!DNL Profile] data, please begin by reading the [Real-Time Customer Profile overview](../../profile/home.md).

## [!DNL Sources] {#sources}

Adobe Experience Platform can ingest data from external sources while allowing you to structure, label, and enhance that data using Experience Platform services. You can ingest data from a variety of sources such as Adobe applications, cloud-based storage, third party software, and your CRM system.

Experience Platform provides a RESTful API and an interactive UI that lets you set up source connections for various data providers with ease. These source connections allow you to authenticate and connect to external storage systems and CRM services, set times for ingestion runs, and manage data ingestion throughput.

**New sources**

| Feature | Description |
| --- | --- |
| [!DNL Google PubSub] | You can now connect [!DNL Google PubSub] to [!DNL Experience Platform] using the [!DNL Flow Service] API or the UI. See the [[!DNL Google PubSub] connector overview](../../sources/connectors/cloud-storage/google-pubsub.md) for more information. |
| [!DNL Oracle Object Storage] | You can now connect [!DNL Oracle Object Storage] to [!DNL Experience Platform] using the [!DNL Flow Service] API or the UI. See the [[!DNL Oracle Object Storage] connector overview](../../sources/connectors/cloud-storage/oracle-object-storage.md) for more information. |

For more general information on sources, refer to the [sources overview](../../sources/home.md).
