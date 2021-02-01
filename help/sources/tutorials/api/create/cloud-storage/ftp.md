---
keywords: Experience Platform;home;popular topics; File Transfer Protocol; file transfer protocol
solution: Experience Platform
title: Create an FTP Source Connection Using the Flow Service API
topic: overview
type: Tutorial
description: Learn how to connect Adobe Experience Platform to an FTP (File Transfer Protocol) server using the Flow Service API.
---

# Create an FTP source connection using the [!DNL Flow Service] API

>[!NOTE]
>
>The FTP connector is in beta. The features and documentation are subject to change. See the [Sources overview](../../../../home.md#terms-and-conditions) for more information on using beta-labelled connectors.

This tutorial uses the [!DNL Flow Service] API to walk you through the steps to connect [!DNL Experience Platform] to an FTP (File Transfer Protocol) server.

## Getting started

This guide requires a working understanding of the following components of Adobe Experience Platform:

* [Sources](../../../../home.md): [!DNL Experience Platform] allows data to be ingested from various sources while providing you with the ability to structure, label, and enhance incoming data using [!DNL Platform] services.
* [Sandboxes](../../../../../sandboxes/home.md): [!DNL Experience Platform] provides virtual sandboxes which partition a single [!DNL Platform] instance into separate virtual environments to help develop and evolve digital experience applications.

The following sections provide additional information that you will need to know in order to successfully connect to an FTP server using the [!DNL Flow Service] API.

### Gather required credentials

In order for [!DNL Flow Service] to connect to FTP, you must provide values for the following connection properties:

| Credential | Description |
| ---------- | ----------- |
| `host` | The name or IP address associated with your FTP server. |
| `username` | The username with access to your FTP server. |
| `password` | The password for your FTP server. |

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

A connection specifies a source and contains your credentials for that source. Only one connection is required per FTP account as it can be used to create multiple source connectors to bring in different data.

### Create an FTP connection using basic authentication

To create an FTP connection using basic authentication, make a POST request to the [!DNL Flow Service] API while providing values for your connection's `host`, `userName`, and `password`.

**API format**

```http
POST /connections
```

**Request**

In order to create an FTP connection, its unique connection specification ID must be provided as part of the POST request. The connection specification ID for FTP is `fb2e94c9-c031-467d-8103-6bd6e0a432f2`.

```shell
curl -X POST \
    'https://platform.adobe.io/data/foundation/flowservice/connections' \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {IMS_ORG}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}' \
    -H 'Content-Type: application/json' \
    -d  '{
        "name": "FTP connector with password",
        "description": "FTP connector password",
        "auth": {
            "specName": "Basic Authentication for FTP",
            "params": {
                "host": "{HOST}",
                "userName": "{USERNAME}",
                "password": "{PASSWORD}"
            }
        },
        "connectionSpec": {
            "id": "fb2e94c9-c031-467d-8103-6bd6e0a432f2",
            "version": "1.0"
        }
    }'
```

| Property | Description |
| -------- | ----------- |
| `auth.params.host` | The host name of your FTP server. |
| `auth.params.username` | The username associated with your FTP server. |
| `auth.params.password` | The password associated with your FTP server. |
| `connectionSpec.id` | The FTP server connection specification ID: `fb2e94c9-c031-467d-8103-6bd6e0a432f2` |

**Response**

A successful response returns the unique identifier (`id`) of the newly created connection. This ID is required to explore your FTP server in the next tutorial.

```json
{
    "id": "bf367b0d-3d9b-4060-b67b-0d3d9bd06094",
    "etag": "\"1700cc7b-0000-0200-0000-5e3b3fba0000\""
}
```

## Next steps

By following this tutorial, you have created an FTP connection using the [!DNL Flow Service] API, and have obtained the connection's unique ID value. You can use this connection ID to [explore cloud storages using the Flow Service API](../../explore/cloud-storage.md) or [ingest parquet data using the Flow Service API](../../cloud-storage-parquet.md).
