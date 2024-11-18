---
title: Magnite Real-Time destination connection
description: Use this destination to deliver Adobe CDP audiences to the Magnite Streaming platform in real-time.
last-substantial-update: 2024-11-18
exl-id: 4e08a14b-6800-41e1-95a5-826a6241144d
---
# Magnite: Real-Time destination connection

## Overview {#overview}

The [!DNL Magnite: Real-Time] and the [Magnite: Batch](/help/destinations/catalog/advertising/magnite-batch.md) destinations in Adobe Experience Platform help you map and export audiences for targeting and activation on the Magnite Streaming platform.

Activating audiences to the [!DNL Magnite Streaming] platform is a two step process which requires you to use both the Magnite: Real-Time and the Magnite: Batch destinations.

To activate your audiences to [!DNL Magnite Streaming], you must:

* Activate the audiences on the [!DNL Magnite: Real-Time] destination, as shown in this page.
* Activate the same audience on the Magnite: Batch destination. The [!DNL Magnite: Batch] destination is a mandatory component. Failing to activate the audience on the [!DNL Magnite Streaming] Batch destination will result in a failed integration, and your audiences will not be activated.

Note: When using the Real-Time destination, [!DNL Magnite Streaming] will receive audiences in real-time, but Magnite can only store real-time audiences temporarily in their platform, and they will be removed from the system within a couple days. For this reason, if you want to use the Magnite: Real-Time destination, you will *also* need to use the Magnite: Batch destination - each audience that you activate to the Real-Time destination, you also need to activate to the Batch destination.

>[!IMPORTANT]
>
>The destination connector and documentation page are created and maintained by the [!DNL Magnite] team. For any inquiries or update requests, please contact them directly at `adobe-tech@magnite.com`.

## Use cases {#use-cases}

To help you better understand how and when you should use the [!DNL Magnite: Real-Time] destination, here is a sample use case that Adobe Experience Platform customers can solve by using this destination.

### Activation and targeting {#activation-and-targeting}

This integration with Magnite allows customers to pass their CDP audiences from Adobe Experience Platform to Magnite for advertising targeting. Audiences may be selected within Magnite for positive targeting as well as negative targeting (suppression). 

## Prerequisites {#prerequisites}

