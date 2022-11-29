---
title: Audit events export API Endpoint
description: Learn how to export audit events in Experience Platform using the Audit Query API.
---
# Export a list of audit events

You can retrieve events data by making a GET request to the `/audit/export` endpoint, specifying the events you wish to retrieve in the payload.

**API format**

```http
GET /audit/export
```

| Parameter | Description |
| --------- | ----------- |
| `{QUERY_PARAMS}` | Optional query parameters to filter results by. The properties that can be used for filtering are timestamp, status, action, user, and assetType. <br><br>When filtering by timestamp, it is best practice to use a range using > and < operators rather than an exact value. Example: ?property=timestamp<2020-02-08T02:46:48.610862Z&property=timestamp>2020-01-01T02:46:48.610862Z. <br><br>If you want to filter results using multiple values for a single filter, pass in a comma-separated list of values. For example, property=action==create,update returns audit events whose action property is either create or update.|

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

The results are generated into a CSV file for export. A successful response returns HTTP 307 with no response body. A link to the export file is provided in the `Location` response header.
