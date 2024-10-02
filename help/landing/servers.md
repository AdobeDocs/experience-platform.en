---
solution: Experience Platform
title: Servers on Adobe Experience Platform
description: Learn about the different server types on Adobe Experience Platform.
---

# Servers on Adobe Experience Platform

some sort of introduction blurb

## Server types

On Adobe Experience Platform, data is serviced by two different types of servers - hub servers and edge servers.

### Hub server

A hub server is a main data center that is centrally located. These larger data centers contain all the data you've ingested into Platform through methods including streaming ingestion, batch ingestion, and sources.

Hub servers allow you to send and receive more robust and complete data to your downstream services. As a result, hub servers should be used in scenarios where the **thoroughness** of the data is more important.

Available services on hub servers include the following:

- Batch segmentation
- Streaming segmentation
- Profiles
- Destinations

### Edge server

An edge server is a secondary data center that is physically located closer to different geographic locations. These data centers contain all the data that you've ingested through Data Collection as well as limited projections of hub data onto edge.

Edge servers allow you to more quickly send and receive data to your customers due to their closer proximity to the end user. As a result, edge servers should be used in scenarios where the **speed** of the data is more important. 

Available services on edge servers include the following:

- Edge segmentation
- Edge profiles
- Edge destinations

## When should I use each type of server?

You should use services on edge servers when

## Next steps

## Appendix

### Frequently asked questions

The following section lists frequently asked questions about hub and edge servers:

#### How does data go from hub to edge?

Data is automatically sent from hub to edge to keep it eventually consistent. However, this does **not** mean that data in edge is kept perfectly in sync with data in hub. As a result, there may be differences in available data between hub and edge.

### Locations

The following section lists the locations for both hub and edge servers.

**Hub servers**

- VA7
- NLD2
- AUS5

**Edge servers**

- OR2
- VA6
- IRL1
- IND1
- SGP3
- AUS3
- JPN3
