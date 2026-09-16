---
title: Event Forwarding Overview
description: Learn about event forwarding in Adobe Experience Platform, which allows you to use the Experience Platform Edge Network to execute tasks without changing your tag implementation.
feature: Event Forwarding
exl-id: 18e76b9c-4fdd-4eff-a515-a681bc78d37b
TQID: https://experienceleague.adobe.com/lJWevoZHpHlTKp15DzOR86xChLszIDHDc7ejlbTh26E
product_v2:
  - id: a829a185-511f-4bf8-8dcf-9e684f8011cf
    internal-label: Advertising
  - id: d0a3eab4-7b10-4d96-a71e-6c0f8e7b7c87
    internal-label: CX Enterprise
  - id: e55547f1-a1ff-40c6-8978-026e40ab7fa4
    internal-label: Analytics
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
  - id: fdddec33-c9cb-4459-b8b6-2664395a6f10
    internal-label: Real-Time Customer Data Platform
feature_v2:
  - id: daec7ead-f475-492a-a3b3-02ae08565d6f
    internal-label: Implementation
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection
subfeature_v2:
  - id: abc02dd6-664f-446a-9aaa-675bc0f2fe4a
    internal-label: Sources
  - id: acc16deb-1d7f-4ec9-9ce3-6cdf355afde6
    internal-label: XDM
  - id: ae2cba0e-54f2-464b-a3b3-ad371e8a886a
    internal-label: Catalog
  - id: b64298cc-90cc-46b7-8917-ee391f1c7516
    internal-label: Data collection UI
  - id: ca3d6bf4-a4af-4944-936b-8de1eb09f149
    internal-label: Datastreams
  - id: d9830f6f-ceb6-4faa-9744-f281fe4439f9
    internal-label: Tags
  - id: dc6ebdf7-9a94-43eb-9184-759cfdd0cf1c
    internal-label: Event forwarding
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
  - id: c7d04a2c-412a-4c9d-9d7a-4456eaa5adeb
    internal-label: Governance
  - id: d095671a-1355-40aa-8b5f-06c33c68080b
    internal-label: Security
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
---
# Event forwarding overview

>[!NOTE]
>
>Event forwarding is a paid feature that is included as part of the Adobe Real-Time Customer Data Platform Connections, Prime, or Ultimate offerings.

Event forwarding in Adobe Experience Platform (formerly known as Adobe Experience Platform Launch server-side) allows you to send collected event data to a destination for server-side processing. Event forwarding decreases web page and app weight by using Adobe Experience Platform Edge Network to execute tasks normally done on the client. Implemented in a similar manner to tags, event forwarding rules can transform and send data to new destinations, but instead of sending this data from a client application like a web browser, it is sent from Adobe's servers.

This document provides a high-level overview of event forwarding in Experience Platform.

![Event forwarding in the data collection ecosystem.](/help/collection/assets/event-forwarding.png)

>[!NOTE]
>
>For information on how event forwarding fits within the data collection ecosystem in Experience Platform, see the [data collection overview](/help/collection/home.md).

