---
keywords: Experience Platform;home;popular topics
solution: Experience Platform
title: Manage data usage labels using APIs 
topic: developer guide
---

# Manage data usage labels using APIs

This document provides steps on how to manage data usage labels at the dataset- and field-level using the Dataset Service API.

## Getting started

The following sections provide additional information that you will need to know in order to successfully make calls to the Schema Registry API.

### Reading sample API calls

This guide provides example API calls to demonstrate how to format your requests. These include paths, required headers, and properly formatted request payloads. Sample JSON returned in API responses is also provided. For information on the conventions used in documentation for sample API calls, see the section on [how to read example API calls](../../landing/troubleshooting.md#how-do-i-format-an-api-request) in the Experience Platform troubleshooting guide.

### Gather values for required headers

In order to make calls to Platform APIs, you must first complete the [authentication tutorial](../../tutorials/authentication.md). Completing the authentication tutorial provides the values for each of the required headers in all Experience Platform API calls, as shown below:

- Authorization: Bearer `{ACCESS_TOKEN}`
- x-api-key: `{API_KEY}`
- x-gw-ims-org-id: `{IMS_ORG}`

All resources in Experience Platform are isolated to specific virtual sandboxes. All requests to Platform APIs require a header that specifies the name of the sandbox the operation will take place in:

- x-sandbox-name: `{SANDBOX_NAME}`

>[!NOTE] For more information on sandboxes in Platform, see the [sandbox overview documentation](../../sandboxes/home.md).

All requests that contain a payload (POST, PUT, PATCH) require an additional header:

- Content-Type: application/json

### Obtain a dataset ID

In order to make calls to the endpoints outlined in the sections below, you must have the unique `id` value for a specific dataset. If you do not have this value, see the developer guide section on [listing Catalog objects](../../catalog/api/list-objects.md) to find the IDs of your existing datasets.

## Look up labels for a dataset {#lookup}

You can look up the data usage labels that have been applied to an existing dataset by making a GET request.

**API format**

```http
GET /datasets/{DATASET_ID}/labels
```

| Parameter | Description |
| --- | --- |
| `{DATASET_ID}` | The unique `id` value of the dataset whose labels you want to look up. |

**Request**

```shell
curl -X GET \
  'https://platform.adobe.io/data/foundation/dataset/datasets/5abd49645591445e1ba04f87/labels' \
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
| `optionalLabels` | A list of individual fields within the dataset that have data usage labels applied to them. |

## Apply labels to a dataset

You can create a set of labels for a dataset by providing them in the payload of a POST or PUT request. Using either of these methods overwrites any existing labels and replaces them with those provided in the payload.

**API format**

```http
POST /datasets/{DATASET_ID}/labels
PUT /datasets/{DATASET_ID}/labels
```

| Parameter | Description |
| --- | --- |
| `{DATASET_ID}` | The unique `id` value of the dataset that you are creating labels for. |

**Request**

The following POST request adds a series of labels to the dataset, as well as a specific field within that dataset. The fields provided in the payload are the same as would be required for a PUT request.

```shell
curl -X POST \
  'https://platform.adobe.io/data/foundation/dataset/datasets/5abd49645591445e1ba04f87/labels' \
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
| `optionalLabels` | A list of any individual fields within the dataset that you want to add labels to. Each item in this array must have the following properties: <br/><br/>`option`: An object that contains the Experience Data Model (XDM) attributes of the field. The following three properties are required:<ul><li><code>id</code>: The URI <code>$id</code> value of the schema associated with the field.</li><li><code>contentType</code>: The content type and version number of the schema. This should take the form of one of the valid <a href="../../xdm/api/look-up-resource.md">Accept headers</a> for an XDM lookup request.</li><li><code>schemaPath</code>: The path to the field within the dataset's schema.</li></ul>`labels`: A list of data usage labels that you want to add to the field. |

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

## Delete labels for a dataset

You can delete the labels applied to a dataset by making a DELETE request.

**API format**

```http
DELETE /datasets/{DATASET_ID}/labels
```

| Parameter | Description |
| --- | --- |
| `{DATASET_ID}` | The unique `id` value of the dataset whose labels you want to delete. |

**Request**

```shell
curl -X DELETE \
  'https://platform.adobe.io/data/foundation/dataset/datasets/5abd49645591445e1ba04f87/labels' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response HTTP status 200 (OK), indicating that the labels have been deleted. You can [look up the existing labels](#lookup) for the dataset in a separate call to confirm this.

## Next steps

Now that you have added data usage labels at the dataset- and field-level, you can begin to ingest data into Experience Platform. To learn more, start by reading the [data ingestion documentation](../../ingestion/home.md).

You can also now define data usage policies based on the labels you have applied. For more information, see the [data usage policies overview](../policies/overview.md).