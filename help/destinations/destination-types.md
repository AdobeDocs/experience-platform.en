---
keywords: destinations;destination;destination types
title: Destinations Types and Categories
seo-title: Destinations Types and Categories
description: In Real-time Customer Data Platform, Profile/Segment Export destinations capture event data, combine it with other data sources, apply segmentation, and export segments and qualified profiles to destinations. Experience Platform Launch extensions forward raw event data to several types of destinations. 
seo-description: In Real-time Customer Data Platform, Profile/Segment Export destinations capture event data, combine it with other data sources, apply segmentation, and export segments and qualified profiles to destinations. Experience Platform Launch extensions forward raw event data to several types of destinations.
---

# Destination Types and Categories

Read this page to understand the different types and categories of Real-time Customer Data Platform destinations.

## Destination types

In Real-time Customer Data Platform, we distinguish between two destination types - connections and extensions. There are two types of connection destinations, Profile Export destinations and Segment Export destinations. 

![Types of destinations](/help/rtcdp/destinations/assets/types-of-destinations.png)

<br>&nbsp;

### Connections {#connections}

**[!UICONTROL Profile Export]** and **[!UICONTROL Segment Export]** destinations in Real-time Customer Data Platform capture event data, combine it with other data sources to form the [real-time customer profile](/help/profile/home.md), apply segmentation, and export segments and qualified profiles to destinations. 

<br>&nbsp;

#### Profile export destinations

Profile export destinations generate a file containing profiles and/or attributes. These destinations use raw data, often with email address as the primary key. The [Amazon S3 cloud storage destination](/help/rtcdp/destinations/amazon-s3-destination.md) is an example of destination where you can deposit files containing profile exports.

#### Segment export destinations

Segment export destinations send the profiles and the segments that they qualified for to destination platforms. These destinations use segment ID or user IDs. Advertising destinations such as [[!DNL Google Display & Video 360]](/help/rtcdp/destinations/google-dv360-destination.md) or [[!DNL Google Ads]](/help/rtcdp/destinations/google-ads-destination.md) are examples of these types of destinations.

#### Profile export and Segment export destinations - video overview

The video below runs you through the particularities of the two types of destinations: 

>[!VIDEO](https://video.tv.adobe.com/v/29707?quality=12)

<br>&nbsp;

### Extensions {#extensions}

Real-time CDP leverages the power and flexibility of Adobe Experience Platform Launch to include Platform Launch extensions in the Real-time CDP interface. 

>[!TIP]
>
>For detailed information about Adobe Experience Platform Launch extensions, including use cases and how to find them in the interface, see the [Adobe Experience Platform Launch extensions overview](../launch-extensions/overview.md.md).

Platform Launch extensions forward raw event data to several types of destinations. Think of extensions as an **Event Forwarding** type of destination. This is a simpler type of integration with destination platforms, which only forwards raw event data. Examples of those are the [Gainsight personalization extension](/help/rtcdp/destinations/gainsight-extension.md) or the [Confirmit Voice of the Customer extension](/help/rtcdp/destinations/confirmit-digital-feedback-extension.md).

![Experience Platform Launch extensions compared to other destinations](/help/rtcdp/destinations/assets/launch-and-other-destinations.png)

<br>&nbsp;

### When to use connections and extensions

As a marketer, you could use a combination of connections and extensions to address your use cases.

Connections are useful when it’s necessary to leverage a complete centralized customer profile or a customer segment for activation. For example, use connections if you are joining behavioral data from an analytics system with uploaded CRM data to qualify a user for a given segment before delivering a personalized message to that user.

Extensions are helpful when event data is used to trigger an action, or to conduct segmentation in an external environment. For example, if behavioral data needs to be forwarded to an external system without being joined to other data sources on file for a given user.

<br>&nbsp;

## Destination categories

The connections and extensions in the [destinations catalog](https://platform.adobe.com/destination/catalog) are grouped by destination category (**Advertising**, **Cloud storage**, **Survey platforms**, **Email marketing**, etc.), depending on the marketing use case that they help you achieve. For more information on each of the categories, as well as the destinations included in each category, see the [Destinations catalog documentation](/help/rtcdp/destinations/destinations-catalog.md).

![Destination categories](/help/rtcdp/destinations/assets/destination-categories-menu.png)

