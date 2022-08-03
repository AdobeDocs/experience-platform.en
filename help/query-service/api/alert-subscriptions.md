---
keywords: Experience Platform;home;popular topics;query service;Query service;alert;
title: Alert Subscriptions API Endpoint
description: The following sections walks through the various API calls you can make for alert subscriptions with the Query Service API.
---
# Alert Subscriptions API Endpoint

Adobe Experience Platform Query Service allows you to subscribe to alerts for both ad-hoc and scheduled queries.

Without subscription the following alerts apply:

* When a batch query job finishes, customers will receive a notification.

* When a batch query job's duration exceeds a threshold, an alert is triggered to the person that scheduled the query

>[!NOTE]
>
>The content for in-platform alert and email will be the same 

<!-- ## Getting started -->

Alerts support the following query scenarios:

* Alerts are possible for both a successful or failed execution are available for ad hoc queries that use CTAS, ITAS, anonymous block (including templates), saved, and parameterized templates.
* Alerts for a started, successful, or failed scheduled query.
* Any testing queries can be excluded from alerts if you configure them appropriately. 
<!-- All queries (whether ad hoc execution or scheduled) that are being executed as part of a test can be excluded from alerts. -->
* You do not need to be the query creator to subscribe to an alert.
* All queries executed, whether ad-hoc or scheduled, can send alerts.
* Other users can enrol for alerts on a query that they did not create.

>[!NOTE]
>
>Email notifications need to be subscribed to from the profile settings page.

The following sections walk through the various API calls you can make using the Query Service API. Each call includes the general API format, a sample request showing required headers, and a sample response.

## 1) POST Subscribe multiple users to an alert {#subscribe-multiple-users}

You can subscribe a user to receive an alert by making a `POST` request to the `/alertSubscriptions` endpoint.

<!-- Q) Does this create an alert as well? -->

**API format**

```http
POST /alertSubscriptions
```

<!-- Q) Is this appropriate? "emailIds": ["{USER_EMAIL_ID}"] -->

**Request**

```shell
curl -X POST https://platform.adobe.io/data/foundation/query/alertSubscriptions
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
            "{USER_EMAIL_ID}",
            "madeup@adobe.com"
        ],
        "inContextNotifications": true,
        "emailNotifications": true
    }
}'
```

<!-- Q) Property descriptions? -->

| Property | Description |
| -------- | ----------- |
| `assetId` | The query ID that associated the alert with a particular query. |
| `alertType` | A boolean value that indicates ... |
| `subscriptions` | The ... |
| `subscriptions.emailIds` | The email IDs for the recipients of the alert. |
| `subscriptions.inContextNotifications` | A boolean value to allow other users to subscribe for alert notifications. |
| `subscriptions.emailNotifications` | A boolean value for ... |

{style="table-layout:auto"}

**Response**

A successful response returns HTTP status 202 (Accepted) with details of your newly created alert.

```json
{
    "assetId": "c4f67291-1161-4943-bc29-8736469bb928",
    "id": "query_service_flow_run_failure-5f4cb942-b67c-4ea4-a90d-5b6245e60aca",
    "alertType": "failure",
    "notifications": {
        "emailIds": [
            "{USER_EMAIL_ID}"
        ],
        "inContextNotifications": false,
        "emailNotifications": true
    },
    "_links": {
        "self": {
            "href": "https://platform-int.adobe.io/data/foundation/query/alertSubscriptions/c4f67291-1161-4943-bc29-8736469bb928",
            "method": "GET"
        },
        "subscribe": {
            "href": "https://platform-int.adobe.io/data/foundation/query/alertSubscriptions",
            "method": "POST",
            "body": "{\"assetId\": \"queryId/scheduleId\", \"alertType\": \"start/success/failure\", \"subscriptions\": {\n\"emailIds\": [\"xyz@example.com\", \"abc@example.com\"], \"email\": true, \"inContext\": false}}"
        },
        "patch_status": {
            "href": "https://platform-int.adobe.io/data/foundation/query/alertSubscriptions/c4f67291-1161-4943-bc29-8736469bb928/failure",
            "method": "PATCH",
            "body": "{ \"op\": \"replace\", \"path\": \"/status\", \"value\": \"enable/disable\" }"
        },
        "get_list_of_subscribers_by_alert_type": {
            "href": "https://platform-int.adobe.io/data/foundation/query/alertSubscriptions/c4f67291-1161-4943-bc29-8736469bb928/failure",
            "method": "GET"
        },
        "delete": {
            "href": "https://platform-int.adobe.io/data/foundation/query/alertSubscriptions/c4f67291-1161-4943-bc29-8736469bb928/failure",
            "method": "DELETE"
        }
    }
}
```

