---
keywords: Experience Platform;home;popular topics;Azure Azure Data Explorer;Azure Data Explorer;Azure Data Explorer
solution: Experience Platform
title: Create an Azure Azure Data Explorer Base Connection Using the Flow Service API
type: Tutorial
description: Learn how to connect Azure Azure Data Explorer to Adobe Experience Platform using the Flow Service API.
exl-id: 1b17bbb0-1f7b-4d89-a158-ad269e6edf30
---
# Create an [!DNL Azure Azure Data Explorer] base connection using the [!DNL Flow Service] API

A base connection represents the authenticated connection between a source and Adobe Experience Platform.

This tutorial walks you through the steps to create a base connection for [!DNL Azure Data Explorer] using the [[!DNL Flow Service] API](https://www.adobe.io/experience-platform-apis/references/flow-service/).


## Getting started

This guide requires a working understanding of the following components of Adobe Experience Platform:

* [Sources](../../../../home.md): [!DNL Experience Platform] allows data to be ingested from various sources while providing you with the ability to structure, label, and enhance incoming data using [!DNL Platform] services.
* [Sandboxes](../../../../../sandboxes/home.md): [!DNL Experience Platform] provides virtual sandboxes which partition a single [!DNL Platform] instance into separate virtual environments to help develop and evolve digital experience applications.

The following sections provide additional information that you will need to know in order to successfully connect to [!DNL Azure Data Explorer] using the [!DNL Flow Service] API.

### Gather required credentials

In order for [!DNL Flow Service] to connect with [!DNL Azure Data Explorer], you must provide values for the following connection properties:

| Credential | Description |
| ---------- | ----------- |
| `endpoint` | The endpoint of the [!DNL Azure Data Explorer] server. |
| `database` | The name of the [!DNL Azure Data Explorer] database. |
| `tenant` | The unique tenant ID used to connect to the [!DNL Azure Data Explorer] database. |
| `servicePrincipalId` | The unique service principal ID used to connect to the [!DNL Azure Data Explorer] database. |
| `servicePrincipalKey` | The unique service principal key used to connect to the [!DNL Azure Data Explorer] database. |
| `connectionSpec.id` | The connection specification returns a source's connector properties, including authentication specifications related to creating the base and source connections. The connection specification ID for [!DNL Azure Data Explorer] is `0479cc14-7651-4354-b233-7480606c2ac3`. |

For more information about getting started refer to this [[!DNL Azure Data Explorer] document](https://docs.microsoft.com/en-us/azure/data-explorer/kusto/management/access-control/how-to-authenticate-with-aad).

### Using Platform APIs

For information on how to successfully make calls to Platform APIs, see the guide on [getting started with Platform APIs](../../../../../landing/api-guide.md).

## Create a base connection

A base connection retains information between your source and Platform, including your source's authentication credentials, the current state of the connection, and your unique base connection ID. The base connection ID allows you to explore and navigate files from within your source and identify the specific items that you want to ingest, including information regarding their data types and formats.

To create a base connection ID, make a POST request to the `/connections` endpoint while providing your [!DNL Azure Data Explorer] authentication credentials as part of the request parameters.

**API format**

```https
POST /connections
```

**Request**

The following request creates a base connection for [!DNL Azure Data Explorer]:

```shell
curl -X POST \
    'https://platform.adobe.io/data/foundation/flowservice/connections' \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {ORG_ID}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}' \
    -H 'Content-Type: application/json' \
    -d '{
        "name": "Azure Azure Data Explorer connection",
        "description": "A connection for Azure Azure Data Explorer",
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
| `auth.params.endpoint` | The endpoint of the [!DNL Azure Data Explorer] server. |
| `auth.params.database` | The name of the [!DNL Azure Data Explorer] database. |
| `auth.params.tenant` | The unique tenant ID used to connect to the [!DNL Azure Data Explorer] database. |
| `auth.params.servicePrincipalId` | The unique service principal ID used to connect to the [!DNL Azure Data Explorer] database. |
| `auth.params.servicePrincipalKey` | The unique service principal key used to connect to the [!DNL Azure Data Explorer] database. |
| `connectionSpec.id` | The [!DNL Azure Data Explorer] connection specification ID: `0479cc14-7651-4354-b233-7480606c2ac3`. |

**Response**

A successful response returns details of the newly created connection, including its unique identifier (`id`). This ID is required to explore your data in the next tutorial.

```json
{
    "id": "f088e4f2-2464-480c-88e4-f22464b80c90",
    "etag": "\"43011faa-0000-0200-0000-5ea740cd0000\""
}
```

## Next steps

By following this tutorial, you have created an [!DNL Azure Data Explorer] base connection using the [!DNL Flow Service] API. You can use this base connection ID in the following tutorials:

* [Explore the structure and contents of your data tables using the [!DNL Flow Service] API](../../explore/tabular.md)
* [Create a dataflow to bring database data to Platform using the [!DNL Flow Service] API](../../collect/database-nosql.md)
