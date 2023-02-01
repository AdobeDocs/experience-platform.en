---
title: TikTok connection // Replace with the name of destination
description: Create segments from your customer lists from people who've visited your site or people who have already interacted with your content on TikTok and quickly push the desired segment to TikTok using TikTok's real-time streaming API to use for ad targeting. // Replace with the paragraph in the Overview section
---

# TikTok connection

## Overview {#overview}

Create segments from your customer lists from people who've visited your site or people who have already interacted with your content on TikTok and quickly push the desired segment to TikTok using TikTok's real-time streaming API to use for ad targeting. Go to [TikTok's website](https://ads.tiktok.com/help/article/audiences?lang=en) for more info. 

>[!IMPORTANT]
>
>This documentation page was created by the TikTok team. For any inquiries or update requests, please contact them directly at [https://ads.tiktok.com/help/](https://ads.tiktok.com/help/).

## Use cases {#use-cases}

To help you better understand how and when you should use the TikTok destination, here is a sample use case that Adobe Experience Platform customers can solve by using this destination.

### Use case #1 {#use-case-1}

An athletic apparel brand wants to reach existing customers through their social media accounts. The apparel brand can ingest email addresses from their own CRM to Adobe Experience Platform, build segments from their own offline data, and send these segments to TikTok to display ads in their customers' social media feeds.

## Prerequisites {#prerequisites}

Before you are able to activate data to TikTok, you must authenticate with a TikTok Ads Manager account that you want to add an audience to. Details on sharing advertiser accounts can be found [in the TikTok API documentation](https://ads.tiktok.com/marketing_api/docs?id=1738373141733378). Specifically, you would need the "Audience Management" permission.

## Supported identities {#supported-identities}

TikTok supports the activation of identities described in the table below. Learn more about [identities](/help/identity-service/namespaces.md).

|Target Identity|Description|Considerations|
|---|---|---|
|GAID|Google Advertising ID|Select the GAID target identity when your source identity is a GAID namespace.|
|IDFA|Apple ID for Advertisers|Select the IDFA target identity when your source identity is an IDFA namespace.|
|phone_sha256_E.164|Phone numbers hashed with the SHA256 algorithm|Both plain text and SHA256 hashed phone numbers are supported by Adobe Experience Platform, and they must be in E.164 format. When your source field contains unhashed attributes, check the **[!UICONTROL Apply transformation]** option, to have [!DNL Platform] automatically hash the data on activation.|
|email_lc_sha256|Email addresses hashed with the SHA256 algorithm|Both plain text and SHA256 hashed email addresses are supported by Adobe Experience Platform. When your source field contains unhashed attributes, check the **[!UICONTROL Apply transformation]** option, to have [!DNL Platform] automatically hash the data on activation.|

{style="table-layout:auto"}

## Export type and frequency {#export-type-frequency}

Refer to the table below for information about the destination export type and frequency.

| Item | Type | Notes |
---------|----------|---------|
| Export type | **[!UICONTROL Segment export]** | You are exporting all members of a segment (audience) with the identifiers (name, phone number, or others) used in the TikTok destination.|
| Export frequency | **[!UICONTROL Streaming]** | Streaming destinations are "always on" API-based connections. As soon as a profile is updated in Experience Platform based on segment evaluation, the connector sends the update downstream to the destination platform. Read more about [streaming destinations](/help/destinations/destination-types.md#streaming-destinations).|

{style="table-layout:auto"}

## Connect to the destination {#connect}

>[!IMPORTANT]
> 
>To connect to the destination, you need the **[!UICONTROL Manage Destinations]** [access control permission](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.

To connect to this destination, follow the steps described in the [destination configuration tutorial](../../ui/connect-destination.md). In the configure destination workflow, fill in the fields listed in the two sections below.

### Authenticate to destination {#authenticate}

To authenticate to the destination, you will be redirected to login to your TikTok Ads Manager account and authorize Adobe to manage audiences on your behalf. 

![TikTok permission selection](/help/destinations/destination-sdk/docs-framework/assets/tiktok-authenticate-destination.png "Image of TikTok UI for selecting permissions")

### Fill in destination details {#destination-details}

To configure details for the destination, fill in the required and optional fields below. An asterisk next to a field in the UI indicates that the field is required.

![Destination connection details](/help/destinations/destination-sdk/docs-framework/assets/tiktok-configure-destination-details.png "Image of the Platform UI, showing destination connection details to be filled in")

*  **[!UICONTROL Name]**: A name by which you will recognize this destination in the future.
*  **[!UICONTROL Description]**: A description that will help you identify this destination in the future.
*  **[!UICONTROL TikTok Ads Manager ID]**: Your TikTok Ads Manager ID.

### Enable alerts {#enable-alerts}

You can enable alerts to receive notifications on the status of the dataflow to your destination. Select an alert from the list to subscribe to receive notifications on the status of your dataflow. For more information on alerts, see the guide on [subscribing to destinations alerts using the UI](../../ui/alerts.md).

When you are finished providing details for your destination connection, select **[!UICONTROL Next]**.

## Activate segments to this destination {#activate}

>[!IMPORTANT]
> 
>To activate data, you need the **[!UICONTROL Manage Destinations]**, **[!UICONTROL Activate Destinations]**, **[!UICONTROL View Profiles]**, and **[!UICONTROL View Segments]** [access control permissions](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.

Read [Activate profiles and segments to streaming segment export destinations](/help/destinations/ui/activate-segment-streaming-destinations.md) for instructions on activating audience segments to this destination.

### Map identities {#map}

Below is an example of correct identity mapping when exporting segments to TikTok Ads Manager.

Selecting source fields:

* Select an identifier (For example: Email_LC_SHA256) as source identity that uniquely identifies a profile in Adobe Experience Platform and TikTok Ads Manager.

Selecting target fields:

* Select the email namespace as target identity.

![Identity mapping](/help/destinations/destination-sdk/docs-framework/assets/tiktok-map-identity.png "Image of the Platform UI, mapping of identities")

## Exported data {#exported-data}

To verify if data has been exported successfully to the TikTok destination, check your TikTok Ads Manager account. If activation was successful, the segments will be populated in your account.

## Data usage and governance {#data-usage-governance}

All [!DNL Adobe Experience Platform] destinations are compliant with data usage policies when handling your data. For detailed information on how [!DNL Adobe Experience Platform] enforces data governance, read the [Data Governance overview](/help/data-governance/home.md).

## Additional resources {#additional-resources}

Please refer to the [TikTok Help Center page](https://ads.tiktok.com/help/article/audiences?lang=en) for additional information.
