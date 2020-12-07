---
keywords: cloud storage destination;cloud storage
title: Cloud storage destinations
seo-title: Cloud storage destinations
description: Real-time CDP can deliver your segments as data files to your Amazon S3, AWS Kinesis, Azure Event Hubs, or SFTP cloud storage locations.
seo-description: Real-time CDP can deliver your segments as data files to your Amazon S3, AWS Kinesis, Azure Event Hubs, or SFTP cloud storage locations.
---

# Cloud storage destinations {#cloud-storage-destinations}

Real-time CDP can deliver your segments as data files to your cloud storage locations. This enables you to send audiences and their profile attributes to your internal systems, via CSV or tab-delimited files for [!DNL Amazon S3] and SFTP. For [!DNL AWS Kinesis] and [!DNL Azure Event Hubs] destinations, data is streamed out of Experience Platform in JSON format.

![Adobe Cloud storage destinations](../../assets/catalog/cloud-storage/cloud-storage-destinations.png)

For information on how to connect to cloud storage destinations, see [Workflow to create cloud storage destinations](./workflow.md).

## Data export type

**Profile-based export** -  you are exporting details about the individuals in the audience. These details are needed for personalization and can include attributes, events, segment memberships, etc.

## Available Cloud storage destinations

- [Amazon S3 destination](./amazon-s3.md)
- [SFTP destination](./sftp.md)

## Available Cloud storage streaming destinations

- [Amazon Kinesis destination](./amazon-kinesis.md)
- [Azure Event Hubs destination](./azure-event-hubs.md)