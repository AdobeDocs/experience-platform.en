---
title: Adobe Advertising Cloud DSP connection
description: Adobe Advertising Cloud DSP is an integrated destination for Adobe Real-Time Customer Data Platform, allowing you to share authenticated first-party audiences with approved advertisers and users for campaign activation.
exl-id: 11ff7797-a9c6-4334-b843-ae9df9a48e54
---
# Adobe Advertising Cloud DSP connection

## Overview {#overview}

The Adobe Advertising Cloud [!DNL Demand-Side Platform] (DSP) destination allows you to share authenticated first-party audiences with approved advertisers and users for campaign activation with DSP. To learn more about the Real-Time CDP integration with DSP, see [About Activating Authenticated Audiences from Audience Sources](https://experienceleague.adobe.com/docs/advertising-cloud/dsp/audiences/sources/source-about.html).

>[!IMPORTANT]
>
>This page was created by the DSP team. For any inquiries or update requests, contact Advertising Cloud support directly at `adcloud_support@adobe.com`.

## Use cases {#use-cases}

To help you better understand how and when you should use the Advertising Cloud DSP destination, here are sample use cases that Adobe Experience Platform customers can solve by using this destination.

### Brand advertising use case

An online retailer wants to retarget its high value customers through a display campaign without using cookies for targeting. The retailer shares an audience consisting of the hashed email IDs of its high value customers from its Adobe Real-Time Customer Data Platform (Real-Time CDP) account to its DSP account. DSP then converts the hashed email IDs to authenticated [!DNL RampIDs] through a partnership between DSP and LiveRamp. The resulting [!DNL RampIDs] can be used in a display campaign to target the audience.

### Agency use case

A media agency with a DSP account is running a retargeting campaign on behalf of its customer, a top brand in the hospitality industry. The brand wants to retarget all of its guests in the last year with a new promotional offer. The brand hosts all guest information in [!DNL Real-Time CDP]. The brand can share an audience that consists of the hashed email IDs of its guests from its [!DNL Real-Time CDP] account to the media agency's DSP account to retarget the guests through a media campaign.

## Prerequisites {#prerequisites}

* DSP account-level and campaign-level settings to enable audience sharing with [!DNL LiveRamp RampID], which will translate customer data to [!DNL RampIDs] to create targetable segments. Your DSP account team will perform this configuration. [!DNL RampID] is available via a partnership between DSP and [!DNL LiveRamp], and you don't need your own [!DNL LiveRamp] membership to use it.
* The Experience Cloud organization ID for the Experience Platform account. You can find your ID on your [!DNL Real-Time CDP] user profile page.
* A [[!DNL Real-Time CDP] source in DSP](https://experienceleague.adobe.com/docs/advertising-cloud/dsp/audiences/sources/source-create.html) to receive audiences for campaign activation. Your DSP account team will create the source using your Experience Cloud organization ID.
* The source key for the DSP account or advertiser, which is generated when a [[!DNL Real-Time CDP] source is created in DSP](https://experienceleague.adobe.com/docs/advertising-cloud/dsp/audiences/sources/source-create.html). Your DSP account team will share this key with you. You'll use it within Experience Platform to create a destination connection to the Advertising Cloud DSP destination, as [explained below](#authenticate).
* Customer data consisting of emails or hashed emails.

## Supported identities {#supported-identities}

The Adobe Advertising Cloud DSP destination supports the activation of identities described in the table below. Learn more about [identities](/help/identity-service/namespaces.md).

|Target Identity|Description|Considerations|
|---|---|---|
|email_lc_sha256|Email addresses hashed with the SHA256 algorithm|Experience Platform supports both plain text and SHA256-hashed email addresses. When your source field contains unhashed attributes, check the **[!UICONTROL Apply transformation]** option to have Experience Platform automatically hash the data on activation.|

{style="table-layout:auto"}

## Export type and frequency {#export-type-frequency}

Refer to the following table for information about the destination export type and frequency.

| Item | Type | Notes |
---------|----------|---------|
| Export type | **[!UICONTROL Audience export]** | You are exporting all members of an audience with the identifiers (email or hashed email) used in the Advertising Cloud DSP destination.|
| Export frequency | **[!UICONTROL Streaming]** | Streaming destinations are "always on" API-based connections. When a profile is updated in Experience Platform based on audience evaluation, the connector sends the update downstream to the destination platform. Read more about [streaming destinations](/help/destinations/destination-types.md#streaming-destinations).|

{style="table-layout:auto"}

## Connect to the destination {#connect}

>[!IMPORTANT]
> 
>To connect to the destination, you need the **[!UICONTROL Manage Destinations]** [access control permission](/help/access-control/home.md#permissions) for Experience Platform. Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.

To connect to the destination, follow the instructions to [create a destination connection](/help/destinations/ui/connect-destination.md) using the Experience Platform user interface. In the destination configuration workflow, fill in the fields listed in the two sections below.

### Authenticate to destination {#authenticate}

To connect to the destination, provide the following parameter in the [!UICONTROL Connection type] section, and then select **[!UICONTROL Connect to destination]**.: 

* **[!UICONTROL Account or Advertiser Key]**: This [!UICONTROL Source Key] is generated when a [[!DNL Real-Time CDP] source is created in the DSP user interface](https://experienceleague.adobe.com/docs/advertising-cloud/dsp/audiences/sources/source-create.html). Your DSP account team will share this key with you after they create the source.

![Connection type field](/help/destinations/assets/catalog/advertising/adobe-advertising-cloud-connection/authenticate-destination.png)

### Fill in destination details {#destination-details}

To configure details for the destination, fill in the required and optional fields below. An asterisk next to a field in the UI indicates that the field is required.

*  **[!UICONTROL Name]**: A name by which you will recognize this destination in the future.
*  **[!UICONTROL Description]**: A description that will help you identify this destination in the future.

![Destination detail fields](/help/destinations/assets/catalog/advertising/adobe-advertising-cloud-connection/destination-details.png)

### Enable alerts {#enable-alerts}

You can enable alerts to receive notifications on the status of the dataflow to your destination. Select an alert from the list to subscribe to receive notifications on the status of your dataflow. For more information on alerts, see the guide on [subscribing to destinations alerts using the UI](../../ui/alerts.md).

When you are finished providing details for your destination connection, select **[!UICONTROL Next]**.

## Activate audiences to this destination {#activate}

>[!IMPORTANT]
> 
>* To activate data, you need the **[!UICONTROL Manage Destinations]**, **[!UICONTROL Activate Destinations]**, **[!UICONTROL View Profiles]**, and **[!UICONTROL View Segments]** [access control permissions](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.
>* To export *identities*, you need the **[!UICONTROL View Identity Graph]** [access control permission](/help/access-control/home.md#permissions). <br> ![Select identity namespace highlighted in the workflow to activate audiences to destinations.](/help/destinations/assets/overview/export-identities-to-destination.png "Select identity namespace highlighted in the workflow to activate audiences to destinations."){width="100" zoomable="yes"}

Read [Activate profiles and audiences to streaming audience export destinations](/help/destinations/ui/activate-segment-streaming-destinations.md) for instructions on activating audiences to this destination.

## Validate data export {#exported-data}

To verify that data audience was shared with Advertising Cloud, check the following:

* The data flow in your [!DNL Real-Time CDP] destination is successful.

* In DSP, the audience is available when you create or edit an audience from [!UICONTROL Audiences] > [!UICONTROL All Audiences] or from within the [!UICONTROL Audience Targeting] section of placement settings. The audience should be visible in the [!UICONTROL Adobe Segments] tab under the [!UICONTROL Real-Time CDP] folder.

![Real-Time CDP audiences in DSP audience settings](/help/destinations/assets/catalog/advertising/adobe-advertising-cloud-connection/segments-in-dsp.png)

## Data usage and governance {#data-usage-governance}

All [!DNL Adobe Experience Platform] destinations are compliant with data usage policies when handling your data. For detailed information about how [!DNL Adobe Experience Platform] enforces data governance, see the [Data Governance overview](/help/data-governance/home.md).
