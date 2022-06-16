---
keywords: google ad manager 360;google ad;doubleclick;DoubleClick AdX;DoubleClick;Google Ad Manager;Google ad manager; DFP
title: (Beta) Google Ad Manager 360 for PPID connection
description: Google Ad Manager 360 is an ad serving platform from Google that gives publishers the means to manage the display of advertisements on their websites, through video and in mobile apps.
---
# (Beta) [!DNL Google Ad Manager 360] for PPID connection

## Overview {#overview}

The [!DNL Google Ad Manager 360 for PPID] destination enables batch upload for publisher provided identifiers ([!DNL PPID]) into Google Ad Manager 360, via Google Cloud Storage.

>[!IMPORTANT]
>
>This destination is currently in Beta and is only available to a limited number of customers. To request access to the [!DNL Google Ad Manager 360] for PPID connection, contact your Adobe representative and provide your [!DNL IMS Organization ID].

The [!DNL Google Ad Manager 360 for PPID] exports [!DNL CSV] files to your [!DNL Google Cloud Storage] bucket. Once you've exported the CSV files, you must manually import them into your [!DNL Google Ad Manager 360] account.

## Destination specifics {#specifics}

Note the following details that are specific to [!DNL Google Ad Manager 360 for PPID] destinations.

* Activated audiences are created programmatically in the [!DNL Google] platform and populated 
* [!DNL Platform] does not currently include a measurement metric to validate successful activation. Refer to the audience counts in Google to validate the integration and understand audience targeting size.

## Supported Identities {#supported-identities}

[!DNL This integration] supports the activation of identities described in the table below.

|Target Identity|Description|Considerations|
|---|---|---|
|[!DNL PPID]|[!DNL Publisher Provided ID]|Select this target identity sending audiences to Google Ad Manager 360.|

{style="table-layout:auto"}

## Export type and frequency {#export-type-frequency}

Refer to the table below for information about the destination export type and frequency.

| Item | Type | Notes |
---------|----------|---------|
| Export type | **[!UICONTROL Profile-based]** | You are exporting all members of a segment, together with the desired schema fields (for example: email address, phone number, last name), as chosen in the select profile attributes screen of the [destination activation workflow](/help/destinations/ui/activate-batch-profile-destinations.md#select-attributes).|
| Export frequency | **[!UICONTROL Batch]** | Batch destinations export files to downstream platforms in increments of three, six, eight, twelve, or twenty-four hours. Read more about [batch file-based destinations](/help/destinations/destination-types.md#file-based).|

{style="table-layout:auto"}

## Prerequisites {#prerequisites}

If you are looking to create your first destination with [!DNL Google Ad Manager 3600] and have not enabled the [ID sync functionality](https://experienceleague.adobe.com/docs/id-service/using/id-service-api/methods/idsync.html) in Experience Cloud ID Service in the past (with Audience Manager or other applications), please reach out to Adobe Consulting or Customer Care to enable ID syncs. If you had previously set up [!DNL Google] integrations in Audience Manager, the ID syncs you had set up carry over to Platform.

### Allow-listing {#allow-listing}

>[!NOTE]
>
>The allow list is mandatory before setting up your first [!DNL Google Ad Manager] destination in Platform. Please ensure the allow list process described below has been completed by [!DNL Google] before creating a destination.

Before creating the [!DNL Google Ad Manager] destination in Platform, you must contact [!DNL Google] for Adobe to be put on the list of allowed data providers, and for your account to be added to the allow list. Contact [!DNL Google] and provide the following information:

* **Account ID**: Adobe’s account ID with Google. Account ID: 87933855.
* **Customer ID**: Adobe’s customer account ID with Google. Customer ID: 89690775.
* **Network ID**: this is your account with [!DNL Google Ad Manager]
* **Audience Link ID**: this is your account with [!DNL Google Ad Manager]
* Your account type. DFP by Google or AdX buyer.

## Connect to the destination {#connect}

>[!IMPORTANT]
> 
>To connect to the destination, you need the **[!UICONTROL Manage Destinations]** [access control permission](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.

To connect to this destination, follow the steps described in the [destination configuration tutorial](../../ui/connect-destination.md).

### Connection parameters {#parameters}

While [setting up](../../ui/connect-destination.md) this destination, you must provide the following information:

*  **[!UICONTROL Name]**: Fill in the preferred name for this destination.
*  **[!UICONTROL Description]**: Optional. For example, you can mention which campaign you are using this destination for.
* **[!UICONTROL Bucket name]**: enter the name of the [!DNL Google Cloud Storage] bucket to be used by this destination.
* **[!UICONTROL Folder path]**: enter the path to the destination folder that will host the exported files.

>[!NOTE]
>
>When setting up a [!DNL Google Ad Manager] destination, please work with your [!DNL Google Account Manager] or Adobe representative to understand which account type you have.

## Activate segments to this destination {#activate}

>[!IMPORTANT]
> 
>To activate data, you need the **[!UICONTROL Manage Destinations]**, **[!UICONTROL Activate Destinations]**, **[!UICONTROL View Profiles]**, and **[!UICONTROL View Segments]** [access control permissions](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.

See [Activate audience data to streaming segment export destinations](../../ui/activate-segment-streaming-destinations.md) for instructions on activating audience segments to this destination.

## Exported data {#exported-data}

To verify if data has been exported successfully to the [!DNL Google Ad Manager] destination, check your [!DNL Google Ad Manager] account. If activation was successful, audiences are populated in your account.
