---
keywords: Experience Platform;home;popular topics;query service;api guide;queries;query;Query service;
solution: Experience Platform
title: Queries API Endpoint
description: The following sections walk through calls you can make using the /queries endpoint in the Query Service API.
exl-id: d6273e82-ce9d-4132-8f2b-f376c6712882
---
# Queries endpoint

## Sample API Calls

The following sections walk through calls you can make using the `/queries` endpoint in the [!DNL Query Service] API. Each call includes the general API format, a sample request showing required headers, and a sample response.

### Retrieve a list of queries

You can retrieve a list of all queries for your IMS Organization by making a GET request to the `/queries` endpoint. 

**API format**

```http
GET /queries
GET /queries?{QUERY_PARAMETERS}
```

- `{QUERY_PARAMETERS}`: (*Optional*) Parameters added to the request path which configure the results returned in the response. Multiple parameters can be included, separated by ampersands (`&`). The available parameters are listed below.

**Query parameters**

The following is a list of available query parameters for listing queries. All of these parameters are optional. Making a call to this endpoint with no parameters will retrieve all queries available for your organization.

| Parameter | Description |
| --------- | ----------- |
| `orderby` | Specifies the field by which to order results. The supported fields are `created` and `updated`. For example, `orderby=created` will sort results by created in ascending order. Adding a `-` before created (`orderby=-created`) will sort items by created in descending order. |
| `limit` | Specifies the page size limit to control the number of results that are included in a page. (*Default value: 20*) |
| `start` | Offsets the response list, using zero-based numbering. For example, `start=2` will return a list starting from the third listed query. (*Default value: 0*) |
| `property` | Filter results based on fields. The filters **must** be HTML escaped. Commas are used to combine multiple sets of filters. The supported fields are `created`, `updated`, `state`, and `id`. The list of supported operators are `>` (greater than), `<` (less than), `>=` (greater than or equal to), `<=` (less than or equal to), `==` (equal to), `!=` (not equal to), and `~` (contains). For example, `id==6ebd9c2d-494d-425a-aa91-24033f3abeec` will return all queries with the specified ID. |
| `excludeSoftDeleted` | Indicates whether a query which has been soft deleted should be included. For example, `excludeSoftDeleted=false` will **include** soft deleted queries. (*Boolean, default value: true*) |
| `excludeHidden` | Indicates whether non-user driven queries should be displayed. Having this value set to false will **include** non-user driven queries, such as CURSOR definitions, FETCH, or metadata queries. (*Boolean, default value: true*) |

**Request**

The following request retrieves the latest query created for your IMS organization.

```shell
curl -X GET https://platform.adobe.io/data/foundation/query/queries?limit=1 \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns HTTP status 200 with a list of queries for the specified IMS Organization as JSON. The following response returns the latest query created for your IMS organization.

```json
{
    "queries": [
        {
            "isInsertInto": false,
            "request": {
                "dbName": "prod:all",
                "sql": "SELECT *\nFROM\n  accounts\nLIMIT 10\n"
            },
            "state": "SUCCESS",
            "rowCount": 0,
            "errors": [],
            "isCTAS": false,
            "version": 1,
            "id": "9957bd7f-2244-4fd5-91bc-077d7df1d8e5",
            "elapsedTime": 28,
            "updated": "2019-12-06T22:00:17.390Z",
            "client": "Adobe Query Service UI",
            "userId": "{USER_ID}",
            "created": "2019-12-06T22:00:17.362Z",
            "_links": {
                "self": {
                    "href": "https://platform.adobe.io/data/foundation/query/queries/9957bd7f-2244-4fd5-91bc-077d7df1d8e5",
                    "method": "GET"
                },
                "soft_delete": {
                    "href": "https://platform.adobe.io/data/foundation/query/queries/9957bd7f-2244-4fd5-91bc-077d7df1d8e5",
                    "method": "PATCH",
                    "body": "{ \"op\": \"soft_delete\"}"
                },
                "referenced_datasets": [
                    {
                        "id": "5b2bdd32230d4401de87397c",
                        "href": "https://platform.adobe.io/data/foundation/catalog/dataSets/5b2bdd32230d4401de87397c"
                    }
                ]
            }
        }
    ],
    "_page": {
        "orderby": "-created",
        "start": "2019-12-06T22:00:17.362Z",
        "next": "2019-08-01T00:14:21.748Z",
        "count": 1
    },
    "_links": {
        "next": {
            "href": "https://platform.adobe.io/data/foundation/query/queries?orderby=-created&start=2019-08-01T00:14:21.748Z"
        },
        "prev": {
            "href": "https://platform.adobe.io/data/foundation/query/queries?orderby=-created&start=2019-12-06T22:00:17.362Z&isPrevLink=true"
        }
    },
    "version": 1
}
```

### Create a query

You can create a new query by making a POST request to the `/queries` endpoint.

**API format**

```http
POST /queries
```

**Request**

The following request creates a new query, configured by the values provided in the payload:

```shell
curl -X POST https://platform.adobe.io/data/foundation/query/queries \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'Content-Type: application/json' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}' \
 -d '{
        "dbName": "prod:all",
        "sql": "SELECT * FROM accounts;",
        "name": "Sample Query",
        "description": "Sample Description"
    }  
