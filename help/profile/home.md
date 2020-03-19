---
keywords: Experience Platform;profile;real-time customer profile;troubleshooting;API
solution: Adobe Experience Platform
title: Real-time Customer Profile overview
topic: guide
---

# Real-time Customer Profile overview

Adobe Experience Platform enables you to drive coordinated, consistent, and relevant experiences for your customers no matter where or when they interact with your brand. With Real-time Customer Profile, you can see a holistic view of each individual customer that combines data from multiple channels, including online, offline, CRM, and third party data. Profile allows you to consolidate your disparate customer data into a unified view offering an actionable, timestamped account of every customer interaction. This overview will help you understand the role and use of Real-time Customer Profile in Experience Platform.

## Understanding Real-time Customer Profile

Real-time Customer Profile is a generic lookup entity store that merges data from various enterprise data assets, and then provides access to that data in the form of individual customer profiles and related time series events.

This feature enables marketers to drive coordinated, consistent and relevant experiences with their audiences across multiple channels, as summarized in the video below:

>[!VIDEO](https://video.tv.adobe.com/v/27251?quality=12&enable10seconds=on&speedcontrol=on)

### Profile data store

Although Real-time Customer Profile processes ingested data and uses Adobe Experience Platform Identity Service to merge related data through identity mapping, it maintains its own data in the Profile store. In other words, the Profile store is separate from Catalog data (Data Lake) and Identity Service data (identity graph).

### Profile and Platform services

The relationship between Real-time Customer Profile and other services within Experience Platform is highlighted in the following diagram:

![The relationship between Profile and other Experience Platform services.](images/profile-overview/profile-in-platform.png) 

### Profiles and record data

A profile is a representation of a subject, an organization or an individual, also referred to as record data. For example, the profile of a product may include a SKU and description, whereas the profile of a person contains information like first name, last name, and email address. 

Using Experience Platform, you can customize profiles to use types of data relevant to your business. The standard Experience Data Model (XDM) Individual Profile class is the preferred class upon which to build a schema when describing customer record data, and supplies the data integral to many interactions between Platform services. For more information on working with schemas in Experience Platform, please begin by reading the [XDM System overview](../xdm/home.md).

### Time series events

Time series data provides a snapshot of the system at the time an action was taken either directly or indirectly by a subject, as well as data detailing the event itself. Represented by the standard schema class XDM ExperienceEvent, time series data can describe events such as items being added to a cart, links being clicked, and videos viewed.

Time series data can be used to base segmentation rules on, and events can be accessed individually in the context of a profile. 

### Identities

Every business wants to communicate with their customers in a way that feels personal. However, one of the challenges of delivering relevant digital experiences to customers is understanding how to tie their disconnected data together, which is often spread across different digital channels such as tablets, mobile phones and laptops.

Identity Service allows you to piece together the complete picture of your customer by linking identities from multiple channels, creating an identity graph for each customer, allowing you to better understand them. Visit the [Identity Service overview](../identity-service/home.md) for more information.

### Segmentation

Segment rules are built and applied to Real-time Customer Profile data using RESTful APIs and the Segment Builder user interface. As explained in the following video, ADobe Experience Platform Segmentation Service produces the audiences needed to power customer experiences: 

>[!VIDEO](https://video.tv.adobe.com/v/27254?quality=12&enable10seconds=on&speedcontrol=on)

When an audience segment is created, the ID of that segment is added to the list of segment memberships for all qualifying profiles. To learn more about segmentation, please begin by reading the [Segmentation Service overview](../segmentation/home.md).

### Profile fragments and union views

One of the key features of Real-time Customer Profile is the ability to unify multi-channel data. When Real-time Customer Profile is used to access an entity, it can supply you with a merged view of all profile fragments for that entity across datasets, referred to as the union view.

Real-time Customer Profile data is merged across sources when an entity or profile is accessed by its ID or exported as a segment. To learn more about accessing profiles and union views, visit the Real-time Customer Profile API developer sub-guide on [Entities, also known as "Profile Access"](api/entities.md).

### Merge policies

When bringing data together from multiple sources and combining it in order to see a complete view of each of your individual customers, merge policies are the rules that Platform uses to determine how data will be prioritized and what data will be combined to create that unified view. 

Using RESTful APIs or the user interface, you can create new merge policies, manage existing policies, and set a default merge policy for your organization. For more information on working with merge policies using APIs, please see the Real-time Customer Profile API [merge policies sub-guide](api/merge-policies.md) or the [merge policies user guide](ui/merge-policies.md) for how to work with merge policies using the Platform UI. 

## Real-time components

This section introduces the components that allow Real-time Customer Profile to update and monitor record and time series data in real-time.
  
### Streaming ingestion and streaming segmentation

Real-time input is made possible through a process called streaming ingestion. As profile and time series data is ingested, Real-time Customer Profile automatically decides to include or exclude that data from segments through an ongoing process called streaming segmentation, before merging it with existing data and updating the union view. As a result, you can instantaneously perform computations and make decisions to deliver enhanced, individualized experiences to customers as they interact with your brand.  

While being ingested, the data also undergoes validation to ensure it being ingested properly and conforming to the schema upon which the dataset is based. For more information about what validation is done during ingestion, please begin by reading the [data ingestion quality overview](../ingestions/quality/overview.md).

### Edge projections

In order to drive coordinated, consistent, and personalized experiences for your customers across multiple channels in real-time, the right data needs to be readily available and continuously updated as changes happen. Adobe Experience Platform enables this real-time access to data through the use of what are known as edges.

An edge is a geographically placed server that stores data and makes it readily accessible to applications. For example, Adobe applications such as Adobe Target and Adobe Campaign use edges in order to provide personalized customer experiences in real-time. Data is routed to an edge by a projection, with a projection destination defining the edge to which data will be sent, and a projection configuration defining the specific information that will be made available on the edge.

To learn more and begin working with edges and projections, refer to the Real-time Customer Profile API [Edge Projections sub-guide](api/edge-projections.md). 

## Data governance and Privacy

Data governance is a series of strategies and technologies used to manage customer data and ensure compliance with regulations, restrictions, and policies applicable to data use. 

As it relates to accessing data, data governance plays a key role within Experience Platform at various levels: 
*   Data usage labeling 
*   Data access policies 
*   Access control on data for marketing actions

Data governance is managed at several points. These include deciding what data is ingested into Platform and what data is accessible after ingestion for a given marketing action. 

For more information, begin by reading the [data governance overview](../data-governance/home.md).

### Handling opt-out and data privacy requests

Experience Platform enables your customers to send opt-out requests related to the usage and storage of their data within Real-time Customer Profile. For more information on how opt-out requests are handled, please see the documentation on [honoring opt-out requests](../segmentation/honoring-opt-outs.md).

## Add data to Real-time Customer Profile

Platform can be configured to send your record and time-series data to Profile, supporting real-time streaming ingestion and batch ingestion. For more information, see the tutorial outlining how to [add data to Real-time Customer Profile](tutorials/add-profile-data.md).

>[!Note]
>Data collected through Adobe solutions, including Analytics Cloud, Marketing Cloud, and Advertising Cloud, flows into Experience Platform and is ingested into Profile. 

## Create audience segments

The cornerstone of your marketing campaign is your audience. Real-time Customer Profile provides the tools for segmenting your customer base into audiences consisting of members meeting the precise criteria you require. With segmentation, you can isolate audience members using criteria such as:

* Customers for whom one week has passed since last making a purchase.
* Customers for whom the sum of the purchases is greater than $10,000.
* Customers who have seen a set number of unique marketing campaigns from a pre-defined list, specified by their Campaign ID, and explored them within 30 minutes.

To get started with segmentation, refer to the [segmentation overview](../segmentation/overview.md). 

## (Alpha) Configure computed attributes

>[!IMPORTANT]
>The computed attribute functionality outlined in this document is in alpha. The documentation and the functionality are subject to change.

Computed attributes enable you to automatically compute the value of fields based on other values, calculations, and expressions. Computed attributes operate on the profile level, meaning you can aggregate values across all records and events. 

Each computed attribute contains an expression, or "rule", that evaluates incoming data and stores the resulting value in a profile attribute or into an event. These computations help you to easily answer questions related to things like lifetime purchase value, time between purchases, or number of application opens, without requiring you to manually perform complex calculations each time the information is needed.

For more information on computed attributes, and step-by-step instructions for working with them, please see the Real-time Customer Profile API [sub-guide on Computed Attributes](api/computed-attributes.md). This guide will help you better understand the role computed attributes play within Adobe Experience Platform, and it includes sample API calls for performing basic CRUD operations using the Real-time Customer Profile API.