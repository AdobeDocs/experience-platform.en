---
keywords: Experience Platform;home;popular topics;IBM [!DNL IBM DB2];IBM;ibm [!DNL IBM DB2];[!DNL IBM DB2];[!DNL IBM DB2]
solution: Experience Platform
title: Create an IBM [!DNL IBM DB2] Base Connection Using the Flow Service API
type: Tutorial
description: Learn how to connect IBM [!DNL IBM DB2] to Adobe Experience Platform using the Flow Service API.
exl-id: 83c1dbe6-975f-4e3b-a7bf-166eb5106dd2
---
# Create an IBM [!DNL IBM DB2] base connection using the [!DNL Flow Service] API

>[!NOTE]
>
>The IBM [!DNL IBM DB2] connector is in beta. See the [Sources overview](../../../../home.md#terms-and-conditions) for more information on using beta-labeled connectors.

A base connection represents the authenticated connection between a source and Adobe Experience Platform.

This tutorial walks you through the steps to create a base connection for [!DNL IBM DB2] using the [[!DNL Flow Service] API](https://www.adobe.io/experience-platform-apis/references/flow-service/).

## Getting started

This guide requires a working understanding of the following components of Adobe Experience Platform:

* [Sources](../../../../home.md): [!DNL Experience Platform] allows data to be ingested from various sources while providing you with the ability to structure, label, and enhance incoming data using Platform services.
* [Sandboxes](../../../../../sandboxes/home.md): [!DNL Experience Platform] provides virtual sandboxes which partition a single Platform instance into separate virtual environments to help develop and evolve digital experience applications.

The following sections provide additional information that you will need to know in order to successfully connect to [!DNL IBM DB2] using the [!DNL Flow Service] API.

| Credential | Description |
| ---------- | ----------- |
| `server` | The name of the [!DNL IBM DB2] server. You can specify the port number following the server name delimited by a colon. For example: server:port. |
| `database` | The name of the [!DNL IBM DB2] database. |
| `username` | The username used to connect to the [!DNL IBM DB2] database. |
| `password` | The password for the user account you specified for the username. |
| `connectionSpec.id` | The unique identifier needed to create a connection. The connection specification ID for [!DNL IBM DB2] is `09182899-b429-40c9-a15a-bf3ddbc8ced7`. |

For more information about getting started refer to [this [!DNL IBM DB2] document](https://www.ibm.com/support/knowledgecenter/SSFMBX/com.ibm.swg.im.dashdb.doc/connecting/connect_credentials.html).

### Using Platform APIs

For information on how to successfully make calls to Platform APIs, see the guide on [getting started with Platform APIs](../../../../../landing/api-guide.md).

## Create a base connection

A base connection retains information between your source and Platform, including your source's authentication credentials, the current state of the connection, and your unique base connection ID. The base connection ID allows you to explore and navigate files from within your source and identify the specific items that you want to ingest, including information regarding their data types and formats.

To create a base connection ID, make a POST request to the `/connections` endpoint while providing your [!DNL IBM DB2] authentication credentials as part of the request parameters.

**API format**

```https
POST /connections
```

**Request**

The following request creates a base connection for [!DNL IBM DB2]:

```shell
curl -X POST \
    'https://platform.adobe.io/data/foundation/flowservice/connections' \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {ORG_ID}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}' \
    -H 'Content-Type: application/json' \
    -d '{
        "name": "[!DNL IBM DB2] connection",
        "description": "[!DNL IBM DB2] test connection",
        "auth": {
            "specName": "Basic Authentication",
            "params": {
                    "server": "{SERVER}",
                    "database": "{DATABASE}",
                    "authenticationType": "{AUTHENTICATION_TYPE}",
                    "username": "{USERNAME}",
                    "password": "{PASSWORD}"
                }
        },
        "connectionSpec": {
            "id": "09182899-b429-40c9-a15a-bf3ddbc8ced7",
            "version": "1.0"
        }
    }'
```

| Parameter | Description |
| --------- | ----------- |
| `auth.params.connectionString` | The connection string associated with your [!DNL IBM DB2] account. |
| `connectionSpec.id` | The [!DNL IBM DB2] connection specification ID: `09182899-b429-40c9-a15a-bf3ddbc8ced7`. |

**Response**

A successful response returns details of the newly created connection, including its unique identifier (`id`). This ID is required to explore your data in the next tutorial.

```json
{
    "id": "575abae5-c99a-452c-9aba-e5c99ac52c4d",
    "etag": "\"e5012c89-0000-0200-0000-5eaa036b0000\""
}
```

## Next steps

By following this tutorial, you have created an [!DNL IBM DB2] base connection using the [!DNL Flow Service] API. You can use this base connection ID in the following tutorials:

* [Explore the structure and contents of your data tables using the [!DNL Flow Service] API](../../explore/tabular.md)
* [Create a dataflow to bring database data to Platform using the [!DNL Flow Service] API](../../collect/database-nosql.md)

