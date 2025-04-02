---
title: Connect AWS Redshift To Experience Platform Using The Flow Service API
description: Learn how to connect Adobe Experience Platform to AWS Redshift using the Flow Service API.
badgeUltimate: label="Ultimate" type="Positive"
exl-id: 2728ce08-05c9-4dca-af1d-d2d1b266c5d9
---
# Connect [!DNL AWS Redshift] to Experience Platform using the [!DNL Flow Service] API

>[!IMPORTANT]
>
>The [!DNL AWS Redshift] source is available in the sources catalog to users who have purchased Real-Time Customer Data Platform Ultimate.

Read this guide to learn how you can connect your [!DNL AWS Redshift] source account to Adobe Experience Platform using the [[!DNL Flow Service] API](https://developer.adobe.com/experience-platform-apis/references/flow-service/).

## Getting started

This guide requires a working understanding of the following components of Adobe Experience Platform:

* [Sources](../../../../home.md): [!DNL Experience Platform] allows data to be ingested from various sources while providing you with the ability to structure, label, and enhance incoming data using [!DNL Experience Platform] services.
* [Sandboxes](../../../../../sandboxes/home.md): [!DNL Experience Platform] provides virtual sandboxes which partition a single [!DNL Experience Platform] instance into separate virtual environments to help develop and evolve digital experience applications.

### Using Platform APIs

For information on how to successfully make calls to Platform APIs, see the guide on [getting started with Platform APIs](../../../../../landing/api-guide.md).

## Connect [!DNL AWS Redshift] to Experience Platform on Azure {#azure}

Read the steps below for information on how to connect your [!DNL AWS Redshift] source to Experience Platform on Azure.

### Gather required credentials

In order for [!DNL Flow Service] to connect with [!DNL AWS Redshift], you must provide the following connection properties:

| Credential | Description |
| `server` | The server name of your [!DNL AWS Redshift] instance. |
| `port` | The TCP port that a [!DNL AWS Redshift] server uses to listen for client connections. |
| `username` | The username associated with your [!DNL AWS Redshift] account. |
| `password` | The password that corresponds with the user account. |
| `database` | The [!DNL AWS Redshift] database where data is to be fetched from. |
| `connectionSpec.id` | The connection specification returns a source's connector properties, including authentication specifications related to creating the base and source connections. The connection specification ID for [!DNL AWS Redshift] is `3416976c-a9ca-4bba-901a-1f08f66978ff`. |

For more information about getting started, refer to this [[!DNL AWS Redshift] document](https://docs.aws.amazon.com/redshift/latest/gsg/new-user-serverless.html).

### Create a base connection for [!DNL AWS Redshift] on Experience Platform on Azure [#azure-base]

>[!NOTE]
>
>The default encoding standard for [!DNL Redshift] is Unicode. This cannot be changed.

A base connection retains information between your source and Platform, including your source's authentication credentials, the current state of the connection, and your unique base connection ID. The base connection ID allows you to explore and navigate files from within your source and identify the specific items that you want to ingest, including information regarding their data types and formats.

To create a base connection ID, make a POST request to the `/connections` endpoint while providing your [!DNL AWS Redshift] authentication credentials as part of the request parameters.

**API format**

```https
POST /connections
```

**Request**

+++Select to view example

The following request creates a base connection for [!DNL AWS Redshift]:

```shell
curl -X POST \
  'https://platform.adobe.io/data/foundation/flowservice/connections' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json' \
  -d '{
      "name": "AWS-redshift base connection",
      "description": "base connection for AWS-redshift,
      "auth": {
          "specName": "Basic Authentication",
          "params": {
              "server": "{SERVER}",
              "port": "{PORT},
              "username": "{USERNAME}",
              "password": "{PASSWORD}",
              "database": "{DATABASE}"
          }
      },
      "connectionSpec": {
          "id": "3416976c-a9ca-4bba-901a-1f08f66978ff",
          "version": "1.0"
      }
  }'
```

| Property | Description |
| --- | --- |
| `auth.params.server` | The server name of your [!DNL AWS Redshift] instance. |
| `auth.params.port` | The TCP port that a [!DNL AWS Redshift] server uses to listen for client connections. |
| `auth.params.username` | The username associated with your [!DNL AWS Redshift] account. |
| `auth.params.password` | The password that corresponds with the user account. |
| `auth.params.database` | The [!DNL AWS Redshift] database where data is to be fetched from. |
| `connectionSpec.id` | The [!DNL AWS Redshift] connection specification ID: `3416976c-a9ca-4bba-901a-1f08f66978ff` |

+++

**Response**

+++Select to view example

A successful response returns the newly created connection, including its unique identifier (`id`). This ID is required to explore your data in the next tutorial.

```json
{
    "id": "373e88fc-43da-4e3c-be88-fc43da3e3c0f",
    "etag": "\"1700ce7b-0000-0200-0000-5e3b405e0000\""
}
```

+++

## Connect [!DNL AWS Redshift] to Experience Platform on AWS Web Services (AWS) {#aws}

>[!AVAILABILITY]
>
>This section applies to implementations of Experience Platform running on AWS Web Services (AWS). Experience Platform running on AWS is currently available to a limited number of customers. To learn more about the supported Experience Platform infrastructure, see the [Experience Platform multi-cloud overview](../../../../../landing/multi-cloud.md).

Read the steps below for information on how to connect your [!DNL AWS Redshift] source to Experience Platform on AWS.

### Create a base connection for [!DNL AWS Redshift] on Experience Platform on AWS {#aws-base}

**API format**

```http
POST /connections
```

**Request**

The following request creates a base connection for [!DNL AWS Redshift]:

+++Select to view example

```shell
curl -X POST \
  'https://platform.adobe.io/data/foundation/flowservice/connections' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json' \
  -d '{
      "name": "AWS Redshift base connection for Experience Platform on AWS",
      "description": "AWS Redshift base connection for Experience Platform on AWS",
      "auth": {
          "specName": "Basic Authentication",
          "params": {
              "server": "{SERVER}",
              "port": "5439",
              "username": "{USERNAME}",
              "password": "{PASSWORD}",
              "database": "{DATABASE}",
              "schema": "{SCHEMA}"
          }
      },
      "connectionSpec": {
          "id": "3416976c-a9ca-4bba-901a-1f08f66978ff",
          "version": "1.0"
      }
  }'
```

| Property | Description |
| --- | --- |
| `auth.params.server` | The server name of your [!DNL AWS Redshift] instance. |
| `auth.params.port` | The TCP port that a [!DNL AWS Redshift] server uses to listen for client connections. |
| `auth.params.username` | The username associated with your [!DNL AWS Redshift] account. |
| `auth.params.password` | The password that corresponds with the user account. |
| `auth.params.database` | The [!DNL AWS Redshift] database where data is to be fetched from. |
| `auth.params.schema` | The name of the schema associated with your [!DNL AWS Redshift] database. You must ensure that the user you want to give database access to, also has access to this schema. |
| `connectionSpec.id` | The [!DNL AWS Redshift] connection specification ID: `3416976c-a9ca-4bba-901a-1f08f66978ff` |

+++

**Response**

A successful response returns details of the newly created connection, including its unique identifier (`id`). This ID is required to explore your storage in the next tutorial.

+++Select to view example

```json
{
    "id": "4cb0c374-d3bb-4557-b139-5712880adc55",
    "etag": "\"1700d77b-0000-0200-0000-5e3b41a10000\""
}
```

+++


## Next steps

By following this tutorial, you have created an [!DNL AWS Redshift] base connection using the [!DNL Flow Service] API. You can use this base connection ID in the following tutorials:

* [Explore the structure and contents of your data tables using the [!DNL Flow Service] API](../../explore/tabular.md)
* [Create a dataflow to bring database data to Platform using the [!DNL Flow Service] API](../../collect/database-nosql.md)
