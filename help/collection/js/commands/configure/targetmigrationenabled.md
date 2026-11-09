---
title: targetMigrationEnabled (Web SDK)
description: Allow the Web SDK to read and write Adobe Target cookies.
exl-id: 4b9203c6-31b7-45af-a6a6-a206d7edac3f
TQID: 'https://experienceleague.adobe.com/F76GzS20NxTKOYF4bR3V-XDAxV-fmR5ZGyJi-x4hJPw'
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
  - id: e43347a8-f2c5-4aa4-8623-6f13875d7e3a
    internal-label: Target
feature_v2:
  - id: d5947817-d24b-4ba3-8126-2c3d66e9422b
    internal-label: Web SDK
  - id: c93393a4-e558-47e1-992e-c91ed4d480ce
    internal-label: Implementation
subfeature_v2:
  - id: fd0ff162-b6d3-4a11-8aeb-e165a01c0f0a
    internal-label: at.js
level_v2:
  - id: b5a62a22-46f7-4f0d-b151-3fc640bef588
    internal-label: Intermediate
topic_v2:
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
  - id: e0eb8757-182f-49f3-94a4-1587d16f5094
    internal-label: Personalization
autotag-review: '2026-11-05T22:08:57.077Z'
---
# `targetMigrationEnabled` (Web SDK)

The `targetMigrationEnabled` property is a boolean that allows the Web SDK to read and write the [`mbox` and `mboxEdgeCluster` cookies](https://experienceleague.adobe.com/en/docs/core-services/interface/data-collection/cookies/web-sdk) that the Adobe Target 1.x and 2.x libraries use. This option allows you to preserve the visitor profile between pages using previous Adobe Target implementations and pages using the Web SDK.

Set the `targetMigrationEnabled` boolean when running the `configure` command. If you omit this property when configuring the Web SDK, it defaults to `false`. Set this value to `true` if you have some pages that still use the Adobe Target 1.x or 2.x libraries.

When using this property, make sure that you also enable [`overrideMboxEdgeServer`](https://experienceleague.adobe.com/en/docs/target-dev/developer/client-side/at-js-implementation/functions-overview/targetglobalsettings#overridemboxedgeserver) in `targetGlobalSettings()` within your Adobe Target implementation.

```js
alloy("configure", {
  datastreamId: "ebebf826-a01f-4458-8cec-ef61de241c93",
  orgId: "ADB3LETTERSANDNUMBERS@AdobeOrg",
  targetMigrationEnabled: true
});
```

## Enable Target migration using the Web SDK tag extension

This setting can be configured in the Web SDK tag extension using [Personalization configuration settings](/help/tags/extensions/client/web-sdk/configure/personalization.md#migrate-target-from-atjs-to-the-web-sdk).
