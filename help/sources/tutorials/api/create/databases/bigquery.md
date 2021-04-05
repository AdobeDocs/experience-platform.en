---
keywords: Experience Platform;home;popular topics;bigquery;Google;google;Google BigQuery
solution: Experience Platform
title: Create a Google BigQuery Source Connection Using the Flow Service API
topic: overview
type: Tutorial
description: Learn how to connect Adobe Experience Platform to Google BigQuery using the Flow Service API.
exl-id: 51f90366-7a0e-49f1-bd57-b540fa1d15af
---
# Create a [!DNL Google BigQuery] source connection using the [!DNL Flow Service] API

>[!NOTE]
>
>The [!DNL Google BigQuery] connector is in beta. See the [Sources overview](../../../../home.md#terms-and-conditions) for more information on using beta-labelled connectors.

[!DNL Flow Service] is used to collect and centralize customer data from various disparate sources within Adobe Experience Platform. The service provides a user interface and RESTful API from which all supported sources are connectable.

This tutorial uses the [!DNL Flow Service] API to walk you through the steps to connect [!DNL Experience Platform] to [!DNL Google BigQuery] (hereinafter referred to as "BigQuery").

## Getting started

This guide requires a working understanding of the following components of Adobe Experience Platform:

* [Sources](../../../../home.md): [!DNL Experience Platform] allows data to be ingested from various sources while providing you with the ability to structure, label, and enhance incoming data using [!DNL Platform] services.
* [Sandboxes](../../../../../sandboxes/home.md): [!DNL Experience Platform] provides virtual sandboxes which partition a single [!DNL Platform] instance into separate virtual environments to help develop and evolve digital experience applications.

The following sections provide additional information that you will need to know in order to successfully connect to BigQuery using the [!DNL Flow Service] API.

### Gather required credentials

In order for [!DNL Flow Service] to connect BigQuery to Platform, you must provide the following OAuth 2.0 authentication values:

| Credential | Description |
| ---------- | ----------- |
| `project` | The project ID of the default [!DNL BigQuery] project to query against. |
| `clientID` | The ID value used to generate the refresh token. |
| `clientSecret` | The secret value used to generate the refresh token. |
| `refreshToken` | The refresh token obtained from [!DNL Google] used to authorize access to [!DNL BigQuery]. |

For more information about these values, refer to [this BigQuery document](https://cloud.google.com/storage/docs/json_api/v1/how-tos/authorizing).

### Reading sample API calls

This tutorial provides example API calls to demonstrate how to format your requests. These include paths, required headers, and properly formatted request payloads. Sample JSON returned in API responses is also provided. For information on the conventions used in documentation for sample API calls, see the section on [how to read example API calls](../../../../../landing/troubleshooting.md#how-do-i-format-an-api-request) in the [!DNL Experience Platform] troubleshooting guide.

### Gather values for required headers

In order to make calls to [!DNL Platform] APIs, you must first complete the [authentication tutorial](https://www.adobe.com/go/platform-api-authentication-en). Completing the authentication tutorial provides the values for each of the required headers in all [!DNL Experience Platform] API calls, as shown below:

* `Authorization: Bearer {ACCESS_TOKEN}`
* `x-api-key: {API_KEY}`
* `x-gw-ims-org-id: {IMS_ORG}`

All resources in [!DNL Experience Platform], including those belonging to the [!DNL Flow Service], are isolated to specific virtual sandboxes. All requests to [!DNL Platform] APIs require a header that specifies the name of the sandbox the operation will take place in:

* `x-sandbox-name: {SANDBOX_NAME}`

All requests that contain a payload (POST, PUT, PATCH) require an additional media type header:

* `Content-Type: application/json`

## Create a connection

A connection specifies a source and contains your credentials for that source. Only one connection is required per [!DNL BigQuery] account as it can be used to create multiple dataflows to bring in different data.

**API format**

```http
POST /connections
```

**Request**

In order to create a [!DNL BigQuery] connection, its unique connection specification ID must be provided as part of the POST request. The connection specification ID for [!DNL BigQuery]  is `3c9b37f8-13a6-43d8-bad3-b863b941fedd`.

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
| `connectionSpec.id` | The connection specification `id` of your [!DNL BigQuery] account retrieved in the previous step. |

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
