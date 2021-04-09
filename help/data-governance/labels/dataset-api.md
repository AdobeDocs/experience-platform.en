---
keywords: Experience Platform;home;popular topics;dataset api;manage data usage;data usage api
solution: Experience Platform
title: Manage Data Usage Labels for Datasets Using APIs 
topic: developer guide
description: The Dataset Service API allows you to apply and edit usage labels for datasets. It is part of Adobe Experience Platform's data catalog capabilities, but is separate from the Catalog Service API which manages dataset metadata.
exl-id: 24a8d870-eb81-4255-8e47-09ae7ad7a721
---
# Manage data usage labels for datasets using APIs

The [[!DNL Dataset Service API]](https://www.adobe.io/apis/experienceplatform/home/api-reference.html#!acpdr/swagger-specs/dataset-service.yaml) allows you to apply and edit usage labels for datasets. It is part of Adobe Experience Platform's data catalog capabilities, but is separate from the [!DNL Catalog Service] API which manages dataset metadata.

This document covers how to manage labels for datasets and fields using the [!DNL Dataset Service API]. For steps on how to manage data usage labels themselves using API calls, see the [labels endpoint guide](../api/labels.md) for the [!DNL Policy Service API].

## Getting started

Before you read this guide, follow the steps outlined in the [getting started section](../../catalog/api/getting-started.md) in the Catalog developer guide to gather the required credentials to make calls to [!DNL Platform] APIs.

In order to make calls to the endpoints outlined in this document, you must have the unique `id` value for a specific dataset. If you do not have this value, see the guide on [listing Catalog objects](../../catalog/api/list-objects.md) to find the IDs of your existing datasets.

## Look up labels for a dataset {#look-up}

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

## Apply labels to a dataset {#apply}

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

The following PUT request updates the existing labels for a dataset, as well as a specific field within that dataset. The fields provided in the payload are the same as would be required for a POST request.

>[!IMPORTANT]
>
>A valid `If-Match` header must be provided when making PUT requests to the `/datasets/{DATASET_ID}/labels` endpoint. See the [appendix section](#if-match) for more information on using the required header.

```shell
curl -X PUT \
  'https://platform.adobe.io/data/foundation/dataset/datasets/5abd49645591445e1ba04f87/labels' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json' \
  -H 'If-Match: 8f00d38e-0000-0200-0000-5ef4fc6d0000' \
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
| `optionalLabels` | A list of any individual fields within the dataset that you want to add labels to. Each item in this array must have the following properties: <br/><br/>`option`: An object that contains the [!DNL Experience Data Model] (XDM) attributes of the field. The following three properties are required:<ul><li><code>id</code>: The URI <code>$id</code> value of the schema associated with the field.</li><li><code>contentType</code>: The content type and version number of the schema. This should take the form of one of the valid <a href="../../xdm/api/getting-started.md#accept">Accept headers</a> for an XDM lookup request.</li><li><code>schemaPath</code>: The path to the field within the dataset's schema.</li></ul>`labels`: A list of data usage labels that you want to add to the field. |

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

## Remove labels from a dataset {#remove}

You can remove the labels applied to a dataset by making a DELETE request to the [!DNL Dataset Service] API.

**API format**

```http
DELETE /datasets/{DATASET_ID}/labels
```

| Parameter | Description |
| --- | --- |
| `{DATASET_ID}` | The unique `id` value of the dataset whose labels you want to remove. |

**Request**

The following request removes the labels for the dataset specified in the path.

>[!IMPORTANT]
>
>A valid `If-Match` header must be provided when making DELETE requests to the `/datasets/{DATASET_ID}/labels` endpoint. See the [appendix section](#if-match) for more information on using the required header.

```shell
curl -X DELETE \
  'https://platform.adobe.io/data/foundation/dataset/datasets/5abd49645591445e1ba04f87/labels' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'If-Match: 8f00d38e-0000-0200-0000-5ef4fc6d0000'
```

**Response**

A successful response HTTP status 200 (OK), indicating that the labels have been removed. You can [look up the existing labels](#look-up) for the dataset in a separate call to confirm this.

## Next steps

By reading this document, you have learned how to manage data usage labels for datasets and fields using the [!DNL Dataset Service] API.

Once you have added data usage labels at the dataset- and field-level, you can begin to ingest data into [!DNL Experience Platform]. To learn more, start by reading the [data ingestion documentation](../../ingestion/home.md).

You can also now define data usage policies based on the labels you have applied. For more information, see the [data usage policies overview](../policies/overview.md).

For more information on managing datasets in [!DNL Experience Platform], see the [datasets overview](../../catalog/datasets/overview.md).

## Appendix {#appendix}

The following section contains additional information about working with labels using the Dataset Service API.

### [!DNL If-Match] header {#if-match}

When making API calls that update the existing labels of a dataset (PUT and DELETE), an `If-Match` header that indicates the current version of the dataset-label entity in Dataset Service must be included. In order to prevent data collisions, the service will only update the dataset entity if the included `If-Match` string matches the latest version tag generated by the system for that dataset.

>[!NOTE]
>
>If no labels currently exist for the dataset in question, new labels can only be added through a POST request, which does not require an `If-Match` header. Once labels have been added to a dataset, an `etag` value is assigned which can be used to update or remove the labels at a later time.

To retrieve the most recent version of the dataset-label entity, make a [GET request](#look-up) to the `/datasets/{DATASET_ID}/labels` endpoint. The current value is returned in the response under an `etag` header. When updating existing dataset labels, best practice is to first perform a lookup request for the dataset in order to fetch its latest `etag` value before using that value in the `If-Match` header of your subsequent PUT or DELETE request.
