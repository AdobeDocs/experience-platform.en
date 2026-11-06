---
title: buildInfo
description: Obtain information around the tag build implemented on your site.
exl-id: 1bf9918c-aeb2-4c40-a166-25d209458aec
feature_v2:
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection tags
subfeature_v2:
  - id: 1a2b3c4d-0004-4004-8004-000000000004
    internal-label: Data collection tags publishing flow
level_v2:
  - id: b5a62a22-46f7-4f0d-b151-3fc640bef588
    internal-label: Intermediate
topic_v2:
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
  - id: c1579802-ddd4-4214-8a91-97b2066abe11
    internal-label: Troubleshooting
autotag-review: '2026-11-05T22:08:57.077Z'
---
# `buildInfo`

The `_satellite.buildInfo` object contains information around the build of the tag property implemented. This object is most useful when debugging frequent builds to ensure that you're using the latest version.

```ts
readonly _satellite.buildInfo: BuildInfo
```

## Available fields

The following fields are available when calling this object.

```json
{
  "minified": true,
  "buildDate": "YYYY-06-13T01:22:12Z",
  "turbineBuildDate": "YYYY-08-22T17:32:44Z",
  "turbineVersion": "28.0.0"
}
```

| Name | Type | Description |
| --- | --- | --- |
| **`minified`** | `boolean` | Indicates if the library is minified. Production builds are typically minified (`true`), while development and staging builds are typically not (`false`). |
| **`buildDate`** | `string (ISO-8601 datetime)` | The date and time that your JavaScript file was built and published. |
| **`turbineBuildDate`** | `string (ISO-8601 datetime)` | [Turbine](https://github.com/adobe/reactor-turbine) is Adobe's engine that processes tag rules and delegates logic to tag extensions. This field contains the date and time of the Turbine build used to publish your tag property. |
| **`turbineVersion`** | `string` | The version of Turbine used to build and publish your tag property. |

Similar information is also contained in `_satellite._container.buildInfo`. See [`_container`](container.md) for more information.
