---
title: environment
description: The build environment that the tag property currently uses.
exl-id: 9e9873d8-3f86-4ff9-85d0-88670072b7e3
TQID: https://experienceleague.adobe.com/RR5wofWuRY8XV1IdHg6RaoO0jPWTKss8hU-O9swbEME
product_v2:
  - id: d0a3eab4-7b10-4d96-a71e-6c0f8e7b7c87
    internal-label: CX Enterprise
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection
subfeature_v2:
  - id: d9830f6f-ceb6-4faa-9744-f281fe4439f9
    internal-label: Tags
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
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
