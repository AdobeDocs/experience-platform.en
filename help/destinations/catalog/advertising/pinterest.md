---
title: Pinterest Customer List connection
description: Create audiences from your customer lists, people who've visited your site or people who have already interacted with your content on Pinterest.
exl-id: e601f75f-0d40-4cd0-93ca-54d7439f1db7
---
# [!DNL Pinterest Customer List] connection

## Overview {#overview}

Create audiences from your customer lists, people who've visited your site or people who have already interacted with your content on Pinterest.

>[!IMPORTANT]
>
>This destination was built by the Pinterest team. For any inquiries or update requests, please contact them directly at https://help.pinterest.com/en/contact.

## Prerequisites {#prerequisites}

* The user would need to authenticate with a Pinterest account which has access to the advertiser account they want to add an audience to. Details on sharing advertiser accounts can be found [here](https://help.pinterest.com/en/business/article/share-and-manage-access-to-your-ad-accounts). Specifically, the user would need the "audience" access levels.
* Details on customer list identity formats can be found [here](https://help.pinterest.com/en/business/article/audience-targeting). 

## Supported identities {#supported-identities}

The [!DNL Pinterest Customer List] destination supports the activation of identities described in the table below. Learn more about [identities](https://experienceleague.adobe.com/docs/experience-platform/identity/namespaces.html?lang=en#getting-started).

In the [mapping step](/help/destinations/ui/activate-segment-streaming-destinations.md#mapping) of the destination activation workflow, map the desired identities to the target field *pinterest_audience*. Identities are distinguished and resolved upon data ingestion into Pinterest.

|Target Identity|Description|Considerations|
|---|---|---|
|GAID|[!DNL Google Advertising ID]|Map the *GAID* source identity namespace to the target identity field *pinterest_audience*. Identities are distinguished and resolved upon data ingestion into Pinterest.|
|IDFA|[!DNL Apple ID for Advertisers]|Map the *IDFA* source identity namespace to the target identity field *pinterest_audience*. Identities are distinguished and resolved upon data ingestion into Pinterest.|
|EMAIL|Email addresses (clear text or hashed with the SHA256 algorithm)|Both plain text and SHA256 hashed email addresses are supported by Adobe Experience Platform. <br> Map the *Email* or *Email_LC_SHA256* source identity namespace to the target identity field *pinterest_audience*.|

{style="table-layout:auto"}

## Export type and frequency {#export-type-frequency}

Refer to the table below for information about the destination export type and frequency.

| Item | Type | Notes |
---------|----------|---------|
| Export type | **[!UICONTROL Segment export]** | You are exporting all members of a segment (audience) with the identifiers (name, phone number, or others) used in the Pinterest Customer List destination.|
| Export frequency | **[!UICONTROL Streaming]** | Streaming destinations are "always on" API-based connections. As soon as a profile is updated in Experience Platform based on segment evaluation, the connector sends the update downstream to the destination platform. Read more about [streaming destinations](/help/destinations/destination-types.md#streaming-destinations).|

{style="table-layout:auto"}

## Use Cases {#use-cases}

To help you better understand how and when you should use the [!DNL Pinterest Customer List] destination, here are sample use cases that Adobe Experience Platform customers can solve by using this destination.

### Use Case #1

Create audiences from your customer lists, people who've visited your site or people who have already interacted with your content on Pinterest.

## Connect to destination {#connect}

>[!IMPORTANT]
> 
>To connect to the destination, you need the **[!UICONTROL Manage Destinations]** [access control permission](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.

To connect to this destination, follow the steps described in the [destination configuration tutorial](../../ui/connect-destination.md).

### Connection parameters {#parameters}

While [setting up](../../ui/connect-destination.md) this destination, you must provide the following information:

*  **[!UICONTROL Name]**: A name by which you will recognize this destination in the future.
*  **[!UICONTROL Description]**: A description that will help you identify this destination in the future.
*  **[!UICONTROL Advertiser ID]**: Your Pinterest advertiser ID.

### Enable alerts {#enable-alerts}

You can enable alerts to receive notifications on the status of the dataflow to your destination. Select an alert from the list to subscribe to receive notifications on the status of your dataflow. For more information on alerts, see the guide on [subscribing to destinations alerts using the UI](../../ui/alerts.md).

When you are finished providing details for your destination connection, select **[!UICONTROL Next]**.

## Activate segments to this destination {#activate}

>[!IMPORTANT]
> 
>To activate data, you need the **[!UICONTROL Manage Destinations]**, **[!UICONTROL Activate Destinations]**, **[!UICONTROL View Profiles]**, and **[!UICONTROL View Segments]** [access control permissions](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.

Read [Activate profiles and segments to streaming segment export destinations](/help/destinations/ui/activate-segment-streaming-destinations.md) for instructions on activating audience segments to this destination.

## Data usage and governance {#data-usage-governance}

All [!DNL Adobe Experience Platform] destinations are compliant with data usage policies when handling your data. For detailed information on how [!DNL Adobe Experience Platform] enforces data governance, see the [Data Governance overview](https://experienceleague.adobe.com/docs/experience-platform/data-governance/home.html).

## Additional resources {#additional-resources}

Please refer to the the [Pinterest Help Center page](https://help.pinterest.com/en/business/article/audience-targeting) for additional information.
