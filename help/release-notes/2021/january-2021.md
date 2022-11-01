---
title: Adobe Experience Platform Release Notes January 2021
description: The January 2021 release notes for Adobe Experience Platform.
doc-type: release notes
last-update: January 27, 2021
author: ens60013
exl-id: 6fb92e35-922c-47ba-8cf4-44edd92acfa1
---
# Adobe Experience Platform release notes 

**Release date: January 27, 2021**

Updates to existing features in Adobe Experience Platform:

- [[!DNL Data Prep]](#data-prep)
- [[!DNL Destinations]](#destinations)
- [[!DNL Real-time Customer Profile]](#profile)
- [[!DNL Sources]](#sources)

## [!DNL Data Prep] {#data-prep}

[!DNL Data Prep] allows data engineers to map, transform, and validate data to and from Experience Data Model (XDM).

**New features**

| Feature | Description |
| ------- | ----------- |
| Regular expression functions | [!DNL Data Prep] Mapper now supports matching and extracting part of the input field based on regular expressions. |

For more information, please see the [[!DNL Data Prep] overview](../../data-prep/home.md).

## Destinations {#destinations}

[!DNL Destinations] are pre-built integrations with destination platforms that allow for the seamless activation of data from Adobe Experience Platform. You can use destinations to activate your known and unknown data for cross-channel marketing campaigns, email campaigns, targeted advertising, and many other use cases.

**New destinations**

| Destination | Description |
| ----------- | ----------- |
| [!DNL Azure Blob] | [!DNL Azure Blob] is Microsoft's object storage solution for the cloud. |

**New features**

| Feature | Description |
| ------- | ----------- |
| Advanced ID matching | Enhancements to the audience match rate capabilities in [!DNL Facebook Custom Audiences] and [!DNL Google Customer Match], by adding support for additional identity matching, such as external IDs, phone numbers, and mobile device IDs. See the following documentation for more details: <ul><li>[Facebook destination](../../destinations/catalog/social/facebook.md)</li><li>[Google Customer Match destination](../../destinations/catalog/advertising/google-customer-match.md)</li><li>[Activate audience data to streaming segment export destinations](../../destinations/ui/activate-segment-streaming-destinations.md)</li></ul> |

To learn more, visit the [destinations overview](../../destinations/home.md).

## Real-time Customer Profile {#profile}

Adobe Experience Platform enables you to drive coordinated, consistent, and relevant experiences for your customers no matter where or when they interact with your brand. With Real-time Customer Profile, you can see a holistic view of each individual customer that combines data from multiple channels, including online, offline, CRM, and third party data. [!DNL Profile] allows you to consolidate customer data into a unified view offering an actionable, timestamped account of every customer interaction.

**New features**

| Feature | Description |
| ------- | ----------- |
| Delete dataset from Profile store | When you delete a dataset from the Experience Platform Data Lake, it will automatically be deleted from the Profile store as well. You no longer need to use the Profile System jobs API endpoint to make a delete request to delete the dataset from the Profile store explicitly. For more information, see the [profile system jobs API endpoint guide](../../profile/api/profile-system-jobs.md).|
|Estimated ID namespace count for a given segment|For estimated profile counts, the preview API now reports:<ul><li>Total count of estimated profiles in a segment for a given namespace.</li><li>Total count of estimated profiles in the Profile Union Schema for a given namespace.</li></ul>To learn more, refer to the [profile preview API endpoint guide](../../profile/api/preview-sample-status.md).|

For more information on Real-time Customer Profile, including tutorials and best practices for working with [!DNL Profile] data, please begin by reading the [Real-time Customer Profile overview](../../profile/home.md).

## [!DNL Sources] {#sources}

Adobe Experience Platform can ingest data from external sources while allowing you to structure, label, and enhance that data using Platform services. You can ingest data from a variety of sources such as Adobe applications, cloud-based storage, third party software, and your CRM system.

Experience Platform provides a RESTful API and an interactive UI that lets you set up source connections for various data providers with ease. These source connections allow you to authenticate and connect to external storage systems and CRM services, set times for ingestion runs, and manage data ingestion throughput.

**New features**

| Feature | Description |
| ------- | ----------- |
| Adobe Audience Manager source connector enhancements | You can now filter and select individual first-party segments from Audience Manager to ingest into Platform, as well as filter out first-party traits. See the tutorial on [creating an Audience Manager source connector](../../sources/tutorials/ui/create/adobe-applications/audience-manager.md) for more information. |
| [!DNL Google BigQuery] source connector enhancements | You can now ingest files larger than 10GB in one flow run using the [!DNL BigQuery] source connector. See the [[!DNL BigQuery] source connector overview](../../sources/connectors/databases/bigquery.md) for more information. |
| Support for complex data types for cloud storages | You can now ingest complex data types, such as arrays in JSON files, when using a cloud storage source connector. See the tutorials on creating a cloud storage dataflow [in the UI](../../sources/tutorials/ui/dataflow/batch/cloud-storage.md) or [using the [!DNL Flow Service] API](../../sources/tutorials/api/collect/cloud-storage.md) for more information. |
| Support for service principal key-based authentication for [!DNL Microsoft Dynamics] source | You can now authenticate to your [!DNL Dynamics] account using a service principal key as an alternative to password-based authentication. See the [[!DNL Dynamics] source connector overview](../../sources/connectors/crm/ms-dynamics.md) for more information. |
| UI support for custom separators in cloud storage sources | You can now set a custom column delimiter such as a comma (`,`), tab (`\t`), or a pipe (`|`), to collect delimited files the the UI. See the tutorial on [creating a dataflow with a cloud storage source connector](../../sources/tutorials/ui/dataflow/batch/cloud-storage.md) for more information |

To learn more about sources, see the [sources overview](../../sources/home.md).
