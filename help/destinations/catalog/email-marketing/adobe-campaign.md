---
keywords: email;Email;e-mail;email destinations;adobe campaign;campaign
title: Adobe Campaign connection
description: Adobe Campaign is a set of solutions that help you personalize and deliver campaigns across all your online and offline channels.
exl-id: 0de91738-8f56-41f5-8745-9b14b15db76a
---
# Adobe Campaign connection

## Overview {#overview}

Adobe Campaign is a set of solutions that help you personalize and deliver campaigns across all your online and offline channels. See [Get Started with Campaign Classic](https://experienceleague.adobe.com/docs/campaign-classic/using/getting-started/starting-with-adobe-campaign/about-adobe-campaign-classic.html) for more information.

To send audience data to Adobe Campaign, you must first [connect the destination](#connect-destination) in Adobe Experience Platform, and then [set up a data import](#import-data-into-campaign) from your storage location into Adobe Campaign.

## Supported audiences {#supported-audiences}

This section describes which type of audiences you can export to this destination.

| Audience origin | Supported | Description | 
---------|----------|----------|
| [!DNL Segmentation Service] | ✓ | Audiences generated through the Experience Platform [Segmentation Service](../../../segmentation/home.md).|
| Custom uploads | ✓ | Audiences [imported](../../../segmentation/ui/overview.md#import-audience) into Experience Platform from CSV files. |

{style="table-layout:auto"}

## Export type and frequency {#export-type-frequency}

Refer to the table below for information about the destination export type and frequency.

| Item | Type | Notes |
---------|----------|---------|
| Export type | **[!UICONTROL Profile-based]** | You are exporting all members of a segment, together with the desired schema fields (for example: email address, phone number, last name), as chosen in the select profile attributes screen of the [destination activation workflow](../../ui/activate-batch-profile-destinations.md#select-attributes).|
| Export frequency | **[!UICONTROL Batch]** | Batch destinations export files to downstream platforms in increments of three, six, eight, twelve, or twenty-four hours. Read more about [batch file-based destinations](/help/destinations/destination-types.md#file-based).|

{style="table-layout:auto"}

## IP address allow list {#allow-list}

When setting up email marketing destinations with SFTP storage, Adobe recommends that you add certain IP ranges to your allow list.

Refer to [IP address allow list for SFTP destinations](../cloud-storage/ip-address-allow-list.md) if you need to add Adobe IPs to your allow list.

## Connect to the destination {#connect}

>[!IMPORTANT]
> 
>To connect to the destination, you need the **[!UICONTROL Manage Destinations]** [access control permission](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions

To connect to this destination, follow the steps described in the [destination configuration tutorial](../../ui/connect-destination.md).

Adobe Campaign supports the following connection types:

* **[!UICONTROL Amazon S3]**
* **[!UICONTROL SFTP with Password]**
* **[!UICONTROL SFTP with SSH Key]**
* **[!UICONTROL Azure Blob]**

The preferred method to send data to Adobe Campaign is through [!DNL Amazon S3] or [!DNL Azure Blob].

### Connection parameters {#parameters}

While [setting up](../../ui/connect-destination.md) this destination, you must provide the following information:

* For **[!UICONTROL Amazon S3]** connections, you must provide your [!UICONTROL Access Key ID] and [!UICONTROL Secret Access Key]. 
* For **[!UICONTROL SFTP with Password]** connections, you must provide [!UICONTROL Domain], [!UICONTROL Port], [!UICONTROL Username], and [!UICONTROL Password].
* For **[!UICONTROL SFTP with SSH Key]** connections, you must provide [!UICONTROL Domain], [!UICONTROL Port], [!UICONTROL Username], and [!UICONTROL SSH Key].
* For **[!UICONTROL Azure Blob]** connections, you must provide a connection string.
* Optionally, you can attach your RSA-formatted public key to add encryption with PGP/GPG to your exported files under the **[!UICONTROL Key]** section. Your public key must be written as a [!DNL Base64] encoded string.
* **[!UICONTROL Name]**: Pick a relevant name for your destination.
* **[!UICONTROL Description]**: Enter a description for your destination.
* **[!UICONTROL Bucket Name]**: *For S3 connections*. Enter the location of your S3 bucket where [!DNL Platform] will deposit your export data as CSV files. 
* **[!UICONTROL Folder Path]**: Provide the path in your storage location where [!DNL Platform] will deposit your export data as CSV files.
* **[!UICONTROL Container]**: *For Blob connections*. The container that holds the Blob your folder path is in.
* **[!UICONTROL File Format]**: Select **CSV** to export CSV files to your storage location. 

### Enable alerts {#enable-alerts}

You can enable alerts to receive notifications on the status of the dataflow to your destination. Select an alert from the list to subscribe to receive notifications on the status of your dataflow. For more information on alerts, see the guide on [subscribing to destinations alerts using the UI](../../ui/alerts.md).

When you are finished providing details for your destination connection, select **[!UICONTROL Next]**.

## Activate audiences to this destination {#activate}

>[!IMPORTANT]
> 
>* To activate data, you need the **[!UICONTROL Manage Destinations]**, **[!UICONTROL Activate Destinations]**, **[!UICONTROL View Profiles]**, and **[!UICONTROL View Segments]** [access control permissions](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.
>* To export *identities*, you need the **[!UICONTROL View Identity Graph]** [access control permission](/help/access-control/home.md#permissions). <br> ![Select identity namespace highlighted in the workflow to activate audiences to destinations.](/help/destinations/assets/overview/export-identities-to-destination.png "Select identity namespace highlighted in the workflow to activate audiences to destinations."){width="100" zoomable="yes"}


See [Activate audience data to batch profile export destinations](../../ui/activate-batch-profile-destinations.md) for instructions on activating audiences to this destination.

### Destination attributes {#destination-attributes}

When activating audiences to this destination, Adobe recommends that you select a unique identifier from your [union schema](../../../profile/home.md#profile-fragments-and-union-schemas). Select the unique identifier and any other XDM fields that you want to export to the destination. For more information, refer to [best practices when activating audiences to email marketing destinations](overview.md#best-practices).

## Exported data {#exported-data}

For [!DNL Adobe Campaign] destinations, [!DNL Platform] creates a `.csv` file in the storage location that you provided. For more information about the files, see [verify audience activation](../../ui/activate-batch-profile-destinations.md#verify) in the audience activation tutorial.

## Set up data import into Adobe Campaign {#import-data-into-campaign}

>[!IMPORTANT]
>
>* Keep in mind the [!DNL SFTP] storage limits, database storage limits, and active profile limits as per your Adobe Campaign contract while performing this integration.
>* You need to schedule, import, and map your exported segment(s) in Adobe Campaign using [!DNL Campaign] workflows. Refer to [Setting up a recurring import](https://experienceleague.adobe.com/docs/campaign-classic/using/automating-with-workflows/use-cases/data-management/recurring-import-workflow.html) in Adobe Campaign Classic documentation and [About data management activities](https://experienceleague.adobe.com/docs/campaign-standard/using/managing-processes-and-data/data-management-activities/about-data-management-activities.html) in Adobe Campaign Standard documentation.
>* The preferred method to send data to Adobe Campaign is through [!DNL Amazon S3] or [!DNL Azure Blob].

After connecting [!DNL Platform] to your [!DNL Amazon S3] or [!DNL Azure Blob] storage, you must set up the data import from your storage location into Adobe Campaign. To learn how to accomplish this, refer to the following Adobe Campaign documentation pages:
* [Get started with data import and export](https://experienceleague.adobe.com/docs/campaign-classic/using/getting-started/importing-and-exporting-data/get-started-data-import-export.html) and [Data loading (file)](https://experienceleague.adobe.com/docs/campaign-classic/using/automating-with-workflows/action-activities/data-loading--file-.html) in the Adobe Campaign Classic documentation.
* [Get started with processes and data management](https://experienceleague.adobe.com/docs/campaign-standard/using/managing-processes-and-data/get-started-workflows.html) and [Load file](https://experienceleague.adobe.com/docs/campaign-standard/using/managing-processes-and-data/data-management-activities/load-file.html) in the Adobe Campaign Standard documentation.
