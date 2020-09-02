---
keywords: google ad manager;google ad;doubleclick;DoubleClick AdX;DoubleClick;Google Ad Manager;Google ad manager
title: Google Ad Manager Destination
seo-title: Google Ad Manager Destination
description: Google Ad Manager, formerly known as DoubleClick for Publishers or DoubleClick AdX, is an ad serving platform from Google that gives publishers the means to manage the display of advertisements on their websites, through video and in mobile apps. 
seo-description: Google Ad Manager, formerly known as DoubleClick for Publishers or DoubleClick AdX, is an ad serving platform from Google that gives publishers the means to manage the display of advertisements on their websites, through video and in mobile apps. 
---

# [!DNL Google Ad Manager Destination]

## Overview

[!DNL Google Ad Manager], formerly known as [!DNL DoubleClick] for Publishers or [!DNL DoubleClick AdX], is an ad serving platform from [!DNL Google] that gives publishers the means to manage the display of advertisements on their websites, through video and in mobile apps.

## Destination specs

Note the following details that are specific to [!DNL Google Ad Manager] destinations:

* You can send the following [identities](../../identity-service/namespaces.md) to [!DNL Google Ad Manager] destinations: **Google cookie ID, IDFA, GAID, Roku IDs, Microsoft IDs, Amazon Fire TV IDs**.
* Activated audiences are created programmatically in the [!DNL Google] platform.
* Adobe Real-time CDP does not currently include a measurement metric to validate successful activation. Refer to the audience counts in Google to validate the integration and understand audience targeting size.

>[!IMPORTANT]
>
>If you are looking to create your first destination with [!DNL Google Ad Manager] and have not enabled the [ID sync functionality](https://docs.adobe.com/content/help/en/id-service/using/id-service-api/methods/idsync.html) in Experience Cloud ID Service in the past (with Audience Manager or other applications), please reach out to Adobe Consulting or Customer Care to enable ID syncs. If you had previously set up [!DNL Google] integrations in Audience Manager, the ID syncs you had set up carry over to Adobe Real-time CDP.

## Prerequisites

### Allow list

>[!NOTE]
>
>The allow list is mandatory before setting up your first [!DNL Google Ad Manager] destination in Adobe Real-time CDP. Please ensure the allow list process described below has been completed by [!DNL Google] before creating a destination.

Before creating the [!DNL Google Ad Manager] destination in Adobe Real-time CDP, you must contact [!DNL Google] for Adobe to be put on the list of allowed data providers, and for your account to be added to the allow list. Contact [!DNL Google] and provide the following information:

* **Account ID** : this is Adobe's account ID with [!DNL Google]. Contact Adobe Customer Care or your Adobe representative to obtain this ID.
* **Customer ID** : this is Adobe's customer account ID with [!DNL Google]. Contact Adobe Customer Care or your Adobe representative to obtain this ID.
* **Network ID** : this is your account with [!DNL Google Ad Manager]
* **Audience Link ID** : this is your account with [!DNL Google Ad Manager]
* Your account type. DFP by Google or AdX buyer.

## Configure destination

1. In **[!UICONTROL Connections]** > **[!UICONTROL Destinations]**, select **[!DNL Google Ad Manager]**, and select **[!UICONTROL Configure]**.
    ![Connect Google Ad Manager destination](/help/rtcdp/destinations/assets/google-1-destination.png)

    >[!NOTE]
    >
    >If a connection with this destination already exists, you can see an **[!UICONTROL Activate]** button on the destination card. For more information about the difference between **[!UICONTROL Activate]** and **[!UICONTROL Configure]**, refer to the [Catalog](/help/rtcdp/destinations/destinations-workspace.md#catalog) section of the destination workspace documentation.  

2. In the **Setup** step of the create destination workflow, fill in the [!UICONTROL Basic Information] for the destination. <br>
    ![Basic information Google Ad Manager](/help/rtcdp/destinations/assets/google-1-destination-setup-step.png)
*  **[!UICONTROL Name]**: Fill in the preferred name for this destination.
*  **[!UICONTROL Description]**: Optional. For example, you can mention which campaign you are using this destination for.
*  **[!UICONTROL Account Type]**: Select an option, depending on your account with Google:
   * Use `DFP by Google` for [!DNL DoubleClick] for Publishers
   * Use `AdX buyer` for [!DNL Google AdX]
*  **[!UICONTROL Account ID]**: Fill in your account ID with [!DNL Google]. This can be your Network ID or your Audience Link ID. Typically, this is an eight digit ID.
*  **[!UICONTROL Marketing use case]**: Marketing use cases indicate the intent for which data will be exported to the destination. You can select from Adobe-defined marketing use cases or you can create your own marketing use case. For more information about marketing use cases, see the [Data Governance in Real-time CDP](/help/rtcdp/privacy/data-governance-overview.md#destinations) page. For information about the individual Adobe-defined marketing use cases, see the [Data usage policies overview](/help/data-governance/policies/overview.md#core-actions).  

>[!NOTE]
>
> When setting up a [!DNL Google Ad Manager] destination please work with your [!DNL Google Account Manager] or Adobe representative to understand which account type you have.

## Activate segments to [!DNL Google Ad Manager]

For instructions on how to activate segments to [!DNL Google Ad Manager], see [Activate Data to Destinations](/help/rtcdp/destinations/activate-destinations.md).

## Exported data 

To verify if data has been exported successfully to the [!DNL Google Ad Manager] destination, check your [!DNL Google Ad Manager] account. If activation was successful, audiences are populated in your account.