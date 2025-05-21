---
title: Connect PostgreSQL To Experience Platform Using The Flow Service API
description: Learn how to connect your [!DNL PostgreSQL] database to Experience Platform using APIs.
exl-id: 5225368a-08c1-421d-aec2-d50ad09ae454
---
# Connect [!DNL PostgreSQL] to Experience Platform using the [!DNL Flow Service] API

Read this guide to learn how to connect your [!DNL PostgreSQL] database to Adobe Experience Platform using the [[!DNL Flow Service] API](https://developer.adobe.com/experience-platform-apis/references/flow-service/).

## Getting started

This guide requires a working understanding of the following components of Experience Platform:

* [Sources](../../../../home.md): Experience Platform allows data to be ingested from various sources while providing you with the ability to structure, label, and enhance incoming data using Experience Platform services.
* [Sandboxes](../../../../../sandboxes/home.md): Experience Platform provides virtual sandboxes which partition a single Experience Platform instance into separate virtual environments to help develop and evolve digital experience applications.

The following sections provide additional information that you will need to know in order to successfully connect to [!DNL PostgreSQL] using the [!DNL Flow Service] API.

### Using Experience Platform APIs

Read the guide on [getting started with Experience Platform APIs](../../../../../landing/api-guide.md) for information on how to successfully make calls to Experience Platform APIs.

### Gather required credentials

Read the [[!DNL PostgreSQL] overview](../../../../connectors/databases/postgres.md) for more information on authentication.

### Enable SSL encryption for your connection string

You can enable SSL encryption for your [!DNL PostgreSQL] connection string by appending your connection string with the following properties:

| Property | Description | Example |
| --- | --- | --- |
| `EncryptionMethod` | Allows you to enable SSL encryption on your [!DNL PostgreSQL] data. | <uL><li>`EncryptionMethod=0`(Disabled)</li><li>`EncryptionMethod=1`(Enabled)</li><li>`EncryptionMethod=6`(RequestSSL)</li></ul> |
| `ValidateServerCertificate` | Validates certificate sent by your [!DNL PostgreSQL] database when `EncryptionMethod` is applied. | <uL><li>`ValidationServerCertificate=0`(Disabled)</li><li>`ValidationServerCertificate=1`(Enabled)</li></ul> |

The following is an example of a [!DNL PostgreSQL] connection string appended with SSL encryption: `Server={SERVER};Database={DATABASE};Port={PORT};UID={USERNAME};Password={PASSWORD};EncryptionMethod=1;ValidateServerCertificate=1`. 

## Connect [!DNL PostgreSQL] to Experience Platform on Azure {#azure}

Read the steps below to learn how to connect your [!DNL PostgreSQL] account to Experience Platform on Azure.

### Create a base connection {#azure-base}

A base connection retains information between your source and Experience Platform, including your source's authentication credentials, the current state of the connection, and your unique base connection ID. The base connection ID allows you to explore and navigate files from within your source and identify the specific items that you want to ingest, including information regarding their data types and formats.

To create a base connection ID, make a POST request to the `/connections` endpoint while providing your [!DNL PostgreSQL] authentication credentials as part of the request parameters.

**API format**

```https
POST /connections
```

>[!BEGINTABS]

>[!TAB Account key based authentication]

**Request**

The following request creates a base connection for [!DNL PostgreSQL] using account key based authentication:

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
      "name": "PostgreSQL base connection",
      "description": "PostgreSQL base connection via connection string",
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
| `auth.params.connectionString`| The connection string associated with your [!DNL PostgreSQL] account. The [!DNL PostgreSQL] connection string pattern is: `Server={SERVER};Database={DATABASE};Port={PORT};UID={USERNAME};Password={PASSWORD}`. |
| `connectionSpec.id`| The [!DNL PostgreSQL] connection specification IDs: `74a1c565-4e59-48d7-9d67-7c03b8a13137`. |

+++

**Response**

A successful response returns the unique identifier (`id`) of the newly created base connection. 

+++View response example

```json
{
    "id": "056dd1b4-da33-42f9-add1-b4da3392f94e",
    "etag": "\"1700e582-0000-0200-0000-5e3c85180000\""
}
```

+++

>[!TAB Basic authentication]

**Request**

The following request creates a base connection for [!DNL PostgreSQL] using basic authentication:

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
      "name": "PostgreSQL base connection",
      "description": "PostgreSQL base connection via basic authentication",
      "auth": {
          "specName": "Basic Authentication",
          "params": {
              "server": "localhost",
              "port": "3306",
              "database": "postgresql-acme",
              "username": "acme",
              "password": "xxxx",
              "sslMode": "Allow"
          }
      },
      "connectionSpec": {
          "id": "74a1c565-4e59-48d7-9d67-7c03b8a13137",
          "version": "1.0"
      }
  }'
