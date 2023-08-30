---
title: TikTok connection
description: Build custom audiences on TikTok with your data for targeting with your ad campaigns. These audiences could be of people who visited your website or interacted with your content. Quickly and securely push the desired audience from Adobe Experience Platform to TikTok using Adobe's real-time integration with TikTok Ads Manager.
last-substantial-update: 2023-03-20
exl-id: 7b12d17f-7d9a-4615-9830-92bffe3f6927
---
# TikTok connection

## Overview {#overview}

Build custom audiences on TikTok with your data for targeting with your ad campaigns. These audiences could be of people who visited your website or interacted with your content. Quickly and securely push the desired audience from Adobe Experience Platform to TikTok using Adobe's real-time integration with TikTok Ads Manager. Visit [TikTok's business help center](https://ads.tiktok.com/help/article/audiences?lang=en) for more information. 

>[!IMPORTANT]
>
>This destination connector and documentation page are created and maintained by the TikTok team. For any inquiries or update requests, please contact them directly at [https://ads.tiktok.com/help/](https://ads.tiktok.com/help/).

## Use cases {#use-cases}

To help you better understand how and when you should use the TikTok destination, here is a sample use case for Adobe Experience Platform customers. 

### Use case {#use-case-1}

An athletic apparel brand wants to reach existing customers through their social media accounts. The apparel brand can ingest email addresses from their own CRM to Adobe Experience Platform, build audiences from their own offline data, and send these audiences to TikTok to display ads in their customers' social media feeds.

## Prerequisites {#prerequisites}

You need to have [!DNL Admin] or [!DNL Operator] access to the TikTok Ads Manager account you want to send audiences to. More instructions can be found on the [TikTok Help Center](https://ads.tiktok.com/help/article/add-users-tiktok-business-center?lang=en).

Before sending data to your TikTok Ads Manager account, you will need to give Adobe Experience Platform permission to access your Ad Account for `Audience Management`. This permission can be provided by [entering your Ads Manager ID](#authenticate) in the Experience Platform UI and granting the permission after being redirected to your TikTok Ads Manager Account. 

## Supported identities {#supported-identities}

TikTok supports the activation of identities described in the table below. Learn more about [identities](/help/identity-service/namespaces.md).

|Target Identity|Description|Considerations|
|---|---|---|
|GAID|Google Advertising ID|Select the GAID target identity when your source identity is a GAID namespace.|
|IDFA|Apple ID for Advertisers|Select the IDFA target identity when your source identity is an IDFA namespace.|
|Phone number|Phone numbers hashed with the SHA256 algorithm|Both plain text and SHA256 hashed phone numbers are supported by Adobe Experience Platform, and they must be in E.164 format. When your source field contains unhashed attributes, check the **[!UICONTROL Apply transformation]** option, to have [!DNL Platform] automatically hash the data on activation.|
|Email|Email addresses hashed with the SHA256 algorithm|Both plain text and SHA256 hashed email addresses are supported by Adobe Experience Platform. When your source field contains unhashed attributes, check the **[!UICONTROL Apply transformation]** option, to have [!DNL Platform] automatically hash the data on activation.|

{style="table-layout:auto"}

## Export type and frequency {#export-type-frequency}

Refer to the table below for information about the destination export type and frequency.

| Item | Type | Notes |
---------|----------|---------|
| Export type | **[!UICONTROL Audience export]** | You are exporting all members of an audience with the identifiers (name, phone number, or others) used in the TikTok destination.|
| Export frequency | **[!UICONTROL Streaming]** | Streaming destinations are "always on" API-based connections. As soon as a profile is updated in Experience Platform based on audience evaluation, the connector sends the update downstream to the destination platform. Read more about [streaming destinations](/help/destinations/destination-types.md#streaming-destinations).|

{style="table-layout:auto"}

## Connect to the destination {#connect}

>[!IMPORTANT]
> 
>To connect to the destination, you need the **[!UICONTROL Manage Destinations]** [access control permission](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.

To connect to this destination, follow the steps described in the [destination configuration tutorial](../../ui/connect-destination.md). In the configure destination workflow, fill in the fields listed in the two sections below.

### Authenticate to destination {#authenticate}

To authenticate to the destination, you will be redirected to login to your [!DNL TikTok Ads Manager] account and authorize Adobe to manage audiences on your behalf. 

![TikTok permission selection](/help/destinations/assets/catalog/social/tiktok/tiktok-authenticate-destination.png "Image of TikTok UI for selecting permissions")

### Fill in destination details {#destination-details}

To configure details for the destination, fill in the required and optional fields below. An asterisk next to a field in the UI indicates that the field is required.

![Destination connection details](/help/destinations/assets/catalog/social/tiktok/tiktok-configure-destination-details.png "Image of the Platform UI, showing destination connection details to be filled in")

*  **[!UICONTROL Name]**: A name by which you will recognize this destination in the future.
*  **[!UICONTROL Description]**: A description that will help you identify this destination in the future.
*  **[!UICONTROL TikTok Ads Manager ID]**: Your [!DNL TikTok Ads Manager ID]. You can find this in your [!DNL TikTok Ads manager] account. 

![TikTok Ads Manager ID](/help/destinations/assets/catalog/social/tiktok/tiktok-ads-manager-ID.png "Image of the TikTok Ads Manager UI, showing how to get the TikTok Ads Manager ID")

### Enable alerts {#enable-alerts}

You can enable alerts to receive notifications on the status of the dataflow to your destination. Select an alert from the list to subscribe to receive notifications on the status of your dataflow. For more information on alerts, see the guide on [subscribing to destinations alerts using the UI](../../ui/alerts.md).

When you are finished providing details for your destination connection, select **[!UICONTROL Next]**.

## Activate audiences to this destination {#activate}

>[!IMPORTANT]
> 
>To activate data, you need the **[!UICONTROL Manage Destinations]**, **[!UICONTROL Activate Destinations]**, **[!UICONTROL View Profiles]**, and **[!UICONTROL View Segments]** [access control permissions](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.

Read [Activate profiles and audiences to streaming audience export destinations](/help/destinations/ui/activate-segment-streaming-destinations.md) for instructions on activating audiences to this destination.

### Map identities {#map}

Below is an example of correct identity mapping when exporting audiences to TikTok Ads Manager.

Selecting source fields:

* Select an identifier (For example:` Email_LC_SHA256`) as source identity that uniquely identifies a profile in Adobe Experience Platform and [!DNL TikTok Ads Manager].

Selecting target fields:

* Select the email namespace as target identity.

![Identity mapping](/help/destinations/assets/catalog/social/tiktok/tiktok-map-identity.png "Image of the Platform UI, mapping of identities")

## Exported data {#exported-data}

Check your [!DNL TikTok Ads Manager] account (under **Assets > Audiences**) to verify if your Experience Platform audience was exported successfully. The audience will be populated as an audience type: `Partner Audience`.

## Data usage and governance {#data-usage-governance}

All [!DNL Adobe Experience Platform] destinations are compliant with data usage policies when handling your data. For detailed information on how [!DNL Adobe Experience Platform] enforces data governance, read the [Data Governance overview](/help/data-governance/home.md).

## Additional resources {#additional-resources}

Please refer to the [TikTok Help Center page](https://ads.tiktok.com/help/article/audiences?lang=en) for additional information.
