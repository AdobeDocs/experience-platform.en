---
title: Reddit Custom Audience
description: Reddit Ads connect brands to people who are actively exploring their passions and problems in real time. By pairing high-intent, community-driven conversations with flexible ad formats and robust targeting, Reddit Ads help advertisers reach engaged audiences, drive performance outcomes, and learn directly from the communities that shape culture online. This guide is for advertisers and media teams using Adobe Experience Platform to send audiences to Reddit Ads. It covers what you need to connect your accounts, map identities, and activate audiences.
last-substantial-update: 2026-03-31
---

# [!DNL Reddit Custom Audience] connection {#reddit-custom-audience-connection}

## Overview {#overview}

[!DNL Reddit Ads] connect brands to people who are actively exploring their passions and problems in real time. By pairing high-intent, community-driven conversations with flexible ad formats and robust targeting, [!DNL Reddit Ads] help advertisers reach engaged audiences, drive performance outcomes, and learn directly from the communities that shape culture online.

This guide is for advertisers and media teams using [!DNL Adobe Experience Platform] to send audiences to [!DNL Reddit Ads]. It covers what you need to connect your accounts, map identities, and activate audiences.

>[!IMPORTANT]
>
>This destination connector and documentation page are created and maintained by the [!DNL Reddit] team. For any inquiries or update requests, contact them directly at <adsapi-partner-support@reddit.com>.

## Use cases {#use-cases}

To help you better understand how and when you should use the [!DNL Reddit Custom Audience] destination, here are sample use cases that [!DNL Adobe Experience Platform] customers can solve by using this destination.

### Retargeting existing customers with personalized offers {#use-case-1}

An online retailer wants to reach existing customers through social platforms and show them personalized offers based on their previous orders. The online retailer can ingest email addresses and device IDs (IDFA and GAID) from their own CRM to [!DNL Adobe Experience Platform], build audiences from their own offline data, and send these audiences to [!DNL Reddit Ads], optimizing their advertising spending.

## Prerequisites {#prerequisites}

Before configuring this destination, make sure you meet the following prerequisites:

