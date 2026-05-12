---
title: downloadLinkQualifier
description: Helps determine how automatic link tracking qualifies download links.
exl-id: ef4f0ed4-83fc-485f-866d-f9ca15447ac8
---
# `downloadLinkQualifier`

If you enable automatic link tracking using [`clickCollectionEnabled`](clickcollectionenabled.md), the `downloadLinkQualifier` property helps determine the criteria for a URL to be considered a download link.

This property is a regex string. If the clicked URL matches this regex, `xdm.web.webInteraction.type` is set to `"download"`. Links are also immediately classified as a download link if they include a `download` HTML attribute. If `clickCollectionEnabled` is not enabled, this property does nothing.

Set the `downloadLinkQualifier` string when running the `configure` command. If you omit this property, it defaults to the following value:

`\.(exe|zip|wav|mp3|mov|mpg|avi|wmv|pdf|doc|docx|xls|xlsx|ppt|pptx)$`

If you want to use different criteria to qualify download links, set this property to the desired regex value.

```js
alloy("configure", {
  datastreamId: "ebebf826-a01f-4458-8cec-ef61de241c93",
  orgId: "ADB3LETTERSANDNUMBERS@AdobeOrg",
  clickCollectionEnabled: true,
  downloadLinkQualifier: "\.(exe|zip|wav|mp3|mov|mpg|avi|wmv|pdf|doc|docx|xls|xlsx|ppt|pptx)$"
});
```

## Download link qualifier using the Web SDK tag extension

The Web SDK tag extension equivalent of this field is under [Data collection configuration settings](/help/tags/extensions/client/web-sdk/configure/data-collection.md#download-link-qualifier) when configuring the tag extension.
