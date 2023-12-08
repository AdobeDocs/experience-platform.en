---
title: appendIdentityToUrl
description: Deliver personalized experiences more accurately between apps, web, and across domains.
---
# `appendIdentityToUrl`

The `appendIdentityToUrl` command allows you to add a user identifier to a the URL as a query string. This action allows you to carry a visitor's identity between domains, preventing duplicate visitor counts for datasets that include both domains or channels. It is available on the Web SDK v2.11.0 or later.

The query string generated and appended to the URL is `adobe_mc`. If the Web SDK cannot find an ECID, it calls the `/acquire` endpoint to generate one.

>[!NOTE]
>
>If consent has not been provided, the URL from this method is returned unchanged. This command runs immediately; it does not wait for a consent update.

## Append identity to URL using the Web SDK extension



## Append identity to URL using the Web SDK JavaScript library

Run the `appendIdentityToUrl` command with a URL as a parameter. The method returns a URL with the identifier appended as a query string.

```js
alloy("appendIdentityToUrl",document.location);
```

You can add an event listener for all clicks on the page and check to see if the URL matches any desired domains. If it does, append the identity to the URL and redirect the user.

```js
document.addEventListener("click", event => {
  // Check if the click was a link
  const anchor = event.target.closest("a");
  if (!anchor || !anchor.href) return;

  // Check if the link points to the right domain
  const url = new URL(anchor.href);
  if (!url.hostname.endsWith("adobe.com") && !url.hostname.endsWith("behance.com")) return;

  // Append the identity to the URL, then direct the user to the URL
  event.preventDefault();
  alloy("appendIdentityToUrl", {url: anchor.href}).then(result => {document.location = result.url;});
});
```
