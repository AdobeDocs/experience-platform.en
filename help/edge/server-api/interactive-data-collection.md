---
title: Interactive data collection
description: Learn how the Edge Network Gateway API performs interactive data collection
seo-description: Learn how the Edge Network Gateway API performs interactive data collection
keywords: data collection;collection;edge network gateway;api;interactive data collection
---

# Interactive data collection

## Overview {#overview}

Interactive data collection endpoints receive a single event and are used when the client expects a response to be returned by the Edge Network Gateway server. These endpoints can also return content from other Experience Edge services, while performing data collection.

The server response includes one or more `Handle` objects, as shown below.

## API format {#api-format}

```http
POST /ee/v2/interact
```

## Request {#request}

```json
curl -X POST "https://server.adobedc.net/ee/v2/interact?dataStreamId=$DATASTREAM_ID" \
-H "Authorization: Bearer {ACCESS_TOKEN}" \
-H "x-gw-ims-org-id: {IMS_ORG_ID}" \
-H "x-api-key: {API_KEY}" \
-H "Content-Type: application/json" \
--data-raw '{
   "event":{
      "xdm":{
         "identityMap":{
            "Email_LC_SHA256":[
               {
                  "id":"0c7e6a405862e402eb76a70f8a26fc732d07c32931e9fae9ab1582911d2e8a3b",
                  "primary":true
               }
            ]
         },
         "eventType":"web.webpagedetails.pageViews",
         "web":{
            "webPageDetails":{
               "URL":"https://alloystore.dev/",
               "name":"home-demo-Home Page"
            }
         },
         "timestamp":"2021-08-09T14:09:20.859Z"
      },
      "data":{
         "prop1":"custom value"
      }
   }
}'
```

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `configId` | `String` | Yes, for V1 APIs | Datastream ID. |
| `dataStreamId` | `String` | Yes, for V2 APIs | Datastream ID. |
| `requestId` | `String` | No | Provide a client random ID for correlating internal server requests. If none is provided, the Experience Edge Network Gateway will generate one and return it in the response.|

## Response {#response}

A successful response returns HTTP status `200 OK`, with one or more `Handle` objects, depending on the real-time edge services enabled in the datastream configuration.

```json
{
   "requestId":"f567a988-4b3c-45a6-9ed8-f283188a445e",
   "handle":[
      {
         "payload":[
            {
               "collect":{
                  "val":"y"
               }
            }
         ],
         "type":"consent:preferences"
      },
      {
         "payload":[
            {
               "key":"kndctr_53A16ACB5CC1D3760A495C99_AdobeOrg_consent_check",
               "value":"1",
               "maxAge":7200
            }
         ],
         "type":"state:store"
      }
   ]
}
```
