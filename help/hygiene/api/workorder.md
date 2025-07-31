---
title: Record Delete Requests (Workorder Endpoint)
description: The /workorder endpoint in the Data Hygiene API allows you to programmatically manage deletion tasks for identities.
role: Developer
exl-id: f6d9c21e-ca8a-4777-9e5f-f4b2314305bf
---
# Record delete requests (Workorder endpoint) {#work-order-endpoint}

The `/workorder` endpoint in the Data Hygiene API allows you to programmatically manage record delete requests in Adobe Experience Platform.

>[!IMPORTANT] 
> 
>Record deletes are meant to be used for data cleansing, removing anonymous data, or data minimization. They are **not** to be used for data subject rights requests (compliance) as pertaining to privacy regulations like the General Data Protection Regulation (GDPR). For all compliance use cases, use [Adobe Experience Platform Privacy Service](../../privacy-service/home.md) instead.

## Getting started

The endpoint used in this guide is part of the Data Hygiene API. Before continuing, please review the [overview](./overview.md) for links to related documentation, a guide to reading the sample API calls in this document, and important information regarding required headers that are needed to successfully make calls to any Experience Platform API.

## Quotas and processing timelines {#quotas}

Record Delete requests are subject to daily and monthly identifier submission limits, determined by your organization's license entitlement. These limits apply to both UI- and API-based delete requests.

>[!NOTE]
>
>You can submit up to **1,000,000 identifiers per day**, but only if your remaining monthly quota allows it. If your monthly cap is less than 1 million, your daily submissions cannot exceed that cap.

### Monthly submission entitlement by product {#quota-limits}

The table below outlines identifier submission limits by product and entitlement level. For each product, the monthly cap is the lesser of two values: a fixed identifier ceiling or a percentage-based threshold tied to your licensed data volume.

| Product  | Entitlement Description | Monthly Cap (Whichever is Less) |
|----------|-------------------------|---------------------------------|
| Real-Time CDP or Adobe Journey Optimizer | Without Privacy and Security Shield or Healthcare Shield add-on          | 2,000,000 identifiers or 5% of addressable audience                    |
| Real-Time CDP or Adobe Journey Optimizer | With Privacy and Security Shield or Healthcare Shield add-on             | 15,000,000 identifiers or 10% of addressable audience                  |
| Customer Journey Analytics               | Without Privacy and Security Shield or Healthcare Shield add-on          | 2,000,000 identifiers or 100 identifiers per million CJA rows of entitlement |
| Customer Journey Analytics               | With Privacy and Security Shield or Healthcare Shield add-on             | 15,000,000 identifiers or 200 identifiers per million CJA rows of entitlement |

>[!NOTE]
>
> Most organizations will have lower monthly limits based on their actual addressable audience or CJA row entitlements.

Quotas reset on the first day of each calendar month. Unused quota does **not** carry over.

>[!NOTE]
>
>Quotas are based on your organization's licensed monthly entitlement for **submitted identifiers**. These are not enforced by system guardrails but may be monitored and reviewed.  
>
>Record Delete is a **shared service**. Your monthly cap reflects the highest entitlement across Real-Time CDP, Adobe Journey Optimizer, Customer Journey Analytics, and any applicable Shield add-ons.

### Processing timelines for identifier submissions {#sla-processing-timelines}

After submission, record delete requests are queued and processed based on your entitlement level.

| Product & Entitlement Description                                                  | Queue Duration      | Maximum Processing Time (SLA) |
|------------------------------------------------------------------------------------|---------------------|-------------------------------|
| Without Privacy and Security Shield or Healthcare Shield add-on                   | Up to 15 days       | 30 days                       |
| With Privacy and Security Shield or Healthcare Shield add-on                      | Typically 24 hours  | 15 days                       |

If your organization requires higher limits, contact your Adobe representative for an entitlement review.

>[!TIP]
>
>To check your current quota usage or entitlement tier, see the [Quota reference guide](../api/quota.md).

## Create a record delete work order request {#create}

To delete records associated with one or more identities from a single dataset or all datasets, make a POST request to the `/workorder` endpoint.

Work orders are processed asynchronously and appear in the work order list after submission.

>[!TIP]
>
>Each record delete work order submitted through the API can include up to **100,000 identities**. Submit as many identities per request as possible to maximize efficiency. Avoid low-volume submissions such as single-ID work orders.

**API format**

```http
POST /workorder
```

>[!NOTE]
>
>Data Hygiene API requests can only modify datasets based on primary identities or an identity map. The dataset's associated XDM schema must have a primary identity or identity map defined.

**Request**

The following request deletes all records associated with specified email addresses from a particular dataset.

