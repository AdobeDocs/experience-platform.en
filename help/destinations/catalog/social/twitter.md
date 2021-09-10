---
title: Twitter Custom Audiences connection
description: Target your existing followers and customers in Twitter and create relevant re-marketing campaigns by activating your audiences built within Adobe Experience Platform
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

## Export type {#export-type}

**Segment Export** - you are exporting all members of a segment (audience) with the identifiers used in the Twitter Custom Audiences destination.

## Use Cases {#use-cases}

To help you better understand how and when you should use the [!DNL Twitter Custom Audiences] destination, here are sample use cases that Adobe Experience Platform customers can solve by using this destination.

### Use Case #1

Target your existing followers and customers in Twitter and create relevant re-marketing campaigns by activating your audiences built within Adobe Experience Platform as [!DNL List Custom Audiences] in Twitter.

## Connect to destination {#connect}

To connect to this destination, follow the steps described in the [destination configuration tutorial](../../ui/connect-destination.md).

### Connection parameters {#parameters}

While [setting up](../../ui/connect-destination.md) this destination, you must provide the following information:

*  **[!UICONTROL Name]**: A name by which you will recognize this destination in the future.
*  **[!UICONTROL Description]**: A description that will help you identify this destination in the future.
*  **[!UICONTROL Account ID]**: Your [!DNL Twitter Ads] account ID. This can be found in your [!DNL Twitter Ads] settings.

## Activate segments to this destination {#activate}

Read [Activate profiles and segments to streaming segment export destinations](/help/destinations/ui/activate-segment-streaming-destinations.md) for instructions on activating audience segments to this destination.

## Data usage and governance {#data-usage-governance}

All [!DNL Adobe Experience Platform] destinations are compliant with data usage policies when handling your data. For detailed information on how [!DNL Adobe Experience Platform] enforces data governance, see the [Data Governance overview](https://experienceleague.adobe.com/docs/experience-platform/data-governance/home.html).

## Additional resources {#additional-resources}

When mapping audience segments to Twitter, make sure to meet the following segment naming requirements:

1. Provide human-readable segment mapping names. We recommend using the same name that you used for the Experience Platform segments.
2. Do not use special characters (+ & , % : ; @ / = ? $) in segment and segment mapping names. If your Experience Platform segment name contains these characters, please remove them before mapping the segment to a Twitter destination.

More information about [!DNL List Custom Audiences] in Twitter can be found in the [Twitter documentation](https://business.twitter.com/en/help/campaign-setup/campaign-targeting/custom-audiences/lists.html).