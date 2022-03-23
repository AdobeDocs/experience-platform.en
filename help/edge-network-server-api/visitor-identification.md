---
title: Visitor identification
description: Learn how Adobe Experience Platform Edge Network Server API identifies visitors
seo-description: Learn how Adobe Experience Platform Edge Network Server API identifies visitors
keywords: edge network;gateway;api;visitor;identification
---

# Visitor identification

## Overview {#overview}

The Edge Network Server API supports two types of visitor identification:

* [Visitor identification via [!DNL FPID]](visitor-identification-fpid.md)
* [Visitor identification via [!DNL ECID]](visitor-identification-ecid.md)

All user identities should be supplied in the `identityMap` field group. This field group is included in the AEP Web SDK `ExperienceEvent` mixin.

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
| `FPID` | Customer | `FPID` will be automatically encoded into an `ECID` by Experience Edge, therefore solutions which require an `ECID` will work as well.  <br><br> For consistent device identification, these IDs must be persisted on the device and supplied on each request. For web interactions, this involves storing them as browser cookies.|
| `ECID` | Adobe | `ECID` is required when leveraging and integrating with Adobe Analytics and Adobe Audience Manager. <br><br> For consistent device identification, these IDs must be persisted on the device and supplied on each request. For web interactions, this involves storing them as browser cookies. |
| `IDFA`/`GAID` | Experience Platform | Can identify users across applications, so these IDs are not encoded into `ECID` by Experience Edge. |


## Experience Edge Identity Protocol {#experience-edge-identity-protocol}

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

The Edge Network response includes a `state:store` handle, which, in turn, includes an entry with the following name format: `kndctr_{$IMS_ORG_ID|url-safe}_identity`.

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

## Identity Protocol via cookies (web)

When using first-party domain CNAMEs for interacting with the Edge Network, the client state can be managed automatically via first-party cookies.

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
>The `meta.state.domain` is an optional value which a caller could supply, specifying the exact domain on which the cookies should be stored. When this is missing, Experience Edge can automatically infer the top-level domain from the request. Automatic client state management via browser cookies **should never be used** in a `server` interaction.

## Experience Edge identity format {#ee-identity-format}

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
