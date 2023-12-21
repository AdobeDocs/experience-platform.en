---
title: downloadLinkQualifier
description: Helps determine how automatic link tracking qualifies download links.
---
# `downloadLinkQualifier`

If you enable automatic link tracking using [`clickCollectionEnabled`](clickcollectionenabled.md), the `downloadLinkQualifier` property helps determine the criteria for a URL to be considered a download link.

This property is a regex string. If the clicked URL matches this regex, `xdm.web.webInteraction.type` is set to `"download"`. Links are also immediately classified as a download link if they include a `download` HTML attribute. If `clickCollectionEnabled` is not enabled, this property does nothing.

## Download link qualifier using the Web SDK tag extension

Enable the **[!UICONTROL Enable click data collection]** checkbox, then enter the desired text under **[!UICONTROL Download link qualifier]** when [configuring the tag extension](/help/tags/extensions/client/web-sdk/web-sdk-extension-configuration.md).

1. Log in to [experience.adobe.com](https://experience.adobe.com) using your Adobe ID credentials.
1. Navigate to **[!UICONTROL Data Collection]** > **[!UICONTROL Tags]**.
1. Select the desired tag property.
1. Navigate to **[!UICONTROL Extensions]**, then click **[!UICONTROL Configure]** on the [!UICONTROL Adobe Experience Platform Web SDK] card.
1. Scroll down to the [!UICONTROL Data Collection] section, then select the checkbox **[!UICONTROL Enable click data collection]**.
1. Once enabled, the **[!UICONTROL Download link qualifier]** text box appears. Enter the desired value. Buttons are also available to test the regex and restore the default value.
1. Click **[!UICONTROL Save]**, then publish your changes.

## Download link qualifier using the Web SDK JavaScript library

Set the `downloadLinkQualifier` string when running the `configure` command. If you omit this property, it defaults to the following value:

`\.(exe|zip|wav|mp3|mov|mpg|avi|wmv|pdf|doc|docx|xls|xlsx|ppt|pptx)$`

If you want to use different criteria to qualify download links, set this property to the desired regex value.

```js
alloy("configure", {
  "edgeConfigId": "ebebf826-a01f-4458-8cec-ef61de241c93",
  "orgId": "ADB3LETTERSANDNUMBERS@AdobeOrg",
  "clickCollectionEnabled": true,
  "downloadLinkQualifier": "\.(exe|zip|wav|mp3|mov|mpg|avi|wmv|pdf|doc|docx|xls|xlsx|ppt|pptx)$"
});
```
