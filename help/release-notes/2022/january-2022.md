---
title: Adobe Experience Platform Release Notes
description: The latest release notes for Adobe Experience Platform.
---
# Adobe Experience Platform release notes 

**Release date: January 26, 2021**

Updates to existing features in Adobe Experience Platform:

- [Alerts](#alerts)
- [Data Prep](#data-prep)
- [Sandboxes](#sandboxes)
- [Segmentation Service](#segmentation)
- [Sources](#sources)

## Alerts {#alerts}

Experience Platform allows you to subscribe to event-based alerts for various Platform activities. You can subscribe to different alert rules through the [!UICONTROL Alerts] tab in the Platform user interface, and can choose to receive alert messages within the UI itself or through email notifications.

**Updated features**

| Feature | Description |
| --- | --- |
| New alert rules | Several new alert rules are now available for workflows related to data ingestion, identities, profiles, segmentation, and activation. See the overview on [alert rules](../../observability/alerts/rules.md) for the updated list of alert types. |

For more information on alerts in Platform, refer to the [alerts overview](../../observability/alerts/overview.md).

## [!DNL Data Prep] {#data-prep}

[!DNL Data Prep] allows data engineers to map, transform, and validate data to and from Experience Data Model (XDM).

**Updated features**

| Feature | Description |
| --- | --- |
| Consolidated mapping experience | The new mapping interface in the Platform UI provides you with a consistent mapping experience to take advantage of intelligent mapping recommendations, manually configure mapping rules, and debug any errors that occur to your mapping sets. For more information, see the [[!DNL Data Prep] UI guide](../../data-prep/home.md). |

For more information on [!DNL Data Prep], please see the [[!DNL Data Prep] overview](../../data-prep/home.md).

## Sandboxes {#sandboxes}

Adobe Experience Platform is built to enrich digital experience applications on a global scale. Companies often run multiple digital experience applications in parallel and need to cater for the development, testing, and deployment of these applications while ensuring operational compliance. In order to address this need, Experience Platform provides sandboxes which partition a single Platform instance into separate virtual environments to help develop and evolve digital experience applications.

**Updated features**

| Feature | Description |
| --- | --- |
| Sandboxes UI enhancements | The sandbox indicator is now integrated within the header for all Platform UI applications. The sandbox indicator displays the sandbox name, region, and type and also allows you to access a dropdown menu to switch between sandboxes. For more information, see the [sandbox UI guide](../../sandboxes/ui/user-guide.md). |

For more information on sandboxes, please see the [sandboxes overview](../../sandboxes/home.md).

## Segmentation Service {#segmentation}

[!DNL Segmentation Service] defines a particular subset of profiles by describing the criteria that distinguishes a marketable group of people within your customer base. Segments can be based on record data (such as demographic information) or time series events representing customer interactions with your brand.

**Updated features**

| Feature | Description |
| --- | --- |
| Segment Match | Segment Match is a data collaboration service that allows for two or more Platform users to exchange data, based on common identifiers, in a secure, governed, and privacy-friendly manner. For more information, see the [Segment Match overview](../../segmentation/ui/segment-match/overview.md). |

For more information on [!DNL Segmentation Service], please see the [Segmentation overview](../../segmentation/home.md).

## Sources {#sources}

Adobe Experience Platform can ingest data from external sources while allowing you to structure, label, and enhance that data using Platform services. You can ingest data from a variety of sources such as Adobe applications, cloud-based storage, third-party software, and your CRM system.

Experience Platform provides a RESTful API and an interactive UI that lets you set up source connections for various data providers with ease. These source connections allow you to authenticate and connect to external storage systems and CRM services, set times for ingestion runs, and manage data ingestion throughput.

| Feature | Description |
| ------- | ----------- |
| Beta sources moving to GA | The following sources have been promoted from beta to GA: <ul><li>[[!DNL Snowflake]](../../sources/connectors/databases/snowflake.md)</li><li>[[!DNL Veeva CRM]](../../sources/connectors/crm/veeva.md)</li></ul> |
| [!DNL Event Hubs] source enhancements | The [!DNL Event Hubs] source now supports non-root SAS key type of authentication to connect and create source connection. For more information, see the [[!DNL Event Hubs] overview](../../sources/connectors/cloud-storage/eventhub.md). |
| [!DNL SFTP] source enhancements | The [!DNL SFTP] source now allows you to a establish a set number of a maximum concurrent connections that a dataflow can use to connect to the SFTP server. For more information, see the [[!DNL SFTP] overview](../../sources/connectors/cloud-storage/sftp.md). |