---
title: Oracle Responsys destination
seo-title: Oracle Responsys destination
description: Responsys is an enterprise email marketing tool for cross-channel marketing campaigns offered by Oracle to personalize interactions across email, mobile, display, and social.
seo-description: Responsys is an enterprise email marketing tool for cross-channel marketing campaigns offered by Oracle to personalize interactions across email, mobile, display, and social.
---

# Oracle Responsys

## Overview

[Responsys](https://www.oracle.com/marketingcloud/products/cross-channel-orchestration/) is an enterprise email marketing tool for cross-channel marketing campaigns offered by Oracle to personalize interactions across email, mobile, display, and social.

To send segment data to Oracle Responsys, you must first [connect the destination](#connect-destination) in Adobe Real-time Customer Data Platform, and then [set up a data import](#import-data-into-responsys) from your storage location into Oracle Responsys.

## Connect destination {#connect-destination}

1. In **[!UICONTROL Connections > Destinations]**, select Oracle Responsys, and press **[!UICONTROL Connect destination]**.

    ![Connect to Responsys](/help/rtcdp/destinations/assets/connect-oracle-responsys.png)

1. In the Connect destination wizard, select the **[!UICONTROL Connection type]** for your storage location. For Oracle Responsys, you can select between **SFTP with Password** and **SFTP with SSH Key**. Fill in the information below, depending on your connection type, and press **[!UICONTROL Connect]**.

    ![Set up Responsys wizard](/help/rtcdp/destinations/assets/responsys-wizard.png)

    For **SFTP with Password** connections, you must provide Domain, Port, Username, and Password.
    For **SFTP with SSH Key** connections, you must provide Domain, Port, Username, and SSH Key.

    ![Fill in Responsys information](/help/rtcdp/destinations/assets/responsys-step2.png)

1. In **Basic Information**, fill in the relevant information for your destination, as shown below:
   * **Name**: Pick a relevant name for your destination.
   * **Description**: Enter a description for your destination.
   * **Folder Path**: Provide the path in your storage location where Real-time CDP will deposit your export data as CSV or tab-delimited files.
   * **File Format**: **CSV** or **TAB_DELIMITED**. Select which file format to export to your storage location.

    ![Responsys basic information](/help/rtcdp/destinations/assets/responsys-basic-information.png)

1. Click **Create** after filling in the fields in **Basic Information**. Your destination is now connected and you can [activate segments](/help/rtcdp/destinations/activate-destinations.md) to the destination.

## Destination attributes {#destination-attributes}

When [activating segments](/help/rtcdp/destinations/activate-destinations.md) to the Oracle Responsys destination, we recommend that you select a unique identifier from your [union schema](https://www.adobe.io/apis/experienceplatform/home/profile-identity-segmentation/profile-identity-segmentation-services.html#!api-specification/markdown/narrative/technical_overview/unified_profile_architectural_overview/unified_profile_architectural_overview.md). Select the unique identifier and any other XDM fields that you want to export to the destination. For more information, see [Select which schema fields to use as destination attributes in your exported files](/help/rtcdp/destinations/email-marketing-destinations.md#destination-attributes) in Email Marketing Destinations.

## Set up data import into Oracle Responsys {#import-data-into-responsys}

After connecting Real-time CDP to your Amazon S3 or SFTP storage, you must set up the data import from your storage location into Oracle Responsys. To learn how to accomplish this, see [Importing contacts or accounts](https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCEA/Connect_WizardUpload.htm) in the Oracle Responsys Help Center.