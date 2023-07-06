---
keywords: mobile;mobile engagement destinations;moengage;moengage mobile engagement destination
title: Moengage connection
description: Adobe’s Real Time Customer Data Platform helps companies bring together known and anonymous data from multiple enterprise sources to create customer profiles. These profiles can then be used to provide personalized experiences across all channels and devices in real-time.
---

# [!DNL Moengage] connection

## Overview {#overview}

[!DNL Moengage]’s Real Time Customer Data Platform helps companies bring together known and anonymous data from multiple enterprise sources to create customer profiles. These profiles can then be used to provide personalized experiences across all channels and devices in real-time.

## Use cases {#use-cases}

[!DNL Moengage] and Adobe RT CDP integration allows you  to connect and map their Adobe data to MoEngage. Customers can then act on this data, delivering personalized, targeted experience

## Prerequisites {#prerequisites}

Before you can send your Adobe Experience Platform data to [!DNL Moengage], you must:

* Access to your [!DNL Moengage] and Adobe Experience Platform.
* [!DNL Moengage] data API ID - This can be accessed within the MoEngage Dashboard > Settings >> APIs >> General Settings.
* [!DNL Moengage]  data App Key - This can be created within the MoEngage Dashboard > Settings >> APIs >> General Settings.
* MoEngage data cluster.


## Supported identities {#supported-identities}

[!DNL Moengage] supports the activation of identities described in the table below.

|Target Identity| Description                                                                                                                                                            | Considerations                                                                         |
|---|------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------|
|user_id| Custom [!DNL Moengage] id for known profile. Map registered profile attribute of adobe to this identifier, which is useful for tracking profiles in [!DNL Moengage]    | This identifier supports string type. Either one of user_id or anonymous_id is required |
|anonymous_id| Custom [!DNL Moengage] id for unknown (anonymous) profile. Map anonymous profile attribute of adobe to this identifier | This identifier supports string type. Either one of user_id or anonymous_id is required |

{style="table-layout:auto"}

## Export type and frequency {#export-type-frequency}

*In the table, keep only the lines that correspond to your destination. You should have one line for Export type and one line for Export frequency. Delete the values that don't apply to your destination.*

Refer to the table below for information about the destination export type and frequency.

