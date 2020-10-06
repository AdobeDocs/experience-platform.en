---
keywords: Google ads;google ads;google adwords;Google AdWords;Google Adwords
title: Google AdsDestination
seo-title: Google Ads Destination
description: Google Ads, formerly known as Google AdWords, is an online advertising service that allows businesses to pay-per-click advertising across text-based searches, graphic displays, YouTube videos, and in-app mobile displays.
seo-description: Google Ads, formerly known as Google AdWords, is an online advertising service that allows businesses to pay-per-click advertising across text-based searches, graphic displays, YouTube videos, and in-app mobile displays.
---

# [!DNL Google Ads] Destination

## Overview

[!DNL Google Ads], formerly known as [!DNL Google AdWords], is an online advertising service that allows businesses to pay-per-click advertising across text-based searches, graphic displays, [!DNL YouTube] videos, and in-app mobile displays.

## Destination specs

Note the following details that are specific to [!DNL Google Ads] destinations:

* You can send the following [identities](../../identity-service/namespaces.md) to [!DNL Google Ads] destinations: **Google cookie ID, IDFA, GAID, Roku IDs, Microsoft IDs, Amazon Fire TV IDs**.
* Activated audiences are created programmatically in the [!DNL Google] platform.
* Adobe Real-time CDP does not currently include a measurement metric to validate successful activation. Refer to the audience counts in Google to validate the integration and understand audience targeting size.

>[!IMPORTANT]
>
>If you are looking to create your first destination with [!DNL Google Ads] and have not enabled the [ID sync functionality](https://docs.adobe.com/content/help/en/id-service/using/id-service-api/methods/idsync.html) in Experience Cloud ID Service in the past (with Audience Manager or other applications), please reach out to Adobe Consulting or Customer Care to enable ID syncs. If you had previously set up Google integrations in Audience Manager, the ID syncs you had set up carry over to Adobe Real-time CDP.

### Export Type {#export-type}

**Segment Export** - you are exporting all members of a segment (audience) to the Google destination.

## Prerequisites

### Existing [!DNL Google Ads] account

[!DNL Google] has paused any new [!DNL Google Ads] integrations with third-party vendors. You must have an existing integration with [!DNL Google Ads] in order to be able to perform the allow list steps in the next section and to create a [!DNL Google Ads] destination in Adobe Real-time CDP.

### Allow list

>[!NOTE]
>
>The allow list is mandatory before setting up your first [!DNL Google Ads] destination in Adobe Real-time CDP. Please ensure the allow list process described below has been completed by [!DNL Google] before creating a destination.

Before creating the [!DNL Google Ads] destination in Adobe Real-time CDP, you must contact [!DNL Google] for Adobe to be put on the list of allowed data providers, and for your account to be added to the allow list. Contact [!DNL Google] and provide the following information:

* **Account ID** : this is Adobe's account ID with [!DNL Google]. Contact Adobe Customer Care or your Adobe representative to obtain this ID.
* **Customer ID** : this is Adobe's customer account ID with [!DNL Google]. Contact Adobe Customer Care or your Adobe representative to obtain this ID.
* Your account type: **AdWords**
* **Google AdWords ID** : This is your ID with [!DNL Google]. The ID format is typically 123-456-7890.

## Configure destination

1. In **[!UICONTROL Connections]** > **[!UICONTROL Destinations]**, select [!DNL Google Ads], and select **[!UICONTROL Configure]**.
    ![Connect Google Ads destination](/help/rtcdp/destinations/assets/google-2-destination.png)

    >[!NOTE]
    >
    >If a connection with this destination already exists, you can see an **[!UICONTROL Activate]** button on the destination card. For more information about the difference between **[!UICONTROL Activate]** and **[!UICONTROL Configure]**, refer to the [Catalog](/help/rtcdp/destinations/destinations-workspace.md#catalog) section of the destination workspace documentation.  

2. In the **Setup** step of the create destination workflow, fill in the [!UICONTROL Basic Information] for the destination. <br>
    ![Basic information Google Ads](/help/rtcdp/destinations/assets/google-2-destination-setup-step.png)
*  **[!UICONTROL Name]**: Fill in the preferred name for this destination.
*  **[!UICONTROL Description]**: Optional. For example, you can mention which campaign you are using this destination for.
*  **[!UICONTROL Account Type]**: AdWords is the only available option.
*  **[!UICONTROL Account ID]**: Fill in your account ID with [!DNL Google Ads]. The ID format is typically 123-456-7890. 
*  **[!UICONTROL Marketing use case]**: Marketing use cases indicate the intent for which data will be exported to the destination. You can select from Adobe-defined marketing use cases or you can create your own marketing use case. For more information about marketing use cases, see the [Data Governance in Real-time CDP](/help/rtcdp/privacy/data-governance-overview.md#destinations) page. For information about the individual Adobe-defined marketing use cases, see the [Data usage policies overview](/help/data-governance/policies/overview.md#core-actions).  

## Activate segments to [!DNL Google Ads]

For instructions on how to activate segments to [!DNL Google Ads], see [Activate Data to Destinations](/help/rtcdp/destinations/activate-destinations.md).

## Exported data 

To verify if data has been exported successfully to the [!DNL Google Ads] destination, check your [!DNL Google Ads] account. If activation was successful, audiences are populated in your account.