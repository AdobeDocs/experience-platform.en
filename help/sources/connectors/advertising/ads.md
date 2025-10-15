---
title: Google Ads Source Overview
description: Learn how to connect Google Ads to Adobe Experience Platform using APIs or the user interface.
exl-id: 1f6257e0-213c-4723-a240-511c11c5833c
---
# [!DNL Google Ads] source

>[!NOTE]
>
>The [!DNL Google Ads] source is in beta. See the [Sources overview](../../home.md#terms-and-conditions) for more information on using beta-labeled connectors.

Adobe Experience Platform allows data to be ingested from external sources while providing you with the ability to structure, label, and enhance incoming data using Experience Platform services. You can ingest data from a variety of sources such as Adobe applications, cloud-based storage, databases, and many others.

Experience Platform provides support for ingesting data from a third-party advertising system. Support for advertising providers include [!DNL Google Ads].

## Prerequisites {#prerequisites}

### IP address allowlist

You must add region-specific IP addresses to your allowlist prior to connecting your sources to Experience Platform. For more information, read the guide on [allowlisting IP addresses to connect to Experience Platform](../../ip-address-allow-list.md) for more information.

### Configure permissions on Experience Platform

You must have both **[!UICONTROL View Sources]** and **[!UICONTROL Manage Sources]** permissions enabled for your account in order to connect your [!DNL Google Ads] account to Experience Platform. Contact your product administrator to obtain the necessary permissions. For more information, read the [access control UI guide](../../../access-control/ui/overview.md).

### Gather required credentials

You must provide the appropriate values to the following credentials in order to successfully connect your [!DNL Google Ads] account to Experience Platform.

| Credential | Description |
| --- | --- |
| `clientCustomerId` | The client customer ID is the account number that  corresponds with the [!DNL Google Ads] client account that you want to manage with the [!DNL Google Ads] API. This ID follows the template of `123-456-7890`. |
| `loginCustomerId` | The login customer ID is the account number that corresponds with your [!DNL Google Ads] manager account and is used to fetch report data from a specific operating customer. For more information on the login customer ID, read the [[!DNL Google Ads] API documentation](https://developers.google.com/search-ads/reporting/concepts/login-customer-id). |
| `developerToken` | The developer token allows you to access the [!DNL Google Ads] API. You can use the same developer token to make requests against all of your [!DNL Google Ads] accounts. Retrieve your developer token by [logging in to your manager account](https://ads.google.com/home/tools/manager-accounts/) and then navigating to the [!DNL API Center] page. |
| `refreshToken` | The refresh token is a part of [!DNL OAuth2] authentication. This token allows you to regenerate your access tokens after they expire. |
| `clientId` |  The client ID is used in tandem with the client secret as part of [!DNL OAuth2] authentication. Together, the client ID and client secret enables your application to operate on behalf of your account by identifying your application to [!DNL Google]. |
| `clientSecret` | The client secret is used in tandem with the client ID as part of [!DNL OAuth2] authentication. Together, the client ID and client secret enables your application to operate on behalf of your account by identifying your application to [!DNL Google]. |
| `googleAdsApiVersion` | The current API version supported by [!DNL Google Ads]. While the latest version is `v21`, Experience Platform supports `v19` and all newer versions. |
| `connectionSpec.id` | The connection specification returns a source's connector properties, including authentication specifications related to creating the base and source connections. The connection specification ID for [!DNL Google Ads] is: `d771e9c1-4f26-40dc-8617-ce58c4b53702`. This value is required if you are connecting your [!DNL Google Ads] account using the [!DNL Flow Service] API.|

## Connect [!DNL Google Ads] to Experience Platform

The documentation below provides information on how to connect [!DNL Google Ads] to Experience Platform using APIs or the user interface:

### Using APIs

* [Create a Google Ads base connection using the Flow Service API](../../tutorials/api/create/advertising/ads.md)
* [Explore data tables using the Flow Service API](../../tutorials/api/explore/tabular.md)
* [Create a dataflow for an advertising source using Flow Service API](../../tutorials/api/collect/advertising.md)

### Using the UI

* [Create a Google Ads source connection in the UI](../../tutorials/ui/create/advertising/ads.md)
* [Create a dataflow for an advertising source connection in the UI](../../tutorials/ui/dataflow/advertising.md)
