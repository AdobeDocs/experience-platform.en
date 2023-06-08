---
keywords: Experience Platform;profile;real-time customer profile;troubleshooting;API;enable dataset
title: Enable a Dataset for Profile Updates using APIs
type: Tutorial
description: This tutorial shows you how to use Adobe Experience Platform APIs to enable a dataset with "upsert" capabilities in order to make updates to Real-Time Customer Profile data.
exl-id: fc89bc0a-40c9-4079-8bfc-62ec4da4d16a
---
# Enable a dataset for profile updates using APIs

This tutorial covers the process of enabling a dataset with "upsert" capabilities in order to make updates to Real-Time Customer Profile data. This includes steps for creating a new dataset and configuring an existing dataset. 

>[!NOTE]
>
>The upsert workflow only works for batch ingestion. Streaming ingestion is **not** supported.

## Getting started

This tutorial requires a working understanding of several Adobe Experience Platform services involved in managing Profile-enabled datasets. Before beginning this tutorial, please review the documentation for these related [!DNL Platform] services:

- [[!DNL Real-Time Customer Profile]](../../profile/home.md): Provides a unified, real-time consumer profile based on aggregated data from multiple sources.
- [[!DNL Catalog Service]](../../catalog/home.md): A RESTful API that allows you to create datasets and configure them for [!DNL Real-Time Customer Profile] and [!DNL Identity Service].
- [[!DNL Experience Data Model (XDM)]](../../xdm/home.md): The standardized framework by which [!DNL Platform] organizes customer experience data.
- [Batch ingestion](../../ingestion/batch-ingestion/overview.md): The Batch Ingestion API allows you to ingest data into Experience Platform as batch files.

The following sections provide additional information that you will need to know in order to successfully make calls to the Platform APIs.

### Reading sample API calls

