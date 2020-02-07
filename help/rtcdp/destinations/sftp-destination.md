---
title: SFTP destination
seo-title: SFTP destination
description: something
seo-description: something
---

# SFTP destination

## Overview

Create a live outbound connection to your SFTP server to periodically export tab-delimited or CSV data files from Adobe Experience Platform into your own internal systems.

To export data, complete the following steps:

## Connect destination {#connect-destination}

1. In **[!UICONTROL Connections > Destinations]**, select SFTP, then select **[!UICONTROL Connect destination]**.

    ![Connect to Salesforce](/help/rtcdp/destinations/assets/connect-salesforce.png)

1. In the Connect destination wizard, select the **[!UICONTROL Connection type]** for your storage location. You can select between **SFTP with Password** and **SFTP with SSH Key**. Fill in the information below, depending on your connection type, and select **[!UICONTROL Connect]**.

    ![Set up Salesforce wizard](/help/rtcdp/destinations/assets/salesforce-step1.png)

    For **SFTP with Password** connections, you must provide Domain, Port, Username, and Password.
    For **SFTP with SSH Key** connections, you must provide Domain, Port, Username, and SSH Key.

    ![Fill in Salesforce information](/help/rtcdp/destinations/assets/salesforce-wizard.png)

1. In **Basic Information**, fill in the relevant information for your destination, as shown below:
   * **Name**: Pick a relevant name for your destination.
   * **Description**: Enter a description for your destination.
   * **Folder Path**: Provide the path in your storage location where Real-time CDP will deposit your export data as CSV or tab-delimited files.
   * **File Format**: **CSV** or **TAB_DELIMITED**. Select which file format to export to your storage location.

    ![Salesforce basic information](/help/rtcdp/destinations/assets/salesforce-basic-information.png)

1. Click **Create** after filling in the fields in **Basic Information**. Your destination is now connected and you can [activate segments](/help/rtcdp/destinations/activate-destinations.md) to the destination.

## Destination attributes {#destination-attributes}

When [activating segments](/help/rtcdp/destinations/activate-destinations.md) to the Salesforce Marketing Cloud destination, we recommend that you select a unique identifier from your [union schema](https://www.adobe.io/apis/experienceplatform/home/profile-identity-segmentation/profile-identity-segmentation-services.html#!api-specification/markdown/narrative/technical_overview/unified_profile_architectural_overview/unified_profile_architectural_overview.md). Select the unique identifier and any other XDM fields that you want to export to the destination. For more information, see [Select which schema fields to use as destination attributes in your exported files](/help/rtcdp/destinations/email-marketing-destinations.md#destination-attributes) in Email Marketing Destinations.

## Set up data import into Salesforce Marketing Cloud {#import-data-into-salesforce}

After connecting Real-time CDP to your Amazon S3 or SFTP storage, you must set up the data import from your storage location into Salesforce Marketing Cloud. To learn how to accomplish this, see [Importing Subscribers into Marketing Cloud from a File](https://help.salesforce.com/articleView?id=mc_es_import_subscribers_from_file.htm&type=5) in the Salesforce Help Center.