---
title: Oracle Responsys destination
seo-title: Oracle Responsys destination
description: Responsys is an enterprise email marketing tool for cross-channel marketing campaigns offered by Oracle to personalize interactions across email, mobile, display, and social.
seo-description: Responsys is an enterprise email marketing tool for cross-channel marketing campaigns offered by Oracle to personalize interactions across email, mobile, display, and social.
---

# Oracle Responsys

## Overview

[Oracle Responsys](https://www.oracle.com/marketingcloud/products/cross-channel-orchestration/) is an enterprise email marketing tool for cross-channel marketing campaigns offered by Oracle to personalize interactions across email, mobile, display, and social.

To send segment data to Oracle Responsys, you must first [connect the destination](#connect-destination) in Adobe Real-time CDP, and then [set up a data import](#import-data-into-responsys) from your storage location into Oracle Responsys.

## Connect destination {#connect-destination}

1. In **[!UICONTROL Connections > Destinations]**, select Oracle Responsys, and press **[!UICONTROL Connect destination]**.

    ![Connect to Responsys](/help/rtcdp/destinations/assets/connect-oracle-responsys.png)

1. In the Connect destination wizard, select the **[!UICONTROL Connection type]** for your storage location. For Oracle Responsys, you can select between **SFTP with Password** and **SFTP with SSH Key**. Fill in the information below, depending on your connection type, and press **[!UICONTROL Connect]**.

    ![Set up Responsys wizard](/help/rtcdp/destinations/assets/responsys-wizard.png)
    ![Fill in Responsys information](/help/rtcdp/destinations/assets/responsys-step2.png)

1. In **Basic Information**, fill in the relevant information for your destination, as shown below:
* **Name**: Pick a relevant name for your destination.
* **Description**: Enter a description for your destination.
* **Folder Path**: Provide the path in your storage location where Real-time CDP will drop your export data
* **File Format**: **CSV** or **TAB_DELIMITED**. Select which file format to export to your storage location.

    ![Responsys basic information](/help/rtcdp/destinations/assets/responsys-basic-information.png)

>[!NOTE]
>
>We should add a note about how Adobe takes maximum care of your credentials. What is our storage mechanism?

## Destination attributes {#destination-attributes}

When [activating segments](/help/rtcdp/destinations/activate-destinations.md) to the Oracle Responsys destination, we recommend that you select the following destination attributes:

* **Email Address**: personalEmail
* **First Name**: firstName
* **Last Name**: lastName
* **Phone**: mobilePhone
* **Address City**: homeAddress.city
* **Address State or Province**: homeAddress.stateProvince
* **Address Postal Code**: homeAddress.postalCode
* **Address Country**: homeAddress.country
* **Profile ID** TBD: (e.g. Membership ID): Eloqua Contact ID

## Set up data import into Oracle Responsys {#import-data-into-responsys}

After connecting Real-time CDP to your Amazon S3 or SFTP storage, you must set up the data import from your storage location into Oracle Responsys. To learn how to accomplish this, see [Importing contacts or accounts](https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCEA/Connect_WizardUpload.htm) in the Oracle Responsys Help Center.