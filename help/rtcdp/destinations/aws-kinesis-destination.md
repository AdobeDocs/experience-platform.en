---
title: AWS Kinesis destination
seo-title: AWS Kinesis destination
description: Create a live outbound connection to your AWS Kinesis storage to stream data from Adobe Experience Platform.
seo-description: Create a live outbound connection to your AWS Kinesis storage to stream data from Adobe Experience Platform.
---

# AWS Kinesis destination

## Overview

You can use Amazon Kinesis Data Streams to collect and process large streams of data records in real time. You can create a live outbound connection to your AWS Kinesis storage to stream data from Adobe Experience Platform.

* For more information about Amazon Kinesis, see the [Amazon documentation](https://docs.aws.amazon.com/streams/latest/dev/introduction.html).
* To connect to AWS Kinesis using API calls, see the [Streaming destinations API tutorial](/help/rtcdp/destinations/streaming-destinations-api-tutorial.md).
* To connect to AWS Kinesis using the Adobe Real-time CDP user interface, see the sections below.

![AWS Kinesis in the UI](/help/rtcdp/destinations/assets/aws-kinesis-destination.png)

## Connect destination {#connect-destination}

See [Cloud storage destinations workflow ](/help/rtcdp/destinations/cloud-storage-destinations-workflow.md)for instructions on how to connect to your cloud storage destinations, including AWS Kinesis. 

For AWS Kinesis destinations, enter the following information in the create destination workflow:

### In the Authentication step

* **AWS Kinesis access key and secret key**: In AWS Kinesis, generate an access key - secret access key pair to grant Adobe Real-time CDP access to your AWS Kinesis account. Learn more in the [AWS Kinesis documentation](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html).
* **region**: Indicate which AWS Kinesis region to stream data to. **Need to mention** - how do customers enter region information here, in which format?

![Input fields in the authentication step](/help/rtcdp/destinations/assets/aws-kinesis-authentication-step.png)

### In the Setup step

* **Name**: 
* **Description**: 
* **stream**: Provide a name for the stream to your cloud destination
* **region**: Indicate which AWS Kinesis region to stream data to. 

![Input fields in the setup step](/help/rtcdp/destinations/assets/aws-kinesis-setup-step.png)

>[!IMPORTANT]
>
>Adobe Real-time CDP needs `write` permissions on the bucket object where the export files will be delivered.

## Activate segments {#activate-segments}

See [Activate profiles and segments to a destination](/help/rtcdp/destinations/activate-destinations.md) for information about the segment activation workflow.

## Exported data

Mention here the format in which customers should expect their data in AWS Kinesis. 



>[!MORELIKETHIS]
>
>* [Connect to AWS Kinesis using APIs](/help/rtcdp/destinations/streaming-destinations-api-tutorial.md)
>* [Azure Event Hubs destination](/help/rtcdp/destinations/azure-event-hubs-destination.md)
>* [Destination types and categories](/help/rtcdp/destinations/destination-types.md) 
