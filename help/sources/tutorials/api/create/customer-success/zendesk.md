---
keywords: Experience Platform;home;popular topics;sources;connectors;source connectors;sources sdk;sdk;SDK
solution: Experience Platform
title: Create a dataflow for Zendesk using the Flow Service API
topic-legacy: tutorial
description: Learn how to connect Adobe Experience Platform to Zendesk using the Flow Service API.
---
# (Beta) Create a dataflow for [!DNL Zendesk] using the [!DNL Flow Service] API

>[!NOTE]
>
>The [!DNL Zendesk] source is in beta. See the [sources overview](../../../../home.md#terms-and-conditions) for more information on using beta-labelled sources.

The following tutorial walks you through the steps to create a source connection and a dataflow to bring [!DNL Zendesk] data to Platform using the [[!DNL Flow Service] API](https://www.adobe.io/experience-platform-apis/references/flow-service/).

## Getting started

This guide requires a working understanding of the following components of Experience Platform:

* [Sources](../../../../home.md): [!DNL Experience Platform] allows data to be ingested from various sources while providing you with the ability to structure, label, and enhance incoming data using [!DNL Platform] services.
* [Sandboxes](../../../../../sandboxes/home.md): [!DNL Experience Platform] provides virtual sandboxes which partition a single Platform instance into separate virtual environments to help develop and evolve digital experience applications.

The following sections provide additional information that you will need to know in order to successfully connect to [!DNL Zendesk] using the [!DNL Flow Service] API.

### Gather required credentials

In order to access your [!DNL Zendesk] account on Platform, you must provide values for the following credentials:

| Credential | Description | Example |
| --- | --- | --- |
| `host` | The unique domain specific to your account created during the registration process.| *xxxxx.zendesk.com*|
| `accessToken` | Zendesk API token. |*0lZnClEvkJSTQ7olGLl7PMhVq99gu26GTbJtf*|

For more information on authenticating your [!DNL Zendesk] source, see the [[!DNL Zendesk] source overview](../../../../connectors/customer-success/zendesk.md).

## Connect [!DNL Zendesk] to Platform using the [!DNL Flow Service] API

The following tutorial walks you through the steps to create a [!DNL Zendesk] source connection and create a dataflow to bring [!DNL Zendesk] data to Platform using the [[!DNL Flow Service] API](https://www.adobe.io/experience-platform-apis/references/flow-service/).

### Create a base connection {#base-connection}

A base connection retains information between your source and Platform, including your source's authentication credentials, the current state of the connection, and your unique base connection ID. The base connection ID allows you to explore and navigate files from within your source and identify the specific items that you want to ingest, including information regarding their data types and formats.

To create a base connection ID, make a POST request to the `/connections` endpoint while providing your [!DNL Zendesk] authentication credentials as part of the request body.

**API format**

```https
POST /connections
```

**Request**

The following request creates a base connection for [!DNL Zendesk]:

```shell
curl -X POST \
    'https://platform.adobe.io/data/foundation/flowservice/connections' \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {IMS_ORG}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}' \
    -H 'Content-Type: application/json' \
    -d '{
        "name": "Zendesk base connection",
        "description": "Zendesk base connection to authenticate to Platform",
        "connectionSpec": {
            "id": "2526ee57-0af4-46ea-a477-720a53108145",
            "version": "1.0"
        },
        "auth": {
            "specName": "OAuth generic-rest-connector",
            "params": {
                "host":{ZENDESK_SUBDOMAIN}
                "accessToken": "{ACCESS_TOKEN}"
            }
        }
    }'
```

| Property | Description |
| --- | --- |
| `name` | The name of your base connection. Ensure that the name of your base connection is descriptive as you can use this to look up information on your base connection. |
| `description` | An optional value that you can include to provide more information on your base connection. |
| `connectionSpec.id` | The connection specification ID of your source. This ID can be retrieved after your source is registered and approved through the [!DNL Flow Service] API. |
| `auth.specName` | The authentication type that you are using to authenticate your source to Platform. |
| `auth.params.` | Contains the credentials required to authenticate your source. |

**Response**

A successful response returns the newly created base connection, including its unique connection identifier (`id`). This ID is required to explore your source's file structure and contents in the next step.

```json
{
     "id": "70383d02-2777-4be7-a309-9dd6eea1b46d",
     "etag": "\"d64c8298-add4-4667-9a49-28195b2e2a84\""
}
```

### Explore your source {#explore}

Using the base connection ID you generated in the previous step, you can explore files and directories by performing GET requests.
Use the following calls to find the path of the file you wish to bring into [!DNL Platform]:

**API format**

```http
GET /connections/{BASE_CONNECTION_ID}/explore?objectType=rest&object={OBJECT}&fileType={FILE_TYPE}&preview={PREVIEW}&sourceParams={SOURCE_PARAMS}
```

When performing GET requests to explore your source's file structure and contents, you must include the query parameters that are listed in the table below:


| Parameter | Description |
| --------- | ----------- |
| `{BASE_CONNECTION_ID}` | The base connection ID generated in the previous step. |
| `objectType=rest` | The type of object that you wish to explore. Currently, this value is always set to `rest`. |
| `{OBJECT}` | This parameter is required only when viewing a specific directory. Its value represents the path of the directory you wish to explore. |
| `fileType=json` | The file type of the file you want to bring to Platform. Currently, `json` is the only supported file type. |
| `{PREVIEW}` | A boolean value that defines whether the contents of the connection supports preview. |
| `{SOURCE_PARAMS}` | Defines parameters for the source file you want to bring to Platform. To retrieve the accepted format-type for `{SOURCE_PARAMS}`, you must encode the entire `parameter` string in base64. In the example below, `"{}"` encoded in base64 equates to `e30`. |


**Request**

```shell
curl -X GET \
    'https://platform.adobe.io/data/foundation/flowservice/connections/70383d02-2777-4be7-a309-9dd6eea1b46d/explore?objectType=rest&object=json&fileType=json&preview=true&sourceParams=e30' \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {IMS_ORG}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns the structure of the queried file. In the example below within the ``data[]`` payload only a single record is shown, however there could be multiple records.

```json
{
    "format": "hierarchical",
    "schema": {
        "type": "object",
        "properties": {
            "results": {
                "type": "object",
                "properties": {
                    "organization_id": {
                        "type": "integer",
                        "minimum": -9007199254740992,
                        "maximum": 9007199254740991
                    },
                    "external_id": {
                        "type": "integer",
                        "minimum": -9007199254740992,
                        "maximum": 9007199254740991
                    },
                    "role_type": {
                        "type": "integer",
                        "minimum": -9007199254740992,
                        "maximum": 9007199254740991
                    },
                    "custom_role_id": {
                        "type": "integer",
                        "minimum": -9007199254740992,
                        "maximum": 9007199254740991
                    },
                    "default_group_id": {
                        "type": "integer",
                        "minimum": -9007199254740992,
                        "maximum": 9007199254740991
                    },
                    "phone": {
                        "type": "string"
                    },
                    "shared_phone_number": {
                        "type": "boolean"
                    },
                    "alias": {
                        "type": "string"
                    },
                    "last_login_at": {
                        "type": "string"
                    },
                    "signature": {
                        "type": "string"
                    },
                    "details": {
                        "type": "string"
                    },
                    "notes": {
                        "type": "string"
                    },
                    "photo": {
                        "type": "string",
                        "media": {
                            "binaryEncoding": "base64",
                            "type": "image/png"
                        }
                    },
                    "active": {
                        "type": "boolean"
                    },
                    "created_at": {
                        "type": "string"
                    },
                    "email": {
                        "type": "string"
                    },
                    "iana_time_zone": {
                        "type": "string"
                    },
                    "id": {
                        "type": "integer"
                    },
                    "locale": {
                        "type": "string"
                    },
                    "locale_id": {
                        "type": "integer"
                    },
                    "moderator": {
                        "type": "boolean"
                    },
                    "name": {
                        "type": "string"
                    },
                    "only_private_comments": {
                        "type": "boolean"
                    },
                    "report_csv": {
                        "type": "boolean"
                    },
                    "restricted_agent": {
                        "type": "boolean"
                    },
                    "result_type": {
                        "type": "string"
                    },
                    "role": {
                        "type": "integer"
                    },
                    "shared": {
                        "type": "boolean"
                    },
                    "shared_agent": {
                        "type": "boolean"
                    },
                    "suspended": {
                        "type": "boolean"
                    },
                    "ticket_restriction": {
                        "type": "string"
                    },
                    "time_zone": {
                        "type": "string"
                    },
                    "two_factor_auth_enabled": {
                        "type": "boolean"
                    },
                    "updated_at": {
                        "type": "string"
                    },
                    "url": {
                        "type": "string"
                    },
                    "verified": {
                        "type": "boolean"
                    },
                    "tags": {
                        "type": "array",
                        "items": {
                            "type": "string"
                        }
                    }
                }
            }
        }
    },
    "data": [
        {
            "meta": {
                "has_more": true,
                "after_cursor": "eyJmaWVsZCI6ImNyZWF0ZWRfYXQiLCJkZXNjIjp0cnVlLCJ0aWVCcmVha0ZpZWxkIjoiaWQiLCJ0aWVCcmVha0Rlc2MiOmZhbHNlLCJzb3J0VmFsdWVzIjpbMTY1MjE3MjA4NTAwMCw2MDMwODg3MTM5NzI5XSwiZXhwb3J0ZWRUaHVzRmFyIjoxMDAsInNlc3Npb25TdGFydCI6MTY1MjQzNDE4MzkwOCwiY3JlYXRlZEF0IjoxNjUyNDM0MTgzOTI2LCJzYWx0ZWRSZXF1ZXN0SGFzaCI6LTczMzQxODQ0NSwic2FsdGVkQ3Vyc29ySGFzaCI6MjgxNzM0NzU2fQ=="
            },
            "links": {
                "next": "https://d3v-dxinfosys.zendesk.com/api/v2/search/export.json?filter%5Btype%5D=user&page%5Bafter%5D=eyJmaWVsZCI6ImNyZWF0ZWRfYXQiLCJkZXNjIjp0cnVlLCJ0aWVCcmVha0ZpZWxkIjoiaWQiLCJ0aWVCcmVha0Rlc2MiOmZhbHNlLCJzb3J0VmFsdWVzIjpbMTY1MjE3MjA4NTAwMCw2MDMwODg3MTM5NzI5XSwiZXhwb3J0ZWRUaHVzRmFyIjoxMDAsInNlc3Npb25TdGFydCI6MTY1MjQzNDE4MzkwOCwiY3JlYXRlZEF0IjoxNjUyNDM0MTgzOTI2LCJzYWx0ZWRSZXF1ZXN0SGFzaCI6LTczMzQxODQ0NSwic2FsdGVkQ3Vyc29ySGFzaCI6MjgxNzM0NzU2fQ%3D%3D&query=type%3Auser"
            },
            "results": {
                "id": 6106699702801,
                "url": "https://d3v-dxinfosys.zendesk.com/api/v2/users/6106699702801.json",
                "name": "test",
                "email": "test@org.com",
                "created_at": "2022-05-13T08:04:22Z",
                "updated_at": "2022-05-13T08:04:22Z",
                "time_zone": "Asia/Kolkata",
                "iana_time_zone": "Asia/Kolkata",
                "locale_id": 1,
                "locale": "en-US",
                "role": "end-user",
                "verified": false,
                "active": true,
                "shared": false,
                "shared_agent": false,
                "two_factor_auth_enabled": false,
                "moderator": false,
                "ticket_restriction": "requested",
                "only_private_comments": false,
                "restricted_agent": true,
                "suspended": false,
                "report_csv": false,
                "result_type": "user"
            }
        }
    ]
}
```

### Create a source connection {#source-connection}

You can create a source connection by making a POST request to the [!DNL Flow Service] API. A source connection consists of a connection ID, a path to the source data file, and a connection spec ID.

**API format**

```https
POST /sourceConnections
```

**Request**

The following request creates a source connection for Zendesk:

```shell
curl -X POST \
    'https://platform.adobe.io/data/foundation/flowservice/sourceConnections' \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {IMS_ORG}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}' \
    -H 'Content-Type: application/json' \
    -d '{
        "name": "Zendesk Source Connection",
        "description": "Zendesk Source Connection",
        "baseConnectionId": "70383d02-2777-4be7-a309-9dd6eea1b46d",
        "connectionSpec": {
            "id": "6360f136-5980-4111-8bdf-15d29eab3b5a",
            "version": "1.0"
        },
        "data": {
            "format": "json"
        },
        "params": {}
    }'
```

| Property | Description |
| --- | --- |
| `name` | The name of your source connection. Ensure that the name of your source connection is descriptive as you can use this to look up information on your source connection. |
| `description` | An optional value that you can include to provide more information on your source connection. |
| `baseConnectionId` | The base connection ID of Zendesk. This ID was generated in an earlier step. |
| `connectionSpec.id` | The connection specification ID that corresponds to your source. |
| `data.format` | The format of the Zendesk data that you want to ingest. Currently, the only supported data format is `json`. |

**Response**

A successful response returns the unique identifier (`id`) of the newly created source connection. This ID is required in a later step to create a dataflow.

```json
{
     "id": "246d052c-da4a-494a-937f-a0d17b1c6cf5",
     "etag": "\"712a8c08-fda7-41c2-984b-187f823293d8\""
}
```

## Create a target XDM schema {#target-schema}

In order for the source data to be used in Platform, a target schema must be created to structure the source data according to your needs. The target schema is then used to create a Platform dataset in which the source data is contained.

A target XDM schema can be created by performing a POST request to the [Schema Registry API](https://www.adobe.io/experience-platform-apis/references/schema-registry/).

For detailed steps on how to create a target XDM schema, see the tutorial on [creating a schema using the API](../../../../../xdm/api/schemas.md).

### Create a target dataset {#target-dataset}

A target dataset can be created by performing a POST request to the [Catalog Service API](https://www.adobe.io/apis/experienceplatform/home/api-reference.html#!acpdr/swagger-specs/catalog.yaml), providing the ID of the target schema within the payload.

For detailed steps on how to create a target dataset, see the tutorial on [creating a dataset using the API](../../../../../catalog/api/create-dataset.md).

### Create a target connection {#target-connection}

A target connection represents the connection to the destination where the ingested data is to be stored. To create a target connection, you must provide the fixed connection specification ID that corresponds to the data lake. This ID is: `c604ff05-7f1a-43c0-8e18-33bf874cb11c`.

You now have the unique identifiers a target schema a target dataset and the connection spec ID to the data lake. Using these identifiers, you can create a target connection using the [!DNL Flow Service] API to specify the dataset that will contain the inbound source data.

**API format**

```https
POST /targetConnections
```

**Request**

The following request creates a target connection for Zendesk:

```shell
curl -X POST \
    'https://platform.adobe.io/data/foundation/flowservice/targetConnections' \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {IMS_ORG}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}' \
    -H 'Content-Type: application/json' \
    -d '{
        "name": "Zendesk Target Connection",
        "description": "Zendesk Target Connection",
        "connectionSpec": {
            "id": "c604ff05-7f1a-43c0-8e18-33bf874cb11c",
            "version": "1.0"
        },
        "data": {
            "format": "json"
        },
        "params": {
            "dataSetId": "624bf42e16519d19496e3f67"
        }
    }'
```

| Property | Description |
| -------- | ----------- |
| `name` | The name of your target connection. Ensure that the name of your target connection is descriptive as you can use this to look up information on your target connection. |
| `description` | An optional value that you can include to provide more information on your target connection. |
| `connectionSpec.id` | The connection specification ID that corresponds to data lake. This fixed ID is: `c604ff05-7f1a-43c0-8e18-33bf874cb11c`. |
| `data.format` | The format of the Zendesk data that you want to bring to Platform. |
| `params.dataSetId` | The target dataset ID retrieved in a previous step. |


**Response**

A successful response returns the new target connection's unique identifier (`id`). This ID is required in later steps.

```json
{
     "id": "7c96c827-3ffd-460c-a573-e9558f72f263",
     "etag": "\"a196f685-f5e8-4c4c-bfbd-136141bb0c6d\""
}
```

### Create a mapping {#mapping}

In order for the source data to be ingested into a target dataset, it must first be mapped to the target schema that the target dataset adheres to. This is achieved by performing a POST request to [[!DNL Data Prep] API](https://www.adobe.io/experience-platform-apis/references/data-prep/) with data mappings defined within the request payload.

**API format**

```http
POST /conversion/mappingSets
```

**Request**

```shell
curl -X POST \
    'https://platform.adobe.io/data/foundation/conversion/mappingSets' \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {IMS_ORG}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}' \
    -H 'Content-Type: application/json' \
    -d '{
        "version": 0,
        "xdmSchema": "https://ns.adobe.com/{TENANT_ID}/schemas/995dabbea86d58e346ff91bd8aa741a9f36f29b1019138d4",
        "xdmVersion": "1.0",
        "id": null,
        "mappings": [
    "mappings": [
        {
            "sourceType": "ATTRIBUTE",
            "source": "results.id",
            "destination": "_extconndev.id",
            "name": "id",
            "description": "Zendesk"
        },
        {
            "sourceType": "ATTRIBUTE",
            "source": "results.external_id",
            "destination": "_extconndev.external_id"
        },
        {
            "sourceType": "ATTRIBUTE",
            "source": "results.role_type",
            "destination": "_extconndev.role_type"
        },
        {
            "sourceType": "ATTRIBUTE",
            "source": "results.custom_role_id",
            "destination": "_extconndev.custom_role_id"
        },
        {
            "sourceType": "ATTRIBUTE",
            "source": "results.default_group_id",
            "destination": "_extconndev.default_group_id"
        },
        {
            "sourceType": "ATTRIBUTE",
            "source": "results.phone",
            "destination": "_extconndev.phone"
        },
        {
            "sourceType": "ATTRIBUTE",
            "source": "results.shared_phone_number",
            "destination": "_extconndev.shared_phone_number"
        },
        {
            "sourceType": "ATTRIBUTE",
            "source": "results.verified",
            "destination": "_extconndev.verified"
        },
        {
            "sourceType": "ATTRIBUTE",
            "source": "results.alias",
            "destination": "_extconndev.alias"
        },
        {
            "sourceType": "ATTRIBUTE",
            "source": "results.last_login_at",
            "destination": "_extconndev.last_login_at"
        },
        {
            "sourceType": "ATTRIBUTE",
            "source": "results.signature",
            "destination": "_extconndev.signature"
        },        {
            "sourceType": "ATTRIBUTE",
            "source": "results.details",
            "destination": "_extconndev.details"
        },
        {
            "sourceType": "ATTRIBUTE",
            "source": "results.notes",
            "destination": "_extconndev.notes"
        },
        {
            "sourceType": "ATTRIBUTE",
            "source": "results.active",
            "destination": "_extconndev.active"
        },
        {
            "sourceType": "ATTRIBUTE",
            "source": "results.created_at",
            "destination": "_extconndev.created_at"
        },
        {
            "sourceType": "ATTRIBUTE",
            "source": "results.email",
            "destination": "_extconndev.email"
        },
        {
            "sourceType": "ATTRIBUTE",
            "source": "results.iana_time_zone",
            "destination": "_extconndev.iana_time_zone"
        },
        {
            "sourceType": "ATTRIBUTE",
            "source": "results.organization_id",
            "destination": "_extconndev.organization_id"
        },
        {
            "sourceType": "ATTRIBUTE",
            "source": "results.locale",
            "destination": "_extconndev.locale"
        },
        {
            "sourceType": "ATTRIBUTE",
            "source": "results.locale_id",
            "destination": "_extconndev.locale_id"
        },
        {
            "sourceType": "ATTRIBUTE",
            "source": "results.moderator",
            "destination": "_extconndev.moderator"
        },
        {
            "sourceType": "ATTRIBUTE",
            "source": "results.name",
            "destination": "_extconndev.name"
        },
        {
            "sourceType": "ATTRIBUTE",
            "source": "results.only_private_comments",
            "destination": "_extconndev.only_private_comments"
        },
        {
            "sourceType": "ATTRIBUTE",
            "source": "results.report_csv",
            "destination": "_extconndev.report_csv"
        },
        {
            "sourceType": "ATTRIBUTE",
            "source": "results.restricted_agent",
            "destination": "_extconndev.restricted_agent"
        },
        {
            "sourceType": "ATTRIBUTE",
            "source": "results.result_type",
            "destination": "_extconndev.result_type"
        },
        {
            "sourceType": "ATTRIBUTE",
            "source": "results.role",
            "destination": "_extconndev.role"
        },
        {
            "sourceType": "ATTRIBUTE",
            "source": "results.shared",
            "destination": "_extconndev.shared"
        },        {
            "sourceType": "ATTRIBUTE",
            "source": "results.shared_agent",
            "destination": "_extconndev.shared_agent"
        },
        {
            "sourceType": "ATTRIBUTE",
            "source": "results.time_zone",
            "destination": "_extconndev.time_zone"
        },
        {
            "sourceType": "ATTRIBUTE",
            "source": "results.two_factor_auth_enabled",
            "destination": "_extconndev.two_factor_auth_enabled"
        },
        {
            "sourceType": "ATTRIBUTE",
            "source": "results.suspended",
            "destination": "_extconndev.suspended"
        },
        {
            "sourceType": "ATTRIBUTE",
            "source": "results.updated_at",
            "destination": "_extconndev.updated_at"
        },
        {
            "sourceType": "ATTRIBUTE",
            "source": "results.url",
            "destination": "_extconndev.url"
        },
        {
            "sourceType": "ATTRIBUTE",
            "source": "results.verified",
            "destination": "_extconndev.verified"
        }
        ]
    }'
```

| Property | Description |
| --- | --- |
| `xdmSchema` | The ID of the [target XDM schema](#target-schema) generated in an earlier step. |
| `mappings.destinationXdmPath` | The destination XDM path where the source attribute is being mapped to. |
| `mappings.sourceAttribute` | The source attribute that needs to be mapped to a destination XDM path. |
| `mappings.identity` | A boolean value that designates whether the mapping set will be marked for [!DNL Identity Service]. |

**Response**

A successful response returns details of the newly created mapping including its unique identifier (`id`). This value is required in a later step to create a dataflow.

```json
{
    "id": "bf5286a9c1ad4266baca76ba3adc9366",
    "version": 0,
    "createdDate": 1597784069368,
    "modifiedDate": 1597784069368,
    "createdBy": "{CREATED_BY}",
    "modifiedBy": "{MODIFIED_BY}"
}
```

### Create a flow {#flow}

The last step towards bringing data from Zendesk to Platform is to create a dataflow. By now, you have the following required values prepared:

* [Source connection ID](#source-connection)
* [Target connection ID](#target-connection)
* [Mapping ID](#mapping)

A dataflow is responsible for scheduling and collecting data from a source. You can create a dataflow by performing a POST request while providing the previously mentioned values within the payload.

To schedule an ingestion, you must first set the start time value to epoch time in seconds. Then, you must set the frequency value to one of the five options: `once`, `minute`, `hour`, `day`, or `week`. The interval value designates the period between two consecutive ingestions however, creating a one-time ingestion does not require an interval to be set. For all other frequencies, the interval value must be set to equal or greater than `15`.


**API format**

```http
POST /flows
```

**Request**

```shell
curl -X POST \
    'https://platform.adobe.io/data/foundation/flowservice/flows' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {IMS_ORG}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}' \
    -H 'Content-Type: application/json' \
    -d '{
        "name": "Zendesk dataflow",
        "description": "Zendesk dataflow",
        "flowSpec": {
            "id": "6499120c-0b15-42dc-936e-847ea3c24d72",
            "version": "1.0"
        },
        "sourceConnectionIds": [
            "246d052c-da4a-494a-937f-a0d17b1c6cf5"
        ],
        "targetConnectionIds": [
            "7c96c827-3ffd-460c-a573-e9558f72f263"
        ],
        "transformations": [
            {
                "name": "Mapping",
                "params": {
                    "mappingId": "bf5286a9c1ad4266baca76ba3adc9366",
                    "mappingVersion": "0"
                }
            }
        ],
        "scheduleParams": {
            "startTime": "1625040887",
            "frequency": "minute",
            "interval": 15
        }
    }'
