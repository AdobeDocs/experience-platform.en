---
title: Share identity across domains
description: Maintain identity continuity across domains your organization owns to improve personalization and reporting.
---
# Share identity across domains

When visitors move between domains that your organization owns, you may want them to remain the same recognized visitor. Cross-domain identity sharing helps preserve continuity so reporting and personalization can follow the visitor across those owned properties.

## Why teams use cross-domain sharing

This pattern is useful when you want to:

* preserve visitor continuity across multiple owned domains
* reduce duplicate visitor counts when people move between those domains
* improve personalization by carrying the same visitor context into the destination site
* get cleaner reporting on journeys that span more than one owned property

## When cross-domain sharing is appropriate

Use this pattern when:

* the source and destination domains are both owned and controlled by your organization
* you control the links or redirects between those domains
* the destination experience uses the Web SDK or Web SDK tag extension

This use case is not the same as handing off identity from a mobile app to a WebView or mobile web page. For that scenario, use [mobile-to-web identity sharing](./mobile-to-web.md).

## High-level implementation pattern

```text
Visitor on owned domain A
  -> clicks a link or is redirected to owned domain B
  -> source page appends identity information to the destination URL
  -> destination page reads the handed-off identity on its first request
  -> reporting and personalization continue with the same visitor context
```

## Technical docs

* [`appendIdentityToUrl`](/help/collection/js/commands/appendidentitytourl.md)
* [Redirect with identity](/help/tags/extensions/client/web-sdk/actions/redirect-with-identity.md)
