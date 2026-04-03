---
title: Share identity across domains
description: Maintain identity continuity across domains that your organization owns to improve personalization and reporting.
---
# Share identity across domains

When visitors move between domains that your organization owns, each domain maintains its own visitor identity by default. Without an explicit handoff, a visitor who clicks from one of your domains to another is treated as a new, unknown person on the destination site. This type of implementation fragments reporting and restarts personalization.

Cross-domain identity sharing solves this issue by appending an `adobe_mc` query-string parameter to the destination URL when a visitor clicks a link or is redirected. This parameter carries the visitor's [Experience Cloud ID (ECID)](./overview.md), your organization ID, and a timestamp. When the destination page loads with a valid `adobe_mc` parameter, the Web SDK automatically reads it and applies the handed-off identity on its first Edge Network request, so both domains share the same visitor. The `adobe_mc` parameter expires after five minutes, so the destination page must load promptly after the redirect.

This use case covers identity sharing between websites on different domains. If you want to pass identity from a mobile app into a WebView or mobile web page, use [mobile-to-web identity sharing](./mobile-to-web.md) instead.

## Prerequisites

Before you begin, make sure that your implementation meets the following requirements:

* **Web SDK**: [Web SDK](/help/collection/js/js-overview.md) version **2.11.0 or later**, or the Web SDK tag extension, is installed on both the source and destination domains.
* **Matching configuration**: All participating domains use the same [`orgId`](../js/commands/configure/orgid.md) when configuring the Web SDK.
* **URL control**: Your code controls the links or redirects between domains so that you can append query-string parameters to the destination URL.

## Implement cross-domain sharing

You must configure identity sharing on every domain that acts as a source in a cross-domain handoff. If visitors can navigate in both directions between two domains, configure both domains as sources.

>[!BEGINTABS]

>[!TAB JavaScript library]

Use the [`appendIdentityToUrl`](/help/collection/js/commands/appendidentitytourl.md) command to append the `adobe_mc` parameter to outbound links. The following example listens for clicks on anchor elements and appends identity to any link that points to a desired domain:

```js
document.addEventListener("click", event => {
  // Check if the click was a link
  const anchor = event.target.closest("a");
  if (!anchor || !anchor.href) return;

  // Check if the link points to a domain you want to share identity with
  const url = new URL(anchor.href);
  if (!url.hostname.endsWith(".example.com") && !url.hostname.endsWith(".example.org")) return;

  // Append the identity to the URL, then navigate
  event.preventDefault();
  alloy("appendIdentityToUrl", { url: anchor.href }).then(result => {
    window.open(result.url, anchor.target || "_self");
  });
});
```

>[!TAB Web SDK tag extension]

Use the [**[!UICONTROL Redirect with identity]**](/help/tags/extensions/client/web-sdk/actions/redirect-with-identity.md) action to append the `adobe_mc` parameter to outbound links. You can create a rule with the following conditions to achieve the desired behavior:

1. **Event**: Set the extension to **[!UICONTROL Core]** and the event type to **[!UICONTROL Click]**. Under **[!UICONTROL Elements matching the CSS selector]**, enter `a[href]`.
2. **Condition**: Set the extension to **[!UICONTROL Core]** and the condition type to **[!UICONTROL Value Comparison]**. Set **[!UICONTROL Left Operand]** to `%this.hostname%`, **[!UICONTROL Operator]** to **[!UICONTROL Matches Regex]**, and **[!UICONTROL Right Operand]** to a regular expression that matches your destination domains (for example, `example\.com$|example\.org$`).
3. **Action**: Set the extension to **[!UICONTROL Adobe Experience Platform Web SDK]** and the action type to **[!UICONTROL Redirect with identity]**.

>[!ENDTABS]

## Receive identity on the destination domain

No additional code is required on the destination domain. When the Web SDK is present on the page and the URL contains a valid `adobe_mc` parameter, the SDK automatically extracts the ECID and applies it to the visitor's identity map on its first Edge Network request.

Ensure that the destination domain meets the following conditions:

* The Web SDK or Web SDK tag extension is installed and configured with the same [`orgId`](../js/commands/configure/orgid.md) as the source domain. You can use the JavaScript library and Web SDK tag extension interchangeably between domains, as long as they share the same `orgId`.
* The page loads and sends its first Edge Network request within **five minutes** of the redirect, before the `adobe_mc` parameter expires.
