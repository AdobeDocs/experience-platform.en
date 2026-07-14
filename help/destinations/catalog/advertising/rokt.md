---
title: Rokt
description: Learn how to connect Adobe Experience Platform audiences to Rokt to improve campaign performance through smarter targeting, suppression, and personalization.
exl-id: 50eaefeb-d394-49b1-9748-5d68f11b79a0
---
# [!DNL Rokt] connection {#rokt-destination}

## Overview {#overview}

[[!DNL Rokt]](https://www.rokt.com) unlocks value in ecommerce using AI-driven real-time decisioning to make each Transaction Moment&trade; more relevant. It delivers personalized experiences and connects advertisers with high-intent customers. Connect [!DNL Adobe Experience Platform] audiences to [!DNL Rokt] to improve campaign performance through smarter targeting, suppression, and personalization. Reach the right customers at the right time while reducing wasted spend.

>[!IMPORTANT]
>
>The destination connector and documentation page are created and maintained by the [!DNL Rokt] team. For any inquiries or update requests, contact your [!DNL Rokt] Account Manager or reach out at `support@rokt.com`.

## Use cases {#use-cases}

The following use cases show how [!DNL Experience Platform] customers can use the [!DNL Rokt] destination.

### Use case #1: Retargeting {#use-case-1}

Re-engage high-intent customers who visited your site or app but did not convert. Build an audience in [!DNL Experience Platform] including users who browsed specific product categories or abandoned a checkout flow. Then push that audience to [!DNL Rokt] to serve personalized offers at the point of purchase on partner sites. [!DNL Rokt] operates within the transaction moment, immediately after a customer completes a purchase elsewhere. Retargeted audiences are reached when purchase intent is at its peak, driving higher conversion rates than traditional display retargeting.

### Use case #2: Suppression lists {#use-case-2}

Prevent wasted spend and irrelevant experiences by suppressing audiences who should not receive certain [!DNL Rokt] offers. Common suppression use cases include excluding recent converters, loyalty members in an active promotion, or users who opted out of marketing. For example, exclude customers who purchased in the last 30 days. Sync these suppression audiences from [!DNL Experience Platform] to [!DNL Rokt] in real time. This keeps campaigns focused on net-new or re-engageable users. This improves ROI and protects the customer experience.

## Prerequisites {#prerequisites}

Before setting up the [!DNL Rokt] destination in [!DNL Adobe Experience Platform], you must obtain the following credentials from your **[!DNL Rokt] Account Manager**:

* **API Key**: use this as the **[!UICONTROL Username]** when [authenticating the destination connection](#authenticate).
* **API Secret**: use this as the **[!UICONTROL Password]** when [authenticating the destination connection](#authenticate).

Your [!DNL Rokt] Account Manager will provision these credentials in the [!DNL Rokt] platform prior to your setup. Contact your Account Manager if you have not yet received them.

## Supported identities {#supported-identities}

[!DNL Rokt] supports the activation of identities described in the table below. Learn more about [identities](/help/identity-service/features/namespaces.md).

| Target Identity | Description | Considerations |
|---|---|---|
| email | Plain text email address | Recommended. Used for profile matching in [!DNL Rokt]. |
| email_lc_sha256 | Email addresses hashed with the SHA256 algorithm | Both plain text and SHA256 hashed email addresses are supported. When your source field contains unhashed attributes, select the **[!UICONTROL Apply transformation]** option to have [!DNL Experience Platform] automatically hash the data on activation. |
| phone | Plain text phone number | Used for profile matching in [!DNL Rokt]. |
| phone_sha256 | Phone numbers hashed with the SHA256 algorithm | Both plain text and SHA256 hashed phone numbers are supported. When your source field contains unhashed attributes, select the **[!UICONTROL Apply transformation]** option to have [!DNL Experience Platform] automatically hash the data on activation. |
| GAID | [!DNL Google] Advertising ID | Select the GAID target identity when your source identity is a GAID namespace. |
| IDFA | [!DNL Apple] ID for Advertisers | Select the IDFA target identity when your source identity is an IDFA namespace. |
| aepProfileId | [!DNL Adobe Experience Platform] Profile ID | Maps the Profile ID (`xdm:_id`) as a fallback identifier. |

{style="table-layout:auto"}

## Supported audiences {#supported-audiences}

This section describes which types of audiences you can export to this destination.

| Audience origin | Supported | Description |
|---------|----------|----------|
| [!DNL Segmentation Service] | Yes | Audiences generated through the [!DNL Experience Platform] [[!DNL Segmentation Service]](/help/segmentation/home.md). |
| All other audience origins | Yes | This category includes all audience origins outside of audiences generated through the [!DNL Segmentation Service]. Read about the [various audience origins](/help/segmentation/ui/audience-portal.md#customize). Some examples include: <ul><li> custom upload audiences [imported](/help/segmentation/ui/audience-portal.md#import-audience) into [!DNL Experience Platform] from CSV files,</li><li> look-alike audiences, </li><li> federated audiences, </li><li> audiences generated in other [!DNL Experience Platform] apps such as [!DNL Adobe Journey Optimizer], </li><li> and more. </li></ul> |

{style="table-layout:auto"}

Supported audiences by audience data type:

| Audience data type | Supported | Description | Use cases |
|--------------------|-----------|-------------|-----------|
| [People audiences](/help/segmentation/types/people-audiences.md) | Yes | Based on customer profiles. Use these to target specific groups of people for marketing campaigns. | Frequent buyers, cart abandoners |
| [Account audiences](/help/segmentation/types/account-audiences.md) | No | Target individuals within specific organizations for account-based marketing strategies. | B2B marketing |
| [Prospect audiences](/help/segmentation/types/prospect-audiences.md) | No | Target individuals who are not yet customers but share characteristics with your target audience. | Prospecting with third-party data |
| [Dataset exports](/help/catalog/datasets/overview.md) | No | Collections of structured data stored in the [!DNL Adobe Experience Platform] Data Lake. | Reporting, data science workflows |

{style="table-layout:auto"}

## Export type and frequency {#export-type-frequency}

Refer to the table below for information about the destination export type and frequency.

| Item | Type | Notes |
|---------|----------|---------|
| Export type | **[!UICONTROL Audience export]** | You are exporting all members of an audience with the identifiers (email, phone, mobile ad ID, or others) used in the [!DNL Rokt] destination. |
| Export frequency | **[!UICONTROL Streaming]** | Streaming destinations are "always on" API-based connections. As soon as a profile is updated in [!DNL Experience Platform] based on audience evaluation, the connector sends the update downstream to [!DNL Rokt]. Read more about [streaming destinations](/help/destinations/destination-types.md#streaming-destinations). |

{style="table-layout:auto"}

## Connect to the destination {#connect}

>[!IMPORTANT]
>
>To connect to the destination, you need the **[!UICONTROL View Destinations]** and **[!UICONTROL Manage Destinations]** [access control permissions](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.

To connect to this destination, follow the steps described in the [destination configuration tutorial](/help/destinations/ui/connect-destination.md). In the configure destination workflow, fill in the fields listed in the two sections below.

### Authenticate to destination {#authenticate}

To authenticate to the destination, fill in the required fields and select **[!UICONTROL Connect to destination]**.

* **[!UICONTROL Username]**: Your API Key, provided by your [!DNL Rokt] Account Manager.
* **[!UICONTROL Password]**: Your API Secret, provided by your [!DNL Rokt] Account Manager.

    ![The [!DNL Rokt] destination configuration screen in [!DNL Experience Platform], with account details, authentication fields, and destination details filled in.](/help/destinations/assets/catalog/advertising/rokt/aep-configure-destination.png)

### Fill in destination details {#destination-details}

To configure details for the destination, fill in the required and optional fields below. An asterisk next to a field in the UI indicates that the field is required.

* **[!UICONTROL Name]**: A name by which you will recognize this destination in the future (e.g., "[!DNL Rokt] - Retargeting Audiences").
* **[!UICONTROL Description]**: A description that will help you identify this destination in the future.

### Enable alerts {#enable-alerts}

You can enable alerts to receive notifications on the status of the dataflow to your destination. Select an alert from the list to subscribe to receive notifications on the status of your dataflow. For more information on alerts, see the guide on [subscribing to destinations alerts using the UI](/help/destinations/ui/alerts.md).

When you are finished providing details for your destination connection, select **[!UICONTROL Next]**.

## Activate audiences to this destination {#activate}

>[!IMPORTANT]
>
>* To activate data, you need the **[!UICONTROL View Destinations]**, **[!UICONTROL Activate Destinations]**, **[!UICONTROL View Profiles]**, and **[!UICONTROL View Segments]** [access control permissions](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.
>* To export *identities*, you need the **[!UICONTROL View Identity Graph]** [access control permission](/help/access-control/home.md#permissions). <br> ![Select identity namespace highlighted in the workflow to activate audiences to destinations.](/help/destinations/assets/overview/export-identities-to-destination.png "Select identity namespace highlighted in the workflow to activate audiences to destinations."){width="100" zoomable="yes"}

Read [Activate profiles and audiences to streaming audience export destinations](/help/destinations/ui/activate-segment-streaming-destinations.md) for instructions on activating audiences to this destination.

### Map attributes and identities {#map}

The [!DNL Rokt] destination supports the mapping of identity namespaces from [!DNL Experience Platform] to [!DNL Rokt] identity fields. You must map at least one identity to successfully activate an audience. The recommended mappings are shown in the table below.

| Source field | Target field | Considerations |
|---|---|---|
| `IdentityMap: Email` | `Identity: email` | Recommended |
| `IdentityMap: Email_LC_SHA256` | `Identity: emailSha256` | Recommended |
| `IdentityMap: Phone` | `Identity: phone` | Optional |
| `IdentityMap: Phone_SHA256` | `Identity: phoneSha256` | Optional |
| `IdentityMap: GAID` | `Identity: gaid` | Optional |
| `IdentityMap: IDFA` | `Identity: idfa` | Optional |
| `xdm: _id` | `Identity: aepProfileId` | Optional |

{style="table-layout:auto"}

Here is an example of a full mapping:

![The mapping step of the [!DNL Rokt] destination activation workflow in [!DNL Experience Platform], with source and target identity fields configured.](/help/destinations/assets/catalog/advertising/rokt/aep-identity-mapping.png)

>[!NOTE]
>
>At least one email-based identity mapping (`email` or `emailSha256`) is strongly recommended to maximize match rates in [!DNL Rokt].

### Configure audience schedule {#audience-schedule}

After completing the mapping step, configure an audience schedule for each selected audience. Provide a **[!UICONTROL Start date]** for when the audience should begin syncing, and a **[!UICONTROL Mapping ID]** (a label used to identify this audience within [!DNL Rokt]). You can use the [!DNL Experience Platform] audience name or any descriptive string that helps you and your [!DNL Rokt] Account Manager identify the audience.

## Data usage and governance {#data-usage-governance}

All [!DNL Experience Platform] destinations are compliant with data usage policies when handling your data. For detailed information on how [!DNL Experience Platform] enforces data governance, read the [Data Governance overview](/help/data-governance/home.md).

## Additional resources {#additional-resources}

* [[!DNL Rokt] developer documentation](https://docs.rokt.com)
* [Adobe Experience Platform destinations overview](/help/destinations/home.md)
