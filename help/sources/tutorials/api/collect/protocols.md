---
keywords: Experience Platform;home;popular topics
solution: Experience Platform
title: Collect protocol data through source connectors and APIs
topic: overview
---

# Collect protocol data through source connectors and APIs

[!DNL Flow Service] is used to collect and centralize customer data from various disparate sources within Adobe Experience Platform. The service provides a user interface and RESTful API from which all supported sources are connectable.

This tutorial covers the steps for retrieving data from a protocols application and ingesting it into [!DNL Platform] through source connectors and APIs.

## Getting started

This tutorial requires you to have access to a protocol system through a valid base connection and information about the file you wish to bring into [!DNL Platform], including the table's path and structure. If you do not have this information, see the tutorial on [exploring protocol systems using the Flow Service API](../explore/protocols.md) before attempting this tutorial.

*   [Experience Data Model (XDM) System](../../../../xdm/home.md): The standardized framework by which [!DNL Experience Platform] organizes customer experience data.
    *   [Basics of schema composition](../../../../xdm/schema/composition.md): Learn about the basic building blocks of XDM schemas, including key principles and best practices in schema composition.
    *   [Schema Registry developer guide](../../../../xdm/api/getting-started.md): Includes important information that you need to know in order to successfully perform calls to the Schema Registry API. This includes your `{TENANT_ID}`, the concept of "containers", and the required headers for making requests (with special attention to the Accept header and its possible values).
*   [Catalog Service](../../../../catalog/home.md): Catalog is the system of record for data location and lineage within [!DNL Experience Platform].
*   [Batch ingestion](../../../../ingestion/batch-ingestion/overview.md): The Batch Ingestion API allows you to ingest data into [!DNL Experience Platform] as batch files.
*   [Sandboxes](../../../../sandboxes/home.md): [!DNL Experience Platform] provides virtual sandboxes which partition a single [!DNL Platform] instance into separate virtual environments to help develop and evolve digital experience applications.

The following sections provide additional information that you will need to know in order to successfully connect to a protocols application using the [!DNL Flow Service] API.

### Reading sample API calls

This tutorial provides example API calls to demonstrate how to format your requests. These include paths, required headers, and properly formatted request payloads. Sample JSON returned in API responses is also provided. For information on the conventions used in documentation for sample API calls, see the section on [how to read example API calls](../../../../landing/troubleshooting.md#how-do-i-format-an-api-request) in the [!DNL Experience Platform] troubleshooting guide.

### Gather values for required headers

In order to make calls to [!DNL Platform] APIs, you must first complete the [authentication tutorial](../../../../tutorials/authentication.md). Completing the authentication tutorial provides the values for each of the required headers in all [!DNL Experience Platform] API calls, as shown below:

-   `Authorization: Bearer {ACCESS_TOKEN}`
-   `x-api-key: {API_KEY}`
-   `x-gw-ims-org-id: {IMS_ORG}`

All resources in [!DNL Experience Platform], including those belonging to [!DNL Flow Service], are isolated to specific virtual sandboxes. All requests to [!DNL Platform] APIs require a header that specifies the name of the sandbox the operation will take place in:

-   `x-sandbox-name: {SANDBOX_NAME}`

All requests that contain a payload (POST, PUT, PATCH) require an additional media type header:

-   `Content-Type: application/json`

## Create a source connection {#source}

You can create a source connection by making a POST request to the [!DNL Flow Service] API. A source connection consists of a connection ID, a path to the source data file, and a connection spec ID.

To create a source connection, you must also define an enum value for the data format attribute.

Use the following the enum values for **file-based connectors**:

| Data.format | Enum value |
| ----------- | ---------- |
| Delimited files | `delimited` |
| JSON files | `json` |
| Parquet files | `parquet` |

For all **table-based connectors** use the enum value: `tabular`.

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
        "name": "Protocols source connection",
        "baseConnectionId": "a5c6b647-e784-4b58-86b6-47e784ab580b",
        "description": "Protocols source connection to ingest Orders",
        "data": {
            "format": "tabular",
        },
        "params": {
            "path": "Orders"
        },
        "connectionSpec": {
            "id": "8e6b41a8-d998-4545-ad7d-c6a9fff406c3",
            "version": "1.0"
        }
    }'
