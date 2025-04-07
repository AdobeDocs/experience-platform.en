---
title: Connect MariaDB To Experience Platform Using The Flow Service API
description: Learn how to connect your MariaDB account to Experience Platform using APIs.
exl-id: 9b7ff394-ca55-4ab4-99ef-85c80b04a6df
---
# Connect [!DNL MariaDB] to Experience Platform using the [!DNL Flow Service] API

Read this guide to learn how to connect your [!DNL MariaDB] account to Adobe Experience Platform using the [[!DNL Flow Service] API](https://developer.adobe.com/experience-platform-apis/references/flow-service/).

## Getting started

This guide requires a working understanding of the following components of Experience Platform:

* [Sources](../../../../home.md): Experience Platform allows data to be ingested from various sources while providing you with the ability to structure, label, and enhance incoming data using [!DNL Platform] services.
* [Sandboxes](../../../../../sandboxes/home.md): Experience Platform provides virtual sandboxes which partition a single Experience Platform instance into separate virtual environments to help develop and evolve digital experience applications.

The following sections provide additional information that you will need to know in order to successfully connect to [!DNL MariaDB] using the [!DNL Flow Service] API.

### Gather required credentials

For information on authentication, read the [[!DNL MariaDB] overview](../../../../connectors/databases/mariadb.md#credentials)

### Using Experience Platform APIs

For information on how to successfully make calls to Experience Platform APIs, see the guide on [getting started with Experience Platform APIs](../../../../../landing/api-guide.md).

## Connect [!DNL MariaDB] to Experience Platform on Azure {#azure}

Read the steps below for information on how to connect your [!DNL MariaDB] account to Experience Platform on Azure.

### Create a base connection for [!DNL MariaDB] on Experience Platform on Azure {#azure-base}

A base connection retains information between your source and Experience Platform, including your source's authentication credentials, the current state of the connection, and your unique base connection ID. The base connection ID allows you to explore and navigate files from within your source and identify the specific items that you want to ingest, including information regarding their data types and formats.

To create a base connection ID, make a POST request to the `/connections` endpoint while providing your [!DNL MariaDB] authentication credentials as part of the request parameters.

**API format**

```https
POST /connections
```

**Request**

The following request creates a base connection for [!DNL MariaDB] to connect to Experience Platform on Azure.

+++View request example

```shell
curl -X POST \
  'https://platform.adobe.io/data/foundation/flowservice/connections' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
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
| `auth.params.connectionString` | The connection string associated with your [!DNL MariaDB] authentication. The [!DNL MariaDB] connection string pattern is: `Server={HOST};Port={PORT};Database={DATABASE};UID={USERNAME};PWD={PASSWORD}`. |
| `connectionSpec.id` | The [!DNL MariaDB] connection specification ID is: `3000eb99-cd47-43f3-827c-43caf170f015`. |

+++

**Response**

+++View response example

A successful response returns details of the newly created base connection, including its unique identifier (`id`). This ID is required to explore your database in the next step.

```json
{
    "id": "be3a2d71-1fb6-4fea-ba2d-711fb61fea50",
    "etag": "\"02002624-0000-0200-0000-5e41f7040000\""
}
```

+++

## Connect [!DNL MariaDB] to Experience Platform on Amazon Web Services {#aws}

>[!AVAILABILITY]
>
>This section applies to implementations of Experience Platform running on Amazon Web Services (AWS). Experience Platform running on AWS is currently available to a limited number of customers. To learn more about the supported Experience Platform infrastructure, see the [Experience Platform multi-cloud overview](../../../../../landing/multi-cloud.md).

Read the steps below for information on how to connect your [!DNL MariaDB] account to Experience Platform on AWS.

### Create a base connection for [!DNL MariaDB] on Experience Platform on AWS {#aws-base}

**API format**

```https
POST /connections
```

**Request**

The following request creates a base connection for [!DNL MariaDB] to connect to Experience Platform on AWS.

+++View request example

```shell
curl -X POST \
  'https://platform.adobe.io/data/foundation/flowservice/connections' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json' \
  -d '{
      "name": "MariaDB on Experience Platform AWS",
      "description": "MariaDB on Experience Platform AWS",
      "auth": {
          "specName": "Basic Authentication",
          "params": {
              "server": "{SERVER}",
              "database": "{DATABASE}",
              "username": "{USERNAME}",
              "password": "{PASSWORD}",
              "sslMode": "{SSLMODE}"
          }
      },
      "connectionSpec": {
          "id": "3000eb99-cd47-43f3-827c-43caf170f015",
          "version": "1.0"
      }
  }'
```

| Property | Description |
| --- | --- |
| `auth.params.server` | The name or IP of your [!DNL MariaDB] database. |
| `auth.params.database` | The name of your database. |
| `auth.params.username` | The username that corresponds with your database. |
| `auth.params.password` | The password that corresponds with your database. |
| `auth.params.sslMode` | The method by which data is encrypted during data transfer. |
| `connectionSpec.id` | The [!DNL MariaDB] connection specification ID is: `3000eb99-cd47-43f3-827c-43caf170f015`. |

+++

**Response**

+++View response example

A successful response returns details of the newly created base connection, including its unique identifier (`id`). This ID is required to explore your database in the next step.

```json
{
    "id": "f847950c-1c12-4568-a550-d5312b16fdb8",
    "etag": "\"0c0099f4-0000-0200-0000-67da91710000\""
}
```

+++


## Next steps

By following this tutorial, you have created a [!DNL MariaDB] base connection using the [!DNL Flow Service] API. You can use this base connection ID in the following tutorials:

* [Explore the structure and contents of your data tables using the [!DNL Flow Service] API](../../explore/tabular.md)
* [Create a dataflow to bring database data to Experience Platform using the [!DNL Flow Service] API](../../collect/database-nosql.md)
