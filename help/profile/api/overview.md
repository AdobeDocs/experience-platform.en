---
keywords: Experience Platform;profile;real-time customer profile;troubleshooting;API
solution: Adobe Experience Platform
title: Real-time Customer Profile API developer guide
topic: guide
---

# Real-time Customer Profile API developer guide

Real-time Customer Profile enables you to see a holistic view of each of your individual customers within Adobe Experience Platform. Profile allows you to consolidate disparate customer data from multiple channels, such as online, offline, CRM, and third party data, into a unified view offering an actionable, timestamped account of every customer interaction.

The Real-time Customer Profile API includes multiple endpoints, outlined below. Please visit the individual endpoint guides for details and refer to the [getting started guide](getting-started.md) for important information on required headers, reading sample API calls, and more.

To view all available endpoints and CRUD operations, please refer to the [Real-time Customer Profile API Reference swagger](https://www.adobe.io/apis/experienceplatform/home/api-reference.html#!acpdr/swagger-specs/real-time-customer-profile.yaml).

## (Alpha) Computed attributes

>[!IMPORTANT] 
>Computed attribute functionality is in alpha and is not available to all users. Documentation and functionality are subject to change.

Computed attributes enable you to automatically compute the value of fields based on other values, calculations, and expressions. Computed attributes operate on the profile level, meaning you can aggregate values across all records and events. Each computed attribute contains an expression, or "rule", that evaluates incoming data and stores the resulting value in a profile attribute or into an event. These computations help you to easily answer questions related to things like lifetime purchase value, time between purchases, or number of application opens, without requiring you to manually perform complex calculations each time the information is needed. You can create, view, edit, and delete computed attributes using the `config/computedAttributes` endpoint. To learn how to use this endpoint, visit the [computed attributes endpoint guide](computed-attributes.md).

## Edge projections

Adobe Experience Platform enables real-time personalization of customer experiences by making data easily accessible on strategically located servers called "edges." The Real-time Customer Profile API provides endpoints for working with edges through components called "projections." This includes projection configurations to determine what data should be projected to each edge, as well as projection destinations to define where to route a projection. For detailed information on working with edge projections, please visit the [projection configurations and destinations endpoints guide](edge-projections.md).

## Entities

Through Adobe Experience Platform you can access Real-time Customer Profile data using RESTful APIs or the user interface. To learn how to access entities, more commonly known as "profiles", using the API, follow the steps outlined in the [entities endpoint guide](entities.md). To access profiles using the Platform UI, refer to the [Profile user guide](../ui/user-guide.md).

## Merge policies

When bringing data from multiple sources together in Experience Platform, merge policies are the rules that Platform uses to determine how data will be prioritized and what data will be combined to create individual customer profiles. Using the Real-time Customer Profile API, you can create new merge policies, manage existing policies, and set a default merge policy for your organization. To learn more about working with merge policies using the API, please visit the [merge policies endpoint guide](merge-policies.md). 

For a guide to working with merge policies using the Platform UI, please see the [Merge Policies user guide](../ui/merge-policies.md).

## Profile system jobs

Data ingested into Platform is stored in the Data Lake as well as the Real-time Customer Profile data store. Occasionally it may be necessary to delete a dataset or batch from the Profile store in order to remove data that you no longer require or that was added in error. This requires using the API to create a Profile System Job, known as a "delete request", that can also be, modified, monitored, or deleted if required. To learn how to work with delete requests using the `/system/jobs` endpoint in the Real-time Customer Profile API, follow the steps outlined in the [profile system jobs endpoint guide](profile-system-jobs.md).

## Next steps

To begin making calls using the Real-time Customer Profile API, read the [getting started guide](getting-started.md) then select one of the endpoint guides to learn how to use specific Profile-related endpoints. To learn more about working with Profile data using the Platform UI, see the [Real-time Customer Profile user guide](../ui/user-guide.md).