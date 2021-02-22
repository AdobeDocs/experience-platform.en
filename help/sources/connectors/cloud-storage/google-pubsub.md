---
keywords: Experience Platform;home;popular topics;Google PubSub;google pubsub
solution: Experience Platform
title: Google PubSub Source Connector Overview
topic: overview
description: Learn how to connect Google PubSub to Adobe Experience Platform using APIs or the user interface.
---

# (Beta) [!DNL Google PubSub] connector

>[!NOTE]
>
>The [!DNL Google PubSub] connector is in beta. See the [Sources overview](../../home.md#terms-and-conditions) for more information on using beta-labelled connectors.

Adobe Experience Platform provides native connectivity for cloud providers like AWS, [!DNL Google Cloud Platform], and [!DNL Azure]. You can bring your data from these systems into [!DNL Platform].c

Cloud storage sources can bring your own data into [!DNL Platform] without the need to download, format, or upload. Ingested data can be formatted as XDM JSON, XDM Parquet, or delimited. Every step of the process is integrated into the sources workflow. [!DNL Platform] allows you to bring in data from [!DNL Azure Event Hubs] in real-time.

## IP address allow list

A list of IP addresses must be added to an allow list prior to working with source connectors. Failing to add your region-specific IP addresses to your allow list may lead to errors or non-performance when using sources. See the [IP address allow list](../../ip-address-allow-list.md) page for more information.

## Connect [!DNL Google PubSub] to [!DNL Platform]

The documentation below provides information on how to connect [!DNL Google PubSub] to [!DNL Platform] using APIs or the user interface:

### Using APIs

- [Create a Google PubSub source connection using the Flow Service API](../../tutorials/api/create/cloud-storage/google-pubsub.md)
- [Collect streaming data using the Flow Service API](../../tutorials/api/collect/streaming.md)

### Using the UI

- [Create a Google PubSub source connection in the UI](../../tutorials/ui/create/cloud-storage/google-pubsub.md)
- [Configure a dataflow for a cloud storage connection in the UI](../../tutorials/ui/dataflow/streaming/cloud-storage-streaming.md)