* A [!DNL Reddit Ads] account that is allowed to use custom audiences and customer lists.
* Permission to authorize the connection. This must be a user who can sign in to [!DNL Reddit] and approve access for [!DNL Experience Platform] to manage audiences on behalf of the ad account.
* Your [!DNL Reddit] Ad Account ID: the identifier for the ad account where audiences are created. You can find your ad account ID in [Accounts](https://ads.reddit.com/accounts). For example: `a2_1b2c34d`.

## Supported identities {#supported-identities}

[!DNL Reddit Custom Audience] supports the activation of identities described in the table below. Learn more about [identities](/help/identity-service/features/namespaces.md).

| Target Identity | Description | Considerations |
| --- | --- | --- |
| email_lc_sha256 | Email addresses hashed with the SHA256 algorithm | Both plain text and SHA256 hashed email addresses are supported by [!DNL Adobe Experience Platform]. When your source field contains unhashed attributes, check the **[!UICONTROL Apply transformation]** option so that [!DNL Platform] automatically hashes the data on activation. |
| maid | Google Advertising ID or Apple ID for Advertisers, both hashed with the SHA256 algorithm | Map either GAID or IDFA onto **maid**. When your source field contains unhashed attributes, check the **[!UICONTROL Apply transformation]** option so that [!DNL Platform] automatically hashes the data on activation. |

{style="table-layout:auto"}

## Supported audiences {#supported-audiences}

This section describes which types of audiences you can export to this destination.

| Audience origin | Supported | Description |
| --- | --- | --- |
| [!DNL Segmentation Service] | Yes | Audiences generated through the [!DNL Experience Platform] [Segmentation Service](../../../segmentation/home.md). |
| All other audience origins | Yes | This category includes all audience origins outside of audiences generated through the Segmentation Service. Read about the [various audience origins](/help/segmentation/ui/audience-portal.md#customize). |

{style="table-layout:auto"}

Supported audiences by data type:

| Audience data type | Supported | Description | Use cases |
| --- | --- | --- | --- |
| [People audiences](/help/segmentation/types/people-audiences.md) | Yes | Based on customer profiles, allowing you to target specific groups of people for marketing campaigns. | Frequent buyers, cart abandoners |
| [Account audiences](/help/segmentation/types/account-audiences.md) | No | Target individuals within specific organizations for account-based marketing strategies. | B2B marketing |
| [Prospect audiences](/help/segmentation/types/prospect-audiences.md) | No | Target individuals who are not yet customers but share characteristics with your target audience. | Prospecting with third-party data |
| [Dataset exports](/help/catalog/datasets/overview.md) | No | Collections of structured data stored in the [!DNL Adobe Experience Platform] Data Lake. | Reporting, data science workflows |

{style="table-layout:auto"}

## Export type and frequency {#export-type-frequency}

Refer to the table below for information about the destination export type and frequency.

| Item | Type | Notes |
| --- | --- | --- |
| Export type | **[!UICONTROL Audience export]** | You are exporting all members of an audience with the identifiers (name, phone number, or others) used in the [!DNL Reddit Custom Audience] destination. |
| Export frequency | **[!UICONTROL Streaming]** | Streaming destinations are "always on" API-based connections. As soon as a profile is updated in Experience Platform based on audience evaluation, the connector sends the update downstream to the destination platform. Read more about [streaming destinations](/help/destinations/destination-types.md#streaming-destinations). |

{style="table-layout:auto"}

## Connect to the destination {#connect}

>[!IMPORTANT]
>
>To connect to the destination, you need the **[!UICONTROL View Destinations]** and **[!UICONTROL Manage Destinations]** [access control permissions](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.

To connect to this destination, follow the steps described in the [destination configuration tutorial](../../ui/connect-destination.md). In the configure destination workflow, fill in the fields listed in the two sections below.

### Authenticate to destination {#authenticate}

To authenticate to the destination, fill in the required fields and select **[!UICONTROL Connect to destination]**.

![The Reddit Custom Audience destination authentication screen showing fields required to connect.](../../assets/catalog/advertising/redditcustomaudience/configure_new_destination_fields.png)

You are redirected to sign in with [!DNL Reddit]. After reviewing the requested permissions, select **[!UICONTROL Allow]** so that [!DNL Experience Platform] can create audiences and update membership on behalf of your ad account.

![The Reddit OAuth permission screen.](../../assets/catalog/advertising/redditcustomaudience/reddit_oauth.png)

### Fill in destination details {#destination-details}

To configure details for the destination, fill in the required and optional fields below. An asterisk next to a field in the UI indicates that the field is required.

![The Reddit Custom Audience destination details screen.](../../assets/catalog/advertising/redditcustomaudience/reddit_account_details.png)

* **[!UICONTROL Name]**: A name by which you recognize this destination.
* **[!UICONTROL Description]**: A description that helps you identify this destination.
* **[!UICONTROL Ad Account ID]**: Your [!DNL Reddit] Ad Account ID.

### Enable alerts {#enable-alerts}

You can enable alerts to receive notifications on the status of the dataflow to your destination. Select an alert from the list to subscribe to receive notifications on the status of your dataflow. For more information on alerts, see the guide on [subscribing to destinations alerts using the UI](../../ui/alerts.md).

When you are finished providing details for your destination connection, select **[!UICONTROL Next]**.

## Activate audiences to this destination {#activate}

>[!IMPORTANT]
>
>* To activate data, you need the **[!UICONTROL View Destinations]**, **[!UICONTROL Activate Destinations]**, **[!UICONTROL View Profiles]**, and **[!UICONTROL View Segments]** [access control permissions](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.
>* To export *identities*, you need the **[!UICONTROL View Identity Graph]** [access control permission](/help/access-control/home.md#permissions). <br> ![Select identity namespace highlighted in the workflow to activate audiences to destinations.](/help/destinations/assets/overview/export-identities-to-destination.png "Select identity namespace highlighted in the workflow to activate audiences to destinations."){width="100" zoomable="yes"}

Read [Activate profiles and audiences to streaming audience export destinations](/help/destinations/ui/activate-segment-streaming-destinations.md) for instructions on activating audiences to this destination.

### Map attributes and identities {#map}

The following target identity namespaces must be mapped depending on the use case:

| Source Field | Target Field | Notes |
| --- | --- | --- |
| Email (plain text or hashed) | email_lc_sha256 | Your source field can be hashed or unhashed. [!DNL Reddit] only accepts hashed values. Enable **[!UICONTROL Apply transformation]** so that [!DNL Experience Platform] hashes the email before sending. |
| MAID (plain text or hashed) | maid | Your source field can be hashed or unhashed. [!DNL Reddit] only accepts hashed values. Enable **[!UICONTROL Apply transformation]** so that [!DNL Experience Platform] hashes the value before sending. |

You must map at least one of the identities.

![The identity mapping screen showing source and target fields configured for Reddit Custom Audience.](../../assets/catalog/advertising/redditcustomaudience/mapping.png)

## Exported data / Validate data export {#exported-data}

After activating your audiences, you can see them in your [!DNL Reddit] Ads Manager account.

Audiences newly created in [!DNL Reddit] appear in a pending state. Once your dataflow runs and profiles are exported, [!DNL Reddit] matches the profiles against [!DNL Reddit] users. Once data is processed, the audience status changes to **[!UICONTROL Valid]**. Audience size must reach [1,000 users or more](https://ads-api.reddit.com/docs/v3/manage-customer-lists) to be considered valid. Audiences that do not meet the required size are shown as **[!UICONTROL Invalid]**.

![The Reddit Ads Manager showing an exported audience and its status.](../../assets/catalog/advertising/redditcustomaudience/see_audience_in_reddit.png)

The following is an example of the payload sent to [!DNL Reddit]:

```json
{
  "data": {
    "action_type": "ADD",
    "column_order": [
      "EMAIL_SHA256",
      "MAID_SHA256"
    ],
    "user_data": [
      [
        "d7ef2e7b2a3663c25284a3d6d13b1ca727fc8c659474b81afe0cec997a4737d2",
        "510870d7b3e47a28a2b2f3aef27a4c81aab0b2eefda27dea50bc4c991d9e5435"
      ]
    ]
  }
}
```

See the [Reddit API documentation](https://ads-api.reddit.com/docs/v3/operations/Update%20Custom%20Audience%20Users) for additional details.

## Data usage and governance {#data-usage-governance}

All [!DNL Adobe Experience Platform] destinations are compliant with data usage policies when handling your data. For detailed information on how [!DNL Adobe Experience Platform] enforces data governance, read the [Data Governance overview](/help/data-governance/home.md).

## Additional resources {#additional-resources}

See the [Reddit API documentation](https://ads-api.reddit.com/docs/v3/operations/Update%20Custom%20Audience%20Users) for details about how the custom audiences endpoint functions.
