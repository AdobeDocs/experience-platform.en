---
keywords: Experience Platform;home;popular topics;flow service;
title: Create an ad hoc flow run using the Flow Service API
description: This tutorial covers the steps to create an ad hoc flow run using the Flow Service API.
---
# Create an ad hoc flow run using the [!DNL Flow Service] API

Ad hoc flow runs provide you with the capability to create a flow run against a given dataflow. This allows end users to create a flow run, based on given parameters and create an ingestion cycle, without service tokens.

This tutorial covers the steps to create an ad hoc flow run using the [[!DNL Flow Service] API](https://www.adobe.io/experience-platform-apis/references/flow-service/).

## Getting started

>[!NOTE]
>
>Before you can create an ad hoc flow run using the [!DNL Flow Service] API, you must first have the flow ID of a dataflow that is scheduled for a one-time ingestion.

This tutorial requires you to have a working understanding of the following components of Adobe Experience Platform:

* [Sources](../../home.md): [!DNL Experience Platform] allows data to be ingested from various sources while providing you with the ability to structure, label, and enhance incoming data using [!DNL Platform] services.
* [Sandboxes](../../../sandboxes/home.md): [!DNL Experience Platform] provides virtual sandboxes which partition a single [!DNL Platform] instance into separate virtual environments to help develop and evolve digital experience applications.

### Using Platform APIs

For information on how to successfully make calls to Platform APIs, see the guide on [getting started with Platform APIs](../../../landing/api-guide.md).

## Create an ad hoc flow run for a table-based source

To create an ad hoc flow for a table-based source, make a POST request to the [!DNL Flow Service] API while providing the ID of the flow you want to create the run against, as well as values for start time, end time, and delta column.

>[!TIP]
>
>Table-based sources include sources categorized as: advertising, analytics, consent and preferences, CRMs, customer success, database, marketing automation, payments, and protocols.

**API format**

```http
POST /runs/
```

**Request**

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
| `params.windowStartTime` | |
| `params.windowEndTime` | |
| `params.deltaColumn` | The delta column is required to partition the data and separate newly ingested data from historic data. |
| `params.deltaColumn.name` | The name of the delta column. |

**Response**

A successful response returns the details of the newly created flow run, including its unique `id`.

```json
{
    "id": "3fb0418e-1804-45d6-8d56-dd51f05c0baf",
    "createdAt": 1651587212543,
    "updatedAt": 1651587223839,
    "createdBy": "3B82767F5458DA190A4C86F0@AdobeID",
    "updatedBy": "3B82767F5458DA190A4C86F0@AdobeID",
    "createdClient": "exc_app",
    "updatedClient": "exc_app",
    "sandboxId": "d1e74830-c5c7-11e9-aafb-87c71c35cac8",
    "sandboxName": "prod",
    "imsOrgId": "1C44331D59D7C69F0A494204@AdobeOrg",
    "flowId": "3abea21c-7e36-4be1-bec1-d3bad0e3e0de",
    "params": {
        "windowStartTime": "1651584991",
        "windowEndTime": "16515859567",
        "deltaColumn": {
            "name": "DOB"
        }
    },
    "etag": "\"1100c53e-0000-0200-0000-627138980000\"",
    "metrics": {
        "statusSummary": {
            "status": "scheduled"
        }
    },
    "activities": []
}
```

| Property | Description |
| --- | --- |
| `id` | The ID of the newly created flow run. |
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
| `params.windowStartTime` | |
| `params.windowEndTime` | |
| `params.deltaColumn` | The delta column is required to partition the data and separate newly ingested data from historic data. |
| `params.deltaColumn.name` | The name of the delta column. |
| `etag` | The resource version of the flow run. |
| `metrics` | |
| `activities` | |

## Create an ad hoc flow run for a file-based source

## Limitations

## Next steps

