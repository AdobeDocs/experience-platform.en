---
keywords: Experience Platform;Pinterest Ads;paid media;sources
title: Pinterest Ads Source Connector
description: Learn about Pinterest Ads paid media ingestion, automatic datasets, and field mappings in Adobe Experience Platform. Connect an account to analyze campaigns.
badgeBeta: label="Beta" type="Informative"
exl-id: 8edbcb26-0a18-47f1-8012-ca209d99d7a6
TQID: https://experienceleague.adobe.com/0mbf8jV7vZZmsZQ9cx7y0OykfCTpBfch-RizjFcBMR8
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
---
# [!DNL Pinterest Ads]

>[!NOTE]
>
>The [!DNL Pinterest Ads] source is in beta. Read the [Sources overview](/help/sources/home.md#terms-and-conditions) for the terms and conditions.

>[!IMPORTANT]
>
>The [!DNL Pinterest Ads] source is available as part of the [!DNL Customer Journey Analytics] SKU.

Use the [!DNL Pinterest Ads] source to connect your ad accounts and ingest paid media metadata and performance metrics. [!DNL Adobe Experience Platform] publishes this data to paid media datasets. Use these datasets in [!DNL Adobe Customer Journey Analytics] to analyze your marketing campaigns.

To connect your account, sign in to [!DNL Pinterest] and authorize [!DNL Experience Platform] to access your advertising data. You do not need to generate or enter API credentials manually.

## How ingestion works {#how-it-works}

After you create a dataflow and select your ad accounts, [!DNL Experience Platform] provisions datasets and schedules ingestion automatically.

| Process | Behavior |
| --- | --- |
| Dataset provisioning | Reuses existing paid media datasets in your organization and creates them if they do not exist. |
| Initial backfill | Runs 30 minutes after dataflow creation and retrieves metadata and metrics for the past 30 days. |
| Daily ingestion | Runs once daily, starting the day after dataflow creation, and retrieves metadata and metrics for the previous day. |
| Restatement | Runs three times for each daily ingestion run: one, two, and three days after that run. |

Restatement retrieves updated historical data to account for changes to previously reported metrics. You do not configure the backfill, daily ingestion, or restatement schedules yourself.

## Account prerequisites {#prerequisites}

Before you connect your account, ensure that you have the following:

* An existing [!DNL Pinterest] ad account.
* Campaigns and ads already set up in that ad account.
* Access to sign in to [!DNL Pinterest] and authorize [!DNL Experience Platform] to access the ad accounts you select.

## Automatic dataset setup {#schema-and-dataset-provisioning}

The connector assigns datasets, schemas, and field mappings automatically. You do not create a target schema, select a target dataset, or map fields during dataflow creation.

The mapped entity types are account, campaign, ad group, ad, asset, experience, and summary metrics. Assets represent [!DNL Pinterest] Pins. Experience records combine information from Pins and ads rather than a separate experience API.

## XDM field mappings {#pinterest-fields}

Use the following tables to understand the core fields mapped to Experience Data Model (XDM) schemas. The connector maps `paidMedia.adNetwork` to `pinterest`.

### Account fields {#account-fields}

The account schema stores your ad account identity and account details.

| Pinterest field | XDM field | Description |
| --- | --- | --- |
| `id` | `paidMedia.accountID` | The ad account identifier. |
| `name` | `paidMedia.accountDetails.accountName` | The ad account name. |
| `country` | `paidMedia.accountDetails.country` | The country code. |
| `currency` | `paidMedia.accountDetails.currency` | The currency code. |
| `permissions` | `paidMedia.accountDetails.permissions` | An array of account permissions. |
| `time_zone` | `paidMedia.accountDetails.timezone` | The ad account time zone. |
| `created_time` | `paidMedia.metadata.createdTime` | The creation timestamp, converted to ISO 8601. |
| `updated_time` | `paidMedia.metadata.updatedTime` | The modification timestamp, converted to ISO 8601. |

### Campaign fields {#campaign-fields}

The campaign schema stores campaign identity, status, and relationships to ad accounts.

| Pinterest field | XDM field | Description |
| --- | --- | --- |
| `id` | `paidMedia.campaignID` | The campaign identifier. |
| `ad_account_id` | `paidMedia.accountID` | The parent ad account identifier. |
| `name` | `paidMedia.metadata.name` | The campaign name. |
| `status` | `paidMedia.metadata.status` | The normalized campaign status. |
| `summary_status` | `paidMedia.metadata.servingStatus` | The normalized delivery status. |
| `created_time` | `paidMedia.metadata.createdTime` | The creation timestamp, converted to ISO 8601. |
| `updated_time` | `paidMedia.metadata.updatedTime` | The modification timestamp, converted to ISO 8601. |

For campaigns, ad groups, and ads, the connector normalizes `ACTIVE`, `PAUSED`, `ARCHIVED`, and `DRAFT` to lowercase status values. It maps `DELETED_DRAFT` to `deleted`.

### Ad group fields {#ad-group-fields}

The ad group schema stores ad group identity and relationships to campaigns and accounts.

| Pinterest field | XDM field | Description |
| --- | --- | --- |
| `id` | `paidMedia.adGroupID` | The ad group identifier. |
| `ad_account_id` | `paidMedia.accountID` | The parent ad account identifier. |
| `campaign_id` | `paidMedia.campaignID` | The parent campaign identifier. |
| `name` | `paidMedia.metadata.name` | The ad group name. |
| `status` | `paidMedia.metadata.status` | The normalized ad group status. |
| `summary_status` | `paidMedia.metadata.servingStatus` | The normalized delivery status. |

### Ad fields {#ad-fields}

The ad schema stores ad identity, review status, and relationships to other paid media entities.

| Pinterest field | XDM field | Description |
| --- | --- | --- |
| `id` | `paidMedia.adID` | The ad identifier. |
| `ad_group_id` | `paidMedia.adGroupID` | The parent ad group identifier. |
| `campaign_id` | `paidMedia.campaignID` | The parent campaign identifier. |
| `ad_account_id` | `paidMedia.accountID` | The parent ad account identifier. |
| `pin_id` | `paidMedia.assetID` | The related Pin identifier. |
| `name` | `paidMedia.metadata.name` | The ad name. |
| `status` | `paidMedia.metadata.status` | The normalized ad status. |
| `review_status` | `adDetails.reviewStatus` | The review status, such as `pending`, `rejected`, `approved`, or `not_reviewed`. |

Creative titles and descriptions come from the related Pin rather than the ad object.

### Asset fields {#asset-fields}

The asset schema stores Pin content and media properties. The following mappings describe Pins with a single image or video.

| Pinterest field | XDM field | Description |
| --- | --- | --- |
| `id` | `paidMedia.assetID` | The Pin identifier. |
| `title` | `assetDetails.title` | The Pin title. |
| `description` | `assetDetails.description` | The Pin description. |
| `media.media_type` | `assetDetails.assetType` | The asset type, such as `image` or `video`. |
| `media.images["1200x"].url` | `assetDetails.mediaProperties.url` | The largest available image URL. |
| `media.images["150x150"].url` | `assetDetails.mediaProperties.thumbnailURL` | The image thumbnail URL. |
| `media.video_url` | `assetDetails.mediaProperties.url` | The video URL for a video Pin. |
| `media.cover_image_url` | `assetDetails.mediaProperties.thumbnailURL` | The cover image URL for a video Pin. |
| `media.duration` | `assetDetails.videoProperties.duration` | The video duration, supplied by [!DNL Pinterest] in milliseconds. |

For Pins with multiple images, videos, or mixed media, each item becomes a separate asset record. The connector generates an asset identifier using `{pin_id}_{index}`, where `index` is the item's position starting from zero. These assets use the `carousel_card` asset type.

### Experience fields {#experience-fields}

Experience records describe the creative experience derived from the Pin and ad. The experience identifier uses the Pin identifier.

| Pinterest creative type | XDM experience type |
| --- | --- |
| `REGULAR` | `single_image` |
| `VIDEO`, `MAX_VIDEO`, `CTV_VIDEO` | `single_video` |
| `CAROUSEL` | `carousel` |
| `COLLECTION`, `MAX_WIDTH_REGULAR_COLLECTION`, `MAX_WIDTH_VIDEO_COLLECTION` | `collection` |
| `IDEA`, `SHOWCASE` | `instant_experience` |
| `QUIZ`, `SHOPPING`, `COLLAGE`, `APP` | `other` |

For Pins with multiple media items, the connector populates `experienceDetails.carouselProperties.cards[]` with one entry per item. Each card references its generated asset identifier.

### Summary metrics fields {#summary-metrics-fields}

Summary metrics store advertising performance data. The connector maps ad metrics and asset metrics from ad analytics, using `PIN_ID` as the asset grouping key.

| Pinterest field | XDM field | Description |
| --- | --- | --- |
| `SPEND_IN_MICRO_DOLLAR`, `SPEND_IN_DOLLAR` | `metrics.spend` | Advertising spend. |
| `PAID_IMPRESSION`, `TOTAL_IMPRESSION` | `metrics.impressions` | Impression count. |
| `TOTAL_CLICKTHROUGH`, `CLICKTHROUGH_1`, `CLICKTHROUGH_2` | `metrics.clicks` | Click count. |
| `CTR`, `ECTR`, `CTR_2` | `metrics.ctr` | Click rate. |
| `TOTAL_ENGAGEMENT`, `ENGAGEMENT_1`, `ENGAGEMENT_2` | `metrics.engagements` | Engagement count. |
| `TOTAL_CONVERSIONS` | `metrics.conversions` | Conversion count. |
| `CHECKOUT_ROAS` | `metrics.roas` | Return on advertising spend for checkout conversions. |
| `TOTAL_VIDEO_MRC_VIEWS`, `VIDEO_MRC_VIEWS_1`, `VIDEO_MRC_VIEWS_2` | `metrics.videoViews` | Video view count. |
| `TOTAL_VIDEO_P100_COMPLETE`, `VIDEO_P100_COMPLETE_2` | `metrics.videoCompletions` | Completed video view count. |

Additional mappings include cost, conversion, video, attribution, and engagement metrics.

Experience summary metrics include device and placement breakdowns from ad targeting analytics. The connector requests `APPTYPE` for device breakdowns and `PLACEMENT` for placement breakdowns. Other targeting breakdowns are not requested.

## Connect your account {#connect-to-platform}

To create a dataflow, follow the [Pinterest Ads UI tutorial](/help/sources/tutorials/ui/create/advertising/pinterest-ads.md).

## Related documentation {#related-documentation}

Use the [Pinterest API documentation](https://developers.pinterest.com/docs/api/v5/introduction){target="_blank"} for information about the underlying advertising APIs.
