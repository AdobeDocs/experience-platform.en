---
keywords: Experience Platform;home;popular topics;segmentation;Segmentation;segment service;segment;Segment;Segments;segments
solution: Experience Platform
title: Segmentation Service Overview
description: Learn about Adobe Experience Platform Segmentation Service and the role it plays in the Platform ecosystem.
exl-id: 2c18a806-88ed-4659-bdfd-2377f5a09a1a
---
# [!DNL Segmentation Service] overview

Adobe Experience Platform [!DNL Segmentation Service] provides a user interface and RESTful API that allows you to build segments and generate audiences from your [!DNL Real-Time Customer Profile] data. These segments are centrally configured and maintained on [!DNL Platform], and are readily accessible by any Adobe solution. 

This document provides an overview of [!DNL Segmentation Service] and the role it plays in Adobe Experience Platform.

## Getting started with [!DNL Segmentation Service]

It is important to understand the following key terms used throughout this document:

- **Segmentation**: Dividing a large group of individuals (such as customers, prospects, users, or organizations) into smaller groups that share similar traits and will respond similarly to marketing strategies.
- **Segment definition**: The rule set used to describe key characteristics or behavior of a target audience. Once conceptualized, the rules outlined in a segment definition are used to determine qualifying audience members for a segment.
- **Audience**: The resulting set of profiles that meet the criteria of a segment definition.

## How segmentation works

Segmentation is the process of defining specific attributes or behaviors shared by a subset of profiles from your profile store to distinguish a marketable group of people from your customer base. For example, in an email campaign called "Did you forget to buy your sneakers?", you may want an audience of all users who searched for running shoes within the last 30 days, but who did not complete a purchase. 

Once a segment has been conceptually defined, it is built in [!DNL Experience Platform]. Typically, segments are built by the marketer or audience specialist although some organizations prefer they be created by their marketing department, in collaboration with their data analysts. Upon reviewing the data being sent to [!DNL Platform], the data analyst composes the segment definition by selecting which fields and values will be used to build the rules or conditions of the segment. This is done using either the UI or API. 

## Create segments

Whether created using the API or using the [!DNL Segment Builder], segments are ultimately defined using [!DNL Profile Query Language] (PQL). This is where the conceptual segment definition gets described in the language built to retrieve profiles meeting the criteria. For more information, see the [PQL overview](./pql/overview.md).  

To learn how to create and use segments in the [!DNL Segment Builder] (the UI implementation of [!DNL Segmentation Service]), see the [Segment Builder guide](./ui/overview.md). 

For information on building segment definitions using the API, see the tutorial on [creating audience segments using the API](./tutorials/create-a-segment.md).

>[!NOTE]
>
>In the event a schema is extended, all future uploads must update newly added fields accordingly. For more information on customizing [!DNL Experience Data Model] (XDM), visit the [Schema Editor tutorial](../xdm/tutorials/create-schema-ui.md).
>
>Additionally, if an Experience Event expiration value is enabled on the dataset, this could affect the membership of the created segment. Please read the guide on [Experience Event expirations](../profile/event-expirations.md) for more information on how this feature can affect segmentation.

## Evaluate segments {#evaluate-segments}

>[!CONTEXTUALHELP]
>id="platform_segments_evaluation"
>title="Evaluation methods"
>abstract="Platform currently supports three methods of evaluating segments: streaming segmentation, batch segmentation, and edge segmentation."

>[!CONTEXTUALHELP]
>id="platform_segments_evaluation_streaming"
>title="Streaming evaluation"
>abstract="Streaming segmentation is an ongoing data selection process that updates your segments in response to user activity."
>additional-url="https://experienceleague.adobe.com/docs/experience-platform/segmentation/api/streaming-segmentation.html" text="Evaluate events in near real-time with streaming segmentation"

Platform currently supports three methods of evaluating segments: streaming segmentation, batch segmentation, and edge segmentation.

### Streaming segmentation {#streaming}

Streaming segmentation is an ongoing data selection process that updates your segments in response to user activity. Once a segment has been built and saved, the segment definition is applied against incoming data to [!DNL Real-Time Customer Profile]. Segment additions and removals are processed regularly, ensuring your target audience remains relevant. 

To learn more about streaming segmentation, please read the [streaming segmentation documentation](./api/streaming-segmentation.md).

### Batch segmentation {#batch}

>[!CONTEXTUALHELP]
>id="platform_segments_evaluation_batch"
>title="Batch evaluation"
>abstract="As an alternative to an ongoing data selection process, batch segmentation moves all profile data at once through segment definitions to produce corresponding audiences. Once created, the segment is saved and stored so that you can export it for use."

As an alternative to an ongoing data selection process, batch segmentation moves all profile data at once through segment definitions to produce corresponding audiences. Once created, this segment is saved and stored so that you can export it for use. 

Batch segments are automatically evaluated every 24 hours. If you want to evaluate a batch segment on demand, you can use a segment job. To learn more about segment jobs, please read the [segment jobs documentation](./api/segment-jobs.md).

### Edge segmentation {#edge}

>[!CONTEXTUALHELP]
>id="platform_segments_evaluation_edge"
>title="Edge evaluation"
>abstract="Edge segmentation is the ability to evaluate segments in Platform instantaneously on Experience Edge, enabling same-page and next-page personalization use cases."
>additional-url="https://experienceleague.adobe.com/docs/experience-platform/segmentation/ui/edge-segmentation.html" text="Edge segmentation UI guide"

