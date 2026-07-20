---
title: Google Ads source overview (new)
description: Learn how to use the Google Ads source in Adobe Experience Platform
---
# [!DNL Google Ads]

Adobe Experience Platform allows data to be ingested from external sources while providing you with the ability to structure, label, and enhance incoming data using Experience Platform services. You can ingest data from a variety of sources such as Adobe applications, cloud-based storage, databases, and many others. Experience Platform provides support for ingesting data from third-party advertising systems, including Google Ads.

Use the Google Ads source to authenticate against the Google Ads API, connect advertiser accounts or manager-account hierarchies, and ingest reporting data into Experience Platform for downstream analytics and activation workflows.

>[!IMPORTANT]
>
>The Google Ads source in the Experience Platform UI is currently in beta and supports one-time ingestion only. For incremental ingestion, use the API-based connection and dataflow flow.

## Prerequisites

Before you connect your Google Ads account to Experience Platform, ensure that the following requirements are met.

### IP address allowlist

You must add region-specific IP addresses to your allowlist prior to connecting your sources to Experience Platform. For more information, read the guide on [allowlisting IP addresses to connect to Experience Platform](../../ip-address-allow-list.md) for more information.

### Configure permissions on Experience Platform

You must have both **[!UICONTROL View Sources]** and **[!UICONTROL Manage Sources]** permissions enabled for your account in order to connect your [!DNL Google Ads] account to Experience Platform. Contact your product administrator to obtain the necessary permissions. For more information, read the [access control UI guide](../../../access-control/ui/overview.md).

### Google Ads access requirements

You must have valid Google Ads API credentials and access to the Google Ads account that you want to read from. If the target advertiser account is managed through a Google Ads manager account (MCC), then the connection must also include the correct login customer ID so that requests can be routed through the proper manager hierarchy.

In practice:

- If the target advertiser account is directly accessible by the OAuth-authorized user, `loginCustomerId` may not be required.
- If the advertiser account is accessible only through an MCC hierarchy, then `loginCustomerId` must identify the manager account used to access that child account.
- An incorrect or missing `loginCustomerId` can result in authorization failures when attempting to query managed child accounts.

## Gather required credentials

To connect Google Ads to Experience Platform, you must provide values for the following connection properties.

| Credential | Description |
| --- | --- |
| `clientCustomerId` | The account number of the Google Ads client account that you want to manage with the Google Ads API. This ID typically follows the format `123-456-7890`. |
| `loginCustomerId` | The account number of the Google Ads manager account used to fetch report data for a specific operating customer. This is required when access to the target account is mediated through an MCC hierarchy. |
| `developerToken` | The developer token used to access the Google Ads API. A single developer token can be used across Google Ads accounts that your application is authorized to access. |
| `refreshToken` | The OAuth 2.0 refresh token used to obtain new access tokens after they expire. |
| `clientId` | The OAuth 2.0 client ID associated with your Google application. |
| `clientSecret` | The OAuth 2.0 client secret associated with your Google application. |
| `googleAdsApiVersion` | The Google Ads API version used by the connector. Experience Platform currently supports version `v19` and newer. |
| `connectionSpec.id` | The Google Ads connection specification ID required for Flow Service API requests: `d771e9c1-4f26-40dc-8617-ce58c4b53702`. |

### About `loginCustomerId`

The `loginCustomerId` value is one of the most important configuration fields in the Google Ads source.

Use `loginCustomerId` when:

- The OAuth-authorized user has access through a manager account,
- The target advertiser account is a child account under an MCC,
- The account is not directly returned as a top-level accessible account.

Do not set `loginCustomerId` unnecessarily for directly accessible advertiser accounts. When possible, validate whether the account is directly accessible first, and only supply a manager ID when access truly depends on that hierarchy.

## Authentication and connection behavior

The Google Ads source uses OAuth 2.0 to authenticate requests to the Google Ads API. Experience Platform stores the connection details in a base connection and uses the supplied credentials to authorize Google Ads API calls on behalf of the customer.

For manager-account scenarios, the connector may need to resolve the appropriate manager hierarchy in order to successfully access the target advertiser account. Internally, this typically involves:

1. Enumerating accessible accounts,
2. Determining whether an account is a manager account,
3. Identifying non-manager leaf accounts,
4. Resolving the correct loginCustomerId when the target account is reachable only through an MCC hierarchy.

This behavior is especially important for customers that manage multiple advertiser accounts from a single manager account structure.

## Data selection and reporting behavior

Google Ads data selection is based on **Google Ads Query Language (GAQL)**. During setup, you specify the attributes, segments, and metrics that should be retrieved for ingestion.

For large report pulls, Google Ads supports both standard search and streaming retrieval patterns. Internally, streaming retrieval is preferred for larger result sets because it allows report rows to be consumed incrementally rather than buffered page by page.

When configuring data selection in the Experience Platform UI, use the **Google Ads Query Builder** to choose the resource type and the fields that you want to ingest, validate the query, and then copy the required attributes into the source workflow.

## Supported connection paths

You can connect Google Ads to Experience Platform using either APIs or the user interface.

### Using APIs

Use the Flow Service API when you need programmatic setup, repeatable configuration, or incremental ingestion support. At a high level, the API workflow includes:

1. Creating a base connection,
2. Exploring the source configuration,
3. Creating source and target connection,
4. Creating a dataflow for ingestion

### Using the UI

Use the Experience Platform Sources workspace for guided setup when you want to connect Google Ads through the UI. The UI flow supports credential entry, attribute selection, preview, and dataflow creation. At present, the UI path remains beta and supports one-time ingestion only.

## Known limitations and notes

- The Google Ads source in the UI is currently beta.
- The UI currently supports one-time ingestion only.
- Use the API-based path for incremental ingestion.
- Experience Platform currently supports Google Ads API version `v19` and newer.
- Manager-account hierarchies require careful handling of `loginCustomerId`; incorrect values can prevent access to child advertiser accounts.

## Next steps

After you have gathered your credentials and confirmed your account access pattern, continue with one of the following setup paths:

- API path: Create a Google Ads base connection and then create a dataflow for your advertising source.
- UI path: Create a Google Ads source connection in the Sources workspace and proceed through attribute selection and dataflow creation.