```

| Property | Description |
| --- | --- |
| `name` | The name of your dataflow. Ensure that the name of your dataflow is descriptive as you can use this to look up information on your dataflow. |
| `description` | An optional value that you can include to provide more information on your dataflow. |
| `flowSpec.id` | The flow specification ID required to create a dataflow. This fixed ID is: `6499120c-0b15-42dc-936e-847ea3c24d72`. |
| `flowSpec.version` | The corresponding version of the flow specification ID. This value defaults to `1.0`. |
| `sourceConnectionIds` | The [source connection ID](#source-connection) generated in an earlier step. |
| `targetConnectionIds` | The [target connection ID](#target-connection) generated in an earlier step. |
| `transformations` | This property contains the various transformations that are needed to be applied to your data. This property is required when bringing non-XDM-compliant data to Platform. |
| `transformations.name` | The name assigned to the transformation. |
| `transformations.params.mappingId` | The [mapping ID](#mapping) generated in an earlier step. |
| `transformations.params.mappingVersion` | The corresponding version of the mapping ID. This value defaults to `0`. |
| `scheduleParams.startTime` | This property contains information on the ingestion scheduling of the dataflow. |
| `scheduleParams.frequency` | The frequency at which the dataflow will collect data. Acceptable values include: `once`, `minute`, `hour`, `day`, or `week`. |
| `scheduleParams.interval` | The interval designates the period between two consecutive flow runs. The interval's value should be a non-zero integer. Interval is not required when frequency is set as `once` and should be greater than or equal to `15` for other frequency values. |

**Response**

A successful response returns the ID (`id`) of the newly created dataflow. You can use this ID to monitor, update, or delete your dataflow.

```json
{
     "id": "993f908f-3342-4d9c-9f3c-5aa9a189ca1a",
     "etag": "\"510bb1d4-8453-4034-b991-ab942e11dd8a\""
}
```

### Monitor your dataflow

Once your dataflow has been created, you can monitor the data that is being ingested through it to see information on flow runs, completion status, and errors.

**API format**

```http
GET /runs?property=flowId=={FLOW_ID}
```

**Request**

The following request retrieves the specifications for an existing dataflow.

```shell
curl -X GET \
    'https://platform.adobe.io/data/foundation/flowservice/runs?property=flowId==993f908f-3342-4d9c-9f3c-5aa9a189ca1a' \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {IMS_ORG}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns details regarding your flow run, including information about its creation date, source and target connections, as well as the flow run's unique identifier (`id`).

