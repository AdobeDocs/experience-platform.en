---
keywords: Experience Platform;home;popular topics;catalog;api;replace an object
solution: Experience Platform
title: Replace a Catalog Object
description: You can overwrite the contents of a Catalog object using a PUT request, wherein the entire resource is replaced with the request payload.
exl-id: cd98d13c-5261-4bff-b5db-af5f06d093c9
---
# Replace a Catalog object

You can overwrite the contents of a [!DNL Catalog] object using a PUT request, wherein the entire resource is replaced with the request payload.

>[!NOTE]
>
>If you only need to update a few specific fields within a [!DNL Catalog] object, using a PATCH request may be more efficient.

**API format**

```http
PUT /{OBJECT_TYPE}/{OBJECT_ID}
```

| Parameter | Description |
| --- | --- |
| `{OBJECT_TYPE}` | The type of [!DNL Catalog] object to be replaced. Valid objects are: <ul><li>`batches`</li><li>`dataSets`</li><li>`dataSetFiles`</li></ul> |
| `{OBJECT_ID}` | The identifier of the specific object you want to update. |

**Request**

The following request overwrites a dataset with the values provided in the payload.

```shell
curl -X PUT \
  https://platform.adobe.io/data/foundation/catalog/dataSets/5ba9452f7de80400007fc52a \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'Content-Type: application/json' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -d '{
        "name": "New Dataset Name",
        "description": "New description for dataset",
        "tags": {
            "adobe/pqs/table": [
                "sample_dataset"
            ]
        },
        "files": "@/dataSetFiles?dataSetId=5ba9452f7de80400007fc52a"
    }'
```

**Response**

A successful response returns an array containing the ID of the overwritten object. This ID should match the one sent in the PUT request. Performing a GET request for this object now shows that its details have be replaced with those provided in the payload of the previous PUT request.

```json
[
    "@/dataSets/5ba9452f7de80400007fc52a"
]
```
