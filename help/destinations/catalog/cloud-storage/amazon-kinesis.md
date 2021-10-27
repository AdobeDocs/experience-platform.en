---
keywords: Amazon Kinesis;kinesis destination;kinesis
title: Amazon Kinesis connection
description: Create a real-time outbound connection to your Amazon Kinesis storage to stream data from Adobe Experience Platform.
exl-id: b40117ef-6ad0-48a9-bbcb-97c6f6d1dce3
---
# (Beta) [!DNL Amazon Kinesis] connection

## Overview {#overview}

>[!IMPORTANT]
>
>The [!DNL Amazon Kinesis] destination in Platform is currently in beta. The documentation and the functionality are subject to change.

The [!DNL Kinesis Data Streams] service by [!DNL Amazon Web Services] allows you to collect and process large streams of data records in real time.

You can create a real-time outbound connection to your [!DNL Amazon Kinesis] storage to stream data from Adobe Experience Platform. 

* For more information about [!DNL Amazon Kinesis], see the [Amazon documentation](https://docs.aws.amazon.com/streams/latest/dev/introduction.html).
* To connect to [!DNL Amazon Kinesis] programmatically, see the [Streaming destinations API tutorial](../../api/streaming-destinations.md).
* To connect to [!DNL Amazon Kinesis] using the Platform user interface, see the sections below.

![Amazon Kinesis in the UI](../../assets/catalog/cloud-storage/amazon-kinesis/catalog.png)

## Use cases {#use-cases}

By using streaming destinations such as [!DNL Amazon Kinesis], you can easily feed high-value segmentation events and associated profile attributes into your systems of choice.

For example, a prospect downloaded a white-paper which qualifies them into a "high-propensity to convert" segment. By mapping the segment that the prospect falls in to the [!DNL Amazon Kinesis] destination, you would receive this event in [!DNL Amazon Kinesis]. There, you can employ a do-it-yourself approach and describe business logic on top of the event, as you think would work best with your enterprise IT systems.

## Export type {#export-type}

**Profile-based** - you are exporting all members of a segment, together with the desired schema fields (for example: email address, phone number, last name), as chosen from the select attributes screen of the [audience activation workflow](../../ui/activate-streaming-profile-destinations.md#select-attributes).

## Required [!DNL Amazon Kinesis] permissions {#required-kinesis-permission}

To successfully connect and export data to your [!DNL Amazon Kinesis] streams, Experience Platform needs permissions for the following actions:

* `kinesis:ListStreams`
* `kinesis:PutRecord`
* `kinesis:PutRecords`

These permissions are arranged through the [!DNL Kinesis] console and are checked by Platform once you configure your Kinesis destination in the Platform user interface.

The example below displays the minimum access rights required to successfully export data to a [!DNL Kinesis] destination.

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "kinesis:ListStreams",
                "kinesis:PutRecord",
                "kinesis:PutRecords"
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
| `kinesis:ListStreams` | An action that lists your Amazon Kinesis data streams. |
| `kinesis:PutRecord` | An action that writes a single data record into a Kinesis data stream. |
| `kinesis:PutRecords` | An action that writes multiple data records into a Kinesis data stream in a single call. |

For more information on controlling access for [!DNL Kinesis] data streams, read the following [[!DNL Kinesis] document](https://docs.aws.amazon.com/streams/latest/dev/controlling-access.html).

## Connect to the destination {#connect}

To connect to this destination, follow the steps described in the [destination configuration tutorial](../../ui/connect-destination.md).

### Connection parameters {#parameters}

While [setting up](../../ui/connect-destination.md) this destination, you must provide the following information:

* **[!DNL Amazon Web Services] access key and secret key**: In [!DNL Amazon Web Services], generate an `access key - secret access key` pair to grant Platform access to your [!DNL Amazon Kinesis] account. Learn more in the [Amazon Web Services documentation](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html).
* **region**: Indicate which [!DNL Amazon Web Services] region to stream data to.
* **Name**: Provide a name for your connection to [!DNL Amazon Kinesis]
* **Description**: Provide a description for your connection to [!DNL Amazon Kinesis].
* **stream**: Provide the name of an existing data stream in your [!DNL Amazon Kinesis] account. Platform will export data to this stream.

<!--

>[!IMPORTANT]
>
>Platform needs `write` permissions on the bucket object where the export files will be delivered.

-->

## Activate segments to this destination {#activate}

See [Activate audience data to streaming profile export destinations](../../ui/activate-streaming-profile-destinations.md) for instructions on activating audience segments to this destination.

## Exported data {#exported-data}

Your exported [!DNL Experience Platform] data lands in [!DNL Amazon Kinesis] in JSON format. For example, the event below contains the email address profile attribute of an audience that has qualified for a certain segment and exited another segment. The identities for this prospect are ECID and email.

```json
{
  "person": {
    "email": "yourstruly@adobe.com"
  },
  "segmentMembership": {
    "ups": {
      "7841ba61-23c1-4bb3-a495-00d3g5fe1e93": {
        "lastQualificationTime": "2020-05-25T21:24:39Z",
        "status": "exited"
      },
      "59bd2fkd-3c48-4b18-bf56-4f5c5e6967ae": {
        "lastQualificationTime": "2020-05-25T23:37:33Z",
        "status": "existing"
      }
    }
  },
  "identityMap": {
    "ecid": [
      {
        "id": "14575006536349286404619648085736425115"
      },
      {
        "id": "66478888669296734530114754794777368480"
      }
    ],
    "email_lc_sha256": [
      {
        "id": "655332b5fa2aea4498bf7a290cff017cb4"
      },
      {
        "id": "66baf76ef9de8b42df8903f00e0e3dc0b7"
      }
    ]
  }
}

```



>[!MORELIKETHIS]
>
>* [Connect to Amazon Kinesis and activate data using the Flow Service API](../../api/streaming-destinations.md)
>* [Azure Event Hubs destination](./azure-event-hubs.md)
>* [Destination types and categories](../../destination-types.md)
