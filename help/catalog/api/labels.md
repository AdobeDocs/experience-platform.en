---
keywords: Experience Platform;home;popular topics
solution: Experience Platform
title: Data usage labels
topic: developer guide
---

# Data usage labels

The Catalog Service API provides endpoints to manage data usage labels for datasets. For a robust introduction to the role of data usage labels within the Adobe Experience Platform Data Governance framework, please refer to the [labels overview](../../data-governance/labels/overview.md).

>[!NOTE] In order to make calls to the endpoints outlined in the sections below, you must have the unique `id` value for a specific dataset. If you do not have this value, see the section on [listing Catalog objects](list-objects.md) to find the IDs of your existing datasets.

## Look up labels for a dataset {#lookup}

You can look up the data usage labels that have been applied to an existing dataset by making a GET request.

**API format**

```http
GET /dataSets/{DATASET_ID}/labels
```

| Parameter | Description |
| --- | --- |
| `{DATASET_ID}` | The unique `id` value of the dataset whose labels you want to look up. |

**Request**

```shell
curl -X GET \
  'https://platform.adobe.io/data/foundation/catalog/dataSets/5abd49645591445e1ba04f87/labels' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns the data usage labels that have been applied to the dataset.

```json
{
  "AEP:dataset:5abd49645591445e1ba04f87": {
    "imsOrg": "{IMS_ORG}",
    "labels": [ "C1", "C2", "C3", "I1", "I2" ],
    "optionalLabels": [
      {
        "option": {
          "id": "https://ns.adobe.com/{TENANT_ID}/schemas/c6b1b09bc3f2ad2627c1ecc719826836",
          "contentType": "application/vnd.adobe.xed-full+json;version=1",
          "schemaPath": "/properties/repositoryCreatedBy"
        },
        "labels": [ "S1", "S2" ]
      }
    ]
  }
}
```

| Property | Description |
| --- | --- |
| `labels` | A list of data usage labels that have been applied to the dataset. |
| `optionalLabels` | A list of optional fields or schemas within the dataset, and the data usage labels that apply to them. |

## Create labels for a dataset

You can create a set of labels for a dataset by providing them in the payload of a POST request.

**API format**

```http
POST /dataSets/{DATASET_ID}/labels
```

| Parameter | Description |
| --- | --- |
| `{DATASET_ID}` | The unique `id` value of the dataset that you are creating labels for. |

**Request**

```shell
curl -X POST \
  'https://platform.adobe.io/data/foundation/catalog/dataSets/5abd49645591445e1ba04f87/labels' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json' \
  -d '{
  "labels": [ "C1", "C2", "C3", "I1", "I2" ],
  "optionalLabels": [
    {
      "option": {
        "id": "https://ns.adobe.com/{TENANT_ID}/schemas/c6b1b09bc3f2ad2627c1ecc719826836",
        "contentType": "application/vnd.adobe.xed-full+json;version=1",
        "schemaPath": "/properties/repositoryCreatedBy"
      },
      "labels": [ "S1", "S2" ]
    }
  ]
}'
```

| Property | Description |
| --- | --- |
| `labels` | A list of data usage labels that you want to add to the dataset. |
| `optionalLabels` | A list of any optional fields or schemas within the dataset that you want to add labels to. Each item in this array must have the following properties: <br/><br/>`option`: The Experience Data Model (XDM) schema of the optional field. This object must contain the following three properties:<ul><li><code>id</code>: The URI <code>$id</code> value of the schema.</li><li><code>contentType</code>: The content type and version number of the schema. This should take the form of one of the valid <a href="../../xdm/api/look-up-resource.md">Accept headers</a> for an XDM lookup request.</li><li><code>schemaPath</code>: The path to the optional field within the dataset's schema.</li></ul>`labels`: A list of data usage labels that you want to add to the optional field. |

**Response**

A successful response returns the labels that have been added to the dataset.

```json
{
  "labels": [ "C1", "C2", "C3", "I1", "I2" ],
  "optionalLabels": [
    {
      "option": {
        "id": "https://ns.adobe.com/{TENANT_ID}/schemas/c6b1b09bc3f2ad2627c1ecc719826836",
        "contentType": "application/vnd.adobe.xed-full+json;version=1",
        "schemaPath": "/properties/repositoryCreatedBy"
      },
      "labels": [ "S1", "S2" ]
    }
  ]
}
```

## Overwrite labels for a dataset

You can overwrite the labels applied to a dataset by providing a new set of labels in the payload of a PUT request.

**API format**

```http
PUT /dataSets/{DATASET_ID}/labels
```

| Parameter | Description |
| --- | --- |
| `{DATASET_ID}` | The unique `id` value of the dataset whose labels you want to overwrite. |

**Request**

The following request overwrites the labels that have been applied to the dataset. Keep in mind that any existing labels that are not included in the payload will be removed from the dataset.

```shell
curl -X PUT \
  'https://platform.adobe.io/data/foundation/catalog/dataSets/5abd49645591445e1ba04f87/labels' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json' \
  -d '{
  "labels": [ "C2", "C3", "C4", "C6", "I1", "I2" ],
  "optionalLabels": [
    {
      "option": {
        "id": "https://ns.adobe.com/{TENANT_ID}/schemas/c6b1b09bc3f2ad2627c1ecc719826836",
        "contentType": "application/vnd.adobe.xed-full+json;version=1",
        "schemaPath": "/properties/repositoryCreatedBy"
      },
      "labels": [ "S1", "S2" ]
    }
  ]
}'
```

| Property | Description |
| --- | --- |
| `labels` | A list of data usage labels that will overwrite the existing labels for the dataset. |
| `optionalLabels` | A list of any optional fields or schemas within the dataset whose labels you wish to overwrite or maintain. Each item in this array must have the following properties: <br/><br/>`option`: The Experience Data Model (XDM) schema of the optional field. This object must contain the following three properties:<ul><li><code>id</code>: The URI <code>$id</code> value of the schema.</li><li><code>contentType</code>: The content type and version number of the schema. This should take the form of one of the valid <a href="../../xdm/api/look-up-resource.md">Accept headers</a> for an XDM lookup request.</li><li><code>schemaPath</code>: The path to the optional field within the dataset's schema.</li></ul>`labels`: A list of data usage labels that you want to add to the optional field. |

## Delete labels for a dataset

You can delete the labels applied to a dataset by making a DELETE request.

>[!NOTE] You should only use this operation when preparing the parent dataset for deletion. 

**API format**

```http
DELETE /dataSets/{DATASET_ID}/labels
```

| Parameter | Description |
| --- | --- |
| `{DATASET_ID}` | The unique `id` value of the dataset whose labels you want to delete. |

**Request**

```shell
curl -X DELETE \
  'https://platform.adobe.io/data/foundation/catalog/dataSets/5abd49645591445e1ba04f87/labels' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response HTTP status 200 (OK), indicated that the labels have been deleted. You can [look up the existing labels](#lookup) for the dataset in a separate call to confirm this.
