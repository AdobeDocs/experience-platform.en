---
keywords: Experience Platform;profile;real-time customer profile;troubleshooting;API;unified profile;Unified Profile;unified;Profile;rtcp;enable profile;Enable profile
title: Real-Time Customer Profile API Guide
description: The Real-Time Customer Profile API allows developers to explore and work with Profile data, including view profiles, create and update merge policies, export or sample Profile data, and delete Profile data that is no longer required or was added in error. Follow this guide to learn how to perform key operations using the API.
role: Developer
exl-id: ce39b95b-cff7-46cf-a14c-8203017c8826
---
# [!DNL Real-Time Customer Profile] API guide

[!DNL Real-Time Customer Profile] enables you to see a holistic view of each of your individual customers within Adobe Experience Platform. [!DNL Profile] allows you to consolidate disparate customer data from multiple channels, such as online, offline, CRM, and third party data, into a unified view offering an actionable, timestamped account of every customer interaction.

The [!DNL Real-Time Customer Profile] API includes multiple endpoints, outlined below. Please visit the individual endpoint guides for details and refer to the [getting started guide](getting-started.md) for important information on required headers, reading sample API calls, and more.

To view all available endpoints and CRUD operations, visit the [Real-Time Customer Profile API Reference swagger](https://www.adobe.com/go/profile-apis-en).

For a guide to working with [!DNL Real-Time Customer Profile] data in the [!DNL Experience Platform] UI, please refer to the [Profile user guide](../ui/user-guide.md).

## [!BADGE Beta]{type=Informative} Computed attributes {#computed-attributes}

>[!IMPORTANT]
>
>Computed attribute functionality is in beta and is not available to all users. Documentation and functionality are subject to change.

Computed attributes are functions used to aggregate event-level data into profile-level attributes. These functions are automatically computed so that they can be used across segmentation, activation, and personalization.

Each computed attribute contains an expression, or "rule", that evaluates incoming data and stores the resulting value in a profile attribute. These computations help you to easily answer questions related to things like lifetime purchase value, time between purchases, or number of application opens, without requiring you to manually perform complex calculations each time the information is needed. These computed attribute values can then be viewed in a profile, used to create an audience, or accessed through a number of different access patterns.

You can create, view, edit, and delete computed attributes using the `ca/attributes/` endpoint. To learn how to use computed attributes, refer to the [computed attributes overview](../computed-attributes/overview.md). For API operations, visit the [computed attributes API endpoint guide](../computed-attributes/api.md).

## Entities ([!DNL Profile] access) {#entities}

Through Adobe Experience Platform you can access [!DNL Real-Time Customer Profile] data using RESTful APIs or the user interface. To learn how to access entities, more commonly known as "profiles", using the API, follow the steps outlined in the [entities endpoint guide](entities.md). To access profiles using the [!DNL Platform] UI, refer to the [Profile user guide](../ui/user-guide.md).

## Export jobs ([!DNL Profile] export) {#profile-export}

[!DNL Real-Time Customer Profile] data can be exported to a dataset for further processing, such as exporting audiences for activation or profile attributes for reporting. Export jobs for audiences are part of the [!DNL Adobe Experience Platform Segmentation Service] API, please read the [segmentation export jobs endpoint guide](../../profile/api/export-jobs.md) to learn more. For step-by-step instructions on how to create and manage export jobs for profile attributes, please visit the [export jobs endpoint guide](export-jobs.md). 

## Merge policies {#merge-policies}

When bringing data from multiple sources together in [!DNL Experience Platform], merge policies are the rules that [!DNL Platform] uses to determine how data will be prioritized and what data will be combined to create individual customer profiles. Using the [!DNL Real-Time Customer Profile] API, you can create new merge policies, manage existing policies, and set a default merge policy for your organization. To work with merge policies using the API, visit the [merge policies endpoint guide](merge-policies.md). 

To learn more about merge policies, and their role within Platform, please begin by reading the [merge policies overview](../merge-policies/overview.md). 

## Preview sample status ([!DNL Profile] preview) {#profile-preview}

As data is ingested into Platform, a sample job is run to update the profile count and other Real-Time Customer Profile data-related metrics. The results of this sample job can be viewed using the `/previewsamplestatus` endpoint, part of the Real-Time Customer Profile API. This endpoint can also be used to list profile distributions by both dataset and identity namespace, as well as to generate multiple reports in order to gain visibility into the composition of your organization's Profile Store.  To get started using the `/profilepreviewstatus` endpoint, refer to the [preview sample status endpoint guide](preview-sample-status.md).

## Profile system jobs {#profile-system-jobs}

Profile-enabled data that is ingested into [!DNL Platform] is stored in the [!DNL Data Lake] as well as the [!DNL Real-Time Customer Profile] data store. Occasionally it may be necessary to delete a dataset or batch from the [!DNL Profile] store in order to remove data that you no longer require or that was added in error. This requires using the API to create a [!DNL Profile System Job], also known as a "[!DNL delete request]", which can be modified, monitored, or deleted if required. To learn how to work with delete requests using the `/system/jobs` endpoint in the [!DNL Real-Time Customer Profile] API, follow the steps outlined in the [profile system jobs endpoint guide](profile-system-jobs.md).

## Update profiles attributes {#update-profile}

Occasionally it may be necessary to update data in your organization's Profile Store. For example, you may need to correct records or change an attribute value. This can be done through batch ingestion and requires a Profile-enabled dataset configured with an upsert tag. For more information on how to configure a dataset for attribute updates, please refer to the tutorial for [enabling a dataset for Profile and upsert](../../catalog/datasets/enable-upsert.md).

## Next steps {#next-steps}

To begin making calls using the [!DNL Real-Time Customer Profile] API, read the [getting started guide](getting-started.md) then select one of the endpoint guides to learn how to use specific [!DNL Profile]-related endpoints. To work with [!DNL Profile] data using the [!DNL Experience Platform] UI, please refer to the [Real-Time Customer Profile user guide](../ui/user-guide.md).
