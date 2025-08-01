---
title: Dataset Expiration API Endpoint
description: The /ttl endpoint in the Data Hygiene API allows you to programmatically schedule dataset expirations in Adobe Experience Platform.
role: Developer
exl-id: fbabc2df-a79e-488c-b06b-cd72d6b9743b
---
# Dataset expiration endpoint

Use the `/ttl` endpoint in the Data Hygiene API to schedule when datasets in Adobe Experience Platform should be deleted.

A dataset expiration is a delayed delete operation. The dataset is not protected in the interim and may be deleted by other means before its scheduled expiration.

>[!NOTE]
>
>Although the expiry is specified as a specific instant in time, there may be up to 24 hours of delay after the expiry before the actual deletion is initiated. Once the delete is initiated, it can take up to seven days before all traces of the dataset have been removed from Experience Platform systems.

Before deletion begins, you can cancel the expiration or change its scheduled time. To reopen a cancelled expiration, set a new expiry.

Once deletion begins, the expiration job is marked as `executing` and can no longer be modified. The dataset may be recoverable for up to seven days, but only through a manual Adobe service request. During deletion, the data lake, Identity Service, and Real-Time Customer Profile each remove the dataset contents separately. When deletion is complete, the expiration is marked as `completed`.

>[!WARNING]
>
>If a dataset is set to expire, you must manually change any dataflows that may be ingesting data into that dataset so that your downstream workflows are not negatively affected.

Advanced Data Lifecycle Management supports dataset deletions through the dataset expiration endpoint and ID deletions (row-level data) using primary identities via the [workorder endpoint](./workorder.md). You can also manage [dataset expirations](../ui/dataset-expiration.md) and [record deletions](../ui/record-delete.md) through the Experience Platform UI. See the linked documentation for more information. 

>[!NOTE]
>
>Data Lifecycle does not support batch deletion.

## Getting started

The endpoint used in this guide is part of the Data Hygiene API. Before continuing, please review the [API guide](./overview.md) for information on required headers for CRUD operations, error messages, Postman collections, and how to read sample API calls.

>[!IMPORTANT]
>
>When making calls to the data Hygiene API, you must use the -H `x-sandbox-name: {SANDBOX_NAME}` header.

## List dataset expirations {#list}

You can list all dataset expirations configured for your organization by making a GET request to the `/ttl` endpoint.

Filter results using query parameters to return only the expirations that meet your criteria. Each result includes status and configuration details for each dataset expiration.

**API format**

```http
GET /ttl?{QUERY_PARAMETERS}
```

