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

* You can send the following [identities](../../identity-service/namespaces.md) to Google Ad Manager destinations: **Google cookie ID, IDFA, GAID, Roku IDs, Microsoft IDs, Amazon Fire TV IDs**.
* Activated audiences are created programmatically in the Google platform.
* Adobe Real-time CDP does not currently include a measurement metric to validate successful activation. Refer to the audience counts in Google to validate the integration and understand audience targeting size.

>[!IMPORTANT]
>
>If you are looking to create your first destination with Google Ad Manager and have not enabled the [ID sync functionality](https://docs.adobe.com/content/help/en/id-service/using/id-service-api/methods/idsync.html) in Experience Cloud ID Service in the past (with Audience Manager or other applications), please reach out to Adobe Consulting or Customer Care to enable ID syncs. If you had previously set up Google integrations in Audience Manager, the ID syncs you had set up carry over to Adobe Real-time CDP.

## Prerequisites

### Allow list

>[!NOTE]
>
>The allow list is mandatory before setting up your first Google Ad Manager destination in Adobe Real-time CDP. Please ensure the allow list process described below has been completed by Google before creating a destination.

Before creating the Google Ad Manager destination in Adobe Real-time CDP, you must contact Google for Adobe to be put on the list of allowed data providers, and for your account to be added to the allow list. Contact Google and provide the following information:

* **Account ID** : this is Adobe's account ID with Google. Contact Adobe Customer Care or your Adobe representative to obtain this ID.
* **Customer ID** : this is Adobe's customer account ID with Google. Contact Adobe Customer Care or your Adobe representative to obtain this ID.
* **Network ID** : this is your account with Google Ad Manager
* **Audience Link ID** : this is your account with Google Ad Manager
* Your account type. **DFP by Google** or **AdX buyer**.

## Create destination

1. In **[!UICONTROL Connections > Destinations]**, select Google Ad Manager, and select **[!UICONTROL Create destination]**.
    ![Connect Google Ad Manager destination](/help/rtcdp/destinations/assets/google-1-destination.png)

2. In the **Setup** step of the create destination workflow, fill in the [!UICONTROL Basic Information] for the destination. <br>
    ![Basic information Google Ad Manager](/help/rtcdp/destinations/assets/ad-manager-setup-step.png)
*  **[!UICONTROL Name]**: Fill in the preferred name for this destination.
*  **[!UICONTROL Description]**: Optional. For example, you can mention which campaign you are using this destination for.
*  **[!UICONTROL Account Type]**: Select an option, depending on your account with Google:
   * Use `DFP by Google` for DoubleClick for Publishers
   * Use `AdX buyer` for Google AdX
*  **[!UICONTROL Account ID]**: Fill in your account ID with Google. This can be your Network ID or your Audience Link ID. Typically, this is an eight digit ID.
*  **[!UICONTROL Marketing use case]**: You can select from Adobe-defined marketing use cases or you can create your own marketing use case. For more information about marketing use cases, see the [Data Governance in Real-time CDP](/help/rtcdp/privacy/data-governance-overview.md) page. For information about the individual Adobe-defined marketing use cases, see the [Data usage policies overview](/help/data-governance/policies/overview.md#core-actions).  

    >[!NOTE]
    >
    >When setting up a Google Ad Manager destination please work with your Google Account Manager or Adobe representative to understand which account type you have.
3. Your destination is now created. You can select **[!UICONTROL Save & Exit]** if you want to activate segments later on or you can select **[!UICONTROL Next]** to continue the workflow and select segments to activate. In either case, see the next section, Activate segments to Google Ad Manager for the rest of the workflow.

## Activate segments to Google Ad Manager

For instructions on how to activate segments to Google Ad Manager, see [Activate Data to Destinations](/help/rtcdp/destinations/activate-destinations.md).