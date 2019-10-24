---
title: Email Marketing Destinations
seo-title: Email Marketing Destinations
description: Email Service Providers (ESPs) allow you to manage your email marketing, such as for sending promotional email campaigns.
seo-description: Email Service Providers (ESPs) allow you to manage your email marketing, such as for sending promotional email campaigns.
---

# Email marketing destinations {#email-marketing-destinations}

Email Service Providers (ESPs) allow you to manage your email marketing, such as for sending promotional email campaigns. Adobe's Real-time Customer Data Platform integrates with ESPs.

To send segments to email marketing destinations for your campaigns, Adobe Real-time CDP must first connect to the destination.

The UI flow to connect to an email marketing destination is similar for all destinations, with only a few particularities, that are explained in the articles for individual destinations.

## Connect destination

1. In **Connections > Destinations**, select the email marketing destination that you want to connect to, and press **Connect destination**.

    ![Connect to destination](/help/rtcdp/destinations/assets/connect-destination.png)

2. In the Connect wizard, select the Connection type for your email marketing destination. You can select between **Amazon S3**, **SFTP with Password**, **SFTP with SSH Key**. Fill in the information below, depending on your connection type, and press **Connect**.

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

## Activate segments to email marketing destinations

For instructions on how to activate segments to email marketing destinations, see [Activate Data to Destinations](/help/rtcdp/destinations/activate-destinations.md).