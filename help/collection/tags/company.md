---
title: company
description: Obtain information around the IMS organization that owns the implemented tag property.
exl-id: 172b3b1c-8b35-478d-97b8-603d16e3fb2f
feature_v2:
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection tags
subfeature_v2:
  - id: f6ff4d13-7b5c-4533-8556-95e76673d4cb
    internal-label: Properties
level_v2:
  - id: b5a62a22-46f7-4f0d-b151-3fc640bef588
    internal-label: Intermediate
autotag-review: '2026-11-05T22:08:57.077Z'
---
# `company`

The `_satellite.company` object displays information around the IMS organization that owns the tag property.

```ts
readonly _satellite.company: Company
```

## Available fields

The following fields are available when calling this object:

```json
{
  "orgId": "ADB3LETTERSANDNUMBERS@AdobeOrg",
  "dynamicCdnEnabled": true,
  "cdnAllowList": [
    "assets.adoberesources.cn",
    "assets.adobedtm.com"
  ]
}
```

| Name | Type | Description |
| --- | --- | --- |
| **`orgId`** | `string` | The IMS org ID of the tag property. |
| **`dynamicCdnEnabled`** | `boolean` | Determines if your tag property uses Adobe's dynamic CDN switching feature. If set to `true`, it auto-switches the CDN that a visitor requests your tag from based on their location. |
| **`cdnAllowList`** | `string[]` | The permitted CDNs to load your tag property from. |

Similar information is also contained in `_satellite._container.company`. See [`_container`](container.md) for more information.
