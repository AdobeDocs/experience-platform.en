---
title: Snapchat Ads Source Connector
description: Learn how to connect Snapchat Ads to Adobe Experience Platform to ingest paid media campaign, ad, and performance data.
badge: Beta
---

# [!DNL Snapchat Ads]

>[!NOTE]
>
>The [!DNL Snapchat Ads] source is in beta. Read the [Sources overview](../../home.md#terms-and-conditions) for more information on using beta-labeled connectors.

>[!IMPORTANT]
>
>The [!DNL Snapchat Ads] source is available as part of the Customer Journey Analytics SKU.

The [!DNL Snapchat Ads] source is an Adobe Experience Platform paid media connector. Use it to connect your [!DNL Snapchat] ad accounts and ingest campaign, ad, and performance data, such as engagement metrics, into Experience Platform.

The connector publishes the data that it captures to Paid Media datasets. Customer Journey Analytics uses these datasets to provide insights into your [!DNL Snapchat] marketing campaigns.

To connect your account, you sign in to [!DNL Snapchat] and authorize Experience Platform to access your [!UICONTROL Ads Manager Organization]. You do not need to generate or provide any API credentials manually.

## How it works

After you create a [!DNL Snapchat Ads] dataflow and select the ad accounts to target, Experience Platform runs the following jobs automatically.

- If Paid Media datasets do not already exist for your organization, Experience Platform creates them.
- A backfill job runs 30 minutes after you create the dataflow. It fetches campaign and ad metadata and metrics for the ad accounts for the previous 30 days, and publishes the results to the Paid Media datasets.
- An incremental job runs once daily, starting the day after you create the dataflow. It fetches metadata and metrics for the previous day and publishes the results to the Paid Media datasets.
- A restatement job runs after each incremental job. Restatement happens three times: one, two, and three days after the incremental job it corresponds to.

## Prerequisites

Before you connect [!DNL Snapchat Ads] to Experience Platform, ensure that you have the following:

- An existing [!DNL Snapchat] ad account, or the ability to create one.
- Campaigns and ads already set up in your [!DNL Snapchat] ad account. The connector reads from this existing advertising data. It does not create, modify, or delete [!DNL Snapchat] campaigns, ads, or other resources.

## Schema and dataset provisioning

The [!DNL Snapchat Ads] source assigns a target dataset, schema, and field mapping automatically. You do not select a target dataset or map fields yourself when you create the dataflow.

The connector provisions one Paid Media dataset per entity type: account, campaign, ad group, ad, asset, and summary metrics. Read the following section for the core identity fields that the connector maps for each entity.

## [!DNL Snapchat Ads] XDM schema

Read this section for information on the core identity and status fields that the [!DNL Snapchat Ads] source maps to each Paid Media schema. Every mapped record also includes an `entityType` value that identifies the entity, and a `paidMedia.adNetwork` value of `snapchat`.

### Account fields

The account schema stores your [!DNL Snapchat] ad account details.

| [!DNL Snapchat] field | XDM field | Description |
| --- | --- | --- |
| `id` | `paidMedia.accountID` | The unique identifier for the ad account within [!DNL Snapchat]. |
| `name` | `paidMedia.accountDetails.accountName` | The display name of the ad account. |
| `status` | `paidMedia.metadata.status` | The account status, such as active. |
| `created_at` | `paidMedia.metadata.createdTime` | The account creation timestamp. |
| `updated_at` | `paidMedia.metadata.updatedTime` | The timestamp of the last account modification. |

### Campaign fields

The campaign schema stores your [!DNL Snapchat] campaign details.

| [!DNL Snapchat] field | XDM field | Description |
| --- | --- | --- |
| `id` | `paidMedia.campaignID` | The unique identifier for the campaign within [!DNL Snapchat]. |
| `ad_account_id` | `paidMedia.accountID` | The identifier of the parent ad account. |
| `name` | `paidMedia.metadata.name` | The campaign display name. |
| `status` | `paidMedia.metadata.status` | The campaign status, such as active or paused. |
| `created_at` | `paidMedia.metadata.createdTime` | The campaign creation timestamp. |
| `updated_at` | `paidMedia.metadata.updatedTime` | The timestamp of the last campaign modification. |

### Ad group fields

[!DNL Snapchat] calls this entity an ad squad. The ad group schema stores your [!DNL Snapchat] ad squad details.

| [!DNL Snapchat] field | XDM field | Description |
| --- | --- | --- |
| `id` | `paidMedia.adGroupID` | The unique identifier for the ad squad within [!DNL Snapchat]. |
| `campaign_id` | `paidMedia.campaignID` | The identifier of the parent campaign. |
| `name` | `paidMedia.metadata.name` | The ad squad display name. |
| `status` | `paidMedia.metadata.status` | The ad squad status, such as active or paused. |
| `created_at` | `paidMedia.metadata.createdTime` | The ad squad creation timestamp. |
| `updated_at` | `paidMedia.metadata.updatedTime` | The timestamp of the last ad squad modification. |

### Ad fields

The ad schema stores your [!DNL Snapchat] ad details.

| [!DNL Snapchat] field | XDM field | Description |
| --- | --- | --- |
| `id` | `paidMedia.adID` | The unique identifier for the ad within [!DNL Snapchat]. |
| `ad_squad_id` | `paidMedia.adGroupID` | The identifier of the parent ad squad. |
| `name` | `paidMedia.metadata.name` | The ad display name. |
| `status` | `paidMedia.metadata.status` | The ad status, such as active or paused. |
| `created_at` | `paidMedia.metadata.createdTime` | The ad creation timestamp. |
| `updated_at` | `paidMedia.metadata.updatedTime` | The timestamp of the last ad modification. |

### Asset fields

[!DNL Snapchat] calls this entity a creative. The asset schema stores your [!DNL Snapchat] creative details.

| [!DNL Snapchat] field | XDM field | Description |
| --- | --- | --- |
| `id` | `paidMedia.assetID` | The unique identifier for the creative within [!DNL Snapchat]. |
| `ad_account_id` | `paidMedia.accountID` | The identifier of the parent ad account. |
| `name` | `paidMedia.metadata.name` | The creative display name. |
| `review_status` | `paidMedia.metadata.status` | The creative review status, such as pending review or active. |
| `created_at` | `paidMedia.metadata.createdTime` | The creative creation timestamp. |
| `updated_at` | `paidMedia.metadata.updatedTime` | The timestamp of the last creative modification. |

### Summary metrics fields

The summary metrics schema stores performance data for your [!DNL Snapchat] accounts, campaigns, ad squads, ads, and creatives. [!DNL Snapchat] refreshes metrics approximately every 15 minutes, and finalizes non-conversion metrics 48 hours after the end of the day in the ad account timezone.

Each metrics record maps to the identifier of the entity that it measures.

| Entity | Maps to XDM field |
| --- | --- |
| Account | `paidMedia.accountID` |
| Campaign | `paidMedia.campaignID` |
| Ad group | `paidMedia.adGroupID` |
| Ad | `paidMedia.adID` |
| Asset | `paidMedia.assetID` |

<!--
## Troubleshooting {#troubleshooting}

TODO: Add troubleshooting guidance when available.
-->

## Next steps

After you confirm that you have an eligible [!DNL Snapchat] ad account with existing campaigns and ads, continue by [connecting Snapchat Ads to Experience Platform using the UI](../../tutorials/ui/create/advertising/snapchat-ads.md).

## More help on this topic

- [Snapchat Marketing API documentation](https://developers.snap.com/marketing-api/home)
