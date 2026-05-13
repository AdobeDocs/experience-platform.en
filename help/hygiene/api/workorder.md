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

The following table shows identifier submission limits by product and entitlement level. For each product, the monthly cap is the lesser of two values: a fixed identifier ceiling or a percentage-based threshold tied to your licensed data volume. In practice, most organizations have lower monthly limits based on their actual addressable audience or Adobe Customer Journey Analytics row entitlements.

| Product  | Entitlement Description | Monthly Cap (Whichever is Less) |
|----------|-------------------------|---------------------------------|
| Real-Time CDP or Adobe Journey Optimizer | Without Privacy and Security Shield or Healthcare Shield add-on          | 2,000,000 identifiers or 5% of addressable audience                    |
| Real-Time CDP or Adobe Journey Optimizer | With Privacy and Security Shield or Healthcare Shield add-on             | 15,000,000 identifiers or 10% of addressable audience                  |
| Customer Journey Analytics               | Without Privacy and Security Shield or Healthcare Shield add-on          | 2,000,000 identifiers or 100 identifiers per million Customer Journey Analytics rows of entitlement |
| Customer Journey Analytics               | With Privacy and Security Shield or Healthcare Shield add-on             | 15,000,000 identifiers or 200 identifiers per million Customer Journey Analytics rows of entitlement |

>[!NOTE]
>
>- Quotas reset on the first day of each calendar month. Unused quota does **not** carry over.
>- Quota usage is based on your organization's licensed monthly entitlement for **submitted identifiers**. Quotas are not enforced by system guardrails but may be monitored and reviewed.
>- Record delete work order capacity is a **shared service**. Your monthly cap reflects the highest entitlement across Real-Time CDP, Adobe Journey Optimizer, Customer Journey Analytics, and any applicable Shield add-ons.

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
        "identity",
        "ajo"
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
| `targetServices` | The set of target services that processed the deletion. The default value depends on your organization's entitlements. For organizations with Real-Time CDP or Adobe Journey Optimizer, the default is the full set of supported services (`["datalake", "identity", "profile", "ajo"]`). For Customer Journey Analytics-only organizations (without a Real-Time Customer Profile entitlement), the only valid value is ["datalake"]. |
| `status`         | Current status of the work order. Possible values are: `received`,`validated`, `submitted`, `ingested`, `completed`, and `failed`.|
| `createdBy`      | The email and identifier of the user who created the work order.                 |
| `datasetId`      | The dataset(s) targeted by the work order: a single dataset ID, a comma-separated list of dataset IDs (multi-dataset), or the literal `ALL`. When the request used profile-only mode, this value is `ALL`. |
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

To delete records associated with one or more identities from a single dataset, multiple datasets, or all datasets, make a POST request to the `/workorder` endpoint.

Work orders are processed asynchronously and appear in the work order list after submission. Multi-dataset and profile-only (targeted services) options are generally available for all customers as of the March 2026 Experience Platform release.

>[!TIP]
>
>Each record delete work order submitted through the API can include up to **100,000 identities**. Submit as many identities per request as possible to maximize efficiency. Avoid low-volume submissions such as single-ID work orders.

**API format**

```http
POST /workorder
```

>[!IMPORTANT]
>
>Record delete work orders act exclusively on the **primary identity** field. The following limitations apply:
>
>- **The dataset schema must define a primary identity or identity map.** You can only delete records from datasets whose associated XDM schema defines a primary identity or identity map.
>- **Secondary identities are not scanned.** If a dataset contains multiple identity fields, only the primary identity is used for matching. Records cannot be targeted or deleted based on non-primary identities.
>- **Records without a populated primary identity are skipped.** If a record does not have primary identity metadata populated, it is not eligible for deletion.
>- **Data ingested before identity configuration is not eligible.** If the primary identity field was added to a schema after data ingestion, previously ingested records cannot be deleted through record delete work orders.

>[!NOTE]
>
>If you try to create a record delete work order for a dataset that already has an active expiration, the request returns HTTP 400 (Bad Request). An active expiration is any scheduled delete that has not yet completed.

### Identity payload formats (`namespacesIdentities` or `identities`)

The request body must include **exactly one** of the following.

