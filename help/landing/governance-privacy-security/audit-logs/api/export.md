---
keywords: Experience Platform;home;popular topics
solution: Experience Platform
title: Audit events export API Endpoint
topic-legacy: developer guide
description: Learn how to export audit events in Experience Platform using the Audit Query API.
---
## Export a list of audit events

You can retrieve events data by making a GET request to the `/audit/export` endpoint, specifying the events you wish to retrieve in the payload.

**API format**

```http
GET /audit/export
```

| Parameter | Description |
| --------- | ----------- |
| `{QUERY_PARAMS}` | Optional query parameters to filter results by. See the section on [query parameters](./appendix.md#query) for more information. |

**Request**

```shell
curl -X POST \
  https://platform.adobe.io/data/foundation/audit/events
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'x-request-id: {TRACING_ID}' \
```

**Response**

The results are generated into a CSV file for export. A link to the export file is provided in the `Location` response header.
