---
title: conversation (Web SDK)
description: Configure Brand Concierge chat settings.
exl-id: 0f64c7f1-2c28-4c67-af05-dc9ee688fdc0
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
  - id: b6ee73fe-bdc6-47d9-99a2-80194514dd40
    internal-label: Brand Concierge
feature_v2:
  - id: d5947817-d24b-4ba3-8126-2c3d66e9422b
    internal-label: Web SDK
level_v2:
  - id: b5a62a22-46f7-4f0d-b151-3fc640bef588
    internal-label: Intermediate
topic_v2:
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
  - id: bbbea26f-9621-49eb-9ab8-e06fb3bbce8c
    internal-label: Artificial intelligence
autotag-review: '2026-11-05T22:08:57.077Z'
---
# `conversation` (Web SDK)

>[!AVAILABILITY]
>
>Brand Concierge for the Web SDK is currently in **beta**. The functionality and documentation are subject to change.

The `conversation` object contains configuration options for Brand Concierge chat sessions. This object is supported on Web SDK versions 2.31.0 or later.

## Properties

| Property | Type | Description |
| --- | --- | --- |
| **`collectSources`** | `boolean` | Determines if the Web SDK reads the `adobe_brand_concierge_source` query string parameter and includes it in `xdm.channel.referringSource`. Defaults to `false`. |
| **`region`** | `string` | Routes Brand Concierge conversation requests to a specific data center instead of the nearest available one. Most organizations do not need to set this value. Only set it if conversation events do not arrive at the desired data center. This setting only affects conversation events; standard [`sendEvent`](../sendevent/overview.md) commands are unaffected. Some possible example values include `va7`, `or2`, or `irl1`. |
| **`stickyConversationSession`** | `boolean` | Determines if the Web SDK sets a session cookie to preserve Brand Concierge chat sessions across page loads. Defaults to `false`. If omitted or set to `false`, Brand Concierge chat starts a new session on every page load. |

## Example

```js
alloy("configure", {
  datastreamId: "ebebf826-a01f-4458-8cec-ef61de241c93",
  orgId: "ADB3LETTERSANDNUMBERS@AdobeOrg",
  conversation: {
    collectSources: true,
    region: "va7",
    stickyConversationSession: true
  }
});
```

## Configure conversation settings using the Web SDK tag extension

These settings can be configured in the Web SDK tag extension using [Brand Concierge settings](/help/tags/extensions/client/web-sdk/configure/brand-concierge.md).