| Parameter | Description |
| --- | --- |
| `{QUERY_PARAMETERS}` | A list of optional query parameters, with multiple parameters separated by `&` characters. Common parameters include `limit` and `page` for pagination purposes. For a full list of supported query parameters, refer to the [appendix section](#query-params) a full list of supported query parameters. The most commonly used parameters are included below as well as in the appendix. |
| `author`     | Filter by the user who most recently updated or created the dataset expiration. Supports SQL-like patterns (for example, `LIKE %john%`). |
| `datasetId`  | Filter expirations by a specific dataset ID. |
| `datasetName`| A case-insensitive filter for dataset name matches. |
| `status`     | Filter by a comma-separated list of statuses: `pending`, `executing`, `cancelled`, `completed`. |
| `expiryDate` | Filter for expirations with a specific expiration date. |
| `limit`      | Stipulate the maximum number of results to return (1–100, default: 25). |
| `page`       | Paginate results with a zero-based index (default page size: 50, max: 100). |

{style="table-layout:auto"}

**Request**

The following request retrieves all dataset expirations updated before August 1, 2021, and last updated by a user whose name matches "Jane Doe".

```shell
curl -X GET \
  https://platform.adobe.io/data/core/hygiene/ttl?updatedToDate=2021-08-01&author=LIKE%20%25Jane%20Doe%25 \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response lists the resulting dataset expirations. The following example has been truncated for space.

>[!IMPORTANT]
>
>The `ttlId` in the response is also referred to as the `{DATASET_EXPIRATION_ID}`. They both refer to the unique identifier for the dataset expiration.

```json
{
  "results": [
    {
      "ttlId": "SD-c9f113f2-d751-44bc-bc20-9d5ca0b6ae15",
      "datasetId": "3e9f815ae1194c65b2a4c5ea",
      "datasetName": "Acme_Profile_Engagements",
      "sandboxName": "acme-beta",
      "displayName": "Engagement Data Retention Policy",
      "description": "Scheduled expiry for Acme marketing data",
      "imsOrg": "C9D8E7F6A5B41234567890AB@AcmeOrg",
      "status": "pending",
      "expiry": "2027-01-12T17:15:31.000Z",
      "updatedAt": "2026-12-15T12:40:20.000Z",
      "updatedBy": "t.lannister@acme.com <t.lannister@acme.com> 3E9F815AE1194C65B2A4C5EA@acme.com"
    }
  ],
  "current_page": 0,
  "total_pages": 1,
  "total_count": 1
}
```

| Property | Description |
| --- | --- |
| `results`      | An array of dataset expiration configurations.|
| `ttlId`        | The unique identifier for the dataset expiration configuration. |
| `datasetId`    | The unique identifier of the dataset associated with this configuration. |
| `datasetName`  | The name of the dataset. |
| `sandboxName`  | The sandbox in which this dataset expiration is configured. |
| `displayName`  | A human-readable name for the expiration configuration.|
| `description`  | A description of the expiration configuration. |
| `imsOrg`       | Your unique organization identifier.         |
| `status`       | The current status of the expiration. One of: `pending`, `executing`, `cancelled`, `completed`. |
| `expiry`       | The scheduled expiration date and time (ISO 8601 format). |
| `updatedAt`    | The timestamp of the last update to this configuration. |
| `updatedBy`    | The identifier and email of the user or service who last updated the configuration. |
| `current_page` | The index of the current results page (zero-based). |
| `total_pages`  | The total number of result pages available.      |
| `total_count`  | The total number of dataset expiration configuration records returned. |

{style="table-layout:auto"}

## Look up a dataset expiration {#lookup}

Retrieve the details for a specific dataset expiration configuration by making a GET request with either the dataset expiration ID or the dataset ID as the path parameter.

>[!IMPORTANT]
>
>You may provide either a dataset expiration ID (for exampe, `SD-xxxxxx-xxxx`) or a dataset ID in the path. The `ttlId` in the response is the unique identifier for the dataset expiration.

**API format**

```http
GET /ttl/{ID}
GET /ttl/{ID}?include=history
```

| Parameter | Description |
| --- | --- |
| `{ID}` | The unique identifier for the dataset expiration configuration. You may provide either a dataset expiration ID or a dataset ID. |
| `include` | (Optional) If set to `history`, the response includes a `history` array with change events for the configuration.|

{style="table-layout:auto"}

**Request**

The following request looks up the expiration details for dataset `62759f2ede9e601b63a2ee14`:

```shell
curl -X GET \
  https://platform.adobe.io/data/core/hygiene/ttl/62759f2ede9e601b63a2ee14 \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns the details of the dataset expiration.

```json
{
    "ttlId": "SD-c8c75921-2416-4be7-9cfd-9ab01de66c5f",
    "datasetId": "62759f2ede9e601b63a2ee14",
    "datasetName": "XtVRwq9-38734",
    "sandboxName": "prod",
    "displayName": "Delete Acme Data before 2025",
    "description": "The Acme information in this dataset is licensed for our use through the end of 2024.",
    "imsOrg": "885737B25DC460C50A49411B@AdobeOrg",
    "status": "pending",
    "expiry": "2035-09-25T00:00:00Z",
    "updatedAt": "2025-05-01T19:00:55.000Z",
    "updatedBy": "Jane Doe <jdoe@adobe.com> 77A51F696282E48C0A494 012@64d18d6361fae88d49412d.e",
}
```

| Property | Description |
| --- | --- |
| `ttlId`       | The unique identifier for the dataset expiration configuration. |
| `datasetId`   | The unique identifier for the dataset. |
| `datasetName` | The name of the dataset. |
| `sandboxName` | The sandbox in which the dataset expiration is configured. |
| `displayName` | A human-readable name for the dataset expiration configuration. |
| `description` | A description of the dataset expiration configuration. |
| `imsOrg`      | Your unique organization identifier associated with this configuration. |
| `status`      | The current status of the dataset expiration configuration.<br>One of: `pending`, `executing`, `cancelled`, `completed`. |
| `expiry`      | The scheduled expiration timestamp for the dataset (ISO 8601 format). |
| `updatedAt`   | Timestamp for the most recent update. |
| `updatedBy`   | The identifier and email of the user or service that last updated the dataset expiration. |

{style="table-layout:auto"}

### Catalog expiry tags

When using the [Catalog API](../../catalog/api/getting-started.md) to look up dataset details, if the dataset has an active expiration it will be listed under `tags.adobe/hygiene/ttl`.

The following JSON shows a truncated Catalog API response for a dataset with an expiration value of `32503680000000`. The tag encodes the expiry as the number of milliseconds since the Unix epoch.

```json
{
  "63212313c308d51b997858ba": {
    "name": "Test Dataset",
    "description": "A piecrust promise, made to be broken",
    "imsOrg": "0FCC747E56F59C747F000101@AdobeOrg",
    "sandboxId": "8dc51b90-d0f9-11e9-b164-ed6a398c8b35",
    "tags": {
      "adobe/hygiene/ttl": [ "32503680000000" ],
      ...
    },
    ...
  }
}
```

## Create a dataset expiration {#create}

Create a new dataset expiration configuration to define when a dataset will expire and be eligible for deletion.  
Provide the dataset ID, expiry date or date-time (in ISO 8601 format), a display name, and (optionally) a description.

>[!NOTE]
>
>The expiry value may be a date (YYYY-MM-DD) or a date and time (YYYY-MM-DDTHH:MM:SSZ). If you provide only a date, the system uses midnight UTC (00:00:00Z) on that day. The expiry must be at least 24 hours in the future.

To create a dataset expiration, send a POST request as shown below.

>[!TIP]
>
>If you receive a 404 error, ensure that the request has no additional forward slashes. A trailing slash can cause a POST request to fail.

**API format**

```http
POST /ttl
```

**Request**

```shell
curl -X POST \
  https://platform.adobe.io/data/core/hygiene/ttl \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json' \
  -d '{
        "datasetId": "3e9f815ae1194c65b2a4c5ea",
        "expiry": "2030-12-31",
        "displayName": "Expiry rule for Acme customers",
        "description": "Set expiration for Acme customer dataset"
      }'
```

| Property | Description |
| --- | --- |
| `datasetId`   | **Required.** The unique identifier for the dataset to apply the expiration. |
| `expiry`      | **Required.** The expiry date and time in ISO 8601 format. This defines the lifespan of data within the system. If only a date is provided, defaults to midnight UTC (00:00:00Z). The expiry **must be at least 24 hours in the future**. <br>Note:<ul><li>The request will fail if a dataset expiration already exists for the dataset.</li> |
| `displayName` | **Required.** A human-readable name for the dataset expiration configuration. |
| `description` | An optional description for the dataset expiration configuration. |

**Response**

A successful response returns an HTTP 201 (Created) status and the new dataset expiration configuration.

```json
{
  "ttlId": "SD-2aaf113e-3f17-4321-bf29-a2c51152b042",
  "datasetId": "3e9f815ae1194c65b2a4c5ea",
  "datasetName": "Acme_Customer_Data",
  "sandboxName": "acme-prod",
  "displayName": "Expiry rule for Acme customers",
  "description": "Set expiration for Acme customer dataset",
  "imsOrg": "{ORG_ID}",
  "status": "pending",
  "expiry": "2030-12-31T00:00:00Z",
  "updatedAt": "2025-01-02T10:35:45.000Z",
  "updatedBy": "s.stark@acme.com <s.stark@acme.com> 3E9F815AE1194C65B2A4C5EA@acme.com"
}
```

| Property | Description |
| --- | --- |
| `ttlId`       | The unique identifier for the created dataset expiration configuration. |
| `datasetId`   | The unique identifier for the dataset. |
| `datasetName` | The name of the dataset.               |
| `sandboxName` | The sandbox in which this dataset expiration is configured. |
| `displayName` | The display name for the dataset expiration configuration. |
| `description` | A description of the dataset expiration configuration.     |
| `imsOrg`      | Your unique organization identifier associated with this configuration. |
| `status`      | The current status of the dataset expiration configuration.<br>One of: `pending`, `executing`, `cancelled`, `completed`. |
| `expiry`      | The scheduled expiration timestamp for the dataset. |
| `updatedAt`   | The timestamp for the most recent update. |
| `updatedBy`   | The identifier and email of the user or service that last updated the dataset expiration configuration.  |

A 400 (Bad Request) HTTP status occurs if a dataset expiration already exists for the dataset. A 404 (Not Found) HTTP status occurs if no such dataset exists or you do not have access to the dataset.

## Update a dataset expiration configuration {#update}

To update an existing dataset expiration configuration, make a PUT request to `/ttl/DATASET_EXPIRATION_ID`. You can only update the `displayName`, `description`, and `expiry` fields of the configuration. Updates are only allowed when the expiration status is `pending`.

>[!NOTE]
>
>The `expiry` field accepts a date (YYYY-MM-DD) or date and time (YYYY-MM-DDTHH:MM:SSZ). If only a date is provided, the system uses midnight UTC (00:00:00Z) on that day. The expiry **must be at least 24 hours in the future**.

**API format**

```http
PUT /ttl/{DATASET_EXPIRATION_ID}
```

| Parameter | Description |
| --- | --- |
| `{DATASET_EXPIRATION_ID}` | The unique identifier for the dataset expiration configuration. Note: This is referred to as the `ttlId` in the response. | 

**Request**

The following request updates the expiration, display name, and description for dataset expiration `SD-c1f902aa-57cb-412e-bb2b-c70b8e1a5f45`:

```shell
curl -X PUT \
  https://platform.adobe.io/data/core/hygiene/ttl/SD-c1f902aa-57cb-412e-bb2b-c70b8e1a5f45 \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json' \
  -d '{
        "displayName": "Customer Dataset Expiry Rule",
        "description": "Updated description for Acme customer dataset",
        "expiry": "2031-06-15"
      }'
```

| Property | Description |
| --- | --- |
| `displayName` | (Optional) A new human-readable name for the dataset expiration configuration. |
| `description` | (Optional) A new description for the dataset expiration configuration. |
| `expiry`      | (Optional) A new expiry date or date and time in ISO 8601 format. If only a date is provided, defaults to midnight UTC. The expiry must be **at least 24 hours in the future**. |

>[!NOTE]
>
>At least one of these fields must be provided in the request.

**Response**

A successful response returns HTTP status 200 (OK) and the updated dataset expiration configuration.

```json
{
  "ttlId": "SD-c1f902aa-57cb-412e-bb2b-c70b8e1a5f45",
  "datasetId": "3e9f815ae1194c65b2a4c5ea",
  "datasetName": "Acme_Customer_Data",
  "sandboxName": "acme-prod",
  "displayName": "Customer Dataset Expiry Rule",
  "description": "Updated description for Acme customer dataset",
  "imsOrg": "C9D8E7F6A5B41234567890AB@AcmeOrg",
  "status": "pending",
  "expiry": "2031-06-15T00:00:00Z",
  "updatedAt": "2031-05-01T14:11:12.000Z",
  "updatedBy": "b.tarth@acme.com <b.tarth@acme.com> 3E9F815AE1194C65B2A4C5EA@acme.com"
}
```

| Property | Description |
| --- | --- |
| `ttlId`       | The unique identifier for the updated dataset expiration configuration. |
| `datasetId`   | The unique identifier for the dataset. |
| `datasetName` | The name of the dataset. |
| `sandboxName` | The sandbox in which this dataset expiration is configured. |
| `displayName` | The display name for the dataset expiration configuration. |
| `description` | A description of the dataset expiration configuration. |
| `imsOrg`      | The organization ID associated with this configuration. |
| `status`      | The current status of the dataset expiration configuration.<br>One of: `pending`, `executing`, `cancelled`, `completed`. |
| `expiry`      | The scheduled expiration timestamp for the dataset. |
| `updatedAt`   | The timestamp for the most recent update. |
| `updatedBy`   | The identifier and email of the user or service that last updated the dataset expiration configuration. |

{style="table-layout:auto"}

An unsuccessful response returns a 404 (Not Found) HTTP status if no such dataset expiration exists.

## Cancel a dataset expiration {#delete}

Cancel a pending dataset expiration configuration by making a DELETE request to `/ttl/{ID}`.

>[!NOTE]
>
>Only dataset expirations in `pending` status can be cancelled. Attempting to cancel an expiration that is already executing, completed, or cancelled returns an HTTP 404 error.

**API format**

```http
DELETE /ttl/{ID}
```

| Parameter | Description |
| --- | --- |
| `{ID}` | The unique identifier for the dataset expiration configuration. You may provide either a dataset expiration ID or a dataset ID. |

{style="table-layout:auto"}

**Request**

The following request cancels a dataset expiration with ID `SD-d4a7d918-283b-41fd-bfe1-4e730a613d21`:

```shell
curl -X DELETE \
  https://platform.adobe.io/data/core/hygiene/ttl/SD-d4a7d918-283b-41fd-bfe1-4e730a613d21 \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns HTTP status 200 (OK) and the cancelled dataset expiration configuration. Not that the expiration's `status` attribute is set to `cancelled`.

```json
{
  "ttlId": "SD-d4a7d918-283b-41fd-bfe1-4e730a613d21",
  "datasetId": "5a9e2c68d3b24f03b55a91ce",
  "datasetName": "Acme_Customer_Data",
  "sandboxName": "acme-prod",
  "displayName": "Customer Dataset Expiry Rule",
  "description": "Cancelled expiry configuration for Acme customer dataset",
  "imsOrg": "C9D8E7F6A5B41234567890AB@AcmeOrg",
  "status": "cancelled",
  "expiry": "2032-02-28T00:00:00Z",
  "updatedAt": "2032-01-15T08:27:31.000Z",
  "updatedBy": "s.clegane@acme.com <s.clegane@acme.com> 5A9E2C68D3B24F03B55A91CE@acme.com"
}
```

| Property      | Description |
|---|---|
| `ttlId`       | The unique identifier for the deleted dataset expiration configuration.|
| `datasetId`   | The unique identifier for the dataset.                                 |
| `datasetName` | The name of the dataset.                                               |
| `sandboxName` | The sandbox where this dataset expiration is configured.               |
| `displayName` | The display name for the dataset expiration configuration.             |
| `description` | A description of the dataset expiration configuration.                 |
| `imsOrg`      | Your unique organization identifier associated with this configuration.|
| `status`      | The current status of the dataset expiration configuration.<br>One of: `pending`, `executing`, `cancelled`, `completed`. |
| `expiry`      | The scheduled expiration timestamp for the dataset.                    |
| `updatedAt`   | The timestamp for the most recent update.                              |
| `updatedBy`   | The identifier and email of the user or service that last updated the dataset expiration configuration. |

## Appendix

### Accepted query parameters {#query-params}

The following table outlines the available query parameters when [listing dataset expirations](#list):

>[!NOTE]
>
>The `description`, `displayName`, and `datasetName` parameters all contain the ability to searched for by LIKE values. This means that you can find scheduled dataset expirations named: "Name123", "Name183", "DisplayName1234" by searching for the string "Name1".

| Parameter | Description | Example |
| --- | --- | --- |
| `author` | Use the `author` query parameter to find the person who most recently updated the dataset expiration. If no updates have been made since its creation, this will match the original creator of the expiration. This parameter matches expirations where the `created_by` field corresponds to the search string.<br>If the search string begins with `LIKE` or `NOT LIKE`, the remainder is treated as an SQL search pattern. Otherwise, the entire search string is treated as a literal string that must exactly match the entire content of a `created_by` field. | `author=LIKE %john%`, `author=John Q. Public` |
| `datasetId` | Matches expirations that apply to specific dataset. | `datasetId=62b3925ff20f8e1b990a7434` |
| `datasetName`  | Matches expirations whose dataset name contains the provided search string. The match is case-insensitive.  | `datasetName=Acme`  |
| `description`  |   | `description=Handle expiration of Acme information through the end of 2024.`  |
| `displayName`  | Matches expirations whose display name contains the provided search string. The match is case-insensitive. | `displayName=License Expiry`  |
| `executedDate` / `executedFromDate` / `executedToDate` | Filters results based on an exact execution date, an ending date for execution, or a starting date for execution. They are used to retrieve data or records associated with the execution of an operation on a specific date, before a particular date, or after a particular date. | `executedDate=2023-02-05T19:34:40.383615Z` |
| `expiryDate` | Matches expirations that occurred in the 24-hour window of the specified date. | `2024-01-01` |
| `expiryToDate` / `expiryFromDate` | Matches expirations that are due to be executed, or have already been executed, during the specified interval. | `expiryFromDate=2099-01-01&expiryToDate=2100-01-01` |
| `limit` | An integer between 1 and 100 that indicates the maximum number of expirations to return. Defaults to 25. | `limit=50` |
| `orderBy`  | The `orderBy` query parameter specifies the sorting order of the results returned by the API. Use it to arrange the data based on one or more fields, either in ascending (ASC) or descending (DESC) order. Use the + or - prefix to signify ASC, DESC respectively. The following values are accepted: `displayName`, `description`, `datasetName`, `id`, `updatedBy`, `updatedAt`, `expiry`, `status`. | `-datasetName`  |
| `orgId` | Matches datasets expirations whose organization ID matches that of the parameter. This value defaults to that of the `x-gw-ims-org-id` headers, and is ignored unless the request supplies a service token. | `orgId=885737B25DC460C50A49411B@AdobeOrg` |
| `page` | An integer that indicates which page of expirations to return. | `page=3` |
| `sandboxName` | Matches dataset expirations whose sandbox name exactly matches the argument. Defaults to the sandbox name in the request's `x-sandbox-name` header. Use `sandboxName=*` to include dataset expirations from all sandboxes. | `sandboxName=dev1` |
| `search`  | Matches expirations where the specified string is an exact match for the expiration ID, or is **contained** in any of these fields:<br><ul><li>author</li><li>display name</li><li>description</li><li>display name</li><li>dataset name</li></ul> | `search=TESTING`  |
| `status` | A comma-separated list of statuses. When included, the response matches dataset expirations whose current status is among those listed. | `status=pending,cancelled` |
| `ttlId` | Matches the expiration request with the given ID. | `ttlID=SD-c8c75921-2416-4be7-9cfd-9ab01de66c5f` |
| `updatedDate` | Matches expirations that were updated in the 24-hour window of the specified date. | `2024-01-01` |
| `updatedToDate` / `updatedFromDate` | Matches expirations that were updated in the 24-hour window starting at the stated time.<br><br>An expiration is considered updated on every edit, including when it is created, cancelled, or executed. | `updatedDate=2022-01-01` |

{style="table-layout:auto"}
 