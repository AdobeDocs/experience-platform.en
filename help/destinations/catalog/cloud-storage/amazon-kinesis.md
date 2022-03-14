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

## Export type and frequency {#export-type-frequency}

Refer to the table below for information about the destination export type and frequency.

| Item | Type | Notes |
---------|----------|---------|
| Export type | **[!UICONTROL Profile-based]** | You are exporting all members of a segment, together with the desired schema fields (for example: email address, phone number, last name), as chosen in the select profile attributes screen of the [destination activation workflow](../../ui/activate-batch-profile-destinations.md#select-attributes).|
| Export frequency | **[!UICONTROL Streaming]** | Streaming destinations are "always on" API-based connections. As soon as a profile is updated in Experience Platform based on segment evaluation, the connector sends the update downstream to the destination platform. Read more about [streaming destinations](/help/destinations/destination-types.md#streaming-destinations).|

{style="table-layout:auto"}

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

## Profile export behavior {#profile-export-behavior}

Experience Platform optimizes the profile export behavior to your [!DNL Amazon Kinesis] destination, to only export data to your destination when relevant updates to a profile have occurred following segment qualification or other significant events. Profiles are exported to your destination in the following situations:

* The profile update was determined by a change in segment membership for at least one of the segments mapped to the destination. For example, the profile has qualified for one of the segments mapped to the destination or has exited one of the segments mapped to the destination.
* The profile update was determined by a change in the [identity map](/help/xdm/field-groups/profile/identitymap.md). For example, a profile who had already qualified for one of the segments mapped to the destination has been added a new identity in the identity map attribute.
* The profile update was determined by a change in attributes for at least one of the attributes mapped to the destination. For example, one of the attributes mapped to the destination in the mapping step is added to a profile.

In all the cases described above, only the profiles where relevant updates have occurred are exported to your destination. For example, if a segment mapped to the destination flow has a hundred members, and five new profiles qualify for the segment, the export to your destination is incremental and only includes the five new profiles.

Note that the all the mapped attributes are exported for a profile, no matter where the changes lie. So, in the example above all the mapped attributes for those five new profiles will be exported even if the attributes themselves haven't changed.

### What determines a data export and what is included in the export {#what-determines-export-what-is-included}

Regarding the data that is exported for a given profile, it is important to understand the two different concepts of *what determines a data export to your [!DNL Amazon Kinesis] destination* and *which data is included in the export*.

|What determines a destination export | What is included in the destination export |
|---------|----------|
|<ul><li>Mapped attributes and segments serve as the cue for a destination export. This means that if any mapped segments change states (from null to realized or from realized/existing to exiting) or any mapped attributes are updated, a destination export would be kicked off.</li><li>Since identities cannot currently be mapped to [!DNL Amazon Kinesis] destinations, changes in any identity on a given profile also determine destination exports.</li><li>A change for an attribute is defined as any update on the attribute, whether or not it is the same value. This means that an overwrite on an attribute is considered a change even if the value itself has not changed.</li></ul> | <ul><li>All segments (with the latest membership status), no matter if they are mapped in the dataflow or not, are included in the `segmentMembership` object.</li><li>All identities in the `identityMap` object are included as well (Experience Platform currently does not support identity mapping in the [!DNL Amazon Kinesis] destination).</li><li>Only the mapped attributes are included in the destination export.</li></ul> |

{style="table-layout:fixed"}

For example, consider this dataflow to an [!DNL Amazon Kinesis] destination where three segments are selected in the dataflow, and four attributes are mapped to the destination.  

![Amazon Kinesis destination dataflow](/help/destinations/assets/catalog/http/profile-export-example-dataflow.png)

A profile export to the destination can be determined by a profile qualifying for or exiting one of the *three mapped segments*. However, in the data export, in the `segmentMembership` object (see [Exported Data](#exported-data) section below), other unmapped segments might appear, if that particular profile is a member of them. If a profile qualifies for the Customer with DeLorean Cars segment but is also a member of the Watched "Back to the Future" movie and Science fiction fans segments, then these other two segments will also be present in the `segmentMembership` object of the data export, even though these are not mapped in the dataflow.

From a profile attributes point of view, any changes to the four attributes mapped above will determine a destination export and any of the four mapped attributes present on the profile will be present in the data export.

## Exported data {#exported-data}

Your exported [!DNL Experience Platform] data lands in your [!DNL Amazon Kinesis] destination in JSON format. For example, the export below contains a profile that has qualified for a certain segment, is a member of another two segments, and exited another segment. The export also includes the profile attribute first name, last name, date of birth, and personal email address. The identities for this profile are ECID and email.

```json
{
  "person": {
    "birthDate": "YYYY-MM-DD",
    "name": {
      "firstName": "John",
      "lastName": "Doe"
    }
  },
  "personalEmail": {
    "address": "john.doe@acme.com"
  },
  "segmentMembership": {
   "ups":{
      "7841ba61-23c1-4bb3-a495-00d3g5fe1e93":{
         "lastQualificationTime":"2022-01-11T21:24:39Z",
         "status":"exited"
      },
      "59bd2fkd-3c48-4b18-bf56-4f5c5e6967ae":{
         "lastQualificationTime":"2022-01-02T23:37:33Z",
         "status":"existing"
      },
      "947c1c46-008d-40b0-92ec-3af86eaf41c1":{
         "lastQualificationTime":"2021-08-25T23:37:33Z",
         "status":"existing"
      },
      "5114d758-ce71-43ba-b53e-e2a91d67b67f":{
         "lastQualificationTime":"2022-01-11T23:37:33Z",
         "status":"realized"
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
