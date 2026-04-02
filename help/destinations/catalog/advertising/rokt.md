---
title: Rokt
description: Rokt uses AI, first-party data, and real-time decisioning to make every customer interaction more relevant and valuable. It delivers personalized experiences and connects advertisers with high-intent customers. By connecting Adobe Experience Platform audiences to Rokt, partners can improve campaign performance through smarter targeting, suppression, and personalization.
---

# Rokt connection {#rokt-destination}

## Overview {#overview}

[Rokt](https://www.rokt.com) uses AI, first-party data, and real-time decisioning to make every customer interaction more relevant and valuable. It delivers personalized experiences and connects advertisers with high-intent customers. By connecting Adobe Experience Platform audiences to Rokt, partners can improve campaign performance through smarter targeting, suppression, and personalization. This helps ensure marketing reaches the right customers at the right time while reducing wasted spend.

>[!IMPORTANT]
>
>The destination connector and documentation page are created and maintained by the Rokt team. For any inquiries or update requests, contact your Rokt Account Manager or reach out at `support@rokt.com`.

## Use cases {#use-cases}

To help you better understand how and when you should use the Rokt destination, here are sample use cases that Adobe Experience Platform customers can solve by using this destination.

### Use case #1: Retargeting {#use-case-1}

Re-engage high-intent customers who visited your site or app but did not convert. Build an audience in Experience Platform including  users who browsed specific product categories or abandoned a checkout flow. Then push that audience to Rokt to serve  personalized offers at the point of purchase on partner sites. Rokt operates within the transaction moment, immediately after a customer completes a purchase elsewhere, which means retargeted audiences are reached when purchase intent is at its peak, driving higher conversion rates than traditional display retargeting.

### Use case #2: Suppression lists {#use-case-2}

Prevent wasted spend and irrelevant experiences by suppressing audiences who should not receive certain Rokt offers. Common suppression use cases include excluding recent converters (customers who purchased in the last 30 days), loyalty members already enrolled in a promotion, or users who opted out of marketing. Sync these suppression segments from Experience Platform to Rokt in real time to keep campaigns focused on net-new or re-engageable users. This improves ROI and protects the customer experience.

## Prerequisites {#prerequisites}

Before setting up the Rokt destination in Adobe Experience Platform, you must obtain the following credentials from your **Rokt Account Manager**:

* **API Key** — used as the **Username** when authenticating the destination connection.
* **API Secret** — used as the **Password** when authenticating the destination connection.

Your Rokt Account Manager will provision these credentials in the Rokt platform prior to your setup. Contact your Account Manager if you have not yet received them.

## Supported identities {#supported-identities}

Rokt supports the activation of identities described in the table below. Learn more about [identities](/help/identity-service/namespaces.md).

| Target Identity | Description | Considerations |
|---|---|---|
| email | Plain text email address | Recommended. Used for profile matching in Rokt. |
| email_lc_sha256 | Email addresses hashed with the SHA256 algorithm | Both plain text and SHA256 hashed email addresses are supported. When your source field contains unhashed attributes, check the **[!UICONTROL Apply transformation]** option to have [!DNL Platform] automatically hash the data on activation. |
| phone | Plain text phone number | Used for profile matching in Rokt. |
| phone_sha256 | Phone numbers hashed with the SHA256 algorithm | Both plain text and SHA256 hashed phone numbers are supported. When your source field contains unhashed attributes, check the **[!UICONTROL Apply transformation]** option to have [!DNL Platform] automatically hash the data on activation. |
| GAID | Google Advertising ID | Select the GAID target identity when your source identity is a GAID namespace. |
| IDFA | Apple ID for Advertisers | Select the IDFA target identity when your source identity is an IDFA namespace. |
| aepProfileId | Adobe Experience Platform Profile ID | Maps the  Profile ID (`xdm:_id`) as a fallback identifier. |

{style="table-layout:auto"}

## Supported audiences {#supported-audiences}

This section describes which types of audiences you can export to this destination.

| Audience origin | Supported | Description |
---------|----------|----------|
| [!DNL Segmentation Service] | ✓ | Audiences generated through the Experience Platform [Segmentation Service](../../../segmentation/home.md). |
| Custom uploads | ✓ | Audiences [imported](../../../segmentation/ui/overview.md#import-audience) into Experience Platform from CSV files. |

{style="table-layout:auto"}

## Export type and frequency {#export-type-frequency}

Refer to the table below for information about the destination export type and frequency.

| Item | Type | Notes |
---------|----------|---------|
| Export type | **[!UICONTROL Segment export]** | You are exporting all members of a segment (audience) with the identifiers (email, phone, mobile ad ID, or others) used in the Rokt destination. |
| Export frequency | **[!UICONTROL Streaming]** | Streaming destinations are "always on" API-based connections. As soon as a profile is updated in Experience Platform based on audience evaluation, the connector sends the update downstream to Rokt. Read more about [streaming destinations](/help/destinations/destination-types.md#streaming-destinations). |

{style="table-layout:auto"}

## Connect to the destination {#connect}

>[!IMPORTANT]
>
>To connect to the destination, you need the **[!UICONTROL View Destinations]** and **[!UICONTROL Manage Destinations]** [access control permissions](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.

To connect to this destination, follow the steps described in the [destination configuration tutorial](../../ui/connect-destination.md). In the configure destination workflow, fill in the fields listed in the two sections below.

### Authenticate to destination {#authenticate}

To authenticate to the destination, fill in the required fields and select **[!UICONTROL Connect to destination]**.

* **[!UICONTROL Username]**: Your API Key, provided by your Rokt Account Manager.
* **[!UICONTROL Password]**: Your API Secret, provided by your Rokt Account Manager.

![Image of the Experience Platform UI, showing the Rokt destination configuration screen with account details, authentication fields, and destination details filled in.](/help/destinations/assets/catalog/advertising/rokt/aep-configure-destination.png)

### Fill in destination details {#destination-details}

To configure details for the destination, fill in the required and optional fields below. An asterisk next to a field in the UI indicates that the field is required.

* **[!UICONTROL Name]**: A name by which you will recognize this destination in the future (e.g., "Rokt – Retargeting Audiences").
* **[!UICONTROL Description]**: A description that will help you identify this destination in the future.

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

The Rokt destination supports the mapping of identity namespaces from Experience Platform to Rokt's identity fields. You must map at least one identity to successfully activate an audience. The recommended mappings are shown in the table below.

| Source field | Target field | Required |
|---|---|---|
| `IdentityMap: Email` | `Identity: email` | Recommended |
| `IdentityMap: Email_LC_SHA256` | `Identity: emailSha256` | Recommended |
| `IdentityMap: Phone` | `Identity: phone` | Optional |
| `IdentityMap: Phone_SHA256` | `Identity: phoneSha256` | Optional |
| `IdentityMap: GAID` | `Identity: gaid` | Optional |
| `IdentityMap: IDFA` | `Identity: idfa` | Optional |
| `xdm: _id` | `Identity: aepProfileId` | Optional |

{style="table-layout:auto"}

To add a mapping, select **Add new mapping** in the Mapping step of the activation workflow. For each mapping, choose the source field from your Experience Platform identity map and the corresponding Rokt target identity from the dropdown. Here is an example of a full mapping:

![Image of the Experience Platform UI, showing the mapping step of the Rokt destination activation workflow with source and target identity fields configured.](/help/destinations/assets/catalog/advertising/rokt/aep-identity-mapping.png)

>[!NOTE]
>
>At least one email-based identity (`email` or `emailSha256`) is strongly recommended to maximize match rates in Rokt.

### Configure audience schedule {#audience-schedule}

After completing the mapping step, you will be prompted to configure an audience schedule for each selected segment. Provide a **Start date** for when the audience should begin syncing, and a **Mapping ID** — a label used to identify this audience segment within Rokt. You can use the AEP audience name or any descriptive string that helps you and your Rokt Account Manager identify the segment.

## Data usage and governance {#data-usage-governance}

All [!DNL Adobe Experience Platform] destinations are compliant with data usage policies when handling your data. For detailed information on how [!DNL Adobe Experience Platform] enforces data governance, read the [Data Governance overview](/help/data-governance/home.md).

## Additional resources {#additional-resources}

* [Rokt Developer Documentation](https://docs.rokt.com)
* [Adobe Experience Platform Destinations overview](/help/destinations/home.md)
* [Activate profiles and segments to streaming destinations](/help/destinations/ui/activate-segment-streaming-destinations.md)
