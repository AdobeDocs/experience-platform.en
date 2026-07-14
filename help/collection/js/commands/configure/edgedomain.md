---
title: edgeDomain
description: Determine the domain that you want to send data to.
exl-id: 6beb5116-cd23-42fd-934c-5cf84d1d7153
TQID: https://experienceleague.adobe.com/AGtfo51srVVyouLSiLya2Ie5-P6V50vl9Xxxwi0iQ-s
product_v2:
  - id: d0a3eab4-7b10-4d96-a71e-6c0f8e7b7c87
    internal-label: CX Enterprise
  - id: dc5cf79d-43c4-4731-bffa-1df5d7549cb1
    internal-label: Acrobat Sign
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection
  - id: fdbb8fc9-ffa3-4b86-88fe-aa4c5a3e1bc6
    internal-label: Administration
subfeature_v2:
  - id: bdea9bc8-5600-45db-b85e-d74bb59dfcff
    internal-label: Organizations, Organizations (AEC)
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
  - id: eddd9b14-83bd-4ff4-9072-54a4a484abb7
    internal-label: Administration
---
# `edgeDomain`

The `edgeDomain` property allows you to change the domain where the Web SDK sends data. Using a custom domain can help reduce the impact of ad blockers.

>[!NOTE]
>
>This property does not change where cookies are set. The Web SDK always sets [first-party cookies](https://experienceleague.adobe.com/docs/core-services/interface/administration/ec-cookies/cookies-first-party.html), regardless of where it ultimately sends data.

The value that you use for `edgeDomain` depends on your participation in the [Adobe-managed certificate program](https://experienceleague.adobe.com/en/docs/core-services/interface/data-collection/adobe-managed-cert):

**If your organization participates in the Adobe-managed certificate program**, set the value to the first-party domain that was selected when setting up the certificate. Typically this value is a subdomain owned by your organization. For example, `data.example.com`. CNAME records in your organization forward that data to Adobe.

**If your organization does not participate in the certificate program**, set the value to a subdomain of `data.adobedc.net`. Adobe recommends using your organization's Adobe-assigned IMS company ID for consistency. For example, `example.data.adobedc.net`. Use the following steps to determine your IMS company ID:

1. Log in to [CX Enterprise](https://experience.adobe.com) using your Adobe ID credentials.
1. Anywhere in the Experience Cloud interface, press `[Cmd]` + `[I]` (macOS) or `[Ctrl]` + `[I]` (Windows).
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