<!-- Q) Property Descriptions -->

| Property | Description |
| -------- | ----------- |
| `id` | The ... |
| `_links` | The ... |

<!-- Q) Why is the AssetID returned in the response different to the one in the request?  -->
<!-- Q) What is the ID in the response that starts with: "query_service_flow_run_failure-5"? -->

## 2) PATCH Enable or disable an alert {#enable-or-disable-alert}

You can enable or disable an alert by making a `PATCH` request to the `/alertSubscriptions/<queryId>/<alertType>` or `/alertSubscriptions/<scheduleId>/<alertType>` endpoint. 

**API format**

```http
PATCH /alertSubscriptions/<queryId>/<alertType>
PATCH /alertSubscriptions/<scheduleId>/<alertType>
```

<!-- Q) Parameter descriptions / values? -->

| Parameters | Description |
| -------- | ----------- |
| `alertType` | You must specify the current alert type in the final namespace of the endpoint in order to change it. There are three potential values. These include ... |
| `queryId` | The unique identifier for the query to be updated. |
| `ScheduleId` | The unique identifier for the scheduled query to be updated. |

**Request**

```shell
curl -X PATCH 'https://platform.adobe.io/data/foundation/query/alertSubscriptions/{queryId}/{alertType}' \
-H 'Authorization: Bearer {ACCESS_TOKEN}' \
-H 'x-gw-ims-org-id: {ORG_ID}' \
-H 'x-api-key: {API_KEY}' \
-H 'x-sandbox-name: {SANDBOX_NAME}'
-H 'Content-Type: application/json' \
-H 'x-sandbox-id: {SANDBOX_ID}' \
-d '{
        "op": "replace",
        "path" : "/status",
        "value": "Enable/Disable"
}'
```

<!-- Q) Property Descriptions -->

| Property | Description |
| -------- | ----------- |
| `op` | The operation performed. Acceptable values are ... |
| `path` | The .... |
| `value` | The potential values are `Enable` or `Disable`. |

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

<!-- Q) Property Descriptions -->

| Property | Description |
| -------- | ----------- |
| `id` | The ... |
| `assetId` | The .... |
| `alertType` | The potential values ... |
| `status` | The ... |

## 3) GET Retrieve all subscriptions for a particular query or schedule ID {#retrieve-all-alert-subscriptions-by-id}

Retrieve the alert subscription information for particular query ID or schedule ID by making a GET request to the `alertSubscriptions/{QUERY_ID}` or the `alertSubscriptions/{SCHEDULE_ID}` endpoint.

**API format**

```http
GET /alertSubscriptions/{QUERY_ID}
GET /alertSubscriptions/{SCHEDULE_ID}
```

| Parameter | Description |
| -------- | ----------- |
| `{QUERY_ID}` | The ID of the query that you want to return the subscription information for. |
| `{SCHEDULE_ID}` | The ID of the scheduled query that you want to return the subscription information for. |

**Request**

```shell
curl -X GET 'https://platform.adobe.io/data/foundation/query/alertSubscriptions/4422fc69-eaa7-464e-945b-63cfd435d3d1' \
-H 'Authorization: Bearer {ACCESS_TOKEN}' \
-H 'x-gw-ims-org-id: {ORG_ID}' \
-H 'x-sandbox-name: {SANDBOX_NAME}' \
-H 'Content-Type: application/json' \
-H 'x-api-key: {API_KEY}' \
-H 'x-sandbox-id: {SANDBOX_ID}'
```

**Response**

