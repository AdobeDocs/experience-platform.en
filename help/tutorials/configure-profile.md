---
keywords: Experience Platform;home;popular topics
solution: Experience Platform
title: Configure Real-time Customer Profile
topic: tutorial
---

# Configure Real-time Customer Profile

In order to configure Real-time Customer Profile for your organization, you are required to complete multiple separate workflows. This document outlines the steps involved and provides links to tutorials for completing each individual workflow.

## Enable schema for Profile and Identity

Before data can be ingested into Adobe Experience Platform and used in the creation of Real-time Customer Profiles, a schema must be created to provide the structure for the data that will be ingested and that schema must be enabled for use in Profile and Adobe Experience Platform Identity Service. For step-by-step instructions on creating a schema that is enabled for both Profile and Identity Service, please refer to the tutorials for [creating a schema using the Schema Registry API](../xdm/tutorials/create-schema-api.md) or [creating a schema using the Schema Builder UI](../xdm/tutorials/create-schema-ui.md).

## Configure a dataset for Profile and Identity

To begin ingesting data into Profile, you must have a dataset that has been properly configured for use with Real-time Customer Profile and Identity Service. To get started, follow the [configure a dataset for Profile and Identity tutorial](../profile/tutorials/dataset-configuration.md).

## Configure merge policies

Adobe Experience Platform enables you to bring data together from multiple sources and combine it in order to see a complete view of each of your individual customers. When bringing this data together, merge policies are the rules that Platform uses to determine how data will be prioritized and what data will be combined to create that unified view. Using RESTful APIs or the user interface, you can create new merge policies, manage existing policies, and set a default merge policy for your organization. To work with merge policies in the Platform UI, visit the [merge policies user guide](../profile/ui/merge-policies.md). To work with merge policies using the Real-time Customer Profile API, see the [merge policies developer guide](../profile/api/merge-policies.md)

## Configure edge projections

In order to drive coordinated, consistent, and personalized experiences for your customers across multiple channels in real-time, the right data needs to be readily available and continuously updated as changes happen. Adobe Experience Platform enables this real-time access to data through the use of what are known as edges. An edge is a geographically placed server that stores data and makes it readily accessible to applications. Data is routed to an edge by a projection, with a projection destination defining the edge to which data will be sent, and a projection configuration defining the specific information that will be made available on the edge. For more information and to begin working with edges, refer to the Real-time Customer Profile API [sub-guide on edge projections](../profile/api/edge-projections.md).

## Next Steps

Once you have configured Real-time Customer Profile for your organization, you can begin adding data to individual customer profiles and creating audience segments based on specific customer attributes. To get started, see the following tutorials:

* [Add data to Real-time Customer Profile](../profile/tutorials/add-profile-data.md)  
* [Create a segment](../segmentation/tutorials/create-a-segment.md)