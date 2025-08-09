---
title: environment
description: The build environment that the tag property currently uses.
---
# `environment`

The `_satellite.environment` object states which build environment that the tag property currently is using.

```js
_satellite.environment
```

## Available fields

The following fields are available when calling this object.

```json
{
  "id": "EN6b2...d6ff2",
  "stage": "production"
}
```

* **`environment.id`**: The unique identifier for the environment. You can locate the environment ID by selecting the **[!UICONTROL Install]** icon under [[!UICONTROL Environments]](/help/tags/ui/publishing/environments.md) in the tags UI.
* **`environment.stage`**: The environment type. Valid values include `development`, `staging`, and `production`.