Edge segmentation is the ability to evaluate segments in Platform instantaneously [on Experience Edge](../edge/home.md), enabling same-page and next-page personalization use cases. 

To learn more about edge segmentation, please read either the [API documentation](./api/edge-segmentation.md) or the [UI documentation](./ui/edge-segmentation.md).

## Access segmentation results

To learn how to access an exported segment, see the [segment evaluation tutorial](./tutorials/evaluate-a-segment.md).
  
## Segment metadata

Segment metadata facilitates indexing in the event any of your segments are to be reused and/or combined. 

Composing your segments (through either the API or [!DNL Segment Builder]) requires that you to define a segment name and merge policy.

### Segment names

When creating a new segment, you are required to provide a segment name. The segment name is used to identify a particular segment among the collection built by [!DNL Segmentation Service]. Segment names should therefore be descriptive, concise, and unique.

>[!NOTE]
>
>When planning a segment, remember that segments can be referenced from, and combined with, any other segment. When selecting a name, consider the possibility that your segment may contain reusable portions.

### Merge policies

Merge policies are rules used by [!DNL Profile] to determine how data will be prioritized and combined into a unified view under certain conditions. 
If a merge policy is not defined, the default [!DNL Platform] merge policy is used. If you would rather use a merge policy specific to your organization, you can create your own and mark it as your organization's default.

More information about merge policies can be found in the [merge policies guide](../profile/api/merge-policies.md).

>[!NOTE]
>
>Estimation of audience sizes is based on the organization's default profile merge policy.

### Other segment metadata

In addition to segment name and merge policy, [!DNL Segment Builder] offers you an additional "segment description" metadata field where you can summarize your segment definition's purpose.

## Advanced segmentation features

Segments can be configured to continually generate an audience on an ongoing basis by combining [streaming data ingestion](../ingestion/streaming-ingestion/overview.md) with any of the following advanced segmentation features: 
- [Sequential segmentation](#sequential)
- [Dynamic segmentation](#dynamic)
- [Multi-entity segmentation](#multi-entity)

These advanced features are discussed in more detail in the following sections.

## Sequential segmentation {#sequential}

A standard user journey is sequential in nature. Adobe Experience Platform allows you to define an ordered series of segments to reflect this journey therefore capturing sequences of events as they occur. You can arrange events into their desired order by using the visual event timeline in the [!DNL Segment Builder].

An example of a customer journey that would require sequential segmentation would be product view > product add > checkout > No purchase. 

## Dynamic segmentation {#dynamic}

Dynamic segmentation solves the scalability problems marketers traditionally face when building segments for marketing campaigns.

Unlike static segmentation which requires you to explicitly and repeatedly capture every possible use case, dynamic segmentation uses variables to build the rule logic and dynamically express relationships.

### Use case: Looking for customers who make purchases outside their home state

To illustrate the value of this advanced segmentation feature, consider a data architect collaborating with a marketer to identify customers who made purchases outside their home state.

**The problem**

Static segmentation requires you to define individual segments with a unique home state attribute, before filtering for purchase events that do not equal the home state. An explicit segment of this type would read "I'm looking for people from Utah where the state of their purchase is not Utah". Creating an audience using this method requires you to define one segment for every US state, for a total of 50 segments.

As a result of the different segment combinations that inevitably arise as you scale, the manual process required for static segmentation becomes more time consuming, reducing your overall efficiency.

**The solution**

By assigning a variable to the purchase state attribute, your dynamic segment simplifies to "find me a purchase where the state of that purchase is not equal to the customer's home state". Doing so allows you to then consolidate 50 static segments into a single dynamic segment. 
 
## Multi-entity segmentation {#multi-entity}

With the advanced multi-entity segmentation feature, you can extend [!DNL Real-Time Customer Profile] data with additional data based on products, stores, or other non-person, also known as "dimension" entities. As a result, [!DNL Segmentation Service] can access additional fields during segment definition as if they were native to the [!DNL Profile] data store. Multi-entity segmentation provides flexibility when identifying audiences based on data relevant to your unique business needs. For more information, including use cases and workflows, refer to the [multi-entity segmentation guide](multi-entity-segmentation.md).

## [!DNL Segmentation Service] data types

[!DNL Segmentation Service] supports a variety of primitive and complex data types. Detailed information, including a list of supported data types can be found in the [supported data types guide](./data-types.md).

## Next steps

[!DNL Segmentation Service] provides a consolidated workflow to build segments from [!DNL Real-Time Customer Profile] data. In summary:

- [!DNL Segmentation] is the process of defining a subset of profiles from your profile store, allowing you to characterize behavior or attributes of a desired marketable group. [!DNL Segmentation Service] makes this process possible.
- When planning a segment, keep in mind that a segment can be referenced from, and combined with, any other segment.
- A segment can be built from rules based on profile data, related time series data, or both.
- Segments can either be evaluated on-demand or continuously. When evaluated on-demand, all profile data is passed through the segment definitions at once. When evaluated continuously, data streams through segment definitions as it enters [!DNL Platform].
  
To learn how to define segments in the UI, see the [Segment Builder guide](./ui/overview.md). For information on building segment definitions using the API, see the tutorial on [creating segments using the API](./tutorials/create-a-segment.md).
