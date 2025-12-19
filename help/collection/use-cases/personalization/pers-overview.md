---
title: Personalization use cases overview
description: Learn how to implement personalization use cases using the Adobe Experience Platform Web SDK, including patterns for rendering content and tracking display.
keywords: personalization;sendEvent;renderDecisions;applyPropositions;decisionScopes;display events;flicker;
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
