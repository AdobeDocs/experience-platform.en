---
keywords: Experience Platform;home;popular topics
solution: Experience Platform
title: Create an SFTP connector using the Flow Service API
topic: overview
---

# Create an SFTP connector using the Flow Service API

Flow Service is used to collect and centralize customer data from various disparate sources within Adobe Experience Platform. The service provides a user interface and RESTful API from which all supported sources are connectable.

This tutorial uses the Flow Service API to walk you through the steps to connect Experience Platform to an SFTP (Secure File Transfer Protocol) server.

If you would prefer to use the user interface in Experience Platform, the [UI tutorial](../../../ui/create/cloud-storage/ftp-sftp.md) provides step-by-step instructions for performing similar actions.

## Getting started

This guide requires a working understanding of the following components of Adobe Experience Platform:

*   [Sources](../../../../home.md): Experience Platform allows data to be ingested from various sources while providing you with the ability to structure, label, and enhance incoming data using Platform services.
*   [Sandboxes](../../../../../sandboxes/home.md): Experience Platform provides virtual sandboxes which partition a single Platform instance into separate virtual environments to help develop and evolve digital experience applications.

The following sections provide additional information that you will need to know in order to successfully connect to an SFTP server using the Flow Service API.

### Gather required credentials

In order for Flow Service to connect to SFTP, you must provide values for the following connection properties:

| Credential | Description |
| ---------- | ----------- |
| `host` | The name or IP address associated with your SFTP server. |
| `username` | The username with access to your SFTP server. |
| `password` | The password for your SFTP server. |

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

## Look up connection specifications

In order to create an SFTP connection, a set of SFTP connection specifications must exist within Flow Service. The first step in connecting Platform to SFTP is to retrieve these specifications.

**API format**

Each available source has its own unique set of connection specifications for describing connector properties such as authentication requirements. You can look up connection specifications for SFTP by performing a GET request and using query parameters.

Sending a GET request without query parameters will return connection specifications for all available sources. You can include the query `property=name=="sftp"` to obtain information specifically for SFTP.

```http
GET /connectionSpecs
GET /connectionSpecs?property=name=="sftp"
```

**Request**

The following request retrieves the connection specifications for an SFTP server.

```shell
curl -X GET \
    'https://platform.adobe.io/data/foundation/flowservice/connectionSpecs?property=name=="sftp"' \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {IMS_ORG}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns the connection specification for the SFTP server, including its unique identifier (`id`). This ID is required in the next step to create a base connection.

```json
{
    "items": [
        {
            "id": "b7bf2577-4520-42c9-bae9-cad01560f7bc",
            "name": "sftp",
            "providerId": "0ed90a81-07f4-4586-8190-b40eccef1c5a",
            "version": "1.0",
            "authSpec": [
                {
                    "name": "Basic Authentication for sftp",
                    "spec": {
                        "$schema": "http://json-schema.org/draft-07/schema#",
                        "type": "object",
                        "description": "defines auth params required for connecting to sftp",
                        "properties": {
                            "host": {
                                "type": "string",
                                "description": "Specify the name or IP address of the SFTP server."
                            },
                            "userName": {
                                "type": "string",
                                "description": "Specify the user who has access to the SFTP server."
                            },
                            "password": {
                                "type": "string",
                                "description": "Specify the password for the user (userName).",
                                "format": "password"
                            }
                        },
                        "required": [
                            "host",
                            "userName",
                            "password"
                        ]
                    }
                }
            ]
        }
    ]
}
```

## Create a base connection

A base connection specifies a source and contains your credentials for that source. Only one base connection is required per SFTP account as it can be used to create multiple source connectors to bring in different data.

**API format**

```http
POST /connections
```

**Request**

```shell
curl -X POST \
    'http://platform.adobe.io/data/foundation/flowservice/connections' \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {IMS_ORG}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}' \
    -H 'Content-Type: application/json' \
    -d  "auth": {
        "specName": "Basic Authentication for sftp",
        "params": {
            "host": "{HOST_NAME}",
            "userName": "{USER_NAME}",
            "password": "{PASSWORD}"
        }
    },
    "connectionSpec": {
        "id": "b7bf2577-4520-42c9-bae9-cad01560f7bc",
        "version": "1.0"
    }
}
```

| Property | Description |
| -------- | ----------- |
| `auth.params.host` | The host name of your SFTP server. |
| `auth.params.username` | The username associated with your SFTP server. |
| `auth.params.password` | The password associated with your SFTP server. |
| `connectionSpec.id` | The connection specification `id` of your SFTP server retrieved in the previous step. |

**Response**

A successful response returns the unique identifier (`id`) of the newly created base connection. This ID is required to explore your SFTP server in the next tutorial.

```json
{
    "id": "bf367b0d-3d9b-4060-b67b-0d3d9bd06094",
    "etag": "\"1700cc7b-0000-0200-0000-5e3b3fba0000\""
}
```

## Next steps

By following this tutorial, you have created an SFTP connection using the Flow Service API, and have obtained the connection's unique ID value. You can use this connection ID to [explore cloud storages using the Flow Service API](../../explore/cloud-storage.md) or [ingest parquet data using the Flow Service API](../../cloud-storage-parquet.md).
