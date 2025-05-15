---
title: clickCollectionEnabled
description: Learn how to configure Web SDK to tetermine if link click data is automatically collected.
exl-id: e91b5bc6-8880-4884-87f9-60ec8787027e
---
# `clickCollectionEnabled`

The `clickCollectionEnabled` property is a boolean that determines if the Web SDK automatically collects link data. If you do not set this variable, its default value is `true` which means that link tracking data is automatically collected by default. Setting this property to `false` is valuable in cases where you prefer to track link data manually.

When `clickCollectionEnabled` is enabled, the following XDM elements automatically populate with data:

* `xdm.web.webInteraction.name`
* `xdm.web.webInteraction.type`
* `xdm.web.webInteraction.URL`

Internal links, download links, and exit links are all automatically tracked by default when this boolean is enabled. If you want more control over automatic link tracking, Adobe recommends using the [`clickCollection`](clickcollection.md) object.

## Support for open [!DNL Shadow DOM] elements

The Web SDK supports automatic click tracking for links inside **open Shadow DOM** elements.

Many modern websites use [Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components) to build reusable and encapsulated user interface elements. These components often use a technology called [**Shadow DOM**](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_shadow_DOM) to keep their internal structure and styles separate from the rest of the page.

There are two types of Shadow DOM:

* **Open Shadow DOM:** The internal structure is accessible to JavaScript running on the page. This means other scripts can interact with or inspect the contents of the component.
* **Closed Shadow DOM:** The internal structure is hidden from JavaScript outside the component, making it inaccessible for tracking or manipulation.

The Web SDK automatically tracks clicks on `<a>` and `<area>` elements inside **open Shadow DOMs**, just as it does for links in the main document. This ensures that link clicks within web components using open [!DNL Shadow DOM] are included in your analytics data. Clicks inside **closed Shadow DOMs** are not tracked, as their contents are not accessible.

## Automatic link tracking logic

The Web SDK tracks all clicks on `<a>` and `<area>` HTML elements if it doesn't have an `onClick` attribute. Clicks are captured with a [capture](https://www.w3.org/TR/uievents/#capture-phase) click event listener that is attached to the document. When a valid link is clicked, the following logic is run in order:

1. If the link matches criteria based on values in [`downloadLinkQualifier`](downloadlinkqualifier.md), or if the link contains a `download` HTML attribute, `xdm.web.webInteraction.type` is set to `"download"` (if `clickCollection.downloadLinkEnabled` is enabled).
1. If the link target domain differs from the current `window.location.hostname`, `xdm.web.webInteraction.type` is set to `"exit"` (if `clickCollection.exitLinkEnabled` is enabled).
1. If the link doesn't qualify for either `"download"` or `"exit"`, `xdm.web.webInteraction.type` is set to `"other"`.

In all cases, `xdm.web.webInteraction.name` is set to the link text label and `xdm.web.webInteraction.URL` is set to the link destination URL. If you want to set the link name to the URL as well, you can override this XDM field using the `filterClickDetails` callback in the `clickCollection` object.

## Enable automatic link tracking using the Web SDK tag extension {#tag-extension}

This variable is automatically managed by the tag extension; you do not need to explicitly set it. If any of the following are selected when [configuring the tag extension](/help/tags/extensions/client/web-sdk/web-sdk-extension-configuration.md), the applicable link tracking data is collected:

* [!UICONTROL Collect internal link clicks]
* [!UICONTROL Collect external link clicks]
* [!UICONTROL Collect download link clicks]

See [`clickCollection`](clickcollection.md) for more information.

## Enable automatic link tracking using the Web SDK JavaScript library {#library}

Set the `clickCollectionEnabled` boolean when running the `configure` command. If you omit this property when configuring the Web SDK, it defaults to `true`. Set this value to `false` if you prefer to set `xdm.web.webInteraction.type` and `xdm.web.webInteraction.value` manually.

```js
alloy(configure, {
  datastreamId: "ebebf826-a01f-4458-8cec-ef61de241c93",
  orgId: "ADB3LETTERSANDNUMBERS@AdobeOrg",
  clickCollectionEnabled: false
});
```