| Item | Type | Notes                                                                                                                                                                                                                                                                                                                              |
---------|----------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Export type | **[!UICONTROL Profile-based]** | You are exporting all members of a segment (audience) with the identifiers (user_id, anonymous_id) along with custom attributes defined by you exported to [!DNL Moengage].                                                                                                                                                        |
| Export frequency | **[!UICONTROL Streaming]** | Streaming destinations are "always on" API-based connections. As soon as a profile is updated in Experience Platform based on segment evaluation, the connector sends the update downstream to the destination platform. Read more about [streaming destinations](/help/destinations/destination-types.md#streaming-destinations). |

{style="table-layout:auto"}

## Connect to the destination {#connect}

>[!IMPORTANT]
> 
>To connect to the destination, you need the **[!UICONTROL Manage Destinations]** [access control permission](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.

To connect to this destination, follow the steps described in the [destination configuration tutorial](../../ui/connect-destination.md). In the configure destination workflow, fill in the fields listed in the two sections below.

### Authenticate to destination {#authenticate}

To authenticate to the destination, fill in the required fields and select **[!UICONTROL Connect to destination]**.

![Moengage Destination Authentication](../../assets/catalog/mobile-engagement/moengage/authentication.png)

### Fill in destination details {#destination-details}

To configure details for the destination, fill in the required and optional fields below. An asterisk next to a field in the UI indicates that the field is required.

![Moengage Destination Authentication](../../assets/catalog/mobile-engagement/moengage/destination_details.png)

*  **[!UICONTROL Name]**: A name by which you will recognize this destination in the future.
*  **[!UICONTROL Description]**: A description that will help you identify this destination in the future.
*  **[!UICONTROL Account ID]**: Your app *data center*.

### Enable alerts {#enable-alerts}

You can enable alerts to receive notifications on the status of the dataflow to your destination. Select an alert from the list to subscribe to receive notifications on the status of your dataflow. For more information on alerts, see the guide on [subscribing to destinations alerts using the UI](../../ui/alerts.md).

When you are finished providing details for your destination connection, select **[!UICONTROL Next]**.

## Activate segments to this destination {#activate}

>[!IMPORTANT]
> 
>To activate data, you need the **[!UICONTROL Manage Destinations]**, **[!UICONTROL Activate Destinations]**, **[!UICONTROL View Profiles]**, and **[!UICONTROL View Segments]** [access control permissions](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.

See [Activate audience data to streaming segment export destinations](../../ui/activate-segment-streaming-destinations.md) for instructions on activating audience segments to this destination.

### Map attributes and identities {#map}

To correctly send your audience data from [!DNL Adobe Experience Platform] to the [!DNL Moengage] destination, you need to go through the field mapping step.

Mapping consists of creating a link between your [!DNL Experience Data Model] (XDM) schema fields in your [!DNL Platform] account, and their corresponding equivalents from the target destination.

To correctly map your XDM fields to the [!DNL Braze] destination fields, follow these steps:

In the [!UICONTROL Mapping] step, click **[!UICONTROL Checkbox]**.

![Moengage Destination Add Mapping](../../assets/catalog/mobile-engagement/moengage/segments.png)

In the [!UICONTROL Mapping] step, click **[!UICONTROL Add new mapping]**.

![Moengage Destination Add Mapping](../../assets/catalog/mobile-engagement/moengage/mapping.png)

In the [!UICONTROL Source Field] section, click the arrow button next to the empty field.
   
![Moengage Destination Source Mapping](../../assets/catalog/mobile-engagement/moengage/mapping-source.png)

In the [!UICONTROL Select source field] window, you can choose between two categories of XDM fields:
* [!UICONTROL Select attributes]: use this option to map a specific field from your XDM schema to [!DNL Moengage] attribute.

![Moengage Destination Mapping Source Attribute](../../assets/catalog/mobile-engagement/moengage/mapping-attributes.png)

Choose your source field, then click **[!UICONTROL Select]**.

In the [!UICONTROL Target Field] section, click the mapping icon to the right of the field.
   
![Moengage Destination Target Mapping](../../assets/catalog/mobile-engagement/moengage/mapping-target.png)

In the [!UICONTROL Select target field] window, you can choose between two categories of target fields:
* [!UICONTROL Select identity namespace]: Use this option to map [!DNL Platform] identity namespaces to [!DNL Braze] identity namespaces.
* [!UICONTROL Select custom attributes]: Use this option to map XDM attributes to custom [!DNL Braze] attributes that you defined in your [!DNL Braze] account. <br> You can also use this option to rename existing XDM attributes into [!DNL Braze]. For instance, mapping a `lastName` XDM attribute to a custom `Last_Name` attribute in [!DNL Braze], will create the `Last_Name` attribute in [!DNL Braze], if it doesn't already exist, and map the `lastName` XDM attribute to it.
  
![Moengage Destination Target Mapping Fields](../../assets/catalog/mobile-engagement/moengage/mapping-target-fields.png)

Choose your target field, then click **[!UICONTROL Select]**.

You should now see your field mapping in the list.

![Moengage Destination Mapping Complete](../../assets/catalog/mobile-engagement/moengage/mapping-complete.png)
    
To add more mappings, repeat the previous steps.

## Exported data / Validate data export {#exported-data}

To verify if data has been exported successfully to the [!DNL Moengage] destination, check your [!DNL Moengage] account. [!DNL Adobe Experience Platform] segments are exported to [!DNL Moengage].

## Data usage and governance {#data-usage-governance}

All [!DNL Adobe Experience Platform] destinations are compliant with data usage policies when handling your data. For detailed information on how [!DNL Adobe Experience Platform] enforces data governance, read the [Data Governance overview](/help/data-governance/home.md).

