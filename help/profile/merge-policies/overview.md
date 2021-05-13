---
keywords: Experience Platform;profile;real-time customer profile;merge policies;UI;user interface;timestamp ordered;dataset precedence
title: Merge Policies Overview
type: Documentation
description: Adobe Experience Platform enables you to bring data fragments together from multiple sources and combine them in order to see a complete view of your individual customers. When bringing this data together, merge policies are the rules that Platform uses to determine how data will be prioritized and what data will be combined to create the unified view.
---

# Merge policies overview

Adobe Experience Platform enables you to bring data fragments together from multiple sources and combine them in order to see a complete view of each of your individual customers. When bringing this data together, merge policies are the rules that [!DNL Platform] uses to determine how data will be prioritized and what data will be combined to create a unified view. 

Using RESTful APIs or the user interface, you can create new merge policies, manage existing policies, and set a default merge policy for your organization. This document provides an overview of merge policies and the role they play within Experience Platform.

## Getting started

This guide requires a working understanding of several important [!DNL Experience Platform] features. Before following this guide or using Profile APIs, please review the documentation for the following services:

* [Real-time Customer Profile](../home.md): Provides a unified, real-time consumer profile based on aggregated data from multiple sources.
* [Adobe Experience Platform Identity Service](../../identity-service/home.md): Enables Real-time Customer Profile by bridging identities from disparate data sources being ingested into [!DNL Platform].
* [Experience Data Model (XDM)](../../xdm/home.md): The standardized framework by which [!DNL Platform] organizes customer experience data.

## Understanding merge policies

Adobe Experience Platform enables you to bring data fragments together from multiple sources and combine them in order to see a complete view of each of your individual customers. When bringing this data together, merge policies are the rules that [!DNL Platform] uses to determine how data will be prioritized and what data will be combined to create a unified view.

For example, if a customer interacts with your brand across several channels, your organization will have multiple profile fragments related to that single customer appearing in multiple datasets. When these fragments are ingested into Platform, they are merged together in order to create a single profile for that customer. When the data from multiple sources conflicts (for example one fragment lists the customer as "single" while the other lists the customer as "married") the merge policy determines which information to include in the profile for the individual.

## Merge methods {#merge-methods}

Each profile fragment contains information for just one identity out of the total number of identities that could exist for an individual. When merging that data together to form a customer profile, there is the potential for that information to conflict and priority must be specified. Selecting a merge method allows you to specify which dataset attributes to prioritize if a merge conflict occurs between datasets. 

There are two possible merge methods available for merge policies. Each of these methods are summarized below with additional details provided in the sections that follow:

* **[!UICONTROL Timestamp ordered]:** In the event of a conflict, priority is given to the profile fragment which was updated most recently. 
    * **Custom timestamps:** [!UICONTROL Timestamp ordered] also supports custom timestamps which take priority over system timestamps when merging data within the same dataset (multiple identities) or across datasets. To learn more, see the section on [using custom timestamps](#custom-timestamps).
* **[!UICONTROL Dataset precedence]:** In the event of a conflict, give priority to profile fragments based on the dataset from which they came. When selecting this option, you must choose the related datasets and their order of priority.

### Timestamp ordered {#timestamp-ordered}

As profile records are ingested into Experience Platform, a system timestamp is obtained at the time of ingestion and added to the record. When **[!UICONTROL Timestamp ordered]** is selected as the merge method for a merge policy, profiles are merged based on the system timestamp. In other words, merging is done based on the timestamp for when the record was ingested into Platform.

#### Using custom timestamps {#custom-timestamps}

Occasionally there may be use cases where it is necessary to supply a custom timestamp and have the merge policy honor the custom timestamp rather than the system timestamp. Examples of this include backfilling data or ensuring the correct order of events if records are ingested out of order.

In order to use a custom timestamp, the **[!UICONTROL External Source System Audit Details] schema field group** must be added to your Profile schema. Once added, the custom timestamp can be populated using the `lastUpdatedDate` field. When a record is ingested with the `lastUpdatedDate` field populated, Experience Platform will use that field to merge records across datasets. If `lastUpdatedDate` is not present, or not populated, Platform will continue to use the system timestamp.

>[!NOTE]
>
>You must ensure that the `lastUpdatedDate` timestamp is populated when ingesting an update on the same record.

The following screenshot displays the fields in the [!UICONTROL External Source System Audit Details] field group. For step-by-step instructions on working with schemas using the Platform UI, including how to add field groups to schemas, please visit the [tutorial for creating a schema using the UI](../../xdm/tutorials/create-schema-ui.md).

![](../images/merge-policies/custom-timestamp-field-group.png)

To work with custom timestamps using the API, refer to the [merge policies endpoint guide section on using custom timestamps](../api/merge-policies.md#custom-timestamps).

### Dataset precedence {#dataset-precedence}

When **[!UICONTROL Dataset precedence]** is selected as the merge method for a merge policy, you are able to give priority to profile fragments based on the dataset from which they came. An example use case would be if your organization had information present in one dataset that is preferred or trusted over data in another dataset. 

In order to create a merge policy using **[!UICONTROL Dataset precedence]**, you must select the Profile and ExperienceEvent datasets that are included and then you can manually order the Profile datasets for precedence. Once the datasets have been selected and ordered, the top dataset will be given highest priority, the second dataset will be second-highest, and so on.

## [!UICONTROL ID stitching] {#id-stitching}

Identity stitching ([!UICONTROL ID stitching]) is the process of identifying data fragments and combining them together to form a complete profile record. To help illustrate the different stitching behaviors, consider a single customer who interacts with a brand using two different email addresses.

* **[!UICONTROL None]:** When this option is selected, IDs will not be stitched together. When segmentation occurs, identities that may belong to the same person will not be stitched together and segmentation will only consider the attributes attached to each individual ID when determining if a customer qualifies for segment membership. This could result in a single customer having multiple profiles and each profile could qualify for different segments, resulting in multiple marketing messages being sent to the same customer.
* **[!UICONTROL Private graph]:** When the private graph is selected, multiple identities related to the same individual are stitched together. This results in the customer having a single profile and allows segmentation to consider multiple attributes from multiple related identities when determining segment qualification. In this scenario, the customer is likely to have a single profile, qualify for one segment based on the combination of attributes across identities, and receive only one marketing message.

To learn more about identities and their role in generating profiles and segments, please begin by reading the [Identity Service overview](../../identity-service/home.md).

## Default merge policy {#default-merge-policy}

An organization can create a default merge policy for their organization to use when merging profile fragments. This allows users to easily select the default policy when performing actions in Experience Platform such as viewing customer profiles or creating segments. In most cases, unless another merge policy is specified, the default merge policy will be used.

Each organization can create multiple merge policies related to a single XDM schema class, however they can only have one default merge policy declared for each class. For example, your organization could have a default merge policy related to the [!DNL XDM Individual Profile] class and a different default merge policy for a custom-built Product Inventory class. 

If you create a new merge policy and set it as the default, the previous default merge policy will be automatically updated by the system to no longer be the default.

>[!WARNING]
>
>Profile counts and segments with an existing associated default merge policy may be affected. Any segment that has a default merge policy applied will be updated to the new default merge policy.