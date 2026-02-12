---
title: Adobe Advertising DSP connection
description: Learn how to share authenticated and unauthenticated first-party audiences with Adobe Advertising Cloud Demand-Side Platform (DSP) using multiple identity types.
feature: Destinations
---

# Adobe Advertising DSP connection

## Overview

The Adobe Advertising Cloud Demand-Side Platform (DSP) destination allows users to share both authenticated and unauthenticated first-party audiences with a DSP account or specific advertiser within an account.

This destination allows customers to share first party audiences with any or all of these IDs:

* Hashed email ID, which is converted to a [!DNL LiveRamp RampID] or [!DNL Unified ID 2.0] (UID2.0) for targeting in DSP

* Experience Cloud ID (ECID) and Adobe Advertising third-party cookies

* Mobile advertising IDs (MAIDs):

  * [!DNL Google] Advertising IDs (GAIDs) for [!DNL Android] devices

  * Identifiers for Advertisers (IDFAs) for [!DNL Apple iOS] devices

This connection replaces the [Legacy Adobe Advertising Cloud DSP connection](adobe-advertising-cloud-connection-legacy.md), which supports only hashed email addresses.

>[!IMPORTANT]
>
>This page was created by the [!DNL DSP] team. For any inquiries or update requests, contact Advertising Cloud support directly at `adcloud_support@adobe.com`.

## Use cases

This destination allows advertisers to reach their audience across browsers with cookies and without cookies.

Advertisers have the choice to share segments either with authenticated first-party identifiers (such as [!DNL RampID] and [!DNL UID2.0]) or as unauthenticated IDs (such as cookies and MAIDs).

## Prerequisites

* For [!DNL RampID activation], [!DNL DSP] account-level and campaign-level settings to enable audience sharing with [!DNL LiveRamp RampID], which translates customer data to [!DNL RampIDs] to create targetable segments. Your Adobe Account Team will perform this configuration. [!DNL RampID] is available via a partnership between [!DNL DSP] and [!DNL LiveRamp], and you don't need your own [!DNL LiveRamp] membership to use it.

* Audience IDs:

  * For [!DNL RampID] and [!DNL UID2.0], profiles must contain hashed email IDs.

  * For cookies, set up a cookie sync process with either WebSDK Datastreams or the Experience Cloud ID Service. See "[Set up ID syncing to share cookies](#cookie-sync)."

  * For profiles with MAIDs:

    * For each GAID, include the value `GAID` in an IdentityMap column.

    * For each IDFA, include the value `IDFA` in an IdentityMap column.

* The Experience Cloud organization ID for the Experience Platform account. You can find your ID on your Adobe Real-Time Customer Data Platform (Real-Time CDP) user profile page.

