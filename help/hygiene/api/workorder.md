---
title: Record Delete Work Orders
description: Learn how to use the /workorder endpoint in the Data Hygiene API to manage record delete work orders in Adobe Experience Platform. This guide covers quotas, processing timelines, and API usage.
role: Developer
exl-id: f6d9c21e-ca8a-4777-9e5f-f4b2314305bf
---
# Record delete work orders {#work-order-endpoint}

Use the `/workorder` endpoint in the Data Hygiene API to create, view, and manage record delete work orders in Adobe Experience Platform. Work orders let you control, monitor, and track data removal across datasets to help you maintain data quality and support your organization's data governance standards.

>[!IMPORTANT] 
>
>Record delete work orders are for data cleansing, removing anonymous data, or data minimization. **Do not use record delete work orders for data subject rights requests under privacy regulations such as GDPR.** For compliance use cases, use [Adobe Experience Platform Privacy Service](../../privacy-service/home.md).

## Getting started

Before you begin, see the [overview](./overview.md) to learn about required headers, how to read sample API calls, and where to find related documentation.

## Quotas and processing timelines {#quotas}

Record delete work orders are subject to daily and monthly identifier submission limits, determined by your organization's license entitlement. These limits apply to both UI- and API-based record delete requests.

>[!NOTE]
>
>You can submit up to **1,000,000 identifiers per day**, but only if your remaining monthly quota allows it. If your monthly cap is less than 1 million, your daily submissions cannot exceed that cap.

### Monthly submission entitlement by product {#quota-limits}

The following table shows identifier submission limits by product and entitlement level. For each product, the monthly cap is the lesser of two values: a fixed identifier ceiling or a percentage-based threshold tied to your licensed data volume.

| Product  | Entitlement Description | Monthly Cap (Whichever is Less) |
|----------|-------------------------|---------------------------------|
| Real-Time CDP or Adobe Journey Optimizer | Without Privacy and Security Shield or Healthcare Shield add-on          | 2,000,000 identifiers or 5% of addressable audience                    |
| Real-Time CDP or Adobe Journey Optimizer | With Privacy and Security Shield or Healthcare Shield add-on             | 15,000,000 identifiers or 10% of addressable audience                  |
| Customer Journey Analytics               | Without Privacy and Security Shield or Healthcare Shield add-on          | 2,000,000 identifiers or 100 identifiers per million CJA rows of entitlement |
| Customer Journey Analytics               | With Privacy and Security Shield or Healthcare Shield add-on             | 15,000,000 identifiers or 200 identifiers per million CJA rows of entitlement |

>[!NOTE]
>
>Most organizations will have lower monthly limits based on their actual addressable audience or CJA row entitlements.

>[!NOTE]
>
>Quotas reset on the first day of each calendar month. Unused quota does **not** carry over.

>[!NOTE]
>
>Quota usage is based on your organization's licensed monthly entitlement for **submitted identifiers**. Quotas are not enforced by system guardrails but may be monitored and reviewed.  
>Record delete work order capacity is a **shared service**. Your monthly cap reflects the highest entitlement across Real-Time CDP, Adobe Journey Optimizer, Customer Journey Analytics, and any applicable Shield add-ons.

### Processing timelines for identifier submissions {#sla-processing-timelines}

After submission, record delete work orders are queued and processed based on your entitlement level.

| Product & Entitlement Description  | Queue Duration      | Maximum Processing Time (SLA) |
|------------------------------------|---------------------|-------------------------------|
| Without Privacy and Security Shield or Healthcare Shield add-on                   | Up to 15 days       | 30 days                       |
| With Privacy and Security Shield or Healthcare Shield add-on                      | Typically 24 hours  | 15 days                       |

If your organization requires higher limits, contact your Adobe representative for an entitlement review.

>[!TIP]
>
>To check your current quota usage or entitlement tier, see the [Quota reference guide](../api/quota.md).

## List record delete work orders {#list}

Retrieve a paginated list of record delete work orders for data hygiene operations in your organization. Filter results using query parameters. Each work order record includes the action type (such as `identity-delete`), status, related dataset and user details, and audit metadata.

