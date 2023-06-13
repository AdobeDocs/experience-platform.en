---
keywords: advertising; the trade desk; advertising trade desk
title: The Trade Desk connection
description: The Trade Desk is a self-service platform for ad buyers to execute retargeting and audience targeted digital campaigns across display, video, and mobile inventory sources.
exl-id: b8f638e8-dc45-4aeb-8b4b-b3fa2906816d
---
# [!DNL The Trade Desk] connection

## Overview {#overview}

[!DNL The Trade Desk] destination helps you send profile data to [!DNL The Trade Desk].

[!DNL The Trade Desk] is a self-service platform for ad buyers to execute retargeting and audience targeted digital campaigns across display, video, and mobile inventory sources.

To send profile data to [!DNL Trade Desk], you must first connect to the destination.

## Use cases {#use-cases}

As a marketer, I want to be able to use audiences built off of [!DNL Trade Desk IDs] or device IDs to create retargeting or audience targeted digital campaigns.

## Supported identities {#supported-identities}

[!DNL The Trade Desk] supports the activation of identities described in the table below. Learn more about [identities](/help/identity-service/namespaces.md).

|Target Identity|Description|
|---|---|
|GAID|[!DNL Google Advertising ID]|
|IDFA|[!DNL Apple ID for Advertisers]|
|The Trade Desk ID|Advertiser ID in The Trade Desk platform|

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
| Export type | **[!UICONTROL Audience export]** | You are exporting all members of an audience to the destination.|
| Export frequency | **[!UICONTROL Streaming]** | Streaming destinations are "always on" API-based connections. As soon as a profile is updated in Experience Platform based on audience evaluation, the connector sends the update downstream to the destination platform. Read more about [streaming destinations](/help/destinations/destination-types.md#streaming-destinations).|

{style="table-layout:auto"}

## Prerequisites {#prerequisites}

>[!IMPORTANT]
>
>If you are looking to create your first destination with [!DNL The Trade Desk] and have not enabled the [ID sync functionality](https://experienceleague.adobe.com/docs/id-service/using/id-service-api/methods/idsync.html) in Experience Cloud ID Service in the past (with Adobe Audience Manager or other applications), please reach out to Adobe Consulting or Customer Care to enable ID syncs. If you had previously set up [!DNL The Trade Desk] integrations in Audience Manager, the ID syncs you had set up carry over to Platform.

## Connect to the destination {#connect}

>[!IMPORTANT]
> 
>To connect to the destination, you need the **[!UICONTROL Manage Destinations]** [access control permission](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.

To connect to this destination, follow the steps described in the [destination configuration tutorial](../../ui/connect-destination.md).

### Connection parameters {#parameters}

While [setting up](../../ui/connect-destination.md) this destination, you must provide the following information:

* **[!UICONTROL Name]**: A name by which you will recognize this destination in the future.
* **[!UICONTROL Description]**: A description that will help you identify this destination in the future.
* **[!UICONTROL Account ID]**: Your [!DNL Trade Desk] [!UICONTROL Account ID].
* **[!UICONTROL Server Location]**: Ask your [!DNL Trade Desk] representative which regional server you should use. These are the available regional servers you can choose from:
  * **[!UICONTROL Europe]**
  * **[!UICONTROL Singapore]**
  * **[!UICONTROL Tokyo]**
  * **[!UICONTROL North America East]**
  * **[!UICONTROL North America West]**
  * **[!UICONTROL Latin America]**

### Enable alerts {#enable-alerts}

You can enable alerts to receive notifications on the status of the dataflow to your destination. Select an alert from the list to subscribe to receive notifications on the status of your dataflow. For more information on alerts, see the guide on [subscribing to destinations alerts using the UI](../../ui/alerts.md).

When you are finished providing details for your destination connection, select **[!UICONTROL Next]**.

## Activate audiences to this destination {#activate}

>[!IMPORTANT]
> 
>To activate data, you need the **[!UICONTROL Manage Destinations]**, **[!UICONTROL Activate Destinations]**, **[!UICONTROL View Profiles]**, and **[!UICONTROL View Segments]** [access control permissions](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.

See [Activate audience data to streaming audience export destinations](../../ui/activate-segment-streaming-destinations.md) for instructions on activating audiences to this destination.

In the [Segment schedule](../../ui/activate-segment-streaming-destinations.md#scheduling) step, you must manually map your audiences to their corresponding ID or friendly name in the destination platform.

When mapping segments, we recommend you use the Platform audience name or a shorter form of it, for ease of use. However, the audience ID or name in your destination does not need to match the one in your Platform account. Any value you insert in the mapping field will be reflected by the destination.

If you are using multiple device mappings (cookie IDs, [!DNL IDFA], [!DNL GAID]), make sure to use the same mapping value for all three mappings. [!DNL The Trade Desk] will aggregate all of them into a single segment, with a device-level breakdown.

![Segment Mapping ID](../../assets/common/segment-mapping-id.png)

## Exported data {#exported-data}

To verify if data has been exported successfully to [!DNL The Trade Desk] destination, check your [!DNL Trade Desk] account. If activation was successful, audiences are populated in your account.
