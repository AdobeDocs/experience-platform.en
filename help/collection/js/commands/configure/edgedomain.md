---
title: edgeDomain
description: Determine the root domain that you want to send data to.
exl-id: 6beb5116-cd23-42fd-934c-5cf84d1d7153
---
# `edgeDomain`

The `edgeDomain` property allows you to change the domain where the Web SDK sends data. This property is frequently used by organizations using [first party cookies](https://experienceleague.adobe.com/docs/core-services/interface/administration/ec-cookies/cookies-first-party.html). Data is sent to the organization's own domain, then a CNAME record forwards that data to Adobe.

Your organization determines the correct value for this property when particpating in the [Adobe-managed certificate program](https://experienceleague.adobe.com/en/docs/core-services/interface/data-collection/adobe-managed-cert). An organization typically uses a dedicated subdomain for this purpose. For example, if you use the domain `example.com`, you can set up first party cookies on `data.example.com`.

Set the `edgeDomain` string when running the `configure` command. If you omit this property when configuring the SDK, it defaults to `edge.adobedc.net`. Set this value if you would like to override the domain that the Web SDK sends data to.

```js
alloy("configure", {
  datastreamId: "ebebf826-a01f-4458-8cec-ef61de241c93",
  orgId: "ADB3LETTERSANDNUMBERS@AdobeOrg",
  edgeDomain: "data.example.com"
});
```

## Edge domain using the Web SDK tag extension

These settings can be configured in the Web SDK tag extension using [SDK instance configuration settings](/help/tags/extensions/client/web-sdk/configure/general.md).