**API format**

```http
GET /workorder
```

The following table describes the query parameters available for listing record delete work orders.

| Query Parameter | Description |
| --------------- | ------------|
| `search`        | Case-insensitive partial match (wildcard search) across fields: author, displayName, description, or datasetName. Also matches exact expiration ID.             |
| `type`          | Filter results by work order type (e.g., `identity-delete`). |
| `status`        | Comma-separated list of work order statuses. Status values are case-sensitive.<br>Enum: `received`, `validated`, `submitted`, `ingested`, `completed`, `failed` |
| `author`        | Find the person who most recently updated the work order (or original creator). Accepts literal or SQL pattern. |
| `displayName`   | Case-insensitive match for the work order display name.      |
| `description`   | Case-insensitive match for work order description.           |
| `workorderId`   | Exact match for work order ID.                               |
| `sandboxName`   | Exact match for sandbox name used in the request, or use `*` to include all sandboxes.|
| `fromDate`      | Filter by work orders created on or after this date. Requires `toDate` to be set.     |
| `toDate`        | Filter by work orders created on or before this date. Requires `fromDate` to be set.  |
| `filterDate`    | Returns only work orders created, updated, or changed status on this date.            |
| `page`          | Page index to return (starts at 0). |
| `limit`         | Maximum results per page (1–100, default: 25).               |
| `orderBy`       | Sort order for results. Use `+` or `-` prefix for ascending/descending. Example: `orderBy=-datasetName`.        |
| `properties`    | Comma-separated list of additional fields to include per result. Optional.            |


**Request**

The following request retrieves all completed record delete work orders, limited to two per page:

```shell
curl -X GET \
  "https://platform.adobe.io/data/core/hygiene/workorder?status=completed&limit=2" \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns a paginated list of record delete work orders.

```json
{
  "results": [
    {
      "workorderId": "DI-1729d091-b08b-47f4-923f-6a4af52c93ac",
      "orgId": "9C1F2AC143214567890ABCDE@AcmeOrg",
      "bundleId": "BN-4cfabf02-c22a-45ef-b21f-bd8c3d631f41",
      "action": "identity-delete",
      "createdAt": "2034-03-15T11:02:10.935Z",
      "updatedAt": "2034-03-15T11:10:10.938Z",
      "operationCount": 3,
      "targetServices": [
        "profile",
        "datalake",
        "identity"
      ],
      "status": "received",
      "createdBy": "a.stark@acme.com <a.stark@acme.com> BD8C3D631F41@acme.com",
      "datasetId": "a7b7c8f3a1b8457eaa5321ab",
      "datasetName": "Acme_Customer_Exports",
      "displayName": "Customer Identity Delete Request",
      "description": "Scheduled identity deletion for compliance"
    }
  ],
  "total": 1,
  "count": 1,
  "_links": {
    "next": {
      "href": "https://platform.adobe.io/workorder?page=1&limit=2",
      "templated": false
    },
    "page": {
      "href": "https://platform.adobe.io/workorder?limit={limit}&page={page}",
      "templated": true
    }
  }
}
```

The following table describes the properties in the response.

| Property | Description |
| --- | --- |
| `results`        | Array of record delete work order objects. Each object contains the fields below.|
| `workorderId`    | The unique identifier for the record delete work order.                          |
| `orgId`          | Your unique organization identifier.                                             |
| `bundleId`       | The unique identifier of the bundle containing this record delete work order. Bundling allows multiple deletion orders to be grouped and processed together by downstream services.  |
| `action`         | The action type requested in the work order.                                     |
| `createdAt`      | The timestamp when the work order was created.                                   |
| `updatedAt`      | The timestamp when the work order was last updated.                              |
| `operationCount` | The number of operations included in the work order.                             |
| `targetServices` | List of target services for the work order.                                      |
| `status`         | Current status of the work order. Possible values are: `received`,`validated`, `submitted`, `ingested`, `completed`, and `failed`.|
| `createdBy`      | The email and identifier of the user who created the work order.                 |
| `datasetId`      | The unique identifier for the dataset associated with the work order. If the request applies to all datasets, this field will be set to ALL. |
| `datasetName`    | The name of the dataset associated with the work order.                          |
| `displayName`    | A human-readable label for the work order.                                       |
| `description`    | A description of the work order's purpose.                                       |
| `total`          | Total number of record delete work orders matching the query.                    |
| `count`          | Number of record delete work orders in the current page.                         |
| `_links`         | Pagination and navigation links.                                                 |
| `next`           | Object with `href` (string) and `templated` (boolean) for the next page.         |
| `page`           | Object with `href` (string) and `templated` (boolean) for page navigation.       |

{style="table-layout:auto"}

## Create a record delete work order {#create}

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
>You can only delete records from datasets whose associated XDM schema defines a primary identity or identity map.

>[!IMPORTANT]
>
>Record delete work orders act exclusively on the **primary identity** field. The following limitations apply:
>
>- **Secondary identities are not scanned.** If a dataset contains multiple identity fields, only the primary identity is used for matching. Records cannot be targeted or deleted based on non-primary identities.
>- **Records without a populated primary identity are skipped.** If a record does not have primary identity metadata populated, it is not eligible for deletion.
>- **Data ingested before identity configuration is not eligible.** If the primary identity field was added to a schema after data ingestion, previously ingested records cannot be deleted through record delete work orders.

>[!NOTE]
>
>If you try to create a record delete work order for a dataset that already has an active expiration, the request returns HTTP 400 (Bad Request).An active expiration is any scheduled delete that has not yet completed.

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
        "action": "delete_identity",
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

The following table describes the properties for creating a record delete work order.

| Property | Description |
| --- | --- |
| `displayName`          | A human-readable label for this record delete work order. |
| `description`          | A description of the record delete work order. |
| `action`               | The action requested for the record delete work order. To delete records associated with a given identity, use `delete_identity`. |
| `datasetId`            | The unique identifier for the dataset. Use the dataset ID for a specific dataset, or `ALL` to target all datasets. Datasets must have a primary identity or identity map. If an identity map exists, it will be present as a top-level field named `identityMap`.<br>Note that a dataset row may have many identities in its identity map, but only one can be marked as primary. `"primary": true` must be included to force the `id` to match a primary identity. |
| `namespacesIdentities` | An array of objects, each containing:<br><ul><li> `namespace`: An object with a `code` property specifying the identity namespace (e.g., "email").</li><li> `IDs`: An array of identity values to delete for this namespace.</li></ul>Identity namespaces provide context to identity data. You can use standard namespaces provided by Experience Platform or create your own. To learn more, see the [identity namespace documentation](../../identity-service/features/namespaces.md) and the [Identity Service API specification](https://developer.adobe.com/experience-platform-apis/references/identity-service/#operation/getIdNamespaces). |

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

The following table describes the properties in the response.

| Property | Description |
| --- | --- |
| `workorderId`    | The unique identifier for the record delete work order. Use this value to look up the status or details of the deletion. |
| `orgId`          | Your unique organization identifier.  |
| `bundleId`       | The unique identifier of the bundle containing this record delete work order. Bundling allows multiple deletion orders to be grouped and processed together by downstream services. |
| `action`         | The action type requested in the record delete work order. |
| `createdAt`      | The timestamp when the work order was created.             |
| `updatedAt`      | The timestamp when the work order was last updated.        |
| `operationCount` | The number of operations included in the work order.       |
| `targetServices` | A list of target services for the record delete work order.|
| `status`         | Current status of the record delete work order.            |
| `createdBy`      | The email and identifier of the user who created the record delete work order. |
| `datasetId`      | The unique identifier for the dataset. If the request is for all datasets, the value will be set to `ALL`.|
| `datasetName`    | The name of the dataset for this record delete work order. |
| `displayName`    | A human-readable label for the record delete work order.   |
| `description`    | A description of the record delete work order.             |

{style="table-layout:auto"}

>[!NOTE]
>
>The action property for record delete work orders is currently `identity-delete` in API responses. If the API changes to use a different value (such as `delete_identity`), this documentation will be updated accordingly.

## Convert ID lists to JSON for record delete requests

To create a record delete work order from CSV, TSV, or TXT files containing identifiers, you can use conversion scripts to produce the required JSON payloads for the `/workorder` endpoint. This approach is especially helpful when working with existing data files. For ready-to-use scripts and comprehensive instructions, visit the [csv-to-data-hygiene GitHub repository](https://github.com/perlmonger42/csv-to-data-hygiene).

### Generate JSON payloads

The following bash script examples demonstrate how to run the conversion scripts in Python or Ruby:

>[!BEGINTABS]

>[!TAB Example to run Python script]

```bash
#!/usr/bin/env bash