To use the [!DNL Magnite] destinations in Adobe Experience Platform, you must first have a [!DNL Magnite Streaming] account. If you have a [!DNL Magnite Streaming] account, please reach out to your [!DNL Magnite] account manager to be provided credentials to access [!DNL Magnite's] destinations.
If you do not have a [!DNL Magnite Streaming] account, please reach out to adobe-tech@magnite.com

## Supported identities {#supported-identities}

The [!DNL Magnite: Real-Time] destination supports the activation of identities described in the table below. Learn more about [identities](/help/identity-service/features/namespaces.md).

| Target Identity   | Description                                                                                      | Considerations                                                                       |
|-------------------|--------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------|
| device_id         | A unique identifier for a device or identity. We accept any device ID and first-party ID regardless of type.           | Identity types supported by Magnite include but are not limited to PPUID, GAID, IDFA, and TV Device IDs.     | 

{style="table-layout:auto"}

## Supported audiences {#supported-audiences}

This section describes which type of audiences you can export to this destination.

| Audience origin             | Supported | Description | 
|-----------------------------|----------|----------|
| [!DNL Segmentation Service] | ✓ | Audiences generated through the Experience Platform [Segmentation Service](../../../segmentation/home.md).|
| Custom uploads              | ✓ | Audiences [imported](../../../segmentation/ui/audience-portal.md#import-audience) into Experience Platform from CSV files. |

{style="table-layout:auto"}

## Export type and frequency {#export-type-frequency}

Refer to the table below for information about the destination export type and frequency.

| Item             | Type                            | Notes                                                                                                                                                                                                                                                                                                                              |
|------------------|---------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Export type      | **[!UICONTROL Segment export]** | You are exporting all members of a segment (audience) with the identifiers (name, phone number, or others) used in the [!DNL Magnite: Real-Time] destination.                                                                                                                                                            |
| Export frequency | **[!UICONTROL Streaming]**      | Streaming destinations are "always on" API-based connections. As soon as a profile is updated in Experience Platform based on segment evaluation, the connector sends the update downstream to the destination platform. Read more about [streaming destinations](/help/destinations/destination-types.md#streaming-destinations). |

{style="table-layout:auto"}

## Connect to the destination {#connect}

>[!IMPORTANT]
>
>To connect to the destination, you need the **[!UICONTROL View destinations]** and **[!UICONTROL Manage destinations]** [access control permission](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.

To connect to this destination, follow the steps described in the [destination configuration tutorial](../../ui/connect-destination.md). In the configure destination workflow, fill in the fields listed in the two sections below.

### Authenticate to destination {#authenticate}

To authenticate to the destination, fill in the required fields and select **[!UICONTROL Connect to destination]**.

![destination configuration auth fields unfilled](../../assets/catalog/advertising/magnite/destination-realtime-config-auth-unfilled.png)

* **[!UICONTROL Username]**: The username supplied to you by [!DNL Magnite].
* **[!UICONTROL Password]**: The password supplied to you by [!DNL Magnite].

### Fill in destination details {#destination-details}

To configure details for the destination, fill in the required and optional fields below. An asterisk next to a field in the UI indicates that the field is required.

*  **[!UICONTROL Name]**: A name by which you will recognize this destination in the future.
*  **[!UICONTROL Description]**: A description that will help you identify this destination in the future.
*  **[!UICONTROL Your company name]**: Your customer/company name. Only supported [!DNL Magnite Streaming] clients are available for selection.

>[!NOTE]
>
>The company name must be a string which matches the name of the Amazon S3 delivery bucket you have configured with Magnite and set up in the [authenticate to destination](#authenticate) step. The supported characters include 'a-z', 'A-Z', '0-9', '-'(dash), or '_'(underscore).

![destination configuration auth fields filled](../../assets/catalog/advertising/magnite/destination-realtime-config-auth-filled.png)

Once done, select the **[!UICONTROL Create]** button.

![Optional governance policy and enforcement actions](../../assets/catalog/advertising/magnite/destination-realtime-config-grouping-policy.png)

### Enable alerts {#enable-alerts}

You can enable alerts to receive notifications on the status of the dataflow to your destination. Select an alert from the list to subscribe to receive notifications on the status of your dataflow. For more information on alerts, see the guide on [subscribing to destinations alerts using the UI](../../ui/alerts.md).

When you are finished providing details for your destination connection, select **[!UICONTROL Next]**.

## Activate segments to this destination {#activate}

>[!IMPORTANT]
>
>* To activate data, you need the **[!UICONTROL View destinations]**, **[!UICONTROL Activate destinations]**, **[!UICONTROL View Profiles]**, and **[!UICONTROL View Segments]** [access control permissions](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.
>* To export *identities*, you need the **[!UICONTROL View Identity Graph]** [access control permission](/help/access-control/home.md#permissions). <br> ![Select identity namespace highlighted in the workflow to activate audiences to destinations.](/help/destinations/assets/overview/export-identities-to-destination.png "Select identity namespace highlighted in the workflow to activate audiences to destinations."){width="100" zoomable="yes"}

Read [Activate profiles and segments to streaming segment export destinations](/help/destinations/ui/activate-segment-streaming-destinations.md) for instructions on activating audience segments to this destination.

Once the destination connection has been created, you can proceed to the audience activation flow. The following section walks through how to activate audiences using the Real-Time destination.

### Map attributes and identities {#map}

The next step is mapping source identifiers to the Magnite device_id identifier.

* You can add as many mappings as you need by selecting **[!UICONTROL Add new mapping]**.

This example using the Real-Time destination shows a row that contains a generic deviceId source identifier mapped to the Magnite device_id target field. When you're with the mappings, select [!UICONTROL Next].

![Map desired data fields to the device_ID field](../../assets/catalog/advertising/magnite/destination-realtime-active-audience-field-mapping.png)

Be sure to set Mapping IDs to all activated audiences, or set NONE if no Mapping ID is present.

![Be sure to set Mapping IDs to all activated audiences, or set NONE if no Mapping ID is present](../../assets/catalog/advertising/magnite/destination-realtime-active-audience-mappingid.png)

You must now configure a Start date (mandatory), an End date (optional), and a Mapping ID for each audience.

**Mapping ID**

* Use the **[!UICONTROL Mapping ID]** field when an audience has a pre-existing Segment ID previously known to Magnite.

* To add a **[!UICONTROL Mapping ID]** to an audience, select each audience row individually, and enter data in the right-hand column (see image above). If you do not want to add a Mapping ID, please enter NONE into the Mapping ID field. 

Select **[!UICONTROL Next]** and finalize the activation flow.

![Select next and finalize activation flow.](../../assets/catalog/advertising/magnite/destination-realtime-active-audience-review.png)

## Exported data / Validate data export {#exported-data}

Once your audiences have been uploaded, you may validate your audiences have been created and uploaded correctly using the following steps:

<!--

* In 95% of cases, audiences will be delivered to Magnite Streaming in under 10 minutes. The actual receipt and processing of the events within Magnite Streaming depends on the shared data volume.

-->

* Post-ingest, audiences are expected to appear in [!DNL Magnite Streaming] within a few minutes and can be applied to a deal. You can confirm this by looking up the segment ID that was shared during the activation steps in the Adobe Experience Platform.

## Activate the same audiences through the [!DNL Magnite: Batch ]destination

Audiences shared with [!DNL Magnite Streaming] using the  Real-Time destination will also need to be shared using the Magnite: Batch destination. When configured correctly, segment names in the [!DNL Magnite Streaming] UI are updated to reflect those used in the Adobe Experience Platform post-daily update.

Finally, if a Batch destination has not been configured for your integration, set it up now via the Magnite: Batch destination document.

## Data usage and governance {#data-usage-governance}

All [!DNL Adobe Experience Platform] destinations are compliant with data usage policies when handling your data. For detailed information on how [!DNL Adobe Experience Platform] enforces data governance, read the [Data Governance overview](/help/data-governance/home.md).

## Additional resources {#additional-resources}

For additional help documentation, visit the [Magnite Help Center](https://help.magnite.com/help).
