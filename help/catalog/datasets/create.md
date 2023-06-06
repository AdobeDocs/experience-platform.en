---
keywords: Experience Platform;home;popular topics;dataset;Dataset;create a dataset;create dataset
solution: Experience Platform
title: Create a Dataset using APIs
description: This document provides general steps for creating a dataset using Adobe Experience Platform APIs and populating the dataset using a file.
exl-id: 3a5f48cf-ad05-4b9e-be1d-ff213a26a477
---
# Create a dataset using APIs

This document provides general steps for creating a dataset using Adobe Experience Platform APIs and populating the dataset using a file.

## Getting started

This guide requires a working understanding of the following components of Adobe Experience Platform:

* [Batch ingestion](../../ingestion/batch-ingestion/overview.md): [!DNL Experience Platform] allows you to ingest data as batch files.
* [[!DNL Experience Data Model (XDM) System]](../../xdm/home.md): The standardized framework by which [!DNL Experience Platform] organizes customer experience data.
* [[!DNL Sandboxes]](../../sandboxes/home.md): [!DNL Experience Platform] provides virtual sandboxes which partition a single [!DNL Platform] instance into separate virtual environments to help develop and evolve digital experience applications.

The following sections provide additional information that you will need to know in order to successfully make calls to the [!DNL Platform] APIs.

### Reading sample API calls

This tutorial provides example API calls to demonstrate how to format your requests. These include paths, required headers, and properly formatted request payloads. Sample JSON returned in API responses is also provided. For information on the conventions used in documentation for sample API calls, see the section on [how to read example API calls](../../landing/troubleshooting.md#how-do-i-format-an-api-request) in the [!DNL Experience Platform] troubleshooting guide.

### Gather values for required headers

In order to make calls to [!DNL Platform] APIs, you must first complete the [authentication tutorial](https://www.adobe.com/go/platform-api-authentication-en). Completing the authentication tutorial provides the values for each of the required headers in all [!DNL Experience Platform] API calls, as shown below:

* `Authorization: Bearer {ACCESS_TOKEN}`
* `x-api-key: {API_KEY}`
* `x-gw-ims-org-id: {ORG_ID}`

All resources in [!DNL Experience Platform] are isolated to specific virtual sandboxes. All requests to [!DNL Platform] APIs require a header that specifies the name of the sandbox the operation will take place in:

* x-sandbox-name: `{SANDBOX_NAME}`

>[!NOTE]
>
>For more information on sandboxes in [!DNL Platform], see the [sandbox overview documentation](../../sandboxes/home.md). 

All requests that contain a payload (POST, PUT, PATCH) require an additional header. POST and PUT requests require the `Content-Type: application/json` header. A PATCH request requires the `Content-Type: application/json+patch` header. 

## Tutorial

In order to create a dataset, a schema must first be defined. A schema is a set of rules to help represent data. In addition to describing the structure of data, schemas provide constraints and expectations that can be applied and used to validate data as it is moved between systems. 

These standard definitions allow data to be interpreted consistently, regardless of origin, and remove the need for translation across applications. For more information about composing schemas, see the guide on the [basics of schema composition](../../xdm/schema/composition.md)

## Look up a dataset schema

This tutorial begins where the [Schema Registry API tutorial](../../xdm/tutorials/create-schema-api.md) ends, making use of the Loyalty Members schema created during that tutorial. 

If you have not completed the [!DNL Schema Registry] tutorial, please start there and continue with this dataset tutorial only once you have composed the necessary schema.

The following call can be used to view the Loyalty Members schema you created during the [!DNL Schema Registry] API tutorial:

**API format**

```HTTP
GET /tenant/schemas/{schema meta:altId or URL encoded $id URI}
```

**Request**

```SHELL
curl -X GET \
  https://platform.adobe.io/data/foundation/schemaregistry/tenant/schemas/_{TENANT_ID}.schemas.533ca5da28087c44344810891b0f03d9 \
  -H 'Accept: application/vnd.adobe.xed-full+json; version=1' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

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
    "imsOrg": "{ORG_ID}",
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

**API format**

```HTTP
POST /dataSets
```

**Request**

```SHELL
curl -X POST \
  'https://platform.adobe.io/data/foundation/catalog/dataSets?requestDataSource=true' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'Content-Type: application/json' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -d '{
    "name":"LoyaltyMembersDataset",
    "schemaRef": {
        "id": "https://ns.adobe.com/{TENANT_ID}/schemas/719c4e19184402c27595e65b931a142b",
        "contentType": "application/vnd.adobe.xed+json;version=1"
    }
}'
```

| Property | Description |
| --- | --- |
| `schemaRef.id` | The URI `$id` value for the XDM schema the dataset will be based on. |
| `schemaRef.contentType` | Indicates the format and version of the schema. See the section on [schema versioning](../../xdm/api/getting-started.md#versioning) in the XDM API guide for more information. |

>[!NOTE]
>
>This tutorial uses the [Apache Parquet](https://parquet.apache.org/docs/) file format for all its examples. An example that uses the JSON file format can be found in the [batch ingestion developer guide](../../ingestion/batch-ingestion/api-overview.md) 

**Response**

A successful response returns HTTP Status 201 (Created) and a response object that consists of an array containing the ID of the newly created dataset in the format `"@/datasets/{DATASET_ID}"`. The dataset ID is a read-only, system-generated string that is used to reference the dataset in API calls.

```JSON
[
    "@/dataSets/5c8c3c555033b814b69f947f"
]
```

## Create a batch

Before you can add data to a dataset, you must create a batch that is linked to the dataset. The batch will then be used for uploading.

**API format**

```HTTP
POST /batches
```

**Request**

The request body includes a "datasetId" field, the value of which is the `{DATASET_ID}` generated in the previous step.

```SHELL
curl -X POST 'https://platform.adobe.io/data/foundation/import/batches' \
  -H 'accept: application/json' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'content-type: application/json' \
  -d '{
        "datasetId":"5c8c3c555033b814b69f947f"
      }'