```

| Property | Description |
| -------- | ----------- |
| `baseConnectionId`| The connection ID of your protocols application |
| `params.path`| The path of the source file. |
| `connectionSpec.id`| The connection specification ID of your protocols application. |

**Response**

A successful response returns the unique identifier (`id`) of the newly created source connection. This ID is required in later steps to create a target connection.

```json
{
    "id": "0a768941-ddfb-499d-b689-41ddfbf99db0",
    "etag": "\"8f00753e-0000-0200-0000-5e8a547d0000\""
}
```

## Create a target XDM schema {#target-schema}

In earlier steps, an ad-hoc XDM schema was created to structure the source data. In order for the source data to be used in [!DNL Platform], a target schema must also be created to structure the source data according to your needs. The target schema is then used to create a [!DNL Platform] dataset in which the source data is contained. This target XDM schema also extends the XDM [!DNL Individual Profile] class.

A target XDM schema can be created by performing a POST request to the [Schema Registry API](https://www.adobe.io/apis/experienceplatform/home/api-reference.html#!acpdr/swagger-specs/schema-registry.yaml). If you would prefer to use the user interface in [!DNL Experience Platform], the [Schema Editor tutorial](../../../../xdm/tutorials/create-schema-ui.md) provides step-by-step instructions for performing similar actions in the Schema Editor.
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
        "title": "Target schema for protocols",
        "description": "Target schema for protocols",
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

A successful response returns details of the newly created schema including its unique identifier (`$id`). This ID is required in later steps to create a target dataset, mapping, and dataflow.

```json
{
    "$id": "https://ns.adobe.com/{TENANT_ID}/schemas/e669d7aba5a02f294fafb7b269af25f7cd4a66ce59193545",
    "meta:altId": "_{TENANT_ID}.schemas.e669d7aba5a02f294fafb7b269af25f7cd4a66ce59193545",
    "meta:resourceType": "schemas",
    "version": "1.0",
    "title": "Protocols target schema",
    "type": "object",
    "description": "Protocols target schema",
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
    "imsOrg": "7DC732555AECDB4C0A494036@AdobeOrg",
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
        "repo:createdDate": 1586124086523,
        "repo:lastModifiedDate": 1586124086523,
        "xdm:createdClientId": "{CREATED_CLIENT_ID}",
        "xdm:lastModifiedClientId": "{LAST_MODIFIED_CLIENT_ID}",
        "xdm:createdUserId": "{CREATED_USER_ID}",
        "xdm:lastModifiedUserId": "{LAST_MODIFIED_USER_ID}",
        "eTag": "8b281c23af03ff6a8b7d8061c62d73f7bcbfa1fc7dbabebfb4d8ca77130576ca"
    },
    "meta:class": "https://ns.adobe.com/xdm/context/profile",
    "meta:containerId": "tenant",
    "meta:tenantNamespace": "_{TENANT_ID}"
}
```

## Create a target dataset

A target dataset can be created by performing a POST request to the [Catalog Service API](https://www.adobe.io/apis/experienceplatform/home/api-reference.html#!acpdr/swagger-specs/catalog.yaml), providing the ID of the target schema within the payload.

**API format**

```http
POST /dataSets
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
        "name": "Protocols target dataset",
        "schemaRef": {
            "id": "https://ns.adobe.com/{TENANT_ID}/schemas/e669d7aba5a02f294fafb7b269af25f7cd4a66ce59193545",
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
    "@/dataSets/5e8a55ca53662c18af37a83a"
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
        "name": "Target Connection for protocols",
        "description": "Target Connection for protocols",
        "data": {
            "format": "parquet_xdm",
            "schema": {
                "id": "https://ns.adobe.com/{TENANT_ID}/schemas/e669d7aba5a02f294fafb7b269af25f7cd4a66ce59193545",
            }
        },
        "params": {
            "dataSetId": "5e8a55ca53662c18af37a83a"
        },
            "connectionSpec": {
            "id": "8e6b41a8-d998-4545-ad7d-c6a9fff406c3",
            "version": "1.0"
        }
    }'
