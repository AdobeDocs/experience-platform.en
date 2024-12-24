---
solution: Experience Platform
title: Processing data on Adobe Experience Platform
description: Learn about the different processing paths that are available to use on Adobe Experience Platform.
---

# Processing data on Adobe Experience Platform

Adobe Experience Platform is the most powerful, flexible, and open system on the market for building and managing complete solutions that drive customer experience. You can use Experience Platform to centralize and standardize customer data and content from any system and apply data science and machine learning to dramatically improve the design and delivery of rich, personalized experiences. As a result, Platform has multiple ways to process your data, letting you evaluate your data in the best way possible.

## Server types

On Platform, data can be be processed in two different paths: Adobe Experience Platform hub for batch and streaming workflows and Edge Network for real-time experiences.

### Adobe Experience Platform hub

Hub is a main data center that is centrally located and contains all the historical data and rich profile context that has been collected in Adobe Experience Platform. This allow you to send and receive more robust and complete data to your downstream services. As a result, hub should be used in scenarios where the **thoroughness** of the data is more important.

Available services on hub include the following:

- Batch segmentation
- Streaming segmentation
- Profiles
- Destinations

### Experience Platform Edge Network

Edge Network is a secondary data center that is physically located closer to different geographic locations. These data centers process all the data collected through the SDK extensions and Edge Network APIs. The only data that lives on the Edge Network are the projected audience memberships and attributes necessary for personalization.

Edge Network lets you send and receive data to your customers more quickly due to their closer proximity to the end user. Additionally, you can use Edge Network to process event forwarding requests and tag management requests. As a result, Edge Network should be used in scenarios where the **speed** of the data is more important. 

Available services on Edge Network include the following:

- Edge segmentation
- Edge profiles
- Edge destinations
- Data collection
- SDK extensions

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
