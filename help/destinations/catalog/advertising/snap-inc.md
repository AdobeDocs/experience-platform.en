---
title: Snap Inc connection
description: Learn how to connect to the Snapchat Ads Platform and export your audiences from Experience Platform.
exl-id: 1f0f2dc0-5f3d-424b-9b22-b1a14ac30039
---
# Snap Inc connection

## Overview {#overview}

[Snapchat Ads](https://forbusiness.snapchat.com/) are made for every business, no matter the size or industry. Become a part of Snapchatters' everyday conversations with full-screen, digital ads that inspire action from the people that matter most to your business.

>[!IMPORTANT]
>
>The destination connector and documentation page are created and maintained by the *Snap Inc* team. For any inquiries or update requests, please contact them directly at *dev-support@snap.com*

## Use cases {#use-cases}

This destination allows marketers to import user audiences created in Experience Platform into Snapchat Ads and use them to target their ads. 

## Prerequisites {#prerequisites}

To use this destination, you must have a Snapchat Ads account. Please refer to this documentation for information about how to create one:

[Get Started with Snapchat Advertising](https://businesshelp.snapchat.com/s/article/overview?language=en_US)

## Limitations {#limitations}

* Snap Inc does not support multiple identities for a given audience segment. Please map only one identity when activating a segment.
* Snap Inc does not support renaming segments. To rename a segment, you must deactivate, rename it, and then activate it.
* It is not possible to define a retention period for an audience segment's members. All members have lifetime retention and will be in the audienceuntil they are removed.

## Supported identities {#supported-identities}

The *Snap Inc* destination supports the activation of identities described in the table below. Learn more about [identities](/help/identity-service/namespaces.md).

All identifiers sent to the *Snap Inc* destination must be hashed in SHA-256 format. To hash plain text identifiers before sending them to the destination, check the **[!UICONTROL Apply transformation]** option when mapping target identifiers for the destination. 

>[!WARNING]
> 
> Unhashed identifiers will not be accepted by the Snap Inc destination and sending them could cause errors.


>[!IMPORTANT]
> 
> The Snap Inc destination does not support multiple identities. Please select only one identity.

|Target Identity|Description|Considerations|
|---|---|---|
|Email Address |SHA-256 hashed email address | Map email addresses into the target identity field *emailAddress*.|
|Phone Number |SHA-256 hashed phone number| Map email addresses into the target identity field *phoneNumber*.|
|GAID |SHA-256 hashed Google Advertising ID| Map Google Advertising IDs into the target identity field *gaid*.|
|IDFA |SHA-256 hashed Apple Advertising ID| Map Apple Advertising IDs into the target identity field *idfa*.|

{style="table-layout:auto"}

## Export type and frequency {#export-type-frequency}

Refer to the table below for information about the destination export type and frequency.

| Item | Type | Notes |
---------|----------|---------|
| Export type | **[!UICONTROL Audience export]** | You are exporting all members of an audience with the identifiers (name, phone number, or others) used in the *YOURDESTINATION* destination.|
| Export frequency | **[!UICONTROL Streaming]** | Streaming destinations are "always on" API-based connections. As soon as a profile is updated in Experience Platform based on audience evaluation, the connector sends the update downstream to the destination platform. Read more about [streaming destinations](/help/destinations/destination-types.md#streaming-destinations).|

{style="table-layout:auto"}

## Connecting to Snap Inc {#connect}

>[!IMPORTANT]
> 
>To connect to the destination, you need the **[!UICONTROL Manage Destinations]** [access control permission](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.

### Authenticate to destination {#authenticate}

To authenticate to the destination, follow these steps:

1. Find the *Snap Inc* destination from Adobe Experience Platform's Destination Catalog and select **Set Up**.
2. Select **[!UICONTROL Connect to destination]**. You will be redirected to the following screen:
    ![Auth Screen 1](/help/destinations/assets/catalog/advertising/snapchat-ads/auth1.png)
3. Enter your Snapchat credentials and select **Log In**.
4. You will be shown the Snapchat data that Adobe Experience Platform will be be able to access. Select **Continue** to proceed with the connection process. 

![Auth Screen 2](/help/destinations/assets/catalog/advertising/snapchat-ads/auth2.png)

After selecting continue, wait until you are redirected back to Adobe Experience Platform.

### Fill in destination details {#destination-details}

![Destination Details](/help/destinations/assets/catalog/advertising/snapchat-ads/destinationdetails.png)

To configure details for the destination, fill in the required fields and select **[!UICONTROL Next]**.

*  **[!UICONTROL Name]**: A name by which you will recognize this destination in the future.
*  **[!UICONTROL Description]**: A description that will help you identify this destination in the future.
*  **[!UICONTROL Account ID]**: The Ad Account ID that is associated with the Ad Account that you will like to import your audiences to. For more information about how to find this, please refer to [this documentation on the Snapchat Business Help Center](https://businesshelp.snapchat.com/s/article/biz-acct-id?language=en_US).

>[!IMPORTANT]
> 
>Entering an incorrect or invalid Snapchat Ad Account ID will cause audience activation to fail. Please double check that you have entered the proper Ad Account ID.

### Enable alerts {#enable-alerts}

You can enable alerts to receive notifications on the status of the dataflow to your destination. Select an alert from the list to subscribe to receive notifications on the status of your dataflow. For more information on alerts, see the guide on [subscribing to destinations alerts using the UI](../../ui/alerts.md).

When you are finished providing details for your destination connection, select **[!UICONTROL Next]**.

## Activate audiences to this destination {#activate}

>[!IMPORTANT]
> 
>To activate data, you need the **[!UICONTROL Manage Destinations]**, **[!UICONTROL Activate Destinations]**, **[!UICONTROL View Profiles]**, and **[!UICONTROL View Segments]** [access control permissions](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.

Read [Activate profiles and audiences to streaming audience export destinations](/help/destinations/ui/activate-segment-streaming-destinations.md) for instructions on activating audiences to this destination.

## Validate data export {#exported-data}

After activating audiences to the *Snap Inc* destination, you will be able to see the audiences in the Snap Ads Manager's [**Audiences** section](https://businesshelp.snapchat.com/s/article/audience-sharing). To navigate to this section, follow these steps:

1. Log into the [Snap Ads Manager](https://ads.snapchat.com/)
2. Select **Audiences** from the pulldown menu in the upper left corner of the screen. You will see the audiences that you activated in Adobe Experience Platform in the Audience Library:

![Audiences](/help/destinations/assets/catalog/advertising/snapchat-ads/audiences.png)

Please note that when an Adobe audience is first activated to Snap Inc, you will initially see it as an empty audience. This is because Adobe Experience Platform does not export member data to Snap Inc until it evaluates the audience. For more information about how audiences are evaluated in Experience Platform, please refer to the [Segmentation Service overview](https://experienceleague.adobe.com/docs/experience-platform/segmentation/home.html?lang=en#evaluate-segments).

## Data usage and governance {#data-usage-governance}

All [!DNL Adobe Experience Platform] destinations are compliant with data usage policies when handling your data. For detailed information on how [!DNL Adobe Experience Platform] enforces data governance, see the [Data Governance overview](/help/data-governance/home.md).