A successful response returns an HTML status of 200 and the subscription information for provided query or schedule ID.

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
                    "madeup@adobe.com",
                    "madeup2b@adobe.com",
                    "madeup3@adobe.com"
                ],
                "inContextNotifications": [
                    "madeup@adobe.com",
                    "madeup2@adobe.com",
                    "madeup3@adobe.com"
                ]
            },
            "_links": {
            }
        },
        {
            "assetId": "6df22232-f427-4250-a4e1-43cd30990641",
            "id": "query_service_flow_run_start-5cdc3bbe-750a-4d80-9c43-96e5e09f1a96",
            "status": "enabled",
            "alertType": "start",
            "subscriptions": {
                "emailNotifications": [
                    "madeup@adobe.com"
                ],
                "inContextNotifications": [
                    "madeup@adobe.com"
                ]
            },
            "_links": {
            }
        }
    ]
}
```
<!-- update this response with appropriate parameter type instead of madeup@adobne example -->

<!-- Q) Property Descriptions -->

| Property | Description |
| -------- | ----------- |
| `assetId` | The .... |
| `id` | The ... |
| `status` | The ... |
| `alertType` | The potential values are ... |
| `subscriptions.emailNotifications` | The ... |
| `subscriptions.inContextNotifications` | The ... |

## 4) GET Retrieve subscription information for a particular query/schedule id and alertType {#get-alert-info-by-id}

Retrieve a list of alert subscribers for a particular ID and alert type by making a GET request to the `/alertSubscriptions/{queryId}/{AlertType}` endpoint. This is applicable to both query or scheduled query ID.

**API format**

```http
GET /alertSubscriptions/{QUERY_ID}/{AlertType}
GET /alertSubscriptions/{SCHEDULE_ID}/{AlertType}
```

<!-- Q) Parameter Descriptions -->

| Parameters | Description |
| -------- | ----------- |
| `alertType` | You must specify the current alert type in the final namespace of the endpoint in order to change it. There are three potential values. These include ... |
| `queryId` | The unique identifier for the query to be updated. |
| `ScheduleId` | The unique identifier for the scheduled query to be updated. |

**Request**

```shell
curl -X GET 'https://platform.adobe.io/data/foundation/query/alertSubscriptions/4422fc69-eaa7-464e-945b-63cfd435d3d1/start'' \
-H 'Authorization: Bearer {ACCESS_TOKEN}' \
-H 'x-gw-ims-org-id: {ORG_ID}' \
-H 'x-sandbox-name: {SANDBOX_NAME}' \
-H 'Content-Type: application/json' \
-H 'x-api-key: {API_KEY}' \
-H 'x-sandbox-id: {SANDBOX_ID}'
```

**Response**

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
                    "madeUph@adobe.com",
                    "madeUp@adobe.com"
                ],
                "inContextNotifications": [
                    "madeUp@adobe.com"
                ]
            },
            "_links": {
            }
        }
    ]
}
```

<!-- Q) Property descriptions? -->

| Property | Description |
| -------- | ----------- |
| `assetId` | The query ID that associated the alert with a particular query. |
| `alertType` | A boolean value that indicates ... |
| `subscriptions` | The ... |
| `subscriptions.inContextNotifications` | A boolean value to allow other users to subscribe for alert notifications. |
| `subscriptions.emailNotifications` | A boolean value for ... |

## 5) DELETE Delete an alert for a query/schedule ID for given alertType {#delete-alert-info-by-id}

Delete an alert for a particular query or schedule id and alertType by making a DELETE request to the `/alertSubscriptions/{queryId}/{AlertType}` endpoint.

```http
DELETE /alertSubscriptions/{queryId}/{alertType}
DELETE /alertSubscriptions/{scheduleId}/{alertType}
```

<!-- Q) Parameter Descriptions -->

| Parameters | Description |
| -------- | ----------- |
| `alertType` | You must specify the current alert type in the final namespace of the endpoint in order to change it. There are three potential values. These include ... |
| `queryId` | The unique identifier for the query to be updated. |
| `ScheduleId` | The unique identifier for the scheduled query to be updated. |

**Request**

