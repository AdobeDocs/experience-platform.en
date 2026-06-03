---
title: appendIdentityToUrl
description: Deliver personalized experiences more accurately between apps, web, and across domains.
exl-id: 09dd03bd-66d8-4d53-bda8-84fc4caadea6
TQID: https://experienceleague.adobe.com/qv1cDywmnFUHfk2eRMCksc4kx9MFspy0eOn1ZtbPxhQ
product_v2:
  - id: d0a3eab4-7b10-4d96-a71e-6c0f8e7b7c87
    internal-label: CX Enterprise
  - id: e43347a8-f2c5-4aa4-8623-6f13875d7e3a
    internal-label: Target
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
---
# `appendIdentityToUrl`

The `appendIdentityToUrl` command allows you to add a user identifier to the URL as a query string. This action allows you to carry a visitor's identity between domains, preventing duplicate visitor counts for datasets that include both domains or channels. It is available on Web SDK versions 2.11.0 or later.

The query string generated and appended to the URL is `adobe_mc`. If the Web SDK cannot find an ECID, it calls the `/acquire` endpoint to generate one.

>[!NOTE]
>
>If consent has not been provided, the URL from this method is returned unchanged. This command runs immediately; it does not wait for a consent update.

Run the `appendIdentityToUrl` command with a URL as a parameter. The method returns a URL with the identifier appended as a query string.

```js
alloy("appendIdentityToUrl",
  {
    url: document.location.href
  }
);
```

You can add an event listener for all clicks received on the page and check to see if the URL matches any desired domains. If it does, append the identity to the URL and redirect the user.

```js
document.addEventListener("click", event => {
  // Check if the click was a link
  const anchor = event.target.closest("a");
  if (!anchor || !anchor.href) return;

  // Check if the link points to the desired domain
  const url = new URL(anchor.href);
  if (!url.hostname.endsWith(".adobe.com") && !url.hostname.endsWith(".behance.com")) return;

  // Append the identity to the URL, then direct the user to the URL
  event.preventDefault();
  alloy("appendIdentityToUrl", {url: anchor.href}).then(result => { window.open(result.url, anchor.target || "_self"); });
});
```

This command supports the [`edgeConfigOverrides`](configure/edgeconfigoverrides.md) object.

## Response object

When [handling responses](command-responses.md) with this command, the response object contains **`url`**, the new URL with identity information added as a query string parameter.

## Append identity to URL using the Web SDK tag extension

The Web SDK tag extension equivalent to this command is the [Redirect with identity](/help/tags/extensions/client/web-sdk/actions/redirect-with-identity.md) action.
