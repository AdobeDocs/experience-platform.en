---
title: company
description: Obtain information around the IMS organization that owns the implemented tag property.
---
# `company`

The `_satellite.company` object displays information around the IMS organization that owns the tag property.

```js
_satellite.company
```

## Available fields

The following objects are available for reference:

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

* **`company.orgId`**: A string that represents the IMS org ID of the tag property.
* **`company.dynamicCdnEnabled`**: A boolean that determines if your tag property uses Adobe's dynamic CDN switching feature. If set to `true`, it auto-switches the CDN that a visitor requests your tag from based on their location.
* **`company.cdnAllowList[]`**: An array of strings that represent permitted CDN's to load your tag property from.

Similar information is also contained in `_satellite._container.company`. See [`_container`](container.md) for more information.
