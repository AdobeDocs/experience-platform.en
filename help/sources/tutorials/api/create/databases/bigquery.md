---
keywords: Experience Platform;home;popular topics;bigquery;Google;google;Google BigQuery
solution: Experience Platform
title: Create a Google BigQuery Base Connection Using the Flow Service API
topic-legacy: overview
type: Tutorial
description: Learn how to connect Adobe Experience Platform to Google BigQuery using the Flow Service API.
exl-id: 51f90366-7a0e-49f1-bd57-b540fa1d15af
---
# Create a [!DNL Google BigQuery] base connection using the [!DNL Flow Service] API

>[!NOTE]
>
>The [!DNL Google BigQuery] connector is in beta. See the [Sources overview](../../../../home.md#terms-and-conditions) for more information on using beta-labelled connectors.

A base connection represents the authenticated connection between a source and Adobe Experience Platform.

This tutorial walks you through the steps to create a base connection for [!DNL Google BigQuery] (hereinafter referred to as "[!DNL BigQuery]") using the [[!DNL Flow Service] API](https://www.adobe.io/experience-platform-apis/references/flow-service/).

## Getting started

This guide requires a working understanding of the following components of Adobe Experience Platform:

* [Sources](../../../../home.md): [!DNL Experience Platform] allows data to be ingested from various sources while providing you with the ability to structure, label, and enhance incoming data using [!DNL Platform] services.
* [Sandboxes](../../../../../sandboxes/home.md): [!DNL Experience Platform] provides virtual sandboxes which partition a single [!DNL Platform] instance into separate virtual environments to help develop and evolve digital experience applications.

The following sections provide additional information that you will need to know in order to successfully connect to [!DNL BigQuery] using the [!DNL Flow Service] API.

### Gather required credentials

In order for [!DNL Flow Service] to connect [!DNL BigQuery] to Platform, you must provide the following OAuth 2.0 authentication values:

| Credential | Description |
| ---------- | ----------- |
| `project` | The project ID of the default [!DNL BigQuery] project to query against. |
| `clientID` | The ID value used to generate the refresh token. |
| `clientSecret` | The secret value used to generate the refresh token. |
| `refreshToken` | The refresh token obtained from [!DNL Google] used to authorize access to [!DNL BigQuery]. |
| `connectionSpec.id` | The connection specification returns a source’s connector properties, including authentication specifications related to creating the base and source connections. The connection specification ID for [!DNL BigQuery] is: `3c9b37f8-13a6-43d8-bad3-b863b941fedd`. |

For more information about these values, refer to this [[!DNL BigQuery] document](https://cloud.google.com/storage/docs/json_api/v1/how-tos/authorizing).

### Using Platform APIs

For information on how to successfully make calls to Platform APIs, see the guide on [getting started with Platform APIs](../../../../../landing/api-guide.md).

## Create a base connection

A base connection retains information between your source and Platform, including your source's authentication credentials, the current state of the connection, and your unique base connection ID. The base connection ID allows you to explore and navigate files from within your source and identify the specific items that you want to ingest, including information regarding their data types and formats.

To create a base connection ID, make a POST request to the `/connections` endpoint while providing your [!DNL BigQuery] authentication credentials as part of the request parameters.

**API format**

```https
POST /connections
```

**Request**

The following request creates a base connection for [!DNL BigQuery]:

```shell
curl -X POST \
    'https://platform.adobe.io/data/foundation/flowservice/connections' \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {IMS_ORG}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}' \
    -H 'Content-Type: application/json' \
    -d '{
        "name": "Google BigQuery connection",
        "description": "Google BigQuery connection",
        "auth": {
            "specName": "Basic Authentication",
            "type": "OAuth2.0",
            "params": {
                    "project": "{PROJECT}",
                    "clientId": "{CLIENT_ID},
                    "clientSecret": "{CLIENT_SECRET}",
                    "refreshToken": "{REFRESH_TOKEN}"
                }
        },
        "connectionSpec": {
            "id": "3c9b37f8-13a6-43d8-bad3-b863b941fedd",
            "version": "1.0"
        }
    }'
```

| Property | Description |
| --------- | ----------- |
| `auth.params.project` | The project ID of the default [!DNL BigQuery] project to query. against. |
| `auth.params.clientId` | The ID value used to generate the refresh token. |
| `auth.params.clientSecret` | The client value used to generate the refresh token. |
| `auth.params.refreshToken` | The refresh token obtained from [!DNL Google] used to authorize access to [!DNL BigQuery]. |
| `connectionSpec.id` | The [!DNL Google BigQuery] connection specification ID: `3c9b37f8-13a6-43d8-bad3-b863b941fedd`. |

**Response**

A successful response returns details of the newly created connection, including its unique identifier (`id`). This ID is required to explore your data in the next tutorial.

```json
{
    "id": "6990abad-977d-41b9-a85d-17ea8cf1c0e4",
    "etag": "\"ca00acbf-0000-0200-0000-60149e1e0000\""
}
```

## Next steps

By following this tutorial, you have created a [!DNL BigQuery] connection using the [!DNL Flow Service] API, and have obtained the connection's unique ID value. You can use this connection ID in the next tutorial as you learn how to [explore databases or NoSQL systems using the Flow Service API](../../explore/database-nosql.md).
