---
title: Configure the Adobe Experience Platform Web SDK
description: Use the configure command to set required settings when using the Web SDK.
exl-id: d1e95afc-0b8a-49c0-a20e-e2ab3d657e45
---
# Configure the Platform Web SDK

Configuration for the SDK is done with the `configure` command.

>[!IMPORTANT]
>
>`configure` is *always* the first command called.

```javascript
alloy("configure", {
  "edgeConfigId": "ebebf826-a01f-4458-8cec-ef61de241c93",
  "orgId":"ADB3LETTERSANDNUMBERS@AdobeOrg"
});
```

There are many options that can be set during configuration. All options can be found below, grouped by category.