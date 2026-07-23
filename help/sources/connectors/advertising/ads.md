---
title: Google Ads Source Overview
description: Learn how to connect Google Ads to Adobe Experience Platform using APIs or the user interface.
exl-id: 1f6257e0-213c-4723-a240-511c11c5833c
TQID: https://experienceleague.adobe.com/2M9Hz2MbXnZzPNQKvi5m2T28Ntr3lqZwiZCiKspsgJk
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: c20d46e7-1c7d-476c-a50e-3961d4dce35f
    internal-label: Reporting
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: aa2f3246-cb95-4b30-8899-fdf7d73550cc
    internal-label: Reporting
---
# [!DNL Google Ads]

[!DNL Google Ads] is Google's online advertising platform that helps you reach potential customers across Search, YouTube, Maps, and partner websites. You can target the right audience, control your budget, and track results to drive awareness, leads, and sales.

Use the [!DNL Google Ads] source to authenticate against the [!DNL Google Ads] API, connect advertiser accounts or manager-account hierarchies, and ingest reporting data into Experience Platform for downstream analytics and activation workflows.

>[!IMPORTANT]
>
>The [!DNL Google Ads] source in the Experience Platform UI is currently in beta and supports one-time ingestion only. For incremental ingestion, use the API-based connection and dataflow flow.

## Prerequisites

Before you connect your [!DNL Google Ads] account to Experience Platform, ensure that the following requirements are met.

### IP address allowlist

You must add region-specific IP addresses to your allowlist prior to connecting your sources to Experience Platform. For more information, read the guide on [allowlisting IP addresses to connect to Experience Platform](../../ip-address-allow-list.md) for more information.

### Configure permissions on Experience Platform

You must have both **[!UICONTROL View Sources]** and **[!UICONTROL Manage Sources]** permissions enabled for your account in order to connect your [!DNL Google Ads] account to Experience Platform. Contact your product administrator to obtain the necessary permissions. For more information, read the [access control UI guide](../../../access-control/ui/overview.md).

### [!DNL Google Ads] access requirements

You must have valid [!DNL Google Ads] API credentials and access to the [!DNL Google Ads] account that you want to read from. If the target advertiser account is managed through a [!DNL Google Ads] manager account (MCC), then the connection must also include the correct login customer ID so that requests can be routed through the proper manager hierarchy.

In practice:

- If the target advertiser account is directly accessible by the OAuth-authorized user, `loginCustomerId` may not be required.
- If the advertiser account is accessible only through an MCC hierarchy, then `loginCustomerId` must identify the manager account used to access that child account.
- An incorrect or missing `loginCustomerId` can result in authorization failures when attempting to query managed child accounts.

## Gather required credentials

To connect [!DNL Google Ads] to Experience Platform, you must provide values for the following connection properties.

| Credential | Description |
| --- | --- |
| `clientCustomerId` | The account number of the [!DNL Google Ads] client account that you want to manage with the [!DNL Google Ads] API. This ID typically follows the format `123-456-7890`. |
| `loginCustomerId` | The account number of the [!DNL Google Ads] manager account used to fetch report data for a specific operating customer. This is required when access to the target account is mediated through an MCC hierarchy. |
| `developerToken` | The developer token used to access the [!DNL Google Ads] API. A single developer token can be used across [!DNL Google Ads] accounts that your application is authorized to access. |
| `refreshToken` | The OAuth 2.0 refresh token used to obtain new access tokens after they expire. |
| `clientId` | The OAuth 2.0 client ID associated with your Google application. |
| `clientSecret` | The OAuth 2.0 client secret associated with your Google application. |
| `googleAdsApiVersion` | The [!DNL Google Ads] API version used by the connector. Experience Platform currently supports version `v19` and newer. |
| `connectionSpec.id` | The [!DNL Google Ads] connection specification ID required for Flow Service API requests: `d771e9c1-4f26-40dc-8617-ce58c4b53702`. |

### About `loginCustomerId`

The `loginCustomerId` value is one of the most important configuration fields in the [!DNL Google Ads] source.

Use `loginCustomerId` when:

- The OAuth-authorized user has access through a manager account,
- The target advertiser account is a child account under an MCC,
- The account is not directly returned as a top-level accessible account.

Do not set `loginCustomerId` unnecessarily for directly accessible advertiser accounts. When possible, validate whether the account is directly accessible first, and only supply a manager ID when access truly depends on that hierarchy.

## Authentication and connection behavior

The [!DNL Google Ads] source uses OAuth 2.0 to authenticate requests to the [!DNL Google Ads] API. Experience Platform stores the connection details in a base connection and uses the supplied credentials to authorize [!DNL Google Ads] API calls on behalf of the customer.

For manager-account scenarios, the connector may need to resolve the appropriate manager hierarchy in order to successfully access the target advertiser account. Internally, this typically involves:

1. Enumerating accessible accounts,
2. Determining whether an account is a manager account,
3. Identifying non-manager leaf accounts,
4. Resolving the correct loginCustomerId when the target account is reachable only through an MCC hierarchy.

This behavior is especially important for customers that manage multiple advertiser accounts from a single manager account structure.

## Data selection and reporting behavior

[!DNL Google Ads] data selection is based on **[!DNL Google Ads] Query Language (GAQL)**. During setup, you specify the attributes, segments, and metrics that should be retrieved for ingestion.

For large report pulls, [!DNL Google Ads] supports both standard search and streaming retrieval patterns. Internally, streaming retrieval is preferred for larger result sets because it allows report rows to be consumed incrementally rather than buffered page by page.

When configuring data selection in the Experience Platform UI, use the **[!DNL Google Ads] Query Builder** to choose the resource type and the fields that you want to ingest, validate the query, and then copy the required attributes into the source workflow.

## Supported connection paths

You can connect [!DNL Google Ads] to Experience Platform using either APIs or the user interface.

### Using APIs

Use the Flow Service API when you need programmatic setup, repeatable configuration, or incremental ingestion support. At a high level, the API workflow includes:

1. Creating a base connection,
2. Exploring the source configuration,
3. Creating source and target connection,
4. Creating a dataflow for ingestion

### Using the UI

Use the Experience Platform Sources workspace for guided setup when you want to connect [!DNL Google Ads] through the UI. The UI flow supports credential entry, attribute selection, preview, and dataflow creation. At present, the UI path remains beta and supports one-time ingestion only.

## Known limitations and notes

- The [!DNL Google Ads] source in the UI is currently beta.
- The UI currently supports one-time ingestion only.
- Use the API-based path for incremental ingestion.
- Experience Platform currently supports [!DNL Google Ads] API version `v19` and newer.
- Manager-account hierarchies require careful handling of `loginCustomerId`; incorrect values can prevent access to child advertiser accounts.

## Next steps

After you have gathered your credentials and confirmed your account access pattern, continue with one of the following setup paths:

- API path: Create a [!DNL Google Ads] base connection and then create a dataflow for your advertising source.
- UI path: Create a [!DNL Google Ads] source connection in the Sources workspace and proceed through attribute selection and dataflow creation.