```json
{
    "items": [
        {
            "createdAt": 1596656079576,
            "updatedAt": 1596656113526,
            "createdBy": "{CREATED_BY}",
            "updatedBy": "{UPDATED_BY}",
            "createdClient": "{CREATED_CLIENT}",
            "updatedClient": "{UPDATED_CLIENT}",
            "sandboxId": "1bd86660-c5da-11e9-93d4-6d5fc3a66a8e",
            "sandboxName": "prod",
            "id": "9830305a-985f-47d0-b030-5a985fd7d004",
            "flowId": "993f908f-3342-4d9c-9f3c-5aa9a189ca1a",
            "etag": "\"510bb1d4-8453-4034-b991-ab942e11dd8a\"",
            "metrics": {
                "durationSummary": {
                    "startedAtUTC": 1596656058198,
                    "completedAtUTC": 1596656113306
                },
                "sizeSummary": {
                    "inputBytes": 24012,
                    "outputBytes": 17128
                },
                "recordSummary": {
                    "inputRecordCount": 100,
                    "outputRecordCount": 99,
                    "failedRecordCount": 1
                },
                "fileSummary": {
                    "inputFileCount": 1,
                    "outputFileCount": 1,
                    "activityRefs": [
                        "promotionActivity"
                    ]
                },
                "statusSummary": {
                    "status": "success",
                    "errors": [
                        {
                            "code": "CONNECTOR-2001-500",
                            "message": "Error occurred at promotion activity."
                        }
                    ],
                    "activityRefs": [
                        "promotionActivity"
                    ]
                }
            },
            "activities": [
                {
                    "id": "copyActivity",
                    "updatedAtUTC": 1596656095088,
                    "durationSummary": {
                        "startedAtUTC": 1596656058198,
                        "completedAtUTC": 1596656089650,
                        "extensions": {
                            "windowStart": 1596653708000,
                            "windowEnd": 1596655508000
                        }
                    },
                    "sizeSummary": {
                        "inputBytes": 24012,
                        "outputBytes": 24012
                    },
                    "recordSummary": {},
                    "fileSummary": {
                        "inputFileCount": 1,
                        "outputFileCount": 1
                    },
                    "statusSummary": {
                        "status": "success",
                        "extensions": {
                            "type": "one-time"
                        }
                    },
                    "sourceInfo": [
                        {
                            "id": "c0e18602-f9ea-44f9-a186-02f9ea64f9ac",
                            "type": "SourceConnection",
                            "reference": {
                                "type": "AdfRunId",
                                "ids": [
                                    "8a8eb0cc-e283-4605-ac70-65a5adb1baef"
                                ]
                            }
                        }
                    ]
                },
                {
                    "id": "promotionActivity",
                    "updatedAtUTC": 1596656113485,
                    "durationSummary": {
                        "startedAtUTC": 1596656095333,
                        "completedAtUTC": 1596656113306
                    },
                    "sizeSummary": {
                        "inputBytes": 24012,
                        "outputBytes": 17128
                    },
                    "recordSummary": {
                        "inputRecordCount": 100,
                        "outputRecordCount": 99,
                        "failedRecordCount": 1
                    },
                    "fileSummary": {
                        "inputFileCount": 2,
                        "outputFileCount": 1,
                        "extensions": {
                            "manifest": {
                                "fileInfo": "https://platform.adobe.io/data/foundation/export/batches/01EF01X41KJD82Y9ZX6ET54PCZ/meta?path=input_files"
                            }
                        }
                    },
                    "statusSummary": {
                        "status": "success",
                        "errors": [
                            {
                                "code": "CONNECTOR-2001-500",
                                "message": "Error occurred at promotion activity."
                            }
                        ],
                        "extensions": {
                            "manifest": {
                                "failedRecords": "https://platform.adobe.io/data/foundation/export/batches/01EF01X41KJD82Y9ZX6ET54PCZ/meta?path=row_errors",
                                "sampleErrors": "https://platform.adobe.io/data/foundation/export/batches/01EF01X41KJD82Y9ZX6ET54PCZ/meta?path=row_error_samples.json"
                            },
                            "errors": [
                                {
                                    "code": "INGEST-1212-400",
                                    "message": "Encountered 1 errors in the data. Successfully ingested 99 rows. Review the associated diagnostic files for additional details."
                                },
                                {
                                    "code": "MAPPER-3700-400",
                                    "recordCount": 1,
                                    "message": "Mapper Transform Error"
                                }
                            ]
                        }
                    },
                    "targetInfo": [
                        {
                            "id": "47166b83-01c7-4b65-966b-8301c70b6562",
                            "type": "TargetConnection",
                            "reference": {
                                "type": "Batch",
                                "ids": [
                                    "01EF01X41KJD82Y9ZX6ET54PCZ"
                                ]
                            }
                        }
                    ]
                }
            ]
        }
    ],
    "_links": {}
}
```