rm -rf ./output && mkdir output
for NAME in UTF8 CSV TSV TXT XYZ big; do
  ./csv-to-DI-payload.py sample/sample-$NAME.* \
      --verbose \
      --column 2 \
      --namespace email \
      --dataset-id 66f4161cc19b0f2aef3edf10 \
      --description 'a simple sample' \
      --output-dir output
  echo Checking output/sample-$NAME-*.json against expect/sample-$NAME-*.json
  diff <(cat output/sample-$NAME-*.json) <(cat expect/sample-$NAME-*.json) || echo Unexpected output in sample-$NAME-*.*
done
```

>[!TAB Example to run Ruby script]

```bash
#!/usr/bin/env bash

rm -rf ./output && mkdir output
for NAME in UTF8 CSV TSV TXT XYZ big; do
  ./csv-to-DI-payload.rb sample/sample-$NAME.* \
      --verbose \
      --column 2 \
      --namespace email \
      --dataset-id 66f4161cc19b0f2aef3edf10 \
      --description 'a simple sample' \
      --output-dir output
  echo Checking output/sample-$NAME-*.json against expect/sample-$NAME-*.json
  diff <(cat output/sample-$NAME-*.json) <(cat expect/sample-$NAME-*.json) || echo Unexpected output in sample-$NAME-*.*
