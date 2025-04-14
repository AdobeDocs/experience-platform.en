---
title: Reddit Adobe Audience Destination
description: Reddit Ads allows your brand to reach an audience of 379M+ weekly active uniques, who are having genuine conversations on millions of topics.

---

# Reddit Adobe Audience Destination {#reddit-adobe-audience-destination}

## Overview {#overview}

[Reddit Ads](https://www.business.reddit.com/) allows your brand to reach an audience of 379M+ weekly active uniques, who are having genuine conversations on millions of topics.

>[!IMPORTANT]
>
>The destination connector and documentation page are created and maintained by Reddit. Contact [Reddit ads support](https://business.reddithelp.com/s/contactsupport) for any inquiries or update requests.

## Prerequisites {#prerequisites}

You must have a Reddit Ads account to use this destination. [Get started with Reddit Ads today](https://ads.reddit.com/).

## Supported identities {#supported-identities}

The Reddit Adobe Audience Destination supports the activation of identities described in the table below.

|Target Identity|Description|
|---|---|
|`MAID_SHA256`|The Android or Apple ID for advertisers|
|`EMAIL_SHA256`|Email addresses hashed with the SHA256 algorithm|

{style="table-layout:auto"}

Both plain text and SHA256 hashed values are supported by Adobe Experience Platform. When your source field contains unhashed attributes, check the **[!UICONTROL Apply transformation]** option, to have [!DNL Platform] automatically hash the data on activation.|

## Supported audiences {#supported-audiences}

This section describes which type of audiences you can export to this destination.

| Audience origin | Supported | Description | 
---------|----------|----------|
| [!DNL Segmentation Service] | ✓ | Audiences generated through the Experience Platform [Segmentation Service](../../../segmentation/home.md).|
| Custom uploads | X | Audiences [imported](../../../segmentation/ui/overview.md#import-audience) into Experience Platform from CSV files. |

{style="table-layout:auto"}

## Export type and frequency {#export-type-frequency}

Refer to the table below for information about the destination export type and frequency.

| Item | Type | Notes |
---------|----------|---------|
| Export type | **[!UICONTROL Segment export]** | You are exporting all members of a segment (audience) with the identifiers used in the Reddit Adobe Audience destination.|
| Export frequency | **[!UICONTROL Streaming]** | Streaming destinations are "always on" API-based connections. As soon as a profile is updated in Experience Platform based on segment evaluation, the connector sends the update downstream to the destination platform. Read more about [streaming destinations](/help/destinations/destination-types.md#streaming-destinations).|

{style="table-layout:auto"}

## Connect to the destination {#connect}

>[!IMPORTANT]
> 
>To connect to the destination, you need the **[!UICONTROL View Destinations]** and **[!UICONTROL Manage Destinations]** [access control permission](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.

To connect to this destination, follow the steps described in the [destination configuration tutorial](../../ui/connect-destination.md). In the configure destination workflow, fill in the fields listed in the two sections below.

### Authenticate to destination {#authenticate}

To authenticate to the destination, select **[!UICONTROL Connect to destination]**. When prompted, log in to Reddit and authorize the connection.

![Add a link here to one or more sample screenshots that show users how to authenticate to your destination](/help/destinations/destination-sdk/docs-framework/assets/authenticate-destination.png)

* **[!UICONTROL Bearer token]**: Fill in the bearer token to authenticate to the destination.

### Fill in destination details {#destination-details}

To configure details for the destination, fill in the required and optional fields below. An asterisk next to a field in the UI indicates that the field is required.

![Add a link here to one or more sample screenshots that show users how to fill in details for your destination](/help/destinations/destination-sdk/docs-framework/assets/configure-destination-details.png)

*  **[!UICONTROL Name]**: A name by which you will recognize this destination in the future.
*  **[!UICONTROL Description]**: A description that will help you identify this destination in the future.
*  **[!UICONTROL Account ID]**: Your Reddit Ads account ID.

### Enable alerts {#enable-alerts}

You can enable alerts to receive notifications on the status of the dataflow to your destination. Select an alert from the list to subscribe to receive notifications on the status of your dataflow. For more information on alerts, see the guide on [subscribing to destinations alerts using the UI](../../ui/alerts.md).

When you are finished providing details for your destination connection, select **[!UICONTROL Next]**.

## Activate segments to this destination {#activate}

>[!IMPORTANT]
> 
>* To activate data, you need the **[!UICONTROL View Destinations]**, **[!UICONTROL Activate Destinations]**, **[!UICONTROL View Profiles]**, and **[!UICONTROL View Segments]** [access control permissions](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.
>* To export *identities*, you need the **[!UICONTROL View Identity Graph]** [access control permission](/help/access-control/home.md#permissions). <br> ![Select identity namespace highlighted in the workflow to activate audiences to destinations.](/help/destinations/assets/overview/export-identities-to-destination.png "Select identity namespace highlighted in the workflow to activate audiences to destinations."){width="100" zoomable="yes"}

Read [Activate profiles and segments to streaming segment export destinations](/help/destinations/ui/activate-segment-streaming-destinations.md) for instructions on activating audience segments to this destination.

### Map attributes and identities {#map}

Data will automatically map to the correct Reddit match key.  Learn more about [match keys](https://business.reddithelp.com/s/article/about-match-keys).

## Validate data {#exported-data}

Your segment audience will initialize in the [Audience Manager](https://business.reddithelp.com/s/article/custom-audiences). This audience will start forwarding data after [audience evaluation](segmentation/home.md#evaluate-segments).

## Data usage and governance {#data-usage-governance}

All [!DNL Adobe Experience Platform] destinations are compliant with data usage policies when handling your data. For detailed information on how [!DNL Adobe Experience Platform] enforces data governance, read the [Data Governance overview](/help/data-governance/home.md).

## Additional resources {#additional-resources}

[Learn more about Reddit custom audiences](https://business.reddithelp.com/s/article/custom-audiences).