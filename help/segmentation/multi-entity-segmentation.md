---
keywords: Experience Platform;home;popular topics;segmentation;Segmentation;segment service;segments;Segments;multi-entity;multi-entity segmentation;multi-entity segments;
solution: Experience Platform
title: Multi-entity Segmentation Overview
description: Multi-entity segmentation is the ability to extend Profile data with additional data based on products, stores, or other non-profile classes. Once connected, data from additional classes becomes available as if they were native to the Profile schema.
exl-id: 01a37fdc-2abe-4a84-b7da-fcbd141ff51f
---
# Multi-entity segmentation overview

Multi-entity segmentation is an advanced feature available as part of Adobe Experience Platform [!DNL Segmentation Service]. This feature enables you to extend [!DNL Real-Time Customer Profile] data with additional "non-people" data (also known as "dimension entities") that your organization may define, such as data related to products or stores. Multi-entity segmentation provides flexibility when defining audience segments based on data relevant to your unique business needs and can be performed without having expertise in querying databases. With multi-entity segmentation, you can add key data to your segments without having to make costly changes to data streams or wait for a back-end data merge.

## Getting started

Multi-entity segmentation requires a working understanding of the various Adobe Experience Platform services involved in segmentation. Before continuing with this guide, please review the following documentation:

* [[!DNL Real-Time Customer Profile]](../profile/home.md): Provides a unified consumer profile in real time, based on aggregated data from multiple sources.
  * [Profile guardrails](../profile/guardrails.md): Best practices for creating data models supported by [!DNL Profile].
* [[!DNL Adobe Experience Platform Segmentation Service]](./home.md): Allows you to build segments from [!DNL Real-Time Customer Profile] data.
* [[!DNL Experience Data Model (XDM)]](../xdm/home.md): The standardized framework by which Experience Platform organizes customer experience data.
  * [Basics of schema composition](../xdm/schema/composition.md#union): Learn best practices for composing schemas to be used in Experience Platform. To best make use of Segmentation, please ensure your data is ingested as profiles and events according to the [best practices for data modeling](../xdm/schema/best-practices.md).

## Use cases

To illustrate the value of multi-entity segmentation, consider three standard marketing use cases that illustrate the challenges present in most marketing applications:

### Combining online and offline purchase data

A marketer building an email campaign may have attempted to build a segment for a target audience by using recent customer store purchases within the last three months. Ideally, this segment would require both the item name and the name of the store where the purchase was made. Previously, the challenge would have been capturing the store identifier from the purchase event and assigning it to an individual customer profile.

### Email retargeting for cart abandonment

It is often complex to create and qualify users into segments targeting cart abandonment. Knowing which products to include in a personalized retargeting campaign requires data regarding which products were abandoned by each individual. This data is tied to commerce events which were formerly challenging to monitor and extract data from.

## Creating multi-entity segments

Creating a multi-entity segment first requires defining relationships between schemas before using the [!DNL Segmentation] API or Segment Builder UI to build the segment definition.

### Define relationships

Defining relationships within the structure of your Experience Data Model (XDM) schemas is an integral part of multi-entity segment creation. For relationships, the field in the destination needs to be marked as the primary identity of that schema. An identity can only be marked on strings and cannot be marked on arrays. Additionally, relationships do not necessarily need to be one-to-one, as you can connect profiles and experience events to multiple destinations. 

Defining relationships can be done either using the Schema Registry API or the Schema Editor. For detailed steps showing how to define a relationship between two schemas, please choose from the following tutorials:

* [Defining a relationship between two schemas using the API](../xdm/tutorials/relationship-api.md)
* [Defining a relationship between two schemas using the Schema Editor UI](../xdm/tutorials/relationship-ui.md)

### Build a multi-entity segment

Once you have defined the necessary XDM relationships, you can begin to build a multi-entity segment. This can be done using either the Segmentation API or the Segment Builder UI. For more information, please choose from the following guides:

* [Creating a segment using the Segmentation API](./tutorials/create-a-segment.md)
* [Creating a segment using the Segment Builder UI](./ui/overview.md)

## Evaluate and access multi-entity segments

After creating a segment, you can evaluate and access the segment results using the Segmentation API. Evaluating a multi-entity segment is very similar to evaluating a standard segment. This process can only be done using the Segmentation API. For a detailed guide showing how to use the API to evaluate and access segments, please read the [evaluating and accessing segments](./tutorials/evaluate-a-segment.md) tutorial.
