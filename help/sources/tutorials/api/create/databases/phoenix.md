---
title: Create a Phoenix Base Connection Using the Flow Service API
description: Learn how to connect a Phoenix database to Adobe Experience Platform using the Flow Service API.
exl-id: b69d9593-06fe-4fff-88a9-7860e4e45eb7
---
# Create a [!DNL Phoenix] base connection using the [!DNL Flow Service] API

A base connection represents the authenticated connection between a source and Adobe Experience Platform.

This tutorial provides steps on how to create a base connection and  connect your [!DNL Phoenix] account to Adobe Experience Platform using the [!DNL Flow Service] API.

## Getting started

This guide requires a working understanding of the following components of Experience Platform:

* [Sources](../../../../home.md): Experience Platform allows data to be ingested from various sources while providing you with the ability to structure, label, and enhance incoming data using Experience Platform services.
* [Sandboxes](../../../../../sandboxes/home.md): Experience Platform provides virtual sandboxes which partition a single Experience Platform instance into separate virtual environments to help develop and evolve digital experience applications.

The following sections provide additional information that you will need to know in order to successfully connect to [!DNL Phoenix] using the [!DNL Flow Service] API.

### Gather required credentials

You must provide the following authentication credentials in order to connect your [!DNL Phoenix] account to Experience Platform.

| Credential | Description |
| ---------- | ----------- |
| `host` | The IP address or host name of the [!DNL Phoenix] server. |
| `username` | The user name that you use to access [!DNL Phoenix] Server. |
| `password` | The password corresponding to the user. |
| `port` | The TCP port that the [!DNL Phoenix] server uses to listen for client connections. If you are connecting to [!DNL Azure HDInsights], then specify the port as 443. If this parameter is unprovided, the value defaults to 8765. |
| `httpPath` | The partial URL corresponding to the [!DNL Phoenix] server. Specify /hbasephoenix0 if using [!DNL Azure] HDInsights cluster. |
| `enableSsl` | A boolean value. Specifies whether the connections to the server are encrypted using SSL. |
| `connectionSpec.id` | The connection specification returns a source's connector properties, including authentication specifications related to creating the base and source connections. The connection specification ID for [!DNL Phoenix] is: `102706fb-a5cd-42ee-afe0-bc42f017ff43` |

For more information about getting started refer to [this Phoenix document](https://python-phoenixdb.readthedocs.io/en/latest/api.html).

### Using Platform APIs

For information on how to successfully make calls to Platform APIs, see the guide on [getting started with Platform APIs](../../../../../landing/api-guide.md).

## Create a base connection

A base connection retains information between your source and Platform, including your source's authentication credentials, the current state of the connection, and your unique base connection ID. The base connection ID allows you to explore and navigate files from within your source and identify the specific items that you want to ingest, including information regarding their data types and formats.

To create a base connection, make a POST request to the `/connections` endpoint while providing your [!DNL Phoenix] authentication credentials in the request body.

**API format**

```https
POST /connections
```

**Request**

The following request creates a base connection for [!DNL Phoenix]:

```shell
curl -X POST \
  'https://platform.adobe.io/data/foundation/flowservice/connections' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json' \
  -d '{
      "name": "Phoenix test connection",
      "description": "Phoenix test connection",
      "auth": {
          "specName": "Basic Authentication",
      "params": {
          "host":  "{HOST}",
          "username": "{USERNAME}",
          "password":"{PASSWORD}",
          "port": {PORT},
          "httpPath": "{PATH}",
          "enableSsl": {SSL}
          }
      },
      "connectionSpec": {
          "id": "102706fb-a5cd-42ee-afe0-bc42f017ff43",
          "version": "1.0"
      }
  }'
```

| Property | Description |
| --------- | ----------- |
| `auth.params.host` | The host of the [!DNL Phoenix] server. |
| `auth.params.username` | The username associated with your [!DNL Phoenix] connection. |
| `auth.params.password` | The password associated with your [!DNL Phoenix] connection. |
| `auth.params.port` | The TCP port for your [!DNL Phoenix] connection. |
| `auth.params.httpPath` | The partial http path for your [!DNL Phoenix] connection. |
| `auth.params.enableSsl` | The boolean value that specifies whether the connections to the server are encrypted using SSL. |
| `connectionSpec.id` | The [!DNL Phoenix] connection specification ID: `102706fb-a5cd-42ee-afe0-bc42f017ff43`. |

**Response**

A successful response returns details of the newly created connection, including its unique identifier (`id`). This ID is required to explore your data in the next tutorial.

```json
{
    "id": "0d982fff-c443-403e-982f-ffc443f03e37",
    "etag": "\"830082dc-0000-0200-0000-5e84ee560000\""
}
```

## Next steps

By following this tutorial, you have created a [!DNL Phoenix] base connection using the [!DNL Flow Service] API. You can use this base connection ID in the following tutorials:

* [Explore the structure and contents of your data tables using the [!DNL Flow Service] API](../../explore/tabular.md)
* [Create a dataflow to bring database data to Platform using the [!DNL Flow Service] API](../../collect/database-nosql.md)
