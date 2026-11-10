---
title: Personalization use cases overview
description: Learn how to implement personalization use cases using the Adobe Experience Platform Web SDK, including patterns for rendering content and tracking display.
exl-id: 6beccbfd-fddb-4e19-8a56-caba276e1643
feature_v2:
  - id: d5947817-d24b-4ba3-8126-2c3d66e9422b
    internal-label: Web SDK
level_v2:
  - id: e8ccd51f-da0d-4e3b-939b-e30d5ebb1ea5
    internal-label: Beginner
topic_v2:
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
  - id: e0eb8757-182f-49f3-94a4-1587d16f5094
    internal-label: Personalization
autotag-review: '2026-11-05T22:08:57.077Z'
---
# Personalization use cases overview

The Adobe Experience Platform Web SDK enables a wide variety of personalization use cases for web properties. It supports flexible architectures (client-side, server-side, and hybrid) so you can request decisions and render content in ways that match your site's needs.

## Render personalized content

The Web SDK can retrieve personalization decisions (also known as _propositions_) and help you render them on the page. Rendering is asynchronous, so avoid assuming a specific timing for when content is applied.

Choose the pattern that matches the proposition items you receive:

1. **Automatically render DOM action propositions**: Use when propositions include `dom-action` items with selectors and action types that Web SDK can apply automatically. See [Automatically render DOM action propositions](render-auto-pers-content.md).
1. **Render HTML offers without selectors using applyPropositions**: Use when you receive HTML content, but you must provide where and how to apply it (selector + action type) via metadata. See [Render HTML offers without selectors](render-html-offers.md).
1. **Manually render propositions**: Use when you need full control over rendering logic (for example, composing UI from JSON or applying custom business rules). See [Manually render propositions](render-manual-propositions.md).

>[!TIP]
>
>These patterns can be combined. For example, you can enable automatic DOM action rendering while also manually rendering content from specific decision scopes.

## Request personalization on your server

If your server builds the page, it can request propositions before the page reaches the browser, and the Web SDK can then render them. See [Hybrid personalization with the Server SDK](hybrid-server-personalization.md).

## Common companion topics

Most personalization implementations involve these common topics:

* **Prevent flicker** (optional): Hide and reveal containers during personalization. See [Manage flicker](manage-flicker.md).
* **Track what was displayed**: Record display events for rendered content. See [Manage display events](display-events.md).
* **Top-of-page fetch / bottom-of-page metrics**: Request decisions early, then include measurement later. See [Configure top and bottom of page events](top-bottom-page-events.md).

## Web SDK samples

In addition to the doc pages in this folder, Adobe maintains a repository of sample applications that you can reference. See [Web SDK samples](https://github.com/adobe/alloy-samples/) on GitHub for additional personalization scenarios, including:

* Client-side personalization
* Server-side personalization
* Hybrid personalization
* Personalization in single-page applications