* A [Real-Time CDP source in DSP](https://experienceleague.adobe.com/docs/advertising-cloud/dsp/audiences/sources/source-create.html) to receive audiences for campaign activation. Your Adobe Account Team will create the source using your Experience Cloud organization ID.

* The source key for the [!DNL DSP] account or advertiser, which is generated when a [Real-Time CDP source is created in [!DNL DSP]](https://experienceleague.adobe.com/docs/advertising-cloud/dsp/audiences/sources/source-create.html). Your [!DNL DSP] account team will share this key with you. You'll use it within Experience Platform to create a destination connection to the Advertising Cloud DSP destination, as explained below.

## Supported identities

The Adobe Advertising Cloud DSP destination supports the activation of identities described in the table below. Learn more about [identities](/help/identity-service/features/namespaces.md).

| Target Identity | Description | Considerations |
| --------------- | ----------- | -------------- |
| `email_lc_sha256` | Email addresses hashed with the SHA256 algorithm | Experience Platform supports both plain text and SHA256-hashed email addresses. When your source field contains unhashed attributes, check the **[!UICONTROL Apply transformation]** to have Experience Platform automatically hash the data on activation. |
| `ECID` | First-party cookie for Experience Cloud | Required to create cookie-based segments. |
| `Everesttech cookie` | Third-party cookie for Adobe Advertising | Required to create cookie-based segments |
| `GAID` | [!DNL Android] Device ID | Required for targeting [!DNL Android] devices |
| `IDFA` | [!DNL iOS] device ID | Required for targeting [!DNL iOS] devices |

## Set up ID syncing to share cookies {#cookie-sync}

ID syncing is a prerequisite to share third-party cookies. Set up a cookie sync process with either WebSDK Datastreams or the Experience Cloud ID Service.

For more context about identity handling for third-party cookies, see "[Advertising destinations relying on third-party cookie integrations](/help/destinations/catalog/advertising/overview.md)."

### (Experience Platform [!DNL Web SDK] users) Enable third-party ID syncing

* Configure a new or existing datastream to source the data to Experience Platform by configuring the advanced option [!UICONTROL Third Party ID Sync].

For instructions, see the section "Configure advanced options" in "[Create and configure datastreams](/help/datastreams/configure.md)."

### (Experience Platform tag users) Enable third-party ID syncing

1. Use the Experience Cloud Destination Extension to configure the third-party ID sync.

   This extension is powered by the Experience Cloud Identity Service, which allows the matched Adobe Advertising cookie for the given ECID to be available when you activate the audience from Real-Time CDP.

2. Continue the data onboarding steps in Experience Platform to create user profiles. See "[Data Ingestion overview](/help/ingestion/home.md)."

## Export type and frequency

Refer to the following table for information about the destination export type and frequency.

| Item | Type | Notes |
| ---- | ---- | ----- |
| Export type | Audience export | You are exporting all members of an audience with the chosen identifiers. |
| Export frequency | Streaming | Streaming destinations are "always on" API-based connections. When a profile is updated in Experience Platform based on audience evaluation, the connector sends the update downstream to the destination platform. Read more about [streaming destinations](/help/destinations/destination-types.md#streaming-destinations). |

## Connect to the destination {#connect}

To connect to the destination, follow the instructions to [create a destination connection](/help/destinations/ui/connect-destination.md) using the Experience Platform user interface. In the destination configuration workflow, fill in the fields listed in the subsections below.

>[!IMPORTANT]
> 
>To connect to the destination, you need the **[!UICONTROL View Destinations]** and **[!UICONTROL Manage Destinations]** [access control permission](/help/access-control/home.md#permissions) for Experience Platform. Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.

### Authenticate to destination {#authenticate}

To connect to the destination, provide the following parameter in the [!UICONTROL Connection type] section, and then select **[!UICONTROL Connect to destination]**.: 

* **[!UICONTROL Account or Advertiser Key]**: This [!UICONTROL Source Key] is generated when a [Real-Time CDP source is created in the DSP user interface](https://experienceleague.adobe.com/docs/advertising-cloud/dsp/audiences/sources/source-create.html). Your Adobe Account Team will share this key with you after they create the source.

![Connection type field](/help/destinations/assets/catalog/advertising/adobe-advertising-cloud-connection/authenticate-destination.png)

### Fill in destination details {#destination-details}

To configure details for the destination, fill in the required and optional fields below. An asterisk next to a field in the UI indicates that the field is required.

* **[!UICONTROL Name]**: A name by which you will recognize this destination in the future.
* **[!UICONTROL Description]**: A description that will help you identify this destination in the future.

![Destination detail fields](/help/destinations/assets/catalog/advertising/adobe-advertising-cloud-connection/destination-details.png)

## Choose identities

You can choose the IDs to send to Adobe Advertising DSP. By default, the cookie identifiers are selected for the advertiser. You can also choose to add [!UICONTROL Hashed Email], [!UICONTROL IDFA], and [!UICONTROL GAID].

For instructions, see "[Map attributes and identities](https://experienceleague.adobe.com/en/docs/experience-platform/destinations/ui/activate/activate-segment-streaming-destinations#mapping)."

![Identity mapping fields](/help/destinations/assets/catalog/advertising/adobe-advertising-cloud-connection/identity-mapping.png)

### Enable alerts {#enable-alerts}

You can enable alerts to receive notifications on the status of the dataflow to your destination. Select an alert from the list to subscribe to receive notifications on the status of your dataflow. For more information on alerts, see the guide on [subscribing to destinations alerts using the UI](../../ui/alerts.md).

When you are finished providing details for your destination connection, select **[!UICONTROL Next]**.

## Activate audiences to this destination {#activate}

Read [Activate profiles and audiences to streaming audience export destinations](/help/destinations/ui/activate-segment-streaming-destinations.md) for instructions on activating audiences to this destination.

>[!IMPORTANT]
> 
>* To activate data, you need the **[!UICONTROL View Destinations]**, **[!UICONTROL Activate Destinations]**, **[!UICONTROL View Profiles]**, and **[!UICONTROL View Segments]** [access control permissions](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.
>* To export identities, you need the **[!UICONTROL View Identity Graph]** [access control permission](/help/access-control/home.md#permissions). <br> ![Select identity namespace highlighted in the workflow to activate audiences to destinations.](/help/destinations/assets/overview/export-identities-to-destination.png "Select identity namespace highlighted in the workflow to activate audiences to destinations."){width="100" zoomable="yes"}

## Validate data export {#exported-data}

To verify that data audience was shared with Advertising Cloud, check the following:

* The data flow in your [!DNL Real-Time CDP] destination is successful.

* In DSP, the audience is available when you create or edit an audience from [!UICONTROL Audiences] > [!UICONTROL All Audiences] or from within the [!UICONTROL Audience Targeting] section of placement settings. The audience should be visible in the [!UICONTROL Adobe Segments] tab under the [!UICONTROL Real-Time CDP] folder.

![Real-Time CDP audiences in DSP audience settings](/help/destinations/assets/catalog/advertising/adobe-advertising-cloud-connection/segments-in-dsp.png)

## Data usage and governance {#data-usage-governance}

All [!DNL Adobe Experience Platform] destinations are compliant with data usage policies when handling your data. For detailed information about how [!DNL Adobe Experience Platform] enforces data governance, see the [Data Governance overview](/help/data-governance/home.md).