done
```

>[!ENDTABS]

The table below describes the parameters in the bash scripts.

| Parameter     | Description |
| ---           | ---     |
| `verbose`     | Enable verbose output. |
| `column`      | The index (1-based) or header name of the column containing the identity values to delete. Defaults to the first column if not specified. |
| `namespace`   | An object with a `code` property specifying the identity namespace (for example, "email"). |
| `dataset-id`  | The unique identifier for the dataset associated with the work order. If the request applies to all datasets, this field will be set to `ALL`. |
| `description` | A description of the record delete work order. |
| `output-dir`  | The directory to write the output JSON payload. |

{style="table-layout:auto"}

The example below shows a successful JSON payload converted from a CSV, TSV, or TXT file. It contains records associated with the specified namespace and is used to delete records identified by email addresses.

```json
{
  "action": "delete_identity",
  "datasetId": "66f4161cc19b0f2aef3edf10",
  "displayName": "output/sample-big-001.json",
  "description": "a simple sample",
  "identities": [
    {
      "namespace": {
        "code": "email"
      },
      "id": "1"
    },
    {
      "namespace": {
        "code": "email"
      },
      "id": "2"
    }
  ]
}
```

The following table describes the properties in the JSON payload.

| Property     | Description |
| ---          | ---     |
| `action`     | The action requested for the record delete work order. Automatically set to `delete_identity` by the conversion script. |
| `datasetId`  | The unique identifier for the dataset. |
| `displayName`| A human-readable label for this record delete work order. |
| `description`| A description of the record delete work order. |
| `identities` | An array of objects, each containing:<br><ul><li> `namespace`: An object with a `code` property specifying the identity namespace (for example, "email").</li><li> `id`: The identity value to delete for this namespace.</li></ul> |

{style="table-layout:auto"}

### Submit the generated JSON data to the `/workorder` endpoint

To submit a request, follow the instructions in the [create a record delete work order](#create) section. Make sure to use the converted JSON payload as the request body (`-d`) when sending your `curl` POST request to the `/workorder` API endpoint.

## Retrieve details for a specific record delete work order {#lookup}

Retrieve information for a specific record delete work order by making a GET request to `/workorder/{WORKORDER_ID}`. The response includes action type, status, associated dataset and user information, and audit metadata.

**API format**

```http
GET /workorder/{WORKORDER_ID}
```

| Parameter | Description |
| --- | --- |
| `{WORK_ORDER_ID}` | The unique identifier for the record delete work order you are looking up. |

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

A successful response returns the details of the specified record delete work order.

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

The following table describes the properties in the response.

| Property | Description |
| --- | --- |
|`workorderId`  |  The unique identifier for the record delete work order.|
|`orgId`  |  Your organization's unique identifier.|
| `bundleId` |   The unique identifier of the bundle containing this record delete work order. Bundling allows multiple deletion orders to be grouped and processed together by downstream services.|
|`action`  |  The action type requested in the record delete work order.|
|`createdAt`  |  The timestamp when the work order was created.|
|`updatedAt`  |  The timestamp when the work order was last updated.|
|`operationCount`  |  The number of operations included in the work order.|
|`targetServices`  |  A list of target services impacted by this record delete work order.|
|`status`  |  The current status of the record delete work order.|
|`createdBy`  |  The email and identifier of the user who created the record delete work order.|
|`datasetId`  |  The unique identifier for the dataset associated with the work order.|
|`datasetName`  |  The name of the dataset associated with the work order.|
|`displayName`  |  A human-readable label for the record delete work order.|
|`description`  |  A description of the record delete work order.|

## Update a record delete work order

Update the `name` and `description` for a record delete work order by making a PUT request to the `/workorder/{WORKORDER_ID}` endpoint.

**API format**

```http
PUT /workorder/{WORKORDER_ID}
```

The following table describes the parameter for this request.

| Parameter | Description |
| --- | --- |
| `{WORK_ORDER_ID}` | The unique identifier for the record delete work order you want to update. |

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

The following table describes the properties you can update.

| Property | Description |
| --- | --- |
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
  "status": "received",
  "createdBy": "b.tarth@acme.com <b.tarth@acme.com> 8E7B321CABC8@acme.com",
  "datasetId": "1a2b3c4d5e6f7890abcdef12",
  "datasetName": "Acme_Marketing_2024",
  "displayName": "Updated Marketing Identity Delete Request",
  "description": "Updated deletion request for marketing data",
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

| Property         | Description                                                                               |
| ---------------- | ----------------------------------------------------------------------------------------- |
| `workorderId`    |   The unique identifier for the record delete work order.|
| `orgId`           |   Your organization's unique identifier.|
| `bundleId`        |  The unique identifier of the bundle containing this record delete work order. Bundling allows multiple deletion orders to be grouped and processed together by downstream services.|
| `action`          |   The action type requested in the record delete work order.|
| `createdAt`       |   The timestamp when the work order was created.|
| `updatedAt`       |   The timestamp when the work order was last updated.|
| `operationCount`  |   The number of operations included in the work order.|
| `targetServices`  |   A list of target services impacted by this record delete work order.|
| `status`          |   The current status of the record delete work order. Possible values are: `received`,`validated`, `submitted`, `ingested`, `completed`, and `failed`.|
| `createdBy`       |   The email and identifier of the user who created the record delete work order.|
| `datasetId`       |   The unique identifier for the dataset associated with the record delete work order.|
| `datasetName`    |   The name of the dataset associated with the record delete work order.|
| `displayName`    |   A human-readable label for the record delete work order.|
| `description`    |   A description of the record delete work order.|
| `productStatusDetails` | An array listing the current status of downstream processes for the request. Each object contains:<ul><li>`productName`: The name of the downstream service.</li><li>`productStatus`: The current processing status from the downstream service.</li><li>`createdAt`: The timestamp when the most recent status was posted by the service.</li></ul>This property is available after the work order is submitted to downstream services to begin processing. |

{style="table-layout:auto"}
