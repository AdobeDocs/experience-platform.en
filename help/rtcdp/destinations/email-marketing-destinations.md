---
title: Email Marketing Destinations
seo-title: Email Marketing Destinations
description: Email Service Providers (ESPs) allow you to manage your email marketing, such as for sending promotional email campaigns.
seo-description: Email Service Providers (ESPs) allow you to manage your email marketing, such as for sending promotional email campaigns.
---

# Email marketing destinations {#email-marketing-destinations}

Email Service Providers (ESPs) allow you to manage your email marketing, such as for sending promotional email campaigns. Adobe Real-time Customer Data Platform integrates with ESPs by allowing you to activate segments to email marketing destinations.

To send segments to email marketing destinations for your campaigns, Adobe Real-time CDP must first connect to the destination.

Connecting to email marketing destinations is a two step process, the first step identical for all email marketing destinations: The UI flow to connect to an email marketing destination is similar for all destinations.

In the connect destination flow, described in the section below, you will grant Adobe access your storage location, either Amazon S3 or SFTP. Real-Time CDP exports your segments as CSV or TXT files and drops them into your preferred location. Then, from your desired email marketing platform, you can schedule a regular data import from your storage location into the platform. The process to import data into email marketing platforms is specific to each platform. See the individual destinations articles for more information.

## Step 1 - Connect destination {#connect-destination}

1. In **[!UICONTROL Connections > Destinations]**, select the email marketing destination that you want to connect to, and press **[!UICONTROL Connect destination]**.

    ![Connect to destination](/help/rtcdp/destinations/assets/connect-destination.png)

2. In the Connect wizard, select the **[!UICONTROL Connection type]** for your storage location. You can select between **Amazon S3**, **SFTP with Password**, **SFTP with SSH Key**. Fill in the information below, depending on your connection type, and press **[!UICONTROL Connect]**.

For **S3 connections**, you must provide your Access Key ID and Secret Access Key. 

For **SFTP with Password** connections, you must provide Domain, Port, Username, and Password.

For **SFTP with SSH Key** connections, you must provide Domain, Port, Username, and SSH Key.

## Step 2 - Select which schema fields to use as destination attributes in your exported files {#destination-attributes}

In this step, you are selecting which fields to export to email marketing destinations.

![Destination attributes](/help/rtcdp/destinations/assets/destination-attributes.png)

### Identity

You **must** select a unique identifier from your [union schema](https://www.adobe.io/apis/experienceplatform/home/profile-identity-segmentation/profile-identity-segmentation-services.html#!api-specification/markdown/narrative/technical_overview/unified_profile_architectural_overview/unified_profile_architectural_overview.md#the-union-view). This is the field that your users' identities are keyed off of. Most commonly, this field is the email address, but it can also be a loyalty ID or a phone number. See the table below for the most common identifiers and their schema in XDM. 

Schema | XDM field |
---------|----------|
 Email Address | personalEmail.address |
 Phone | mobilePhone.number |
 Loyalty ID | customer-defined XDM field |

### Other Destination Attributes

In the Schema field selector, choose which other fields you want to export to the email destination. Some recommended options are:

Schema | XDM field |
---------|----------|

 First Name | person.name.firstName |
 Last Name | person.name.lastName |
 Phone | mobilePhone.number |
 Address City| homeAddress.city |
 Address State | homeAddress.stateProvince |
 Address Postal Code | homeAddress.postalCode |
 Birthday | person.birthDayAndMonth | 

## Step 3 - Import data from your storage location into the destination

See the individual email marketing destination articles to learn how to import data into destinations:

* [Adobe Campaign](/help/rtcdp/destinations/adobe-campaign-classic-destination.md#import-data-into-campaign)
* [Salesforce Marketing Cloud](/help/rtcdp/destinations/salesforce-marketing-cloud-destination.md#import-data-into-salesforce)
* [Oracle Eloqua](/help/rtcdp/destinations/oracle-eloqua-destination.md#import-data-into-eloqua)
* [Oracle Responsys](/help/rtcdp/destinations/oracle-responsys-destination.md#import-data-into-responsys)

## Activate segments to email marketing destinations

For instructions on how to activate segments to email marketing destinations, see [Activate Data to Destinations](/help/rtcdp/destinations/activate-destinations.md).