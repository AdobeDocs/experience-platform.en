---
keywords: Experience Platform;home;popular topics
solution: Experience Platform
title: Multi-entity segmentation
topic: overview
---

# Multi-entity segmentation

Multi-entity segmentation is the ability to extend profile data with additional "non-people" data, also known as "dimension entities", that your organization may define, such as products or stores. Once connected, dimension entity data becomes available as it relates to the Profile schema. Multi-entity segmentation provides the flexibility needed to identify audience segments based on data relevant to your business needs. This process can be done quickly and easily without requiring expertise in querying databases. This enables you to add key data to your segments without having to make costly changes to data streams or wait for a back-end data merge.

## Getting started

This guide requires a working understanding of the various Adobe Experience Platform services involved in using segmentation. Before continuing with this guide, please review the following documentation:

* [Real-time Customer Profile](../profile/home.md): Provides a unified consumer profile in real-time, based on aggregated data from multiple sources.
  * [Profile guardrails](../profile/guardrails.md): Best practices for creating data models supported by Profile.
* [Adobe Experience Platform Segmentation Service](./home.md): Allows you to build segments from Real-time Customer Profile data.
* [Experience Data Model (XDM)](../xdm/home.md): The standardized framework by which Platform organizes customer experience data.
  * [Basics of schema composition](../xdm/schema/composition.md#union): Learn best practices for composing schemas to be used in Experience Platform.

## Use cases

To illustrate the value of multi-entity segmentation, consider three standard marketing use cases that illustrate the challenges present in most marketing applications:

### Email personalization

A marketer building an email campaign may have attempted to build a segment for a target audience by using recent customer store purchases within the last three months. Ideally, this segment would require both the item name and the name of the store where the purchase was made. Previously, the challenge was capturing the store identifier from the purchase event and assigning it to an individual customer profile.

### Email retargeting

It is often complex to create and qualify segments for email campaigns targeting "cart abandonment". Knowing which products to include in a personalized message was difficult due to the availability of the required data. Data for which products were abandoned is tied to events which were formerly challenging to monitor and extract data from.

### Ad retargeting

Another traditional challenge for marketers has been creating ads to retarget customers with abandoned shopping cart items. While segment definitions addressed this challenge, there was no formal method to differentiate between purchased products and abandoned products. Now you can target specific datasets during segment definition.

## Define relationships

Defining relationships within the structure of your Experience Data Model (XDM) schemas is an important and integral part of segment creation. This process can be done either using the Schema Registry API or the Schema Editor. For detailed steps showing how to define a relationship between two schemas, please choose from the following tutorials:

* [Defining a relationship between two schemas using the API](../xdm/tutorials/relationship-api.md)
* [Defining a relationship between two schemas using the Schema Editor UI](../xdm/tutorials/relationship-ui.md)

## Create a multi-entity segment

Once you have defined the necessary XDM relationships, you can begin to build a multi-entity segment. This process can be done using either the Segmentation API or the Segment Builder UI. For more information, please choose from the following guides:

* [Creating a segment using the Segmentation API](./tutorials/create-a-segment.md)
* [Creating a segment using the Segment Builder UI](./ui/overview.md)

## Evaluate and access multi-entity segments

After creating a segment, you can evaluate and access the segment results using the Segmentation API. Evaluating a multi-entity segment is very similar to evaluating a standard segment. This process can only be done using the Segmentation API. For a detailed guide showing how to use the API to evaluate and access segments, please read the [evaluating and accessing segments](./tutorials/evaluate-a-segment.md) tutorial.