| Format | Property | Shape | When to use |
|--------|----------|-------|-------------|
| **Recommended** | `namespacesIdentities` | Array of objects with `namespace` (for example, `{ "code": "email" }`) and `ids` (array of identity strings). | Use for all payloads, whether manually constructed or code-generated. This is especially efficient to reduce payload size when many identities share the same namespace. |
| **Also accepted** | `identities` | Array of objects with `namespace` (for example, `{ "code": "email" }`) and a single `id` (string). | Accepted for backward compatibility. This is the format produced by the [csv-to-data-hygiene conversion scripts](#convert-id-lists-to-json-for-record-delete-requests). The service normalizes this format internally, so the resulting behavior is identical. |

If you send **both properties**, **neither property**, or provide **an empty array** for the property you include, the API returns **HTTP 400 (Bad Request)** with one of these messages:

- **Both properties provided:** `"Identities and NamespacesIdentities are not allowed at the same time"`
- **Neither provided or empty list:** `"Identities are Empty for Delete Identity request."`

**Request**

The following request deletes all records associated with specified email addresses from a particular dataset. It uses the recommended `namespacesIdentities` format.

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
            "ids": [
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
| `datasetId`            | The unique identifier for the dataset(s). The value must be exactly one of: the literal `ALL`, a single dataset ID, or a comma-separated list of two or more dataset IDs (e.g. `"id1,id2,id3"`). You cannot combine `ALL` with specific IDs. Single-dataset requests behave as before, multi-dataset requests delete the identities from each listed dataset, and `ALL` targets every dataset. Datasets must have a primary identity or identity map. If an identity map exists, it will be present as a top-level field named `identityMap`.<br>**Note**: A dataset row may have many identities in its identity map, but only one can be marked as primary. `"primary": true` must be included to force the `id` to match a primary identity.<br>When using `targetServices` for profile-only deletion, `datasetId` must be `ALL`. |
| `targetServices`       | Optional. Specifies which services should process the deletion. The default value depends on your organization's entitlements. Organizations with Real-Time CDP or Adobe Journey Optimizer receive the full set of supported services (`["datalake", "identity", "profile", "ajo"]`) by default. Organizations with Customer Journey Analytics but without a Real-Time Customer Profile entitlement can only use ["datalake"]. To limit deletion to profile-related data only and leave the data lake untouched, set this to `["identity", "profile", "ajo"]` (in any order). This profile-only mode requires a Real-Time CDP or Adobe Journey Optimizer entitlement and `datasetId` must be `ALL`.|
| `identities` | **Use exactly one of `identities` or `namespacesIdentities`.** Array of objects, each with `namespace` (object with `code`, e.g. `"email"`) and `id` (single identity string). Accepted for backward compatibility and produced by the conversion scripts. The service normalizes this format internally; behavior is identical. See [Identity payload format](#identity-payload-format-identities-or-namespacesidentities) above. |
| `namespacesIdentities` | **Use exactly one of `identities` or `namespacesIdentities`.** Array of objects, each with `namespace` (object with `code`, e.g. `"email"`) and `ids` (array of identity strings). Recommended for all payloads. The `namespacesIdentities` property is more compact when many identities share one namespace. See [Identity payload format](#identity-payload-format-identities-or-namespacesidentities) above. Identity namespaces: [identity namespace documentation](../../identity-service/features/namespaces.md), [Identity Service API](https://developer.adobe.com/experience-platform-apis/references/identity-service/#operation/getIdNamespaces). |

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
    "identity",
    "ajo"
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
| `datasetId`      | The unique identifier for the dataset(s). If the request is for all datasets, the value will be set to `ALL`. For multi-dataset requests, the value reflects the comma-separated list or single ID submitted. |
| `datasetName`    | The name of the dataset for this record delete work order. |
| `displayName`    | A human-readable label for the record delete work order.   |
| `description`    | A description of the record delete work order.             |

{style="table-layout:auto"}

The response `targetServices` value echoes your request or shows the full default set when omitted (see the response table above).

### Multi-dataset and profile-only (API) {#multi-dataset-profile-only}

The following options are available through the API only and are not supported in the Data Hygiene UI. They control which datasets and which services process the deletion, enabling multi-dataset submissions and profile-only targeted service requests.

The following table summarizes how the request body and behavior change for each option.

| Option | Request body change | Behavior |
|--------|---------------------|----------|
| **Multi-dataset** | Use a comma-separated list in `datasetId` (e.g. `"id1,id2,id3"`). Single ID or `ALL` unchanged. | Identities are deleted from the listed datasets (or from one dataset, or from all datasets when `ALL`). |
| **Profile-only (targeted services)** | Add `targetServices` with exactly `["identity", "profile", "ajo"]` (any order). Requires `datasetId`: `"ALL"`. | Only Identity, Profile, and Adobe Journey Optimizer process the deletion; the data lake is not modified. |

#### Multi-dataset requests

The `datasetId` field is split on commas: use a single ID (same behavior as before), a comma-separated list of IDs, or the literal `ALL`. To delete identities from multiple specific datasets in one work order, provide a comma-separated list:

```json
"datasetId": "6707eb36eef4d42ab86d9fbe,6643f00c16ddf51767fcf780"
```

Identities are then deleted from each of the listed datasets. Single-dataset requests work as they always did; use `ALL` to target every dataset. The value must be exactly one of: `ALL`, a single dataset ID, or two or more dataset IDs separated by commas (no combining `ALL` with specific IDs).

#### Profile-only (targeted services)

To only remove identity and profile-related data while leaving the data lake untouched, include `targetServices` with exactly these three values in any order: `identity`, `profile`, and `ajo`. Identity, Profile, and AJO are explicitly included; the data lake is excluded. In this mode, `datasetId` must be `ALL` (the use case is full profile deletion, not per-dataset fragments).

The following example creates a profile-only record delete work order:

```shell
curl -X POST \
  "https://platform.adobe.io/data/core/hygiene/workorder" \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'x-sandbox-id: {SANDBOX_ID}' \
  -d '{
    "action": "delete_identity",
    "datasetId": "ALL",
    "displayName": "Profile-only delete for specified identity",
    "description": "Delete identity, profile, and AJO data only; datalake unchanged.",
    "targetServices": ["identity", "profile", "ajo"],
    "namespacesIdentities": [
      {
        "namespace": { "code": "email" },
        "ids": ["user@example.com"]
      }
    ]
  }'
```

Successful responses for multi-dataset or profile-only requests follow the same shape as other work order responses. The returned `datasetId` and `targetServices` reflect the values in the request (or the full default list when `targetServices` is omitted), so you can confirm what was submitted.

>[!NOTE]
>
>The action property for record delete work orders is currently `identity-delete` in API responses. If the API changes to use a different value (such as `delete_identity`), this documentation will be updated accordingly.

## Convert ID lists to JSON for record delete requests (#convert-id-lists-to-json-for-record-delete-requests)

Use conversion scripts to produce the required JSON payloads for the `/workorder` endpoint when your identifiers are in CSV, TSV, or TXT files. This approach is especially helpful when working with existing data files. For ready-to-use scripts and instructions, see the [csv-to-data-hygiene GitHub repository](https://github.com/perlmonger42/csv-to-data-hygiene).

The scripts output the **`identities`** format—one `id` per object with a `namespace`. The API accepts this format as-is; you can send the generated JSON directly in the POST body to `/workorder` with no conversion. The recommended format is **`namespacesIdentities`**; see [Create a record delete work order](#create) and [Identity payload format](#identity-payload-format-identities-or-namespacesidentities).

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
| `namespace`   | The identity namespace code passed to the script (for example, `email`). The generated JSON uses this in each object's `namespace.code` property. |
| `dataset-id`  | The unique identifier for the dataset(s): a single ID, comma-separated IDs for multi-dataset, or `ALL` for all datasets. |
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
| `datasetId`  | The unique identifier for the dataset(s): a single ID, comma-separated IDs, or `ALL`. |
| `displayName`| A human-readable label for this record delete work order. |
| `description`| A description of the record delete work order. |
| `identities` | An array of objects, each containing:<br><ul><li> `namespace`: An object with a `code` property specifying the identity namespace (for example, "email").</li><li> `id`: The identity value to delete for this namespace.</li></ul> |

{style="table-layout:auto"}

### Submit the generated JSON data to the `/workorder` endpoint

The script output uses the `identities` format, which the API accepts as-is. Use the converted JSON payload as the request body (`-d`) when you send your `curl` POST request to the `/workorder` endpoint. For full request options and validation rules, see [Create a record delete work order](#create).

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
|`datasetId`  |  The unique identifier for the dataset(s) associated with the work order (single ID, comma-separated IDs, or `ALL`).|
|`datasetName`  |  The name of the dataset associated with the work order.|
|`displayName`  |  A human-readable label for the record delete work order.|
|`description`  |  A description of the record delete work order.|

## Update a record delete work order {#update}

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
| `datasetId`       |   The unique identifier for the dataset(s) associated with the record delete work order (single ID, comma-separated IDs, or `ALL`).|
| `datasetName`    |   The name of the dataset associated with the record delete work order.|
| `displayName`    |   A human-readable label for the record delete work order.|
| `description`    |   A description of the record delete work order.|
| `productStatusDetails` | An array listing the current status of downstream processes for the request. Each object contains:<ul><li>`productName`: The name of the downstream service.</li><li>`productStatus`: The current processing status from the downstream service.</li><li>`createdAt`: The timestamp when the most recent status was posted by the service.</li></ul>This property is available after the work order is submitted to downstream services to begin processing. |

{style="table-layout:auto"}
