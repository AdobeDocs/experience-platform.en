---
title: Hybrid personalization with the Server SDK
description: Request personalization on your server with the Server SDK, then render it in the browser with the Web SDK.
keywords: personalization;hybrid;server-side;applyPropositions;propositions;display events;
badge: Alpha
---
# Hybrid personalization with the Server SDK

In a hybrid personalization implementation, your server requests personalized content and the visitor's browser renders it. The [Adobe Experience Platform Server SDK for JavaScript](/help/collection/server-js/overview.md), or Server SDK, requests the content while your server builds the page, and the [Web SDK](/help/collection/js/js-overview.md) renders it in the browser.

Compared to client-side personalization, this approach has the following benefits:

* **Personalization is ready sooner.** The server requests propositions while it builds the page, so the browser doesn't wait for a separate request to the Edge Network before it can render content.
* **Less flicker.** Because the propositions are already in the page, the browser can render them as soon as the Web SDK loads.
* **The server can use the decisions too.** For example, your server can choose which products to load based on a proposition before it sends the page.

>[!NOTE]
>
>The Server SDK is in alpha. Review the [supported features](/help/collection/server-js/overview.md#features) before you plan an implementation.

## How it works {#how-it-works}

1. The visitor's browser requests a page from your server.
1. Your server calls [`sendEvent`](/help/collection/server-js/methods/sendevent/overview.md) with the [`personalization`](/help/collection/server-js/methods/sendevent/personalization.md) option on the visitor's [`forRequest`](/help/collection/server-js/methods/forrequest.md) handle. The result contains the visitor's propositions.
1. Your server includes the propositions in the HTML that it returns.
1. In the browser, the Web SDK renders the propositions with the [`applyPropositions`](/help/collection/js/commands/applypropositions.md) command.
1. The Web SDK sends a display event for the propositions that it rendered.

## Prerequisites {#prerequisites}

* A datastream with Adobe Target or Adobe Journey Optimizer enabled. Set its **[!UICONTROL Access Type]** to **[!UICONTROL Mixed Authentication]**, because the server sends authenticated requests and the browser sends unauthenticated ones. See [Authentication](/help/collection/server-js/authentication.md#datastream-access-type).
* The Server SDK, [installed](/help/collection/server-js/install.md) and [configured](/help/collection/server-js/methods/configure/overview.md) on your server.
* The Web SDK on your pages, configured with the same [`orgId`](/help/collection/js/commands/configure/orgid.md) and [`datastreamId`](/help/collection/js/commands/configure/datastreamid.md).

## Step 1: Request propositions on the server {#server}

When your server handles a page request, request propositions for the surfaces or decision scopes on that page. Set the page URL explicitly, because the request's `Referer` header contains the *previous* page during a navigation. See [Context and forwarded headers](/help/collection/server-js/concepts/context-and-headers.md#page-url).

```js
async function getPropositions(req) {
  const visitor = alloy.forRequest({ request: req });

  try {
    const { propositions = [] } = await visitor.sendEvent({
      xdm: {
        eventType: "decisioning.propositionFetch",
        web: {
          webPageDetails: {
            URL: `https://www.example.com${req.url}`
          }
        },
        identityMap: {
          Email: [{ id: "visitor@example.com", primary: true }]
        }
      },
      personalization: {
        surfaces: ["web://www.example.com/home#hero"],
        decisionScopes: ["daily-special"]
      }
    });
    return propositions;
  } catch (error) {
    // Render the default experience if personalization isn't available
    console.error("Failed to fetch propositions", error);
    return [];
  }
}
```

The Server SDK doesn't render propositions or send display events. It only returns them. If the request fails, return an empty array so that your page still renders with its default content.

## Step 2: Include the propositions in the page {#page}

Serialize the propositions into the HTML that your server returns. Escape the `<` character so that content in a proposition can't close the `<script>` element early.

```js
const propositions = await getPropositions(req);
const serialized = JSON.stringify(propositions).replace(/</g, "\\u003c");

res.end(`<!DOCTYPE html>
<html>
  <head>
    <script>window.serverPropositions = ${serialized};</script>
    <!-- Web SDK base code and library -->
  </head>
  <body>
    <div id="hero">Default hero content</div>
    <div id="daily-special">Default special</div>
  </body>
</html>`);
```

## Step 3: Render the propositions in the browser {#browser}

After the Web SDK is configured on the page, pass the propositions to `applyPropositions`. For HTML offers that don't include a selector, use `metadata` to tell the Web SDK where to place each one. See [Render HTML offers](/help/collection/use-cases/personalization/render-html-offers.md).

```js
alloy("applyPropositions", {
  propositions: window.serverPropositions || [],
  metadata: {
    "daily-special": { selector: "#daily-special", actionType: "setHtml" }
  }
}).then(({ propositions: renderedPropositions = [] }) => {
  if (!renderedPropositions.length) { return; }
  return alloy("sendEvent", {
    xdm: {
      eventType: "decisioning.propositionDisplay",
      _experience: {
        decisioning: {
          propositions: renderedPropositions.map(({ id, scope, scopeDetails }) => ({
            id,
            scope,
            scopeDetails
          })),
          propositionEventType: { display: 1 }
        }
      }
    }
  });
});
```

`applyPropositions` doesn't send display events on its own. The second `sendEvent` call records which propositions the visitor saw. See [Manage display events](/help/collection/use-cases/personalization/display-events.md).

## Keep the visitor's identity consistent {#identity}

For accurate reporting and personalization, the server and the browser must identify the visitor in the same way:

* **Primary identity**: Every event that the Server SDK sends must include a primary identity in `xdm.identityMap`. See [Include a primary identity](/help/collection/server-js/methods/sendevent/xdm.md#primary-identity).
* **ECID**: The Web SDK stores the visitor's ECID in the `kndctr_<orgId>_identity` cookie. The Server SDK uses the same ECID only if it can read that cookie through the cookie service that you pass to `forRequest`. Otherwise, the server and the browser use different ECIDs for the same visitor. See [Instances and requests](/help/collection/server-js/concepts/instances-and-requests.md#identity).

The Server SDK doesn't include a cookie service that reads the visitor's request cookies. See [Platform services](/help/collection/server-js/concepts/platform-services.md#cookie) for the interface that a cookie service must implement.
