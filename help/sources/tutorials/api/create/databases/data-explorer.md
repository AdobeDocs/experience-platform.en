---
keywords: Experience Platform;home;popular topics;Azure Data Explorer;data explorer;Data Explorer
solution: Experience Platform
title: Create an Azure Data Explorer Source Connection Using the Flow Service API
topic-legacy: overview
type: Tutorial
description: Learn how to connect Azure Data Explorer to Adobe Experience Platform using the Flow Service API.
exl-id: 1b17bbb0-1f7b-4d89-a158-ad269e6edf30
---
# Create an [!DNL Azure Data Explorer] source connection using the [!DNL Flow Service] API

>[!NOTE]
>
>The [!DNL Azure Data Explorer] connector is in beta. See the [Sources overview](../../../../home.md#terms-and-conditions) for more information on using beta-labelled connectors.

[!DNL Flow Service] is used to collect and centralize customer data from various disparate sources within Adobe Experience Platform. The service provides a user interface and RESTful API from which all supported sources are connectable.

This tutorial uses the [!DNL Flow Service] API to walk you through the steps to connect [!DNL Azure Data Explorer] (hereinafter referred to as "Data Explorer") to [!DNL Experience Platform].

## Getting started

This guide requires a working understanding of the following components of Adobe Experience Platform:

* [Sources](../../../../home.md): [!DNL Experience Platform] allows data to be ingested from various sources while providing you with the ability to structure, label, and enhance incoming data using [!DNL Platform] services.
* [Sandboxes](../../../../../sandboxes/home.md): [!DNL Experience Platform] provides virtual sandboxes which partition a single [!DNL Platform] instance into separate virtual environments to help develop and evolve digital experience applications.

The following sections provide additional information that you will need to know in order to successfully connect to [!DNL Data Explorer] using the [!DNL Flow Service] API.

### Gather required credentials

In order for [!DNL Flow Service] to connect with [!DNL Data Explorer], you must provide values for the following connection properties:

| Credential | Description |
| ---------- | ----------- |
| `endpoint` | The endpoint of the [!DNL Data Explorer] server. |
| `database` | The name of the [!DNL Data Explorer] database. |
| `tenant` | The unique tenant ID used to connect to the [!DNL Data Explorer] database. |
| `servicePrincipalId` | The unique service principal ID used to connect to the [!DNL Data Explorer] database. |
| `servicePrincipalKey` | The unique service principal key used to connect to the [!DNL Data Explorer] database. |
| `connectionSpec.id` | The unique identifier needed to create a connection. The connection specification ID for [!DNL Data Explorer] is `0479cc14-7651-4354-b233-7480606c2ac3`. |

For more information about getting started refer to [this Data Explorer document](https://docs.microsoft.com/en-us/azure/data-explorer/kusto/management/access-control/how-to-authenticate-with-aad).

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

A connection specifies a source and contains your credentials for that source. Only one connector is required per [!DNL Data Explorer] account as it can be used to create multiple source connectors to bring in different data.

**API format**

```http
POST /connections
```

**Request**

In order to create a [!DNL Data Explorer] connection, its unique connection specification ID must be provided as part of the POST request. The connection specification ID for [!DNL Data Explorer] is `0479cc14-7651-4354-b233-7480606c2ac3`.

```shell
curl -X POST \
    'https://platform.adobe.io/data/foundation/flowservice/connections' \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {IMS_ORG}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}' \
    -H 'Content-Type: application/json' \
    -d '{
        "name": "Azure Data Explorer connection",
        "description": "A connection for Azure Data Explorer",
        "auth": {
            "specName": "Service Principal Based Authentication",
            "params": {
                    "endpoint": "{ENDPOINT}",
                    "database": "{DATABASE}",
                    "tenant": "{TENANT}",
                    "servicePrincipalId": "{SERVICE_PRINCIPAL_ID}",
                    "servicePrincipalKey": "{SERVICE_PRINCIPAL_KEY}"
                }
        },
        "connectionSpec": {
            "id": "0479cc14-7651-4354-b233-7480606c2ac3",
            "version": "1.0"
        }
    }'
```

| Parameter | Description |
| --------- | ----------- |
| `auth.params.endpoint` | The endpoint of the [!DNL Data Explorer] server. |
| `auth.params.database` | The name of the [!DNL Data Explorer] database. |
| `auth.params.tenant` | The unique tenant ID used to connect to the [!DNL Data Explorer] database. |
| `auth.params.servicePrincipalId` | The unique service principal ID used to connect to the [!DNL Data Explorer] database. |
| `auth.params.servicePrincipalKey` | The unique service principal key used to connect to the [!DNL Data Explorer] database. |
| `connectionSpec.id` | The [!DNL Data Explorer] connection spec ID: `0479cc14-7651-4354-b233-7480606c2ac3`. |

**Response**

A successful response returns details of the newly created connection, including its unique identifier (`id`). This ID is required to explore your data in the next tutorial.

```json
{
    "id": "f088e4f2-2464-480c-88e4-f22464b80c90",
    "etag": "\"43011faa-0000-0200-0000-5ea740cd0000\""
}
```

## Next steps

By following this tutorial, you have created a [!DNL Data Explorer] connection using the [!DNL Flow Service] API and have obtained the connection's unique ID value. You can use this ID in the next tutorial as you learn how to [explore databases using the Flow Service API](../../explore/database-nosql.md).
