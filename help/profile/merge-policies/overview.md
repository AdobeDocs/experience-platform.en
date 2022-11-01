---
keywords: Experience Platform;profile;real-time customer profile;merge policies;UI;user interface;timestamp ordered;dataset precedence
title: Merge Policies Overview
type: Documentation
description: Adobe Experience Platform enables you to bring data fragments together from multiple sources and combine them in order to see a complete view of your individual customers. When bringing this data together, merge policies are the rules that Platform uses to determine how data will be prioritized and what data will be combined to create the unified view.
exl-id: a8ef527a-cfee-4129-9973-e8a212a3ad1e
---
# Merge policies overview

Adobe Experience Platform enables you to bring data fragments together from multiple sources and combine them in order to see a complete view of each of your individual customers. When bringing this data together, merge policies are the rules that [!DNL Platform] uses to determine how data will be prioritized and what data will be combined to create a unified view. 

Using RESTful APIs or the user interface, you can create new merge policies, manage existing policies, and set a default merge policy for your organization. This document provides an overview of merge policies and the role they play within Experience Platform.

## Getting started

This guide requires a working understanding of several important [!DNL Experience Platform] features. Before following this guide and working with merge policies, please review the documentation for the following services:

* [Real-time Customer Profile](../home.md): Provides a unified, real-time consumer profile based on aggregated data from multiple sources.
* [Adobe Experience Platform Identity Service](../../identity-service/home.md): Enables Real-time Customer Profile by bridging identities from disparate data sources being ingested into [!DNL Platform].
* [Experience Data Model (XDM)](../../xdm/home.md): The standardized framework by which [!DNL Platform] organizes customer experience data.

## Understanding merge policies

Adobe Experience Platform enables you to bring data fragments together from multiple sources and combine them in order to see a complete, unified view of each of your individual customers. When bringing this data together, merge policies are the rules that Platform uses to determine how data will be prioritized and what data will be combined to create that unified view.

For example, if a customer interacts with your brand across several channels, your organization will have multiple profile fragments related to that single customer appearing in multiple datasets. When these fragments are ingested into Platform, they are merged together in order to create a single profile for that customer. 

When the data from multiple sources conflicts (for example one fragment lists the customer as "single" while the other lists the customer as "married") the merge policy determines which information to include in the profile for the individual.

Merge policies are private to your organization, allowing you to create different policies to merge schemas in the specific ways that you need. You can also specify a default merge policy that will be used if one is not explicitly provided. See the section on [default merge policies](#default-merge-policy) later in this document to learn more. Please note that there is a maximum of five merge policies allowed per organization.

## Merge methods {#merge-methods}

Each profile fragment contains information for just one identity out of the total number of identities that could exist for an individual. When merging that data together to form a customer profile, there is the potential for that information to conflict and priority must be specified. 

Selecting a merge method allows you to specify which dataset attributes to prioritize if a merge conflict occurs between datasets. 

There are two possible merge methods available for merge policies. Each of these methods are summarized below with additional details provided in the sections that follow:

* **[!UICONTROL Dataset precedence]:** In the event of a conflict, give priority to profile fragments based on the dataset from which they came. When selecting this option, you must choose the related datasets and their order of priority. Learn more about the [dataset precedence](#dataset-precedence) merge method.
* **[!UICONTROL Timestamp ordered]:** In the event of a conflict, priority is given to the profile fragment which was updated most recently. Learn more about the [timestamp ordered](#timestamp-ordered) merge method.

### Dataset precedence {#dataset-precedence}

When **[!UICONTROL Dataset precedence]** is selected as the merge method for a merge policy, you are able to give priority to profile fragments based on the dataset from which they came. An example use case would be if your organization had information present in one dataset that is preferred or trusted over data in another dataset. 

In order to create a merge policy using **[!UICONTROL Dataset precedence]**, you must select the Profile and ExperienceEvent datasets that are included and then you can manually order the Profile datasets for precedence. Once the datasets have been selected and ordered, the top dataset will be given highest priority, the second dataset will be second-highest, and so on.

### Timestamp ordered {#timestamp-ordered}

As profile records are ingested into Experience Platform, a system timestamp is obtained at the time of ingestion and added to the record. When **[!UICONTROL Timestamp ordered]** is selected as the merge method for a merge policy, profiles are merged based on the system timestamp. In other words, merging is done based on the timestamp for when the record was ingested into Platform.

## Identity stitching {#id-stitching}

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

## Next steps

After reading this guide you now know what merge policies are and the role they play within Experience Platform. To begin working with merge policies in the Experience Platform UI, please refer to the [merge policies UI guide](ui-guide.md). To work with merge policies using the API, visit the [merge policies API endpoint guide](../api/merge-policies.md).
