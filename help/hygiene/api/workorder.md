---
title: Work Order API Endpoint
description: The /workorder endpoint in the Data Hygiene API allows you to programmatically manage deletion tasks for identities.
badgeBeta: label="Beta" type="Informative"
role: Developer
badge: Beta
exl-id: f6d9c21e-ca8a-4777-9e5f-f4b2314305bf
---
# Work order endpoint {#work-order-endpoint}

The `/workorder` endpoint in the Data Hygiene API allows you to programmatically manage record delete requests in Adobe Experience Platform.

>[!IMPORTANT] 
> 
>The Record Delete feature is currently in Beta and available only in a **limited release**. It is not available to all customers. Record delete requests are only available for organizations in the limited release.
>
>Record deletes are meant to be used for data cleansing, removing anonymous data, or data minimization. They are **not** to be used for data subject rights requests (compliance) as pertaining to privacy regulations like the General Data Protection Regulation (GDPR). For all compliance use cases, use [Adobe Experience Platform Privacy Service](../../privacy-service/home.md) instead.

## Getting started

The endpoint used in this guide is part of the Data Hygiene API. Before continuing, please review the [overview](./overview.md) for links to related documentation, a guide to reading the sample API calls in this document, and important information regarding required headers that are needed to successfully make calls to any Experience Platform API.

## Create a record delete request {#create}

You can delete one or more identities from a single dataset or all datasets by making a POST request to the `/workorder` endpoint.

>[!IMPORTANT] 
> 
>There are different limits for the total number of unique identity record deletes that can be submitted each month. These limits are based on your license agreement. Organizations who have purchased all editions of Adobe Real-Time Customer Data Platform and Adobe Journey Optimizer can submit up to 100,000 identity record deletes each month. Organizations who have purchased **Adobe Healthcare Shield** or **Adobe Privacy & Security Shield** can submit up to 600,000 identity record deletes each month.<br>A single [record delete request through the UI](../ui/record-delete.md) allows you to submit 10,000 IDs at one time. The API method to delete records allows for the submission of 100,000 IDs at one time.<br>It is best practice to submit as many IDs per request as possible, up to your ID limit. When you intend to delete a high volume of IDs, submitting a low volume, or a single ID per record delete request should be avoided.

**API format**

```http
POST /workorder
```

>[!NOTE]
>
>Data Lifecycle requests can only modify datasets based on primary identities or an identity map. A request must either specify the primary identity, or provide an identity map.

**Request**

Depending on the value of the `datasetId` provided in the request payload, the API call will delete identities from all datasets or a single dataset that you specify. The following request deletes three identities from a specific dataset.

```shell
curl -X POST \
  https://platform.adobe.io/data/core/hygiene/workorder \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'Content-Type: application/json' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -d '{
        "action": "delete_identity",
        "datasetId": "c48b51623ec641a2949d339bad69cb15",
        "displayName": "Example Record Delete Request",
        "description": "Cleanup identities required by Jira request 12345.",
        "identities": [
          {
            "namespace": {
              "code": "email"
            },
            "id": "poul.anderson@example.com"
          },
          {
            "namespace": {
              "code": "email"
            },
            "id": "cordwainer.smith@gmail.com"
          },
          {
            "namespace": {
              "code": "email"
            },
            "id": "cyril.kornbluth@yahoo.com"
          }
        ]
      }'
```

| Property | Description |
| --- | --- |
| `action` | The action to be performed. The value must be set to `delete_identity` for record deletes. |
| `datasetId` | If you are deleting from a single dataset, this value must be the ID of the dataset in question. If you are deleting from all datasets, set the value to `ALL`.<br><br>If you are specifying a single dataset, the dataset's associated Experience Data Model (XDM) schema must have a primary identity defined. If the dataset does not have a primary identity, then it must have an identity map in order to be modified by a Data Lifecycle request.<br>If an identity map exists, it will be present as a top-level field named `identityMap`.<br>Note that a dataset row may have many identities in its identity map, but only one can be marked as primary. `"primary": true` must be included to force the `id` to match a primary identity. |
| `displayName` | The display name for the record delete request. |
| `description` | A description for the record delete request. |
| `identities` | An array containing the identities of at least one user whose information you would like to delete. Each identity is comprised of an [identity namespace](../../identity-service/features/namespaces.md) and a value:<ul><li>`namespace`: Contains a single string property, `code`, which represents the identity namespace. </li><li>`id`: The identity value.</ul>If `datasetId` specifies a single dataset, each entity under `identities` must use the same identity namespace as the schema's primary identity.<br><br>If `datasetId` is set to `ALL`, the `identities` array is not constrained to any single namespace since each dataset might be different. However, your requests are still constrained the namespaces available to your organization, as reported by [Identity Service](https://developer.adobe.com/experience-platform-apis/references/identity-service/#operation/getIdNamespaces). |

