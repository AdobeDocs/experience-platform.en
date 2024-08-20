---
title: clickCollection
description: Fine-tune click collection settings.
exl-id: 5a128b4a-4727-4415-87b4-4ae87a7e1750
---
# `clickCollection`

The `clickCollection` object contains several variables that help you control automatically collected link data. Use these variables when you want to include or exclude types of links from data collection.

It requires [`clickCollectionEnabled`](clickcollectionenabled.md) to be enabled.

It is supported on Web SDK 2.25.0 or later.

The following variables are available in the `clickCollection` object:

* **`clickCollection.internalLinkEnabled`**: A boolean that determines if links within the current domain are automatically tracked. For example, `https://example.com/index.html` to `https://example.com/product.html`.
* **`clickCollection.downloadLinkEnabled`**: A boolean that determines if the library tracks links that qualify as downloads based on the [`downloadLinkQualifier`](downloadlinkqualifier.md) property.
* **`clickCollection.externalLinkEnabled`**: A boolean that determines if links to external domains are automatically tracked. For example, `https://example.com` to `https://example.net`.
* **`clickCollection.eventGroupingEnabled`**: A boolean that determines if the library waits until the next page to send link tracking data. When the next page loads, combine the link tracking data with the page load event. Enabling this option reduces the number of events that you send to Adobe. If `internalLinkEnabled` is disabled, then this variable does nothing. 
* **`clickCollection.sessionStorageEnabled`**: A boolean that determines if link tracking data is stored in session storage instead of local variables. If `internalLinkEnabled` or `eventGroupingEnabled` are disabled, then this variable does nothing.
  
  Adobe strongly recommends enabling this variable when using `eventGroupingEnabled` outside of single-page applications. If `eventGroupingEnabled` is enabled while `sessionStorageEnabled` is disabled, clicking to a new page results in loss of link tracking data, as it is not preserved in session storage. Since single-page applications don't typically navigate to a new page, session storage is not required for SPA pages.
* **`filterClickDetails`**: A callback function that provides full controls over link tracking data that you collect. You can use this callback function to alter, obfuscate, or abort sending link tracking data. This callback is useful when you want to omit specific information, such as personally identifiable information within links.

## Click collection settings using the Web SDK tag extension

Select any of the following options when [configuring the tag extension](/help/tags/extensions/client/web-sdk/web-sdk-extension-configuration.md):

* [!UICONTROL Collect internal links]
  * [!UICONTROL Event grouping options]:
    * [!UICONTROL No event grouping]
    * [!UICONTROL Event grouping using session storage]
    * [!UICONTROL Event grouping using local object]
* [!UICONTROL Collect external links]
* [!UICONTROL Collect download links]
* [!UICONTROL Filter click properties]

1. Log in to [experience.adobe.com](https://experience.adobe.com) using your Adobe ID credentials.
1. Navigate to **[!UICONTROL Data Collection]** > **[!UICONTROL Tags]**.
1. Select the desired tag property.
1. Navigate to **[!UICONTROL Extensions]**, then click **[!UICONTROL Configure]** on the [!UICONTROL Adobe Experience Platform Web SDK] card.
1. Scroll down to the [!UICONTROL Data Collection] section, then select the desired click collection settings.
1. Click **[!UICONTROL Save]**, then publish your changes.

The [!UICONTROL Filter click properties] callback opens a custom code editor that lets you insert the desired code. Within the code editor, you have access to the following variables:

* **`content.clickedElement`**: The DOM element that was clicked.
* **`content.pageName`**: The page name when the click happened.
* **`content.linkName`**: The name of the clicked link.
* **`content.linkRegion`**: The region of the clicked link.
* **`content.linkType`**: The type of link (exit, download, or other).
* **`content.linkURL`**: The destination URL of the clicked link.
* **`return true`**: Immediately exit the callback with the current variable values.
* **`return false`**: Immediately exit the callback and abort collecting data.

Any variables defined outside of `content` can be used, but are not included in the payload sent to Adobe.

## Click collection settings using the Web SDK JavaScript library

Set the desired variables within the `clickCollection` object when running the [`configure`](overview.md) command. If not set, default settings for this object depend on the value of [`clickCollectionEnabled`](clickcollectionenabled.md).

* `internalLinkEnabled`: Matches `clickCollectionEnabled`
* `downloadLinkEnabled`: Matches `clickCollectionEnabled`
* `externalLinkEnabled`: Matches `clickCollectionEnabled`
* `eventGroupingEnabled`: Defaults to `false`; must be explicitly enabled
* `sessionStorageEnabled`: Defaults to `false`; must be explicitly enabled
* `filterClickDetails`: Does not contain a function; must be explicitly registered

>[!TIP]
>Adobe recommends enabling `eventGroupingEnabled` when `internalLinkEnabled` is enabled, as it reduces the number of events that count toward contractual usage.

```js
alloy("configure", {
  datastreamId: "ebebf826-a01f-4458-8cec-ef61de241c93",
  orgId: "ADB3LETTERSANDNUMBERS@AdobeOrg",
  clickCollectionEnabled: true,
  clickCollection: {
    internalLinkEnabled: true,
    downloadLinkEnabled: true,
    externalLinkEnabled: true,
    eventGroupingEnabled: true,
    sessionStorageEnabled: true,
    filterClickDetails: function(content) {
      // If the link is a clickable telephone number, anonymize it
      if(content.linkUrl?.includes("tel:")) {
        content.linkName = content.linkUrl = "Phone number";
      }
      // If the link is an email address, anonymize it
      if(content.linkUrl?.includes("mailto:")) {
        content.linkName = content.linkUrl = "Email address";
      }
    }
  }
});
```
