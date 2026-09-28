---
title: TikTok Ads Source Connector
description: Learn how to connect TikTok Ads to Adobe Experience Platform to ingest paid media campaign, ad, and performance data.
badge: Beta
---

# [!DNL TikTok Ads]

>[!NOTE]
>
>The [!DNL TikTok Ads] source is in beta. Read the [Sources overview](../../home.md#terms-and-conditions) for more information on using beta-labeled connectors.

The [!DNL TikTok Ads] source is an Adobe Experience Platform paid media connector. Use it to connect your [!DNL TikTok] ad accounts and ingest campaign, ad, and performance data, such as engagement metrics, into Experience Platform.

The connector publishes the data that it captures to Paid Media datasets. Customer Journey Analytics uses these datasets to provide insights into your [!DNL TikTok] marketing campaigns.

To connect your account, you sign in to [!DNL TikTok] and authorize Experience Platform to access your advertiser account. You do not need to generate or provide any API credentials manually.

## How it works

After you create a [!DNL TikTok Ads] dataflow and select the advertiser account to target, Experience Platform runs the following jobs automatically.

- If Paid Media datasets do not already exist for your organization, Experience Platform creates them.
- A one-time backfill job runs after you create the dataflow.
- An incremental job runs once daily, starting the day after you create the dataflow.

<!-- TODO(satkapoo/eng): Confirm the exact backfill and incremental job timing and lookback windows (the Snapchat page above states "30 minutes after creation" and "past 30 days" for its backfill; TikTok's launch tracker doesn't specify equivalent timing yet). Also confirm whether TikTok restatement jobs run, and on what schedule, before publishing. -->

## Prerequisites

Before you connect [!DNL TikTok Ads] to Experience Platform, ensure that you have the following:

- An existing [!DNL TikTok for Business] developer app with the Marketing API product added.
- App approval from [!DNL TikTok]. Apps start in a sandbox mode, and require [!DNL TikTok] to review and approve the app before it can access production ad account data.
- Business verification. This is a separate approval process from app review, and is required for higher rate-limit tiers.
- The following app permission groups granted before you first authorize your account. [!DNL TikTok] does not let you widen these permissions later without reauthorizing: [!UICONTROL Ads Management], [!UICONTROL Reporting], [!UICONTROL Ad Account Management], and [!UICONTROL Audience Management].
- A rate limit quota appropriate for your backfill volume. The default sandbox tier throttles aggressively, so request an increase before you run a large backfill.
- Campaigns and ads already set up in your [!DNL TikTok] ad account. The connector reads from this existing advertising data. It does not create, modify, or delete [!DNL TikTok] campaigns, ads, or other resources.

## Schema and dataset provisioning

The [!DNL TikTok Ads] source assigns a target dataset, schema, and field mapping automatically. You do not select a target dataset or map fields yourself when you create the dataflow.

The connector provisions one Paid Media dataset per entity type: account, campaign, ad group, ad, asset, and summary metrics. These are the same canonical schemas that the [Meta Ads](meta-ads.md) and [Google Ads](google-ads.md) sources already populate. Read the following section for the core identity fields that the connector maps for each entity.

## [!DNL TikTok Ads] XDM schema

Read this section for information on the core identity and status fields that the [!DNL TikTok Ads] source maps to each Paid Media schema. Every mapped record also includes an `entityType` value that identifies the entity, and a `paidMedia.adNetwork` value of `tiktok`.

### Account fields

The account schema stores your [!DNL TikTok] advertiser account details.

| [!DNL TikTok] field | XDM field | Description |
| --- | --- | --- |
| `advertiser_id` | `paidMedia.accountID` | The unique identifier for the advertiser account within [!DNL TikTok]. |
| `name` | `paidMedia.metadata.name` | The display name of the advertiser account. |
| `status` | `paidMedia.metadata.status` | The account status, such as active. |
| `currency` | `paidMedia.metadata.currency` | The currency that the account reports in. |
| `create_time` | `paidMedia.metadata.createdTime` | The account creation timestamp. |

### Campaign fields

The campaign schema stores your [!DNL TikTok] campaign details.

| [!DNL TikTok] field | XDM field | Description |
| --- | --- | --- |
| `campaign_id` | `paidMedia.campaignID` | The unique identifier for the campaign within [!DNL TikTok]. |
| `advertiser_id` | `paidMedia.accountID` | The identifier of the parent advertiser account. |
| `campaign_name` | `paidMedia.metadata.name` | The campaign display name. |
| `operation_status` | `paidMedia.metadata.status` | The campaign status, such as active or paused. |
| `create_time` | `paidMedia.metadata.createdTime` | The campaign creation timestamp. |
| `modify_time` | `paidMedia.metadata.updatedTime` | The timestamp of the last campaign modification. |

### Ad group fields

The ad group schema stores your [!DNL TikTok] ad group details.

| [!DNL TikTok] field | XDM field | Description |
| --- | --- | --- |
| `adgroup_id` | `paidMedia.adGroupID` | The unique identifier for the ad group within [!DNL TikTok]. |
| `campaign_id` | `paidMedia.campaignID` | The identifier of the parent campaign. |
| `adgroup_name` | `paidMedia.metadata.name` | The ad group display name. |
| `operation_status` | `paidMedia.metadata.status` | The ad group status, such as active or paused. |

### Ad fields

The ad schema stores your [!DNL TikTok] ad details.

| [!DNL TikTok] field | XDM field | Description |
| --- | --- | --- |
| `ad_id` | `paidMedia.adID` | The unique identifier for the ad within [!DNL TikTok]. |
| `adgroup_id` | `paidMedia.adGroupID` | The identifier of the parent ad group. |
| `ad_name` | `paidMedia.metadata.name` | The ad display name. |
| `operation_status` | `paidMedia.metadata.status` | The ad status, such as active or paused. |

### Asset fields

The asset schema stores your [!DNL TikTok] image and video creative details.

| [!DNL TikTok] field | XDM field | Description |
| --- | --- | --- |
| `image_id` / `video_id` | `paidMedia.assetID` | The unique identifier for the image or video asset within [!DNL TikTok]. |
| `advertiser_id` | `paidMedia.accountID` | The identifier of the parent advertiser account. |

### Summary metrics fields

The summary metrics schema stores performance data for your [!DNL TikTok] accounts, campaigns, ad groups, ads, and assets.

Each metrics record maps to the identifier of the entity that it measures.

| Entity | Maps to XDM field |
| --- | --- |
| Account | `paidMedia.accountID` |
| Campaign | `paidMedia.campaignID` |
| Ad group | `paidMedia.adGroupID` |
| Ad | `paidMedia.adID` |
| Asset | `paidMedia.assetID` |

<!--
TODO(Product): Confirm before publishing whether the following remain out of v1, so this page doesn't need a caveat or correction later:
- Reach & Frequency (R&F) buying
- Smart+ (automated) campaigns
- Catalog / Shop / GMV Max campaigns and metrics
Per the XDM mapping wiki, all three are proposed for phase 2 but still marked OPEN, pending Product confirmation.
-->

## Troubleshooting

Use the following table to troubleshoot common issues with the [!DNL TikTok Ads] source.

| Issue | Cause |
| --- | --- |
| The connection succeeds, but no advertiser accounts appear to select. | The authorizing [!DNL TikTok] user does not have [!UICONTROL Ads Management] access on any advertiser account, or the app has not completed business verification. Check the app status in the [!DNL TikTok for Business Developer Portal]. |
| The dataflow runs, but no data lands in the dataset. | The app is likely still in sandbox review status. [!DNL TikTok] does not return production data until the app passes review, even though the connection itself succeeds. |
| A backfill fails partway through with rate limit errors. | The app's default rate limit tier is too low for the requested date range. Request a rate limit increase from [!DNL TikTok] before you run a large backfill. |
| A specific metrics breakdown, such as asset performance, returns fewer rows than expected or errors. | Not every metric is supported under every reporting dimension combination. Validate the affected breakdown against a test advertiser account before you rely on it in production. |

## Next steps

After you confirm that you have an eligible [!DNL TikTok] advertiser account with existing campaigns and ads, continue by connecting [!DNL TikTok Ads] to Experience Platform using the UI.

<!-- TODO(satkapoo/eng): Add the UI tutorial link once the account-picker/Explore-step UI design is locked (still pending sign-off per the launch tracker as of 2026-08-31). Screenshots and exact step-by-step UI text can't be finalized until then. -->

## More help on this topic

- [TikTok Marketing API documentation](https://business-api.tiktok.com/portal/docs)
