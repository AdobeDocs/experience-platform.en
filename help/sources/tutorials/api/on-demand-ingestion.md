---
keywords: Experience Platform;home;popular topics;flow service;
title: Create a Flow Run for On-Demand Ingestion Using the Flow Service API
description: Learn how to create a flow run for on-demand ingestion using the Flow Service API
exl-id: a7b20cd1-bb52-4b0a-aad0-796929555e4a
---
# Create a flow run for on-demand ingestion using the [!DNL Flow Service] API 

Flow runs represent an instance of flow execution. For example, if a flow is scheduled to run hourly at 9:00 AM, 10:00 AM, and 11:00 AM, then you would have three instances of a flow run. Flow runs are specific to your particular organization.

On-demand ingestion provides you with the capability to create a flow run against a given dataflow. This allows your users to create a flow run, based on given parameters and create an ingestion cycle, without service tokens. Support for on-demand ingestion is available only for batch sources.

This tutorial covers the steps on how to use on-demand ingestion and create a flow run using the [[!DNL Flow Service] API](https://www.adobe.io/experience-platform-apis/references/flow-service/).

## Getting started

>[!NOTE]
>
>In order to create a flow run, you must first have the flow ID of a dataflow that is scheduled for one-time ingestion.

This tutorial requires you to have a working understanding of the following components of Adobe Experience Platform:

* [Sources](../../home.md): [!DNL Experience Platform] allows data to be ingested from various sources while providing you with the ability to structure, label, and enhance incoming data using [!DNL Platform] services.
* [Sandboxes](../../../sandboxes/home.md): [!DNL Experience Platform] provides virtual sandboxes which partition a single [!DNL Platform] instance into separate virtual environments to help develop and evolve digital experience applications.

### Using Platform APIs

For information on how to successfully make calls to Platform APIs, see the guide on [getting started with Platform APIs](../../../landing/api-guide.md).

## Create a flow run for a table-based source

To create a flow for a table-based source, make a POST request to the [!DNL Flow Service] API while providing the ID of the flow you want to create the run against, as well as values for start time, end time, and delta column.

>[!TIP]
>
>Table-based sources include the following source categories: advertising, analytics, consent and preferences, CRMs, customer success, database, marketing automation, payments, and protocols.

**API format**

```http
POST /runs/
```

**Request**

The following request creates a flow run for flow ID `3abea21c-7e36-4be1-bec1-d3bad0e3e0de`.

>[!NOTE]
>
>You only need to provide the `deltaColumn` when creating your first flow run. After that, `deltaColumn` will be patched as part of `copy` transformation in the flow and will be treated as the source of truth. Any attempts to change the `deltaColumn` value through the flow run parameters will result in an error.

```shell
curl -X POST \
  'https://platform.adobe.io/data/foundation/flowservice/runs' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json'
  -d '{
      "flowId": "3abea21c-7e36-4be1-bec1-d3bad0e3e0de",
      "params": {
          "startTime": "1663735590",
          "windowStartTime": "1651584991",
          "windowEndTime": "16515859567",
          "deltaColumn": {
              "name": "DOB"
          }
      }
  }'
```

| Parameter | Description |
| --- | --- |
| `flowId` | The ID of the flow in which your flow run will be created against.  |
| `params.startTime` | The scheduled time of when the on-demand flow run will begin. This value is represented in unix time. |
| `params.windowStartTime` | The earliest date and time that data will be retrieved from. This value is represented in unix time. |
| `params.windowEndTime` | The date and time that data will be retrieved up to. This value is represented in unix time. |
| `params.deltaColumn` | The delta column is required to partition the data and separate newly ingested data from historic data. **Note**: The `deltaColumn` is only needed when creating your firs flow run. |
| `params.deltaColumn.name` | The name of the delta column. |

**Response**

A successful response returns the details of the newly created flow run, including its unique run `id`.

```json
{
    "items": [
        {
            "id": "3fb0418e-1804-45d6-8d56-dd51f05c0baf",
            "etag": "\"1100c53e-0000-0200-0000-627138980000\""
        }
    ]
}
```

| Property | Description |
| --- | --- |
| `id` | The ID of the newly created flow run. See the guide on [retrieving flow specifications](../api/collect/database-nosql.md#specs) for more information on table-based run specifications. |
| `etag` | The resource version of the flow run. |
<!-- 
| `createdAt` | The unix timestamp that designates when the flow run was created. |
| `updatedAt` | The unix timestamp that designates when the flow run was last updated. |
| `createdBy` | The organization ID of the user who created the flow run. |
| `updatedBy` | The organization ID of the user who last updated the flow run. |
| `createdClient` | The application client that created the flow run. |
| `updatedClient` | The application client that last updated the flow run. |
| `sandboxId` | The ID of the sandbox that contains the flow run. |
| `sandboxName` | The name of the sandbox that contains the flow run. |
| `imsOrgId` | The organization ID. |
| `flowId` | The ID of the flow in which the flow run is created against. |
| `params.windowStartTime` | An integer that defines the start time of the window during which data is to be pulled. The value is represented in unix time. |
| `params.windowEndTime` | An integer that defines the end time of the window during which data is to be pulled. The value is represented in unix time. |
| `params.deltaColumn` | The delta column is required to partition the data and separate newly ingested data from historic data. **Note**: The `deltaColumn` is only needed when creating your firs flow run. |
| `params.deltaColumn.name` | The name of the delta column. |
| `etag` | The resource version of the flow run. |
| `metrics` | This property displays a status summary for the flow run. | -->

## Create a flow run for a file-based source

To create a flow for a file-based source, make a POST request to the [!DNL Flow Service] API while providing the ID of the flow you want to create the run against and values for start time and end time.

>[!TIP]
>
>File-based sources include all cloud storage sources.

**API format**

```http
POST /runs/
```

**Request**

The following request creates a flow run for flow ID `3abea21c-7e36-4be1-bec1-d3bad0e3e0de`.

```shell
curl -X POST \
  'https://platform.adobe.io/data/foundation/flowservice/runs' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json'
  -d '{
      "flowId": "3abea21c-7e36-4be1-bec1-d3bad0e3e0de",
      "params": {
          "startTime": "1663735590",
          "windowStartTime": "1651584991",
          "windowEndTime": "16515859567"
      }
  }'
```

| Parameter | Description |
| --- | --- |
| `flowId` | The ID of the flow in which your flow run will be created against.  |
| `params.startTime` | The scheduled time of when the on-demand flow run will begin. This value is represented in unix time. |
| `params.windowStartTime` | The earliest date and time that data will be retrieved from. This value is represented in unix time. |
| `params.windowEndTime` | The date and time that data will be retrieved up to. This value is represented in unix time. |

**Response**

A successful response returns the details of the newly created flow run, including its unique run `id`.


```json
{
    "items": [
        {
            "id": "3fb0418e-1804-45d6-8d56-dd51f05c0baf",
            "etag": "\"1100c53e-0000-0200-0000-627138980000\""
        }
    ]
}
```

| Property | Description |
| --- | --- |
| `id` | The ID of the newly created flow run. See the guide on [retrieving flow specifications](../api/collect/database-nosql.md#specs) for more information on table-based run specifications. |
| `etag` | The resource version of the flow run. |

## Monitor your flow runs

Once your flow run has been created, you can monitor the data that is being ingested through it to see information on flow runs, completion status, and errors. To monitor your flow runs using the API, see the tutorial on [monitoring dataflows in the API ](./monitor.md). To monitor your flow runs using Platform UI, see the guide on [monitoring sources dataflows using the monitoring dashboard](../../../dataflows/ui/monitor-sources.md).