| Property | Description |
| -------- | ----------- |
| `items` | Contains a single payload of metadata associated with your specific flow run. |
| `metrics` | Defines characteristics of the data in the flow run. |
| `activities` | Defines how the data is transformed. |
| `durationSummary` | Defines the start and end time of the flow run. |
| `sizeSummary` | Defines the volume of the data in bytes. |
| `recordSummary` | Defines the record count of the data. |
| `fileSummary` | Defines the file count of the data. |
| `statusSummary` | Defines whether the flow run is a success or a failure. |

### Update your dataflow

To update your dataflow's run schedule, name, and description, perform a PATCH request to the [!DNL Flow Service] API while providing your flow ID, version, and the new schedule you want to use.

>[!IMPORTANT]
>
>The `If-Match` header is required when making a PATCH request. The value for this header is the unique etag of the dataflow you want to update. 

**API format**

```http
PATCH /flows/{FLOW_ID}
```

**Request**

The following request updates your flow run schedule, as well as your dataflow's name and description.

```shell
curl -X PATCH \
    'https://platform.adobe.io/data/foundation/flowservice/flows/993f908f-3342-4d9c-9f3c-5aa9a189ca1a' \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {IMS_ORG}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}'
    -H 'If-Match: "1a0037e4-0000-0200-0000-602e06f60000"' \
    -d '[
            {
                "op": "replace",
                "path": "/scheduleParams/frequency",
                "value": "day"
            },
            {
                "op": "replace",
                "path": "/name",
                "value": "New dataflow name"
            },
            {
                "op": "replace",
                "path": "/description",
                "value": "Updated dataflow description"
            }
        ]'
```

