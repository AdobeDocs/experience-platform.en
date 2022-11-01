---
title: Adobe Experience Platform Release Notes September 2020
description: The September 2020 release notes for Adobe Experience Platform.
doc-type: release notes
last-update: September 8, 2020
author: crhoades, ens25212
exl-id: bf401f3a-b088-4cbd-9a64-224294b797b9
---
# Adobe Experience Platform release notes 

**Release date: September 9, 2020**

Updates to existing features in Adobe Experience Platform:

- [Data Governance](#governance)
- [[!DNL Destinations]](#destinations)
- [[!DNL Observability Insights]](#observability)
- [[!DNL Privacy Service]](#privacy)
- [[!DNL Real-time Customer Profile]](#profile)
- [[!DNL Segmentation Service]](#segmentation)
- [[!DNL Sources]](#sources)

## Data Governance {#governance}

Adobe Experience Platform Data Governance is a series of strategies and technologies used to manage customer data and ensure compliance with regulations, restrictions, and policies applicable to data usage. It plays a key role within [!DNL Experience Platform] at various levels, including cataloging, data lineage, data usage labeling, data access policies, and access control on data for marketing actions.

**New features**

| Feature | Description | 
| ------- | ----------- |
| Dataset labeling UI enhancements | Several new sorting and filtering controls have been added to the dataset labeling UI in order to make working with large schemas easier: <ul><li>Sort fields by alphabetic order based on the full schema path.</li><li>Perform partial searches on field path names.</li><li>Filter fields with no labels, a selected label, or a label category.</li></ul> |

See the [Data Governance overview](../../data-governance/home.md) for more information on the service.

## Destinations {#destinations}

In [Real-Time Customer Data Platform](../../rtcdp/overview.md), destinations are pre-built integrations with destination platforms that activate data to those partners in a seamless way.

**New features**

| Feature | Description |
| ------- | ----------- |
| UX improvements | Users can access inline table actions for easier access to primary actions such as such as adding data, editing scheduling, and adding segments. See the [destinations workspace](../../destinations/ui/destinations-workspace.md) document for more information. |

To learn more, visit the [destinations overview](../../destinations/home.md)

## [!DNL Observability Insights] {#observability}

[!DNL Observability Insights] allows you to monitor activities on Adobe Experience Platform through the use of statistical metrics and event notifications.

**New Features**

| Feature | Description |
| --- | --- |
| Adobe I/O Event notifications | [!DNL Observability Insights] leverages Adobe I/O Events to create event notifications for several Experience Platform services. Notification payloads are sent to a configured webhook which you can then use to automate further downstream processes. |

See the [[!DNL Observability Insights] overview](../../observability/home.md) for more information on the service.

## [!DNL Privacy Service] {#privacy}

Several legal and organizational regulations give users the right to access or delete their personal data from your data stores upon request. Adobe Experience Platform [!DNL Privacy Service] provides a RESTful API and user interface to help you manage these data requests from your customers. With [!DNL Privacy Service], you can submit requests to access and delete private or personal customer data from Adobe Experience Cloud applications, facilitating automated compliance with legal and organizational privacy regulations.

**New features**

| Feature | Description |
| ------- | ----------- |
| Support for LGPD (Brazil) | Privacy jobs can now be created under Brazil's [!DNL Lei Geral de Proteção de Dados] (LGPD) regulation. These jobs are tracked under the regulation code `lgpd_bra`. |

See the [Privacy Service overview](../../privacy-service/home.md) for more information on the service.

## Real-time Customer Profile {#profile}

Adobe Experience Platform enables you to drive coordinated, consistent, and relevant experiences for your customers no matter where or when they interact with your brand. With [!DNL Real-time Customer Profile], you can see a holistic view of each individual customer that combines data from multiple channels, including online, offline, CRM, and third party data. [!DNL Profile] allows you to consolidate your disparate customer data into a unified view offering an actionable, timestamped account of every customer interaction.

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

## Sources {#sources}

Adobe Experience Platform can ingest data from external sources while allowing you to structure, label, and enhance that data using [!DNL Platform] services. You can ingest data from a variety of sources such as Adobe applications, cloud-based storage, third party software, and your CRM system.

[!DNL Experience Platform] provides a RESTful API and an interactive UI that lets you set up source connections for various data providers with ease. These source connections allow you to authenticate and connect to external storage systems and CRM services, set times for ingestion runs, and manage data ingestion throughput.

**New features**

| Feature | Description |
| ------- | ----------- |
| Auto mapping | [!DNL Platform] provides intelligent recommendations for auto mapping during the data ingestion workflow, based on a user-selected target schema or dataset. You can manually adjust flexible auto-mapping rules to suit your use cases. |
| UX improvements | Users can access inline table actions for easier access to primary actions such as adding data, editing scheduling, and adding segments. See the [monitoring dataflows](../../sources/tutorials/ui/monitor.md) document for more information. |

To learn more about sources, see the [sources overview](../../sources/home.md).
