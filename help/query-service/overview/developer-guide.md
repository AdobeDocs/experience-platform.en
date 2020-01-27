# Query Service developer guide

This developer guide provides steps for performing various operations in the Adobe Experience Platform Query Service API. The guide includes sample API calls for performing the following actions:

- Queries
    - [Retrieve a list of queries](#retrieve-a-list-of-queries)
    - [Create a query](#create-a-query) 
    - [Retrieve a query by ID](#retrieve-a-query-by-id)
    - [Cancel a query](#create-a-query)
- Connection parameters
    - [Request connection parameters for the interactive service](#request-connection-parameters-for-the-interactive-service)
- Scheduled queries
    - [Retrieve a list of scheduled queries](#retrieve-a-list-of-scheduled-queries)
    - [Create a new scheduled query](#create-a-new-scheduled-query)
    - [Request details of a specified scheduled query](#request-details-of-a-specified-scheduled-query)
    - [Update details of a specified scheduled query](#update-a-specified-query-template)
- Runs for scheduled queries
    - [Retrieve a list of all runs for a specified scheduled query](#retrieve-a-list-of-all-runs-for-a-specified-scheduled-query)
    - [Immediately trigger a run for a specific scheduled query](#immediately-trigger-a-run-for-a-specific-scheduled-query)
    - [Retrieve details of a run for a specific scheduled query](#retrieve-details-of-a-run-for-a-specific-scheduled-query)
    - [Immediately stop a run for a specific scheduled query](#immediately-stop-a-run-for-a-specific-scheduled-query)
- Query templates
    - [Retrieve a list of query templates](#retrieve-a-list-of-query-templates)
    - [Create a query template](#create-a-query-template)
    - [Retrieve a specified query template](#retrieve-a-specified-query-template)
    - [Update a specified query template](#update-a-specified-query-template)
    - [Delete a specified query template](#delete-a-specified-query-template)

## Getting started

This guide requires a working understanding of the various Adobe Experience Platform services involved with using Query Service.

- [Query Service](./overview.md): Provides the ability to query datasets and capture the resulting queries as new datasets in Experience Platform.
- [Experience Data Model (XDM) System](../../schema_registry/xdm_system/xdm_system_in_experience_platform.md): The standardized framework by which Experience Platform organizes customer experience data.
- [Sandboxes](../../sandboxes/sandboxes-overview.md): Experience Platform provides virtual sandboxes which partition a single Platform instance into separate virtual environments to help develop and evolve digital experience applications.

The following sections provide additional information that you will need to know in order to successfully use Query Service using the API.

### Reading sample API calls

This guide provides example API calls to demonstrate how to format your requests. These include paths, required headers, and properly formatted request payloads. Sample JSON returned in API responses is also provided. For information on the conventions used in this documentation for sample API calls, see the section on [how to read example API calls](../../platform_faq_and_troubleshooting/platform_faq_and_troubleshooting.md) in the Experience Platform troubleshooting guide.

### Gather values for required headers

In order to make calls to Experience Platform APIs, you must first complete the [authentication tutorial](../../../tutorials/authenticate_to_acp_tutorial/authenticate_to_acp_tutorial.md). Completing the authentication tutorial provides the values for each of the required headers in all Platform API calls, as shown below:

- Authorization: `Bearer {ACCESS_TOKEN}`
- x-api-key: `{API_KEY}`
- x-gw-ims-org-id: `{IMS_ORG}`

All resources in Experience Platform are isolated to specific virtual sandboxes. All requests to Platform APIs require a header that specifies the name of the sandbox in which the operation will take place:

- x-sandbox-name: `{SANDBOX_NAME}`
  
>**Note:** For more information on working with sandboxes in Experience Platform, see the [sandboxes overview documentation](../../sandboxes/sandboxes-overview.md).

## Sample API calls

Now that you understand what headers to use, you are ready to begin making calls to the Query Service API. The following sections walk through the various API calls you can make using the Query Service API. Each call includes the general API format, a sample request showing required headers, and a sample response.

## Retrieve a list of queries

You can retrieve a list of all queries for your IMS Organization by making a GET request to the `/queries` endpoint. 

#### API format

```http
GET /queries
GET /queries?{QUERY_PARAMETERS}
```

- `{QUERY_PARAMETERS}`: (*Optional*) Parameters added to the request path which configure the results returned in the response. Multiple parameters can be included, separated by ampersands (`&`). The available parameters are listed below.

**Query parameters**

The following is a list of available query parameters for listing queries. All of these parameters are optional. Making a call to this endpoint with no parameters will retrieve all queries available for your organization.

Parameter | Description
--------- | -----------
`orderby` | Specifies the field by which to order results. The supported fields are `created` and `updated`. For example, `orderby=created` will sort results by created in ascending order. Adding a `-` before created (`orderby=-created`) will sort items by created in descending order. 
`limit` | Specifies the page size limit to control the number of results that are included in a page. (*Default value: 20*)
`start` | Offsets the response list, using zero-based numbering. For example, `start=2` will return a list starting from the third listed query. (*Default value: 0*)
`property` | Filter results based on fields. The filters **must** be HTML escaped. Commas are used to combine multiple sets of filters. The supported fields are `created`, `updated`, `state`, and `id`. The list of supported operators are `>` (greater than), `<` (less than), `>=` (greater than or equal to), `<=` (less than or equal to), `==` (equal to), `!=` (not equal to), and `~` (contains). For example, `id==6ebd9c2d-494d-425a-aa91-24033f3abeec` will return all queries with the specified ID.
`excludeSoftDeleted` | Indicates whether a query which has been soft deleted should be included. For example, `excludeSoftDeleted=false` will **include** soft deleted queries. (*Boolean, default value: true*)
`excludeHidden` | Indicates whether non-user driven queries should be displayed. Having this value set to false will **include** non-user driven queries, such as CURSOR definitions, FETCH, or metadata queries. (*Boolean, default value: true*)

#### Request

The following request retrieves the latest query created for your IMS organization.

```shell
curl -X GET https://platform.adobe.io/data/foundation/query/queries?limit=1 \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'x-gw-ims-org-id: {IMS_ORG}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
```

#### Response

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

## Create a query

You can create a new query by making a POST request to the `/queries` endpoint.

#### API format

```http
POST /queries
```

#### Request

The following request creates a new query, configured by the values provided in the payload:

```shell
curl -X POST https://platform.adobe.io/data/foundation/query/queries \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'Content-Type: application/json' \
 -H 'x-gw-ims-org-id: {IMS_ORG}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}' \
 -d '{
        "dbName": "prod:all",
        "sql": "SELECT * FROM accounts;",
        "name": "Sample Query"
        "description": "Sample Description"
    }  
```

- `dbName`: The name of the database you are creating a SQL query for.
- `sql`: The SQL query you want to create.
- `name`: The name of your SQL query.
- `description`: The description of your SQL query.

#### Response

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

>**Note:** You can use the value of `_links.cancel` to [cancel your created query](#cancel-a-query).

## Retrieve a query by ID

You can retrieve detailed information about a specific query by making a GET request to the `/queries` endpoint and providing the query's `id` value in the request path.

#### API format

```http
GET /queries/{QUERY_ID}
```

- `{QUERY_ID}`: The `id` value of the query you want to retrieve.

#### Request

```shell
curl -X GET https://platform.adobe.io/data/foundation/query/queries/4d64cd49-cf8f-463a-a182-54bccb9954fc \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'x-gw-ims-org-id: {IMS_ORG}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
```

#### Response

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

>**Note:** You can use the value of `_links.cancel` to [cancel your created query](#cancel-a-query).

## Cancel a query

You can request to delete a specified query by making a PATCH request to the `/queries` endpoint and providing the query's `id` value in the request path.

#### API format

```http
PATCH /queries/{QUERY_ID}
```

- `{QUERY_ID}`: The `id` value of the query you want to cancel.


#### Request

This API request uses the JSON Patch syntax for its payload. For more information on how JSON Patch works, please read the [API fundamentals document](../../api-fundamentals/api-fundamentals.md). 

```shell
curl -X PATCH https://platform.adobe.io/data/foundation/query/queries/4d64cd49-cf8f-463a-a182-54bccb9954fc \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'Content-Type: application/json',
 -H 'x-gw-ims-org-id: {IMS_ORG}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
 -d '{
   "op": "cancel"  
 }'
 ```

 - `op`: In order to cancel the query, you must set the op parameter with the value `cancel `.

#### Response

A successful response returns HTTP status 202 (Accepted) with the following message:

```json
{
    "message": "Query cancel request received",
    "statusCode": 202
}
```

## Request connection parameters for the interactive service

You can retrieve your connection parameters for using the [interactive service](../queries-and-ui/writing-queries.md) by making a GET request to the `/connection_parameters` endpoint. For more information about clients that use connection parameters to connect via the interactive service, please read the documentation on [Query Service clients](../clients/overview.md).

#### API format

```http
GET /connection_parameters
```

#### Request

```shell
curl -X GET https://platform.adobe.io/data/foundation/query/connection_parameters
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'x-gw-ims-org-id: {IMS_ORG}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
```

#### Response

A successful response returns HTTP status 200 with your connection parameters.

```json
{
    "username": "{USERNAME}",
    "dbName": "prod:all",
    "host": "{HOSTNAME}",
    "version": 1,
    "port": 80,
    "token": "{TOKEN}",
    "compressedToken": "{COMPRESSED_TOKEN}",
    "websocketHost": "{WEBSOCKET_HOSTNAME}"
}
```

## Retrieve a list of scheduled queries

You can retrieve a list of all scheduled queries for your IMS Organization by making a GET request to the `/schedules` endpoint. 

#### API format

```http
GET /schedules
GET /schedules?{QUERY_PARAMETERS}
```

- `{QUERY_PARAMETERS}`: (*Optional*) Parameters added to the request path which configure the results returned in the response. Multiple parameters can be included, separated by ampersands (`&`). The available parameters are listed below.

**Query parameters**

The following is a list of available query parameters for listing scheduled queries. All of these parameters are optional. Making a call to this endpoint with no parameters will retrieve all scheduled queries available for your organization.

Parameter | Description
--------- | -----------
`orderby` | Specifies the field by which to order results. The supported fields are `created` and `updated`. For example, `orderby=created` will sort results by created in ascending order. Adding a `-` before created (`orderby=-created`) will sort items by created in descending order. 
`limit` | Specifies the page size limit to control the number of results that are included in a page. (*Default value: 20*)
`start` | Offsets the response list, using zero-based numbering. For example, `start=2` will return a list starting from the third listed query. (*Default value: 0*)
`property` | Filter results based on fields. The filters **must** be HTML escaped. Commas are used to combine multiple sets of filters. The supported fields are `created`, `templateId`, and `userId`. The list of supported operators are `>` (greater than), `<` (less than), and `==` (equal to). For example, `userId==6ebd9c2d-494d-425a-aa91-24033f3abeec` will return all scheduled queries where the user ID is as specified.

#### Request

The following request retrieves the latest scheduled query created for your IMS organization.

```shell
curl -X GET https://platform.adobe.io/data/foundation/query/schedules?limit=1
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'x-gw-ims-org-id: {IMS_ORG}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
```

#### Response

A successful response returns HTTP status 200 with a list of scheduled queries for the specified IMS Organization. The following response returns the latest scheduled query created for your IMS organization.

```json
{
    "schedules": [
        {
            "state": "ENABLED",
            "query": {
                "dbName": "prod:all",
                "sql": "SELECT * FROM accounts;",
                "name": "Sample Scheduled Query",
                "description": "A sample of a scheduled query."
            },
            "updatedUserId": "{USER_ID}",
            "version": 2,
            "id": "e95186d65a28abf00a495d82_28e74200-e3de-11e9-8f5d-7f27416c5f0d_sample_scheduled_query7omob151bm_birvwm",
            "updated": "1578523458919",
            "schedule": {
                "schedule": "30 * * * *",
                "startDate": "2020-01-08T12:30:00.000Z",
                "maxActiveRuns": 1
            },
            "userId": "{USER_ID}",
            "created": "1578523458919",
            "_links": {
                "enable": {
                    "href": "https://platform.adobe.io/data/foundation/query/schedules/e95186d65a28abf00a495d82_28e74200-e3de-11e9-8f5d-7f27416c5f0d_sample_scheduled_query7omob151bm_birvwm",
                    "method": "PATCH",
                    "body": "{ \"op\": \"enable\" }"
                },
                "runs": {
                    "href": "https://platform.adobe.io/data/foundation/query/schedules/e95186d65a28abf00a495d82_28e74200-e3de-11e9-8f5d-7f27416c5f0d_sample_scheduled_query7omob151bm_birvwm/runs",
                    "method": "GET"
                },
                "self": {
                    "href": "https://platform.adobe.io/data/foundation/query/schedules/e95186d65a28abf00a495d82_28e74200-e3de-11e9-8f5d-7f27416c5f0d_sample_scheduled_query7omob151bm_birvwm",
                    "method": "GET"
                },
                "delete": {
                    "href": "https://platform.adobe.io/data/foundation/query/schedules/e95186d65a28abf00a495d82_28e74200-e3de-11e9-8f5d-7f27416c5f0d_sample_scheduled_query7omob151bm_birvwm",
                    "method": "DELETE"
                },
                "disable": {
                    "href": "https://platform.adobe.io/data/foundation/query/schedules/e95186d65a28abf00a495d82_28e74200-e3de-11e9-8f5d-7f27416c5f0d_sample_scheduled_query7omob151bm_birvwm",
                    "method": "PATCH",
                    "body": "{ \"op\": \"disable\" }"
                },
                "trigger": {
                    "href": "https://platform.adobe.io/data/foundation/query/schedules/e95186d65a28abf00a495d82_28e74200-e3de-11e9-8f5d-7f27416c5f0d_sample_scheduled_query7omob151bm_birvwm/runs",
                    "method": "POST"
                }
            }
        }
    ],
    "_page": {
        "orderby": "+created",
        "start": "2020-01-08T22:44:18.919Z",
        "count": 1
    },
    "_links": {},
    "version": 2
}
```

## Create a new scheduled query

You can create a new scheduled query by making a POST request to the `/schedules` endpoint.

#### API format

```http
POST /schedules
```

#### Request

```shell
curl -X POST https://platform.adobe.io/data/foundation/query/schedules
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'x-gw-ims-org-id: {IMS_ORG}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
 -d '
 {
     "query": {
         "dbName": "prod:all",
         "sql": "SELECT * FROM accounts;",
         "name": "Sample Scheduled Query",
         "description": "A sample of a scheduled query."
     }, 
     "schedule": {
         "schedule": "30 * * * *",
         "startDate": "2020-01-08T12:30:00.000Z"
     }
 }
 '
```

- `query/dbName`: The name of the database you are creating a scheduled query for.
- `query/sql`: The SQL query you want to create.
- `query/name`: The name of the scheduled query.
- `schedule/schedule`: The cron schedule for the query. For more information about cron schedules, please read the [cron expression format](http://www.quartz-scheduler.org/documentation/quartz-2.3.0/tutorials/crontrigger.html) documentation. In this example, "30 * * * *" means that the query will run every hour at the 30 minute mark.
- `schedule/startDate`: The start date for your scheduled query, written as a UTC timestamp.

#### Response

A successful response returns HTTP status 202 (Accepted) with details of your newly created scheduled query. Once the scheduled query is finished activating, the `state` will change from `REGISTERING` to `ENABLED`.

```json
{
    "state": "REGISTERING",
    "query": {
        "dbName": "prod:all",
        "sql": "SELECT * FROM accounts;",
        "name": "Sample Scheduled Query",
        "description": "A sample of a scheduled query."
    },
    "updatedUserId": "{USER_ID}",
    "version": 2,
    "id": "e95186d65a28abf00a495d82_28e74200-e3de-11e9-8f5d-7f27416c5f0d_sample_scheduled_query7omob151bm_birvwm",
    "schedule": {
        "schedule": "30 * * * *",
        "startDate": "2020-01-08T12:30:00.000Z",
        "maxActiveRuns": 1
    },
    "userId": "{USER_ID}",
    "_links": {
        "enable": {
            "href": "https://platform.adobe.io/data/foundation/query/schedules/e95186d65a28abf00a495d82_28e74200-e3de-11e9-8f5d-7f27416c5f0d_sample_scheduled_query7omob151bm_birvwm",
            "method": "PATCH",
            "body": "{ \"op\": \"enable\" }"
        },
        "runs": {
            "href": "https://platform.adobe.io/data/foundation/query/schedules/e95186d65a28abf00a495d82_28e74200-e3de-11e9-8f5d-7f27416c5f0d_sample_scheduled_query7omob151bm_birvwm/runs",
            "method": "GET"
        },
        "self": {
            "href": "https://platform.adobe.io/data/foundation/query/schedules/e95186d65a28abf00a495d82_28e74200-e3de-11e9-8f5d-7f27416c5f0d_sample_scheduled_query7omob151bm_birvwm",
            "method": "GET"
        },
        "delete": {
            "href": "https://platform.adobe.io/data/foundation/query/schedules/e95186d65a28abf00a495d82_28e74200-e3de-11e9-8f5d-7f27416c5f0d_sample_scheduled_query7omob151bm_birvwm",
            "method": "DELETE"
        },
        "disable": {
            "href": "https://platform.adobe.io/data/foundation/query/schedules/e95186d65a28abf00a495d82_28e74200-e3de-11e9-8f5d-7f27416c5f0d_sample_scheduled_query7omob151bm_birvwm",
            "method": "PATCH",
            "body": "{ \"op\": \"disable\" }"
        },
        "trigger": {
            "href": "https://platform.adobe.io/data/foundation/query/schedules/e95186d65a28abf00a495d82_28e74200-e3de-11e9-8f5d-7f27416c5f0d_sample_scheduled_query7omob151bm_birvwm/runs",
            "method": "POST"
        }
    }
}
```

>**Note:** You can use the value of `_links.delete` to [delete your created scheduled query](#delete-a-specified-scheduled-query).

## Request details of a specified scheduled query

You can retrieve information for a specific scheduled query by making a GET request to the `/schedules` endpoint and providing its ID in the request path.

#### API format

```http
GET /schedules/{SCHEDULE_ID}
```

- `{SCHEDULE_ID}`: The `id` value of the scheduled query you want to retrieve.

#### Request

```shell
curl -X GET https://platform.adobe.io/data/foundation/query/schedules/e95186d65a28abf00a495d82_28e74200-e3de-11e9-8f5d-7f27416c5f0d_sample_scheduled_query7omob151bm_birvwm
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'x-gw-ims-org-id: {IMS_ORG}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
```

#### Response

A successful response returns HTTP status 200 with details of the specified scheduled query.

```json
{
    "state": "ENABLED",
    "query": {
        "dbName": "prod:all",
        "sql": "SELECT * FROM accounts;",
        "name": "Sample Scheduled Query",
        "description": "A sample of a scheduled query."
    },
    "updatedUserId": "{USER_ID}",
    "version": 2,
    "id": "e95186d65a28abf00a495d82_28e74200-e3de-11e9-8f5d-7f27416c5f0d_sample_scheduled_query7omob151bm_birvwm",
    "updated": "1578523458919",
    "schedule": {
        "schedule": "30 * * * *",
        "startDate": "2020-01-08T12:30:00.000Z",
        "maxActiveRuns": 1
    },
    "userId": "{USER_ID}",
    "created": "1578523458919",
    "_links": {
        "enable": {
            "href": "https://platform.adobe.io/data/foundation/query/schedules/e95186d65a28abf00a495d82_28e74200-e3de-11e9-8f5d-7f27416c5f0d_sample_scheduled_query7omob151bm_birvwm",
            "method": "PATCH",
            "body": "{ \"op\": \"enable\" }"
        },
        "runs": {
            "href": "https://platform.adobe.io/data/foundation/query/schedules/e95186d65a28abf00a495d82_28e74200-e3de-11e9-8f5d-7f27416c5f0d_sample_scheduled_query7omob151bm_birvwm/runs",
            "method": "GET"
        },
        "self": {
            "href": "https://platform.adobe.io/data/foundation/query/schedules/e95186d65a28abf00a495d82_28e74200-e3de-11e9-8f5d-7f27416c5f0d_sample_scheduled_query7omob151bm_birvwm",
            "method": "GET"
        },
        "delete": {
            "href": "https://platform.adobe.io/data/foundation/query/schedules/e95186d65a28abf00a495d82_28e74200-e3de-11e9-8f5d-7f27416c5f0d_sample_scheduled_query7omob151bm_birvwm",
            "method": "DELETE"
        },
        "disable": {
            "href": "https://platform.adobe.io/data/foundation/query/schedules/e95186d65a28abf00a495d82_28e74200-e3de-11e9-8f5d-7f27416c5f0d_sample_scheduled_query7omob151bm_birvwm",
            "method": "PATCH",
            "body": "{ \"op\": \"disable\" }"
        },
        "trigger": {
            "href": "https://platform.adobe.io/data/foundation/query/schedules/e95186d65a28abf00a495d82_28e74200-e3de-11e9-8f5d-7f27416c5f0d_sample_scheduled_query7omob151bm_birvwm/runs",
            "method": "POST"
        }
    }
}
```

>**Note:** You can use the value of `_links.delete` to [delete your created scheduled query](#delete-a-specified-scheduled-query).

## Update details of a specified scheduled query

You can update the details for a specified scheduled query by making a PATCH request to the `/schedules` endpoint and by providing its ID in the request path. 

The PATCH request supports two different paths: `/state` and `/schedule/schedule`.

### Update scheduled query state

You can use `/state` to update the state of the selected scheduled query - ENABLED or DISABLED. To update the state, you will need to set the value as `enable` or `disable`.

#### API format

```http
PATCH /schedules/{SCHEDULE_ID}
```

- `{SCHEDULE_ID}`: The `id` value of the scheduled query you want to retrieve.


#### Request

This API request uses the JSON Patch syntax for its payload. For more information on how JSON Patch works, please read the [API fundamentals document](../../api-fundamentals/api-fundamentals.md). 

```shell
curl -X PATCH https://platform.adobe.io/data/foundation/query/schedules/e95186d65a28abf00a495d82_28e74200-e3de-11e9-8f5d-7f27416c5f0d_sample_scheduled_query7omob151bm_birvwm
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'x-gw-ims-org-id: {IMS_ORG}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
 -d '{
     "body": [
         {
             "op": "replace",
             "path": "/state",
             "value": "disable"
         }
     ]
 }'
```

- `path`: The path of the value you want to patch. In this case, since you are updating the scheduled query's state, you need to set the value of `path` to `/state`.
- `value`: The updated value of the `/state`. This value can either be set as `enable` or `disable` to enable or disable the scheduled query.

#### Response

A successful response returns HTTP status 202 (Accepted) with the following message.

```json
{
    "message": "Request to patch accepted",
    "statusCode": 202
}
```

### Update scheduled query schedule

You can use `/schedule/schedule` to update the cron schedule of the scheduled query. For more information about cron schedules, please read the [cron expression format](http://www.quartz-scheduler.org/documentation/quartz-2.3.0/tutorials/crontrigger.html) documentation.

#### API format

```http
PATCH /schedules/{SCHEDULE_ID}
```

- `{SCHEDULE_ID}`: The `id` value of the scheduled query you want to retrieve.

#### Request

This API request uses the JSON Patch syntax for its payload. For more information on how JSON Patch works, please read the [API fundamentals document](../../api-fundamentals/api-fundamentals.md). 

```shell
curl -X PATCH https://platform.adobe.io/data/foundation/query/schedules/e95186d65a28abf00a495d82_28e74200-e3de-11e9-8f5d-7f27416c5f0d_sample_scheduled_query7omob151bm_birvwm
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'x-gw-ims-org-id: {IMS_ORG}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
 -d '{
     "body": [
         {
             "op": "replace",
             "path": "/schedule/schedule",
             "value": "45 * * * *"
         }
     ]
 }'
```

- `path`: The path of the value you want to patch. In this case, since you are updating the scheduled query's schedule, you need to set the value of `path` to `/schedule/schedule`.
- `value`: The updated value of the `/schedule`. This value needs to be in the form of a cron schedule. So, in this example, the scheduled query will run every hour at the 45 minute mark.

#### Response

A successful response returns HTTP status 202 (Accepted) with the following message.

```json
{
    "message": "Request to patch accepted",
    "statusCode": 202
}
```

## Delete a specified scheduled query

You can delete a specified scheduled query by making a DELETE request to the `/schedules` endpoint and providing the ID of the scheduled query you want to delete in the request path.

>**Note:** The schedule **must** be disabled before being deleted.

#### API format

```http
DELETE /schedules/{SCHEDULE_ID}
```

- `{SCHEDULE_ID}`: The `id` value of the scheduled query you want to retrieve.

#### Request

```shell
curl -X DELETE https://platform.adobe.io/data/foundation/query/schedules/e95186d65a28abf00a495d82_28e74200-e3de-11e9-8f5d-7f27416c5f0d_sample_scheduled_query7omob151bm_birvwm
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'x-gw-ims-org-id: {IMS_ORG}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
```

#### Response

A successful response returns HTTP status 202 (Accepted) with the following message.

```json
{
    "message": "Schedule deleted successfully",
    "statusCode": 202
}
```

## Retrieve a list of all runs for a specified scheduled query

You can retrieve a list of all runs for a specific scheduled query, regardless of whether they are currently running or already completed. This is done by making a GET request to the `/schedules/{SCHEDULE_ID}/runs` endpoint, where `{SCHEDULE_ID}` is the `id` value of the scheduled query whose runs you wish to retrieve. 

#### API format

```http
GET /schedules/{SCHEDULE_ID}/runs
GET /schedules/{SCHEDULE_ID}/runs?{QUERY_PARAMETERS}
```

- `{SCHEDULE_ID}`: The `id` value of the scheduled query you want to retrieve.
- `{QUERY_PARAMETERS}`: (*Optional*) Parameters added to the request path which configure the results returned in the response. Multiple parameters can be included, separated by ampersands (`&`). The available parameters are listed below.

**Query parameters**

The following is a list of available query parameters for listing runs for a specified scheduled query. All of these parameters are optional. Making a call to this endpoint with no parameters will retrieve all runs available for the specified scheduled query.

Parameter | Description
--------- | -----------
`orderby` | Specifies the field by which to order results. The supported fields are `created` and `updated`. For example, `orderby=created` will sort results by created in ascending order. Adding a `-` before created (`orderby=-created`) will sort items by created in descending order. 
`limit` | Specifies the page size limit to control the number of results that are included in a page. (*Default value: 20*)
`start` | Offsets the response list, using zero-based numbering. For example, `start=2` will return a list starting from the third listed query. (*Default value: 0*)
`property` | Filter results based on fields. The filters **must** be HTML escaped. Commas are used to combine multiple sets of filters. The supported fields are `created`, `state`, and `externalTrigger`. The list of supported operators are `>` (greater than), `<` (less than), and  `==` (equal to), and `!=` (not equal to). For example, `externalTrigger==true,state==SUCCESS,created>2019-04-20T13:37:00Z` will return all runs that manually created, succeeded, and created after April 20th, 2019.

#### Request

The following request retrieves the last four runs for the specified scheduled query.

```shell
curl -X GET https://platform.adobe.io/data/foundation/query/schedules/e95186d65a28abf00a495d82_28e74200-e3de-11e9-8f5d-7f27416c5f0d_sample_scheduled_query7omob151bm_birvwm/runs?limit=4
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'x-gw-ims-org-id: {IMS_ORG}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
```

#### Response

A successful response returns HTTP status 200 with a list of runs for the specified scheduled query as JSON. The following response returns the last four runs for the specified scheduled query.

```json
{
    "runsSchedules": [
        {
            "state": "SUCCESS",
            "version": 1,
            "id": "c2NoZWR1bGVkX18yMDIwLTAxLTA4VDEyOjMwOjAwKzAwOjAw",
            "externalTrigger": "false",
            "created": "2020-01-08T12:30:00Z",
            "_links": {
                "self": {
                    "href": "https://platform.adobe.io/data/foundation/query/schedules/e95186d65a28abf00a495d82_28e74200-e3de-11e9-8f5d-7f27416c5f0d_sample_scheduled_query7omob151bm_birvwm/runs/c2NoZWR1bGVkX18yMDIwLTAxLTA4VDEyOjMwOjAwKzAwOjAw",
                    "method": "GET"
                },
                "cancel": {
                    "href": "https://platform.adobe.io/data/foundation/query/schedules/e95186d65a28abf00a495d82_28e74200-e3de-11e9-8f5d-7f27416c5f0d_sample_scheduled_query7omob151bm_birvwm/runs/c2NoZWR1bGVkX18yMDIwLTAxLTA4VDEyOjMwOjAwKzAwOjAw",
                    "method": "PATCH",
                    "body": "{ \"op\": \"cancel\" }"
                }
            }
        },
        {
            "state": "SUCCESS",
            "version": 1,
            "id": "c2NoZWR1bGVkX18yMDIwLTAxLTA4VDEzOjMwOjAwKzAwOjAw",
            "externalTrigger": "false",
            "created": "2020-01-08T13:30:00Z",
            "_links": {
                "self": {
                    "href": "https://platform.adobe.io/data/foundation/query/schedules/e95186d65a28abf00a495d82_28e74200-e3de-11e9-8f5d-7f27416c5f0d_sample_scheduled_query7omob151bm_birvwm/runs/c2NoZWR1bGVkX18yMDIwLTAxLTA4VDEzOjMwOjAwKzAwOjAw",
                    "method": "GET"
                },
                "cancel": {
                    "href": "https://platform.adobe.io/data/foundation/query/schedules/e95186d65a28abf00a495d82_28e74200-e3de-11e9-8f5d-7f27416c5f0d_sample_scheduled_query7omob151bm_birvwm/runs/c2NoZWR1bGVkX18yMDIwLTAxLTA4VDEzOjMwOjAwKzAwOjAw",
                    "method": "PATCH",
                    "body": "{ \"op\": \"cancel\" }"
                }
            }
        },
        {
            "state": "SUCCESS",
            "version": 1,
            "id": "c2NoZWR1bGVkX18yMDIwLTAxLTA4VDE0OjMwOjAwKzAwOjAw",
            "externalTrigger": "false",
            "created": "2020-01-08T14:30:00Z",
            "_links": {
                "self": {
                    "href": "https://platform.adobe.io/data/foundation/query/schedules/e95186d65a28abf00a495d82_28e74200-e3de-11e9-8f5d-7f27416c5f0d_sample_scheduled_query7omob151bm_birvwm/runs/c2NoZWR1bGVkX18yMDIwLTAxLTA4VDE0OjMwOjAwKzAwOjAw",
                    "method": "GET"
                },
                "cancel": {
                    "href": "https://platform.adobe.io/data/foundation/query/schedules/e95186d65a28abf00a495d82_28e74200-e3de-11e9-8f5d-7f27416c5f0d_sample_scheduled_query7omob151bm_birvwm/runs/c2NoZWR1bGVkX18yMDIwLTAxLTA4VDE0OjMwOjAwKzAwOjAw",
                    "method": "PATCH",
                    "body": "{ \"op\": \"cancel\" }"
                }
            }
        },
        {
            "state": "IN_PROGRESS",
            "version": 1,
            "id": "c2NoZWR1bGVkX18yMDIwLTAxLTA4VDE4OjQ1OjAwKzAwOjAw",
            "externalTrigger": "false",
            "created": "2020-01-08T15:30:00Z",
            "_links": {
                "self": {
                    "href": "https://platform.adobe.io/data/foundation/query/schedules/e95186d65a28abf00a495d82_28e74200-e3de-11e9-8f5d-7f27416c5f0d_sample_scheduled_query7omob151bm_birvwm/runs/c2NoZWR1bGVkX18yMDIwLTAxLTA4VDE4OjQ1OjAwKzAwOjAw",
                    "method": "GET"
                },
                "cancel": {
                    "href": "https://platform.adobe.io/data/foundation/query/schedules/e95186d65a28abf00a495d82_28e74200-e3de-11e9-8f5d-7f27416c5f0d_sample_scheduled_query7omob151bm_birvwm/runs/c2NoZWR1bGVkX18yMDIwLTAxLTA4VDE4OjQ1OjAwKzAwOjAw",
                    "method": "PATCH",
                    "body": "{ \"op\": \"cancel\" }"
                }
            }
        }
    ],
    "_page": {
        "orderby": "+created",
        "start": "2020-01-08T12:30:00Z",
        "count": 4
    },
    "_links": {},
    "version": 1
}
```

>**Note:** You can use the value of `_links.cancel` to [stop a run for a specified scheduled query](#immediately-stop-a-run-for-a-specific-scheduled-query).

## Immediately trigger a run for a specific scheduled query

You can immediately trigger a run for a specified scheduled query by making a POST request to the `/schedules/{SCHEDULE_ID}/runs` endpoint, where `{SCHEDULE_ID}` is the `id` value of the scheduled query whose run you wish to trigger.

#### API format

```http
POST /schedules/{SCHEDULE_ID}/runs
```

#### Request

```shell
curl -X POST https://platform.adobe.io/data/foundation/query/schedules/e95186d65a28abf00a495d82_28e74200-e3de-11e9-8f5d-7f27416c5f0d_sample_scheduled_query7omob151bm_birvwm/runs
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'x-gw-ims-org-id: {IMS_ORG}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
```

#### Response

A successful response returns HTTP status 202 (Accepted) with the following message.

```json
{
    "message": "Request to trigger run of a scheduled query accepted.",
    "statusCode": 202
}
```

## Retrieve details of a run for a specific scheduled query

You can retrieve details about a run for a specific scheduled query by making a GET request to the `/schedules/{SCHEDULE_ID}/runs/{RUN_ID}` endpoint and providing both the ID of the scheduled query and the run in the request path.

#### API format

```http
GET /schedules/{SCHEDULE_ID}/runs/{RUN_ID}
```

- `{SCHEDULE_ID}`: The `id` value of the scheduled query whose run you wish to retrieve details of.
- `{RUN_ID}`: The `id` value of the run you wish to retrieve.

#### Request

```shell
curl -X GET https://platform.adobe.io/data/foundation/query/schedules/e95186d65a28abf00a495d82_28e74200-e3de-11e9-8f5d-7f27416c5f0d_sample_scheduled_query7omob151bm_birvwm/runs/c2NoZWR1bGVkX18yMDIwLTAxLTA4VDIwOjQ1OjAwKzAwOjAw
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'x-gw-ims-org-id: {IMS_ORG}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
```

#### Response

A successful response returns HTTP status 200 with details of the specified run.

```json
{
    "state": "success",
    "taskStatusList": [
        {
            "duration": 303,
            "endDate": "2020-01-08T23:49:02.346318",
            "state": "SUCCESS",
            "message": "Processed Successfully",
            "startDate": "2020-01-08T23:43:58.936269",
            "taskId": "7Omob151BM"
        }
    ],
    "version": 1,
    "id": "c2NoZWR1bGVkX18yMDIwLTAxLTA4VDIwOjQ1OjAwKzAwOjAw",
    "scheduleId": "e95186d65a28abf00a495d82_28e74200-e3de-11e9-8f5d-7f27416c5f0d_sample_scheduled_query7omob151bm_birvwm",
    "externalTrigger": "false",
    "created": "2020-01-08T20:45:00",
    "_links": {
        "self": {
            "href": "https://platform.adobe.io/data/foundation/query/schedules/e95186d65a28abf00a495d82_28e74200-e3de-11e9-8f5d-7f27416c5f0d_sample_scheduled_query7omob151bm_birvwm/runs/c2NoZWR1bGVkX18yMDIwLTAxLTA4VDIwOjQ1OjAwKzAwOjAw",
            "method": "GET"
        },
        "cancel": {
            "href": "https://platform.adobe.io/data/foundation/query/schedules/e95186d65a28abf00a495d82_28e74200-e3de-11e9-8f5d-7f27416c5f0d_sample_scheduled_query7omob151bm_birvwm/runs/c2NoZWR1bGVkX18yMDIwLTAxLTA4VDIwOjQ1OjAwKzAwOjAw",
            "method": "PATCH",
            "body": "{ \"op\": \"cancel\" }"
        }
    }
}
```

## Immediately stop a run for a specific scheduled query 

You can immediately stop a run for a specific scheduled query by making a PATCH request to the `/schedules/{SCHEDULE_ID}/runs/{RUN_ID}` endpoint and providing both the ID of the scheduled query and the run in the request path.

#### API format

```http
PATCH /schedules/{SCHEDULE_ID}/runs/{RUN_ID}
```

- `{SCHEDULE_ID}`: The `id` value of the scheduled query whose run you wish to retrieve details of.
- `{RUN_ID}`: The `id` value of the run you wish to retrieve.

#### Request

This API request uses the JSON Patch syntax for its payload. For more information on how JSON Patch works, please read the [API fundamentals document](../../api-fundamentals/api-fundamentals.md). 

```shell
curl -X PATCH https://platform.adobe.io/data/foundation/query/schedules/e95186d65a28abf00a495d82_28e74200-e3de-11e9-8f5d-7f27416c5f0d_sample_scheduled_query7omob151bm_birvwm/runs/c2NoZWR1bGVkX18yMDIwLTAxLTA4VDIwOjQ1OjAwKzAwOjAw
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'x-gw-ims-org-id: {IMS_ORG}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
 -d '{
     "op": "cancel"
 }'
```

#### Response

A successful response returns HTTP status 202 (Accepted) with the following message.

```json
{
    "message": "Request to cancel run of a scheduled query accepted",
    "statusCode": 202
}
```

## Retrieve a list of query templates

You can retrieve a list of all query templates for your IMS Organization by making a GET request to the `/query-templates` endpoint. 

#### API format

```http
GET /query-templates
GET /query-templates?{QUERY_PARAMETERS}
```

- `{QUERY_PARAMETERS}`: (*Optional*) Parameters added to the request path which configure the results returned in the response. Multiple parameters can be included, separated by ampersands (`&`). The available parameters are listed below.

**Query parameters**

The following is a list of available query parameters for listing query templates. All of these parameters are optional. Making a call to this endpoint with no parameters will retrieve all query templates available for your organization.

Parameter | Description
--------- | -----------
`orderby` | Specifies the field by which to order results. The supported fields are `created` and `updated`. For example, `orderby=created` will sort results by created in ascending order. Adding a `-` before created (`orderby=-created`) will sort items by created in descending order. 
`limit` | Specifies the page size limit to control the number of results that are included in a page. (*Default value: 20*)
`start` | Offsets the response list, using zero-based numbering. For example, `start=2` will return a list starting from the third listed query. (*Default value: 0*)
`property` | Filter results based on fields. The filters **must** be HTML escaped. Commas are used to combine multiple sets of filters. The supported fields are `name` and `userId`. The only supported operator is `==` (equal to). For example, `name==my_template` will return all query templates with the name `my_template`.

#### Request

The following request retrieves the latest query template created for your IMS organization.

```shell
curl -X GET https://platform.adobe.io/data/foundation/query/query-templates?limit=1
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'x-gw-ims-org-id: {IMS_ORG}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
```

#### Response

A successful response returns HTTP status 200 with a list of query templates for the specified IMS Organization. The following response returns the latest query template created for your IMS organization.

```json
{
    "templates": [
        {
            "sql": "SELECT *\nFROM\n  accounts\nLIMIT 10\n",
            "name": "Test",
            "id": "f7cb5155-29da-4b95-8131-8c5deadfbe7f",
            "updated": "2019-11-21T21:50:01.469Z",
            "userId": "{USER_ID}",
            "created": "2019-11-21T21:50:01.469Z",
            "_links": {
                "self": {
                    "href": "https://platform.adobe.io/data/foundation/query/query-templates/f7cb5155-29da-4b95-8131-8c5deadfbe7f",
                    "method": "GET"
                },
                "delete": {
                    "href": "https://platform.adobe.io/data/foundation/query/query-templates/f7cb5155-29da-4b95-8131-8c5deadfbe7f",
                    "method": "DELETE"
                },
                "update": {
                    "href": "https://platform.adobe.io/data/foundation/query/query-templates/f7cb5155-29da-4b95-8131-8c5deadfbe7f",
                    "method": "PUT",
                    "body": "{\"sql\" : \"new sql \", \"name\" : \"new name\"}"
                }
            }
        }
    ],
    "_page": {
        "orderby": "-created",
        "start": "2019-11-21T21:50:01.469Z",
        "next": "2019-11-21T21:50:01.469Z",
        "count": 1
    },
    "_links": {
        "next": {
            "href": "https://platform.adobe.io/data/foundation/query/query-templates?orderby=-created&start=2019-11-21T21:50:01.469Z"
        },
        "prev": {
            "href": "https://platform.adobe.io/data/foundation/query/query-templates?orderby=-created&start=2019-11-21T21:50:01.469Z&isPrevLink=true"
        }
    },
    "version": 1
}
```

>**Note:** You can use the value of `_links.delete` to [delete your query template](#delete-a-specified-query-template).

## Create a query template

You can create a query template by making a POST request to the `/query-templates` endpoint.

#### API format

```http
POST /query-templates
```

#### Request

```shell
curl -X POST https://platform.adobe.io/data/foundation/query/query-templates
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'x-gw-ims-org-id: {IMS_ORG}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
 -d '{
	"sql": "SELECT * FROM accounts;",
	"name": "Sample query template"
}'
```

- `sql`: The SQL query you want to create.
- `name`: The name of the query template.

#### Response

A successful response returns HTTP status 202 (Accepted) with details of your newly created query template.

```json
{
    "sql": "SELECT * FROM accounts;",
    "name": "Sample query template",
    "id": "0094d000-9062-4e6a-8fdb-05606805f08f",
    "updated": "2020-01-09T00:20:09.670Z",
    "userId": "{USER_ID}",
    "created": "2020-01-09T00:20:09.670Z",
    "_links": {
        "self": {
            "href": "https://platform.adobe.io/data/foundation/query/query-templates/0094d000-9062-4e6a-8fdb-05606805f08f",
            "method": "GET"
        },
        "delete": {
            "href": "https://platform.adobe.io/data/foundation/query/query-templates/0094d000-9062-4e6a-8fdb-05606805f08f",
            "method": "DELETE"
        },
        "update": {
            "href": "https://platform.adobe.io/data/foundation/query/query-templates/0094d000-9062-4e6a-8fdb-05606805f08f",
            "method": "PUT",
            "body": "{\"sql\" : \"new sql \", \"name\" : \"new name\"}"
        }
    }
}
```

>**Note:** You can use the value of `_links.delete` to [delete your query template](#delete-a-specified-query-template).

## Retrieve a specified query template

You can retrieve a specific query template by making a GET request to the `/query-templates/{TEMPLATE_ID}` endpoint and providing the ID of the query template in the request path.

#### API format

```http
GET /query-templates/{TEMPLATE_ID}
```

- `{TEMPLATE_ID}`: The `id` value of the query template you want to retrieve.

#### Request

```shell
curl -X GET https://platform.adobe.io/data/foundation/query/query-templates/0094d000-9062-4e6a-8fdb-05606805f08f
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'x-gw-ims-org-id: {IMS_ORG}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
```

#### Response

A successful response returns HTTP status 200 with details of your specified query template.

```json
{
    "sql": "SELECT * FROM accounts;",
    "name": "Sample query template",
    "id": "0094d000-9062-4e6a-8fdb-05606805f08f",
    "updated": "2020-01-09T00:20:09.670Z",
    "userId": "A5A562D15E1645480A495CE1@techacct.adobe.com",
    "created": "2020-01-09T00:20:09.670Z",
    "_links": {
        "self": {
            "href": "https://platform.adobe.io/data/foundation/query/query-templates/0094d000-9062-4e6a-8fdb-05606805f08f",
            "method": "GET"
        },
        "delete": {
            "href": "https://platform.adobe.io/data/foundation/query/query-templates/0094d000-9062-4e6a-8fdb-05606805f08f",
            "method": "DELETE"
        },
        "update": {
            "href": "https://platform.adobe.io/data/foundation/query/query-templates/0094d000-9062-4e6a-8fdb-05606805f08f",
            "method": "PUT",
            "body": "{\"sql\" : \"new sql \", \"name\" : \"new name\"}"
        }
    }
}
```

>**Note:** You can use the value of `_links.delete` to [delete your query template](#delete-a-specified-query-template).

## Update a specified query template

You can update a specific query template by making a PUT request to the `/query-templates/{TEMPLATE_ID}` endpoint and providing the ID of the query template in the request path.

#### API format

```http
PUT /query-templates/{TEMPLATE_ID}
```

- `{TEMPLATE_ID}`: The `id` value of the query template you want to retrieve.

#### Request

>**Note:** The PUT request requires both the sql and name field to be filled, and will **overwrite** the current content of that query template.

```shell
curl -X PUT https://platform.adobe.io/data/foundation/query/query-templates/0094d000-9062-4e6a-8fdb-05606805f08f
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'x-gw-ims-org-id: {IMS_ORG}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
 -d '{
    "sql": "SELECT * FROM accounts LIMIT 20;",
    "name": "Sample query template"
 }'
```

- `sql`: The SQL query you want to update.
- `name`: The name of the scheduled query.

#### Response

A successful response returns HTTP status 202 (Accepted) with the updated information for your specified query template.

```json
{
    "sql": "SELECT * FROM accounts LIMIT 20;",
    "name": "Sample query template",
    "id": "0094d000-9062-4e6a-8fdb-05606805f08f",
    "updated": "2020-01-09T00:29:20.028Z",
    "lastUpdatedBy": "{USER_ID}",
    "userId": "{USER_ID}",
    "created": "2020-01-09T00:20:09.670Z",
    "_links": {
        "self": {
            "href": "https://platform.adobe.io/data/foundation/query/query_templates/0094d000-9062-4e6a-8fdb-05606805f08f",
            "method": "GET"
        },
        "delete": {
            "href": "https://platform.adobe.io/data/foundation/query/query_templates/0094d000-9062-4e6a-8fdb-05606805f08f",
            "method": "DELETE"
        },
        "update": {
            "href": "https://platform.adobe.io/data/foundation/query/query_templates/0094d000-9062-4e6a-8fdb-05606805f08f",
            "method": "PUT",
            "body": "{\"sql\" : \"new sql \", \"name\" : \"new name\"}"
        }
    }
}
```

>**Note:** You can use the value of `_links.delete` to [delete your query template](#delete-a-specified-query-template).

## Delete a specified query template

You can delete a specific query template by making a DELETE request to the `/query-templates/{TEMPLATE_ID}` and providing the ID of the query template in the request path.

#### API format

```http
DELETE /query-templates/{TEMPLATE_ID}
```

- `{TEMPLATE_ID}`: The `id` value of the query template you want to retrieve.

#### Request

```shell
curl -X DELETE https://platform.adobe.io/data/foundation/query/query-templates/0094d000-9062-4e6a-8fdb-05606805f08f
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'x-gw-ims-org-id: {IMS_ORG}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
```

#### Response 

A successful response returns HTTP status 202 (Accepted) with the following message. 

```json
{
    "message": "Deleted",
    "statusCode": 202
}
```

## Next steps

Now that you have learned how to make calls using the Query Service API, you can create your own non-interactive queries. For more information on how to create queries, please read the [SQL reference guide](../sql/overview.md).