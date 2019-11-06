---
title: Oracle Eloqua destination
seo-title: Oracle Eloqua destination
description: Oracle Eloqua is a software as a service (SaaS) platform for marketing automation offered by Oracle that aims to help B2B marketers and organizations manage marketing campaigns and sales lead generation.
seo-description: Oracle Eloqua is a software as a service (SaaS) platform for marketing automation offered by Oracle that aims to help B2B marketers and organizations manage marketing campaigns and sales lead generation.
---

# Oracle Eloqua

## Overview

[Oracle Eloqua](https://www.oracle.com/marketingcloud/products/marketing-automation/) is a software as a service (SaaS) platform for marketing automation offered by Oracle that aims to help B2B marketers and organizations manage marketing campaigns and sales lead generation.

To send segment data to Oracle Eloqua, you must first [connect the destination](#connect-destination) in Adobe Real-time Customer Data Platform, and then [set up a data import](#import-data-into-eloqua) from your storage location into Oracle Responsys.

## Connect to destination {#connect-destination}

1. In **[!UICONTROL Connections > Destinations]**, select Oracle Eloqua, and press **[!UICONTROL Connect destination]**.

    ![Connect to Eloqua](/help/rtcdp/destinations/assets/connect-oracle-eloqua.png)

1. In the Connect destination wizard, select the **[!UICONTROL Connection type]** for your storage location. For Oracle Eloqua, you can select between **SFTP with Password** and **SFTP with SSH Key**. Fill in the information below, depending on your connection type, and press **[!UICONTROL Connect]**.

    ![Set up Eloqua wizard](/help/rtcdp/destinations/assets/eloqua-wizard.png)

    For **SFTP with Password** connections, you must provide Domain, Port, Username, and Password.
    For **SFTP with SSH Key** connections, you must provide Domain, Port, Username, and SSH Key.

    ![Fill in Eloqua information](/help/rtcdp/destinations/assets/eloqua-step2.png)

1. In **Basic Information**, fill in the relevant information for your destination, as shown below:
* **Name**: Pick a relevant name for your destination.
* **Description**: Enter a description for your destination.
* **Folder Path**: Provide the path in your storage location where Real-Time CDP will drop your export data
* **File Format**: **CSV** or **TAB_DELIMITED**. Select which file format to export to your storage location.

    ![Eloqua basic information](/help/rtcdp/destinations/assets/responsys-basic-information.png)

>[!NOTE]
>
>We should add a note about how Adobe takes maximum care of your credentials. What is our storage mechanism/policy?

## Destination attributes

When [activating segments](/help/rtcdp/destinations/activate-destinations.md) to the Oracle Eloqua destination, we recommend that you select a unique identifier from your [union schema](https://www.adobe.io/apis/experienceplatform/home/profile-identity-segmentation/profile-identity-segmentation-services.html#!api-specification/markdown/narrative/technical_overview/unified_profile_architectural_overview/unified_profile_architectural_overview.md). Select the unique identifier and any other XDM fields that you want to export to the destination. For more information, see [Select which schema fields to use as destination attributes in your exported files](/help/rtcdp/destinations/email-marketing-destinations.md#destination-attributes) in Email Marketing Destinations.

## Set up data import into Oracle Eloqua {#import-data-into-eloqua}

After connecting Real-Time CDP to your Amazon S3 or SFTP storage, you must set up the data import from your storage location into Oracle Eloqua. To learn how to accomplish this, see [Importing contacts or accounts](https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAA/Help/DataImportExport/Tasks/ImportingContactsOrAccounts.htm) in the Oracle Eloqua Help Center.