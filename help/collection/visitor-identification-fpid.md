---
title: Visitor identification via FPID
description: Learn how to consistently identify visitors via the Server API, by using the FPID
seo-description: Learn how to consistently identify visitors via the Server API, by using the FPID
keywords: edge network;gateway;api;visitor;identification;fpid
exl-id: c61d2e7c-7b5e-4b14-bd52-13dde34e32e3
---
# Visitor identification via FPID

[!DNL First-party IDs] (`FPIDs`) are device IDs generated, managed, and stored by customers. This gives customers control over identifying user devices. By sending `FPIDs`, the Edge Network does not generate a brand new `ECID` for a request that does not contain one.

The `FPID` can be included in the API request body as part of the `identityMap` or it can be sent as a cookie.

An `FPID` can be deterministically translated into an `ECID` by the Edge Network, so `FPID` identities are fully compatible with Experience Cloud solutions. Obtaining an `ECID` from a specific `FPID` always yields the same result, so users will have a consistent experience.

The `ECID` obtained this way can be retrieved via an `identity.fetch` query:

```json
{
   "query":{
      "identity":{
         "fetch":[
            "ECID"
         ]
      }
   }
}
```

For requests that contain both an `FPID` and an `ECID`, the `ECID` already present in the request will take precedence over the one that could be generated from the `FPID`. In other words, the Edge Network uses the `ECID` already provided and the `FPID` is ignored. A new `ECID` is only generated when an `FPID` is provided on its own.

In terms of device IDs, the `server` datastreams should use `FPID` as device ID. Other identities (i.e `EMAIL`) can also be provided within the request body, but the Edge Network requires that a primary identity is explicitly supplied. Primary identity is the base identity to which profile data will be stored in.

>[!NOTE]
>
>Requests that have no identity, respectively no primary identity explicitly set within the request body, will fail.

The following `identityMap` field group is correctly formed for a `server` datastream request:

```json
{
   "identityMap":{
      "FPID":[
         {
            "id":"123e4567-e89b-12d3-a456-426614174000",
            "authenticatedState":"ambiguous",
            "primary":true
         }
      ],
      "EMAIL":[
         {
            "id":"email@mail.com",
            "authenticatedState":"authenticated"
         }
      ]
   }
}
```

The following `identityMap` field group will result in an error response when set on a `server` datastream request:

```json
{
   "identityMap":{
      "FPID":[
         {
            "id":"123e4567-e89b-12d3-a456-426614174000",
            "authenticatedState":"ambiguous"
         }
      ],
      "EMAIL":[
         {
            "id":"email@mail.com",
            "authenticatedState":"authenticated"
         }
      ]
   }
}
```

The error response returned by the Edge Network in this case is similar to the following:

```json
{
   "type":"https://ns.adobe.com/aep/errors/EXEG-0306-400",
   "status":400,
   "title":"No primary identity set in request (event)",
   "detail":"No primary identity found in the input event. Update the request accordingly to your schema and try again.",
   "report":{
      "requestId":"{REQUEST_ID}",
      "configId":"{CONFIG_ID}",
      "orgId":"{ORG_ID}"
   }
}
```

## Visitor identification with `FPID`

To identify users via `FPID`, ensure that the `FPID` cookie has been sent prior to making any requests to the Edge Network. The `FPID` can be passed in a cookie or as part of the `identityMap` in the body of the request.

<!--

## Request with `FPID` passed as cookie header

```shell
curl -X POST 'https://edge.adobedc.net/v2/interact?dataStreamId={Data Stream ID}' \
-H 'cookie: FPID=e98f38e6-6183-442d-8cd2-0e384f4c8aa8' \
-H 'Content-Type: application/json' \
-d '{
    "event": 
        {
            "xdm": {
                "web": {
                    "webPageDetails": {
                        "URL": "https://alloystore.dev"
                    },
                    "webReferrer": {
                        "URL": ""
                    }
                },
                "device": {
                    "screenHeight": 1440,
                    "screenWidth": 3440,
                    "screenOrientation": "landscape"
                },
                "environment": {
                    "type": "browser",
                    "browserDetails": {
                        "viewportWidth": 1907,
                        "viewportHeight": 545
                    }
                },
                "placeContext": {
                    "localTime": "2022-03-21T21:32:59.991-06:00",
                    "localTimezoneOffset": 360
                },
                "timestamp": "2022-03-22T03:32:59.992Z",
                "implementationDetails": {
                    "name": "https://ns.adobe.com/experience/alloy/reactor",
                    "version": "1.0",
                    "environment": "serverapi"
                }
            }
        },
    "query": {
        "identity": {
            "fetch": [
                "ECID"
            ]
        }
    },
    "meta":
        {
            "state":
            {
                "domain": "alloystore.dev",
                "cookiesEnabled": true
            }
        }
}'
```
-->

## Request with `FPID` passed as `identityMap` field

The example below passes the [!DNL FPID] as an `identityMap` parameter.

```shell
curl -X POST "https://server.adobedc.net/v2/interact?dataStreamId={DATASTREAM_ID}"
-H "Authorization: Bearer {TOKEN}"
-H "x-gw-ims-org-id: {ORG_ID}"
-H "x-api-key: {API_KEY}"
-H "Content-Type: application/json"
-d '{
   "event": {
      "xdm": {
         "identityMap": {
            "FPID": [
               {
                  "id": "e98f38e6-6183-442d-8cd2-0e384f4c8aa8",
                  "authenticatedState": "ambiguous",
                  "primary": true
               }
            ]
         },
         "web": {
            "webPageDetails": {
               "URL": "https://alloystore.dev"
            },
            "webReferrer": {
               "URL": ""
            }
         },
         "device": {
            "screenHeight": 1440,
            "screenWidth": 3440,
            "screenOrientation": "landscape"
         },
         "environment": {
            "type": "browser",
            "browserDetails": {
               "viewportWidth": 1907,
               "viewportHeight": 545
            }
         },
         "placeContext": {
            "localTime": "2022-03-21T21:32:59.991-06:00",
            "localTimezoneOffset": 360
         },
         "timestamp": "2022-03-22T03:32:59.992Z",
         "implementationDetails": {
            "name": "https://ns.adobe.com/experience/alloy/reactor",
            "version": "1.0",
            "environment": "serverapi"
         }
      }
   },
   "query": {
      "identity": {
         "fetch": [
            "ECID"
         ]
      }
   }
}'
```
