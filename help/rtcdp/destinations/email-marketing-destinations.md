---
title: Email Marketing Destinations
seo-title: Email Marketing Destinations
description: Email Service Providers (ESPs) allow you to manage your email marketing activities, such as for sending promotional email campaigns.
seo-description: Email Service Providers (ESPs) allow you to manage your email marketing activities, such as for sending promotional email campaigns.
---

# Email marketing destinations {#email-marketing-destinations}

Email Service Providers (ESPs) enable you to manage your email marketing activities, such as sending promotional email campaigns. Adobe Real-time Customer Data Platform integrates with ESPs by allowing you to activate segments to email marketing destinations.

To send segments to email marketing destinations for your campaigns, Adobe Real-time CDP must first connect to the destination.

Connecting to email marketing destinations is a three-step process. Each of the steps is described further below on this page.

In the connect destination flow, described in the section below, connect to either Amazon S3 or SFTP. Real-time CDP exports your segments as `.csv` or `.txt` files and delivers them to your preferred location. Schedule your data import in your email marketing platform from the storage location enabled in Real-time CDP. The process to import data varies for each partner. See the individual destinations articles for more information. 

## Step 1 - Connect destination {#connect-destination}

1. In **[!UICONTROL Connections > Destinations]**, select the email marketing destination that you want to connect to, then select **[!UICONTROL Connect destination]**.

    ![Connect to destination](/help/rtcdp/destinations/assets/connect-destination.png)

2. In the Connect wizard, select the **[!UICONTROL Connection type]** for your storage location. You can select between **Amazon S3**, **SFTP with Password**, **SFTP with SSH Key**. Fill in the information below, depending on your connection type, then select **[!UICONTROL Connect]**.

For **S3 connections**, you must provide your Access Key ID and Secret Access Key. 

For **SFTP with Password** connections, you must provide Domain, Port, Username, and Password.

For **SFTP with SSH Key** connections, you must provide Domain, Port, Username, and SSH Key.

## Step 2 - Select which schema fields to use as destination attributes in your exported files {#destination-attributes}

In this step, you are selecting which fields to export to email marketing destinations.

![Destination attributes](/help/rtcdp/destinations/assets/destination-attributes.png)

### Identity {#identity}

We recommend that you select a unique identifier from your [union schema](../../profile/home.md#profile-fragments-and-union-schemas). This is the field that your users' identities are keyed off of. Most commonly, this field is the email address, but it can also be a loyalty program ID or a phone number. See the table below for the most common unique identifiers and their XDM field in unified schema. 

Unique Identifier | XDM field in Unified Schema
---------|----------
 Email Address | `personalEmail.address` 
 Phone | `mobilePhone.number` 
 Loyalty program ID | `Customer-defined XDM field` 

### Other Destination Attributes

In the Schema field selector, choose which other fields you want to export to the email destination. Some recommended options are:

Schema | XDM field 
---------|----------
 First Name | `person.name.firstName`
 Last Name | `person.name.lastName`
 Phone | `mobilePhone.number` 
 Address City| `homeAddress.city` 
 Address State | `homeAddress.stateProvince` 
 Address Postal Code | `homeAddress.postalCode` 
 Birthday | `person.birthDayAndMonth` 

## Step 3 - Import data from your storage location into the destination

See the individual email marketing destination articles to learn how to import data from your storage location into destinations:

* [Adobe Campaign](/help/rtcdp/destinations/adobe-campaign-destination.md#import-data-into-campaign)
* [Salesforce Marketing Cloud](/help/rtcdp/destinations/salesforce-marketing-cloud-destination.md#import-data-into-salesforce)
* [Oracle Eloqua](/help/rtcdp/destinations/oracle-eloqua-destination.md#import-data-into-eloqua)
* [Oracle Responsys](/help/rtcdp/destinations/oracle-responsys-destination.md#import-data-into-responsys)

## Activate segments to email marketing destinations

For instructions on how to activate segments to email marketing destinations, see [Activate Data to Destinations](/help/rtcdp/destinations/activate-destinations.md).