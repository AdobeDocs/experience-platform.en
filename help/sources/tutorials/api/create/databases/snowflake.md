---
title: Connect Snowflake to Experience Platform Using The Flow Service API
description: Learn how to connect Adobe Experience Platform to Snowflake using the Flow Service API.
badgeUltimate: label="Ultimate" type="Positive"
exl-id: 0ef34d30-7b4c-43f5-8e2e-cde05da05aa5
---
# Connect [!DNL Snowflake] to Experience Platform using the [!DNL Flow Service] API

>[!IMPORTANT]
>
>The [!DNL Snowflake] source is available in the sources catalog to users who have purchased Real-Time Customer Data Platform Ultimate.

Read this guide to learn how you can connect your [!DNL Snowflake] source account to Adobe Experience Platform using the [[!DNL Flow Service] API](https://developer.adobe.com/experience-platform-apis/references/flow-service/).

## Getting started

This guide requires a working understanding of the following components of Adobe Experience Platform:

* [Sources](../../../../home.md): [!DNL Experience Platform] allows data to be ingested from various sources while providing you with the ability to structure, label, and enhance incoming data using [!DNL Platform] services.
* [Sandboxes](../../../../../sandboxes/home.md): [!DNL Experience Platform] provides virtual sandboxes which partition a single [!DNL Platform] instance into separate virtual environments to help develop and evolve digital experience applications.

### Using Platform APIs

For information on how to successfully make calls to Platform APIs, see the guide on [getting started with Platform APIs](../../../../../landing/api-guide.md).

The following section provides additional information that you will need to know in order to successfully connect to [!DNL Snowflake] using the [!DNL Flow Service] API.

## Connect [!DNL Snowflake] to Experience Platform on Azure {#azure}

Read the steps below for information on how to connect your [!DNL Snowflake] source to Experience Platform on Azure.

### Gather required credentials

You must provide values for the following credential properties to authenticate your [!DNL Snowflake] source.

>[!BEGINTABS]

>[!TAB Account key authentication]

| Credential | Description |
| ---------- | ----------- |
| `account` | An account name uniquely identifies an account within your organization. In this case, you must uniquely identify an account across different [!DNL Snowflake] organizations. To do this, you must prepend your organization name to the account name. For example: `orgname-account_name`. Read the guide on [retrieving your [!DNL Snowflake] account identifier](../../../../connectors/databases/snowflake.md#retrieve-your-account-identifier) for additional guidance. For more information, refer to the [[!DNL Snowflake] documentation](https://docs.snowflake.com/en/user-guide/admin-account-identifier#format-1-preferred-account-name-in-your-organization).|
| `warehouse` | The [!DNL Snowflake] warehouse manages the query execution process for the application. Each [!DNL Snowflake] warehouse is independent from one another and must be accessed individually when bringing data over to Platform. |
| `database` | The [!DNL Snowflake] database contains the data you want to bring the Platform. |
| `username` | The username for the [!DNL Snowflake] account. |
| `password` | The password for the [!DNL Snowflake] user account. |
| `role` | The default access control role to use in the [!DNL Snowflake] session. The role should be an existing one that has already been assigned to the specified user. The default role is `PUBLIC`. |
| `connectionString` | The connection string used to connect to your [!DNL Snowflake] instance. The connection string pattern for [!DNL Snowflake] is `jdbc:snowflake://{ACCOUNT_NAME}.snowflakecomputing.com/?user={USERNAME}&password={PASSWORD}&db={DATABASE}&warehouse={WAREHOUSE}` |

>[!TAB Key-pair authentication]

To use key-pair authentication, you must generate a 2048-bit RSA key pair and then provide the following values when creating an account for your [!DNL Snowflake] source.

| Credential | Description |
| --- | --- |
| `account` | An account name uniquely identifies an account within your organization. In this case, you must uniquely identify an account across different [!DNL Snowflake] organizations. To do this, you must prepend your organization name to the account name. For example: `orgname-account_name`. Read the guide on [retrieving your [!DNL Snowflake] account identifier](../../../../connectors/databases/snowflake.md#retrieve-your-account-identifier) for additional guidance. For more information, refer to the [[!DNL Snowflake] documentation](https://docs.snowflake.com/en/user-guide/admin-account-identifier#format-1-preferred-account-name-in-your-organization). |
| `username` | The username of your [!DNL Snowflake] account. |
| `privateKey` | The [!DNL Base64-]encoded private key of your [!DNL Snowflake] account. You can generate either encrypted or unencrypted private keys. If you are using an encrypted private key, then you must also provide a private key passphrase when authenticating against Experience Platform. Read the guide on [retrieving your [!DNL Snowflake] private key](../../../../connectors/databases/snowflake.md) for more information.  |
| `privateKeyPassphrase` | The private key passphrase is an additional layer of security that you must use when authenticating with an encrypted private key. You are not required to provide the passphrase if you are using an unencrypted private key. |
| `database` | The [!DNL Snowflake] database that contains the data you want to ingest to Experience Platform. |
| `warehouse` | The [!DNL Snowflake] warehouse manages the query execution process for the application. Each [!DNL Snowflake] warehouse is independent from one another and must be accessed individually when bringing data over to Experience Platform. |

For more information about these values, refer the [[!DNL Snowflake] key-pair authentication guide](https://docs.snowflake.com/en/user-guide/key-pair-auth.html).

>[!ENDTABS]

>[!NOTE]
>
>You must set the `PREVENT_UNLOAD_TO_INLINE_URL` flag to `FALSE` to allow data unloading from your [!DNL Snowflake] database to Experience Platform.

### Create a base connection for [!DNL Snowflake] on Experience Platform on Azure {#azure-base}

A base connection retains information between your source and Platform, including your source's authentication credentials, the current state of the connection, and your unique base connection ID. The base connection ID allows you to explore and navigate files from within your source and identify the specific items that you want to ingest, including information regarding their data types and formats.

To create a base connection ID, make a POST request to the `/connections` endpoint while providing your [!DNL Snowflake] authentication credentials as part of the request body.

**API format**

```https
POST /connections
```

>[!BEGINTABS]

>[!TAB ConnectionString]

+++Request

The following request creates a base connection for [!DNL Snowflake]:

```shell
curl -X POST \
  'https://platform.adobe.io/data/foundation/flowservice/connections' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json' \
  -d '{
      "name": "Snowflake base connection",
      "description": "Snowflake base connection",
      "auth": {
          "specName": "ConnectionString",
          "params": {
              "connectionString": "jdbc:snowflake://{ACCOUNT_NAME}.snowflakecomputing.com/?user={USERNAME}&password={PASSWORD}&db={DATABASE}&warehouse={WAREHOUSE}"
          }
      },
      "connectionSpec": {
          "id": "b2e08744-4f1a-40ce-af30-7abac3e23cf3",
          "version": "1.0"
      }
  }'
```

| Property | Description |
| -------- | ----------- |
| `auth.params.connectionString` | The connection string used to connect to your [!DNL Snowflake] instance. The connection string pattern for [!DNL Snowflake] is `jdbc:snowflake://{ACCOUNT_NAME}.snowflakecomputing.com/?user={USERNAME}&password={PASSWORD}&db={DATABASE}&warehouse={WAREHOUSE}`. |
| `connectionSpec.id` | The [!DNL Snowflake] connection specification ID: `b2e08744-4f1a-40ce-af30-7abac3e23cf3`. |

+++

+++Response

A successful response returns the newly created connection, including its unique connection identifier (`id`). This ID is required to explore your data in the next tutorial.

```json
{
    "id": "2fce94c1-9a93-4971-8e94-c19a93097129",
    "etag": "\"d403848a-0000-0200-0000-5e978f7b0000\""
}
```

+++


>[!TAB Key-pair authentication with encrypted private key]

+++Request

```shell
curl -X POST \
  'https://platform.adobe.io/data/foundation/flowservice/connections' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json' \
  -d '{
      "name": "Snowflake base connection with encrypted private key",
      "description": "Snowflake base connection with encrypted private key",
      "auth": {
        "specName": "KeyPair Authentication",
        "params": {
            "account": "acme-snowflake123",
            "username": "acme-cj123",
            "database": "ACME_DB",
            "privateKey": "{BASE_64_ENCODED_PRIVATE_KEY}",
            "privateKeyPassphrase": "abcd1234",
            "warehouse": "COMPUTE_WH"
        }
    },
    "connectionSpec": {
        "id": "b2e08744-4f1a-40ce-af30-7abac3e23cf3",
        "version": "1.0"
    }
  }'
```

| Property | Description |
| -------- | ----------- |
| `auth.params.account` | The name of your [!DNL Snowflake] account. |
| `auth.params.username` | The username associated with your [!DNL Snowflake] account.|
| `auth.params.database` | The [!DNL Snowflake] database from where the data will be pulled from. |
| `auth.params.privateKey` | The [!DNL Base64-]encoded encrypted private key of your [!DNL Snowflake] account. |
| `auth.params.privateKeyPassphrase` | The passphrase that corresponds with your private key. |
| `auth.params.warehouse` | The [!DNL Snowflake] warehouse that you are using. |
| `connectionSpec.id` | The [!DNL Snowflake] connection specification ID: `b2e08744-4f1a-40ce-af30-7abac3e23cf3`. |

+++

+++Response

A successful response returns the newly created connection, including its unique connection identifier (`id`). This ID is required to explore your data in the next tutorial.

```json
{
    "id": "2fce94c1-9a93-4971-8e94-c19a93097129",
    "etag": "\"d403848a-0000-0200-0000-5e978f7b0000\""
}
```

+++

>[!TAB Key-pair authentication with unencrypted private key]

+++Request

```shell
curl -X POST \
  'https://platform.adobe.io/data/foundation/flowservice/connections' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json' \
  -d '{
      "name": "Snowflake base connection with encrypted private key",
      "description": "Snowflake base connection with encrypted private key",
      "auth": {
        "specName": "KeyPair Authentication",
        "params": {
            "account": "acme-snowflake123",
            "username": "acme-cj123",
            "database": "ACME_DB",
            "privateKey": "{BASE_64_ENCODED_PRIVATE_KEY}",
            "warehouse": "COMPUTE_WH"
        }
    },
    "connectionSpec": {
        "id": "b2e08744-4f1a-40ce-af30-7abac3e23cf3",
        "version": "1.0"
    }
  }'
```

| Property | Description |
| -------- | ----------- |
| `auth.params.account` | The name of your [!DNL Snowflake] account. |
| `auth.params.username` | The username associated with your [!DNL Snowflake] account.|
| `auth.params.database` | The [!DNL Snowflake] database from where the data will be pulled from. |
| `auth.params.privateKey` | The [!DNL Base64-]encoded unencrypted private key of your [!DNL Snowflake] account. |
| `auth.params.warehouse` | The [!DNL Snowflake] warehouse that you are using. |
| `connectionSpec.id` | The [!DNL Snowflake] connection specification ID: `b2e08744-4f1a-40ce-af30-7abac3e23cf3`. |

+++

+++Response

A successful response returns the newly created connection, including its unique connection identifier (`id`). This ID is required to explore your data in the next tutorial.

```json
{
    "id": "2fce94c1-9a93-4971-8e94-c19a93097129",
    "etag": "\"d403848a-0000-0200-0000-5e978f7b0000\""
}
```

+++

>[!ENDTABS]

## Connect [!DNL Snowflake] to Experience Platform on Amazon Web Services (AWS) {#aws}

>[!AVAILABILITY]
>
>This section applies to implementations of Experience Platform running on Amazon Web Services (AWS). Experience Platform running on AWS is currently available to a limited number of customers. To learn more about the supported Experience Platform infrastructure, see the [Experience Platform multi-cloud overview](../../../../../landing/multi-cloud.md).

Read the steps below for information on how to connect your [!DNL Snowflake] source to Experience Platform on AWS.

### Create a base connection for [!DNL Snowflake] on Experience Platform in AWS {#aws-base}

**API format**

```http
POST /connections
```

**Request**

The following request creates a base connection for [!DNL Snowflake] to ingest date to Experience Platform on AWS:

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
      "name": "Snowflake base connection for Experience Platform on AWS",
      "description": "Snowflake base connection for Experience Platform on AWS",
      "auth": {
          "specName": "Basic Authentication",
          "params": {
              "host": "acme.snowflakecomputing.com",
              "port": "443",
              "username": "acme-cj123",
              "password": "{PASSWORD}",
              "database": "ACME_DB",
              "warehouse": "COMPUTE_WH",
              "schema": "{SCHEMA}"
          }
      },
      "connectionSpec": {
          "id": "b2e08744-4f1a-40ce-af30-7abac3e23cf3",
          "version": "1.0"
      }
  }'
```

| Property | Description |
| --- | --- |
| `auth.params.host` | The host URL that your [!DNL Snowflake] account connects to. |
| `auth.params.port` | The port number that is used by [!DNL Snowflake] when connecting to a server over the internet. The default port value is `443`. |
| `auth.params.username` | The username associated with your [!DNL Snowflake] account. |
| `auth.params.database` | The [!DNL Snowflake] database from where the data will be pulled from. |
| `auth.params.password` | The password associated with your [!DNL Snowflake] account. |
| `auth.params.warehouse` | The [!DNL Snowflake] warehouse that you are using. |
| `auth.params.schema` | The schema associated with your [!DNL Snowflake] database. |

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

By following this tutorial, you have created a [!DNL Snowflake] base connection using the [!DNL Flow Service] API. You can use this base connection ID in the following tutorials:

* [Explore the structure and contents of your data tables using the [!DNL Flow Service] API](../../explore/tabular.md)
* [Create a dataflow to bring database data to Platform using the [!DNL Flow Service] API](../../collect/database-nosql.md)
