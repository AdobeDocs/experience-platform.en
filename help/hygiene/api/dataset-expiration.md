---
title: Dataset Expiration API Endpoint
description: The /ttl endpoint in the Data Hygiene API allows you to programmatically schedule dataset expirations in Adobe Experience Platform.
role: Developer
exl-id: fbabc2df-a79e-488c-b06b-cd72d6b9743b
---
# Dataset expiration endpoint

The `/ttl` endpoint in the Data Hygiene API allows you to schedule expiration dates for datasets in Adobe Experience Platform.

A dataset expiration is only a timed-delayed delete operation. The dataset is not protected in the interim, so it may be be deleted by other means before its expiry is reached.

>[!NOTE]
>
>Although the expiry is specified as a specific instant in time, there may be up to 24 hours of delay after the expiry before the actual deletion is initiated. Once the delete is initiated, it can take up to seven days before all traces of the dataset have been removed from Platform systems.

At any time before the dataset-delete is actually initiated, you can cancel the expiration or modify its trigger time. After cancelling a dataset expiration, you can reopen it by setting a new expiry.

Once the dataset deletion is initiated, its expiration job will be marked as `executing`, and it may not be further altered. The dataset itself may be recoverable for up to seven days, but only through a manual process initiated through an Adobe service request. As the request executes, the data lake, Identity Service, and Real-Time Customer Profile begin separate processes to remove the dataset's contents from their respective services. Once the data is deleted from all three services, the expiration is marked as `completed`.

>[!WARNING]
>
>If a dataset is set to expire, you must manually change any dataflows that may be ingesting data into that dataset so that your downstream workflows are not negatively affected.

## Getting started

The endpoint used in this guide is part of the Data Hygiene API. Before continuing, please review the [API guide](./overview.md) for information on required headers for CRUD operations, error messages, Postman collections, and how to read sample API calls.

>[!IMPORTANT]
>
>When making calls to the data Hygiene API, you must use the -H `x-sandbox-name: {SANDBOX_NAME}` header.

## List dataset expirations {#list}

You can list all dataset expirations for your organization by making a GET request. Query parameters can be used to filter the response for appropriate results.

**API format**

```http
GET /ttl?{QUERY_PARAMETERS}
```

| Parameter | Description |
| --- | --- |
| `{QUERY_PARAMETERS}` | A list of optional query parameters, with multiple parameters separated by `&` characters. Common parameters include `limit` and `page` for pagination purposes. For a full list of supported query parameters, refer to the [appendix section](#query-params). |

{style="table-layout:auto"}

**Request**

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
      "ttlId": "SD-b16c8b48-a15a-45c8-9215-587ea89369bf",
      "datasetId": "629bd9125b31471b2da7645c",
      "datasetName": "Sample Acme dataset",
      "sandboxName": "hygiene-beta",
      "imsOrg": "A2A5*EF06164773A8A49418C@AdobeOrg",
      "status": "pending",
      "expiry": "2050-01-01T00:00:00Z",
      "updatedAt": "2023-06-09T16:52:44.136028Z",
      "updatedBy": "Jane Doe <jdoe@adobe.com> 77A51F696282E48C0A494 012@64d18d6361fae88d49412d.e"
    }
  ],
  "current_page": 0,
  "total_pages": 1,
  "total_count": 1
}
```

| Property | Description |
| --- | --- |
| `total_count` | The count of dataset expirations that matched the listing call's parameters. |
| `results` | Contains the details of the returned dataset expirations. For more details on the properties of a dataset expiration, see the response section for making a [lookup call](#lookup). |

{style="table-layout:auto"}

## Look up a dataset expiration {#lookup}

To lookup a dataset expiration, make a GET request with either the `{DATASET_ID}` or the `{DATASET_EXPIRATION_ID}`. 

>[!IMPORTANT]
>
>The `{DATASET_EXPIRATION_ID}` is referred to as the `ttlId` in the response. They both refer to the unique identifier for the dataset expiration.

**API format**

```http
GET /ttl/{DATASET_ID}?include=history
GET /ttl/{DATASET_EXPIRATION_ID}
```

| Parameter | Description |
| --- | --- |
| `{DATASET_ID}` | The ID of the dataset whose expiration you want to look up. |
| `{DATASET_EXPIRATION_ID}` | The ID of the dataset expiration. |

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
    "imsOrg": "A2A5*EF06164773A8A49418C@AdobeOrg",
    "status": "pending",
    "expiry": "2024-12-31T23:59:59Z",
    "updatedAt": "2024-05-11T15:12:40.393115Z",
    "updatedBy": "Jane Doe <jdoe@adobe.com> 77A51F696282E48C0A494 012@64d18d6361fae88d49412d.e",
    "displayName": "Delete Acme Data before 2025",
    "description": "The Acme information in this dataset is licensed for our use through the end of 2024."
}
```

