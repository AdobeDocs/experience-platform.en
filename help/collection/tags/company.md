---
title: company
description: Obtain information around the IMS organization that owns the implemented tag property.
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