{style="table-layout:auto"}

**Response**

A successful response returns the details of the record delete.

```json
{
  "workorderId": "a15345b8-a2d6-4d6f-b33c-5b593e86439a",
  "orgId": "{ORG_ID}",
  "bundleId": "BN-35c1676c-3b4f-4195-8d6c-7cf5aa21efdd",
  "action": "identity-delete",
  "createdAt": "2022-07-21T18:05:28.316029Z",
  "updatedAt": "2022-07-21T17:59:43.217801Z",
  "status": "received",
  "createdBy": "{USER_ID}",
  "datasetId": "c48b51623ec641a2949d339bad69cb15",
  "displayName": "Example Record Delete Request",
  "description": "Cleanup identities required by Jira request 12345."
}
```

| Property | Description |
| --- | --- |
| `workorderId` | The ID of the deletion order. This can be used to look up the status of the deletion later. |
| `orgId` | Your organization ID. |
| `bundleId` | The ID of the bundle this deletion order is associated with, used for debugging purposes. Multiple deletion orders are bundled together to be processed by downstream services. |
| `action` | The action being performed by the work order. For record deletes, the value is `identity-delete`. |
| `createdAt` | A timestamp of when the deletion order was created. |
| `updatedAt` | A timestamp of when the deletion order was last updated. |
| `status` | The current status of the deletion order. |
| `createdBy` | The user that created the deletion order. |
| `datasetId` | The ID of the dataset that is subject to the request. If the request is for all datasets, the value will be set to `ALL`. |

{style="table-layout:auto"}

## Retrieve the status of a record delete {#lookup}

After you [create a record delete request](#create), you can check on its status using a GET request.

**API format**

```http
GET /workorder/{WORK_ORDER_ID}
```

| Parameter | Description |
| --- | --- |
| `{WORK_ORDER_ID}` | The `workorderId` of the record delete you are looking up. |

{style="table-layout:auto"}

**Request**

```shell
curl -X GET \
  https://platform.adobe.io/data/core/hygiene/workorder/BN-35c1676c-3b4f-4195-8d6c-7cf5aa21efdd \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns the details of the delete operation, including its current status.

```json
{
  "workorderId": "a15345b8-a2d6-4d6f-b33c-5b593e86439a",
  "orgId": "{ORG_ID}",
  "bundleId": "BN-35c1676c-3b4f-4195-8d6c-7cf5aa21efdd",
  "action": "identity-delete",
  "createdAt": "2022-07-21T18:05:28.316029Z",
  "updatedAt": "2022-07-21T17:59:43.217801Z",
  "status": "received",
  "createdBy": "{USER_ID}",
  "datasetId": "c48b51623ec641a2949d339bad69cb15",
  "displayName": "Example Record Delete Request",
  "description": "Cleanup identities required by Jira request 12345.",
  "productStatusDetails": [
    {
        "productName": "Data Management",
        "productStatus": "success",
        "createdAt": "2022-08-08T16:51:31.535872Z"
    },
    {
        "productName": "Identity Service",
        "productStatus": "success",
        "createdAt": "2022-08-08T16:43:46.331150Z"
    },
    {
        "productName": "Profile Service",
        "productStatus": "waiting",
        "createdAt": "2022-08-08T16:37:13.443481Z"
    }
  ]
}
```

| Property | Description |
| --- | --- |
| `workorderId` | The ID of the deletion order. This can be used to look up the status of the deletion later. |
| `orgId` | Your organization ID. |
| `bundleId` | The ID of the bundle this deletion order is associated with, used for debugging purposes. Multiple deletion orders are bundled together to be processed by downstream services. |
| `action` | The action being performed by the work order. For record deletes, the value is `identity-delete`. |
| `createdAt` | A timestamp of when the deletion order was created. |
| `updatedAt` | A timestamp of when the deletion order was last updated. |
| `status` | The current status of the deletion order. |
| `createdBy` | The user that created the deletion order. |
| `datasetId` | The ID of the dataset that is subject to the request. If the request is for all datasets, the value will be set to `ALL`. |
| `productStatusDetails` | An array that lists the current status of downstream processes related to the request. Each array object contains the following properties:<ul><li>`productName`: The name of the downstream service.</li><li>`productStatus`: The current processing status of the request from the downstream service.</li><li>`createdAt`: A timestamp of when the most recent status was posted by the service.</li></ul> |

## Update a record delete request

You can update the `displayName` and `description` for a record delete by making a PUT request.

**API format**

```http
PUT /workorder{WORK_ORDER_ID}
```

| Parameter | Description |
| --- | --- |
| `{WORK_ORDER_ID}` | The `workorderId` of the record delete you are looking up. |

{style="table-layout:auto"}

**Request**

```shell
curl -X PUT \
  https://platform.adobe.io/data/core/hygiene/workorder/BN-35c1676c-3b4f-4195-8d6c-7cf5aa21efdd \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -d '{
        "displayName" : "Update - displayName",
        "description" : "Update - description"
      }'
