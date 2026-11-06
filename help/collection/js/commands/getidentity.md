---
title: getIdentity (Web SDK)
description: Obtain a visitor's identity without sending event data.
exl-id: 28b99f62-14c4-4e52-a5c7-9f6fe9852a87
TQID: 'https://experienceleague.adobe.com/dJQdcfriMQ61Xyijd5wG3Ew6SmBpPxFcMqeTsx-bgY4'
feature_v2:
  - id: d5947817-d24b-4ba3-8126-2c3d66e9422b
    internal-label: Web SDK
  - id: a50ad69b-1331-40e9-b634-531a085a6a54
    internal-label: Identities
level_v2:
  - id: b5a62a22-46f7-4f0d-b151-3fc640bef588
    internal-label: Intermediate
topic_v2:
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
  - id: b5ce8718-c3af-4fdb-a1a9-fca32f83a87c
    internal-label: Implementation
autotag-review: '2026-11-05T22:08:57.077Z'
---
# `getIdentity` (Web SDK)

>[!BEGINSHADEBOX]

*This page describes the Web SDK `getIdentity` command. For the Server SDK, see [`getIdentity`](/help/collection/server-js/methods/getidentity.md).*

>[!ENDSHADEBOX]

When you run the [`sendEvent`](sendevent/overview.md) command, the Web SDK automatically obtains the visitor's identity if one is not already present. The `getIdentity` command allows you to obtain an ECID without sending event data. If you require separate calls to generate an ECID and send data, you can use this command.

>[!IMPORTANT]
>
>Use `getIdentity` when you need identity information on the client side. If you only need to map the ECID into XDM, use [Data Prep for Data Collection](/help/datastreams/data-prep.md) or the [tags ECID access guidance](/help/tags/extensions/client/web-sdk/accessing-the-ecid.md) instead.

The `getIdentity` command goes through the following flow to retrieve the `ECID`.

1. You use the Web SDK to call either `getIdentity` or [`appendIdentityToUrl`](appendidentitytourl.md).
1. Web SDK waits for consent information to be provided.
1. Web SDK checks whether the `ECID` namespace was requested on the call. By default, the `ECID` namespace is always included.
1. Web SDK reads the `kndctr` cookie and returns its value as `ECID`, if it exists. This only returns the `ECID` value, but not the `regionId`.
1. If the  `kndctr` identity cookie is not set or the `"CORE"` namespace was requested, Web SDK makes a request to the Edge Network.
1. The Edge Network returns both the `ECID` and the `regionId` (and the `CORE ID`, if requested).

Run the `getIdentity` command when calling your configured instance of the Web SDK. The following options are available when configuring this command:

* **`namespaces`**: An array of namespaces. The default value is `["ECID"]`. Other supported values include:
  * `["CORE"]`
  * `["ECID","CORE"]`
  * `null`
  * `undefined`

  You can request `"ECID"` and `"CORE ID"` at the same time. Example: `"namespaces": ["ECID","CORE"]`.

* **`edgeConfigOverrides`**: A [datastream configuration override object](configure/edgeconfigoverrides.md).

```js
alloy("getIdentity",{
  // This command retrieves both ECID and CORE IDs
  "namespaces": ["ECID","CORE"] 
});
```

## Response object

If you decide to [handle responses](command-responses.md) with this command, the following properties are available in the response object:

* **`identity.ECID`**: A string containing the visitor's ECID.
* **`identity.CORE`**: A string containing the visitor's CORE ID.
* **`edge.regionID`**: An integer that represents the Edge Network region that the browser hit when acquiring an identity. It is the same as the legacy Audience Manager location hint.

```js
// Get the visitor's ECID
alloy('getIdentity').then(result => {
  console.log(result.identity.ECID);
});
```

## Get identity using the Web SDK tag extension

The Web SDK tag extension does not offer this command through the tag extension UI. Use the custom code editor using JavaScript library syntax.
