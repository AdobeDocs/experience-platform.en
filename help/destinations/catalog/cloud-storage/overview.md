---
keywords: cloud storage destination;cloud storage
title: Cloud Storage destinations overview
description: Adobe Experience Platform can deliver your segments as data files to your Amazon S3, AWS Kinesis, Azure Event Hubs, or SFTP cloud storage locations.
exl-id: d29f0a6e-b323-4f78-bbd0-dee2f1e0fedb
---
# Cloud storage destinations overview {#cloud-storage-destinations}

Adobe Experience Platform can deliver your segments as data files to your cloud storage locations. This enables you to send audiences and their profile attributes to your internal systems, via CSV or tab-delimited files for [!DNL Amazon S3], [!DNL Azure Blob] and SFTP. For [!DNL Amazon Kinesis] and [!DNL Azure Event Hubs] destinations, data is streamed out of Experience Platform in JSON format.

![Adobe cloud storage destinations](../../assets/catalog/cloud-storage/cloud-storage-destinations.png)

For information on how to connect to cloud storage destinations, see [Workflow to create cloud storage destinations](./workflow.md).

## Data export type

**Profile-based export** -  you are exporting details about the individuals in the audience. These details are needed for personalization and can include attributes, events, segment memberships, and more.

## Available cloud storage destinations

- [Amazon S3 connection](./amazon-s3.md)
- [Azure Blob connection](./azure-blob.md)
- [SFTP connection](./sftp.md)

## Available cloud storage streaming destinations

- [Amazon Kinesis connection](./amazon-kinesis.md)
- [Azure Event Hubs connection](./azure-event-hubs.md)
