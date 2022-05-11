---
title: Dataset Time-to-Live (TTL) API Endpoint
description: The /ttl endpoint in the Data Hygiene API allows you to programmatically schedule dataset TTLs in Adobe Experience Platform.
---
# Dataset time-to-live (TTL) endpoint

The `/ttl` endpoint in the Data Hygiene API allows you to schedule time-to-live (TTL) protocols for datasets in Adobe Experience Platform.

A dataset TTL is only a timed-delayed delete operation. The dataset is not protected in the interim, so it may be be deleted by other means before its expiry is reached.

>[!NOTE]
>
>Although the expiry is specified as a specific instant in time, there may be up to 24 hours of delay after the expiry before the actual deletion is initiated. Once the delete is initiated, it can take up to seven days before all traces of the dataset have been removed from Platform systems.

At any time before the dataset-delete is actually initiated, you can cancel the TTL or modify its trigger time. After cancelling a TTL, you can reopen it by setting a new expiry.

Once the dataset deletion is initiated, its TTL will be marked as `executing`, and it may not be further altered. The dataset itself may be recoverable for up to seven days, but only through a manual process initiated through a customer service request.

## Getting started

The endpoint used in this guide is part of the Data Hygiene API. Before continuing, please review the [overview](./overview.md) for links to related documentation, a guide to reading the sample API calls in this document, and important information regarding required headers that are needed to successfully make calls to any Experience Platform API.

## List dataset TTLs {#list}

You can list all dataset TTL for your organization by making a GET request.

**API format**

```http
GET /ttl?{QUERY_PARAMETERS}
```