This tutorial provides example API calls to demonstrate how to format your requests. These include paths, required headers, and properly formatted request payloads. Sample JSON returned in API responses is also provided. For information on the conventions used in documentation for sample API calls, see the section on [how to read example API calls](../../landing/troubleshooting.md#how-do-i-format-an-api-request) in the [!DNL Experience Platform] troubleshooting guide.

### Gather values for required headers

In order to make calls to [!DNL Platform] APIs, you must first complete the [authentication tutorial](https://www.adobe.com/go/platform-api-authentication-en). Completing the authentication tutorial provides the values for each of the required headers in all [!DNL Experience Platform] API calls, as shown below:

- `Authorization: Bearer {ACCESS_TOKEN}`
- `x-api-key: {API_KEY}`
- `x-gw-ims-org-id: {ORG_ID}`

All requests that contain a payload (POST, PUT, PATCH) require an additional `Content-Type` header. The correct value for this header is shown in the sample requests where necessary.

All resources in [!DNL Experience Platform] are isolated to specific virtual sandboxes. All requests to [!DNL Platform] APIs require an `x-sandbox-name` header that specifies the name of the sandbox the operation will take place in. For more information on sandboxes in [!DNL Platform], see the [sandbox overview documentation](../../sandboxes/home.md). 

## Create a dataset enabled for profile updates

When creating a new dataset, you can enable that dataset for Profile and enable update capabilities at the time of creation. 

>[!NOTE]
>
>To create a new Profile-enabled dataset, you must know the ID of an existing XDM schema that is enabled for Profile. For information on how to look-up or create a Profile-enabled schema, see the tutorial on [creating a schema using the Schema Registry API](../../xdm/tutorials/create-schema-api.md). 

To create a dataset that is enabled for Profile and updates, use a POST request to the `/dataSets` endpoint.

**API format**

```http
POST /dataSets
```

**Request**

By including both the `unifiedIdentity` and the `unifiedProfile` under `tags` in the request body, the dataset will be enabled for [!DNL Profile] upon creation. Within the `unifiedProfile` array, adding `isUpsert:true` will add the ability for the dataset to support updates.

```shell
curl -X POST \
  https://platform.adobe.io/data/foundation/catalog/dataSets \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -d '{
        "name": "Sample dataset",
        "description: "A sample dataset with a sample description.",
        "schemaRef": {
            "id": "https://ns.adobe.com/{TENANT_ID}/schemas/31670881463308a46f7d2cb09762715",
            "contentType": "application/vnd.adobe.xed-full-notext+json; version=1"
        },
        "tags": {
            "unifiedIdentity": [
                "enabled: true"
            ],
            "unifiedProfile": [
                "enabled: true",
                "isUpsert: true"
            ]
        }
      }'
```

| Property | Description |
| -------- | ----------- |
|`schemaRef.id` | The ID of the [!DNL Profile]-enabled schema upon which the dataset will be based. |
|`{TENANT_ID}` | The namespace within the [!DNL Schema Registry] which contains resources belonging to your organization. See the [TENANT_ID](../../xdm/api/getting-started.md#know-your-tenant-id) section of the [!DNL Schema Registry] developer guide for more information. |

**Response**

A successful response shows an array containing the ID of the newly created dataset in the form of `"@/dataSets/{DATASET_ID}"`.

```json
[
    "@/dataSets/5b020a27e7040801dedbf46e"
] 
```

## Configure an existing dataset {#configure-an-existing-dataset}

The following steps cover how to configure an existing Profile-enabled dataset for update (upsert) functionality. 

>[!NOTE]
>
>In order to configure an existing Profile-enabled dataset for upsert, you must first disable the dataset for Profile and then re-enable it alongside the `isUpsert` tag. If the existing dataset is not enabled for Profile, you can proceed directly to the steps for [enabling the dataset for Profile and upsert](#enable-the-dataset). If you are unsure, the following steps show you how to check if the dataset is enabled already.

### Check if the dataset is enabled for Profile

Using the [!DNL Catalog] API, you can inspect an existing dataset to determine whether it is enabled for use in [!DNL Real-Time Customer Profile]. The following call retrieves the details of a dataset by ID.

**API format**

```http
GET /dataSets/{DATASET_ID}
```

| Parameter | Description |
| --------- | ----------- |
| `{DATASET_ID}` | The ID of a dataset you want to inspect.|

**Request**

```shell
curl -X GET 'https://platform.adobe.io/data/foundation/catalog/dataSets/5b020a27e7040801dedbf46e' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

```json
{
    "5b020a27e7040801dedbf46e": {
        "name": "{DATASET_NAME}",
        "imsOrg": "{ORG_ID}",
        "tags": {
            "adobe/pqs/table": [
                "unifiedprofileingestiontesteventsdataset"
            ],
            "unifiedIdentity": [
                "enabled:true"
            ],
            "unifiedProfile": [
                "enabled:true"
            ]
        },
        "version": "1.0.1",
        "created": 1536536917382,
        "updated": 1539793978215,
        "createdClient": "{CLIENT_CREATED}",
        "createdUser": "{CREATED_BY}",
        "updatedUser": "{CREATED_BY}",
        "viewId": "{VIEW_ID}",
        "files": "@/dataSets/5b020a27e7040801dedbf46e/views/5b020a27e7040801dedbf46f/files",
        "schema": "{SCHEMA}",
        "schemaRef": {
            "id": "https://ns.adobe.com/xdm/context/experienceevent",
            "contentType": "application/vnd.adobe.xed+json"
        }
    }
}
```

Under the `tags` property, you can see that `unifiedProfile` is present with the value `enabled:true`. Therefore, [!DNL Real-Time Customer Profile] is enabled for this dataset.

### Disable the dataset for Profile

In order to configure a Profile-enabled dataset for updates, you must first disable the `unifiedProfile` and `unifiedIdentity` tags and then re-enable them alongside the `isUpsert` tag. This is done using two PATCH requests, once to disable and one to re-enable.

>[!WARNING]
>
>Data ingested into the dataset while it is disabled will not be ingested into the Profile Store. You should avoid ingesting data into the dataset until it has been re-enabled for Profile.

**API format**

```http
PATCH /dataSets/{DATASET_ID}
```

| Parameter | Description |
| --------- | ----------- |
|`{DATASET_ID}` | The ID of the dataset you want to update.|

**Request**

The first PATCH request body includes a `path` to `unifiedProfile` and a `path` to `unifiedIdentity`, setting the `value` to `enabled:false` for both of these paths in order to disable the tags.

```shell
curl -X PATCH https://platform.adobe.io/data/foundation/catalog/dataSets/5b020a27e7040801dedbf46e \
  -H 'Content-Type:application/json-patch+json' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -d '[
        { 
            "op": "replace", 
            "path": "/tags/unifiedProfile", 
            "value": ["enabled:false"] 
        },
        {
            "op": "replace",
            "path": "/tags/unifiedIdentity",
            "value": ["enabled:false"]
        }
      ]'
```

**Response**

A successful PATCH request returns HTTP Status 200 (OK) and an array containing the ID of the updated dataset. This ID should match the one sent in the PATCH request. The `unifiedProfile` and `unifiedIdentity` tags have now been disabled.

```json
[
    "@/dataSets/5b020a27e7040801dedbf46e"
]
```

### Enable the dataset for Profile and upsert {#enable-the-dataset}

An existing dataset can be enabled for Profile and attribute updates using a single PATCH request.

>[!IMPORTANT]
>
>When enabling your dataset for Profile, please ensure the schema the dataset is associated with is **also** Profile-enabled. If the schema is not Profile-enabled, the dataset will **not** appear as Profile-enabled within the Platform UI.

**API format**

```http
PATCH /dataSets/{DATASET_ID}
```

| Parameter | Description |
| --------- | ----------- |
|`{DATASET_ID}` | The ID of a dataset you want to update. |

**Request**

The request body includes a `path` to `unifiedProfile` setting the `value` to include the `enabled` and `isUpsert` tags, both set to `true`, and a `path` to `unifiedIdentity` setting the `value` to include the `enabled` tag set to `true`.

```shell
curl -X PATCH https://platform.adobe.io/data/foundation/catalog/dataSets/5b020a27e7040801dedbf46e \
  -H 'Content-Type:application/json-patch+json' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -d '[
        { 
            "op": "add", 
            "path": "/tags/unifiedProfile", 
            "value": [
                "enabled:true",
                "isUpsert:true"
            ] 
        },
        {
            "op": "add",
            "path": "/tags/unifiedIdentity",
            "value": [
                "enabled:true"
            ]
        }
      ]'
```

**Response**

A successful PATCH request returns HTTP Status 200 (OK) and an array containing the ID of the updated dataset. This ID should match the one sent in the PATCH request. The `unifiedProfile` tag and `unifiedIdentity` tag have now been enabled and configured for attribute updates.

```json
[
    "@/dataSets/5b020a27e7040801dedbf46e"
]
```

## Next steps

Your Profile and upsert-enabled dataset can now be used by batch ingestion workflows to make updates to profile data. To learn more about ingesting data into Adobe Experience Platform, please begin by reading the [data ingestion overview](../../ingestion/home.md).
