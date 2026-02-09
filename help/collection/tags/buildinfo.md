---
title: buildInfo
description: Obtain information around the tag build implemented on your site.
exl-id: 1bf9918c-aeb2-4c40-a166-25d209458aec
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
