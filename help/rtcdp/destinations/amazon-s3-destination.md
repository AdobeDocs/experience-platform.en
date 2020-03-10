---
title: Amazon S3 destination
seo-title: Amazon S3 destination
description: Create a live outbound connection to your Amazon Web Services (AWS) S3 storage to periodically export tab-delimited or CSV data files from Adobe Experience Platform into your own S3 buckets.
seo-description: Create a live outbound connection to your Amazon Web Services (AWS) S3 storage to periodically export tab-delimited or CSV data files from Adobe Experience Platform into your own S3 buckets.
---

# Amazon S3 destination

## Overview

Create a live outbound connection to your Amazon Web Services (AWS) S3 storage to periodically export tab-delimited or CSV data files from Adobe Experience Platform into your own S3 buckets.

## Connect destination {#connect-destination}

See [Cloud storage destinations workflow ](/help/rtcdp/destinations/cloud-storage-destinations-workflow.md)for instructions on how to connect to your cloud storage destinations, including Amazon S3. 

For Amazon S3 destinations, enter the following information in the create destination workflow:

* **Amazon S3 access key and Amazon S3 secret key**: In Amazon S3, generate an access key - secret access key pair to grant Adobe Real-time CDP access to your Amazon S3 account; 
* **Amazon S3 path**: This is the location in your Amazon S3 bucket where Adobe Real-time CDP will deliver export files.


>[!IMPORTANT]
>
>Adobe Real-time CDP needs `write` permissions on the bucket object where the export files will be delivered.
