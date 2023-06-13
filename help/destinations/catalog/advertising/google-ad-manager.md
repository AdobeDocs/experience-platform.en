---
keywords: google ad manager;google ad;doubleclick;DoubleClick AdX;DoubleClick;Google Ad Manager;Google ad manager; DFP
title: Google Ad Manager connection
description: Google Ad Manager, formerly known as DoubleClick for Publishers or DoubleClick AdX, is an ad serving platform from Google that gives publishers the means to manage the display of advertisements on their websites, through video and in mobile apps.
exl-id: e93f1bd5-9d29-43a1-a9a6-8933f9d85150
---
# [!DNL Google Ad Manager] connection

## Overview {#overview}

[!DNL Google Ad Manager], formerly known as [!DNL DoubleClick for Publishers] (DFP) or [!DNL DoubleClick AdX], is an ad serving platform from [!DNL Google] that gives publishers the means to manage the display of advertisements on their websites, through video and in mobile apps.

## Destination specifics {#specifics}

Note the following details that are specific to [!DNL Google Ad Manager] destinations:

* Activated audiences are created programmatically in the [!DNL Google] platform.
* [!DNL Platform] does not currently include a measurement metric to validate successful activation. Refer to the audience counts in Google to validate the integration and understand audience targeting size.
* After mapping an audience to a [!DNL Google Ad Manager] destination, the audience name appears immediately in the [!DNL Google Ad Manager] user interface.
* Segment population needs 24-48 hours to appear in [!DNL Google Ad Manager]. Additionally, segments must have an audience size of at least 50 profiles in order to be displayed in [!DNL Google Ad Manager]. Segments with audience sizes smaller than 50 profiles will not be populated in [!DNL Google Ad Manager].

## Supported Identities {#supported-identities}

[!DNL Google Ad Manager] supports the activation of identities described in the table below.

