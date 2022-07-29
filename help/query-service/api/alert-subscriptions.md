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

## Create an alert {#alerts-api}

You can create an alert by making a POST reques to the `/alert/registeredevents` endpoint.

**API format**

```http
POST /alert/registeredevents
```

<!-- confirm this endpoint? otherwise should be in the alerts API documentation 
Is this a public facing endpoint? -must be otherwise how would users get to the {#subscribe-multiple-users} step -->

**Request**

```shell
curl -X POST 'https://platform-int.adobe.io/data/infrastructure/observability/alert/registeredevents' \
 -H 'Authorization: Bearer <TOKEN>' \
 -H 'x-gw-ims-org-id: D5A906E85E835AC60A49423D@AdobeOrg' \
 -H 'x-sandbox-name: prod' \
 -H 'Content-Type: application/json' \
 -H 'x-api-key: acp_foundation_queryService' \
 -H 'x-sandbox-id: c64f4580-7360-11ea-875b-2bd1229e1c1e' \
 -d '[
    {
        "name": "query_service_flow_run_start-f80f6e92-68bf-4eca-8f6e-9268bf6eca2c",
        "folder": "query_service_flow_run",
        "title": "query service Flow Run Start",
        "artifactId": "f80f6e92-68bf-4eca-8f6e-9268bf6eca2c",
        "artifactType": "flowRun",
        "artifactName": "f80f6e92-68bf-4eca-8f6e-9268bf6eca2c",
        "description": "Query  service Run Start f80f6e92-68bf-4eca-8f6e-9268bf6eca2c",

        "sourceIdentifier": "4422fc69-eaa7-464e-945b-63cfd435d3d1",  
        "notificationChannels": [
            {
                "name": "Email",
                "subscribed": true
            },
            {
                "name": "UI",
                "subscribed": true
            }
        ]
    }
]'
```

| Property | Description |
| -------- | ----------- |
| `name` | The ... |
| `folder` | The .... |
| `title` | The ... |
| `artifactId` | The .... |
| `artifactType` | The ... |
| `artifactName` | The .... |
| `description` | The ... |
| `sourceIdentifier` | The .... |
| `notificationChannels` | The .... |
| `notificationChannels.name` | The ... |
| `notificationChannels.subscribed` | The .... |

{style="table-layout:auto"}

**Response**

A successful response returns ...

```json
// Response missing from Wiki
```

| Property | Description |
| -------- | ----------- |
| `` | The ... |
| `` | The ... |

## Subscribe users to an alert {#alerts-api-2}

## Subscribe multiple users to an alert {#subscribe-multiple-users}

You can subscribe a user to receive an alert by making a `POST` request to the `/alertSubscriptions` endpoint.

**API format**

```http
POST /alertSubscriptions
```

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
            "akshatb@adobe.com"
        ],
        "inContextNotifications": true,
        "emailNotifications": true
    }
}'
```

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

| Property | Description |
| -------- | ----------- |
| `id` | The ... |
| `_links` | The ... |

<!-- Q) Why is the AssetID returned in the response different to the one in the request?  -->
<!-- Q) What is the ID in the response that starts with: "query_service_flow_run_failure-5"? -->

## Get the alert name for a specific query or schedule ID and alertType {#alert-api-3}

<!-- Alert api content -->

## update the status of an alert {#alert-api-4}

<!-- Alert api content -->

## Enable or disable an alert {#enable-or-disable-alert}

You can enable or disable an alert by making a `PATCH` request to the `/alertSubscriptions/<queryId>/<alertType>` or `/alertSubscriptions/<scheduleId>/<alertType>` endpoint. 

>[!NOTE]
>
>The alert type is required because ... 

**API format**

```http
PATCH /alertSubscriptions/<queryId>/<alertType>
PATCH /alertSubscriptions/<scheduleId>/<alertType>
```

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

| Parameter | Description |
| -------- | ----------- |
| `id` | The ... |
| `assetId` | The .... |
| `alertType` | The potential values are `Enable` or `Disable`. |
| `status` | The ... |

## Filter a list of alerts based on query or schedule ID {alerts-api-5}

<!-- Alert api content -->

## Retrieve all subscriptions for a particular query or schedule ID {#retrieve-subscriptions-with-id}

Retrieve the alert subscription information for particular query ID or schedule ID by making a GET request to the `alertSubscriptions/{queryId}` endpoint.

**API format**

```http
alertSubscriptions/{queryId}
```

| Parameter | Description |
| -------- | ----------- |
|  |  |
|  |  |

**Request**

```shell
```

| Parameter | Description |
| -------- | ----------- |
| `` | The ... |
| `` | The .... |

## Retrieve subscription information for a particular query/schedule id and alertType

## Delete an alert for a query/schedule ID for given alertType

## Retrieve list of all alerts that a user is subscribed to
