---
title: Email Marketing Destinations
seo-title: Email Marketing Destinations
description: Email Service Providers (ESPs) allow you to manage your email marketing, such as for sending promotional email campaigns.
seo-description: Email Service Providers (ESPs) allow you to manage your email marketing, such as for sending promotional email campaigns.
---

# Email marketing destinations {#email-marketing-destinations}

Email Service Providers (ESPs) allow you to manage your email marketing, such as for sending promotional email campaigns. Adobe Real-time Customer Data Platform integrates with ESPs.

To send segments to email marketing destinations for your campaigns, Adobe Real-time CDP must first connect to the destination.

The UI flow to connect to an email marketing destination is similar for all destinations.

In the destination set up flow, described in the section below, you will grant Adobe access to one of your storage locations, Amazon S3 or SFTP, where Real-Time CDP will drop your destination export information. Then, from your desired email marketing platform, you can schedule a regular data import into the platform. The process to import data into email marketing platforms is specific to each platform. See the individual destinations articles for more information.

## Connect destination {#connect-destination}

1. In **[!UICONTROL Connections > Destinations]**, select the email marketing destination that you want to connect to, and press **[!UICONTROL Connect destination]**.

    ![Connect to destination](/help/rtcdp/destinations/assets/connect-destination.png)

2. In the Connect wizard, select the **[!UICONTROL Connection type]** for your storage location. You can select between **Amazon S3**, **SFTP with Password**, **SFTP with SSH Key**. Fill in the information below, depending on your connection type, and press **[!UICONTROL Connect]**.

For **S3 connections**, you must provide:
* Access Key ID - 
* Secret Access Key - 

For **SFTP with Password** connections, you must provide:
* Domain
* Port
* Username
* Password

For **SFTP with SSH Key** connections, you must provide:
* Domain
* Port
* Username
* SSH Key

## Import data into the destination

See the individual destination articles for email marketing destinations to learn how to import data into destinations.

## Activate segments to email marketing destinations

For instructions on how to activate segments to email marketing destinations, see [Activate Data to Destinations](/help/rtcdp/destinations/activate-destinations.md).