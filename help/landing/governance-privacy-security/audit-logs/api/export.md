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
| `timestamp` | When filtering by timestamp, it is best practice to use a range using > and < operators rather than an exact value. <br/>Example: ?property=timestamp<2020-02-08T02:46:48.610862Z&property=timestamp>2020-01-01T02:46:48.610862Z. |
| `status` | The status of the action. A status can be any of the following: </li><li>`Allow` </li><li>`Deny` </li><li>`Failure` </li><li>`Success` </li></ul> |
| `action` | The type of action that was recorded for the event. An action can be any of the following: <ul><li>`Add` </li><li>`Create` </li><li>`Dataset activate` </li><li>`Dataset remove` </li><li>`Delete` </li><li>`Disable for profile` </li><li>`Enable` </li><li>`Enable for profile` </li><li>`Profile activate` </li><li>`Profile remove` </li><li>`remove` </li><li>`reset` </li><li>`segment activate` </li><li>`segment remove` </li><li>`update` </li></ul>  |
| `user` | The user who performed the event. |
| `assetType` | The type of Platform resource that the action was performed on. |

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
