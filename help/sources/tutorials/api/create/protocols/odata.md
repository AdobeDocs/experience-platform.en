---
keywords: Experience Platform;home;popular topics;Generic OData;generic odata
solution: Experience Platform
title: Create a Generic OData Base Connection Using the Flow Service API
topic-legacy: overview
type: Tutorial
description: Learn how to connect Generic OData to Adobe Experience Platform using the Flow Service API.
exl-id: 45b302cb-1a43-4fab-a8a2-cb4e1ee129f9
---
# Create a [!DNL Generic OData] base connection using the [!DNL Flow Service] API

A base connection represents the authenticated connection between a source and Adobe Experience Platform.

This tutorial walks you through the steps to create a base connection for [!DNL Generic OData] using the [[!DNL Flow Service] API](https://www.adobe.io/experience-platform-apis/references/flow-service/).

## Getting started

This guide requires a working understanding of the following components of Adobe Experience Platform:

* [Sources](../../../../home.md): [!DNL Experience Platform] allows data to be ingested from various sources while providing you with the ability to structure, label, and enhance incoming data using [!DNL Platform] services.
* [Sandboxes](../../../../../sandboxes/home.md): [!DNL Experience Platform] provides virtual sandboxes which partition a single [!DNL Platform] instance into separate virtual environments to help develop and evolve digital experience applications.

The following sections provide additional information that you will need to know in order to successfully connect to [!DNL Generic OData] using the [!DNL Flow Service] API.

### Gather required credentials

In order for [!DNL Flow Service] to connect with [!DNL Generic OData], you must provide values for the following connection properties:

| Credential | Description |
| ---------- | ----------- |
| `url` | The root URL of the [!DNL Generic OData] service. |
| `connectionSpec.id` | The connection specification returns a source’s connector properties, including authentication specifications related to creating the base and source connections. The connection specification ID for [!DNL Generic Generic OData] is: `8e6b41a8-d998-4545-ad7d-c6a9fff406c3`. |

For more information about getting started refer to [this [!DNL Generic OData] document](https://www.odata.org/getting-started/basic-tutorial/).

### Using Platform APIs

For information on how to successfully make calls to Platform APIs, see the guide on [getting started with Platform APIs](../../../../../landing/api-guide.md).

## Create a base connection

A base connection retains information between your source and Platform, including your source's authentication credentials, the current state of the connection, and your unique base connection ID. The base connection ID allows you to explore and navigate files from within your source and identify the specific items that you want to ingest, including information regarding their data types and formats.

To create a base connection ID, make a POST request to the `/connections` endpoint while providing your [!DNL Generic OData] authentication credentials as part of the request parameters.

**API format**

```http
POST /connections
```

**Request**

The following request creates a base connection for [!DNL Generic OData]:

```shell
curl -X POST \
    'https://platform.adobe.io/data/foundation/flowservice/connections' \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {ORG_ID}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}' \
    -H 'Content-Type: application/json' \
    -d '{
        "name": "Protocols",
        "description": "A test connection for a Protocols source",
        "auth": {
            "specName": "Anonymous Authentication",
        "params": {
            "url":  "{URL}"
            }
        },
        "connectionSpec": {
            "id": "8e6b41a8-d998-4545-ad7d-c6a9fff406c3",
            "version": "1.0"
        }
    }'
```

| Property | Description |
| --------- | ----------- |
| `auth.params.url` | The host of the [!DNL Generic OData] server. |
| `connectionSpec.id` | The [!DNL Generic OData] connection specification ID: `8e6b41a8-d998-4545-ad7d-c6a9fff406c3`. |

**Response**

A successful response returns the newly created connection, including its unique connection identifier (`id`). This ID is required to explore your data in the next tutorial.

```json
{
    "id": "a5c6b647-e784-4b58-86b6-47e784ab580b",
    "etag": "\"7b01056a-0000-0200-0000-5e8a4f5b0000\""
}
```

## Next steps

By following this tutorial, you have created a [!DNL Generic REST OData] base connection using the [!DNL Flow Service] API. You can use this base connection ID in the following tutorials:

* [Explore the structure and contents of your data tables using the [!DNL Flow Service] API](../../explore/tabular.md)
* [Create a dataflow to bring protocols data to Platform using the [!DNL Flow Service] API](../../collect/protocols.md)
