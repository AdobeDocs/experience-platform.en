---
title: edgeBasePath (Web SDK)
description: The base path of the endpoint used to interact with Adobe services.
exl-id: 3542575d-ad02-415c-8e47-97c877dfdd9d
feature_v2:
  - id: d5947817-d24b-4ba3-8126-2c3d66e9422b
    internal-label: Web SDK
level_v2:
  - id: d378ca77-2da1-4f39-ad92-1917fe974a38
    internal-label: Experienced
topic_v2:
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
  - id: b5ce8718-c3af-4fdb-a1a9-fca32f83a87c
    internal-label: Implementation
autotag-review: '2026-11-05T22:08:57.077Z'
---
# `edgeBasePath` (Web SDK)

>[!BEGINSHADEBOX]

*This page describes `edgeBasePath` in the Web SDK `configure` command. For the Server SDK, see [`edgeBasePath`](/help/collection/server-js/methods/configure/edgebasepath.md).*

>[!ENDSHADEBOX]

The `edgeBasePath` property alters the destination path when you interact with Adobe services. Adobe might request that you change this variable if you participate in alpha or beta programs for data collection. Most organizations do not need to set or alter this property.

Set the `edgeBasePath` text field when running the `configure` command. If you omit this property, it defaults to the value of `ee`. Adobe recommends omitting this property from most configurations.

```js
alloy("configure", {
  datastreamId: "ebebf826-a01f-4458-8cec-ef61de241c93",
  orgId: "ADB3LETTERSANDNUMBERS@AdobeOrg",
  edgeBasePath: "ee"
});
```

## Edge base path using the Web SDK tag extension

The Web SDK tag extension equivalent of this field is under [Advanced configuration settings](/help/tags/extensions/client/web-sdk/configure/advanced-settings.md) when configuring the tag extension.
