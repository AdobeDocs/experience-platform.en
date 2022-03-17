---
title: Visitor identification
description: Learn how Edge Network Gateway API identifies visitors
seo-description: Learn how Edge Network Gateway API identifies visitors
keywords: edge network;gateway;api;visitor;identification
---

# Visitor identification

## Overview {#overview}

The Edge Network Gateway API expects all user identities to be supplied in the `identityMap` field group. This field group is included in the AEP Web SDK `ExperienceEvent` mixin.

```json
{
   "identityMap":{
      "ECID":[
         {
            "id":"55613368189701342632255821452918751312",
            "authenticatedState":"ambiguous"
         }
      ],
      "CRM":[
         {
            "id":"2394509340-30453470347",
            "authenticatedState":"authenticated"
         }
      ]
   }
}
```

## Device identifiers {#identifiers}

There are multiple ways in which a device can be identified within Experience Edge. See the table below for an overview of the supported IDs.

| ID namespace | Managed by | Description |
| --- | --- | --- |
| `ECID` | Adobe | `ECID` is required when leveraging and integrating with Adobe Analytics and Adobe Audience Manager. <br><br> For consistent device identification, these IDs must be persisted on the device and supplied on each request. For web interactions, this involves storing them as browser cookies. |
| `FPID` | Customer | `FPID` will be automatically encoded into an `ECID` by Experience Edge, therefore solutions which require an `ECID` will work as well.  <br><br> For consistent device identification, these IDs must be persisted on the device and supplied on each request. For web interactions, this involves storing them as browser cookies.|
| `IDFA`/`GAID` | Experience Platform | Can identify users across applications, so these IDs are not encoded into `ECID` by Experience Edge. |

## First-party IDs (FPID) {#fpid}

[!DNL First-party IDs] (`FPIDs`) are device IDs generated, managed, and stored by customers. This gives customers control over identifying user devices. By sending `FPIDs`, Experience Edge does not generate a brand new `ECID` for
a request that does not contain one.

The `FPID` can be included in the API request body as part of the `identityMap` or it can be sent as a cookie.

An `FPID` can be deterministically translated into an `ECID` by Experience Edge, so `FPID` identities are fully compatible with Experience Cloud solutions. Obtaining an `ECID` from a specific `FPID` always yields the same result, so users will have a consistent experience.

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

For requests that contain both a `FPID` and an `ECID`, the `ECID` already present in the request will take precedence over the one that could be generated from the `FPID`. Therefore, Experience Edge will use the `ECID` already provided and will not compute one from the given `FPID`.

In terms of device IDs, it is recommended that `server` datastreams use `FPID` as device ID. Other identities (i.e `EMAIL`) can also be provided within the request body, but Experience Edge requires that a primary identity is explicitly supplied. Primary identity is the base identity to which profile data will be stored in.

>[!NOTE]
>
>Experience Edge will fail `server` datastream requests that have no identity, respectively no primary identity explicitly set within the request body.

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

The error response returned by Experience Edge in this case is similar to the following:

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

## Experience Cloud IDs (ECID) {#ecid}

The `ECID` is a universal and persistent device ID that identifies your visitors across all Adobe Experience Cloud solutions, like Adobe Experience Platform, Adobe Target, Adobe Analytics or Adobe Audience Manager.

