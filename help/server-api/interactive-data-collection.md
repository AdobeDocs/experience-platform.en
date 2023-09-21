---
title: Interactive data collection
description: Learn how the Adobe Experience Platform Edge Network Server API performs interactive data collection.
exl-id: 1b06e755-b6a9-42dd-96c1-98ad67e7d222
---
# Interactive data collection

## Overview {#overview}

Interactive data collection endpoints receive a single event and are used when the client expects a response to be returned by the Adobe Experience Platform Edge Network server. These endpoints can also return content from other Edge Network services, while performing data collection.

The server response includes one or more `Handle` objects, as shown below.

## API call example

### API format {#format}

```http
POST /ee/v2/interact
```

### Request {#request}

```shell
curl -X POST "https://server.adobedc.net/ee/v2/interact?dataStreamId={DATASTREAM_ID}" 
-H "Authorization: Bearer {TOKEN}" 
-H "x-gw-ims-org-id: {ORG_ID}" 
-H "x-api-key: {API_KEY}" 
-H "Content-Type: application/json" 
-d '{
   "event": {
      "xdm": {
         "identityMap": {
            "Email_LC_SHA256": [
               {
                  "id": "0c7e6a405862e402eb76a70f8a26fc732d07c32931e9fae9ab1582911d2e8a3b",
                  "primary": true
               }
            ]
         },
         "eventType": "web.webpagedetails.pageViews",
         "web": {
            "webPageDetails": {
               "URL": "https://alloystore.dev/",
               "name": "home-demo-Home Page"
            }
         },
         "timestamp": "2021-08-09T14:09:20.859Z"
      },
      "data": {
         "prop1": "custom value"
      }
   }
}'
```

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `dataStreamId` | `String` | Yes. | Datastream ID. |
| `requestId` | `String` | No | Provide a client random ID for correlating internal server requests. If none is provided, the Edge Network will generate one and return it in the response.|

### Response {#response}

A successful response returns HTTP status `200 OK`, with one or more `Handle` objects, depending on the real-time edge services enabled in the datastream configuration.

```json
{
   "requestId": "c85402f5-83a1-4fb3-abdd-f4c17bf6dd49",
   "handle": []
}
```
