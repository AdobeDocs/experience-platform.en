---
title: Event Forwarding Overview
description: Learn about event forwarding in Adobe Experience Platform, which allows you to use the Platform Edge Network to execute tasks without changing your tag implementation.
exl-id: 18e76b9c-4fdd-4eff-a515-a681bc78d37b
---
# Event forwarding overview

>[!NOTE]
>
>Adobe Experience Platform Launch has been rebranded as a suite of data collection technologies in Adobe Experience Platform. Several terminology changes have rolled out across the product documentation as a result. Please refer to the following [document](../../term-updates.md) for a consolidated reference of the terminology changes.

Event forwarding in Adobe Experience Platform decreases web page and app weight by using Adobe Experience Platform Edge Network to execute tasks normally done on the client. Event forwarding rules can transform and send data to new destinations without changing client-side implementations.

Event forwarding combined with the Adobe Experience Platform Web and Mobile SDKs makes it possible to:

* Make a single call from the page that contains a payload of data. The data then federates server-side to reduce client-side network traffic and deliver a faster experience for customers.
* Decrease the amount of time it takes for web pages to load so your site conforms to industry best practices around performance.
* Increase transparency and control over which data types are sent where across all tag properties.
* Create an event-forwarding rule to send previously tracked data to a new destination.

## Improved performance

In an increasingly competitive environment, businesses must prioritize performance to maintain and expand market share. Event forwarding improves website and app performance across mobile, IoT, and OTT devices. Website conversion rates can increase due to faster load times, mobile apps don't drain batteries as quickly, and OTT apps feel as responsive as those same apps running on mobile devices. As performance increases, it's also common for conversion rates to increase.

## Better data governance

As the technology stack grows and data is sent to more and more destinations, the challenge to control what data is sent where becomes more difficult. The normalization of regulations like GDPR and CCPA forces companies to exert more control over a data problem that’s increasingly becoming harder.

Event forwarding helps marketing teams grow their business while controlling data. It decreases the number of client-side technologies that marketers need to use to reach their target market and send data to non-Adobe destinations. This makes it easier for implementation teams to manage the data flowing from the client to various destinations.

## Differences between event forwarding and tags

It is important to note the following differences between event forwarding and tags:

* Data element tokenization

    * Tags: In a rule, data elements are tokenized with a `%` at the beginning and end of the data element name. For example, `%viewportHeight%`.

    * Event forwarding: In a rule, data elements are tokenized with `{{` at the beginning and `}}` at the end of the data element name. For example, `{{viewportHeight}}`.

* How data is referenced
    
    To reference data from the Edge network, the data element path must be `arc.event._<element>_`.
    
    `arc` stands for Adobe Response Context.

    For example: `arc.event.xdm.web.webPageDetails.URL`
    
    >[!IMPORTANT]
    >
    >If this path is specified incorrectly, data is not collected.
    

* Sequence of rule actions

    In the Action section of a rule, event forwarding rules are always executed sequentially. Make sure the order of actions is correct when you save a rule. This execution sequence cannot be chosen like it can with tags.

* Custom code JavaScript versions

    Tags use JavaScript version es5. Event forwarding uses version es6.

<!--doc Adobe Cloud Connector extension, get from Jon-->
