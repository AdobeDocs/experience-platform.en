---
title: thirdPartyCookiesEnabled
description: Allow the use of third-party cookies to identify visitors.
exl-id: f241a9ae-a892-46a5-b0dd-5ac72a44d4ac
---

# `thirdPartyCookiesEnabled`

>[!IMPORTANT]
>
>Google [has announced](https://developers.google.com/privacy-sandbox/3pcd/prepare/prepare-for-phaseout) plans to discontinue Chrome support for third-party cookies in the second half of 2024. Consequently, third-party cookies will no longer be supported in any of the major browsers.
>
>When this change is implemented, Adobe will discontinue support for the `demdex` cookie that is currently supported in the Web SDK.


The `thirdPartyCookiesEnabled` property is a boolean that determines if the Web SDK sets cookies in a third-party context. Enabling this option is useful if you want to identify visitors between subdomains or domains that your organization owns. However, many modern browsers limit the setting and expiration of third-party cookies.

When this option is enabled, the Web SDK uses Adobe Audience Manager to help identify a visitor. When this option is disabled, the call to Audience Manager is disabled. See [Understanding calls to the Demdex domain](https://experienceleague.adobe.com/docs/audience-manager/user-guide/reference/demdex-calls.html) in the Audience Manager user guide for more information.

## Enable third-party cookies using the Web SDK tag extension

Select the **[!UICONTROL Use third-party cookies]** checkbox when [configuring the tag extension](/help/tags/extensions/client/web-sdk/web-sdk-extension-configuration.md).

1. Log in to [experience.adobe.com](https://experience.adobe.com) using your Adobe ID credentials.
1. Navigate to **[!UICONTROL Data Collection]** > **[!UICONTROL Tags]**.
1. Select the desired tag property.
1. Navigate to **[!UICONTROL Extensions]**, then click **[!UICONTROL Configure]** on the [!UICONTROL Adobe Experience Platform Web SDK] card.
1. Scroll down to the [!UICONTROL Identity] section, then select the checkbox **[!UICONTROL Use third-party cookies]**.
1. Click **[!UICONTROL Save]**, then publish your changes.

## Enable third-party cookies using the Web SDK JavaScript library

Set the `thirdPartyCookiesEnabled` boolean when running the `configure` command. If you omit this property when configuring the Web SDK, it defaults to `true`. Set this value to `false` if you do not want the Web SDK to use Audience Manager to help identify visitors.

```js
alloy("configure", {
  "edgeConfigId": "ebebf826-a01f-4458-8cec-ef61de241c93",
  "orgId": "ADB3LETTERSANDNUMBERS@AdobeOrg",
  "thirdPartyCookiesEnabled": false
});
```
