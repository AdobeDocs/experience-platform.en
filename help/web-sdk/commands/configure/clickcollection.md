---
title: clickCollection
description: Fine-tune click collection settings
---
# `clickCollection`

The `clickCollection` property is an object that contains several boolean properties that let you have more control around what types of links are automatically collected. Use of these booleans are helpful when you want to include or exclude types of links from data collection. It requires [`clickCollectionEnabled`](clickcollectionenabled.md) to be enabled. It is supported on Web SDK 2.21.0 or later.

The following booleans are available in the `clickCollection` object:

* **`clickCollection.internalLinkEnabled`**: Automatically track links within the current domain. For example, `https://example.com/index.html` to `https://example.com/product.html`.
* **`clickCollection.downloadLinkEnabled`**: Automatically track links that qualify as downloads based on the [`downloadLinkQualifier`](downloadlinkqualifier.md) property.
* **`clickCollection.externalLinkEnabled`**: Automatically track links to external domains. For example, `https://example.com` to `https://example.net`.
* **`clickCollection.eventGroupingEnabled`**: When `internalLinkEnabled` is enabled, delay sending link tracking data until the following page. When the next page loads, combine the link tracking data with the page load event. Enabling this option reduces the number of events that you send to Adobe.
* **`clickCollection.sessionStorageEnabled`**: When both `internalLinkEnabled` and `eventGroupingEnabled` are enabled, link tracking data is stored in session storage instead of a cookie.

## Click collection settings using the Web SDK tag extension

Select the **[!UICONTROL Enable click data collection]** checkbox when [configuring the tag extension](/help/tags/extensions/client/web-sdk/web-sdk-extension-configuration.md). Enabling this check box reveals the following options related to click collection:

* [!UICONTROL Internal links]
  * [!UICONTROL Enable event grouping]
  * [!UICONTROL Enable session storage]
* [!UICONTROL External links]
* [!UICONTROL Download links]

1. Log in to [experience.adobe.com](https://experience.adobe.com) using your Adobe ID credentials.
1. Navigate to **[!UICONTROL Data Collection]** > **[!UICONTROL Tags]**.
1. Select the desired tag property.
1. Navigate to **[!UICONTROL Extensions]**, then click **[!UICONTROL Configure]** on the [!UICONTROL Adobe Experience Platform Web SDK] card.
1. Scroll down to the [!UICONTROL Data Collection] section, then select the checkbox **[!UICONTROL Enable click data collection]**.
1. Select the desired click collection settings.
1. Click **[!UICONTROL Save]**, then publish your changes.

## Click collection settings using the Web SDK JavaScript library

Set the desired booleans within the `clickCollection` object when running the `configure` command. If not set, default settings for this object depends on the value of [`clickCollectionEnabled`](clickcollectionenabled.md).

* `internalLinkEnabled`: Matches `clickCollectionEnabled`
* `downloadLinkEnabled`: Matches `clickCollectionEnabled`
* `externalLinkEnabled`: Matches `clickCollectionEnabled`
* `eventGroupingEnabled`: Defaults to `false`; must be explicitly enabled
* `sessionStorageEnabled`: Defaults to `false`; must be explicitly enabled

```js
alloy("configure", {
  edgeConfigId: "ebebf826-a01f-4458-8cec-ef61de241c93",
  orgId: "ADB3LETTERSANDNUMBERS@AdobeOrg",
  clickCollectionEnabled: true,
  clickCollection: {
    internalLinkEnabled: true,
    downloadLinkEnabled: true,
    externalLinkEnabled: true,
    eventGroupingEnabled: true,
    sessionStorageEnabled: true
  }
});
```
