---
title: Index Exchange
description: Connect to Index Exchange and activate your data for use as audience segments for targeting deals created in Index Publisher Accounts or Index Marketplaces.
---

# Index Exchange {#index-exchange}

## Overview {#overview}

Index Exchange is a global advertising supply-side platform enabling media owners to maximize the value of their content on any screen. We’re a proud industry pioneer with over 20 years of experience connecting leading experience makers with the world’s largest brands to ensure a quality experience for consumers.

This destination connector provides a means to export audience segments from Adobe Experience Platform to Index Exchange's programmatic advertising platform.

Audience segments exported to Index Exchange can be used for targeting in deals created in Index Publisher Accounts, Marketplaces curator accounts, or made available to publishers and curators via Data Vendor accounts.

>[!IMPORTANT]
>
> The destination connector and documentation page are created and maintained by the Index Exchange team. For any inquiries or update requests, contact them directly at `technical_am_marketplace@indexexchange.com`

## Use cases {#use-cases}

To help you better understand how and when you should use the Index Exchange destination, here is a sample use case that Adobe Experience Platform customers can solve by using this destination.

### Targeting users on mobile, web, and CTV platforms {#targeting-users}

Publishers, curators, or data vendors who want to send audiences from Adobe Experience Platform to Index Exchange to target users on mobile, web, and CTV platforms, using a large range of identifiers.

### Targeting specific content on mobile, web, and CTV platforms {#targeting-content}

Publishers, curators, or data vendors who want to send audiences from Adobe Experience Platform to Index Exchange to target users looking at specific content across mobile, web, and CTV platforms using specific URLs, App Bundles or Content IDs.
## Prerequisites {#prerequisites}

Audience segments must be registered with Index Exchange using an additional process when using this destination before they will appear in your account. Reach out to your Index Exchange account representative for assistance with this process.

## Supported identities {#supported-identities}

Index Exchange supports the activation of identities described in the table below. Learn more about [identities](/help/identity-service/features/namespaces.md).