Event forwarding combined with the Adobe Experience Platform [Web SDK](/help/collection/js/js-overview.md) and [Mobile SDK](https://experienceleague.adobe.com/docs/platform-learn/data-collection/mobile-sdk/overview.html) provides the following benefits:

**Performance**:

* Make a single call from a page that contains a payload of data which then federates on the server side to reduce client-side network traffic and deliver a faster experience for customers.
* Decrease the amount of time it takes for web pages to load to improve site performance.
* Decrease the number of required client-side technologies to deliver your experience and send data to many destinations.

**Data governance**:

* Increase transparency and control over which data is sent where across all properties.

## Differences between event forwarding and tags {#differences-from-tags}

In terms of configuration, event forwarding uses many of the same concepts as tags, such as [rules](../managing-resources/rules.md), [data elements](../managing-resources/data-elements.md), and [extensions](../managing-resources/extensions/overview.md). The main difference between the two can be summarized as follows: 

* Tags **collects** event data from a website or native mobile application and sends it to Experience Platform Edge Network.
* Event forwarding **sends** incoming event data from Experience Platform Edge Network to an endpoint which represents a final destination or an endpoint that provides data that you want to enrich the original payload with.

While tags collects event data directly from your site or native mobile application using the Experience Platform Web and Mobile SDKs, event forwarding requires event data to already be sent through Experience Platform Edge Network in order to forward it to destinations. In other words, you must implement the Experience Platform Web or Mobile SDK on your digital property (either through tags or using raw code) in order to use event forwarding.

### Properties {#properties}

Event forwarding maintains its own store of properties separate from tags, which you can view in the Experience Platform UI or Data Collection UI by selecting **[!UICONTROL Event Forwarding]** in the left navigation.

>[!TIP]
>
>Use the in product help in the right panel to learn more about event forwarding and view additional available resources.

![Event forwarding properties in the Data Collection UI.](../../images/ui/event-forwarding/overview/properties.png)

All event forwarding properties list **[!UICONTROL Edge]** as their platform. They do not distinguish between web or mobile because they only process data received from Experience Platform Edge Network, which itself can receive event data from both web and mobile platforms.

### Extensions {#extensions}

Event forwarding has its own catalog of compatible extensions, such as the [Core](../../extensions/server/core/overview.md) extension and [Adobe Cloud Connector](../../extensions/server/cloud-connector/overview.md) extension. You can view the available extensions for event forwarding properties in the UI by selecting **[!UICONTROL Extensions]** in the left navigation, followed by **[!UICONTROL Catalog]**.

You can view additional resources available to learn more about this feature by selecting ![about](../../images/ui/event-forwarding/overview/about.png) from the right panel.

![Event forwarding extensions in the Data Collection UI.](../../images/ui/event-forwarding/overview/extensions.png)

### Data elements {#data-elements}

The types of data elements that are available in event forwarding are limited to the catalog of compatible [extensions](#extensions) that provide them.

While data elements themselves are created and configured the same way in event forwarding as they are for tags, there are some important syntax differences when it comes to how they reference data from Experience Platform Edge Network.

#### Referencing data from Experience Platform Edge Network {#data-element-path}
    
To reference data from Experience Platform Edge Network, you must create a data element that provides a valid path to that data. When creating the data element in the UI, select **[!UICONTROL Core]** for the extension and **[!UICONTROL Path]** for the type.

The **[!UICONTROL Path]** value for the data element must follow the pattern `arc.event.{ELEMENT}` (for example: `arc.event.xdm.web.webPageDetails.URL`). This path must be specified correctly in order for data to be sent.

You can view additional resources available to learn more about this feature by selecting ![about](../../images/ui/event-forwarding/overview/about.png) from the right panel.

![Example of a path type data element for event forwarding.](../../images/ui/event-forwarding/overview/data-reference.png)

### Rules {#rules}

Creating rules in event forwarding properties works in a similar way to tags, with the key difference being that you cannot select events as rule components. Instead, an event forwarding rule processes all events it receives from the [datastream](/help/datastreams/overview.md) and forwards those events to destinations if certain conditions are satisfied.

In addition, there is a 30-second timeout that applies to a single event as it is processed across all rules (and hence all actions) within an event forwarding property. This means all rules and all actions for a single event must be completed in this time frame.

You can view additional resources available to learn more about this feature by selecting ![about](../../images/ui/event-forwarding/overview/about.png) from the right panel.

![Event forwarding rules in the Data Collection UI.](../../images/ui/event-forwarding/overview/rules.png)

#### Data element tokenization {#tokenization}

In tag rules, data elements are tokenized with a `%` at the beginning and end of the data element name (for example: `%viewportHeight%`). In event forwarding rules, data elements are instead tokenized with `{{` at the beginning and `}}` at the end of the data element name (for example: `{{viewportHeight}}`).

You can view additional resources available to learn more about this feature by selecting ![about](../../images/ui/event-forwarding/overview/about.png) from the right panel.

![Example of a path type data element for event forwarding.](../../images/ui/event-forwarding/overview/tokenization.png)

#### Sequence of rule actions {#action-sequencing}

The [!UICONTROL Actions] section of an event forwarding rule is always executed sequentially. For example, if a rule has two actions, the second action will not begin execution until the previous action is complete (and in cases where a response is expected from an endpoint, that endpoint has responded). Make sure the order of actions is correct when you save a rule. This execution sequence cannot be executed asynchronously like it can with tag rules.

## Secrets {#secrets}

Event forwarding allows you to create, manage, and store secrets that can be used to authenticate to the servers that you are sending data to. See the guide on [secrets](./secrets.md) on the different kinds of available secret types and how they are implemented in the UI.

## Video overview {#video}

The following video is intended to help you better understand Event Forwarding and Real-Time CDP connections.

>[!VIDEO](https://video.tv.adobe.com/v/3429308)

## Next steps

This document provided a high-level introduction to event forwarding. For more information on how to set up this feature for your organization, see the [getting started guide](./getting-started.md).
