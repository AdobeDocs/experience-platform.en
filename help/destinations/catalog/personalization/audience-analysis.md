---
title: Audience Analysis destination
description: View audiences that customers qualify for in Customer Journey Analytics.
badgeLimitedAvailability: label="Limited availability" type="Informative"
---
# Audience Analysis destination

The [!UICONTROL Audience Analysis] destination allows you to enrich Adobe Experience Platform audience data into [Customer Journey Analytics](https://experienceleague.adobe.com/docs/analytics-platform/using/cja-overview/cja-overview.html). You can select which audiences that you want to include in the resulting enriched data. Audience qualifications are then available as dimensions in [Analysis Workspace](https://experienceleague.adobe.com/docs/analytics-platform/using/cja-workspace/home.html) reporting.

>[!AVAILABILITY]
>
>This destination is in a limited testing phase. If you are interested in using this destination, contact your Adobe Account Team.

## Prerequisites

The following are required before using this destination:

* You must be provisioned to use the Audience Analysis destination. If you are not yet provisioned to use this destination, contact your Adobe Account Team.
* You must be provisioned to use Customer Journey Analytics.
* You must have at least one audience created in Adobe Experience Platform.

## Supported identities

Audience Analysis supports the activation of identities described in the table below. Learn more about [identities](/help/identity-service/features/namespaces.md). Experience Cloud ID (ECID) is typically used.

|Target Identity|Description|Considerations|
|---|---|---|
|GAID|Google Advertising ID|Select the GAID target identity when your source identity is a GAID namespace.|
|IDFA|Apple ID for Advertisers|Select the IDFA target identity when your source identity is an IDFA namespace.|
|ECID|Experience Cloud ID|A namespace that represents ECID. This namespace can also be referred to by the following aliases: "Adobe Marketing Cloud ID", "Adobe Experience Cloud ID", "Adobe Experience Platform ID". See the following document on [ECID](/help/identity-service/features/ecid.md) for more information.|
|phone_sha256|Phone numbers hashed with the SHA256 algorithm|Both plain text and SHA256 hashed phone numbers are supported by Adobe Experience Platform. When your source field contains unhashed attributes, check the **[!UICONTROL Apply transformation]** option, to have [!DNL Platform] automatically hash the data on activation.|
|email_lc_sha256|Email addresses hashed with the SHA256 algorithm|Both plain text and SHA256 hashed email addresses are supported by Adobe Experience Platform. When your source field contains unhashed attributes, check the **[!UICONTROL Apply transformation]** option, to have [!DNL Platform] automatically hash the data on activation.|
|extern_id|Custom user IDs|Select this target identity when your source identity is a custom namespace.|

{style="table-layout:auto"}

## Supported audiences

The following types of audiences are supported when using this destination:

| Audience origin | Supported | Description | 
---------|----------|----------|
| [!DNL Segmentation Service] | ✓ | Audiences generated through the Experience Platform [Segmentation Service](../../../segmentation/home.md).|
| Custom uploads | ✓ | Audiences [imported](../../../segmentation/ui/overview.md#import-audience) into Experience Platform from CSV files. |

{style="table-layout:auto"}

## Export type and frequency

Refer to the table below for information about the destination export type and frequency.

| Item | Type | Notes |
---------|----------|---------|
| Export type | **[!UICONTROL Audience export]** | You are exporting all members of a audience with the identifiers (name, phone number, or others) used in the Audience Analysis destination.|
| Export frequency | **[!UICONTROL Streaming]** | Streaming destinations are "always on" API-based connections. When a profile is updated in Experience Platform based on audience evaluation, the connector sends the update downstream to the destination platform. Read more about [streaming destinations](/help/destinations/destination-types.md#streaming-destinations).|

{style="table-layout:auto"}

## Configure new destination

>[!IMPORTANT]
> 
>To create destination, you need the **[!UICONTROL View Destinations]** and **[!UICONTROL Manage Destinations]** [access control permission](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.

To create this destination, follow the steps described in the [destination configuration tutorial](../../ui/connect-destination.md).

### Destination details

To configure details for the destination, fill in the required and optional fields below. An asterisk next to a field in the UI indicates that the field is required.

* **[!UICONTROL Name]**: The destination name.
* **[!UICONTROL Description]**: The destination description.
* **[!UICONTROL Datastream ID]**: The datastream ID that you want to enrich with qualifying audiences. You can obtain this ID in the [Datastreams manager](/help/datastreams/overview.md).
* **[!UICONTROL Integration alias]**: The integration alias.

### Alerts

You can enable alerts to receive notifications on the status of the dataflow to your destination. For more information on alerts, see the guide on [subscribing to destinations alerts using the UI](../../ui/alerts.md).

* **[!UICONTROL Activation Skipped Rate Exceed]**: Be notified when activation skipped rate exceeds a threshold.

When you are finished providing details for your destination connection, select **[!UICONTROL Next]**.

### Governance policy & enforcement actions

This optional section allows you to define your data governance policies and ensure that the data used is compliant when audiences are sent and active.

When you are finished selecting the desired marketing actions for the destination, select **[!UICONTROL Create]**.

## Activate audiences to this destination {#activate}

>[!IMPORTANT]
> 
>To activate data, you need the **[!UICONTROL View Destinations]**, **[!UICONTROL Activate Destinations]**, **[!UICONTROL View Profiles]**, and **[!UICONTROL View Segments]** [access control permissions](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.

Once the destination is created, you can activate the desired audiences for the destination.

1. If you're not already in the created destination, you can locate it again by navigating to **[!UICONTROL Destinations]** > **[!UICONTROL Browse]**.
1. Select **[!UICONTROL Activate audiences]**.
1. Select the desired audiences that you want to analyze qualifications for. When finished, select **[!UICONTROL Next]**.
1. Review the destination configuration and audience settings, then select **[!UICONTROL Finish]**.

You can add more audiences to analyze in the future by navigating back to the **[!UICONTROL Activate audiences]** page. You cannot remove audiences once they are activated.
