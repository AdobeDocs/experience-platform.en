---
title: edgeDomain (Web SDK)
description: Determine the domain that you want to send data to.
exl-id: 6beb5116-cd23-42fd-934c-5cf84d1d7153
TQID: 'https://experienceleague.adobe.com/AGtfo51srVVyouLSiLya2Ie5-P6V50vl9Xxxwi0iQ-s'
feature_v2:
  - id: d5947817-d24b-4ba3-8126-2c3d66e9422b
    internal-label: Web SDK
level_v2:
  - id: b5a62a22-46f7-4f0d-b151-3fc640bef588
    internal-label: Intermediate
topic_v2:
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
  - id: b5ce8718-c3af-4fdb-a1a9-fca32f83a87c
    internal-label: Implementation
autotag-review: '2026-11-05T22:08:57.077Z'
---
# `edgeDomain` (Web SDK)

>[!BEGINSHADEBOX]

*This page describes `edgeDomain` in the Web SDK `configure` command. For the Server SDK, see [`edgeDomain`](/help/collection/server-js/methods/configure/edgedomain.md).*

>[!ENDSHADEBOX]

The `edgeDomain` property allows you to change the domain where the Web SDK sends data. Using a custom domain can help reduce the impact of ad blockers.

>[!NOTE]
>
>This property does not change where cookies are set. The Web SDK always sets [first-party cookies](https://experienceleague.adobe.com/docs/core-services/interface/administration/ec-cookies/cookies-first-party.html), regardless of where it ultimately sends data.

The value that you use for `edgeDomain` depends on your participation in the [Adobe-managed certificate program](https://experienceleague.adobe.com/en/docs/core-services/interface/data-collection/adobe-managed-cert):

**If your organization participates in the Adobe-managed certificate program**, set the value to the first-party domain that was selected when setting up the certificate. Typically this value is a subdomain owned by your organization. For example, `data.example.com`. CNAME records in your organization forward that data to Adobe.

**If your organization does not participate in the certificate program**, set the value to a subdomain of `data.adobedc.net`. Adobe recommends using your organization's Adobe-assigned IMS company ID for consistency. For example, `example.data.adobedc.net`. Use the following steps to determine your IMS company ID:

1. Log in to [CX Enterprise](https://experience.adobe.com) using your Adobe ID credentials.
1. Anywhere in the CX Enterprise interface, press `[Cmd]` + `[I]` (macOS) or `[Ctrl]` + `[I]` (Windows).
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
