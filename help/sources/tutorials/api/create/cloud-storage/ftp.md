---
keywords: Experience Platform;home;popular topics; File Transfer Protocol; file transfer protocol
solution: Experience Platform
title: Create an FTP Base Connection Using the Flow Service API
type: Tutorial
description: Learn how to connect Adobe Experience Platform to an FTP (File Transfer Protocol) server using the Flow Service API.
exl-id: a7bef346-b357-49bc-ac54-ac8b42adac50
---
# Create an FTP base connection using the [!DNL Flow Service] API

>[!NOTE]
>
>The FTP connector is in beta. The features and documentation are subject to change. See the [Sources overview](../../../../home.md#terms-and-conditions) for more information on using beta-labeled connectors.

A base connection represents the authenticated connection between a source and Adobe Experience Platform.

This tutorial walks you through the steps to create a base connection for [!DNL FTP] (File Transfer Protocol) using the [[!DNL Flow Service] API](https://www.adobe.io/experience-platform-apis/references/flow-service/).

## Getting started

This guide requires a working understanding of the following components of Adobe Experience Platform:

* [Sources](../../../../home.md): [!DNL Experience Platform] allows data to be ingested from various sources while providing you with the ability to structure, label, and enhance incoming data using [!DNL Platform] services.
* [Sandboxes](../../../../../sandboxes/home.md): [!DNL Experience Platform] provides virtual sandboxes which partition a single [!DNL Platform] instance into separate virtual environments to help develop and evolve digital experience applications.

The following sections provide additional information that you will need to know in order to successfully connect to an [!DNL FTP] server using the [!DNL Flow Service] API.

### Gather required credentials

In order for [!DNL Flow Service] to connect to [!DNL FTP], you must provide values for the following connection properties:

| Credential | Description |
| ---------- | ----------- |
| `host` | The name or IP address associated with your [!DNL FTP] server. |
| `username` | The username with access to your [!DNL FTP] server. |
| `password` | The password for your [!DNL FTP] server. |
| `connectionSpec.id` | The connection specification returns a source's connector properties, including authentication specifications related to creating the base and source connections. The connection specification ID for [!DNL FTP] is: `fb2e94c9-c031-467d-8103-6bd6e0a432f2`. |

### Using Platform APIs

For information on how to successfully make calls to Platform APIs, see the guide on [getting started with Platform APIs](../../../../../landing/api-guide.md).

## Create a base connection

A base connection retains information between your source and Platform, including your source's authentication credentials, the current state of the connection, and your unique base connection ID. The base connection ID allows you to explore and navigate files from within your source and identify the specific items that you want to ingest, including information regarding their data types and formats.

To create a base connection ID, make a POST request to the `/connections` endpoint while providing your [!DNL FTP] authentication credentials as part of the request parameters.

**API format**

```http
POST /connections
```

**Request**

The following request creates a base connection for [!DNL FTP]:

```shell
curl -X POST \
    'https://platform.adobe.io/data/foundation/flowservice/connections' \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {ORG_ID}' \
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

By following this tutorial, you have created an FTP connection using the [!DNL Flow Service] API, and have obtained the connection's unique ID value. You can use this connection ID to [explore cloud storages using the Flow Service API](../../explore/cloud-storage.md).
