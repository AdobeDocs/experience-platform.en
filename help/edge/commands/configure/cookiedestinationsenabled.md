---
title: cookieDestinationsEnabled
description: Allows Adobe Audience Manager cookie destinations.
---
# `cookieDestinationsEnabled`

The `cookieDestinationsEnabled` property is a boolean that enables Adobe Audience Manager cookie destinations. This setting allows the ability to write cookies based on segment qualification. <!-- Insert value of this variable here -->

## Enable destination cookies in the Web SDK extension

<!-- Is this supported in the extension? -->

## Enable destination cookies using alloy.js

Set the `cookieDestinationsEnabled` boolean when running the `configure` command. If you omit this property when configuring the Web SDK, it defaults to `true`. Set this value to `false` if you want to disable cookie destinations.

```js
alloy("configure", {
  "edgeConfigId": "ebebf826-a01f-4458-8cec-ef61de241c93",
  "orgId":"ADB3LETTERSANDNUMBERS@AdobeOrg",
  "cookieDestinationsEnabled": false
});
```