| Property | Description |
| --- | --- |
| `ttlId` | The ID of the dataset expiration. |
| `datasetId` | The ID of the dataset that this expiration applies to. |
| `datasetName` | The display name for the dataset this expiration applies to. |
| `sandboxName` | The name of the sandbox that the target dataset is located under. |
| `imsOrg` | Your organization's ID. |
| `status` | The current status of the dataset expiration. |
| `expiry` | The scheduled date and time when the dataset will be deleted. |
| `updatedAt` | A timestamp of when the expiration was last updated. |
| `updatedBy` | The user who last updated the expiration. |
| `displayName` | The display name for the expiration request. |
| `description` | A description for the expiration request. |

{style="table-layout:auto"}

### Catalog expiry tags

When using the [Catalog API](../../catalog/api/getting-started.md) to look up dataset details, if the dataset has an active expiration it will be listed under `tags.adobe/hygiene/ttl`.

The following JSON represents a truncated response for a dataset's details from Catalog, which an expiration value of `32503680000000`. The tag's value  encodes the expiry as an integer number of milliseconds since the beginning of the Unix epoch.

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

To ensure that data is removed from the system after a specified period, schedule an expiration for a specific dataset by providing the dataset ID and the expiry date and time in ISO 8601 format.

To create a dataset expiration, perform a POST request as shown below and provide the values mentioned below within the payload.

>[!NOTE]
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
  -H `Authorization: Bearer {ACCESS_TOKEN}`
  -H `x-gw-ims-org-id: {ORG_ID}`
  -H `x-api-key: {API_KEY}`
  -H `Accept: application/json`
  -d {
      "datasetId": "5b020a27e7040801dedbf46e",
      "expiry": "2030-12-31T23:59:59Z"
      "displayName": "Delete Acme Data before 2025",
      "description": "The Acme information in this dataset is licensed for our use through the end of 2024."
      }
```

| Property | Description |
| --- | --- |
| `datasetId` | **Required** The ID of the target dataset that you want to schedule an expiration for. |
| `expiry` | **Required** A date and time in ISO 8601 format. If the string has no explicit time zone offset, the time zone is assumed to be UTC. The lifespan of data within the system is set according to the provided expiry value.<br>Note:<ul><li>The request will fail if a dataset expiration already exists for the dataset.</li><li>This date and time must be at least **24 hours in the future**.</li></ul> |
| `displayName` | An optional display name for the dataset expiration request. |
| `description` | An optional description for the expiration request. |

**Response**

A successful response returns an HTTP 201 (Created) status and the new state of the dataset expiration.

```json
{
  "ttlId":       "SD-c8c75921-2416-4be7-9cfd-9ab01de66c5f",
  "datasetId":   "5b020a27e7040801dedbf46e",
  "datasetName": "Acme licensed data",
  "sandboxName": "prod",
  "imsOrg":      "{ORG_ID}",
  "status":      "pending",
  "expiry":      "2030-12-31T23:59:59Z",
  "updatedAt":   "2021-08-19T11:14:16Z",
  "updatedBy":   "Jane Doe <jdoe@adobe.com> 77A51F696282E48C0A494 012@64d18d6361fae88d49412d.e",
  "displayName": "Delete Acme Data before 2031",
  "description": "The Acme information in this dataset is licensed for our use through the end of 2030."
}
```

| Property | Description |
| --- | --- |
| `ttlId` | The ID of the dataset expiration. |
| `datasetId` | The ID of the dataset that this expiration applies to. |
| `datasetName` | The display name for the dataset this expiration applies to. |
| `sandboxName` | The name of the sandbox that the target dataset is located under. |
| `imsOrg` | Your organization's ID. |
| `status` | The current status of the dataset expiration. |
| `expiry` | The scheduled date and time when the dataset will be deleted. |
| `updatedAt` | A timestamp of when the expiration was last updated. |
| `updatedBy` | The user who last updated the expiration. |
| `displayName` | A display name for the expiration request. |
| `description` | An description for the expiration request. |

A 400 (Bad Request) HTTP status occurs if a dataset expiration already exists for the dataset. An unsuccessful response returns a 404 (Not Found) HTTP status if no such dataset expiration exists (or you do not have access to the dataset).

## Update a dataset expiration {#update}

To update an expiration date for a dataset, use a PUT request and the `ttlId`. You can update the `displayName`, `description`, and/or `expiry` information. 

>[!NOTE]
>
>If you change the expiration date and time, it must be at least 24 hours in the future. This enforced delay provides an opportunity for you to cancel or re-schedule the expiration and avoid any accidental loss of data.

**API format**

```http
PUT /ttl/{DATASET_EXPIRATION_ID}
```

| Parameter | Description |
| --- | --- |
| `{DATASET_EXPIRATION_ID}` | The ID of the dataset expiration that you want to change. Note: This is referred to as the `ttlId` in the response. | 

**Request**

The following request reschedules a dataset expiration `SD-c8c75921-2416-4be7-9cfd-9ab01de66c5f` to occur at the end of 2024 (Greenwich Mean Time). If the existing dataset expiration is found, that expiration is updated with the new `expiry` value.

```shell
curl -X PUT \
  https://platform.adobe.io/data/core/hygiene/ttl/SD-c8c75921-2416-4be7-9cfd-9ab01de66c5f \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json' \
  -d '{
        "expiry": "2024-12-31T23:59:59Z",
        "displayName": "Delete Acme Data before 2025",
        "description": "The Acme information in this dataset is licensed for our use through the end of 2024."
      }'
