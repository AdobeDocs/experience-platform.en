---
title: Personalization overview
description: Learn how to use the Adobe Experience Platform Edge Network Server API to retrieve personalized content from Adobe personalization solutions.
exl-id: 11be9178-54fe-49d0-b578-69e6a8e6ab90
---
# Personalization overview

With the [!DNL Server API], you can retrieve personalized content from Adobe personalization solutions, including [Adobe Target](https://business.adobe.com/products/target/adobe-target.html), [Adobe Journey Optimizer](https://experienceleague.adobe.com/en/docs/journey-optimizer/using/ajo-home), and [Offer Decisioning](https://experienceleague.adobe.com/docs/offer-decisioning/using/get-started/starting-offer-decisioning.html).

Additionally, the [!DNL Server API] powers same-page and next-page personalization capabilities through Adobe Experience Platform personalization destinations, such as [Adobe Target](../destinations/catalog/personalization/adobe-target-connection.md) and the [custom personalization connection](../destinations/catalog/personalization/custom-personalization.md). To learn how to configure Experience Platform for same-page and next-page personalization, see the [dedicated guide](../destinations/ui/activate-edge-personalization-destinations.md).

When using the Server API, you must integrate the response provided by the personalization engine with the logic used to render content on your site. Unlike the [Web SDK](../web-sdk/home.md), the [!DNL Server API] does not have a mechanism to automatically apply content returned by Adobe personalization solutions.

## Terminology {#terminology}

Before working with Adobe personalization solutions, make sure to understand the following concepts:

* **Offer**: An offer is a marketing message that may have rules associated with it that specify who is eligible to see the offer.
* **Decision**: A decision (previously known as offer activity) informs the selection of an offer.
* **Schema**: The schema of a decision informs the type of offer returned.
* **Scope**: The scope of the decision.
  * In Adobe Target, this is the [!DNL mbox]. The [!DNL global mbox] is the `__view__` scope
  * For [!DNL Offer Decisioning], these are the Base64-encoded strings of JSON containing the activity and placement IDs you want the offer decisioning service to use to propose offers.

## The `query` object {#query-object}

Retrieving personalized content requires an explicit request query object for a request example. The query object has the following format:

```json
{
  "query": {
    "personalization": {
      "schemas": [
        "https://ns.adobe.com/personalization/html-content-item",
        "https://ns.adobe.com/personalization/json-content-item",
        "https://ns.adobe.com/personalization/redirect-item",
        "https://ns.adobe.com/personalization/dom-action"
      ],
      "decisionScopes": [
        "alloyStore",
        "siteWide",
        "__view__",
        "eyJhY3Rpdml0eUlkIjoieGNvcmU6b2ZmZXItYWN0aXZpdHk6MTFjZmIxZmE5MzM4MWFjYSIsInBsYWNlbWVudElkIjoieGNvcmU6b2ZmZXItcGxhY2VtZW50OjExNzUwMDk2MTJiMDEwMGMifQ"
      ],
      "surfaces": [
        "web://mywebpage.html/",
        "web://mywebpage.html/#sample-json-content"
      ]
    }
  }
}
```



| Attribute | Type |Required / Optional| Description |
| --- | --- | --- | ---|
| `schemas` | `String[]` | Required for Target personalization. Optional for Offer Decisioning. | List of schemas used in the decision, to select the type of offers returned.|
| `scopes` | `String[]` | Optional| List of decision scopes. Maximum 30 per request. |

## The handle object {#handle}

The personalized content retrieved from personalization solutions is presented in a `personalization:decisions` handle, which has the following format for its payload:

```json
{
   "type":"personalization:decisions",
   "payload":[
      {
         "id":"AT:eyJhY3Rpdml0eUlkIjoiMTMxMDEwIiwiZXhwZXJpZW5jZUlkIjoiMCJ9",
         "scope":"__view__",
         "scopeDetails":{
            "decisionProvider":"TGT",
            "activity":{
               "id":"131010"
            },
            "experience":{
               "id":"0"
            },
            "strategies":[
               {
                  "algorithmID":"0",
                  "trafficType":"0"
               }
            ]
         },
         "items":[
            {
               "id":"0",
               "schema":"https://ns.adobe.com/personalization/dom-action",
               "meta":{
                  "offer.name":"Default Content",
                  "experience.id":"0",
                  "activity.name":"Luma target reporting",
                  "activity.id":"131010",
                  "experience.name":"Experience A",
                  "option.id":"2",
                  "offer.id":"0"
               },
               "data":{
                  "type":"setHtml",
                  "format":"application/vnd.adobe.target.dom-action",
                  "content":"Customer Service not chrome",
                  "selector":"HTML > BODY > DIV.page-wrapper:eq(0) > FOOTER.page-footer:eq(0) > DIV.footer:eq(0) > DIV.links:eq(0) > DIV.widget:eq(0) > UL.footer:eq(0) > LI.nav:eq(1) > A:nth-of-type(1)",
                  "prehidingSelector":"HTML > BODY > DIV:nth-of-type(1) > FOOTER:nth-of-type(1) > DIV:nth-of-type(1) > DIV:nth-of-type(2) > DIV:nth-of-type(1) > UL:nth-of-type(1) > LI:nth-of-type(2) > A:nth-of-type(1)"
               }
            }
         ]
      }
   ]
}
```

| Attribute | Type | Description |
| --- | --- | --- |
| `payload.id` | String | The decision ID. |
| `payload.scope` | String | The decision scope that resulted in the proposed offers. |
| `payload.scopeDetails.decisionProvider`|String| Set to `TGT` when using Adobe Target.|
| `payload.scopeDetails.activity.id` | String | The unique ID of the offer activity. |
| `payload.scopeDetails.experience.id` | String | The unique ID of the offer placement. |
| `items[].id` | String | The unique ID of the offer placement. |
| `items[].data.id` | String | The ID of the proposed offer. |
| `items[].data.schema` | String | The schema of the content associated with the proposed offer. |
| `items[].data.format` | String | The format of the content associated with the proposed offer. |
| `items[].data.language` | String | An array of languages associated with the content from the proposed offer. |
| `items[].data.content` | String | Content associated with the proposed offer in the format of a string. |
| `items[].data.selector` | String | HTML selector used to identify the target DOM element for a DOM action offer. |
| `items[].data.prehidingSelector` | String | HTML selector used to identify the DOM element to be hidden while handling a DOM action offer. |
| `items[].data.deliveryUrl` | String | Image content associated with the proposed offer in the format of a URL. |
| `items[].data.characteristics` | String | Characteristics associated with the proposed offer in the format of a JSON object. |

## Sample API call {#sample-call}

**API format**

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
      }
   },
   "query":{
      "personalization":{
         "schemas":[
            "https://ns.adobe.com/personalization/html-content-item",
            "https://ns.adobe.com/personalization/json-content-item",
            "https://ns.adobe.com/personalization/redirect-item",
            "https://ns.adobe.com/personalization/dom-action"
         ],
         "decisionScopes":[
            "__view__",
            "eyJhY3Rpdml0eUlkIjoieGNvcmU6b2ZmZXItYWN0aXZpdHk6MTFjZmIxZmE5MzM4MWFjYSIsInBsYWNlbWVudElkIjoieGNvcmU6b2ZmZXItcGxhY2VtZW50OjExNzUwMDk2MTJiMDEwMGMifQ"
         ]
      }
   }
}'
```

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `configId` | String | Yes | The datastream ID. |
| `requestId` | String | No | Provide an external request tracing ID. If none is provided, the Edge Network will generate one for you and return it back in the response body / headers.|

### Response {#response}

Returns a `200 OK` status and one or more `Handle` objects, depending on the edge services that are enabled in the datastream configuration.

```json
{
   "requestId":"da20d11d-adac-458c-91ac-15bf4e420a15",
   "handle":[
      {
         "payload":[
            {
               "id":"AT:eyJhY3Rpdml0eUlkIjoiMTMxMDEwIiwiZXhwZXJpZW5jZUlkIjoiMCJ9",
               "scope":"__view__",
               "scopeDetails":{
                  "decisionProvider":"TGT",
                  "activity":{
                     "id":"131010"
                  },
                  "experience":{
                     "id":"0"
                  },
                  "strategies":[
                     {
                        "algorithmID":"0",
                        "trafficType":"0"
                     }
                  ]
               },
               "items":[
                  {
                     "id":"0",
                     "schema":"https://ns.adobe.com/personalization/dom-action",
                     "meta":{
                        "offer.name":"Default Content",
                        "experience.id":"0",
                        "activity.name":"Luma target reporting",
                        "activity.id":"131010",
                        "experience.name":"Experience A",
                        "option.id":"2",
                        "offer.id":"0"
                     },
                     "data":{
                        "type":"setHtml",
                        "format":"application/vnd.adobe.target.dom-action",
                        "content":"Customer Service not chrome",
                        "selector":"HTML > BODY > DIV.page-wrapper:eq(0) > FOOTER.page-footer:eq(0) > DIV.footer:eq(0) > DIV.links:eq(0) > DIV.widget:eq(0) > UL.footer:eq(0) > LI.nav:eq(1) > A:nth-of-type(1)",
                        "prehidingSelector":"HTML > BODY > DIV:nth-of-type(1) > FOOTER:nth-of-type(1) > DIV:nth-of-type(1) > DIV:nth-of-type(2) > DIV:nth-of-type(1) > UL:nth-of-type(1) > LI:nth-of-type(2) > A:nth-of-type(1)"
                     }
                  }
               ]
            }
         ],
         "type":"personalization:decisions"
      }
   ]
}
```

## Notifications {#notifications}

Notifications should be fired when a prefetched content or view has been visited or rendered to the end user. In order for notifications to be fired off for the right scope, make sure to keep track of the corresponding `id` for each scope. 

Notifications with the right `id` for the corresponding scopes are required to be fired in order for reporting to be reflected correctly.

**API format**

```http
POST /ee/v2/collect
```

### Request {#notifications-request}

```shell
curl -X POST "https://server.adobedc.net/ee/v2/collect?dataStreamId={DATASTREAM_ID}" 
-H "Authorization: Bearer {TOKEN}" 
-H "x-gw-ims-org-id: {ORG_ID}" 
-H "x-api-key: {API_KEY}"
-H "Content-Type: application/json"
-d '{
   "events":[
      {
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
            "timestamp":"2021-08-09T14:09:20.859Z",
            "_experience":{
               "decisioning":{
                  "propositions":[
                     {
                        "id":"AT:eyJhY3Rpdml0eUlkIjoiMTMxMDEwIiwiZXhwZXJpZW5jZUlkIjoiMCJ9",
                        "scope":"__view__",
                        "items":[
                           {
                              "id":"0"
                           }
                        ]
                     }
                  ]
               }
            }
         }
      }
   ]
}'
```

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `dataStreamId` | `String` | Yes | The ID of the datastream used by the data collection endpoint. |
| `requestId` | `String` | No | External external request tracing ID. If none is provided, the Edge Network will generate one for you and return it back in the response body / headers.|
| `silent` | `Boolean` | No | Optional boolean parameter indicating whether the Edge Network should return a `204 No Content` response with an empty payload. Critical errors are reported using the corresponding HTTP status code and payload.|

### Response {#notifications-response}

A successful response returns one of the following statuses, and a `requestID` if none was provided in the requst.

* `202 Accepted` when the request was successfully processed;
* `204 No Content` when the request was successfully processed and the `silent` parameter was set to `true`;
* `400 Bad Request` when the request was not properly formed (e.g., the mandatory primary identity was not found).

```json
{
  "requestId": "f567a988-4b3c-45a6-9ed8-f283188a445e"
}
```
