---
title: edgeDomain
description: Determine the root domain that you want to send data to.
exl-id: 6beb5116-cd23-42fd-934c-5cf84d1d7153
---
# `edgeDomain`

The `edgeDomain` property allows you to change the domain where the Web SDK sends data. This property is frequently used by organizations using [first party cookies](https://experienceleague.adobe.com/docs/core-services/interface/administration/ec-cookies/cookies-first-party.html). Data is sent to the organization's own domain, then a CNAME record forwards that data to Adobe.

Your organization determines the correct value for this property when setting up [first party cookies](https://experienceleague.adobe.com/docs/core-services/interface/administration/ec-cookies/cookies-first-party.html). An organization typically uses a dedicated subdomain for this purpose. For example, if you use the domain `example.com`, you can set up first party cookies on `data.example.com`.

## Configure an edge domain using the Web SDK tag extension

Set the **[!UICONTROL Edge domain]** text field when [configuring the tag extension](/help/tags/extensions/client/web-sdk/web-sdk-extension-configuration.md).

1. Log in to [experience.adobe.com](https://experience.adobe.com) using your Adobe ID credentials.
1. Navigate to **[!UICONTROL Data Collection]** > **[!UICONTROL Tags]**.
1. Select the desired tag property.
1. Navigate to **[!UICONTROL Extensions]**, then click **[!UICONTROL Configure]** on the [!UICONTROL Adobe Experience Platform Web SDK] card.
1. Locate the text field **[!UICONTROL Edge domain]**, then enter the desired value.
1. Click **[!UICONTROL Save]**, then publish your changes.

## Configure an edge domain using the Web SDK JavaScript library

Set the `edgeDomain` string when running the `configure` command. If you omit this property when configuring the SDK, it defaults to `edge.adobedc.net`. Set this value if you would like to override the domain that the Web SDK sends data to.

```js
alloy("configure", {
  "edgeConfigId": "ebebf826-a01f-4458-8cec-ef61de241c93",
  "orgId": "ADB3LETTERSANDNUMBERS@AdobeOrg",
  "edgeDomain": "data.example.com"
});
```
