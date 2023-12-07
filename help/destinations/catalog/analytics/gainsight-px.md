---
title: Gainsight PX 
description: The Gainsight PX destination allows allows segmentation information to be pushed to Gainsight PX 
---

# Gainsight PX connection {#gainsight_px-destination}


## Overview {#overview}

[Gainsight PX](https://www.gainsight.com/product-experience/) is a product experience platform that enables product teams to understand how users use their products, collect feedback, and create in-app engagements like product walkthroughs to drive user onboarding and product adoption.

>[!IMPORTANT]
>
>The destination connector and documentation page are created and maintained by the *Gainsight PX* team. For any inquiries or update requests, please contact them directly at *`pxsupport@gainsight.com`.*

## Prerequisites {#prerequisites}

* Contact Gainsight support to request the external segment features are enabled for your subscription
* Generate an OAuth Secret value for your PX subscription, using the Generate New Secret button at the bottom of the Company Details page.

## Supported identities {#supported-identities}


*Gainsight PX* supports the activation of identities described in the table below. Learn more about [identities](/help/identity-service/namespaces.md).

| Target Identity |Description| Considerations                                                                                                                                                                                                                                                                         |
|-----------------|---|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| IdentifyID      |Custom user IDs| Use this namespace to use whatever identify is used when identifying users within PX.                                                                                                                                                                                                  |

{style="table-layout:auto"}

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
| Export type | **[!UICONTROL Segment export]** | You are exporting all members of a segment (audience) with the identifiers (name, phone number, or others) used in the *YourDestination* destination.|
| Export frequency | **[!UICONTROL Streaming]** | Streaming destinations are "always on" API-based connections. As soon as a profile is updated in Experience Platform based on segment evaluation, the connector sends the update downstream to the destination platform. Read more about [streaming destinations](/help/destinations/destination-types.md#streaming-destinations).|

{style="table-layout:auto"}

## Connect to the destination {#connect}

>[!IMPORTANT]
> 
>To connect to the destination, you need the **[!UICONTROL Manage Destinations]** [access control permission](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.

To connect to this destination, follow the steps described in the [destination configuration tutorial](../../ui/connect-destination.md). In the configure destination workflow, fill in the fields listed in the two sections below.

### Authenticate to destination {#authenticate}

To authenticate to the destination, fill in the required fields and select **[!UICONTROL Connect to destination]**.

![Authentication screenshot](../../assets/catalog/analytics/gainsight_px/auth-screen.png)
* **[!UICONTROL Password]**: The password used to login to the [Gainsight PX UI](https://app.aptrinsic.com)
* **[!UICONTROL Client ID]**: The Gainsight PX subscription ID on the [Company Details page](https://app.aptrinsic.com/settings/subscription)
* **[!UICONTROL Client secret]**: The OAuth secret generated on bottom of the [Company Details page](https://app.aptrinsic.com/settings/subscription)
* **[!UICONTROL Username]**: The email used to login to the [Gainsight PX UI](https://app.aptrinsic.com)

### Fill in destination details {#destination-details}

To configure details for the destination, fill in the required and optional fields below. An asterisk next to a field in the UI indicates that the field is required.

![destination details screenshot](../../assets/catalog/analytics/gainsight_px/destination_details.png)

*  **[!UICONTROL Name]**: A name by which you will recognize this destination in the future.
*  **[!UICONTROL Description]**: A description that will help you identify this destination in the future.

When you are finished providing details for your destination connection, select **[!UICONTROL Next]**.

## Activate segments to this destination {#activate}

>[!IMPORTANT]
> 
>* To activate data, you need the **[!UICONTROL Manage Destinations]**, **[!UICONTROL Activate Destinations]**, **[!UICONTROL View Profiles]**, and **[!UICONTROL View Segments]** [access control permissions](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.
>* To export *identities*, you need the **[!UICONTROL View Identity Graph]** [access control permission](/help/access-control/home.md#permissions). <br> ![Select identity namespace highlighted in the workflow to activate audiences to destinations.](/help/destinations/assets/overview/export-identities-to-destination.png "Select identity namespace highlighted in the workflow to activate audiences to destinations."){width="100" zoomable="yes"}

Read [Activate profiles and segments to streaming segment export destinations](/help/destinations/ui/activate-segment-streaming-destinations.md) for instructions on activating audience segments to this destination.

### Map attributes and identities {#map}

The only relevant mapping is between the Adobe identity and the Gainsight PX identity.  Choose the appropriate identity source field on the Adobe side and map it to the IDENTIFY_ID (the only choice) field on the target side.  It is important that the source field have the exact same value that is passed during the Gainsight PX identify step.
![Example showing the identity mapping](../../assets/catalog/analytics/gainsight_px/mapping_identities.png)

## Exported data / Validate data export {#exported-data}

Segmentation data is streamed from the Adobe environment to Gainsight PX.  
Segment metadata will be visible in the Segments screen within the PX application:![Segments screen](../../assets/catalog/analytics/gainsight_px/segment_metadata.png)  
Segment membership information will be visible on the Segments tab of the Audience Explorer screen within PX: ![Audience Explorer](../../assets/catalog/analytics/gainsight_px/PX_Segments.png)

## Data usage and governance {#data-usage-governance}

All [!DNL Adobe Experience Platform] destinations are compliant with data usage policies when handling your data. For detailed information on how [!DNL Adobe Experience Platform] enforces data governance, read the [Data Governance overview](/help/data-governance/home.md).

