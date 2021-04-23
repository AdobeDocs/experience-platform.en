---
keywords: Experience Platform;home;popular topics;Amazon Kinesis;amazon kinesis;Kinesis;kinesis
solution: Experience Platform
title: Amazon Kinesis Source Connector Overview
topic-legacy: overview
description: Learn how to connect Amazon Kinesis to Adobe Experience Platform using APIs or the user interface.
exl-id: b71fc922-7722-4279-8fc6-e5d7735e1ebb
---
# [!DNL Amazon Kinesis] connector

Adobe Experience Platform provides native connectivity for cloud providers like AWS, [!DNL Google Cloud Platform], and [!DNL Azure]. You can bring your data from these systems into [!DNL Platform].

Cloud storage sources can bring your own data into [!DNL Platform] without the need to download, format, or upload. Ingested data can be formatted as XDM JSON, XDM Parquet, or delimited. Every step of the process is integrated into the Sources workflow. [!DNL Platform] allows you to bring in data from [!DNL Amazon Kinesis] in real time.

## IP address allow list

A list of IP addresses must be added to an allow list prior to working with source connectors. Failing to add your region-specific IP addresses to your allow list may lead to errors or non-performance when using sources. See the [IP address allow list](../../ip-address-allow-list.md) page for more information.

## Prerequisites

The following section provides further information on prerequisite set up required before you can create a [!DNL Kinesis] source connection.

### Set up access policy

A [!DNL Kinesis] stream requires the following permissions to create a source connection:

- `GetShardIterator`
- `GetRecords`
- `DescribeStream`
- `ListStreams`

These permissions are arranged through the [!DNL Kinesis] console and are checked by Platform once you enter your credentials and select your data stream.

The example below displays the minimum access rights required to create a [!DNL Kinesis] source connection.

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

For more information on controlling access for [!DNL Kinesis] data streams, see the following [[!DNL Kinesis] document](https://docs.aws.amazon.com/streams/latest/dev/controlling-access.html).

### Configure iterator type

[!DNL Kinesis] supports the following iterator types to allow you to specify the order of how your data is read:

| Iterator type | Description |
| ------------- | ----------- |
| `AT_SEQUENCE_NUMBER` | The data is read starting from a position identified by a specific sequence number. |
| `AFTER_SEQUENCE_NUMBER` | The data is read starting after position identified by a specific sequence number. |
| `AT_TIMESTAMP` | The data is read starting from a position identified by a specific timestamp. |
| `TRIM_HORIZON` | The data is read starting from the oldest data record. |
| `LATEST` | The data is read starting from the most recent data record. |

Currently, the default iterator value that Platform uses for the [!DNL Kinesis] source is `TRIM_HORIZON`.

For more information on iterator types, see the following [[!DNL Kinesis] document](https://docs.aws.amazon.com/kinesis/latest/APIReference/API_GetShardIterator.html#API_GetShardIterator_RequestSyntax).

## Connect [!DNL Amazon Kinesis] to [!DNL Platform]

The documentation below provides information on how to connect [!DNL Amazon Kinesis] to [!DNL Platform] using APIs or the user interface:

### Using APIs

- [Create a Amazon Kinesis source connection using the Flow Service API](../../tutorials/api/create/cloud-storage/kinesis.md)
- [Collect streaming data using the Flow Service API](../../tutorials/api/collect/streaming.md)

### Using the UI

- [Create a Amazon Kinesis source connection in the UI](../../tutorials/ui/create/cloud-storage/kinesis.md)
- [Configure a dataflow for a cloud storage connection in the UI](../../tutorials/ui/dataflow/streaming/cloud-storage-streaming.md)
