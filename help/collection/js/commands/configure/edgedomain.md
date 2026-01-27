---
title: edgeDomain
description: Determine the root domain that you want to send data to.
exl-id: 6beb5116-cd23-42fd-934c-5cf84d1d7153
---
# `edgeDomain`

The `edgeDomain` property allows you to change the domain where the Web SDK sends data. This property is frequently used by organizations using [first party cookies](https://experienceleague.adobe.com/docs/core-services/interface/administration/ec-cookies/cookies-first-party.html). Data is sent to the organization's own domain, then a CNAME record forwards that data to Adobe.

The value that you use for `edgeDomain` depends on your participation in the [Adobe-managed certificate program](https://experienceleague.adobe.com/en/docs/core-services/interface/data-collection/adobe-managed-cert):

**If your organization participates in the Adobe-managed certificate program**, set the value to the first-party domain that was selected when setting up the certificate. Typically this value is a subdomain owned by your organization. For example, `data.example.com`. CNAME records in your organization redirect that data to Adobe.

**If not participating in the certificate program**, set the value to a subdomain of `data.adobedc.net`. Adobe recommends using your organization's company ID for consistency. For example, `example.data.adobedc.net`. Use the following steps to determine your company ID:

1. Log in to [experience.adobe.com](https://experience.adobe.com) using your Adobe ID credentials.
1. Anywhere in the Experience Cloud interface, press `[Cmd]` + `[I]` (iOS) or `[Ctrl]` + `[I]` (Windows).
1. A **[!UICONTROL User data debugger]** appears. Select the **[!UICONTROL Assigned orgs]** tab.
1. Expand the desired IMS organization.
1. Locate the **[!UICONTROL Tenant]** field. This value is the recommended subdomain of `data.adobedc.net` to use.

Set the `edgeDomain` string when running the `configure` command. If you omit this property when configuring the SDK, it defaults to `edge.adobedc.net`. While the default value is acceptable, Adobe considers it a best practice to set an organization-specific value.

```js
alloy("configure", {
  datastreamId: "ebebf826-a01f-4458-8cec-ef61de241c93",
  orgId: "ADB3LETTERSANDNUMBERS@AdobeOrg",
  edgeDomain: "data.example.com"
});
```

## Edge domain using the Web SDK tag extension

The tag extension equivalent to this property is the **[!UICONTROL Edge domain]** field under [SDK instance configuration settings](/help/tags/extensions/client/web-sdk/configure/general.md) when configuring the extension.
