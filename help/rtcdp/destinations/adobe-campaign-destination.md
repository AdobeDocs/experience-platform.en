---
keywords: email;Email;e-mail;email destinations;adobe campaign;campaign
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

1. In **[!UICONTROL Connections]** > **[!UICONTROL Destinations]**, select Adobe Campaign, then select **[!UICONTROL Connect destination]**.

    ![Connect to adobe campaign](/help/rtcdp/destinations/assets/connect-adobe-campaign.png)

1. In the Connect destination workflow, select the **[!UICONTROL Connection type]** for your storage location. For Adobe Campaign, you can select between **[!UICONTROL Amazon S3]**, **[!UICONTROL SFTP with Password]** and **[!UICONTROL SFTP with SSH Key]**. Fill in the information below, depending on your connection type, then select **[!UICONTROL Connect]**.

    ![Set up Campaign wizard](/help/rtcdp/destinations/assets/adobe-campaign-wizard.png)

    For **[!UICONTROL Amazon S3]** connections, you must provide your Access Key ID and Secret Access Key. 
    For **[!UICONTROL SFTP with Password]** connections, you must provide Domain, Port, Username, and Password.
    For **[!UICONTROL SFTP with SSH Key]** connections, you must provide Domain, Port, Username, and SSH Key.

    ![Fill in Campaign information](/help/rtcdp/destinations/assets/adobe-campaign-step2.png)

1. In **[!UICONTROL Basic Information]**, fill in the relevant information for your destination, as shown below:
   * **[!UICONTROL Name]**: Pick a relevant name for your destination.
   * **[!UICONTROL Description]**: Enter a description for your destination.
   * **[!UICONTROL Bucket Name]**: *For S3 connections*. Enter the location of your S3 bucket where Real-time CDP will deposit your export data as CSV or tab-delimited files. 
   * **[!UICONTROL Folder Path]**: Provide the path in your storage location where Real-time CDP will deposit your export data as CSV or tab-delimited files.
   * **[!UICONTROL File Format]**: **CSV** or **TAB_DELIMITED**. Select which file format to export to your storage location. 

    ![Campaign basic information](/help/rtcdp/destinations/assets/adobe-campaign-basic-information.png)

1. Click **[!UICONTROL Create]** after filling in the fields above. Your destination is now connected and you can [activate segments](/help/rtcdp/destinations/activate-destinations.md) to the destination.

## Activate segments {#activate-segments}

See [Activate profiles and segments to a destination](/help/rtcdp/destinations/activate-destinations.md) for information about the segment activation workflow.

## Destination attributes {#destination-attributes}

When [activating segments](/help/rtcdp/destinations/activate-destinations.md) to the Adobe Campaign destination, we recommend that you select a unique identifier from your [union schema](../../profile/home.md#profile-fragments-and-union-schemas). Select the unique identifier and any other XDM fields that you want to export to the destination. For more information, see [Select which schema fields to use as destination attributes in your exported files](/help/rtcdp/destinations/email-marketing-destinations.md#destination-attributes) in Email Marketing Destinations. 

## Exported data {#exported-data}

For [!DNL Adobe Campaign] destinations, Adobe Real-time CDP creates a tab-delimited `.txt` or `.csv` file in the storage location that you provided. For more information about the files, see [Email Marketing destinations and Cloud storage destinations](/help/rtcdp/destinations/activate-destinations.md#esp-and-cloud-storage) in the segment activation tutorial. 

<!--

Expect a new file to be created in your storage location every day. The file format is:

`Adobe_Campaign_segment<segmentID>_<timestamp-yyyymmddhhmmss>.csv`

```
Adobe_Campaign_segment12341e18-abcd-49c2-836d-123c88e76c39_20200408061804.csv
Adobe_Campaign_segment12341e18-abcd-49c2-836d-123c88e76c39_20200409052200.csv
Adobe_Campaign_segment12341e18-abcd-49c2-836d-123c88e76c39_20200410061130.csv
```

The presence of these files in your storage location is confirmation of successful activation. To understand how the exported files are structured, you can [download a sample .csv file](/help/rtcdp/destinations/assets/sample_export_file_segment12341e18-abcd-49c2-836d-123c88e76c39_20200408061804.csv). This sample file includes the profile attributes `person.firstname`, `person.lastname`, `person.gender`, `person.birthyear`, and `personalEmail.address`.

-->

## Set up data import into Adobe Campaign {#import-data-into-campaign}

After connecting Real-time CDP to your [!DNL Amazon S3] or SFTP storage, you must set up the data import from your storage location into Adobe Campaign. To learn how to accomplish this, see [Importing data](https://docs.adobe.com/content/help/en/campaign-classic/using/automating-with-workflows/general-operation/importing-data.html) in the Adobe Campaign Help documentation.