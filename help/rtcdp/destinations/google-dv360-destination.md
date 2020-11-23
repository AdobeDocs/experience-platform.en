---
keywords: DoubleClick Bid Manager;DoubleClick bid manager;DoubleClick;Display & Video 360;display 360;video 360;Video 360;Display 360;display and video
title: Google Display & Video 360 Destination
seo-title: Google Display & Video 360 Destination
description: Display & Video 360, formerly known as DoubleClick Bid Manager is a tool used to execute retargeting and audience targeted digital campaigns across Display, Video and Mobile inventory sources.
seo-description: Display & Video 360, formerly known as DoubleClick Bid Manager is a tool used to execute retargeting and audience targeted digital campaigns across Display, Video and Mobile inventory sources. 
---

# [!DNL Google Display & Video 360] Destination

## Overview

[!DNL Display & Video 360], formerly known as [!DNL DoubleClick Bid Manager], is a tool used to execute retargeting and audience targeted digital campaigns across Display, Video and Mobile inventory sources. 

## Destination specs

Note the following details that are specific to [!DNL Google Display & Video 360] destinations:

* You can send the following [identities](../../identity-service/namespaces.md) to [!DNL Google Display & Video 360] destinations: Google cookie ID, IDFA, GAID, Roku IDs, Microsoft IDs, and Amazon Fire TV IDs.
* Activated audiences are created programmatically in the Google platform.
* Adobe Real-time CDP does not currently include a measurement metric to validate successful activation. Refer to the audience counts in Google to validate the integration and understand audience targeting size.

>[!IMPORTANT]
>
>If you are looking to create your first destination with Google Display & Video 360 and have not enabled the [ID sync functionality](https://experienceleague.adobe.com/docs/id-service/using/id-service-api/methods/idsync.html) in Experience Cloud ID Service in the past (with Adobe Audience Manager or other applications), please reach out to Adobe Consulting or Customer Care to enable ID syncs. If you had previously set up Google integrations in Audience Manager, the ID syncs you had set up carry over to Adobe Real-time CDP.

### Export Type {#export-type}

**Segment Export** - you are exporting all members of a segment (audience) to the Google destination.

## Prerequisites

### Allow list

>[!NOTE]
>
>The allow list is mandatory before setting up your first [!DNL Google Display & Video 360] destination in Adobe Real-time CDP. Please ensure the allow list process described below has been completed by Google before creating a destination.

Before creating the [!DNL Google Display & Video 360] destination in Adobe Real-time CDP, you must contact Google asking for Adobe to be put on the list of allowed data providers, and for your account to be added to the allow list. Contact Google and provide the following information:

* **Account ID** : this is Adobe's account ID with Google. Contact Adobe Customer Care or your Adobe representative to obtain this ID.
* **Customer ID** : this is Adobe's customer account ID with Google. Contact Adobe Customer Care or your Adobe representative to obtain this ID.
* **Your account type**: use **[!DNL Invite advertiser]** to allow audiences to be shared only to a specific brand in your Display & Video 360 account or use **[!DNL Invite partner]** to allow audiences to be shared to all brands in your Display & Video 360 account.

## Configure destination

1. In **[!UICONTROL Connections]** > **[!UICONTROL Destinations]**, select [!DNL Google Display & Video 360], and select **[!UICONTROL Configure]**.
    ![Connect Google Display & Video 360 destination](/help/rtcdp/destinations/assets/google-dv360-destination.png)
    
    >[!NOTE]
    >
    >If a connection with this destination already exists, you can see an **[!UICONTROL Activate]** button on the destination card. For more information about the difference between [!UICONTROL Activate] and [!UICONTROL Configure], refer to the [Catalog](/help/rtcdp/destinations/destinations-workspace.md#catalog) section of the destination workspace documentation.  

2. In the **Setup** step of the create destination workflow, fill in the [!UICONTROL Basic Information] for the destination, as well as the marketing use cases that should apply to this destination. <br>
    ![Basic information Google Display & Video 360](/help/rtcdp/destinations/assets/dv360-setup-step.png)
*  **[!UICONTROL Name]**: Fill in the preferred name for this destination.
*  **[!UICONTROL Description]**: Optional. For example, you can mention which campaign you are using this destination for.
*  **[!UICONTROL Account Type]**: Select an option, depending on your account with Google:
   * Use `Invite Advertiser` to allow audiences to be shared only to a specific brand in your Display & Video 360 account.
   * Use `Invite Partner` to allow audiences to be shared to all brands in your Display & Video 360 account.
*  **[!UICONTROL Account ID]**: Fill in your **[!DNL Invite partner]** or **[!DNL Invite advertiser]** account ID with Google. Typically, this is a six or seven digit ID.
*  **[!UICONTROL Marketing use case]**: Marketing use cases indicate the intent for which data will be exported to the destination. You can select from Adobe-defined marketing use cases or you can create your own marketing use case. For more information about marketing use cases, see the [Data Governance in Real-time CDP](/help/rtcdp/privacy/data-governance-overview.md#destinations) page. For information about the individual Adobe-defined marketing use cases, see the [Data usage policies overview](/help/data-governance/policies/overview.md#core-actions).  

>[!NOTE]
>
>When setting up a [!DNL Google Display & Video 360] destination please work with your [!DNL Google Account Manager] or Adobe representative to understand which account type you have.

## Activate segments to [!DNL Google Display & Video 360]

For instructions on how to activate segments to [!DNL Google Display & Video 360], see [Activate Data to Destinations](/help/rtcdp/destinations/activate-destinations.md).

## Exported data 

To verify if data has been exported successfully to the [!DNL Google Display & Video 360] destination, check your [!DNL Google Display & Video 360] account. If activation was successful, audiences are populated in your account.