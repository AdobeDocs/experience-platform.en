---
title: Salesforce Marketing Cloud
seo-title: Salesforce Marketing Cloud
description: Salesforce Marketing Cloud is a digital marketing suite formerly known as ExactTarget that allows you to build and customize journeys for visitors and customers to personalize their experience.
seo-description: Salesforce Marketing Cloud is a digital marketing suite formerly known as ExactTarget that allows you to build and customize journeys for visitors and customers to personalize their experience.
---

# Salesforce Marketing Cloud

## Overview

[Salesforce Marketing Cloud](https://www.salesforce.com/products/marketing-cloud/email-marketing/) is a digital marketing suite formerly known as ExactTarget that allows you to build and customize journeys for visitors and customers to personalize their experience.

To send segment data to Salesforce Marketing cloud, you must first [connect the destination](#connect-destination) in Adobe Real-time CDP, and then [set up a data import](#import-data-into-responsys) from your storage location into Salesforce Marketing Cloud.

## Connect destination {#connect-destination}

1. In **[!UICONTROL Connections > Destinations]**, select Salesforce Marketing Cloud, and press **[!UICONTROL Connect destination]**.

    ![Connect to Salesforce](/help/rtcdp/destinations/assets/connect-salesforce.png)

1. In the Connect destination wizard, select the **[!UICONTROL Connection type]** for your storage location. For Salesforce Marketing Cloud, you can select between **SFTP with Password** and **SFTP with SSH Key**. Fill in the information below, depending on your connection type, and press **[!UICONTROL Connect]**.

    ![Set up Responsys wizard](/help/rtcdp/destinations/assets/salesforce-step1.png)
    ![Fill in Responsys information](/help/rtcdp/destinations/assets/salesforce-wizard.png)

    If your storage location supports **SFTP with Password** authentication, you must provide Domain, Port, Username, and Password.
    If your storage location supports **SFTP with SSH Key** authentication, you must provide Domain, Port, Username, and SSH Key.

1. In **Basic Information**, fill in the relevant information for your destination, as shown below:
* **Name**: Pick a relevant name for your destination.
* **Description**: Enter a description for your destination.
* **Folder Path**: Provide the path in your storage location where Real-time CDP will drop your export data
* **File Format**: **CSV** or **TAB_DELIMITED**. Select which file format to export to your storage location.

    ![Responsys basic information](/help/rtcdp/destinations/assets/salesforce-basic-information.png)

>[!NOTE]
>
>We should add a note about how Adobe takes maximum care of your credentials. What is our storage mechanism?

## Destination attributes {#destination-attributes}

When [activating segments](/help/rtcdp/destinations/activate-destinations.md) to the Salesforce Marketing Cloud destination, we recommend that you select the following destination attributes:


Schema | XDM field | Field in Salesforce Marketing Cloud
---------|----------|---------
 Email Address | personalEmail | Email Address
 First Name | firstName | First Name
 Last Name | lastName | Last Name
 Phone | mobilePhone | Phone Number
 Address City| homeAddress.city | City
 Address State | homeAddress.stateProvince | State
 Address Postal Code | homeAddress.postalCode | Postal Code
 Birthday |  | 
 Profile ID | ----- | Contact Key

## Set up data import into Salesforce Marketing Cloud {#import-data-into-salesforce}

After connecting Real-time CDP to your Amazon S3 or SFTP storage, you must set up the data import from your storage location into Oracle Responsys. To learn how to accomplish this, see [Importing Subscribers into Marketing Cloud from a File](https://help.salesforce.com/articleView?id=mc_es_import_subscribers_from_file.htm&type=5) in the Salesforce Help Center.