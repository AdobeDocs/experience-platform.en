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

## Export type and frequency {#export-type-frequency}

Refer to the table below for information about the destination export type and frequency.

| Item | Type | Notes |
---------|----------|---------|
| Export type | **[!UICONTROL Profile-based]** | You are exporting all members of a segment, together with the desired schema fields (for example: email address, phone number, last name), as chosen in the select profile attributes screen of the [destination activation workflow](../../ui/activate-batch-profile-destinations.md#select-attributes).|
| Export frequency | **[!UICONTROL Batch]** | Batch destinations export files to downstream platforms in increments of three, six, eight, twelve, or twenty-four hours. Read more about [batch file-based destinations](/help/destinations/destination-types.md#file-based).|

{style="table-layout:auto"}

![SFTP profile-based export type](../../assets/catalog/cloud-storage/sftp/catalog.png)

## Connect to the destination {#connect}

To connect to this destination, follow the steps described in the [destination configuration tutorial](../../ui/connect-destination.md).

### Connection parameters {#parameters}

>[!CONTEXTUALHELP]
>id="platform_destinations_connect_sftp_rsa"
>title="RSA public key"
>abstract="Optionally, you can attach your RSA-formatted public key to add encryption to your exported files. Your public key must be written as a Base64 encoded string."
>text="Learn more in documentation"

While [setting up](../../ui/connect-destination.md) this destination, you must provide the following information:

* **Host**: The address of your SFTP storage location
* **Username**: The username to log into your SFTP storage location
* **Password**: The password to log into your SFTP storage location
* **[!UICONTROL Name]**: enter a name that will help you identify this destination.
* **[!UICONTROL Description]**: enter a description of this destination.
* **[!UICONTROL Folder path]**: enter the path to the destination folder that will host the exported files.

Optionally, you can attach your RSA-formatted public key to add encryption to your exported files. Your public key must be written as a [!DNL Base64] encoded string.

## Exported data {#exported-data}

For [!DNL SFTP] destinations, Platform creates a `.csv` file in the storage location that you provided. For more information about the files, see [Activate audience data to batch profile export destinations](../../ui/activate-batch-profile-destinations.md) in the segment activation tutorial.

## IP address allow list

Refer to [IP address allow list for cloud storage destinations](ip-address-allow-list.md) if you need to add Adobe IPs to an allow list.
