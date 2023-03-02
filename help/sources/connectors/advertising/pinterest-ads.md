---
keywords: Experience Platform;home;popular topics;Pinterest Ads;
title: Pinterest Ads Source Overview
description: Learn how to connect Pinterest Ads to Adobe Experience Platform using APIs or the user interface.
---
# [!DNL Pinterest Ads] source

>[!NOTE]
>
>The [!DNL Pinterest Ads] source is in beta. See the [Sources overview](../../home.md#terms-and-conditions) for more information on using beta-labelled connectors.

Adobe Experience Platform allows data to be ingested from external sources while providing you with the ability to structure, label, and enhance incoming data using [!DNL Platform] services. You can ingest data from a variety of sources such as Adobe applications, cloud-based storage, databases, and many others.

[!DNL Experience Platform] provides support for ingesting data from a third-party advertising system. Support for advertising providers include [!DNL Pinterest Ads].

[[!DNL Pinterest Ads]](https://ads.pinterest.com/) allow marketers to reach 400 million people who use [[!DNL Pinterest]](https://www.pinterest.com), a visual discovery engine for finding ideas like recipes, home and style inspiration, and more, on the internet using images, and on a smaller scale, animated GIFs and videos, in the form of pin boards. 

By using [!DNL Pinterest Ads], which are typically just like any other pins, you can reach out to these users through targeted advertisements to discover and buy your products. Pins from [!DNL Pinterest Ads] are sponsored to receive extra exposure in relevant search results. Pinterest Business account holders can choose to promote existing best-performing pins, create a new image or video, or even promote an image that’s been pinned from a website. Pinterest offers several ad formats to help you meet your specific campaign goals.

## [!DNL Pinterest] APIs {#pinterest-apis}

This Adobe Experience Platform [source](https://experienceleague.adobe.com/docs/experience-platform/sources/home.html?lang=en) leverages the [!DNL Pinterest] APIs to retrieve your [!DNL Pinterest Ads] data, along with all performance and metrics. The supported API endpoints are :
* [Campaigns](https://developers.pinterest.com/docs/api/v5/#operation/campaigns/analytics) Analytics
* [Ad Groups](https://developers.pinterest.com/docs/api/v5/#operation/ad_groups/analytics) Analytics
* [Ads](https://developers.pinterest.com/docs/api/v5/#operation/ads/analytics) Analytics

The [!DNL Pinterest Ads] source connection allows you to bring the data from [!DNL Pinterest] to Experience Platform, where you can execute analytics.

The data is returned from today for a backdated range of 186 days. Refer to the [Guardrails](#guardrails) section for details.

[!DNL Pinterest Ads] uses bearer tokens as an authentication mechanism to communicate with the Pinterest APIs.

## Prerequisites {#prerequisites}

The first step in creating a [!DNL Pinterest Ads] source connection is to ensure that you have a Pinterest developer account. If you do not have one already, see the [Signup](https://www.pinterest.com/business/create/?next=https://developers.pinterest.com/account-setup/) page to register and create your account.

### Setup [!DNL Pinterest] App and generate Access Token {#create-app=and-generate-token}

>[!IMPORTANT]
>
> Generating the Access token on the UI provides limited access only to the scopes - pins:read, boards:read and user_accounts:read which is not adequate for usage with the Analytics [!DNL Pinterest] API endpoints.

To generate this access token you will need to
1. [Set up your App](https://developers.pinterest.com/docs/getting-started/set-up-app/).
1. Follow the tutorial section to [Build a working authentication flow based on OAuth 2](https://developers.pinterest.com/docs/getting-started/authentication/).
1. Obtain the required `Access Token`.

### Gather required credentials {#gather-required-credentials}

In order to connect [!DNL Pinterest Ads] to Platform, you must provide values for the following connection properties:

| Credential | Description |
| --- | --- |
| Access Token | The [!DNL Pinterest Ads] access token for your user account.<br> The token's user account must either be the Owner of the specified [!DNL Pinterest Ad] account, or have one of the necessary roles granted to them via Business Access: Admin, Analyst, Campaign Manager. Refer to the [Setup [!DNL Pinterest] App and generate Access Token](#create-app=and-generate-token) if you haven't already created one. |

### Note [!DNL Pinterest] Ad Account ID {#gather-pinterest-account-id}

Note down your [!DNL Pinterest] `Ad Account ID`. Check the [Find IDs in Ads Manager](https://help.pinterest.com/en/business/article/find-ids-in-ads-manager) page for guidance on how to get the value.

### Note [!DNL Pinterest] Camapign or Ad Group or Ad IDs {#gather-pinterest-ids}

You will also need one or more [!DNL Pinterest] `Campaign` or `Ad Group` or `Ad` IDs corresponding to `Campaign` or `Ad Group` or `Ad` names, within the fore mentioned `Ad Account ID`, from which you want to retrieve the information. 

>[!NOTE]
>
>[!DNL Pinterest] provides individual APIs to retrieve data associated with each ID, Accordingly you need to pass only the corresponding IDs for the ID type you are interested in.

To obtain the required IDs, navigate to the [!DNL Pinterest] page for **Pinterest Business Hub** > **Ad Account Summary** > **Campaigns** / **Ad Groups** / **Ads** and copy the required ID's mentioned just below each of their names.

# Guardrails {#guardrails}

The time granularity supported by the [!DNL Pinterest] API are as below :
* **TOTAL** - metrics are aggregated over the specified date range.
* **DAY** - metrics are broken down daily.
* **HOUR** - metrics are broken down hourly.
* **WEEKLY** - metrics are broken down weekly.
* **MONTHLY** - metrics are broken down monthly.

The [API's](#pinterest-apis) leveraged for the [!DNL Pinterest Ads] source have time range restrictions as mentioned below :
* *If granularity is not HOUR, the furthest back you can are allowed to pull data is 914 days before the current date in UTC time and the max time range supported is 186 days.*
* *If granularity is HOUR, the furthest back you can are allowed to pull data is 8 days before the current date in UTC time and the max time range supported is 3 days.*
 
Based on the above [!DNL Pinterest] limitations the granularity for [!DNL Pinterest Ads] source is internally defined as **DAY**, this means the data retrieved will be limited to 186 days backdated from the current date. Accordingly you should 

Additionally refer to the [[!DNL Pinterest Rate Limits]](https://developers.pinterest.com/docs/reference/ratelimits/) documentation for the rate limits applicable to the underlying API calls. For example [!DNL Pinterest] imposes a rate limit of 1000 API calls daily on its API to read information from ads, ad groups or ad campaigns.

## Connect [!DNL Pinterest Ads] to Platform {#connect-to-platform}

The documentation below provides information on how to connect [!DNL Pinterest Ads] to Platform using APIs or the user interface:

### Connect [!DNL Pinterest Ads] to Platform using APIs {#connect-to-platform-using-api}

* [Create a Pinterest base connection using the Flow Service API](../../tutorials/api/create/advertising/ads.md)
* [Explore data tables using the Flow Service API](../../tutorials/api/explore/tabular.md)
* [Create a dataflow for an advertising source using Flow Service API](../../tutorials/api/collect/advertising.md)

### Connect [!DNL Pinterest Ads] to Platform using the UI {#connect-to-platform-using-ui}

* [Create a Pinterest source connection in the UI](../../tutorials/ui/create/advertising/ads.md)
* [Create a dataflow for an advertising source connection in the UI](../../tutorials/ui/dataflow/advertising.md)
