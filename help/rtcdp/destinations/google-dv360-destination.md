---
title: Google Display & Video 360 Destination
seo-title: Google Display & Video 360 Destination
description: Display & Video 360, formerly known as DoubleClick Bid Manager is a tool used to execute retargeting and audience targeted digital campaigns across Display, Video and Mobile inventory sources.
seo-description: Display & Video 360, formerly known as DoubleClick Bid Manager is a tool used to execute retargeting and audience targeted digital campaigns across Display, Video and Mobile inventory sources. 
---

# Google Display & Video 360 Destination

## Overview

Display & Video 360, formerly known as DoubleClick Bid Manager, is a tool used to execute retargeting and audience targeted digital campaigns across Display, Video and Mobile inventory sources.

## Destination specs

Note the following details that are specific to Google Display & Video 360 destinations:

* You can send the following [identities](https://www.adobe.io/apis/experienceplatform/home/profile-identity-segmentation/profile-identity-segmentation-services.html#!api-specification/markdown/narrative/technical_overview/identity_namespace_overview/identity_namespace_overview.md) to Google Display & Video 360 destinations: **Google cookie ID, IDFA, GAID, Roku IDs, Microsoft IDs, Amazon Fire TV IDs**.
* Activated audiences are created programmatically in the Google platform.
* Adobe Real-time CDP does not currently include a measurement metric to validate successful activation. Refer to the audience counts in Google to validate the integration and understand data drop-off.

## Prerequisites

### Whitelisting

Before creating the Google Display & Video 360 destination in Adobe Real-time CDP, you must contact Google asking for your account to be whitelisted. Contact Google and provide the following information:

* **Account ID** : this is Adobe's account ID with Google. Contact Adobe Support to obtain this ID. 
* **Customer ID** : this is Adobe's customer account ID with Google. Contact Adobe Support to obtain this ID.
* **Partner ID** : This is your three-digit partner ID with Google;
* **Network ID** : this is your account with Google;
* **Audience Link ID** : this is your account with Google;
* **Your account type**: use **Invite advertiser** for a specific brand in your Display & Video 360 account or use **Invite partner** for all brands in your Display & Video 360 account.

## Create destination

1. In **[!UICONTROL Connections > Destinations]**, select Google Display & video 360, and select **[!UICONTROL Create destination]**.
    ![Connect Google Display & Video 360 destination](/help/rtcdp/destinations/assets/google-dv360-destination.png)

2. In the Create destination wizard, fill in the Basic Information for the destination.
    ![Basic information Google Display & Video 360](/help/rtcdp/destinations/assets/google-dv360-basic-information.png)
*  **Name**: Fill in the preferred name for this destination.
*  **Description**: Optional. For example, you can mention which campaign you are using this destination for.
*  **Account Type**: Select an option, depending on your account with Google:
   * Use `Invite Advertiser` for a specific brand in your Google Display & Video 360 account.
   * Use `Invite Partner` for all brands in your Google Display & Video 360 account.
*  **Account ID**: Fill in your account ID with Google.

>[!NOTE]
>
>When setting up a Google Display & Video 360 destination please work with your Google Account Manager or Adobe representative to understand which account type you have.

## Activate segments to Google Display & Video 360

For instructions on how to activate segments to Google Display & Video 360, see [Activate Data to Destinations](/help/rtcdp/destinations/activate-destinations.md).