---
title: Adobe Experience Platform Release Notes
description: Experience Platform release notes September 9, 2020
doc-type: release notes
last-update: September 8, 2020
author: crhoades, ens25212
---

# Adobe Experience Platform release notes 

**Release date: September 9, 2020**

Updates to existing features in Adobe Experience Platform:

- [[!DNL Data Governance]](#governance)
- [[!DNL Real-time Customer Profile]](#profile)
- [[!DNL Segmentation Service]](#segmentation)

## [!DNL Data Governance] {#governance}

Adobe Experience Platform Data Governance is a series of strategies and technologies used to manage customer data and ensure compliance with regulations, restrictions, and policies applicable to data usage. It plays a key role within [!DNL Experience Platform] at various levels, including cataloging, data lineage, data usage labeling, data access policies, and access control on data for marketing actions.

**New features**

| Feature | Description | 
| ------- | ----------- |
| Dataset labeling UI enhancements | Several new sorting and filtering controls have been added to the dataset labeling UI in order to make working with large schemas easier: <ul><li>Sort fields by alphabetic order based on the full schema path.</li><li>Perform partial searches on field path names.</li><li>Filter fields with no labels, a selected label, or a label category.</li></ul> |

See the [Data Governance overview](../../data-governance/home.md) for more information on the service.

## Real-time Customer Profile {#profile}

Adobe Experience Platform enables you to drive coordinated, consistent, and relevant experiences for your customers no matter where or when they interact with your brand. With [!DNL Real-time Customer Profile], you can see a holistic view of each individual customer that combines data from multiple channels, including online, offline, CRM, and third party data. [!DNL Profile] allows you to consolidate your disparate customer data into a unified view offering an actionable, timestamped account of every customer interaction.

**New features**

| Feature | Description |
| ------- | ----------- |
| Profile viewer | The profile viewer, in the Platform UI, has been updated to be a dashboard with full customization. The user now has the option to do the following tasks: <ul><li>Update the selected standard and customized attributes in the basic information widget.</li><li>Create, edit, and remove custom widgets</li><li>Resize and rearrange widgets</li></ul>|

For more information on [!DNL Real-time Customer Profile], including tutorials and best practices for working with [!DNL Profile] data, please read the [Real-time Customer Profile overview](../../profile/home.md).

## Segmentation Service {#segmentation}

Adobe Experience Platform Segmentation Service provides a user interface and RESTful API that allows you to build segments and generate audiences from your [!DNL Real-time Customer Profile] data. These segments are centrally configured and maintained on [!DNL Platform], making them readily accessible by any Adobe application.

[!DNL Segmentation Service] defines a particular subset of profiles by describing the criteria that distinguishes a marketable group of people within your customer base. Segments can be based on record data (such as demographic information) or time series events representing customer interactions with your brand.

**New features**

| Feature | Description |
| ------- | ----------- |
| Export jobs | A flag was added to allow segments to be evaluated as part of an export job. As a result, users can run both segmentation and exports in a single job. |
| Merge policies | Multiple merge policies can be included in a single batch segmentation job. |

For more information on [!DNL Segmentation Service], please see the [Segmentation overview](../../segmentation/home.md)