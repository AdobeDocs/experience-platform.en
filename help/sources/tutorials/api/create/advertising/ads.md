---
title: Create a Google Ads Base Connection Using the Flow Service API
description: Learn how to connect Adobe Experience Platform to Google Ads using the Flow Service API.
exl-id: 4658e392-1bd9-4e74-aa05-96109f9b62a0
---
# Create a Google Ads base connection using the [!DNL Flow Service] API

>[!WARNING]
>
>The [!DNL Google Ads] source is temporarily unavailable. Adobe is working to resolve issues with this source.

>[!NOTE]
>
>The Google Ads source is in beta. See the [Sources overview](../../../../home.md#terms-and-conditions) for more information on using beta-labeled sources.

A base connection represents the authenticated connection between a source and Adobe Experience Platform.

This tutorial walks you through the steps to create a base connection for Google Ads using the [[!DNL Flow Service] API](https://www.adobe.io/experience-platform-apis/references/flow-service/).

## Getting Started

This guide requires a working understanding of the following components of Adobe Experience Platform:

* [Sources](../../../../home.md): Experience Platform allows data to be ingested from various sources while providing you with the ability to structure, label, and enhance incoming data using Experience Platform services.
* [Sandboxes](../../../../../sandboxes/home.md): Experience Platform provides virtual sandboxes which partition a single Experience Platform instance into separate virtual environments to help develop and evolve digital experience applications.

The following sections provide additional information that you will need to know in order to successfully connect to Google Ads using the [!DNL Flow Service] API.

### Gather required credentials

In order for [!DNL Flow Service] to connect with Google Ads, you must provide values for the following connection properties:

| Credential | Description |
| ---------- | ----------- |
| `clientCustomerId` | The client customer ID is the account number that  corresponds with the Google Ads client account that you want to manage with the Google Ads API. This ID follows the template of `123-456-7890`. |
| `loginCustomerId` | The login customer ID is the account number that corresponds with your Google Ads manager account and is used to fetch report data from a specific operating customer. For more information on the login customer ID, read the [Google Ads API documentation](https://developers.google.com/search-ads/reporting/concepts/login-customer-id). |
| `developerToken` | The developer token allows you to access the Google Ads API. You can use the same developer token to make requests against all of your Google Ads accounts. Retrieve your developer token by [logging in to your manager account](https://ads.google.com/home/tools/manager-accounts/) and then navigating to the [!DNL API Center] page. |
| `refreshToken` | The refresh token is a part of [!DNL OAuth2] authentication. This token allows you to regenerate your access tokens after they expire. |
| `clientId` |  The client ID is used in tandem with the client secret as part of [!DNL OAuth2] authentication. Together, the client ID and client secret enables your application to operate on behalf of your account by identifying your application to Google. |
| `clientSecret` | The client secret is used in tandem with the client ID as part of [!DNL OAuth2] authentication. Together, the client ID and client secret enables your application to operate on behalf of your account by identifying your application to Google. |
| `connectionSpec.id` | The connection specification returns a source's connector properties, including authentication specifications related to creating the base and source connections. The connection specification ID for Google Ads is: `d771e9c1-4f26-40dc-8617-ce58c4b53702`. |

Read the API overview document for [more information about getting started with Google Ads](https://developers.google.com/google-ads/api/docs/first-call/overview).

### Using Platform APIs

For information on how to successfully make calls to Platform APIs, see the guide on [getting started with Platform APIs](../../../../../landing/api-guide.md).

## Create a base connection

A base connection retains information between your source and Platform, including your source's authentication credentials, the current state of the connection, and your unique base connection ID. The base connection ID allows you to explore and navigate files from within your source and identify the specific items that you want to ingest, including information regarding their data types and formats.

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
              "authenticationType": "{AUTHENTICATION_TYPE}"
              "clientId": "{CLIENT_ID}",
              "clientSecret": "{CLIENT_SECRET}",
              "refreshToken": "{REFRESH_TOKEN}"
          }
      },
      "connectionSpec": {
          "id": "d771e9c1-4f26-40dc-8617-ce58c4b53702",
          "version": "1.0"
      }
  }'
```

| Property | Description |
| --------- | ----------- |
| `auth.params.clientCustomerID` | The client customer ID of your Google Ads account. |
| `auth.params.loginCustomerID` | The login customer ID that corresponds with your Google Ads manager account. |
| `auth.params.developerToken` | The developer token of your Google Ads account. |
| `auth.params.refreshToken` | The refresh token of your Google Ads account. |
| `auth.params.clientID` | The client ID of your Google Ads account. |
| `auth.params.clientSecret` | The client secret of your Google Ads account. |
| `connectionSpec.id` | The Google Ads connection specification ID: `d771e9c1-4f26-40dc-8617-ce58c4b53702`. |

**Response**

A successful response returns details of the newly created base connection, including its unique identifier (`id`). This ID is required in the next step to create a source connection.

```json
{
    "id": "2484f2df-c057-4ab5-84f2-dfc0577ab592",
    "etag": "\"10033e77-0000-0200-0000-5e96785b0000\""
}
```

## Next steps

By following this tutorial, you have created a Google Ads base connection using the [!DNL Flow Service] API. You can use this base connection ID in the following tutorials:

* [Explore the structure and contents of your data tables using the [!DNL Flow Service] API](../../explore/tabular.md)
* [Create a dataflow to bring advertising data to Platform using the [!DNL Flow Service] API](../../collect/advertising.md)
