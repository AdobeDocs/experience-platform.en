---
keywords: Experience Platform;home;popular topics;Apache Cassandra;apache cassandra;Cassandra;cassandra
solution: Experience Platform
title: Create an Apache Cassandra Source Connection Using the Flow Service API
type: Tutorial
description: Learn how to connect Apache Cassandra to Adobe Experience Platform using the Flow Service API.
---

# Create an [!DNL Apache Cassandra] source connection using the [!DNL Flow Service] API

[!DNL Flow Service] is used to collect and centralize customer data from various disparate sources within Adobe Experience Platform. The service provides a user interface and RESTful API from which all supported sources are connectable.

This tutorial uses the [!DNL Flow Service] API to walk you through the steps to connect [!DNL Apache Cassandra] (hereinafter referred to as "Cassandra") to [!DNL Experience Platform].

## Getting started

This guide requires a working understanding of the following components of Adobe Experience Platform:

*   [Sources](../../../../home.md): [!DNL Experience Platform] allows data to be ingested from various sources while providing you with the ability to structure, label, and enhance incoming data using [!DNL Platform] services.
*   [Sandboxes](../../../../../sandboxes/home.md): [!DNL Experience Platform] provides virtual sandboxes which partition a single [!DNL Platform] instance into separate virtual environments to help develop and evolve digital experience applications.

The following sections provide additional information that you will need to know in order to successfully connect to Cassandra using the [!DNL Flow Service] API.

### Gather required credentials

In order for [!DNL Flow Service] to connect with [!DNL Cassandra], you must provide values for the following connection properties:

| Credential | Description |
| ---------- | ----------- |
| `host` | The IP address or host name of the [!DNL Cassandra] server. |
| `port` | The TCP port that the [!DNL Cassandra] server uses to listen for client connections. The default port is `9042`. |
| `username` | The username used to connect to the [!DNL Cassandra] server for authentication. |
| `password` | The password to connect to the [!DNL Cassandra] server for authentication. |
| `connectionSpec.id` | The unique identifier needed to create a connection. The connection specification ID for [!DNL Cassandra] is `a8f4d393-1a6b-43f3-931f-91a16ed857f4`. |

For more information about getting started, refer to [this Cassandra document](https://cassandra.apache.org/doc/latest/operating/security.html#authentication).

### Reading sample API calls

This tutorial provides example API calls to demonstrate how to format your requests. These include paths, required headers, and properly formatted request payloads. Sample JSON returned in API responses is also provided. For information on the conventions used in documentation for sample API calls, see the section on [how to read example API calls](../../../../../landing/troubleshooting.md#how-do-i-format-an-api-request) in the [!DNL Experience Platform] troubleshooting guide.

### Gather values for required headers

In order to make calls to [!DNL Platform] APIs, you must first complete the [authentication tutorial](https://www.adobe.com/go/platform-api-authentication-en). Completing the authentication tutorial provides the values for each of the required headers in all [!DNL Experience Platform] API calls, as shown below:

*   Authorization: Bearer `{ACCESS_TOKEN}`
*   x-api-key: `{API_KEY}`
*   x-gw-ims-org-id: `{ORG_ID}`

All resources in [!DNL Experience Platform], including those belonging to the [!DNL Flow Service], are isolated to specific virtual sandboxes. All requests to [!DNL Platform] APIs require a header that specifies the name of the sandbox the operation will take place in:

*   x-sandbox-name: `{SANDBOX_NAME}`

All requests that contain a payload (POST, PUT, PATCH) require an additional media type header:

*   Content-Type: `application/json`

## Create a connection

A connection specifies a source and contains your credentials for that source. Only one connector is required per [!DNL Cassandra] account as it can be used to create multiple source connectors to bring in different data.

**API format**

```http
POST /connections
```

**Request**

In order to create a [!DNL Cassandra] connection, its unique connection specification ID must be provided as part of the POST request. The connection specification ID for [!DNL Cassandra] is `a8f4d393-1a6b-43f3-931f-91a16ed857f4`.

```shell
curl -X POST \
    'https://platform.adobe.io/data/foundation/flowservice/connections' \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {ORG_ID}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}' \
    -H 'Content-Type: application/json' \
    -d '{
        "name": "Cassandra test connection",
        "description": "A test connection for Cassandra",
        "auth": {
            "specName": "Basic Authentication",
            "params": {
                    "host": "{HOST},
                    "port": "{PORT}",
                    "username": "{USERNAME}",
                    "password": "{PASSWORD}"
                }
        },
        "connectionSpec": {
            "id": "a8f4d393-1a6b-43f3-931f-91a16ed857f4",
            "version": "1.0"
        }
    }'
```

| Parameter | Description |
| --------- | ----------- |
| `auth.params.host` | The IP address or host name of the [!DNL Cassandra] server. |
| `auth.params.port` | The TCP port that the [!DNL Cassandra] server uses to listen for client connections. The default port is `9042`. |
| `auth.params.username` | The username used to connect to the [!DNL Cassandra] server for authentication. |
| `auth.params.password` | The password to connect to the [!DNL Cassandra] server for authentication. |
| `connectionSpec.id` | The [!DNL Cassandra] connection spec ID: `a8f4d393-1a6b-43f3-931f-91a16ed857f4`. |

**Response**

A successful response returns details of the newly created connection, including its unique identifier (`id`). This ID is required to explore your data in the next tutorial.

```json
{
    "id": "ce69aa89-1baa-4054-a9aa-891baa605425",
    "etag": "\"5a026e19-0000-0200-0000-5eac76d00000\""
}
```

## Next steps

By following this tutorial, you have created a [!DNL Cassandra] connection using the [!DNL Flow Service] API and have obtained the connection's unique ID value. You can use this ID in the next tutorial as you learn how to [explore databases using the Flow Service API](../../explore/database-nosql.md).
