---
keywords: Experience Platform;home;popular topics
solution: Experience Platform
title: Create a dataset using APIs
topic: datasets
---

# Create a dataset using APIs

This document provides general steps for creating a dataset using Adobe Experience Platform APIs and populating the dataset using a file.

This tutorial covers the following steps:

- [Lookup a dataset schema](#lookup-dataset-schema)
- [Create a dataset based on the schema](#create-a-dataset)
- [Create a batch to upload data into the dataset](#create-a-batch)
- [Upload files to the batch](#upload-files-to-a-batch)
- [Signal batch completion](#signal-batch-completion)
- [Monitor data ingestion for a batch](#monitor-ingestion)
- [Read the data in the dataset to verify its success](#read-data-from-the-dataset)
- *(Optional)* [Update the dataset schema to ingest additional data](#update-the-dataset-schema)

## Getting started

This guide requires a working understanding of the following components of Adobe Experience Platform:

* [Batch ingestion](../../technical_overview/ingest_architectural_overview/ingest_architectural_overview.md): Experience Platform allows you to ingest data as batch files.
* [Experience Data Model (XDM) System](../../technical_overview/schema_registry/xdm_system/xdm_system_in_experience_platform.md): The standardized framework by which Experience Platform organizes customer experience data.
* [Sandboxes](../../technical_overview/sandboxes/sandboxes-overview.md): Experience Platform provides virtual sandboxes which partition a single Platform instance into separate virtual environments to help develop and evolve digital experience applications.

The following sections provide additional information that you will need to know in order to successfully make calls to the Platform APIs.

### Reading sample API calls

This tutorial provides example API calls to demonstrate how to format your requests. These include paths, required headers, and properly formatted request payloads. Sample JSON returned in API responses is also provided. For information on the conventions used in documentation for sample API calls, see the section on [how to read example API calls](../../technical_overview/platform_faq_and_troubleshooting/platform_faq_and_troubleshooting.md#how-do-i-format-an-api-request) in the Experience Platform troubleshooting guide.

### Gather values for required headers

In order to make calls to Platform APIs, you must first complete the [authentication tutorial](../../tutorials/authenticate_to_acp_tutorial/authenticate_to_acp_tutorial.md). Completing the authentication tutorial provides the values for each of the required headers in all Experience Platform API calls, as shown below:

- Authorization: Bearer `{ACCESS_TOKEN}`
- x-api-key: `{API_KEY}`
- x-gw-ims-org-id: `{IMS_ORG}`

All resources in Experience Platform are isolated to specific virtual sandboxes. All requests to Platform APIs require a header that specifies the name of the sandbox the operation will take place in:

* x-sandbox-name: `{SANDBOX_NAME}`

> **Note:** For more information on sandboxes in Platform, see the [sandbox overview documentation](../../technical_overview/sandboxes/sandboxes-overview.md). 

All requests that contain a payload (POST, PUT, PATCH) require an additional header:

- Content-Type: application/json

## Tutorial

In order to create a dataset, a schema must first be defined. A schema is a set of rules to help represent data. In addition to describing the structure of data, schemas provide constraints and expectations that can be applied and used to validate data as it is moved between systems. 

These standard definitions allow data to be interpreted consistently, regardless of origin, and remove the need for translation across applications. For more information about composing schemas, read [Basics of Schema Composition](../../technical_overview/schema_registry/schema_composition/schema_composition.md)

## Lookup dataset schema

This tutorial begins where the [Schema Registry API tutorial](../schema_registry_api_tutorial/schema_registry_api_tutorial.md) ends, making use of the Loyalty Members schema created during that tutorial. 

If you have not completed the Schema Registry tutorial, please start there and continue with this dataset tutorial only once you have composed the necessary schema.

The following call can be used to view the Loyalty Members schema you created during the [Schema Registry API tutorial](../../tutorials/schema_registry_api_tutorial/schema_registry_api_tutorial.md):

#### API format

```HTTP
GET /tenant/schemas/{schema meta:altId or URL encoded $id URI}
```

#### Request

```SHELL
curl -X GET \
  https://platform.adobe.io/data/foundation/schemaregistry/tenant/schemas/_{TENANT_ID}.schemas.533ca5da28087c44344810891b0f03d9 \
  -H 'Accept: application/vnd.adobe.xed-full+json; version=1' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

#### Response

The format of the response object depends on the Accept header sent in the request. Individual properties in this response have been minimized for space.

```JSON
{
    "type": "object",
    "title": "Loyalty Members",
    "description": "Information for all members of the loyalty program",
    "meta:class": "https://ns.adobe.com/xdm/context/profile",
    "meta:abstract": false,
    "meta:extensible": false,
    "meta:extends": [
        "https://ns.adobe.com/xdm/context/profile",
        "https://ns.adobe.com/xdm/data/record",
        "https://ns.adobe.com/xdm/context/identitymap",
        "https://ns.adobe.com/xdm/common/extensible",
        "https://ns.adobe.com/xdm/common/auditable",
        "https://ns.adobe.com/xdm/context/profile-person-details",
        "https://ns.adobe.com/xdm/context/profile-personal-details",
        "https://ns.adobe.com/{TENANT_ID}/mixins/bb118e507bb848fd85df68fedea70c62"
    ],
    "meta:containerId": "tenant",
    "imsOrg": "{IMS_ORG}",
    "meta:immutableTags": [
        "union"
    ],
    "meta:altId": "_{TENANT_ID}.schemas.533ca5da28087c44344810891b0f03d9",
    "meta:xdmType": "object",
    "properties": {
        "repositoryCreatedBy": {},
        "repositoryLastModifiedBy": {},
        "createdByBatchID": {},
        "modifiedByBatchID": {},
        "_repo": {},
        "identityMap": {},
        "_id": {},
        "timeSeriesEvents": {},
        "person": {},
        "homeAddress": {},
        "personalEmail": {},
        "homePhone": {},
        "mobilePhone": {},
        "faxPhone": {},
        "_{TENANT_ID}": {
            "type": "object",
            "meta:xdmType": "object",
            "properties": {
                "loyalty": {
                    "title": "Loyalty",
                    "description": "Loyalty Info",
                    "type": "object",
                    "meta:xdmType": "object",
                    "meta:referencedFrom": "https://ns.adobe.com/{TENANT_ID}/datatypes/49b594dabe6bec545c8a6d1a0991a4dd",
                    "properties": {
                        "loyaltyId": {
                            "title": "Loyalty Identifier",
                            "type": "string",
                            "description": "Loyalty Identifier.",
                            "meta:xdmType": "string"
                        },
                        "loyaltyLevel": {
                            "title": "Loyalty Level",
                            "type": "string",
                            "meta:xdmType": "string"
                        },
                        "loyaltyPoints": {
                            "title": "Loyalty Points",
                            "type": "integer",
                            "description": "Loyalty points total.",
                            "meta:xdmType": "int"
                        },
                        "memberSince": {
                            "title": "Member Since",
                            "type": "string",
                            "format": "date-time",
                            "description": "Date the member joined the Loyalty Program.",
                            "meta:xdmType": "date-time"
                        }
                    }
                }
            }
        }
    },
    "$id": "https://ns.adobe.com/{TENANT_ID}/schemas/533ca5da28087c44344810891b0f03d9",
    "version": "1.4",
    "meta:resourceType": "schemas",
    "meta:registryMetadata": {
        "repo:createDate": 1551836845496,
        "repo:lastModifiedDate": 1551843052271,
        "xdm:createdClientId": "{CREATED_CLIENT}",
        "xdm:repositoryCreatedBy": "{CREATED_BY}"
    }
}
```

## Create a dataset

With the Loyalty Members schema in place, you can now create a dataset that references the schema.

#### API format

```HTTP
POST /dataSets
```

#### Request

```SHELL
curl -X POST \
  'https://platform.adobe.io/data/foundation/catalog/dataSets?requestDataSource=true' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'Content-Type: application/json' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -d '{
    "name":"LoyaltyMembersDataset",
    "schemaRef": {
        "id": "https://ns.adobe.com/{TENANT_ID}/schemas/719c4e19184402c27595e65b931a142b",
        "contentType": "application/vnd.adobe.xed+json;version=1"
    },
    "fileDescription": {
        "persisted": true,
        "containerFormat": "parquet",
        "format": "parquet"
    }
}'
```

>**Note:** This tutorial uses the [parquet](https://parquet.apache.org/documentation/latest/) file format for all its examples. An example that uses the JSON file format can be found in the [batch ingestion developer guide](../../technical_overview/ingest_architectural_overview/batch_data_ingestion_developer_guide.md) 

#### Response

A successful response returns HTTP Status 201 (Created) and a response object that consists of an array containing the ID of the newly created dataset in the format `"@/datasets/{DATASET_ID}"`. The dataset ID is a read-only, system-generated string that is used to reference the dataset in API calls.

```JSON
[
    "@/dataSets/5c8c3c555033b814b69f947f"
]
```

## Create a batch

Before you can add data to a dataset, you must create a batch that is linked to the dataset. The batch will then be used for uploading.

#### API format

```HTTP
POST /batches
```

#### Request

The request body includes a "datasetId" field, the value of which is the `{DATASET_ID}` generated in the previous step.

```SHELL
curl -X POST 'https://platform.adobe.io/data/foundation/import/batches' \
  -H 'accept: application/json' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key : {API_KEY}' \
  -H 'content-type: application/json' \
  -d '{
        "datasetId":"5c8c3c555033b814b69f947f"
      }'
```

#### Response

A successful response returns HTTP Status 201 (Created) and a response object containing details of the newly created batch, including its `id`, a read-only, system generated string.

```JSON
{
    "id": "5d01230fc78a4e4f8c0c6b387b4b8d1c",
    "imsOrg": "{IMS_ORG}",
    "updated": 1552694873602,
    "status": "loading",
    "created": 1552694873602,
    "relatedObjects": [
        {
            "type": "dataSet",
            "id": "5c8c3c555033b814b69f947f"
        }
    ],
    "version": "1.0.0",
    "tags": {
        "acp_producer": [
            "{CREATED_CLIENT}"
        ],
        "acp_stagePath": [
            "{CREATED_CLIENT}/stage/5d01230fc78a4e4f8c0c6b387b4b8d1c"
        ],
        "use_plan_b_batch_status": [
            "false"
        ]
    },
    "createdUser": "{CREATED_BY}",
    "updatedUser": "{CREATED_BY}",
    "externalId": "5d01230fc78a4e4f8c0c6b387b4b8d1c",
    "createdClient": "{CREATED_CLIENT}",
    "inputFormat": {
        "format": "parquet"
    }
}
```

## Upload files to a batch

After successfully creating a new batch for uploading, you can now upload files to the specific dataset. It is important to remember that when you defined the dataset, you specified the file format as parquet. Therefore, the files you upload must be in that format.

> **Note:** The largest data upload file supported is 512 MB. If your data file is larger than this, it needs to be broken into chunks no larger than 512 MB, to be uploaded one at a time. You can upload each file in the same batch by repeating this step for each file, using the same batch ID. There is no limit to the number if files you can upload as part of a batch.

#### API format

```http
PUT /batches/{BATCH_ID}/datasets/{DATASET_ID}/files/{FILE_NAME}
```

#### Request

```SHELL
curl -X PUT 'https://platform.adobe.io/data/foundation/import/batches/5d01230fc78a4e4f8c0c6b387b4b8d1c/datasets/5c8c3c555033b814b69f947f/files/loyaltyData.parquet' \
  -H 'content-type: application/octet-stream' \
  -H 'x-api-key : {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMG_ORG}' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  --data-binary '@{FILE_PATH_AND_NAME}.parquet'
```

#### Response

A successfully uploaded file returns a blank response body and HTTP Status 200 (OK).

## Signal batch completion

After you upload all of your data files to the batch, you can signal the batch for completion. Signaling completion causes the service to create Catalog DataSetFile entries for the uploaded files and associate them with the batch generated previously. The Catalog batch is marked successful, which triggers any downstream flows that can then work on the now available data.

#### API format

```HTTP
POST /batches/{BATCH_ID}?action=COMPLETE
```

#### Request

```SHELL
curl -X POST "https://platform.adobe.io/data/foundation/import/batches/5d01230fc78a4e4f8c0c6b387b4b8d1c?action=COMPLETE" \
  -H 'x-api-key : {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMG_ORG}' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}'
```

#### Response

A successfully completed batch returns a blank response body and HTTP Status 200 (OK).


## Monitor ingestion

Depending on the size of the data, batches take varying lengths of time to ingest. You can monitor the status of a batch by appending a `batch` request parameter containing the batch's ID to a `GET /batches` request. The API polls the dataset for the status of the batch from ingestion until the `status` in the response indicates completion ("success" or "failure").

#### API format

```HTTP
GET /batches?batch={BATCH_ID}
```

#### Request

```SHELL
curl -X GET \
  'https://platform.adobe.io/data/foundation/catalog/batches?batch=5d01230fc78a4e4f8c0c6b387b4b8d1c' \
  -H 'x-api-key : {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMG_ORG}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}'
```

#### Response

A positive response returns an object with its `"status"` attribute containing the value of `"success"`:

```JSON
{
    "5b7129a879323401ef2a6486": {
        "imsOrg": "{IMS_ORG}",
        "created": 1534142888068,
        "createdClient": "{CREATED_CLIENT}",
        "createdUser": "{CREATED_BY}",
        "updatedUser": "{CREATED_BY}",
        "updated": 1534142955152,
        "replay": {},
        "status": "success",
        "errors": [],
        "version": "1.0.3",
        "availableDates": {},
        "relatedObjects": [
            {
                "type": "batch",
                "id": "29285e08378f4a41827e7e70fb7cb8f0"
            }
        ],
        "metrics": {
            "startTime": 1534142943819,
            "endTime": 1534142951760,
            "recordsRead": 108,
            "recordsWritten": 108
        }
    }
}
```

A negative response returns an object with the value of `"failed"` in its `"status"` attribute, and includes any relevant error messages:

```JSON
{
    "5b96ce65badcf701e51f075d": {
        "imsOrg": "{IMS_ORG}",
        "status": "failed",
        "relatedObjects": [
            {
                "type": "batch",
                "id": "29285e08378f4a41827e7e70fb7cb8f0"
            }
        ],
        "replay": {},
        "availableDates": {},
        "metrics": {
            "startTime": 1536610322329,
            "endTime": 1536610438083,
            "recordsRead": 4004,
            "recordsWritten": 4004,
            "failureReason": "Job aborted due to stage failure: Task 0 in stage 1.0 failed 4 times,:"
        },
        "errors": [
            {
                "code": "0070000017",
                "description": "Unknown error occurred."
            },
            {
                "code": "unknown",
                "description": "Job aborted."
            }
        ],
        "created": 1536609893629,
        "createdClient": "{CREATED_CLIENT}",
        "createdUser": "{CREATED_BY}",
        "updatedUser": "{CREATED_BY}",
        "updated": 1536610442814,
        "version": "1.0.5"
    }
}
```

A recommended polling interval is two minutes. For more information on working with Catalog datasets and batches, see the [Catalog Service overview](../../technical_overview/catalog_architectural_overview/catalog_architectural_overview.md).

## Read data from the dataset

With the batch ID, you can use the Data Access API to read-back and verify all of the files uploaded to the batch. The response returns an array containing a list of file IDs, each referencing a file in the batch. 

You can also use the Data Access API to return the name, size in bytes, and a link to download the file or folder.

Detailed steps for working with the Data Access API can be found in the [Data Access Tutorial](../data_access_tutorial/data_access_tutorial.md).

## Update the dataset schema

You can add fields and ingest additional data into datasets that you have created. To do this, you first need to update the schema by adding additional properties that define the new data. This can be done using PATCH and/or PUT operations to update the existing schema.

For more information about updating schemas, see the [Schema Registry API Developer Guide](../../technical_overview/schema_registry/schema_registry_developer_guide.md).

Once you have updated the schema, you can re-follow the steps in this tutorial to ingest new data that conforms to the revised schema.

It is important to remember that schema evolution is purely additive, meaning you cannot introduce a breaking change to a schema once it has been saved to the registry and used for data ingestion. To learn more about best practices for composing schema for use with Adobe Experience Platform, read the [Basics of Schema Composition](../../technical_overview/schema_registry/schema_composition/schema_composition.md).