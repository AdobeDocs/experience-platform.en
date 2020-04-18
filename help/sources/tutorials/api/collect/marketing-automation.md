---
keywords: Experience Platform;home;popular topics
solution: Experience Platform
title: Collect marketing automation data through source connectors and APIs
topic: overview
---

# Collect marketing automation data through source connectors and APIs

This tutorial covers the steps for retrieving data from a marketing automation system and bringing them in to Platform through source connectors and APIs.

## Getting started

This tutorial requires you to have information about the file you wish to bring into Platform, including the file's path and structure. If you do not have this information, see the tutorial on [exploring a marketing automation application using the Flow Service API](../../api/create/marketing-automation/hubspot.md) before attempting this tutorial.

This tutorial also requires you to have a working understanding of the following components of Adobe Experience Platform:

*   [Experience Data Model (XDM) System](../../../../xdm/home.md): The standardized framework by which Experience Platform organizes customer experience data.
    *   [Basics of schema composition](../../../../xdm/schema/composition.md): Learn about the basic building blocks of XDM schemas, including key principles and best practices in schema composition.
    *   [Schema Registry developer guide](../../../../xdm/api/getting-started.md): Includes important information that you need to know in order to successfully perform calls to the Schema Registry API. This includes your `{TENANT_ID}`, the concept of "containers", and the required headers for making requests (with special attention to the Accept header and its possible values).
*   [Catalog Service](../../../../catalog/home.md): Catalog is the system of record for data location and lineage within Experience Platform.
*   [Batch ingestion](../../../../ingestion/batch-ingestion/overview.md): The Batch Ingestion API allows you to ingest data into Experience Platform as batch files.
*   [Sandboxes](../../../../sandboxes/home.md): Experience Platform provides virtual sandboxes which partition a single Platform instance into separate virtual environments to help develop and evolve digital experience applications.

The following sections provide additional information that you will need to know in order to successfully connect to an marketing automation system using the Flow Service API.

### Reading sample API calls

