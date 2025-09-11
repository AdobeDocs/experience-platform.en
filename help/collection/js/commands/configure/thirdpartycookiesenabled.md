---
title: thirdPartyCookiesEnabled
description: Allow the use of third-party cookies to identify visitors.
exl-id: f241a9ae-a892-46a5-b0dd-5ac72a44d4ac
---
# `thirdPartyCookiesEnabled`

The `thirdPartyCookiesEnabled` property is a boolean that determines if the Web SDK sets cookies in a third-party context. Enabling this option is useful if you want to identify visitors between subdomains or domains that your organization owns. However, many modern browsers limit the setting and expiration of third-party cookies. If a visitor's browser does not support third-party cookies, then this property does nothing.

The `thirdPartyCookiesEnabled` property also controls whether a [`CORE ID`](/help/collection/use-cases/identity/id-overview.md#tracking-coreid-web-sdk) can be requested on [`getIdentity`](../getidentity.md) calls.

When this option is enabled, the Web SDK uses Adobe Audience Manager to help identify a visitor. When this option is disabled, the call to Audience Manager is disabled. See [Understanding calls to the Demdex domain](https://experienceleague.adobe.com/docs/audience-manager/user-guide/reference/demdex-calls.html) in the Audience Manager user guide for more information.

Set the `thirdPartyCookiesEnabled` boolean when running the `configure` command. If you omit this property when configuring the Web SDK, it defaults to `true`. Set this value to `false` if you do not want the Web SDK to use Audience Manager to help identify visitors.

```js
alloy("configure", {
  datastreamId: "ebebf826-a01f-4458-8cec-ef61de241c93",
  orgId: "ADB3LETTERSANDNUMBERS@AdobeOrg",
  thirdPartyCookiesEnabled: false
});
```

## Enable third-party cookies using the Web SDK tag extension

This setting can be configured in the Web SDK tag extension using [Identity configuration settings](/help/tags/extensions/client/web-sdk/configure/identity.md#use-third-party-cookies).
