---
title: Visitor identification via ECID
description: Learn how to consistently identify visitors via the Server API, by using the ECID
seo-description: Learn how to consistently identify visitors via the Server API, by using the ECID
keywords: edge network;gateway;api;visitor;identification;ecid
---

# Visitor identification via ECID

## Overview

The `ECID` is a universal and persistent device ID that identifies your visitors across all Adobe Experience Cloud solutions, like Adobe Experience Platform, Adobe Target, Adobe Analytics or Adobe Audience Manager.

In a web context, this is also known as a first-party device identifier, as it is persisted in a cookie on the first-party domain (the customer's domain).

The `ECID` is automatically managed by the Edge Network, for all non-server interactions. While the [!UICONTROL Experience Edge Identity Protocol] can be used for `server` datastreams as well, for simplicity, Adobe recommends using an `FPID` instead.

## Reading the `ECID` {#reading-ecid}

While the `ECID` is entirely managed by the Edge Network, its value can be retrieved via an `identity.fetch` query:

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

The server will respond with an `identity:result` handle which contains the `ECID`:

```json
{
   "requestId":"f5abf988-15d1-4463-a3b8-59aa0709a808",
   "handle":[
      {
         "payload":[
            {
               "id":"39323497550643217774132664089239114822",
               "namespace":{
                  "code":"ECID"
               }
            }
         ],
         "type":"identity:result"
      }
   ]
}
```

When used in the first request to the Edge Network, `identity.fetch` will return the new `ECID` value. For subsequent calls it will simply read and return the stored identity.

## Visitor identification with `ECID`

There are two options to consistently identify visitors based on `ECID`.

1. Store the `ECID` value in the cookie sent to the Edge Network, on each subsequent request.
2. Include the `ECID` value in the `identityMap` of each subsequent request, in the `ECID` namespace.

The initial request includes the query command to fetch an `ECID`. To ensure consistency in identifying the end-user, it requires that the `ECID` value returned in the initial response be written to a cookie on the end-user device.

### Initial request

```shell
curl --location --request POST 'https://edge.adobedc.net/ee/v2/interact?dataStreamId={Data Stream ID}' \
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
    }
}'
```

### Initial response

```json
{
    "requestId": "4fe9bf7e-ebb6-43d4-9ddb-0cdbebe59096",
    "handle": [
        {
            "payload": [
                {
                    "id": "24816829704426489597507966523344957799",
                    "namespace": {
                        "code": "ECID"
                    }
                }
            ],
            "type": "identity:result"
        }
    ]
}
```

### Subsequent request with `ECID` passed as cookie header

The cookie containing the `ECID` is included in the request header. Thea header must follow this format:

* Cookie name: `AMCV_{IMS_ORG_ID}`
* Cookie value: `MCMID|<ECID value from initial request>`

```shell
curl --location --request POST 'https://edge.adobedc.net/ee/v2/interact?dataStreamId={Data Stream ID}' \
--header 'cookie: AMCV_53A16ACB5CC1D3760A495C99%40AdobeOrg=MCMID|24816829704426489597507966523344957799;' \
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
    "meta": {
            "state":
            {
                "domain": "alloystore.dev",
                "cookiesEnabled": true
            }
        }
}'
```

### Subsequent request with `ECID` passed as `identityMap` field

```shell
curl --location --request POST 'https://edge.adobedc.net/ee/v2/interact?dataStreamId={Data Stream ID}' \
--header 'Content-Type: application/json' \
--data-raw '{
    "event": 
        {
            "xdm": {
                "identityMap":{
                    "ECID":[
                        {
                            "id":"55613368189701342632255821452918751312",
                            "authenticatedState":"ambiguous"
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