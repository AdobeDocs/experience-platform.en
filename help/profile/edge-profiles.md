---
title: Edge Profiles
description: Learn about edge profiles, as well as related terminology, available regions for edge profiles, as well as available services for edge profiles.
exl-id: dcae267f-1d5a-4e90-b634-afd42b0d4edc
---
# Edge profiles

In Adobe Experience Platform, Real-Time Customer Profile is the single source of truth for entity data. This profile data sits in a central hub, and caters to use cases that rely on the comprehensiveness and completeness of your data. However, in more real-time use cases, where time sensitivity is more important, edge profiles are the preferred option. Edge profiles are lightweight profiles that sit on edges and help in real-time personalization use cases. 

For example, Adobe applications such as Adobe Target, Custom Personalization Destination, and Adobe Campaign use edges in order to provide personalized customer experiences in real-time. Data is routed to an edge by a projection, with a projection destination defining the edge to which data will be sent, and a projection configuration defining the specific information that will be made available on the edge. 

## Terminology {#terminology}

When working with edges, make sure to understand the following concepts:

- **Edge**: An edge is a geographically placed server that stores data and makes it readily accessible to applications.
- **Projection configuration**: A projection configuration describes how a given entity should be replicated to the edges for a given customer and under what conditions. For example, for Luma (a sample customer), only the fields age and gender from the dataset following the Profile schema should propagate to the edges.
- **Edge projection**: An edge projection is the application of a projection configuration on a specific edge to one piece of data with a unique ID conforming to a given schema for a given customer. For example, an entity respecting the Profile schema with ID `CJsDEAMaEAHmCKwPCQYNvzxD9JGDHZ8`, visitor of the Luma website, replicated to the VA6 data center, containing the fields `age = 35` and `gender = male`.

In other terms, data is routed to an edge by a projection, with the **projection destination** defining **which** edge the data will be sent to, and the **projection configuration** defining **what** data will be sent to the specified edge.

## Available regions {#regions}

The following regions are available for usage with edge:

- VA6
- OR2
- IRL1
- AUS3
- SGP3
- JPN3
- IND1

All of these regions are valid options for profiles to land in. 

## Available services {#services}

The following services are enabled for Profile lookup on edge:

- [Edge Profile Configuration Service](#edge-profile-configuration-service)
- [Projection Worker Service](#mepw)
- [Express Profile Service](#xps)

### Edge Profile Configuration Service {#edge-profile-configuration-service}

The Edge Profile Configuration Service exposes APIs for downstream solutions and applications to create projection configurations. You can use these APIs to specify the attributes and audiences of a profile that should be sent to the edges, as well as the edge regions where the projection should be sent. At this point in time, you can specify **any** of the edge regions for projections.

### Projection Worker Service {#mepw}

The Projection Worker Service (MEPW) monitors changes happening on the hub on profiles. After examining the changes in the configurations, this service prepares the projections and sends them out to the previously specified edge regions. Additionally, this service processes the entity refresh requests and sends out the required projections to the necessary regions. Entity refreshes are used to ensure the entity can be accessed with high availability.

### Express Profile Service {#xps}

The Express Profile Service (XPS) retrieves the profiles on the different edges. This service receives requests from downstream solutions, such as Adobe Target or Custom Personalization destinations, and looks up the profiles from the databases on the edges, and sends the requested profile to the requesting solution. If the profile isn't found, a refresh request is send to the associated hub.

## Next steps

After reading this guide, you should have a basic understanding of edge profiles, including information on the available regions and services for edge profiles. For more information on edge projections, please read the [edge projections endpoint guide](./api/edge-projections.md). For more information on Adobe Experience Edge, please read the [Edge overview](../edge/home.md).

## Appendix

The following section lists frequently asked questions regarding edge profiles:

### What regions can edge profiles land in?

Edge profiles can land in different regions depending on the situation at hand.

For projection configurations, any changes to the profile will be propagated to all regions mentioned within the profile configuration.

Additionally, every edge profile has a schema attribute called the User Activity Region (UAR). All the edges this profile has visited in the last 14 days are listed in this profile attribute. As a result, when this attribute is present in a profile, any changes to the profile are also sent to all the regions listed in the UAR.

### How does data expirations work with edge profiles?

For edge profiles, data expiry determines how long the profile will stay on edge before it is removed. Data expiry is **rolling**, which means that every time the profile is accessed on edge, the data expiry time resets.

You can add data expiration on your edge profiles by adding it to the [edge projection](./api/edge-projections.md). By default, the data expiration lasts for 14 days, but it can be set to a minimum of 1 hour and a maximum of 90 days.