In a web context, this is also known as a first-party device identifier, as it is persisted in a cookie on the first-party domain (the customer's domain).

The `ECID` is automatically managed by the Experience Edge Gateway and SDKs, for all non-server interactions. While the [!UICONTROL Experience Edge Identity Protocol] can be used for `server` datastreams as well, for simplicity, Adobe recommends using an `FPID` instead.

### Experience Edge Identity Protocol {#experience-edge-identity-protocol}

Device identities like `ECID` must be persisted on the client device and supplied on each request in the session and across sessions. Having stable device identities across multiple sessions improves the accuracy levels in your reports and allows delivering a consistent experience to the visitors.

For all non-server interactions, Experience Edge will automatically perform the following actions:

* Generate a new `ECID` when none is found on the request. This will automatically enhance the collected event with the new identity.
* Return a `state:store` instruction to the caller with the `kndctr_{$IMS_ORG_ID|url-safe}_identity` entry, which contains:
  * the [ID value](#ee-identity-format)
  * a `maxAge` value, in seconds, indicating how long the client persist the ID for

For example, having the following request:

```json
{
   "events":[
      {
         "xdm":{
            "eventType":"web.webpagedetails.pageViews",
            "eventMergeId":"0772675a-1e24-44ea-a92b-0138c1d03a38",
            "web":{
               "webPageDetails":{
                  "URL":"https://alloystore.dev/",
                  "name":"home-demo-Home Page",
                  "pageViews":{
                     "value":1
                  }
               }
            },
            "device":{
               "screenHeight":1120,
               "screenWidth":1792,
               "screenOrientation":"landscape"
            },
            "environment":{
               "type":"browser",
               "browserDetails":{
                  "viewportWidth":1792,
                  "viewportHeight":481
               }
            },
            "timestamp":"2021-08-09T14:09:20.859Z"
         }
      }
   ]
}
```

The Experience Edge response includes a `state:store` handle, which, in turn, includes an entry with the following name format: `kndctr_{$IMS_ORG_ID|url-safe}_identity`.

```json
{
   "requestId":"f5abf988-15d1-4463-a3b8-59aa0709a808",
   "handle":[
      {
         "key":"kndctr_53A16ACB5CC1D3760A495C99_AdobeOrg_identity",
         "value":"CiYzOTMyMzQ5NzU1MDY0MzIxNzc3NDEzMjY2NDA4OTIzOTExNDgyMlIRCIbghtqyLxABGAEqBElSTDHwAYbghtqyLw==",
         "maxAge":34128000
      }
   ],
   "type":"state:store"
}
```

>[!NOTE]
>
>The `kndctr_{$IMS_ORG_ID|url-safe}_` prefix is also used for other entries stored on the client device, and enables state isolation for complex integrations, which could involve multiple/different IMS organizations. While Experience Edge will filter the entries which can be used for a given datastream, in order to minimize the payload, the caller (SDK) should ideally ensure that only the relevant entries are sent.

The caller must:

* store this value on the client device
* supply it on subsequent calls from that device in the request `meta.state.entries[]`, as shown below:

```json
{
   "meta":{
      "state":{
         "entries":[
            {
               "key":"kndctr_53A16ACB5CC1D3760A495C99_AdobeOrg_identity",
               "value":"CiYzOTMyMzQ5NzU1MDY0MzIxNzc3NDEzMjY2NDA4OTIzOTExNDgyMlIRCIbghtqyLxABGAEqBElSTDHwAYbghtqyLw=="
            }
         ]
      }
   }
}
```

### Identity Protocol via cookies (web)

When using first-party domain CNAMEs for interacting with Experience Edge, the client state can be managed automatically via first-party cookies.

The caller must explicitly activate this functionality via the `meta.state.cookiesEnabled` flag:

```json
{
   "meta":{
      "state":{
         "domain":"alloystore.dev",
         "cookiesEnabled":true
      }
   }
}
```

>[!NOTE]
>
>The `meta.state.domain` is an optional value which a caller could supply, specifying the exact domain on which the cookies should be stored. When this is missing, Experience Edge can automatically infer the top-level domain from the
request. Automatic client state management via browser cookies **should never be used** in a `server` interaction.

### Reading the `ECID` {#reading-ecid}

While the `ECID` is entirely managed by Experience Edge, its value can be retrieved via an `identity.fetch` query:

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

When used in the first request to Experience Edge, `identity.fetch` will return the new `ECID` value. For subsequent calls it will simply read and return the stored identity.

### Experience Edge identity format {#ee-identity-format}

Experience Edge stores the device identity and additional metadata in the `kndctr_{$IMS_ORG_ID|url-safe}_` entry. The entire structure is represented in a binary format / [Protocol Buffers](https://github.com/protocolbuffers/protobuf), which is then encoded in URL-safe Base64 format.

```protobuf
syntax = "proto3";

// Device-level identity for Experience Edge
message Identity {
  // The Experience Cloud ID value
  string ecid = 1;

  IdentityMetadata meta = 10;

  // Used only in the 3rd party domain context.
  // It stores the UNIX timestamp and some metadata about the last identity sync triggered by Experience Edge.
  int64 last_sync = 20;
  int64 sync_hash = 21;

  // UNIX timestamp when the Identity was last returned in a `state:store` instruction.
  // The Identity is written at most once every 24h with a large TTL, to ensure it does not expire.
  int64 write_time = 30;
}

message IdentityMetadata {
  // UNIX timestamp when this identity was minted.
  int64 created_at = 1;

  // Whether or not the identity is random (new) or based on an existing seed.
  bool is_new = 2;

  // Type of device for which the identity was generated.
  // 0 = UNKNOWN, 1 = BROWSER, 2 = MOBILE
  int32 device_type = 3;

  // The Experience Edge region in which the identity was minted.
  string region = 5;
}
```

The Experience Edge Identity value should only be read using the above schema. Implementations which only decode it and extract some values could break when the structure changes in the future (e.g. when new fields are added).
