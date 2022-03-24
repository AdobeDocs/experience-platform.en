---
title: Visitor identification via FPID
description: Learn how to consistently identify visitors via the Server API, by using the FPID
seo-description: Learn how to consistently identify visitors via the Server API, by using the FPID
keywords: edge network;gateway;api;visitor;identification;fpid
---

# Visitor identification via FPID

## Overview

[!DNL First-party IDs] (`FPIDs`) are device IDs generated, managed, and stored by customers. This gives customers control over identifying user devices. By sending `FPIDs`, the Edge Network does not generate a brand new `ECID` for
a request that does not contain one.

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

For requests that contain both a `FPID` and an `ECID`, the `ECID` already present in the request will take precedence over the one that could be generated from the `FPID`. Therefore, the Edge Network will use the `ECID` already provided and will not compute one from the given `FPID`.

In terms of device IDs, it is recommended that `server` datastreams use `FPID` as device ID. Other identities (i.e `EMAIL`) can also be provided within the request body, but the Edge Network requires that a primary identity is explicitly supplied. Primary identity is the base identity to which profile data will be stored in.

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
      "requestId":"<requestId>",
      "configId":"<configId>",
      "orgId":"<orgId>"
   }
}
```

## Visitor identification with `FPID`

To identify users via `FPID`, ensure that the `FPID` cookie has been sent prior to making any requests to the Edge Network. The `FPID` can be passed in a cookie or as part of the `identityMap` in the body of the request.

## Request with `FPID` passed as cookie header

```shell
curl --location --request POST 'https://edge.adobedc.net/ee/v2/interact?dataStreamId={Data Stream ID}' \
--header 'cookie: FPID=e98f38e6-6183-442d-8cd2-0e384f4c8aa8' \
--header 'Content-Type: application/json' \
--data-raw '{
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

## Request with `FPID` passed as `identityMap` field


```shell
curl --location --request POST 'https://edge.adobedc.net/ee/v2/interact?dataStreamId={Data Stream ID}' \
--header 'Content-Type: application/json' \
--data-raw '{
    "event": 
        {
            "xdm": {
                "identityMap":{
                    "FPID":[
                        {
                            "id":"e98f38e6-6183-442d-8cd2-0e384f4c8aa8",
                            "authenticatedState":"ambiguous",
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
