---
title: Google Display & Video 360 connection
description: Display & Video 360, formerly known as DoubleClick Bid Manager is a tool used to execute retargeting and audience targeted digital campaigns across Display, Video, and Mobile inventory sources.
exl-id: bdd3b3fd-891f-44ec-bd47-daf7f3289f92
---
# [!DNL Google Display & Video 360] connection

## Overview {#overview}

[!DNL Display & Video 360], formerly known as [!DNL DoubleClick Bid Manager], is a tool used to execute retargeting and audience targeted digital campaigns across Display, Video, and Mobile inventory sources. 

## Destination specifics {#specifics}

Note the following details that are specific to [!DNL Google Display & Video 360] destinations:

* Activated audiences are created programmatically in the Google platform.
* The activation of audience backfills to the [!DNL Google Display & Video 360] destination is scheduled to occur 24-48 hours after an audience is first mapped to a destination connection. This update is in response to Google's policy to wait 24 hours until ingesting data and is meant to improve match rates between Real-Time CDP and [!DNL Google Display & Video 360]. This is a backend configuration applicable to this destination only and that is unrelated to any customer-configurable scheduling options in the UI.

>[!IMPORTANT]
>
>If you are looking to create your first destination with Google Display & Video 360 and have not enabled the [ID sync functionality](https://experienceleague.adobe.com/docs/id-service/using/id-service-api/methods/idsync.html) in Experience Cloud ID Service in the past (with Adobe Audience Manager or other applications), reach out to Adobe Consulting or Customer Care to enable ID syncs. If you had previously set up Google integrations in Audience Manager, the ID syncs you had set up carry over to Platform.

## Supported identities {#supported-identities}

[!DNL Google Display & Video 360] supports the activation of audiences based on the identities shown in the table below. Learn more about [identities](/help/identity-service/namespaces.md).

|Identity|Description|Considerations|
|---|---|---|
|GAID|[!DNL Google Advertising ID]||
|IDFA|[!DNL Apple ID for Advertisers]||
|AAM UUID|[Adobe Audience Manager [!DNL Unique User ID]](https://experienceleague.adobe.com/docs/audience-manager/user-guide/reference/ids-in-aam.html), also known as [!DNL Device ID]. A numerical, 38-digit device ID that Audience Manager associates to each device it interacts with.|Google uses [AAM UUID](https://experienceleague.adobe.com/docs/audience-manager/user-guide/reference/ids-in-aam.html) to target users in California, and the Google Cookie ID for all other users.|
|[!DNL Google] cookie ID|[!DNL Google] cookie ID|[!DNL Google] uses this ID to target users outside of California.|
|RIDA|Roku ID for Advertising. This ID uniquely identifies Roku devices.||
|MAID|Microsoft Advertising ID. This ID uniquely identifies devices running Windows 10.||
|Amazon Fire TV ID|This ID uniquely identifies Amazon Fire TVs.||

## Supported audiences {#supported-audiences}

This section describes which types of audiences you can export to this destination.

| Audience origin | Supported | Description | 
---------|----------|----------|
| [!DNL Segmentation Service] | ✓ | Audiences generated through the Experience Platform [Segmentation Service](../../../segmentation/home.md).|
| Custom uploads | ✓ | Audiences [imported](../../../segmentation/ui/overview.md#import-audience) into Experience Platform from CSV files. |

{style="table-layout:auto"}

## Export type and frequency {#export-type-frequency}

Refer to the table below for information about the destination export type and frequency.

| Item | Type | Notes |
---------|----------|---------|
| Export type | **[!UICONTROL Audience export]** | You are exporting all members of an audience to the Google destination.|
| Export frequency | **[!UICONTROL Streaming]** | Streaming destinations are "always on" API-based connections. As soon as a profile is updated in Experience Platform based on audience evaluation, the connector sends the update downstream to the destination platform. Read more about [streaming destinations](/help/destinations/destination-types.md#streaming-destinations).|

## Prerequisites {#prerequisites}

### Allow-listing {#allow-listing}

>[!NOTE]
>
>Allow-listing is mandatory before setting up your first [!DNL Google Display & Video 360] destination in Platform. Ensure the allow-listing process described below has been completed by [!DNL Google] before creating a destination.
>The exception to this rule is for [Audience Manager](https://experienceleague.adobe.com/docs/audience-manager/user-guide/aam-home.html) customers. If you have already created a connection to this Google destination in Audience Manager, then it is not necessary to go through the allow-listing process again and you can proceed to the next steps.

Before creating the [!DNL Google Display & Video 360] destination in Platform, you must contact Google asking for Adobe to be put on the list of allowed data providers, and for your account to be added to the allowlist. Contact Google and provide the following information:

* **Account ID**: Adobe's account ID with Google. Account ID: 87933855.
* **Customer ID**: Adobe's customer account ID with Google. Customer ID: 89690775.
* **Your account type**: use **[!DNL Invite advertiser]** to allow audiences to be shared only to a specific brand in your Display & Video 360 account or use **[!DNL Invite partner]** to allow audiences to be shared to all brands in your Display & Video 360 account.

## Connect to the destination {#connect}

>[!IMPORTANT]
> 
>To connect to the destination, you need the **[!UICONTROL Manage Destinations]** [access control permission](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.

To connect to this destination, follow the steps described in the [destination configuration tutorial](../../ui/connect-destination.md).

### Connection parameters {#parameters}

While [setting up](../../ui/connect-destination.md) this destination, you must provide the following information:

*  **[!UICONTROL Name]**: Fill in the preferred name for this destination.
*  **[!UICONTROL Description]**: Optional. For example, you can mention which campaign you are using this destination for.
*  **[!UICONTROL Account Type]**: Select an option, depending on your account with Google:
   * Use `Invite Advertiser` to allow audiences to be shared only to a specific brand in your Display & Video 360 account.
   * Use `Invite Partner` to allow audiences to be shared to all brands in your Display & Video 360 account.
*  **[!UICONTROL Account ID]**: Fill in your **[!DNL Invite partner]** or **[!DNL Invite advertiser]** account ID with Google. Typically, this is a six or seven digit ID.

>[!NOTE]
>
>When setting up a [!DNL Google Display & Video 360] destination, work with your [!DNL Google Account Manager] or Adobe representative to understand which account type you have.

### Enable alerts {#enable-alerts}

You can enable alerts to receive notifications on the status of the dataflow to your destination. Select an alert from the list to subscribe to receive notifications on the status of your dataflow. For more information on alerts, see the guide on [subscribing to destinations alerts using the UI](../../ui/alerts.md).

When you are finished providing details for your destination connection, select **[!UICONTROL Next]**.

## Activate audiences to this destination {#activate}

>[!IMPORTANT]
> 
>To activate data, you need the **[!UICONTROL Manage Destinations]**, **[!UICONTROL Activate Destinations]**, **[!UICONTROL View Profiles]**, and **[!UICONTROL View Segments]** [access control permissions](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.

See [Activate audience data to streaming audience export destinations](../../ui/activate-segment-streaming-destinations.md) for instructions on activating audiences to this destination.

## Exported data 

To verify if data has been exported successfully to the [!DNL Google Display & Video 360] destination, check your [!DNL Google Display & Video 360] account. If activation was successful, audiences are populated in your account.

## Troubleshooting {#troubleshooting}

### 400 Bad Request error message {#bad-request}

When configuring this destination, you may receive the following error:

`{"message":"Google Error: AuthorizationError.USER_PERMISSION_DENIED","code":"400 BAD_REQUEST"}`

This error occurs when customer accounts do not comply with the [prerequisites](#prerequisites). To fix this issue, contact Google and make sure that your account is allow-listed.