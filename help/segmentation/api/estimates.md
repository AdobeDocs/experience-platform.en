---
keywords: Experience Platform;home;popular topics
solution: Experience Platform
title: Estimates
topic: developer guide
---

# Estimates

intro

- Retrieve the results of a specific estimate job

## Getting started

The API endpoints used in this guide are part of the Segmentation API. Before continuing, please review the [Segmentation developer guide](./getting-started.md).

In particular, the [getting started section](./getting-started.md#getting-started) of the Segmentation developer guide includes links to related topics, a guide to reading the sample API calls in the document, and important information regarding required headers that are needed to successfully make calls to any Experience Platform API.

## Retrieve the results of a specific estimate job

You can retrieve details of a specific estimate job by making a GET request to the `/estimate` endpoint and providing the estimate job's `id` value in the request path.

**API format**

```http
GET /estimate/{PREVIEW_ID}
```

- `{PREVIEW_ID}`: The `id` value of the estimate job you want to retrieve.

**Request**

The following request retrieves the results of a specific estimate job.

//need to get a preview ID
```shell
curl -X GET https://platform.adobe.io/data/core/ups/estimate/{PREVIEW_ID} \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'x-gw-ims-org-id: {IMS_ORG}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns HTTP status 200 with details of the estimate job.

```json
{
  "estimatedSize": 0,
  "numRowsToRead": 1,
  "state": "RESULT_READY",
  "profilesReadSoFar": 1,
  "standardError": 0,
  "error": {
    "description": "",
    "traceback": ""
  },
  "profilesMatchedSoFar": 0,
  "totalRows": 1,
  "confidenceInterval": "95%",
  "_links": {
    "preview": "https://platform.adobe.io/data/core/ups/preview/app-32be0328-3f31-4b64-8d84-acd0c4fbdad3/execution/0?previewQueryId=e890068b-f5ca-4a8f-a6b5-af87ff0caac3"
  }
}
```

## Next steps

Now that you know how to retrieve estimate job results, you can better 