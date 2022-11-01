---
keywords: Experience Platform;home;popular topics;Square;square
title: Create a Square Base Connection Using the Flow Service API
description: Learn how to connect Square to Adobe Experience Platform using the Flow Service API.
exl-id: 82c1d513-3b06-4ce9-b637-2c5a268da506
---
# Create a [!DNL Square] base connection using the [!DNL Flow Service] API

A base connection represents the authenticated connection between a source and Adobe Experience Platform.

This tutorial walks you through the steps to create a base connection for [!DNL Square] using the [[!DNL Flow Service] API](https://www.adobe.io/experience-platform-apis/references/flow-service/).

## Getting started

This guide requires a working understanding of the following components of Adobe Experience Platform:

* [Sources](../../../../home.md): [!DNL Experience Platform] allows data to be ingested from various sources while providing you with the ability to structure, label, and enhance incoming data using [!DNL Platform] services.
* [Sandboxes](../../../../../sandboxes/home.md): [!DNL Experience Platform] provides virtual sandboxes which partition a single Platform instance into separate virtual environments to help develop and evolve digital experience applications.

The following sections provide additional information that you will need to know in order to successfully connect to [!DNL Square] using the [!DNL Flow Service] API.

### Gather required credentials

In order for [!DNL Flow Service] to connect with [!DNL Square], you must provide values for the following connection properties:

| Credential | Description |
| --- | --- |
| `host` | The URL of the [!DNL Square] instance. |
| `clientId` | The client ID associated with your [!DNL Square] account. |
| `clientSecret` | The client secret associated with your [!DNL Square] account. |
| `accessToken` | The access token is used to authenticate your [!DNL Square] account with OAuth 2.0 authentication. The access token can be obtained from [!DNL Square]. |
| `refreshToken` | The refresh token is used to generate new access tokens once your current access token expires. The refresh token can be obtained from [!DNL Square]. |
| `connectionSpec.id` | The connection specification returns a source’s connector properties, including authentication specifications related to creating the base and source connections. The connection specification ID for [!DNL Square] is: `2acf109f-9b66-4d5e-bc18-ebb2adcff8d5` |

For more information on these credentials and how to obtain them, see the [[!DNL Square] documentation on OAuth](https://developer.squareup.com/docs/oauth-api/receive-and-manage-tokens).

### Using Platform APIs

For information on how to successfully make calls to Platform APIs, see the guide on [getting started with Platform APIs](../../../../../landing/api-guide.md).

## Create a base connection

A base connection retains information between your source and Platform, including your source's authentication credentials, the current state of the connection, and your unique base connection ID. The base connection ID allows you to explore and navigate files from within your source and identify the specific items that you want to ingest, including information regarding their data types and formats.

To create a base connection ID, make a POST request to the `/connections` endpoint while providing your [!DNL Square] authentication credentials as part of the request parameters.

**API format**

```http
POST /connections
```

**Request**

The following request creates a base connection for [!DNL Square]:

```shell
curl -X POST \
    'https://platform.adobe.io/data/foundation/flowservice/connections' \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {ORG_ID}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}' \
    -H 'Content-Type: application/json' \
    -d '{
        "name": "Square Base Connection",
        "description": "Square Base Connection",
        "auth": {
        "specName": "OAuth2 Refresh Code",
        "params": {
            "host": "{HOST}",
            "clientId": "{CLIENT_ID}",
            "clientSecret": "{CLIENT_SECRET}"
            "accessToken": "{ACCESS_TOKEN}"
            "refreshToken": "{REFRESH_TOKEN}"
            }
        },
        "connectionSpec": {
            "id": "2acf109f-9b66-4d5e-bc18-ebb2adcff8d5",
            "version": "1.0"
        }
    }'
```

| Property | Description |
| --------- | ----------- |
| `auth.params.host` | The URL of the [!DNL Square] instance. |
| `auth.params.clientId` | The client ID associated with your [!DNL Square] account. |
| `auth.params.clientSecret` | The client secret associated with your [!DNL Square] account. |
| `auth.params.accessToken` | The access token is used to authenticate your [!DNL Square] account with OAuth 2.0 authentication. The access token can be obtained from [!DNL Square]. |
| `auth.params.refreshToken` |  The refresh token is used to generate new access tokens once your current access token expires. The refresh token can be obtained from [!DNL Square]. |
| `connectionSpec.id` | The [!DNL Square] connection specification ID: `2acf109f-9b66-4d5e-bc18-ebb2adcff8d5`. |

**Response**

A successful response returns the newly created connection, including its unique connection identifier (`id`). This ID is required to explore your data in the next tutorial.

```json
{
    "id": "24151d58-ffa7-4960-951d-58ffa7396097",
    "etag": "\"65015e9d-0000-0200-0000-5e89162d0000\""
}
```

## Next steps

By following this tutorial, you have created a [!DNL Square] connection using the [!DNL Flow Service] API and have obtained the connection's unique ID value. You can use this ID in the next tutorial as you learn how to [explore payments application using the Flow Service API](../../explore/payments.md).
