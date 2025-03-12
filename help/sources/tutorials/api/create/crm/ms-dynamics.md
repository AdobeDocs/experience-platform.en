---
title: Create a Microsoft Dynamics Base Connection Using the Flow Service API
description: Learn how to connect Platform to a Microsoft Dynamics account using the Flow Service API.
exl-id: 423c6047-f183-4d92-8d2f-cc8cc26647ef
---
# Connect [!DNL Microsoft Dynamics] to Experience Platform using the [!DNL Flow Service] API

Read this guide to learn how you can connect your [!DNL Microsoft Dynamics] source to Adobe Experience Platform using the [[!DNL Flow Service] API](https://developer.adobe.com/experience-platform-apis/references/flow-service/).

## Get started

This guide requires a working understanding of the following components of Adobe Experience Platform:

* [Sources](../../../../home.md): Experience Platform allows data to be ingested from various sources while providing you with the ability to structure, label, and enhance incoming data using Platform services.
* [Sandboxes](../../../../../sandboxes/home.md): Experience Platform provides virtual sandboxes which partition a single Platform instance into separate virtual environments to help develop and evolve digital experience applications.

### Using Platform APIs

For information on how to successfully make calls to Platform APIs, see the guide on [getting started with Platform APIs](../../../../../landing/api-guide.md).

The following sections provide additional information that you will need to know in order to successfully connect Platform to a Dynamics account using the [!DNL Flow Service] API.

### Gather required credentials

In order for [!DNL Flow Service] to connect to [!DNL Dynamics], you must provide values for the following connection properties:

>[!BEGINTABS]

>[!TAB Basic authentication]

| Credential | Description |
| --- | --- |
| `serviceUri` | The service URL of your [!DNL Dynamics] instance. |
| `username` | The user name for your [!DNL Dynamics] user account. |
| `password` | The password for your [!DNL Dynamics] account. |

>[!TAB Service-principal and key authentication]

| Credential | Description |
| --- | --- |
| `servicePrincipalId` | The client ID of your [!DNL Dynamics] account. This ID is required when using service principal and key-based authentication. |
| `servicePrincipalKey` | The service principal secret key. This credential is required when using service principal and key-based authentication. |

>[!ENDTABS]

For more information on getting started, refer to [this [!DNL Dynamics] document](https://docs.microsoft.com/en-us/powerapps/developer/common-data-service/authenticate-oauth).

## Create a base connection

>[!TIP]
>
>Once created, you cannot change the authentication type of a [!DNL Dynamics] base connection. To change the authentication type, you must create a new base connection.

A base connection retains information between your source and Experience Platform, including your source's authentication credentials, the current state of the connection, and your unique base connection ID. The base connection ID allows you to explore and navigate files from within your source and identify the specific items that you want to ingest, including information regarding their data types and formats.

To create a base connection ID, make a POST request to the `/connections` endpoint while providing your [!DNL Dynamics] authentication credentials as part of the request parameters.

**API format**

```http
POST /connections
```

>[!BEGINTABS]

>[!TAB Basic authentication]

To create a [!DNL Dynamics] base connection using basic authentication, make a POST request to the [!DNL Flow Service] API while providing values for your connection's `serviceUri`, `username`, and `password`.

**Request**

The following request creates a base connection for a [!DNL Dynamics] source using basic authentication.

+++Select to view request example

```shell
curl -X POST \
  'https://platform.adobe.io/data/foundation/flowservice/connections' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json' \
  -d '{
      "name": "Dynamics connection",
      "description": "Dynamics connection using basic auth",
      "auth": {
          "specName": "Basic Authentication for Dynamics-Online",
          "params": {
              "serviceUri": "{SERVICE_URI}",
              "username": "{USERNAME}",
              "password": "{PASSWORD}"
          }
      },
      "connectionSpec": {
          "id": "38ad80fe-8b06-4938-94f4-d4ee80266b07",
          "version": "1.0"
      }
  }'
```

| Property | Description |
| -------- | ----------- |
| `auth.params.serviceUri` | The service URI associated with your [!DNL Dynamics] instance. |
| `auth.params.username` | The username associated with your [!DNL Dynamics] account. |
| `auth.params.password` | The password associated with your [!DNL Dynamics] account. |
| `connectionSpec.id` | The [!DNL Dynamics] connection specification ID: `38ad80fe-8b06-4938-94f4-d4ee80266b07` |

+++

**Response**

A successful response returns the newly created base connection, including its unique identifier (`id`).

+++Select to view response example

```json
{
    "id": "4cb0c374-d3bb-4557-b139-5712880adc55",
    "etag": "\"9e0052a2-0000-0200-0000-5e35tb330000\""
}
```

+++

>[!TAB Service principal key-based authentication]

To create a [!DNL Dynamics] base connection using service principal key-based authentication, make a POST request to the [!DNL Flow Service] API while providing values for your connection's `serviceUri`, `servicePrincipalId`, and `servicePrincipalKey`.

**Request**

The following request creates a base connection for a [!DNL Dynamics] source using basic service principal key-based authentication.

+++Select to view request example

```shell
curl -X POST \
  'https://platform.adobe.io/data/foundation/flowservice/connections' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json' \
  -d '{
      "name": "Dynamics connection",
      "description": "Dynamics connection using key-based authentication",
      "auth": {
          "specName": "Service Principal Key Based Authentication",
          "params": {
              "serviceUri": "{SERVICE_URI}",
              "servicePrincipalId": "{SERVICE_PRINCIPAL_ID}",
              "servicePrincipalKey": "{SERVICE_PRINCIPAL_KEY}"
          }
      },
      "connectionSpec": {
          "id": "38ad80fe-8b06-4938-94f4-d4ee80266b07",
          "version": "1.0"
      }
  }'
```

| Property | Description |
| -------- | ----------- |
| `auth.params.serviceUri` | The service URI associated with your [!DNL Dynamics] instance. |
| `auth.params.servicePrincipalId` | The client ID of your [!DNL Dynamics] account. This ID is required when using service principal and key-based authentication. |
| `auth.params.servicePrincipalKey` | The service principal secret key. This credential is required when using service principal and key-based authentication. |
| `connectionSpec.id` | The [!DNL Dynamics] connection specification ID: `38ad80fe-8b06-4938-94f4-d4ee80266b07` |

+++

**Response**

A successful response returns the newly created connection, including its unique identifier (`id`).

+++Select to view response example

```json
{
    "id": "4cb0c374-d3bb-4557-b139-5712880adc55",
    "etag": "\"9e0052a2-0000-0200-0000-5e35tb330000\""
}
```

+++

>[!ENDTABS]

## Explore your data tables

To explore your [!DNL Dynamics] data tables, make a GET request to the `/connections/{BASE_CONNECTION_ID}/explore` endpoint and provide your base connection ID as part of the query parameters.

**API format**

```http
GET /connections/{BASE_CONNECTION_ID}/explore?objectType=root
```

| Query parameters | Description |
| --- | --- |
| `{BASE_CONNECTION_ID}` | The ID of the base connection. Use this ID to explore the contents and structure of your source. |

**Request**

The following request retrieves the list of available tables and views for a [!DNL Dynamics] source with the base connection ID: `dd668808-25da-493f-8782-f3433b976d1e`.

+++Select to view request example

```shell
curl -X GET \
  'https://platform.adobe.io/data/foundation/flowservice/connections/dd668808-25da-493f-8782-f3433b976d1e/explore?objectType=root' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json' \
```

+++

**Response**

A successful response returns the [!DNL Dynamics] tables and views directory at the root level.

+++Select to view response example

```json
[
    {
        "type": "table",
        "name": "systemuserlicenses",
        "path": "systemuserlicenses",
        "canPreview": true,
        "canFetchSchema": true
    },
    {
        "type": "table",
        "name": "Process Dependency",
        "path": "workflowdependency",
        "canPreview": true,
        "canFetchSchema": true
    },
    {
        "type": "view",
        "name": "accountView1",
        "path": "accountView1",
        "canPreview": true,
        "canFetchSchema": true
    },
    {
        "type": "view",
        "name": "Inactive_ACC_custom",
        "path": "Inactive_ACC_custom",
        "canPreview": true,
        "canFetchSchema": true
    }
]
```

+++

### Use primary key to optimize data exploration

You can optimize your explore queries by providing `primaryKey` as part of your query parameters. You must specify the primary key of the [!DNL Dynamics] table when including `primaryKey` as a query parameter.

**API format**

```http
GET /connections/{BASE_CONNECTION_ID}/explore?preview=true&object={OBJECT}&objectType={OBJECT_TYPE}&previewCount=10&primaryKey={PRIMARY_KEY}
```

| Query parameters | Description |
| --- | --- |
| `{BASE_CONNECTION_ID}` | The ID of the base connection. Use this ID to explore the contents and structure of your source. |
| `preview` | A boolean value that enables data preview. |
| `{OBJECT}` | The [!DNL Dynamics] object that you want to explore. |
| `{OBJECT_TYPE}` | The type of the object. |
| `previewCount` | A restriction that limits the returned preview to only a certain number of records. |
| `{PRIMARY_KEY}` | The primary key of the table that you are retrieving for preview.|

**Request**

+++Select to view request example

```shell
curl -X GET \
  'https://platform-stage.adobe.io/data/foundation/flowservice/connections/dd668808-25da-493f-8782-f3433b976d1e/explore?preview=true&object=lead&objectType=table&previewCount=10&primaryKey=leadid' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json' \
```

+++

## Inspect the structure of a table

To inspect the structure of a specific table, make a GET request to `/connections/{BASE_CONNECTION_ID}/explore` and provide the path to the specific table as a query parameter.

**API format**

```http
GET /connections/{BASE_CONNECTION_ID}/explore?object={TABLE_PATH}&objectType=table
```

| Query parameter | Description |
| --- | --- |
| `{BASE_CONNECTION_ID}` | The ID of the base connection. Use this ID to explore the contents and structure of your source. |
| `{TABLE_PATH}` | The path to the particular table that you want to explore. |

**Request**

The following request retrieves the structure and contents of a [!DNL Dynamics] table with path `workflowdependency`.

+++Select to view request example

```shell
curl -X GET \
  'https://platform.adobe.io/data/foundation/flowservice/connections/dd668808-25da-493f-8782-f3433b976d1e/explore?object=workflowdependency&objectType=table' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json' \
```

+++

**Response**

A successful response returns the contents of path `workflowdependency`.

+++Select to view response example

```json
{
    "format": "flat",
    "schema": {
        "columns": [
            {
                "name": "first_name",
                "type": "string",
                "meta": {
                    "originalType": "String"
                }
            },
            {
                "name": "last_name",
                "type": "string",
                "meta": {
                    "originalType": "String"
                }
            },
            {
                "name": "email",
                "type": "string",
                "meta": {
                    "originalType": "String"
                }
            }
        ]
    }
}
```

+++

## Inspect the structure of a view

In [!DNL Dynamics], a view refers to the columns to display, the width of each column, the default system in which a list of records are sorted, and the default filters applied to restrict which records will appear in the list.

To inspect the structure of a view, make a GET request to `/connections/{BASE_CONNECTION_ID}/explore` and specify the view path in your query parameters. Additionally, you must specify `objectType` as `view`.

**API format**

```http
GET /connections/{BASE_CONNECTION_ID}/explore?object={VIEW_PATH}&objectType=view
```

| Query parameter | Description |
| --- | --- |
| `{BASE_CONNECTION_ID}` | The ID of the base connection. Use this ID to explore the contents and structure of your source. |
| `{VIEW_PATH}` | The path to the view that you want to inspect. |

**Request**

The following request retrieves `accountView1`.

+++Select to view request example

```shell
curl -X GET \
  'https://platform.adobe.io/data/foundation/flowservice/connections/dd668808-25da-493f-8782-f3433b976d1e/explore?object=accountView1&objectType=view' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json' \
```

+++

**Response**

A successful response returns the structure of `accountView1`.

+++Select to view response example

```json
{
    "format": "flat",
    "schema": {
        "columns": [
            {
                "name": "name",
                "type": "string",
                "meta": {
                    "originalType": "string"
                },
                "xdm": {
                    "type": "string"
                }
            },
            {
                "name": "fetchxml",
                "type": "string",
                "meta": {
                    "originalType": "string"
                },
                "xdm": {
                    "type": "string"
                }
            },
            {
                "name": "querytype",
                "type": "integer",
                "meta": {
                    "originalType": "int"
                },
                "xdm": {
                    "type": "integer",
                    "minimum": -2147483648,
                    "maximum": 2147483647
                }
            },
            {
                "name": "userqueryid",
                "type": "string",
                "meta": {
                    "originalType": "guid"
                },
                "xdm": {
                    "type": "string"
                }
            }
        ]
    }
}
```

+++

## Preview entity type view

To preview the contents of a view, make a GET request to `/connections/{BASE_CONNECTION_ID}/explore` and include the view path as well as `preview=true` in your query parameters.

**API format**

```http
GET /connections/{BASE_CONNECTION_ID}/explore?object={VIEW_PATH}&preview=true&objectType=view
```

| Query parameter | Description |
| --- | --- |
| `{BASE_CONNECTION_ID}` | The ID of the base connection. Use this ID to explore the contents and structure of your source. |
| `{VIEW_PATH}` | The path to the view that you want to inspect. |


**Request**

The following request previews the contents of `accountView1`.

+++Select to view request example

```shell
curl -X GET \
  'https://platform.adobe.io/data/foundation/flowservice/connections/dd668808-25da-493f-8782-f3433b976d1e/explore?object=accountView1&preview=true&objectType=view' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json' \
```

+++

**Response**

A successful response returns the contents of `accountView1`.

+++Select to view response example

```json
{
    "format": "flat",
    "schema": {
        "columns": [
            {
                "name": "emailaddress1",
                "type": "string",
                "meta": {
                    "originalType": "string"
                },
                "xdm": {
                    "type": "string"
                }
            },
            {
                "name": "contactid",
                "type": "string",
                "meta": {
                    "originalType": "guid"
                },
                "xdm": {
                    "type": "string"
                }
            },
            {
                "name": "fullname",
                "type": "string",
                "meta": {
                    "originalType": "string"
                },
                "xdm": {
                    "type": "string"
                }
            }
        ]
    },
    "data": [
        {
            "contactid": "396e19de-0852-ec11-8c62-00224808a1df",
            "fullname": "Tim Barr",
            "emailaddress1": "barrtim@googlemedia.com"
        }
    ]
}
```

+++

## Create a source connection to ingest view

To create a source connection and ingest a view, make a POST request to the `/sourceConnections` endpoint, provide the table name, and specify `entityType` as `view` in the request body.

**API format**

```http
POST /sourceConnections
```

**Request**

The following request creates a [!DNL Dynamics] source connection and ingests views.

+++Select to view request example

```shell
curl -X POST \
  'https://platform.adobe.io/data/foundation/flowservice/sourceConnections' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json' \
  -d '{
      "name": "Dynamics Source Connection",
      "description": "Dynamics Source Connection",
      "baseConnectionId": "dd668808-25da-493f-8782-f3433b976d1e",
      "data": {
          "format": "tabular",
          "schema": null,
          "properties": null
      },
      "params": {
          "tableName": "Contacts with name TIM",
          "entityType": "view"
      },
      "connectionSpec": {
          "id": "38ad80fe-8b06-4938-94f4-d4ee80266b07",
          "version": "1.0"
      }
  }'
```

+++

**Response**

A successful response returns the newly generated source connection ID and its corresponding etag.

+++Select to view response example

```json
{
    "id": "e566bab3-1b58-428c-b751-86b8cc79a3b4",
    "etag": "\"82009592-0000-0200-0000-678121030000\""
}
```

+++

### Use primary key to optimize your dataflow

You can also optimize your [!DNL Dynamics] dataflow by specifying the primary key as part of your request body parameters.

**API format**

```http
POST /sourceConnections
```

**Request**

The following request creates a [!DNL Dynamics] source connection while specifying the primary key as `contactid`.

+++Select to view request example

```shell
curl -X POST \
  'https://platform.adobe.io/data/foundation/flowservice/sourceConnections' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json' \
  -d '{
      "name": "Dynamics Source Connection",
      "description": "Dynamics Source Connection",
      "baseConnectionId": "dd668808-25da-493f-8782-f3433b976d1e",
      "data": {
          "format": "tabular"
      },
      "params": {
          "tableName": "contact",
          "primaryKey": "contactid"
      },
      "connectionSpec": {
          "id": "38ad80fe-8b06-4938-94f4-d4ee80266b07",
          "version": "1.0"
      }
  }'
```

| Property | Description |
| --- | --- |
| `baseConnectionId` | The ID of the base connection. |
| `data.format` | The format of the data. |
| `params.tableName` | The name of the table in [!DNL Dynamics]. |
| `params.primaryKey` | The primary key of the table that will optimize queries. |
| `connectionSpec.id` | The connection spec ID that corresponds with the [!DNL Dynamics] source. |

+++

**Response**

A successful response returns the newly generated source connection ID and its corresponding etag.

+++Select to view response example

```json
{
    "id": "e566bab3-1b58-428c-b751-86b8cc79a3b4",
    "etag": "\"82009592-0000-0200-0000-678121030000\""
}
```

+++


## Next steps

By following this tutorial, you have created a [!DNL Microsoft Dynamics] base connection using the [!DNL Flow Service] API. You can use this base connection ID in the following tutorials:

* [Explore the structure and contents of your data tables using the [!DNL Flow Service] API](../../explore/tabular.md)
* [Create a dataflow to bring CRM data to Platform using the [!DNL Flow Service] API](../../collect/crm.md)
