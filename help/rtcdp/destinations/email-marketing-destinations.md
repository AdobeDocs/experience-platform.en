---
keywords: email;Email;e-mail;email destinations
title: Email Marketing Destinations
seo-title: Email Marketing Destinations
type: Tutorial
description: Email Service Providers (ESPs) allow you to manage your email marketing activities, such as for sending promotional email campaigns.
seo-description: Email Service Providers (ESPs) allow you to manage your email marketing activities, such as for sending promotional email campaigns.
---

# Email marketing destinations {#email-marketing-destinations}

Email Service Providers (ESPs) enable you to manage your email marketing activities, such as sending promotional email campaigns. Adobe Real-time Customer Data Platform integrates with ESPs by allowing you to activate segments to email marketing destinations.

To send segments to email marketing destinations for your campaigns, Adobe Real-time CDP must first connect to the destination.

Connecting to email marketing destinations is a three-step process. Each of the steps is described further below on this page.

In the connect destination flow, described in the section below, connect to either Amazon S3 or SFTP. Real-time CDP exports your segments as `.csv` or `.txt` files and delivers them to your preferred location. Schedule your data import in your email marketing platform from the storage location enabled in Real-time CDP. The process to import data varies for each partner. See the individual destinations articles for more information. 

## Step 1 - Configure destination {#connect-destination}

1. In **[!UICONTROL Connections]** > **[!UICONTROL Destinations]**, select the email marketing destination that you want to connect to, then select **[!UICONTROL Configure]**.

    ![Connect to destination](/help/rtcdp/destinations/assets/connect-email-marketing.png)

2. In the **[!UICONTROL Authentication]** step, if you had previously set up a connection to your email marketing destination, select **[!UICONTROL Existing Account]** and select your existing connection. Or, you can select **[!UICONTROL New Account]** to set up a new connection to your email marketing destination. In the **[!UICONTROL Connection type]** selector, you can select between Amazon S3, SFTP with Password, or SFTP with SSH Key. Fill in the information below, depending on your connection type, then select **[!UICONTROL Connect]**.

    For **S3 connections**, you must provide your Amazon Access Key ID and Secret Access Key. 

    For **SFTP with Password** connections, you must provide Domain, Port, Username, and Password for your SFTP server.

    For **SFTP with SSH Key** connections, you must provide Domain, Port, Username, and SSH Key for your SFTP server.

3. In the **[!UICONTROL Setup]** step, enter a [!UICONTROL Name] and a [!UICONTROL Description] for your new destination, as well as the [!UICONTROL File format] for the exported files. <br> 
If you selected Amazon S3 as storage option in the previous step, insert the [!UICONTROL Bucket name] and the [!UICONTROL Folder path] in your cloud storage destination where the files will be delivered. For the SFTP storage option, insert the [!UICONTROL Folder path] where the files will be delivered. <br> 
Also in this step, you can select any [!UICONTROL Marketing use case] that should apply to this destination. Marketing use cases indicate the intent for which data will be exported to the destination. You can select from Adobe-defined marketing use cases or you can create your own marketing use case. For more information about marketing use cases, see the [Data Governance in Real-time CDP](/help/rtcdp/privacy/data-governance-overview.md#destinations) page. For information about the individual Adobe-defined marketing use cases, see the [Data usage policies overview](/help/data-governance/policies/overview.md#core-actions). <br>
    ![Email setup step](/help/rtcdp/destinations/assets/email-setup-step.png)

## Step 2 - Select which segment members to include in your destination exports {#select-segments}

On the **[!UICONTROL Select Segments]** page, select which segments to send to the destination. Find more information about the fields in the sections below.

![Select segments](/help/rtcdp/destinations/assets/email-select-segments.png)

## Step 3 - Configure file names

For information about the file name editing options, refer to the [Configure](/help/rtcdp/destinations/activate-destinations.md#configure) step in the activate destinations tutorial.

## Step 4 - Select attributes - Select which schema fields to use as destination attributes in your exported files {#destination-attributes}

In this step, you are selecting which fields to export to email marketing destinations.

![Destination attributes](/help/rtcdp/destinations/assets/recommended-attributes.png)

For more information about this step, refer to the [Select attributes](/help/rtcdp/destinations/activate-destinations.md#select-attributes) step in the activate destinations tutorial.

### Identity {#identity}

We recommend that you select a unique identifier from your [union schema](../../profile/home.md#profile-fragments-and-union-schemas). This is the field that your users' identities are keyed off of. Most commonly, this field is the email address, but it can also be a loyalty program ID or a phone number. See the table below for the most common unique identifiers and their XDM field in the schema. 

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
 Segment membership | `segmentMembership.status`

## Step 5 - Import data from your storage location into the destination

See the individual email marketing destination articles to learn how to import data from your storage location into destinations: 

* [Adobe Campaign](/help/rtcdp/destinations/adobe-campaign-destination.md#import-data-into-campaign)
* [Salesforce Marketing Cloud](/help/rtcdp/destinations/salesforce-marketing-cloud-destination.md#import-data-into-salesforce)
* [Oracle Eloqua](/help/rtcdp/destinations/oracle-eloqua-destination.md#import-data-into-eloqua)
* [Oracle Responsys](/help/rtcdp/destinations/oracle-responsys-destination.md#import-data-into-responsys)

## Activate segments to email marketing destinations

For instructions on how to activate segments to email marketing destinations, see [Activate Data to Destinations](/help/rtcdp/destinations/activate-destinations.md).

## Additional resources

* [Activate data to destinations](/help/rtcdp/destinations/activate-destinations.md)
* [Create email marketing destinations and activate data using the Flow Service API](https://docs.adobe.com/content/help/en/experience-platform/tutorials/destinations/email-marketing-api.html)