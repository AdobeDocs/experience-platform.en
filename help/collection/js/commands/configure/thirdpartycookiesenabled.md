---
title: thirdPartyCookiesEnabled
description: Allow the use of third-party cookies to identify visitors.
exl-id: f241a9ae-a892-46a5-b0dd-5ac72a44d4ac
TQID: https://experienceleague.adobe.com/Do2Kw6kb1yxrwmqU7SD3hGL9eqorgWDb68FsAKkUYUY
product_v2:
  - id: d0a3eab4-7b10-4d96-a71e-6c0f8e7b7c87
    internal-label: CX Enterprise
  - id: df80eeb1-8d72-467e-b0df-9d51c7d3a0a1
    internal-label: Audience Manager
  - id: e43347a8-f2c5-4aa4-8623-6f13875d7e3a
    internal-label: Target
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
---
# `thirdPartyCookiesEnabled`

The `thirdPartyCookiesEnabled` property is a boolean that determines if the Web SDK sets cookies in a third-party context. Enabling this option is useful if you want to identify visitors between subdomains or domains that your organization owns. However, many modern browsers limit the setting and expiration of third-party cookies. If a visitor's browser does not support third-party cookies, then this property does nothing.

The `thirdPartyCookiesEnabled` property also controls whether a [`CORE ID`](/help/collection/identity/overview.md#core-id-and-third-party-identity) can be requested on [`getIdentity`](../getidentity.md) calls.

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
