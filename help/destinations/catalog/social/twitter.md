---
title: Twitter Custom Audiences connection
description: Target your existing followers and customers in Twitter and create relevant re-marketing campaigns by activating your audiences built within Adobe Experience Platform
exl-id: fd244e58-cd94-4de7-81e4-c321eb673b65
---
# [!DNL Twitter Custom Audiences] connection

## Overview {#overview}

Target your existing followers and customers in Twitter and create relevant re-marketing campaigns by activating your audiences built within Adobe Experience Platform.

## Prerequisites {#prerequisites}

Before you configure your [!DNL Twitter Custom Audiences] destination, make sure to review the following Twitter prerequisites that you need to meet.

1. Your [!DNL Twitter Ads] account must be eligible for advertising. New [!DNL Twitter Ads] accounts are not eligible for advertising in the first 2 weeks after they are created.
2. Your Twitter user account that you authorized access for in [!DNL Twitter Audience Manager] must have the *[!DNL Partner Audience Manager]* permission enabled.

## Supported identities {#supported-identities}

[!DNL Twitter Custom Audiences] supports the activation of identities described in the table below. Learn more about [identities](https://experienceleague.adobe.com/docs/experience-platform/identity/namespaces.html?lang=en#getting-started).

|Target Identity|Description|Considerations|
|---|---|---|
|device_id|IDFA/AdID/Android ID|Google Advertising ID (GAID) and Apple ID for Advertisers (IDFA) are supported in Adobe Experience Platform. Please map these namespaces and/or attributes from your source schema accordingly in the [mapping step](/help/destinations/ui/activate-segment-streaming-destinations.md#mapping) of the destination activation workflow.|
|email|Email address(es) for the user|Please map your plain text email addresses and your SHA256-hashed email addresses to this field. When your source field contains unhashed attributes, check the **[!UICONTROL Apply transformation]** option, to have [!DNL Platform] automatically hash the data on activation. If you hash your customer email addresses before uploading them to Adobe Experience Platform, please note these identities must be hashed using SHA256, without a salt.|

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
| Export type | **[!UICONTROL Audience export]** | You are exporting all members of an audience with the identifiers used in the Twitter Custom Audiences destination.|
| Export frequency | **[!UICONTROL Streaming]** | Streaming destinations are "always on" API-based connections. As soon as a profile is updated in Experience Platform based on audience evaluation, the connector sends the update downstream to the destination platform. Read more about [streaming destinations](/help/destinations/destination-types.md#streaming-destinations).|

{style="table-layout:auto"}

## Use Cases {#use-cases}

To help you better understand how and when you should use the [!DNL Twitter Custom Audiences] destination, here are sample use cases that Adobe Experience Platform customers can solve by using this destination.

### Use Case #1

Target your existing followers and customers in Twitter and create relevant re-marketing campaigns by activating your audiences built within Adobe Experience Platform as [!DNL List Custom Audiences] in Twitter.

## Connect to destination {#connect}

>[!IMPORTANT]
> 
>To connect to the destination, you need the **[!UICONTROL Manage Destinations]** [access control permission](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.

To connect to this destination, follow the steps described in the [destination configuration tutorial](../../ui/connect-destination.md). In the configure destination workflow, fill in the fields listed in the two sections below.

### Authenticate to destination {#authenticate}

1. Find the [!DNL Twitter Custom Audiences] destination in the destination catalog and select **[!UICONTROL Set Up]**.
2. Select **[!UICONTROL Connect to destination]**.
  ![Authenticate to LinkedIn](/help/destinations/assets/catalog/social/twitter/authenticate-twitter-destination.png)
3. Enter your Twitter credentials and select **Log In**.

### Fill in destination details {#destination-details}

>[!CONTEXTUALHELP]
>id="platform_destinations_connect_twitter_accountid"
>title="Account ID"
>abstract="Your Twitter Ads account ID. This can be found in your Twitter Ads settings."

To configure details for the destination, fill in the required and optional fields below. An asterisk next to a field in the UI indicates that the field is required.

*  **[!UICONTROL Name]**: A name by which you will recognize this destination in the future.
*  **[!UICONTROL Description]**: A description that will help you identify this destination in the future.
*  **[!UICONTROL Account ID]**: Your [!DNL Twitter Ads] account ID. This can be found in your [!DNL Twitter Ads] settings.

### Enable alerts {#enable-alerts}

You can enable alerts to receive notifications on the status of the dataflow to your destination. Select an alert from the list to subscribe to receive notifications on the status of your dataflow. For more information on alerts, see the guide on [subscribing to destinations alerts using the UI](../../ui/alerts.md).

When you are finished providing details for your destination connection, select **[!UICONTROL Next]**.

## Activate audiences to this destination {#activate}

>[!IMPORTANT]
> 
>To activate data, you need the **[!UICONTROL Manage Destinations]**, **[!UICONTROL Activate Destinations]**, **[!UICONTROL View Profiles]**, and **[!UICONTROL View Segments]** [access control permissions](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.

Read [Activate profiles and audiences to streaming audience export destinations](/help/destinations/ui/activate-segment-streaming-destinations.md) for instructions on activating audiences to this destination.

## Data usage and governance {#data-usage-governance}

All [!DNL Adobe Experience Platform] destinations are compliant with data usage policies when handling your data. For detailed information on how [!DNL Adobe Experience Platform] enforces data governance, see the [Data Governance overview](https://experienceleague.adobe.com/docs/experience-platform/data-governance/home.html).

## Additional resources {#additional-resources}

When mapping audiences to Twitter, make sure to meet the following audience naming requirements:

1. Provide human-readable audience mapping names. We recommend using the same name that you used for the Experience Platform segments.
2. Do not use special characters (+ & , % : ; @ / = ? $) in audience and audience mapping names. If your Experience Platform audience name contains these characters, please remove them before mapping the audience to a Twitter destination.

More information about [!DNL List Custom Audiences] in Twitter can be found in the [Twitter documentation](https://business.twitter.com/en/help/campaign-setup/campaign-targeting/custom-audiences/lists.html).
