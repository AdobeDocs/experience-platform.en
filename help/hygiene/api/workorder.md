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

## Retrieve details for a specific record delete work order {#lookup}

Retrieve information for a specific work order request by making a GET request to `/workorder/{WORKORDER_ID}`.  
The response includes action type, status, associated dataset and user information, and audit metadata.

**API format**

```http
GET /workorder/{WORKORDER_ID}
```

| Parameter | Description |
| --- | --- |
| `{WORK_ORDER_ID}` | The unique identifier for the work order you are looking up. |

{style="table-layout:auto"}

**Request**

```shell
curl -X GET \
  https://platform.adobe.io/data/core/hygiene/workorder/DI-6fa98d52-7bd2-42a5-bf61-fb5c22ec9427 \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A  successful response returns the details of the specified work order request.

```json
{
  "workorderId": "DI-6fa98d52-7bd2-42a5-bf61-fb5c22ec9427",
  "orgId": "3C7F2AC143214567890ABCDE@AcmeOrg",
  "bundleId": "BN-dbe3ffad-cb0b-401f-91ae-01c189f8e7b2",
  "action": "identity-delete",
  "createdAt": "2037-01-21T08:25:45.119Z",
  "updatedAt": "2037-01-21T08:30:45.233Z",
  "operationCount": 3,
  "targetServices": [
    "ajo",
    "profile",
    "datalake",
    "identity"
  ],
  "status": "received",
  "createdBy": "g.baratheon@acme.com <g.baratheon@acme.com> C189F8E7B2@acme.com",
  "datasetId": "d2f1c8a4b8f747d0ba3521e2",
  "datasetName": "Acme_Marketing_Events",
  "displayName": "Marketing Identity Delete Request",
  "description": "Scheduled identity deletion for marketing compliance"
}
```

| Property | Description |
| --- | --- |
| `workorderId`    | The unique identifier for the work order.|
| `orgId`          | Your organization's unique identifier.   |
| `bundleId`       | The unique identifier of the bundle containing this deletion order. Bundling allows multiple deletion orders to be grouped and processed together by downstream services. |
| `action`         | The action type requested in the work order. |
| `createdAt`      | The timestamp when the work order was created. |
| `updatedAt`      | The timestamp when the work order was last updated. |
| `operationCount` | The number of operations included in the work order. |
| `targetServices` | A list of target services impacted by this work order. |
| `status`         | The current status of the work order.    |
| `createdBy`      | The email and identifier of the user who created the work order. |
| `datasetId`      | The unique identifier for the dataset associated with the work order. |
| `datasetName`    | The name of the dataset associated with the work order.          |
| `displayName`    | A human-readable label for the work order.                       |
| `description`    | A description of the work order request. |

## Update a record delete work order

Update the `name` and `description` for a work order by making a PUT request to the `/workorder/{WORKORDER_ID}` endpoint.

**API format**

```http
PUT /workorder/{WORKORDER_ID}
```

| Parameter | Description |
| --- | --- |
| `{WORK_ORDER_ID}` | The unique identifier for the work order you want to update. |

{style="table-layout:auto"}

**Request**

```shell
curl -X PUT \
  https://platform.adobe.io/data/core/hygiene/workorder/DI-893a6b1d-47c2-41e1-b3f1-2d7c2956aabb \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json' \
  -d '{
        "name": "Updated Marketing Identity Delete Request",
        "description": "Updated deletion request for marketing data"
      }'
```

| Property | Description |
| --- | --- |
| Property      | Description                                          |
| ------------- | ---------------------------------------------------- |
| `name`        | The updated human-readable label for the record delete work order. |
| `description` | The updated description for the record delete work order.  |

{style="table-layout:auto"}

**Response**

A successful response returns the updated work order request.

```json
{
  "workorderId": "DI-893a6b1d-47c2-41e1-b3f1-2d7c2956aabb",
  "orgId": "7D4E2AC143214567890ABCDE@AcmeOrg",
  "bundleId": "BN-12abcf45-32ea-45bc-9d1c-8e7b321cabc8",
  "action": "identity-delete",
  "createdAt": "2038-04-15T12:14:29.210Z",
  "updatedAt": "2038-04-15T12:30:29.442Z",
  "operationCount": 2,
  "targetServices": [
    "profile",
    "datalake"
  ],
  "status": "in-progress",
  "createdBy": "b.tarth@acme.com <b.tarth@acme.com> 8E7B321CABC8@acme.com",
  "datasetId": "1a2b3c4d5e6f7890abcdef12",
  "datasetName": "Acme_Marketing_2024",
  "displayName": "Updated Marketing Identity Delete Request",
  "description": "Updated deletion request for marketing data"
}
```

| Property         | Description                                                                               |
| ---------------- | ----------------------------------------------------------------------------------------- |
| `workorderId`    | The ID of the deletion order. This can be used to look up the status of the deletion later.|
| `orgId`          | Your organization's unique identifier.                                                    |
| `bundleId`       | The ID of the bundle this deletion order is associated with, used for debugging purposes. |
| `action`         | The action type requested in the work order.                                              |
| `createdAt`      | The timestamp when the work order was created.                                            |
| `updatedAt`      | The timestamp when the work order was last updated.                                       |
| `operationCount` | The number of operations included in the work order.                                      |
| `targetServices` | A list of target services impacted by this work order.                                    |
| `status`         | The current status of the work order.                                                     |
| `createdBy`      | The email and identifier of the user who created the work order.                          |
| `datasetId`      | The unique identifier for the dataset associated with the work order.                     |
| `datasetName`    | A name of the dataset associated with the work order.                                     |
| `displayName`    | A human-readable label for the work order.                                                |
| `description`    | A description of the work order request.                                                  |

{style="table-layout:auto"}