```

**Response**

A successful response returns HTTP Status 201 (Created) and a response object. The response object consists of an array containing the ID of the newly created batch in the format `"@/datasets/{BATCH_ID}"`. The batch ID is a read-only, system-generated string that is used to reference the batch in API calls.

```JSON
{
    "id": "5d01230fc78a4e4f8c0c6b387b4b8d1c",
    "imsOrg": "{ORG_ID}",
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

After successfully creating a new batch for uploading, you can now upload files to the specific dataset. It is important to remember that when you defined the dataset, you specified the file format as Parquet. Therefore, the files you upload must be in that format.

>[!NOTE]
>
>The largest data upload file supported is 512 MB. If your data file is larger than this, it needs to be broken into chunks no larger than 512 MB, to be uploaded one at a time. You can upload each file in the same batch by repeating this step for each file, using the same batch ID. There is no limit to the number if files you can upload as part of a batch.

**API format**

```http
PUT /batches/{BATCH_ID}/datasets/{DATASET_ID}/files/{FILE_NAME}
```

| Parameter | Description |
| --- | --- |
| `{BATCH_ID}` | The `id` of the batch you are uploading to. |
| `{DATASET_ID}` | The `id` of the dataset the batch will be persisted in. |
| `{FILE_NAME}` | The name of the file your are uploading. |

**Request**

```SHELL
curl -X PUT 'https://platform.adobe.io/data/foundation/import/batches/5d01230fc78a4e4f8c0c6b387b4b8d1c/datasets/5c8c3c555033b814b69f947f/files/loyaltyData.parquet' \
  -H 'content-type: application/octet-stream' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMG_ORG}' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  --data-binary '@{FILE_PATH_AND_NAME}.parquet'
```

**Response**

A successfully uploaded file returns a blank response body and HTTP Status 200 (OK).

## Signal batch completion

After you upload all of your data files to the batch, you can signal the batch for completion. Signaling completion causes the service to create [!DNL Catalog] `DataSetFile` entries for the uploaded files and associate them with the batch generated previously. The [!DNL Catalog] batch is marked successful, which triggers any downstream flows that can then work on the now available data.

**API format**

```HTTP
POST /batches/{BATCH_ID}?action=COMPLETE
```

| Parameter | Description |
| --- | --- |
| `{BATCH_ID}` | The `id` of the batch you are marking as complete. |

**Request**

```SHELL
curl -X POST "https://platform.adobe.io/data/foundation/import/batches/5d01230fc78a4e4f8c0c6b387b4b8d1c?action=COMPLETE" \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMG_ORG}' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}'
```

**Response**

A successfully completed batch returns a blank response body and HTTP Status 200 (OK).

## Monitor ingestion

Depending on the size of the data, batches take varying lengths of time to ingest. You can monitor the status of a batch by appending a batch's ID to a `GET /batches` request.

**API format**

```HTTP
GET /batches/{BATCH_ID}
```

| Parameter | Description |
| --- | --- |
| `{BATCH_ID}` | The `id` of the batch you want to monitor. |

**Request**

```SHELL
curl -X GET \
  'https://platform.adobe.io/data/foundation/catalog/batches?batch=5d01230fc78a4e4f8c0c6b387b4b8d1c' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMG_ORG}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}'
```

**Response**

A positive response returns an object with its `status` attribute containing the value of `success`:

```JSON
{
    "5b7129a879323401ef2a6486": {
        "imsOrg": "{ORG_ID}",
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
        "imsOrg": "{ORG_ID}",
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

>[!NOTE]
>
>A recommended polling interval is two minutes.

## Read data from the dataset

With the batch ID, you can use the Data Access API to read-back and verify all of the files uploaded to the batch. The response returns an array containing a list of file IDs, each referencing a file in the batch. 

You can also use the Data Access API to return the name, size in bytes, and a link to download the file or folder.

Detailed steps for working with the Data Access API can be found in the [Data Access developer guide](../../data-access/home.md).

## Update the dataset schema

You can add fields and ingest additional data into datasets that you have created. To do this, you first need to update the schema by adding additional properties that define the new data. This can be done using PATCH and/or PUT operations to update the existing schema.

For more information about updating schemas, see the [Schema Registry API Developer Guide](../../xdm/api/getting-started.md).

Once you have updated the schema, you can re-follow the steps in this tutorial to ingest new data that conforms to the revised schema.

It is important to remember that schema evolution is purely additive, meaning you cannot introduce a breaking change to a schema once it has been saved to the registry and used for data ingestion. To learn more about best practices for composing schema for use with Adobe Experience Platform, see the guide on the [basics of schema composition](../../xdm/schema/composition.md).
