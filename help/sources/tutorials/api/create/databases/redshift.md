---
keywords: Experience Platform;home;popular topics
solution: Experience Platform
title: Create an Amazon Redshift connector using the Flow Service API
topic: overview
---

# Create an [!DNL Amazon Redshift] connector using the [!DNL Flow Service] API

>[!NOTE]
>
>The [!DNL Amazon Redshift] connector is in beta. See the [Sources overview](../../../../home.md#terms-and-conditions) for more information on using beta-labelled connectors.

[!DNL Flow Service] is used to collect and centralize customer data from various disparate sources within Adobe Experience Platform. The service provides a user interface and RESTful API from which all supported sources are connectable.

This tutorial uses the [!DNL Flow Service] API to walk you through the steps to connect [!DNL Experience Platform] to [!DNL Amazon Redshift] (hereinafter referred to as "[!DNL Redshift]").

## Getting started

This guide requires a working understanding of the following components of Adobe Experience Platform:

*   [Sources](../../../../home.md): [!DNL Experience Platform] allows data to be ingested from various sources while providing you with the ability to structure, label, and enhance incoming data using [!DNL Platform] services.
*   [Sandboxes](../../../../../sandboxes/home.md): [!DNL Experience Platform] provides virtual sandboxes which partition a single [!DNL Platform] instance into separate virtual environments to help develop and evolve digital experience applications.

The following sections provide additional information that you will need to know in order to successfully connect to [!DNL Redshift] using the [!DNL Flow Service] API.

### Gather required credentials

In order for [!DNL Flow Service] to connect with [!DNL Redshift], you must provide the following connection properties:

| **Credential** | **Description** |
| -------------- | --------------- |
| `server` | The server associated with your [!DNL Redshift] account. |
| `username` | The username associated with your [!DNL Redshift] account. |
| `password` | The password associated with your [!DNL Redshift] account. |
| `database` | The [!DNL Redshift] database you are accessing. |

For more information about getting started, refer to [this Redshift document](https://docs.aws.amazon.com/redshift/latest/gsg/getting-started.html).

### Reading sample API calls

This tutorial provides example API calls to demonstrate how to format your requests. These include paths, required headers, and properly formatted request payloads. Sample JSON returned in API responses is also provided. For information on the conventions used in documentation for sample API calls, see the section on [how to read example API calls](../../../../../landing/troubleshooting.md#how-do-i-format-an-api-request) in the [!DNL Experience Platform] troubleshooting guide.

### Gather values for required headers

In order to make calls to [!DNL Platform] APIs, you must first complete the [authentication tutorial](../../../../../tutorials/authentication.md). Completing the authentication tutorial provides the values for each of the required headers in all [!DNL Experience Platform] API calls, as shown below:

*   Authorization: Bearer `{ACCESS_TOKEN}`
*   x-api-key: `{API_KEY}`
*   x-gw-ims-org-id: `{IMS_ORG}`

All resources in [!DNL Experience Platform], including those belonging to the [!DNL Flow Service], are isolated to specific virtual sandboxes. All requests to [!DNL Platform] APIs require a header that specifies the name of the sandbox the operation will take place in:

*   x-sandbox-name: `{SANDBOX_NAME}`

All requests that contain a payload (POST, PUT, PATCH) require an additional media type header:

*   Content-Type: `application/json`

## Look up connection specifications

In order to create a [!DNL Redshift] connection, a set of [!DNL Redshift] connection specifications must exist within [!DNL Flow Service]. The first step in connecting [!DNL Platform] to [!DNL Redshift] is to retrieve these specifications.

**API format**

Each available source has its own unique set of connection specifications for describing connector properties such as authentication requirements. You can look up connection specifications for [!DNL Redshift] by performing a GET request and using query parameters.

Sending a GET request without query parameters will return connection specifications for all available sources. You can include the query `property=name=="amazon-redshift"` to obtain information specifically for [!DNL Redshift].

```http
GET /connectionSpecs
GET /connectionSpecs?property=name=="amazon-redshift"
```

**Request**

The following request retrieves the connection specifications for [!DNL Redshift].

```shell
curl -X GET \
    'https://platform.adobe.io/data/foundation/flowservice/connectionSpecs?property=name=="amazon-redshift"' \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {IMS_ORG}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns the connection specifications for [!DNL Redshift], including its unique identifier (`id`). This ID is required in the next step to create a base connection.

```json
{
    "items": [
        {
            "id": "3416976c-a9ca-4bba-901a-1f08f66978ff",
            "name": "amazon-redshift",
            "providerId": "0ed90a81-07f4-4586-8190-b40eccef1c5a",
            "version": "1.0",
            "authSpec": [
                {
                    "name": "Basic Authentication",
                    "type": "Basic_Authentication",
                    "spec": {
                        "$schema": "http://json-schema.org/draft-07/schema#",
                        "type": "object",
                        "description": "defines auth params",
                        "properties": {
                            "server": {
                                "type": "string",
                                "description": "IP address or host name of the Amazon Redshift server"
                            },
                            "username": {
                                "type": "string",
                                "description": "Name of user who has access to the database"
                            },
                            "password": {
                                "type": "string",
                                "description": "Password for the user account",
                                "format": "password"
                            },
                            "database": {
                                "type": "string",
                                "description": "Name of the Amazon Redshift database"
                            }
                        },
                        "required": [
                            "server",
                            "username",
                            "password",
                            "database"
                        ]
                    }
                }
            ]
        }
    ]
}
```

## Create a base connection

A base connection specifies a source and contains your credentials for that source. Only one base connection is required per [!DNL Redshift] account as it can be used to create multiple source connectors to bring in different data.

**API format**

```http
POST /connections
```

**Request**

```shell
curl -X POST \
    'https://platform.adobe.io/data/foundation/flowservice/connections' \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {IMS_ORG}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}' \
    -H 'Content-Type: application/json' \
    -d '{
        "name": "amazon-redshift base connection",
        "description": "base connection for amazon-redshift,
        "auth": {
            "specName": "Basic Authentication",
            "params": {
                "server": "{SERVER}",
                "database": "{DATABASE}",
                "password": "{PASSWORD}",
                "username": "{USERNAME}"
            }
        },
        "connectionSpec": {
            "id": "3416976c-a9ca-4bba-901a-1f08f66978ff",
            "version": "1.0"
        }
    }'
```

| Property | Description |
| ------------- | --------------- |
| `auth.params.server` |  Your [!DNL Redshift] server. |
| `auth.params.database` | The database associated with your [!DNL Redshift] account. |
| `auth.params.password` | The password associated with your [!DNL Redshift] account. |
| `auth.params.username` | The username associated with your [!DNL Redshift] account. |
| `connectionSpec.id` | The connection specification `id` of your [!DNL Redshift] account retrieved in the previous step. |

**Response**

A successful response returns details of the newly created base connection, including its unique identifier (`id`). This ID is required to explore your data in the next tutorial.

```json
{
    "id": "373e88fc-43da-4e3c-be88-fc43da3e3c0f",
    "etag": "\"1700ce7b-0000-0200-0000-5e3b405e0000\""
}
```

## Next steps

By following this tutorial, you have created a [!DNL Redshift] base connection using the [!DNL Flow Service] API, and have obtained the connection's unique ID value. You can use this base connection ID in the next tutorial as you learn how to [explore databases or NoSQL systems using the Flow Service API](../../explore/database-nosql.md).
