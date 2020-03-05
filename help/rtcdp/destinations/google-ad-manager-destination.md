---
title: Google Ad Manager Destination
seo-title: Google Ad Manager Destination
description: Google Ad Manager, formerly known as DoubleClick for Publishers or DoubleClick AdX, is an ad serving platform from Google that gives publishers the means to manage the display of advertisements on their websites, through video and in mobile apps. 
seo-description: Google Ad Manager, formerly known as DoubleClick for Publishers or DoubleClick AdX, is an ad serving platform from Google that gives publishers the means to manage the display of advertisements on their websites, through video and in mobile apps. 
---

# Google Ad Manager Destination

## Overview

Google Ad Manager, formerly known as DoubleClick for Publishers or DoubleClick AdX, is an ad serving platform from Google that gives publishers the means to manage the display of advertisements on their websites, through video and in mobile apps.

## Destination specs

Note the following details that are specific to Google Ad Manager destinations:

* You can send the following [identities](https://www.adobe.io/apis/experienceplatform/home/profile-identity-segmentation/profile-identity-segmentation-services.html#!api-specification/markdown/narrative/technical_overview/identity_namespace_overview/identity_namespace_overview.md) to Google Ad Manager destinations: **Google cookie ID, IDFA, GAID, Roku IDs, Microsoft IDs, Amazon Fire TV IDs**.
* Activated audiences are created programmatically in the Google platform.
* Adobe Real-time CDP does not currently include a measurement metric to validate successful activation. Refer to the audience counts in Google to validate the integration and understand data drop-off.

## Prerequisites

### Whitelisting

Before creating the Google Ad Manager destination in Adobe Real-time CDP, you must contact Google asking for your account to be whitelisted. Contact Google and provide the following information:

* **Account ID** : this is Adobe's account ID with Google. Contact Adobe Support to obtain this ID.
* **Customer ID** : this is Adobe's customer account ID with Google. Contact Adobe Support to obtain this ID.
* **Partner ID** : This is your three-digit partner ID with Google;
* **Network ID** : this is your account with Google;
* **Audience Link ID** : this is your account with Google;
* Your account type. **DFP by Google** or **AdX buyer**.

## Create destination

1. In **[!UICONTROL Connections > Destinations]**, select Google  Manager, and select **[!UICONTROL Create destination]**.
    ![Connect Google Ad Manager destination](/help/rtcdp/destinations/assets/google-ad-manager-destination1.png)

2. In the Create destination wizard, fill in the Basic Information for the destination.
    ![Basic information Google Ad Manager](/help/rtcdp/destinations/assets/google-ad-manager-basic-information1.png)
*  **Name**: Fill in the preferred name for this destination.
*  **Description**: Optional. For example, you can mention which campaign you are using this destination for.
*  **Account Type**: Select an option, depending on your account with Google:
   * Use `DFP by Google` for DoubleClick for Publishers
   * Use `AdX buyer` for Google AdX
*  **Account ID**: Fill in your account ID with Google.

>[!NOTE]
>
>When setting up a Google Ad Manager destination please work with your Google Account Manager or Adobe representative to understand which account type you have.

## Activate segments to Google Ad Manager

For instructions on how to activate segments to Google Ad Manager, see [Activate Data to Destinations](/help/rtcdp/destinations/activate-destinations.md).