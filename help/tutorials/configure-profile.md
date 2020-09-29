---
keywords: Experience Platform;home;popular topics;Real-time Customer Profile;Identity Service;
solution: Experience Platform
title: Real-time Customer Profile tutorials
topic: tutorial
type: Tutorial
description: This document outlines the steps involved and provides links to tutorials for completing each individual workflow.
---

# Configure [!DNL Real-time Customer Profile] and [!DNL Identity Service]

In order to configure [!DNL Real-time Customer Profile] for your organization, you are required to complete multiple separate workflows. This document outlines the steps involved and provides links to tutorials for completing each individual workflow. 

To learn more about [!DNL Real-time Customer Profile], begin by reading the [Profile overview](../profile/home.md).

## Real-time Customer Profile UI overview

Real-time Customer Profile creates a holistic view of each of your individual customers, combining data from multiple channels including online, offline, CRM, and third-party data.

**This guide will help you:**
- Understand the [!UICONTROL Profiles] UI and available features.
- View and manage your Profile data.

To learn more, visit the [Real-time Customer Profile user guide](../profile/ui/user-guide.md)

## Real-time Customer Profile API

The Real-time Customer Profile API includes multiple endpoints. Profile allows you to consolidate disparate customer data from multiple channels, such as online, offline, CRM, and third party data, into a unified view offering an actionable, timestamped account of every customer interaction.

**The following API developer guides are available:**
- [Computed attributes (alpha) ](../profile/api/computed-attributes.md) - Learn about the use cases for computed attributes as well as, how to configure, access, update, and delete a computed attribute.
- [Edge projections](../profile/api/edge-projections.md) - Learn how to create, view, update, delete, and list projection destinations. Additionally this document contains information on listing and creating projection configurations and provides examples for using Selectors.
- [Entities (Profile access)](../profile/api/entities.md) - Learn how to access profile data by identity or a list of identities. Additionally, learn how to access time series events for multiple profiles using identities, a single profile by identity, and access multiple schema entities.
- [Export jobs (Profile export)](../profile/api/export-jobs.md) - Learn how to create, view, monitor, and cancel export jobs.
- [Merge policies](../profile/api/merge-policies.md) - Learn about the components of merge policies as well as how to access, create, update, and delete a merge policy.
- [Preview sample status (Profile preview)](../profile/api/preview-sample-status.md) - Learn how to view your last sample status, list profile distribution by dataset, and list profile distribution by namespace.
- [Profile system jobs (Delete requests)](../profile/api/profile-system-job.md) - Learn how to view, create, and remove a delete request for a dataset or batch in the Profile Store.

To learn more and get the required values for performing CRUD operations with the Real-time Customer Profile API, visit the [getting started guide](../profile/api/getting-started.md).

## Enable a schema for [!DNL Profile] and [!DNL Identity] Service

Before data can be ingested into Adobe Experience Platform and used in the creation of [!DNL Real-time Customer Profiles], a schema must be created to provide the structure for the data that will be ingested and that schema must be enabled for use in [!DNL Profile] and Adobe Experience Platform [!DNL Identity Service].

**This guide will help you:**
- Browse existing schemas.
- Create and name a schema.
- Add and define XDM mixins.
- Set your schema fields as identity fields.
- Enable Profile for your schema.

For step-by-step instructions on creating a schema that is enabled for both [!DNL Profile] and [!DNL Identity Service], please refer to the tutorials for [creating a schema using the Schema Registry API](../xdm/tutorials/create-schema-api.md) or [creating a schema using the Schema Builder UI](../xdm/tutorials/create-schema-ui.md).

## Configure a dataset for [!DNL Profile] and [!DNL Identity]

To begin ingesting data into [!DNL Profile], you must have a dataset that has been properly configured for use with [!DNL Real-time Customer Profile] and [!DNL Identity Service]. 

**This guide will help you:**
- Create a dataset enabled for Profile.
- Configure existing datasets.
- Ingest data into the dataset.
- Confirm your dataset is Profile enabled and using Identity Service.

To get started, follow the API tutorial for [configuring a dataset for Profile and Identity](../profile/tutorials/dataset-configuration.md).

## Configure merge policies

Adobe Experience Platform enables you to bring data together from multiple sources and combine it in order to see a complete view of each of your individual customers. When bringing this data together, merge policies are the rules that [!DNL Platform] uses to determine how data will be prioritized and what data will be combined to create that unified view.

**This guide will help you:**
- Create new merge policies.
- Manage existing merge policies.
- Set a default merge policy for your organization.
- Understand merge policy violations.

To work with merge policies in the [!DNL Platform] UI, visit the [merge policies user guide](../profile/ui/merge-policies.md). To work with merge policies using the Real-time Customer Profile API, see the [merge policies developer guide](../profile/api/merge-policies.md).

## Configure edge projections

In order to drive coordinated, consistent, and personalized experiences for your customers across multiple channels in real-time, the right data needs to be readily available and continuously updated as changes happen. Adobe [!DNL Experience Platform] enables this real-time access to data through the use of what are known as edges. An edge is a geographically placed server that stores data and makes it readily accessible to applications. Data is routed to an edge by a projection, with a projection destination defining the edge to which data will be sent, and a projection configuration defining the specific information that will be made available on the edge. 

**This guide will help you:**
- List, create, view, update, and delete an edge projection destination.
- List and create an edge projection configuration.
- Understand selectors.

For more information and to begin working with edges, refer to the [!DNL Real-time Customer Profile] API [sub-guide on edge projections](../profile/api/edge-projections.md).

## Customize how Profile data is displayed in the UI

Within the Experience Platform user interface, you can view and interact with Real-time Customer Profile data in the form of customer profiles. The profile information displayed in the UI has been merged together from multiple profile fragments to form a single view of each individual customer. This includes details such as basic attributes, linked identities, and channel preferences. The default fields shown in profiles can also be changed at an organizational level to display preferred Profile attributes.

**This guide will help you:**
- Reorder, resize, edit, and remove cards.
- Add attributes.
- Add a new card.
- Restore defaults.

To learn more about customizing profile data, visit the [Profile customization documentation](../profile/ui/profile-customization.md)

## Next Steps

Once you have configured [!DNL Real-time Customer Profile] for your organization, you can begin adding data to individual customer profiles and creating audience segments based on specific customer attributes. To get started, see the following tutorials:

- [Add data to Real-time Customer Profile](../profile/tutorials/add-profile-data.md)  
- [Create a segment](../segmentation/tutorials/create-a-segment.md)