This tutorial provides example API calls to demonstrate how to format your requests. These include paths, required headers, and properly formatted request payloads. Sample JSON returned in API responses is also provided. For information on the conventions used in documentation for sample API calls, see the section on [how to read example API calls](../../../../landing/troubleshooting.md#how-do-i-format-an-api-request) in the Experience Platform troubleshooting guide.

### Gather values for required headers

In order to make calls to Platform APIs, you must first complete the [authentication tutorial](../../../../tutorials/authentication.md). Completing the authentication tutorial provides the values for each of the required headers in all Experience Platform API calls, as shown below:

*   Authorization: Bearer `{ACCESS_TOKEN}`
*   x-api-key: `{API_KEY}`
*   x-gw-ims-org-id: `{IMS_ORG}`

All resources in Experience Platform, including those belonging to Flow Service, are isolated to specific virtual sandboxes. All requests to Platform APIs require a header that specifies the name of the sandbox the operation will take place in:

*   x-sandbox-name: `{SANDBOX_NAME}`

All requests that contain a payload (POST, PUT, PATCH) require an additional media type header:

*   Content-Type: `application/json`

## Create an ad-hoc XDM class and schema

In order to bring external data into Platform through source connectors, an ad-hoc XDM class and schema must be created for the raw source data.

To create an ad-hoc class and schema, follow the steps outlined in the [ad-hoc schema tutorial](../../../../xdm/tutorials/ad-hoc.md). When creating an ad-hoc class, all fields found in the source data must be described within the request body.

Continue following the steps outlined in the developer guide until you have created an ad-hoc schema. Obtain and store the unique identifier (`$id`) of the ad-hoc schema and then proceed to the next step of this tutorial.

## Create a source connection {#source}

With an ad-hoc XDM schema created, a source connection can now be created using a POST request to the Flow Service API. A source connection consists of a base connection, a source data file, and a reference to the schema that describes the source data.

**API format**

```https
POST /sourceConnections
```

**Request**

```shell
curl -X POST \
    'https://platform.adobe.io/data/foundation/flowservice/sourceConnections' \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {IMS_ORG}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}' \
    -H 'Content-Type: application/json' \
    -d '{
        "name": "Marketing automation source connection",
        "baseConnectionId": "2fce94c1-9a93-4971-8e94-c19a93097129",
        "description": "Marketing automation source connection",
        "data": {
            "format": "parquet_xdm",
            "schema": {
                "id": "https://ns.adobe.com/{TENANT_ID}/schemas/80a6e931bd5e00190b72daafb4e1e4f7913a114808be9ac0",
                "version": "application/vnd.adobe.xed-full-notext+json; version=1"
            }
        },
        "params": {
            "path": "Hubspot.Contacts"
        },
        "connectionSpec": {
            "id": "cc6a4487-9e91-433e-a3a3-9cf6626c1806",
            "version": "1.0"
        }
    }'
```

| Property | Description |
| -------- | ----------- |
| `baseConnectionId`| The connection ID of your marketing automation application |
| `data.schema.id`| The `$id` of the ad-hoc XDM schema. |
| `params.path`| The path of the source file. |
| `connectionSpec.id`| The connection specification ID of your marketing automation application. |

**Response**

A successful response returns the unique identifier (`id`) of the newly created source connection. Store this value as it is required in later steps for creating a target connection.

```json
{
    "id": "c315c0ae-a339-44c4-95c0-aea33964c420",
    "etag": "\"67010af9-0000-0200-0000-5e9795c40000\""
}
```

## Create a target XDM schema {#target}

In earlier steps, an ad-hoc XDM schema was created to structure the source data. In order for the source data to be used in Platform, a target schema must also be created to structure the source data according to your needs. The target schema is then used to create a Platform dataset in which the source data is contained.

A target XDM schema can be created by performing a POST request to the [Schema Registry API](https://www.adobe.io/apis/experienceplatform/home/api-reference.html#!acpdr/swagger-specs/schema-registry.yaml). If you would prefer to use the user interface in Experience Platform, the [Schema Editor tutorial](../../../../xdm/tutorials/create-schema-ui.md) provides step-by-step instructions for performing similar actions in the Schema Editor.

**API format**

```https
POST /schemaregistry/tenant/schemas
```

**Request**

The following example request creates an XDM schema that extends the XDM Individual Profile class.

```shell
curl -X POST \
    'https://platform.adobe.io/data/foundation/schemaregistry/tenant/schemas' \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {IMS_ORG}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}' \
    -H 'Content-Type: application/json' \
    -d '{
        "type": "object",
        "title": "Target schema for marketing automation",
        "description": "Target schema for marketing automation",
        "allOf": [
            {
                "$ref": "https://ns.adobe.com/xdm/context/profile"
            },
            {
                "$ref": "https://ns.adobe.com/xdm/context/profile-person-details"
            },
            {
                "$ref": "https://ns.adobe.com/xdm/context/profile-personal-details"
            },
                    {
                "$ref": "https://ns.adobe.com/xdm/context/profile-personal-details"
            }
        ],
        "meta:containerId": "tenant",
        "meta:resourceType": "schemas",
        "meta:xdmType": "object",
        "meta:class": "https://ns.adobe.com/xdm/context/profile"
}'
```

**Response**

A successful response returns details of the newly created schema including its unique identifier (`$id`). Store this ID as it is required in later steps to create a target dataset, mapping, and dataflow.

```json
{
    "$id": "https://ns.adobe.com/{TENANT_ID}/schemas/63f2c82fcdcb606c536a62d7716e34acbf63cd4582a1c16b",
    "meta:altId": "_{TENANT_ID}.schemas.63f2c82fcdcb606c536a62d7716e34acbf63cd4582a1c16b",
    "meta:resourceType": "schemas",
    "version": "1.0",
    "title": "Target schema for marketing automation",
    "type": "object",
    "description": "Target schema for marketing automation",
    "allOf": [
        {
            "$ref": "https://ns.adobe.com/xdm/context/profile",
            "type": "object",
            "meta:xdmType": "object"
        },
        {
            "$ref": "https://ns.adobe.com/xdm/context/profile-person-details",
            "type": "object",
            "meta:xdmType": "object"
        },
        {
            "$ref": "https://ns.adobe.com/xdm/context/profile-personal-details",
            "type": "object",
            "meta:xdmType": "object"
        },
        {
            "$ref": "https://ns.adobe.com/xdm/context/profile-personal-details",
            "type": "object",
            "meta:xdmType": "object"
        }
    ],
    "refs": [
        "https://ns.adobe.com/xdm/context/profile-person-details",
        "https://ns.adobe.com/xdm/context/profile-personal-details",
        "https://ns.adobe.com/xdm/context/profile"
    ],
    "imsOrg": "{IMS_ORG}",
    "meta:extensible": false,
    "meta:abstract": false,
    "meta:extends": [
        "https://ns.adobe.com/xdm/context/profile-person-details",
        "https://ns.adobe.com/xdm/context/profile-personal-details",
        "https://ns.adobe.com/xdm/common/auditable",
        "https://ns.adobe.com/xdm/data/record",
        "https://ns.adobe.com/xdm/context/profile"
    ],
    "meta:xdmType": "object",
    "meta:registryMetadata": {
        "repo:createdDate": 1586992941717,
        "repo:lastModifiedDate": 1586992941717,
        "xdm:createdClientId": "{CREATED_CLIENT_ID}",
        "xdm:lastModifiedClientId": "{CREATED_CLIENT_ID}",
        "xdm:createdUserId": "{CREATED_USER_ID}",
        "xdm:lastModifiedUserId": "{CREATED_USER_ID}",
        "eTag": "d11e63a422b84a843cdd58d0ba8a16ce0a2068eda49ab380c1605ddd10efdf23",
        "meta:globalLibVersion": "1.9.2"
    },
    "meta:class": "https://ns.adobe.com/xdm/context/profile",
    "meta:containerId": "tenant",
    "meta:tenantNamespace": "_{TENANT_ID}"
}
```

## Create a target dataset

A target dataset can be created by performing a POST request to the [Catalog Service API](https://www.adobe.io/apis/experienceplatform/home/api-reference.html#!acpdr/swagger-specs/catalog.yaml), providing the ID of the target schema within the payload.

**API format**

```https
POST /catalog/dataSets
```

**Request**

```shell
curl -X POST \
    'https://platform.adobe.io/data/foundation/catalog/dataSets?requestDataSource=true' \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {IMS_ORG}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}' \
    -H 'Content-Type: application/json' \
    -d '{
        "name": "Target dataset for marketing automation",
        "schemaRef": {
            "id": "https://ns.adobe.com/{TENANT_ID}/schemas/14d89c5bb88e2ff488f23db896be469e7e30bb166bda8722",
            "contentType": "application/vnd.adobe.xed-full-notext+json; version=1"
        }
    }'
```

| Property | Description |
| -------- | ----------- |
| `schemaRef.id` | The `$id` of the target XDM schema. |

**Response**

A successful response returns an array containing the ID of the newly created dataset in the format `"@/datasets/{DATASET_ID}"`. The dataset ID is a read-only, system-generated string that is used to reference the dataset in API calls. Store the target dataset ID as it is required in later steps to create a target connection and a dataflow.

```json
[
    "@/dataSets/5e9797ac6d771118ad8356db"
]
```

## Create a dataset base connection

In order to create a target connection and ingest external data into Platform, a dataset base connection must first be acquired.

To create a dataset base connection, follow the steps outlined in the [dataset base connection tutorial](../create-dataset-base-connection.md).

Continue following the steps outlined in the developer guide until you have created a dataset base connection. Obtain and store the unique identifier (`$id`) of the base connection and then proceed to the next step of this tutorial.

## Create a target connection

You now have the unique identifiers for a dataset base connection, a target schema, and a target dataset. Using these identifiers, you can create a target connection using the Flow Service API to specify the dataset that will contain the inbound source data.

**API format**

```https
POST /targetConnections
```

**Request**

```shell
curl -X POST \
    'https://platform.adobe.io/data/foundation/flowservice/targetConnections' \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {IMS_ORG}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}' \
    -H 'Content-Type: application/json' \
    -d '{
        "baseConnectionId": "44b1c1e43-a5ee-4d86-9c1e-43a5eebd8601",
        "name": "Target Connection for marketing automation",
        "description": "Target Connection for marketing automation",
        "data": {
            "format": "parquet_xdm",
            "schema": {
                "id": "https://ns.adobe.com/{TENANT_ID}/schemas/63f2c82fcdcb606c536a62d7716e34acbf63cd4582a1c16b",
                "version": "application/vnd.adobe.xed-full+json;version=1.0"
            }
        },
        "params": {
            "dataSetId": "5e9797ac6d771118ad8356db
        },
            "connectionSpec": {
            "id": "cc6a4487-9e91-433e-a3a3-9cf6626c1806",
            "version": "1.0"
        }
    }'
```

| Property | Description |
| -------- | ----------- |
| `baseConnectionId` | The ID of your dataset base connection. |
| `data.schema.id` | The `$id` of the target XDM schema. |
| `params.dataSetId` | The ID of the target dataset. |
| `connectionSpec.id` | The connection specification ID for your marketing automation. |

>[!IMPORTANT] When creating a target connection, make sure to use the dataset base connection value for the base connection `id` as opposed to the connection ID of your third-party source connector.

```json
{
    "id": "fd82157f-0eea-4c81-8215-7f0eeaec8139",
    "etag": "\"5301d5ac-0000-0200-0000-5e97981a0000\""
}
```

## Create a mapping {#mapping}

In order for the source data to be ingested into a target dataset, it must first be mapped to the target schema the target dataset adheres to. This is achieved by performing a POST request to Conversion Service API with data mappings defined within the request payload.

**API format**

```https
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
        "xdmSchema": "https://ns.adobe.com/adobe_mcdp_connectors_stg/schemas/63f2c82fcdcb606c536a62d7716e34acbf63cd4582a1c16b",
        "xdmVersion": "1.0",
        "id": null,
        "mappings": [
            {
                "destinationXdmPath": "person.name.firstName",
                "sourceAttribute": "Properties_Firstname_Value",
                "identity": false,
                "identityGroup": null,
                "namespaceCode": null,
                "version": 0
            },
            {
                "destinationXdmPath": "person.name.lastName",
                "sourceAttribute": "Properties_Lastname_Value",
                "identity": false,
                "identityGroup": null,
                "namespaceCode": null,
                "version": 0
            },
            {
                "destinationXdmPath": "repositoryCreatedBy",
                "sourceAttribute": "Added_At",
                "identity": false,
                "identityGroup": null,
                "namespaceCode": null,
                "version": 0
            },
            {
                "destinationXdmPath": "_id",
                "sourceAttribute": "Portal_Id",
                "identity": false,
                "identityGroup": null,
                "namespaceCode": null,
                "version": 0
            }
        ]
    }'
```

| Property | Description |
| --- | --- |
| `xdmSchema` | The ID of the target XDM schema. |

**Response**

A successful response returns details of the newly created mapping including its unique identifier (`id`). Store this value as it is required in later step for creating a dataflow.

```json
{
    "id": "280a3cc950894945bf815c5fc60f3803",
    "version": 0,
    "createdDate": 1586993661034,
    "modifiedDate": 1586993661034,
    "createdBy": "28AF22BA5DE6B0B40A494036@AdobeID",
    "modifiedBy": "28AF22BA5DE6B0B40A494036@AdobeID"
}
```

## Look up dataflow specifications {#specs}

A dataflow is responsible for collecting data from sources, and bringing them into Platform. In order to create a dataflow, you must first obtain the dataflow specifications that are responsible for collecting marketing automation data.

**API format**

```https
GET /flowSpecs?property=name=="CRMToAEP"
```

**Request**

```shell
curl -X GET \
    'https://platform.adobe.io/data/foundation/flowservice/flowSpecs?property=name==%22CRMToAEP%22' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {IMS_ORG}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns the details of the dataflow specification that is responsible for bringing data from your marketing automation system into Platform. Store the value of the `id` field as it is required in the next step to create a new dataflow.

```json
{
    "items": [
        {
            "id": "14518937-270c-4525-bdec-c2ba7cce3860",
            "name": "CRMToAEP",
            "providerId": "0ed90a81-07f4-4586-8190-b40eccef1c5a",
            "version": "1.0",
            "transformationSpecs": [
                {
                    "name": "Copy",
                    "spec": {
                        "$schema": "http://json-schema.org/draft-07/schema#",
                        "type": "object",
                        "properties": {
                            "deltaColumn": {
                                "type": "object",
                                "properties": {
                                    "name": {
                                        "type": "string"
                                    },
                                    "dateFormat": {
                                        "type": "string"
                                    },
                                    "timezone": {
                                        "type": "string"
                                    }
                                },
                                "required": [
                                    "name"
                                ]
                            }
                        },
                        "required": [
                            "deltaColumn"
                        ]
                    }
                },
                {
                    "name": "Mapping",
                    "spec": {
                        "$schema": "http://json-schema.org/draft-07/schema#",
                        "type": "object",
                        "description": "defines various params required for different mapping from source to target",
                        "properties": {
                            "mappingId": {
                                "type": "string"
                            },
                            "mappingVersion": {
                                "type": "string"
                            }
                        }
                    }
                }
            ],
            "scheduleSpec": {
                "name": "PeriodicSchedule",
                "type": "Periodic",
                "spec": {
                    "$schema": "http://json-schema.org/draft-07/schema#",
                    "type": "object",
                    "properties": {
                        "startTime": {
                            "description": "epoch time",
                            "type": "integer"
                        },
                        "endTime": {
                            "description": "epoch time",
                            "type": "integer"
                        },
                        "interval": {
                            "type": "integer"
                        },
                        "frequency": {
                            "type": "string",
                            "enum": [
                                "minute",
                                "hour",
                                "day",
                                "week"
                            ]
                        },
                        "backfill": {
                            "type": "boolean",
                            "default": true
                        }
                    },
                    "required": [
                        "startTime",
                        "frequency",
                        "interval"
                    ],
                    "if": {
                        "properties": {
                            "frequency": {
                                "const": "minute"
                            }
                        }
                    },
                    "then": {
                        "properties": {
                            "interval": {
                                "minimum": 15
                            }
                        }
                    },
                    "else": {
                        "properties": {
                            "interval": {
                                "minimum": 1
                            }
                        }
                    }
                }
            }
        }
    ]
}
```

## Create a dataflow

The last step towards collecting marketing automation data is to create a dataflow. By now, you have the following required values prepared:

*   [Source connection ID](#source)
*   [Target connection ID](#target)
*   [Mapping ID](#mapping)
*   [Dataflow specification ID](#specs)

A dataflow is responsible for scheduling and collecting data from a source. You can create a dataflow by performing a POST request while providing the previously mentioned values within the payload.

**API format**

```https
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
        "name": "Dataflow for marketing automation",
        "description": "Dataflow for marketing automation",
        "flowSpec": {
            "id": "14518937-270c-4525-bdec-c2ba7cce3860",
            "version": "1.0"
        },
        "sourceConnectionIds": [
            "c315c0ae-a339-44c4-95c0-aea33964c420"
        ],
        "targetConnectionIds": [
            "fd82157f-0eea-4c81-8215-7f0eeaec8139"
        ],
        "transformations": [
            {
                "name": "Mapping",
                "params": {
                    "mappingId": "280a3cc950894945bf815c5fc60f3803",
                    "mappingVersion": "0"
                }
            }
        ],
        "scheduleParams": {
            "startTime": "<START TIME>",
            "frequency":"minute",
            "interval":"30"
        }
    }'
```

| Property | Description |
| --- | --- |
| `flowSpec.id` | Dataflow specification ID. |
| `sourceConnectionIds` | Source connection ID. |
| `targetConnectionIds` | Target connection ID. |
| `transformations.params.mappingId` | Mapping ID. |

**Response**

A successful response returns the ID (`id`) of the newly created dataflow.

```json
{
    "id": "8256cfb4-17e6-432c-a469-6aedafb16cd5"
}
```

## Next steps

By following this tutorial, you have created a source connector to collect data from a marketing automation system on a scheduled basis. Incoming data can now be used by downstream Platform services such as Real-time Customer Profile and Data Science Workspace. See the following documents for more details:

*   [Real-time Customer Profile overview](../../../../profile/home.md)
*   [Data Science Workspace overview](../../../../data-science-workspace/home.md)