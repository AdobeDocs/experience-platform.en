---
title: targetMigrationEnabled
description: Allow the Web SDK to read and write Adobe Target cookies.
exl-id: 4b9203c6-31b7-45af-a6a6-a206d7edac3f
---
# `targetMigrationEnabled`

The `targetMigrationEnabled` property is a boolean that allows the Web SDK to read and write the `mbox` and `mboxEdgeCluster` cookies that the Adobe Target 1.x and 2.x libraries use. This option allows you to preserve the visitor profile between pages using previous Adobe Target implementations and pages using the Web SDK.

Set the `targetMigrationEnabled` boolean when running the `configure` command. If you omit this property when configuring the Web SDK, it defaults to `false`. Set this value to `true` if you have some pages that still use the Adobe Target 1.x or 2.x libraries.

```js
alloy("configure", {
  datastreamId: "ebebf826-a01f-4458-8cec-ef61de241c93",
  orgId: "ADB3LETTERSANDNUMBERS@AdobeOrg",
  targetMigrationEnabled: true
});
```

## Enable Target migration using the Web SDK tag extension

The Web SDK tag extension equivalent of this boolean is under [Personalization configuration settings](/help/tags/extensions/client/web-sdk/configure/personalization.md#migrate-target-from-atjs-to-the-web-sdk) when configuring the tag extension.