```shell
curl -X DELETE 'https://platform.adobe.io/data/foundation/query/alertSubscriptions/4422fc69-eaa7-464e-945b-63cfd435d3d1/start' \
-H 'Authorization: Bearer {ACCESS_TOKEN}' \
-H 'x-gw-ims-org-id: {ORG_ID}' \
-H 'x-sandbox-name: {SANDBOX_NAME}' \
-H 'Content-Type: application/json' \
-H 'x-api-key: {API_KEY}' \
-H 'x-sandbox-id: {SANDBOX_ID}'
```

**Response**

A successful response returns HTTP 200 success status response with confirmation message. 

```json
{
"message": "Alert Deleted Successfully for assetId: 6df22232-f427-4250-a4e1-43cd30990641 and alertType: success",
"statusCode": 200
}
```

## 6) GET Retrieve a list of all the alerts that a user is subscribed to {#}

Retrieve a list of all the alerts that a user is subscribed to by making a GET request to the `alertSubscriptions/subscriptions/{emailId}` endpoint.

**API format**

```http
GET /alertSubscriptions/subscriptions/{emailId}
```

<!-- Q) Parameter Descriptions -->

| Parameters | Description |
| -------- | ----------- |
| `{emailId}` | The ... |

**Request**

```shell
curl -X GET 'https://platform.adobe.io/data/foundation/query/alertSubscriptions/subscriptions/rrunner@acme.com' \
-H 'Authorization: Bearer {ACCESS_TOKEN}' \
-H 'x-gw-ims-org-id: {ORG_ID}' \
-H 'x-sandbox-name: {SANDBOX_NAME}' \
-H 'Content-Type: application/json' \
-H 'x-api-key: {API_KEY}' \
-H 'x-sandbox-id: {SANDBOX_ID}'
```

**Response**

A successful response returns HTTP status 200 with details of the alerts subscribed to by the `emailId` provided. 

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
            }
        }
    ]
}
```

<!-- Q) Property descriptions? -->

| Property | Description |
| -------- | ----------- |
| `name` | The ... |
| `assetId` | The query ID that associated the alert with a particular query. |
| `status` | The ... |
| `alertType` | A boolean value that indicates ... |
| `subscriptions` | The ... |
| `subscriptions.inContextNotifications` | A boolean value to allow other users to subscribe for alert notifications. |
| `subscriptions.emailNotifications` | A boolean value for ... |

## 7) GET Retrieve a list of all alerts for an organization and a sandbox

Retrieve a list of all alerts for an organization and a sandbox by making a GET request to the `alertSubscriptions` endpoint.

**API format**

```http
GET /alertSubscriptions
```

**Request**

```shell
curl -X GET 'https://platform.adobe.io/data/foundation/query/alertSubscriptions' \
-H 'Authorization: Bearer {ACCESS_TOKEN}' \
-H 'x-gw-ims-org-id: {ORG_ID}' \
-H 'x-sandbox-name: {SANDBOX_NAME}' \
-H 'Content-Type: application/json' \
-H 'x-api-key: {API_KEY}' \
-H 'x-sandbox-id: {SANDBOX_ID}'
-d ''
```

<!-- Q) Was this a typo in the wiki: --data-raw '' -->

**Response**

A successful response returns an HTTP 200 status with details of all the alerts subscribed to by an organization for a particular sandbox.

```json
{
    "alerts": [
        {
            "assetId": "0ca168f4-e46b-4f7f-be6a-bdc386271b4a",
            "id": "query_service_flow_run_start-dcf7b4be-ccd7-4c73-ae0c-a4bb34a40adada84",
            "status": "enabled",
            "alertType": "start"
        },
        {
            "assetId": "0ca168f4-e46b-4f7f-be6a-bdc386271b4a",
            "id": "query_service_flow_run_success-dcf7b4be-ccd7-4c73-ae0c-a4bb34a40adada84",
            "status": "enabled",
            "alertType": "success"
        },
        {
            "assetId": "700d43d9-3b99-4d4c-8dbb-29c911c0e0df",
            "id": "query_service_flow_run_start-75da972a-e859-47a5-934c-629904daa1ef",
            "status": "enabled",
            "alertType": "start"

        }
    ]
}
```

<!-- Q) Property descriptions? -->

| Property | Description |
| -------- | ----------- |
| `assetId` | The query ID that associated the alert with a particular query. |
| `id` | The ... |
| `status` | The ... |
| `alertType` | A boolean value that indicates ... |
