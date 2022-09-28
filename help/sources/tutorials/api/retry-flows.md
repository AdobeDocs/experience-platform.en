---
keywords: Experience Platform;home;popular topics;flow service;
title: Retry Failed Dataflow Runs
description: This tutorial covers steps on how to retry failed dataflow runs using the Flow Service API
---
# Retry failed dataflow runs

>[!IMPORTANT]
>
>Support for retrying failed dataflow runs is available to batch sources. You can only retry dataflow runs that have failed.

This tutorial covers steps on how to retry failed dataflow runs using the [[!DNL Flow Service] API](https://www.adobe.io/experience-platform-apis/references/flow-service/).

## Getting started

This tutorial requires you to have a working understanding of the following components of Adobe Experience Platform:

* [Sources](../../home.md): [!DNL Experience Platform] allows data to be ingested from various sources while providing you with the ability to structure, label, and enhance incoming data using [!DNL Platform] services.
* [Sandboxes](../../../sandboxes/home.md): [!DNL Experience Platform] provides virtual sandboxes which partition a single [!DNL Platform] instance into separate virtual environments to help develop and evolve digital experience applications.

### Using Platform APIs

For information on how to successfully make calls to Platform APIs, see the guide on [getting started with Platform APIs](../../../landing/api-guide.md).

## Retry a failed dataflow run

To retry a failed dataflow run, make a POST request to the `/runs` endpoint while providing the run ID of your dataflow and the `re-trigger` operation as part of your query paramters.

**API format**

```http
POST /runs/{RUN_ID}/action?op=re-trigger
```

| Parameter | Description |
| --- | --- |
| `{RUN_ID}` | The run ID that corresponds with the dataflow run that you want to retry. |
| `op` | An operation that determines the action to be performed. To retry a failed dataflow run, you must specify `re-trigger` as your operation. |

**Request**

The following request retries the dataflow run for run ID `4fb0418e-1804-45d6-8d56-dd51f05c0baf`.

```shell
curl -X POST \
  'https://platform.adobe.io/data/foundation/flowservice/runs/4fb0418e-1804-45d6-8d56-dd51f05c0baf/action?op=re-trigger' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json'
```

**Response**

A successful response returns a newly created flow run ID and its corresponding etag version.

```json
{
    "id": "3fb0418e-1804-45d6-8d56-dd51f05c0baf",
    "etag": "\"1100c53e-0000-0200-0000-627138980000\""
}
```
