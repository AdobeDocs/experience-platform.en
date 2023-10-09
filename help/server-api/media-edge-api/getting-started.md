---
solution: Experience Platform
title: Getting started with Media Edge APIs
description: Getting started with Media Edge APIs
exl-id: 76022dea-408b-4d8e-abd4-1a6de81beceb
---
# Media Edge API getting started

This guide provides instructions for making successful initial interactions with the Media Edge API service. This includes starting a media session and then tracking events that are sent to an Adobe Experience Platform solution such as Customer Journey Analytics (CJA). The Media Edge API service is initiated with the Session Start endpoint. Once the session is started, one or more of the following events can be tracked:

* `play` 
* `ping`
* `bitrateChange`
* `bufferStart`
* `pauseStart`
* `adBreakStart`
* `adStart`
* `adComplete`
* `adSkip`
* `adBreakComplete`
* `chapterStart`
* `chapterComplete`
* `chapterSkip`
* `error`
* `sessionEnd`
* `sessionComplete`
* `statesUpdate`

Each event has its own endpoint. All Media Edge API endpoints are POST methods, with JSON request bodies for event data. For more information on Media Edge API endpoints, parameters, and examples, see the [Media Edge Swagger file](swagger.md).

This guide shows how to track the following events after starting the session:

* [Buffer Start](#buffer-start-event-request)
* [Play](#play-event-request)
* [Session Complete](#session-complete-event-request)

## Implementing the API {#implement-api}

Apart from minor differences in the model and paths called, the Media Edge API has the same implementation as the [Media Collection API](https://experienceleague.adobe.com/docs/media-analytics/using/implementation/streaming-media-apis/mc-api-overview.html?lang=en). The implementation details of Media Collection remain valid for Media Edge API, as described in the following documentation:

* [Setting the HTTP request type in your player](https://experienceleague.adobe.com/docs/media-analytics/using/implementation/streaming-media-apis/mc-api-impl/mc-api-sed-pings.html?lang=en)
* [Sending ping events](https://experienceleague.adobe.com/docs/media-analytics/using/implementation/streaming-media-apis/mc-api-impl/mc-api-sed-pings.html?lang=en)
* [Timeout conditions](https://experienceleague.adobe.com/docs/media-analytics/using/implementation/streaming-media-apis/mc-api-impl/mc-api-timeout.html?lang=en)
* [Controlling the order of events](https://experienceleague.adobe.com/docs/media-analytics/using/implementation/streaming-media-apis/mc-api-impl/mc-api-ctrl-order.html?lang=en)

## Authorization {#authorization}

Currently, Media Edge APIs do not require Authorization headers in their requests.


## Starting the session {#start-session}

To start the media session on the server, use the Session Start endpoint. A successful response includes a `sessionId`, which is a required parameter for subsequent event requests.
 
Before making the session start request, you will need the following:

* The `datastreamId`--a required  parameter for the POST Session Start request. To retrieve a `datastreamId`, see [Configure a datastream](https://experienceleague.adobe.com/docs/experience-platform/datastreams/configure.html?lang=en).

* A JSON object for the request payload that contains the minimum data required (as shown in the example request below).

Once you have this information, provide the `datastreamId` in the following call:

**POST**  `https://edge.adobedc.net/ee-pre-prd/va/v1/sessionStart?configId={datastream ID} \`

### Example request

The following example shows a session start cURL request:

```
curl -i --request POST '{uri}/ee/va/v1/sessionStart?configId={dataStreamId}' \
--header 'Content-Type: application/json' \
--data-raw '{
  "events": [
    {
      "xdm": {
        "eventType": "media.sessionStart",
        "mediaCollection": {
          "sessionDetails": {
            "name": "Media Analytics API Sample",
            "playerName": "sample-html5-api-player",
            "contentType": "VOD",
            "length": 60,
            "channel": "sample-channel",
            "appVersion": "va-api-1.0.0"
          },
          "playhead": 0
        }
      }
    }
  ]
}'
``` 

In the example request above, the `eventType` value contains the prefix `media.` according to the [Experience Data Model (XDM)](https://experienceleague.adobe.com/docs/experience-platform/xdm/home.html) for specifying domains.

Also, the datatypes mapping for `eventType` in the example above are as follows:

| eventType | datatypes |
| -------- | ------ |
| media.SessionStart | [sessionDetails](https://github.com/adobe/xdm/blob/master/docs/reference/datatypes/sessiondetails.schema.md) |
| media.chapterStart | [chapterDetails](https://github.com/adobe/xdm/blob/master/docs/reference/datatypes/chapterdetails.schema.md) |
| media.adBreakStart | [advertisingPodDetails](https://github.com/adobe/xdm/blob/master/docs/reference/datatypes/advertisingpoddetails.schema.md) |
| media.adStart | [advertisingDetails](https://github.com/adobe/xdm/blob/master/docs/reference/datatypes/advertisingdetails.schema.md) |
| media.error | [errorDetails](https://github.com/adobe/xdm/blob/master/docs/reference/datatypes/errordetails.schema.md) |
| media.statesUpdate | [statesStart](https://github.com/adobe/xdm/blob/master/docs/reference/datatypes/mediadetails.schema.md#xdmstatesstart): Array[playerStateData], [statesEnd](https://github.com/adobe/xdm/blob/master/docs/reference/datatypes/mediadetails.schema.md#xdmstatesend): Array[playerStateData] |
| media.sessionStart, media.chapterStart, media.adStart | [customMetadata](https://github.com/adobe/xdm/blob/master/docs/reference/datatypes/mediadetails.schema.md#xdmcustommetadata) |
|all | [qoeDataDetails](https://github.com/adobe/xdm/blob/master/docs/reference/datatypes/qoedatadetails.schema.md) |

### Example response

The following example shows a successful response for the session start request:

```
HTTP/2 200
x-request-id: 99603f5c-95cf-49ad-9afb-0ba6c5867fd7
x-rate-limit-remaining: 599
vary: Origin
date: Tue, 07 Mar 2023 14:37:58 GMT
x-konductor: 23.3.2:367bc7dc
x-adobe-edge: IRL1;6
server: jag
content-type: application/json;charset=utf-8
strict-transport-security: max-age=31536000; includeSubDomains
cache-control: no-cache, no-store, max-age=0, no-transform
x-xss-protection: 1; mode=block
x-content-type-options: nosniff

{
    "requestId": "df14bca1-ba0f-4574-ae80-a4e24a960c00",
    "handle": [
        {
            "payload": [
                {
                    "sessionId": "af8bb22766e458fa0eef98c48ea42c9e351c463318230e851a19946862020333"
                }
            ],
            "type": "media-analytics:new-session",
            "eventIndex": 0
        },
        {
            "payload": [
                {
                    "key": "kndctr_6D9FE18C5536A5E90A4C98A6_AdobeOrg_cluster",
                    "value": "irl1",
                    "maxAge": 1800
                },
                {
                    "key": "kndctr_6D9FE18C5536A5E90A4C98A6_AdobeOrg_identity",
                    "value": "CiY1MTkxMDM4OTc1MzkwMTY4NTQ1NjAxNDg4OTgzODU5MTAzMDcyMVIPCKKt8KnsMBgBKgRJUkwx8AGirfCp7DA=",
                    "maxAge": 34128000
                }
            ],
            "type": "state:store"
        }
    ]
}
```

In the example response above, the `sessionId` is shown as `af8bb22766e458fa0eef98c48ea42c9e351c463318230e851a19946862020333`. You will use this ID in subsequent event requests as a required parameter.

For more information on Session Start endpoint parameters and examples, see the [Media Edge Swagger](swagger.md) file.

For more information on XDM media data parameters, see [Media Details Information Schema](https://github.com/adobe/xdm/blob/master/docs/reference/datatypes/mediadetails.schema.md#xdmplayhead). 


## Buffer Start event request {#buffer-start}

The Buffer Start event signals when buffering starts on the media player. Buffer Resume is not an event in the API service; instead, it is inferred when a play event is sent after the Buffer Start. To make a Buffer Start event request, use your `sessionId` in the payload of a call to the following endpoint:

**POST**  `https://edge.adobedc.net/ee-pre-prd/va/v1/bufferStart \`

### Example request

The following example shows a Buffer Start cURL request:

```
curl -X 'POST' \
  'https://edge.adobedc.net/ee-pre-prd/va/v1/bufferStart' \
  -H 'accept: */*' \
  -H 'Content-Type: application/json' \
  -d '{
  "events": [
    {
      "xdm": {
        "eventType": "media.bufferStart",
        "mediaCollection": {
          "sessionID": "af8bb22766e458fa0eef98c48ea42c9e351c463318230e851a19946862020333",
          "playhead": 25
        },
        "timestamp": "2022-03-04T13:39:00+00:00"
      }
    }
  ]
}'
```

In the example request above, the same `sessionId` that is returned in the previous call is used as the required parameter in the Buffer Start request.

The successful respone indicates a status of 200 and does not include any content.

For more information on the Buffer Start endpoint parameters and examples, see the [Media Edge Swagger](swagger.md) file.


## Play event request {#play-event}

The Play event is sent when the media player changes its state to "playing" from another state, such as "buffering," "paused," or "error." To make a Play event request, use your `sessionId` in the payload of a call to the following endpoint:

**POST**  `https://edge.adobedc.net/ee-pre-prd/va/v1/play \`

### Example request

The following example shows a Play cURL request:

```
curl -X 'POST' \
  'https://edge.adobedc.net/ee-pre-prd/va/v1/play' \
  -H 'accept: */*' \
  -H 'Content-Type: application/json' \
  -d '{
  "events": [
    {
      "xdm": {
        "eventType": "media.play",
        "mediaCollection": {
          "sessionID": "af8bb22766e458fa0eef98c48ea42c9e351c463318230e851a19946862020333",
          "playhead": 25
        },
        "timestamp": "2022-03-04T13:39:00+00:00"
      }
    }
  ]
}'
```

The successful respone indicates a status of 200 and does not include any content.

For more information on Play endpoint parameters and examples, see the [Media Edge Swagger](swagger.md) file.

## Session Complete event request {#session-complete}

The Session Complete event is sent when the end of the main content is reached. To make a Session Complete event request, use your `sessionId` in the payload of a call to the following endpoint:

**POST**  `https://edge.adobedc.net/ee-pre-prd/va/v1/sessionComplete \`

### Example request

The following example shows a Session Complete cURL request:

```
curl -X 'POST' \
  'https://edge.adobedc.net/ee-pre-prd/va/v1/sessionComplete' \
  -H 'accept: */*' \
  -H 'Content-Type: application/json' \
  -d '{
  "events": [
    {
      "xdm": {
        "eventType": "media.sessionComplete",
        "mediaCollection": {
          "sessionID": "af8bb22766e458fa0eef98c48ea42c9e351c463318230e851a19946862020333",
          "playhead": 25
        },
        "timestamp": "2022-03-04T13:39:00+00:00"
      }
    }
  ]
}'
```

The successful respone indicates a status of 200 and does not include any content.

For more information on Session Complete endpoint parameters and examples, see the [Media Edge Swagger](swagger.md) file.

## Response codes

The following table shows the possible response codes resulting from Media Edge API requests:

| Status | Description |
| ---------- | --------- |
| 200 | Session was successfully created |
| 207 | Problem with one of the services that connect to Edge Network (see more in the [troubleshooting guide](troubleshooting.md)) |
| 400-level | Bad request |
| 500-level | Server error |

## More help on this feature

* [Media Edge Troubleshooting guide](troubleshooting.md)
* [Media Edge API overview](overview.md)
