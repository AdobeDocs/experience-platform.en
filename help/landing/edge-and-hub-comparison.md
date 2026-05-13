---
solution: Experience Platform
title: Edge Network and hub comparison
description: Learn about the different processing paths that are available to use on Adobe Experience Platform.
exl-id: 3e9c63d2-c798-44b4-870d-bf1551f29690
TQID: https://experienceleague.adobe.com/wkBilzxWropja9A0TBo1oNY8rdVax8rmlDbTQjE-jlE
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: c132d929-fa62-4271-803e-b823be07b914
    internal-label: Profile
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection
subfeature_v2:
  - id: a230274e-7e6e-49eb-b817-514495a710ac
    internal-label: query service
  - id: dc6ebdf7-9a94-43eb-9184-759cfdd0cf1c
    internal-label: Event forwarding
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
    internal-label: User
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
    internal-label: Admin
  - id: f8a45b24-4be7-4f1b-909b-60d06b483a20
    internal-label: Leader
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: bce87dde-a4ab-44c9-8a18-ad66e4ddb377
    internal-label: Customer experience
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
  - id: e0eb8757-182f-49f3-94a4-1587d16f5094
    internal-label: Personalization
  - id: eb30f47f-d87a-400f-8f78-63ce7979ff56
    internal-label: Machine learning
---
# Edge Network and hub comparison

Adobe Experience Platform is the most powerful, flexible, and open system on the market for building and managing complete solutions that drive customer experience. You can use Experience Platform to centralize and standardize customer data and content from any system and apply data science and machine learning to dramatically improve the design and delivery of rich, personalized experiences. As a result, Experience Platform has multiple ways to process your data, letting you evaluate your data in the best way possible.

## Server types

On Experience Platform, data can be be processed in two different paths: Adobe Experience Platform hub for batch and streaming workflows and Edge Network for real-time experiences.

### Adobe Experience Platform hub

Hub is a main data center that is centrally located and contains all the historical data and rich profile context that has been collected in Adobe Experience Platform. This allows you to send and receive more robust and complete data to your downstream services. As a result, hub should be used in scenarios where the **thoroughness** of the data is more important.

Available services on hub include the following:

- Batch segmentation
- Streaming segmentation
- Profiles
- Destinations
- Identity Graph
- Data Distiller - Query Service
- Source connectors

### Experience Platform Edge Network

Edge Network is a server that is physically located closer to different geographic locations. These data centers process all the data collected through the SDK extensions and Edge Network APIs. The only data that lives on the Edge Network are the audience memberships, profile identities, and attributes necessary for personalization.

Edge Network lets you send and receive data to your customers more quickly due to their closer proximity to the end user. Additionally, you can use Edge Network to process event forwarding requests and tag management requests. However, Edge Network only processes **behavioral** data. As a result, Edge Network should be used in scenarios where the **speed** of the data is more important. 

Available services on Edge Network include the following:

- Edge segmentation
- Edge profiles
- Edge destinations
- Data collection
- SDK extensions

## Locations

The following section lists the locations for both hub and Edge Network.

![A diagram that lists the different locations for both hub and Edge Network servers.](./images/servers/platform-server-locations.png)

**Hub**

- VA7 (Virginia, USA)
- NLD2 (The Netherlands)
- AUS5 (Australia)
- CAN2 (Canada)
- GBR9 (United Kingdom)
- IND1 (India)

**Edge Network**

- OR2 (Oregon, USA)
- VA6 (Virginia, USA)
- IRL1 (Ireland)
- IND1 (India)
- SGP3 (Singapore)
- AUS3 (Australia)
- JPN3 (Japan)

More detailed information about the available server locations can be found in the [multi-cloud overview](./multi-cloud.md#available-cloud-regions).

## Next steps

After reading this overview, you now understand the differences between processing data on Adobe Experience Platform hub and Adobe Experience Platform Edge Network.

## Appendix

The following section lists supplemental information about processing data on Adobe Experience Platform.

### Frequently asked questions

The following section lists frequently asked questions about hub and Edge Network:

#### What scenarios are most appropriate for hub?

Hub is best suited in scenarios where the **thoroughness** of the data is more important. For example, let's say you want to create a marketing campaign to target all customers who have abandoned carts. In that use case, you could use batch segmentation, creating an audience that matches the abandoned cart users, and export it to a batch destination.

#### What scenarios are most appropriate for Edge Network?

Edge Network is best suited for scenarios where **speed** of the data is more important. For example, let's say you need to create a limited flash sale to target a customer who's browsing your site with a product in their cart. In that use case, you could use edge segmentation, letting you immediately target and send a personalized notification to users with a product in their cart with a "flash sale".

#### What data goes from hub to Edge Network?

Only data that is needed to deliver real-time experiences on the edge is loaded from hub to Edge Network. This data is automatically sent from hub to Edge Network to keep it eventually consistent, and is only retained for up to 14 days. However, this does **not** mean that data is kept perfectly in sync with data in hub. As a result, there may be differences in available data between hub and Edge Network.
