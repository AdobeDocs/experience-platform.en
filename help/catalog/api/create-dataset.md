---
keywords: Experience Platform;home;popular topics;dataset;Dataset;create a dataset;create dataset;enable dataset
solution: Experience Platform
title: Create a Dataset in the API
description: This document covers how to create a dataset object in the Catalog Service API.
exl-id: f3e5de7f-1781-4898-ac42-063eb51e661a
---
# Create a dataset in the API

In order to create a dataset using the [!DNL Catalog] API, you must know the `$id` value of the [!DNL Experience Data Model] (XDM) schema on which the dataset will be based. Once you have the schema ID, you can create a dataset by making a POST request to the `/datasets` endpoint in the [!DNL Catalog] API.

>[!NOTE]
>
>This document only covers how to create a dataset object in [!DNL Catalog]. For full steps on how to create, populate, and monitor a dataset, please refer to the following [tutorial](../datasets/create.md).

**API format**

```HTTP
POST /dataSets
```

**Request**

The following request creates a dataset that references a previously defined schema.

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
| `name` | The name of the dataset to be created. |
| `schemaRef.id` | The URI `$id` value for the XDM schema the dataset will be based on. |
| `schemaRef.contentType` | Indicates the format and version of the schema. See the section on [schema versioning](../../xdm/api/getting-started.md#versioning) in the XDM API guide for more information. |

>[!NOTE]
>
>This example uses the [Apache Parquet](https://parquet.apache.org/docs/) file format for its `containerFormat` property. An example that uses the JSON file format can be found in the [batch ingestion developer guide](../../ingestion/batch-ingestion/api-overview.md).

**Response**

A successful response returns HTTP Status 201 (Created) and a response object that consists of an array containing the ID of the newly created dataset in the format `"@/datasets/{DATASET_ID}"`. The dataset ID is a read-only, system-generated string that is used to reference the dataset in API calls.

```JSON
[
    "@/dataSets/5c8c3c555033b814b69f947f"
]
```
