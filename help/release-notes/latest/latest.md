---
title: Adobe Experience Platform Release Notes
description: The March 2023 release notes for Adobe Experience Platform.
---
# Adobe Experience Platform release notes 

>[!IMPORTANT]
>
>During [insert period of time], the `Existing` status will be deprecated from the segment membership map. After this change, profiles qualified in a segment will be represented as `Realized` and profiles disqualified will continue to be represented as `Exited`. This will bring parity with file-based destinations with `Active` and `Expired` segment statuses. For more details on this change, please read the [Segmentation Service section](#profile).

**Release date: March 29, 2023**

Updates to existing features in Adobe Experience Platform:

- [Data collection](#data-collection)
- [Data Prep](#data-prep)
- [Segmentation Service](#segmentation)
- [Sources](#sources)

## Data collection {#data-collection}

Adobe Experience Platform provides a suite of technologies that allow you to collect client-side customer experience data and send it to the Adobe Experience Platform Edge Network where it can be enriched, transformed, and distributed to Adobe or non-Adobe destinations.

**New or updated features**

| Feature | Description |
| --- | --- |
| New quick start workflow for Meta Conversions API (Beta) | Access new quick start workflows under "Getting Started" from the Data Collection home screen! The [quick start workflow for Meta Conversions API](https://experienceleague.adobe.com/docs/experience-platform/tags/extensions/server/meta/overview.html?lang=en#quick-start) enables customers to rapidly collect and forward event data, server-side to Meta for ad conversions in just a few simple steps. |
| [!DNL Braze] event forwarding extension | The [[!DNL Braze Track Events API]](https://experienceleague.adobe.com/docs/experience-platform/tags/extensions/server/braze/overview.html) event forwarding extension allows you to leverage data captured in the Adobe Experience Platform Edge Network and send it to [!DNL Braze] in the form of server-side events using the [!DNL Braze] User Track APIs. |
| [!DNL Mixpanel] event forwarding extension | The [[!DNL Mixpanel Track Events API]](https://experienceleague.adobe.com/docs/experience-platform/tags/extensions/server/braze/overview.html) extension allows customers to leverage event forwarding to capture event information in the Adobe Experience Platform Edge Network and send it to Mixpanel using the Track Events API. |

{style="table-layout:auto"}

## Data Prep {#data-prep}

Data Prep allows data engineers to map, transform, and validate data to and from Experience Data Model (XDM).

**Updated features**

| Feature | Description |
| --- | --- |
| New functions for encoding and decoding URL strings | <ul><li>The `get_url_encoded` function takes a URL as input and replaces or encodes special characters with ASCII characters.</li><li>The `get_url_decoded` function takes a URL as input and decodes ASCII characters into special characters.</li></ul> For more information, read the [Data Prep functions guide](../../data-prep/functions.md). For a comprehensive list of reserved characters and their corresponding encoded characters, read the guide on [special characters](../../data-prep/functions.md#special-characters).|

For more information on Data Prep, please read the [Data Prep overview](../../data-prep/home.md).

## Segmentation Service {#segmentation}

[!DNL Segmentation Service] defines a particular subset of profiles by describing the criteria that distinguishes a marketable group of people within your customer base. Segments can be based on record data (such as demographic information) or time series events representing customer interactions with your brand.

**New or updated features**

| Feature | Description |
| ------- | ----------- |
| Profile metrics | To give you a more accurate representation of profile metrics, membership breakdown and churn metrics are being combined and are now calculated over a 24-hour period. More information is available in the [Segmentation UI guide](../../segmentation/ui/overview.md#browse) |
| Segment membership map | As a follow up to the previous announcement in February, during [insert period of time], the `Existing` status will be deprecated from the segment membership map. After this change, profiles qualified in a segment will be represented as `Realized` and profiles disqualified will continue to be represented as `Exited`. This change could impact you if, you're using [enterprise destinations](../../destinations/destination-types.md#streaming-profile-export) (Amazon Kinesis, Azure Event Hubs, HTTP API), and might have automated downstream processes in place based on the `Existing` status. Please review your downstream integrations if this is the case for you. If you are interested in identifying newly qualified profiles beyond a certain time, please consider using a combination of the `Realized` status and the `lastQualificationTime` in your segment membership map. For more information, please reach out to your Adobe representative. |

{style="table-layout:auto"}

For more information on [!DNL Segmentation Service], please see the [Segmentation overview](../../segmentation/home.md).

## Sources {#sources}

Adobe Experience Platform can ingest data from external sources and allows you to structure, label, and enhance that data using Platform services. You can ingest data from a variety of sources such as Adobe applications, cloud-based storage, third-party software, and your CRM system.

Experience Platform provides a RESTful API and an interactive UI that lets you set up source connections for various data providers with ease. These source connections allow you to authenticate and connect to external storage systems and CRM services, set times for ingestion runs, and manage data ingestion throughput.

**Updated features**

| Feature | Description |
| --- | --- |
| Beta availability of [!DNL Chatlio] | The [!DNL Chatlio] source is now available in beta. Use the [!DNL Chatlio] source to stream your [!DNL Chatlio] events data to Experience Platform. For more information, read the [[!DNL Chatlio] overview](../../sources/connectors/marketing-automation/chatlio-webhook.md). | 
| Beta availability of [!DNL Customer.io] | The [!DNL Customer.io] source is now available in beta. Use the [!DNL Customer.io] source to stream your customer events data to Experience Platform. For more information, read the [[!DNL Customer.io] overview](../../sources/connectors/marketing-automation/customerio-webhook.md). |
| Beta availability of [!DNL Pendo] | The [!DNL Pendo] source is now available in beta. Use the [!DNL Pendo] source to stream your product analytics data to Experience Platform. For more information, read the [[!DNL Pendo] overview](../../sources/connectors/analytics/pendo-webhook.md). |
| Support for draft dataflows | You can now use the Flow Service API to set your dataflows to a draft state. Drafted dataflows can later be updated and published with new information. For more information, read the guide on [setting your sources dataflows as drafts](../../sources/tutorials/api/draft.md). |

{style="table-layout:auto"}

To learn more about sources, read the [sources overview](../../sources/home.md).
