---
keywords: Experience Platform;home;popular topics;cloud storage data;streaming data;streaming
solution: Experience Platform
title: Collect Streaming Data Using Source Connectors and APIs
topic: overview
type: Tutorial
description: This tutorial covers the steps for retrieving streaming data and bringing them in to Platform using source connectors and APIs.
---

# Collect streaming data using source connectors and APIs

[!DNL Flow Service] is used to collect and centralize customer data from various disparate sources within Adobe Experience Platform. The service provides a user interface and RESTful API from which all supported sources are connectable.

This tutorial covers the steps for retrieving data from a streaming source connector and bringing them to [!DNL Experience Platform] using the [[!DNL Flow Service] API](https://www.adobe.io/apis/experienceplatform/home/api-reference.html#!acpdr/swagger-specs/flow-service.yaml).

## Getting started

This tutorial requires you to have a valid connection ID for a streaming connector. If you do not have this information, see the following tutorials on create a streaming source connection before attempting this tutorial:

- [[!DNL Amazon Kinesis]](../create/cloud-storage/kinesis.md)
- [[!DNL Azure Event Hubs]](../create/cloud-storage/eventhub.md)
- [[!DNL HTTP API]](../create/streaming/http.md)
- [[!DNL Google PubSub]](../create/cloud-storage/google-pubsub.md)

This tutorial also requires you to have a working understanding of the following components of Adobe Experience Platform:

- [[!DNL Experience Data Model (XDM) System]](../../../../xdm/home.md): The standardized framework by which Experience Platform organizes customer experience data.
    - [Basics of schema composition](../../../../xdm/schema/composition.md): Learn about the basic building blocks of XDM schemas, including key principles and best practices in schema composition.
    - [Schema Registry developer guide](../../../../xdm/api/getting-started.md): Includes important information that you need to know in order to successfully perform calls to the Schema Registry API. This includes your `{TENANT_ID}`, the concept of "containers", and the required headers for making requests (with special attention to the Accept header and its possible values).
- [[!DNL Catalog Service]](../../../../catalog/home.md): Catalog is the system of record for data location and lineage within [!DNL Experience Platform].
- [[!DNL Streaming ingestion]](../../../../ingestion/streaming-ingestion/overview.md): Streaming ingestion for [!DNL Platform] provides users a method to send data from client and server-side devices to [!DNL Experience Platform] in real time..
- [Sandboxes](../../../../sandboxes/home.md): [!DNL Experience Platform] provides virtual sandboxes which partition a single [!DNL Platform] instance into separate virtual environments to help develop and evolve digital experience applications.

The following sections provide additional information that you will need to know in order to successfully collect streaming data using the [!DNL Flow Service] API.

### Reading sample API calls

This tutorial provides example API calls to demonstrate how to format your requests. These include paths, required headers, and properly formatted request payloads. Sample JSON returned in API responses is also provided. For information on the conventions used in documentation for sample API calls, see the section on [how to read example API calls](../../../../landing/troubleshooting.md#how-do-i-format-an-api-request) in the [!DNL Experience Platform] troubleshooting guide.

### Gather values for required headers

In order to make calls to [!DNL Platform] APIs, you must first complete the [authentication tutorial](https://www.adobe.com/go/platform-api-authentication-en). Completing the authentication tutorial provides the values for each of the required headers in all [!DNL Experience Platform] API calls, as shown below:

- `Authorization: Bearer {ACCESS_TOKEN}`
- `x-api-key: {API_KEY}`
- `x-gw-ims-org-id: {IMS_ORG}`

All resources in [!DNL Experience Platform], including those belonging to [!DNL Flow Service], are isolated to specific virtual sandboxes. All requests to [!DNL Platform] APIs require a header that specifies the name of the sandbox the operation will take place in:

- `x-sandbox-name: {SANDBOX_NAME}`

All requests that contain a payload (POST, PUT, PATCH) require an additional media type header:

- `Content-Type: application/json`

## Create a source connection {#source}

You can create a source connection by making a POST request to the [!DNL Flow Service] API. A source connection consists of a connection ID, a path to the source data file, and a connection spec ID.

To create a source connection, you must also define an enum value for the data format attribute.

Use the following the enum values for file-based connectors:

| Data format | Enum value |
| ----------- | ---------- |
| Delimited | `delimited` |
| JSON | `json` |
| Parquet | `parquet` |

For all table-based connectors, set the value to `tabular`.

**API format**

```http
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
        "name": "Test source connector for streaming data",
        "providerId": "521eee4d-8cbe-4906-bb48-fb6bd4450033",
        "connectionId": "f6aa6c58-3c3d-4c59-aa6c-583c3d6c599c",
        "description": "Test source connector for streaming data",
        "data": {
            "format": "delimited"
        },
            "connectionSpec": {
            "id": "bc7b00d6-623a-4dfc-9fdb-f1240aeadaeb",
            "version": "1.0"
        }
    }'
```

| Property | Description |
| --- | --- |
| `providerId` | The provider ID of your streaming connector. |
| `connectionId` | The unique connection ID of of your streaming connector. |
| `connectionSpec.id` | The connection spec ID associated with your specific streaming connector. |

**Response**

A successful response returns the unique identifier (`id`) of the newly created source connection. This ID is required in a later step to create a dataflow.

```json
{
    "id": "2abd97c4-91bb-4c93-bd97-c491bbfc933d",
    "etag": "\"66013508-0000-0200-0000-5f6e2ae70000\""
}
```

## Create a target XDM schema {#target-schema}

In order for the source data to be used in [!DNL Platform], a target schema must be created to structure the source data according to your needs. The target schema is then used to create a [!DNL Platform] dataset in which the source data is contained. This target XDM schema also extends the XDM [!DNL Individual Profile] class.

A target XDM schema can be created by performing a POST request to the [Schema Registry API](https://www.adobe.io/apis/experienceplatform/home/api-reference.html#!acpdr/swagger-specs/schema-registry.yaml).

**API format**

```http
POST /tenant/schemas
```

**Request**

The following example request creates an XDM schema that extends the XDM [!DNL Individual Profile] class.

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
        "title": "Sample schema for a streaming connector",
        "description": "Sample schema for a streaming connector",
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

A successful response returns details of the newly created schema including its unique identifier (`$id`). This ID is required in later steps to create a target dataset, mapping, and dataflow.

```json
{
    "$id": "https://ns.adobe.com/{TENANT_ID}/schemas/e45dd983026ce0daec5185cfddd48cbc0509015d880d6186",
    "meta:altId": "_{TENANT_ID}.schemas.e45dd983026ce0daec5185cfddd48cbc0509015d880d6186",
    "meta:resourceType": "schemas",
    "version": "1.0",
    "title": "Sample schema for a streaming connector",
    "type": "object",
    "description": "Sample schema for a streaming connector",
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
        "repo:createdDate": 1604960074752,
        "repo:lastModifiedDate": 1604960074752,
        "xdm:createdClientId": "{CREATED_CLIENT_ID}",
        "xdm:lastModifiedClientId": "{MODIFIED_CLIENT_ID}",
        "xdm:createdUserId": "{CREATED_USER_ID}",
        "xdm:lastModifiedUserId": "{MODIFIED_USER_ID}",
        "eTag": "8522a151effd974429518ed90c3eaf6efc9bf6ffb6644087a85c6d4455dcd045",
        "meta:globalLibVersion": "1.16.1"
    },
    "meta:class": "https://ns.adobe.com/xdm/context/profile",
    "meta:containerId": "tenant",
    "meta:sandboxId": "{SANDBOX_ID}",
    "meta:sandboxType": "production",
    "meta:tenantNamespace": "_{TENANT_ID}"
}
```

## Create a target dataset

A target dataset can be created by performing a POST request to the [Catalog Service API](https://www.adobe.io/apis/experienceplatform/home/api-reference.html#!acpdr/swagger-specs/catalog.yaml), providing the ID of the target schema within the payload.

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
        "schemaRef": {
            "id": "https://ns.adobe.com/{TENANT_ID}/schemas/e45dd983026ce0daec5185cfddd48cbc0509015d880d6186",
            "contentType": "application/vnd.adobe.xed-full-notext+json; version=1"
        },
        "fileDescription": {
            "format": "parquet"
        },
        "tags": {
            "identity": [
            "enabled:true"
            ],
            "profile": [
            "enabled:true"
            ]
        },
        "name": "Test streaming dataset"
    }'
```

| Property | Description |
| --- | --- |
| `schemaRef.id` | The ID of the target XDM schema. |
| `schemaRef.contentType` | The version of the schema. This value must be set `application/vnd.adobe.xed-full-notext+json;version=1`, which returns the latest minor version of the schema. |

**Response**

A successful response returns an array containing the ID of the newly created dataset in the format `"@/datasets/{DATASET_ID}"`. The dataset ID is a read-only, system-generated string that is used to reference the dataset in API calls. The target dataset ID is required in later steps to create a target connection and a dataflow.

```json
[
    "@/dataSets/5f7187bac6d00f194fb937c0"
]
```

## Create a target connection {#target-connection}

A target connection represents the connection to the destination where the ingested data lands in. To create a target connection, you must provide the fixed connection spec ID associated with data lake. This connection spec ID is: `c604ff05-7f1a-43c0-8e18-33bf874cb11c`.

You now have the unique identifiers a target schema a target dataset and the connection spec ID to data lake. Using these identifiers, you can create a target connection using the [!DNL Flow Service] API to specify the dataset that will contain the inbound source data.

**API format**

```http
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
        "name": "Streaming target connection",
        "description": "Streaming target connection",
        "connectionSpec": {
            "id": "c604ff05-7f1a-43c0-8e18-33bf874cb11c",
            "version": "1.0"
        },
        "data": {
            "format": "parquet_xdm"
        },
        "params": {
        "dataSetId": "5f7187bac6d00f194fb937c0"
        }
    }'
```

| Property | Description |
| -------- | ----------- |
| `params.dataSetId` | The ID of the target dataset. |
| `connectionSpec.id` | The connection spec ID used to connect to the Data Lake. This ID is: `c604ff05-7f1a-43c0-8e18-33bf874cb11c`. |

**Response**

A successful response returns the new target connection's unique identifier (`id`). This ID is required in later steps.

```json
{
    "id": "d9300194-6a82-4163-b001-946a821163b8",
    "etag": "\"4006d3e4-0000-0200-0000-5f7189220000\""
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
        "xdmSchema": "_{TENANT_ID}.schemas.e45dd983026ce0daec5185cfddd48cbc0509015d880d6186",
        "xdmVersion": "1.0",
        "mappings": [
            {
                "destinationXdmPath": "person.name.firstName",
                "sourceAttribute": "firstName",
                "identity": false,
                "version": 0
            },
            {
                "destinationXdmPath": "person.name.lastName",
                "sourceAttribute": "lastName",
                "identity": false,
                "version": 0
            }
        ]
    }'
```

| Property | Description |
| -------- | ----------- |
| `xdmSchema` | The `$id` of the target XDM schema. |

**Response**

A successful response returns details of the newly created mapping including its unique identifier (`id`). This ID is required in a later step to create a dataflow.

```json
{
    "id": "380b032b445a46008e77585e046efe5e",
    "version": 0,
    "createdDate": 1604960750613,
    "modifiedDate": 1604960750613,
    "createdBy": "{CREATED_BY}",
    "modifiedBy": "{MODIFIED_BY}"
}
```

## Look up dataflow specifications {#specs}

A dataflow is responsible for collecting data from sources and bringing them into [!DNL Platform]. In order to create a dataflow, you must first obtain the dataflow specifications by performing a GET request to the [!DNL Flow Service] API. Dataflow specifications are responsible for collecting data from a streaming connector.
**API format**

```http
GET /flowSpecs?property=name=="Steam data with transformation"
```

**Request**

```shell
curl -X GET \
    'https://platform.adobe.io/data/foundation/flowservice/flowSpecs?property=name=="Steam data with transformation"' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {IMS_ORG}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns the details of the dataflow specification that is responsible for bringing data from your streaming connector into [!DNL Platform]. This ID is required in the next step to create a new dataflow.

```json
{
    "items": [
        {
            "id": "c1a19761-d2c7-4702-b9fa-fe91f0613e81",
            "name": "Steam data with transformation",
            "providerId": "521eee4d-8cbe-4906-bb48-fb6bd4450033",
            "version": "1.0",
            "sourceConnectionSpecIds": [
                "d27d4907-7351-47dd-bbc2-05a04365703d",
                "51ae16c2-bdad-42fd-9fce-8d5dfddaf140",
                "bc7b00d6-623a-4dfc-9fdb-f1240aeadaeb"
            ],
            "targetConnectionSpecIds": [
                "c604ff05-7f1a-43c0-8e18-33bf874cb11c"
            ],
            "transformationSpecs": [
                {
                    "name": "Mapping",
                    "spec": {
                        "$schema": "http://json-schema.org/draft-07/schema#",
                        "type": "object",
                        "description": "defines various params required for different mapping from Raw to XDM",
                        "properties": {
                            "mappingId": {
                                "type": "string"
                            }
                        },
                        "required": [
                            "mappingId"
                        ]
                    }
                }
            ],
            "attributes": {
                "uiAttributes": {
                    "apiFeatures": {
                        "deleteSupported": false,
                        "updateSupported": false,
                        "flowRunsSupported": false
                    }
                }
            },
            "permissionsInfo": {
                "view": [
                    {
                        "@type": "lowLevel",
                        "name": "StreamingSource",
                        "permissions": [
                            "read"
                        ]
                    }
                ],
                "manage": [
                    {
                        "@type": "lowLevel",
                        "name": "StreamingSource",
                        "permissions": [
                            "write"
                        ]
                    }
                ]
            }
        }
    ]
}
```

## Create a dataflow

The last step towards collecting streaming data is to create a dataflow. By now, you have the following required values prepared:

- [Source connection ID](#source)
- [Target connection ID](#target)
- [Mapping ID](#mapping)
- [Dataflow specification ID](#specs)

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
        "name": "Streaming dataflow",
        "description": "Streaming dataflow",
        "flowSpec": {
            "id": "c1a19761-d2c7-4702-b9fa-fe91f0613e81",
            "version": "1.0"
        },
        "sourceConnectionIds": [
            "2abd97c4-91bb-4c93-bd97-c491bbfc933d"
        ],
        "targetConnectionIds": [
            "723222e2-6ab9-4b0b-b222-e26ab9bb0bc2"
        ],
        "transformations": [
            {
                "name": "Mapping",
                "params": {
                    "mappingId": "380b032b445a46008e77585e046efe5e",
                    "mappingVersion": 0
                }
            }
        ]
    }'
```

| Property | Description |
| --- | --- |
| `flowSpec.id` | The [flow spec ID](#specs) retrieved in the previous step. |
| `sourceConnectionIds` | The [source connection ID](#source) retrieved in an earlier step. |
| `targetConnectionIds` | The [target connection ID](#target-connection) retrieved in an earlier step. |
| `transformations.params.mappingId` | The [mapping ID](#mapping) retrieved in an earlier step.|

**Response**

A successful response returns the ID (`id`) of the newly created dataflow.

```json
{
    "id": "1f086c23-2ea8-4d06-886c-232ea8bd061d",
    "etag": "\"8e000533-0000-0200-0000-5f3c40fd0000\""
}
```

## Next steps

By following this tutorial, you have created a dataflow to collect streaming data from your streaming connector . Incoming data can now be used by downstream [!DNL Platform] services such as [!DNL Real-time Customer Profile] and [!DNL Data Science Workspace]. See the following documents for more details:

- [Real-time Customer Profile overview](../../../../profile/home.md)
- [Data Science Workspace overview](../../../../data-science-workspace/home.md)