```

| Property | Description |
| --- | --- |
| `expiry` | **Required** A date and time in ISO 8601 format. If the string has no explicit time zone offset, the time zone is assumed to be UTC. The lifespan of data within the system is set according to the provided expiry value. Any previous expiration timestamp for the same dataset is to be replaced by the new expiration value you have provided. This date and time must be at least **24 hours in the future**. |
| `displayName` | A display name for the expiration request. |
| `description` | An optional description for the expiration request. |

{style="table-layout:auto"}

**Response**

A successful response returns the new state of the dataset expiration and an HTTP status 200 (OK) if a pre-existing expiration was updated.

```json
{
    "ttlId": "SD-c8c75921-2416-4be7-9cfd-9ab01de66c5f",
    "datasetId": "5b020a27e7040801dedbf46e",
    "imsOrg": "A2A5*EF06164773A8A49418C@AdobeOrg",
    "status": "pending",
    "expiry": "2024-12-31T23:59:59Z",
    "updatedAt": "2022-05-09T22:38:40.393115Z",
    "updatedBy": "Jane Doe <jdoe@adobe.com> 77A51F696282E48C0A494 012@64d18d6361fae88d49412d.e",
    "displayName": "Delete Acme Data before 2025",
    "description": "The Acme information in this dataset is licensed for our use through the end of 2024."
}
```

| Property | Description |
| --- | --- |
| `ttlId` | The ID of the dataset expiration. |
| `datasetId` | The ID of the dataset that this expiration applies to. |
| `imsOrg` | Your organization's ID. |
| `status` | The current status of the dataset expiration. |
| `expiry` | The scheduled date and time when the dataset will be deleted. |
| `updatedAt` | A timestamp of when the expiration was last updated. |
| `updatedBy` | The user who last updated the expiration. |

{style="table-layout:auto"}

An unsuccessful response returns a 404 (Not Found) HTTP status if no such dataset expiration exists.

## Cancel a dataset expiration {#delete}

You can cancel a dataset expiration by making a DELETE request.

>[!NOTE]
>
>Only dataset expirations that have a status of `pending` can be canceled. Attempting to cancel an expiration that has executed or is already canceled returns an HTTP 404 error.

**API format**

```http
DELETE /ttl/{EXPIRATION_ID}
```

| Parameter | Description |
| --- | --- |
| `{EXPIRATION_ID}` | The `ttlId` of the dataset expiration that you want to cancel. |

{style="table-layout:auto"}

**Request**

The following request cancels a dataset expiration with ID `SD-b16c8b48-a15a-45c8-9215-587ea89369bf`:

```shell
curl -X DELETE \
  https://platform.adobe.io/data/core/hygiene/ttl/SD-b16c8b48-a15a-45c8-9215-587ea89369bf \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns HTTP status 204 (No Content), and the expiration's `status` attribute is set to `cancelled`.

