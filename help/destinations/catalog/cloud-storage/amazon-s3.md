---
keywords: Amazon S3;S3 destination;s3;amazon s3
title: Amazon S3 connection
description: Create a live outbound connection to your Amazon Web Services (AWS) S3 storage to periodically export tab-delimited or CSV data files from Adobe Experience Platform into your own S3 buckets.
exl-id: 6a2a2756-4bbf-4f82-88e4-62d211cbbb38
---
# [!DNL Amazon S3] connection {#s3-connection}

## Overview {#overview}

Create a live outbound connection to your [!DNL Amazon Web Services] (AWS) S3 storage to periodically export tab-delimited or CSV data files from Adobe Experience Platform into your own S3 buckets.

## Export type {#export-type}

**Profile-based** - you are exporting all members of a segment, together with the desired schema fields (for example: email address, phone number, last name), as chosen from the select attributes screen of the [destination activation workflow](../../ui/activate-segment-streaming-destinations.md#mapping).

![Amazon S3 profile-based export type](../../assets/catalog/cloud-storage/amazon-s3/catalog.png)

## Connect to the destination {#connect}

To connect to this destination, follow the steps described in the [destination configuration tutorial](../../ui/connect-destination.md).

### Connection parameters {#parameters}

While [setting up](../../ui/connect-destination.md) this destination, you must provide the following information:

* **[!DNL Amazon S3] access key** and **[!DNL Amazon S3] secret key**: In [!DNL Amazon S3], generate an `access key - secret access key` pair to grant Platform access to your [!DNL Amazon S3] account. Learn more in the [Amazon Web Services documentation](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html).
* **[!UICONTROL Name]**: enter a name that will help you identify this destination.
* **[!UICONTROL Description]**: enter a description of this destination.
* **[!UICONTROL Bucket name]**: enter the name of the [!DNL Amazon S3] bucket to be used by this destination.
* **[!UICONTROL Folder path]**: enter the path to the destination folder that will host the exported files.

Optionally, you can attach your RSA-formatted public key to add encryption to your exported files. Your public key must be written as a [!DNL Base64] encoded string.

>[!TIP]
>
>In the connect destination workflow, you can create a custom folder in your Amazon S3 storage per exported segment file. Read [Use macros to create a folder in your storage location](overview.md#use-macros) for instructions.

### Required [!DNL Amazon S3] permissions {#required-s3-permission}

To successfully connect and export data to your [!DNL Amazon S3] storage location, create an Identity and Access Management (IAM) user for [!DNL Platform] in [!DNL Amazon S3] and assign permissions for the following actions:

* `s3:DeleteObject`
* `s3:GetBucketLocation`
* `s3:GetObject`
* `s3:ListBucket`
* `s3:PutObject`
* `s3:ListMultipartUploadParts`

<!--

Commenting out this note, as write permissions are assigned through the s3:PutObject permission.

>[!IMPORTANT]
>
>Platform needs `write` permissions on the bucket object where the export files will be delivered.

-->

## Activate segments to this destination {#activate}

See [Activate audience data to batch profile export destinations](../../ui/activate-batch-profile-destinations.md) for instructions on activating audience segments to this destination.

## Exported data {#exported-data}

For [!DNL Amazon S3] destinations, [!DNL Platform] creates a tab-delimited `.csv` file in the storage location that you provided. For more information about the files, see [Activate audience data to batch profile export destinations](../../ui/activate-batch-profile-destinations.md) in the segment activation tutorial.
