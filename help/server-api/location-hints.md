---
title: Location hints
description: This article explains how location hints work in Edge Network Server API, so that end user requests can always be routed to the same server.
---

# Location hints

## Overview {#overview}

The [!DNL Adobe Experience Platform Edge Network] uses several globally-distributed servers to ensure fast response times regardless of the end user location. It also uses DNS-based routing to ensure that requests are always routed to the Edge Network location that is closest to the end users.

If end users connect to a VPN, or switch network types on their mobile devices over the course of a session, Edge Network requests can often be routed to a different location. Mid-session routing between servers can be problematic, as Adobe Experience Platform and Adobe Experience Cloud solutions store end user profile information on the Edge Network.

This is where location hints come into play.

To ensure end users always interact with the Edge Network regional server that contains their current profile data, the location hints functionality ensures that all requests to the Edge Network are sent to the same server where the first request of a session was made. This helps users have a consistent experience, no matter what network changes they may experience over the course of a session.  

## Location hints usage

Location hints are included in the response of the initial Edge Network request, and in all subsequent requests, as shown in the example below:

```json
{
   "payload":[
      {
         "scope":"Target",
         "hint":"35",
         "ttlSeconds":1800
      },
      {
         "scope":"AAM",
         "hint":"9",
         "ttlSeconds":1800
      },
      {
         "scope":"EdgeNetwork",
         "hint":"or2",
         "ttlSeconds":1800
      }
   ],
   "type":"locationHint:result"
}
```

The `EdgeNetwork` scope contains all the relevant information that the Edge Network needs to route subsequent requests accordingly. In the response of the initial and each subsequent request to the Edge network, there will be a section in the handle with a type of `locationHint:result`.

The hint associated with the `EdgeNetwork` scope can contain one of the following values:

* `or2`
* `va6`
* `irl1`
* `ind1`
* `jpn3`
* `sgp3`
* `aus3`

**API format**

```http
POST 'https://edge.adobedc.net/ee/{LOCATION_HINT}/v2/interact?dataStreamId={DataStream_ID}'
```

**Request**

To ensure subsequent requests are routed correctly, insert the location hint in the URL path of subsequent API calls between the base path, typically `ee`, and `v2` API version.

```shell
curl -X POST 'https://edge.adobedc.net/ee/or2/v2/interact?dataStreamId={Data_Stream_ID}' \
-H 'cookie: FPID=e98f38e6-6183-442d-8cd2-0e384f4c8aa8' \
-H 'Content-Type: application/json' \
-d '
{
   "event":{
      "xdm":{
         "web":{
            "webPageDetails":{
               "URL":"https://alloystore.dev"
            },
            "webReferrer":{
               "URL":""
            }
         },
         "device":{
            "screenHeight":1440,
            "screenWidth":3440,
            "screenOrientation":"landscape"
         },
         "environment":{
            "type":"browser",
            "browserDetails":{
               "viewportWidth":1907,
               "viewportHeight":545
            }
         },
         "placeContext":{
            "localTime":"2022-03-21T21:32:59.991-06:00",
            "localTimezoneOffset":360
         },
         "timestamp":"2022-03-22T03:32:59.992Z",
         "implementationDetails":{
            "name":"https://ns.adobe.com/experience/server",
            "version":"1.0",
            "environment":"server"
         }
      }
   },
   "query":{
      "identity":{
         "fetch":[
            "ECID"
         ]
      }
   },
   "meta":{
      "state":{
         "domain":"alloystore.dev",
         "cookiesEnabled":true
      }
   }
}'
```

## Storing location hints in cookies {#storing-hints-in-cookies}

To ensure the location hint returned by the Edge Network persists for the duration of the session, you can store the location hint value in a cookie, along with the cookie lifetime, which is contained in the `ttlSeconds` field (typically 1800 seconds).

As with most cookies, you should extend the lifetime of this cookie each time there is a response from the Edge Network. To ensure maximum compatibility with the Web SDK, use the cookie name `kndctr_{IMSORG}_AdobeOrg_cluster`. IMS Org IDs typically end with `@AdobeOrg`. The `@` value must be converted to an underscore to ensure the cookie is in the correct format.
