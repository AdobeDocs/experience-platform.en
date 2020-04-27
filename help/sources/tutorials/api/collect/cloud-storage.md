---
keywords: Experience Platform;home;popular topics
solution: Experience Platform
title: Collect cloud storage data through source connectors and APIs
topic: overview
---

# Collect cloud storage data through source connectors and APIs

This tutorial covers the steps for retrieving data from a third party cloud storage and bringing them in to Platform through source connectors and APIs.

## Getting started

This tutorial requires you to have access to a third party cloud storage through a valid base connection and information about the file you wish to bring into Platform, including the file's path and structure. If you do not have this information, see the tutorial on [exploring a third party cloud storage using the Flow Service API](../explore/cloud-storage.md) before attempting this tutorial.

This tutorial also requires you to have a working understanding of the following components of Adobe Experience Platform:

-   [Experience Data Model (XDM) System](../../../../xdm/home.md): The standardized framework by which Experience Platform organizes customer experience data.
    -   [Basics of schema composition](../../../../xdm/schema/composition.md): Learn about the basic building blocks of XDM schemas, including key principles and best practices in schema composition.
    -   [Schema Registry developer guide](../../../../xdm/api/getting-started.md): Includes important information that you need to know in order to successfully perform calls to the Schema Registry API. This includes your `{TENANT_ID}`, the concept of "containers", and the required headers for making requests (with special attention to the Accept header and its possible values).
-   [Catalog Service](../../../../catalog/home.md): Catalog is the system of record for data location and lineage within Experience Platform.
-   [Batch ingestion](../../../../ingestion/batch-ingestion/overview.md): The Batch Ingestion API allows you to ingest data into Experience Platform as batch files.
-   [Sandboxes](../../../../sandboxes/home.md): Experience Platform provides virtual sandboxes which partition a single Platform instance into separate virtual environments to help develop and evolve digital experience applications.

The following sections provide additional information that you will need to know in order to successfully connect to a cloud storage using the Flow Service API.

### Reading sample API calls

