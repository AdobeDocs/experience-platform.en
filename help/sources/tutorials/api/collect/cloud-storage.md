---
keywords: Experience Platform;home;popular topics;cloud storage data
solution: Experience Platform
title: Create a Dataflow for Cloud Storage Sources Using the Flow Service API
topic-legacy: overview
type: Tutorial
description: This tutorial covers the steps for retrieving data from a third-party cloud storage and bringing them in to Platform using source connectors and APIs.
exl-id: 95373c25-24f6-4905-ae6c-5000bf493e6f
---
# Create a dataflow for cloud storage sources using the [!DNL Flow Service] API

This tutorial covers the steps for retrieving data from a cloud storage source and bringing them to Platform using [[!DNL Flow Service] API](https://www.adobe.io/experience-platform-apis/references/flow-service/).

>[!NOTE]
>
>In order to create a dataflow, you must already have a valid base connection ID with a cloud storage source. If you do not have this ID, then see the [sources overview](../../../home.md#cloud-storage) for a list of cloud storage sources that you can create a base connection with.

## Getting started

This tutorial requires you to have a working understanding of the following components of Adobe Experience Platform:

- [[!DNL Experience Data Model (XDM) System]](../../../../xdm/home.md): The standardized framework by which Experience Platform organizes customer experience data.
  - [Basics of schema composition](../../../../xdm/schema/composition.md): Learn about the basic building blocks of XDM schemas, including key principles and best practices in schema composition.
  - [Schema Registry developer guide](../../../../xdm/api/getting-started.md): Includes important information that you need to know in order to successfully perform calls to the Schema Registry API. This includes your `{TENANT_ID}`, the concept of "containers", and the required headers for making requests (with special attention to the Accept header and its possible values).
- [[!DNL Catalog Service]](../../../../catalog/home.md): Catalog is the system of record for data location and lineage within Experience Platform.
- [[!DNL Batch ingestion]](../../../../ingestion/batch-ingestion/overview.md): The Batch Ingestion API allows you to ingest data into Experience Platform as batch files.
- [Sandboxes](../../../../sandboxes/home.md): Experience Platform provides virtual sandboxes which partition a single Platform instance into separate virtual environments to help develop and evolve digital experience applications.

### Using Platform APIs

For information on how to successfully make calls to Platform APIs, see the guide on [getting started with Platform APIs](../../../../landing/api-guide.md).

## Create a source connection {#source}

You can create a source connection by making a POST request to the `sourceConnections` endpoint of [!DNL Flow Service] API while providing your base connection ID, the path to the source file that you want to ingest, and your source's corresponding connection specification ID.

When creating a source connection, you must also define an enum value for the data format attribute.

Use the following the enum values for file-based sources:

| Data format | Enum value |
| ----------- | ---------- |
| Delimited | `delimited` |
| JSON | `json` |
| Parquet | `parquet` |

For all table-based sources, set the value to `tabular`.

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
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json' \
  -d '{
      "name": "Cloud Storage source connection",
      "description: "Source connection for a cloud storage source",
      "baseConnectionId": "1f164d1b-debe-4b39-b4a9-df767f7d6f7c",
      "data": {
          "format": "delimited",
          "properties": {
              "columnDelimiter": "{COLUMN_DELIMITER}",
              "encoding": "{ENCODING}",
              "compressionType": "{COMPRESSION_TYPE}"
          }
      },
      "params": {
          "path": "/acme/summerCampaign/account.csv",
          "type": "file"
      },
      "connectionSpec": {
          "id": "4c10e202-c428-4796-9208-5f1f5732b1cf",
          "version": "1.0"
      }
  }'
```

| Property | Description |
| --- | --- |
| `baseConnectionId` | The base connection ID of your cloud storage source. |
| `data.format` | The format of the data you want to bring to Platform. Supported values are: `delimited`, `JSON`, and `parquet`. |
| `data.properties` | (Optional) A set of properties that you can apply to your data while creating a source connection. |
| `data.properties.columnDelimiter` | (Optional) A single character column delimiter that you can specify when collecting flat files. Any single character value is a permissible column delimiter. If not provided, a comma (`,`) is used as the default value. **Note**: The `columnDelimiter` property can only be used when ingesting delimited files. |
| `data.properties.encoding` | (Optional) A property that defines the encoding type to be used when ingesting your data to Platform. The supported encoding types are: `UTF-8` and `ISO-8859-1`. **Note**: The `encoding` parameter is only available when ingesting delimited CSV files. Other file types will be ingested with the default encoding, `UTF-8`. |
| `data.properties.compressionType` | (Optional) A property that defines the compressed file type for ingestion. The supported compressed file types are: `bzip2`, `gzip`, `deflate`, `zipDeflate`, `tarGzip`, and `tar`. **Note**: The `compressionType` property can only be used when ingesting delimited or JSON files. |
| `params.path` | The path of the source file you are accessing. This parameter points to an individual file or an entire folder.  **Note**: You can use an asterisk in place of the file name to specify the ingestion of an entire folder. For example: `/acme/summerCampaign/*.csv` will ingest the entire `/acme/summerCampaign/` folder.  |
| `params.type` | The file type of the source data file you are ingesting. Use type `file` to ingest an individual file and use type `folder` to ingest an entire folder. |
| `connectionSpec.id` | The connection specification ID associated with your specific cloud storage source. See the [appendix](#appendix) for a list of connection spec IDs. |

**Response**

A successful response returns the unique identifier (`id`) of the newly created source connection. This ID is required in a later step to create a dataflow.

```json
{
    "id": "26b53912-1005-49f0-b539-12100559f0e2",
    "etag": "\"11004d97-0000-0200-0000-5f3c3b140000\""
}
```

### Use regular expressions to select a specific set of files for ingestion {#regex}

You can use regular expressions to ingest a particular set of files from your source to Platform when creating a source connection.

**API format**

```http
POST /sourceConnections
```

**Request**

In the example below, regular expression is used in the file path to specify ingestion of all CSV files that have `premium` in their name.

```shell
curl -X POST \
  'https://platform.adobe.io/data/foundation/flowservice/sourceConnections' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json' \
  -d '{
      "name": "Cloud Storage source connection",
      "description: "Source connection for a cloud storage source",
      "baseConnectionId": "1f164d1b-debe-4b39-b4a9-df767f7d6f7c",
      "data": {
          "format": "delimited"
      },
      "params": {
          "path": "/acme/summerCampaign/*premium*.csv",
          "type": "folder"
      },
      "connectionSpec": {
          "id": "4c10e202-c428-4796-9208-5f1f5732b1cf",
          "version": "1.0"
      }
  }'
```

### Configure a source connection to ingest data recursively

When creating a source connection, you can use the `recursive` parameter to ingest data from deeply nested folders.

**API format**

```http
POST /sourceConnections
```

**Request**

In the example below, the `recursive: true` parameter informs [!DNL Flow Service] to read all subfolders recursively during the ingestion process.

```shell
curl -X POST \
  'https://platform.adobe.io/data/foundation/flowservice/sourceConnections' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json' \
  -d '{
      "name": "Cloud Storage source connection",
      "description: "Source connection for a cloud storage source with recursive ingestion",
      "baseConnectionId": "1f164d1b-debe-4b39-b4a9-df767f7d6f7c",
      "data": {
          "format": "delimited"
      },
      "params": {
          "path": "/acme/summerCampaign/customers/premium/buyers/recursive",
          "type": "folder",
          "recursive": true
      },
      "connectionSpec": {
          "id": "4c10e202-c428-4796-9208-5f1f5732b1cf",
          "version": "1.0"
      }
  }'
```

## Create a target XDM schema {#target-schema}

In order for the source data to be used in Platform, a target schema must be created to structure the source data according to your needs. The target schema is then used to create a Platform dataset in which the source data is contained.

A target XDM schema can be created by performing a POST request to the [Schema Registry API](https://www.adobe.io/experience-platform-apis/references/schema-registry/).

For detailed steps on how to create a target XDM schema, see the tutorial on [creating a schema using the API](../../../../xdm/api/schemas.md).

## Create a target dataset {#target-dataset}

A target dataset can be created by performing a POST request to the [Catalog Service API](https://www.adobe.io/apis/experienceplatform/home/api-reference.html#!acpdr/swagger-specs/catalog.yaml), providing the ID of the target schema within the payload.

For detailed steps on how to create a target dataset, see the tutorial on [creating a dataset using the API](../../../../catalog/api/create-dataset.md).

## Create a target connection {#target-connection}

A target connection represents the connection to the destination where the ingested data lands in. To create a target connection, you must provide the fixed connection spec ID associated to the Data Lake. This connection spec ID is: `c604ff05-7f1a-43c0-8e18-33bf874cb11c`.

You now have the unique identifiers a target schema a target dataset and the connection spec ID to the Data Lake. Using these identifiers, you can create a target connection using the [!DNL Flow Service] API to specify the dataset that will contain the inbound source data.

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
    -H 'x-gw-ims-org-id: {ORG_ID}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}' \
    -H 'Content-Type: application/json' \
    -d '{
        "name": "Target Connection for a Cloud Storage connector",
        "description": "Target Connection for a Cloud Storage connector",
        "data": {
            "schema": {
                "id": "https://ns.adobe.com/{TENANT_ID}/schemas/995dabbea86d58e346ff91bd8aa741a9f36f29b1019138d4",
                "version": "application/vnd.adobe.xed-full+json;version=1"
            }
        },
        "params": {
            "dataSetId": "5f3c3cedb2805c194ff0b69a"
        },
            "connectionSpec": {
            "id": "c604ff05-7f1a-43c0-8e18-33bf874cb11c",
            "version": "1.0"
        }
    }'
```

| Property | Description |
| -------- | ----------- |
| `data.schema.id` | The `$id` of the target XDM schema. |
| `data.schema.version` | The version of the schema. This value must be set `application/vnd.adobe.xed-full+json;version=1`, which returns the latest minor version of the schema. |
| `params.dataSetId` | The ID of the target dataset. |
| `connectionSpec.id` | The fixed connection spec ID to the Data Lake. This ID is: `c604ff05-7f1a-43c0-8e18-33bf874cb11c`. |

**Response**

A successful response returns the new target connection's unique identifier (`id`). This ID is required in later steps.

```json
{
    "id": "dbc5c132-bc2a-4625-85c1-32bc2a262558",
    "etag": "\"8e000533-0000-0200-0000-5f3c40fd0000\""
}
```

## Create a mapping {#mapping}

In order for the source data to be ingested into a target dataset, it must first be mapped to the target schema that the target dataset adheres to.

To create a mapping set, make a POST request to the `mappingSets` endpoint of the [[!DNL Data Prep] API](https://www.adobe.io/apis/experienceplatform/home/api-reference.html#!acpdr/swagger-specs/data-prep.yaml) while providing your target XDM schema `$id` and the details of the mapping sets you want to create.

>[!TIP]
>
>You can map complex data types such as arrays in JSON files using a cloud storage source connector.

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
    -H 'x-gw-ims-org-id: {ORG_ID}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}' \
    -H 'Content-Type: application/json' \
    -d '{
        "version": 0,
        "xdmSchema": "https://ns.adobe.com/{TENANT_ID}/schemas/995dabbea86d58e346ff91bd8aa741a9f36f29b1019138d4",
        "xdmVersion": "1.0",
        "id": null,
        "mappings": [
            {
                "destinationXdmPath": "_id",
                "sourceAttribute": "Id",
                "identity": false,
                "identityGroup": null,
                "namespaceCode": null,
                "version": 0
            },
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
            }
        ]
    }'
```

| Property | Description |
| --- | --- |
| `xdmSchema` | The ID of the target XDM schema. |

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
    -H 'x-gw-ims-org-id: {ORG_ID}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}'
```

>[!NOTE]
>
>The JSON response payload below is hidden for brevity. Select "payload" to see the response payload.

+++ View payload

**Response**

A successful response returns the details of the dataflow specification responsible for bringing data from your source into Platform. The response includes the unique flow spec `id` required to create a new dataflow.

```json
{
  "id": "9753525b-82c7-4dce-8a9b-5ccfce2b9876",
  "name": "CloudStorageToAEP",
  "providerId": "0ed90a81-07f4-4586-8190-b40eccef1c5a",
  "version": "1.0",
  "attributes": {
    "isSourceFlow": true,
    "flacValidationSupported": true,
    "frequency": "batch",
    "notification": {
      "category": "sources",
      "flowRun": {
        "enabled": true
      }
    }
  },
  "sourceConnectionSpecIds": [
    "b3ba5556-48be-44b7-8b85-ff2b69b46dc4",
    "ecadc60c-7455-4d87-84dc-2a0e293d997b",
    "b7829c2f-2eb0-4f49-a6ee-55e33008b629",
    "4c10e202-c428-4796-9208-5f1f5732b1cf",
    "fb2e94c9-c031-467d-8103-6bd6e0a432f2",
    "32e8f412-cdf7-464c-9885-78184cb113fd",
    "b7bf2577-4520-42c9-bae9-cad01560f7bc",
    "998b8ae3-cec0-43b7-8abe-40b1eb4ee069",
    "be5ec48c-5b78-49d5-b8fa-7c89ec4569b8",
    "54e221aa-d342-4707-bcff-7a4bceef0001",
    "c85f9425-fb21-426c-ad0b-405e9bd8a46c",
    "26f526f2-58f4-4712-961d-e41bf1ccc0e8"
  ],
  "targetConnectionSpecIds": [
    "c604ff05-7f1a-43c0-8e18-33bf874cb11c"
  ],
  "permissionsInfo": {
    "view": [
      {
        "@type": "lowLevel",
        "name": "EnterpriseSource",
        "permissions": [
          "read"
        ]
      }
    ],
    "manage": [
      {
        "@type": "lowLevel",
        "name": "EnterpriseSource",
        "permissions": [
          "write"
        ]
      }
    ]
  },
  "optionSpec": {
    "name": "OptionSpec",
    "spec": {
      "$schema": "http://json-schema.org/draft-07/schema#",
      "type": "object",
      "properties": {
        "errorDiagnosticsEnabled": {
          "title": "Error diagnostics.",
          "description": "Flag to enable detailed and sample error diagnostics summary.",
          "type": "boolean",
          "default": false
        },
        "partialIngestionPercent": {
          "title": "Partial ingestion threshold.",
          "description": "Percentage which defines the threshold of errors allowed before the run is marked as failed.",
          "type": "number",
          "exclusiveMinimum": 0
        }
      }
    }
  },
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
        "frequency": {
          "type": "string",
          "enum": [
            "once",
            "minute",
            "hour",
            "day",
            "week"
          ]
        },
        "interval": {
          "type": "integer"
        },
        "backfill": {
          "type": "boolean",
          "default": true
        }
      },
      "required": [
        "startTime",
        "frequency"
      ],
      "if": {
        "properties": {
          "frequency": {
            "const": "once"
          }
        }
      },
      "then": {
        "allOf": [
          {
            "not": {
              "required": [
                "interval"
              ]
            }
          },
          {
            "not": {
              "required": [
                "backfill"
              ]
            }
          }
        ]
      },
      "else": {
        "required": [
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
  },
  "transformationSpec": [
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
  "runSpec": {
      "name": "ProviderParams",
      "spec": {
        "$schema": "http://json-schema.org/draft-07/schema#",
        "type": "object",
        "description": "defines various params required for creating flow run.",
        "properties": {
          "startTime": {
            "type": "integer",
            "description": "An integer that defines the start time of the run. The value is represented in Unix epoch time."
          },
          "windowStartTime": {
            "type": "integer",
            "description": "An integer that defines the start time of the window against which data is to be pulled. The value is represented in Unix epoch time."
          },
          "windowEndTime": {
            "type": "integer",
            "description": "An integer that defines the end time of the window against which data is to be pulled.  The value is represented in Unix epoch time."
          }
        },
        "required": [
          "startTime",
          "windowStartTime",
          "windowEndTime"
        ]
      }
    }
}
```

+++

## Create a dataflow

The last step towards collecting cloud storage data is to create a dataflow. By now, you have the following required values prepared:

- [Source connection ID](#source)
- [Target connection ID](#target)
- [Mapping ID](#mapping)
- [Dataflow specification ID](#specs)

A dataflow is responsible for scheduling and collecting data from a source. You can create a dataflow by performing a POST request while providing the previously mentioned values within the payload.

>[!NOTE]
>
>For batch ingestion, every ensuing dataflow selects files to be ingested from your source based on their **last modified** timestamp. This means that batch dataflows select files from the source that are either new or have been modified since the last dataflow run.

To schedule an ingestion, you must first set the start time value to epoch time in seconds. Then, you must set the frequency value to one of the five options: `once`, `minute`, `hour`, `day`, or `week`. The interval value designates the period between two consecutive ingestions and creating a one-time ingestion does not require an interval to be set. For all other frequencies, the interval value must be set to equal or greater than `15`.

>[!IMPORTANT]
>
>It is strongly recommended to schedule your dataflow for one-time ingestion when using the [FTP connector](../../../connectors/cloud-storage/ftp.md).

**API format**

```http
POST /flows
```

**Request**

```shell
curl -X POST \
    'https://platform.adobe.io/data/foundation/flowservice/flows' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {ORG_ID}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}' \
    -H 'Content-Type: application/json' \
    -d '{
        "name": "Cloud Storage flow to Platform",
        "description": "Cloud Storage flow to Platform",
        "flowSpec": {
            "id": "9753525b-82c7-4dce-8a9b-5ccfce2b9876",
            "version": "1.0"
        },
        "sourceConnectionIds": [
            "26b53912-1005-49f0-b539-12100559f0e2"
        ],
        "targetConnectionIds": [
            "f7eb08fa-5f04-4e45-ab08-fa5f046e45ee"
        ],
        "transformations": [
            {
                "name": "Mapping",
                "params": {
                    "mappingId": "bf5286a9c1ad4266baca76ba3adc9366",
                    "mappingVersion": 0
                }
            }
        ],
        "scheduleParams": {
            "startTime": "1597784298",
            "frequency":"minute",
            "interval":"30"
        }
    }'
```

| Property | Description |
| --- | --- |
| `flowSpec.id` | The [flow spec ID](#specs) retrieved in the previous step. |
| `sourceConnectionIds` | The [source connection ID](#source) retrieved in an earlier step. |
| `targetConnectionIds` | The [target connection ID](#target-connection) retrieved in an earlier step. |
| `transformations.params.mappingId` | The [mapping ID](#mapping) retrieved in an earlier step.|
| `scheduleParams.startTime` | The start time for the dataflow in epoch time. |
| `scheduleParams.frequency` | The frequency at which the dataflow will collect data. Acceptable values include: `once`, `minute`, `hour`, `day`, or `week`. |
| `scheduleParams.interval` | The interval designates the period between two consecutive flow runs. The interval's value should be a non-zero integer. Interval is not required when frequency is set as `once` and should be greater than or equal to `15` for other frequency values. |

**Response**

A successful response returns the ID (`id`) of the newly created dataflow.

```json
{
    "id": "dbc5c132-bc2a-4625-85c1-32bc2a262558",
    "etag": "\"8e000533-0000-0200-0000-5f3c40fd0000\""
}
```

## Monitor your dataflow

Once your dataflow has been created, you can monitor the data that is being ingested through it to see information on flow runs, completion status, and errors. For more information on how to monitor dataflows, see the tutorial on [monitoring dataflows in the API](../monitor.md)

## Next steps

By following this tutorial, you have created a source connector to collect data from your cloud storage on a scheduled basis. Incoming data can now be used by downstream Platform services such as [!DNL Real-time Customer Profile] and [!DNL Data Science Workspace]. See the following documents for more details:

- [Real-time Customer Profile overview](../../../../profile/home.md)
- [Data Science Workspace overview](../../../../data-science-workspace/home.md)

## Appendix {#appendix}

The following section lists the different cloud storage source connectors and their connections specifications.

### Connection specification

| Connector name | Connection spec |
| -------------- | --------------- |
| [!DNL Amazon S3] (S3) | `ecadc60c-7455-4d87-84dc-2a0e293d997b` |
| [!DNL Amazon Kinesis] (Kinesis) | `86043421-563b-46ec-8e6c-e23184711bf6` |
| [!DNL Azure Blob] (Blob) | `4c10e202-c428-4796-9208-5f1f5732b1cf` |
| [!DNL Azure Data Lake Storage Gen2] (ADLS Gen2) | `b3ba5556-48be-44b7-8b85-ff2b69b46dc4` |
| [!DNL Azure Event Hubs] (Event Hubs) | `bf9f5905-92b7-48bf-bf20-455bc6b60a4e` |
| [!DNL Azure File Storage] | `be5ec48c-5b78-49d5-b8fa-7c89ec4569b8` |
| [!DNL Google Cloud Storage] | `32e8f412-cdf7-464c-9885-78184cb113fd` |
| [!DNL HDFS] | `54e221aa-d342-4707-bcff-7a4bceef0001` |
| [!DNL Oracle Object Storage] | `c85f9425-fb21-426c-ad0b-405e9bd8a46c` |
| [!DNL SFTP] | `bf367b0d-3d9b-4060-b67b-0d3d9bd06094` |
