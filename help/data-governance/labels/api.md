---
keywords: Experience Platform;home;popular topics;data governance;data usage label api;policy service api
solution: Experience Platform
title: Manage Data Usage Labels Using APIs 
description: The Dataset Service API allows you to apply and edit usage labels for datasets. It is part of Adobe Experience Platform's data catalog capabilities, but is separate from the Catalog Service API which manages dataset metadata.
---

# Manage data usage labels using APIs

This document provides steps on how to manage data usage labels using the [!DNL Policy Service] API and [!DNL Dataset Service] API.

The [[!DNL Policy Service API]](https://www.adobe.io/experience-platform-apis/references/policy-service/) provides several endpoints that allow you to create and manage data usage labels for your organization.

The [!DNL Dataset Service] API allows you to apply and edit usage labels for datasets. It is part of Adobe Experience Platform's data catalog capabilities, but is separate from the [!DNL Catalog Service] API which manages dataset metadata.

## Getting started

Before you read this guide, follow the steps outlined in the [getting started section](../../catalog/api/getting-started.md) in the Catalog developer guide to gather the required credentials to make calls to [!DNL Platform] APIs.

In order to make calls to the [!DNL Dataset Service] endpoints outlined in this document, you must have the unique `id` value for a specific dataset. If you do not have this value, see the guide on [listing Catalog objects](../../catalog/api/list-objects.md) to find the IDs of your existing datasets.

## List all labels {#list-labels}

Using the [!DNL Policy Service] API, you can list all `core` or `custom` labels by making a GET request to `/labels/core` or `/labels/custom`, respectively.

**API format**

```http
GET /labels/core
GET /labels/custom
```

**Request**

The following request lists all custom labels created under your organization.

```shell
curl -X GET \
  'https://platform.adobe.io/data/foundation/dulepolicy/labels/custom' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns a list of custom labels retrieved from the system. Since the example request above was made to `/labels/custom`, the response below only shows custom labels.

```json
{
    "_page": {
        "count": 2
    },
    "_links": {
        "page": {
            "href": "https://platform.adobe.io:443/data/foundation/dulepolicy/labels/custom?{?limit,start,property}",
            "templated": true
        }
    },
    "children": [
        {
            "name": "L1",
            "category": "Custom",
            "friendlyName": "Banking Information",
            "description": "Data containing banking information for a customer.",
            "imsOrg": "{ORG_ID}",
            "sandboxName": "{SANDBOX_NAME}",
            "created": 1594396718731,
            "createdClient": "{CLIENT_ID}",
            "createdUser": "{USER_ID}",
            "updated": 1594396718731,
            "updatedClient": "{CLIENT_ID}",
            "updatedUser": "{USER_ID}",
            "_links": {
                "self": {
                    "href": "https://platform.adobe.io:443/data/foundation/dulepolicy/labels/custom/L1"
                }
            }
        },
        {
            "name": "L2",
            "category": "Custom",
            "friendlyName": "Purchase History Data",
            "description": "Data containing information on past transactions",
            "imsOrg": "{ORG_ID}",
            "sandboxName": "{SANDBOX_NAME}",
            "created": 1594397415663,
            "createdClient": "{CLIENT_ID}",
            "createdUser": "{USER_ID}",
            "updated": 1594397728708,
            "updatedClient": "{CLIENT_ID}",
            "updatedUser": "{USER_ID}",
            "_links": {
                "self": {
                    "href": "https://platform.adobe.io:443/data/foundation/dulepolicy/labels/custom/L2"
                }
            }
        }
    ]
}
```

## Look up a label {#look-up-label}

You can look up a specific label by including that label's `name` property in the path of a GET request to the [!DNL Policy Service] API.

**API format**

```http
GET /labels/core/{LABEL_NAME}
GET /labels/custom/{LABEL_NAME}
```

| Parameter | Description |
| --- | --- |
| `{LABEL_NAME}` | The `name` property of the custom label you want to look up. |

**Request**

The following request retrieves the custom label `L2`, as indicated in the path.

```shell
curl -X GET \
  'https://platform.adobe.io/data/foundation/dulepolicy/labels/custom/L2' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns the details of the custom label.

```json
{
    "name": "L2",
    "category": "Custom",
    "friendlyName": "Purchase History Data",
    "description": "Data containing information on past transactions",
    "imsOrg": "{ORG_ID}",
    "sandboxName": "{SANDBOX_NAME}",
    "created": 1594397415663,
    "createdClient": "{CLIENT_ID}",
    "createdUser": "{USER_ID}",
    "updated": 1594397728708,
    "updatedClient": "{CLIENT_ID}",
    "updatedUser": "{USER_ID}",
    "_links": {
        "self": {
            "href": "https://platform.adobe.io:443/data/foundation/dulepolicy/labels/custom/L2"
        }
    }
}
```

## Create or update a custom label {#create-update-label}

To create or update a custom label, you must make a PUT request to the [!DNL Policy Service] API.

**API format**

```http
PUT /labels/custom/{LABEL_NAME}
```

| Parameter | Description |
| --- | --- |
| `{LABEL_NAME}` | The `name` property of a custom label. If a custom label with this name does not exist, a new label will be created. If one does exist, that label will be updated. |

**Request**

The following request creates a new label, `L3`, which aims to describe data that contains information relating to customers' selected payment plans.

```shell
curl -X PUT \
  'https://platform.adobe.io/data/foundation/dulepolicy/labels/custom/L3' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -d '{
        "name": "L3",
        "category": "Custom",
        "friendlyName": "Payment Plan",
        "description": "Data containing information on selected payment plans."
      }'
```

| Property | Description |
| --- | --- |
| `name` | A unique string identifier for the label. This value is used for lookup purposes and applying the label to datasets and fields, and thus it is recommended that it be short and concise. |
| `category` | The category of the label. While you can create your own categories for custom labels, it is strongly recommended that you use `Custom` if you want the label to appear in the UI. |
| `friendlyName` | A friendly name for the label, used for display purposes. |
| `description` | (Optional) A description of the label to provide further context. |

**Response**

A successful response returns the details of custom label, with HTTP code 200 (OK) if an existing label was updated, or 201 (Created) if a new label was created.

```json
{
  "name": "L3",
  "category": "Custom",
  "friendlyName": "Payment Plan",
  "description": "Data containing information on selected payment plans.",
  "imsOrg": "{ORG_ID}",
  "sandboxName": "{SANDBOX_NAME}",
  "created": 1529696681413,
  "createdClient": "{CLIENT_ID}",
  "createdUser": "{USER_ID}",
  "updated": 1529697651972,
  "updatedClient": "{CLIENT_ID}",
  "updatedUser": "{USER_ID}",
  "_links": {
    "self": {
      "href": "https://platform.adobe.io:443/data/foundation/dulepolicy/labels/custom/L3"
    }
  }
}
```

## Look up labels for a dataset {#look-up-dataset-labels}

You can look up the data usage labels that have been applied to an existing dataset by making a GET request to the [!DNL Dataset Service] API.

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
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns the data usage labels that have been applied to the dataset.

```json
{
  "AEP:dataset:5abd49645591445e1ba04f87": {
    "imsOrg": "{ORG_ID}",
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
| `optionalLabels` | A list of individual fields within the dataset that have data usage labels applied to them. The following sub-properties are required:<br/><br/>`option`: An object that contains the [!DNL Experience Data Model] (XDM) attributes of the field. The following three properties are required:<ul><li>`id`: The URI `$id` value of the schema associated with the field.</li><li>`contentType`: Indicates the format and version of the schema. See the section on [schema versioning](../../xdm/api/getting-started.md#versioning) in the XDM API guide for more information.</li><li>`schemaPath`: The path to the schema property in question, written in [JSON Pointer](../../landing/api-fundamentals.md#json-pointer) syntax.</li></ul>`labels`: A list of data usage labels that you want to add to the field.|

- id: The URI $id value for the XDM schema that the dataset is based on.
- contentType: Indicates the format and version of the schema. See the section on [schema versioning](../../xdm/api/getting-started.md#versioning) in the XDM API guide for more information.
- schemaPath: The path to the schema property in question, written in [JSON Pointer](../../landing/api-fundamentals.md#json-pointer) syntax.

## Apply labels to a dataset {#apply-dataset-labels}

You can create a set of labels for a dataset by providing them in the payload of a POST or PUT request to the [!DNL Dataset Service] API. Using either of these methods overwrites any existing labels and replaces them with those provided in the payload.

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
  -H 'x-gw-ims-org-id: {ORG_ID}' \
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
| `optionalLabels` | A list of any individual fields within the dataset that you want to add labels to. Each item in this array must have the following properties:<br/><br/>`option`: An object that contains the [!DNL Experience Data Model] (XDM) attributes of the field. The following three properties are required:<ul><li>`id`: The URI `$id` value of the schema associated with the field.</li><li>`contentType`: Indicates the format and version of the schema. See the section on [schema versioning](../../xdm/api/getting-started.md#versioning) in the XDM API guide for more information.</li><li>`schemaPath`: The path to the schema property in question, written in [JSON Pointer](../../landing/api-fundamentals.md#json-pointer) syntax.</li></ul>`labels`: A list of data usage labels that you want to add to the field. |

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

## Remove labels from a dataset {#remove-dataset-labels}

You can remove the labels applied to a dataset by making a DELETE request to the [!DNL Dataset Service] API.

**API format**

```http
DELETE /datasets/{DATASET_ID}/labels
```

| Parameter | Description |
| --- | --- |
| `{DATASET_ID}` | The unique `id` value of the dataset whose labels you want to remove. |

**Request**

```shell
curl -X DELETE \
  'https://platform.adobe.io/data/foundation/dataset/datasets/5abd49645591445e1ba04f87/labels' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response HTTP status 200 (OK), indicating that the labels have been removed. You can [look up the existing labels](#look-up-dataset-labels) for the dataset in a separate call to confirm this.

## Next steps

By reading this document, you have learned how to manage data usage labels using APIs.

Once you have added data usage labels at the dataset- and field-level, you can begin to ingest data into [!DNL Experience Platform]. To learn more, start by reading the [data ingestion documentation](../../ingestion/home.md).

You can also now define data usage policies based on the labels you have applied. For more information, see the [data usage policies overview](../policies/overview.md).

For more information on managing datasets in [!DNL Experience Platform], see the [datasets overview](../../catalog/datasets/overview.md).