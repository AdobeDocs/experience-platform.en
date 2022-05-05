---
keywords: Experience Platform;home;popular topics;google adwords;Google AdWords;adwords
solution: Experience Platform
title: Create a Google AdWords Base Connection Using the Flow Service API
topic-legacy: overview
type: Tutorial
description: Learn how to connect Adobe Experience Platform to Google AdWords using the Flow Service API.
exl-id: 4658e392-1bd9-4e74-aa05-96109f9b62a0
---
# Create a [!DNL Google AdWords] base connection using the [!DNL Flow Service] API

>[!NOTE]
>
>The [!DNL Google AdWords] connector is in beta. See the [Sources overview](../../../../home.md#terms-and-conditions) for more information on using beta-labelled connectors.

A base connection represents the authenticated connection between a source and Adobe Experience Platform.

This tutorial walks you through the steps to create a base connection for [!DNL Google AdWords] (hereinafter referred to as "[!DNL AdWords]") using the [[!DNL Flow Service] API](https://www.adobe.io/experience-platform-apis/references/flow-service/).

## Getting Started

This guide requires a working understanding of the following components of Adobe Experience Platform:

* [Sources](../../../../home.md): [!DNL Experience Platform] allows data to be ingested from various sources while providing you with the ability to structure, label, and enhance incoming data using [!DNL Platform] services.
* [Sandboxes](../../../../../sandboxes/home.md): [!DNL Experience Platform] provides virtual sandboxes which partition a single [!DNL Platform] instance into separate virtual environments to help develop and evolve digital experience applications.

The following sections provide additional information that you will need to know in order to successfully connect to [!DNL AdWords] using the [!DNL Flow Service] API.

### Gather required credentials

In order for [!DNL Flow Service] to connect with [!DNL AdWords], you must provide values for the following connection properties:

| Credential | Description |
| ---------- | ----------- |
| `clientCustomerId` | The client customer ID of the [!DNL AdWords] account. |
| `developerToken` | The developer token associated with the manager account. |
| `refreshToken` | The refresh token obtained from [!DNL Google] for authorizing access to [!DNL AdWords]. |
| `clientId` | The client ID of the [!DNL Google] application used to acquire the refresh token. |
| `clientSecret` | The client secret of the [!DNL Google] application used to acquire the refresh token. |
| `connectionSpec.id` | The connection specification returns a source’s connector properties, including authentication specifications related to creating the base and source connections. The connection specification ID for [!DNL AdWords] is: `d771e9c1-4f26-40dc-8617-ce58c4b53702`. |

For more information about these values, refer to this [Google AdWords document](https://developers.google.com/adwords/api/docs/guides/authentication).

### Using Platform APIs

For information on how to successfully make calls to Platform APIs, see the guide on [getting started with Platform APIs](../../../../../landing/api-guide.md).

## Create a base connection

A base connection retains information between your source and Platform, including your source's authentication credentials, the current state of the connection, and your unique base connection ID. The base connection ID allows you to explore and navigate files from within your source and identify the specific items that you want to ingest, including information regarding their data types and formats.

To create a base connection ID, make a POST request to the `/connections` endpoint while providing your [!DNL AdWords] authentication credentials as part of the request parameters.

**API format**

```https
POST /connections
```

**Request**

The following request creates a base connection for [!DNL AdWords]:

```shell
curl -X POST \
    'https://platform.adobe.io/data/foundation/flowservice/connections' \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {IMS_ORG}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}' \
    -H 'Content-Type: application/json'
    -d '{
        "name": "google-AdWords connection",
        "description": "Connection for google-AdWords",
        "auth": {
            "specName": "Basic Authentication",
            "params": {
                "clientCustomerID": "{CLIENT_CUSTOMER_ID}",
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
| `auth.params.clientCustomerID` | The client customer ID of your [!DNL AdWords] account. |
| `auth.params.developerToken` | The developer token of your [!DNL AdWords] account. |
| `auth.params.refreshToken` | The refresh token of your [!DNL AdWords] account. |
| `auth.params.clientID` | The client ID of your [!DNL AdWords] account. |
| `auth.params.clientSecret` | The client secret of your [!DNL AdWords] account. |
| `connectionSpec.id` | The [!DNL Google AdWords] connection specification ID: `d771e9c1-4f26-40dc-8617-ce58c4b53702`. |

**Response**

A successful response returns details of the newly created base connection, including its unique identifier (`id`). This ID is required in the next step to create a source connection.

```json
{
    "id": "2484f2df-c057-4ab5-84f2-dfc0577ab592",
    "etag": "\"10033e77-0000-0200-0000-5e96785b0000\""
}
```

## Next steps

By following this tutorial, you have created a [!DNL Google AdWords] base connection using the [!DNL Flow Service] API. You can use this base connection ID in the following tutorials:

* [Explore the structure and contents of your data tables using the [!DNL Flow Service] API](../../explore/tabular.md)
* [Create a dataflow to bring advertising data to Platform using the [!DNL Flow Service] API](../../collect/advertising.md)
