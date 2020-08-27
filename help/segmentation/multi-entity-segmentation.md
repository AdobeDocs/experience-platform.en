---
keywords: Experience Platform;home;popular topics;segmentation;Segmentation;segment service;segments;Segments
solution: Experience Platform
title: Multi-entity segmentation
topic: overview
description: Multi-entity segmentation is the ability to extend Profile data with additional data based on products, stores, or other non-profile classes. Once connected, data from additional classes becomes available as if they were native to the Profile schema.
---

# Multi-entity segmentation

Multi-entity segmentation is the ability to extend [!DNL Profile] data with additional data based on products, stores, or other non-profile classes. Once connected, data from additional classes becomes available as if they were native to the [!DNL Profile] schema.

To learn more about multi-entity segmentation, please continue reading the documentation and supplement your learning by watching the video below or exploring the [segmentation overview](./home.md).

>[!VIDEO](https://video.tv.adobe.com/v/28947?quality=12&learn=on)

## Getting started

This tutorial requires a working understanding of the various Adobe Experience Platform services involved in using segmentation. Before beginning this tutorial, please review the documentation for the following services:

- [[!DNL Real-time Customer Profile]](../profile/home.md): Provides a unified consumer profile in real-time, based on aggregated data from multiple sources.
- [Adobe Experience Platform Segmentation Service](./home.md): Allows you to build segments from Real-time Customer Profile.
- [[!DNL Experience Data Model (XDM)]](../xdm/home.md): The standardized framework by which [!DNL Platform] organizes customer experience data.

## How to define XDM relationships

Defining relationships with the structure of your [!DNL Experience Data Model] (XDM) schemas is an important and integral part of segment creation. 

This process can be done either using the [!DNL Schema Registry] API or the [!DNL Schema Editor]. For a detailed guide on using the API to define a relationship between two schemas, please read [the tutorial on defining a relationship between two schemas using the API](../xdm/tutorials/relationship-api.md). For a detailed guide on using the [!DNL Schema Editor] to define a relationship between two schemas, please read [the tutorial on defining a relationship between two schemas using the Schema Editor](../xdm/tutorials/relationship-ui.md).

## How to create segments that use XDM relationships

Once you have defined your XDM relationships, you can use the [!DNL Segmentation Service] API to build a segment.

This process can be done either using the [!DNL Segmentation] API or the [!DNL Segment Builder] user interface. For a detailed guide on using the API to build a segment, please read [the tutorial on creating a segment using the Segmentation API](./tutorials/create-a-segment.md). For a detailed guide on using the Segment Builder to build a segment, please read [the Segment Builder user guide](./ui/overview.md).

## How to evaluate and access segments for multi-entity segments

After creating a segment, you can evaluate and access the segment results using the [!DNL Segmentation Service] API. Evaluating a multi-entity segment is very similar to evaluating a regular segment.

This process can only be done using the [!DNL Segmentation Service] API. For a detailed guide on using the API to evaluate and access segments, please read the tutorial on [evaluating and accessing segments](./tutorials/evaluate-a-segment.md).