```

| Property | Description |
| ---| --- |
| `auth.params.server` | The name or IP address of your [!DNL PostgreSQL] database. |
| `auth.params.port` | The port number of the database server. |
| `auth.params.database` | The name of your [!DNL PostgreSQL] database. |
| `auth.params.username` | The username associated with your [!DNL PostgreSQL] database authentication. |
| `auth.params.password` | The password associated with your [!DNL PostgreSQL] database authentication. |
| `auth.params.sslMode` | The method by which data is encrypted during data transfer. The available values include: `Disable`, `Allow`, `Prefer`, `Verify Ca`, and `Verify Full`. |
| `connectionSpec.id`| The [!DNL PostgreSQL] connection specification IDs: `74a1c565-4e59-48d7-9d67-7c03b8a13137`. |

+++

**Response**

A successful response returns the unique identifier (`id`) of the newly created base connection. 

+++View response example

```json
{
    "id": "2c15b1c5-73bf-47ab-9098-0467fcd854d9",
    "etag": "\"2600fc39-0000-0200-0000-67dd48f80000\""
}
```

+++

>[!ENDTABS]

## Connect [!DNL PostgreSQL] to Experience Platform on Amazon Web Services {#aws}

>[!AVAILABILITY]
>
>This section applies to implementations of Experience Platform running on Amazon Web Services (AWS). Experience Platform running on AWS is currently available to a limited number of customers. To learn more about the supported Experience Platform infrastructure, see the [Experience Platform multi-cloud overview](../../../../../landing/multi-cloud.md).

Read the steps below for information on how to connect your [!DNL PostgreSQL] database to Experience Platform on AWS.

### Create a base connection {#aws-base}

To create a base connection ID, make a POST request to the `/connections` endpoint while providing your [!DNL PostgreSQL] authentication credentials as part of the request parameters.

**API format**

```https
POST /connections
```

**Request**

The following request creates a base connection for [!DNL PostgreSQL] to connect to Experience Platform on AWS.

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
      "name": "PostgreSQL base connection",
      "description": "PostgreSQL base connection via basic authentication",
      "auth": {
          "specName": "Basic Authentication",
          "params": {
              "server": "localhost",
              "port": "3306",
              "database": "postgresql-acme",
              "username": "acme",
              "password": "xxxx",
              "sslMode": "false"
          }
      },
      "connectionSpec": {
          "id": "74a1c565-4e59-48d7-9d67-7c03b8a13137",
          "version": "1.0"
      }
  }'
```

| Property | Description |
| ---| --- |
| `auth.params.server` | The name or IP address of your [!DNL PostgreSQL] database. |
| `auth.params.port` | The port number of the database server. |
| `auth.params.database` | The name of your [!DNL PostgreSQL] database. |
| `auth.params.username` | The username associated with your [!DNL PostgreSQL] database authentication. |
| `auth.params.password` | The password associated with your [!DNL PostgreSQL] database authentication. |
| `sslMode` | A boolean value that controls whether SSL is enforced or not, depending on your server support. This configuration defaults to `false`. |
| `connectionSpec.id`| The [!DNL PostgreSQL] connection specification IDs: `74a1c565-4e59-48d7-9d67-7c03b8a13137`. |

+++

**Response**

A successful response returns the unique identifier (`id`) of the newly created base connection. 

+++View response example

```json
{
    "id": "2c15b1c5-73bf-47ab-9098-0467fcd854d9",
    "etag": "\"2600fc39-0000-0200-0000-67dd48f80000\""
}
```

+++

## Next steps

Now that you have created a connection between your [!DNL PostgreSQL] database and Experience Platform, you can now proceed to next steps and bring your [!DNL PostgreSQL] data to Experience Platform. For more information, read the following documentation:

* [Explore the structure and contents of your data tables using the [!DNL Flow Service] API](../../explore/tabular.md)
* [Create a dataflow to bring database data to Experience Platform using the [!DNL Flow Service] API](../../collect/database-nosql.md)
