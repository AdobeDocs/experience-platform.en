---
keywords: Amazon S3;S3 destination;s3;amazon s3
title: Amazon S3 destination
seo-title: Amazon S3 destination
description: Create a live outbound connection to your Amazon Web Services (AWS) S3 storage to periodically export tab-delimited or CSV data files from Adobe Experience Platform into your own S3 buckets.
seo-description: Create a live outbound connection to your Amazon Web Services (AWS) S3 storage to periodically export tab-delimited or CSV data files from Adobe Experience Platform into your own S3 buckets.
---

# [!DNL Amazon S3] destination

## Overview

Create a live outbound connection to your [!DNL Amazon Web Services] (AWS) S3 storage to periodically export tab-delimited or CSV data files from Adobe Experience Platform into your own S3 buckets.

## Connect destination {#connect-destination}

See [Cloud storage destinations workflow ](/help/rtcdp/destinations/cloud-storage-destinations-workflow.md)for instructions on how to connect to your cloud storage destinations, including [!DNL Amazon S3]. 

For [!DNL Amazon S3] destinations, enter the following information in the create destination workflow:

* **[!DNL Amazon S3] access key and [!DNL Amazon S3] secret key**: In [!DNL Amazon S3], generate an `access key - secret access key` pair to grant Adobe Real-time CDP access to your [!DNL Amazon S3] account. Learn more in the [Amazon Web Services documentation](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html).

>[!IMPORTANT]
>
>Adobe Real-time CDP needs `write` permissions on the bucket object where the export files will be delivered.

## Exported data {#exported-data}

For [!DNL Amazon S3] destinations, Adobe Real-time CDP creates a tab-delimited `.txt` or `.csv` file in the storage location that you provided. For more information about the files, see [Email Marketing destinations and Cloud storage destinations](/help/rtcdp/destinations/activate-destinations.md#esp-and-cloud-storage) in the segment activation tutorial. 

<!--

Expect a new file to be created in your storage location every day. The file format is:

`amazon-s3_segment<segmentID>_<timestamp-yyyymmddhhmmss>.csv`

```
amazon-s3_segment12341e18-abcd-49c2-836d-123c88e76c39_20200408061804.csv
amazon-s3_segment12341e18-abcd-49c2-836d-123c88e76c39_20200409052200.csv
amazon-s3_segment12341e18-abcd-49c2-836d-123c88e76c39_20200410061130.csv
```

The presence of these files in your storage location is confirmation of successful activation. To understand how the exported files are structured, you can [download a sample .csv file](/help/rtcdp/destinations/assets/sample_export_file_segment12341e18-abcd-49c2-836d-123c88e76c39_20200408061804.csv). This sample file includes the profile attributes `person.firstname`, `person.lastname`, `person.gender`, `person.birthyear`, and `personalEmail.address`.

-->
