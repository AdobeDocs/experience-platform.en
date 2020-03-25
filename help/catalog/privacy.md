---
keywords: Experience Platform;home;popular topics
solution: Experience Platform
title: Privacy request processing in the Data Lake
topic: overview
---

# Privacy request processing in the Data Lake

Adobe Experience Platform Privacy Service processes customer requests to access, opt out of sale, or delete their personal data as delineated by privacy regulations such as the General Data Protection Regulation (GDPR) and California Consumer Privacy Act (CCPA).

This document covers essential concepts related to processing privacy requests for customer data stored in the Data Lake.

## Getting started

It is recommended that you have a working understanding of the following Experience Platform services before reading this guide:

* [Privacy Service](../privacy-service/home.md): Manages customer requests for accessing, opting out of sale, or deleting their personal data across Adobe Experience Cloud applications.
* [Catalog Service](home.md): The system of record for data location and lineage within Experience Platform. Provides an API that can be used to update dataset metadata.
* [Experience Data Model (XDM) System](../xdm/home.md): The standardized framework by which Experience Platform organizes customer experience data.

## Adding privacy labels to datasets {#privacy-labels}

In order for a dataset to be processed in a privacy request for the Data Lake, the dataset must be given privacy labels. Privacy labels indicate which fields within a dataset's associated schema apply to the namespaces you expect to be sent in privacy requests.

This section demonstrates how to add privacy labels to a dataset for use in Data Lake privacy requests. To begin, consider the following dataset:

```json
{
    "5d8e9cf5872f18164763f971": {
        "name": "Loyalty Members",
        "description": "Dataset for the Loyalty Members schema",
        "imsOrg": "{IMS_ORG}",
        "tags": {
            "adobe/pqs/table": [
                "loyalty_members"
            ]
        },
        "namespace": "ACP",
        "state": "DRAFT",
        "id": "5d8e9cf5872f18164763f971",
        "dule": {
            "identity": [],
            "contract": [
                "C2",
                "C5"
            ],
            "sensitive": [],
            "contracts": [
                "C2",
                "C5"
            ],
            "identifiability": [],
            "specialTypes": []
        },
        "version": "1.0.2",
        "created": 1569627381749,
        "updated": 1569880723282,
        "createdClient": "acp_ui_platform",
        "createdUser": "{USER_ID}",
        "updatedUser": "{USER_ID}",
        "viewId": "5d8e9cf5872f18164763f972",
        "aspect": "production",
        "status": "enabled",
        "fileDescription": {
            "persisted": true,
            "containerFormat": "parquet",
            "format": "parquet"
        },
        "files": "@/dataSets/5d8e9cf5872f18164763f971/views/5d8e9cf5872f18164763f972/files",
        "schemaMetadata": {
            "primaryKey": [],
            "delta": [],
            "dule": [
                {
                    "path": "/properties/personalEmail/properties/address",
                    "identity": [
                        "I1"
                    ],
                    "contract": [],
                    "sensitive": [],
                    "contracts": [],
                    "identifiability": [
                        "I1"
                    ],
                    "specialTypes": []
                }
            ],
            "gdpr": []
        },
        "schemaRef": {
            "id": "https://ns.adobe.com/{TENANT_ID}/schemas/2c66c3a4323128d3701289df4468e8a6",
            "contentType": "application/vnd.adobe.xed-full+json;version=1"
        }
    }
}
```

