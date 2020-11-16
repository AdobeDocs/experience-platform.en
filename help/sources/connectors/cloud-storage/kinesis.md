---
keywords: Experience Platform;home;popular topics;Amazon Kinesis;amazon kinesis;Kinesis;kinesis
solution: Experience Platform
title: Amazon Kinesis connector
topic: overview
description: The documentation below provides information on how to connect Amazon Kinesis to Platform using APIs or the user interface.
---

# (Beta) [!DNL Amazon Kinesis] connector

>[!NOTE]
>
>The [!DNL Amazon Kinesis] connector is in beta. See the [Sources overview](../../home.md#terms-and-conditions) for more information on using beta-labelled connectors.

Adobe Experience Platform provides native connectivity for cloud providers like AWS, [!DNL Google Cloud Platform], and [!DNL Azure]. You can bring your data from these systems into [!DNL Platform].

Cloud storage sources can bring your own data into [!DNL Platform] without the need to download, format, or upload. Ingested data can be formatted as XDM JSON, XDM parquet, or delimited. Every step of the process is integrated into the Sources workflow. [!DNL Platform] allows you to bring in data from [!DNL Amazon Kinesis] in real-time.

## IP address allow list

A list of IP addresses must be added to an allow list prior to working with source connectors. Failing to add your region-specific IP addresses to your allow list may lead to errors or non-performance when using sources. See the [IP address allow list](../../ip-address-allow-list.md) page for more information.

## Connect [!DNL Amazon Kinesis] to [!DNL Platform]

The documentation below provides information on how to connect [!DNL Amazon Kinesis] to [!DNL Platform] using APIs or the user interface:

### Using APIs

- [Create a Amazon Kinesis connector using the Flow Service API](../../tutorials/api/create/cloud-storage/kinesis.md)
- [Explore a cloud storage system using the Flow Service API](../../tutorials/api/explore/cloud-storage.md)
- [Collect streaming data using the Flow Service API](../../tutorials/api/collect/streaming.md)

### Using the UI

- [Create a Amazon Kinesis source connector in the UI](../../tutorials/ui/create/cloud-storage/kinesis.md)
- [Configure a dataflow for a cloud storage connector in the UI](../../tutorials/ui/dataflow/streaming/cloud-storage-streaming.md)