---
keywords: Experience Platform;home;popular topics;query service;Query service;alert;
title: Alert Subscriptions Endpoint
description: This guide provides sample HTTP requests and responses for the various API calls you can make to the alert subscriptions endpoint with the Query Service API.
exl-id: 30ac587a-2286-4a52-9199-7a2a8acd5362
---
# Alert Subscriptions endpoint

Adobe Experience Platform Query Service allows you to subscribe to alerts for both ad hoc and scheduled queries. Alerts can be received by email, within the Platform UI, or both. The notification content is the same for in-Platform alerts and email alerts. Currently, query alerts can only be subscribed to by using the [Query Service API](https://developer.adobe.com/experience-platform-apis/references/query-service/).

>[!IMPORTANT]
>
>To receive email alerts you must first enable this setting within the UI. See the documentation for [instructions on how to enable email alerts](../../observability/alerts/ui.md#enable-email-alerts).

The table below explains the supported alert types for different types of queries: 

| Query type | Supported alert types |
|---|---|
| Ad hoc queries | `success` or `failed` executions. |
| Scheduled queries | `start`, `success`, or `failed` executions. |

>[!NOTE]
>
>All non-SELECT queries support alert subscriptions, and you do not need to be the query creator to subscribe to an alert. Other users can also enroll for alerts on a query that they did not create.

The following alerts apply without an alert subscription:

* When a batch query job finishes, users receive a notification.
* When a batch query job's duration exceeds a threshold, an alert is triggered to the person that scheduled the query.

>[!NOTE]
>
>Queries used for testing can be excluded from these alerts if appropriately configured. 

## Sample API calls

The following sections walk through the various API calls you can make using the Query Service API. Each call includes the general API format, a sample request showing required headers, and a sample response.

## Retrieve a list of all alerts for an organization and a sandbox {#get-list-of-org-alert-subs}

Retrieve a list of all alerts for an organization sandbox by making a GET request to the `/alert-subscriptions` endpoint.

**API format**

```http
GET /alert-subscriptions
GET /alert-subscriptions?{QUERY_PARAMETERS}
```

| Property | Description |
| --------- | ----------- |
| `{QUERY_PARAMETERS}` | (Optional) Parameters added to the request path which configure the results returned in the response. Multiple parameters can be included, separated by ampersands (&). The available parameters are listed below. |

**Query parameters**

The following is a list of available query parameters for listing queries. All of these parameters are optional. Making a call to this endpoint with no parameters will retrieve all queries available for your organization.

| Parameter | Description |
| --------- | ----------- |
| `orderby` | The field that specifies the order of results. The supported fields are `created` and `updated`. Prepend the property name with `+` for ascending and `-` for descending order. The default is `-created`. Note that the plus sign (`+`) has to be escaped with `%2B`. For example `%2Bcreated` is the value for an ascending created order. |
| `pagesize` | Use this parameter to control the number of records you want to fetch from the API call per page. The default limit is set to the maximum amount of 50 records per page. |
| `page` | Indicate the page number of the returned results that you want to see the records for. |
| `property` | Filter the results based on chosen fields. The filters **must** be HTML escaped. Commas are used to combine multiple sets of filters. The folowing properties allow filtering: <ul><li>id</li><li>assetId</li><li>status</li><li>alertType</li></ul> The supported operators are `==` (equal to). For example, `id==6ebd9c2d-494d-425a-aa91-24033f3abeec` will return the alert with a matching ID. |

**Request**

```shell
curl -X GET 'https://platform.adobe.io/data/foundation/query/alert-subscriptions' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json' \
  -H 'x-sandbox-id: {SANDBOX_ID}'
```

**Response**

A successful response returns an HTTP 200 status and the `alerts` array with pagination and version information. The `alerts` array contains details of all the alerts for an organization and a particular sandbox. A maximum of three alerts are available per response, one alert per each alert type is contained in the response body.

>[!NOTE]
>
>The `alerts._links` object in the `alerts` array has been truncated for brevity. A full example of the `alerts._links` object can be found in the [response of the POST request](#subscribe-users).

```json
{
    "alerts": [
        {
            "assetId": "0ca168f4-e46b-4f7f-be6a-bdc386271b4a",
            "id": "query_service_flow_run_start-dcf7b4be-ccd7-4c73-ae0c-a4bb34a40adada84",
            "status": "enabled",
            "alertType": "start",
            "_links":{
                "self": {…},
                "subscribe": {…},
                "patch_status": {…},
                "get_list_of_subscribers_by_alert_type": {…},
                "delete": {…}
            }
        },
        {
            "assetId": "0ca168f4-e46b-4f7f-be6a-bdc386271b4a",
            "id": "query_service_flow_run_success-dcf7b4be-ccd7-4c73-ae0c-a4bb34a40adada84",
            "status": "enabled",
            "alertType": "success",
            "_links":{
                "self": {…},
                "subscribe": {…},
                "patch_status": {…},
                "get_list_of_subscribers_by_alert_type": {…},
                "delete": {…}
            }
        },
        {
            "assetId": "700d43d9-3b99-4d4c-8dbb-29c911c0e0df",
            "id": "query_service_flow_run_start-75da972a-e859-47a5-934c-629904daa1ef",
            "status": "enabled",
            "alertType": "start",
            "_links":{
                "self": {…},
                "subscribe": {…},
                "patch_status": {…},
                "get_list_of_subscribers_by_alert_type": {…},
                "delete": {…}
            }
        }
    ], 
    "_page": {
        "orderby": "-created",
        "page": 1,
        "count": 26,
        "pageSize": 50
    },
    "_links": {
        "next": {
            "href": "https://platform.adobe.io/data/foundation/query/queries/alert-subscriptions?orderby=-created&page=2"
        },
        "prev": {
            "href": "https://platform.adobe.io/data/foundation/query/queries/alert-subscriptions?orderby=-created&page=0"
        }
    },
    "version": 1
}
```

| Property | Description |
| -------- | ----------- |
| `alerts.assetId` | The query ID that associated the alert with a particular query. |
| `alerts.id` | The name of the alert. This name is generated by the Alerts service and is used on the Alerts dashboard. The alert name is comprised of the folder that stores the alert, the `alertType`, and the flow ID. Information about the available alerts can be found in the [Platform Alerts dashboard documentation](../../observability/alerts/ui.md). |
| `alerts.status` | The alert has four status values: `enabled`, `enabling`, `disabled`, and `disabling`. An alert is either actively listening for the events, paused for future use while retaining all the relevant subscribers and settings, or transitioning between these states. |
| `alerts.alertType` | The type of alert. There are three potential values for an alert, they are: <ul><li>`start`: Notifies a user when the query execution has begun.</li><li>`success`: Notifies the user when the query completes.</li><li>`failure`: Notifies the user if the query fails.</li></ul> |
| `alerts._links` | Provides information on the available methods and endpoints that can be used to retrieve, update, edit, or delete information related to this alert ID. |
| `_page` | The object contains properties to describe the order, size, total number of pages, and current page. |
| `_links` | The object contains URI references that can be used to obtain the next or previous page of resources. |

## Retrieve the alert subscription information for a particular query or schedule ID {#retrieve-all-alert-subscriptions-by-id}

Retrieve the alert subscription information for a particular query ID or schedule ID by making a GET request to the `/alert-subscriptions/{QUERY_ID}` or the `/alert-subscriptions/{SCHEDULE_ID}` endpoint.

**API format**

```http
GET /alert-subscriptions/{QUERY_ID}
GET /alert-subscriptions/{SCHEDULE_ID}
```

| Parameter | Description |
| -------- | ----------- |
| `{QUERY_ID}` | The ID of the query that you want to return the subscription information for. |
| `{SCHEDULE_ID}` | The ID of the scheduled query that you want to return the subscription information for. |

**Request**

```shell
curl -X GET 'https://platform.adobe.io/data/foundation/query/alert-subscriptions/4422fc69-eaa7-464e-945b-63cfd435d3d1' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json' \
  -H 'x-sandbox-id: {SANDBOX_ID}'
```

**Response**

A successful response returns an HTTP status of 200 and the `alerts` array that contains subscription information for provided query or schedule ID.

```json
{
    "alerts": [
        {
            "assetId": "6df22232-f427-4250-a4e1-43cd30990641",
            "id": "query_service_flow_run_failure-5cdc3bbe-750a-4d80-9c43-96e5e09f1a96",
            "status": "enabled",
            "alertType": "failure",
            "subscriptions": {
                "emailNotifications": [
                    "rrunner@adobe.com",
                    "jsnow@adobe.com",
                    "keverdeen@adobe.com"
                ],
                "inContextNotifications": [
                    "rrunner@adobe.com",
                    "jsnow@adobe.com",
                    "keverdeen@adobe.com"
                ]
            },
            "_links": {
                "self": {
                    "href": "https://platform.adobe.io/data/foundation/query/alert-subscriptions/c4f67291-1161-4943-bc29-8736469bb928",
                    "method": "GET"
                },
                "subscribe": {
                    "href": "https://platform.adobe.io/data/foundation/query/alert-subscriptions",
                    "method": "POST",
                    "body": "{\"assetId\": \"queryId/scheduleId\", \"alertType\": \"start/success/failure\", \"subscriptions\": {\n\"emailIds\": [\"xyz@example.com\", \"abc@example.com\"], \"email\": true, \"inContext\": false}}"
                },
                "patch_status": {
                    "href": "https://platform.adobe.io/data/foundation/query/alert-subscriptions/c4f67291-1161-4943-bc29-8736469bb928/failure",
                    "method": "PATCH",
                    "body": "{ \"op\": \"replace\", \"path\": \"/status\", \"value\": \"enable/disable\" }"
                },
                "get_list_of_subscribers_by_alert_type": {
                    "href": "https://platform.adobe.io/data/foundation/query/alert-subscriptions/c4f67291-1161-4943-bc29-8736469bb928/failure",
                    "method": "GET"
                },
                "delete": {
                    "href": "https://platform.adobe.io/data/foundation/query/alert-subscriptions/c4f67291-1161-4943-bc29-8736469bb928/failure",
                    "method": "DELETE"
                }
            }
        },
        {
            "assetId": "6df22232-f427-4250-a4e1-43cd30990641",
            "id": "query_service_flow_run_start-5cdc3bbe-750a-4d80-9c43-96e5e09f1a96",
            "status": "enabled",
            "alertType": "start",
            "subscriptions": {
                "emailNotifications": [
                    "rrunner@adobe.com"
                ],
                "inContextNotifications": [
                    "rrunner@adobe.com"
                ]
            },
            "_links": {
                "self": {
                    "href": "https://platform.adobe.io/data/foundation/query/alert-subscriptions/c4f67291-1161-4943-bc29-8736469bb928",
                    "method": "GET"
                },
                "subscribe": {
                    "href": "https://platform.adobe.io/data/foundation/query/alert-subscriptions",
                    "method": "POST",
                    "body": "{\"assetId\": \"queryId/scheduleId\", \"alertType\": \"start/success/failure\", \"subscriptions\": {\n\"emailIds\": [\"xyz@example.com\", \"abc@example.com\"], \"email\": true, \"inContext\": false}}"
                },
                "patch_status": {
                    "href": "https://platform.adobe.io/data/foundation/query/alert-subscriptions/c4f67291-1161-4943-bc29-8736469bb928/failure",
                    "method": "PATCH",
                    "body": "{ \"op\": \"replace\", \"path\": \"/status\", \"value\": \"enable/disable\" }"
                },
                "get_list_of_subscribers_by_alert_type": {
                    "href": "https://platform.adobe.io/data/foundation/query/alert-subscriptions/c4f67291-1161-4943-bc29-8736469bb928/failure",
                    "method": "GET"
                },
                "delete": {
                    "href": "https://platform.adobe.io/data/foundation/query/alert-subscriptions/c4f67291-1161-4943-bc29-8736469bb928/failure",
                    "method": "DELETE"
                }
            }
        }
    ]
}
```

| Property | Description |
| -------- | ----------- |
| `assetId` | The alert is associated with this ID. The ID can be either a query ID or a schedule ID. |
| `id` | The name of the alert. This name is generated by the Alerts service and is used on the Alerts dashboard. The alert name is comprised of the folder that stores the alert, the `alertType`, and the flow ID. Information about the available alerts can be found in the [Platform Alerts dashboard documentation](../../observability/alerts/ui.md). |
| `status` | The alert has four status values: `enabled`, `enabling`, `disabled`, and `disabling`. An alert is either actively listening for the events, paused for future use while retaining all the relevant subscribers and settings, or transitioning between these states. |
| `alertType` | Each alert can have three different alert types. They are: <ul><li>`start`: Notifies a user when the query execution has begun.</li><li>`success`: Notifies the user when the query completes.</li><li>`failure`: Notifies the user if the query fails.</li></ul> |
| `subscriptions.emailNotifications` | An array of Adobe registered email addresses for users who have subscribed to receive emails for the alert. |
| `subscriptions.inContextNotifications` | An array of Adobe registered email addresses for users who have subscribed to UI notifications for the alert. |

## Retrieve alert subscription information for a particular query or schedule ID and alert type {#get-alert-info-by-id-and-alert-type}

Retrieve the alert subscription information for a particular ID and alert type by making a GET request to the `/alert-subscriptions/{QUERY_ID}/{ALERT_TYPE}` endpoint. This is applicable to both query or scheduled query IDs.

**API format**

```http
GET /alert-subscriptions/{QUERY_ID}/{ALERT_TYPE}
GET /alert-subscriptions/{SCHEDULE_ID}/{ALERT_TYPE}
```

| Parameters | Description |
| -------- | ----------- |
| `ALERT_TYPE` | This property describes the state of query execution that triggers an alert. The response will only include alert subscription information for alerts of this type. Each alert can have three different alert types. They are: <ul><li>`start`: Notifies a user when the query execution has begun.</li><li>`success`: Notifies the user when the query completes.</li><li>`failure`: Notifies the user if the query fails.</li></ul> |
| `QUERY_ID` | The unique identifier for the query to be updated. |
| `SCHEDULE_ID` | The unique identifier for the scheduled query to be updated. |

**Request**

```shell
curl -X GET 'https://platform.adobe.io/data/foundation/query/alert-subscriptions/4422fc69-eaa7-464e-945b-63cfd435d3d1/start'' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json' \
  -H 'x-sandbox-id: {SANDBOX_ID}'
```

**Response**

A successful response returns an HTTP status of 200 and all the alerts that are subscribed to. This includes the alert ID, type of alert, subscriber's Adobe registered email IDs, and their preferred notification channel. 

```json
{
    "alerts": [
        {
            "assetId": "6df22232-f427-4250-a4e1-43cd30990641",
            "id": "query_service_flow_run_success-5cdc3bbe-750a-4d80-9c43-96e5e09f1a96",
            "status": "enabled",
            "alertType": "success",
            "subscriptions": {
                "emailNotifications": [
                    "rrunner@adobe.com",
                    "jsnow@adobe.com"
                ],
                "inContextNotifications": [
                    "jsnow@adobe.com"
                ]
            },
            "_links": {
                "self": {
                    "href": "https://platform.adobe.io/data/foundation/query/alert-subscriptions/c4f67291-1161-4943-bc29-8736469bb928",
                    "method": "GET"
                },
                "subscribe": {
                    "href": "https://platform.adobe.io/data/foundation/query/alert-subscriptions",
                    "method": "POST",
                    "body": "{\"assetId\": \"queryId/scheduleId\", \"alertType\": \"start/success/failure\", \"subscriptions\": {\n\"emailIds\": [\"xyz@example.com\", \"abc@example.com\"], \"email\": true, \"inContext\": false}}"
                },
                "patch_status": {
                    "href": "https://platform.adobe.io/data/foundation/query/alert-subscriptions/c4f67291-1161-4943-bc29-8736469bb928/failure",
                    "method": "PATCH",
                    "body": "{ \"op\": \"replace\", \"path\": \"/status\", \"value\": \"enable/disable\" }"
                },
                "get_list_of_subscribers_by_alert_type": {
                    "href": "https://platform.adobe.io/data/foundation/query/alert-subscriptions/c4f67291-1161-4943-bc29-8736469bb928/failure",
                    "method": "GET"
                },
                "delete": {
                    "href": "https://platform.adobe.io/data/foundation/query/alert-subscriptions/c4f67291-1161-4943-bc29-8736469bb928/failure",
                    "method": "DELETE"
                }
            }
        }
    ]
}
```

| Property | Description |
| -------- | ----------- |
| `assetId` | The query ID that associated the alert with a particular query. |
| `alertType` | The type of alert. There are three potential values for an alert, they are: <ul><li>`start`: Notifies a user when the query execution has begun.</li><li>`success`: Notifies the user when the query completes.</li><li>`failure`: Notifies the user if the query fails.</li></ul> |
| `subscriptions` | An object used to pass the Adobe registered email IDs associated with the alerts, and the channels in which the users will receive the alerts. |
| `subscriptions.inContextNotifications` | An array of Adobe registered email addresses for users who have subscribed to UI notifications for the alert. |
| `subscriptions.emailNotifications` | An array of Adobe registered email addresses for users who have subscribed to receive emails for the alert. |

## Retrieve a list of all the alerts that a user is subscribed to {#get-alert-subscription-list}

Retrieve a list of all the alerts that a user is subscribed to by making a GET request to the `/alert-subscriptions/user-subscriptions/{EMAIL_ID}` endpoint. The response includes the alert name, IDs, status, alert type, and notification channels.

**API format**

```http
GET /alert-subscriptions/user-subscriptions/{EMAIL_ID}
```

| Parameters | Description |
| -------- | ----------- |
| `{EMAIL_ID}` | An email address that is registered to an Adobe account, is used to identify the users subscribed to alerts. |
| `orderby` | The field that specifies the order of results. The supported fields are `created` and `updated`. Prepend the property name with `+` for ascending and `-` for descending order. The default is `-created`. Note that the plus sign (`+`) has to be escaped with `%2B`. For example `%2Bcreated` is the value for an ascending created order. |
| `pagesize` | Use this parameter to control the number of records you want to fetch from the API call per page. The default limit is set to the maximum amount of 50 records per page. |
| `page` | Indicate the page number of the returned results that you want to see the records for. |
| `property` | Filter the results based on chosen fields. The filters **must** be HTML escaped. Commas are used to combine multiple sets of filters. The following properties allow filtering: <ul><li>id</li><li>assetId</li><li>status</li><li>alertType</li></ul> The supported operators are `==` (equal to). For example, `id==6ebd9c2d-494d-425a-aa91-24033f3abeec` will return the alert with a matching ID. |

**Request**

```shell
curl -X GET 'https://platform.adobe.io/data/foundation/query/alert-subscriptions/user-subscriptions/rrunner@adobe.com' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json' \
  -H 'x-sandbox-id: {SANDBOX_ID}'
```

**Response**

A successful response returns HTTP status 200 and the `items` array with details of the alerts subscribed to by the `emailId` provided. 

```json
{
    "items": [
        {
            "name": "query_service_flow_run_success-8f057161-b312-4274-b629-f346c7d15c1f",
            "assetId": "39e65373-e47a-4feb-9e5a-dffa2f677bca",
            "status": "enabled",
            "alertType": "success",
            "subscriptions": {
                "inContextNotification": true,
                "emailNotifications": true
            },
            "_links": {
                "self": {
                    "href": "https://platform.adobe.io/data/foundation/query/alert-subscriptions/c4f67291-1161-4943-bc29-8736469bb928",
                    "method": "GET"
                },
                "subscribe": {
                    "href": "https://platform.adobe.io/data/foundation/query/alert-subscriptions",
                    "method": "POST",
                    "body": "{\"assetId\": \"queryId/scheduleId\", \"alertType\": \"start/success/failure\", \"subscriptions\": {\n\"emailIds\": [\"xyz@example.com\", \"abc@example.com\"], \"email\": true, \"inContext\": false}}"
                },
                "patch_status": {
                    "href": "https://platform.adobe.io/data/foundation/query/alert-subscriptions/c4f67291-1161-4943-bc29-8736469bb928/failure",
                    "method": "PATCH",
                    "body": "{ \"op\": \"replace\", \"path\": \"/status\", \"value\": \"enable/disable\" }"
                },
                "get_list_of_subscribers_by_alert_type": {
                    "href": "https://platform.adobe.io/data/foundation/query/alert-subscriptions/c4f67291-1161-4943-bc29-8736469bb928/failure",
                    "method": "GET"
                },
                "delete": {
                    "href": "https://platform.adobe.io/data/foundation/query/alert-subscriptions/c4f67291-1161-4943-bc29-8736469bb928/failure",
                    "method": "DELETE"
                }
            }
        },
        {
            "name": "query_service_flow_run_start-8f057161-b312-4274-b629-f346c7d15c1f",
            "assetId": "39e65373-e47a-4feb-9e5a-dffa2f677bca",
            "status": "enabled",
            "alertType": "start",
            "subscriptions": {
                "inContextNotification": true,
                "emailNotifications": true
            },
            "_links": {
                "self": {
                    "href": "https://platform.adobe.io/data/foundation/query/alert-subscriptions/c4f67291-1161-4943-bc29-8736469bb928",
                    "method": "GET"
                },
                "subscribe": {
                    "href": "https://platform.adobe.io/data/foundation/query/alert-subscriptions",
                    "method": "POST",
                    "body": "{\"assetId\": \"queryId/scheduleId\", \"alertType\": \"start/success/failure\", \"subscriptions\": {\n\"emailIds\": [\"xyz@example.com\", \"abc@example.com\"], \"email\": true, \"inContext\": false}}"
                },
                "patch_status": {
                    "href": "https://platform.adobe.io/data/foundation/query/alert-subscriptions/c4f67291-1161-4943-bc29-8736469bb928/failure",
                    "method": "PATCH",
                    "body": "{ \"op\": \"replace\", \"path\": \"/status\", \"value\": \"enable/disable\" }"
                },
                "get_list_of_subscribers_by_alert_type": {
                    "href": "https://platform.adobe.io/data/foundation/query/alert-subscriptions/c4f67291-1161-4943-bc29-8736469bb928/failure",
                    "method": "GET"
                },
                "delete": {
                    "href": "https://platform.adobe.io/data/foundation/query/alert-subscriptions/c4f67291-1161-4943-bc29-8736469bb928/failure",
                    "method": "DELETE"
                }
            }
        }
    ], "_page": {
            "orderby": "-created",
            "page": 1,
            "count": 26,
            "pageSize": 50
        },
    "_links": {
        "next": {
            "href": "https://platform-int.adobe.io/data/foundation/query/queries/alert-subscriptions?orderby=-created&page=2"
        },
        "prev": {
            "href": "https://platform-int.adobe.io/data/foundation/query/queries/alert-subscriptions?orderby=-created&page=0"
        }
    },
    "version": 1
}
```

| Property | Description |
| -------- | ----------- |
| `name` |  The name of the alert. This name is generated by the Alerts service and is used on the Alerts dashboard. The alert name is comprised of the folder that stores the alert, the `alertType`, and the flow ID. Information about the available alerts can be found in the [Platform Alerts dashboard documentation](../../observability/alerts/ui.md). |
| `assetId` | The query ID that associated the alert with a particular query. |
| `status` | The alert has four status values: `enabled`, `enabling`, `disabled`, and `disabling`. An alert is either actively listening for the events, paused for future use while retaining all the relevant subscribers and settings, or transitioning between these states. |
| `alertType` | The type of alert. There are three potential values for an alert, they are: <ul><li>`start`: Notifies a user when the query execution has begun.</li><li>`success`: Notifies the user when the query completes.</li><li>`failure`: Notifies the user if the query fails.</li></ul> |
| `subscriptions` | An object used to pass the Adobe registered email IDs associated with the alerts, and the channels in which the users will receive the alerts. |
| `subscriptions.inContextNotifications` | A boolean value that determines how the users receive alert notifications. A `true` value confirms that alerts should be provided through the UI. A `false` value ensures that the users are not notified through that channel. |
| `subscriptions.emailNotifications` | A boolean value that determines how the users receive alert notifications. A `true` value confirms that alerts should be provided by email. A `false` value ensures that the users are not notified through that channel. |

## Create an alert and subscribe users {#subscribe-users}

To create an alert and subscribe a user to receive it, make a `POST` request to the `/alert-subscriptions` endpoint. This request associates a query to a newly created alert using an `assetId` property, and subscribes users to alerts for that query through the use of `emailIds`. 

>[!IMPORTANT]
>
>You can pass up to five Adobe registered email IDs in a single request. To subscribe more than five users to an alert, subsequent requests must be made.

**API format**

```http
POST /alert-subscriptions
```

**Request**

```shell
curl -X POST https://platform.adobe.io/data/foundation/query/alert-subscriptions
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
  -d '
    {
    "assetId": "a679dd0e-bcb2-4e69-a610-22d17ba98cac",
    "alertType": "failure",
    "subscriptions": {
        "emailIds": [
            "rrunner@adobe.com",
            "jsnow@adobe.com"
        ],
        "inContextNotifications": true,
        "emailNotifications": true
    }
}'
```

| Property | Description |
| -------- | ----------- |
| `assetId` | The alert is associated with this ID. The ID can be either a query ID or a schedule ID. |
| `alertType` | The type of alert. There are three potential values for an alert, they are: <ul><li>`start`: Notifies a user when the query execution has begun.</li><li>`success`: Notifies the user when the query completes.</li><li>`failure`: Notifies the user if the query fails.</li></ul> |
| `subscriptions` | An object used to pass the Adobe registered email IDs associated with the alerts, and the channels in which the users will receive the alerts. |
| `subscriptions.emailIds` | An array of email addresses to identify the users who should receive the alerts. The email addresses **must** be registered to an Adobe account. |
| `subscriptions.inContextNotifications` | A boolean value that determines how the users receive alert notifications. A `true` value confirms that alerts should be provided through the UI. A `false` value ensures that the users are not notified through that channel. |
| `subscriptions.emailNotifications` | A boolean value that determines how the users receive alert notifications. A `true` value confirms that alerts should be provided by email. A `false` value ensures that the users are not notified through that channel. |

{style="table-layout:auto"}

**Response**

A successful response returns HTTP status 202 (Accepted) with details of your newly created alert.

```json
{
    "assetId": "c4f67291-1161-4943-bc29-8736469bb928",
    "id": "query_service_flow_run_failure-5f4cb942-b67c-4ea4-a90d-5b6245e60aca",
    "alertType": "failure",
    "subscriptions": {
        "emailIds": [
            "{USER_EMAIL_ID}"
        ],
        "inContextNotifications": false,
        "emailNotifications": true
    },
    "_links": {
        "self": {
            "href": "https://platform.adobe.io/data/foundation/query/alert-subscriptions/c4f67291-1161-4943-bc29-8736469bb928",
            "method": "GET"
        },
        "subscribe": {
            "href": "https://platform.adobe.io/data/foundation/query/alert-subscriptions",
            "method": "POST",
            "body": "{\"assetId\": \"queryId/scheduleId\", \"alertType\": \"start/success/failure\", \"subscriptions\": {\n\"emailIds\": [\"xyz@example.com\", \"abc@example.com\"], \"email\": true, \"inContext\": false}}"
        },
        "patch_status": {
            "href": "https://platform.adobe.io/data/foundation/query/alert-subscriptions/c4f67291-1161-4943-bc29-8736469bb928/failure",
            "method": "PATCH",
            "body": "{ \"op\": \"replace\", \"path\": \"/status\", \"value\": \"enable/disable\" }"
        },
        "get_list_of_subscribers_by_alert_type": {
            "href": "https://platform.adobe.io/data/foundation/query/alert-subscriptions/c4f67291-1161-4943-bc29-8736469bb928/failure",
            "method": "GET"
        },
        "delete": {
            "href": "https://platform.adobe.io/data/foundation/query/alert-subscriptions/c4f67291-1161-4943-bc29-8736469bb928/failure",
            "method": "DELETE"
        }
    }
}
```

| Property | Description |
| -------- | ----------- |
| `id` | The name of the alert. This name is generated by the Alerts service and is used on the Alerts dashboard. The alert name is comprised of the folder that stores the alert, the `alertType`, and the flow ID. Information about the available alerts can be found in the [Platform Alerts dashboard documentation](../../observability/alerts/ui.md). |
| `_links` | Provides information on the available methods and endpoints that can be used to retrieve, update, edit, or delete information related to this alert ID. |

## Enable or disable an alert {#enable-or-disable-alert}

This request references a particular alert using a query or schedule ID and an alert type and updates the alert status to either `enable` or `disable`. You can update the status of an alert by making a `PATCH` request to the `/alert-subscriptions/{queryId}/{alertType}` or `/alert-subscriptions/{scheduleId}/{alertType}` endpoint. 

**API format**

```http
PATCH /alert-subscriptions/{QUERY_ID}/{ALERT_TYPE}
PATCH /alert-subscriptions/{SCHEDULE_ID}/{ALERT_TYPE}
```

| Parameters | Description |
| -------- | ----------- |
| `ALERT_TYPE` | The type of alert. There are three potential values for an alert, they are: <ul><li>`start`: Notifies a user when the query execution has begun.</li><li>`success`: Notifies the user when the query completes.</li><li>`failure`: Notifies the user if the query fails.</li></ul>You must specify the current alert type in the endpoint namespace in order to change it. |
| `QUERY_ID` | The unique identifier for the query to be updated. |
| `SCHEDULE_ID` | The unique identifier for the scheduled query to be updated. |

**Request**

```shell
curl -X PATCH 'https://platform.adobe.io/data/foundation/query/alert-subscriptions/4422fc69-eaa7-464e-945b-63cfd435d3d1/start'' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
  -H 'Content-Type: application/json' \
  -H 'x-sandbox-id: {SANDBOX_ID}' \
  -d '{
        "op": "replace",
        "path" : "/status",
        "value": "enable"
      }'
```

| Property | Description |
| -------- | ----------- |
| `op` | The operation to be performed. Currently, the only accepted value is `replace`. |
| `path` | This value relates to the namespace in the endpoint. Currently, the only accepted value is `/status`. |
| `value` | In a successful PATCH request, this changes the `status` value of the alert. Currently, the accepted values are `enable` or `disable`. |

{style="table-layout:auto"}

**Response**

A successful response returns HTTP status 200 with details of the alert status, type, and ID as well as the query it relates to.

```json
{
    "id" : "query_service_flow_run_success-4422fc69-eaa7-464e-945b-63cfd435d3d1",
    "assetId": "4422fc69-eaa7-464e-945b-63cfd435d3d1", 
    "alertType": "start",
    "status": "enabled"
}
```

| Property | Description |
| -------- | ----------- |
| `id` | The name of the alert. This name is generated by the Alerts service and is used on the Alerts dashboard. The alert name is comprised of the folder that stores the alert, the `alertType`, and the flow ID. Information about the available alerts can be found in the [Platform Alerts dashboard documentation](../../observability/alerts/ui.md). |
| `assetId` | The alert is associated with this ID. The ID can be either a query ID or a schedule ID. |
| `alertType` | Each alert can have three different alert types. They are: <ul><li>`start`: Notifies a user when the query execution has begun.</li><li>`success`: Notifies the user when the query completes.</li><li>`failure`: Notifies the user if the query fails.</li></ul> |
| `status` | The alert has four status values: `enabled`, `enabling`, `disabled`, and `disabling`. An alert is either actively listening for the events, paused for future use while retaining all the relevant subscribers and settings, or transitioning between these states. |

## Delete the alert for a particular query and alert type {#delete-alert-info-by-id-and-alert-type}

Delete an alert for a particular query or schedule ID and alert type by making a DELETE request to the `/alert-subscriptions/{QUERY_ID}/{ALERT_TYPE}` or `/alert-subscriptions/{SCHEDULE_ID}/{ALERT_TYPE}` endpoint.

```http
DELETE /alert-subscriptions/{QUERY_ID}/{ALERT_TYPE}
DELETE /alert-subscriptions/{SCHEDULE_ID}/{ALERT_TYPE}
```

| Parameters | Description |
| -------- | ----------- |
| `ALERT_TYPE` | The type of alert. There are three potential values for an alert, they are: <ul><li>`start`: Notifies a user when the query execution has begun.</li><li>`success`: Notifies the user when the query completes.</li><li>`failure`: Notifies the user if the query fails.</li></ul> The DELETE request only applies to the specific alert type provided. |
| `QUERY_ID` | The unique identifier for the query to be updated. |
| `SCHEDULE_ID` | The unique identifier for the scheduled query to be updated. |

**Request**

```shell
curl -X DELETE 'https://platform.adobe.io/data/foundation/query/alert-subscriptions/4422fc69-eaa7-464e-945b-63cfd435d3d1/start' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json' \
  -H 'x-sandbox-id: {SANDBOX_ID}'
```

**Response**

A successful response returns an HTTP 200 status and a confirmation message that includes the asset ID and the alert type of the deleted alert. 

```json
{
"message": "Alert Deleted Successfully for assetId: 6df22232-f427-4250-a4e1-43cd30990641 and alertType: success",
"statusCode": 200
}
```

## Next steps

This guide covered the use of the `/alert-subscriptions` endpoint in the Query Service API. After reading this guide you now have a better understanding of how to create an alert for a query, subscribe users to the alert, the types of alerts available and how alert subscription information can be retrieved, updated, and deleted. 

See the [Query Service API guide](./getting-started.md) to learn more about other available features and operations.
