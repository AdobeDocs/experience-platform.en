---
title: targetMigrationEnabled
description: Allow the Web SDK to read and write Adobe Target cookies.
exl-id: 4b9203c6-31b7-45af-a6a6-a206d7edac3f
TQID: https://experienceleague.adobe.com/F76GzS20NxTKOYF4bR3V-XDAxV-fmR5ZGyJi-x4hJPw
product_v2:
  - id: d0a3eab4-7b10-4d96-a71e-6c0f8e7b7c87
    internal-label: CX Enterprise
  - id: e43347a8-f2c5-4aa4-8623-6f13875d7e3a
    internal-label: Target
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: c93393a4-e558-47e1-992e-c91ed4d480ce
    internal-label: Implementation
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: b5ce8718-c3af-4fdb-a1a9-fca32f83a87c
    internal-label: Implementation
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
  - id: e0eb8757-182f-49f3-94a4-1587d16f5094
    internal-label: Personalization
---
# `targetMigrationEnabled`

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
