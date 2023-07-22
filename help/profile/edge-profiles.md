---
title: Edge Profiles
description: a
---

# Edge profiles

In Adobe Experience Platform, the Real-Time Customer Profile is the single source of truth for entity data. This profile data sits in a central hub, and caters to use cases that rely on the comprehensiveness and completeness of your data. However, in more real-time use cases, where time sensitivity is more important, Edge profiles are the preferred option. Edge profiles are lightweight profiles that sits on edges and helps in real-time personalization use cases. 

For example, Adobe applications such as Adobe Target and Adobe Campaign use edges in order to provide personalized customer experiences in real-time. Data is routed to an edge by a projection, with a projection destination defining the edge to which data will be sent, and a projection configuration defining the specific information that will be made available on the edge. 

## Terminology

When dealing with edge, make sure to understand the following concepts:

- **Edge**: An edge is a geographically placed server that stores data and makes it readily accessible to applications.
- **Projection configuration**: A projection configuration describes how a given entity should be replicated to the edges for a given customer and under what conditions. For example, for Luma (a sample customer), only the fields age and gender from the dataset following the Profile schema should propagate to the edges.
- **Edge projection**: An edge projection is the application of a projection configuration on a specific edge to one piece of data with a unique ID conforming to a given schema for a given customer. For example, an entity respecting the Profile schema with ID CJsDEAMaEAHmCKwPCQYNvzxD9JGDHZ8, visitor of the Luma website, replicated to the VA6 data center, containing the fields age = 35 and gender = male.

In other terms, data is routed to an edge by a projection, with the **projection destination** defining **which** edge the data will be sent to, and the **projection configuration** defining **what** data will be sent to the specified edge.

