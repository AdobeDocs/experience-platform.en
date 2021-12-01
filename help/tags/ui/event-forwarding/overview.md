---
title: Event Forwarding Overview
description: Learn about event forwarding in Adobe Experience Platform, which allows you to use the Platform Edge Network to execute tasks without changing your tag implementation.
feature: Event Forwarding
exl-id: 18e76b9c-4fdd-4eff-a515-a681bc78d37b
---
# Event forwarding overview

>[!NOTE]
>
>Adobe Experience Platform Launch has been rebranded as a suite of data collection technologies in Adobe Experience Platform. Several terminology changes have rolled out across the product documentation as a result. Please refer to the following [document](../../term-updates.md) for a consolidated reference of the terminology changes.

Event forwarding in Adobe Experience Platform allows you to send collected event data to non-Adobe destinations for server-side processing. Event forwarding decreases web page and app weight by using Adobe Experience Platform Edge Network to execute tasks normally done on the client. Implemented in a similar manner to tags, event forwarding rules can transform and send data to new destinations without changing client-side implementations.

This document provides a high-level overview of event forwarding features in Platform.

![Event forwarding in the data collection ecosystem](../../../collection/images/home/event-forwarding.png)

>[!NOTE]
>
>For information on how event forwarding fits within the data collection ecosystem in Platform, see the [data collection overview](../../../collection/home.md).

Event forwarding combined with the Adobe Experience Platform [Web SDK](../../../edge/home.md) and [Mobile SDK](https://aep-sdks.gitbook.io/docs/) provides the following benefits:

**Performance**:

* Make a single call from a page that contains a payload of data which then federates on the server side to reduce client-side network traffic and deliver a faster experience for customers.
* Decrease the amount of time it takes for web pages to load so your site performs to industry best practices.

**Data governance**:

* Increase transparency and control over which data types are sent where across all properties.
* Decrease the number of required client-side technologies to reach your target market and send data to non-Adobe destinations.

## Differences between event forwarding and tags

In terms of implementation, event forwarding uses many of the same concepts as tags, such as [rules](../managing-resources/rules.md), [data elements](../managing-resources/data-elements.md), and [extensions](../managing-resources/extensions/overview.md). The main difference between the two can be summarized as follows: 

* Tags **collects** event data and sends it to Platform Edge Network.
* Event forwarding **sends** incoming event data from Platform Edge Network to non-Adobe destinations.

While tags collects event data directly from your site using the Platform Web and Mobile SDKs, event forwarding requires event data to already be sent through Platform Edge Network in order to forward it to non-Adobe destinations. In other words, you must implement the Platform Web or Mobile SDKs on your site (either through tags or using raw code) in order to use event forwarding.

### Properties

Event forwarding maintains its own store of properties separate from tags, which you can view in the Data Collection UI by selecting **[!UICONTROL Event Forwarding]** in the left navigation.

![Event forwarding properties in the Data Collection UI](../../images/ui/event-forwarding/overview/properties.png)

All event forwarding properties list **[!UICONTROL Edge]** as their platform. They do not distinguish between web or mobile because they only process data received from Platform Edge Network, which itself can receive event data from both web and mobile platforms.

### Extensions {#extensions}

Event forwarding has its own catalog of compatible extensions, such as the [Core](../../extensions/web/core/event-forwarding.md) extension and [Adobe Cloud Connector](../../extensions/web/cloud-connector/overview.md) extension. You can view the available extensions for event forwarding properties in the UI by selecting **[!UICONTROL Extensions]** in the left navigation, followed by **[!UICONTROL Catalog]**.

![Event forwarding extensions in the Data Collection UI](../../images/ui/event-forwarding/overview/extensions.png)

### Data elements

The available types of data elements in event forwarding are limited to the catalog of compatible [extensions](#extensions) that provide them.

While data elements themselves are created and configured the same way in event forwarding as they are for tags, there are some important syntax differences when it comes to how they reference data from Platform Edge Network and how they are tokenized in rules.

#### Referencing data from Platform Edge Network
    
To reference data from Platform Edge Network, you must create a data element that provides a valid path to that data. When creating the data element in the UI, select **[!UICONTROL Core]** for the extension and **[!UICONTROL Path]** for the type.

The **[!UICONTROL Path]** value for the data element must follow the pattern `arc.event.{ELEMENT}` (for example: `arc.event.xdm.web.webPageDetails.URL`). This path must be specified correctly in order for data to be sent.

![Example of a path type data element for event forwarding](../../images/ui/event-forwarding/overview/data-reference.png)

>[!NOTE]
>
>`arc` stands for Adobe Response Context.

#### Tokenization

In tag rules, data elements are tokenized with a `%` at the beginning and end of the data element name (for example: `%viewportHeight%`). In event forwarding rules, data elements are instead tokenized with `{{` at the beginning and `}}` at the end of the data element name (for example: `{{viewportHeight}}`).

![Example of a path type data element for event forwarding](../../images/ui/event-forwarding/overview/tokenization.png)

### Rules

Creating rules in event forwarding properties works in a similar way to tags, with the key difference being that you cannot select events as rule components. Instead, an event forwarding rule processes all events it receives from the [datastream](../../../edge/fundamentals/datastreams.md), and forwards those events to non-Adobe destinations if certain conditions are satisfied.

![Event forwarding rules in the Data Collection UI](../../images/ui/event-forwarding/overview/rules.png)

#### Sequence of rule actions

The [!UICONTROL Actions] section of an event forwarding rule is always executed sequentially. Make sure the order of actions is correct when you save a rule. This execution sequence cannot be customized like it can with tags.

## Secrets

Event forwarding allows you to create, manage, and store secrets that can be used to authenticate to the servers that you are sending data to. See the guide on [secrets](./secrets.md) on the different kinds of available secret types and how they are implemented in the UI.

## Next steps

This document provided a high-level introduction to event forwarding. For more information on how to set up this feature for your organization, see the [getting started guide](./getting-started.md).