```

| Property | Description |
| -------- | ----------- |
| `dbName` | The name of the database you are creating a SQL query for. |
| `sql` | The SQL query you want to create. |
| `name` | The name of your SQL query. |
| `description` | The description of your SQL query. |

**Response**

A successful response returns HTTP status 202 (Accepted) with details of your newly created query. Once the query is finished activating and has successfully run, the `state` will change from `SUBMITTED` to `SUCCESS`.

```json
{
    "isInsertInto": false,
    "request": {
        "dbName": "prod:all",
        "sql": "SELECT * FROM accounts;",
        "name": "Sample Query",
        "description": "Sample Description"
    },
    "state": "SUBMITTED",
    "rowCount": 0,
    "errors": [],
    "isCTAS": false,
    "version": 1,
    "id": "4d64cd49-cf8f-463a-a182-54bccb9954fc",
    "elapsedTime": 0,
    "updated": "2020-01-08T21:47:46.865Z",
    "client": "API",
    "userId": "{USER_ID}",
    "created": "2020-01-08T21:47:46.865Z",
    "_links": {
        "self": {
            "href": "https://platform.adobe.io/data/foundation/query/queries/4d64cd49-cf8f-463a-a182-54bccb9954fc",
            "method": "GET"
        },
        "soft_delete": {
            "href": "https://platform.adobe.io/data/foundation/query/queries/4d64cd49-cf8f-463a-a182-54bccb9954fc",
            "method": "PATCH",
            "body": "{ \"op\": \"soft_delete\"}"
        },
        "cancel": {
            "href": "https://platform.adobe.io/data/foundation/query/queries/4d64cd49-cf8f-463a-a182-54bccb9954fc",
            "method": "PATCH",
            "body": "{ \"op\": \"cancel\"}"
        }
    }
}
```

>[!NOTE]
>
>You can use the value of `_links.cancel` to [cancel your created query](#cancel-a-query).

### Retrieve a query by ID

You can retrieve detailed information about a specific query by making a GET request to the `/queries` endpoint and providing the query's `id` value in the request path.

**API format**

```http
GET /queries/{QUERY_ID}
```

| Property | Description |
| -------- | ----------- |
| `{QUERY_ID}` | The `id` value of the query you want to retrieve. |

**Request**

```shell
curl -X GET https://platform.adobe.io/data/foundation/query/queries/4d64cd49-cf8f-463a-a182-54bccb9954fc \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns HTTP status 200 with detailed information about the specified query.

```json
{
    "isInsertInto": false,
    "request": {
        "dbName": "prod:all",
        "sql": "SELECT * FROM accounts;",
        "name": "Sample Query",
        "description": "Sample Description"
    },
    "state": "SUBMITTED",
    "rowCount": 0,
    "errors": [],
    "isCTAS": false,
    "version": 1,
    "id": "4d64cd49-cf8f-463a-a182-54bccb9954fc",
    "elapsedTime": 0,
    "updated": "2020-01-08T21:47:46.865Z",
    "client": "API",
    "userId": "{USER_ID}",
    "created": "2020-01-08T21:47:46.865Z",
    "_links": {
        "self": {
            "href": "https://platform.adobe.io/data/foundation/query/queries/4d64cd49-cf8f-463a-a182-54bccb9954fc",
            "method": "GET"
        },
        "soft_delete": {
            "href": "https://platform.adobe.io/data/foundation/query/queries/4d64cd49-cf8f-463a-a182-54bccb9954fc",
            "method": "PATCH",
            "body": "{ \"op\": \"soft_delete\"}"
        },
        "cancel": {
            "href": "https://platform.adobe.io/data/foundation/query/queries/4d64cd49-cf8f-463a-a182-54bccb9954fc",
            "method": "PATCH",
            "body": "{ \"op\": \"cancel\"}"
        }
    }
}
```

>[!NOTE]
>
>You can use the value of `_links.cancel` to [cancel your created query](#cancel-a-query).

### Cancel a query

You can request to delete a specified query by making a PATCH request to the `/queries` endpoint and providing the query's `id` value in the request path.

**API format**

```http
PATCH /queries/{QUERY_ID}
```

| Property | Description |
| -------- | ----------- |
| `{QUERY_ID}` | The `id` value of the query you want to cancel. |


**Request**

This API request uses the JSON Patch syntax for its payload. For more information on how JSON Patch works, please read the API fundamentals document. 

```shell
curl -X PATCH https://platform.adobe.io/data/foundation/query/queries/4d64cd49-cf8f-463a-a182-54bccb9954fc \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'Content-Type: application/json',
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
 -d '{
   "op": "cancel"  
 }'
```

| Property | Description |
| -------- | ----------- |
| `op` | In order to cancel the query, you must set the op parameter with the value `cancel `. |

**Response**

A successful response returns HTTP status 202 (Accepted) with the following message:

```json
{
    "message": "Query cancel request received",
    "statusCode": 202
}
```
