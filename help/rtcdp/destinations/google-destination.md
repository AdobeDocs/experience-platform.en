---
title: Google Destination
seo-title: Google Destination
description: Adobe Real-time CDP integrates with Google to enable you to execute and activate your data across DV360, Google Ad Manager, Google AdWords, and Google AdX.
seo-description: Adobe Real-time CDP integrates with Google to enable you to execute and activate your data across DV360, Google Ad Manager, Google AdWords, and Google AdX.
---

# Google Destination

## Overview

Adobe Real-time CDP integrates with Google to enable you to execute and activate your data across DV360, Google Ad Manager, Google AdWords Display, and Google AdX.

## Destination specs

Note the following details that are specific to Google destinations:

* You can send the following [identities](https://www.adobe.io/apis/experienceplatform/home/profile-identity-segmentation/profile-identity-segmentation-services.html#!api-specification/markdown/narrative/technical_overview/identity_namespace_overview/identity_namespace_overview.md) to Google destinations: **Google cookie ID, IDFA, GAID**.
* Activated audiences are created programmatically in the Google platform.
* Adobe Real-time CDP does not currently include a measurement metric to validate successful activation. Refer to the audience counts in Google to validate the integration and understand audience targeting size.

## Prerequisites

### Whitelisting

Before connecting the Google destination in Adobe Real-time CDP, you must contact Google asking for your account to be whitelisted. Contact Google and provide the following information:

* **Account ID** : this is Adobe's account ID with Google. Contact Adobe Support to obtain this ID.
* **Customer ID** : this is Adobe's customer account ID with Google. Contact Adobe Support to obtain this ID.
* **Partner ID** : This is your three-digit partner ID with Google;
* **Network ID** : this is your account with Google;
* **Audience Link ID** : this is your account with Google;
* Your account type. This could be **Invite advertiser**, **Invite partner**, **DFP**, **AdWords**, **AdX**.


## Connect destination

1. In **[!UICONTROL Connections > Destinations]**, select Google, and select **[!UICONTROL Create destination]**.
    ![Connect Google destination](/help/rtcdp/destinations/assets/google-destination.png)

2. In the Connect destination wizard, fill in the Basic Information for the destination.
    ![Basic information Google](/help/rtcdp/destinations/assets/google-basic-information.png)
*  **Name**: Fill in the preferred name for this destination.
*  **Description**: Optional. For example, you can mention which campaign you are using this destination for.
*  **Account Type**: Select an option, depending on your account with Google:
   *  Use `Invite advertiser` for Google DV360
   * Use `Invite partner` for Google DV360
   * Use `DFP by Google` for Google Ad Manager
   * Use `AdWords` for Google AdWords Display
   * Use `AdX buyer` for Google AdX
*  **Account ID**: Fill in your account ID with Google.

>[!NOTE]
>
>When setting up a Google destination please work with your Google Account Manager or Adobe representative to understand which product type your account falls under. For Google DV360 please ask your Google Account Manager which product type your account falls under. 

## Activate segments to Google

For instructions on how to activate segments to Google, see [Activate Data to Destinations](/help/rtcdp/destinations/activate-destinations.md).