This tutorial provides example API calls to demonstrate how to format your requests. These include paths, required headers, and properly formatted request payloads. Sample JSON returned in API responses is also provided. For information on the conventions used in documentation for sample API calls, see the section on [how to read example API calls](../../../../landing/troubleshooting.md#how-do-i-format-an-api-request) in the Experience Platform troubleshooting guide.

### Gather values for required headers

In order to make calls to Platform APIs, you must first complete the [authentication tutorial](../../../../tutorials/authentication.md). Completing the authentication tutorial provides the values for each of the required headers in all Experience Platform API calls, as shown below:

-   Authorization: Bearer `{ACCESS_TOKEN}`
-   x-api-key: `{API_KEY}`
-   x-gw-ims-org-id: `{IMS_ORG}`

All resources in Experience Platform, including those belonging to Flow Service, are isolated to specific virtual sandboxes. All requests to Platform APIs require a header that specifies the name of the sandbox the operation will take place in:

-   x-sandbox-name: `{SANDBOX_NAME}`

All requests that contain a payload (POST, PUT, PATCH) require an additional media type header:

-   Content-Type: `application/json`

## Create an ad-hoc XDM class and schema

In order to bring external data into Platform through source connectors, an ad-hoc XDM class and schema must be created for the raw source data.

To create an ad-hoc class and schema, follow the steps outlined in the [ad-hoc schema tutorial](../../../../xdm/tutorials/ad-hoc.md). When creating an ad-hoc class, all fields found in the source data must be described within the request body.

Continue following the steps outlined in the developer guide until you have created an ad-hoc schema. Obtain and store the unique identifier (`$id`) of the ad-hoc schema and then proceed to the next step of this tutorial.

## Create a source connection {#source}

With an ad-hoc XDM schema created, a source connection can now be created using a POST request to the Flow Service API. A source connection consists of a base connection, a source data file, and a reference to the schema that describes the source data.

**API format**

```http
POST /sourceConnections
```

**Request**

```shell
curl -X POST \
    'http://platform.adobe.io/data/foundation/flowservice/sourceConnections' \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {IMS_ORG}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}' \
    -H 'Content-Type: application/json' \
    -d '{
        "name": "Source Connection for a cloud storage",
        "baseConnectionId": "4cb0c374-d3bb-4557-b139-5712880adc55",
        "description": "Source Connection to ingest data.csv",
        "data": {
            "format": "parquet_xdm",
            "schema": {
                "id": "https://ns.adobe.com/{TENANT_ID}/schemas/140c03de81b959db95879033945cfd4c",
                "version": "application/vnd.adobe.xed-full-notext+json; version=1"
            }
        },
        "params": {
            "path": "/some/path/data.csv",
            "recursive": "true"
        },
        "connectionSpec": {
            "id": "b3ba5556-48be-44b7-8b85-ff2b69b46dc4",
            "version": "1.0"
    }'
```

| Property | Description |
| --- | --- |
| `baseConnectionId` | The ID of a base connection for a cloud storage system. |
| `data.schema.id` | The ID of the ad-hoc XDM schema. |
| `params.path` | The path of the source file. |

**Response**

A successful response returns the unique identifier (`id`) of the newly created source connection. Store this value as it is required in later steps for creating a target connection.

```json
{
    "id": "9a603322-19d2-4de9-89c6-c98bd54eb184"
}
```

## Create a target XDM schema {#target}

In earlier steps, an ad-hoc XDM schema was created to structure the source data. In order for the source data to be used in Platform, a target schema must also be created to structure the source data according to your needs. The target schema is then used to create a Platform dataset in which the source data is contained.

If you would prefer to use the user interface in Experience Platform, the [Schema Editor tutorial](../../../../xdm/tutorials/create-schema-ui.md) provides step-by-step instructions for performing similar actions in the Schema Editor.

**API format**

```http
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
        "title": "Target schema for cloud storage source connector",
        "description": "",
        "allOf": [
            {
                "$ref": "https://ns.adobe.com/xdm/context/profile"
            },
            {
                "$ref": "https://ns.adobe.com/xdm/context/profile-person-details"
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
    "$id": "https://ns.adobe.com/{TENANT_ID}/schemas/417a33eg81a221bd10495920574gfa2d",
    "meta:altId": "{TENANT_ID}.schemas.417a33eg81a221bd10495920574gfa2d",
    "meta:resourceType": "schemas",
    "version": "1.0",
    "title": "Target schema for cloud storage source connector",
    "description": "",
    "type": "object",
    "allOf": [
        {
            "$ref": "https://ns.adobe.com/xdm/context/profile"
        },
        {
            "$ref": "https://ns.adobe.com/xdm/context/profile-person-details"
        },
        {
            "$ref": "https://ns.adobe.com/xdm/context/profile-personal-details"
        }
    ],
    "meta:xdmType": "object",
    "meta:class": "https://ns.adobe.com/xdm/context/profile",
    "meta:abstract": false,
    "meta:extensible": false,
    "meta:extends": [
        "https://ns.adobe.com/xdm/context/profile",
        "https://ns.adobe.com/xdm/context/profile-person-details",
        "https://ns.adobe.com/xdm/context/profile-personal-details"
    ],
    "meta:containerId": "tenant",
    "meta:registryMetadata": {
        "eTag": "6m/FrIlXYU2+yH6idbcmQhKSlMo="
    }
}
```

## Create a target dataset

A target dataset can be created by performing a POST request to the Catalog Service API, providing the ID of the target schema within the payload.

**API format**

```http
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
        "name": "Target Dataset",
        "schemaRef": {
            "id": "https://ns.adobe.com/{TENANT_ID}/schemas/417a33eg81a221bd10495920574gfa2d",
            "contentType": "application/vnd.adobe.xed-full-notext+json; version=1"
        }
    }'
```

| Property | Description |
| --- | --- |
| `schemaRef.id` | The ID of the target XDM schema. |

**Response**

A successful response returns an array containing the ID of the newly created dataset in the format `"@/datasets/{DATASET_ID}"`. The dataset ID is a read-only, system-generated string that is used to reference the dataset in API calls. Store the target dataset ID as it is required in later steps to create a target connection and a dataflow.

```json
[
    "@/dataSets/5c8c3c555033b814b69f947f"
]
```

## Create a dataset base connection

In order to ingest external data into Platform, an Experience Platform dataset base connection must first be acquired.

To create a dataset base connection, follow the steps outlined in the [dataset base connection tutorial](../create-dataset-base-connection.md).

Continue following the steps outlined in the developer guide until you have created a dataset base connection. Obtain and store the unique identifier (`$id`) and proceed to use it as the base connection ID in the next step to create a target connection.

## Create a target connection

You now have the unique identifiers for a dataset base connection, a target schema, and a target dataset. Using these identifiers, you can create a target connection using the Flow Service API to specify the dataset that will contain the inbound source data.

**API format**

```http
POST /targetConnections
```

**Request**

```shell
curl -X POST \
    'http://platform.adobe.io/data/foundation/flowservice/targetConnections' \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {IMS_ORG}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}' \
    -H 'Content-Type: application/json' \
    -d '{
        "baseConnectionId": "d6c3988d-14ef-4000-8398-8d14ef000021",
        "name": "Target Connection",
        "description": "Target Connection for cloud storage data",
        "data": {
            "format": "parquet_xdm",
            "schema": {
                "id": "https://ns.adobe.com/{TENANT_ID}/schemas/417a33eg81a221bd10495920574gfa2d",
                "version": "application/vnd.adobe.xed-full+json;version=1.0"
            }
        },
        "params": {
            "dataSetId": "5c8c3c555033b814b69f947f"
        },
        "connectionSpec": {
            "id": "b3ba5556-48be-44b7-8b85-ff2b69b46dc4",
            "version": "1.0"
    }'
```

| Property | Description |
| -------- | ----------- |
| `baseConnectionId` | The ID of your dataset base connection. |
| `data.schema.id` | The `$id` of the target XDM schema. |
| `params.dataSetId` | The ID of the target dataset. |
| `connectionSpec.id` | The connection specification ID for your cloud storage. |

>[!NOTE] When creating a target connection, make sure to use the Data Lake base connection value for the base connection `id` as opposed to the base connection of your third-party source connector.

**Response**

A successful response returns the new target connection's unique identifier (`id`). Store this value as it is required in later steps.

```json
{
    "id": "4ee890c7-519c-4291-bd20-d64186b62da8",
    "etag": "\"2a007aa8-0000-0200-0000-5e597aaf0000\""
}
```

## Create a mapping {#mapping}

In order for the source data to be ingested into a target dataset, it must first be mapped to the target schema the target dataset adheres to. This is achieved by performing a POST request to Conversion Service with data mappings defined within the request payload.

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
        "xdmSchema": "https://ns.adobe.com/{TENANT_ID}/schemas/417a33eg81a221bd10495920574gfa2d",
        "xdmVersion": "1.0",
        "id": null,
        "mappings": [
            {
                "destinationXdmPath": "person.name.firstName",
                "sourceAttribute": "FirstName",
                "identity": false,
                "identityGroup": null,
                "namespaceCode": null,
                "version": 0
            },
            {
                "destinationXdmPath": "person.name.lastName",
                "sourceAttribute": "LastName",
                "identity": false,
                "identityGroup": null,
                "namespaceCode": null,
                "version": 0
            },
            {
                "destinationXdmPath": "mobilePhone.number",
                "sourceAttribute": "Phone",
                "identity": false,
                "identityGroup": null,
                "namespaceCode": null,
                "version": 0
            },
            {
                "destinationXdmPath": "personalEmail.address",
                "sourceAttribute": "Email",
                "identity": false,
                "identityGroup": null,
                "namespaceCode": null,
                "version": 0
            },
            {
                "destinationXdmPath": "_id",
                "sourceAttribute": "Id",
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
    "id": "ab91c736-1f3d-4b09-8424-311d3d3e3cea",
    "version": 1,
    "createdDate": 1568047685000,
    "modifiedDate": 1568047703000,
    "inputSchemaRef": {
        "id": null,
        "contentType": null
    },
    "outputSchemaRef": {
        "id": "https://ns.adobe.com/{TENANT_ID}/schemas/417a33eg81a221bd10495920574gfa2d",
        "contentType": "1.0"
    },
    "mappings": [
        {
            "id": "7bbea5c0f0ef498aa20aa2e2e5c22290",
            "version": 0,
            "createdDate": 1568047685000,
            "modifiedDate": 1568047685000,
            "sourceType": "text/x.schema-path",
            "source": "Id",
            "destination": "_id",
            "identity": false,
            "primaryIdentity": false,
            "matchScore": 0.0,
            "sourceAttribute": "Id",
            "destinationXdmPath": "_id"
        },
        {
            "id": "def7fd7db2244f618d072e8315f59c05",
            "version": 0,
            "createdDate": 1568047685000,
            "modifiedDate": 1568047685000,
            "sourceType": "text/x.schema-path",
            "source": "FirstName",
            "destination": "person.name.firstName",
            "identity": false,
            "primaryIdentity": false,
            "matchScore": 0.0,
            "sourceAttribute": "FirstName",
            "destinationXdmPath": "person.name.firstName"
        },
        {
            "id": "e974986b28c74ed8837570f421d0b2f4",
            "version": 0,
            "createdDate": 1568047685000,
            "modifiedDate": 1568047685000,
            "sourceType": "text/x.schema-path",
            "source": "LastName",
            "destination": "person.name.lastName",
            "identity": false,
            "primaryIdentity": false,
            "matchScore": 0.0,
            "sourceAttribute": "LastName",
            "destinationXdmPath": "person.name.lastName"
        }
    ],
    "status": "PUBLISHED",
    "xdmVersion": "1.0",
    "schemaRef": {
        "id": "https://ns.adobe.com/adobe_mcdp_connectors_stg/schemas/2574494fdb01fa14c25b52d717ccb828",
        "contentType": "1.0"
    },
    "xdmSchema": "https://ns.adobe.com/adobe_mcdp_connectors_stg/schemas/2574494fdb01fa14c25b52d717ccb828"
}
```

## Retrieve dataflow specifications {#specs}

A dataflow is responsible for collecting data from sources, and bringing them into Platform. In order to create a dataflow, you must first obtain the dataflow specifications that are responsible for collecting cloud storage data.

**API format**

```http
GET /flowSpecs?property=name=="CloudStorageToAEP"
```

**Request**

```shell
curl -X GET \
    'https://platform.adobe.io/data/foundation/flowservice/flowSpecs?property=name==%22CloudStorageToAEP%22' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {IMS_ORG}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns the details of the dataflow specification that is responsible for bringing data from your cloud storage into Platform. Store the value of the `id` field as it is required in the next step to create a new dataflow.

```json
{
    "items": [
        {
            "id": "9753525b-82c7-4dce-8a9b-5ccfce2b9876",
            "name": "CloudStorageToAEP",
            "providerId": "0ed90a81-07f4-4586-8190-b40eccef1c5a",
            "version": "1.0",
            "transformationSpecs": [
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

The last step towards collecting cloud storage data is to create a dataflow. By now, you have the following required values prepared:

-   [Source connection ID](#source)
-   [Target connection ID](#target)
-   [Mapping ID](#mapping)
-   [Dataflow specification ID](#specs)

A dataflow is responsible for scheduling and collecting data from a source. You can create a dataflow by performing a POST request while providing the previously mentioned values within the payload.

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
        "name": "Dataflow between cloud storage and Platform",
        "description": "collecting data.csv",
        "flowSpec": {
            "id": "9753525b-82c7-4dce-8a9b-5ccfce2b9876",
            "version": "1.0"
        },
        "sourceConnectionIds": [
            "9a603322-19d2-4de9-89c6-c98bd54eb184"
        ],
        "targetConnectionIds": [
            "4ee890c7-519c-4291-bd20-d64186b62da8"
        ],
        "transformations": [
            {
                "name": "Copy",
                "params": {
                    "mode": "append"
                }
            },
            {
                "name": "Mapping",
                "params": {
                    "mappingId": "ab91c736-1f3d-4b09-8424-311d3d3e3cea"
                }
            }
        ],
        "scheduleParams": {
            "startTime": "1567411548",
            "frequency":"minute",
            "interval":"30"
        }
    }'
```

| Property | Description |
| --- | --- |
| `flowSpec.id` | Dataflow specification ID |
| `sourceConnectionIds` | Source connection ID |
| `targetConnectionIds` | Target connection ID |
| `transformations.params.mappingId` | Mapping ID |

**Response**

A successful response returns the ID (`id`) of the newly created dataflow.

```json
{
    "id": "8256cfb4-17e6-432c-a469-6aedafb16cd5"
}
```

## Next steps

By following this tutorial, you have created a source connector to collect data from your cloud storage on a scheduled basis. Incoming data can now be used by downstream Platform services such as Real-time Customer Profile and Data Science Workspace. See the following documents for more details:

-   [Real-time Customer Profile overview](../../../../profile/home.md)
-   [Data Science Workspace overview](../../../../data-science-workspace/home.md)

## Appendix

The following section lists the different cloud storage source connectors and their connections specifications.

### Connection specification

| Connector name | Connection spec |
| -------------- | --------------- |
| Amazon S3 (S3) | `ecadc60c-7455-4d87-84dc-2a0e293d997b` |
| AWS Kinesis (Kinesis) | `86043421-563b-46ec-8e6c-e23184711bf6` |
| Azure Blob (Blob) | `4c10e202-c428-4796-9208-5f1f5732b1cf` |
| Azure Data Lake Storage Gen2  (ADLS Gen2) | `0ed90a81-07f4-4586-8190-b40eccef1c5a` |
| Azure EventHub (EventHub) | `bf9f5905-92b7-48bf-bf20-455bc6b60a4e` | 
| Google Cloud Storage | `32e8f412-cdf7-464c-9885-78184cb113fd` |
| SFTP | `bf367b0d-3d9b-4060-b67b-0d3d9bd06094` | 