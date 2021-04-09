---
keywords: Experience Platform;home;popular topics;Amazon Kinesis;amazon kinesis;Kinesis;kinesis
solution: Experience Platform
title: Amazon Kinesis Source Connector Overview
topic: overview
description: Learn how to connect Amazon Kinesis to Adobe Experience Platform using APIs or the user interface.
exl-id: b71fc922-7722-4279-8fc6-e5d7735e1ebb
---
# (Beta) [!DNL Amazon Kinesis] connector

>[!NOTE]
>
>The [!DNL Amazon Kinesis] connector is in beta. See the [Sources overview](../../home.md#terms-and-conditions) for more information on using beta-labelled connectors.

Adobe Experience Platform provides native connectivity for cloud providers like AWS, [!DNL Google Cloud Platform], and [!DNL Azure]. You can bring your data from these systems into [!DNL Platform].

Cloud storage sources can bring your own data into [!DNL Platform] without the need to download, format, or upload. Ingested data can be formatted as XDM JSON, XDM Parquet, or delimited. Every step of the process is integrated into the Sources workflow. [!DNL Platform] allows you to bring in data from [!DNL Amazon Kinesis] in real time.

## IP address allow list

A list of IP addresses must be added to an allow list prior to working with source connectors. Failing to add your region-specific IP addresses to your allow list may lead to errors or non-performance when using sources. See the [IP address allow list](../../ip-address-allow-list.md) page for more information.

## Prerequisites

The following section provides further information on prerequisite set up required before you can create a [!DNL Kinesis] source connection.

### Set up access policy



```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "kinesis:GetShardIterator",
                "kinesis:GetRecords",
                "kinesis:DescribeStream",
                "kinesis:ListStreams"
            ],
            "Resource": [
                "arn:aws:kinesis:us-east-2:901341027596:stream/*"
            ]
        }
    ]
}
```

| Property | Description |
| -------- | ----------- |
| `kinesis:GetShardIterator` | An action required to traverse through records. |
| `kinesis:GetRecords` | An action required to get records from a specific offset or shard ID. |
| `kinesis:DescribeStream` | An action that returns information regarding the stream including the shard map, which is needed to generate a shard ID. |
| `kinesis:ListStreams` | An action required to list out available streams that you can select from the UI. |

For more information on controlling access for [!DNL Kinesis] data streams, see the following [[!DNL Kinesis] documentation](https://docs.aws.amazon.com/streams/latest/dev/controlling-access.html).

### Configure cross-account access

## Connect [!DNL Amazon Kinesis] to [!DNL Platform]

The documentation below provides information on how to connect [!DNL Amazon Kinesis] to [!DNL Platform] using APIs or the user interface:

### Using APIs

- [Create a Amazon Kinesis source connection using the Flow Service API](../../tutorials/api/create/cloud-storage/kinesis.md)
- [Collect streaming data using the Flow Service API](../../tutorials/api/collect/streaming.md)

### Using the UI

- [Create a Amazon Kinesis source connection in the UI](../../tutorials/ui/create/cloud-storage/kinesis.md)
- [Configure a dataflow for a cloud storage connection in the UI](../../tutorials/ui/dataflow/streaming/cloud-storage-streaming.md)