```shell
curl -X POST \
  https://platform.adobe.io/data/core/hygiene/workorder \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'Content-Type: application/json' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -d '{
        "displayName": "Acme Loyalty - Customer Data Deletion",
        "description": "Delete all records associated with the specified email addresses from the Acme_Loyalty_2023 dataset.",
        "action": "delete-identity",
        "datasetId": "7eab61f3e5c34810a49a1ab3",
        "namespacesIdentities": [
          {
            "namespace": {
              "code": "email"
            },
            "IDs": [
              "alice.smith@acmecorp.com",
              "bob.jones@acmecorp.com",
              "charlie.brown@acmecorp.com"
            ]
          }
        ]
      }'
```

| Property | Description |
| --- | --- |
| `displayName` | A human-readable label for this work order. |
| `description` | A description of the work order request. |
| `action`      | The action requested for the work order. To delete records associated with a given identity, use `delete-identity`. |
| `datasetId`   | The unique identifier for the dataset. Use the dataset ID for a specific dataset, or `ALL` to target all datasets. Datasets must have a primary identity or identity map. If an identity map exists, it will be present as a top-level field named `identityMap`.<br>Note that a dataset row may have many identities in its identity map, but only one can be marked as primary. `"primary": true` must be included to force the `id` to match a primary identity. |
| `namespacesIdentities` | An array of objects, each containing:<br><ul><li> `namespace`: An object with a `code` property specifying the identity namespace (e.g., "email").</li><li> `IDs`: An array of identity values to delete for this namespace.</li></ul><br>Identity namespaces provide context to identity data. You can create and manage custom namespaces or use standard namespaces provided by Experience Platform. See the [identity namespace documentation](../../identity-service/features/namespaces.md) to learn more about identity namespaces.  |

**Response**

A successful response returns the details of the new record delete work order.

```json
{
  "workorderId": "DI-95c40d52-6229-44e8-881b-fc7f072de63d",
  "orgId": "8B1F2AC143214567890ABCDE@AcmeOrg",
  "bundleId": "BN-c61bec61-5ce8-498f-a538-fb84b094adc6",
  "action": "identity-delete",
  "createdAt": "2035-06-02T09:21:00.000Z",
  "updatedAt": "2035-06-02T09:21:05.000Z",
  "operationCount": 1,
  "targetServices": [
    "profile",
    "datalake",
    "identity"
  ],
  "status": "received",
  "createdBy": "c.lannister@acme.com <c.lannister@acme.com> 7EAB61F3E5C34810A49A1AB3@acme.com",
  "datasetId": "7eab61f3e5c34810a49a1ab3",
  "datasetName": "Acme_Loyalty_2023",
  "displayName": "Loyalty Identity Delete Request",
  "description": "Schedule deletion for Acme loyalty program dataset"
}
```

| Property | Description |
| --- | --- |
| `workorderId`    | The unique identifier for the work order. Use this value to look up the status or details of the deletion request. |
| `orgId`          | Your unique organization identifier. |
| `bundleId`       | The unique identifier of the bundle containing this deletion order. Bundling allows multiple deletion orders to be grouped and processed together. |
| `action`         | The action type requested in the work order. Note that the response lists currently the action as `identity-delete` instead of `delete-identity`. |
| `createdAt`      | The timestamp when the work order was created. |
| `updatedAt`      | The timestamp when the work order was last updated. |
| `operationCount` | The number of operations included in the work order. |
| `targetServices` | A list of target services for the work order. |
| `status`         | Current status of the work order. |
| `createdBy`      | The email and identifier of the user who created the work order. |
| `datasetId`      | The unique identifier for the dataset. If the request is for all datasets, the value will be set to `ALL`. |
| `datasetName`    | The name of the dataset for this work order. |
| `displayName`    | A human-readable label for this work order. |
| `description`    | A description of the work order request. |

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
    "workorderId": "DI-61828416-963a-463f-91c1-dbc4d0ddbd43",
    "orgId": "{ORG_ID}",
    "bundleId": "BN-aacacc09-d10c-48c5-a64c-2ced96a78fca",
    "action": "identity-delete",
    "createdAt": "2024-06-12T20:02:49.398448Z",
    "updatedAt": "2024-06-13T21:35:01.944749Z",
    "operationCount": 1,
    "status": "ingested",
    "createdBy": "{USER_ID}",
    "datasetId": "666950e6b7e2022c9e7d7a33",
    "datasetName": "Acme_Dataset_E2E_Identity_Map_Schema_5_1718178022379",
    "displayName": "Updated Display Name",
    "description": "Updated Description",
    "productStatusDetails": [
        {
            "productName": "Data Management",
            "productStatus": "waiting",
            "createdAt": "2024-06-12T20:11:18.447747Z"
        },
        {
            "productName": "Identity Service",
            "productStatus": "success",
            "createdAt": "2024-06-12T20:36:09.020832Z"
        },
        {
            "productName": "Profile Service",
            "productStatus": "waiting",
            "createdAt": "2024-06-12T20:11:18.447747Z"
        },
        {
            "productName": "Journey Orchestrator",
            "productStatus": "success",
            "createdAt": "2024-06-12T20:12:19.843199Z"
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
