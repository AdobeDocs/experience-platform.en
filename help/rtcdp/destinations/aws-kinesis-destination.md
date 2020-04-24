---
title: AWS Kinesis destination
seo-title: AWS Kinesis destination
description: Create a live outbound connection to your AWS Kinesis storage to stream data from Adobe Experience Platform.
seo-description: Create a live outbound connection to your AWS Kinesis storage to stream data from Adobe Experience Platform.
---

# AWS Kinesis destination

## Overview

Create a live outbound connection to your AWS Kinesis storage to stream data from Adobe Experience Platform.

![AWS Kinesis in the UI](/help/rtcdp/destinations/assets/aws-kinesis-destination.png)

## Connect destination {#connect-destination}

See [Cloud storage destinations workflow ](/help/rtcdp/destinations/cloud-storage-destinations-workflow.md)for instructions on how to connect to your cloud storage destinations, including AWS Kinesis. 

For AWS Kinesis destinations, enter the following information in the create destination workflow:

* **AWS Kinesis access key and AWS Kinesis secret key**: In AWS Kinesis, generate an access key - secret access key pair to grant Adobe Real-time CDP access to your AWS Kinesis account.
* **region**: Indicate which AWS Kinesis region to stream data to. **Need to mention** - how do customers enter region information here, in which format?


>[!IMPORTANT]
>
>Adobe Real-time CDP needs `write` permissions on the bucket object where the export files will be delivered.

## Exported data

Mention here the format in which customers should expect their data in AWS Kinesis. 
