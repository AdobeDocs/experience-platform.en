---
title: environment
description: The build environment that the tag property currently uses.
exl-id: 9e9873d8-3f86-4ff9-85d0-88670072b7e3
TQID: 'https://experienceleague.adobe.com/RR5wofWuRY8XV1IdHg6RaoO0jPWTKss8hU-O9swbEME'
feature_v2:
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection tags
subfeature_v2:
  - id: 1a2b3c4d-0002-4002-8002-000000000002
    internal-label: Data collection tags environments
level_v2:
  - id: b5a62a22-46f7-4f0d-b151-3fc640bef588
    internal-label: Intermediate
autotag-review: '2026-11-05T22:08:57.077Z'
---
# `environment`

The `_satellite.environment` object states which build environment that the tag property currently is using.

```js
readonly _satellite.environment: Environment
```

## Available fields

The following fields are available when calling this object.

```json
{
  "id": "EN6b2...d6ff2",
  "stage": "production"
}
```

| Name | Type | Description |
|---|---|---|
| **`id`** | `string` | The unique identifier for the environment. You can locate the environment ID by selecting the **[!UICONTROL Install]** icon under [[!UICONTROL Environments]](/help/tags/ui/publishing/environments.md) in the tags UI. |
| **`stage`** | `development \| staging \| production` | The environment type. |
