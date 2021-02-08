---
keywords: Experience Platform;profile;real-time customer profile;troubleshooting;API;unified profile;Unified Profile;unified;Profile;rtcp;enable profile;Enable profile
title: Real-time Customer Profile API Guide
topic: guide
description: The Real-time Customer Profile API allows developers to explore and work with Profile data, including view profiles, create and update merge policies, export or sample Profile data, and delete Profile data that is no longer required or was added in error. Follow this guide to learn how to perform key operations using the API.
---

# [!DNL Real-time Customer Profile] API guide

[!DNL Real-time Customer Profile] enables you to see a holistic view of each of your individual customers within Adobe Experience Platform. [!DNL Profile] allows you to consolidate disparate customer data from multiple channels, such as online, offline, CRM, and third party data, into a unified view offering an actionable, timestamped account of every customer interaction.

The [!DNL Real-time Customer Profile] API includes multiple endpoints, outlined below. Please visit the individual endpoint guides for details and refer to the [getting started guide](getting-started.md) for important information on required headers, reading sample API calls, and more.

To view all available endpoints and CRUD operations, visit the [Real-time Customer Profile API Reference swagger](https://www.adobe.io/apis/experienceplatform/home/api-reference.html#!acpdr/swagger-specs/real-time-customer-profile.yaml).

For a guide to working with [!DNL Real-time Customer Profile] data in the [!DNL Experience Platform] UI, please refer to the [Profile user guide](../ui/user-guide.md).

## (Alpha) Computed attributes {#computed-attributes}

>[!IMPORTANT]
>
>Computed attribute functionality is in alpha and is not available to all users. Documentation and functionality are subject to change.

Computed attributes enable you to automatically compute the value of fields based on other values, calculations, and expressions. Computed attributes operate on the profile level, meaning you can aggregate values across all records and events. Each computed attribute contains an expression, or "rule", that evaluates incoming data and stores the resulting value in a profile attribute or into an event. These computations help you to easily answer questions related to things like lifetime purchase value, time between purchases, or number of application opens, without requiring you to manually perform complex calculations each time the information is needed. You can create, view, edit, and delete computed attributes using the `config/computedAttributes` endpoint. To learn how to use this endpoint, visit the [computed attributes endpoint guide](computed-attributes.md).

## Edge projections {#edge-projections}

Adobe Experience Platform enables real-time personalization of customer experiences by making data easily accessible on strategically located servers called "edges." The [!DNL Real-time Customer Profile] API provides endpoints for working with edges through components called "projections." This includes projection configurations to determine what data should be projected to each edge, as well as projection destinations to define where to route a projection. For detailed information on working with edge projections, please visit the [projection configurations and destinations endpoints guide](edge-projections.md).

## Entities ([!DNL Profile] access) {#entities}

Through Adobe Experience Platform you can access [!DNL Real-time Customer Profile] data using RESTful APIs or the user interface. To learn how to access entities, more commonly known as "profiles", using the API, follow the steps outlined in the [entities endpoint guide](entities.md). To access profiles using the [!DNL Platform] UI, refer to the [Profile user guide](../ui/user-guide.md).

## Export jobs ([!DNL Profile] export) {#profile-export}

[!DNL Real-time Customer Profile] data can be exported to a dataset for further processing, such as exporting audience segments for activation or profile attributes for reporting. Export jobs for audience segments are part of the [!DNL Adobe Experience Platform Segmentation Service] API, please read the [segmentation export jobs endpoint guide](../../profile/api/export-jobs.md) to learn more. For step-by-step instructions on how to create and manage export jobs for profile attributes, please visit the [export jobs endpoint guide](export-jobs.md). 

## Merge policies {#merge-policies}

When bringing data from multiple sources together in [!DNL Experience Platform], merge policies are the rules that [!DNL Platform] uses to determine how data will be prioritized and what data will be combined to create individual customer profiles. Using the [!DNL Real-time Customer Profile] API, you can create new merge policies, manage existing policies, and set a default merge policy for your organization. To learn more about working with merge policies using the API, please visit the [merge policies endpoint guide](merge-policies.md). 

For a guide to working with merge policies using the [!DNL Platform] UI, please see the [merge policies user guide](../ui/merge-policies.md).

## Preview sample status ([!DNL Profile] preview) {#profile-preview}

As data enabled for Profile is ingested into Experience Platform, it is stored within the Profile data store. As the number of records in the Profile store increases or decreases, a sample job is run that includes information regarding how many profile fragments and merged profiles are in the data store. Using the Profile API you can preview the latest successful sample, as well as list profile distribution by dataset and by identity namespace. To get started using the `/profilepreviewstatus` endpoint, refer to the [preview sample status endpoint guide](preview-sample-status.md).

## Profile system jobs {#profile-system-jobs}

Profile-enabled data that is ingested into [!DNL Platform] is stored in the [!DNL Data Lake] as well as the [!DNL Real-time Customer Profile] data store. Occasionally it may be necessary to delete a dataset or batch from the [!DNL Profile] store in order to remove data that you no longer require or that was added in error. This requires using the API to create a [!DNL Profile System Job], also known as a "[!DNL delete request]", which can be modified, monitored, or deleted if required. To learn how to work with delete requests using the `/system/jobs` endpoint in the [!DNL Real-time Customer Profile] API, follow the steps outlined in the [profile system jobs endpoint guide](profile-system-jobs.md).

## Next steps {#next-steps}

To begin making calls using the [!DNL Real-time Customer Profile] API, read the [getting started guide](getting-started.md) then select one of the endpoint guides to learn how to use specific [!DNL Profile]-related endpoints. To work with [!DNL Profile] data using the [!DNL Experience Platform] UI, please refer to the [Real-time Customer Profile user guide](../ui/user-guide.md).