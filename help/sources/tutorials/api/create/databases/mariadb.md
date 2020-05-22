---
keywords: Experience Platform;home;popular topics
solution: Experience Platform
title: Create a MariaDB connector using the Flow Service API
topic: overview
---

# Create a MariaDB connector using the Flow Service API

>[!NOTE]
>The MariaDB connector is in beta. The features and documentation are subject to change.

Flow Service is used to collect and centralize customer data from various disparate sources within Adobe Experience Platform. The service provides a user interface and RESTful API from which all supported sources are connectable.

This tutorial uses the Flow Service API to walk you through the steps to connect Experience Platform to MariaDB.

## Getting started

This guide requires a working understanding of the following components of Adobe Experience Platform:

*   [Sources](../../../../home.md): Experience Platform allows data to be ingested from various sources while providing you with the ability to structure, label, and enhance incoming data using Platform services.
*   [Sandboxes](../../../../../sandboxes/home.md): Experience Platform provides virtual sandboxes which partition a single Platform instance into separate virtual environments to help develop and evolve digital experience applications.

The following sections provide additional information that you will need to know in order to successfully connect to MariaDB using the Flow Service API.

### Gather required credentials

In order for Flow Service to connect with MariaDB, you must provide the following connection property:

| Credential | Description |
| ---------- | ----------- |
| `connectionString` | The connection string associated with your MariaDB authentication. The MariaDB connection string pattern is: `Server={HOST};Port={PORT};Database={DATABASE};UID={USERNAME};PWD={PASSWORD}`. |
| `connectionSpec.id` | The ID used to generate a connection. The fixed connection spec ID for MariaDB is `3000eb99-cd47-43f3-827c-43caf170f015`. |

For more information about obtaining a connection string, refer to [this MariaDB document](https://mariadb.com/kb/en/about-mariadb-connector-odbc/).

### Reading sample API calls

This tutorial provides example API calls to demonstrate how to format your requests. These include paths, required headers, and properly formatted request payloads. Sample JSON returned in API responses is also provided. For information on the conventions used in documentation for sample API calls, see the section on [how to read example API calls](../../../../../landing/troubleshooting.md#how-do-i-format-an-api-request) in the Experience Platform troubleshooting guide.

### Gather values for required headers

In order to make calls to Platform APIs, you must first complete the [authentication tutorial](../../../../../tutorials/authentication.md). Completing the authentication tutorial provides the values for each of the required headers in all Experience Platform API calls, as shown below:

*   Authorization: Bearer `{ACCESS_TOKEN}`
*   x-api-key: `{API_KEY}`
*   x-gw-ims-org-id: `{IMS_ORG}`

All resources in Experience Platform, including those belonging to the Flow Service, are isolated to specific virtual sandboxes. All requests to Platform APIs require a header that specifies the name of the sandbox the operation will take place in:

*   x-sandbox-name: `{SANDBOX_NAME}`

All requests that contain a payload (POST, PUT, PATCH) require an additional media type header:

*   Content-Type: `application/json`

## Create a connection

A connection specifies a source and contains your credentials for that source. Only one connection is required per MariaDB account as it can be used to create multiple source connectors to bring in different data.

**API format**

```http
POST /connections
```

**Request**

In order to create a MariaDB connection, its unique connection spec ID must be provided as part of the POST request. The connection spec ID for MariaDB is `3000eb99-cd47-43f3-827c-43caf170f015`.

```shell
curl -X POST \
    'https://platform.adobe.io/data/foundation/flowservice/connections' \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {IMS_ORG}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}' \
    -H 'Content-Type: application/json' \
    -d '{
        "name": "Test connection for maria-db",
        "description": "Test connection for maria-db",
        "auth": {
            "specName": "Connection String Based Authentication",
            "params": {
                "connectionString": "Server={HOST};Port={PORT};Database={DATABASE};UID={USERNAME};PWD={PASSWORD}"
            }
        },
        "connectionSpec": {
            "id": "3000eb99-cd47-43f3-827c-43caf170f015",
            "version": "1.0"
        }
    }'
```

| Property | Description |
| -------- | ----------- |
| `auth.params.connectionString` | The connection string associated with your MariaDB authentication. The MariaDB connection string pattern is: `Server={HOST};Port={PORT};Database={DATABASE};UID={USERNAME};PWD={PASSWORD}`. |
| `connectionSpec.id` | The MariaDB connection spec ID is: `3000eb99-cd47-43f3-827c-43caf170f015`. |

**Response**

A successful response returns details of the newly created base connection, including its unique identifier (`id`). This ID is required to explore your database in the next step.

```json
{
    "id": "be3a2d71-1fb6-4fea-ba2d-711fb61fea50",
    "etag": "\"02002624-0000-0200-0000-5e41f7040000\""
}
```

## Next steps

By following this tutorial, you have created a MariaDB connection using the Flow Service API, and have obtained the connection's unique ID value. You can use this connection ID in the next tutorial as you learn how to [explore databases or NoSQL systems using the Flow Service API](../../explore/database-nosql.md).
