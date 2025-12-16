---
title: clickCollection
description: Fine-tune click collection settings.
exl-id: 5a128b4a-4727-4415-87b4-4ae87a7e1750
---
# `clickCollection`

The `clickCollection` object contains several variables that help you control automatically collected link data. Use these variables when you want to include or exclude types of links from data collection. It is supported on Web SDK versions 2.25.0 or later.

This variable requires all of the following:

* [`clickCollectionEnabled`](clickcollectionenabled.md) must be enabled.
* If you use `clickCollection.filterClickDetails`, the deprecated method [`onBeforeLinkClickSend`](onbeforelinkclicksend.md) must be empty.
* The event payload must contain a value in `xdm.web.webPageDetails.name` at some point in the visitor's visit.

If your implementation does not meet all of the above requirements, then this object does nothing.

The following properties are available in the `clickCollection` object:

| Property | Type | Description |
| --- | --- | --- |
| **`internalLinkEnabled`** | `boolean` | Determines if links within the current domain are automatically tracked. For example, `https://example.com/index.html` to `https://example.com/product.html` would be considered an internal link. |
| **`downloadLinkEnabled`** | `boolean` | Determines if the library tracks links that qualify as downloads based on the [`downloadLinkQualifier`](downloadlinkqualifier.md) property. |
| **`externalLinkEnabled`** | `boolean` | Determines if links to external domains are automatically tracked. For example, `https://example.com` to `https://example.net` would be considered an external link. |
| **`eventGroupingEnabled`** | `boolean` | Determines if the library waits until the next "page view" event to send link tracking data. The library considers an event a "page view" when the following elements are included in the payload:<ul><li>`xdm.web.webPageDetails.name` contains a string value</li><li>`xdm.web.webPageDetails.pageViews.value` is greater than `0`</li></ul>When the "page view" event loads, the library combines stored link tracking data with the rest of the data in that event. Enabling this option reduces the total number of events that you send to Adobe. If `internalLinkEnabled` is disabled, then this variable does nothing. |
| **`sessionStorageEnabled`** | `boolean` | Determines if link tracking data is stored in session storage instead of local variables. If `internalLinkEnabled` or `eventGroupingEnabled` are disabled, then this variable does nothing.<br>Adobe strongly recommends enabling this variable when using `eventGroupingEnabled` outside of single-page applications. If `eventGroupingEnabled` is enabled while `sessionStorageEnabled` is disabled, clicking to a new page results in loss of link tracking data, as it is not preserved in session storage. Since single-page applications don't typically navigate to a new page, session storage is not required for SPA pages. |
| **`filterClickDetails`** | `function` | A callback function that provides full controls over link tracking data that you collect. You can use this callback function to alter, obfuscate, or abort sending link tracking data. This callback is useful when you want to omit specific information, such as personally identifiable information within links. |

If you don't set this object in the [`configure`](overview.md) command, then the default settings for this object depend on the value of [`clickCollectionEnabled`](clickcollectionenabled.md):

* `internalLinkEnabled`: Matches `clickCollectionEnabled`
* `downloadLinkEnabled`: Matches `clickCollectionEnabled`
* `externalLinkEnabled`: Matches `clickCollectionEnabled`
* `eventGroupingEnabled`: Defaults to `false`; must be explicitly enabled
* `sessionStorageEnabled`: Defaults to `false`; must be explicitly enabled
* `filterClickDetails`: Does not contain a function; must be explicitly registered

>[!TIP]
>
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

## Configure click collection for the Web SDK tag extension

These settings can be configured in the Web SDK tag extension using [Data collection configuration settings](/help/tags/extensions/client/web-sdk/configure/data-collection.md).
