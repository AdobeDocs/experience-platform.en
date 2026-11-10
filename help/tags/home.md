---
title: Tags Overview
description: Tags in Adobe Experience Platform are the next generation of tag management capabilities from Adobe. Tags give customers a simple way to deploy and manage all of the analytics, marketing, and advertising tags necessary to power relevant customer experiences.
exl-id: 23d882a5-1ddd-404b-a7e9-3000f1804971
TQID: 'https://experienceleague.adobe.com/6nDNyEbn-7nmZSKke2psZXEcudGCKoLfL-9fEupqDco'
feature_v2:
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection tags
subfeature_v2:
  - id: 1a2b3c4d-0003-4003-8003-000000000003
    internal-label: Data collection tags extensions
  - id: 1a2b3c4d-0006-4006-8006-000000000006
    internal-label: Data collection tags rules
  - id: f9a2105e-7a47-4e85-9193-31a519a2cb83
    internal-label: Data collection tags data elements
  - id: 1a2b3c4d-0004-4004-8004-000000000004
    internal-label: Data collection tags publishing flow
  - id: 1a2b3c4d-0005-4005-8005-000000000005
    internal-label: Reactor API
level_v2:
  - id: e8ccd51f-da0d-4e3b-939b-e30d5ebb1ea5
    internal-label: Beginner
topic_v2:
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
  - id: b5ce8718-c3af-4fdb-a1a9-fca32f83a87c
    internal-label: Implementation
autotag-review: '2026-11-05T22:08:57.077Z'
---
# Tags overview

Tags in Adobe Experience Platform (formerly known as Adobe Experience Platform Launch) are the next generation of tag management capabilities from Adobe. Tags give customers a simple way to deploy and manage all of the analytics, marketing, and advertising tags necessary to power relevant customer experiences.

Tags empower anyone to build and maintain their own integrations, called *extensions*. These extensions are available to [!DNL Adobe CX Enterprise] customers in an app-store experience so they can quickly install, configure, and deploy their tags.

Tags are offered to [!DNL Adobe CX Enterprise] customers as an included value-add feature.

## Key benefits {#key-benefits}

* Faster time to value.
* Trustworthy data through centralized collection, organization, and delivery using data elements.
* Compelling experiences through the integration of data and marketing technology using rule builder.

## Key features {#key-features}

Use the in product help in the right panel to learn more about tags and view additional available resources.

![Tags properties in the Data Collection UI.](./images/ui/tags-overview/tags-properties.png)

### Extensions {#extensions}

An extension is a package of code (JavaScript, HTML, and CSS) that extends the tags functionality. Build, manage, and update your integrations using a virtually self-service interface. You can think of extensions as apps you use to achieve your tasks.

### Extension catalog {#extension-catalog}

Browse, configure, and deploy marketing/advertising tools built and maintained by independent software vendors.

### Rule builder {#rule-builder}

Create robust rules that combine multiple events, sequenced in the way that you determine using if/then logic with conditions and exceptions. Rules provide options for:

* Events
* Conditions
* Exceptions
* Actions

The rule builder includes real-time error checking and syntax highlighting for your custom code.

When the criteria outlined in your rules are met and conditions are satisfied, the actions you define are executed in order.

### Data elements {#data-elements}

Collect, organize, and deliver data across web-based marketing and advertising technology.

### Enterprise publishing {#enterprise-publishing}

The publishing process enables teams to publish code to pages. Different people can create an implementation, approve it, and publish it on your pages.

* Changes to your code are encapsulated within the libraries you define.
* You specify where and when you want your code deployed.
* Multiple libraries can be built in parallel by different teams.
* Unlimited development environments.
* A deliberate, permission-based process for merging libraries together.

### Open APIs {#open-apis}

Automate implementations of individual technologies or a group of technologies.

* Tags interact with the Reactor API.
* Deployments can be automated through APIs.
* Integrate the APIs with your own internal systems.
* You can build your own user interface if desired.

### Light, modular container tag {#modular-tag}

The content of your container is minified, including your custom code. Everything is modular. If you don't need an item, it is not included in your library. The result is an implementation that is fast and compact. See [Minification](./ui/publishing/builds.md).

## Other highlights {#other-highlights}

Tags provide several improvements over similar systems, including:

* No use of `document.write ()` where Chrome doesn't allow it.
* The Page Top and Page Bottom rules are bundled into the main library to minimize unnecessary HTTP calls.
* Custom action scripts within a rule can be loaded in parallel, but are executed sequentially.
* If you avoid Page Top and Page Bottom rules, the code is mostly asynchronous, with a path to getting fully async.
