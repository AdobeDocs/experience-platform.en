---
keywords: Experience Platform;home;popular topics;query service;query templates;api guide;templates;Query service;
solution: Experience Platform
title: Query Templates API Endpoint
description: This guide details the various query template API calls you can make using the Query Service API.
exl-id: 14cd7907-73d2-478f-8992-da3bdf08eacc
---
# Query templates endpoint

## Sample API calls

The following sections describe the various API calls you can make using the [!DNL Query Service] API. Each call includes the general API format, a sample request showing required headers, and a sample response.

See the [UI query templates documentation](../ui/query-templates.md) for information on creating templates through the Experience Platform UI.

### Retrieve a list of query templates

You can retrieve a list of all query templates for your organization by making a GET request to the `/query-templates` endpoint. 

**API format**

```http
GET /query-templates
GET /query-templates?{QUERY_PARAMETERS}
```

| Property | Description |
| -------- | ----------- |
| `{QUERY_PARAMETERS}` | (*Optional*) Parameters added to the request path which configure the results returned in the response. Multiple parameters can be included, separated by ampersands (`&`). The available parameters are listed below. |

**Query parameters**

The following is a list of available query parameters for listing query templates. All of these parameters are optional. Making a call to this endpoint with no parameters will retrieve all query templates available for your organization.

| Parameter | Description |
| --------- | ----------- |
| `orderby` | Specifies the field by which to order results. The supported fields are `created` and `updated`. For example, `orderby=created` will sort results by created in ascending order. Adding a `-` before created (`orderby=-created`) will sort items by created in descending order. | 
| `limit` | Specifies the page size limit to control the number of results that are included in a page. (*Default value: 20*) |
| `start` | Specify an ISO format timestamp to order the results. If no start date is specified, the API call will return the oldest created templates first, then continue to list more recent results.<br> ISO timestamps allow for different levels of granularity in the date and time. The basic ISO timestamps take the format of: `2020-09-07` to express the date September 7, 2020. A more complex example would be written as `2022-11-05T08:15:30-05:00` and corresponds to November 5, 2022, 8:15:30 am, US Eastern Standard Time. A timezone can be provided with a UTC offset and is denoted by the suffix "Z" (`2020-01-01T01:01:01Z`). If no timezone is provided, it defaults to zero. |
| `property` | Filter results based on fields. The filters **must** be HTML escaped. Commas are used to combine multiple sets of filters. The supported fields are `name` and `userId`. The only supported operator is `==` (equal to). For example, `name==my_template` will return all query templates with the name `my_template`. |

**Request**

The following request retrieves the latest query template created for your organization.

```shell
curl -X GET https://platform.adobe.io/data/foundation/query/query-templates?limit=1
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns HTTP status 200 with a list of query templates for the specified organization. The following response returns the latest query template created for your organization.

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
                    "body": "{\"sql\": \"new sql \", \"name\": \"new name\"}"
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

>[!NOTE]
>
>You can use the value of `_links.delete` to [delete your query template](#delete-a-specified-query-template).

### Create a query template

You can create a query template by making a POST request to the `/query-templates` endpoint.

**API format**

```http
POST /query-templates
```

**Request**

```shell
curl -X POST https://platform.adobe.io/data/foundation/query/query-templates
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
 -d '{
        "sql": "SELECT account_balance FROM user_data WHERE user_id='$user_id';",
        "name": "Sample query template",
        "queryParameters": {
            user_id : {USER_ID}
            }
    }'
