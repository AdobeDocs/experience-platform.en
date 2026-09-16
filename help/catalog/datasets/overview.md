---
keywords: Experience Platform;home;popular topics;data location;Data Location;Data management;data management;Lineage;lineage;data type;data types;Data types;Data type
solution: Experience Platform
title: Datasets Overview
description: This document provides a high-level overview of datasets in Experience Platform.
user-guide-description: Get a high-level overview of datasets in Experience Platform with this guide. Learn how to create them, enforce constraints on data and ingest data into datasets here.
exl-id: 51ecefb0-a699-4b1a-80f1-26c6ba92fcbf
TQID: https://experienceleague.adobe.com/UUpCoAbaTNxTPitedrL4jzkvs3J-SrwnO9fyi-o0dsg
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: a37e4ecd-c740-426a-addf-cb1b483c5c5a
    internal-label: Segmentation
  - id: c132d929-fa62-4271-803e-b823be07b914
    internal-label: Profile
  - id: c20d46e7-1c7d-476c-a50e-3961d4dce35f
    internal-label: Reporting
subfeature_v2:
  - id: cbd4a8d8-97a6-4ac9-b8d6-b6c1f28d3342
    internal-label: Segments
  - id: d1823595-9241-4128-8a33-e4ac3bf08773
    internal-label: Audiences
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: a004cc84-67b9-4a33-a3a7-8ec7273ef4dc
    internal-label: Metadata
  - id: aa2f3246-cb95-4b30-8899-fdf7d73550cc
    internal-label: Reporting
  - id: bbbea26f-9621-49eb-9ab8-e06fb3bbce8c
    internal-label: Artificial intelligence
  - id: bce87dde-a4ab-44c9-8a18-ad66e4ddb377
    internal-label: Customer experience
  - id: beb7a3c1-66ab-4786-b879-7621375b3c40
    internal-label: Email marketing
  - id: c7d04a2c-412a-4c9d-9d7a-4456eaa5adeb
    internal-label: Governance
  - id: e1e0219c-f879-479f-8427-888ed2a6e9c2
    internal-label: Insights
  - id: eb30f47f-d87a-400f-8f78-63ce7979ff56
    internal-label: Machine learning
  - id: ebde5b41-29c9-4f5e-9ef6-1197e85409e3
    internal-label: Data management
  - id: fd2e3797-f2ea-4b36-a9af-52acf5e90513
    internal-label: Customer profiles
---
# Datasets overview

All data that is successfully ingested into Adobe Experience Platform is persisted within the [!DNL Data Lake] as datasets. A dataset is a storage and management construct for a collection of data, typically a table, that contains a schema (columns) and fields (rows). Datasets also contain metadata that describes various aspects of the data they store. 

This document provides a high-level overview of datasets in [!DNL Experience Platform].

## Creating datasets and tracking metadata

[!DNL Catalog Service] is the system of record for data location and lineage within [!DNL Experience Platform], and is used to create and manage datasets. [!DNL Catalog] tracks the metadata for each dataset, which includes a reference to the [!DNL Experience Data Model] (XDM) schema the dataset conforms to (explained in the next section) and the number of records ingested into that dataset.

See the [Catalog Service overview](../home.md) for more information.

## Enforcing constraints on dataset data

[!DNL Experience Data Model] (XDM) is the standardized framework by which [!DNL Experience Platform] organizes customer experience data. All data that is ingested into [!DNL Experience Platform] must conform to a pre-defined XDM schema before it can be persisted in the [!DNL Data Lake] as a dataset.

All datasets contain a reference to the XDM schema that constrains the format and structure of the data that they can store. Attempting to upload data to a dataset that does not conform to the dataset's XDM schema will cause ingestion to fail.

For more information on XDM, see the [XDM System overview](../../xdm/home.md).

## Ingesting data into datasets

Adobe Experience Platform Data Ingestion represents the multiple methods by which [!DNL Experience Platform] ingests data from various sources. Regardless of the method of ingestion, all successfully ingested data is converted to batch files. Batches are units of data that consist of one or more files to be ingested as a single unit. These batch files are then added to dedicated datasets and persisted within the [!DNL Data Lake].

See the [Data Ingestion overview](../../ingestion/home.md) for more information.

## Labels applied to datasets from schemas

Adobe Experience Platform Data Governance allows you to manage customer data in order to ensure compliance with regulations, restrictions, and policies applicable to data use. The Data Governance framework allows you to apply usage labels to categorize data according to the usage policies that apply to that data. Labels can be applied to individual schemas, fields within those schemas, and entire individual datasets. When labels are applied directly to a schema, those labels are propagated to all existing and future datasets that are based on that schema.

>[!IMPORTANT]
>
>Labels can no longer be applied to fields at the dataset level. This workflow has been deprecated in favour of applying labels at the schema level. Any labels previously applied at the dataset object level will still be supported through the Experience Platform UI until 31st May 2024. To ensure that your labels are consistent across all schemas, any labels previously attached to fields at the dataset level must be migrated to the schema level by you over the coming year. See the section on [migrating previously applied labels](../../data-governance/e2e.md#migrate-labels) for instructions on how to do this.

See the [Data Governance overview](../../data-governance/home.md) for more information on the service. For steps on how to work with usage labels in [!DNL Experience Platform], refer to the following guides:

* [Manage labels in the UI](../../data-governance/labels/user-guide.md)
* [Manage dataset labels in the API](../../data-governance/labels/dataset-api.md)

## Datasets in downstream [!DNL Experience Platform] services

Once datasets have been used to store ingested data, those datasets are then used by downstream [!DNL Experience Platform] services to update customer profiles, gain insights through machine learning, and more.

The following is a list of downstream services that use datasets for various operations. Please review the documentation for each service for more information.

* [[!DNL Data Access API]](../../data-access/home.md): Allows you to access and download the contents of files stored within datasets.
* [Adobe Experience Platform Identity Service](../../identity-service/home.md): Bridges identities across devices and systems, linking datasets together based on the identity fields defined by the XDM schemas they conform to.
* [[!DNL Real-Time Customer Profile]](../../profile/home.md): Leverages [!DNL Identity Service] to create detailed customer profiles from your datasets in real time. [!DNL Real-Time Customer Profile] pulls data from the [!DNL Data Lake] and persists customer profiles in its own separate data store.
* [Adobe Experience Platform Segmentation Service](../../segmentation/home.md): Allows you to build segments and generate audiences from your [!DNL Real-Time Customer Profile] data. These audiences can then be exported to their own datasets within the [!DNL Data Lake].
* [Adobe Experience Platform Data Science Workspace](../../data-science-workspace/home.md): Uses machine learning and artificial intelligence to uncover insights in large datasets.
* [Adobe Experience Platform Query Service](../../query-service/home.md): Allows you to use standard SQL to query data in [!DNL Experience Platform], joining any datasets within the [!DNL Data Lake] and capturing query results as a new dataset for use in reporting, [!DNL Data Science Workspace], or [!DNL Real-Time Customer Profile].
* [Adobe Experience Platform Destinations Service](../../destinations/home.md): Allows you to [export datasets](/help/destinations/ui/export-datasets.md) to your desired cloud storage or email marketing destinations, for reporting or data science activities.

## Next steps

By reading this document, you have been introduced to the core uses of datasets in [!DNL Experience Platform], as well as the various [!DNL Experience Platform] services that utilize datasets. For more details on the many ways datasets are used in [!DNL Experience Platform], please review the service documentation linked throughout this overview.

For steps on how to interact with datasets within the [!DNL Experience Platform] UI, see the [datasets user guide](user-guide.md).
