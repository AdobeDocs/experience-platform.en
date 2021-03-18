---
keywords: SFTP;sftp
title: SFTP connection
description: Create a live outbound connection to your SFTP server to periodically export delimited data files from Adobe Experience Platform.
---

# SFTP connection

Create a live outbound connection to your SFTP server to periodically export delimited data files from Adobe Experience Platform.

>[!IMPORTANT]
>
> While Adobe supports data exports to SFTP servers, the recommended cloud storage locations to export data are [!DNL Amazon S3] and [!DNL Azure Blob].

## Export Type {#export-type}

**Profile-based** - you are exporting all members of a segment, together with the desired schema fields (for example: email address, phone number, last name), as chosen from the select attributes screen of the [destination activation workflow](../../ui/activate-destinations.md#select-attributes).

![SFTP profile-based export type](../../assets/catalog/cloud-storage/sftp/catalog.png)

## Connect destination {#connect-destination}

See [Cloud storage destinations workflow ](./workflow.md)for instructions on how to connect to your cloud storage destinations, including SFTP.

For SFTP destinations, enter the following information in the create destination workflow, in the **Authentication** step:

* **Host**: The address of your SFTP storage location
* **Username**: The username to log into your SFTP storage location
* **Password**: The password to log into your SFTP storage location

## Exported data {#exported-data}

For SFTP destinations, Platform creates a tab-delimited `.txt` or `.csv` file in the storage location that you provided. For more information about the files, see [Email Marketing destinations and Cloud storage destinations](../../ui/activate-destinations.md#esp-and-cloud-storage) in the segment activation tutorial.

## IP address allow list {#ip-address-allow-list}

This section provides IP ranges that you can add to your allow list, to safely export data from Experience Platform to your SFTP server.

You can define network access controls through your network firewall. By specifying the appropriate IP range, you can allow traffic for the data transfer service.

Add the following IP ranges to an allow list prior to working with the SFTP destination connection. Failing to add your region-specific IP range to your allow list may lead to errors or non-performance when using the SFTP destination connection.

>[!IMPORTANT]
>
> Adobe recommends that you bookmark this page and revisit it every three months to check for the latest IP addresses. Adobe does not provide notification of new IP ranges.

### US East region

* `52.252.71.64/29`

### Europe West region

* `51.137.8.208/29`

### Australia East region

* `20.53.201.168/29`