---
title: edgeBasePath
description: The base path of the endpoint used to interact with Adobe services.
exl-id: 3542575d-ad02-415c-8e47-97c877dfdd9d
---
# `edgeBasePath`

The `edgeBasePath` property alters the destination path when you interact with Adobe services. Adobe might request that you change this variable if you participate in alpha or beta programs for data collection. Most organizations do not need to set or alter this property.

Set the `edgeBasePath` text field when running the `configure` command. If you omit this property, it defaults to the value of `ee`. Adobe recommends omitting this property from most configurations.

```js
alloy("configure", {
  datastreamId: "ebebf826-a01f-4458-8cec-ef61de241c93",
  orgId: "ADB3LETTERSANDNUMBERS@AdobeOrg",
  edgeBasePath: "ee"
});
```

## Edge base path using the Web SDK tag extension

The Web SDK tag extension equivalent of this field is under [Advanced configuration settings](/help/tags/extensions/client/web-sdk/configure/advanced-settings.md) when configuring the tag extension.
