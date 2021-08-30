---
keywords: Google ads;google ads;google adwords;Google AdWords;Google Adwords
title: Google Ads connection
description: Google Ads, formerly known as Google AdWords, is an online advertising service that allows businesses to pay-per-click advertising across text-based searches, graphic displays, YouTube videos, and in-app mobile displays.
exl-id: 7143f476-49a8-42aa-bfb4-b11fc2b8f5c3
---
# [!DNL Google Ads] connection

## Overview {#overview}

[!DNL Google Ads], formerly known as [!DNL Google AdWords], is an online advertising service that allows businesses to pay-per-click advertising across text-based searches, graphic displays, [!DNL YouTube] videos, and in-app mobile displays.

## Destination specifics {#specifics}

Note the following details that are specific to [!DNL Google Ads] destinations:

* Activated audiences are created programmatically in the [!DNL Google] platform.
* [!DNL Platform] does not currently include a measurement metric to validate successful activation. Refer to the audience counts in Google to validate the integration and understand audience targeting size.

>[!IMPORTANT]
>
>If you are looking to create your first destination with [!DNL Google Ads] and have not enabled the [ID sync functionality](https://experienceleague.adobe.com/docs/id-service/using/id-service-api/methods/idsync.html) in Experience Cloud ID Service in the past (with Audience Manager or other applications), please reach out to Adobe Consulting or Customer Care to enable ID syncs. If you had previously set up Google integrations in Audience Manager, the ID syncs you had set up carry over to Platform.

## Supported identities {#supported-identities}

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

## Export type {#export-type}

**Segment Export** - you are exporting all members of a segment (audience) to the Google destination.

## Prerequisites

### Existing [!DNL Google Ads] account

>[!IMPORTANT]
>
> [!DNL Google] has deprecated new [!DNL Google Ads] cookie integrations with third-party vendors. In order to perform the allow list steps in the next section, you must have an existing integration with [!DNL Google Ads]. As a result, the recommended approach for using [!DNL Google Ads] is setting up a [!DNL Google Customer Match] integration. For more details on creating a [!DNL Google Customer Match] integration, please read the tutorial on creating a [[!DNL Google Customer Match]](./google-customer-match.md) connection.

### Allow list

>[!NOTE]
>
>The allow list is mandatory before setting up your first [!DNL Google Ads] destination in Platform. Please ensure the allow list process described below has been completed by [!DNL Google] before creating a destination.

Before creating the [!DNL Google Ads] destination in Platform, you must contact [!DNL Google] for Adobe to be put on the list of allowed data providers, and for your account to be added to the allow list. Contact [!DNL Google] and provide the following information:

* **Account ID**: Adobe’s account ID with Google. Account ID: 87933855.
* **Customer ID**: Adobe’s customer account ID with Google. Customer ID: 89690775.
* Your account type: **AdWords**
* **Google AdWords ID**: This is your ID with [!DNL Google]. The ID format is typically 123-456-7890.

## Connect to the destination {#connect}

To connect to this destination, follow the steps described in the [destination configuration tutorial](../../ui/connect-destination.md).

### Connection parameters {#parameters}

While [setting up](../../ui/connect-destination.md) this destination, you must provide the following information:

*  **[!UICONTROL Name]**: Fill in the preferred name for this destination.
*  **[!UICONTROL Description]**: Optional. For example, you can mention which campaign you are using this destination for.
*  **[!UICONTROL Account Type]**: AdWords is the only available option.
*  **[!UICONTROL Account ID]**: Fill in your account ID with [!DNL Google Ads]. The ID format is typically 123-456-7890.

## Activate segments to this destination {#activate}

See [Activate audience data to streaming segment export destinations](../../ui/activate-segment-streaming-destinations.md) for instructions on activating audience segments to this destination.


## Exported data 

To verify if data has been exported successfully to the [!DNL Google Ads] destination, check your [!DNL Google Ads] account. If activation was successful, audiences are populated in your account.
