---
title: Retrieve personalization content from other Adobe solutions
description: Learn how to use the Adobe Experience Platform Edge Network Server API to retrieve personalized content from Adobe personalization solutions
seo-description: Learn how to use the Adobe Experience Platform Edge Network Server API to retrieve personalized content from Adobe personalization solutions
keywords: personalization; server api; Adobe Experience Platform Edge Network; retrieve personalization
---

# Retrieve personalization content from Adobe solutions

With the [!DNL Server API], you can retrieve personalized content from Adobe personalization solutions, including [Adobe Target](https://business.adobe.com/products/target/adobe-target.html) and [Offer Decisioning](https://experienceleague.adobe.com/docs/offer-decisioning/using/get-started/starting-offer-decisioning.html?lang=en).

## Terminology {#terminology}

Before working with Adobe personalization solutions, make sure to understand the following concepts:

* **Offer**: An offer is a marketing message that may have rules associated with it that specify who is eligible to see the offer.
* **Decision**: A decision (previously known as offer activity) informs the selection of an offer.
* **Schema**: The schema of a decision informs the type of offer returned.
* **Scope**: The scope of the decision.
  * In Adobe Target, this is the `mBox`. The global `mBox` is the `__view__` scope
  * For [!DNL Offer Decisioning], these are the Base64 encoded strings of JSON containing the activity and placement IDs you want the offer decisioning service to use to propose offers.

## Query {#query}

Retrieving personalized content requires an explicit request query object for a request example. The query object has the following format:

```json
{
   "query":{
      "personalization":{
         "schemas":[
            "https://ns.adobe.com/personalization/html-content-item",
            "https://ns.adobe.com/personalization/json-content-item",
            "https://ns.adobe.com/personalization/redirect-item",
            "https://ns.adobe.com/personalization/dom-action"
         ],
         "decisionScopes":[
            "alloyStore",
            "siteWide",
            "__view__",
            "eyJhY3Rpdml0eUlkIjoieGNvcmU6b2ZmZXItYWN0aXZpdHk6MTFjZmIxZmE5MzM4MWFjYSIsInBsYWNlbWVudElkIjoieGNvcmU6b2ZmZXItcGxhY2VtZW50OjExNzUwMDk2MTJiMDEwMGMifQ"
         ]
      }
   }
}
```

| Attribute | Type | Description |
| --- | --- | --- |
| `schemas` | `String[]` | *Optional*. List of schemas used in the decision, to select the type of offers returned. |
| `scopes` | `String[]` | *Optional*. List of decision scopes. Maximum 30 per request. |

## Handle {#handle}

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
| `payload.scopeDetails.decisionProvider`|||
| `payload.scopeDetails.activity.id` | String | The unique ID of the offer activity. |
| `payload.scopeDetails.experience.id` | String | The unique ID of the offer placement. |
| `payload.scopeDetails.strategies.algorithmID` | String |  |
| `payload.scopeDetails.strategies.trafficType` | String |  |
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

## Retrieve content {#retrieve-content}

### API format {#api-format}

```http
POST /ee/v2/interact
```

### Request {#request}

```shell
curl -X POST "https://server.adobedc.net/ee/v2/interact?configId=$DATASTREAM_ID" \
-H "Authorization: Bearer {ACCESS_TOKEN}" \
-H "x-gw-ims-org-id: {IMS_ORG}" \
-H "x-api-key: {API_KEY}" \
-H "Content-Type: application/json" \
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

## Notifications

Notifications should be fired when a prefetched content or view has been visited or rendered to the end user. In order for notifications to be fired off for the right scope, make sure to keep track of the corresponding `id` for each scope. 

Notifications with the right `id` for the corresponding scopes are required to be fired in order for reporting to be reflected correctly.

### API format

```http
POST /ee/v1/collect
```

### Request

```shell
curl -X POST "https://server.adobedc.net/ee/v1/collect?configId=$DATASTREAM_ID" \
-H "Authorization: Bearer {ACCESS_TOKEN}" \
-H "x-gw-ims-org-id: {IMS_ORG}" \
-H "x-api-key: {API_KEY}" \
-H "Content-Type: application/json" \
--data-raw '{
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
| `configId` | String | Yes | The datastream ID. |
| `requestId` | String | No | Provide an external request tracing ID. If none is provided, the Edge Network will generate one for you and return it back in the response body / headers.|

### Response

A successful request returns a `204 No Content` status.