```

| Property | Description |
| -------- | ----------- |
| `data.schema.id` | The `$id` of the target XDM schema. |
| `params.dataSetId` | The ID of the target dataset. |
| `connectionSpec.id` | The fixed connection spec ID to data lake. This ID is: `c604ff05-7f1a-43c0-8e18-33bf874cb11c`. |

**Response**

A successful response returns the new target connection's unique identifier (`id`). This value is required in a later step to create a dataflow.

```json
{
    "id": "576d5ecf-f114-4587-ad5e-cff1144587f4",
    "etag": "\"13013506-0000-0200-0000-5e8a56d80000\""
}
```

## Create a mapping {#mapping}

In order for the source data to be ingested into a target dataset, it must first be mapped to the target schema the target dataset adheres to. This is achieved by performing a POST request to the [Conversion Service API](https://www.adobe.io/apis/experienceplatform/home/api-reference.html#!acpdr/swagger-specs/mapping-service-api.yaml) with data mappings defined within the request payload.

**API format**

```http
POST /mappingSets
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
        "xdmSchema": "https://ns.adobe.com/{TENANT_ID}/schemas/e669d7aba5a02f294fafb7b269af25f7cd4a66ce59193545",
        "xdmVersion": "1.0",
        "id": null,
        "mappings": [
            {
                "destinationXdmPath": "_id",
                "sourceAttribute": "OrderID",
                "identity": false,
                "identityGroup": null,
                "namespaceCode": null,
                "version": 0
            },
            {
                "destinationXdmPath": "_id",
                "sourceAttribute": "CustomerID",
                "identity": false,
                "identityGroup": null,
                "namespaceCode": null,
                "version": 0
            },
            {
                "destinationXdmPath": "_id",
                "sourceAttribute": "EmployeeID",
                "identity": false,
                "identityGroup": null,
                "namespaceCode": null,
                "version": 0
            },
            {
                "destinationXdmPath": "createdByBatchID",
                "sourceAttribute": "OrderDate",
                "identity": false,
                "identityGroup": null,
                "namespaceCode": null,
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
    "id": "37409d3017e24a3eb4a2dc21020f7a5b",
    "version": 0,
    "createdDate": 1586124873209,
    "modifiedDate": 1586124873209,
    "createdBy": "28AF22BA5DE6B0B40A494036@AdobeID",
    "modifiedBy": "28AF22BA5DE6B0B40A494036@AdobeID"
}
```

## Look up dataflow specifications {#specs}

A dataflow is responsible for collecting data from sources and bringing them into [!DNL Platform]. In order to create a dataflow, you must first obtain the dataflow specifications by performing a GET request to the [!DNL Flow Service] API. Dataflow specifications are responsible for collecting data from an external protocols application.

**API format**

```http
GET /flowSpecs?property=name=="CRMToAEP"
```

**Request**

```shell
curl -X GET \
    'https://platform.adobe.io/data/foundation/flowservice/flowSpecs?property=name=="CRMToAEP"' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {IMS_ORG}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns the details of the dataflow specification that is responsible for bringing data from your protocols application into [!DNL Platform]. This ID is required in the next step to create a new dataflow.

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

The last step towards collecting data is to create a dataflow. At this point, you should have the following required values prepared:

*   [Source connection ID](#source)
*   [Target connection ID](#target)
*   [Mapping ID](#mapping)
*   [Dataflow specification ID](#specs)

A dataflow is responsible for scheduling and collecting data from a source. You can create a dataflow by performing a POST request while providing the previously mentioned values within the payload.

To schedule an ingestion, you must first set the start time value to epoch time in seconds. Then, you must set the frequency value to one of the five options: `once`, `minute`, `hour`, `day`, or `week`. The interval value designates the period between two consecutive ingestions and creating a one-time ingestion does not require an interval to be set. For all other frequencies, the interval value must be set to equal or greater than `15`.


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
        "name": "Creating a dataflow for a protocols source",
        "description": "Creating a dataflow for a protocols source",
        "flowSpec": {
            "id": "14518937-270c-4525-bdec-c2ba7cce3860",
            "version": "1.0"
        },
        "sourceConnectionIds": [
            "0a768941-ddfb-499d-b689-41ddfbf99db0"
        ],
        "targetConnectionIds": [
            "576d5ecf-f114-4587-ad5e-cff1144587f4"
        ],
        "transformations": [
            {
                "name": "Copy",
                "params": {
                    "deltaColumn": {
                        "name": "updatedAt",
                        "dateFormat": "YYYY-MM-DD",
                        "timezone": "UTC"
                    }
                }
            },
            {
                "name": "Mapping",
                "params": {
                    "mappingId": "7409d3017e24a3eb4a2dc21020f7a5b",
                    "mappingVersion": "0"
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
| -------- | ----------- |
| `flowSpec.id` | The [flow spec ID](#specs) retrieved in the previous step. |
| `sourceConnectionIds` | The [source connection ID](#source) retrieved in an earlier step. |
| `targetConnectionIds` | The [target connection ID](#target-connection) retrieved in an earlier step. |
| `transformations.params.mappingId` | The [mapping ID](#mapping) retrieved in an earlier step.|
| `transformations.params.deltaColum` | The designated column used to differentiate between new and existing data. Incremental data will be ingested based on the timestamp of selected column. The supported format for `deltaColumn` when using Generic OData is `yyyy-MM-ddTHH:mm:ssZ`. |
| `transformations.params.mappingId`| The mapping ID associated with your database. |
| `scheduleParams.startTime` | The start time for the dataflow in epoch time. |
| `scheduleParams.frequency` | The frequency at which the dataflow will collect data. Acceptable values include: `once`, `minute`, `hour`, `day`, or `week`. |
| `scheduleParams.interval` | The interval designates the period between two consecutive flow runs. The interval's value should be a non-zero integer. Interval is not required when frequency is set as `once` and should be greater than or equal to `15` for other frequency values. |

**Response**

A successful response returns the ID `id` of the newly created dataflow.

```json
{
    "id": "8256cfb4-17e6-432c-a469-6aedafb16cd5",
    "etag": "\"04004fe9-0000-0200-0000-5ebc4c8b0000\""
}
```

## Monitor your dataflow

Once your dataflow has been created, you can monitor the data that is being ingested through it to see information on flow runs, completion status, and errors. For more information on how to monitor dataflows, see the tutorial on [monitoring dataflows in the API ](../monitor.md)


## Next steps

By following this tutorial, you have created a source connector to collect data from a protocols application on a scheduled basis. Incoming data can now be used by downstream [!DNL Platform] services such as [!DNL Real-time Customer Profile] and [!DNL Data Science Workspace]. See the following documents for more details:

*   [Real-time Customer Profile overview](../../../../profile/home.md)
*   [Data Science Workspace overview](../../../../data-science-workspace/home.md)