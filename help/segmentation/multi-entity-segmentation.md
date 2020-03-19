---
keywords: Experience Platform;home;popular topics
solution: Experience Platform
title: Multi-entity segmentation
topic: overview
---

# Multi-entity segmentation

Multi-entity segmentation is the ability to extend Profile data with additional data based on products, stores, or other non-profile classes. Once connected, data from additional classes becomes available as if they were native to the Profile schema.

This document provides a tutorial for multi-entity segmentation. Specifically, this document will cover the following details:

- Getting started with multi-entity segmentation
- How to define XDM relationships
- How to create segments that use XDM relationships
- How to evaluate and access segment results for multi-entity segments

For more information about multi-entity segmentation, please read the [segmentation overview](./home.md).

## Getting started

This tutorial requires a working understanding of the various Adobe Experience Platform services involved in using segmentation. Before beginning this tutorial, please review the documentation for the following services:

- [Real-time Customer Profile](../profile/home.md): Provides a unified consumer profile in real-time, based on aggregated data from multiple sources.
- [Adobe Experience Platform Segmentation Service](./home.md): Allows you to build segments from Real-time Customer Profile.
- [Experience Data Model (XDM)](../xdm/home.md): The standardized framework by which Platform organizes customer experience data.

## How to define XDM relationships

Defining relationships with the structure of your Experience Data Model (XDM) schemas is an important and integral part of segment creation. 

This process can be done either using the Schema Registry API or the Schema Editor. For a detailed guide on using the API to define a relationship between two schemas, please read [the tutorial on defining a relationship between two schemas using the API](../xdm/tutorials/relationship-api.md). For a detailed guide on using the Schema Editor to define a relationship between two schemas, please read [the tutorial on defining a relationship between two schemas using the Schema Editor](../xdm/tutorials/relationship-ui.md).

## How to use create segments that use XDM relationships

Once you have defined your XDM relationships, you can use the Real-time Customer Profile APIs to build a segment.

This process can be done either using the Real-time Customer Profile API or the Segment Builder. For a detailed guide on using the API to build a segment, please read [the tutorial on creating a segment using the Real-time Customer Profile API](./tutorials/create-a-segment.md). For a detailed guide on using the Segment Builder to build a segment, please read [the Segment Builder user guide](./ui/overview.md).

## How to evaluate and access segments for multi-entity segments

After creating a segment, you can evaluate and access the segment results using the Real-time Customer Profile APIs. Evaluating a multi-entity segment is very similar to evaluating a regular segment.

This process can only be done using the Real-time Customer Profile API. For a detailed guide on using the API to evaluate and access segments, please read [the tutorial on evaluating and accessing segments](./tutorials/evaluate-a-segment.md).

[rtcp]: ../../technical_overview/unified_profile_architectural_overview/unified_profile_architectural_overview.md

[seg-service]: ../../technical_overview/segmentation/segmentation-overview.md

[xdm]: ../../technical_overview/schema_registry/xdm_system/xdm_system_in_experience_platform.md

[segmentation-overview]: ../../technical_overview/segmentation/segmentation-overview.md#advanced-segmentation-features

[get-schema-id]: ../schema_registry_api_tutorial/relationship_descriptor_tutorial.md#define-a-source-and-destination-schema

[add-field-to-schema]: ../schema_registry_api_tutorial/relationship_descriptor_tutorial.md#create-a-new-mixin

[relationship-api]: ../schema_registry_api_tutorial/relationship_descriptor_tutorial.md
[relationship-ui]: ../schema_editor_tutorial/schema-relationship-ui-tutorial.md

[segment-api]: ../creating_a_segment_tutorial/creating_a_segment_tutorial.md
[segment-ui]: ../../technical_overview/segmentation/segment-builder-guide.md

[access-segment-api]: ./evaluate_segment.md