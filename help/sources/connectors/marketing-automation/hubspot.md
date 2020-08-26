---
keywords: Experience Platform;home;popular topics
solution: Experience Platform
title: HubSpot connector
topic: overview
---

# (Beta) [!DNL HubSpot] connector

>[!NOTE]
>
>The [!DNL HubSpot] connector is in beta. See the [Sources overview](../../home.md#terms-and-conditions) for more information on using beta-labelled connectors.

Adobe Experience Platform allows data to be ingested from external sources while providing you with the ability to structure, label, and enhance incoming data using [!DNL Platform] services. You can ingest data from a variety of sources such as Adobe applications, cloud-based storage, databases, and many others.

[!DNL Experience Platform ]provides support for ingesting data from a third-party marketing automation system. Support for marketing automation providers include [!DNL HubSpot].

## IP address allow list

The following IP addresses must be added to an allow list prior to working with source connectors. Failing to add your region-specific IP addresses to your allow list may lead to errors or non-performance when using sources.

### East US region

- `20.41.2.0/23`
- `20.41.4.0/26`
- `20.44.17.80/28`
- `20.49.102.16/29`
- `40.70.148.160/28`
- `52.167.107.224/28`

### West Europe region

- `13.69.67.192/28`
- `13.69.107.112/28`
- `13.69.112.128/28`
- `40.74.24.192/26`
- `40.74.26.0/23`
- `40.113.176.232/29`
- `52.236.187.112/28`

### Australia East

- `13.70.74.144/28`
- `20.37.193.0/25`
- `20.37.193.128/26`
- `20.37.198.224/29`
- `40.79.163.80/28`
- `40.79.171.160/28`

The documentation below provides information on how to connect [!DNL HubSpot] to [!DNL Platform] using APIs or the user interface:

## Connect [!DNL HubSpot] to [!DNL Platform] using APIs

- [Create a HubSpot connector using the Flow Service API](../../tutorials/api/create/marketing-automation/hubspot.md)
- [Explore a marketing automation system using the Flow Service API](../../tutorials/api/explore/marketing-automation.md)
- [Collect marketing automation data using the Flow Service API](../../tutorials/api/collect/marketing-automation.md)

## Connect [!DNL HubSpot] to [!DNL Platform] using the UI

- [Create a HubSpot source connector in the UI](../../tutorials/ui/create/marketing-automation/hubspot.md)
- [Configure a dataflow for a marketing automation connector in the UI](../../tutorials/ui/dataflow/marketing-automation.md)