| Parameter | Description |
| --------- | ----------- |
| `op` | The operation call used to define the action needed to update the dataflow. Operations include: `add`, `replace`, and `remove`. |
| `path` | The path of the parameter to be updated. |
| `value` | The new value you want to update your parameter with. |

**Response**

A successful response returns your flow ID and an updated etag. You can verify the update by making a GET request to the [!DNL Flow Service] API, while providing your flow ID.

```json
{
    "id": "993f908f-3342-4d9c-9f3c-5aa9a189ca1a",
    "etag": "\"50014cc8-0000-0200-0000-6036eb720000\""
}
```

### Delete your dataflow

With an existing flow ID, you can delete a dataflow by performing a DELETE request to the [!DNL Flow Service] API.

**API format**

```http
DELETE /flows/{FLOW_ID}
```

| Parameter | Description |
| --------- | ----------- |
| `{FLOW_ID}` | The unique `id` value for the dataflow you want to delete. |

**Request**

```shell
curl -X DELETE \
    'https://platform.adobe.io/data/foundation/flowservice/flows/993f908f-3342-4d9c-9f3c-5aa9a189ca1a' \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {IMS_ORG}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns HTTP status 204 (No Content) and a blank body. You can confirm the deletion by attempting a lookup (GET) request to the dataflow. The API will return an HTTP 404 (Not Found) error, indicating that the dataflow has been deleted.

### Update your connection

To update your connection's name, description, and credentials, perform a PATCH request to the [!DNL Flow Service] API while providing your base connection ID, version, and the new information you want to use.

>[!IMPORTANT]
>
>The `If-Match` header is required when making a PATCH request. The value for this header is the unique version of the connection you want to update.

**API format**

```http
PATCH /connections/{BASE_CONNECTION_ID}
```

| Parameter | Description |
| --------- | ----------- |
| `{BASE_CONNECTION_ID}` | The unique `id` value for the connection you want to update. |

**Request**

The following request provides a new name and description, as well as a new set of credentials, to update your connection with.

```shell
curl -X PATCH \
    'https://platform.adobe.io/data/foundation/flowservice/connections/139f6a5f-a78b-4744-9f6a-5fa78bd74431' \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {IMS_ORG}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}'
    -H 'If-Match: 1400dd53-0000-0200-0000-5f3f23450000' \
    -d '[
        {
            "op": "replace",
            "path": "/auth/params",
            "value": {
                "username": "{USERNAME}",
                "password": "{NEW_PASSWORD}",
                "securityToken": "{NEW_SECURITY_TOKEN}"
            }
        },
        {
            "op": "replace",
            "path": "/name",
            "value": "Zendesk connection"
        },
        {
            "op": "add",
            "path": "/description",
            "value": "Zendesk connection"
        }
    ]'
