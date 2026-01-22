---
keywords: advertising; the trade desk; advertising trade desk
title: The Trade Desk connection
description: The Trade Desk is a self-service platform for ad buyers to execute retargeting and audience-targeted digital campaigns across display, video, and mobile inventory sources.
exl-id: b8f638e8-dc45-4aeb-8b4b-b3fa2906816d
---
# [!DNL The Trade Desk] connection

## Overview {#overview}


>[!IMPORTANT]
>
> Identity mappings for this destination are **preconfigured and automatically populated**. See the [mandatory mapping](#mandatory-mappings) section for details on which identities can be used for activation.

Use this destination connector to send profile data to [!DNL The Trade Desk]. This connector sends data to the [!DNL The Trade Desk] first-party endpoint. The integration between Adobe Experience Platform and [!DNL The Trade Desk] does not support exporting data to the [!DNL The Trade Desk] third-party endpoint.

[!DNL The Trade Desk] is a self-service platform for ad buyers to execute retargeting and audience-targeted digital campaigns across display, video, and mobile inventory sources.

To send profile data to [!DNL The Trade Desk], you must first connect to the destination, as described in the following sections of this page.

## Use cases {#use-cases}

As a marketer, I want to be able to use audiences built off of [!DNL Trade Desk IDs] or device IDs to create retargeting or audience-targeted digital campaigns.

## Supported identities {#supported-identities}

[!DNL The Trade Desk] supports the activation of audiences based on the identities shown in the table below. Learn more about [identities](/help/identity-service/features/namespaces.md).

Below are the identities supported by [!DNL The Trade Desk] destination. These identities can be used to activate audiences to [!DNL The Trade Desk].

All identities in the table below are mandatory mappings.

|Target identity|Description|Considerations|
|---|---|---|
|[!DNL GAID]|Google Advertising ID|Select the GAID target identity when your source identity is a GAID namespace.|
|[!DNL IDFA]|Apple ID for Advertisers|Select the IDFA target identity when your source identity is an IDFA namespace.|
|[!DNL ECID]|Experience Cloud ID|This identity is mandatory for the integration to work correctly but is not used for audience activation.|
| [!DNL Tradedesk] |[!DNL TDID] in the [!DNL The Trade Desk] platform|To use this identity, your profile must have an ECID, and an ECID-to-Trade Desk ID mapping must be sent to Adobe and processed before activation.|

{style="table-layout:auto"}

## Supported audiences {#supported-audiences}

This section describes which types of audiences you can export to this destination.

| Audience origin | Supported | Description | 
|---------|----------|----------|
| [!DNL Segmentation Service] | ✓ | Audiences generated through the Experience Platform [Segmentation Service](../../../segmentation/home.md).|
| Custom uploads | ✓ | Audiences [imported](../../../segmentation/ui/audience-portal.md#import-audience) into Experience Platform from CSV files. |

{style="table-layout:auto"}

## Export type and frequency {#export-type-frequency}

Refer to the table below for information about the destination export type and frequency.

| Item | Type | Notes |
|---------|----------|---------|
| Export type | **[!UICONTROL Audience export]** | You are exporting all members of an audience to the destination.|
| Export frequency | **[!UICONTROL Streaming]** | Streaming destinations are "always on" API-based connections. As soon as a profile is updated in Experience Platform based on audience evaluation, the connector sends the update downstream to the destination platform. Read more about [streaming destinations](/help/destinations/destination-types.md#streaming-destinations).|

{style="table-layout:auto"}

## Prerequisites {#prerequisites}

>[!IMPORTANT]
>
>If you are looking to create your first destination with [!DNL The Trade Desk] and have not enabled the [ID sync functionality](https://experienceleague.adobe.com/en/docs/id-service/using/id-service-api/methods/idsync) in Experience Cloud ID Service in the past (with Adobe Audience Manager or other applications), please reach out to Adobe Consulting or Customer Care to enable ID syncs. If you had previously set up [!DNL The Trade Desk] integrations in Audience Manager, the ID syncs you had set up carry over to Experience Platform.

## Connect to the destination {#connect}

>[!IMPORTANT]
> 
>To connect to the destination, you need the **[!UICONTROL View Destinations]** and **[!UICONTROL Manage Destinations]** [access control permissions](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.

To connect to this destination, follow the steps described in the [destination configuration tutorial](../../ui/connect-destination.md).

### Connection parameters {#parameters}

While [setting up](../../ui/connect-destination.md) this destination, you must provide the following information:

* **[!UICONTROL Name]**: A name by which you will recognize this destination in the future.
* **[!UICONTROL Description]**: A description that will help you identify this destination in the future.
* **[!UICONTROL Account ID]**: Your [!DNL The Trade Desk] [!UICONTROL Account ID].
* **[!UICONTROL Server Location]**: Ask your [!DNL The Trade Desk] representative which regional server you should use. Below are the available regional servers that you can choose from:

  * **[!UICONTROL APAC]**
  * **[!UICONTROL China]**
  * **[!UICONTROL Tokyo]**
  * **[!UICONTROL UK/EU]**
  * **[!UICONTROL US East Coast]**
  * **[!UICONTROL US West Coast]**

### Enable alerts {#enable-alerts}

You can enable alerts to receive notifications on the status of the dataflow to your destination. Select an alert from the list to subscribe to receive notifications on the status of your dataflow. For more information on alerts, see the guide on [subscribing to destinations alerts using the UI](../../ui/alerts.md).

When you are finished providing details for your destination connection, select **[!UICONTROL Next]**.

## Activate audiences to this destination {#activate}

>[!IMPORTANT]
> 
>* To activate data, you need the **[!UICONTROL View Destinations]**, **[!UICONTROL Activate Destinations]**, **[!UICONTROL View Profiles]**, and **[!UICONTROL View Segments]** [access control permissions](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.
>* To export *identities*, you need the **[!UICONTROL View Identity Graph]** [access control permission](/help/access-control/home.md#permissions). <br> ![Select identity namespace highlighted in the workflow to activate audiences to destinations.](/help/destinations/assets/overview/export-identities-to-destination.png "Select identity namespace highlighted in the workflow to activate audiences to destinations."){width="100" zoomable="yes"}

See [Activate audience data to streaming audience export destinations](../../ui/activate-segment-streaming-destinations.md) for instructions on activating audiences to this destination.

In the [Audience schedule](../../ui/activate-segment-streaming-destinations.md#scheduling) step, you must manually map your audiences to their corresponding ID or friendly name in the destination platform.

When mapping audiences, Adobe recommends that you use the Experience Platform audience name or a shorter form of it, for ease of use. However, the audience ID or name in your destination does not need to match the one in your Experience Platform account. Any value you insert in the mapping field will be reflected by the destination.

### Mandatory mappings {#mandatory-mappings}

>[!CONTEXTUALHELP]
>id="platform_destinations_required_mappings_ttd"
>title="Preconfigured mapping sets"
>abstract="We have preconfigured these four mapping sets for you. As you activate data to Trade Desk, the profiles qualified for the activated audiences do not necessarily need to have all four identities present on the profiles, as this destination will work with any of the target identities shown here."

The following identity mappings are **preconfigured and automatically populated** during the audience activation workflow:

* [!DNL GAID] (Google Advertising ID)
* [!DNL IDFA] (Apple ID for Advertisers)
* [!DNL ECID] (Experience Cloud ID)
* [!DNL The Trade Desk ID]

![Screenshot showing the mandatory mappings](../../assets/catalog/advertising/tradedesk/mandatory-mappings.png)

These mappings are grayed out and read-only. You do not need to configure anything in this step. Select **[!UICONTROL Next]** to continue.

The mappings cover all ID types that can be used by this destination. Profiles will be activated based on the identities present in the profile:

* Profiles with [!DNL GAID] or [!DNL IDFA] will be activated using those identities
* Profiles with [!DNL ECID] and a [!DNL Trade Desk ID] mapping in Experience Platform will be activated using the Trade Desk ID

## Exported data {#exported-data}

To verify if data has been exported successfully to the [!DNL The Trade Desk] destination, check your [!DNL The Trade Desk] account. If activation was successful, audiences are populated in your account.
