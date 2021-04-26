---
keywords: email;Email;e-mail;email destinations;adobe campaign;campaign
title: Adobe Campaign connection
description: Adobe Campaign is a set of solutions that help you personalize and deliver campaigns across all your online and offline channels.
exl-id: 0de91738-8f56-41f5-8745-9b14b15db76a
---
# Adobe Campaign connection

## Overview {#overview}

Adobe Campaign is a set of solutions that help you personalize and deliver campaigns across all your online and offline channels. See [Get Started with Campaign Classic](https://experienceleague.adobe.com/docs/campaign-classic/using/getting-started/starting-with-adobe-campaign/about-adobe-campaign-classic.html) for more information.

To send segment data to Adobe Campaign, you must first [connect the destination](#connect-destination) in Adobe Experience Platform, and then [set up a data import](#import-data-into-campaign) from your storage location into Adobe Campaign.

## Export Type {#export-type}

**Profile-based** - you are exporting all members of a segment, together with the desired schema fields (for example: email address, phone number, last name), as chosen in the **[!UICONTROL Select attributes]** step of the [destination activation workflow](../../ui/activate-destinations.md#select-attributes).

## IP address allow list {#allow-list}

When setting up email marketing destinations with [!DNL SFTP] storage, Adobe recommends that you add certain IP ranges to your allow list.

Refer to [IP address allow list for cloud storage destinations](../cloud-storage/ip-address-allow-list.md) if you need to add Adobe IPs to your allow list.

## Connect destination {#connect-destination}

In **[!UICONTROL Connections]** > **[!UICONTROL Destinations]**, select Adobe Campaign, then select **[!UICONTROL Configure]**.

>[!NOTE]
>
>If a connection with this destination already exists, you can see an **[!UICONTROL Activate]** button on the destination card. For more information about the difference between [!UICONTROL Activate] and [!UICONTROL Configure], refer to the [Catalog](../../ui/destinations-workspace.md#catalog) section of the destination workspace documentation.  

![Connect to Adobe Campaign](../../assets/catalog/email-marketing/adobe-campaign/catalog.png)

In the **[!UICONTROL Account]** step of the Connect destination workflow, select the **[!UICONTROL Connection type]** for your storage location. For Adobe Campaign, you can select between **[!UICONTROL Amazon S3]**, **[!UICONTROL SFTP with Password]**, **[!UICONTROL SFTP with SSH Key]**, and **[!UICONTROL Azure Blob]**. The preferred method to send data to Adobe Campaign is through [!DNL Amazon S3] or [!DNL Azure Blob]. Fill in the information below, depending on your connection type, then select **[!UICONTROL Connect]**.


![Set up Campaign wizard](../../assets/catalog/email-marketing/adobe-campaign/connection-type.png)

- For **[!UICONTROL Amazon S3]** connections, you must provide your [!UICONTROL Access Key ID] and [!UICONTROL Secret Access Key]. 
- For **[!UICONTROL SFTP with Password]** connections, you must provide [!UICONTROL Domain], [!UICONTROL Port], [!UICONTROL Username], and [!UICONTROL Password].
- For **[!UICONTROL SFTP with SSH Key]** connections, you must provide [!UICONTROL Domain], [!UICONTROL Port], [!UICONTROL Username], and [!UICONTROL SSH Key].
- For **[!UICONTROL Azure Blob]** connections, you must provide a connection string.

Optionally, you can attach your RSA-formatted public key to add encryption with PGP/GPG to your exported files under the **[!UICONTROL Key]** section. Your public key must be written as a [!DNL Base64] encoded string.

![Fill in Campaign information](../../assets/catalog/email-marketing/adobe-campaign/account-info.png)

In **[!UICONTROL Account authentication]**, fill in the relevant information for your destination, as shown below:
   - **[!UICONTROL Name]**: Pick a relevant name for your destination.
   - **[!UICONTROL Description]**: Enter a description for your destination.
   - **[!UICONTROL Bucket Name]**: *For S3 connections*. Enter the location of your S3 bucket where [!DNL Platform] will deposit your export data as CSV or tab-delimited files. 
   - **[!UICONTROL Folder Path]**: Provide the path in your storage location where [!DNL Platform] will deposit your export data as CSV or tab-delimited files.
   - **[!UICONTROL Container]**: *For Blob connections*. The container that holds the Blob your folder path is in.
   - **[!UICONTROL File Format]**: **CSV** or **TAB_DELIMITED**. Select which file format to export to your storage location. 
   - **[!UICONTROL Marketing actions]**: Marketing actions indicate the intent for which data will be exported to the destination. You can select from Adobe-defined marketing actions or you can create your own marketing action. For more information about marketing actions, see the [Data usage policies overview](../../../data-governance/policies/overview.md) page.

![Campaign basic information](../../assets/catalog/email-marketing/adobe-campaign/basic-information.png)

Select **[!UICONTROL Create destination]** after filling in the fields above. Your destination is now connected and you can [activate segments](../../ui/activate-destinations.md) to the destination.

## Activate segments {#activate-segments}

See [Activate profiles and segments to a destination](../../ui/activate-destinations.md) for information about the segment activation workflow.

## Destination attributes {#destination-attributes}

When [activating segments](../../ui/activate-destinations.md) to the Adobe Campaign destination, Adobe recommends that you select a unique identifier from your [union schema](../../../profile/home.md#profile-fragments-and-union-schemas). Select the unique identifier and any other XDM fields that you want to export to the destination. For more information, refer to [Select which schema fields to use as destination attributes in your exported files](./overview.md#destination-attributes). 

## Exported data {#exported-data}

For [!DNL Adobe Campaign] destinations, [!DNL Platform] creates a tab-delimited `.txt` or `.csv` file in the storage location that you provided. For more information about the files, see [Email Marketing destinations and Cloud storage destinations](../../ui/activate-destinations.md#esp-and-cloud-storage) in the segment activation tutorial. 

## Set up data import into Adobe Campaign {#import-data-into-campaign}

>[!IMPORTANT]
>
>- Please keep in mind the SFTP storage limits, database storage limits, and active profile limits as per your Adobe Campaign contract while performing this integration.
>- You need to schedule, import, and map your exported segment(s) in Adobe Campaign using [!DNL Campaign] workflows. Refer to [Setting up a recurring import](https://experienceleague.adobe.com/docs/campaign-classic/using/automating-with-workflows/use-cases/data-management/recurring-import-workflow.html) in Adobe Campaign Classic documentation and [About data management activities](https://experienceleague.adobe.com/docs/campaign-standard/using/managing-processes-and-data/data-management-activities/about-data-management-activities.html) in Adobe Campaign Standard documentation.
>- The preferred method to send data to Adobe Campaign is through [!DNL Amazon S3] or [!DNL Azure Blob].


After connecting [!DNL Platform] to your [!DNL Amazon S3] or [!DNL Azure Blob] storage, you must set up the data import from your storage location into Adobe Campaign. To learn how to accomplish this, refer to the following Adobe Campaign documentation pages:
- [Get started with data import and export](https://experienceleague.adobe.com/docs/campaign-classic/using/getting-started/importing-and-exporting-data/get-started-data-import-export.html) and [Data loading (file)](https://experienceleague.adobe.com/docs/campaign-classic/using/automating-with-workflows/action-activities/data-loading--file-.html) in the Adobe Campaign Classic documentation.
- [Get started with processes and data management](https://experienceleague.adobe.com/docs/campaign-standard/using/managing-processes-and-data/get-started-workflows.html) and [Load file](https://experienceleague.adobe.com/docs/campaign-standard/using/managing-processes-and-data/data-management-activities/load-file.html) in the Adobe Campaign Standard documentation.