```

| Parameter | Description |
| --------- | ----------- |
| `op` | The operation call used to define the action needed to update the connection. Operations include: `add`, `replace`, and `remove`. |
| `path` | The path of the parameter to be updated. |
| `value` | The new value you want to update your parameter with. |

**Response**

A successful response returns your base connection ID and an updated etag. You can verify the update by making a GET request to the [!DNL Flow Service] API, while providing your connection ID.

```json
{
    "id": "139f6a5f-a78b-4744-9f6a-5fa78bd74431",
    "etag": "\"3600e378-0000-0200-0000-5f40212f0000\""
}
```

### Delete your connection

Once you have an existing base connection ID, perform a DELETE request to the [!DNL Flow Service] API.

**API format**

```http
DELETE /connections/{CONNECTION_ID}
```

| Parameter | Description |
| --------- | ----------- |
| `{BASE_CONNECTION_ID}` | The unique `id` value for the base connection you want to delete. |

**Request**

```shell
curl -X DELETE \
    'https://platform.adobe.io/data/foundation/flowservice/connections/dd3631cd-d0ea-4fea-b631-cdd0ea6fea21' \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {IMS_ORG}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns HTTP status 204 (No Content) and a blank body.

You can confirm the deletion by attempting a lookup (GET) request to the connection.
