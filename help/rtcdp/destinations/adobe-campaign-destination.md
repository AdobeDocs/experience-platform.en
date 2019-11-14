---
title: Adobe Campaign
seo-title: Adobe Campaign
description: Adobe Campaign is a set of solutions that help you personalize and deliver campaigns across all your online and offline channels.
seo-description: Adobe Campaign is a set of solutions that help you personalize and deliver campaigns across all your online and offline channels.
---

# Adobe Campaign

## Overview

Adobe Campaign is a set of solutions that help you personalize and deliver campaigns across all your online and offline channels. See [About Adobe Campaign Classic](https://docs.adobe.com/content/help/en/campaign-classic/using/getting-started/starting-with-adobe-campaign/about-adobe-campaign-classic.html) for more information.

To send segment data to Adobe Campaign, you must first [connect the destination](#connect-destination) in Adobe Real-time Customer Data Platform, and then [set up a data import](#import-data-into-campaign) from your storage location into Adobe Campaign.

## Connect destination {#connect-destination}

1. In **[!UICONTROL Connections > Destinations]**, select Adobe Campaign, and press **[!UICONTROL Connect destination]**.

    ![Connect to adobe campaign](/help/rtcdp/destinations/assets/connect-adobe-campaign.png)

1. In the Connect destination wizard, select the **[!UICONTROL Connection type]** for your storage location. For Adobe Campaign, you can select between **Amazon S3**, **SFTP with Password** and **SFTP with SSH Key**. Fill in the information below, depending on your connection type, and press **[!UICONTROL Connect]**.

    ![Set up Campaign wizard](/help/rtcdp/destinations/assets/adobe-campaign-wizard.png)

    For **S3** connections, you must provide your Access Key ID and Secret Access Key. 
    For **SFTP with Password** connections, you must provide Domain, Port, Username, and Password.
    For **SFTP with SSH Key** connections, you must provide Domain, Port, Username, and SSH Key.

    ![Fill in Campaign information](/help/rtcdp/destinations/assets/adobe-campaign-step2.png)

1. In **Basic Information**, fill in the relevant information for your destination, as shown below:
   * **Name**: Pick a relevant name for your destination.
   * **Description**: Enter a description for your destination.
   * **Bucket Name**: *For S3 connections*. Enter the location of your S3 bucket where Real-time CDP will deposit your export data as CSV or tab-delimited files. 
   * **Folder Path**: Provide the path in your storage location where Real-time CDP will deposit your export data as CSV or tab-delimited files.
   * **File Format**: **CSV** or **TAB_DELIMITED**. Select which file format to export to your storage location. 

    ![Campaign basic information](/help/rtcdp/destinations/assets/adobe-campaign-basic-information.png)

1. Click **Create** after filling in the fields in **Basic Information**. Your destination is now connected and you can [activate segments](/help/rtcdp/destinations/activate-destinations.md) to the destination.

>[!NOTE]
>
>We should add a note about how Adobe takes maximum care of your credentials. What is our storage mechanism?

## Destination attributes {#destination-attributes}

When [activating segments](/help/rtcdp/destinations/activate-destinations.md) to the Adobe Campaign destination, we recommend that you select a unique identifier from your [union schema](https://www.adobe.io/apis/experienceplatform/home/profile-identity-segmentation/profile-identity-segmentation-services.html#!api-specification/markdown/narrative/technical_overview/unified_profile_architectural_overview/unified_profile_architectural_overview.md). Select the unique identifier and any other XDM fields that you want to export to the destination. For more information, see [Select which schema fields to use as destination attributes in your exported files](/help/rtcdp/destinations/email-marketing-destinations.md#destination-attributes) in Email Marketing Destinations. 


## Set up data import into Adobe Campaign {#import-data-into-campaign}

After connecting Real-time CDP to your Amazon S3 or SFTP storage, you must set up the data import from your storage location into Adobe Campaign. To learn how to accomplish this, see [Importing data](https://docs.adobe.com/content/help/en/campaign-classic/using/automating-with-workflows/general-operation/importing-data.html) in the Adobe Campaign Help documentation.