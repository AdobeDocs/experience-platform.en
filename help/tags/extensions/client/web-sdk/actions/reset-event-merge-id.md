---
title: Reset merge ID
description: Deprecated action that lets you separate events called on the same page.
exl-id: a11a9b7c-2751-46f9-86cf-2869b56ff481
feature_v2:
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection tags
  - id: d5947817-d24b-4ba3-8126-2c3d66e9422b
    internal-label: Web SDK
subfeature_v2:
  - id: 1a2b3c4d-0003-4003-8003-000000000003
    internal-label: Data collection tags extensions
  - id: 1a2b3c4d-0006-4006-8006-000000000006
    internal-label: Data collection tags rules
level_v2:
  - id: b5a62a22-46f7-4f0d-b151-3fc640bef588
    internal-label: Intermediate
autotag-review: '2026-11-05T22:08:57.077Z'
---
# Reset merge ID

>[!IMPORTANT]
>
>This action is deprecated. Use [Collect internal link clicks](../configure/data-collection.md#collect-internal-link-clicks) settings instead.

The **[!UICONTROL Reset merge ID]** action type lets you separate events called on the same page. It is typically used in internal link scenarios where you might have multiple payloads that you want to send to Adobe. This action allows you to reset an event's merge ID so that they aren't considered part of the same event after arriving to the Edge Network.

If you want to control how multiple events on the same page are separated or merged, use the [Collect internal link clicks](../configure/data-collection.md#collect-internal-link-clicks) option when configuring the tag extension.
