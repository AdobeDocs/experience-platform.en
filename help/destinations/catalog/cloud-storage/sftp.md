---
keywords: SFTP;sftp
title: SFTP connection
description: Create a live outbound connection to your SFTP server to periodically export delimited data files from Adobe Experience Platform.
exl-id: 27abfc38-ec19-4321-b743-169370d585a0
---
# SFTP connection

## Overview {#overview}

Create a live outbound connection to your SFTP server to periodically export delimited data files from Adobe Experience Platform.

>[!IMPORTANT]
>
> While Adobe supports data exports to SFTP servers, the recommended cloud storage locations to export data are [!DNL Amazon S3] and [!DNL Azure Blob].

## Export Type {#export-type}

**Profile-based** - you are exporting all members of a segment, together with the desired schema fields (for example: email address, phone number, last name), as chosen from the select attributes screen of the [destination activation workflow](../../ui/activate-destinations.md#select-attributes).

![SFTP profile-based export type](../../assets/catalog/cloud-storage/sftp/catalog.png)

## Connect destination {#connect-destination}

Refer to the [Cloud storage destinations workflow ](./workflow.md) for instructions on how to connect to your cloud storage destinations, including SFTP.

For SFTP destinations, enter the following information in the create destination workflow, in the **Authentication** step:

* **Host**: The address of your SFTP storage location
* **Username**: The username to log into your SFTP storage location
* **Password**: The password to log into your SFTP storage location

## Exported data {#exported-data}

For [!DNL SFTP] destinations, Platform creates a tab-delimited `.csv` file in the storage location that you provided. For more information about the files, see [Email Marketing destinations and Cloud storage destinations](../../ui/activate-destinations.md#esp-and-cloud-storage) in the segment activation tutorial.

## IP address allow list

Refer to [IP address allow list for cloud storage destinations](./ip-address-allow-list.md) if you need to add Adobe IPs to an allow list.
