---
title: Differences from Web SDK
description: Compare the Server SDK with the Web SDK JavaScript library to plan a server-side or hybrid implementation.
badge: Alpha
---
# Differences from Web SDK

The Server SDK and the [Web SDK](/help/collection/js/js-overview.md) share the same core, so they send data in the same format, to the same datastreams, and use the same cookies. Because one runs on a server and the other in a browser, they differ in several ways. Use this page to plan a migration, or to share code between a browser and a server implementation.

## Comparison {#comparison}

| Area | Web SDK | Server SDK |
| --- | --- | --- |
| Where it runs | The visitor's browser | Your server, in Node.js or another server-side JavaScript runtime. See [Runtime support](overview.md#runtime-support). |
| Installation | Tag extension, JavaScript library, or the `@adobe/alloy` npm package | The `@adobe/alloy-node` npm package. See [Install](install.md). |
| How you call it | `alloy("sendEvent", { ... })` | `alloy.sendEvent({ ... })`. See [Methods overview](methods/overview.md). |
| Instances | One per page load, serving one visitor | One per process, plus a [`forRequest`](methods/forrequest.md) handle for each visitor request |
| Authentication | None | Required. Events go to the authenticated Edge Network Server API. See [Authentication](authentication.md). |
| Identity | Read from and written to browser cookies automatically | Read from and written to a cookie service that you provide. Every event needs a [primary identity](methods/sendevent/xdm.md#primary-identity). |
| Consent | `defaultConsent` accepts `"in"`, `"out"`, and `"pending"` | `defaultConsent` accepts `"in"` and `"out"` only |
| Personalization | Requests, renders, and tracks the display of propositions | Requests propositions and returns them. Doesn't render them or track their display. |
| Context data | Page, device, environment, place, and client hint details from the browser | Implementation details, the visitor's forwarded request headers, and the page URL from the `Referer` header. See [Context and forwarded headers](concepts/context-and-headers.md). |
| `sendEvent` result | `propositions`, `inferences`, and `destinations` | `propositions` |
| Debugging | `debugEnabled`, `setDebug`, the `alloy_debug` query string parameter, and Adobe Experience Platform Debugger | `debugEnabled` and `setDebug`, with messages written to the console |
| Monitoring hooks | The `monitors` option and the `__alloyMonitors` global variable | The `monitors` option of `createInstance` |

## Methods {#methods}

The Server SDK adds the [`forRequest`](methods/forrequest.md) method, which doesn't exist in the Web SDK.

It supports the following Web SDK commands as methods: [`appendIdentityToUrl`](methods/appendidentitytourl.md), [`applyResponse`](methods/applyresponse.md), [`configure`](methods/configure/overview.md), [`getIdentity`](methods/getidentity.md), [`getLibraryInfo`](methods/getlibraryinfo.md), [`sendEvent`](methods/sendevent/overview.md), [`setConsent`](methods/setconsent.md), and [`setDebug`](methods/setdebug.md).

The following Web SDK commands aren't available, because they depend on a browser or on components that the Server SDK doesn't include:

* `applyPropositions`
* `createMediaSession`
* `getMediaAnalyticsTracker`
* `sendMediaEvent`
* `sendPushSubscription`
* `subscribeRulesetItems`

## Configuration options {#configuration}

* **New and required**: [`edgeCredentials`](methods/configure/edgecredentials.md).
* **Supported**: [`datastreamId`](methods/configure/datastreamid.md), [`orgId`](methods/configure/orgid.md), [`debugEnabled`](methods/configure/debugenabled.md), [`defaultConsent`](methods/configure/defaultconsent.md), [`edgeBasePath`](methods/configure/edgebasepath.md), [`edgeConfigOverrides`](methods/configure/edgeconfigoverrides.md), [`edgeDomain`](methods/configure/edgedomain.md), [`idMigrationEnabled`](methods/configure/idmigrationenabled.md), [`onBeforeEventSend`](methods/configure/onbeforeeventsend.md), and [`thirdPartyCookiesEnabled`](methods/configure/thirdpartycookiesenabled.md). Some of these behave differently on a server. See each option's page.
* **Not supported**: Every other Web SDK option. If you include one, `configure` rejects. See [Options that the Server SDK doesn't support](methods/configure/overview.md#unsupported).

## sendEvent options {#sendevent}

* **Supported**: [`xdm`](methods/sendevent/xdm.md), [`data`](methods/sendevent/data.md), [`type`](methods/sendevent/eventtype.md), [`personalization.decisionScopes` and `personalization.surfaces`](methods/sendevent/personalization.md), the top-level `decisionScopes` array, and [`edgeConfigOverrides`](methods/sendevent/edgeconfigoverrides.md).
* **Accepted, but no effect**: `renderDecisions`, `advertising`, and the other `personalization` properties. See [Options that have no effect on a server](methods/sendevent/overview.md#no-effect).
* **Avoid**: `documentUnloading`.

## Frequently asked questions {#faq}

### Can I use the Server SDK and the Web SDK on the same website? {#same-site}

Yes. A common pattern is to request personalization on the server and render it in the browser. See [Hybrid personalization](/help/collection/use-cases/personalization/hybrid-server-personalization.md). Both libraries can send data to the same datastream if its **[!UICONTROL Access Type]** is **[!UICONTROL Mixed Authentication]**. Both use the same cookie names for identity and consent.

### Why does every event need a primary identity? {#primary-identity}

The Server SDK sends events to the authenticated Edge Network Server API. Because the request comes from your server, the Edge Network can't use the visitor's browser cookies to identify them. Instead, it requires a primary identity in the event. See [`xdm`](methods/sendevent/xdm.md#primary-identity).

### Can I use the Server SDK in serverless functions? {#serverless}

Yes, if the function's runtime meets the [requirements](overview.md#requirements). Create and configure the instance at the top level of your module, outside the function handler. This way, warm invocations reuse the configured instance and its cached access token. Call `forRequest` inside the handler for each invocation.

### Can I use Adobe Experience Platform Debugger? {#debugger}

No. Adobe Experience Platform Debugger is a browser extension that inspects pages. To debug the Server SDK, set [`debugEnabled`](methods/configure/debugenabled.md) to `true` or call [`setDebug`](methods/setdebug.md), and review your server's console output.
