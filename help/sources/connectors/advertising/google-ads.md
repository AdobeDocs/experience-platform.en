---
title: Google Ads (V2)
description: Learn how to connect Google Ads (V2) to Adobe Experience Platform using APIs or the user interface.
---
# [!DNL Google Ads] (V2)

[!DNL Google Ads] (V2) is an Adobe Experience Platform paid media source connector that ingests advertising account, campaign, ad group, ad, asset, experience, and performance data from the [!DNL Google Ads] API into Experience Platform.

The connector maps [!DNL Google Ads] data to standardized paid media Experience Data Model (XDM) structures, allowing you to analyze [!DNL Google Ads] data alongside data from other advertising networks, web properties, commerce systems, and customer applications.

[!DNL Google Ads] (V2) uses read-only access to retrieve reporting data and advertising metadata. It does not create, modify, or delete [!DNL Google Ads] resources.

## Example use cases

| Use case | Goal | How [!DNL Google Ads] (V2) helps |
| --- | --- | --- |
| Cross-channel advertising analysis | Compare [!DNL Google Ads] performance with Meta Ads and other paid media channels. | Ingests [!DNL Google Ads] data into common paid media XDM structures with standardized account, campaign, ad group, ad, asset, experience, and metric identifiers. |
| Media mix modeling and attribution | Evaluate the contribution of paid media to business outcomes. | Provides campaign and advertising performance data, including impressions, clicks, spend, conversions, and conversion value for downstream analysis. |
| Campaign and budget optimization | Understand which campaigns, bidding strategies, and targeting configurations produce the best results. | Ingests campaign metadata, budgets, bidding strategies, channel types, statuses, dates, and selected targeting criteria. |
| Creative and asset performance | Identify which creative assets, ad formats, and experiences perform best. | Ingests ad-level creative metadata, asset associations, asset types, asset performance labels, and derived experience compositions. |
| Performance Max analysis | Analyze Performance Max asset groups and their associated assets. | Uses Performance Max asset-group data to represent asset-group performance and experience relationships where [!DNL Google Ads] does not expose a traditional ad-level structure. |
| Customer journey analysis | Relate advertising engagement to web, commerce, CRM, and other customer events. | Makes [!DNL Google Ads] data available in Experience Platform for use with downstream analytics and activation workflows. |

## Prerequisites

Before connecting [!DNL Google Ads] (V2) to Experience Platform, ensure that you have the following:

### Configure permissions on Experience Platform

You must have both **[!UICONTROL View Sources]** and **[!UICONTROL Manage Sources]** permissions enabled for your Experience Platform account.

Contact your product administrator if you do not have the required permissions. For more information, read the [access control UI guide](../../../access-control/ui/overview.md).

### Configure [!DNL Google Ads] API access

Experience Platform manages the OAuth 2.0 authorization flow for [!DNL Google Ads] (V2). You do not create a Google Cloud project, OAuth client, or refresh token.

You must have:

- A valid [!DNL Google Ads] developer token.
- Access to the [!DNL Google Ads] advertiser account that you want to ingest.
- Permission to access the relevant advertiser accounts through [!DNL Google Ads] or a [!DNL Google Ads] manager account.

### Manager-account access

If the advertiser account is accessed through a [!DNL Google Ads] manager account, also provide the appropriate manager customer ID as the `loginCustomerId`.

The `loginCustomerId` is not required when the OAuth-authorized user can directly access the target advertiser account and no manager hierarchy is needed.

[!DNL Google Ads] (V2) enumerates accessible accounts, identifies manager accounts, traverses the manager-account hierarchy, and resolves the advertiser accounts available for ingestion.

### Gather required credentials

To connect [!DNL Google Ads] (V2) to Experience Platform, provide the following values.

| Credential | Description |
| --- | --- |
| `developerToken` | The [!DNL Google Ads] developer token used to authorize API requests. |
| `loginCustomerId` | The numeric customer ID of the manager account used to access the advertiser account. This credential is required for manager-account access. |

{style="table-layout:auto"}

## Authentication and account discovery

[!DNL Google Ads] (V2) uses OAuth 2.0 to authorize access to the [!DNL Google Ads] API. Experience Platform manages the authorization flow, so you do not configure OAuth scopes or permissions on the [!DNL Google Ads] side.

After you authorize your account, Experience Platform uses your developer token to access [!DNL Google Ads] reporting resources. For manager-account configurations, the connector resolves the account hierarchy and identifies the advertiser accounts available for ingestion.

The account-discovery workflow includes the following operations:

1. Enumerate accounts accessible to the authorized user.
2. Determine whether an accessible account is a manager account.
3. Traverse the manager-account hierarchy.
4. Identify non-manager advertiser accounts.
5. Use the appropriate `loginCustomerId` when requests are routed through the manager-account hierarchy.
6. Retrieve account metadata such as account ID, account name, currency, and time zone.