```

| Property | Description |
| --- | --- |
| `displayName` | An updated display name for the record delete request. |
| `description` | An updated description for the record delete request. |

{style="table-layout:auto"}

**Response**

A successful response returns the details of the record delete.

```json
{
  "workorderId": "a15345b8-a2d6-4d6f-b33c-5b593e86439a",
  "orgId": "{ORG_ID}",
  "bundleId": "BN-35c1676c-3b4f-4195-8d6c-7cf5aa21efdd",
  "action": "identity-delete",
  "createdAt": "2022-07-21T18:05:28.316029Z",
  "updatedAt": "2022-07-21T17:59:43.217801Z",
  "status": "received",
  "createdBy": "{USER_ID}",
  "datasetId": "c48b51623ec641a2949d339bad69cb15",
  "displayName" : "Update - displayName",
  "description" : "Update - description",
  "productStatusDetails": [
    {
        "productName": "Data Management",
        "productStatus": "success",
        "createdAt": "2022-08-08T16:51:31.535872Z"
    },
    {
        "productName": "Identity Service",
        "productStatus": "success",
        "createdAt": "2022-08-08T16:43:46.331150Z"
    },
    {
        "productName": "Profile Service",
        "productStatus": "waiting",
        "createdAt": "2022-08-08T16:37:13.443481Z"
    }
  ]
}
```

| Property | Description |
| --- | --- |
| `workorderId` | The ID of the deletion order. This can be used to look up the status of the deletion later. |
| `orgId` | Your organization ID. |
| `bundleId` | The ID of the bundle this deletion order is associated with, used for debugging purposes. Multiple deletion orders are bundled together to be processed by downstream services. |
| `action` | The action being performed by the work order. For record deletes, the value is `identity-delete`. |
| `createdAt` | A timestamp of when the deletion order was created. |
| `updatedAt` | A timestamp of when the deletion order was last updated. |
| `status` | The current status of the deletion order. |
| `createdBy` | The user that created the deletion order. |
| `datasetId` | The ID of the dataset that is subject to the request. If the request is for all datasets, the value will be set to `ALL`. |
| `productStatusDetails` | An array that lists the current status of downstream processes related to the request. Each array object contains the following properties:<ul><li>`productName`: The name of the downstream service.</li><li>`productStatus`: The current processing status of the request from the downstream service.</li><li>`createdAt`: A timestamp of when the most recent status was posted by the service.</li></ul> |

{style="table-layout:auto"}