|Target Identity|Description|Considerations|
|---|---|---|
|GAID|[!DNL Google Advertising ID]|Select this target identity when your source identity is a GAID namespace.|
|IDFA|[!DNL Apple ID for Advertisers]|Select this target identity when your source identity is an IDFA namespace.|
|AAM UUID|[Adobe Audience Manager [!DNL Unique User ID]](https://experienceleague.adobe.com/docs/audience-manager/user-guide/reference/ids-in-aam.html), also known as [!DNL Device ID]. A numerical, 38-digit device ID that Audience Manager associates to each device it interacts with.|Google uses [AAM UUID](https://experienceleague.adobe.com/docs/audience-manager/user-guide/reference/ids-in-aam.html?lang=en) to target users in California, and the Google Cookie ID for all other users.|
|[!DNL Google] cookie ID|[!DNL Google] cookie ID|[!DNL Google] uses this ID to target users outside of California.|
|RIDA|Roku ID for Advertising. This ID uniquely identifies Roku devices.||
|MAID|Microsoft Advertising ID. This ID uniquely identifies devices running Windows 10.||
|Amazon Fire TV ID|This ID uniquely identifies Amazon Fire TVs.||

{style="table-layout:auto"}

## Supported audiences {#supported-audiences}

This section describes all the audiences that you can export to this destination.

All destinations support the activation of audiences generated through the Experience Platform [Segmentation Service](../../../segmentation/home.md).

Additionally, this destination also supports the activation of the audiences described in the table below.

| Audience type | Description | 
---------|----------|
| Custom uploads | Audiences ingested into Experience Platform from CSV files. |

{style="table-layout:auto"}

## Export type and frequency {#export-type-frequency}

Refer to the table below for information about the destination export type and frequency.

| Item | Type | Notes |
---------|----------|---------|
| Export type | **[!UICONTROL Audience export]** | You are exporting all members of an audience to the Google destination.|
| Export frequency | **[!UICONTROL Streaming]** | Streaming destinations are "always on" API-based connections. As soon as a profile is updated in Experience Platform based on audience evaluation, the connector sends the update downstream to the destination platform. Read more about [streaming destinations](/help/destinations/destination-types.md#streaming-destinations).|

{style="table-layout:auto"}

## Prerequisites {#prerequisites}

If you are looking to create your first destination with [!DNL Google Ad Manager] and have not enabled the [ID sync functionality](https://experienceleague.adobe.com/docs/id-service/using/id-service-api/methods/idsync.html) in Experience Cloud ID Service in the past (with Audience Manager or other applications), please reach out to Adobe Consulting or Customer Care to enable ID syncs. If you had previously set up [!DNL Google] integrations in Audience Manager, the ID syncs you had set up carry over to Platform.

### Allow-listing {#allow-listing}

Allow-listing is mandatory before setting up your first [!DNL Google Ad Manager] destination in Platform. Make sure to complete the allow-listing process described below, before creating your destination.

1. Follow the steps described in the [Google Ad Manager documentation](https://support.google.com/admanager/answer/3289669?hl=en) to add Adobe as a linked Data Management Platform (DMP).
2. In the [!DNL Google Ad Manager] interface, go to **[!UICONTROL Admin]** > **[!UICONTROL Global Settings]** > **[!UICONTROL Network Settings]**, and enable the **[!UICONTROL API Access]** slider.

## Connect to the destination {#connect}

>[!IMPORTANT]
> 
>To connect to the destination, you need the **[!UICONTROL Manage Destinations]** [access control permission](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.

To connect to this destination, follow the steps described in the [destination configuration tutorial](../../ui/connect-destination.md).

### Connection parameters {#parameters}

>[!CONTEXTUALHELP]
>id="platform_destinations_gam_appendSegmentID"
>title="Append audience ID to audience name"
>abstract="Select this option to have the audience name in Google Ad Manager include the audience ID from Experience Platform, like this: `Audience Name (Audience ID)`"

While [setting up](../../ui/connect-destination.md) this destination, you must provide the following information:

*  **[!UICONTROL Name]**: Fill in the preferred name for this destination.
*  **[!UICONTROL Description]**: Optional. For example, you can mention which campaign you are using this destination for.
*  **[!UICONTROL Account ID]**: Enter your [!DNL Audience Link ID] from your [!DNL Google] account. This is a specific identifier associated with your [!DNL Google Ad Manager] network (not your [!DNL Network code]). You can find this under **[!UICONTROL Admin > Global settings]** in the [!DNL Google Ad Manager] interface.
*  **[!UICONTROL Account Type]**: Select an option, depending on your account with Google:
   * Use `DFP by Google` for [!DNL DoubleClick] for Publishers
   * Use `AdX buyer` for [!DNL Google AdX]
*  **[!UICONTROL Append audience ID to audience name]**: Select this option to have the audience name in Google Ad Manager include the audience ID from Experience Platform, like this: `Audience Name (Audience ID)`.

>[!NOTE]
>
>When setting up a [!DNL Google Ad Manager] destination, please work with your [!DNL Google Account Manager] or Adobe representative to understand which account type you have.

### Enable alerts {#enable-alerts}

You can enable alerts to receive notifications on the status of the dataflow to your destination. Select an alert from the list to subscribe to receive notifications on the status of your dataflow. For more information on alerts, see the guide on [subscribing to destinations alerts using the UI](../../ui/alerts.md).

When you are finished providing details for your destination connection, select **[!UICONTROL Next]**.

## Activate audiences to this destination {#activate}

>[!IMPORTANT]
> 
>To activate data, you need the **[!UICONTROL Manage Destinations]**, **[!UICONTROL Activate Destinations]**, **[!UICONTROL View Profiles]**, and **[!UICONTROL View Segments]** [access control permissions](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.

See [Activate audience data to streaming audience export destinations](../../ui/activate-segment-streaming-destinations.md) for instructions on activating audiences to this destination.

## Exported data {#exported-data}

To verify if data has been exported successfully to the [!DNL Google Ad Manager] destination, check your [!DNL Google Ad Manager] account. If activation was successful, audiences are populated in your account.

## Troubleshooting {#troubleshooting}

In case you encounter any errors while using this destination and need to reach out to either Adobe or Google, keep the following IDs at hand.

These are Adobe's Google Account IDs:

* **[!UICONTROL Account ID]**: 87933855
* **[!UICONTROL Customer ID]**: 89690775