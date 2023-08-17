---
keywords: Experience Platform;home;popular topics;PostgreSQL;postgresql;PSQL;psql
solution: Experience Platform
title: Create a PostgreSQL Base Connection Using the Flow Service API
type: Tutorial
description: Learn how to connect Adobe Experience Platform to PostgreSQL using the Flow Service API.
exl-id: 5225368a-08c1-421d-aec2-d50ad09ae454
---
# Create a [!DNL PostgreSQL] base connection using the [!DNL Flow Service] API

A base connection represents the authenticated connection between a source and Adobe Experience Platform.

This tutorial walks you through the steps to create a base connection for [!DNL PostgreSQL] using the [[!DNL Flow Service] API](https://www.adobe.io/experience-platform-apis/references/flow-service/).


## Getting started

This guide requires a working understanding of the following components of Adobe Experience Platform:

* [Sources](../../../../home.md): [!DNL Experience Platform] allows data to be ingested from various sources while providing you with the ability to structure, label, and enhance incoming data using [!DNL Platform] services.
* [Sandboxes](../../../../../sandboxes/home.md): [!DNL Experience Platform] provides virtual sandboxes which partition a single [!DNL Platform] instance into separate virtual environments to help develop and evolve digital experience applications.

The following sections provide additional information that you will need to know in order to successfully connect to [!DNL PostgreSQL] using the [!DNL Flow Service] API.

### Gather required credentials

In order for [!DNL Flow Service] to connect with [!DNL PostgreSQL], you must provide the following connection property:

| Credential | Description |
| ---------- | ----------- |
| `connectionString` | The connection string associated with your [!DNL PostgreSQL] account. The [!DNL PostgreSQL] connection string pattern is: `Server={SERVER};Database={DATABASE};Port={PORT};UID={USERNAME};Password={PASSWORD}`. |
| `connectionSpec.id` | The connection specification returns a source's connector properties, including authentication specifications related to creating the base and source connections. The connection specification ID for [!DNL PostgreSQL] is `74a1c565-4e59-48d7-9d67-7c03b8a13137`. |

For more information about obtaining a connection string, refer to this [[!DNL PostgreSQL] document](https://www.postgresql.org/docs/9.2/app-psql.html).

#### Enable SSL encryption for your connection string

You can enable SSL encryption for your [!DNL PostgreSQL] connection string by appending your connection string with the following properties:

| Property | Description | Example |
| --- | --- | --- |
| `EncryptionMethod` | Allows you to enable SSL encryption on your [!DNL PostgreSQL] data. | <uL><li>`EncryptionMethod=0`(Disabled)</li><li>`EncryptionMethod=1`(Enabled)</li><li>`EncryptionMethod=6`(RequestSSL)</li></ul> |
| `ValidateServerCertificate` | Validates certificate sent by your [!DNL PostgreSQL] database when `EncryptionMethod` is applied. | <uL><li>`ValidationServerCertificate=0`(Disabled)</li><li>`ValidationServerCertificate=1`(Enabled)</li></ul> |

The following is an example of a [!DNL PostgreSQL] connection string appended with SSL encryption: `Server={SERVER};Database={DATABASE};Port={PORT};UID={USERNAME};Password={PASSWORD};EncryptionMethod=1;ValidateServerCertificate=1`. 

### Using Platform APIs

For information on how to successfully make calls to Platform APIs, see the guide on [getting started with Platform APIs](../../../../../landing/api-guide.md).

## Create a base connection

A base connection retains information between your source and Platform, including your source's authentication credentials, the current state of the connection, and your unique base connection ID. The base connection ID allows you to explore and navigate files from within your source and identify the specific items that you want to ingest, including information regarding their data types and formats.

To create a base connection ID, make a POST request to the `/connections` endpoint while providing your [!DNL PostgreSQL] authentication credentials as part of the request parameters.

**API format**

```https
POST /connections
```

**Request**

The following request creates a base connection for [!DNL PostgreSQL]:

```shell
curl -X POST \
    'https://platform.adobe.io/data/foundation/flowservice/connections' \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {ORG_ID}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}' \
    -H 'Content-Type: application/json' \
    -d '{
        "name": "Test connection for PostgreSQL",
        "description": "Test connection for PostgreSQL",
        "auth": {
            "specName": "Connection String Based Authentication",
            "params": {
                "connectionString": "Server={SERVER};Database={DATABASE};Port={PORT};UID={USERNAME};Password={PASSWORD}"
            }
        },
        "connectionSpec": {
            "id": "74a1c565-4e59-48d7-9d67-7c03b8a13137",
            "version": "1.0"
        }
    }'
```

| Property | Description |
| ------------- | --------------- |
| `auth.params.connectionString`| The connection string associated with your [!DNL PostgreSQL] account. The [!DNL PostgreSQL] connection string pattern is: `Server={SERVER};Database={DATABASE};Port={PORT};UID={USERNAME};Password={PASSWORD}`. |
| `connectionSpec.id`| The [!DNL PostgreSQL] connection specification IDs: `74a1c565-4e59-48d7-9d67-7c03b8a13137`. |

**Response**

A successful response returns the unique identifier (`id`) of the newly created base connection. This ID is required to explore your [!DNL PostgreSQL] database in the next tutorial.

```json
{
    "id": "056dd1b4-da33-42f9-add1-b4da3392f94e",
    "etag": "\"1700e582-0000-0200-0000-5e3c85180000\""
}
```

## Next steps

By following this tutorial, you have created a [!DNL PostgreSQL] connection base connection using the [!DNL Flow Service] API. You can use this base connection ID in the following tutorials:

* [Explore the structure and contents of your data tables using the [!DNL Flow Service] API](../../explore/tabular.md)
* [Create a dataflow to bring database data to Platform using the [!DNL Flow Service] API](../../collect/database-nosql.md)
