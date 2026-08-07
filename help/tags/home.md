---
title: Tags Overview
description: Tags in Adobe Experience Platform are the next generation of tag management capabilities from Adobe. Tags give customers a simple way to deploy and manage all of the analytics, marketing, and advertising tags necessary to power relevant customer experiences.
exl-id: 23d882a5-1ddd-404b-a7e9-3000f1804971
TQID: https://experienceleague.adobe.com/6nDNyEbn-7nmZSKke2psZXEcudGCKoLfL-9fEupqDco
product_v2:
  - id: a829a185-511f-4bf8-8dcf-9e684f8011cf
    internal-label: Advertising
  - id: d0a3eab4-7b10-4d96-a71e-6c0f8e7b7c87
    internal-label: CX Enterprise
  - id: e55547f1-a1ff-40c6-8978-026e40ab7fa4
    internal-label: Analytics
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: daec7ead-f475-492a-a3b3-02ae08565d6f
    internal-label: Implementation
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection
  - id: e9dbdbc5-3e52-40f0-a7bc-e18542967b7a
    internal-label: Implementations
  - id: eb9732ab-8232-4b21-bc4c-89de86dbe4d7
    internal-label: Integrations
  - id: ed0d8d0e-04b9-4326-be72-a0fbca265377
    internal-label: Integrations
  - id: fc7979f3-56c3-43ca-9784-f1ea3dc69c4b
    internal-label: Integrations
  - id: fd307ce7-56f5-4ee3-af68-a7833ff6e85e
    internal-label: API
subfeature_v2:
  - id: abc02dd6-664f-446a-9aaa-675bc0f2fe4a
    internal-label: Sources
  - id: ae2cba0e-54f2-464b-a3b3-ad371e8a886a
    internal-label: Catalog
  - id: b64298cc-90cc-46b7-8917-ee391f1c7516
    internal-label: Data collection UI
  - id: d9830f6f-ceb6-4faa-9744-f281fe4439f9
    internal-label: Tags
  - id: df312454-73c4-43f6-a90e-18f5043f074c
    internal-label: Tags
  - id: f6ff4d13-7b5c-4533-8556-95e76673d4cb
    internal-label: Properties
  - id: f9a2105e-7a47-4e85-9193-31a519a2cb83
    internal-label: Data elements
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: b5ce8718-c3af-4fdb-a1a9-fca32f83a87c
    internal-label: Implementation
  - id: bce87dde-a4ab-44c9-8a18-ad66e4ddb377
    internal-label: Customer experience
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
---
# Tags overview

Tags in Adobe Experience Platform (formerly known as Adobe Experience Platform Launch) are the next generation of tag management capabilities from Adobe. Tags give customers a simple way to deploy and manage all of the analytics, marketing, and advertising tags necessary to power relevant customer experiences.

Tags empower anyone to build and maintain their own integrations, called *extensions*. These extensions are available to [!DNL Adobe Experience Cloud] customers in an app-store experience so they can quickly install, configure, and deploy their tags.

Tags are offered to [!DNL Adobe Experience Cloud] customers as an included value-add feature.

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
