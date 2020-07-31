---
title: Oracle Responsys destination
seo-title: Oracle Responsys destination
description: Responsys is an enterprise email marketing tool for cross-channel marketing campaigns offered by Oracle to personalize interactions across email, mobile, display, and social.
seo-description: Responsys is an enterprise email marketing tool for cross-channel marketing campaigns offered by Oracle to personalize interactions across email, mobile, display, and social.
---

# [!DNL Oracle Responsys]

## Overview

[Responsys](https://www.oracle.com/marketingcloud/products/cross-channel-orchestration/) is an enterprise email marketing tool for cross-channel marketing campaigns offered by [!DNL Oracle] to personalize interactions across email, mobile, display, and social.

To send segment data to [!DNL Oracle Responsys], you must first [connect to the destination](#connect-destination) in Adobe Real-time Customer Data Platform, and then [set up a data import](#import-data-into-responsys) from your storage location into [!DNL Oracle Responsys].

## Connect destination {#connect-destination}

1. In **[!UICONTROL Connections > Destinations]**, select [!DNL Oracle Responsys], then select **[!UICONTROL Connect destination]**.

    ![Connect to Responsys](/help/rtcdp/destinations/assets/connect-oracle-responsys.png)

2. In the **[!UICONTROL Authentication]** step, if you had previously set up a connection to your cloud storage destination, select **[!UICONTROL Existing Account]** and select one of your existing connections. Or, you can select **[!UICONTROL New Account]** to set up a new connection. Fill in your account authentication credentials and select **[!UICONTROL Connect to destination]**. For [!DNL Oracle Responsys], you can select between **[!UICONTROL SFTP with Password]** and **[!UICONTROL SFTP with SSH Key]**. Fill in the information below, depending on your connection type, and select **[!UICONTROL Connect to destination]**.

    For **[!UICONTROL SFTP with Password]** connections, you must provide Domain, Port, Username, and Password.
    For **[!UICONTROL SFTP with SSH Key]** connections, you must provide Domain, Port, Username, and SSH Key.

    ![Fill in Responsys information](/help/rtcdp/destinations/assets/responsys-authentication.png)

3. In the **[!UICONTROL Setup]** step, fill in the relevant information for your destination as shown below:
   * **[!UICONTROL Name]**: Pick a relevant name for your destination.
   * **[!UICONTROL Description]**: Enter a description for your destination.
   * **[!UICONTROL Folder Path]**: Provide the path in your storage location where Real-time CDP will deposit your export data as CSV or tab-delimited files.
   * **[!UICONTROL File Format]**: **CSV** or **TAB_DELIMITED**. Select which file format to export to your storage location.

    ![Responsys basic information](/help/rtcdp/destinations/assets/responsys-basic-information.png)

4. Click **[!UICONTROL Create destination]** after filling in the fields above. Your destination is now connected and you can [activate segments](/help/rtcdp/destinations/activate-destinations.md) to the destination.

## Destination attributes {#destination-attributes}

When [activating segments](/help/rtcdp/destinations/activate-destinations.md) to the [!DNL Oracle Responsys] destination, we recommend that you select a unique identifier from your [union schema](../../profile/home.md#profile-fragments-and-union-schemas). Select the unique identifier and any other XDM fields that you want to export to the destination. For more information, see [Select which schema fields to use as destination attributes in your exported files](/help/rtcdp/destinations/email-marketing-destinations.md#destination-attributes) in Email Marketing Destinations.

## Set up data import into [!DNL Oracle Responsys] {#import-data-into-responsys}

After connecting Real-time CDP to your Amazon S3 or SFTP storage, you must set up the data import from your storage location into [!DNL Oracle Responsys]. To learn how to accomplish this, see [Importing contacts or accounts](https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCEA/Connect_WizardUpload.htm) in the [!DNL Oracle Responsys Help Center].