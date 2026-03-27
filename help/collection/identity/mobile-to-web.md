---
title: Share identity from mobile apps to mobile web/WebViews
description: Pass identity from a mobile app into mobile web content or a WebView so reporting and personalization can continue in the web context.
---
# Share identity from mobile apps to mobile web/WebViews

When a visitor moves from a mobile app into mobile web content or a WebView, identity can split between the app and the web context. This creates reporting gaps and can cause personalization to restart. This use case helps you preserve continuity during that handoff.

## When to use this use case

Use this pattern when:

* your mobile app opens a WebView or mobile web page that your organization controls
* you want app activity and mobile web activity to remain tied to the same visitor
* you want personalization or reporting to continue without treating the web visit as a new visitor

If your goal is continuity between websites on different domains, use [cross-domain sharing](./cross-domain-sharing.md) instead.

## High-level flow

```text
Mobile app
  -> retrieve identity URL variables
  -> append identity to the URL used for the WebView or mobile web page
  -> load the destination page
  -> the web context uses the handed-off identity on its first request
  -> reporting and personalization continue in the web experience
```

## Prerequisites

At a summary level, you need:

* a mobile app implementation using the Adobe Experience Platform Mobile SDK Identity for Edge Network extension
* a mobile web or WebView destination that uses the Web SDK or Web SDK tag extension
* control over the URL handoff between the app and the web destination
* aligned Adobe organization and data collection setup across the app and web experience

## Technical docs

* [`getUrlVariables`](https://developer.adobe.com/client-sdks/documentation/identity-for-edge-network/api-reference/#geturlvariables)
* [`appendIdentityToUrl`](/help/collection/js/commands/appendidentitytourl.md)
* [Redirect with identity](/help/tags/extensions/client/web-sdk/actions/redirect-with-identity.md)
* [Handle WebViews in Mobile SDK implementations](https://experienceleague.adobe.com/docs/platform-learn/implement-mobile-sdk/app-implementation/web-views.html#implementation)
