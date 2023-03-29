---
keywords: Experience Platform;home;popular topics;Pinterest Ads;
title: Pinterest Ads Source Overview
description: Learn how to connect Pinterest Ads to Adobe Experience Platform using APIs or the user interface.
badge: "Beta"
hide: true
hidefromtoc: true
---
# [!DNL Pinterest Ads]

>[!NOTE]
>
>The [!DNL Pinterest Ads] source is in beta. Read the [Sources overview](../../home.md#terms-and-conditions) for more information on using beta-labelled connectors.

Adobe Experience Platform allows data to be ingested from external sources while providing you with the ability to structure, label, and enhance incoming data using Platform services. You can ingest data from a variety of sources such as Adobe applications, cloud-based storage, databases, and many others.

Experience Platform provides support for ingesting data from a third-party advertising system. Support for advertising providers include [!DNL Pinterest Ads].

[[!DNL Pinterest]](https://www.pinterest.com) is a visual discovery engine for finding recipes, home décor, style inspiration, and other ideas across the web. These are presented on a small scale using images, animated GIFs, and videos in pinboard format. [[!DNL Pinterest Ads]](https://ads.pinterest.com/) allows you to grow your business and reach 400 million people using [!DNL Pinterest].

With [!DNL Pinterest Ads], you can reach users through targeted advertisements to discover and buy your products. Pins from [!DNL Pinterest Ads] are sponsored to receive extra exposure in relevant search results. Users subscribed to [!DNL Pinterest Business] can choose to promote existing best-performing pins, create a new image or video, or even promote an image that's been pinned from a website. [!DNL Pinterest Ads] offers several ad formats to help you meet your specific campaign goals.

## [!DNL Pinterest] APIs {#pinterest-apis}

The [!DNL Pinterest Ads] source leverages the [!DNL Pinterest] APIs to retrieve your [!DNL Pinterest Ads] data, along with all performance and metrics. The supported API endpoints are:

* [Campaign analytics](https://developers.pinterest.com/docs/api/v5/#operation/campaigns/analytics)
* [Ad Group analytics](https://developers.pinterest.com/docs/api/v5/#operation/ad_groups/analytics)
* [Ads analytics](https://developers.pinterest.com/docs/api/v5/#operation/ads/analytics)

Use the [!DNL Pinterest Ads] source to bring your data from [!DNL Pinterest] to Experience Platform, where you can can then execute data analytics. Data is returned starting from the date of ingestion for a backdated range of 90 days. [!DNL Pinterest Ads] uses bearer tokens as an authentication mechanism to communicate with the [!DNL Pinterest] APIs.

## Prerequisites {#prerequisites}

The first step in creating a [!DNL Pinterest Ads] source connection is to ensure that you have a Pinterest developer account. If you do not have one already, visit the [sign up](https://www.pinterest.com/business/create/?next=https://developers.pinterest.com/account-setup/) page to register and create your account.

### Setup [!DNL Pinterest] app and generate access token {#create-app-and-generate-token}

>[!IMPORTANT]
>
>It is recommended to use the [!DNL Pinterest] APIs to generate your access token because generating your access token in the UI provides a limited access. Through the UI, you will only be able to access the following scopes: `pins:read`, `boards:read` and `user_accounts:read`. This limitation is not adequate for usage with the analytics endpoints of the [!DNL Pinterest] API.

To generate your access token, read the [!DNL Pinterest] guides on [setting up your app](https://developers.pinterest.com/docs/getting-started/set-up-app/) and [authenticating using OAuth 2.0](https://developers.pinterest.com/docs/getting-started/authentication/).

### Gather required credentials {#gather-required-credentials}

In order to connect [!DNL Pinterest Ads] to Platform, you must provide values for the following connection properties:

| Credential | Description |
| --- | --- |
| Access token | The [!DNL Pinterest Ads] access token for your user account. The token's user account must either be the owner of the specified [!DNL Pinterest Ad] account or have one of the necessary roles granted to them via Business Access: Admin, Analyst or Campaign Manager. For more information on the access token, please refer to the [[!DNL Pinterest] guide on generating your access token](https://developers.pinterest.com/docs/getting-started/set-up-app/). |
| Ad account ID | The related [!DNL Pinterest Ads] ad account ID for your business unit. For information on retrieving your Ad account ID. Visit the [[!DNL Pinterest] guide on finding IDs in Ads Manager](https://help.pinterest.com/en/business/article/find-ids-in-ads-manager). |
| Campaign, ad group, or ad ID | The `campaign`, `ad group`, or `ad` IDs that correspond with your ad account ID. To obtain the required IDs, navigate to the [!DNL Pinterest] page for **Pinterest Business Hub** > **Ad Account Summary** > **Campaigns** / **Ad Groups** / **Ads** and copy the required ID's mentioned just below each of their names. |

>[!NOTE]
>
>The [!DNL Pinterest] API provides individual APIs to retrieve data associated with each ID. Accordingly, you need to pass only the corresponding IDs for the ID type you are interested in.

## Guardrails {#guardrails}

The following sections provides information on data guardrails for [!DNL Pinterest].

### [!DNL Pinterest] date range {#pinterest-date-range}

The [!DNL Pinterest] API supports both a `start_date` and an `end_date` parameter to retrieve analytics data between a given date range.

* The `start_date` cannot be more than 90 days before the current date.
* The `end_date` cannot be more than 90 days after the `start_date`.

When scheduling your dataflow, you must configure one of the follow frequency and interval settings:

| Frequency | Interval |
| --- | --- |
| `Day` | 1 |
| `Hour` | 24 |

For example, if ingestion is set on March 15, 2023 with a frequency and interval setting configured to `Day=1` or `Hour=24`, then the [!DNL Pinterest] API would only retrieve data from as far back as December 15, 2022 because computation is backdated for 90 days.

### [!DNL Pinterest] time range {#pinterest-time-range}

The [!DNL Pinterest] API supports different kinds of time granularity for how data can be retrieved:

| Time granularity | Description |
| --- | --- |
| **TOTAL** | The data metrics are aggregated over a specified date range. |
| **DAY** | The data metrics are broken down on a daily basis. |
| **HOUR** | The data metrics are broken down on an hourly basis. |
| **WEEKLY** | The data metrics are broken down on a weekly basis. |
| **MONTHLY** | The data metrics are broken down on a monthly basis. |

For Platform, the [!DNL Pinterest Ads] source is internally configured to `Day`, which means data will be aggregated on a daily basis. For example, using `impressions recorded` as a metric, since the granularity is configured as a `DAY`, you would get `xx` impressions on `day 1`, `yy` impressions on `day 2` and so on.

>[!IMPORTANT]
>
>Pinterest imposes a rate limit of 1000 API calls daily on its API to read information from ads, ad groups or ad campaigns. For information on rate limits applicable to underlying API calls, refer to the [[!DNL Pinterest] documentation on rate limits](https://developers.pinterest.com/docs/reference/ratelimits/).

## Connect [!DNL Pinterest Ads] to Platform {#connect-to-platform}

The documentation below provides information on how to connect [!DNL Pinterest Ads] to Platform using APIs or the user interface:

### Connect [!DNL Pinterest Ads] to Platform using APIs {#connect-to-platform-using-api}

* [Create a Pinterest base connection using the Flow Service API](../../tutorials/api/create/advertising/pinterest-ads.md)
* [Explore data tables using the Flow Service API](../../tutorials/api/explore/tabular.md)
* [Create a dataflow for an advertising source using Flow Service API](../../tutorials/api/collect/advertising.md)

### Connect [!DNL Pinterest Ads] to Platform using the UI {#connect-to-platform-using-ui}

* [Create a Pinterest source connection in the UI](../../tutorials/ui/create/advertising/pinterest-ads.md)
* [Create a dataflow for an advertising source connection in the UI](../../tutorials/ui/dataflow/advertising.md)