```

| Property | Description |
| -------- | ----------- |
| `sql` | The SQL query that you want to create. You can either use standard SQL or a parameter replacement. To use a parameter replacement in the SQL you must prepend the parameter key with a `$`. For example, `$key`, and provide the parameters used in the SQL as JSON key value pairs in the `queryParameters` field. The values passed here will be the default parameters used in the template. If you want to override these parameters, you must override them in the POST request. |
| `name` | The name of the query template. |
| `queryParameters` | A key value pairing to replace any parameterized values in the SQL statement. It is only required **if** you are using parameter replacements within the SQL you provide. No value type checking will be done on these key value pairs. |

**Response**

A successful response returns HTTP status 202 (Accepted) with details of your newly created query template.

```json
{
    "sql": "SELECT account_balance FROM user_data WHERE user_id='$user_id';",
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
            "body": "{\"sql\": \"new sql \", \"name\": \"new name\"}"
        }
    }
}
```

>[!NOTE]
>
>You can use the value of `_links.delete` to [delete your query template](#delete-a-specified-query-template).

### Retrieve a specified query template

You can retrieve a specific query template by making a GET request to the `/query-templates/{TEMPLATE_ID}` endpoint and providing the ID of the query template in the request path.

**API format**

```http
GET /query-templates/{TEMPLATE_ID}
```

| Property | Description |
| -------- | ----------- | 
| `{TEMPLATE_ID}` | The `id` value of the query template you want to retrieve. |

**Request**

```shell
curl -X GET https://platform.adobe.io/data/foundation/query/query-templates/0094d000-9062-4e6a-8fdb-05606805f08f
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

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
            "body": "{\"sql\": \"new sql \", \"name\": \"new name\"}"
        }
    }
}
```

>[!NOTE]
>
>You can use the value of `_links.delete` to [delete your query template](#delete-a-specified-query-template).

### Update a specified query template

You can update a specific query template by making a PUT request to the `/query-templates/{TEMPLATE_ID}` endpoint and providing the ID of the query template in the request path.

**API format**

```http
PUT /query-templates/{TEMPLATE_ID}
```

| Property | Description |
| -------- | ----------- |
| `{TEMPLATE_ID}` | The `id` value of the query template you want to retrieve. |

**Request**

>[!NOTE]
>
>The PUT request requires both the sql and name field to be filled, and will **overwrite** the current content of that query template.

```shell
curl -X PUT https://platform.adobe.io/data/foundation/query/query-templates/0094d000-9062-4e6a-8fdb-05606805f08f
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
 -d '{
    "sql": "SELECT account_balance FROM user_data WHERE user_id='$user_id';",
    "name": "Sample query template",
    "queryParameters": {
            user_id : {USER_ID}
        }
    }'
```

| Property | Description |
| -------- | ----------- |
| `sql` | The SQL query that you want to create. You can either use standard SQL or a parameter replacement. To use a parameter replacement in the SQL you must prepend the parameter key with a `$`. For example, `$key`, and provide the parameters used in the SQL as JSON key value pairs in the `queryParameters` field. The values passed here will be the default parameters used in the template. If you want to override these parameters, you must override them in the POST request. |
| `name` | The name of the query template. |
| `queryParameters` | A key value pairing to replace any parameterized values in the SQL statement. It is only required **if** you are using parameter replacements within the SQL you provide. No value type checking will be done on these key value pairs. |

**Response**

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
            "body": "{\"sql\": \"new sql \", \"name\": \"new name\"}"
        }
    }
}
```

>[!NOTE]
>
>You can use the value of `_links.delete` to [delete your query template](#delete-a-specified-query-template).

### Delete a specified query template

You can delete a specific query template by making a DELETE request to the `/query-templates/{TEMPLATE_ID}` and providing the ID of the query template in the request path.

**API format**

```http
DELETE /query-templates/{TEMPLATE_ID}
```

| Property | Description |
| -------- | ----------- |
| `{TEMPLATE_ID}` | The `id` value of the query template you want to retrieve. |

**Request**

```shell
curl -X DELETE https://platform.adobe.io/data/foundation/query/query-templates/0094d000-9062-4e6a-8fdb-05606805f08f
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response** 

A successful response returns HTTP status 202 (Accepted) with the following message. 

```json
{
    "message": "Deleted",
    "statusCode": 202
}
```
