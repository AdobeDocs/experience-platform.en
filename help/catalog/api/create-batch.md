---
keywords: Experience Platform;home;popular topics;create batch;catalog service;api
solution: Experience Platform
title: Create a Batch in the API
description: You can create a batch by making a POST request to the /batches endpoint in the Catalog API.
exl-id: 1d2cbca9-1cd6-4b89-9b77-3687268bd849
TQID: https://experienceleague.adobe.com/aTA7HpLfGwjI5bVLhTG-IgAWam475cYGc9s5l3Fm1-w
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: a004cc84-67b9-4a33-a3a7-8ec7273ef4dc
    internal-label: Metadata
---
# Create a batch

In order for a dataset to ingest data, it must have a batch associated with it. Using the `id` value of an existing dataset, you can create a batch by making a POST request to the `/batches` endpoint in the [!DNL Catalog] API.

**API format**

```HTTP
POST /batches
```

**Request**

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

| Property | Description |
| --- | --- |
| `datasetId` | The `id` of the dataset the batch will be associated with. |

**Response**

A successful response returns HTTP Status 201 (Created) and a response object containing details of the newly created batch, including its `id`, a read-only, system generated string.

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
