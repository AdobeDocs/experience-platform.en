---
title: Connect Oracle DB To Experience Platform Using The Flow Service API
description: Learn how to connect Oracle DB to Experience Platform using APIs.
exl-id: b1cea714-93ff-425f-8e12-6061da97d094
---
# Connect [!DNL Oracle DB] to Experience Platform using the [!DNL Flow Service] API

Read this guide to learn how to connect your [!DNL Oracle DB] account to Adobe Experience Platform using the [[!DNL Flow Service] API](https://developer.adobe.com/experience-platform-apis/references/flow-service/).

## Getting started

This guide requires a working understanding of the following components of Experience Platform:

* [Sources](../../../../home.md): Experience Platform allows data to be ingested from various sources while providing you with the ability to structure, label, and enhance incoming data using Experience Platform services.
* [Sandboxes](../../../../../sandboxes/home.md): Experience Platform provides virtual sandboxes which partition a single Experience Platform instance into separate virtual environments to help develop and evolve digital experience applications.

The following sections provide additional information that you will need to know in order to successfully connect to [!DNL Oracle] using the [!DNL Flow Service] API.

### Using Experience Platform APIs

For information on how to successfully make calls to Experience Platform APIs, see the guide on [getting started with Experience Platform APIs](../../../../../landing/api-guide.md).

### Gather required credentials

Read the [[!DNL Oracle DB] overview](../../../../connectors/databases/oracle.md#prerequisites) for information on authentication.

## Connect [!DNL Oracle DB] to Experience Platform on Azure {#azure}

Read the steps below for information on how to connect your [!DNL Oracle DB] account to Experience Platform on Azure.

### Create a base connection for [!DNL Oracle DB] on Experience Platform on Azure {#azure-base}

A base connection links your source to Experience Platform, storing authentication details, connection status, and a unique ID. Use this ID to browse source files and identify specific items to ingest, including their data types and formats.

**API format**

```https
POST /connections
```

To create a base connection ID, make a POST request to the `/connections` endpoint and provide your [!DNL Oracle DB] authentication credentials as part of the request parameters.

**Request**

The following request creates a base connection for [!DNL Oracle DB] using connection string authentication.

+++View request


```shell
curl -X POST \
  'https://platform.adobe.io/data/foundation/flowservice/connections' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json' \
  -d '{
    "name": "Oracle DB base connection",
    "description": "A base connection to connect Oracle DB to Experience Platform on Azure",
    "auth": {
      "specName": "ConnectionString",
      "params": {
        "connectionString": "Host={HOST};Port={PORT};Sid={SID};UserId={USERNAME};Password={PASSWORD}"
      }
    },
    "connectionSpec": {
      "id": "d6b52d86-f0f8-475f-89d4-ce54c8527328",
      "version": "1.0"
    }
  }'
```

| Parameter | Description |
| --------- | ----------- |
| `auth.params.connectionString` | The connection string used to connect to [!DNL Oracle DB]. The [!DNL Oracle DB] connection string pattern is: `Host={HOST};Port={PORT};Sid={SID};User Id={USERNAME};Password={PASSWORD}`. |
| `connectionSpec.id` | The [!DNL Oracle] connection specification ID: `d6b52d86-f0f8-475f-89d4-ce54c8527328`. |

+++

**Response**

A successful response returns details of the newly created base connection, including its unique identifier (`id`).

+++View response

```json
{
    "id": "f088e4f2-2464-480c-88e4-f22464b80c90",
    "etag": "\"43011faa-0000-0200-0000-5ea740cd0000\""
}
```

+++

## Connect [!DNL Oracle DB] to Experience Platform on Amazon Web Services {#aws}

>[!AVAILABILITY]
>
>This section applies to implementations of Experience Platform running on Amazon Web Services (AWS). Experience Platform running on AWS is currently available to a limited number of customers. To learn more about the supported Experience Platform infrastructure, see the [Experience Platform multi-cloud overview](../../../../../landing/multi-cloud.md).

Read the steps below for information on how to connect your [!DNL Oracle DB] account to Experience Platform on AWS.

### Create a base connection for [!DNL Oracle DB] on Experience Platform on AWS {#aws-base}

**API format**

```https
POST /connections
```

**Request**

The following request creates a base connection for [!DNL Oracle DB] to connect to Experience Platform on AWS.

+++View request

```shell
curl -X POST \
  'https://platform.adobe.io/data/foundation/flowservice/connections' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json' \
  -d '{
      "name": "Oracle DB on Experience Platform AWS",
      "description": "Oracle DB on Experience Platform AWS",
      "auth": {
          "specName": "Basic Authentication",
          "params": {
              "server": "diy.us-dawkins-1.oraclecloud.com",
              "port": "1521",
              "database": "mcmg_profits_diy.oraclecloud.com",
              "username": "Admin",
              "password": "xxxx",
              "schema": "ADMIN",
              "sslMode": "true"
          }
      },
      "connectionSpec": {
          "id": "26d738e0-8963-47ea-aadf-c60de735468a",
          "version": "1.0"
      }
  }'
```

| Property | Description |
| --- | --- |
| `auth.params.server` | The IP address or host name of your [!DNL Oracle DB] server. |
| `auth.params.port` | The port number of your [!DNL Oracle DB] server. |
| `auth.params.database` | The name of the [!DNL Oracle DB] instance that you are connecting to. |
| `auth.params.username` | The user account associated with your [!DNL Oracle DB] instance. |
| `auth.prams.password` | The password that corresponds with your [!DNL Oracle DB] user account. |
| `auth.params.schema` | The schema that contains your database objects. |
| `auth.params.sslMode` | A boolean value that indicates whether SSL measures are enforced or not. |
| `connectionSpec.id` | The connection spec ID that corresponds with the [!DNL Oracle DB] source. This ID value is fixed as: `d6b52d86-f0f8-475f-89d4-ce54c8527328.` |

+++

**Response**

A successful response returns details of the newly created base connection, including its unique identifier (`id`).

+++View response]

```json
{
    "id": "f847950c-1c12-4568-a550-d5312b16fdb8",
    "etag": "\"0c0099f4-0000-0200-0000-67da91710000\""
}
```

+++


## Create a dataflow for [!DNL Oracle DB] data

Now that you have successfully connected your [!DNL Oracle DB] account, you can now [create a dataflow and ingest data from your database into Experience Platform](../../collect/database-nosql.md).