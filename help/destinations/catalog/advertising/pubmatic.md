---
title: PubMatic Connect
description: PubMatic maximizes customer value by delivering the programmatic digital marketing supply chain of the future. PubMatic Connect combines platform technology and dedicated service to enhance how inventory and data are packaged and transacted.
---

# PubMatic Connect destination {#your-destination}

## Overview {#overview}

PubMatic maximizes customer value by delivering the programmatic digital marketing supply chain of the future. PubMatic Connect combines platform technology and dedicated service to enhance how inventory and data are packaged and transacted.

This destination can be used to send audience data to the PubMatic platform.

> [!IMPORTANT]
>
> The destination connector and documentation page are created and maintained by the PubMatic team. For any inquiries or update requests, please contact them directly at `support@pubmatic.com`.

## Use cases {#use-cases}

To help you better understand how and when you should use the PubMatic Connect destination, here are sample use cases that Adobe Experience Platform customers can solve by using this destination.

### Use case #1 {#use-case-1}

Publisher or data providers want to send audiences from Adobe Experience Platform to onboard identities into PubMatic Connect in order to target users on mobile, web and CTV platforms, using a large range of identifiers.

## Prerequisites {#prerequisites}

Talk to your PubMatic Account Manager to make sure your account is configured correctly and supports onboarding of audience segments. They will also make sure you have all the relevant details to set up this destination and to provide you support during the integration.

## Supported identities {#supported-identities}

PubMatic Connect supports the activation of identities described in the table below. Learn more about [identities](/help/identity-service/namespaces.md).

| Target Identity | Description              | Considerations                                                                  |
| --------------- | ------------------------ | ------------------------------------------------------------------------------- |
| GAID            | Google Advertising ID    | Select the GAID target identity when your source identity is a GAID namespace.  |
| IDFA            | Apple ID for Advertisers | Select the IDFA target identity when your source identity is an IDFA namespace. |
| extern_id       | Custom user IDs          | Select this target identity when your source identity is a custom namespace.    |

{style="table-layout:auto"}

## Supported audiences {#supported-audiences}

This section describes which type of audiences you can export to this destination.

| Audience origin             | Supported | Description                                                                                                         |
| --------------------------- | --------- | ------------------------------------------------------------------------------------------------------------------- |
| [!DNL Segmentation Service] | ✓         | Audiences generated through the Experience Platform [Segmentation Service](../../../segmentation/home.md).          |
| Custom uploads              | ✓         | Audiences [imported](../../../segmentation/ui/overview.md#import-audience) into Experience Platform from CSV files. |

{style="table-layout:auto"}

## Export type and frequency {#export-type-frequency}

Refer to the table below for information about the destination export type and frequency.

| Item             | Type                            | Notes                                                                                                                                                                                                                                                                                                                              |
| ---------------- | ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Export type      | **[!UICONTROL Segment export]** | You are exporting all members of a segment (audience) with the identifiers (name, phone number, or others) used in the PubMatic Connect destination.                                                                                                                                                                               |
| Export frequency | **[!UICONTROL Streaming]**      | Streaming destinations are "always on" API-based connections. As soon as a profile is updated in Experience Platform based on segment evaluation, the connector sends the update downstream to the destination platform. Read more about [streaming destinations](/help/destinations/destination-types.md#streaming-destinations). |

{style="table-layout:auto"}

## Connect to the destination {#connect}

> [!IMPORTANT]
>
> To connect to the destination, you need the **[!UICONTROL Manage Destinations]** [access control permission](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.

To connect to this destination, follow the steps described in the [destination configuration tutorial](../../ui/connect-destination.md). In the configure destination workflow, fill in the fields listed in the two sections below.

### Authenticate to destination {#authenticate}

To authenticate to the destination, fill in the required fields and select **[!UICONTROL Connect to destination]**.

![How to authenticate](/help/destinations/assets/catalog/advertising/pubmatic/authenticate-destination.png)

- **[!UICONTROL Bearer token]**: Fill in the bearer token to authenticate to the destination.

### Fill in destination details {#destination-details}

To configure details for the destination, fill in the required and optional fields below. An asterisk next to a field in the UI indicates that the field is required.

![Destination details](/help/destinations/assets/catalog/advertising/pubmatic/destination-details.png)

- **[!UICONTROL Name]**: A name by which you will recognize this destination in the future.
- **[!UICONTROL Description]**: A description that will help you identify this destination in the future.
- Data partner ID: The data partner ID set up in you PubMatic account for this integration.
- Default Country Code: The default country code that should be applied to all identities if none is provided in the profile.
- **[!UICONTROL Account ID]**: Your PubMatic Connect account ID.
- Account type: The account type of your PubMatic platform account. These are the available options:
  - PUBLISHER
  - Demand Partner
  - BUYER

### Enable alerts {#enable-alerts}

You can enable alerts to receive notifications on the status of the dataflow to your destination. Select an alert from the list to subscribe to receive notifications on the status of your dataflow. For more information on alerts, see the guide on [subscribing to destinations alerts using the UI](../../ui/alerts.md).

When you are finished providing details for your destination connection, select **[!UICONTROL Next]**.

## Activate segments to this destination {#activate}

> [!IMPORTANT]
>
> - To activate data, you need the **[!UICONTROL Manage Destinations]**, **[!UICONTROL Activate Destinations]**, **[!UICONTROL View Profiles]**, and **[!UICONTROL View Segments]** [access control permissions](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.
> - To export _identities_, you need the **[!UICONTROL View Identity Graph]** [access control permission](/help/access-control/home.md#permissions). <br> ![Select identity namespace highlighted in the workflow to activate audiences to destinations.](/help/destinations/assets/overview/export-identities-to-destination.png){width="100" zoomable="yes"}

Read [Activate profiles and segments to streaming segment export destinations](/help/destinations/ui/activate-segment-streaming-destinations.md) for instructions on activating audience segments to this destination.

### Map attributes and identities {#map}

Selecting source fields:

- Select an identifier (usually namespaces like IDFA or a custom ID).

Selecting target fields:

- Select the PubMatic UID type that matches the identifier you selected in the first step.
- Talk to your PubMatic Account Manager to get the information on which UID type will be correct during the step.

## Exported data / Validate data export {#exported-data}

The PubMatic UI will allow you to check if the data has been pushed correctly and the that the segments are available. It can take up to 24 hours after data has been pushed for the PubMatic UI to be updated.

Data should be available immediately for targeting. Please talk to your PubMatic Account Manager for more details.

## Data usage and governance {#data-usage-governance}

All [!DNL Adobe Experience Platform] destinations are compliant with data usage policies when handling your data. For detailed information on how [!DNL Adobe Experience Platform] enforces data governance, read the [Data Governance overview](/help/data-governance/home.md).
