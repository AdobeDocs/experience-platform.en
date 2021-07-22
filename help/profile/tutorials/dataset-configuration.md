---
keywords: Experience Platform;profile;real-time customer profile;troubleshooting;API;enable dataset
title: Configure a Dataset for Profile and Identity Service using APIs
topic-legacy: tutorial
type: Tutorial
description: This tutorial shows you how to enable a dataset for use with Real-time Customer Profile and Identity Service using Adobe Experience Platform APIs.
exl-id: 142cb7df-072a-4f3a-8a9c-9a78afb35312
---
# Configure a dataset for [!DNL Profile] and [!DNL Identity Service] using APIs

This tutorial covers the process of enabling a dataset for use in [!DNL Real-time Customer Profile] and [!DNL Identity Service], broken down into the following steps:

1. Enable a dataset for use in [!DNL Real-time Customer Profile], using one of two options:
    - [Create a new dataset](#create-a-dataset-enabled-for-profile-and-identity)
    - [Configure an existing dataset](#configure-an-existing-dataset)
1. [Ingest data into the dataset](#ingest-data-into-the-dataset)  
1. [Confirm data ingest by Real-time Customer Profile](#confirm-data-ingest-by-real-time-customer-profile)  
1. [Confirm data ingest by Identity Service](#confirm-data-ingest-by-identity-service)  

## Getting started

This tutorial requires a working understanding of the various Adobe Experience Platform services involved in managing [!DNL Profile]-enabled datasets. Before beginning this tutorial, please review the documentation for these related [!DNL Platform] services:

- [[!DNL Real-time Customer Profile]](../home.md): Provides a unified, real-time consumer profile based on aggregated data from multiple sources.
- [[!DNL Identity Service]](../../identity-service/home.md): Enables [!DNL Real-time Customer Profile] by bridging identities from disparate data sources being ingested into [!DNL Platform].
- [[!DNL Catalog Service]](../../catalog/home.md): A RESTful API that allows you to create datasets and configure them for [!DNL Real-time Customer Profile] and [!DNL Identity Service].
- [[!DNL Experience Data Model (XDM)]](../../xdm/home.md): The standardized framework by which [!DNL Platform] organizes customer experience data.

The following sections provide additional information that you will need to know in order to successfully make calls to the Platform APIs.

### Reading sample API calls

This tutorial provides example API calls to demonstrate how to format your requests. These include paths, required headers, and properly formatted request payloads. Sample JSON returned in API responses is also provided. For information on the conventions used in documentation for sample API calls, see the section on [how to read example API calls](../../landing/troubleshooting.md#how-do-i-format-an-api-request) in the [!DNL Experience Platform] troubleshooting guide.

### Gather values for required headers

In order to make calls to [!DNL Platform] APIs, you must first complete the [authentication tutorial](https://www.adobe.com/go/platform-api-authentication-en). Completing the authentication tutorial provides the values for each of the required headers in all [!DNL Experience Platform] API calls, as shown below:

- `Authorization: Bearer {ACCESS_TOKEN}`
- `x-api-key: {API_KEY}`
- `x-gw-ims-org-id: {IMS_ORG}`

All requests that contain a payload (POST, PUT, PATCH) require an additional `Content-Type` header. The correct value for this header is shown in the sample requests where necessary.

All resources in [!DNL Experience Platform] are isolated to specific virtual sandboxes. All requests to [!DNL Platform] APIs require an `x-sandbox-name` header that specifies the name of the sandbox the operation will take place in. For more information on sandboxes in [!DNL Platform], see the [sandbox overview documentation](../../sandboxes/home.md). 

## Create a dataset enabled for [!DNL Profile] and [!DNL Identity] {#create-a-dataset-enabled-for-profile-and-identity}

You can enable a dataset for [!DNL Real-time Customer Profile] and [!DNL Identity Service] immediately upon creation or at any point after the dataset has been created. If you would like to enable a dataset that has already been created, follow the steps for [configuring an existing dataset](#configure-an-existing-dataset) found later in this document. To create a new dataset, you must know the ID of an existing XDM schema that is enabled for Real-time Customer Profile. For information on how to look-up or create a Profile-enabled schema, see the tutorial on [creating a schema using the Schema Registry API](../../xdm/tutorials/create-schema-api.md). The following call to the [!DNL Catalog] API enables a dataset for [!DNL Profile] and [!DNL Identity Service].

**API format**

```http
POST /dataSets
```

**Request**

By including `unifiedProfile` and `unifiedIdentity` under `tags` in the request body, the dataset will be immediately enabled for [!DNL Profile] and [!DNL Identity Service], respectively. The values of these tags must be an array containing the string `"enabled:true"`.

```shell
curl -X POST \
  https://platform.adobe.io/data/foundation/catalog/dataSets \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -d '{
    "fields":[],
    "schemaRef" : {
        "id": "https://ns.adobe.com/{TENANT_ID}/schemas/31670881463308a46f7d2cb09762715",
        "contentType": "application/vnd.adobe.xed-full-notext+json; version=1"
    },
    "tags" : {
       "unifiedProfile": ["enabled:true"],
       "unifiedIdentity": ["enabled:true"]
    }
  }'
```

|Property|Description|
|---|---|
|`schemaRef.id`|The ID of the [!DNL Profile]-enabled schema upon which the dataset will be based.|
|`{TENANT_ID}`|The namespace within the [!DNL Schema Registry] which contains resources belonging to your IMS Organization. See the [TENANT_ID](../../xdm/api/getting-started.md#know-your-tenant-id) section of the [!DNL Schema Registry] developer guide for more information.|

**Response**

A successful response shows an array containing the ID of the newly created dataset in the form of `"@/dataSets/{DATASET_ID}"`. Once you have successfully created and enabled a dataset, please proceed to the steps for [uploading data](#upload-data-to-the-dataset).

```json
[
    "@/dataSets/5b020a27e7040801dedbf46e"
] 
```

## Configure an existing dataset {#configure-an-existing-dataset}

The following steps cover how to enable a previously created dataset for [!DNL Real-time Customer Profile] and [!DNL Identity Service]. If you have already created a Profile-enabled dataset, please proceed to the steps for [ingesting data](#ingest-data-into-the-dataset).

### Check if the dataset is enabled {#check-if-the-dataset-is-enabled}

Using the [!DNL Catalog] API, you can inspect an existing dataset to determine whether it is enabled for use in [!DNL Real-time Customer Profile] and [!DNL Identity Service]. The following call retrieves the details of a dataset by ID.

**API format**

```http
GET /dataSets/{DATASET_ID}
```

|Parameter|Description|
|---|---|
|`{DATASET_ID}`|The ID of a dataset you want to inspect.|

**Request**

```shell
curl -X GET \
  'https://platform.adobe.io/data/foundation/catalog/dataSets/5b020a27e7040801dedbf46e' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

```json
{
    "5b020a27e7040801dedbf46e": {
        "name": "Commission Program Events DataSet",
        "imsOrg": "{IMS_ORG}",
        "tags": {
            "adobe/pqs/table": [
                "unifiedprofileingestiontesteventsdataset"
            ],
            "unifiedProfile": [
                "enabled:true"
            ],
            "unifiedIdentity": [
                "enabled:true"
            ]
        },
        "lastBatchId": "6dcd9128a1c84e6aa5177641165e18e4",
        "lastBatchStatus": "success",
        "dule": {},
        "statsCache": {
            "startDate": null,
            "endDate": null
        },
        "namespace": "ACP",
        "state": "DRAFT",
        "version": "1.0.1",
        "created": 1536536917382,
        "updated": 1539793978215,
        "createdClient": "{CLIENT_CREATED}",
        "createdUser": "{CREATED_BY}",
        "updatedUser": "{CREATED_BY}",
        "viewId": "5b020a27e7040801dedbf46f",
        "status": "enabled",
        "transforms": "@/dataSets/5b020a27e7040801dedbf46e/views/5b020a27e7040801dedbf46f/transforms",
        "files": "@/dataSets/5b020a27e7040801dedbf46e/views/5b020a27e7040801dedbf46f/files",
        "schema": "@/xdms/context/experienceevent",
        "schemaMetadata": {
            "primaryKey": [],
            "delta": [],
            "dule": [],
            "gdpr": []
        },
        "schemaRef": {
            "id": "https://ns.adobe.com/xdm/context/experienceevent",
            "contentType": "application/vnd.adobe.xed+json"
        }
    }
}
```

Under the `tags` property, you can see that `unifiedProfile` and `unifiedIdentity` are both present with the value `enabled:true`. Therefore, [!DNL Real-time Customer Profile] and [!DNL Identity Service] are enabled for this dataset, respectively.

### Enable the dataset {#enable-the-dataset}

If the existing dataset has not been enabled for [!DNL Profile] or [!DNL Identity Service], you can enable it by making a PATCH request using the dataset ID.

**API format**

```http
PATCH /dataSets/{DATASET_ID}
```

|Parameter|Description|
|---|---|
|`{DATASET_ID}`|The ID of a dataset you want to update.|

**Request**

```shell
curl -X PATCH \
  https://platform.adobe.io/data/foundation/catalog/dataSets/5b020a27e7040801dedbf46e \
  -H 'Content-Type:application/json-patch+json' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -d '[
        { "op": "add", "path": "/tags/unifiedProfile", "value": ["enabled:true"] },
        { "op": "add", "path": "/tags/unifiedIdentity", "value": ["enabled:true"] }	
      ]'
```

The request body includes a `path` to two types of tags, `unifiedProfile` and `unifiedIdentity`. The `value` of each are arrays containing the string `enabled:true`.

**Response**
A successful PATCH request returns HTTP Status 200 (OK) and an array containing the ID of the updated dataset. This ID should match the one sent in the PATCH request. The `unifiedProfile` and `unifiedIdentity` tags have now been added and the dataset is enabled for use by Profile and Identity services.

```json
[
    "@/dataSets/5b020a27e7040801dedbf46e"
]
```

## Ingest data into the dataset {#ingest-data-into-the-dataset}

Both [!DNL Real-time Customer Profile] and [!DNL Identity Service] consume XDM data as it is being ingested into a dataset. For instructions on how to upload data into a dataset, refer to the tutorial on [creating a dataset using APIs](../../catalog/datasets/create.md). When planning what data to send to your [!DNL Profile]-enabled dataset, consider the following best practices:

- Include any data you want to use as audience segment criteria. 
- Include as many identifiers as you can ascertain from your profile data to maximize your identity graph. This allows [!DNL Identity Service] to stitch identities across datasets more effectively.

## Confirm data ingest by [!DNL Real-time Customer Profile] {#confirm-data-ingest-by-real-time-customer-profile}

When uploading data to a new dataset for the first time, or as part of a process involving a new ETL or data source, it is recommended to carefully check the data to ensure it has been uploaded as expected. Using the [!DNL Real-time Customer Profile] Access API, you can retrieve batch data as it gets loaded into a dataset. If you are unable to retrieve any of the entities you expect, your dataset may not be enabled for [!DNL Real-time Customer Profile]. After confirming that your dataset has been enabled, ensure that your source data format and identifiers support your expectations. For detailed instructions on how to use the [!DNL Real-time Customer Profile] API to access [!DNL Profile] data, please follow the [entities endpoint guide](../api/entities.md), also known as the "[!DNL Profile Access] API".

## Confirm data ingest by Identity Service {#confirm-data-ingest-by-identity-service}

Each data fragment ingested that contains more than one identity creates a link in your private identity graph. For more information on identity graphs and access identity data, please begin by reading the [Identity Service overview](../../identity-service/home.md).
