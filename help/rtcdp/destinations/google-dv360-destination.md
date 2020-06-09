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

* You can send the following [identities](../../identity-service/namespaces.md) to Google Display & Video 360 destinations: **Google cookie ID, IDFA, GAID, Roku IDs, Microsoft IDs, Amazon Fire TV IDs**.
* Activated audiences are created programmatically in the Google platform.
* Adobe Real-time CDP does not currently include a measurement metric to validate successful activation. Refer to the audience counts in Google to validate the integration and understand audience targeting size.

>[!IMPORTANT]
>
>If you are looking to create your first destination with Google Display & Video 360 and have not enabled the [ID sync functionality](https://docs.adobe.com/content/help/en/id-service/using/id-service-api/methods/idsync.html) in Experience Cloud ID Service in the past (with Adobe Audience Manager or other applications), please reach out to Adobe Consulting or Customer Care to enable ID syncs. If you had previously set up Google integrations in Audience Manager, the ID syncs you had set up carry over to Adobe Real-time CDP.

## Prerequisites

### Allow list

>[!NOTE]
>
>The allow list is mandatory before setting up your first Google Display & Video 360 destination in Adobe Real-time CDP. Please ensure the allow list process described below has been completed by Google before creating a destination.

Before creating the Google Display & Video 360 destination in Adobe Real-time CDP, you must contact Google asking for Adobe to be put on the allow list as a data provider and your account to be allow listed. Contact Google and provide the following information:

* **Account ID** : this is Adobe's account ID with Google. Contact Adobe Customer Care or your Adobe representative to obtain this ID.
* **Customer ID** : this is Adobe's customer account ID with Google. Contact Adobe Customer Care or your Adobe representative to obtain this ID.
* **Your account type**: use **[!DNL Invite advertiser]** to allow audiences to be shared only to a specific brand in your Display & Video 360 account or use **[!DNL Invite partner]** to allow audiences to be shared to all brands in your Display & Video 360 account.

## Create destination

1. In **[!UICONTROL Connections > Destinations]**, select Google Display & Video 360, and select **[!UICONTROL Create destination]**.
    ![Connect Google Display & Video 360 destination](/help/rtcdp/destinations/assets/google-dv360-destination.png)

2. In the Create destination workflow, fill in the [!UICONTROL Basic Information] for the destination. <br>
    ![Basic information Google Display & Video 360](/help/rtcdp/destinations/assets/google-dv360-basic-information.png)
*  **[!UICONTROL Name]**: Fill in the preferred name for this destination.
*  **[!UICONTROL Description]**: Optional. For example, you can mention which campaign you are using this destination for.
*  **[!UICONTROL Account Type]**: Select an option, depending on your account with Google:
   * Use `Invite Advertiser` to allow audiences to be shared only to a specific brand in your Display & Video 360 account.
   * Use `Invite Partner` to allow audiences to be shared to all brands in your Display & Video 360 account.
*  **[!UICONTROL Account ID]**: Fill in your **[!DNL Invite partner]** or **[!DNL Invite advertiser]** account ID with Google. Typically, this is a six or seven digit ID.

>[!NOTE]
>
>When setting up a Google Display & Video 360 destination please work with your Google Account Manager or Adobe representative to understand which account type you have.

## Activate segments to Google Display & Video 360

For instructions on how to activate segments to Google Display & Video 360, see [Activate Data to Destinations](/help/rtcdp/destinations/activate-destinations.md).