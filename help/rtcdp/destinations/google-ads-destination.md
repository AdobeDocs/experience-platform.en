---
title: Google AdsDestination
seo-title: Google Ads Destination
description: Google Ads, formerly known as Google AdWords, is an online advertising service that allows businesses to pay-per-click advertising across text-based searches, graphic displays, YouTube videos, and in-app mobile displays.
seo-description: Google Ads, formerly known as Google AdWords, is an online advertising service that allows businesses to pay-per-click advertising across text-based searches, graphic displays, YouTube videos, and in-app mobile displays.
---

# Google Ads Destination

## Overview

Google Ads, formerly known as Google AdWords, is an online advertising service that allows businesses to pay-per-click advertising across text-based searches, graphic displays, YouTube videos, and in-app mobile displays.

## Destination specs

Note the following details that are specific to Google Ads destinations:

* You can send the following [identities](https://www.adobe.io/apis/experienceplatform/home/profile-identity-segmentation/profile-identity-segmentation-services.html#!api-specification/markdown/narrative/technical_overview/identity_namespace_overview/identity_namespace_overview.md) to Google Ads destinations: **Google cookie ID, IDFA, GAID, Roku IDs, Microsoft IDs, Amazon Fire TV IDs**.
* Activated audiences are created programmatically in the Google platform.
* Adobe Real-time CDP does not currently include a measurement metric to validate successful activation. Refer to the audience counts in Google to validate the integration and understand audience targeting size.

## Prerequisites

### Existing Google Ads account

Google has paused any new Google Ads integrations with third-party vendors. You must have an existing integration with Google Ads in order to be able to perform the whitelisting steps in the next section and to create a Google Ads destination in Adobe Real-time CDP.

### Whitelisting

>[!NOTE]
>
>Whitelisting is mandatory before setting up your first Google Ads destination in Adobe Real-time CDP. Please ensure the whiltelisting process described below has been completed by Google before creating a destination.

Before creating the Google Ad Manager destination in Adobe Real-time CDP, you must contact Google asking for Adobe to be whitelisted as a data provider and your account to be whitelisted. Contact Google and provide the following information:

* **Account ID** : this is Adobe's account ID with Google. Contact Adobe Customer Care or your Adobe representative to obtain this ID.
* **Customer ID** : this is Adobe's customer account ID with Google. Contact Adobe Customer Care or your Adobe representative to obtain this ID.
* Your account type: **AdWords**
* **Google AdWords ID** : This is your ID with Google. The ID format is typically 123-456-7890.

## Create destination

1. In **[!UICONTROL Connections > Destinations]**, select Google Ads, and select **[!UICONTROL Create destination]**.
    ![Connect Google Ads destination](/help/rtcdp/destinations/assets/google-ads-destination1.png)

2. In the Create destination wizard, fill in the Basic Information for the destination.
    ![Basic information Google Ads](/help/rtcdp/destinations/assets/google-ads-basic-information1.png)
*  **Name**: Fill in the preferred name for this destination.
*  **Description**: Optional. For example, you can mention which campaign you are using this destination for.
*  **Account Type**: AdWords is the only available option.
*  **Account ID**: Fill in your account ID with Google Ads. The ID format is 123-456-7890. 

## Activate segments to Google Ads

For instructions on how to activate segments to Google Ads, see [Activate Data to Destinations](/help/rtcdp/destinations/activate-destinations.md).