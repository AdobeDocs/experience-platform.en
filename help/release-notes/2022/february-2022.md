---
title: Adobe Experience Platform Release Notes
description: The latest release notes for Adobe Experience Platform.
exl-id: ae453f7d-ac75-4cc3-8435-57d25f086cc3
---
# Adobe Experience Platform release notes 

**Release date: February 23, 2022**

Updates to existing features in Adobe Experience Platform:

- [Data collection](#data-collection)
- [[!DNL Data Prep]](#data-prep)
- [[!DNL Identity Service]](#identity)
- [Sources](#sources)

## Data collection {#data-collection}

Platform provides a suite of technologies that allow you to collect client-side customer experience data and send it to the Adobe Experience Platform Edge Network where it can be enriched, transformed, and distributed to Adobe or non-Adobe destinations.

**New features**

| Feature | Description |
| --- | --- |
| Improved UI workflow for datastream configuration | The workflow for creating a new datastream in the Data Collection UI has been updated. When adding services to a datastream, only the services you have access to will be included in the list of options. See the guide on [configuring a datastream](../../edge/fundamentals/datastreams.md) for more information. |
| Data Prep for Data Collection | If you are using the Adobe Experience Platform Web SDK, you can now leverage Data Prep capabilities to map your data to Experience Data Model (XDM) on the server side. See the section on [Data Prep for Data Collection](../../edge/fundamentals/datastreams.md#data-prep) in the datastreams guide for more information. |
| First-party device IDs | You can now send your own device IDs to the Adobe Experience Platform Edge Network when collecting customer data using the Platform Web SDK, providing a workaround for recent browser restrictions on third-party cookie lifespans. See the guide on [first-party device IDs](../../edge/identity/first-party-device-ids.md) for more information. |

For more information on data collection in Platform, please see the [data collection overview](../../collection/home.md).

## [!DNL Data Prep] {#data-prep}

[!DNL Data Prep] allows data engineers to map, transform, and validate data to and from Experience Data Model (XDM).

**Updated features**

| Feature | Description |
| --- | --- |
| [!DNL Data Prep] support for Adobe Analytics source connector | The Adobe Analytics source connector now supports Data Prep features, allowing you to map your Analytics report-suite data to a target XDM schema when creating a dataflow. See the tutorial on [creating an Analytics source connector](../../sources/tutorials/ui/create/adobe-applications/analytics.md) for more information. |

For more information on [!DNL Data Prep], please see the [[!DNL Data Prep] overview](../../data-prep/home.md).

## [!DNL Identity Service] {#identity}

Delivering relevant digital experiences requires having a complete understanding of your customer. This is made more difficult when your customer data is fragmented across disparate systems, causing each individual customer to appear to have multiple "identities".

Adobe Experience Platform [!DNL Identity Service] helps you gain a better view of your customer and their behavior by bridging identities across devices and systems, allowing you to deliver impactful, personal digital experiences in real time.

**Updated features**

| Feature | Description |
| --- | --- |
| New permission for `view-identity-graph` | You can now use the `view-identity-graph` permission to control whether users in your organization are able to view identity graph data. Users without this permission will be forbidden from accessing the identity graph viewer in the UI or when accessing [!DNL Identity Service] APIs which return identities. See the [access control overview](../../access-control/home.md) for more information on permissions. |

For more general information on [!DNL Identity Service], refer to the [Identity Service overview](../../identity-service/home.md).

## Sources {#sources}

Adobe Experience Platform can ingest data from external sources while allowing you to structure, label, and enhance that data using Platform services. You can ingest data from a variety of sources such as Adobe applications, cloud-based storage, third-party software, and your CRM system.

Experience Platform provides a RESTful API and an interactive UI that lets you set up source connections for various data providers with ease. These source connections allow you to authenticate and connect to external storage systems and CRM services, set times for ingestion runs, and manage data ingestion throughput.

**Updated features**

| Feature | Description |
| --- | --- |
| Beta sources moving to GA | The following sources have been promoted from beta to GA: <ul><li>[[!DNL Mailchimp Campaigns]](../../sources/connectors/marketing-automation/mailchimp.md)</li><li>[[!DNL Mailchimp Members]](../../sources/connectors/marketing-automation/mailchimp.md)</li><li>[[!DNL Zoho CRM]](../../sources/connectors/crm/zoho.md)</li></ul> |

To learn more about sources, see the [sources overview](../../sources/home.md).
