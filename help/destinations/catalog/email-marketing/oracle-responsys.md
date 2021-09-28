---
keywords: email;Email;e-mail;email destinations;oracle responsys destination
title: Oracle Responsys connection
description: Responsys is an enterprise email marketing tool for cross-channel marketing campaigns offered by Oracle to personalize interactions across email, mobile, display, and social.
exl-id: 70f2f601-afee-4315-bf7a-ed2c92397ebe
---
# [!DNL Oracle Responsys] connection

## Overview {#overview}

[Responsys](https://www.oracle.com/cx/marketing/campaign-management/) is an enterprise email marketing tool for cross-channel marketing campaigns offered by [!DNL Oracle] to personalize interactions across email, mobile, display, and social.

To send segment data to [!DNL Oracle Responsys], you must first [connect to the destination](#connect-destination) in Adobe Experience Platform, and then [set up a data import](#import-data-into-responsys) from your storage location into [!DNL Oracle Responsys].

## Export type {#export-type}

**Profile-based** - you are exporting all members of a segment, together with the desired schema fields (for example: email address, phone number, last name), as chosen from the select attributes screen of the [audience activation workflow](../../ui/activate-batch-profile-destinations.md#select-attributes).

## IP address allow list {#allow-list}

When setting up email marketing destinations with SFTP storage, Adobe recommends that you add certain IP ranges to your allow list.

Refer to [IP address allow list for cloud storage destinations](../cloud-storage/ip-address-allow-list.md) if you need to add Adobe IPs to your allow list.

## Connect to the destination {#connect}

To connect to this destination, follow the steps described in the [destination configuration tutorial](../../ui/connect-destination.md).

This destination supports the following connection types:

* **[!UICONTROL SFTP with Password]**
* **[!UICONTROL SFTP with SSH Key]**

### Connection parameters {#parameters}

While [setting up](../../ui/connect-destination.md) this destination, you must provide the following information:

* For **[!UICONTROL SFTP with Password]** connections, you must provide:
  * [!UICONTROL Domain]
  * [!UICONTROL Port]
  * [!UICONTROL Username]
  * [!UICONTROL Password]
* For **[!UICONTROL SFTP with SSH Key]** connections, you must provide:
  * [!UICONTROL Domain]
  * [!UICONTROL Port]
  * [!UICONTROL Username]
  * [!UICONTROL SSH Key]
* Optionally, you can attach your RSA-formatted public key to add encryption with PGP/GPG to your exported files under the **[!UICONTROL Key]** section. Your public key must be written as a [!DNL Base64] encoded string.
* **[!UICONTROL Name]**: Pick a relevant name for your destination.
* **[!UICONTROL Description]**: Enter a description for your destination.
* **[!UICONTROL Folder Path]**: Provide the path in your storage location where Platform will deposit your export data as CSV or tab-delimited files.
* **[!UICONTROL File Format]**: **CSV** or **TAB_DELIMITED**. Select which file format to export to your storage location.

<!--

Commenting out Amazon S3 bucket part for now until support is clarified

- **[!UICONTROL Bucket name]**: Your Amazon S3 bucket, where Platform will deposit the data export. Your input must be between 3 and 63 characters long. Must begin and end with a letter or number. Must contain only lowercase letters, numbers, or hyphens ( - ). Must not be formatted as an IP address (for example, 192.100.1.1).

-->

## Activate segments to this destination {#activate}

See [Activate audience data to batch profile export destinations](../../ui/activate-batch-profile-destinations.md) for instructions on activating audience segments to this destination.

### Destination attributes {#destination-attributes}

When activating segments to this destination, Adobe recommends that you select a unique identifier from your [union schema](../../../profile/home.md#profile-fragments-and-union-schemas). Select the unique identifier and any other XDM fields that you want to export to the destination. For more information, refer to [best practices when activating audiences to email marketing destinations](overview.md#best-practices).

## Exported data {#exported-data}

For [!DNL Oracle Responsys] destinations, Platform creates a tab-delimited `.csv` file in the storage location that you provided. For more information about the files, see [verify segment activation](../../ui/activate-batch-profile-destinations.md#verify) in the segment activation tutorial.

## Set up data import into [!DNL Oracle Responsys] {#import-data-into-responsys}

After connecting [!DNL Platform] to your [!DNL SFTP] storage, you must set up the data import from your storage location into [!DNL Oracle Responsys]. To learn how to accomplish this, see [Importing contacts or accounts](https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCEA/Connect_WizardUpload.htm) in the [!DNL Oracle Responsys Help Center].