[!DNL Google Ads] (V2) performs read-only API operations. It does not issue mutate, create, update, or delete requests against [!DNL Google Ads] resources.

## Data selection and ingestion

[!DNL Google Ads] (V2) uses [!DNL Google Ads] Query Language (GAQL) to retrieve account, metadata, and reporting data.

The connector uses resource-specific queries to retrieve the attributes, segments, and metrics required for each entity. SearchStream is used for reporting resources and large result sets where incremental row processing is beneficial.

The supported query inventory includes resources such as:

- `customer`
- `customer_client`
- `campaign`
- `campaign_budget`
- `campaign_criterion`
- `geo_target_constant`
- `ad_group`
- `ad_group_criterion`
- `ad_group_ad`
- `ad_group_ad_asset_view`
- `ad_group_ad_asset_combination_view`
- `asset`
- `asset_group`
- `asset_group_asset`
- `change_status`

Performance metrics are generally retrieved using date-based segments such as `segments.date`.

## Schema configuration

[!DNL Google Ads] (V2) maps source data to standardized paid media XDM structures. The data is organized by entity level so that metadata and performance metrics can be joined across account, campaign, ad group, ad, asset, and experience records.

| Entity | Primary [!DNL Google Ads] resources | Data represented |
| --- | --- | --- |
| Account | `customer`, `customer_client` | Account ID, account name, currency, time zone, manager status, and account metadata. |
| Campaign | `campaign`, `campaign_budget`, `campaign_criterion` | Campaign name, status, advertising channel, subtype, objective, budgets, bidding strategy, dates, URL tracking, and targeting configuration. |
| Ad group | `ad_group`, `ad_group_criterion` | Ad group ID, name, status, bids, targeting, keywords, placements, and campaign relationship. |
| Ad | `ad_group_ad` | Ad ID, ad type, creative content, destination URLs, delivery status, policy and review information, and campaign/ad group relationships. |
| Asset | `asset`, `ad_group_ad_asset_view`, `asset_group_asset` | Asset ID, asset type, text, image or video metadata, dimensions, usage, performance label, and associated ads or campaigns. |
| Experience | `ad_group_ad_asset_combination_view`, `asset_group`, `asset_group_asset` |  Derived creative composition, served assets, headlines, descriptions, calls to action, landing page URLs, and experience relationships. |
| Summary metrics | Resource-specific `metrics.*` fields and `segments.date` | Date-level impressions, clicks, spend, conversions, conversion value, CTR, CPC, CPM, video metrics, and other supported performance measures. |

### Identifier conventions

The V2 mapping defines platform-qualified identifiers for paid media entities. For example:

- The connector derives account identifiers from the [!DNL Google Ads] customer ID.
- Campaign identifiers combine the [!DNL Google Ads] customer ID and campaign ID.
- Ad group and ad identifiers include their parent hierarchy.
- Asset identifiers combine the [!DNL Google Ads] customer ID and asset ID.
- The connector derives experience identifiers from creative-combination or asset-group context.
- Hierarchy paths represent the relationship between account, campaign, ad group, ad, experience, and asset entities.

### Performance Max data

Performance Max campaigns do not always expose the same entity relationships as traditional campaign types.

For Performance Max data:

- `asset_group` represents the primary grouping of assets.
- `asset_group_asset` represents asset-to-group relationships.
- Asset-group metrics provide the context required to analyze asset performance.
- Asset groups act as an experience proxy when a native experience entity is not available.

## Data limitations and considerations

Consider the following limitations when planning your [!DNL Google Ads] (V2) implementation.

### Resource-specific metric support

[!DNL Google Ads] does not expose every metric for every resource. For example, some resources do not support metrics or segments, while others support only a limited set of metrics.

Metric availability also varies between ad, asset, experience, campaign, and Performance Max queries.

### Derived experience records

[!DNL Google Ads] does not provide a single universal experience entity equivalent to the experience model used by the paid media XDM schemas.

The connector derives experience records from available ad, asset-combination, and asset-group data.

### Video metadata

The [!DNL Google Ads] API provides video identifiers and related asset references. However, some media properties, such as video duration, codec, bitrate, frame rate, and audio presence, are not directly available through the [!DNL Google Ads] API.

These fields are null unless an approved enrichment service is added.

### Asset availability

Asset metadata and performance support vary by asset type. For example, image and text metadata is available directly, while some video properties require additional enrichment.

### Google-specific fields

[!DNL Google Ads] concepts that do not have a direct equivalent in the common paid media XDM model are represented using additionalDetails, or left null, according to the approved mapping.

### Enum mappings

[!DNL Google Ads] API enum values are mapped to XDM values using exact matches, close semantic matches, or approved fallback values. Unsupported, unknown, deprecated, or unspecified values may be skipped or set to null.

## Next steps

After you have confirmed your [!DNL Google Ads] credentials and account-access model, continue by [creating a connection to [!DNL Google Ads] using the Experience Platform UI](../../tutorials/ui/create/advertising/google-ads.md).

