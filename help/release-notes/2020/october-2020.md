---
title: Adobe Experience Platform Release Notes
description: Experience Platform release notes October, 2020
doc-type: release notes
last-update: October, 2020
author: crhoades, ens28527
---

# Adobe Experience Platform release notes 

**Release date: October 2020**

- [Data Prep](#data-prep)
- [Real-time Customer Profile](#profile)
- [Sources](#sources)

## Data Prep {#data-prep}

Data Prep allows data engineers to map, transform, and validate data to and from Experience Data Model (XDM).

**Key features**

| Feature | Description |
| ------- | ----------- |
| `is_set` function | The `is_set` function allows you to check the presence of an attribute within the source data. `is_set` can be used in combination with `is_empty` to check both the presence of the attribute and the presence of the value within the attribute. |
| `get_values` function | The `get_values` function allows you to get the values from the input map for any given key. |

For more information, please read the [Data Prep overview](../../data-prep/home.md).

## Real-time Customer Profile {#profile}

Adobe Experience Platform enables you to drive coordinated, consistent, and relevant experiences for your customers no matter where or when they interact with your brand. With [!DNL Real-time Customer Profile], you can see a holistic view of each individual customer that combines data from multiple channels, including online, offline, CRM, and third party data. [!DNL Profile] allows you to consolidate your disparate customer data into a unified view offering an actionable, timestamped account of every customer interaction.

| Feature | Description |
| ------- | ----------- |
| Profile preview API additions | The Profile preview API (`/previewsamplestatus`) now includes the ability to view a breakdown of total profile fragments across your IMS Organization, as well as to view the distribution of profile fragments across identity namespaces. |
| Union schema view updates | In the Experience Platform UI, users can more easily find information regarding all schemas and datasets contributing to the union schema, as well as surface key attributes such as identity and relationship fields. These updates improve the ability to troubleshoot and validate that profiles are correctly configured, identities are correctly stitched, and data has been successfully ingested. |

For more information on [!DNL Real-time Customer Profile], including tutorials and best practices for working with [!DNL Profile] data, please read the [Real-time Customer Profile overview](../../profile/home.md).

## Sources {#sources}

Adobe Experience Platform can ingest data from external sources while allowing you to structure, label, and enhance that data using [!DNL Platform] services. You can ingest data from a variety of sources such as Adobe applications, cloud-based storage, third party software, and your CRM system.

[!DNL Experience Platform] provides a RESTful API and an interactive UI that lets you set up source connections for various data providers with ease. These source connections allow you to authenticate and connect to external storage systems and CRM services, set times for ingestion runs, and manage data ingestion throughput.

**New features**

| Feature | Description |
| ------- | ----------- |
| Hierarchical mapping | You can preview a hierarchical source file, such as JSON or Parquet, during the data ingestion process. |
| SSH authentication support for SFTP | You can connect your SFTP account to [!DNL Platform] using RSA/DSA Open SSH keys. See the [SFTP overview](../../sources/connectors/cloud-storage/ftp-sftp.md) for more information. |
| UX improvements  | You can enable your dataset for [!DNL Profile] during the data ingestion process. See the [cloud storage dataflow workflow](../../sources/tutorials/ui/dataflow/batch/cloud-storage.md) tutorial for more information. |

To learn more about sources, see the [sources overview](../../sources/home.md).