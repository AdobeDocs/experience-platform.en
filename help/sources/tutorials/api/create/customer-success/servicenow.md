---
keywords: Experience Platform;home;popular topics;servicenow;ServiceNow
solution: Experience Platform
title: Create a ServiceNow Base Connection Using the Flow Service API
topic-legacy: overview
type: Tutorial
description: Learn how to connect Adobe Experience Platform to a ServiceNow server using the Flow Service API.
exl-id: 39d0e628-5c07-4371-a5af-ac06385db891
---
# Create a [!DNL ServiceNow] base connection using the [!DNL Flow Service] API

A base connection represents the authenticated connection between a source and Adobe Experience Platform.

This tutorial walks you through the steps to create a base connection for [!DNL Google ServiceNow] using the [[!DNL Flow Service] API](https://www.adobe.io/experience-platform-apis/references/flow-service/).

## Getting started

This guide requires a working understanding of the following components of Adobe Experience Platform:

* [Sources](../../../../home.md): [!DNL Experience Platform] allows data to be ingested from various sources while providing you with the ability to structure, label, and enhance incoming data using [!DNL Platform] services.
* [Sandboxes](../../../../../sandboxes/home.md): [!DNL Experience Platform] provides virtual sandboxes which partition a single [!DNL Platform] instance into separate virtual environments to help develop and evolve digital experience applications.

The following sections provide additional information that you will need to know in order to successfully connect to a [!DNL ServiceNow] server using the [!DNL Flow Service] API.

### Gather required credentials

In order for [!DNL Flow Service] to connect to [!DNL ServiceNow], you must provide values for the following connection properties:

| Credential | Description |
| ---------- | ----------- |
| `endpoint` | The endpoint of the [!DNL ServiceNow] server. |
| `username` | The username used to connect to the [!DNL ServiceNow] server for authentication. |
| `password` | The password to connect to the [!DNL ServiceNow] server for authentication. |
| `connectionSpec.id` | The connection specification returns a source’s connector properties, including authentication specifications related to creating the base and source connections. The connection specification ID for [!DNL ServiceNow] is: `eb13cb25-47ab-407f-ba89-c0125281c563`. |

For more information about getting started, refer to [this ServiceNow document](https://developer.servicenow.com/app.do#!/rest_api_doc?v=newyork&id=r_TableAPI-GET).

### Using Platform APIs

For information on how to successfully make calls to Platform APIs, see the guide on [getting started with Platform APIs](../../../../../landing/api-guide.md).

## Create a base connection

A base connection retains information between your source and Platform, including your source's authentication credentials, the current state of the connection, and your unique base connection ID. The base connection ID allows you to explore and navigate files from within your source and identify the specific items that you want to ingest, including information regarding their data types and formats.

To create a base connection ID, make a POST request to the `/connections` endpoint while providing your [!DNL ServiceNow] authentication credentials as part of the request parameters.

**API format**

```http
POST /connections
```

**Request**

The following request creates a base connection for [!DNL ServiceNow]:

```shell
curl -X POST \
    'http://platform.adobe.io/data/foundation/flowservice/connections' \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {ORG_ID}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}' \
    -H 'Content-Type: application/json' \
    -d '{
        "name": "Connection for service-now",
        "description": "Connection for service-now,
        "auth": {
            "specName": "Basic Authentication",
            "params": {
                "endpoint": "{ENDPOINT}",
                "username": "{USERNAME}",
                "password": "{PASSWORD}"
            }
        },
        "connectionSpec": {
            "id": "eb13cb25-47ab-407f-ba89-c0125281c563",
            "version": "1.0"
        }
    }'
```

| Parameter | Description |
| --------- | ----------- |
| `auth.params.server`|  The endpoint of your [!DNL ServiceNow] server. |
| `auth.params.username`| The username used to connect to the [!DNL ServiceNow] server for authentication. |
| `auth.params.password`| The password to connect to the [!DNL ServiceNow] server for authentication. |
| `connectionSpec.id`| The [!DNL ServiceNow] connection specification ID: `eb13cb25-47ab-407f-ba89-c0125281c563` |

**Response**

A successful response returns the newly created connection, including its unique identifier (`id`). This ID is required to explore your CRM system in the next step.

```json
{
    "id": "8a3ca3dd-6d00-4c95-bca3-dd6d00dc954b",
    "etag": "\"8e0052a2-0000-0200-0000-5e25fb330000\""
}
```

## Next steps

By following this tutorial, you have created a [!DNL ServiceNow] base connection using the [!DNL Flow Service] API. You can use this base connection ID in the following tutorials:

* [Explore the structure and contents of your data tables using the [!DNL Flow Service] API](../../explore/tabular.md)
* [Create a dataflow to bring customer success data to Platform using the [!DNL Flow Service] API](../../collect/customer-success.md)
