---
title: environment
description: The build environment that the tag property currently uses.
exl-id: 9e9873d8-3f86-4ff9-85d0-88670072b7e3
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
