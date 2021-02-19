---
keywords: Experience Platform;home;popular topics
solution: Experience Platform
title: Segmentation tutorials
topic: tutorial
type: Tutorial
description: Adobe Experience Platform Segmentation Service provides a user interface and RESTful API that allows you to build segments and generate audiences from your Real-time Customer Profile data. These segments are centrally configured and maintained on Platform, and are readily accessible by any Adobe solution.
---

# Segmentation tutorials

Adobe Experience Platform [!DNL Segmentation Service] provides a user interface and RESTful API that allows you to build segments and generate audiences from your [!DNL Real-time Customer Profile] data. These segments are centrally configured and maintained on [!DNL Platform], and are readily accessible by any Adobe solution. To learn more about segmentation, begin by reading the [Segmentation Service overview](../segmentation/home.md).

## Create a segment definition

A segment definition is the rule set used to describe key characteristics or behavior of a target audience. Once conceptualized, the rules outlined in a segment definition are used to determine qualifying audience members for a segment. The developing, testing, previewing, and saving of a segment definition can be done using the [!DNL Platform] user interface or APIs. To create a segment definition, follow the [creating a segment API tutorial](../segmentation/tutorials/create-a-segment.md) or the [Segment Builder UI user guide](../segmentation/ui/overview.md).

## Evaluate a segment and access results

Once you have developed, tested, and saved your segment definition, you can then evaluate the segment through either scheduled evaluation or on-demand evaluation. Scheduled evaluation (also known as 'scheduled segmentation') allows you to create a recurring schedule for running an export job at a specific time, whereas on-demand evaluation involves creating a segment job to build the audience immediately. To learn more, visit the tutorial for [evaluating and accessing segment results](../segmentation/tutorials/evaluate-a-segment.md).

## Export segment data

Exporting segments containing [!DNL Profile] data requires first [creating a dataset into which the data will be exported](../segmentation/tutorials/create-dataset-export-segment.md), then initiating a new export job. Steps for generating an export job can be found in the tutorial on [evaluating a segment](../segmentation/tutorials/evaluate-a-segment.md). 

## Configure merge policies

Adobe Experience Platform enables you to bring data together from multiple sources and combine it in order to see a complete view of each of your individual customers. When bringing this data together, merge policies are the rules that [!DNL Platform] uses to determine how data will be prioritized and what data will be combined to create that unified view. Using RESTful APIs or the user interface, you can create new merge policies, manage existing policies, and set a default merge policy for your organization. To work with merge policies in the [!DNL Platform] UI, visit the [merge policies user guide](../profile/ui/merge-policies.md). To work with merge policies using the [!DNL Real-time Customer Profile] API, see the [merge policies developer guide](../profile/api/merge-policies.md).

## Enforce data usage compliance for segments

Segments that are enabled for use in [!DNL Real-time Customer Profile] contain a merge policy ID within their segment definition. This merge policy contains information about which datasets are to be included in the segment, which in turn contain any applicable data usage labels. For specific steps covering enforcing data usage compliance for an audience segment, please follow the [data usage compliance enforcement tutorial for segments](../segmentation/tutorials/governance.md).

## Streaming segmentation

Streaming segmentation is the ability to instantly evaluate a customer as soon as an event comes into a particular segment group. With this capability, most segment rules can now be evaluated as the data is passed into Adobe Experience Platform, meaning segment membership will be kept up-to-date without running scheduled segmentation jobs. To learn more, visit the [streaming segmentation overview](../segmentation/api/streaming-segmentation.md).

## Multi-entity segmentation

Multi-entity segmentation is the ability to extend [!DNL Profile] data with additional data based on products, stores, or other non-profile classes. Once connected, data from additional classes becomes available as if they were native to the [!DNL Profile] schema. To learn move, see the [multi-entity segmentation documentation](../segmentation/multi-entity-segmentation.md).