Please note that Index Exchange destinations only allow for a single identity type at a time to be uploaded, indicated by adding the appropriate identifier type to the details when configuring the destination (see the ["Fill in destination details"](#destination-details)) section below. To upload multiple identity types, you must create multiple instances of the Index Exchange destination.

|Target Identity|Description|Considerations|
|---|---|---|
|GAID|Google Advertising ID|Select the GAID target identity when your source identity is a GAID namespace.|
|IDFA|Apple ID for Advertisers|Select the IDFA target identity when your source identity is an IDFA namespace.|
|Windows AID|Windows Advertising ID|Select the Windows AID target identity when your source identity is a Windows AID namespace.|
|extern_id|Custom user IDs|Select this target identity when your source identity is a custom namespace.|

{style="table-layout:auto"}

## Supported audiences {#supported-audiences}

This section describes which type of audiences you can export to this destination.

| Audience origin | Supported | Description | 
---------|----------|----------|
| [!DNL Segmentation Service] | ✓ | Audiences generated through the Experience Platform [Segmentation Service](../../../segmentation/home.md).|
| Custom uploads | ✓ | Audiences [imported](../../../segmentation/ui/overview.md#import-audience) into Experience Platform from CSV files. |

{style="table-layout:auto"}

## Export type and frequency {#export-type-frequency}

Refer to the table below for information about the destination export type and frequency.

| Item | Type | Notes |
---------|----------|---------|
| Export type | **[!UICONTROL Segment export]** | You are exporting all members of a segment (audience) with the identifiers (IDFA, GAID, or others) used in the Index Exchange destination.|
| Export frequency | **[!UICONTROL Batch]** | Batch destinations export files to downstream platforms in increments of three, six, eight, twelve, or twenty-four hours. Read more about [batch file-based destinations](/help/destinations/destination-types.md#file-based).|

{style="table-layout:auto"}

## Connect to the destination {#connect}

>[!IMPORTANT]
> 
>To connect to the destination, you need the **[!UICONTROL View Destinations]** and **[!UICONTROL Manage Destinations]** [access control permission](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.

To connect to this destination, follow the steps described in the [destination configuration tutorial](../../ui/connect-destination.md). In the configure destination workflow, fill in the fields listed in the two sections below.

### Fill in destination details {#destination-details}

To configure details for the destination, fill in the required and optional fields below. An asterisk next to a field in the UI indicates that the field is required.

![Destination details](../../assets/catalog/advertising/index-exchange/destination-details.png)

*  **[!UICONTROL Name]**: A name by which you will recognize this destination in the future.
*  **[!UICONTROL Description]**: A description that will help you identify this destination in the future.
*  **[!UICONTROL Identifier Type]**: The Index Exchange provided "Identifier Type" that corresponds to the type of identifier you will be sending to Index Exchange. See the table of supported identifier types below. Reach out to your Index Exchange account representative if you are unsure which Identifier Type to use. If you wish to send multiple identifier types, you must create multiple instances of this destination.
*  **[!UICONTROL Account ID]**: Your Index Exchange Account ID. Please note this is not the same as your Publisher ID. If in doubt, please reach out to your Index Exchange account representative.

#### Supported Identifier Types

| Identifier Type  | Description | 
|------------------|-------------|
| [!DNL appbundle] | Mobile App Bundle |
| [!DNL contentid] | Content ID |
| [!DNL deviceid]  | Device ID (eg. IDFA, GAID, WAID, etc) |
| [!DNL ip]        | IP Address |
| [!DNL postcode]    | ZIP / Postal Code |
| [!DNL url]       | Site URL |
| [!DNL ppid_xxx]  | For PPID identifiers, reach out to your Index Exchange account representative for assistance. |

### Enable alerts {#enable-alerts}

You can enable alerts to receive notifications on the status of the dataflow to your destination. Select an alert from the list to subscribe to receive notifications on the status of your dataflow. For more information on alerts, see the guide on [subscribing to destinations alerts using the UI](../../ui/alerts.md).

When you are finished providing details for your destination connection, select **[!UICONTROL Next]**.

## Activate segments to this destination {#activate}

>[!IMPORTANT]
> 
>* To activate data, you need the **[!UICONTROL View Destinations]**, **[!UICONTROL Activate Destinations]**, **[!UICONTROL View Profiles]**, and **[!UICONTROL View Segments]** [access control permissions](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.
>* To export *identities*, you need the **[!UICONTROL View Identity Graph]** [access control permission](/help/access-control/home.md#permissions). <br> ![Select identity namespace highlighted in the workflow to activate audiences to destinations.](/help/destinations/assets/overview/export-identities-to-destination.png "Select identity namespace highlighted in the workflow to activate audiences to destinations."){width="100" zoomable="yes"}

Read [Activate audience data to batch profile export destinations](/help/destinations/ui/activate-batch-profile-destinations.md) for instructions on activating audience segments to this destination.

### Map attributes and identities {#map}

Selecting source fields:

- Select an identifier (usually namespaces like IDFA or a custom ID namespace). This must correspond to the Identifier Type selected when configuring the destination. For example when using IDFA identifier as a source field, the destination must have been set up with the "deviceid" Identifier Type.

Selecting target fields:

- Names of target fields are ignored and are not important. The destination only cares about the type of identifier being sent, which is determined by the Identifier Type selected when configuring the destination.

![Map attributes and identities](../../assets/catalog/advertising/index-exchange/identity-mapping.png)

### Register segments with Index Exchange {#register-segments}

Either before or after activating data to the destination, you must reach out to your account representative at Index Exchange to register the segments that you plan to activate. Your representative will provide you with instructions on how to register the additional segments details such as names, IDs, descriptions and pricing if applicable.

## Exported data / Validate data export {#exported-data}

Once registration is complete, the segments will appear available for targeting in your Index Exchange account. To confirm that the data is being received correctly, you can reach out to your Index Exchange account representative who can provide details on the volume of segment data received.

## Data usage and governance {#data-usage-governance}

All [!DNL Adobe Experience Platform] destinations are compliant with data usage policies when handling your data. For detailed information on how [!DNL Adobe Experience Platform] enforces data governance, read the [Data Governance overview](/help/data-governance/home.md).