## Retrieve the expiration status history of a dataset {#retrieve-expiration-history}

To look up the expiration status history of a specific dataset, use the `{DATASET_ID}` and `include=history` query parameter in a lookup request. The result includes information about about the creation of the dataset expiration, any updates that have been applied, and its cancellation or execution (if applicable). You can also use the `{DATASET_EXPIRATION_ID}` to retrieve the dataset expiration status history.

**API format**

```http
GET /ttl/{DATASET_ID}?include=history
GET /ttl/{DATASET_EXPIRATION_ID}?include=history
```

| Parameter | Description |
| --- | --- |
| `{DATASET_ID}` | The ID of the dataset whose expiration history you want to look up. |
| `{DATASET_EXPIRATION_ID}` | The ID of the dataset expiration. Note: This is referred to as the `ttlId` in the response. |

{style="table-layout:auto"}

**Request**

```shell
curl -X GET \
  https://platform.adobe.io/data/core/hygiene/ttl/62759f2ede9e601b63a2ee14?include=history \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns the details of the dataset expiration, with a `history` array providing the details its `status`, `expiry`, `updatedAt`, and `updatedBy` attributes for each of its recorded updates.

```json
{
  "ttlId": "SD-b16c8b48-a15a-45c8-9215-587ea89369bf",
  "datasetId": "62759f2ede9e601b63a2ee14",
  "datasetName": "Example Dataset",
  "sandboxName": "prod",
  "displayName": "Expiration Request 123",
  "description": "Expiration Request 123 Description",
  "imsOrg": "0FCC747E56F59C747F000101@AdobeOrg",
  "status": "cancelled",
  "expiry": "2022-05-09T23:47:30.071186Z",
  "updatedAt": "2022-05-09T23:47:30.071186Z",
  "updatedBy": "Jane Doe <jdoe@adobe.com> 77A51F696282E48C0A494 012@64d18d6361fae88d49412d.e",
  "history": [
    {
      "status": "created",
      "expiry": "2032-12-31T23:59:59Z",
      "updatedAt": "2022-05-09T22:38:40.393115Z",
      "updatedBy": "Jane Doe <jdoe@adobe.com> 77A51F696282E48C0A494 012@64d18d6361fae88d49412d.e"
    },
    {
      "status": "updated",
      "expiry": "2032-12-31T23:59:59Z",
      "updatedAt": "2022-05-09T22:41:46.731002Z",
      "updatedBy": "Jane Doe <jdoe@adobe.com> 77A51F696282E48C0A494 012@64d18d6361fae88d49412d.e"
    },
    {
      "status": "cancelled",
      "expiry": "2022-05-09T23:47:30.071186Z",
      "updatedAt": "2022-05-09T23:47:30.071186Z",
      "updatedBy": "Jane Doe <jdoe@adobe.com> 77A51F696282E48C0A494 012@64d18d6361fae88d49412d.e"
    }
  ]
}
```

| Property | Description |
| --- | --- |
| `ttlId` | The ID of the dataset expiration. |
| `datasetId` | The ID of the dataset that this expiration applies to. |
| `datasetName` | The display name for the dataset this expiration applies to. |
| `sandboxName` | The name of the sandbox that the target dataset is located under. |
| `displayName` | The display name for the expiration request. |
| `description` | A description for the expiration request. |
| `imsOrg` | Your organization's ID. |
| `history` | Lists the history of updates for the expiration as an array of objects, with each object containing the `status`, `expiry`, `updatedAt`, and `updatedBy` attributes for the expiration at the time of the update. |

{style="table-layout:auto"}

## Appendix

### Accepted query parameters {#query-params}

The following table outlines the available query parameters when [listing dataset expirations](#list):

>[!NOTE]
>
>The `description`, `displayName`, and `datasetName` parameters all contain the ability to searched for by LIKE values. This means that you can find scheduled dataset expirations named: "Name123", "Name183", "DisplayName1234" by searching for the string "Name1".

| Parameter | Description | Example |
| --- | --- | --- |
| `author` | Matches expirations whose `created_by` is a match for the search string. If the search string begins with `LIKE` or `NOT LIKE`, the remainder is treated as an SQL search pattern. Otherwise, the entire search string is treated as a literal string that must exactly match the entire content of a `created_by` field. | `author=LIKE %john%`, `author=John Q. Public` |
| `cancelledDate` / `cancelledToDate` / `cancelledFromDate` | Matches expirations that were cancelled at any time in the indicated interval. This applies even if the expiration was later reopened (by setting a new expiry for the same dataset). | `updatedDate=2022-01-01` |
| `completedDate` / `completedToDate` / `completedFromDate` | Matches expirations that were completed during the specified interval. | `completedToDate=2021-11-11-06:00` |
| `createdDate` | Matches expirations that were created in the 24-hour window starting at the stated time.<br><br>Note that dates without a time (like `2021-12-07`) represent the datetime at the beginning of that day. Thus, `createdDate=2021-12-07` refers to any expiration created on 7 December 2021, from `00:00:00` through `23:59:59.999999999` (UTC). | `createdDate=2021-12-07` |
| `createdFromDate` | Matches expirations that were created at, or after, the indicated time. | `createdFromDate=2021-12-07T00:00:00Z` |
| `createdToDate` | Matches expirations that were created at, or before, the indicated time. | `createdToDate=2021-12-07T23:59:59.999999999Z` |
| `datasetId` | Matches expirations that apply to specific dataset. | `datasetId=62b3925ff20f8e1b990a7434` |
| `datasetName`  | Matches expirations whose dataset name contains the provided search string. The match is case-insensitive.  | `datasetName=Acme`  |
| `description`  |   | `description=Handle expiration of Acme information through the end of 2024.`  |
| `displayName`  | Matches expirations whose display name contains the provided search string. The match is case-insensitive. | `displayName=License Expiry`  |
| `executedDate` / `executedFromDate` / `executedToDate` | Filters results based on an exact execution date, an ending date for execution, or a starting date for execution. They are used to retrieve data or records associated with the execution of an operation on a specific date, before a particular date, or after a particular date. | `executedDate=2023-02-05T19:34:40.383615Z` |
| `expiryDate` / `expiryToDate` / `expiryFromDate` | Matches expirations that are due to be executed, or have already been executed, during the specified interval. | `expiryFromDate=2099-01-01&expiryToDate=2100-01-01` |
| `limit` | An integer between 1 and 100 that indicates the maximum number of expirations to return. Defaults to 25. | `limit=50` |
| `orderBy`  | The `orderBy` query parameter specifies the sorting order of the results returned by the API. Use it to arrange the data based on one or more fields, either in ascending (ASC) or descending (DESC) order. Use the + or - prefix to signify ASC, DESC respectively. The following values are accepted: `displayName`, `description`, `datasetName`, `id`, `updatedBy`, `updatedAt`, `expiry`, `status`. | `-datasetName`  |
| `orgId` | Matches datasets expirations whose organization ID matches that of the parameter. This value defaults to that of the `x-gw-ims-org-id` headers, and is ignored unless the request supplies a service token. | `orgId=885737B25DC460C50A49411B@AdobeOrg` |
| `page` | An integer that indicates which page of expirations to return. | `page=3` |
| `sandboxName` | Matches dataset expirations whose sandbox name exactly matches the argument. Defaults to the sandbox name in the request's `x-sandbox-name` header. Use `sandboxName=*` to include dataset expirations from all sandboxes. | `sandboxName=dev1` |
| `search`  | Matches expirations where the specified string is an exact match for the expiration ID, or is **contained** in any of these fields:<br><ul><li>author</li><li>display name</li><li>description</li><li>display name</li><li>dataset name</li></ul> | `search=TESTING`  |
| `status` | A comma-separated list of statuses. When included, the response matches dataset expirations whose current status is among those listed. | `status=pending,cancelled` |
| `ttlId` | Matches the expiration request with the given ID. | `ttlID=SD-c8c75921-2416-4be7-9cfd-9ab01de66c5f` |
| `updatedDate` / `updatedToDate` / `updatedFromDate` | Like `createdDate` / `createdFromDate` / `createdToDate`, but matches against a dataset expiration's update time instead of creation time.<br><br>An expiration is considered updated on every edit, including when it is created, cancelled, or executed. | `updatedDate=2022-01-01` |

{style="table-layout:auto"}
 