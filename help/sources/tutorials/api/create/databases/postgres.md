---
keywords: Experience Platform;home;popular topics;PostgreSQL;postgresql;PSQL;psql
solution: Experience Platform
title: Create a PostgreSQL connector using the Flow Service API
topic: overview
type: Tutorial
description: This tutorial uses the Flow Service API to walk you through the steps to connect Experience Platform to PostgreSQL (hereinafter referred to as "PSQL").
---

# Create a [!DNL PostgreSQL] connector using the [!DNL Flow Service] API

>[!NOTE]
>
>The [!DNL PostgreSQL] connector is in beta. See the [Sources overview](../../../../home.md#terms-and-conditions) for more information on using beta-labelled connectors.

[!DNL Flow Service] is used to collect and centralize customer data from various disparate sources within Adobe Experience Platform. The service provides a user interface and RESTful API from which all supported sources are connectable.

This tutorial uses the [!DNL Flow Service] API to walk you through the steps to connect [!DNL Experience Platform] to [!DNL PostgreSQL] (hereinafter referred to as "PSQL").

## Getting started

This guide requires a working understanding of the following components of Adobe Experience Platform:

* [Sources](../../../../home.md): [!DNL Experience Platform] allows data to be ingested from various sources while providing you with the ability to structure, label, and enhance incoming data using [!DNL Platform] services.
* [Sandboxes](../../../../../sandboxes/home.md): [!DNL Experience Platform] provides virtual sandboxes which partition a single [!DNL Platform] instance into separate virtual environments to help develop and evolve digital experience applications.

The following sections provide additional information that you will need to know in order to successfully connect to PSQL using the [!DNL Flow Service] API.

### Gather required credentials

In order for [!DNL Flow Service] to connect with PSQL, you must provide the following connection property:

| Credential | Description |
| ---------- | ----------- |
| `connectionString` | The connection string associated with your PSQL account. The PSQL connection string pattern is: `Server={SERVER};Database={DATABASE};Port={PORT};UID={USERNAME};Password={PASSWORD}`. |
| `connectionSpec.id` | The ID used to generate a connection. The fixed connection spec ID for PSQL is `74a1c565-4e59-48d7-9d67-7c03b8a13137`. |

For more information about obtaining a connection string, refer to [this PSQL document](https://www.postgresql.org/docs/9.2/app-psql.html).

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

A connection specifies a source and contains your credentials for that source. Only one connection is required per PSQL account as it can be used to create multiple source connectors to bring in different data.

**API format**

```http
POST /connections
```

**Request**

In order to create a PSQL connection, its unique connection spec ID must be provided as part of the POST request. The connection spec ID for PSQL is `74a1c565-4e59-48d7-9d67-7c03b8a13137`.

```shell
curl -X POST \
    'https://platform.adobe.io/data/foundation/flowservice/connections' \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {IMS_ORG}' \
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
| `auth.params.connectionString`| The connection string associated with your PSQL account. The PSQL connection string pattern is: `Server={SERVER};Database={DATABASE};Port={PORT};UID={USERNAME};Password={PASSWORD}`. |
| `connectionSpec.id`| The connection spec ID for PSQL is: `74a1c565-4e59-48d7-9d67-7c03b8a13137`. |

**Response**

A successful response returns the unique identifier (`id`) of the newly created base connection. This ID is required to explore your PSQL database in the next tutorial.

```json
{
    "id": "056dd1b4-da33-42f9-add1-b4da3392f94e",
    "etag": "\"1700e582-0000-0200-0000-5e3c85180000\""
}
```

## Next steps

By following this tutorial, you have created a PSQL connection using the [!DNL Flow Service] API, and have obtained the connection's unique ID value. You can use this connection ID in the next tutorial as you learn how to [explore databases or NoSQL systems using the Flow Service API](../../explore/database-nosql.md).