The `schemaMetadata` property for the dataset contains a `gdpr` array, which is currently empty. To add privacy labels to the dataset, this array must be updated using a PATCH request to the [Catalog Service API](https://www.adobe.io/apis/experienceplatform/home/api-reference.html#!acpdr/swagger-specs/catalog.yaml).

>[!NOTE] Although the array is named `gdpr`, adding labels to it will allow for privacy job requests for both GDPR and CCPA regulations.

**API format**

```http
PATCH /dataSets/{DATASET_ID}
```

| Parameter | Description |
| --- | --- |
| `{DATASET_ID}` | The `id` value of the dataset to be updated. |

**Request**

In this example, a dataset includes an email address in the `personalEmail.address` field. In order for this field to act as an identifier for Data Lake privacy requests, a label that uses an unregistered namespace must be added to its `gdpr` array.

The following request adds a privacy label which assigns the namespace "email_label" to the `personalEmail.address` field.

>[!IMPORTANT] When running a PATCH operation on a dataset's `schemaMetadata` property, be sure to copy any existing sub-properties within the request payload. Excluding any existing values from the payload will cause them to be removed from the dataset.

```shell
curl -X PATCH 'https://platform.adobe.io/data/foundation/catalog/dataSets/5d8e9cf5872f18164763f971' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -H 'Content-Type: application/json' \
  -d '{ 
    "schemaMetadata": { 
      "primaryKey": [],
      "delta": [],
      "dule": [
        {
          "path": "/properties/personalEmail/properties/address",
          "identity": [
              "I1"
          ],
          "contract": [],
          "sensitive": [],
          "contracts": [],
          "identifiability": [
              "I1"
          ],
          "specialTypes": []
        }
      ],
      "gdpr": [
          {
              "namespace": ["email_label"],
              "path": "/properties/personalEmail/properties/address"
          }
      ]
  }'
```

| Property | Description |
| --- | --- |
| `namespace` | An array listing the namespace(s) to be associated with the field specified in `path`. Namespaces are used to identify privacy-related fields when [submitting access or delete requests](#submit) in the Privacy Service API. |
| `path` | The path to the field within the dataset's associated schema that applies to the `namespace`. Ideally, privacy labels should only be applied to "leaf" fields (fields without sub-fields). |

**Response**

A successful response returns HTTP status 200 (OK) with the ID of the dataset provided in the payload. Using the ID to look up the dataset again reveals that the privacy labels have been added.

```json
[
    "@/dataSets/5d8e9cf5872f18164763f971"
]
```

### Labeling nested map-type fields

It is important to note that there are two kinds of nested map-type fields that do not support privacy labeling:

* A map-type field within an array-type field
* A map-type field within another map-type field

Privacy job processing for either of the two examples above will eventually fail. For this reason, it is recommended that you avoid using nested map-type fields to store private customer data. Relevant consumer IDs should be stored as a non-map datatype within the `identityMap` field (itself a map-type field) for record-based datasets, or the `endUserID` field for time-series-based datasets.

## Submitting requests {#submit}

>[!NOTE] This section covers how to format privacy requests for the Data Lake. It is strongly recommended that you review the [Privacy Service API](../privacy-service/api/getting-started.md) or [Privacy Service UI](../privacy-service/ui/overview.md) documentation for complete steps on how to submit a privacy job, including how to properly format submitted user identity data in request payloads.

The following section outlines how to make privacy requests for the Data Lake using the Privacy Service API or UI.

### Using the API

When creating job requests in the API, any `userIDs` that are provided must use a specific `namespace` and `type` depending on the data store they apply to. IDs for the Data Lake must use "unregistered" for their `type` value, and a `namespace` value that matches one the [privacy labels](#privacy-labels) that have been added to applicable datasets.

In addition, the `include` array of the request payload must include the product values for the different data stores the request is being made to. When making requests to the Data Lake, the array must include the value "aepDataLake".

The following request creates a new privacy job for the Data Lake, using the unregistered "email_label" namespace. It also includes the product value for the Data Lake in the `include` array:

```shell
curl -X POST \
  https://platform.adobe.io/data/core/privacy/jobs \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'Content-Type: application/json' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -d '{
    "companyContexts": [
      {
        "namespace": "imsOrgID",
        "value": "{IMS_ORG}"
      }
    ],
    "users": [
      {
        "key": "user12345",
        "action": ["access","delete"],
        "userIDs": [
          {
            "namespace": "email_label",
            "value": "ajones@acme.com",
            "type": "unregistered"
          },
          {
            "namespace": "email_label",
            "value": "jdoe@example.com",
            "type": "unregistered"
          }
        ]
      }
    ],
    "include": ["aepDataLake"],
    "expandIds": false,
    "priority": "normal",
    "regulation": "ccpa"
}'
```

### Using the UI

When creating job requests in the UI, be sure to select **AEP Data Lake** and/or **Profile** under _Products_ in order to process jobs for data stored in the Data Lake or Real-time Customer Profile, respectively.

<img src='images/privacy/product-value.png' width=450><br>

## Delete request processing

When Experience Platform receives a delete request from Privacy Service, Platform sends confirmation to Privacy Service that the request has been received and affected data has been marked for deletion. The records are then removed from the Data Lake within seven days. During that seven-day window, the data is soft-deleted and is therefore not accessible by any Platform service.

In future releases, Platform will send confirmation to Privacy Service after data has been physically deleted.

## Next steps

By reading this document, you have been introduced to the important concepts involved with processing privacy requests for the Data Lake. It is recommended that you continue reading the documentation provided throughout this guide in order to deepen your understanding of how to manage identity data and create privacy jobs.

See the document on [privacy request processing for Real-time Customer Profile](../profile/privacy.md) for steps on processing privacy requests for the Profile store.