---
title: Adobe Experience Platform Release Notes October 2020
description: The October 2020 release notes for Adobe Experience Platform.
doc-type: release notes
last-update: October, 2020
author: crhoades, ens28527
exl-id: 89f5e2bd-8892-4d3f-a3fe-5433bb5ece7a
---
# Adobe Experience Platform release notes 

**Release date: October 14, 2020**

- [Data Prep](#data-prep)
- [Real-Time Customer Profile](#profile)
- [Segmentation Service](#segmentation)
- [Sources](#sources)
- [Time to Value](#time-to-value)

## Data Prep {#data-prep}

Data Prep allows data engineers to map, transform, and validate data to and from Experience Data Model (XDM).

**Key features**

| Feature | Description |
| ------- | ----------- |
| `is_set` function | The `is_set` function allows you to check the presence of an attribute within the source data. `is_set` can be used in combination with `is_empty` to check both the presence of the attribute and the presence of the value within the attribute. |
| `get_values` function | The `get_values` function allows you to get the values from the input map for any given key. |

For more information, please read the [Data Prep overview](../../data-prep/home.md).

## Real-Time Customer Profile {#profile}

Adobe Experience Platform enables you to drive coordinated, consistent, and relevant experiences for your customers no matter where or when they interact with your brand. With [!DNL Real-Time Customer Profile], you can see a holistic view of each individual customer that combines data from multiple channels, including online, offline, CRM, and third party data. [!DNL Profile] allows you to consolidate your disparate customer data into a unified view offering an actionable, timestamped account of every customer interaction.

| Feature | Description |
| ------- | ----------- |
| Profile preview API additions | The Profile preview API (`/previewsamplestatus`) now includes the ability to view a breakdown of total profile fragments across your IMS Organization, as well as to view the distribution of profile fragments across identity namespaces. |
| Union schema view updates | In the Experience Platform UI, users can more easily find information regarding all schemas and datasets contributing to the union schema, as well as surface key attributes such as identity and relationship fields. These updates improve the ability to troubleshoot and validate that profiles are correctly configured, identities are correctly stitched, and data has been successfully ingested. |

For more information on [!DNL Real-Time Customer Profile], including tutorials and best practices for working with [!DNL Profile] data, please read the [Real-Time Customer Profile overview](../../profile/home.md).

## Segmentation Service {#segmentation}

Adobe Experience Platform Segmentation Service provides a user interface and RESTful API that allows you to build segments and generate audiences from your [!DNL Real-Time Customer Profile] data. These segments are centrally configured and maintained on [!DNL Platform], making them readily accessible by any Adobe application.

[!DNL Segmentation Service] defines a particular subset of profiles by describing the criteria that distinguishes a marketable group of people within your customer base. Segments can be based on record data (such as demographic information) or time series events representing customer interactions with your brand.

**New features**

| Feature | Description |
| ------- | ----------- |
| Streaming segmentation limit removal | The seven-day limit for the lookback period has been removed. |

For more information on [!DNL Segmentation Service], please see the [Segmentation overview](../../segmentation/home.md)

## Sources {#sources}

Adobe Experience Platform can ingest data from external sources while allowing you to structure, label, and enhance that data using [!DNL Platform] services. You can ingest data from a variety of sources such as Adobe applications, cloud-based storage, third party software, and your CRM system.

[!DNL Experience Platform] provides a RESTful API and an interactive UI that lets you set up source connections for various data providers with ease. These source connections allow you to authenticate and connect to external storage systems and CRM services, set times for ingestion runs, and manage data ingestion throughput.

**New features**

| Feature | Description |
| ------- | ----------- |
| SSH authentication support for SFTP | You can connect your SFTP account to [!DNL Platform] using RSA/DSA Open SSH keys. See the [SFTP overview](../../sources/connectors/cloud-storage/sftp.md) for more information. |
| UX improvements  | You can enable your dataset for [!DNL Profile] during the data ingestion process. See the [cloud storage dataflow workflow](../../sources/tutorials/ui/dataflow/batch/cloud-storage.md) tutorial for more information. |

To learn more about sources, see the [sources overview](../../sources/home.md).

## Time to Value {#time-to-value}

Adobe Experience Platform fully enables Marketing Operations teams to build a 360-degree view of their customers without requiring extensive data engineering expertise. The goal is to accelerate teams and value through data velocity.  

"Time to Value" cuts across personas. Data Engineers can complete tasks in an efficient and accelerated manner with data activity transparency, so that a robust, scalable real-time customer profile is available sooner. Marketers can then use the complete, robust customer profile for segmentation and activation.

### Feature highlights

#### Schema

Upgrades usability and workflow, and provides out-of-box insights, standardization, and transparency of key fields within schema compositions. Exposes data lineage for the combination of individual data models represented as the “union schema," providing insight into the structure and ingredients to Real-Time Customer Profile.

- Schema workflow upgrade
    - Use shortcuts for the most common type of XDM schemas, with automated settings in the schema editor and schema field group recommendations based on your objectives  
    - Increase workflow efficiency with multiple field group selection and preview capability 
    - Provide transparency on key attributes of schema composition, including identity, relationship, and required and deprecated fields 
- Union Schema Data Lineage and Key Attributes Transparency 

#### Data Ingestion and Collection

The auto-mapping, mapping preview, and usability upgrade bring in data from any platform or source for use in profile, downstream segmentation, and activation. The system has the efficiency and intelligence to make this process easier to use, even for people outside of IT.

- Easier access to data sources with catalog page card and data table inline action pattern upgrade 
- Calculated field/expression for data ingestion 
- Data mapping recommendations speed the ingestion process 
- Mapping preview and validations 

#### Profile Configuration

Marketer-friendly profile viewer with customization helps you understand the composition of a profile for use in segmentation, planning, and activation cases. The consolidated workflow hydrates the profile in a controlled and efficient fashion by providing a step-wise workflow for merge policy.

- View each individual profile in an enhanced profile viewer that displays a dashboard with full customization, enabling grouped cross-channel data based on marketer's business goals. 
- Edit standard and customized attributes in the Basic Information widget, according to business need. 
- Customize widgets with attributes from the real-time customer profile, using the union schema selector. The union schema is derived from the underlying data models used within profile data ingestion.
 

#### Monitoring

Ensures transparency of data flow and gives insight about the health of data traffic into the system from source connectors, providing more self-service and faster actionability for troubleshooting situations. 

- Monitor all flow runs and see a detailed view of each run, including completion status, run duration, list of files processed, errors, and actionable diagnostics
