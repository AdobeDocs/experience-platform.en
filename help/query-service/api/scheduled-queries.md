---
keywords: Experience Platform;home;popular topics;query service;Query service;scheduled queries;scheduled query;
solution: Experience Platform
title: Scheduled Queries API Endpoint
description: The following sections walks through the various API calls you can make for scheduled queries with the Query Service API.
exl-id: f57dbda5-da50-4812-a924-c8571349f1cd
---
# Scheduled queries endpoint

## Sample API calls

Now that you understand what headers to use, you are ready to begin making calls to the [!DNL Query Service] API. The following sections walk through the various API calls you can make using the [!DNL Query Service] API. Each call includes the general API format, a sample request showing required headers, and a sample response.

### Retrieve a list of scheduled queries

You can retrieve a list of all scheduled queries for your IMS Organization by making a GET request to the `/schedules` endpoint. 

**API format**

```http
GET /schedules
GET /schedules?{QUERY_PARAMETERS}
```

| Property | Description |
| -------- | ----------- |
| `{QUERY_PARAMETERS}` | (*Optional*) Parameters added to the request path which configure the results returned in the response. Multiple parameters can be included, separated by ampersands (`&`). The available parameters are listed below. |

**Query parameters**

The following is a list of available query parameters for listing scheduled queries. All of these parameters are optional. Making a call to this endpoint with no parameters will retrieve all scheduled queries available for your organization.

| Parameter | Description |
| --------- | ----------- |
| `orderby` | Specifies the field by which to order results. The supported fields are `created` and `updated`. For example, `orderby=created` will sort results by created in ascending order. Adding a `-` before created (`orderby=-created`) will sort items by created in descending order. |
| `limit` | Specifies the page size limit to control the number of results that are included in a page. (*Default value: 20*) |
| `start` | Offsets the response list, using zero-based numbering. For example, `start=2` will return a list starting from the third listed query. (*Default value: 0*) |
| `property` | Filter results based on fields. The filters **must** be HTML escaped. Commas are used to combine multiple sets of filters. The supported fields are `created`, `templateId`, and `userId`. The list of supported operators are `>` (greater than), `<` (less than), and `==` (equal to). For example, `userId==6ebd9c2d-494d-425a-aa91-24033f3abeec` will return all scheduled queries where the user ID is as specified. |

**Request**

The following request retrieves the latest scheduled query created for your IMS organization.

```shell
curl -X GET https://platform.adobe.io/data/foundation/query/schedules?limit=1
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

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

### Create a new scheduled query

You can create a new scheduled query by making a POST request to the `/schedules` endpoint. When you create a scheduled query in the API, you can also see it in the Query Editor. For more information on scheduled queries in the UI, please read the [Query Editor documentation](../ui/user-guide.md#scheduled-queries).

**API format**

```http
POST /schedules
```

**Request**

```shell
curl -X POST https://platform.adobe.io/data/foundation/query/schedules
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
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

