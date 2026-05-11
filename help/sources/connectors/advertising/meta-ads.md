---
title: Meta Ads Source Overview
description: Learn how to connect Meta Ads to Adobe Experience Platform using APIs or the user interface.
badge: Beta
---
# [!DNL Meta Ads]

The [!DNL Meta Ads] source is an Adobe Experience Platform paid media connector that ingests advertising performance data from Meta properties ([!DNL Facebook], [!DNL Instagram]) into the Experience Platform data lake in a standardized, Experience Data Model (XDM) compatible format.

Using the [!DNL Meta Ads] source, you can:

- Centralize paid media performance data in Experience Platform alongside on‑site, CRM, and commerce data.
- Bring in account, campaign, ad set, and ad‑level insights via the [!DNL Meta Marketing] (Insights) APIs.
- Use a single, governed source for [!DNL Meta] data across applications such as Adobe Mix Modeler, Customer Journey Analytics, and GenStudio for Performance Marketing.

The [!DNL Meta Ads] source for Experience Platform provides a governed, reusable entry point for [!DNL Meta] advertising data. After configuring authentication with your [!DNL Meta] business account and selecting the ad accounts you want to ingest, Experience Platform will automatically schedule and transform [!DNL Meta Insights] data into XDM‑compatible datasets.

This enables a wide range of use cases, including media mix modeling, cross‑channel journey analytics, and creative performance analysis—all powered by standardized paid media data in Experience Platform.

## Example use cases

| Use case | Goal | How the [!DNL Meta Ads] source helps |
| --- | --- | --- |
| Media mix modeling and budget optimization | Evaluate the impact of [!DNL Meta] spend alongside other channels (search, programmatic, email) and optimize media allocation. | <ul><li>Ingests [!DNL Meta] campaign, ad set, and ad-level performance (impressions, spend, conversions) into Experience Platform.</li><li>Feeds standardized ad datasets to Adobe Mix Modeler via Snowflake to train media mix models across channels and simulate budget shifts.</li><li>Provides consistent, governed data that can be versioned and restated as [!DNL Meta] updates historical metrics.</li></ul> |
| Journey analytics: understanding how [!DNL Meta Ads] drive on‑site behavior | See how [!DNL Meta] ad exposures relate to customer journeys across web, app, and other touchpoint. | <ul><li>Brings [!DNL Meta] delivery and conversion metrics into Experience Platform, aligned on identifiers like: Campaign/Ad IDs or UTM parameters or landing pages(when configured)</li><li>Combined with Adobe Analytics or Web SDK data in Experience Platform, you can use Customer Journey Analytics to analyze journeys that begin with [!DNL Meta] impressions or clicks, attribute downstream events (sign‑ups, purchases) to [!DNL Meta] campaigns and compare [!DNL Meta]'s performance against other acquisition channels.</li></ul> | 
| Creative and content performance analysis | Understand which creatives and assets in [!DNL Meta] campaigns perform best, and connect that to content in Adobe systems. | <ul><li>Ingests ad‑level insights, including mappings to creatives and (optionally) asset metadata.</li><li>Feeds this data to GenStudio / Content Analytics to: evaluate how different creatives, formats, or messages perform in [!DNL Meta] and correlate [!DNL Meta] performance with content variants created or managed in Adobe Experience Manager or GenStudio.</li><li> Supports cross‑network comparisons once [!DNL Google Ads] and other ad networks are connected, using the same schema.</li></ul> | 
| Cross‑channel, cross‑publisher performance reporting | Provide a single, standardized view of advertising performance across [!DNL Meta] and other paid channels. | <ul><li>Uses a common ad schema across [!DNL Meta], [!DNL Google Ads], [!DNL DV360], Trade Desk, etc.</li><li>Enables: Unified dashboards for media teams (spend, reach, conversions by channel, campaign, or audience).</li><li>Standardized KPIs computed consistently across networks</li><li>Reduces dependency on ad‑hoc ETL tools or per‑team pipelines and improves auditability.</li></ul> |

## Prerequisites

### Configure permissions on Experience Platform

You must have both **[!UICONTROL View Sources]** and **[!UICONTROL Manage Sources]** permissions enabled for your account in order to connect your [!DNL Meta Ads] account to Experience Platform. Contact your product administrator to obtain the necessary permissions. For more information, read the [access control UI guide](../../../access-control/ui/overview.md).

### [!DNL Meta] account prerequisites

Before you can successfully connect the [!DNL Meta Ads] source in Experience Platform, the customer's [!DNL Meta] setup must meet a few basic conditions. These ensure the connector can authenticate and retrieve data from the [!DNL Meta Marketing] API.

To prepare the [!DNL Meta] side:

**Set up [!DNL Meta Business Manager] and ad accounts**
You must have [!DNL Meta Business Manager] configured and at least one [!DNL Meta Ads] account that will be used as the data source. Campaigns, ad sets, ads, assets, and insights should already exist in these ad accounts; the [!DNL Meta Ads] source reads from this existing advertising data.

**Ensure access to the [!DNL Meta Marketing] API**
You must have a [!DNL Meta] app that is allowed to use the [!DNL Meta Marketing] API / Graph API. This app is what Experience Platform will use under the hood when it connects to [!DNL Meta]. The app must be correctly configured in [!DNL Meta]'s developer console and linked to the relevant Business Manager.

**Grant the correct API permissions (scopes)**
The [!DNL Meta] app used for the connector must have at least the following OAuth scopes approved and available:

- `ads_read` – required to read ads, campaigns, ad sets, and performance metrics.
- `ads_management` – required for broader ads account access and some reporting endpoints.

These permissions are explicitly referenced in the [!DNL Meta] paid media OAuth configuration used by Experience Platform's [!DNL Meta Ads] connector and must be granted on the [!DNL Meta] side before you attempt to authorize the source.

**Use a [!DNL Meta] user with sufficient ad‑account permissions**

The person who completes the OAuth login in the Experience Platform Sources UI must be a [!DNL Meta] user with adequate permissions on the ad account(s) that will be connected. In practice, this typically means:

- The user is part of the same Business Manager as the ad accounts.
- The user has at least Advertiser‑level access (often higher, such as Admin) on those ad accounts.

If the user has limited permissions, [!DNL Meta] may allow login but restrict access to certain ad accounts or reporting endpoints, resulting in incomplete or empty data when the dataflows run.

**Validate that the [!DNL Meta] app and user can see the intended ad accounts**

Before attempting to create the source connection on Experience Platform, it is recommended to:

- Verify in [!DNL Meta Business Manager] that the app is associated with the Business and can access the ad accounts.
- Confirm that the user who will authorize from Experience Platform can see those ad accounts in [!DNL Meta]'s UI and via the Graph API.

This reduces the chance of "no data returned" issues caused by permission mismatches between the app, the user, and the ad accounts.

## Schema configuration

The [!DNL Meta Ads] source ships with a standardized set of XDM-based paid media schemas that provide consistent modeling of [!DNL Meta] (Facebook/Instagram) advertising data across Experience Platform and applications. These schemas are designed to be cross-channel, joinable, and extensible.

| Schema / Dataset | Purpose | Key Field Groups / Attributes | Standard Entity Levels |
| --- | --- | --- | --- |
| Paid Media Account Lookup | Lookup/account metadata | Account ID, name, currency, timezone, account status, creation dates | Account |
| Paid Media Campaign Lookup | Campaign metadata | Campaign ID, name, status, objective, budget, type, start/end date | Campaign |
| Paid Media AdGroup Lookup | Ad group/adset metadata | Ad group ID, campaign link, status, budget, optimization goals | Ad Group / Ad Set |
| Paid Media Ad Lookup | Ad-level metadata | Ad ID, name, creative details, linkage to ad group and campaign | Ad |
| Paid Media Asset Lookup | Ad asset (image/video) metadata | Asset ID, type, source URL, dimensions, usage | Asset |
| Paid Media Experience Lookup | Experience-level metadata (creative experience) | Experience ID, assets involved, title, description, call-to-action | Experience |
| Paid Media Summary Metrics | Performance summary/aggregated reporting | Impressions, clicks, conversions, spend, reach, video metrics, etc. | Ad, Experience, Asset, Campaign |

### Example Core Schema Fields by Entity

| Entity | Key XDM Fields | Mapping Logic/Meta Fields |
| --- | --- | --- |
| Account | paidMedia.accountID, paidMedia.accountGUID, name, status, createdTime, timezone, currency | Meta account_id, calculated GUID, status, account meta info |
| Campaign | paidMedia.campaignID, campaignGUID, name, status, objective, budgetType, dailyBudget, start/end date | Meta campaign_id, GUID, all mapped directly from API |
| AdGroup | paidMedia.adGroupID, adGroupGUID, name, status, optimizationGoal | Meta adset_id, computed GUID, ad set meta info |
| Ad | paidMedia.adID, adGUID, adType, creative, deliveryStatus, reviewStatus | Meta ad_id, creative*, classifier UDF, status enums |
| Asset | paidMedia.assetID, assetGUID, assetType, sourceURL, height, width | Meta image_hash/video_id, URLs, size |
| Experience | experienceID, experienceGUID, experienceAssetIDs, title, description, cta | Derived, unique by creative+copy |
| Metrics | impressions, clicks, conversions, conversionValues, spend, reach, video metrics (thruplay, retention, plays, etc.) | Meta insights fields, mapped to XDM measure or value/array |

**Summary Metrics Structure**

All performance data uses `paid-media-summary-metrics.schema.json` as the base. For each date and entity level row, you get:

- account_id, campaign_id, ad_id, adset_id, asset_id, experience_id (as appropriate for breakdown)
- impressions, clicks, conversions, spend, reach, unique_clicks, all video watch metrics
- breakdowns: device, platform, placement, age, gender (optional in request)
- metrics fields: standardized as { "value": 1234 } objects

+++View sample aggregate fields

```json
{
  "account_id": "...",
  "campaign_id": "...",
  "ad_id": "...",
  "date": "YYYY-MM-DD",
  "impressions": { "value": 155023 },
  "clicks": { "value": 225 },
  "conversions": { "value": 42 },
  "spend": { "value": 459.96 },
  "video_thruplay_watched_actions": { "value": 88 }
}
```

+++

## Next steps

This page summarized the [!DNL Meta Ads] paid media connector: what it ingests from [!DNL Meta] into Experience Platform, example use cases (such as media mix modeling, journey analytics, and cross-channel reporting), and the Experience Platform and [!DNL Meta] permissions and account setup you need before you connect.

When you are ready to create the source connection, follow the tutorial on [ingesting [!DNL Meta Ads] data to Experience Platform in the UI](../../tutorials/ui/create/advertising/meta-ads.md).


