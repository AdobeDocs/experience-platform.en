---
title: Adobe Experience Platform Release Notes February 2022
description: The February 2022 release notes for Adobe Experience Platform.
exl-id: ae453f7d-ac75-4cc3-8435-57d25f086cc3
TQID: https://experienceleague.adobe.com/U-c7Ievwmd7m8Lwnp3Bsfby6Wg6PZDID-JxD9NNK9mQ
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: c132d929-fa62-4271-803e-b823be07b914
    internal-label: Profile
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection
  - id: ed0d8d0e-04b9-4326-be72-a0fbca265377
    internal-label: Integrations
  - id: eec185bd-7d60-4193-ba3f-da427569936a
    internal-label: Destinations dashboard
subfeature_v2:
  - id: abc02dd6-664f-446a-9aaa-675bc0f2fe4a
    internal-label: Sources
  - id: acc16deb-1d7f-4ec9-9ce3-6cdf355afde6
    internal-label: XDM
  - id: aff8c1fa-1be7-48bd-92b8-4b12a668ca13
    internal-label: Data prep
  - id: b64298cc-90cc-46b7-8917-ee391f1c7516
    internal-label: Data collection UI
  - id: ca3d6bf4-a4af-4944-936b-8de1eb09f149
    internal-label: Datastreams
  - id: d1a87129-ba05-4f15-98b1-233618f1774a
    internal-label: Data ingestion
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
  - id: e1e0219c-f879-479f-8427-888ed2a6e9c2
    internal-label: Insights
---
# Adobe Experience Platform release notes 

**Release date: March 7, 2022**

>[!NOTE]
>
>This release was shifted from the original date of February 23 to March 7.

Updates to existing features in Adobe Experience Platform:

- [[!DNL Dashboards]](#dashboards)
- [[!DNL Data collection]](#data-collection)
- [[!DNL Destinations]](#destinations)
- [[!DNL Identity Service]](#identity)
- [[!DNL Sources]](#sources)

## [!DNL Dashboards] {#dashboards}

Adobe Experience Platform provides multiple [!DNL dashboards] through which you can view important insights about your organization's data, as captured during daily snapshots.

**Updated features**

| Feature | Description |
| --- | --- |
| New standard destinations widgets | The following standard widgets allow you to visualize different metrics related to your destinations.<ul><li>Recently activated segments by destination. This widget displays the top five most recently activated segments in descending order according to the chosen destination.</li><li>Audience size trend. This widget depicts the relationship of the profile count over a period of time for a segment that has been mapped to that destination account.</li><li>Unmapped segments by identity. This widget lists the top five unmapped segments ranked by descending identity count for a given destination and identity.</li><li>Mapped segments by identity. This widget lists the top five mapped segments. Segments are ordered from high to low according to their respective counts of source IDs that match the destination ID selected from the widget's dropdown menu.</li><li>Common audiences. This widget provides a list of the top five segments activated across the destination account chosen at the top of the page, and the destination selected in the widget dropdown.</li></ul> For more information on the available standard widgets, see the [destinations dashboard documentation.](https://experienceleague.adobe.com/docs/experience-platform/dashboards/guides/destinations.html#standard-widgets). |

For more information on [!DNL Dashboards], please see the [[!DNL Dashboards] overview](../../dashboards/home.md).

## Data collection {#data-collection}

Experience Platform provides a suite of technologies that allow you to collect client-side customer experience data and send it to the Adobe Experience Platform Edge Network where it can be enriched, transformed, and distributed to Adobe or non-Adobe destinations.

**New features**

| Feature | Description |
| --- | --- |
| Improved UI workflow for datastream configuration | The workflow for creating a new datastream in the Data Collection UI has been updated. When adding services to a datastream, only the services you have access to will be included in the list of options. See the guide on [configuring a datastream](../../datastreams/overview.md) for more information. |
| Data Prep for Data Collection | If you are using the Adobe Experience Platform Web SDK, you can now leverage Data Prep capabilities to map your data to Experience Data Model (XDM) on the server side. See the section on [Data Prep for Data Collection](../../datastreams/data-prep.md) in the datastreams guide for more information. |
| First-party device IDs | You can now send your own device IDs to the Adobe Experience Platform Edge Network when collecting customer data using the Experience Platform Web SDK, providing a workaround for recent browser restrictions on third-party cookie lifespans. See the guide on [first-party device IDs](/help/collection/identity/fpid.md) for more information. |

For more information on data collection in Experience Platform, please see the [data collection overview](../../collection/home.md).

## [!DNL Destinations] {#destinations}

[!DNL Destinations] are pre-built integrations with destination platforms that allow for the seamless activation of data from Adobe Experience Platform. You can use destinations to activate your known and unknown data for cross-channel marketing campaigns, email campaigns, targeted advertising, and many other use cases.

**New or updated features**

| Feature | Description |
| ----------- | ----------- |
| (Beta) Destination SDK support for file-based destinations | [Destination SDK support for file-based destinations](../../destinations/destination-sdk/functionality/destination-server/server-specs.md) is currently in private beta and is only available to a select number of partners and customers. The functionality and associated documentation are subject to change before general availability release.<br><br>Contact your Adobe account representative to learn how to access the feature. Adobe-internal account representatives should reach out to the Experience Platform destinations product and engineering teams to discuss supported use cases. <br><br> In the beta phase of Destination SDK support for file-based destinations, beta partners and customers can use the [Experience Platform Destination SDK](../../destinations/destination-sdk/overview.md) to build private destinations to benefit from the following functionality: <ul><li>Create a file-based (batch) destination via Amazon S3, SFTP servers, Azure Blob, Azure Data Lake Storage, Data Landing Zone storage.</li><li>Configure and set default file export scheduling and frequency options.</li><li>Configure and set options to format your exported CSV files (delimiters, escape characters, and other options).</li><li>Ability to set and edit custom file headers.</li><li>Ability to receive event notifications about the export of files and segments.</li><li>Ability to export additional file types such as CSV, TSV, JSON, Parquet.</li></ul>  <br>To get started with the new functionality, read [(Beta) Use Destination SDK to configure a file-based destination](../../destinations/destination-sdk/guides/configure-file-based-destination-instructions.md). <br><br> The functionality to create private or productized *streaming* destinations by using Destination SDK is already available to all Experience Platform customers and partners. Read the guide on how to [use Destination SDK to configure a streaming destination](../../destinations/destination-sdk/guides/configure-destination-instructions.md) for details. |

## [!DNL Identity Service] {#identity}

Delivering relevant digital experiences requires having a complete understanding of your customer. This is made more difficult when your customer data is fragmented across disparate systems, causing each individual customer to appear to have multiple "identities".

Adobe Experience Platform [!DNL Identity Service] helps you gain a better view of your customer and their behavior by bridging identities across devices and systems, allowing you to deliver impactful, personal digital experiences in real time.

**Updated features**

| Feature | Description |
| --- | --- |
| New permission for `view-identity-graph` | You can now use the `view-identity-graph` permission to control whether users in your organization are able to view identity graph data. Users without this permission will be forbidden from accessing the identity graph viewer in the UI or when accessing [!DNL Identity Service] APIs which return identities. See the [access control overview](../../access-control/home.md) for more information on permissions. |

For more general information on [!DNL Identity Service], refer to the [Identity Service overview](../../identity-service/home.md).

## Sources {#sources}

Adobe Experience Platform can ingest data from external sources while allowing you to structure, label, and enhance that data using Experience Platform services. You can ingest data from a variety of sources such as Adobe applications, cloud-based storage, third-party software, and your CRM system.

Experience Platform provides a RESTful API and an interactive UI that lets you set up source connections for various data providers with ease. These source connections allow you to authenticate and connect to external storage systems and CRM services, set times for ingestion runs, and manage data ingestion throughput.

**Updated features**

| Feature | Description |
| --- | --- |
| Beta sources moving to GA | The following sources have been promoted from beta to GA: <ul><li>[[!DNL Mailchimp Campaigns]](../../sources/connectors/marketing-automation/mailchimp.md)</li><li>[[!DNL Mailchimp Members]](../../sources/connectors/marketing-automation/mailchimp.md)</li></ul> |

To learn more about sources, see the [sources overview](../../sources/home.md).