| Property | Description |
| -------- | ----------- |
| `query.dbName` | The name of the database you are creating a scheduled query for. |
| `query.sql` | The SQL query you want to create. |
| `query.name` | The name of the scheduled query. |
| `schedule.schedule` | The cron schedule for the query. For more information about cron schedules, please read the [cron expression format](https://www.quartz-scheduler.org/documentation/quartz-2.3.0/tutorials/crontrigger.html) documentation. In this example, "30 * * * *" means that the query will run every hour at the 30 minute mark.<br><br>Alternatively, you can use the following shorthand expressions:<ul><li>`@once`: The query only runs once.</li><li>`@hourly`: The query runs every hour at the beginning of the hour. This is equivalent to the cron expression `0 * * * *`.</li><li>`@daily`: The query runs once a day at midnight. This is equivalent to the cron expression `0 0 * * *`.</li><li>`@weekly`: The query runs once a week, on Sunday, at midnight. This is equivalent to the cron expression `0 0 * * 0`.</li><li>`@monthly`: The query runs once a month, on the first day of the month, at midnight. This is equivalent to the cron expression `0 0 1 * *`.</li><li>`@yearly`: The query runs once a year, on January 1st, at midnight. This is equivalent to the cron expression `1 0 0 1 1 *`. |
| `schedule.startDate` | The start date for your scheduled query, written as a UTC timestamp. |

**Response**

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

>[!NOTE]
>
>You can use the value of `_links.delete` to [delete your created scheduled query](#delete-a-specified-scheduled-query).

### Request details of a specified scheduled query

You can retrieve information for a specific scheduled query by making a GET request to the `/schedules` endpoint and providing its ID in the request path.

**API format**

```http
GET /schedules/{SCHEDULE_ID}
```

| Property | Description |
| -------- | ----------- |
| `{SCHEDULE_ID}` | The `id` value of the scheduled query you want to retrieve. |

**Request**

```shell
curl -X GET https://platform.adobe.io/data/foundation/query/schedules/e95186d65a28abf00a495d82_28e74200-e3de-11e9-8f5d-7f27416c5f0d_sample_scheduled_query7omob151bm_birvwm
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

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

>[!NOTE]
>
>You can use the value of `_links.delete` to [delete your created scheduled query](#delete-a-specified-scheduled-query).

### Update details of a specified scheduled query

You can update the details for a specified scheduled query by making a PATCH request to the `/schedules` endpoint and by providing its ID in the request path. 

The PATCH request supports two different paths: `/state` and `/schedule/schedule`.

### Update scheduled query state

You can use `/state` to update the state of the selected scheduled query - ENABLED or DISABLED. To update the state, you will need to set the value as `enable` or `disable`.

**API format**

```http
PATCH /schedules/{SCHEDULE_ID}
```

| Property | Description |
| -------- | ----------- |
| `{SCHEDULE_ID}` | The `id` value of the scheduled query you want to PATCH. |


**Request**

This API request uses the JSON Patch syntax for its payload. For more information on how JSON Patch works, please read the API fundamentals document. 

```shell
curl -X PATCH https://platform.adobe.io/data/foundation/query/schedules/e95186d65a28abf00a495d82_28e74200-e3de-11e9-8f5d-7f27416c5f0d_sample_scheduled_query7omob151bm_birvwm
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
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

| Property | Description |
| -------- | ----------- |
| `path` | The path of the value you want to patch. In this case, since you are updating the scheduled query's state, you need to set the value of `path` to `/state`. |
| `value` | The updated value of the `/state`. This value can either be set as `enable` or `disable` to enable or disable the scheduled query. |

**Response**

A successful response returns HTTP status 202 (Accepted) with the following message.

```json
{
    "message": "Request to patch accepted",
    "statusCode": 202
}
```

### Update scheduled query schedule

You can use `/schedule/schedule` to update the cron schedule of the scheduled query. For more information about cron schedules, please read the [cron expression format](https://www.quartz-scheduler.org/documentation/quartz-2.3.0/tutorials/crontrigger.html) documentation.

**API format**

```http
PATCH /schedules/{SCHEDULE_ID}
```

| Property | Description |
| -------- | ----------- |
| `{SCHEDULE_ID}` | The `id` value of the scheduled query you want to PATCH. |

**Request**

This API request uses the JSON Patch syntax for its payload. For more information on how JSON Patch works, please read the API fundamentals document. 

```shell
curl -X PATCH https://platform.adobe.io/data/foundation/query/schedules/e95186d65a28abf00a495d82_28e74200-e3de-11e9-8f5d-7f27416c5f0d_sample_scheduled_query7omob151bm_birvwm
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
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

| Property | Description |
| -------- | ----------- |
| `path` | The path of the value you want to patch. In this case, since you are updating the scheduled query's schedule, you need to set the value of `path` to `/schedule/schedule`. |
| `value` | The updated value of the `/schedule`. This value needs to be in the form of a cron schedule. So, in this example, the scheduled query will run every hour at the 45 minute mark. |

**Response**

A successful response returns HTTP status 202 (Accepted) with the following message.

```json
{
    "message": "Request to patch accepted",
    "statusCode": 202
}
```

### Delete a specified scheduled query

You can delete a specified scheduled query by making a DELETE request to the `/schedules` endpoint and providing the ID of the scheduled query you want to delete in the request path.

>[!NOTE]
>
>The schedule **must** be disabled before being deleted.

**API format**

```http
DELETE /schedules/{SCHEDULE_ID}
```

| Property | Description |
| -------- | ----------- |
| `{SCHEDULE_ID}` | The `id` value of the scheduled query you want to DELETE. |

**Request**

```shell
curl -X DELETE https://platform.adobe.io/data/foundation/query/schedules/e95186d65a28abf00a495d82_28e74200-e3de-11e9-8f5d-7f27416c5f0d_sample_scheduled_query7omob151bm_birvwm
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns HTTP status 202 (Accepted) with the following message.

```json
{
    "message": "Schedule deleted successfully",
    "statusCode": 202
}
```