| Parameter | Description |
| --- | --- |
| `{QUERY_PARAMETERS}` | A list of optional query parameters, with multiple parameters separated by `&` characters. Common parameters include `size` and `page` for pagination purposes. For a full list of supported query parameters, refer to the [appendix section](#query-params). |

{style="table-layout:auto"}

**Request**

```shell
curl -X GET \
  https://platform.adobe.io/data/core/hygiene/ttl?page=1&size=50 \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response lists the resulting TTLs. The following example has been truncated for space.

```json
{
  "results": [
    {
      "ttlId": "SDfba908e9fb2e427ab4275d20465631d7",
      "datasetId": "62799c3e1151781b63ccaa28",
      "imsOrg": "{ORG_ID}",
      "status": "cancelled",
      "expiry": "2022-05-09T22:57:05.531024Z",
      "updatedAt": "2022-05-09T22:57:05.531025Z",
      "updatedBy": "{USER_ID}"
    },
    {
      "ttlId": "SD5cfd7a11b25543a9bcd9ef647db3d8df",
      "datasetId": "62759f2ede9e601b63a2ee14",
      "imsOrg": "{ORG_ID}",
      "status": "pending",
      "expiry": "2032-12-31T23:59:59Z",
      "updatedAt": "2022-05-09T22:41:46.731002Z",
      "updatedBy": "{USER_ID}"
    }
  ],
  "current_page": 1,
  "total_pages": 36,
  "total_count": 886
}
```

| Property | Description |
| --- | --- |
| `results` | Contains the details of the returned TTLs. For more details on the properties of a TTL entity, see the response section for making a [lookup call](#lookup). |
| `current_page` | The current page of listed results. |
| `total_pages` | The total number of pages in the response. |
| `total_count` | The total number of TTL entities in the response. |

{style="table-layout:auto"}

## Look up a TTL {#lookup}

You can lookup a dataset TTL through a GET request.

**API format**

```http
GET /ttl/{TTL_ID}
```

| Parameter | Description |
| --- | --- |
| `{TTL_ID}` | The ID of the TTL that you want to look up. |

{style="table-layout:auto"}

**Request**

```shell
curl -X GET \
  https://platform.adobe.io/data/core/hygiene/ttl/5b020a27e7040801dedbf46e \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns the details of the TTL.

```json
{
    "ttlId": "SD5cfd7a11b25543a9bcd9ef647db3d8df",
    "datasetId": "62759f2ede9e601b63a2ee14",
    "imsOrg": "{ORG_ID}",
    "status": "pending",
    "expiry": "2023-12-31T23:59:59Z",
    "updatedAt": "2022-05-11T15:12:40.393115Z",
    "updatedBy": "{USER_ID}"
}
```

| Property | Description |
| --- | --- |
| `ttlId` | The ID of the dataset TTL. |
| `datasetId` | The ID of the dataset that this TTL applies to. |
| `imsOrg` | Your organization's ID. |
| `status` | The current status of the TTL. |
| `expiry` | The scheduled date and time when the dataset will be deleted. |
| `updatedAt` | A timestamp of when the TTL was last updated. |
| `updatedBy` | The user who last updated the TTL. |

{style="table-layout:auto"}

## Create a TTL {#create}

You can add a TTL for a dataset through a POST request.

**API format**

```http
POST /ttl
```

**Request**

The following request schedules a dataset `5b020a27e7040801dedbf46e` for deletion at the end of 2022 (Greenwich Mean Time).

```shell
curl -X POST \
  https://platform.adobe.io/data/core/hygiene/ttl \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json' \
  -d '{
        "datasetId": "5b020a27e7040801dedbf46e",
        "expiry": "2022-12-31T23:59:59Z"
      }'
```

| Property | Description |
| --- | --- |
| `datasetId` | The ID of the dataset that you want to schedule a TTL for. |
| `expiry` | An ISO 8601 timestamp for when the dataset will be deleted. |

{style="table-layout:auto"}

**Response**

A successful response returns the details of the TTL, with HTTP status 200 (OK) if a pre-existing TTL was updated, or 201 (Created) if there was no pre-existing TTL.

```json
{
    "ttlId": "SD5cfd7a11b25543a9bcd9ef647db3d8df",
    "datasetId": "5b020a27e7040801dedbf46e",
    "imsOrg": "{ORG_ID}",
    "status": "pending",
    "expiry": "2032-12-31T23:59:59Z",
    "updatedAt": "2022-05-09T22:38:40.393115Z",
    "updatedBy": "{USER_ID}"
}
```

| Property | Description |
| --- | --- |
| `ttlId` | The ID of the dataset TTL. |
| `datasetId` | The ID of the dataset that this TTL applies to. |
| `imsOrg` | Your organization's ID. |
| `status` | The current status of the TTL. |
| `expiry` | The scheduled date and time when the dataset will be deleted. |
| `updatedAt` | A timestamp of when the TTL was last updated. |
| `updatedBy` | The user who last updated the TTL. |

{style="table-layout:auto"}

## Update a TTL {#update}

You can update a TTL for a dataset through a PUT request.

**API format**

```http
PUT /ttl/{TTL_ID}
```

| Parameter | Description |
| --- | --- |
| `{TTL_ID}` | The ID of the TTL that you want to modify. |

{style="table-layout:auto"}

**Request**

The following request updates the TTL for dataset `5b020a27e7040801dedbf46e` so it expires at the end of 2023 (Greenwich Mean Time).

```shell
curl -X PUT \
  https://platform.adobe.io/data/core/hygiene/ttl/5b020a27e7040801dedbf46e \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json' \
  -d '{
        "expiry": "2023-12-31T23:59:59Z"
      }'
```

| Property | Description |
| --- | --- |
| `expiry` | An ISO 8601 timestamp for when the dataset will be deleted. |

{style="table-layout:auto"}

**Response**

A successful response returns the details of the updated TTL.

```json
{
    "ttlId": "SD5cfd7a11b25543a9bcd9ef647db3d8df",
    "datasetId": "62759f2ede9e601b63a2ee14",
    "imsOrg": "{ORG_ID}",
    "status": "pending",
    "expiry": "2023-12-31T23:59:59Z",
    "updatedAt": "2022-05-11T15:12:40.393115Z",
    "updatedBy": "{USER_ID}"
}
```

| Property | Description |
| --- | --- |
| `ttlId` | The ID of the dataset TTL. |
| `datasetId` | The ID of the dataset that this TTL applies to. |
| `imsOrg` | Your organization's ID. |
| `status` | The current status of the TTL. |
| `expiry` | The scheduled date and time when the dataset will be deleted. |
| `updatedAt` | A timestamp of when the TTL was last updated. |
| `updatedBy` | The user who last updated the TTL. |

{style="table-layout:auto"}

## Cancel a TTL {#delete}

You can cancel a TTL by making a DELETE request.

**API format**

```http
DELETE /ttl/{TTL_ID}
```

| Parameter | Description |
| --- | --- |
| `{TTL_ID}` | The ID of the TTL that you want to cancel. |

{style="table-layout:auto"}

**Request**

The following request updates the TTL for dataset `5b020a27e7040801dedbf46e` so it expires at the end of 2023 (Greenwich Mean Time).

```shell
curl -X DELETE \
  https://platform.adobe.io/data/core/hygiene/ttl/5b020a27e7040801dedbf46e \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns the details of the TTL, with its `status` attribute now set to `cancelled`.

```json
{
    "ttlId": "SD5cfd7a11b25543a9bcd9ef647db3d8df",
    "datasetId": "62759f2ede9e601b63a2ee14",
    "imsOrg": "{ORG_ID}",
    "status": "cancelled",
    "expiry": "2023-12-31T23:59:59Z",
    "updatedAt": "2022-05-09T23:47:30.071186Z",
    "updatedBy": "{USER_ID}"
}
```

| Property | Description |
| --- | --- |
| `ttlId` | The ID of the dataset TTL. |
| `datasetId` | The ID of the dataset that this TTL applies to. |
| `imsOrg` | Your organization's ID. |
| `status` | The current status of the TTL. |
| `expiry` | The scheduled date and time when the dataset will be deleted. |
| `updatedAt` | A timestamp of when the TTL was last updated. |
| `updatedBy` | The user who last updated the TTL. |

{style="table-layout:auto"}

## Retrieve the history of a TTL

You can look up the history of a specific TTL by using the query parameter `include=history` in a lookup request. The result includes information about about the creation of the TTL, any updates that have been applied, and its cancellation or execution (if applicable).

**API format**

```http
GET /ttl/{TTL_ID}?include=history
```

| Parameter | Description |
| --- | --- |
| `{TTL_ID}` | The ID of the TTL whose history you want to look up. |

{style="table-layout:auto"}

**Request**

```shell
curl -X GET \
  https://platform.adobe.io/data/core/hygiene/ttl/5b020a27e7040801dedbf46e?include=history \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns the details of the TTL, with a `history` array providing the details its `status`, `expiry`, `updatedAt`, and `updatedBy` attributes for each of its recorded updates.

```json
{
  "ttlId": "SD5cfd7a11b25543a9bcd9ef647db3d8df",
  "datasetId": "62759f2ede9e601b63a2ee14",
  "imsOrg": "{ORG_ID}",
  "status": "cancelled",
  "expiry": "2022-05-09T23:47:30.071186Z",
  "updatedAt": "2022-05-09T23:47:30.071186Z",
  "updatedBy": "{USER_ID}",
  "history": [
    {
      "status": "created",
      "expiry": "2032-12-31T23:59:59Z",
      "updatedAt": "2022-05-09T22:38:40.393115Z",
      "updatedBy": "{USER_ID}"
    },
    {
      "status": "updated",
      "expiry": "2032-12-31T23:59:59Z",
      "updatedAt": "2022-05-09T22:41:46.731002Z",
      "updatedBy": "{USER_ID}"
    },
    {
      "status": "cancelled",
      "expiry": "2022-05-09T23:47:30.071186Z",
      "updatedAt": "2022-05-09T23:47:30.071186Z",
      "updatedBy": "{USER_ID}"
    }
  ]
}
```

| Property | Description |
| --- | --- |
| `ttlId` | The ID of the dataset TTL. |
| `datasetId` | The ID of the dataset that this TTL applies to. |
| `imsOrg` | Your organization's ID. |
| `history` | Lists the history of updates for the TTL as an array of objects, with each object containing the `status`, `expiry`, `updatedAt`, and `updatedBy` attributes for the TTL at the time of the update. |

{style="table-layout:auto"}

## Appendix

### Accepted query parameters {#query-params}

The following table outlines the available query parameters when [listing dataset TTLs](#list):

| Parameter | Description | Example |
| --- | --- | --- |
| `size` | An integer between 1 and 100 that indicates the maximum number of TTLs to return. Defaults to 25. | `size=50` |
| `page` | An integer that indicates which page of TTLs to return. | `page=3` |
| `status` | A comma-separated list of statuses. When included, the response matches TTLs whose current status is among those listed. | `status=pending,cancelled` |
| `author` | Matches TTLs whose `created_by` is a match for the search string. If the search string begins with `LIKE` or `NOT LIKE`, the remainder is treated as an SQL search pattern. Otherwise, the entire search string is treated as a literal string that must exactly match the entire content of a `created_by` field. | `author=LIKE %john%` |
| `createdDate` | Matches TTLs that were created in the 24-hour window starting at the stated time.<br><br>Note that dates without a time (like `2021-12-07`) represent the datetime at the beginning of that day. Thus, `createdDate=2021-12-07` refers to any TTL created on 7 December 2021, from `00:00:00` through `23:59:59.999999999` (UTC). | `createdDate=2021-12-07` |
| `createdFromDate` | Matches TTLs that were created at, or after, the indicated time. | `createdFromDate=2021-12-07T00:00:00Z` |
| `createdToDate` | Matches TTLs that were created at, or before, the indicated time. | `createdToDate=2021-12-07T23:59:59.999999999Z` |
| `updatedDate` / `updatedToDate` / `updatedFromDate` | Like `createdDate` / `createdFromDate` / `createdToDate`, but matches against a TTL's update time instead of creation time.<br><br>A TTL is considered updated on every edit, including when it is created, cancelled, or executed. | `updatedDate=2022-01-01` |
| `cancelledDate` / `cancelledToDate` / `cancelledFromDate` | Matches TTLs that were cancelled at any time in the indicated interval. This applies even if the TTL was later reopened (by setting a new expiry for the same dataset). | `updatedDate=2022-01-01` |
| `completedDate` / `completedToDate` / `completedFromDate` | Matches TTLs that were completed during the specified interval. | `completedToDate=2021-11-11-06:00` |
| `expiryDate` / `expiryToDate` / `expiryFromDate` | Matches TTLs that are due to be executed, or have already been executed, during the specified interval. | `expiryFromDate=2099-01-01&expiryToDate=2100-01-01` |

{style="table-layout:auto"}
