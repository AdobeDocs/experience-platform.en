---
title: Connect Google Ads To Experience Platform Using APIs
description: Learn how to connect Adobe Experience Platform to Google Ads using the Flow Service API.
exl-id: 4658e392-1bd9-4e74-aa05-96109f9b62a0
TQID: https://experienceleague.adobe.com/-LBtfXxOo-UC7Aqtsg-YItREUlz-VkASj57vh8YmuVA
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
---
# Connect [!DNL Google Ads] to Experience Platform using the [!DNL Flow Service] API

A base connection represents the authenticated connection between your source and Adobe Experience Platform. Use this tutorial to connect your Google Ads account to Experience Platform using the [[!DNL Flow Service] API](https://developer.adobe.com/experience-platform-apis/references/flow-service/).

A Google Ads base connection stores the authentication details required to access the Google Ads API and creates the connection ID that you will use in later steps to explore your source configuration and create a dataflow.

## Get Started

This guide requires a working understanding of the following components of Experience Platform:

- [Sources](../../../../home.md): Experience Platform allows data to be ingested from various sources while providing you with the ability to structure, label, and enhance incoming data using Experience Platform services.
- [Sandboxes](../../../../../sandboxes/home.md): Experience Platform provides virtual sandboxes which partition a single Experience Platform instance into separate virtual environments to help develop and evolve digital experience applications.

The following sections provide additional information that you will need to know in order to successfully connect to [!DNL Google Ads] using the [!DNL Flow Service] API.

### Using Experience Platform APIs

For information on how to successfully make calls to Experience Platform APIs, see the guide on [getting started with Experience Platform APIs](../../../../../landing/api-guide.md).

### Gather values for required headers

In order to make calls to Experience Platform APIs, you must first complete the authentication tutorial. Completing the authentication tutorial provides the values for each of the required headers in all Experience Platform API calls, as shown below:

```json
Authorization: Bearer {ACCESS_TOKEN}
x-api-key: {API_KEY}
x-gw-ims-org-id: {ORG_ID}
x-sandbox-name: {SANDBOX_NAME}
Content-Type: application/json
```

All resources in Experience Platform are isolated to specific virtual sandboxes. All requests to Experience Platform APIs require a header that specifies the name of the sandbox the operation will take place in.

### Gather required credentials

For information on authentication, read the [[!DNL Google Ads] source overview](../../../../connectors/advertising/ads.md).

## Create a base connection

A base connection retains information between your source and Experience Platform, including your source's authentication credentials, the current state of the connection, and your unique base connection ID.

To create a base connection ID, make a POST request to the `/connections` endpoint while providing your Google Ads authentication credentials as part of the request parameters.

**API format**

```https
POST /connections
```

**Request**

The following request creates a base connection for Google Ads:

```shell
curl -X POST \
  'https://platform.adobe.io/data/foundation/flowservice/connections' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json'
  -d '{
      "name": "Google Ads base connection",
      "description": "Google Ads base connection",
      "auth": {
          "specName": "Basic Authentication",
          "params": {
              "clientCustomerID": "{CLIENT_CUSTOMER_ID}",
              "loginCustomerID": "{LOGIN_CUSTOMER_ID}",
              "developerToken": "{DEVELOPER_TOKEN}",
              "refreshToken": "{REFRESH_TOKEN}",
              "clientId": "{CLIENT_ID}",
              "clientSecret": "{CLIENT_SECRET}",
              "googleAdsApiVersion": "v19"

          }
      },
      "connectionSpec": {
          "id": "d771e9c1-4f26-40dc-8617-ce58c4b53702",
          "version": "1.0"
      }
  }'
```

If your target advertiser account is directly accessible and does not require manager-account routing, you may omit `loginCustomerID` from the `auth.params` object.


| Property | Description |
| --- | --- |
| `name` | The name of your base connection. Use a descriptive name that makes it easy to identify the Google Ads connection later. |
| `description` | An optional description that you can use to store additional context about the connection. |
| `auth.specName` | The authentication type used by the connector. |
| `auth.params.clientCustomerID` | The client customer ID of your [!DNL Google Ads] account. |
| `auth.params.loginCustomerID` | The login customer ID that corresponds with your [!DNL Google Ads] manager account. |
| `auth.params.developerToken` | The developer token of your [!DNL Google Ads] account. |
| `auth.params.refreshToken` | The refresh token of your [!DNL Google Ads] account. |
| `auth.params.clientID` | The client ID of your [!DNL Google Ads] account. |
| `auth.params.clientSecret` | The client secret of your [!DNL Google Ads] account. |
| `auth.params.googleAdsApiVersion` | The [!DNL Google Ads] API version that you are using. Experience Platform currently supports version `v19` and newer. Make sure you're using one of these supported versions to ensure compatibility. |
| `connectionSpec.id` | The [!DNL Google Ads] connection specification ID: `d771e9c1-4f26-40dc-8617-ce58c4b53702`. |

**Response**

A successful response returns details of the newly created base connection, including its unique identifier (`id`). This ID is required in the next step to create a source connection.

```json
{
    "id": "2484f2df-c057-4ab5-84f2-dfc0577ab592",
    "etag": "\"10033e77-0000-0200-0000-5e96785b0000\""
}
```

## Verify your connection details

After you create your base connection, validate the following before proceeding:

- The base connection was created in the intended sandbox,
- The `clientCustomerId` points to the intended advertiser account,
- The `loginCustomerId` is correct if the advertiser account is accessed through an MCC,
- The Google Ads API version is one supported by Experience Platform.

If authentication succeeds but downstream data access fails, the most common cause is an incorrect or unnecessary `loginCustomerId`.

## Next steps

By following this tutorial, you have created a Google Ads base connection using the Flow Service API.

You can now continue with the following tutorials:

- [Explore your source configuration](../../explore/tabular.md) to identify the source object and fields that you want to ingest.
- [Create a dataflow for an advertising](../../collect/advertising.md) source to bring Google Ads data into Experience Platform.

## Troubleshooting

### Authorization errors for child advertiser accounts

If requests fail when you attempt to access a child advertiser account, verify that `loginCustomerId` is set to the correct manager account. This is required when access is mediated through an MCC hierarchy.

### Invalid or revoked refresh token

If the connector cannot refresh access tokens, re-authorize the Google Ads account to generate a new refresh token.

### Unsupported API version

If requests fail due to version mismatch, ensure that `googleAdsApiVersion` is set to a version supported by Experience Platform.