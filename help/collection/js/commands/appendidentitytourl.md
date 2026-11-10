---
title: appendIdentityToUrl (Web SDK)
description: Deliver personalized experiences more accurately between apps, web, and across domains.
exl-id: 09dd03bd-66d8-4d53-bda8-84fc4caadea6
TQID: 'https://experienceleague.adobe.com/qv1cDywmnFUHfk2eRMCksc4kx9MFspy0eOn1ZtbPxhQ'
feature_v2:
  - id: d5947817-d24b-4ba3-8126-2c3d66e9422b
    internal-label: Web SDK
  - id: a50ad69b-1331-40e9-b634-531a085a6a54
    internal-label: Identities
level_v2:
  - id: b5a62a22-46f7-4f0d-b151-3fc640bef588
    internal-label: Intermediate
topic_v2:
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
  - id: e9001ce2-5245-4a8e-8601-dd958009072f
    internal-label: Web experience
autotag-review: '2026-11-05T22:08:57.077Z'
---
# `appendIdentityToUrl` (Web SDK)

>[!BEGINSHADEBOX]

*This page describes the Web SDK `appendIdentityToUrl` command. For the Server SDK, see [`appendIdentityToUrl`](/help/collection/server-js/methods/appendidentitytourl.md).*

>[!ENDSHADEBOX]

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
